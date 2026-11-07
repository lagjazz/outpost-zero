// Renderer, scene, camera, fog, studio environment map, global lighting and procedural aurora sky.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import type { AmbienceSpec } from './config';
import { PALETTE, WEATHER } from './config';

export const isSoftwareGl = (() => {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return true;
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
  } catch {
    return false;
  }
})();

export class Engine {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly fog: THREE.FogExp2;
  readonly moon: THREE.DirectionalLight;
  readonly rimLight: THREE.DirectionalLight;
  private skyTop!: THREE.Color;
  private skyBottom!: THREE.Color;
  private auroraColor!: THREE.Color;
  private skyUniforms!: {
    top: { value: THREE.Color };
    bottom: { value: THREE.Color };
    aurora: { value: THREE.Color };
    auroraInt: { value: number };
    uTime: { value: number };
  };
  private ambient!: THREE.AmbientLight;
  private hemi!: THREE.HemisphereLight;
  private moonDisc!: THREE.Mesh;
  private moonHalo!: THREE.Mesh;

  constructor(container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = !isSoftwareGl;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    // Procedural studio environment map for crisp PBR reflections on metals, ice, and glass
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    this.fog = new THREE.FogExp2(new THREE.Color(PALETTE.nightBottom), WEATHER.baseFog);
    this.scene.fog = this.fog;

    this.camera = new THREE.PerspectiveCamera(PLAYER_FOV_INIT, window.innerWidth / window.innerHeight, 0.05, 420);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera);

    this.ambient = new THREE.AmbientLight(new THREE.Color('#1b2a44'), 0.72);
    this.scene.add(this.ambient);
    this.hemi = new THREE.HemisphereLight(new THREE.Color('#2c3d5e'), new THREE.Color('#0a0e15'), 0.6);
    this.scene.add(this.hemi);

    // Key directional light (moon / low sun)
    this.moon = new THREE.DirectionalLight(new THREE.Color('#8fb2e8'), 0.9);
    this.moon.position.set(-42, 58, -28);
    this.moon.castShadow = !isSoftwareGl;
    this.moon.shadow.mapSize.set(1024, 1024);
    const c = this.moon.shadow.camera;
    c.left = -48;
    c.right = 48;
    c.top = 48;
    c.bottom = -48;
    c.near = 5;
    c.far = 150;
    this.moon.shadow.bias = -0.0008;
    this.moon.shadow.normalBias = 0.02;
    this.scene.add(this.moon);

    // Subtle cool rim/counter light for 3-point silhouette separation
    this.rimLight = new THREE.DirectionalLight(new THREE.Color('#38bdf8'), 0.32);
    this.rimLight.position.set(45, 28, 38);
    this.scene.add(this.rimLight);

    this.buildSky();

    window.addEventListener('resize', () => this.onResize());
  }

  private buildSky(): void {
    const geo = new THREE.SphereGeometry(330, 32, 20);
    this.skyUniforms = {
      top: { value: new THREE.Color(PALETTE.nightTop) },
      bottom: { value: new THREE.Color(PALETTE.nightBottom) },
      aurora: { value: new THREE.Color('#10b981') },
      auroraInt: { value: 0.4 },
      uTime: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vWorld = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 top;
        uniform vec3 bottom;
        uniform vec3 aurora;
        uniform float auroraInt;
        uniform float uTime;
        varying vec3 vWorld;

        void main() {
          vec3 dir = normalize(vWorld);
          float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
          vec3 col = mix(bottom, top, pow(h, 2.2));

          // Procedural aurora borealis ribbons in upper sky
          if (dir.y > 0.05) {
            float wave1 = sin(dir.x * 6.5 + dir.z * 4.2 + uTime * 0.35) * 0.5 + 0.5;
            float wave2 = sin(dir.x * 13.0 - dir.z * 9.5 - uTime * 0.52) * 0.5 + 0.5;
            float band = smoothstep(0.12, 0.45, dir.y) * (1.0 - smoothstep(0.55, 0.92, dir.y));
            float curtain = pow(wave1 * wave2, 2.2) * band * auroraInt;
            col += aurora * curtain * 0.85;
          }

          // Horizon atmospheric scatter rim
          float horizonGlow = pow(1.0 - abs(dir.y), 6.0) * 0.22;
          col += mix(bottom, aurora, 0.35) * horizonGlow;

          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.skyTop = this.skyUniforms.top.value;
    this.skyBottom = this.skyUniforms.bottom.value;
    this.auroraColor = this.skyUniforms.aurora.value;
    this.scene.add(new THREE.Mesh(geo, mat));

    // Celestial moon / eclipse disc in the sky along the directional light vector
    const moonGroup = new THREE.Group();
    moonGroup.position.set(-165, 215, -110);
    moonGroup.lookAt(0, 0, 0);
    this.moonDisc = new THREE.Mesh(
      new THREE.CircleGeometry(14, 28),
      new THREE.MeshBasicMaterial({ color: 0xdbeafe, fog: false, depthWrite: false }),
    );
    this.moonHalo = new THREE.Mesh(
      new THREE.RingGeometry(14.2, 26, 32),
      new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        fog: false,
        depthWrite: false,
      }),
    );
    moonGroup.add(this.moonDisc, this.moonHalo);
    this.scene.add(moonGroup);

    // Multi-layered starfield
    const starGeo = new THREE.BufferGeometry();
    const N = 650;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const c1 = new THREE.Color(0xdbeafe);
    const c2 = new THREE.Color(0xfef08a);
    const c3 = new THREE.Color(0xa5f3fc);
    for (let i = 0; i < N; i++) {
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(Math.random() * 0.92 + 0.06);
      const r = 305;
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.cos(p);
      pos[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
      const pick = i % 5 === 0 ? c2 : i % 3 === 0 ? c3 : c1;
      col[i * 3] = pick.r;
      col[i * 3 + 1] = pick.g;
      col[i * 3 + 2] = pick.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const starMat = new THREE.PointsMaterial({
      size: 1.6,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      fog: false,
      depthWrite: false,
    });
    this.scene.add(new THREE.Points(starGeo, starMat));
  }

  /** Re-tint sky, aurora, lights and fog for a level's time of day. */
  setAmbience(a: AmbienceSpec): void {
    this.skyTop.set(a.skyTop);
    this.skyBottom.set(a.skyBottom);
    this.auroraColor.set(a.auroraColor);
    this.skyUniforms.auroraInt.value = a.auroraIntensity;
    this.ambient.color.set(a.ambient);
    this.ambient.intensity = a.ambientInt;
    this.hemi.color.set(a.hemiSky);
    this.hemi.groundColor.set(a.hemiGround);
    this.hemi.intensity = a.hemiInt;
    this.moon.color.set(a.moon);
    this.moon.intensity = a.moonInt;
    this.fog.color.set(a.fog);
    (this.moonDisc.material as THREE.MeshBasicMaterial).color.set(a.moon);
    (this.moonHalo.material as THREE.MeshBasicMaterial).color.set(a.auroraColor);
  }

  setFog(blizzard: number, time = 0): void {
    this.skyUniforms.uTime.value = time;
    this.fog.density = WEATHER.baseFog + WEATHER.fogPerBlizzard * blizzard + WEATHER.fogOscillation * Math.sin(time * 0.4);
  }

  /** Software WebGL frame pacer per Three.js skill guidelines. */
  afterDraw(cb: () => void): number {
    const gl = this.renderer.getContext() as WebGL2RenderingContext;
    if (!gl || typeof gl.fenceSync !== 'function') {
      return window.setTimeout(cb, 80);
    }
    const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
    gl.flush();
    let timerId = 0;
    const poll = () => {
      const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
      if (state === gl.UNSIGNALED) {
        timerId = window.setTimeout(poll, 5);
      } else {
        if (sync) gl.deleteSync(sync);
        timerId = window.setTimeout(cb, 80);
      }
    };
    timerId = window.setTimeout(poll, 5);
    return timerId;
  }

  private onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}

const PLAYER_FOV_INIT = 75;
