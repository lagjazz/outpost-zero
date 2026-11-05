// Renderer, scene, camera, fog, global lighting and sky.
import * as THREE from 'three';
import type { AmbienceSpec } from './config';
import { PALETTE, WEATHER } from './config';

export class Engine {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly fog: THREE.FogExp2;
  readonly moon: THREE.DirectionalLight;
  private skyTop!: THREE.Color;
  private skyBottom!: THREE.Color;
  private ambient!: THREE.AmbientLight;
  private hemi!: THREE.HemisphereLight;

  constructor(container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.fog = new THREE.FogExp2(new THREE.Color(PALETTE.nightBottom), WEATHER.baseFog);
    this.scene.fog = this.fog;

    this.camera = new THREE.PerspectiveCamera(PLAYER_FOV_INIT, window.innerWidth / window.innerHeight, 0.05, 400);
    this.camera.rotation.order = 'YXZ';
    this.scene.add(this.camera); // camera children (viewmodel, muzzle flash) must be in the scene graph

    this.ambient = new THREE.AmbientLight(new THREE.Color('#1b2a44'), 0.7);
    this.scene.add(this.ambient);
    this.hemi = new THREE.HemisphereLight(new THREE.Color('#2c3d5e'), new THREE.Color('#0a0e15'), 0.55);
    this.scene.add(this.hemi);

    this.moon = new THREE.DirectionalLight(new THREE.Color('#8fb2e8'), 0.85);
    this.moon.position.set(-40, 55, -25);
    this.moon.castShadow = true;
    this.moon.shadow.mapSize.set(1024, 1024);
    const c = this.moon.shadow.camera;
    c.left = -45;
    c.right = 45;
    c.top = 45;
    c.bottom = -45;
    c.near = 5;
    c.far = 140;
    this.moon.shadow.bias = -0.0015;
    this.scene.add(this.moon);

    this.buildSky();

    window.addEventListener('resize', () => this.onResize());
  }

  private buildSky(): void {
    const geo = new THREE.SphereGeometry(320, 24, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        top: { value: new THREE.Color(PALETTE.nightTop) },
        bottom: { value: new THREE.Color(PALETTE.nightBottom) },
      },
      // captured for setAmbience — these Color instances are shared with the uniforms
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vWorld = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld;
        void main() {
          // bias toward bottom near the horizon so dusk/dawn tints read at eye level
          float h = clamp(vWorld.y / 320.0 * 0.5 + 0.5, 0.0, 1.0);
          gl_FragColor = vec4(mix(bottom, top, pow(h, 2.4)), 1.0);
        }`,
    });
    this.skyTop = mat.uniforms.top.value as THREE.Color;
    this.skyBottom = mat.uniforms.bottom.value as THREE.Color;
    this.scene.add(new THREE.Mesh(geo, mat));

    // stars
    const starGeo = new THREE.BufferGeometry();
    const N = 500;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(Math.random() * 0.92 + 0.06); // upper hemisphere bias
      const r = 300;
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.cos(p);
      pos[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xbfd4ff,
      size: 1.4,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.8,
      fog: false,
    });
    this.scene.add(new THREE.Points(starGeo, starMat));
  }

  /** Re-tint sky, lights and fog for a level's time of day. */
  setAmbience(a: AmbienceSpec): void {
    this.skyTop.set(a.skyTop);
    this.skyBottom.set(a.skyBottom);
    this.ambient.color.set(a.ambient);
    this.ambient.intensity = a.ambientInt;
    this.hemi.color.set(a.hemiSky);
    this.hemi.groundColor.set(a.hemiGround);
    this.hemi.intensity = a.hemiInt;
    this.moon.color.set(a.moon);
    this.moon.intensity = a.moonInt;
    this.fog.color.set(a.fog);
  }

  setFog(blizzard: number): void {
    this.fog.density = WEATHER.baseFog + WEATHER.fogPerBlizzard * blizzard + WEATHER.fogOscillation * Math.sin(performance.now() * 0.0004);
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
