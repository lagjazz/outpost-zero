var rl=Object.defineProperty;var ol=(s,e,t)=>e in s?rl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>ol(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="160",al=0,Po=1,cl=2,fc=1,pc=2,En=3,kn=0,Ht=1,Wt=2,On=0,Li=1,kt=2,Lo=3,Do=4,ll=5,Zn=100,hl=101,ul=102,Io=103,Uo=104,dl=200,fl=201,pl=202,ml=203,qr=204,Yr=205,gl=206,_l=207,vl=208,xl=209,Ml=210,yl=211,Sl=212,wl=213,El=214,bl=0,Tl=1,Al=2,Xs=3,Rl=4,Cl=5,Pl=6,Ll=7,mc=0,Dl=1,Il=2,zn=0,Ul=1,Nl=2,Fl=3,gc=4,Ol=5,zl=6,_c=300,Ii=301,Ui=302,$r=303,Kr=304,er=306,Jr=1e3,hn=1001,Zr=1002,zt=1003,No=1004,lr=1005,nn=1006,Bl=1007,as=1008,Bn=1009,kl=1010,Gl=1011,oo=1012,vc=1013,Un=1014,Nn=1015,cs=1016,xc=1017,Mc=1018,ei=1020,Hl=1021,un=1023,Vl=1024,Wl=1025,ti=1026,Ni=1027,Xl=1028,yc=1029,ql=1030,Sc=1031,wc=1033,hr=33776,ur=33777,dr=33778,fr=33779,Fo=35840,Oo=35841,zo=35842,Bo=35843,Ec=36196,ko=37492,Go=37496,Ho=37808,Vo=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,$o=37814,Ko=37815,Jo=37816,Zo=37817,jo=37818,Qo=37819,ea=37820,ta=37821,pr=36492,na=36494,ia=36495,Yl=36283,sa=36284,ra=36285,oa=36286,bc=3e3,ni=3001,$l=3200,Kl=3201,Tc=0,Jl=1,rn="",Rt="srgb",An="srgb-linear",ao="display-p3",tr="display-p3-linear",qs="linear",ct="srgb",Ys="rec709",$s="p3",ci=7680,aa=519,Zl=512,jl=513,Ql=514,Ac=515,eh=516,th=517,nh=518,ih=519,jr=35044,ca="300 es",Qr=1035,bn=2e3,Ks=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let la=1234567;const ts=Math.PI/180,Fi=180/Math.PI;function Tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function co(s,e){return(s%e+e)%e}function sh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function rh(s,e,t){return s!==e?(t-s)/(e-s):0}function ns(s,e,t){return(1-t)*s+t*e}function oh(s,e,t,n){return ns(s,e,1-Math.exp(-t*n))}function ah(s,e=1){return e-Math.abs(co(s,e*2)-e)}function ch(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function hh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function uh(s,e){return s+Math.random()*(e-s)}function dh(s){return s*(.5-Math.random())}function fh(s){s!==void 0&&(la=s);let e=la+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ph(s){return s*ts}function mh(s){return s*Fi}function eo(s){return(s&s-1)===0&&s!==0}function gh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Js(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _h(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:ts,RAD2DEG:Fi,generateUUID:Tn,clamp:bt,euclideanModulo:co,mapLinear:sh,inverseLerp:rh,lerp:ns,damp:oh,pingpong:ah,smoothstep:ch,smootherstep:lh,randInt:hh,randFloat:uh,randFloatSpread:dh,seededRandom:fh,degToRad:ph,radToDeg:mh,isPowerOfTwo:eo,ceilPowerOfTwo:gh,floorPowerOfTwo:Js,setQuaternionFromProperEuler:_h,normalize:et,denormalize:gn};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,r,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],v=i[1],M=i[4],y=i[7],C=i[2],b=i[5],R=i[8];return r[0]=o*_+a*v+c*C,r[3]=o*m+a*M+c*b,r[6]=o*d+a*y+c*R,r[1]=l*_+h*v+u*C,r[4]=l*m+h*M+u*b,r[7]=l*d+h*y+u*R,r[2]=f*_+p*v+g*C,r[5]=f*m+p*M+g*b,r[8]=f*d+p*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mr.makeScale(e,t)),this}rotate(e){return this.premultiply(mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new $e;function Rc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vh(){const s=Zs("canvas");return s.style.display="block",s}const ha={};function is(s){s in ha||(ha[s]=!0,console.warn(s))}const ua=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),da=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ds={[An]:{transfer:qs,primaries:Ys,toReference:s=>s,fromReference:s=>s},[Rt]:{transfer:ct,primaries:Ys,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[tr]:{transfer:qs,primaries:$s,toReference:s=>s.applyMatrix3(da),fromReference:s=>s.applyMatrix3(ua)},[ao]:{transfer:ct,primaries:$s,toReference:s=>s.convertSRGBToLinear().applyMatrix3(da),fromReference:s=>s.applyMatrix3(ua).convertLinearToSRGB()}},xh=new Set([An,tr]),tt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!xh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ds[e].toReference,i=ds[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ds[s].primaries},getTransfer:function(s){return s===rn?qs:ds[s].transfer}};function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let li;class Cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=Zs("canvas")),li.width=e.width,li.height=e.height;const n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mh=0;class Pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_r(i[o].image)):r.push(_r(i[o]))}else r=_r(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _r(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Xt extends zi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=hn,i=hn,r=nn,o=as,a=un,c=Bn,l=Xt.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Tn(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ni?Rt:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?ni:bc}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ni?Rt:rn}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=_c;Xt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,y=(p+1)/2,C=(d+1)/2,b=(h+f)/4,R=(u+_)/4,N=(g+m)/4;return M>y&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=R/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=N/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ni?Rt:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lc extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wh extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*_,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),b=Math.atan2(C,d*v);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}const y=a*v;if(c=c*m+f*y,l=l*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vr.copy(this).projectOnVector(e),this.sub(vr)}reflect(e){return this.sub(vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new A,fa=new Bi;class oi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),ps.subVectors(this.max,Vi),hi.subVectors(e.a,Vi),ui.subVectors(e.b,Vi),di.subVectors(e.c,Vi),Cn.subVectors(ui,hi),Pn.subVectors(di,ui),Xn.subVectors(hi,di);let t=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Xn.z,Xn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Xn.z,0,-Xn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Xn.y,Xn.x,0];return!xr(t,hi,ui,di,ps)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,hi,ui,di,ps))?!1:(ms.crossVectors(Cn,Pn),t=[ms.x,ms.y,ms.z],xr(t,hi,ui,di,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new A,new A,new A,new A,new A,new A,new A,new A],on=new A,fs=new oi,hi=new A,ui=new A,di=new A,Cn=new A,Pn=new A,Xn=new A,Vi=new A,ps=new A,ms=new A,qn=new A;function xr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){qn.fromArray(s,r);const a=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),c=e.dot(qn),l=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Eh=new oi,Wi=new A,Mr=new A;class ki{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Mr)),this.expandByPoint(Wi.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new A,yr=new A,gs=new A,Ln=new A,Sr=new A,_s=new A,wr=new A;class lo{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yr.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=Ln.dot(this.direction),c=-Ln.dot(gs),l=Ln.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yr).addScaledVector(gs,f),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,r){Sr.subVectors(t,e),_s.subVectors(n,e),wr.crossVectors(Sr,_s);let o=this.direction.dot(wr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,e);const c=a*this.direction.dot(_s.crossVectors(Ln,_s));if(c<0)return null;const l=a*this.direction.dot(Sr.cross(Ln));if(l<0||c+l>o)return null;const h=-a*Ln.dot(wr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,r,o,a,c,l,h,u,f,p,g,_,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,p,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),r=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bh,e,Th)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Dn.crossVectors(n,Kt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Dn.crossVectors(n,Kt)),Dn.normalize(),vs.crossVectors(Kt,Dn),i[0]=Dn.x,i[4]=vs.x,i[8]=Kt.x,i[1]=Dn.y,i[5]=vs.y,i[9]=Kt.y,i[2]=Dn.z,i[6]=vs.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],M=n[7],y=n[11],C=n[15],b=i[0],R=i[4],N=i[8],x=i[12],S=i[1],I=i[5],F=i[9],J=i[13],P=i[2],D=i[6],V=i[10],K=i[14],Y=i[3],$=i[7],q=i[11],ie=i[15];return r[0]=o*b+a*S+c*P+l*Y,r[4]=o*R+a*I+c*D+l*$,r[8]=o*N+a*F+c*V+l*q,r[12]=o*x+a*J+c*K+l*ie,r[1]=h*b+u*S+f*P+p*Y,r[5]=h*R+u*I+f*D+p*$,r[9]=h*N+u*F+f*V+p*q,r[13]=h*x+u*J+f*K+p*ie,r[2]=g*b+_*S+m*P+d*Y,r[6]=g*R+_*I+m*D+d*$,r[10]=g*N+_*F+m*V+d*q,r[14]=g*x+_*J+m*K+d*ie,r[3]=v*b+M*S+y*P+C*Y,r[7]=v*R+M*I+y*D+C*$,r[11]=v*N+M*F+y*V+C*q,r[15]=v*x+M*J+y*K+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,M=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,y=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,C=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,b=t*v+n*M+i*y+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*R,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*d+n*c*d)*R,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*R,e[4]=M*R,e[5]=(h*m*r-g*f*r+g*i*p-t*m*p-h*i*d+t*f*d)*R,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*d-t*c*d)*R,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*p+t*c*p)*R,e[8]=y*R,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*d-t*u*d)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*d+t*a*d)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*R,e[12]=C*R,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*R,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,v=c*l,M=c*h,y=c*u,C=n.x,b=n.y,R=n.z;return i[0]=(1-(_+d))*C,i[1]=(p+y)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(p-y)*b,i[5]=(1-(f+d))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+M)*R,i[9]=(m-v)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=fi.set(i[0],i[1],i[2]).length();const o=fi.set(i[4],i[5],i[6]).length(),a=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const l=1/r,h=1/o,u=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=bn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(a===bn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ks)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=bn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,p=(n+i)*h;let g,_;if(a===bn)g=(o+r)*u,_=-2*u;else if(a===Ks)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new A,an=new nt,bh=new A(0,0,0),Th=new A(1,1,1),Dn=new A,vs=new A,Kt=new A,pa=new nt,ma=new Bi;class nr{constructor(e=0,t=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ma.setFromEuler(this),this.setFromQuaternion(ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ah=0;const ga=new A,pi=new Bi,yn=new nt,xs=new A,Xi=new A,Rh=new A,Ch=new Bi,_a=new A(1,0,0),va=new A(0,1,0),xa=new A(0,0,1),Ph={type:"added"},Lh={type:"removed"};class at extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new A,t=new nr,n=new Bi,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new $e}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(xa,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Xi,xs,this.up):yn.lookAt(xs,Xi,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(yn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,Rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new A(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new A,Sn=new A,Er=new A,wn=new A,mi=new A,gi=new A,Ma=new A,br=new A,Tr=new A,Ar=new A;let Ms=!1;class sn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),Sn.subVectors(n,t),Er.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Sn),c=cn.dot(Er),l=Sn.dot(Sn),h=Sn.dot(Er),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(e,t,n,i,r,o,a,c){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Sn.subVectors(e,t),cn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),cn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ms=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;mi.subVectors(i,n),gi.subVectors(r,n),br.subVectors(e,n);const c=mi.dot(br),l=gi.dot(br);if(c<=0&&l<=0)return t.copy(n);Tr.subVectors(e,i);const h=mi.dot(Tr),u=gi.dot(Tr);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(mi,o);Ar.subVectors(e,r);const p=mi.dot(Ar),g=gi.dot(Ar);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(gi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ma.subVectors(r,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Ma,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Rr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Z{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=co(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rr(o,r,e+1/3),this.g=Rr(o,r,e),this.b=Rr(o,r,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return tt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(bt(Dt.r*255,0,255))*65536+Math.round(bt(Dt.g*255,0,255))*256+Math.round(bt(Dt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,r=Dt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Rt){tt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(ys);const n=ns(In.h,ys.h,t),i=ns(In.s,ys.s,t),r=ns(In.l,ys.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Z;Z.NAMES=Dc;let Dh=0;class ai extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Li,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Yr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yt extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new A,Ss=new ve;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jr&&(e.usage=this.usage),e}}class Ic extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ih=0;const en=new nt,Cr=new at,_i=new A,Jt=new oi,qi=new oi,Et=new A;class Ct extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Uc:Ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Jt.min,qi.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,qi.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(qi.min),Jt.expandByPoint(qi.max))}Jt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(_i.fromBufferAttribute(e,l),Et.add(_i)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new A,h[S]=new A;const u=new A,f=new A,p=new A,g=new ve,_=new ve,m=new ve,d=new A,v=new A;function M(S,I,F){u.fromArray(i,S*3),f.fromArray(i,I*3),p.fromArray(i,F*3),g.fromArray(o,S*2),_.fromArray(o,I*2),m.fromArray(o,F*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);const J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(J),v.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(J),l[S].add(d),l[I].add(d),l[F].add(d),h[S].add(v),h[I].add(v),h[F].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,I=y.length;S<I;++S){const F=y[S],J=F.start,P=F.count;for(let D=J,V=J+P;D<V;D+=3)M(n[D+0],n[D+1],n[D+2])}const C=new A,b=new A,R=new A,N=new A;function x(S){R.fromArray(r,S*3),N.copy(R);const I=l[S];C.copy(I),C.sub(R.multiplyScalar(R.dot(I))).normalize(),b.crossVectors(N,I);const J=b.dot(h[S])<0?-1:1;c[S*4]=C.x,c[S*4+1]=C.y,c[S*4+2]=C.z,c[S*4+3]=J}for(let S=0,I=y.length;S<I;++S){const F=y[S],J=F.start,P=F.count;for(let D=J,V=J+P;D<V;D+=3)x(n[D+0]),x(n[D+1]),x(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new qt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new nt,Yn=new lo,ws=new ki,Sa=new A,vi=new A,xi=new A,Mi=new A,Pr=new A,Es=new A,bs=new ve,Ts=new ve,As=new ve,wa=new A,Ea=new A,ba=new A,Rs=new A,Cs=new A;class O extends at{constructor(e=new Ct,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Pr.fromBufferAttribute(u,e),o?Es.addScaledVector(Pr,h):Es.addScaledVector(Pr.sub(t),h))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(ws.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(ws,Sa)===null||Yn.origin.distanceToSquared(Sa)>(e.far-e.near)**2))&&(ya.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(ya),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=M;y<C;y+=3){const b=a.getX(y),R=a.getX(y+1),N=a.getX(y+2);i=Ps(this,d,e,n,l,h,u,b,R,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=Ps(this,o,e,n,l,h,u,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=M;y<C;y+=3){const b=y,R=y+1,N=y+2;i=Ps(this,d,e,n,l,h,u,b,R,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,M=m+1,y=m+2;i=Ps(this,o,e,n,l,h,u,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Uh(s,e,t,n,i,r,o,a){let c;if(e.side===Ht?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===kn,a),c===null)return null;Cs.copy(a),Cs.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Cs);return l<t.near||l>t.far?null:{distance:l,point:Cs.clone(),object:s}}function Ps(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,vi),s.getVertexPosition(c,xi),s.getVertexPosition(l,Mi);const h=Uh(s,e,t,n,vi,xi,Mi,Rs);if(h){i&&(bs.fromBufferAttribute(i,a),Ts.fromBufferAttribute(i,c),As.fromBufferAttribute(i,l),h.uv=sn.getInterpolation(Rs,vi,xi,Mi,bs,Ts,As,new ve)),r&&(bs.fromBufferAttribute(r,a),Ts.fromBufferAttribute(r,c),As.fromBufferAttribute(r,l),h.uv1=sn.getInterpolation(Rs,vi,xi,Mi,bs,Ts,As,new ve),h.uv2=h.uv1),o&&(wa.fromBufferAttribute(o,a),Ea.fromBufferAttribute(o,c),ba.fromBufferAttribute(o,l),h.normal=sn.getInterpolation(Rs,vi,xi,Mi,wa,Ea,ba,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new A,materialIndex:0};sn.getNormal(vi,xi,Mi,u.normal),h.face=u}return h}class re extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(_,m,d,v,M,y,C,b,R,N,x){const S=y/R,I=C/N,F=y/2,J=C/2,P=b/2,D=R+1,V=N+1;let K=0,Y=0;const $=new A;for(let q=0;q<V;q++){const ie=q*I-J;for(let ce=0;ce<D;ce++){const X=ce*S-F;$[_]=X*v,$[m]=ie*M,$[d]=P,l.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(ce/R),u.push(1-q/N),K+=1}}for(let q=0;q<N;q++)for(let ie=0;ie<R;ie++){const ce=f+ie+D*q,X=f+ie+D*(q+1),j=f+(ie+1)+D*(q+1),xe=f+(ie+1)+D*q;c.push(ce,X,xe),c.push(X,j,xe),Y+=6}a.addGroup(p,Y,x),p+=Y,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new re(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=Oi(s[t]);for(const i in n)e[i]=n[i]}return e}function Nh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Nc(s){return s.getRenderTarget()===null?s.outputColorSpace:tt.workingColorSpace}const Fh={clone:Oi,merge:Ot};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fc extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Fc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Si=1;class Bh extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(yi,Si,e,t);i.layers=this.layers,this.add(i);const r=new Vt(yi,Si,e,t);r.layers=this.layers,this.add(r);const o=new Vt(yi,Si,e,t);o.layers=this.layers,this.add(o);const a=new Vt(yi,Si,e,t);a.layers=this.layers,this.add(a);const c=new Vt(yi,Si,e,t);c.layers=this.layers,this.add(c);const l=new Vt(yi,Si,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oc extends Xt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ni?Rt:rn),this.texture=new Oc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new re(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:On});r.uniforms.tEquirect.value=t;const o=new O(i,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=nn),new Bh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Lr=new A,Gh=new A,Hh=new $e;class Kn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Lr.subVectors(n,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hh.getNormalMatrix(e),i=this.coplanarPoint(Lr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ki,Ls=new A;class uo{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],v=i[13],M=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,m-p,y-d).normalize(),n[1].setComponents(c+r,f+l,m+p,y+d).normalize(),n[2].setComponents(c+o,f+h,m+g,y+v).normalize(),n[3].setComponents(c-o,f-h,m-g,y-v).normalize(),n[4].setComponents(c-a,f-u,m-_,y-M).normalize(),t===bn)n[5].setComponents(c+a,f+u,m+_,y+M).normalize();else if(t===Ks)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ls.x=i.normal.x>0?e.max.x:e.min.x,Ls.y=i.normal.y>0?e.max.y:e.min.y,Ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){const f=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),p.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];t?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class ri extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const v=d*f-o;for(let M=0;M<l;M++){const y=M*u-r;g.push(y,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){const M=v+l*d,y=v+l*(d+1),C=v+1+l*(d+1),b=v+1+l*d;p.push(M,y,b),p.push(y,C,b)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,su=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Du=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$d=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:$h,alphatest_pars_fragment:Kh,aomap_fragment:Jh,aomap_pars_fragment:Zh,batching_pars_vertex:jh,batching_vertex:Qh,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:su,clipping_planes_fragment:ru,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:au,clipping_planes_vertex:cu,color_fragment:lu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:vu,emissivemap_pars_fragment:xu,colorspace_fragment:Mu,colorspace_pars_fragment:yu,envmap_fragment:Su,envmap_common_pars_fragment:wu,envmap_pars_fragment:Eu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Ou,envmap_vertex:Tu,fog_vertex:Au,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_fragment:Du,lightmap_pars_fragment:Iu,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:zu,lights_toon_pars_fragment:Bu,lights_phong_fragment:ku,lights_phong_pars_fragment:Gu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Vu,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:qu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:Ju,map_fragment:Zu,map_pars_fragment:ju,map_particle_fragment:Qu,map_particle_pars_fragment:ed,metalnessmap_fragment:td,metalnessmap_pars_fragment:nd,morphcolor_vertex:id,morphnormal_vertex:sd,morphtarget_pars_vertex:rd,morphtarget_vertex:od,normal_fragment_begin:ad,normal_fragment_maps:cd,normal_pars_fragment:ld,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:xd,project_vertex:Md,dithering_fragment:yd,dithering_pars_fragment:Sd,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Td,shadowmap_vertex:Ad,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Dd,specularmap_fragment:Id,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:zd,uv_pars_fragment:Bd,uv_pars_vertex:kd,uv_vertex:Gd,worldpos_vertex:Hd,background_vert:Vd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:Yd,cube_frag:$d,depth_vert:Kd,depth_frag:Jd,distanceRGBA_vert:Zd,distanceRGBA_frag:jd,equirect_vert:Qd,equirect_frag:ef,linedashed_vert:tf,linedashed_frag:nf,meshbasic_vert:sf,meshbasic_frag:rf,meshlambert_vert:of,meshlambert_frag:af,meshmatcap_vert:cf,meshmatcap_frag:lf,meshnormal_vert:hf,meshnormal_frag:uf,meshphong_vert:df,meshphong_frag:ff,meshphysical_vert:pf,meshphysical_frag:mf,meshtoon_vert:gf,meshtoon_frag:_f,points_vert:vf,points_frag:xf,shadow_vert:Mf,shadow_frag:yf,sprite_vert:Sf,sprite_frag:wf},fe={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},mn={basic:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Z(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ot([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ot([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ot([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Z(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ot([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ot([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ot([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ot([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ot([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ot([fe.common,fe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ot([fe.lights,fe.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};mn.physical={uniforms:Ot([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ds={r:0,b:0,g:0};function Ef(s,e,t,n,i,r,o){const a=new Z(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let v=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?t:e).get(M)),M===null?_(a,c):M&&M.isColor&&(_(M,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===er)?(h===void 0&&(h=new O(new re(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Oi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,(u!==M||f!==M.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new O(new ri(2,2),new Gn({name:"BackgroundMaterial",uniforms:Oi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Ds,Nc(s)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function bf(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(P,D,V,K,Y){let $=!1;if(o){const q=_(K,V,D);l!==q&&(l=q,p(l.object)),$=d(P,K,V,Y),$&&v(P,K,V,Y)}else{const q=D.wireframe===!0;(l.geometry!==K.id||l.program!==V.id||l.wireframe!==q)&&(l.geometry=K.id,l.program=V.id,l.wireframe=q,$=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,N(P,D,V,K),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,D,V){const K=V.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let $=Y[D.id];$===void 0&&($={},Y[D.id]=$);let q=$[K];return q===void 0&&(q=m(f()),$[K]=q),q}function m(P){const D=[],V=[],K=[];for(let Y=0;Y<i;Y++)D[Y]=0,V[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:K,object:P,attributes:{},index:null}}function d(P,D,V,K){const Y=l.attributes,$=D.attributes;let q=0;const ie=V.getAttributes();for(const ce in ie)if(ie[ce].location>=0){const j=Y[ce];let xe=$[ce];if(xe===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),j===void 0||j.attribute!==xe||xe&&j.data!==xe.data)return!0;q++}return l.attributesNum!==q||l.index!==K}function v(P,D,V,K){const Y={},$=D.attributes;let q=0;const ie=V.getAttributes();for(const ce in ie)if(ie[ce].location>=0){let j=$[ce];j===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const xe={};xe.attribute=j,j&&j.data&&(xe.data=j.data),Y[ce]=xe,q++}l.attributes=Y,l.attributesNum=q,l.index=K}function M(){const P=l.newAttributes;for(let D=0,V=P.length;D<V;D++)P[D]=0}function y(P){C(P,0)}function C(P,D){const V=l.newAttributes,K=l.enabledAttributes,Y=l.attributeDivisors;V[P]=1,K[P]===0&&(s.enableVertexAttribArray(P),K[P]=1),Y[P]!==D&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),Y[P]=D)}function b(){const P=l.newAttributes,D=l.enabledAttributes;for(let V=0,K=D.length;V<K;V++)D[V]!==P[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function R(P,D,V,K,Y,$,q){q===!0?s.vertexAttribIPointer(P,D,V,Y,$):s.vertexAttribPointer(P,D,V,K,Y,$)}function N(P,D,V,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Y=K.attributes,$=V.getAttributes(),q=D.defaultAttributeValues;for(const ie in $){const ce=$[ie];if(ce.location>=0){let X=Y[ie];if(X===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const j=X.normalized,xe=X.itemSize,be=t.get(X);if(be===void 0)continue;const we=be.buffer,Fe=be.type,Oe=be.bytesPerElement,Re=n.isWebGL2===!0&&(Fe===s.INT||Fe===s.UNSIGNED_INT||X.gpuType===vc);if(X.isInterleavedBufferAttribute){const Je=X.data,z=Je.stride,At=X.offset;if(Je.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ce.locationSize;Pe++)C(ce.location+Pe,Je.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let Pe=0;Pe<ce.locationSize;Pe++)y(ce.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Pe=0;Pe<ce.locationSize;Pe++)R(ce.location+Pe,xe/ce.locationSize,Fe,j,z*Oe,(At+xe/ce.locationSize*Pe)*Oe,Re)}else{if(X.isInstancedBufferAttribute){for(let Je=0;Je<ce.locationSize;Je++)C(ce.location+Je,X.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Je=0;Je<ce.locationSize;Je++)y(ce.location+Je);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Je=0;Je<ce.locationSize;Je++)R(ce.location+Je,xe/ce.locationSize,Fe,j,xe*Oe,xe/ce.locationSize*Je*Oe,Re)}}else if(q!==void 0){const j=q[ie];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(ce.location,j);break;case 3:s.vertexAttrib3fv(ce.location,j);break;case 4:s.vertexAttrib4fv(ce.location,j);break;default:s.vertexAttrib1fv(ce.location,j)}}}}b()}function x(){F();for(const P in a){const D=a[P];for(const V in D){const K=D[V];for(const Y in K)g(K[Y].object),delete K[Y];delete D[V]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;const D=a[P.id];for(const V in D){const K=D[V];for(const Y in K)g(K[Y].object),delete K[Y];delete D[V]}delete a[P.id]}function I(P){for(const D in a){const V=a[D];if(V[P.id]===void 0)continue;const K=V[P.id];for(const Y in K)g(K[Y].object),delete K[Y];delete V[P.id]}}function F(){J(),h=!0,l!==c&&(l=c,p(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:F,resetDefaultState:J,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:y,disableUnusedAttributes:b}}function Tf(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Af(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,y=o||e.has("OES_texture_float"),C=M&&y,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:b}}function Rf(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Kn,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,M=v*4;let y=d.clippingState||null;c.value=y,y=h(g,f,M,p);for(let C=0;C!==M;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Cf(s){let e=new WeakMap;function t(o,a){return a===$r?o.mapping=Ii:a===Kr&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$r||a===Kr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new kh(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Bc extends Fc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,Ta=[.125,.215,.35,.446,.526,.582],jn=20,Dr=new Bc,Aa=new Z;let Ir=null,Ur=0,Nr=0;const Jn=(1+Math.sqrt(5))/2,wi=1/Jn,Ra=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Jn,wi),new A(0,Jn,-wi),new A(wi,0,Jn),new A(-wi,0,Jn),new A(Jn,wi,0),new A(-Jn,wi,0)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Da(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=La(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Ur,Nr),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:cs,format:un,colorSpace:An,depthBuffer:!1},i=Pa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pf(r)),this._blurMaterial=Lf(r,e,t)}return i}_compileMaterial(e){const t=new O(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,i){const a=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Aa),h.toneMapping=zn,h.autoClear=!1;const p=new Yt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new O(new re,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Aa),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const M=this._cubeSize;Is(i,v*M,d>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ii||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Da()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=La());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ra[(i-1)%Ra.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new O(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const d=[];let v=0;for(let R=0;R<jn;++R){const N=R/_,x=Math.exp(-N*N/2);d.push(x),R===0?v+=x:R<m&&(v+=2*x)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[i],C=3*y*(i>M-Ci?i-M+Ci:0),b=4*(this._cubeSize-y);Is(t,C,b,3*y,2*y),c.setRenderTarget(t),c.render(u,Dr)}}function Pf(s){const e=[],t=[],n=[];let i=s;const r=s-Ci+1+Ta.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ci?c=Ta[o-s+Ci-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,N=b>2?0:-1,x=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];v.set(x,_*g*b),M.set(f,m*g*b);const S=[b,b,b,b,b,b];y.set(S,d*g*b)}const C=new Ct;C.setAttribute("position",new qt(v,_)),C.setAttribute("uv",new qt(M,m)),C.setAttribute("faceIndex",new qt(y,d)),e.push(C),i>Ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pa(s,e,t){const n=new si(s,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Lf(s,e,t){const n=new Float32Array(jn),i=new A(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function La(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Da(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function fo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Df(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$r||c===Kr,h=c===Ii||c===Ui;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ca(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ca(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function If(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Uf(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,y=v.length;M<y;M+=3){const C=v[M+0],b=v[M+1],R=v[M+2];f.push(C,b,b,R,R,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const C=M+0,b=M+1,R=M+2;f.push(C,b,b,R,R,C)}}else return;const m=new(Rc(f)?Uc:Ic)(f,1);m.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Nf(s,e,t,n){const i=n.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){s.drawElements(r,g,a,p*c),t.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,_),t.update(g,r,_)}function f(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Ff(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Of(s,e){return s[0]-e[0]}function zf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Bf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let D=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var p=D;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let x=0;M===!0&&(x=1),y===!0&&(x=2),C===!0&&(x=3);let S=h.attributes.position.count*x,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const F=new Float32Array(S*I*4*_),J=new Lc(F,S,I,_);J.type=Nn,J.needsUpdate=!0;const P=x*4;for(let V=0;V<_;V++){const K=b[V],Y=R[V],$=N[V],q=S*I*4*V;for(let ie=0;ie<K.count;ie++){const ce=ie*P;M===!0&&(o.fromBufferAttribute(K,ie),F[q+ce+0]=o.x,F[q+ce+1]=o.y,F[q+ce+2]=o.z,F[q+ce+3]=0),y===!0&&(o.fromBufferAttribute(Y,ie),F[q+ce+4]=o.x,F[q+ce+5]=o.y,F[q+ce+6]=o.z,F[q+ce+7]=0),C===!0&&(o.fromBufferAttribute($,ie),F[q+ce+8]=o.x,F[q+ce+9]=o.y,F[q+ce+10]=o.z,F[q+ce+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:J,size:new ve(S,I)},r.set(h,m),h.addEventListener("dispose",D)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const v=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const C=_[y];C[0]=y,C[1]=f[y]}_.sort(zf);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Of);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const C=a[y],b=C[0],R=C[1];b!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+y)!==m[b]&&h.setAttribute("morphTarget"+y,m[b]),d&&h.getAttribute("morphNormal"+y)!==d[b]&&h.setAttribute("morphNormal"+y,d[b]),i[y]=R,v+=R):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const M=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function kf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class kc extends Xt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:ti,h!==ti&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=Un),n===void 0&&h===Ni&&(n=ei),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gc=new Xt,Hc=new kc(1,1);Hc.compareFunction=Ac;const Vc=new Lc,Wc=new wh,Xc=new Oc,Ia=[],Ua=[],Na=new Float32Array(16),Fa=new Float32Array(9),Oa=new Float32Array(4);function Gi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ia[i];if(r===void 0&&(r=new Float32Array(i),Ia[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ir(s,e){let t=Ua[e];t===void 0&&(t=new Int32Array(e),Ua[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Gf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),yt(t,e)}}function Vf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),yt(t,e)}}function Wf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),yt(t,e)}}function Xf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Oa.set(n),s.uniformMatrix2fv(this.addr,!1,Oa),yt(t,n)}}function qf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Fa.set(n),s.uniformMatrix3fv(this.addr,!1,Fa),yt(t,n)}}function Yf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Na.set(n),s.uniformMatrix4fv(this.addr,!1,Na),yt(t,n)}}function $f(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Kf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),yt(t,e)}}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),yt(t,e)}}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),yt(t,e)}}function jf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),yt(t,e)}}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),yt(t,e)}}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),yt(t,e)}}function np(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Hc:Gc;t.setTexture2D(e||r,i)}function ip(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wc,i)}function sp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xc,i)}function rp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vc,i)}function op(s){switch(s){case 5126:return Gf;case 35664:return Hf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return $f;case 35667:case 35671:return Kf;case 35668:case 35672:return Jf;case 35669:case 35673:return Zf;case 5125:return jf;case 36294:return Qf;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function ap(s,e){s.uniform1fv(this.addr,e)}function cp(s,e){const t=Gi(e,this.size,2);s.uniform2fv(this.addr,t)}function lp(s,e){const t=Gi(e,this.size,3);s.uniform3fv(this.addr,t)}function hp(s,e){const t=Gi(e,this.size,4);s.uniform4fv(this.addr,t)}function up(s,e){const t=Gi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dp(s,e){const t=Gi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fp(s,e){const t=Gi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pp(s,e){s.uniform1iv(this.addr,e)}function mp(s,e){s.uniform2iv(this.addr,e)}function gp(s,e){s.uniform3iv(this.addr,e)}function _p(s,e){s.uniform4iv(this.addr,e)}function vp(s,e){s.uniform1uiv(this.addr,e)}function xp(s,e){s.uniform2uiv(this.addr,e)}function Mp(s,e){s.uniform3uiv(this.addr,e)}function yp(s,e){s.uniform4uiv(this.addr,e)}function Sp(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gc,r[o])}function wp(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Wc,r[o])}function Ep(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Xc,r[o])}function bp(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Vc,r[o])}function Tp(s){switch(s){case 5126:return ap;case 35664:return cp;case 35665:return lp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return bp}}class Ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=op(t.type)}}class Rp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tp(t.type)}}class Cp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function za(s,e){s.seq.push(e),s.map[e.id]=e}function Pp(s,e,t){const n=s.name,i=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),o=Fr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){za(t,l===void 0?new Ap(a,s,e):new Rp(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Cp(a),za(t,u)),t=u}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Pp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ba(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Lp=37297;let Dp=0;function Ip(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Up(s){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(s);let n;switch(e===t?n="":e===$s&&t===Ys?n="LinearDisplayP3ToLinearSRGB":e===Ys&&t===$s&&(n="LinearSRGBToLinearDisplayP3"),s){case An:case tr:return[n,"LinearTransferOETF"];case Rt:case ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ka(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ip(s.getShaderSource(e),o)}else return i}function Np(s,e){const t=Up(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fp(s,e){let t;switch(e){case Ul:t="Linear";break;case Nl:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case gc:t="ACESFilmic";break;case zl:t="AgX";break;case Ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Op(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function zp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function Bp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Pi(s){return s!==""}function Ga(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ha(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(s){return s.replace(Gp,Vp)}const Hp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vp(s,e){let t=Xe[e];if(t===void 0){const n=Hp.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return to(t)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(s){return s.replace(Wp,Xp)}function Xp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function Yp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case Ui:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $p(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function Kp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Dl:e="ENVMAP_BLENDING_MIX";break;case Il:e="ENVMAP_BLENDING_ADD";break}return e}function Jp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zp(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qp(t),l=Yp(t),h=$p(t),u=Kp(t),f=Jp(t),p=t.isWebGL2?"":Op(t),g=zp(t),_=Bp(r),m=i.createProgram();let d,v,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pi).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Pi).join(`
`),v.length>0&&(v+=`
`)):(d=[Wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),v=[p,Wa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==zn?Fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Np("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=to(o),o=Ga(o,t),o=Ha(o,t),a=to(a),a=Ga(a,t),a=Ha(a,t),o=Va(o),a=Va(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=M+d+o,C=M+v+a,b=Ba(i,i.VERTEX_SHADER,y),R=Ba(i,i.FRAGMENT_SHADER,C);i.attachShader(m,b),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function N(F){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),D=i.getShaderInfoLog(R).trim();let V=!0,K=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,R);else{const Y=ka(i,b,"vertex"),$=ka(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+Y+`
`+$)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||D==="")&&(K=!1);K&&(F.diagnostics={runnable:V,programLog:J,vertexShader:{log:P,prefix:d},fragmentShader:{log:D,prefix:v}})}i.deleteShader(b),i.deleteShader(R),x=new Vs(i,m),S=kp(i,m)}let x;this.getUniforms=function(){return x===void 0&&N(this),x};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,Lp)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=R,this}let jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new em(e),t.set(e,n)),n}}class em{constructor(e){this.id=jp++,this.code=e,this.usedTimes=0}}function tm(s,e,t,n,i,r,o){const a=new ho,c=new Qp,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,S,I,F,J){const P=F.fog,D=J.geometry,V=x.isMeshStandardMaterial?F.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),Y=K&&K.mapping===er?K.image.height:null,$=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ie=q!==void 0?q.length:0;let ce=0;D.morphAttributes.position!==void 0&&(ce=1),D.morphAttributes.normal!==void 0&&(ce=2),D.morphAttributes.color!==void 0&&(ce=3);let X,j,xe,be;if($){const Ut=mn[$];X=Ut.vertexShader,j=Ut.fragmentShader}else X=x.vertexShader,j=x.fragmentShader,c.update(x),xe=c.getVertexShaderID(x),be=c.getFragmentShaderID(x);const we=s.getRenderTarget(),Fe=J.isInstancedMesh===!0,Oe=J.isBatchedMesh===!0,Re=!!x.map,Je=!!x.matcap,z=!!K,At=!!x.aoMap,Pe=!!x.lightMap,Le=!!x.bumpMap,Se=!!x.normalMap,Qe=!!x.displacementMap,ke=!!x.emissiveMap,T=!!x.metalnessMap,w=!!x.roughnessMap,k=x.anisotropy>0,Q=x.clearcoat>0,ee=x.iridescence>0,se=x.sheen>0,Ee=x.transmission>0,pe=k&&!!x.anisotropyMap,ye=Q&&!!x.clearcoatMap,Te=Q&&!!x.clearcoatNormalMap,He=Q&&!!x.clearcoatRoughnessMap,te=ee&&!!x.iridescenceMap,_e=ee&&!!x.iridescenceThicknessMap,ue=se&&!!x.sheenColorMap,he=se&&!!x.sheenRoughnessMap,oe=!!x.specularMap,de=!!x.specularColorMap,Ce=!!x.specularIntensityMap,Ve=Ee&&!!x.transmissionMap,ze=Ee&&!!x.thicknessMap,Be=!!x.gradientMap,le=!!x.alphaMap,L=x.alphaTest>0,me=!!x.alphaHash,ge=!!x.extensions,Ue=!!D.attributes.uv1,De=!!D.attributes.uv2,st=!!D.attributes.uv3;let rt=zn;return x.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(rt=s.toneMapping),{isWebGL2:h,shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:j,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:be,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Oe,instancing:Fe,instancingColor:Fe&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:An,map:Re,matcap:Je,envMap:z,envMapMode:z&&K.mapping,envMapCubeUVHeight:Y,aoMap:At,lightMap:Pe,bumpMap:Le,normalMap:Se,displacementMap:f&&Qe,emissiveMap:ke,normalMapObjectSpace:Se&&x.normalMapType===Jl,normalMapTangentSpace:Se&&x.normalMapType===Tc,metalnessMap:T,roughnessMap:w,anisotropy:k,anisotropyMap:pe,clearcoat:Q,clearcoatMap:ye,clearcoatNormalMap:Te,clearcoatRoughnessMap:He,iridescence:ee,iridescenceMap:te,iridescenceThicknessMap:_e,sheen:se,sheenColorMap:ue,sheenRoughnessMap:he,specularMap:oe,specularColorMap:de,specularIntensityMap:Ce,transmission:Ee,transmissionMap:Ve,thicknessMap:ze,gradientMap:Be,opaque:x.transparent===!1&&x.blending===Li,alphaMap:le,alphaTest:L,alphaHash:me,combine:x.combine,mapUv:Re&&_(x.map.channel),aoMapUv:At&&_(x.aoMap.channel),lightMapUv:Pe&&_(x.lightMap.channel),bumpMapUv:Le&&_(x.bumpMap.channel),normalMapUv:Se&&_(x.normalMap.channel),displacementMapUv:Qe&&_(x.displacementMap.channel),emissiveMapUv:ke&&_(x.emissiveMap.channel),metalnessMapUv:T&&_(x.metalnessMap.channel),roughnessMapUv:w&&_(x.roughnessMap.channel),anisotropyMapUv:pe&&_(x.anisotropyMap.channel),clearcoatMapUv:ye&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(x.sheenRoughnessMap.channel),specularMapUv:oe&&_(x.specularMap.channel),specularColorMapUv:de&&_(x.specularColorMap.channel),specularIntensityMapUv:Ce&&_(x.specularIntensityMap.channel),transmissionMapUv:Ve&&_(x.transmissionMap.channel),thicknessMapUv:ze&&_(x.thicknessMap.channel),alphaMapUv:le&&_(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Se||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:st,pointsUvs:J.isPoints===!0&&!!D.attributes.uv&&(Re||le),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wt,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ge&&x.extensions.derivatives===!0,extensionFragDepth:ge&&x.extensions.fragDepth===!0,extensionDrawBuffers:ge&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)S.push(I),S.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(v(S,x),M(S,x),S.push(s.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function y(x){const S=g[x.type];let I;if(S){const F=mn[S];I=Fh.clone(F.uniforms)}else I=x.uniforms;return I}function C(x,S){let I;for(let F=0,J=l.length;F<J;F++){const P=l[F];if(P.cacheKey===S){I=P,++I.usedTimes;break}}return I===void 0&&(I=new Zp(s,S,x,r),l.push(I)),I}function b(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),x.destroy()}}function R(x){c.remove(x)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:N}}function nm(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,g,_,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||im),n.length>1&&n.sort(f||Xa),i.length>1&&i.sort(f||Xa)}function h(){for(let u=e,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function sm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new qa,s.set(n,[o])):i>=r.length?(o=new qa,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function rm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Z};break;case"SpotLight":t={position:new A,direction:new A,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Z,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":t={color:new Z,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function om(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let am=0;function cm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lm(s,e){const t=new rm,n=om(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);const r=new A,o=new nt,a=new nt;function c(h,u){let f=0,p=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,m=0,d=0,v=0,M=0,y=0,C=0,b=0,R=0,N=0,x=0;h.sort(cm);const S=u===!0?Math.PI:1;for(let F=0,J=h.length;F<J;F++){const P=h[F],D=P.color,V=P.intensity,K=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=D.r*V*S,p+=D.g*V*S,g+=D.b*V*S;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],V);x++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const q=P.shadow,ie=n.get(P);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,i.directionalShadow[_]=ie,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=$,_++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(D).multiplyScalar(V*S),$.distance=K,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[d]=$;const q=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,q.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[d]=q.matrix,P.castShadow){const ie=n.get(P);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,i.spotShadow[d]=ie,i.spotShadowMap[d]=Y,b++}d++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(D).multiplyScalar(V),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=$,v++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),$.distance=P.distance,$.decay=P.decay,P.castShadow){const q=P.shadow,ie=n.get(P);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=P.shadow.matrix,C++}i.point[m]=$,m++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(V*S),$.groundColor.copy(P.groundColor).multiplyScalar(V*S),i.hemi[M]=$,M++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==v||I.hemiLength!==M||I.numDirectionalShadows!==y||I.numPointShadows!==C||I.numSpotShadows!==b||I.numSpotMaps!==R||I.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=v,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+R-N,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=x,I.directionalLength=_,I.pointLength=m,I.spotLength=d,I.rectAreaLength=v,I.hemiLength=M,I.numDirectionalShadows=y,I.numPointShadows=C,I.numSpotShadows=b,I.numSpotMaps=R,I.numLightProbes=x,i.version=am++)}function l(h,u){let f=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let v=0,M=h.length;v<M;v++){const y=h[v];if(y.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(y.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function Ya(s,e){const t=new lm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function hm(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Ya(s,e),t.set(r,[c])):o>=a.length?(c=new Ya(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class um extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dm extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mm(s,e,t){let n=new uo;const i=new ve,r=new ve,o=new ht,a=new um({depthPacking:Kl}),c=new dm,l={},h=t.maxTextureSize,u={[kn]:Ht,[Ht]:kn,[Wt]:Wt},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new O(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let d=this.type;this.render=function(b,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const x=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(On),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const J=d!==En&&this.type===En,P=d===En&&this.type!==En;for(let D=0,V=b.length;D<V;D++){const K=b[D],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const $=Y.getFrameExtents();if(i.multiply($),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,Y.mapSize.y=r.y)),Y.map===null||J===!0||P===!0){const ie=this.type!==En?{minFilter:zt,magFilter:zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new si(i.x,i.y,ie),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const q=Y.getViewportCount();for(let ie=0;ie<q;ie++){const ce=Y.getViewport(ie);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),F.viewport(o),Y.updateMatrices(K,ie),n=Y.getFrustum(),y(R,N,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===En&&v(Y,N),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(x,S,I)};function v(b,R){const N=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new si(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,N,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,N,p,_,null)}function M(b,R,N,x){let S=null;const I=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=S.uuid,J=R.uuid;let P=l[F];P===void 0&&(P={},l[F]=P);let D=P[J];D===void 0&&(D=S.clone(),P[J]=D,R.addEventListener("dispose",C)),S=D}if(S.visible=R.visible,S.wireframe=R.wireframe,x===En?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=N}return S}function y(b,R,N,x,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===En)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const J=e.update(b),P=b.material;if(Array.isArray(P)){const D=J.groups;for(let V=0,K=D.length;V<K;V++){const Y=D[V],$=P[Y.materialIndex];if($&&$.visible){const q=M(b,$,x,S);b.onBeforeShadow(s,b,R,N,J,q,Y),s.renderBufferDirect(N,null,J,q,b,Y),b.onAfterShadow(s,b,R,N,J,q,Y)}}}else if(P.visible){const D=M(b,P,x,S);b.onBeforeShadow(s,b,R,N,J,D,null),s.renderBufferDirect(N,null,J,D,b,null),b.onAfterShadow(s,b,R,N,J,D,null)}}const F=b.children;for(let J=0,P=F.length;J<P;J++)y(F[J],R,N,x,S)}function C(b){b.target.removeEventListener("dispose",C);for(const N in l){const x=l[N],S=b.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function gm(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const me=new ht;let ge=null;const Ue=new ht(0,0,0,0);return{setMask:function(De){ge!==De&&!L&&(s.colorMask(De,De,De,De),ge=De)},setLocked:function(De){L=De},setClear:function(De,st,rt,St,Ut){Ut===!0&&(De*=St,st*=St,rt*=St),me.set(De,st,rt,St),Ue.equals(me)===!1&&(s.clearColor(De,st,rt,St),Ue.copy(me))},reset:function(){L=!1,ge=null,Ue.set(-1,0,0,0)}}}function r(){let L=!1,me=null,ge=null,Ue=null;return{setTest:function(De){De?Oe(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(De){me!==De&&!L&&(s.depthMask(De),me=De)},setFunc:function(De){if(ge!==De){switch(De){case bl:s.depthFunc(s.NEVER);break;case Tl:s.depthFunc(s.ALWAYS);break;case Al:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Rl:s.depthFunc(s.EQUAL);break;case Cl:s.depthFunc(s.GEQUAL);break;case Pl:s.depthFunc(s.GREATER);break;case Ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=De}},setLocked:function(De){L=De},setClear:function(De){Ue!==De&&(s.clearDepth(De),Ue=De)},reset:function(){L=!1,me=null,ge=null,Ue=null}}}function o(){let L=!1,me=null,ge=null,Ue=null,De=null,st=null,rt=null,St=null,Ut=null;return{setTest:function(ot){L||(ot?Oe(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(ot){me!==ot&&!L&&(s.stencilMask(ot),me=ot)},setFunc:function(ot,Nt,dn){(ge!==ot||Ue!==Nt||De!==dn)&&(s.stencilFunc(ot,Nt,dn),ge=ot,Ue=Nt,De=dn)},setOp:function(ot,Nt,dn){(st!==ot||rt!==Nt||St!==dn)&&(s.stencilOp(ot,Nt,dn),st=ot,rt=Nt,St=dn)},setLocked:function(ot){L=ot},setClear:function(ot){Ut!==ot&&(s.clearStencil(ot),Ut=ot)},reset:function(){L=!1,me=null,ge=null,Ue=null,De=null,st=null,rt=null,St=null,Ut=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,v=null,M=null,y=null,C=null,b=null,R=null,N=null,x=new Z(0,0,0),S=0,I=!1,F=null,J=null,P=null,D=null,V=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=$>=2);let ie=null,ce={};const X=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),xe=new ht().fromArray(X),be=new ht().fromArray(j);function we(L,me,ge,Ue){const De=new Uint8Array(4),st=s.createTexture();s.bindTexture(L,st),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ge;rt++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(me,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(me+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return st}const Fe={};Fe[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),Fe[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Fe[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Fe[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Oe(s.DEPTH_TEST),c.setFunc(Xs),ke(!1),T(Po),Oe(s.CULL_FACE),Se(On);function Oe(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function Re(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function Je(L,me){return p[L]!==me?(s.bindFramebuffer(L,me),p[L]=me,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=me),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=me)),!0):!1}function z(L,me){let ge=_,Ue=!1;if(L)if(ge=g.get(me),ge===void 0&&(ge=[],g.set(me,ge)),L.isWebGLMultipleRenderTargets){const De=L.texture;if(ge.length!==De.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let st=0,rt=De.length;st<rt;st++)ge[st]=s.COLOR_ATTACHMENT0+st;ge.length=De.length,Ue=!0}}else ge[0]!==s.COLOR_ATTACHMENT0&&(ge[0]=s.COLOR_ATTACHMENT0,Ue=!0);else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ue=!0);Ue&&(t.isWebGL2?s.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function At(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Pe={[Zn]:s.FUNC_ADD,[hl]:s.FUNC_SUBTRACT,[ul]:s.FUNC_REVERSE_SUBTRACT};if(n)Pe[Io]=s.MIN,Pe[Uo]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Pe[Io]=L.MIN_EXT,Pe[Uo]=L.MAX_EXT)}const Le={[dl]:s.ZERO,[fl]:s.ONE,[pl]:s.SRC_COLOR,[qr]:s.SRC_ALPHA,[Ml]:s.SRC_ALPHA_SATURATE,[vl]:s.DST_COLOR,[gl]:s.DST_ALPHA,[ml]:s.ONE_MINUS_SRC_COLOR,[Yr]:s.ONE_MINUS_SRC_ALPHA,[xl]:s.ONE_MINUS_DST_COLOR,[_l]:s.ONE_MINUS_DST_ALPHA,[yl]:s.CONSTANT_COLOR,[Sl]:s.ONE_MINUS_CONSTANT_COLOR,[wl]:s.CONSTANT_ALPHA,[El]:s.ONE_MINUS_CONSTANT_ALPHA};function Se(L,me,ge,Ue,De,st,rt,St,Ut,ot){if(L===On){d===!0&&(Re(s.BLEND),d=!1);return}if(d===!1&&(Oe(s.BLEND),d=!0),L!==ll){if(L!==v||ot!==I){if((M!==Zn||b!==Zn)&&(s.blendEquation(s.FUNC_ADD),M=Zn,b=Zn),ot)switch(L){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFunc(s.ONE,s.ONE);break;case Lo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Do:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Do:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,R=null,N=null,x.set(0,0,0),S=0,v=L,I=ot}return}De=De||me,st=st||ge,rt=rt||Ue,(me!==M||De!==b)&&(s.blendEquationSeparate(Pe[me],Pe[De]),M=me,b=De),(ge!==y||Ue!==C||st!==R||rt!==N)&&(s.blendFuncSeparate(Le[ge],Le[Ue],Le[st],Le[rt]),y=ge,C=Ue,R=st,N=rt),(St.equals(x)===!1||Ut!==S)&&(s.blendColor(St.r,St.g,St.b,Ut),x.copy(St),S=Ut),v=L,I=!1}function Qe(L,me){L.side===Wt?Re(s.CULL_FACE):Oe(s.CULL_FACE);let ge=L.side===Ht;me&&(ge=!ge),ke(ge),L.blending===Li&&L.transparent===!1?Se(On):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ue=L.stencilWrite;l.setTest(Ue),Ue&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){F!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),F=L)}function T(L){L!==al?(Oe(s.CULL_FACE),L!==J&&(L===Po?s.cullFace(s.BACK):L===cl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),J=L}function w(L){L!==P&&(Y&&s.lineWidth(L),P=L)}function k(L,me,ge){L?(Oe(s.POLYGON_OFFSET_FILL),(D!==me||V!==ge)&&(s.polygonOffset(me,ge),D=me,V=ge)):Re(s.POLYGON_OFFSET_FILL)}function Q(L){L?Oe(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function ee(L){L===void 0&&(L=s.TEXTURE0+K-1),ie!==L&&(s.activeTexture(L),ie=L)}function se(L,me,ge){ge===void 0&&(ie===null?ge=s.TEXTURE0+K-1:ge=ie);let Ue=ce[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},ce[ge]=Ue),(Ue.type!==L||Ue.texture!==me)&&(ie!==ge&&(s.activeTexture(ge),ie=ge),s.bindTexture(L,me||Fe[L]),Ue.type=L,Ue.texture=me)}function Ee(){const L=ce[ie];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(L){xe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),xe.copy(L))}function Ve(L){be.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),be.copy(L))}function ze(L,me){let ge=u.get(me);ge===void 0&&(ge=new WeakMap,u.set(me,ge));let Ue=ge.get(L);Ue===void 0&&(Ue=s.getUniformBlockIndex(me,L.name),ge.set(L,Ue))}function Be(L,me){const Ue=u.get(me).get(L);h.get(me)!==Ue&&(s.uniformBlockBinding(me,Ue,L.__bindingPointIndex),h.set(me,Ue))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ie=null,ce={},p={},g=new WeakMap,_=[],m=null,d=!1,v=null,M=null,y=null,C=null,b=null,R=null,N=null,x=new Z(0,0,0),S=0,I=!1,F=null,J=null,P=null,D=null,V=null,xe.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Oe,disable:Re,bindFramebuffer:Je,drawBuffers:z,useProgram:At,setBlending:Se,setMaterial:Qe,setFlipSided:ke,setCullFace:T,setLineWidth:w,setPolygonOffset:k,setScissorTest:Q,activeTexture:ee,bindTexture:se,unbindTexture:Ee,compressedTexImage2D:pe,compressedTexImage3D:ye,texImage2D:oe,texImage3D:de,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:ue,texStorage3D:he,texSubImage2D:Te,texSubImage3D:He,compressedTexSubImage2D:te,compressedTexSubImage3D:_e,scissor:Ce,viewport:Ve,reset:le}}function _m(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,w){return p?new OffscreenCanvas(T,w):Zs("canvas")}function _(T,w,k,Q){let ee=1;if((T.width>Q||T.height>Q)&&(ee=Q/Math.max(T.width,T.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=w?Js:Math.floor,Ee=se(ee*T.width),pe=se(ee*T.height);u===void 0&&(u=g(Ee,pe));const ye=k?g(Ee,pe):u;return ye.width=Ee,ye.height=pe,ye.getContext("2d").drawImage(T,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Ee+"x"+pe+")."),ye}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return eo(T.width)&&eo(T.height)}function d(T){return a?!1:T.wrapS!==hn||T.wrapT!==hn||T.minFilter!==zt&&T.minFilter!==nn}function v(T,w){return T.generateMipmaps&&w&&T.minFilter!==zt&&T.minFilter!==nn}function M(T){s.generateMipmap(T)}function y(T,w,k,Q,ee=!1){if(a===!1)return w;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=w;if(w===s.RED&&(k===s.FLOAT&&(se=s.R32F),k===s.HALF_FLOAT&&(se=s.R16F),k===s.UNSIGNED_BYTE&&(se=s.R8)),w===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(se=s.R8UI),k===s.UNSIGNED_SHORT&&(se=s.R16UI),k===s.UNSIGNED_INT&&(se=s.R32UI),k===s.BYTE&&(se=s.R8I),k===s.SHORT&&(se=s.R16I),k===s.INT&&(se=s.R32I)),w===s.RG&&(k===s.FLOAT&&(se=s.RG32F),k===s.HALF_FLOAT&&(se=s.RG16F),k===s.UNSIGNED_BYTE&&(se=s.RG8)),w===s.RGBA){const Ee=ee?qs:tt.getTransfer(Q);k===s.FLOAT&&(se=s.RGBA32F),k===s.HALF_FLOAT&&(se=s.RGBA16F),k===s.UNSIGNED_BYTE&&(se=Ee===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(T,w,k){return v(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function b(T){return T===zt||T===No||T===lr?s.NEAREST:s.LINEAR}function R(T){const w=T.target;w.removeEventListener("dispose",R),x(w),w.isVideoTexture&&h.delete(w)}function N(T){const w=T.target;w.removeEventListener("dispose",N),I(w)}function x(T){const w=n.get(T);if(w.__webglInit===void 0)return;const k=T.source,Q=f.get(k);if(Q){const ee=Q[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(T),Object.keys(Q).length===0&&f.delete(k)}n.remove(T)}function S(T){const w=n.get(T);s.deleteTexture(w.__webglTexture);const k=T.source,Q=f.get(k);delete Q[w.__cacheKey],o.memory.textures--}function I(T){const w=T.texture,k=n.get(T),Q=n.get(w);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let se=0;se<k.__webglFramebuffer[ee].length;se++)s.deleteFramebuffer(k.__webglFramebuffer[ee][se]);else s.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)s.deleteFramebuffer(k.__webglFramebuffer[ee]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,se=w.length;ee<se;ee++){const Ee=n.get(w[ee]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(T)}let F=0;function J(){F=0}function P(){const T=F;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),F+=1,T}function D(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function V(T,w){const k=n.get(T);if(T.isVideoTexture&&Qe(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,T,w);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+w)}function K(T,w){const k=n.get(T);if(T.version>0&&k.__version!==T.version){xe(k,T,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+w)}function Y(T,w){const k=n.get(T);if(T.version>0&&k.__version!==T.version){xe(k,T,w);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+w)}function $(T,w){const k=n.get(T);if(T.version>0&&k.__version!==T.version){be(k,T,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+w)}const q={[Jr]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[Zr]:s.MIRRORED_REPEAT},ie={[zt]:s.NEAREST,[No]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[Bl]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},ce={[Zl]:s.NEVER,[ih]:s.ALWAYS,[jl]:s.LESS,[Ac]:s.LEQUAL,[Ql]:s.EQUAL,[nh]:s.GEQUAL,[eh]:s.GREATER,[th]:s.NOTEQUAL};function X(T,w,k){if(k?(s.texParameteri(T,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,q[w.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ie[w.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ie[w.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==hn||w.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,b(w.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==zt&&w.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===zt||w.minFilter!==lr&&w.minFilter!==as||w.type===Nn&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===cs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function j(T,w){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",R));const Q=w.source;let ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));const se=D(w);if(se!==T.__cacheKey){ee[se]===void 0&&(ee[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[se].usedTimes++;const Ee=ee[T.__cacheKey];Ee!==void 0&&(ee[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&S(w)),T.__cacheKey=se,T.__webglTexture=ee[se].texture}return k}function xe(T,w,k){let Q=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=s.TEXTURE_3D);const ee=j(T,w),se=w.source;t.bindTexture(Q,T.__webglTexture,s.TEXTURE0+k);const Ee=n.get(se);if(se.version!==Ee.__version||ee===!0){t.activeTexture(s.TEXTURE0+k);const pe=tt.getPrimaries(tt.workingColorSpace),ye=w.colorSpace===rn?null:tt.getPrimaries(w.colorSpace),Te=w.colorSpace===rn||pe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const He=d(w)&&m(w.image)===!1;let te=_(w.image,He,!1,i.maxTextureSize);te=ke(w,te);const _e=m(te)||a,ue=r.convert(w.format,w.colorSpace);let he=r.convert(w.type),oe=y(w.internalFormat,ue,he,w.colorSpace,w.isVideoTexture);X(Q,w,_e);let de;const Ce=w.mipmaps,Ve=a&&w.isVideoTexture!==!0&&oe!==Ec,ze=Ee.__version===void 0||ee===!0,Be=C(w,te,_e);if(w.isDepthTexture)oe=s.DEPTH_COMPONENT,a?w.type===Nn?oe=s.DEPTH_COMPONENT32F:w.type===Un?oe=s.DEPTH_COMPONENT24:w.type===ei?oe=s.DEPTH24_STENCIL8:oe=s.DEPTH_COMPONENT16:w.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ti&&oe===s.DEPTH_COMPONENT&&w.type!==oo&&w.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Un,he=r.convert(w.type)),w.format===Ni&&oe===s.DEPTH_COMPONENT&&(oe=s.DEPTH_STENCIL,w.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ei,he=r.convert(w.type))),ze&&(Ve?t.texStorage2D(s.TEXTURE_2D,1,oe,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,oe,te.width,te.height,0,ue,he,null));else if(w.isDataTexture)if(Ce.length>0&&_e){Ve&&ze&&t.texStorage2D(s.TEXTURE_2D,Be,oe,Ce[0].width,Ce[0].height);for(let le=0,L=Ce.length;le<L;le++)de=Ce[le],Ve?t.texSubImage2D(s.TEXTURE_2D,le,0,0,de.width,de.height,ue,he,de.data):t.texImage2D(s.TEXTURE_2D,le,oe,de.width,de.height,0,ue,he,de.data);w.generateMipmaps=!1}else Ve?(ze&&t.texStorage2D(s.TEXTURE_2D,Be,oe,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,ue,he,te.data)):t.texImage2D(s.TEXTURE_2D,0,oe,te.width,te.height,0,ue,he,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ve&&ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,oe,Ce[0].width,Ce[0].height,te.depth);for(let le=0,L=Ce.length;le<L;le++)de=Ce[le],w.format!==un?ue!==null?Ve?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,de.width,de.height,te.depth,ue,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,oe,de.width,de.height,te.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,de.width,de.height,te.depth,ue,he,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,oe,de.width,de.height,te.depth,0,ue,he,de.data)}else{Ve&&ze&&t.texStorage2D(s.TEXTURE_2D,Be,oe,Ce[0].width,Ce[0].height);for(let le=0,L=Ce.length;le<L;le++)de=Ce[le],w.format!==un?ue!==null?Ve?t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(s.TEXTURE_2D,le,oe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(s.TEXTURE_2D,le,0,0,de.width,de.height,ue,he,de.data):t.texImage2D(s.TEXTURE_2D,le,oe,de.width,de.height,0,ue,he,de.data)}else if(w.isDataArrayTexture)Ve?(ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,oe,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,he,te.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,oe,te.width,te.height,te.depth,0,ue,he,te.data);else if(w.isData3DTexture)Ve?(ze&&t.texStorage3D(s.TEXTURE_3D,Be,oe,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,he,te.data)):t.texImage3D(s.TEXTURE_3D,0,oe,te.width,te.height,te.depth,0,ue,he,te.data);else if(w.isFramebufferTexture){if(ze)if(Ve)t.texStorage2D(s.TEXTURE_2D,Be,oe,te.width,te.height);else{let le=te.width,L=te.height;for(let me=0;me<Be;me++)t.texImage2D(s.TEXTURE_2D,me,oe,le,L,0,ue,he,null),le>>=1,L>>=1}}else if(Ce.length>0&&_e){Ve&&ze&&t.texStorage2D(s.TEXTURE_2D,Be,oe,Ce[0].width,Ce[0].height);for(let le=0,L=Ce.length;le<L;le++)de=Ce[le],Ve?t.texSubImage2D(s.TEXTURE_2D,le,0,0,ue,he,de):t.texImage2D(s.TEXTURE_2D,le,oe,ue,he,de);w.generateMipmaps=!1}else Ve?(ze&&t.texStorage2D(s.TEXTURE_2D,Be,oe,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,he,te)):t.texImage2D(s.TEXTURE_2D,0,oe,ue,he,te);v(w,_e)&&M(Q),Ee.__version=se.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function be(T,w,k){if(w.image.length!==6)return;const Q=j(T,w),ee=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const se=n.get(ee);if(ee.version!==se.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);const Ee=tt.getPrimaries(tt.workingColorSpace),pe=w.colorSpace===rn?null:tt.getPrimaries(w.colorSpace),ye=w.colorSpace===rn||Ee===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Te=w.isCompressedTexture||w.image[0].isCompressedTexture,He=w.image[0]&&w.image[0].isDataTexture,te=[];for(let le=0;le<6;le++)!Te&&!He?te[le]=_(w.image[le],!1,!0,i.maxCubemapSize):te[le]=He?w.image[le].image:w.image[le],te[le]=ke(w,te[le]);const _e=te[0],ue=m(_e)||a,he=r.convert(w.format,w.colorSpace),oe=r.convert(w.type),de=y(w.internalFormat,he,oe,w.colorSpace),Ce=a&&w.isVideoTexture!==!0,Ve=se.__version===void 0||Q===!0;let ze=C(w,_e,ue);X(s.TEXTURE_CUBE_MAP,w,ue);let Be;if(Te){Ce&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,de,_e.width,_e.height);for(let le=0;le<6;le++){Be=te[le].mipmaps;for(let L=0;L<Be.length;L++){const me=Be[L];w.format!==un?he!==null?Ce?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,de,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,me.width,me.height,he,oe,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,de,me.width,me.height,0,he,oe,me.data)}}}else{Be=w.mipmaps,Ce&&Ve&&(Be.length>0&&ze++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,de,te[0].width,te[0].height));for(let le=0;le<6;le++)if(He){Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,te[le].width,te[le].height,he,oe,te[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,te[le].width,te[le].height,0,he,oe,te[le].data);for(let L=0;L<Be.length;L++){const ge=Be[L].image[le].image;Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,ge.width,ge.height,he,oe,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,de,ge.width,ge.height,0,he,oe,ge.data)}}else{Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,he,oe,te[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,de,he,oe,te[le]);for(let L=0;L<Be.length;L++){const me=Be[L];Ce?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,he,oe,me.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,de,he,oe,me.image[le])}}}v(w,ue)&&M(s.TEXTURE_CUBE_MAP),se.__version=ee.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function we(T,w,k,Q,ee,se){const Ee=r.convert(k.format,k.colorSpace),pe=r.convert(k.type),ye=y(k.internalFormat,Ee,pe,k.colorSpace);if(!n.get(w).__hasExternalTextures){const He=Math.max(1,w.width>>se),te=Math.max(1,w.height>>se);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,se,ye,He,te,w.depth,0,Ee,pe,null):t.texImage2D(ee,se,ye,He,te,0,Ee,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Se(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ee,n.get(k).__webglTexture,0,Le(w)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ee,n.get(k).__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(T,w,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let Q=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||Se(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Nn?Q=s.DEPTH_COMPONENT32F:ee.type===Un&&(Q=s.DEPTH_COMPONENT24));const se=Le(w);Se(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,Q,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Q,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){const Q=Le(w);k&&Se(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,w.width,w.height):Se(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<Q.length;ee++){const se=Q[ee],Ee=r.convert(se.format,se.colorSpace),pe=r.convert(se.type),ye=y(se.internalFormat,Ee,pe,se.colorSpace),Te=Le(w);k&&Se(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ye,w.width,w.height):Se(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ye,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ye,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const Q=n.get(w.depthTexture).__webglTexture,ee=Le(w);if(w.depthTexture.format===ti)Se(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(w.depthTexture.format===Ni)Se(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Re(T){const w=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Oe(w.__webglFramebuffer,T)}else if(k){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=s.createRenderbuffer(),Fe(w.__webglDepthbuffer[Q],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Fe(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(T,w,k){const Q=n.get(T);w!==void 0&&we(Q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Re(T)}function z(T){const w=T.texture,k=n.get(T),Q=n.get(w);T.addEventListener("dispose",N),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=w.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,Ee=m(T)||a;if(ee){k.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[pe]=[];for(let ye=0;ye<w.mipmaps.length;ye++)k.__webglFramebuffer[pe][ye]=s.createFramebuffer()}else k.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)k.__webglFramebuffer[pe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(se)if(i.drawBuffers){const pe=T.texture;for(let ye=0,Te=pe.length;ye<Te;ye++){const He=n.get(pe[ye]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Se(T)===!1){const pe=se?w:[w];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const Te=pe[ye];k.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);const He=r.convert(Te.format,Te.colorSpace),te=r.convert(Te.type),_e=y(Te.internalFormat,He,te,Te.colorSpace,T.isXRRenderTarget===!0),ue=Le(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,_e,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),X(s.TEXTURE_CUBE_MAP,w,Ee);for(let pe=0;pe<6;pe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)we(k.__webglFramebuffer[pe][ye],T,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else we(k.__webglFramebuffer[pe],T,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(w,Ee)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const pe=T.texture;for(let ye=0,Te=pe.length;ye<Te;ye++){const He=pe[ye],te=n.get(He);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),X(s.TEXTURE_2D,He,Ee),we(k.__webglFramebuffer,T,He,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),v(He,Ee)&&M(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?pe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,Q.__webglTexture),X(pe,w,Ee),a&&w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)we(k.__webglFramebuffer[ye],T,w,s.COLOR_ATTACHMENT0,pe,ye);else we(k.__webglFramebuffer,T,w,s.COLOR_ATTACHMENT0,pe,0);v(w,Ee)&&M(pe),t.unbindTexture()}T.depthBuffer&&Re(T)}function At(T){const w=m(T)||a,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,ee=k.length;Q<ee;Q++){const se=k[Q];if(v(se,w)){const Ee=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,pe=n.get(se).__webglTexture;t.bindTexture(Ee,pe),M(Ee),t.unbindTexture()}}}function Pe(T){if(a&&T.samples>0&&Se(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,Q=T.height;let ee=s.COLOR_BUFFER_BIT;const se=[],Ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=n.get(T),ye=T.isWebGLMultipleRenderTargets===!0;if(ye)for(let Te=0;Te<w.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){se.push(s.COLOR_ATTACHMENT0+Te),T.depthBuffer&&se.push(Ee);const He=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(He===!1&&(T.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),ye&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pe.__webglColorRenderbuffer[Te]),He===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),ye){const te=n.get(w[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,k,Q,0,0,k,Q,ee,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<w.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,pe.__webglColorRenderbuffer[Te]);const He=n.get(w[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Le(T){return Math.min(i.maxSamples,T.samples)}function Se(T){const w=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qe(T){const w=o.render.frame;h.get(T)!==w&&(h.set(T,w),T.update())}function ke(T,w){const k=T.colorSpace,Q=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Qr||k!==An&&k!==rn&&(tt.getTransfer(k)===ct?a===!1?e.has("EXT_sRGB")===!0&&Q===un?(T.format=Qr,T.minFilter=nn,T.generateMipmaps=!1):w=Cc.sRGBToLinear(w):(Q!==un||ee!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Je,this.setupRenderTarget=z,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Se}function vm(s,e,t){const n=t.isWebGL2;function i(r,o=rn){let a;const c=tt.getTransfer(o);if(r===Bn)return s.UNSIGNED_BYTE;if(r===xc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===kl)return s.BYTE;if(r===Gl)return s.SHORT;if(r===oo)return s.UNSIGNED_SHORT;if(r===vc)return s.INT;if(r===Un)return s.UNSIGNED_INT;if(r===Nn)return s.FLOAT;if(r===cs)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Hl)return s.ALPHA;if(r===un)return s.RGBA;if(r===Vl)return s.LUMINANCE;if(r===Wl)return s.LUMINANCE_ALPHA;if(r===ti)return s.DEPTH_COMPONENT;if(r===Ni)return s.DEPTH_STENCIL;if(r===Qr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xl)return s.RED;if(r===yc)return s.RED_INTEGER;if(r===ql)return s.RG;if(r===Sc)return s.RG_INTEGER;if(r===wc)return s.RGBA_INTEGER;if(r===hr||r===ur||r===dr||r===fr)if(c===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fo||r===Oo||r===zo||r===Bo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ec)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ko||r===Go)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ko)return c===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Go)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ho||r===Vo||r===Wo||r===Xo||r===qo||r===Yo||r===$o||r===Ko||r===Jo||r===Zo||r===jo||r===Qo||r===ea||r===ta)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ho)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$o)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ko)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qo)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ea)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ta)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pr||r===na||r===ia)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===pr)return c===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===na)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ia)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yl||r===sa||r===ra||r===oa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===pr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===sa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ra)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ei?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class xm extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ze extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ym extends zi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const v=[],M=[],y=new ve;let C=null;const b=new Vt;b.layers.enable(1),b.viewport=new ht;const R=new Vt;R.layers.enable(2),R.viewport=new ht;const N=[b,R],x=new xm;x.layers.enable(1),x.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=v[X];return j===void 0&&(j=new Or,v[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=v[X];return j===void 0&&(j=new Or,v[X]=j),j.getGripSpace()},this.getHand=function(X){let j=v[X];return j===void 0&&(j=new Or,v[X]=j),j.getHandSpace()};function F(X){const j=M.indexOf(X.inputSource);if(j===-1)return;const xe=v[j];xe!==void 0&&(xe.update(X.inputSource,X.frame,l||o),xe.dispatchEvent({type:X.type,data:X.inputSource}))}function J(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",P);for(let X=0;X<v.length;X++){const j=M[X];j!==null&&(M[X]=null,v[X].disconnect(j))}S=null,I=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",J),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new si(p.framebufferWidth,p.framebufferHeight,{format:un,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,xe=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?Ni:ti,xe=_.stencil?ei:Un);const we={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(we),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new si(f.textureWidth,f.textureHeight,{format:un,type:Bn,depthTexture:new kc(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Fe=e.properties.get(d);Fe.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(X){for(let j=0;j<X.removed.length;j++){const xe=X.removed[j],be=M.indexOf(xe);be>=0&&(M[be]=null,v[be].disconnect(xe))}for(let j=0;j<X.added.length;j++){const xe=X.added[j];let be=M.indexOf(xe);if(be===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=M.length){M.push(xe),be=Fe;break}else if(M[Fe]===null){M[Fe]=xe,be=Fe;break}if(be===-1)break}const we=v[be];we&&we.connect(xe)}}const D=new A,V=new A;function K(X,j,xe){D.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(xe.matrixWorld);const be=D.distanceTo(V),we=j.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,Oe=we[14]/(we[10]-1),Re=we[14]/(we[10]+1),Je=(we[9]+1)/we[5],z=(we[9]-1)/we[5],At=(we[8]-1)/we[0],Pe=(Fe[8]+1)/Fe[0],Le=Oe*At,Se=Oe*Pe,Qe=be/(-At+Pe),ke=Qe*-At;j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ke),X.translateZ(Qe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Oe+Qe,w=Re+Qe,k=Le-ke,Q=Se+(be-ke),ee=Je*Re/w*T,se=z*Re/w*T;X.projectionMatrix.makePerspective(k,Q,ee,se,T,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;x.near=R.near=b.near=X.near,x.far=R.far=b.far=X.far,(S!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,I=x.far);const j=X.parent,xe=x.cameras;Y(x,j);for(let be=0;be<xe.length;be++)Y(xe[be],j);xe.length===2?K(x,b,R):x.projectionMatrix.copy(b.projectionMatrix),$(X,x,j)};function $(X,j,xe){xe===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(xe.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let q=null;function ie(X,j){if(h=j.getViewerPose(l||o),g=j,h!==null){const xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let be=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,be=!0);for(let we=0;we<xe.length;we++){const Fe=xe[we];let Oe=null;if(p!==null)Oe=p.getViewport(Fe);else{const Je=u.getViewSubImage(f,Fe);Oe=Je.viewport,we===0&&(e.setRenderTargetTextures(d,Je.colorTexture,f.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(d))}let Re=N[we];Re===void 0&&(Re=new Vt,Re.layers.enable(we),Re.viewport=new ht,N[we]=Re),Re.matrix.fromArray(Fe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Fe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),we===0&&(x.matrix.copy(Re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),be===!0&&x.cameras.push(Re)}}for(let xe=0;xe<v.length;xe++){const be=M[xe],we=v[xe];be!==null&&we!==void 0&&we.update(be,j,l||o)}q&&q(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const ce=new zc;ce.setAnimationLoop(ie),this.setAnimationLoop=function(X){q=X},this.dispose=function(){}}}function Sm(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Nc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ht&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ht&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wm(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function l(v,M){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(v,C);const b=e.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function h(v){const M=u();v.__bindingPointIndex=M;const y=s.createBuffer(),C=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=i[v.id],y=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let b=0,R=y.length;b<R;b++){const N=Array.isArray(y[b])?y[b]:[y[b]];for(let x=0,S=N.length;x<S;x++){const I=N[x];if(p(I,b,x,C)===!0){const F=I.__offset,J=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let D=0;D<J.length;D++){const V=J[D],K=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+P,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,M,y,C){const b=v.value,R=M+"_"+y;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{const N=C[R];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return C[R]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function g(v){const M=v.uniforms;let y=0;const C=16;for(let R=0,N=M.length;R<N;R++){const x=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,I=x.length;S<I;S++){const F=x[S],J=Array.isArray(F.value)?F.value:[F.value];for(let P=0,D=J.length;P<D;P++){const V=J[P],K=_(V),Y=y%C;Y!==0&&C-Y<K.boundary&&(y+=C-Y),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=K.storage}}}const b=y%C;return b>0&&(y+=C-b),v.__size=y,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}class qc{constructor(e={}){const{canvas:t=vh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=zn,this.toneMappingExposure=1;const M=this;let y=!1,C=0,b=0,R=null,N=-1,x=null;const S=new ht,I=new ht;let F=null;const J=new Z(0);let P=0,D=t.width,V=t.height,K=1,Y=null,$=null;const q=new ht(0,0,D,V),ie=new ht(0,0,D,V);let ce=!1;const X=new uo;let j=!1,xe=!1,be=null;const we=new nt,Fe=new ve,Oe=new A,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Je(){return R===null?K:1}let z=n;function At(E,U){for(let H=0;H<E.length;H++){const W=E[H],G=t.getContext(W,U);if(G!==null)return G}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&U.shift(),z=At(U,E),z===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Pe,Le,Se,Qe,ke,T,w,k,Q,ee,se,Ee,pe,ye,Te,He,te,_e,ue,he,oe,de,Ce,Ve;function ze(){Pe=new If(z),Le=new Af(z,Pe,e),Pe.init(Le),de=new vm(z,Pe,Le),Se=new gm(z,Pe,Le),Qe=new Ff(z),ke=new nm,T=new _m(z,Pe,Se,ke,Le,de,Qe),w=new Cf(M),k=new Df(M),Q=new Vh(z,Le),Ce=new bf(z,Pe,Q,Le),ee=new Uf(z,Q,Qe,Ce),se=new kf(z,ee,Q,Qe),ue=new Bf(z,Le,T),He=new Rf(ke),Ee=new tm(M,w,k,Pe,Le,Ce,He),pe=new Sm(M,ke),ye=new sm,Te=new hm(Pe,Le),_e=new Ef(M,w,k,Se,se,f,c),te=new mm(M,se,Le),Ve=new wm(z,Qe,Le,Se),he=new Tf(z,Pe,Qe,Le),oe=new Nf(z,Pe,Qe,Le),Qe.programs=Ee.programs,M.capabilities=Le,M.extensions=Pe,M.properties=ke,M.renderLists=ye,M.shadowMap=te,M.state=Se,M.info=Qe}ze();const Be=new ym(M,z);this.xr=Be,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(D,V,!1))},this.getSize=function(E){return E.set(D,V)},this.setSize=function(E,U,H=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,V=U,t.width=Math.floor(E*K),t.height=Math.floor(U*K),H===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(D*K,V*K).floor()},this.setDrawingBufferSize=function(E,U,H){D=E,V=U,K=H,t.width=Math.floor(E*H),t.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,U,H,W){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,U,H,W),Se.viewport(S.copy(q).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,U,H,W){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,U,H,W),Se.scissor(I.copy(ie).multiplyScalar(K).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){Se.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(E=!0,U=!0,H=!0){let W=0;if(E){let G=!1;if(R!==null){const Me=R.texture.format;G=Me===wc||Me===Sc||Me===yc}if(G){const Me=R.texture.type,Ae=Me===Bn||Me===Un||Me===oo||Me===ei||Me===xc||Me===Mc,Ie=_e.getClearColor(),Ne=_e.getClearAlpha(),qe=Ie.r,Ge=Ie.g,We=Ie.b;Ae?(p[0]=qe,p[1]=Ge,p[2]=We,p[3]=Ne,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=qe,g[1]=Ge,g[2]=We,g[3]=Ne,z.clearBufferiv(z.COLOR,0,g))}else W|=z.COLOR_BUFFER_BIT}U&&(W|=z.DEPTH_BUFFER_BIT),H&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),Te.dispose(),ke.dispose(),w.dispose(),k.dispose(),se.dispose(),Ce.dispose(),Ve.dispose(),Ee.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Ut),Be.removeEventListener("sessionend",ot),be&&(be.dispose(),be=null),Nt.stop()};function le(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Qe.autoReset,U=te.enabled,H=te.autoUpdate,W=te.needsUpdate,G=te.type;ze(),Qe.autoReset=E,te.enabled=U,te.autoUpdate=H,te.needsUpdate=W,te.type=G}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ge(E){const U=E.target;U.removeEventListener("dispose",ge),Ue(U)}function Ue(E){De(E),ke.remove(E)}function De(E){const U=ke.get(E).programs;U!==void 0&&(U.forEach(function(H){Ee.releaseProgram(H)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,W,G,Me){U===null&&(U=Re);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Ie=tl(E,U,H,W,G);Se.setMaterial(W,Ae);let Ne=H.index,qe=1;if(W.wireframe===!0){if(Ne=ee.getWireframeAttribute(H),Ne===void 0)return;qe=2}const Ge=H.drawRange,We=H.attributes.position;let mt=Ge.start*qe,$t=(Ge.start+Ge.count)*qe;Me!==null&&(mt=Math.max(mt,Me.start*qe),$t=Math.min($t,(Me.start+Me.count)*qe)),Ne!==null?(mt=Math.max(mt,0),$t=Math.min($t,Ne.count)):We!=null&&(mt=Math.max(mt,0),$t=Math.min($t,We.count));const wt=$t-mt;if(wt<0||wt===1/0)return;Ce.setup(G,W,Ie,H,Ne);let vn,ut=he;if(Ne!==null&&(vn=Q.get(Ne),ut=oe,ut.setIndex(vn)),G.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*Je()),ut.setMode(z.LINES)):ut.setMode(z.TRIANGLES);else if(G.isLine){let Ye=W.linewidth;Ye===void 0&&(Ye=1),Se.setLineWidth(Ye*Je()),G.isLineSegments?ut.setMode(z.LINES):G.isLineLoop?ut.setMode(z.LINE_LOOP):ut.setMode(z.LINE_STRIP)}else G.isPoints?ut.setMode(z.POINTS):G.isSprite&&ut.setMode(z.TRIANGLES);if(G.isBatchedMesh)ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ut.renderInstances(mt,wt,G.count);else if(H.isInstancedBufferGeometry){const Ye=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,rr=Math.min(H.instanceCount,Ye);ut.renderInstances(mt,wt,rr)}else ut.render(mt,wt)};function st(E,U,H){E.transparent===!0&&E.side===Wt&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,us(E,U,H),E.side=kn,E.needsUpdate=!0,us(E,U,H),E.side=Wt):us(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),m=Te.get(H),m.init(),v.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),E!==H&&E.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(M._useLegacyLights);const W=new Set;return E.traverse(function(G){const Me=G.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const Ie=Me[Ae];st(Ie,H,G),W.add(Ie)}else st(Me,H,G),W.add(Me)}),v.pop(),m=null,W},this.compileAsync=function(E,U,H=null){const W=this.compile(E,U,H);return new Promise(G=>{function Me(){if(W.forEach(function(Ae){ke.get(Ae).currentProgram.isReady()&&W.delete(Ae)}),W.size===0){G(E);return}setTimeout(Me,10)}Pe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let rt=null;function St(E){rt&&rt(E)}function Ut(){Nt.stop()}function ot(){Nt.start()}const Nt=new zc;Nt.setAnimationLoop(St),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(E){rt=E,Be.setAnimationLoop(E),E===null?Nt.stop():Nt.start()},Be.addEventListener("sessionstart",Ut),Be.addEventListener("sessionend",ot),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(U),U=Be.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,U,R),m=Te.get(E,v.length),m.init(),v.push(m),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(we),xe=this.localClippingEnabled,j=He.init(this.clippingPlanes,xe),_=ye.get(E,d.length),_.init(),d.push(_),dn(E,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,j===!0&&He.beginShadows();const H=m.state.shadowsArray;if(te.render(H,E,U),j===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(_,E),m.setupLights(M._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let G=0,Me=W.length;G<Me;G++){const Ae=W[G];Eo(_,E,Ae,Ae.viewport)}}else Eo(_,E,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(M,E,U),Ce.resetDefaultState(),N=-1,x=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function dn(E,U,H,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const Ae=se.update(E),Ie=E.material;Ie.visible&&_.push(E,Ae,Ie,H,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const Ae=se.update(E),Ie=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Oe.copy(Ae.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const Ne=Ae.groups;for(let qe=0,Ge=Ne.length;qe<Ge;qe++){const We=Ne[qe],mt=Ie[We.materialIndex];mt&&mt.visible&&_.push(E,Ae,mt,H,Oe.z,We)}}else Ie.visible&&_.push(E,Ae,Ie,H,Oe.z,null)}}const Me=E.children;for(let Ae=0,Ie=Me.length;Ae<Ie;Ae++)dn(Me[Ae],U,H,W)}function Eo(E,U,H,W){const G=E.opaque,Me=E.transmissive,Ae=E.transparent;m.setupLightsView(H),j===!0&&He.setGlobalState(M.clippingPlanes,H),Me.length>0&&el(G,Me,U,H),W&&Se.viewport(S.copy(W)),G.length>0&&hs(G,U,H),Me.length>0&&hs(Me,U,H),Ae.length>0&&hs(Ae,U,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function el(E,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const Me=Le.isWebGL2;be===null&&(be=new si(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?cs:Bn,minFilter:as,samples:Me?4:0})),M.getDrawingBufferSize(Fe),Me?be.setSize(Fe.x,Fe.y):be.setSize(Js(Fe.x),Js(Fe.y));const Ae=M.getRenderTarget();M.setRenderTarget(be),M.getClearColor(J),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear();const Ie=M.toneMapping;M.toneMapping=zn,hs(E,H,W),T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be);let Ne=!1;for(let qe=0,Ge=U.length;qe<Ge;qe++){const We=U[qe],mt=We.object,$t=We.geometry,wt=We.material,vn=We.group;if(wt.side===Wt&&mt.layers.test(W.layers)){const ut=wt.side;wt.side=Ht,wt.needsUpdate=!0,bo(mt,H,W,$t,wt,vn),wt.side=ut,wt.needsUpdate=!0,Ne=!0}}Ne===!0&&(T.updateMultisampleRenderTarget(be),T.updateRenderTargetMipmap(be)),M.setRenderTarget(Ae),M.setClearColor(J,P),M.toneMapping=Ie}function hs(E,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Me=E.length;G<Me;G++){const Ae=E[G],Ie=Ae.object,Ne=Ae.geometry,qe=W===null?Ae.material:W,Ge=Ae.group;Ie.layers.test(H.layers)&&bo(Ie,U,H,Ne,qe,Ge)}}function bo(E,U,H,W,G,Me){E.onBeforeRender(M,U,H,W,G,Me),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(M,U,H,W,E,Me),G.transparent===!0&&G.side===Wt&&G.forceSinglePass===!1?(G.side=Ht,G.needsUpdate=!0,M.renderBufferDirect(H,U,W,G,E,Me),G.side=kn,G.needsUpdate=!0,M.renderBufferDirect(H,U,W,G,E,Me),G.side=Wt):M.renderBufferDirect(H,U,W,G,E,Me),E.onAfterRender(M,U,H,W,G,Me)}function us(E,U,H){U.isScene!==!0&&(U=Re);const W=ke.get(E),G=m.state.lights,Me=m.state.shadowsArray,Ae=G.state.version,Ie=Ee.getParameters(E,G.state,Me,U,H),Ne=Ee.getProgramCacheKey(Ie);let qe=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?k:w).get(E.envMap||W.environment),qe===void 0&&(E.addEventListener("dispose",ge),qe=new Map,W.programs=qe);let Ge=qe.get(Ne);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Ae)return Ao(E,Ie),Ge}else Ie.uniforms=Ee.getUniforms(E),E.onBuild(H,Ie,M),E.onBeforeCompile(Ie,M),Ge=Ee.acquireProgram(Ie,Ne),qe.set(Ne,Ge),W.uniforms=Ie.uniforms;const We=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=He.uniform),Ao(E,Ie),W.needsLights=il(E),W.lightsStateVersion=Ae,W.needsLights&&(We.ambientLightColor.value=G.state.ambient,We.lightProbe.value=G.state.probe,We.directionalLights.value=G.state.directional,We.directionalLightShadows.value=G.state.directionalShadow,We.spotLights.value=G.state.spot,We.spotLightShadows.value=G.state.spotShadow,We.rectAreaLights.value=G.state.rectArea,We.ltc_1.value=G.state.rectAreaLTC1,We.ltc_2.value=G.state.rectAreaLTC2,We.pointLights.value=G.state.point,We.pointLightShadows.value=G.state.pointShadow,We.hemisphereLights.value=G.state.hemi,We.directionalShadowMap.value=G.state.directionalShadowMap,We.directionalShadowMatrix.value=G.state.directionalShadowMatrix,We.spotShadowMap.value=G.state.spotShadowMap,We.spotLightMatrix.value=G.state.spotLightMatrix,We.spotLightMap.value=G.state.spotLightMap,We.pointShadowMap.value=G.state.pointShadowMap,We.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function To(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Vs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ao(E,U){const H=ke.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function tl(E,U,H,W,G){U.isScene!==!0&&(U=Re),T.resetTextureUnits();const Me=U.fog,Ae=W.isMeshStandardMaterial?U.environment:null,Ie=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:An,Ne=(W.isMeshStandardMaterial?k:w).get(W.envMap||Ae),qe=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),We=!!H.morphAttributes.position,mt=!!H.morphAttributes.normal,$t=!!H.morphAttributes.color;let wt=zn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=M.toneMapping);const vn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=vn!==void 0?vn.length:0,Ye=ke.get(W),rr=m.state.lights;if(j===!0&&(xe===!0||E!==x)){const Qt=E===x&&W.id===N;He.setState(W,E,Qt)}let ft=!1;W.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==rr.state.version||Ye.outputColorSpace!==Ie||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||Ye.envMap!==Ne||W.fog===!0&&Ye.fog!==Me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==He.numPlanes||Ye.numIntersection!==He.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ge||Ye.morphTargets!==We||Ye.morphNormals!==mt||Ye.morphColors!==$t||Ye.toneMapping!==wt||Le.isWebGL2===!0&&Ye.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,Ye.__version=W.version);let Vn=Ye.currentProgram;ft===!0&&(Vn=us(W,U,G));let Ro=!1,Hi=!1,or=!1;const Pt=Vn.getUniforms(),Wn=Ye.uniforms;if(Se.useProgram(Vn.program)&&(Ro=!0,Hi=!0,or=!0),W.id!==N&&(N=W.id,Hi=!0),Ro||x!==E){Pt.setValue(z,"projectionMatrix",E.projectionMatrix),Pt.setValue(z,"viewMatrix",E.matrixWorldInverse);const Qt=Pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(z,Oe.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&Pt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Hi=!0,or=!0)}if(G.isSkinnedMesh){Pt.setOptional(z,G,"bindMatrix"),Pt.setOptional(z,G,"bindMatrixInverse");const Qt=G.skeleton;Qt&&(Le.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Pt.setValue(z,"boneTexture",Qt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Pt.setOptional(z,G,"batchingTexture"),Pt.setValue(z,"batchingTexture",G._matricesTexture,T));const ar=H.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&Le.isWebGL2===!0)&&ue.update(G,H,Vn),(Hi||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Pt.setValue(z,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wn.envMap.value=Ne,Wn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Hi&&(Pt.setValue(z,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&nl(Wn,or),Me&&W.fog===!0&&pe.refreshFogUniforms(Wn,Me),pe.refreshMaterialUniforms(Wn,W,K,V,be),Vs.upload(z,To(Ye),Wn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vs.upload(z,To(Ye),Wn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pt.setValue(z,"center",G.center),Pt.setValue(z,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(z,"normalMatrix",G.normalMatrix),Pt.setValue(z,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Qt=W.uniformsGroups;for(let cr=0,sl=Qt.length;cr<sl;cr++)if(Le.isWebGL2){const Co=Qt[cr];Ve.update(Co,Vn),Ve.bind(Co,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function nl(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function il(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,H){ke.get(E.texture).__webglTexture=U,ke.get(E.depthTexture).__webglTexture=H;const W=ke.get(E);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const H=ke.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){R=E,C=U,b=H;let W=!0,G=null,Me=!1,Ae=!1;if(E){const Ne=ke.get(E);Ne.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(z.FRAMEBUFFER,null),W=!1):Ne.__webglFramebuffer===void 0?T.setupRenderTarget(E):Ne.__hasExternalTextures&&T.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ae=!0);const Ge=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[U])?G=Ge[U][H]:G=Ge[U],Me=!0):Le.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?G=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[H]:G=Ge,S.copy(E.viewport),I.copy(E.scissor),F=E.scissorTest}else S.copy(q).multiplyScalar(K).floor(),I.copy(ie).multiplyScalar(K).floor(),F=ce;if(Se.bindFramebuffer(z.FRAMEBUFFER,G)&&Le.drawBuffers&&W&&Se.drawBuffers(E,G),Se.viewport(S),Se.scissor(I),Se.setScissorTest(F),Me){const Ne=ke.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ne.__webglTexture,H)}else if(Ae){const Ne=ke.get(E.texture),qe=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ne.__webglTexture,H||0,qe)}N=-1},this.readRenderTargetPixels=function(E,U,H,W,G,Me,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){Se.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const Ne=E.texture,qe=Ne.format,Ge=Ne.type;if(qe!==un&&de.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===cs&&(Pe.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ge!==Bn&&de.convert(Ge)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Nn&&(Le.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&H>=0&&H<=E.height-G&&z.readPixels(U,H,W,G,de.convert(qe),de.convert(Ge),Me)}finally{const Ne=R!==null?ke.get(R).__webglFramebuffer:null;Se.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(E,U,H=0){const W=Math.pow(2,-H),G=Math.floor(U.image.width*W),Me=Math.floor(U.image.height*W);T.setTexture2D(U,0),z.copyTexSubImage2D(z.TEXTURE_2D,H,0,0,E.x,E.y,G,Me),Se.unbindTexture()},this.copyTextureToTexture=function(E,U,H,W=0){const G=U.image.width,Me=U.image.height,Ae=de.convert(H.format),Ie=de.convert(H.type);T.setTexture2D(H,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,E.x,E.y,G,Me,Ae,Ie,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Ae,U.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,W,E.x,E.y,Ae,Ie,U.image),W===0&&H.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H,W,G=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,Ie=E.max.z-E.min.z+1,Ne=de.convert(W.format),qe=de.convert(W.type);let Ge;if(W.isData3DTexture)T.setTexture3D(W,0),Ge=z.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Ge=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const We=z.getParameter(z.UNPACK_ROW_LENGTH),mt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$t=z.getParameter(z.UNPACK_SKIP_PIXELS),wt=z.getParameter(z.UNPACK_SKIP_ROWS),vn=z.getParameter(z.UNPACK_SKIP_IMAGES),ut=H.isCompressedTexture?H.mipmaps[G]:H.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?z.texSubImage3D(Ge,G,U.x,U.y,U.z,Me,Ae,Ie,Ne,qe,ut.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ge,G,U.x,U.y,U.z,Me,Ae,Ie,Ne,ut.data)):z.texSubImage3D(Ge,G,U.x,U.y,U.z,Me,Ae,Ie,Ne,qe,ut),z.pixelStorei(z.UNPACK_ROW_LENGTH,We),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,wt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,vn),G===0&&W.generateMipmaps&&z.generateMipmap(Ge),Se.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){C=0,b=0,R=null,Se.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ao?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===tr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?ni:bc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ni?Rt:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Em extends qc{}Em.prototype.isWebGL1Renderer=!0;class po{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Z(e),this.density=t}clone(){return new po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bm extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Tm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new A;class js{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class es extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ei;const Yi=new A,bi=new A,Ti=new A,Ai=new ve,$i=new ve,Yc=new nt,Us=new A,Ki=new A,Ns=new A,$a=new ve,zr=new ve,Ka=new ve;class Fs extends at{constructor(e=new es){if(super(),this.isSprite=!0,this.type="Sprite",Ei===void 0){Ei=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tm(t,5);Ei.setIndex([0,1,2,0,2,3]),Ei.setAttribute("position",new js(n,3,0,!1)),Ei.setAttribute("uv",new js(n,2,3,!1))}this.geometry=Ei,this.material=e,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Yc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ti.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Os(Us.set(-.5,-.5,0),Ti,o,bi,i,r),Os(Ki.set(.5,-.5,0),Ti,o,bi,i,r),Os(Ns.set(.5,.5,0),Ti,o,bi,i,r),$a.set(0,0),zr.set(1,0),Ka.set(1,1);let a=e.ray.intersectTriangle(Us,Ki,Ns,!1,Yi);if(a===null&&(Os(Ki.set(-.5,.5,0),Ti,o,bi,i,r),zr.set(0,1),a=e.ray.intersectTriangle(Us,Ns,Ki,!1,Yi),a===null))return;const c=e.ray.origin.distanceTo(Yi);c<e.near||c>e.far||t.push({distance:c,point:Yi.clone(),uv:sn.getInterpolation(Yi,Us,Ki,Ns,$a,zr,Ka,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Os(s,e,t,n,i,r){Ai.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?($i.x=r*Ai.x-i*Ai.y,$i.y=i*Ai.x+r*Ai.y):$i.copy(Ai),s.copy(e),s.x+=$i.x,s.y+=$i.y,s.applyMatrix4(Yc)}class Ja extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ri=new nt,Za=new nt,zs=[],ja=new oi,Am=new nt,Ji=new O,Zi=new ki;class Fn extends O{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ja(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Am)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),ja.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(ja)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),Zi.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),e.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ri),Za.multiplyMatrices(n,Ri),Ji.matrixWorld=Za,Ji.raycast(e,zs);for(let o=0,a=zs.length;o<a;o++){const c=zs[o];c.instanceId=r,c.object=this,t.push(c)}zs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ja(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class mo extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qa=new nt,no=new lo,Bs=new ki,ks=new A;class $c extends at{constructor(e=new Ct,t=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=r,e.ray.intersectsSphere(Bs)===!1)return;Qa.copy(i).invert(),no.copy(e.ray).applyMatrix4(Qa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);ks.fromBufferAttribute(u,m),ec(ks,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)ks.fromBufferAttribute(u,g),ec(ks,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ec(s,e,t,n,i,r,o){const a=no.distanceSqToPoint(s);if(a<t){const c=new A;no.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Kc extends Xt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ve:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,c=new nt;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(bt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class go extends _n{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new ve,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rm extends go{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _o(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Gs=new A,Br=new _o,kr=new _o,Gr=new _o;class Cm extends _n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Gs.subVectors(i[0],i[1]).add(i[0]),l=Gs);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Gs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Gs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Br.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),kr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Gr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Br.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),kr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Gr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Br.calc(c),kr.calc(c),Gr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Pm(s,e){const t=1-s;return t*t*e}function Lm(s,e){return 2*(1-s)*s*e}function Dm(s,e){return s*s*e}function ss(s,e,t,n){return Pm(s,e)+Lm(s,t)+Dm(s,n)}function Im(s,e){const t=1-s;return t*t*t*e}function Um(s,e){const t=1-s;return 3*t*t*s*e}function Nm(s,e){return 3*(1-s)*s*s*e}function Fm(s,e){return s*s*s*e}function rs(s,e,t,n,i){return Im(s,e)+Um(s,t)+Nm(s,n)+Fm(s,i)}class Jc extends _n{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,i.x,r.x,o.x,a.x),rs(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Om extends _n{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,i.x,r.x,o.x,a.x),rs(e,i.y,r.y,o.y,a.y),rs(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zc extends _n{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zm extends _n{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jc extends _n{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,i.x,r.x,o.x),ss(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bm extends _n{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,i.x,r.x,o.x),ss(e,i.y,r.y,o.y),ss(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(tc(a,c.x,l.x,h.x,u.x),tc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ve().fromArray(i))}return this}}var nc=Object.freeze({__proto__:null,ArcCurve:Rm,CatmullRomCurve3:Cm,CubicBezierCurve:Jc,CubicBezierCurve3:Om,EllipseCurve:go,LineCurve:Zc,LineCurve3:zm,QuadraticBezierCurve:jc,QuadraticBezierCurve3:Bm,SplineCurve:Qc});class km extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new nc[i.type]().fromJSON(i))}return this}}class Gm extends km{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zc(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new jc(this.currentPoint.clone(),new ve(e,t),new ve(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Jc(this.currentPoint.clone(),new ve(e,t),new ve(n,i),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new go(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vo extends Ct{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=bt(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new A,f=new ve,p=new A,g=new A,_=new A;let m=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=t;v++){const M=n+v*h*i,y=Math.sin(M),C=Math.cos(M);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*C,o.push(u.x,u.y,u.z),f.x=v/t,f.y=b/(e.length-1),a.push(f.x,f.y);const R=c[3*b+0]*y,N=c[3*b+1],x=c[3*b+0]*C;l.push(R,N,x)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){const y=M+v*e.length,C=y,b=y+e.length,R=y+e.length+1,N=y+1;r.push(C,b,N),r.push(R,N,b)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.points,e.segments,e.phiStart,e.phiLength)}}class xo extends vo{constructor(e=1,t=1,n=4,i=8){const r=new Gm;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new xo(e.radius,e.length,e.capSegments,e.radialSegments)}}class Gt extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new A,h=new ve;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ke extends Ct{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(p,2));function v(){const y=new A,C=new A;let b=0;const R=(t-e)/n;for(let N=0;N<=r;N++){const x=[],S=N/r,I=S*(t-e)+e;for(let F=0;F<=i;F++){const J=F/i,P=J*c+a,D=Math.sin(P),V=Math.cos(P);C.x=I*D,C.y=-S*n+m,C.z=I*V,u.push(C.x,C.y,C.z),y.set(D,R,V).normalize(),f.push(y.x,y.y,y.z),p.push(J,1-S),x.push(g++)}_.push(x)}for(let N=0;N<i;N++)for(let x=0;x<r;x++){const S=_[x][N],I=_[x+1][N],F=_[x+1][N+1],J=_[x][N+1];h.push(S,I,J),h.push(I,F,J),b+=6}l.addGroup(d,b,0),d+=b}function M(y){const C=g,b=new ve,R=new A;let N=0;const x=y===!0?e:t,S=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const I=g;for(let F=0;F<=i;F++){const P=F/i*c+a,D=Math.cos(P),V=Math.sin(P);R.x=x*V,R.y=m*S,R.z=x*D,u.push(R.x,R.y,R.z),f.push(0,S,0),b.x=D*.5+.5,b.y=V*.5*S+.5,p.push(b.x,b.y),g++}for(let F=0;F<i;F++){const J=C+F,P=I+F;y===!0?h.push(P,P+1,J):h.push(P+1,P,J),N+=3}l.addGroup(d,N,y===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jt extends Ke{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new jt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mo extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new A,y=new A,C=new A;for(let b=0;b<t.length;b+=3)p(t[b+0],M),p(t[b+1],y),p(t[b+2],C),c(M,y,C,v)}function c(v,M,y,C){const b=C+1,R=[];for(let N=0;N<=b;N++){R[N]=[];const x=v.clone().lerp(y,N/b),S=M.clone().lerp(y,N/b),I=b-N;for(let F=0;F<=I;F++)F===0&&N===b?R[N][F]=x:R[N][F]=x.clone().lerp(S,F/I)}for(let N=0;N<b;N++)for(let x=0;x<2*(b-N)-1;x++){const S=Math.floor(x/2);x%2===0?(f(R[N][S+1]),f(R[N+1][S]),f(R[N][S])):(f(R[N][S+1]),f(R[N+1][S+1]),f(R[N+1][S]))}}function l(v){const M=new A;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){const v=new A;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const y=m(v)/2/Math.PI+.5,C=d(v)/Math.PI+.5;o.push(y,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],y=o[v+2],C=o[v+4],b=Math.max(M,y,C),R=Math.min(M,y,C);b>.9&&R<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,M){const y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){const v=new A,M=new A,y=new A,C=new A,b=new ve,R=new ve,N=new ve;for(let x=0,S=0;x<r.length;x+=9,S+=6){v.set(r[x+0],r[x+1],r[x+2]),M.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),b.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(v).add(M).add(y).divideScalar(3);const I=m(C);_(b,S+0,v,I),_(R,S+2,M,I),_(N,S+4,y,I)}}function _(v,M,y,C){C<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.vertices,e.indices,e.radius,e.details)}}class sr extends Mo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sr(e.radius,e.detail)}}class pt extends Ct{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,f=new A,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const v=[],M=d/n;let y=0;d===0&&o===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const b=C/t;u.x=-e*Math.cos(i+b*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+b*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+y,1-M),v.push(l++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){const M=h[d][v+1],y=h[d][v],C=h[d+1][v],b=h[d+1][v+1];(d!==0||o>0)&&p.push(M,y,b),(d!==n-1||c<Math.PI)&&p.push(y,C,b)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hn extends Ct{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,f=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,v=(i+1)*p+g;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ae extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ls extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Z(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Hm extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hr=new nt,ic=new A,sc=new A;class yo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(ic),sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sc),t.updateMatrixWorld(),Hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vm extends yo{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Fi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wm extends ls{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rc=new nt,ji=new A,Vr=new A;class Xm extends yo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(ji),Vr.copy(n.position),Vr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vr),n.updateMatrixWorld(),i.makeTranslation(-ji.x,-ji.y,-ji.z),rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc)}}class Bt extends ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qm extends yo{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $m extends ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oc{constructor(e,t,n=0,i=1/0){this.ray=new lo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return io(e,this,n,t),n.sort(ac),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)io(e[i],this,n,t);return n.sort(ac),n}}function ac(s,e){return s.distance-e.distance}function io(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)io(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);const It={nightTop:"#070b12",nightBottom:"#0f172a",amber:"#f59e0b",red:"#ef4444",green:"#10b981"},_t={eyeHeight:1.62,radius:.42,walkSpeed:4.6,sprintSpeed:7.4,accel:42,maxHealth:100,maxArmor:50,leanAngle:.15,leanOffset:.62,leanRate:9,adsFov:55,baseFov:75,interactRange:3.5},dt={pistol:{name:"M9 Tactical Pistol",damage:26,pellets:1,fireInterval:.26,magSize:12,reserveMax:96,reloadTime:1.1,spreadDeg:.8,adsSpreadDeg:.25,recoilPitchDeg:.9,recoilYawDeg:.22,auto:!1,range:90,kickback:.05},rifle:{name:"K2 Assault Rifle",damage:17,pellets:1,fireInterval:.095,magSize:30,reserveMax:180,reloadTime:2,spreadDeg:1.6,adsSpreadDeg:.5,recoilPitchDeg:.5,recoilYawDeg:.16,auto:!0,range:150,kickback:.035},shotgun:{name:"M870 Pump Shotgun",damage:13,pellets:8,fireInterval:.95,magSize:5,reserveMax:30,reloadTime:2.6,spreadDeg:4.6,adsSpreadDeg:3.4,recoilPitchDeg:2.1,recoilYawDeg:.5,auto:!1,range:60,kickback:.09},launcher:{name:'FIM-92 "Vulcan" SAM',damage:60,pellets:1,fireInterval:1.5,magSize:1,reserveMax:6,reloadTime:3.4,spreadDeg:1,adsSpreadDeg:.4,recoilPitchDeg:1.4,recoilYawDeg:.3,auto:!1,range:240,kickback:.07}},fn={speed:26,blastRadius:5.5,blastMult:2,lockConeDeg:45,turnRate:6,fuseRadius:.9},pn={maxLevel:10,thresholds:[0,40,100,190,300,430,590,780,1e3,1250],hpPerLevel:12,healOnLevelUp:25,damagePerLevel:.1,fireRatePerLevel:.08,reloadPerLevel:.08};function Qs(s){return s>=9?3:s>=6?2:s>=3?1:0}const Km=[{dmgAdd:6,magAdd:2,pelletsAdd:0},{dmgAdd:12,magAdd:4,pelletsAdd:1},{dmgAdd:20,magAdd:6,pelletsAdd:2}],os={maxLevel:5,cost:s=>30+25*s,damagePerLevel:.18,fireRatePerLevel:.12,capacityPerLevel:.25,reloadPerLevel:.12},so={scout:{hp:34,shield:0,speed:6.6,radius:.55,credits:10,fireDamage:4,fireInterval:3.2,burst:1,attackRange:26},heavy:{hp:120,shield:90,speed:2.4,radius:.95,credits:30,fireDamage:6,fireInterval:4,burst:5,attackRange:32},kamikaze:{hp:45,shield:0,speed:9.2,radius:.6,credits:20,fireDamage:45,fireInterval:0,burst:0,attackRange:0},warden:{hp:45,shield:0,speed:4.2,radius:.7,credits:25,fireDamage:18,fireInterval:4.5,burst:1,attackRange:48},bomber:{hp:80,shield:0,speed:3.2,radius:.9,credits:35,fireDamage:46,fireInterval:5,burst:0,attackRange:0},crawler:{hp:55,shield:0,speed:5.4,radius:.55,credits:15,fireDamage:8,fireInterval:.9,burst:0,attackRange:0},colossus:{hp:420,shield:260,speed:1.8,radius:1.45,credits:90,fireDamage:12,fireInterval:4.6,burst:3,attackRange:36}},Jm=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,concurrent:6,spawnGap:2.2},{atProgress:20,scouts:8,heavies:0,kamikazes:3,concurrent:8,spawnGap:1.9},{atProgress:40,scouts:8,heavies:3,kamikazes:4,concurrent:10,spawnGap:1.6},{atProgress:60,scouts:10,heavies:5,kamikazes:6,concurrent:12,spawnGap:1.4},{atProgress:80,scouts:14,heavies:6,kamikazes:10,concurrent:15,spawnGap:1.1}],Zm=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,concurrent:6,spawnGap:2.2},{atProgress:20,scouts:7,heavies:0,kamikazes:3,wardens:2,concurrent:9,spawnGap:1.9},{atProgress:40,scouts:7,heavies:3,kamikazes:3,wardens:2,bombers:2,concurrent:11,spawnGap:1.6},{atProgress:60,scouts:9,heavies:4,kamikazes:5,wardens:3,bombers:2,concurrent:13,spawnGap:1.4},{atProgress:80,scouts:12,heavies:5,kamikazes:8,wardens:4,bombers:3,concurrent:16,spawnGap:1.1}],jm={skyTop:"#070b12",skyBottom:"#0f172a",ambient:"#1b2a44",ambientInt:.7,hemiSky:"#2c3d5e",hemiGround:"#0a0e15",hemiInt:.55,moon:"#8fb2e8",moonInt:.85,fog:"#0f172a"},Qm={skyTop:"#060a14",skyBottom:"#131c30",ambient:"#1e2c48",ambientInt:.7,hemiSky:"#31446a",hemiGround:"#0a0e15",hemiInt:.55,moon:"#a3c2f0",moonInt:1,fog:"#101a2c"},e0={skyTop:"#141026",skyBottom:"#6b3b2f",ambient:"#4c3a4e",ambientInt:.75,hemiSky:"#5a4055",hemiGround:"#171018",hemiInt:.6,moon:"#ffb37a",moonInt:.65,fog:"#3a2a35"},t0={skyTop:"#0e1830",skyBottom:"#4f7d92",ambient:"#3a5670",ambientInt:.8,hemiSky:"#6f93ac",hemiGround:"#141c26",hemiInt:.65,moon:"#bfe0ff",moonInt:.95,fog:"#2c4257"},n0={skyTop:"#180a12",skyBottom:"#7c2833",ambient:"#63303c",ambientInt:.75,hemiSky:"#7a3a44",hemiGround:"#1a0e12",hemiInt:.55,moon:"#ff9a70",moonInt:.7,fog:"#421f28"},cc={shack:[-9,-6],tower:[0,-4.5],bench:[8,5],searchlight:[-14.5,7],walls:[[8,-2.5,-.6],[-4,9,.4],[11,7.5,1.1]],sandbags:[[-8.5,5.5,.5],[6.5,-7.5,-.9],[12.5,2,1.4],[-2.5,-9.5,.1]]},i0={shack:[-11,-7],tower:[1,-2],bench:[9,7],searchlight:[-15,-4],walls:[[-6,6,.3],[7,-6,-.4],[3,10,1.2]],sandbags:[[-7,-10.5,.6],[6,-3,-.7],[12,10,1.3],[-1,-4,.2]]},s0={shack:[-10,7],tower:[0,1],bench:[9,-6],searchlight:[-14,-8],walls:[[-7,-3,.5],[6,6,-.3],[9,-10,.8]],sandbags:[[-6,-7,.3],[4,9,-1],[12,4,1.5],[-3,4,.1]]},r0={shack:[-9,8],tower:[0,-3],bench:[9,6],searchlight:[-13,-9],walls:[[-6,-8,.4],[7,3,-.5],[2,11,1.2]],sandbags:[[-8,-2,.2],[6,-9,-.8],[11,-6,1.4],[-6,12,.6]]},o0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,concurrent:6,spawnGap:2.2},{atProgress:20,scouts:7,heavies:0,kamikazes:3,crawlers:5,concurrent:10,spawnGap:1.9},{atProgress:40,scouts:7,heavies:3,kamikazes:3,wardens:2,bombers:1,crawlers:6,concurrent:12,spawnGap:1.6},{atProgress:60,scouts:9,heavies:4,kamikazes:5,wardens:3,crawlers:7,concurrent:14,spawnGap:1.4},{atProgress:80,scouts:12,heavies:5,kamikazes:8,wardens:4,bombers:3,crawlers:9,concurrent:17,spawnGap:1.1}],a0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,crawlers:3,concurrent:8,spawnGap:2.1},{atProgress:20,scouts:6,heavies:0,kamikazes:3,wardens:2,crawlers:5,concurrent:10,spawnGap:1.9},{atProgress:40,scouts:7,heavies:3,kamikazes:3,bombers:2,colossi:1,crawlers:6,concurrent:12,spawnGap:1.6},{atProgress:60,scouts:9,heavies:4,kamikazes:5,wardens:3,crawlers:7,colossi:1,concurrent:14,spawnGap:1.4},{atProgress:80,scouts:11,heavies:5,kamikazes:8,wardens:4,bombers:3,crawlers:8,colossi:2,concurrent:17,spawnGap:1.1}],c0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,crawlers:4,concurrent:8,spawnGap:2.1},{atProgress:20,scouts:7,heavies:0,kamikazes:4,wardens:2,crawlers:6,concurrent:11,spawnGap:1.9},{atProgress:40,scouts:8,heavies:3,kamikazes:3,bombers:2,crawlers:7,wardens:2,colossi:1,concurrent:13,spawnGap:1.6},{atProgress:60,scouts:10,heavies:4,kamikazes:6,wardens:3,crawlers:8,colossi:2,concurrent:15,spawnGap:1.4},{atProgress:80,scouts:12,heavies:6,kamikazes:9,wardens:4,bombers:4,crawlers:10,colossi:3,concurrent:18,spawnGap:1.1}],ln=[{id:"alpine",name:"ALPINE PASS",timeOfDay:"Night",blurb:"Standard hold on the snow plateau — scouts, heavies and kamikazes attack from every bearing.",newThreats:"",waves:Jm,hpMul:1,dmgMul:1,ambience:jm,layout:cc,launcherUnlock:!1},{id:"canyon",name:"CANYON RELAY",timeOfDay:"Night",blurb:"Narrow rock-walled corridor; hostiles funnel from both ridge gaps.",newThreats:"NEW: Warden sniper · Bomber drone",waves:Zm,hpMul:1.15,dmgMul:1.1,ambience:Qm,layout:cc,launcherUnlock:!1},{id:"rail",name:"FROZEN RAIL YARD",timeOfDay:"Dusk",blurb:"Dusk falls over the frozen rail yard — parked cars, warehouse and gantry choke the field.",newThreats:"NEW: Crawler ground unit · Unlock: Vulcan SAM",waves:o0,hpMul:1.3,dmgMul:1.2,ambience:e0,layout:i0,launcherUnlock:!0},{id:"dam",name:"DAM OVERLOOK",timeOfDay:"Dawn",blurb:"Dawn at the high dam — the 20 m wall shields the north, hostiles pour up from the valley.",newThreats:"NEW: Colossus armored fortress",waves:a0,hpMul:1.5,dmgMul:1.3,ambience:t0,layout:s0,launcherUnlock:!1},{id:"crater",name:"SUMMIT CRATER",timeOfDay:"Blood Dusk",blurb:"Final siege inside a ring-walled crater — the swarm enters through four gaps and everything it has comes at once.",newThreats:"All classes · Colossus pack",waves:c0,hpMul:1.75,dmgMul:1.45,ambience:n0,layout:r0,launcherUnlock:!1}],Qi={radius:5.5,maxDamage:46,towerHeat:14,towerRadius:7},l0=14,gt={baseSignalRate:.42,waveSignalRate:.3,heatGain:1.9,heatCool:.7,overheatAt:100,overheatRestartHold:2.5,overheatCoolTo:18,kamikazeTowerHeat:26,airdropProgress:[10,30,50,70,92],ammoStationCooldown:32,medStationCooldown:40,medHeal:40,medArmor:15,searchlightOverloadTime:22,searchlightCooldown:12,searchlightRange:62,searchlightAngleDeg:13},Qn={baseFog:.011,fogPerBlizzard:.017,fogOscillation:.0035,snowCount:1400,snowBox:55};class h0{constructor(e){B(this,"renderer");B(this,"scene");B(this,"camera");B(this,"fog");B(this,"moon");B(this,"skyTop");B(this,"skyBottom");B(this,"ambient");B(this,"hemi");this.renderer=new qc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=gc,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pc,e.appendChild(this.renderer.domElement),this.scene=new bm,this.fog=new po(new Z(It.nightBottom),Qn.baseFog),this.scene.fog=this.fog,this.camera=new Vt(u0,window.innerWidth/window.innerHeight,.05,400),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.ambient=new $m(new Z("#1b2a44"),.7),this.scene.add(this.ambient),this.hemi=new Hm(new Z("#2c3d5e"),new Z("#0a0e15"),.55),this.scene.add(this.hemi),this.moon=new Ym(new Z("#8fb2e8"),.85),this.moon.position.set(-40,55,-25),this.moon.castShadow=!0,this.moon.shadow.mapSize.set(1024,1024);const t=this.moon.shadow.camera;t.left=-45,t.right=45,t.top=45,t.bottom=-45,t.near=5,t.far=140,this.moon.shadow.bias=-.0015,this.scene.add(this.moon),this.buildSky(),window.addEventListener("resize",()=>this.onResize())}buildSky(){const e=new pt(320,24,16),t=new Gn({side:Ht,depthWrite:!1,fog:!1,uniforms:{top:{value:new Z(It.nightTop)},bottom:{value:new Z(It.nightBottom)}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vWorld = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 top; uniform vec3 bottom; varying vec3 vWorld;
        void main() {
          // bias toward bottom near the horizon so dusk/dawn tints read at eye level
          float h = clamp(vWorld.y / 320.0 * 0.5 + 0.5, 0.0, 1.0);
          gl_FragColor = vec4(mix(bottom, top, pow(h, 2.4)), 1.0);
        }`});this.skyTop=t.uniforms.top.value,this.skyBottom=t.uniforms.bottom.value,this.scene.add(new O(e,t));const n=new Ct,i=500,r=new Float32Array(i*3);for(let a=0;a<i;a++){const c=Math.random()*Math.PI*2,l=Math.acos(Math.random()*.92+.06),h=300;r[a*3]=h*Math.sin(l)*Math.cos(c),r[a*3+1]=h*Math.cos(l),r[a*3+2]=h*Math.sin(l)*Math.sin(c)}n.setAttribute("position",new qt(r,3));const o=new mo({color:12571903,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.8,fog:!1});this.scene.add(new $c(n,o))}setAmbience(e){this.skyTop.set(e.skyTop),this.skyBottom.set(e.skyBottom),this.ambient.color.set(e.ambient),this.ambient.intensity=e.ambientInt,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiInt,this.moon.color.set(e.moon),this.moon.intensity=e.moonInt,this.fog.color.set(e.fog)}setFog(e){this.fog.density=Qn.baseFog+Qn.fogPerBlizzard*e+Qn.fogOscillation*Math.sin(performance.now()*4e-4)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera)}}const u0=75;class d0{constructor(){B(this,"ctx",null);B(this,"master");B(this,"noiseBuf");B(this,"windGain",null);B(this,"humGain",null);B(this,"alarmOsc",null);B(this,"alarmGain",null);B(this,"enabled",!0)}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.startWind(),this.startDroneHum()}resume(){var e;(e=this.ctx)==null||e.resume()}noise(e){const t=this.ctx.createBufferSource();return t.buffer=this.noiseBuf,t.loop=!0,t.start(),t.stop(this.ctx.currentTime+e),t}env(e,t,n){const i=this.ctx.createGain(),r=this.ctx.currentTime;return i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(e,r+t),i.gain.exponentialRampToValueAtTime(1e-4,r+t+n),i}startWind(){const e=this.ctx.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=380,t.Q.value=.6,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.04,e.connect(t).connect(this.windGain).connect(this.master),e.start()}setWind(e){this.windGain&&(this.windGain.gain.value=.02+.09*e)}startDroneHum(){const e=this.ctx,t=e.createOscillator();t.type="sawtooth",t.frequency.value=84;const n=e.createOscillator();n.type="square",n.frequency.value=42;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=260,this.humGain=e.createGain(),this.humGain.gain.value=0,t.connect(i),n.connect(i),i.connect(this.humGain).connect(this.master),t.start(),n.start()}setDroneHum(e){this.humGain&&(this.humGain.gain.value=Math.min(.12,e*.018))}setAlarm(e){if(this.ctx)if(e&&!this.alarmOsc){const t=this.ctx.createOscillator();t.type="square",t.frequency.value=660;const n=this.ctx.createOscillator();n.frequency.value=3.2;const i=this.ctx.createGain();i.gain.value=.05,this.alarmGain=this.ctx.createGain(),this.alarmGain.gain.value=.06,n.connect(i).connect(this.alarmGain.gain),t.connect(this.alarmGain).connect(this.master),t.start(),n.start(),this.alarmOsc=t}else!e&&this.alarmOsc&&(this.alarmOsc.stop(),this.alarmOsc=null,this.alarmGain=null)}gunshot(e){if(!this.ctx||!this.enabled)return;const t=e==="shotgun"?{peak:.9,lp:900,decay:.28,thump:55}:e==="rifle"?{peak:.5,lp:2400,decay:.13,thump:85}:e==="launcher"?{peak:.85,lp:650,decay:.4,thump:46}:{peak:.55,lp:1600,decay:.16,thump:100},n=this.noise(t.decay+.05),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=t.lp;const r=this.env(t.peak,.002,t.decay);n.connect(i).connect(r).connect(this.master);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(t.thump,this.ctx.currentTime),o.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+t.decay);const a=this.env(t.peak*.8,.002,t.decay*.8);o.connect(a).connect(this.master),o.start(),o.stop(this.ctx.currentTime+t.decay+.1)}dryFire(){this.blip(2200,.05,.15,"square")}reload(){this.blip(900,.03,.08,"square"),setTimeout(()=>this.blip(650,.03,.09,"square"),180)}hitTick(){this.blip(1750,.04,.06,"triangle")}shieldZap(){if(!this.ctx||!this.enabled)return;const e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(220,this.ctx.currentTime+.12);const t=this.env(.16,.002,.13);e.connect(t).connect(this.master),e.start(),e.stop(this.ctx.currentTime+.2)}laser(){if(!this.ctx||!this.enabled)return;const e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(2400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(700,this.ctx.currentTime+.15);const t=this.env(.12,.002,.16);e.connect(t).connect(this.master),e.start(),e.stop(this.ctx.currentTime+.25)}explosion(){if(!this.ctx||!this.enabled)return;const e=this.noise(.9),t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(1400,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.8);const n=this.env(.85,.004,.85);e.connect(t).connect(n).connect(this.master);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(70,this.ctx.currentTime),i.frequency.exponentialRampToValueAtTime(24,this.ctx.currentTime+.7);const r=this.env(.7,.004,.7);i.connect(r).connect(this.master),i.start(),i.stop(this.ctx.currentTime+.9)}proximityBeep(e){this.blip(e,.05,.1,"sine")}pickup(){this.blip(880,.05,.12,"sine"),setTimeout(()=>this.blip(1320,.05,.14,"sine"),90)}uiClick(){this.blip(1100,.02,.05,"square")}repairDone(){this.blip(520,.04,.1,"sine"),setTimeout(()=>this.blip(780,.04,.12,"sine"),110),setTimeout(()=>this.blip(1040,.05,.16,"sine"),220)}levelUp(){[660,880,990,1320].forEach((t,n)=>setTimeout(()=>this.blip(t,.09,.3,"triangle"),n*90)),setTimeout(()=>this.blip(1980,.05,.45,"sine"),380)}fanfare(){[523,659,784,1046].forEach((t,n)=>setTimeout(()=>this.blip(t,.12,.5,"triangle"),n*160))}defeat(){[392,330,262,196].forEach((t,n)=>setTimeout(()=>this.blip(t,.1,.6,"sawtooth"),n*220))}blip(e,t,n,i){if(!this.ctx||!this.enabled)return;const r=this.ctx.createOscillator();r.type=i,r.frequency.value=e;const o=this.env(t,.003,n);r.connect(o).connect(this.master),r.start(),r.stop(this.ctx.currentTime+n+.05)}}function lc(s,e,t,n,i,r,o=3){s.push({kind:e,x:t,z:n,hx:0,hz:0,r:i,top:o})}function f0(s){const e=[],t=new Ze;s.add(t);const n=new ae({color:5333884,roughness:.95,metalness:0}),i=new O(new Gt(120,48),n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);const r=new O(new Gt(16,32),new ae({color:3951456,roughness:1}));r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,t.add(r);const o=new ae({color:791330,roughness:1,fog:!0}),a=new ae({color:1450810,roughness:1});for(let x=0;x<14;x++){const S=x/14*Math.PI*2+Math.random()*.25,I=150+Math.random()*70,F=45+Math.random()*60,J=new O(new jt(35+Math.random()*30,F,6),o);J.position.set(Math.cos(S)*I,F/2-6,Math.sin(S)*I),J.rotation.y=Math.random()*Math.PI,t.add(J);const P=new O(new jt(10+Math.random()*8,F*.3,6),a);P.position.set(J.position.x,F*.75,J.position.z),P.rotation.y=J.rotation.y,t.add(P)}const c=new ae({color:2766408,roughness:1});for(let x=0;x<26;x++){const S=x/26*Math.PI*2,I=54+Math.random()*4,F=8+Math.random()*6,J=12+Math.random()*12,P=new O(new re(F,J,F*.8),c);P.position.set(Math.cos(S)*I,J/2-1.5,Math.random()*2-1),P.position.x=Math.cos(S)*I,P.position.z=Math.sin(S)*I,P.rotation.y=S+Math.PI/2+(Math.random()-.5)*.4,P.receiveShadow=!0,t.add(P);const D=new O(new re(F*.95,1.2,F*.75),new ae({color:9414335,roughness:.9}));D.position.set(P.position.x,J-1.2,P.position.z),D.rotation.y=P.rotation.y,t.add(D),lc(e,"cyl",Math.cos(S)*I,Math.sin(S)*I,F*.42,void 0,20)}const l=new ae({color:3753562,roughness:1,flatShading:!0});for(let x=0;x<16;x++){const S=Math.random()*Math.PI*2,I=20+Math.random()*28,F=.8+Math.random()*1.6,J=new O(new sr(F,0),l);J.position.set(Math.cos(S)*I,F*.5,Math.sin(S)*I),J.rotation.set(Math.random(),Math.random(),Math.random()),J.castShadow=!0,J.receiveShadow=!0,t.add(J),F>1.4&&lc(e,"cyl",J.position.x,J.position.z,F*.9,void 0,F*1.6)}const h=new ae({color:2892056,roughness:1}),u=new ae({color:1320478,roughness:.9}),f=new ae({color:5334138,roughness:.9,transparent:!0,opacity:.35}),p=[];let g=0;for(;p.length<90&&g++<600;){const x=Math.random()*Math.PI*2,S=20+Math.random()*30,I=Math.cos(x)*S,F=Math.sin(x)*S;Math.hypot(I+8,F+6)<7||Math.hypot(I,F)<17&&Math.abs(F)<12&&Math.abs(I)<14||p.push({x:I,z:F,s:.8+Math.random()*.9})}const _=new Ke(.12,.2,1.6,5),m=new jt(1.5,4.6,7),d=new jt(1.55,1.4,7),v=new Fn(_,h,p.length),M=new Fn(m,u,p.length),y=new Fn(d,f,p.length),C=new nt;p.forEach((x,S)=>{C.makeScale(x.s,x.s,x.s).setPosition(x.x,.8*x.s,x.z),v.setMatrixAt(S,C),C.makeScale(x.s,x.s,x.s).setPosition(x.x,3.6*x.s,x.z),M.setMatrixAt(S,C),C.makeScale(x.s,x.s,x.s).setPosition(x.x,5.4*x.s,x.z),y.setMatrixAt(S,C)}),v.castShadow=!0,M.castShadow=!0,t.add(v,M,y);const b=new ae({color:2305082,roughness:.7,metalness:.6}),R=new Ke(.05,.05,1.4,4),N=new Fn(R,b,28);for(let x=0;x<28;x++){const S=x/28*Math.PI*2;C.makeTranslation(Math.cos(S)*15.5,.7,Math.sin(S)*15.5),N.setMatrixAt(x,C)}return t.add(N),{group:t,ground:i,colliders:e,spawnRingRadius:50,spawnAngle:()=>Math.random()*Math.PI*2}}class p0{constructor(e,t){B(this,"pool",[]);B(this,"fixtures",[]);B(this,"budget",0);B(this,"active",0);B(this,"_cands",[]);B(this,"_tmp",new A);B(this,"_frame",0);this.scene=e,this.setBudget(t)}collect(){const e=[];this.scene.traverse(t=>{t.isPointLight&&!this.pool.includes(t)&&e.push(t)});for(const t of e){const n=t.parent;n&&n.remove(t),this.fixtures.push({light:t,parent:n&&n!==this.scene?n:null})}return this.fixtures.length}setBudget(e){for(e=Math.max(1,Math.floor(e));this.pool.length<e;){const t=new Bt(16777215,0,0,2);t.name=`lightRigPool${this.pool.length}`,this.scene.add(t),this.pool.push(t)}for(;this.pool.length>e;){const t=this.pool.pop();t&&this.scene.remove(t)}this.budget=e}sweep(){this.scene.traverse(e=>{const t=e;if(!t.isPointLight||this.pool.includes(t)||this.fixtures.some(i=>i.light===t))return;const n=t.parent;n&&n.remove(t),this.fixtures.push({light:t,parent:n&&n!==this.scene?n:null})}),this.fixtures=this.fixtures.filter(e=>this.connected(e))}connected(e){if(!e.parent)return!0;let t=e.parent;for(;t;){if(t===this.scene)return!0;t=t.parent}return!1}shown(e){if(!e.light.visible)return!1;let t=e.parent;for(;t;){if(!t.visible)return!1;t=t.parent}return!0}worldPos(e,t){return e.parent?t.copy(e.light.position).applyMatrix4(e.parent.matrixWorld):t.copy(e.light.position),t}update(e){(this._frame=(this._frame+1)%20)===0&&this.sweep();const t=this._cands;t.length=0;for(const n of this.fixtures){const i=n.light;if(i.intensity<=0||!this.shown(n))continue;const r=this.worldPos(n,this._tmp).distanceToSquared(e),o=(i.distance||0)+8;r>o*o||t.push({f:n,d2:r})}t.sort((n,i)=>n.d2-i.d2);for(let n=0;n<this.pool.length;n++){const i=this.pool[n],r=t[n];if(!r){i.intensity=0;continue}const o=r.f.light;i.color.copy(o.color),i.intensity=o.intensity,i.distance=o.distance,i.decay=o.decay,this.worldPos(r.f,i.position)}this.active=Math.min(t.length,this.pool.length)}release(){for(const e of this.fixtures)e.parent?e.parent.add(e.light):this.scene.add(e.light);this.fixtures=[]}stats(){return{fixtures:this.fixtures.length,budget:this.budget,active:this.active}}}function hc(s,e,t,n,i,r,o=3){s.push({kind:e,x:t,z:n,hx:0,hz:0,r:i,top:o})}function m0(s){const e=[],t=new Ze;s.add(t);const n=new ae({color:4278099,roughness:.98,metalness:.05}),i=new O(new Gt(120,48),n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);const r=new O(new Gt(16,32),new ae({color:3752013,roughness:1}));r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,t.add(r);const o=new O(new ri(9,130),new ae({color:1915474,roughness:.25,metalness:.55}));o.rotation.x=-Math.PI/2,o.position.set(3.2,.03,4),t.add(o);const a=new ae({color:2574435,roughness:.3,metalness:.4});for(let P=0;P<6;P++){const D=new O(new Gt(1.6+Math.random()*2.4,10),a);D.rotation.x=-Math.PI/2,D.position.set(-16+Math.random()*32,.028,-30+Math.random()*60),t.add(D)}const c=new ae({color:3093825,roughness:1,flatShading:!0}),l=new ae({color:8360875,roughness:.9}),h=new nt,u=new re(9,18,7),f=new re(9.2,1.4,7.2),p=[];for(const P of[-1,1])for(let D=0;D<=17;D++){const V=-63+D*7.5+(Math.random()-.5)*2.5,K=P*(26+Math.random()*5),Y=14+Math.random()*12,$=new O(u,c);$.position.set(K,Y*18/36,V),$.scale.y=Y/18,$.rotation.y=P*(Math.PI/2)+(Math.random()-.5)*.3,$.receiveShadow=!0,p.push($),hc(e,"cyl",K,V,4.2,void 0,20)}const g=new Fn(u,c,p.length);p.forEach((P,D)=>{h.compose(P.position,P.quaternion,P.scale),g.setMatrixAt(D,h)}),t.add(g);const _=[];p.forEach(P=>{const D=new O(f,l);D.position.set(P.position.x,P.scale.y*9+.4,P.position.z),D.rotation.copy(P.rotation),_.push(D)});const m=new Fn(f,l,_.length);_.forEach((P,D)=>{h.makeRotationY(P.rotation.y).setPosition(P.position),m.setMatrixAt(D,h)}),t.add(m);for(const P of[-1,1])for(let D=0;D<9;D++){const V=-72+D*18,K=26+Math.random()*18,Y=new O(new re(10,K,14),new ae({color:1251880,roughness:1,fog:!0}));Y.position.set(P*(44+Math.random()*6),K/2-1,V),Y.rotation.y=(Math.random()-.5)*.4,t.add(Y)}const d=new ae({color:3817808,roughness:1,flatShading:!0});for(let P=0;P<14;P++){const D=Math.random()*Math.PI*2,V=20+Math.random()*24,K=Math.cos(D)*V,Y=Math.sin(D)*V;if(Math.abs(K)>20)continue;const $=.8+Math.random()*1.5,q=new O(new sr($,0),d);q.position.set(K,$*.5,Y),q.rotation.set(Math.random(),Math.random(),Math.random()),q.castShadow=!0,t.add(q),$>1.3&&hc(e,"cyl",K,Y,$*.9,void 0,$*1.6)}const v=new ae({color:2366484,roughness:1}),M=new Ke(.09,.2,4.2,5),y=new Fn(M,v,34);let C=0,b=0;for(;C<34&&b++<400;){const P=-40+Math.random()*80,D=(Math.random()-.5)*40;Math.hypot(D,P)<18||(h.makeScale(1,.7+Math.random()*.7,1).setPosition(D,1.8,P),y.setMatrixAt(C++,h))}y.count=C,y.castShadow=!0,t.add(y);const R=(P,D,V,K)=>{const q=new O(new re(6.2,2.6,2.4),new ae({color:K,roughness:.7,metalness:.35}));q.position.set(P,1.3,D),q.rotation.y=V,q.castShadow=!0,q.receiveShadow=!0,t.add(q);const ie=new O(new re(6.2+.05,.5,2.4+.05),new ae({color:2304048,roughness:.8,metalness:.3}));ie.position.set(P,2.1,D),ie.rotation.y=V,t.add(ie);const ce=Math.abs(Math.cos(V))>.5;e.push({kind:"box",x:P,z:D,hx:ce?6.2/2:2.4/2,hz:ce?2.4/2:6.2/2,r:0,top:2.6})};R(-17,3,0,6962990),R(16,6,Math.PI/2,3033694),R(2,19,0,5003834),R(-6,-14.5,Math.PI/2,6181680),R(19.5,-10,Math.PI/2,3752527);const N=new ae({color:4864560,roughness:.85,metalness:.25}),x=new O(new re(2.2,1.6,2.4),N);x.position.set(-2,.8,-19),x.castShadow=!0,t.add(x);const S=new O(new re(4.4,1.4,2.5),N);S.position.set(-6.2,.9,-19.4),S.rotation.z=.22,S.castShadow=!0,t.add(S),e.push({kind:"box",x:-4.2,z:-19.2,hx:4.4,hz:1.6,r:0,top:1.7});const I=new ae({color:2305082,roughness:.7,metalness:.6}),F=new Ke(.05,.05,1.4,4),J=new Fn(F,I,28);for(let P=0;P<28;P++){const D=P/28*Math.PI*2;h.makeTranslation(Math.cos(D)*15.5,.7,Math.sin(D)*15.5),J.setMatrixAt(P,h)}return t.add(J),{group:t,ground:i,colliders:e,spawnRingRadius:50,spawnAngle:()=>(Math.random()<.5?Math.PI/2:-Math.PI/2)+(Math.random()-.5)*.6}}const Zt=(s,e=.6)=>new ae({color:s,roughness:.55,metalness:e});function g0(s){const e=[],t=new Ze;s.add(t);const n=new O(new Gt(120,48),new ae({color:3355965,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const i=new O(new Gt(16,32),new ae({color:4014153,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=.02,i.receiveShadow=!0,t.add(i);const r=new ae({color:2500654,roughness:1}),o=Zt(9147298,.85),a=[-17,-23,13,19];for(const d of a){const v=new O(new re(84,.1,2.2),r);v.position.set(0,.05,d),v.receiveShadow=!0,t.add(v);for(const M of[-.75,.75]){const y=new O(new re(84,.14,.12),o);y.position.set(0,.17,d+M),t.add(y)}}const c=[6109742,3622234,4866608,4477022];a.forEach((d,v)=>{for(const M of[-24,-10,4,18]){const y=new Ze,C=new O(new re(11,3.2,2.6),Zt(c[(v+(M>0?1:0))%4],.35));C.position.y=2.1,C.castShadow=!0,C.receiveShadow=!0,y.add(C);const b=new O(new re(11.2,.2,2.8),Zt(2304048,.4));b.position.y=3.8,y.add(b);for(const N of[-4,4]){const x=new O(new re(2.4,.7,2.2),Zt(1843498,.7));x.position.set(N,.55,0),y.add(x)}const R=new O(new re(11.05,.3,.05),new ae({color:273,emissive:new Z("#f59e0b"),emissiveIntensity:.5}));R.position.set(0,2.6,1.31),y.add(R),y.position.set(M,0,d),t.add(y),e.push({kind:"box",x:M,z:d,hx:5.6,hz:1.5,r:0,top:4})}});const l=new O(new re(10,2.8,2.6),Zt(4864560,.3));l.position.set(-31,1.4,3),l.rotation.z=1.25,l.rotation.y=.4,l.castShadow=!0,t.add(l),e.push({kind:"box",x:-31,z:3,hx:4,hz:2.2,r:0,top:2.8});const h=new Ze,u=new O(new re(16,7,12),Zt(3358799,.4));u.position.y=3.5,u.castShadow=!0,u.receiveShadow=!0,h.add(u);const f=new O(new re(16.6,.5,12.6),Zt(2107702,.5));f.position.y=7.2,h.add(f);const p=new O(new ri(3.4,4.2),new ae({color:790809}));p.position.set(-8.05,2.1,0),p.rotation.y=Math.PI/2,h.add(p),h.position.set(32,0,-6),t.add(h),e.push({kind:"box",x:32,z:-6,hx:8,hz:6,r:0,top:7});const g=new Bt(new Z("#ffc98a"),45,26,1.6);g.position.set(23,5,-6),t.add(g);for(const d of[-20,20]){const v=new O(new Ke(.32,.36,9,8),Zt(4477022));v.position.set(26,4.5,d),v.castShadow=!0,t.add(v),e.push({kind:"cyl",x:26,z:d,hx:0,hz:0,r:.5,top:9})}const _=new O(new re(.5,.6,41),Zt(3752527));_.position.set(26,9.1,0),t.add(_);for(let d=0;d<6;d++){const v=-30+d*12,M=new O(new re(.26,7,.26),Zt(2892056,.15));M.position.set(v,3.5,27),M.castShadow=!0,t.add(M);const y=new O(new re(2.2,.14,.14),Zt(2892056,.15));y.position.set(v,6.4,27),t.add(y)}for(const d of[-18,18]){const v=new O(new Ke(.18,.24,10,8),Zt(3884631));v.position.set(d,5,0),t.add(v);const M=new O(new re(.9,.3,.5),Zt(2305082));M.position.set(d,10,0),t.add(M);const y=new Bt(new Z("#ffbd80"),55,34,1.6);y.position.set(d,9.6,0),t.add(y)}const m=new ae({color:1315096,roughness:1,fog:!0});for(let d=0;d<10;d++){const v=d/10*Math.PI*2+.3,M=140+Math.random()*50,y=30+Math.random()*40,C=new O(new jt(30+Math.random()*24,y,6),m);C.position.set(Math.cos(v)*M,y/2-5,Math.sin(v)*M),C.rotation.y=Math.random()*Math.PI,t.add(C)}return{group:t,ground:n,colliders:e,spawnRingRadius:50,spawnAngle:()=>Math.random()*Math.PI*2}}const Hs=s=>new ae({color:s,roughness:.95});function _0(s){const e=[],t=new Ze;s.add(t);const n=new O(new Gt(120,48),new ae({color:4015698,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const i=new O(new Gt(16,32),new ae({color:4608092,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=.02,i.receiveShadow=!0,t.add(i);const r=Hs(5594988),o=Hs(7042692),a=0,c=-55,l=26;for(let v=0;v<19;v++){const M=(-70+v*7.777777777777778)*(Math.PI/180),y=a+Math.sin(M)*l,C=c+Math.cos(M)*l,b=new O(new re(9.2,26,3.4),r);b.position.set(y,11.5,C),b.rotation.y=M,b.castShadow=!0,b.receiveShadow=!0,t.add(b);const R=new O(new re(9.4,.6,3.8),o);R.position.set(y,24.6,C),R.rotation.y=M,t.add(R),e.push({kind:"cyl",x:y,z:C,hx:0,hz:0,r:3.6,top:20})}const h=new Bt(new Z("#9fd4ff"),40,30,1.6);h.position.set(0,2,-28),t.add(h);for(const v of[19,25]){const M=new O(new re(1.3,8,16),Hs(5068645));M.position.set(v,4,-2),M.castShadow=!0,M.receiveShadow=!0,t.add(M),e.push({kind:"box",x:v,z:-2,hx:.7,hz:8,r:0,top:8})}const u=new O(new re(5.4,.1,16),new ae({color:2900567,roughness:.4,metalness:.15}));u.position.set(22,.06,-2),t.add(u);const f=Hs(4871265),p=[[-24,16],[-19,16],[-14,18],[-24,22],[-19,22],[-14,24]];for(const[v,M]of p){const y=new O(new re(3.4,2.6,3.4),f);y.position.set(v,1.3,M),y.castShadow=!0,y.receiveShadow=!0,t.add(y);const C=new O(new Ke(.18,.18,1.1,6),new ae({color:6969902,roughness:.6}));C.position.set(v,3.1,M),t.add(C),e.push({kind:"box",x:v,z:M,hx:1.7,hz:1.7,r:0,top:2.6})}const g=new ae({color:2892056,roughness:1}),_=new ae({color:1909808,roughness:.95});for(let v=0;v<8;v++){const M=-34+Math.random()*6,y=-14+v*4.5,C=new O(new Ke(.14,.22,4.4,5),g);C.position.set(M,2.2,y),C.rotation.z=(Math.random()-.5)*.24,t.add(C);for(let b=0;b<3;b++){const R=new O(new re(2.4-b*.6,.09,.09),_);R.position.set(M+(b%2?.9:-.9),2.6+b*.8,y),R.rotation.z=(b%2?-1:1)*.5,t.add(R)}}for(const v of[-16,16]){const M=new Bt(new Z("#bfe0ff"),30,24,1.7);M.position.set(v,24.5,-32),t.add(M)}const m=new ae({color:857120,roughness:1,fog:!0});for(let v=0;v<9;v++){const M=Math.PI+v/9*Math.PI,y=160+Math.random()*40,C=50+Math.random()*55,b=new O(new jt(34+Math.random()*26,C,6),m);b.position.set(Math.cos(M)*y,C/2-6,Math.sin(M)*y-40),t.add(b)}return{group:t,ground:n,colliders:e,spawnRingRadius:50,spawnAngle:()=>Math.random()<.7?Math.PI/2+(Math.random()-.5)*2.4:(Math.random()<.5?0:Math.PI)+(Math.random()-.5)*.6}}function v0(s){const e=[],t=new Ze;s.add(t);const n=new O(new Gt(120,48),new ae({color:2365984,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const i=new O(new Gt(44,40),new ae({color:2826278,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=.01,i.receiveShadow=!0,t.add(i);const r=new O(new Gt(18,32),new ae({color:3820126,roughness:.4,metalness:.15}));r.rotation.x=-Math.PI/2,r.position.y=.03,t.add(r);const o=new O(new Gt(16,32),new ae({color:3352108,roughness:1}));o.rotation.x=-Math.PI/2,o.position.y=.05,o.receiveShadow=!0,t.add(o);const a=new ae({color:3811888,roughness:1,flatShading:!0}),c=new ae({color:5913146,roughness:1}),l=[Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];for(let v=0;v<24;v++){const M=v/24*Math.PI*2;if(l.some(I=>Math.abs(Math.atan2(Math.sin(M-I),Math.cos(M-I)))<Math.PI/12))continue;const C=40+(Math.random()-.5)*1.6,b=11+Math.random()*6,R=Math.cos(M)*C,N=Math.sin(M)*C,x=new O(new re(10.4,b,7),a);x.position.set(R,b/2-1,N),x.rotation.y=M+Math.PI/2,x.castShadow=!0,x.receiveShadow=!0,t.add(x);const S=new O(new re(10.6,1.1,7.2),c);S.position.set(R,b-1.1,N),S.rotation.y=x.rotation.y,t.add(S),e.push({kind:"cyl",x:R,z:N,hx:0,hz:0,r:3.6,top:b-1})}for(const v of l){const M=new O(new pt(.3,8,8),new ae({color:4196360,emissive:new Z("#ef4444"),emissiveIntensity:2.2}));M.position.set(Math.cos(v)*40,3.2,Math.sin(v)*40),t.add(M)}const h=new ae({color:1445910,roughness:.35,metalness:.4,flatShading:!0}),u=[[-28,10,7],[-23,-14,6],[-17,25,5],[15,27,7],[27,13,6],[30,-9,8],[19,-25,5],[7,-31,7],[-7,-26,6],[-31,-3,5]];for(const[v,M,y]of u){const C=new O(new jt(1.3,y,6),h);C.position.set(v,y/2,M),C.rotation.y=Math.random()*Math.PI,C.rotation.z=(Math.random()-.5)*.2,C.castShadow=!0,t.add(C),e.push({kind:"cyl",x:v,z:M,hx:0,hz:0,r:1,top:y})}const f=new ae({color:2365984,roughness:1}),p=new Yt({color:new Z("#c9b0a8"),transparent:!0,opacity:.07,blending:kt,depthWrite:!1,side:Wt}),g=[[-14,19],[17,-15],[-21,-19],[12,21]];for(const[v,M]of g){const y=new O(new Ke(.95,1.15,.7,10),f);y.position.set(v,.35,M),t.add(y),e.push({kind:"cyl",x:v,z:M,hx:0,hz:0,r:1,top:.7});const C=new O(new jt(2.2,12,10,1,!0),p);C.position.set(v,6,M),t.add(C)}const _=new O(new re(7,2.4,3),new ae({color:4142135,roughness:.8,metalness:.3}));_.position.set(22,1.1,30),_.rotation.y=.7,_.rotation.z=.2,_.castShadow=!0,t.add(_),e.push({kind:"box",x:22,z:30,hx:3.4,hz:1.7,r:0,top:2.6});const m=new ae({color:1182224,roughness:1,fog:!0});for(let v=0;v<10;v++){const M=v/10*Math.PI*2,y=150+Math.random()*60,C=26+Math.random()*34,b=new O(new jt(30+Math.random()*22,C,5),m);b.position.set(Math.cos(M)*y,C/2-6,Math.sin(M)*y),t.add(b)}return{group:t,ground:n,colliders:e,spawnRingRadius:46,spawnAngle:()=>l[Math.floor(Math.random()*l.length)]+(Math.random()-.5)*.3}}const tn=(s=3884631,e=.7)=>new ae({color:s,roughness:.55,metalness:e}),x0=new ae({color:4870753,roughness:.95}),M0=new ae({color:7037520,roughness:1});function y0(s,e){const t=[],n=[],i=new Ze;s.add(i);const r=(_e,ue,he,oe=3)=>t.push({kind:"cyl",x:_e,z:ue,hx:0,hz:0,r:he,top:oe}),o=(_e,ue,he,oe,de=3)=>t.push({kind:"box",x:_e,z:ue,hx:he,hz:oe,r:0,top:de}),a=new Ze,c=new ae({color:3029321,roughness:.8}),l=(_e,ue,he,oe,de,Ce,Ve=c)=>{const ze=new O(new re(_e,ue,he),Ve);return ze.position.set(oe,de,Ce),ze.castShadow=!0,ze.receiveShadow=!0,a.add(ze),ze};l(7,3.4,.3,0,1.7,-3),l(.3,3.4,6,-3.5,1.7,0),l(7,3.4,.3,0,1.7,3),l(.3,3.4,2.2,3.5,1.7,-1.9),l(.3,3.4,2.4,3.5,1.7,1.8),l(.3,1,1.4,3.5,2.9,0);const h=l(7.6,.25,6.6,0,3.55,0,new ae({color:5596284,roughness:.9}));h.rotation.z=.03;const u=new O(new ri(1.4,2.4),new ae({color:790809}));u.position.set(3.51,1.2,0),u.rotation.y=-Math.PI/2,a.add(u);const[f,p]=e.shack;a.position.set(f,0,p),i.add(a),o(f,p,3.8,3.3,3.6);const g=new Bt(new Z(It.amber),26,14,1.6);g.position.set(f,2.4,p),i.add(g);const _=new Bt(new Z("#ffd9a0"),14,7,1.8);_.position.set(f+3.9,2,p),i.add(_);const m=new A(e.tower[0],0,e.tower[1]),d=new Ze,v=tn(5397869,.8),M=new Ke(.1,.14,22,6);for(let _e=0;_e<3;_e++){const ue=_e/3*Math.PI*2,he=new O(M,v);he.position.set(Math.cos(ue)*1.4,11,Math.sin(ue)*1.4),he.castShadow=!0,d.add(he)}for(let _e=3;_e<=21;_e+=4.5){const ue=new O(new Hn(1.35-_e/22*.9,.05,4,12),v);ue.rotation.x=Math.PI/2,ue.position.y=_e,d.add(ue)}const y=new O(new Ke(.06,.1,5,5),v);y.position.y=24,d.add(y);const C=new O(new pt(.28,10,10),new ae({color:5570560,emissive:new Z(It.red),emissiveIntensity:2}));C.position.y=26.6,d.add(C);const b=new Bt(new Z(It.red),30,25,1.5);b.position.y=26.6,d.add(b);const R=new O(new pt(1.6,14,10,0,Math.PI*2,0,Math.PI/2.6),tn(9082792,.6));R.position.set(0,13,1.6),R.rotation.x=-Math.PI/3.2,d.add(R);const N=[];for(let _e=0;_e<3;_e++){const ue=new Yt({color:new Z(It.green),transparent:!0,opacity:.5,blending:kt,depthWrite:!1}),he=new O(new Hn(1.8+_e*.35,.035,6,20),ue);he.rotation.x=Math.PI/2,he.position.y=2,he.userData.base=_e,d.add(he),N.push(ue)}const x=new Bt(new Z(It.green),18,16,1.5);x.position.set(0,3,0),d.add(x),d.position.copy(m),i.add(d),r(m.x,m.z,1.7,26);const S=new A(m.x+1.4,0,m.z+3.1),I=new Ze,F=new O(new re(1.9,1.1,.9),tn(3752527,.5));F.position.y=.55,F.castShadow=!0,I.add(F);const J=new O(new ri(1.5,.55),new ae({color:267277,emissive:new Z(It.green),emissiveIntensity:1.4}));J.position.set(0,1.15,-.2),J.rotation.x=-.5,I.add(J);const P=new Bt(new Z(It.green),6,5,1.8);P.position.set(0,1.4,.2),I.add(P),I.position.copy(S),I.lookAt(m.x,0,m.z),i.add(I),o(S.x,S.z,1.1,.6,1.1),n.push({id:"console",kind:"console",pos:new A(S.x-.1,1.2,S.z+1.3),label:"Repair & reboot transmitter",readyAt:0});const D=(_e,ue,he)=>{const oe=new O(new re(5.5,1.5,.7),x0);oe.position.set(_e,.75,ue),oe.rotation.y=he,oe.castShadow=!0,oe.receiveShadow=!0,i.add(oe);const de=new O(new re(5.5,.15,.75),new ae({color:8228518,roughness:.9}));de.position.set(_e,1.55,ue),de.rotation.y=he,i.add(de),r(_e,ue,2.4,1.6)};for(const[_e,ue,he]of e.walls)D(_e,ue,he);const V=new re(1.1,.36,.62);for(const[_e,ue,he]of e.sandbags){const oe=new Ze;for(let Ce=0;Ce<3;Ce++)for(let Ve=0;Ve<3-(Ce===2?1:0);Ve++){const ze=new O(V,M0);ze.position.set((Ve-1)*1.05+(Ce===1?.5:0),.18+Ce*.36,0),ze.castShadow=!0,ze.receiveShadow=!0,oe.add(ze)}const de=new O(new re(3,.06,.7),new ae({color:9676735,roughness:.9}));de.position.y=1.26,oe.add(de),oe.position.set(_e,0,ue),oe.rotation.y=he,i.add(oe),r(_e,ue,1.5,1.3)}const K=new O(new re(2.4,1.7,1.5),tn(4477025));K.position.set(13,.85,-3.5),K.castShadow=!0,i.add(K);const Y=new O(new Ke(.12,.12,2.6,6),tn(5924469));Y.position.set(13.8,2.2,-3.5),i.add(Y);const $=new O(new Ke(1,1,3,12),new ae({color:8010538,roughness:.6,metalness:.4}));$.position.set(15,1.5,-1),$.castShadow=!0,i.add($),r(13.8,-2.6,2.4,3);const q=new A(e.searchlight[0],0,e.searchlight[1]),ie=new Ze,ce=new O(new Ke(.16,.22,6.6,8),tn(5003112));ce.position.y=3.3,ie.add(ce);const X=new O(new Ke(.8,.8,.16,10),tn(3752527));X.position.y=6.6,ie.add(X);const j=tn(6977158,.8),xe=[],be=[],we=[],Fe=new Ke(.34,.5,.8,10);for(const _e of[-.7,.7]){const ue=new O(Fe,j);ue.rotation.x=Math.PI/2,ue.position.set(_e,7.2,0),ie.add(ue);const he=new at;he.position.set(0,4,34),ie.add(he);const oe=new Wm(new Z("#d8ecff"),0,90,vt.degToRad(gt.searchlightAngleDeg),.45,1);oe.position.set(_e,7.2,0),oe.target=he,ie.add(oe),be.push(oe),xe.push(he);const de=55,Ce=new jt(4.6,de,16,1,!0);Ce.translate(0,-de/2,0);const Ve=new O(Ce,new Yt({color:new Z("#bcd8ff"),transparent:!0,opacity:.07,blending:kt,depthWrite:!1,side:Wt}));Ve.position.set(_e,7.2,0),ie.add(Ve),we.push(Ve)}ie.position.copy(q),i.add(ie),r(q.x,q.z,.7,6.6);const Oe=new O(new re(.5,.7,.3),tn(5595762));Oe.position.set(q.x+.7,1.3,q.z),i.add(Oe),n.push({id:"searchlight",kind:"searchlight",pos:new A(q.x+1.2,1.3,q.z),label:"Searchlight breaker",readyAt:0});const Re=new A(0,-.06,1),Je=new A(q.x,7.2,q.z);let z=.4;const At={group:ie,update(_e,ue,he,oe){z=.55*Math.sin(ue*.22);let de=z;if(he.length>0){let ze=0,Be=0;for(const L of he)ze+=L.x,Be+=L.z;de=Math.atan2(ze-q.x,Be-q.z);let le=de-z;for(;le>Math.PI;)le-=Math.PI*2;for(;le<-Math.PI;)le+=Math.PI*2;de=z+le*.6}const Ce=-.12+.06*Math.sin(ue*.31);Re.set(Math.sin(de),Ce,Math.cos(de)).normalize();const Ve=oe?2200:0;for(let ze=0;ze<be.length;ze++){be[ze].intensity=Ve,xe[ze].position.set(Re.x*40,Re.y*40,Re.z*40);const Be=new Bi().setFromUnitVectors(new A(0,-1,0),Re);we[ze].quaternion.copy(Be),we[ze].visible=oe}},isInBeam(_e){const ue=_e.clone().sub(Je);return ue.length()>gt.searchlightRange?!1:(ue.normalize(),ue.dot(Re)>Math.cos(vt.degToRad(gt.searchlightAngleDeg)+.06))}},Pe=(_e,ue,he)=>{const oe=new O(new re(1.1,.8,1.1),new ae({color:he,roughness:.8}));return oe.position.set(_e,.4,ue),oe.castShadow=!0,i.add(oe),t.push({kind:"box",x:_e,z:ue,hx:.6,hz:.6,r:0,top:.85}),oe},Le=f+5.6,Se=p-1.2,Qe=p+2.2;Pe(Le,Se,5003834);const ke=new O(new re(1.12,.08,.08),new ae({color:273,emissive:new Z(It.amber),emissiveIntensity:1.6}));ke.position.set(Le,.62,Se+.58),i.add(ke),n.push({id:"ammo",kind:"ammo",pos:new A(Le,1,Se+.85),label:"Ammo resupply rack",readyAt:0}),Pe(Le,Qe,5911347);const T=new ae({color:273,emissive:new Z(It.red),emissiveIntensity:1.8}),w=new O(new re(.5,.14,.06),T);w.position.set(Le,.5,Qe+.58);const k=new O(new re(.14,.5,.06),T);k.position.set(Le,.5,Qe+.58),i.add(w,k),n.push({id:"medkit",kind:"medkit",pos:new A(Le,1,Qe+.85),label:"Med station",readyAt:0});const Q=new Ze,ee=new O(new re(2.4,.12,1),tn(4871268,.3));ee.position.y=.95,ee.castShadow=!0,Q.add(ee);for(const[_e,ue]of[[-1,-.4],[1,-.4],[-1,.4],[1,.4]]){const he=new O(new re(.1,.9,.1),tn(3752527));he.position.set(_e,.45,ue),Q.add(he)}const se=new O(new re(.08,1.2,1.8),tn(2896961));se.position.set(-1.3,1.6,0),Q.add(se);const Ee=new Bt(new Z(It.amber),10,6,1.8);Ee.position.set(0,2,0),Q.add(Ee);const[pe,ye]=e.bench;Q.position.set(pe,0,ye),i.add(Q),o(pe,ye,1.4,.7,2.2),n.push({id:"workbench",kind:"workbench",pos:new A(pe-1.2,1.2,ye),label:"Weapon mod bench (B)",readyAt:0});const Te=new Z,He=(_e,ue)=>{const he=Math.sin(ue*3)>.6;C.material.emissiveIntensity=he?3:.4,b.intensity=he?36:4;for(let oe=0;oe<N.length;oe++)N[oe].opacity=.35+.25*Math.sin(ue*2+oe*1.4)},te=(_e,ue,he)=>{he?Te.set(It.red):ue>70?Te.set(It.amber):Te.set(It.green);for(const oe of N)oe.color.copy(Te);x.color.copy(Te),J.material.emissive.copy(Te),P.color.copy(Te),x.intensity=12+_e*.2};return{root:i,colliders:t,interactables:n,searchlight:At,towerTop:new A(m.x,26.6,m.z),towerPos:m,consolePos:S,setSignalVisuals:te,update:He}}class S0{constructor(e,t,n){B(this,"keys",{});B(this,"recoilPitch",0);B(this,"recoilYaw",0);B(this,"trauma",0);B(this,"mouseSens",.0021);B(this,"adsHeld",!1);this.camera=e,this.colliders=t,this.state=n}setColliders(e){this.colliders=e}onKey(e,t){this.keys[e]=t}onMouseMove(e,t){this.state.ads>.4?this.mouseSens=.0013:this.mouseSens=.0021,this.state.yaw-=e*this.mouseSens,this.state.pitch-=t*this.mouseSens,this.state.pitch=vt.clamp(this.state.pitch,-1.45,1.45)}addRecoil(e,t){this.recoilPitch+=e,this.recoilYaw+=(Math.random()-.5)*2*t}addTrauma(e){this.trauma=Math.min(1,this.trauma+e)}update(e){const t=this.state,n=this.keys,i=-Math.sin(t.yaw),r=-Math.cos(t.yaw),o=Math.cos(t.yaw),a=-Math.sin(t.yaw);let c=0,l=0;n.KeyW&&(c+=i,l+=r),n.KeyS&&(c-=i,l-=r),n.KeyD&&(c+=o,l+=a),n.KeyA&&(c-=o,l-=a);const h=Math.hypot(c,l);t.sprinting=!!n.ShiftLeft&&h>0&&this.state.ads<.3;const u=(t.sprinting?_t.sprintSpeed:_t.walkSpeed)*(1-.45*t.ads);h>0&&(c/=h,l/=h,t.vel.x+=c*_t.accel*e,t.vel.z+=l*_t.accel*e);const f=Math.hypot(t.vel.x,t.vel.z),p=h>0?u:0;if(f>p){const b=Math.exp(-10*e);t.vel.x*=b,t.vel.z*=b}t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e;for(const b of this.colliders)if(b.kind==="cyl"){const R=t.pos.x-b.x,N=t.pos.z-b.z,x=Math.hypot(R,N),S=b.r+_t.radius;if(x<S&&x>1e-4){const I=(S-x)/x;t.pos.x+=R*I,t.pos.z+=N*I}}else{const R=t.pos.x-b.x,N=t.pos.z-b.z,x=b.hx+_t.radius-Math.abs(R),S=b.hz+_t.radius-Math.abs(N);x>0&&S>0&&(x<S?t.pos.x+=R>0?x:-x:t.pos.z+=N>0?S:-S)}const g=Math.hypot(t.pos.x,t.pos.z);if(g>52){const b=52/g;t.pos.x*=b,t.pos.z*=b}t.leanTarget=(n.KeyE?1:0)+(n.KeyQ?-1:0),t.ads>.6&&(t.leanTarget*=.35),t.lean=vt.damp(t.lean,t.leanTarget,_t.leanRate,e);const _=this.adsHeld&&!t.sprinting?1:0;t.ads=vt.damp(t.ads,_,12,e);const m=Math.exp(-7*e);this.recoilPitch*=m,this.recoilYaw*=m,this.trauma*=Math.exp(-2.2*e);const d=performance.now()*.001,M=f>1.5?Math.sin(d*(t.sprinting?11:8))*.035*(t.ads>.5?.25:1):0,y=this.trauma*.02;this.camera.position.set(t.pos.x+o*t.lean*_t.leanOffset,_t.eyeHeight+M+Math.sin(d*31)*y,t.pos.z+a*t.lean*_t.leanOffset),this.camera.rotation.set(t.pitch+this.recoilPitch+Math.sin(d*27)*y,t.yaw+this.recoilYaw+Math.sin(d*19)*y*.7,-t.lean*_t.leanAngle);const C=vt.lerp(_t.baseFov,_t.adsFov,t.ads);Math.abs(this.camera.fov-C)>.01&&(this.camera.fov=C,this.camera.updateProjectionMatrix())}planarSpeed(){return Math.hypot(this.state.vel.x,this.state.vel.z)}eye(){return this.camera.position.clone()}}function w0(){return{pos:new A(0,0,10),vel:new A,yaw:0,pitch:0,health:_t.maxHealth,maxHealth:_t.maxHealth,armor:25,lean:0,leanTarget:0,ads:0,sprinting:!1,credits:0}}function E0(){return{phase:"brief",time:0,progress:0,wave:0,heat:0,overheated:!1,blizzard:.25,searchlightOn:!1,searchlightRuntime:0,searchlightCooldownUntil:0,stats:{kills:{scout:0,heavy:0,kamikaze:0,warden:0,bomber:0,crawler:0,colossus:0},shotsFired:0,pelletsFired:0,pelletsHit:0,airdrops:0,overheatEvents:0,repairs:0},endReason:"",score:0,level:1}}function b0(){return{pistol:{id:"pistol",mag:dt.pistol.magSize,reserve:dt.pistol.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}},rifle:{id:"rifle",mag:dt.rifle.magSize,reserve:dt.rifle.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}},shotgun:{id:"shotgun",mag:dt.shotgun.magSize,reserve:dt.shotgun.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}},launcher:{id:"launcher",mag:dt.launcher.magSize,reserve:dt.launcher.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}}}}function Ws(s,e,t=1){const n=dt[s],i=Math.max(0,t-1),r=Qs(t),o=r>0?Km[r-1]:{dmgAdd:0,magAdd:0,pelletsAdd:0};return{damage:(n.damage+o.dmgAdd)*(1+.18*e.damage)*(1+pn.damagePerLevel*i),pellets:n.pellets+o.pelletsAdd,fireInterval:n.fireInterval/((1+.12*e.fireRate)*(1+pn.fireRatePerLevel*i)),magSize:Math.round((n.magSize+o.magAdd)*(1+.25*e.capacity)),reloadTime:n.reloadTime/((1+.12*e.reload)*(1+pn.reloadPerLevel*i))}}const Tt=(s=4015442,e=.25)=>new ae({color:s,roughness:.45,metalness:e}),ii=(s=3357253)=>new ae({color:s,roughness:.8,metalness:.1}),uc=()=>new ae({color:6112816,roughness:.8});function it(s,e,t,n,i,r){const o=new O(s,e);return o.position.set(t,n,i),r.add(o),o}function T0(){const s=new Ze;it(new re(.04,.055,.24),Tt(3818064),0,-.02,-.14,s),it(new re(.036,.13,.05),ii(),0,-.09,-.03,s).rotation.x=.25,it(new re(.03,.02,.03),Tt(1382946),0,-.005,-.27,s),it(new re(.008,.014,.008),Tt(10134965),0,.015,-.25,s),it(new re(.02,.018,.012),Tt(10134965),0,.015,-.03,s);const e=new at;return e.position.set(0,-.02,-.3),s.add(e),s.userData.muzzle=e,s}function A0(){const s=new Ze;it(new re(.055,.08,.46),Tt(3423047),0,-.04,-.28,s),it(new Ke(.016,.016,.42,8),Tt(2764858),0,-.025,-.68,s).rotation.x=Math.PI/2,it(new re(.03,.16,.07),ii(),0,-.15,-.2,s),it(new re(.035,.06,.22),ii(),0,-.05,.08,s),it(new re(.028,.11,.04),ii(),0,-.11,-.06,s).rotation.x=.3,it(new re(.016,.014,.3),Tt(4871525),0,.005,-.3,s),it(new re(.012,.02,.02),Tt(1119516),0,.02,-.42,s),it(new Hn(.014,.003,6,12),Tt(1119516),0,.02,-.16,s),it(new Ke(.018,.018,.09,8),Tt(1711912),.035,-.075,-.45,s).rotation.x=Math.PI/2;const e=new at;return e.position.set(0,-.025,-.9),s.add(e),s.userData.muzzle=e,s}function R0(){const s=new Ze;it(new re(.055,.085,.34),Tt(3686219),0,-.04,-.18,s),it(new Ke(.021,.021,.62,8),Tt(2501686),0,-.005,-.66,s).rotation.x=Math.PI/2,it(new Ke(.026,.026,.2,8),Tt(2764858),0,-.05,-.55,s).rotation.x=Math.PI/2,it(new re(.04,.07,.26),uc(),0,-.06,.12,s),it(new re(.03,.1,.04),uc(),0,-.11,-.02,s).rotation.x=.35,it(new Ke(.024,.024,.03,8),Tt(5858426),0,-.005,-.97,s).rotation.x=Math.PI/2;const e=new at;return e.position.set(0,-.005,-.98),s.add(e),s.userData.muzzle=e,s}function C0(){const s=new Ze,e=it(new Ke(.055,.06,.78,10),Tt(3818062),0,-.04,-.32,s);e.rotation.x=Math.PI/2;const t=it(new Ke(.07,.055,.16,10),Tt(2764858),0,-.04,.12,s);t.rotation.x=Math.PI/2,it(new re(.05,.03,.3),ii(2830910),0,.02,-.5,s),it(new re(.018,.045,.018),Tt(10134965),0,.05,-.62,s),it(new re(.014,.06,.03),ii(),0,-.12,-.24,s).rotation.x=.3,it(new re(.016,.07,.035),ii(),0,-.13,-.02,s).rotation.x=.25,it(new Hn(.03,.006,6,12),Tt(5858426),0,.03,-.15,s);const n=new at;return n.position.set(0,-.04,-.74),s.add(n),s.userData.muzzle=n,s}class P0{constructor(e,t,n){B(this,"current","pistol");B(this,"autoLevel",1);B(this,"groups");B(this,"muzzleFlash");B(this,"flashTimer",0);B(this,"cooldown",0);B(this,"reloadTimer",0);B(this,"reloadTotal",1);B(this,"switchTimer",0);B(this,"kick",0);B(this,"pump",0);B(this,"locked",new Set(["launcher"]));this.camera=e,this.runtimes=t,this.audio=n,this.groups={pistol:T0(),rifle:A0(),shotgun:R0(),launcher:C0()};for(const r of Object.keys(this.groups))this.groups[r].visible=r===this.current,this.groups[r].scale.setScalar(.52),e.add(this.groups[r]);this.muzzleFlash=new Bt(new Z("#ffb347"),0,8,2),this.muzzleFlash.position.set(.3,-.25,-.9),e.add(this.muzzleFlash);const i=new Bt(new Z("#9fb8e8"),1.1,2.2,1.6);i.position.set(.2,.25,0),e.add(i)}get busy(){return this.reloadTimer>0||this.switchTimer>0}unlock(e){this.locked.delete(e)}switchTo(e){e===this.current||this.busy||this.locked.has(e)||(this.groups[this.current].visible=!1,this.current=e,this.groups[e].visible=!0,this.switchTimer=.65,this.reloadTimer=0,this.cooldown=.3,this.audio.uiClick())}cycle(e){const t=["pistol","rifle","shotgun","launcher"].filter(i=>!this.locked.has(i)),n=t.indexOf(this.current);this.switchTo(t[(n+e+t.length)%t.length])}startReload(){const e=this.runtimes[this.current],t=Ws(this.current,e.levels,this.autoLevel);return this.busy||e.mag>=t.magSize||e.reserve<=0?!1:(this.reloadTotal=t.reloadTime,this.reloadTimer=t.reloadTime,this.audio.reload(),!0)}tryFire(e,t){if(this.busy||this.cooldown>0)return null;const n=this.runtimes[this.current],i=Ws(this.current,n.levels,this.autoLevel);if(n.mag<=0)return this.audio.dryFire(),this.startReload(),null;n.mag-=1,this.cooldown=i.fireInterval,this.kick=1,this.current==="shotgun"&&(this.pump=1),this.flashTimer=.05,this.audio.gunshot(this.current);const r=this.camera.getWorldDirection(new A),a=vt.degToRad(dt[this.current].spreadDeg*(1-e.ads)+dt[this.current].adsSpreadDeg*e.ads)*(1+(t?.9:0)),c=[];for(let h=0;h<i.pellets;h++){const u=r.clone();if(a>0){const f=Math.random()*Math.PI*2,p=(h===0?0:Math.sqrt(Math.random()))*a,g=new A(0,1,0),_=new A().crossVectors(g,r).normalize(),m=new A().crossVectors(r,_).normalize();u.addScaledVector(_,Math.cos(f)*p).addScaledVector(m,Math.sin(f)*p).normalize()}c.push(u)}const l=this.groups[this.current].userData.muzzle.getWorldPosition(new A);return{dirs:c,muzzleWorld:l,damage:i.damage,range:dt[this.current].range}}finishReload(){const e=this.runtimes[this.current],n=Ws(this.current,e.levels,this.autoLevel).magSize-e.mag,i=Math.min(n,e.reserve);e.mag+=i,e.reserve-=i}update(e){this.cooldown=Math.max(0,this.cooldown-e),this.reloadTimer>0&&(this.reloadTimer-=e,this.reloadTimer<=0&&(this.reloadTimer=0,this.finishReload())),this.switchTimer>0&&(this.switchTimer=Math.max(0,this.switchTimer-e)),this.kick=Math.max(0,this.kick-e*6),this.pump=Math.max(0,this.pump-e*3),this.flashTimer=Math.max(0,this.flashTimer-e),this.muzzleFlash.intensity=this.flashTimer>0?25*(this.flashTimer/.05):0;const t=this.groups[this.current],n=t.userData.adsEase??0,i=t,r=this.camera.userData.adsEase??0;i.userData.adsEase=vt.damp(n,r,12,e);const o=i.userData.adsEase,a=Math.sin(performance.now()*.0016)*.004,c=Math.cos(performance.now()*.0013)*.004,l=Math.sin(Math.min(1,this.switchTimer/.65)*Math.PI)*-.25,h=this.reloadTimer>0?Math.sin((1-this.reloadTimer/this.reloadTotal)*Math.PI)*-.18:0;if(i.position.set(vt.lerp(.16,0,o)+a,vt.lerp(-.12,-.008,o)+c+l+h-this.kick*dt[this.current].kickback,vt.lerp(-.5,-.34,o)+this.kick*.06),i.rotation.set(this.kick*.12+(this.reloadTimer>0?.35:0),this.kick*.02,-this.kick*.05),this.current==="shotgun"){const u=i.children[2];u&&(u.position.z=-.55+this.pump*.12)}}}const je=s=>new ae({color:s,roughness:.5,metalness:.65}),Wr=new Yt({visible:!1});function Rn(s,e,t,n,i,r){const o=new Ze;o.position.set(e,t,n);const a=new O(new Hn(i,.045,6,14),je(2896704));a.rotation.x=Math.PI/2,o.add(a);const c=new Ze;for(let l=0;l<2;l++){const h=new O(new re(i*1.9,.015,.08),r);h.rotation.y=l*Math.PI/2,c.add(h)}return o.add(c),s.add(o),s.userData.blades=s.userData.blades||[],s.userData.blades.push(c),o}function L0(){const s=new Ze,e=je(4608100),t=new O(new xo(.24,.42,4,10),e);t.rotation.x=Math.PI/2,s.add(t);const n=new ae({color:3346688,emissive:new Z("#ff5a1f"),emissiveIntensity:2.4}),i=new O(new pt(.09,10,10),n);i.position.set(0,0,-.42),s.add(i);for(let r=0;r<3;r++){const o=r/3*Math.PI*2+.5,a=Math.cos(o)*.42,c=Math.sin(o)*.42,l=new O(new re(.35,.04,.06),e);l.position.set(a*.6,.12,c*.6),l.lookAt(0,.12,0),s.add(l),Rn(s,a,.18,c,.2,je(7042694))}return s.userData.blades=s.userData.blades,s}function D0(){const s=new Ze,e=new O(new re(1.3,.75,1),je(3818580));e.castShadow=!0,s.add(e);const t=new O(new re(1.7,.22,.5),je(3028806));t.position.set(0,.42,0),s.add(t),Rn(s,-.75,.55,0,.42,je(5858426)),Rn(s,.75,.55,0,.42,je(5858426));const n=new ae({color:207411,emissive:new Z("#22d3ee"),emissiveIntensity:2}),i=new O(new Ke(.18,.18,.3,10),n);i.position.set(0,0,.55),s.add(i);const r=new ae({color:3345677,emissive:new Z("#ef4444"),emissiveIntensity:2.2});for(const c of[-.3,.3]){const l=new O(new pt(.07,8,8),r);l.position.set(c,.05,-.52),s.add(l)}const o=new Yt({color:new Z("#06b6d4"),transparent:!0,opacity:.22,blending:kt,depthWrite:!1,side:Wt}),a=new O(new pt(1.25,16,12,Math.PI*.7,Math.PI*1.6),o);return a.rotation.y=Math.PI/2,s.add(a),s.userData.shieldMesh=a,s}function I0(){const s=new Ze,e=new ae({color:3804429,emissive:new Z("#ef4444"),emissiveIntensity:2.4}),t=new O(new pt(.34,12,12),e);s.add(t);const n=new O(new re(1,.08,1),je(4866100));n.rotation.y=Math.PI/4,n.position.y=.18,s.add(n);for(const[a,c]of[[.42,.42],[-.42,.42],[.42,-.42],[-.42,-.42]])Rn(s,a,.26,c,.22,je(7042694));const i=new O(new re(.05,.3,.2),je(3357769));i.position.set(0,.35,.3),s.add(i);const r=new ae({color:3345677,emissive:new Z("#ff7847"),emissiveIntensity:2.6}),o=new O(new pt(.08,8,8),r);return o.position.set(0,-.2,-.3),s.add(o),s.userData.blades=s.userData.blades,s}function U0(){const s=new Ze,e=new O(new Ke(.3,.42,.95,6),je(5130042));e.castShadow=!0,s.add(e);const t=new O(new Ke(.46,.46,.12,6),je(3354666));t.position.y=.4,s.add(t),Rn(s,-.62,.62,0,.3,je(7827551)),Rn(s,.62,.62,0,.3,je(7827551));const n=new O(new Ke(.05,.06,.95,6),je(2764085));n.rotation.x=Math.PI/2,n.position.set(0,-.05,-.72),s.add(n);const i=new ae({color:3351040,emissive:new Z("#ffb020"),emissiveIntensity:2.6}),r=new O(new pt(.1,10,10),i);r.position.set(0,.05,-.4),s.add(r);const o=new O(new re(.16,.1,.24),je(2040880));o.position.set(0,.28,-.3),s.add(o);const a=new O(new re(.05,.34,.26),je(3357769));return a.position.set(0,.28,.36),s.add(a),s.userData.blades=s.userData.blades,s}function N0(){const s=new Ze,e=new O(new re(1.15,.42,1.15),je(5260854));e.castShadow=!0,s.add(e);const t=new O(new re(1.5,.12,1.5),je(3682858));t.position.y=.26,s.add(t);for(let c=0;c<6;c++){const l=c/6*Math.PI*2+Math.PI/6;Rn(s,Math.cos(l)*.88,.36,Math.sin(l)*.88,.26,je(7301208))}const n=new ae({color:2367258,roughness:.6,metalness:.4,emissive:new Z("#ef4444"),emissiveIntensity:1.1}),i=new O(new pt(.3,12,10),n);i.position.y=-.42,s.add(i);const r=new ae({color:273,emissive:new Z("#f59e0b"),emissiveIntensity:1.6}),o=new O(new re(1.2,.06,.06),r);o.position.set(0,.34,.62),s.add(o);const a=new ae({color:3345677,emissive:new Z("#ff7847"),emissiveIntensity:2.2});for(const c of[-.4,.4]){const l=new O(new pt(.06,8,8),a);l.position.set(c,.1,-.6),s.add(l)}return s.userData.blades=s.userData.blades,s}function F0(){const s=new Ze,e=new O(new Ke(.5,.36,1.1,6),je(4867126));e.rotation.x=Math.PI/2,e.position.y=.62,e.castShadow=!0,s.add(e);const t=new O(new re(.9,.14,.7),je(3485738));t.position.y=1,s.add(t);const n=new ae({color:3345677,emissive:new Z("#ff5a1f"),emissiveIntensity:2.4}),i=new O(new pt(.09,8,8),n);i.position.set(0,.75,-.58),s.add(i);const r=new ae({color:1841686,roughness:.6,metalness:.5,emissive:new Z("#ef4444"),emissiveIntensity:.8}),o=new O(new re(.34,.2,.3),r);o.position.set(0,.45,-.68),s.add(o);const a=new re(.09,.62,.09),c=je(2895928),l=[];for(const[h,u]of[[-1,0],[1,Math.PI]])for(let f=0;f<3;f++){const p=new Ze;p.position.set(h*.42,.66,-.36+f*.36);const g=new O(a,c);g.position.y=-.3,p.add(g),p.rotation.z=h*.5,p.userData.phase=u+f*1.3,s.add(p),l.push(p)}return s.userData.legs=l,Rn(s,0,1.08,.42,.26,je(7301208)),s}function O0(){const s=new Ze,e=new O(new re(2.5,1.3,1.9),je(3752271));e.castShadow=!0,s.add(e);const t=new O(new re(1.5,.5,1.2),je(2831168));t.position.y=.85,s.add(t);for(const[l,h]of[[-1.35,-.9],[1.35,-.9],[-1.35,.9],[1.35,.9]])Rn(s,l,1.15,h,.68,je(5726842));const n=new ae({color:207411,emissive:new Z("#22d3ee"),emissiveIntensity:1.8}),i=new O(new Ke(.3,.3,.5,12),n);i.position.set(0,0,.98),s.add(i);const r=new ae({color:3345677,emissive:new Z("#ef4444"),emissiveIntensity:2.2});for(const l of[-.55,0,.55]){const h=new O(new pt(.09,8,8),r);h.position.set(l,.15,-.98),s.add(h)}const o=new O(new re(.8,.4,1.2),je(2304565));o.position.set(0,-.8,-.5),s.add(o);for(const l of[-.25,.25]){const h=new O(new Ke(.06,.07,.9,6),je(1711912));h.rotation.x=Math.PI/2,h.position.set(l,-.85,-1.2),s.add(h)}const a=new Yt({color:new Z("#06b6d4"),transparent:!0,opacity:.22,blending:kt,depthWrite:!1,side:Wt}),c=new O(new pt(2.05,18,12,Math.PI*.7,Math.PI*1.6),a);return c.rotation.y=Math.PI/2,s.add(c),s.userData.shieldMesh=c,s}function z0(s){return new A(s.x,s.y+1.8,s.z)}function B0(s,e,t,n){const i=e.clone().sub(s),r=n.clone().sub(t),o=s.clone().sub(t),a=i.lengthSq(),c=r.lengthSq(),l=r.dot(o);let h=0,u=0,f=0,p=0;if(a<=1e-9&&c<=1e-9)return s.distanceTo(t);if(a<=1e-9)u=l/c;else{if(p=i.dot(o),c<=1e-9)h=-p/a;else{f=i.dot(r);const g=a*c-f*f;h=g!==0?(f*l-p*c)/g:0,u=(f*h+l)/c}h=vt.clamp(h,0,1),u=vt.clamp(u,0,1),h=vt.clamp((f*u-p)/a,0,1)}return u=vt.clamp(u,0,1),s.clone().addScaledVector(i,h).distanceTo(t.clone().addScaledVector(r,u))}const k0={scout:L0,heavy:D0,kamikaze:I0,warden:U0,bomber:N0,crawler:F0,colossus:O0};class G0{constructor(e,t){B(this,"drones",[]);B(this,"scene");B(this,"projectiles",[]);B(this,"bombs",[]);B(this,"projGeo",new pt(.09,6,6));B(this,"projMat",new Yt({color:new Z("#ff6b4a"),blending:kt,transparent:!0,fog:!1}));B(this,"bombGeo",new pt(.16,8,8));B(this,"bombMat",new ae({color:1314828,roughness:.7,emissive:new Z("#ef4444"),emissiveIntensity:1.2}));B(this,"colliders",[]);B(this,"hpMul",1);B(this,"dmgMul",1);this.cb=t,this.scene=e}setColliders(e){this.colliders=e}setMods(e,t){this.hpMul=e,this.dmgMul=t}spawn(e,t){const n=so[e],i=k0[e]();i.position.copy(t);const r=new O(new pt(n.radius+.12,8,8),Wr);i.add(r);let o=null,a=null;if(e==="heavy"||e==="colossus"){const l=e==="colossus";o=new O(new pt(l?2.15:1.3,10,8),Wr),o.position.set(0,0,l?-.9:-.45),i.add(o),a=new O(new pt(l?.75:.5,6,6),Wr),a.position.set(0,l?1.05:.62,0),i.add(a)}const c={kind:e,group:i,hp:Math.round(n.hp*this.hpMul),shield:Math.round(n.shield*this.hpMul),maxShield:Math.round(n.shield*this.hpMul),radius:n.radius,phase:Math.random()*Math.PI*2,strafe:Math.random()>.5?1:-1,fireTimer:1+Math.random()*2,burstLeft:0,burstTimer:0,spotted:!1,dying:!1,deathTimer:0,targetTower:e==="kamikaze"&&Math.random()<.35,beepTimer:0,charge:0,chargeTick:0,hitN:null,rotors:i.userData.blades??[],bodyHit:r,shieldHit:o,weakHit:a,shieldMat:e==="heavy"?i.userData.shieldMesh.material:null,vel:new A};r.userData={drone:c,part:"body"},o&&(o.userData={drone:c,part:"shield"}),a&&(a.userData={drone:c,part:"weak"}),this.drones.push(c),this.scene.add(i)}hitMeshes(){const e=[];for(const t of this.drones)t.dying||(e.push(t.bodyHit),t.shieldHit&&t.shield>0&&e.push(t.shieldHit),t.weakHit&&e.push(t.weakHit));return e}applyDamage(e,t,n){if(e.dying)return{killed:!1,shieldHit:!1};let i=n,r=!1;if(t==="weak"){if(i*=2,e.shield>0){const o=Math.min(e.shield,i);e.shield-=o,i-=o,r=!0}}else if(t==="shield"&&e.shield>0){const o=Math.min(e.shield,i);e.shield-=o,i-=o,r=!0}if(e.shield<=0&&e.shieldMat){e.shieldMat.opacity=0;const o=e.group.userData.shieldMesh;o&&(o.visible=!1)}if(e.hp-=i,e.shieldMat&&e.shield<=0){e.shieldMat.opacity=0;const o=e.group.userData.shieldMesh;o&&(o.visible=!1)}return e.hp<=0?(e.kind==="kamikaze"&&this.cb.onExplosion(e.group.position.clone(),"kamikaze",!0),e.dying=!0,e.deathTimer=1.4,e.kind!=="kamikaze"&&this.cb.onExplosion(e.group.position.clone(),e.kind,!0),{killed:!0,shieldHit:r}):{killed:!1,shieldHit:r}}killAll(){for(const e of this.drones)e.dying||(e.dying=!0,e.deathTimer=.9,this.cb.onExplosion(e.group.position.clone(),e.kind,!0))}activeCount(){return this.drones.filter(e=>!e.dying).length}clearHostiles(){for(const e of this.drones)this.scene.remove(e.group);this.drones.length=0;for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles.length=0;for(const e of this.bombs)this.scene.remove(e.mesh);this.bombs.length=0}update(e,t,n,i,r){const o=new A;for(let a=this.drones.length-1;a>=0;a--){const c=this.drones[a];for(const _ of c.rotors)_.rotation.y+=e*40;if(c.dying){c.deathTimer-=e,c.group.rotation.z+=e*6,c.group.rotation.x+=e*2,c.group.position.y-=e*9,c.group.traverse(_=>{const m=_;if(m.isMesh&&m.material instanceof ae){let d=m.material;m.userData.dyingInit||(m.userData.dyingInit=!0,d=d.clone(),m.material=d),d.emissive=new Z("#ff6a00"),d.emissiveIntensity=Math.max(0,d.emissiveIntensity*(1-e*2))}}),c.deathTimer<=0&&(this.scene.remove(c.group),this.drones.splice(a,1));continue}if(!r)continue;const l=so[c.kind],h=c.kind==="kamikaze"&&c.targetTower?i:n,u=o.copy(h).sub(c.group.position),f=u.length();u.normalize();const p=new A;for(const _ of this.drones){if(_===c||_.dying)continue;const m=_.group.position.distanceTo(c.group.position);m<2.2&&m>.001&&p.addScaledVector(c.group.position.clone().sub(_.group.position),(2.2-m)/m)}const g=l.speed;if(c.kind==="scout"){const _=11+Math.sin(t*.6+c.phase)*3,m=new A(-u.z,0,u.x).multiplyScalar(c.strafe),d=new A(Math.sin(t*3.1+c.phase),Math.sin(t*2.3+c.phase*2)*.5,Math.cos(t*2.7+c.phase)).multiplyScalar(c.spotted?.8:2.6),v=u.multiplyScalar(f>_?g:-g*.6).add(m.multiplyScalar(g*.5)).add(d).add(p.multiplyScalar(1.4));v.y+=(3.2+Math.sin(t+c.phase)*1.2-c.group.position.y)*1.5,this.steer(c,v,e,g*1.6)}else if(c.kind==="heavy"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*(c.spotted?0:g*.55)),d=u.multiplyScalar(f>17?g:-g*.4).add(m).add(p.multiplyScalar(2));d.y+=(4.2-c.group.position.y)*1.2,this.steer(c,d,e,g*1.2),c.group.lookAt(n.x,c.group.position.y,n.z)}else if(c.kind==="colossus"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*(c.spotted?0:g*.5)),d=u.clone().multiplyScalar(f>20?g:-g*.35).add(m).add(p.multiplyScalar(2.4));d.y+=(5-c.group.position.y)*1.1,this.steer(c,d,e,g*1.2),c.group.lookAt(n.x,c.group.position.y,n.z)}else if(c.kind==="crawler"){const _=u.clone().multiplyScalar(g).add(p.multiplyScalar(1.6));_.y+=(.75-c.group.position.y)*3,this.steer(c,_,e,g*1.4),c.group.lookAt(h.x,c.group.position.y,h.z);const m=c.group.userData.legs;if(m)for(let d=0;d<m.length;d++)m[d].rotation.x=Math.sin(t*16+m[d].userData.phase)*.42;if(f<2.4&&r&&(c.fireTimer-=e,c.fireTimer<=0)){c.fireTimer=l.fireInterval*(.85+Math.random()*.4);const d=c.group.position.clone().add(new A(0,.6,0)),v=n.clone().add(new A(0,1,0));this.cb.onLaser(d,v),this.cb.onPlayerHit(Math.round(l.fireDamage*this.dmgMul),d),this.cb.onBeep(240)}}else if(c.kind==="warden"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*g*.75),d=f>33?g:f<26?-g:0,v=u.clone().multiplyScalar(d).add(m).add(p.multiplyScalar(1.5));v.y+=(6.2+Math.sin(t*.7+c.phase)*.8-c.group.position.y)*1.2,this.steer(c,v,e,g*1.3),c.group.lookAt(h.x,c.group.position.y,h.z)}else if(c.kind==="bomber"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*g*.6),d=u.clone().multiplyScalar(f>20?g:-g*.4).add(m).add(p.multiplyScalar(2));if(d.y+=(7.6-c.group.position.y)*1.2,this.steer(c,d,e,g*1.3),c.group.lookAt(h.x,c.group.position.y,h.z),c.fireTimer-=e,c.fireTimer<=0){c.fireTimer=l.fireInterval*(.8+Math.random()*.5);const v=new O(this.bombGeo,this.bombMat);v.position.copy(c.group.position).add(new A(0,-.6,0));const M=new A(n.x-c.group.position.x,0,n.z-c.group.position.z).clampLength(0,3);this.scene.add(v),this.bombs.push({mesh:v,vel:new A(M.x,-1,M.z),life:8}),this.cb.onBeep(320)}}else{const _=u.clone().multiplyScalar(g).add(p.multiplyScalar(1.8));_.y+=(Math.max(h.y+1.2,1.6)-c.group.position.y)*.8,this.steer(c,_,e,g*1.5),c.group.lookAt(h.x,h.y+1,h.z);const m=c.targetTower?3.6:2.4;if(f<m){this.cb.onExplosion(c.group.position.clone(),"kamikaze",!1),c.dying=!0,c.deathTimer=.01;continue}if(c.beepTimer-=e,c.beepTimer<=0){const d=vt.clamp(1-f/40,0,1);this.cb.onBeep(500+d*1400),c.beepTimer=.9-d*.75}}if(c.kind==="warden")if(c.charge>0){if(c.charge-=e,c.chargeTick-=e,c.chargeTick<=0){c.chargeTick=.28;const _=c.group.position.clone(),m=n.clone().add(new A(0,1.1,0));this.cb.onLaser(_,m),this.cb.onBeep(1150)}if(c.charge<=0){const _=c.group.position.clone(),m=n.clone().add(new A(0,1,0)),d=new A((Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5).multiplyScalar(c.spotted?.3:1);m.add(d),this.cb.onLaser(_,m);const v=new O(this.projGeo,this.projMat);v.scale.setScalar(1.4),v.position.copy(_),this.scene.add(v),this.projectiles.push({mesh:v,vel:m.sub(_).normalize().multiplyScalar(34),life:4,dmg:Math.round(l.fireDamage*this.dmgMul)})}}else c.fireTimer-=e,c.fireTimer<=0&&f<l.attackRange&&(c.charge=1.4,c.chargeTick=0,c.fireTimer=l.fireInterval*(.85+Math.random()*.4));if(c.kind==="scout"||c.kind==="heavy"||c.kind==="colossus")if(c.fireTimer-=e,c.burstLeft>0){if(c.burstTimer-=e,c.burstTimer<=0){c.burstLeft-=1,c.burstTimer=.12;const _=c.group.position.clone(),m=new A((Math.random()-.5)*1.4,(Math.random()-.5)*1,(Math.random()-.5)*1.4).multiplyScalar(c.spotted?.4:1),d=n.clone().add(new A(0,1.1,0)).add(m);this.cb.onLaser(_,d);const v=_.clone(),M=d.sub(_).normalize().multiplyScalar(19),y=new O(this.projGeo,this.projMat);y.position.copy(v),this.scene.add(y),this.projectiles.push({mesh:y,vel:M,life:3,dmg:Math.round(l.fireDamage*this.dmgMul)})}}else c.fireTimer<=0&&f<l.attackRange&&(c.burstLeft=l.burst,c.burstTimer=0,c.fireTimer=l.fireInterval*(.7+Math.random()*.6));c.shieldMat&&c.shield>0&&(c.shieldMat.opacity=.16+.08*Math.sin(t*5+c.phase))}for(let a=this.projectiles.length-1;a>=0;a--){const c=this.projectiles[a],l=c.mesh.position.clone();c.mesh.position.addScaledVector(c.vel,e),c.life-=e;const h=c.mesh.position;let u=!1;r&&B0(l,h,n,z0(n))<.45&&(this.cb.onPlayerHit(c.dmg,h),u=!0),this.solidAt(h)&&(u=!0),(c.life<=0||h.y<.1)&&(u=!0),u&&(this.scene.remove(c.mesh),this.projectiles.splice(a,1))}for(let a=this.bombs.length-1;a>=0;a--){const c=this.bombs[a];c.vel.y-=15*e,c.mesh.position.addScaledVector(c.vel,e),c.mesh.rotation.x+=e*6,c.life-=e;const l=c.mesh.position;(l.y<=.3||this.solidAt(l)||c.life<=0)&&(this.cb.onExplosion(l.clone(),"bomber",!1),this.scene.remove(c.mesh),this.bombs.splice(a,1))}}solidAt(e){for(const t of this.colliders)if(!(e.y>=t.top)){if(t.kind==="cyl"){if(Math.hypot(e.x-t.x,e.z-t.z)<t.r)return!0}else if(Math.abs(e.x-t.x)<t.hx&&Math.abs(e.z-t.z)<t.hz)return!0}return!1}applyWallSlide(e,t,n){const i=e.hitN;if(!i)return;const r=i.length();if(r<1e-4)return;i.divideScalar(r);const o=t.dot(i);o>0&&t.addScaledVector(i,-o);const a=new A(-i.z,0,i.x).multiplyScalar(e.strafe);t.addScaledVector(a,n*.85)}steer(e,t,n,i){this.applyWallSlide(e,t,i),t.length()>i&&t.setLength(i),e.vel.lerp(t,Math.min(1,n*2.2)),e.group.position.addScaledVector(e.vel,n);const r=e.kind==="crawler"?.75:1.2;e.group.position.y<r&&(e.group.position.y=r),e.group.position.y>9&&(e.group.position.y=9);const o=Math.hypot(e.group.position.x,e.group.position.z);o>50&&(e.group.position.x*=50/o,e.group.position.z*=50/o),this.resolveCollision(e)}resolveCollision(e){const t=e.group.position,n=e.radius+.35;e.hitN=null;for(const i of this.colliders)if(!(t.y-.4>=i.top))if(i.kind==="cyl"){const r=t.x-i.x,o=t.z-i.z,a=Math.hypot(r,o),c=i.r+n;if(a<c){const l=a>1e-4?r/a:1,h=a>1e-4?o/a:0;t.x+=l*(c-a),t.z+=h*(c-a);const u=-(e.vel.x*l+e.vel.z*h);u>0&&(e.vel.x+=l*u,e.vel.z+=h*u),e.hitN?e.hitN.add(new A(l,0,h)):e.hitN=new A(l,0,h)}}else{const r=t.x-i.x,o=t.z-i.z,a=i.hx+n-Math.abs(r),c=i.hz+n-Math.abs(o);if(a>0&&c>0){let l=0,h=0;a<c?(l=r>=0?1:-1,t.x+=l*a,(r>=0?e.vel.x:-e.vel.x)<0&&(e.vel.x=0)):(h=o>=0?1:-1,t.z+=h*c,(o>=0?e.vel.z:-e.vel.z)<0&&(e.vel.z=0)),e.hitN?e.hitN.add(new A(l,0,h)):e.hitN=new A(l,0,h)}}}}function Xr(s){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,2,32,32,30);return n.addColorStop(0,s),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),new Kc(e)}const So=new Ke(.018,.006,1,5);So.translate(0,.5,0);So.rotateX(Math.PI/2);class H0{constructor(e){B(this,"tracers",[]);B(this,"particles",[]);B(this,"debris",[]);B(this,"poolSize",10);B(this,"pool",[]);B(this,"empRing");B(this,"empTime",-1);B(this,"sparkTex",Xr("rgba(255,200,120,0.9)"));B(this,"cyanTex",Xr("rgba(80,220,255,0.9)"));B(this,"fireTex",Xr("rgba(255,120,40,0.9)"));this.scene=e;for(let t=0;t<this.poolSize;t++){const n=new Bt(16777215,0,1,1.6);n.visible=!0,e.add(n),this.pool.push({light:n,life:0,life0:1,peak:0})}this.empRing=new O(new Hn(1,.25,8,40),new Yt({color:new Z("#67e8f9"),transparent:!0,opacity:.8,blending:kt,depthWrite:!1,fog:!1})),this.empRing.rotation.x=Math.PI/2,this.empRing.visible=!1,e.add(this.empRing)}tracer(e,t,n,i=.07){if(this.tracers.length>60){const c=this.tracers.shift();this.scene.remove(c.mesh)}const r=new Yt({color:new Z(n),transparent:!0,opacity:.95,blending:kt,depthWrite:!1,fog:!1}),o=new O(So,r),a=e.distanceTo(t);o.scale.set(1,1,Math.max(.1,a)),o.position.copy(e),o.lookAt(t),this.scene.add(o),this.tracers.push({mesh:o,life:i,max:i})}sparks(e,t,n=8){const i=t==="cyan"?this.cyanTex:t==="red"?this.fireTex:this.sparkTex,r=t==="cyan"?new Z("#22d3ee"):t==="red"?new Z("#ff5a3c"):new Z("#ffb45e");for(let o=0;o<n&&!(this.particles.length>260);o++){const a=new es({map:i,color:r,transparent:!0,blending:kt,depthWrite:!1,fog:!1}),c=new Fs(a),l=.08+Math.random()*.12;c.scale.set(l,l,1),c.position.copy(e),this.scene.add(c),this.particles.push({point:c,vel:new A((Math.random()-.5)*5,(Math.random()-.3)*5,(Math.random()-.5)*5),life:.3+Math.random()*.4,max:.7,grav:6,size0:l})}}explosion(e,t=1){for(let n=0;n<10;n++){const i=new es({map:this.fireTex,color:n<5?new Z("#ffd27f"):new Z("#ff5a2c"),transparent:!0,blending:kt,depthWrite:!1,fog:!1}),r=new Fs(i),o=(.6+Math.random()*1.2)*t;r.scale.set(o,o,1),r.position.copy(e).add(new A((Math.random()-.5)*t,(Math.random()-.5)*t,(Math.random()-.5)*t)),this.scene.add(r),this.particles.push({point:r,vel:new A((Math.random()-.5)*6*t,Math.random()*4*t,(Math.random()-.5)*6*t),life:.4+Math.random()*.5,max:.9,grav:1,size0:o})}this.flash(e,"#ffa040",160*t,26*t,.35);for(let n=0;n<6&&!(this.debris.length>80);n++){const i=.08+Math.random()*.16,r=new O(new re(i,i,i),new ae({color:2830652,emissive:new Z("#ff7a30"),emissiveIntensity:.8,roughness:.6}));r.position.copy(e),this.scene.add(r),this.debris.push({mesh:r,vel:new A((Math.random()-.5)*9,2+Math.random()*6,(Math.random()-.5)*9),spin:new A(Math.random()*10,Math.random()*10,Math.random()*10),life:1.6})}}shieldRipple(e){const t=new es({map:this.cyanTex,color:new Z("#38e2ff"),transparent:!0,blending:kt,depthWrite:!1,fog:!1}),n=new Fs(t);n.scale.set(.9,.9,1),n.position.copy(e),this.scene.add(n),this.particles.push({point:n,vel:new A(0,0,0),life:.25,max:.25,grav:0,size0:.9})}triggerEmp(e){this.empRing.position.copy(e).setY(1.2),this.empRing.visible=!0,this.empTime=0,this.flash(e.clone().setY(6),"#67e8f9",900,90,1.2)}flash(e,t,n,i,r){let o=this.pool.find(a=>a.life<=0);o||(o=this.pool.reduce((a,c)=>a.life<c.life?a:c)),o.light.color.set(t),o.light.distance=i,o.light.position.copy(e),o.light.intensity=n,o.peak=n,o.life=r,o.life0=r}update(e){for(let t=this.tracers.length-1;t>=0;t--){const n=this.tracers[t];n.life-=e,n.mesh.material.opacity=Math.max(0,n.life/n.max),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.tracers.splice(t,1))}for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.life-=e,n.vel.y-=n.grav*e,n.point.position.addScaledVector(n.vel,e);const i=Math.max(0,n.life/n.max);n.point.scale.setScalar(n.size0*(.4+.6*i+(1-i)*.6)),n.point.material.opacity=i,n.life<=0&&(this.scene.remove(n.point),n.point.material.dispose(),this.particles.splice(t,1))}for(let t=this.debris.length-1;t>=0;t--){const n=this.debris[t];n.life-=e,n.vel.y-=14*e,n.mesh.position.addScaledVector(n.vel,e),n.mesh.rotation.x+=n.spin.x*e,n.mesh.rotation.y+=n.spin.y*e,n.mesh.position.y<.04&&(n.mesh.position.y=.04,n.vel.set(n.vel.x*.6,0,n.vel.z*.6),n.spin.multiplyScalar(.5)),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.debris.splice(t,1))}for(const t of this.pool)t.life>0&&(t.life-=e,t.light.intensity=t.life>0?t.peak*(t.life/t.life0):0);if(this.empTime>=0){this.empTime+=e;const t=this.empTime/1.6;this.empRing.scale.setScalar(1+t*42),this.empRing.material.opacity=Math.max(0,.85*(1-t)),t>=1&&(this.empRing.visible=!1,this.empTime=-1)}}smokePlume(e,t){if(Math.random()>t*14)return;const n=new es({map:this.fireTex,color:new Z("#ff9a3c"),transparent:!0,opacity:.6,depthWrite:!1,fog:!0}),i=new Fs(n),r=.5+Math.random()*.5;i.scale.set(r,r,1),i.position.copy(e).add(new A((Math.random()-.5)*.3,0,(Math.random()-.5)*.3)),this.scene.add(i),this.particles.push({point:i,vel:new A(0,1.6,0),life:1.6,max:1.6,grav:-.6,size0:r})}}function V0(){const s=document.createElement("canvas");s.width=s.height=32;const e=s.getContext("2d"),t=e.createRadialGradient(16,16,1,16,16,15);return t.addColorStop(0,"rgba(235,244,255,0.95)"),t.addColorStop(1,"rgba(235,244,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new Kc(s)}class W0{constructor(e){B(this,"points");B(this,"vel");B(this,"positions");this.scene=e;const t=Qn.snowCount,n=new Ct;this.positions=new Float32Array(t*3),this.vel=new Float32Array(t);const i=Qn.snowBox;for(let o=0;o<t;o++)this.positions[o*3]=(Math.random()-.5)*i*2,this.positions[o*3+1]=Math.random()*26,this.positions[o*3+2]=(Math.random()-.5)*i*2,this.vel[o]=1.5+Math.random()*3.5;n.setAttribute("position",new qt(this.positions,3));const r=new mo({map:V0(),color:new Z("#dce8f7"),size:.16,transparent:!0,opacity:.85,depthWrite:!1,sizeAttenuation:!0});this.points=new $c(n,r),this.points.frustumCulled=!1,e.add(this.points)}update(e,t,n,i){const r=Qn.snowBox,o=Math.sin(t*.25)*3+2,a=Math.cos(t*.19)*2.4-1.2,c=1+i*2.4;for(let l=0;l<this.vel.length;l++){const h=l*3;this.positions[h]+=(o*i*2+.4)*e,this.positions[h+1]-=this.vel[l]*c*e,this.positions[h+2]+=a*i*2*e,this.positions[h+1]<0&&(this.positions[h+1]+=26);const u=this.positions[h]-n.x,f=this.positions[h+2]-n.z;u>r?this.positions[h]-=r*2:u<-r&&(this.positions[h]+=r*2),f>r?this.positions[h+2]-=r*2:f<-r&&(this.positions[h+2]+=r*2)}this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.material.opacity=.5+i*.5,this.points.material.size=.12+i*.1}}class X0{constructor(e,t,n,i,r){B(this,"kindQueue",[]);B(this,"spawnTimer",0);B(this,"lastWave",0);B(this,"airDropsDone",new Set);B(this,"airdrops",[]);B(this,"waveBanner",null);this.scene=e,this.drones=t,this.colliders=n,this.waves=i,this.spawnAngle=r}reset(){this.kindQueue=[],this.spawnTimer=0,this.lastWave=0,this.airDropsDone.clear()}waveForProgress(e){let t=0;for(let n=0;n<this.waves.length;n++)e>=this.waves[n].atProgress&&(t=n+1);return t}update(e,t){const n=this.waveForProgress(t);if(n===0)return;const i=this.waves[n-1];if(n>this.lastWave){this.lastWave=n,this.kindQueue=[];const r=(o,a)=>{for(let c=0;c<a;c++)this.kindQueue.push(o)};r("scout",i.scouts),r("heavy",i.heavies),r("kamikaze",i.kamikazes),r("warden",i.wardens??0),r("bomber",i.bombers??0),r("crawler",i.crawlers??0),r("colossus",i.colossi??0);for(let o=this.kindQueue.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1));[this.kindQueue[o],this.kindQueue[a]]=[this.kindQueue[a],this.kindQueue[o]]}this.waveBanner={title:`Wave ${n} incoming`,sub:n===this.waves.length?"Final hold — all hands to battle stations":`Hostile units: ${this.kindQueue.length}`}}if(this.kindQueue.length>0&&(this.spawnTimer-=e,this.spawnTimer<=0&&this.drones.activeCount()<i.concurrent)){const r=this.kindQueue.shift(),o=this.spawnAngle(),a=44+Math.random()*6,c=r==="crawler"?.6:r==="heavy"||r==="bomber"?5.5:r==="warden"?6.5:r==="colossus"?5:2.5+Math.random()*4;this.drones.spawn(r,new A(Math.cos(o)*a,c,Math.sin(o)*a)),this.spawnTimer=i.spawnGap*(.7+Math.random()*.6)}for(const r of gt.airdropProgress)t>=r&&!this.airDropsDone.has(r)&&(this.airDropsDone.add(r),this.dropAirdrop())}get spawning(){return this.kindQueue.length>0}findDropSite(e=2.2){for(let t=0;t<60;t++){const n=Math.random()*Math.PI*2,i=17+Math.random()*12,r=Math.cos(n)*i,o=Math.sin(n)*i;if(!this.nearCollider(r,o,e))return{x:r,z:o}}for(const t of[e,e*.6])for(let n=16;n<=30;n+=1.5)for(let i=0;i<24;i++){const r=i/24*Math.PI*2+n*.35,o=Math.cos(r)*n,a=Math.sin(r)*n;if(!this.nearCollider(o,a,t))return{x:o,z:a}}return{x:0,z:0}}dropAirdrop(){const{x:e,z:t}=this.findDropSite(),n=new Ze,i=new O(new re(.9,.9,.9),new ae({color:6969902,roughness:.6,metalness:.3,emissive:new Z("#3a2b10"),emissiveIntensity:.4}));i.position.y=.45,n.add(i);const r=new O(new re(.95,.12,.95),new ae({color:273,emissive:new Z("#f59e0b"),emissiveIntensity:2}));r.position.y=.45,n.add(r);const o=new Ke(1.1,1.1,24,12,1,!0),a=new Yt({color:new Z("#f59e0b"),transparent:!0,opacity:.22,blending:kt,depthWrite:!1,side:Wt,fog:!0}),c=new O(o,a);c.position.y=12,n.add(c);const l=new Bt(new Z("#f59e0b"),40,16,1.6);l.position.y=1.5,n.add(l),n.position.set(e,40,t),this.scene.add(n),this.airdrops.push({pod:n,pos:new A(e,0,t),landed:!1,opened:!1,beacon:c})}nearCollider(e,t,n){for(const i of this.colliders)if(i.kind==="cyl"){if(Math.hypot(e-i.x,t-i.z)<i.r+n)return!0}else if(Math.abs(e-i.x)<i.hx+n&&Math.abs(t-i.z)<i.hz+n)return!0;return!1}updateAirdrops(e,t,n){for(const i of this.airdrops)i.opened||(i.landed||(i.pod.position.y-=9*e,i.pod.position.y<=0&&(i.pod.position.y=0,i.landed=!0,t({id:`airdrop-${i.pos.x.toFixed(1)}-${i.pos.z.toFixed(1)}`,kind:"airdrop",pos:new A(i.pos.x,1,i.pos.z),label:"Open airdrop crate",readyAt:0,remove:()=>this.openAirdrop(i,n)}))),i.beacon.material.opacity=.16+.12*Math.abs(Math.sin(performance.now()*.003)))}openAirdrop(e,t){e.opened=!0,e.pod.visible=!1,e.beacon.material.dispose(),t(`airdrop-${e.pos.x.toFixed(1)}-${e.pos.z.toFixed(1)}`)}clear(){for(const e of this.airdrops)e.pod.parent&&this.scene.remove(e.pod);this.airdrops.length=0}}class dc{constructor(e){B(this,"items");B(this,"byId",new Map);this.items=e;for(const t of e)this.byId.set(t.id,t)}add(e){this.byId.has(e.id)||(this.items.push(e),this.byId.set(e.id,e))}remove(e){const t=this.byId.get(e);if(!t)return;this.byId.delete(e);const n=this.items.indexOf(t);n>=0&&this.items.splice(n,1)}findFocus(e,t,n,i){let r=null,o=-1/0;for(const a of this.items){if(a.readyAt>i)continue;const c=a.pos.clone().sub(e),l=c.length();if(l>n)continue;const h=c.normalize().dot(t);if(h<(l<1.6?-.25:.35))continue;const u=h*2-l*.15;u>o&&(o=u,r=a)}return r}}const q0=[{key:"damage",label:"Damage"},{key:"fireRate",label:"Fire rate"},{key:"capacity",label:"Capacity"},{key:"reload",label:"Reload"}],Y0={pistol:"M9 Pistol",rifle:"K2 Rifle",shotgun:"M870 Shotgun",launcher:"Vulcan SAM"};function ne(s,e,t){const n=document.createElement("div");return n.className=s,t!==void 0&&(n.textContent=t),e.appendChild(n),n}class $0{constructor(e){B(this,"root");B(this,"progressFill");B(this,"progressText");B(this,"waveChip");B(this,"heatChip");B(this,"heatFill");B(this,"lightChip");B(this,"rankChip");B(this,"mapChip");B(this,"cross");B(this,"crossTicks",[]);B(this,"hitLayer");B(this,"vignette");B(this,"prompt");B(this,"promptKey");B(this,"promptLabel");B(this,"promptRing");B(this,"dock");B(this,"hpFill");B(this,"hpText");B(this,"armorFill");B(this,"armorText");B(this,"weaponName");B(this,"ammoMag");B(this,"ammoReserve");B(this,"creditsText");B(this,"reloadHint");B(this,"banner");B(this,"bannerTitle");B(this,"bannerSub");B(this,"brief");B(this,"upgrade");B(this,"end");B(this,"pause");B(this,"upgradeBody");B(this,"endBody");B(this,"lastValues",new Map);B(this,"restartCb",null);B(this,"advanceCb",null);this.root=document.getElementById("hud-root");const t=ne("topbar",this.root),n=ne("signal",t);ne("sig-label",n,"Rescue Signal");const i=ne("bar",n);this.progressFill=ne("fill green",i),this.progressText=ne("sig-pct mono",n,"0.0%"),this.waveChip=ne("chip",t,"STANDBY");const r=ne("chip heat",t);ne("chip-label",r,"Transmitter");const o=ne("mini-bar",r);this.heatFill=ne("fill amber",o),this.heatChip=r,this.lightChip=ne("chip",t,"Searchlight ○"),this.rankChip=ne("chip",t,"RANK 1"),this.mapChip=ne("chip",t,"ALPINE PASS");const a=ne("crosshair",this.root);this.cross=a;for(const x of["tick up","tick down","tick left","tick right"])this.crossTicks.push(ne(x,a));ne("cross-dot",a),this.hitLayer=ne("hit-layer",this.root),this.vignette=ne("vignette",this.root),this.prompt=ne("prompt",this.root),this.prompt.style.display="none",this.promptRing=ne("hold-ring",this.prompt),this.promptKey=ne("key",this.prompt,"F"),this.promptLabel=ne("prompt-label",this.prompt,""),this.dock=ne("dock",this.root);const c=ne("vitals",this.dock),l=ne("meter",c);ne("meter-label",l,"HP");const h=ne("bar",l);this.hpFill=ne("fill green",h),this.hpText=ne("meter-num mono",l,"100");const u=ne("meter",c);ne("meter-label",u,"Armor");const f=ne("bar",u);this.armorFill=ne("fill cyan",f),this.armorText=ne("meter-num mono",u,"25");const p=ne("weapon-block",this.dock);this.weaponName=ne("weapon-name",p,"M9 Tactical Pistol");const g=ne("ammo",p);this.ammoMag=ne("ammo-mag mono",g,"12"),ne("ammo-sep",g,"/"),this.ammoReserve=ne("ammo-reserve mono",g,"96"),this.reloadHint=ne("reload-hint",p,"Reloading…"),this.reloadHint.style.display="none";const _=ne("dock-right",this.dock);ne("credits-label",_,"Tactical credits"),this.creditsText=ne("credits mono",_,"0"),ne("hints",_,"WASD Move · Shift Sprint · Q/E Lean · RMB Aim · R Reload · B Bench · T Searchlight · H Dock"),this.banner=ne("banner",this.root),this.banner.style.display="none",this.bannerTitle=ne("banner-title",this.banner,""),this.bannerSub=ne("banner-sub",this.banner,""),this.brief=ne("overlay",this.root);const m=ne("card",this.brief);ne("card-kicker",m,"OUTPOST ZERO // SIGNAL HOLD"),ne("card-title",m,"Alpine Radio Outpost · Night Defense"),ne("card-body",m,"Elevation 3,800 m. The transmitter is ready — once the distress uplink to the orbital satellite begins, its raw electromagnetic radiation will draw a swarm of rogue combat drones out of the valley. Hold the outpost through five waves, manage transmitter overheat crises, and keep the uplink running until it reaches 100%.");const d=ne("keygrid",m),v=[["WASD / Shift","Move · Sprint"],["Q / E","Lean at cover"],["LMB / RMB","Fire / Precision aim"],["1 / 2 / 3 / 4 · Wheel","Pistol / Rifle / Shotgun / Vulcan SAM"],["F","Repair · Resupply · Airdrop · Searchlight"],["B","Weapon mod bench"],["T · H","Searchlight on/off · Collapse dock"]];for(const[x,S]of v){const I=ne("keyrow",d);ne("k mono",I,x),ne("v",I,S)}ne("map-blurb",m,"Five-hold campaign. Clear a level and your rank, upgrades, credits and hardened vitals carry forward to the next — the swarm gets heavier and stranger with every map. You only re-deploy from Level 1 if the line collapses.");const M=ne("level-list",m);ln.forEach((x,S)=>{const I=ne(`lv-row${S===0?"":" locked"}`,M);ne("lv-title mono",I,`LEVEL ${S+1} · ${x.name}`),ne("lv-sub",I,[x.timeOfDay,x.newThreats].filter(Boolean).join(" · ")||"Standard hostile mix")}),ne("btn",m,`Deploy — LEVEL 1 · ${ln[0].name}`).addEventListener("click",()=>e.onStart()),this.upgrade=ne("overlay",this.root),this.upgrade.style.display="none";const C=ne("card wide",this.upgrade);ne("card-kicker",C,"TACTICAL WORKBENCH"),ne("card-title",C,"Weapon Mod Bench"),this.upgradeBody=ne("upgrade-body",C),ne("btn",C,"Back to the line (B)").addEventListener("click",()=>e.onCloseUpgrade()),this.end=ne("overlay",this.root),this.end.style.display="none";const R=ne("card",this.end);this.endBody=R,this.pause=ne("overlay translucent",this.root),this.pause.style.display="none";const N=ne("card small",this.pause);ne("card-title",N,"Paused"),ne("card-body",N,"Pointer released. Click to resume combat."),this.pause.addEventListener("click",()=>e.onResume())}set(e,t,n){this.lastValues.get(e)!==n&&(this.lastValues.set(e,n),t.textContent=n)}setTop(e){const t=e.progress.toFixed(1);this.progressFill.style.width=`${e.progress}%`,this.set("prog",this.progressText,`${t}%`),this.set("wave",this.waveChip,e.wave>0?`Wave ${e.wave}`:"STANDBY"),this.heatFill.style.width=`${e.heat}%`,this.heatFill.className=`fill ${e.overheated||e.heat>70?"red":"amber"}`,this.set("heat",this.heatChip.querySelector(".chip-label"),e.overheated?"OVERHEAT":"Transmitter"),this.heatChip.classList.toggle("danger",e.overheated);const n=e.searchlightOn?"Searchlight ●":e.searchlightCooldownUntil>e.time?"Searchlight ⚡ overload":"Searchlight ○";this.set("sl",this.lightChip,n),this.lightChip.classList.toggle("lit",e.searchlightOn),this.set("rank",this.rankChip,`RANK ${e.level}`),this.rankChip.classList.toggle("gold",e.level>1)}setMap(e){this.set("map",this.mapChip,e)}setWeapon(e,t,n,i,r=1){const o=Qs(r);this.set("wname",this.weaponName,o>0?`${dt[e].name} Mk ${["I","II","III"][o-1]}`:dt[e].name),this.set("mag",this.ammoMag,`${t}`),this.set("res",this.ammoReserve,`${n}`),this.ammoMag.classList.toggle("low",t===0),this.reloadHint.style.display=i?"block":"none"}setVitals(e,t,n,i=100){const r=Math.max(0,Math.min(100,e/i*100));this.hpFill.style.width=`${r}%`,this.hpFill.className=`fill ${r>50?"green":r>25?"amber":"red"}`,this.set("hp",this.hpText,`${Math.ceil(e)}`),this.armorFill.style.width=`${t/50*100}%`,this.set("armor",this.armorText,`${Math.ceil(t)}`),this.set("credits",this.creditsText,`${n}`)}setCrosshairSpread(e){const t=5+e,n=this.crossTicks;n[0].style.transform=`translateY(-${t}px)`,n[1].style.transform=`translateY(${t}px)`,n[2].style.transform=`translateX(-${t}px)`,n[3].style.transform=`translateX(${t}px)`,this.cross.classList.toggle("hidden",e<-100)}flashHit(e,t){const n=e-t,i=ne("hit-arc",this.hitLayer);i.style.transform=`rotate(${n*180/Math.PI}deg)`,setTimeout(()=>i.remove(),900)}flashDamage(e){this.vignette.style.opacity=String(Math.min(.85,.25+e/60)),setTimeout(()=>this.vignette.style.opacity="0",140)}setInteract(e,t){if(!e){this.prompt.style.display="none";return}this.prompt.style.display="flex",this.promptLabel.textContent=e,this.promptRing.style.background=t>0?`conic-gradient(#f59e0b ${t*360}deg, rgba(255,255,255,0.15) 0deg)`:"conic-gradient(rgba(255,255,255,0.15) 360deg, rgba(255,255,255,0.15) 0deg)"}banner_show(e,t){this.bannerTitle.textContent=e,this.bannerSub.textContent=t,this.banner.style.display="block",this.banner.classList.remove("fade"),this.banner.offsetWidth,setTimeout(()=>this.banner.classList.add("fade"),2400),setTimeout(()=>this.banner.style.display="none",3200)}setPhase(e){this.brief.style.display=e==="brief"?"flex":"none",this.upgrade.style.display=e==="upgrade"?"flex":"none",this.end.style.display=e==="won"||e==="lost"?"flex":"none"}showPause(e){this.pause.style.display=e?"flex":"none"}toggleDock(){this.dock.classList.toggle("collapsed")}renderUpgrade(e,t,n,i=!1){this.upgradeBody.textContent="",ne("upgrade-credits mono",this.upgradeBody,`Credits on hand: ${e}`);const r=i?["pistol","rifle","shotgun","launcher"]:["pistol","rifle","shotgun"];for(const o of r){const a=ne("up-row",this.upgradeBody);ne("up-weapon",a,Y0[o]);const c=ne("up-tracks",a);for(const l of q0){const h=ne("up-cell",c);ne("up-track-name",h,l.label);const u=ne("up-pips",h),f=t[o].levels[l.key];for(let p=0;p<os.maxLevel;p++){const g=ne("pip",u);p<f&&g.classList.add("on")}if(f<os.maxLevel){const p=os.cost(f),g=document.createElement("button");g.className="up-buy mono",g.textContent=`Upgrade ${p}`,g.disabled=e<p,g.addEventListener("click",()=>n(o,l.key)),h.appendChild(g)}else ne("up-max mono",h,"MAX")}}}showEnd(e,t,n,i){this.endBody.textContent="",ne("card-kicker",this.endBody,e?"RESCUE INBOUND":"SIGNAL LOST"),ne("card-title",this.endBody,e?"Rescue arrived — signal complete":"Outpost lost"),e||ne("card-body",this.endBody,t.endReason);const r=t.stats,o=Math.max(1,r.pelletsFired),a=Math.round(r.pelletsHit/o*100),c=Math.floor(n/60),l=Math.floor(n%60),h=e?a>=45&&t.stats.kills.heavy>=5&&t.progress>=100?"S":a>=30?"A":"B":"F",u=ne("statgrid",this.endBody),f=[["Grade",h],["Rank reached",`${t.level}`],["Final progress",`${t.progress.toFixed(1)}%`],["Waves held",`${Math.max(1,t.wave)} / 5`],["Time survived",`${c}:${String(l).padStart(2,"0")}`],["Scouts downed",`${r.kills.scout}`],["Heavies downed",`${r.kills.heavy}`],["Kamikazes downed",`${r.kills.kamikaze}`],["Accuracy",`${a}%`],["Overheat crises",`${r.overheatEvents} / repairs ${r.repairs}`]];(r.kills.warden>0||r.kills.bomber>0)&&f.push(["Wardens downed",`${r.kills.warden}`],["Bombers downed",`${r.kills.bomber}`]),(r.kills.crawler>0||r.kills.colossus>0)&&f.push(["Crawlers downed",`${r.kills.crawler}`],["Colossi downed",`${r.kills.colossus}`]);for(const[p,g]of f){const _=ne("statrow",u);ne("k",_,p),ne("v mono",_,g)}e&&i?(ne("btn",this.endBody,`ADVANCE — ${i}`).addEventListener("click",()=>{var _;return(_=this.advanceCb)==null?void 0:_.call(this)}),ne("btn ghost",this.endBody,"Restart campaign from Level 1").addEventListener("click",()=>{var _;return(_=this.restartCb)==null?void 0:_.call(this)})):ne("btn",this.endBody,e?"Campaign complete — redeploy":"Redeploy").addEventListener("click",()=>{var g;return(g=this.restartCb)==null?void 0:g.call(this)})}}class wo{constructor(){B(this,"engine");B(this,"lightRig");B(this,"frameGaps",[]);B(this,"audio",new d0);B(this,"mission");B(this,"player",w0());B(this,"runtimes",b0());B(this,"controller");B(this,"weapons");B(this,"drones");B(this,"effects");B(this,"weather");B(this,"waves");B(this,"interact");B(this,"hud");B(this,"outpost");B(this,"mapRuntimes");B(this,"levelIdx",0);B(this,"staticProxies",[]);B(this,"groundMesh");B(this,"rockets",[]);B(this,"rocketGeo",new jt(.09,.5,6));B(this,"rocketMat",new Yt({color:new Z("#ffd9a0"),blending:kt,transparent:!0,fog:!1}));B(this,"firingHeld",!1);B(this,"firePressedEdge",!1);B(this,"fHeld",!1);B(this,"fPressedEdge",!1);B(this,"holdConsole",0);B(this,"focus",null);B(this,"paused",!1);B(this,"empTimer",-1);B(this,"endShown",!1);this.engine=new h0(document.getElementById("viewport"));const e=this.engine.scene;this.mission=E0(),this.effects=new H0(e),this.weather=new W0(e),this.drones=new G0(e,{onPlayerHit:(o,a)=>this.damagePlayer(o,a),onExplosion:(o,a,c)=>this.onDroneExplosion(o,a,c),onLaser:(o,a)=>this.effects.tracer(o,a,"#ff5a4a",.1),onBeep:o=>this.audio.proximityBeep(o)});const t={alpine:f0,canyon:m0,rail:g0,dam:_0,crater:v0};this.mapRuntimes=ln.map((o,a)=>this.makeMapRuntime(a,t[o.id](e),y0(e,o.layout))),this.outpost=this.mapRuntimes[0].outpost,this.waves=this.mapRuntimes[0].waves,this.staticProxies=this.mapRuntimes[0].proxies,this.groundMesh=this.mapRuntimes[0].ground,this.controller=new S0(this.engine.camera,this.mapRuntimes[0].colliders,this.player),this.weapons=new P0(this.engine.camera,this.runtimes,this.audio),this.interact=new dc(this.outpost.interactables),this.engine.setAmbience(ln[0].ambience),this.lightRig=new p0(e,l0),console.log(`[lights] ${this.lightRig.collect()} fixtures -> pool of ${this.lightRig.budget}`);const n=performance.now();this.warmHostiles(),this.prewarmMaterials(),window.__bootTimings={warmHostiles:Math.round(performance.now()-n)},this.hud=new $0({onStart:()=>this.startLevel(0),onBuy:(o,a)=>this.buyUpgrade(o,a),onCloseUpgrade:()=>this.closeUpgrade(),onRestart:()=>location.reload(),onResume:()=>this.requestLock()}),this.hud.restartCb=()=>location.reload(),this.hud.setPhase("brief"),this.bindInput(),window.__outpost=this.debugHooks();let i=performance.now();const r=o=>{this.frameGaps.push(o-i),this.frameGaps.length>240&&this.frameGaps.shift();const a=Math.min(.05,(o-i)/1e3);i=o,this.update(a),requestAnimationFrame(r)};requestAnimationFrame(r)}warmHostiles(){const e=["scout","heavy","kamikaze","warden","bomber","crawler","colossus"],t=this.drones.drones.length,n=this.engine.camera,i=new A;n.getWorldDirection(i),e.forEach((a,c)=>{const l=(c-(e.length-1)/2)*.3,h=n.position.clone().addScaledVector(i,24).add(new A(-i.z*Math.sin(l)*24,7+c*1.4,i.x*Math.sin(l)*24));this.drones.spawn(a,h)});const r=[],o=[];this.engine.scene.traverse(a=>{a.visible||(a.visible=!0,r.push(a)),a.frustumCulled&&(a.frustumCulled=!1,o.push(a))}),this.engine.renderer.compile(this.engine.scene,n),this.engine.render(),this.engine.render();for(const a of o)a.frustumCulled=!0;for(const a of r)a.visible=!1;for(const a of this.drones.drones.slice(t))this.engine.scene.remove(a.group);this.drones.drones.length=t,console.log(`[warm] ${e.length} hostile kinds built, rendered once, removed`)}prewarmMaterials(){this.engine.renderer.compile(this.engine.scene,this.engine.camera)}makeMapRuntime(e,t,n){const i=new Ze;i.add(t.group,n.root),this.engine.scene.add(i);const r=[...t.colliders,...n.colliders],o=[],a=new Yt({visible:!1});for(const l of r){const h=l.top,u=l.kind==="box"?new re(l.hx*2,h,l.hz*2):new Ke(l.r,l.r,h,8),f=new O(u,a);f.position.set(l.x,h/2,l.z),f.userData={part:"world"},i.add(f),o.push(f)}i.visible=e===0;const c=new X0(this.engine.scene,this.drones,r,ln[e].waves,t.spawnAngle);return{group:i,ground:t.ground,colliders:r,proxies:o,outpost:n,waves:c}}startLevel(e){const t=ln[e],n=this.mission;n.time=0,n.progress=0,n.wave=0,n.heat=0,n.overheated=!1,n.blizzard=.25,n.searchlightOn=!1,n.searchlightRuntime=0,n.searchlightCooldownUntil=0,n.endReason="",n.phase="brief",this.holdConsole=0,this.levelIdx=e,this.endShown=!1,this.empTimer=-1,this.clearRockets(),this.mapRuntimes.forEach((r,o)=>r.group.visible=o===e);const i=this.mapRuntimes[e];this.outpost=i.outpost,this.waves=i.waves,this.staticProxies=i.proxies,this.groundMesh=i.ground,this.interact=new dc(this.outpost.interactables),this.controller.setColliders(i.colliders),this.drones.setColliders(i.colliders),this.drones.setMods(t.hpMul,t.dmgMul),this.drones.clearHostiles(),this.engine.setAmbience(t.ambience),t.launcherUnlock&&this.weapons.locked.has("launcher")&&(this.weapons.unlock("launcher"),this.hud.banner_show("Vulcan SAM acquired","Press 4 — shoulder-fired homing missile; resupply at ammo racks")),this.player.pos.set(0,0,10),this.player.health=this.player.maxHealth,this.player.armor=_t.maxArmor;for(const r of Object.keys(this.runtimes)){const o=this.runtimes[r];o.mag=Ws(r,o.levels,n.level).magSize,o.reserve=dt[r].reserveMax}this.weapons.autoLevel=n.level,this.weapons.locked.has(this.weapons.current)&&this.weapons.switchTo("pistol"),this.hud.setMap(`L${e+1} · ${t.name}`),this.audio.init(),this.audio.resume(),n.phase="playing",this.hud.setPhase("playing"),this.hud.banner_show(`LEVEL ${e+1} — ${t.name}`,`${t.timeOfDay} · ${t.blurb}`),this.requestLock()}advance(){this.levelIdx>=ln.length-1||this.startLevel(this.levelIdx+1)}requestLock(){var t;this.paused=!1,this.hud.showPause(!1);const e=this.engine.renderer.domElement;if(document.pointerLockElement!==e)try{const n=(t=e.requestPointerLock)==null?void 0:t.call(e);n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}this.audio.resume()}restart(){location.reload()}bindInput(){const e=this.engine.renderer.domElement;document.addEventListener("pointerlockchange",()=>{const t=document.pointerLockElement===e;!t&&this.mission.phase==="playing"?(this.paused=!0,this.hud.showPause(!0)):t&&(this.paused=!1,this.hud.showPause(!1))}),document.addEventListener("mousemove",t=>{document.pointerLockElement===e&&this.controller.onMouseMove(t.movementX,t.movementY)}),e.addEventListener("mousedown",t=>{if(document.pointerLockElement!==e){this.mission.phase==="playing"&&this.requestLock();return}t.button===0&&(this.firingHeld=!0,this.firePressedEdge=!0),t.button===2&&(this.controller.adsHeld=!0)}),document.addEventListener("mouseup",t=>{t.button===0&&(this.firingHeld=!1),t.button===2&&(this.controller.adsHeld=!1)}),e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("wheel",t=>{this.mission.phase==="playing"&&this.weapons.cycle(t.deltaY>0?1:-1)}),document.addEventListener("keydown",t=>{if(t.repeat){this.controller.onKey(t.code,!0);return}switch(this.controller.onKey(t.code,!0),t.code){case"Digit1":this.weapons.switchTo("pistol");break;case"Digit2":this.weapons.switchTo("rifle");break;case"Digit3":this.weapons.switchTo("shotgun");break;case"Digit4":this.weapons.switchTo("launcher");break;case"KeyR":this.weapons.startReload();break;case"KeyF":this.fHeld=!0,this.fPressedEdge=!0;break;case"KeyB":this.mission.phase==="playing"?this.openUpgrade():this.mission.phase==="upgrade"&&this.closeUpgrade();break;case"KeyH":this.hud.toggleDock();break;case"KeyT":this.mission.phase==="playing"&&this.toggleSearchlight();break}}),document.addEventListener("keyup",t=>{this.controller.onKey(t.code,!1),t.code==="KeyF"&&(this.fHeld=!1)})}openUpgrade(){var e;this.mission.phase="upgrade",this.hud.setPhase("upgrade"),this.renderUpgradePanel(),(e=document.exitPointerLock)==null||e.call(document)}closeUpgrade(){this.mission.phase="playing",this.hud.setPhase("playing"),this.requestLock()}renderUpgradePanel(){this.hud.renderUpgrade(this.player.credits,this.runtimes,(e,t)=>this.buyUpgrade(e,t),!this.weapons.locked.has("launcher"))}buyUpgrade(e,t){const n=this.runtimes[e].levels,i=n[t];if(i>=os.maxLevel)return;const r=os.cost(i);this.player.credits<r||(this.player.credits-=r,n[t]=i+1,this.audio.pickup(),this.renderUpgradePanel())}addScore(e){const t=this.mission;for(t.score+=e;t.level<pn.maxLevel&&t.score>=pn.thresholds[t.level];){t.level+=1;const n=this.player;n.maxHealth+=pn.hpPerLevel,n.health=Math.min(n.maxHealth,n.health+pn.healOnLevelUp),this.weapons.autoLevel=t.level,this.audio.levelUp();const i=Qs(t.level),r=Qs(t.level-1);let o=`Max HP ${n.maxHealth} (+${pn.hpPerLevel}) · Healed +${pn.healOnLevelUp} · Damage +${(t.level-1)*pn.damagePerLevel*100|0}% · Fire rate up`;i>r&&(o+=` · All weapons Mk ${["I","II","III"][i-1]} unlocked`),this.hud.banner_show(`RANK ${t.level}`,o)}}fire(){const e=this.weapons.tryFire(this.player,this.controller.planarSpeed()>1.5);if(e){if(this.mission.stats.shotsFired+=1,this.mission.stats.pelletsFired+=e.dirs.length,this.weapons.current==="launcher"){const t=e.dirs[0],n=new O(this.rocketGeo,this.rocketMat);n.position.copy(e.muzzleWorld),n.quaternion.setFromUnitVectors(new A(0,1,0),t),this.engine.scene.add(n),this.rockets.push({mesh:n,vel:t.clone().multiplyScalar(fn.speed),life:8,direct:e.damage}),this.effects.flash(e.muzzleWorld,"#ffb27f",26,6,.12)}else{const t=this.engine.camera.position,n=new oc,i=[...this.drones.hitMeshes(),...this.staticProxies,this.groundMesh];for(const r of e.dirs){n.set(t,r),n.far=e.range;const a=n.intersectObjects(i,!1)[0];if(a){const c=a.object.userData,l=a.point;this.effects.tracer(e.muzzleWorld,l,"#ffd27f",.06),c.drone&&c.part?(this.drones.applyDamage(c.drone,c.part,e.damage),this.mission.stats.pelletsHit+=1,c.part==="shield"?(this.effects.shieldRipple(l),this.audio.shieldZap()):(this.effects.sparks(l,c.part==="weak"?"red":"amber",6),this.audio.hitTick())):c.part==="world"?this.effects.sparks(l,"amber",3):this.effects.sparks(l,"amber",2)}else{const c=t.clone().addScaledVector(r,e.range);this.effects.tracer(e.muzzleWorld,c,"#ffd27f",.06)}}}this.controller.addRecoil(vt.degToRad(dt[this.weapons.current].recoilPitchDeg),vt.degToRad(dt[this.weapons.current].recoilYawDeg)),this.controller.addTrauma(this.weapons.current==="shotgun"?.35:this.weapons.current==="launcher"?.4:.12)}}clearRockets(){for(const e of this.rockets)this.engine.scene.remove(e.mesh);this.rockets.length=0}static pointSegDist(e,t,n){const i=n.clone().sub(t),r=i.lengthSq(),o=r<=1e-9?0:vt.clamp(e.clone().sub(t).dot(i)/r,0,1);return t.clone().addScaledVector(i,o).distanceTo(e)}solidWorldPoint(e){for(const t of this.mapRuntimes[this.levelIdx].colliders)if(!(e.y>=t.top)){if(t.kind==="cyl"){if(Math.hypot(e.x-t.x,e.z-t.z)<t.r)return!0}else if(Math.abs(e.x-t.x)<t.hx&&Math.abs(e.z-t.z)<t.hz)return!0}return!1}detonateRocket(e,t){this.effects.explosion(e,1.7),this.audio.explosion(),this.controller.addTrauma(.3);const n=t*fn.blastMult;for(const i of[...this.drones.drones]){if(i.dying)continue;const r=i.group.position.distanceTo(e);if(r>fn.blastRadius+i.radius)continue;const o=Math.max(0,1-Math.max(0,r-i.radius)/fn.blastRadius),a=r<i.radius+fn.fuseRadius?t:0;this.drones.applyDamage(i,"body",a+n*o)}}updateRockets(e){for(let t=this.rockets.length-1;t>=0;t--){const n=this.rockets[t],i=n.mesh.position.clone();let r=null,o=1/0;const a=n.vel.clone().normalize(),c=Math.cos(vt.degToRad(fn.lockConeDeg));for(const u of this.drones.drones){if(u.dying)continue;const f=u.group.position.clone().sub(n.mesh.position),p=f.length();p>120||p>=o||p>4&&f.normalize().dot(a)<c||(r=u,o=p)}if(r){const u=r.group.position.clone().sub(n.mesh.position).normalize().multiplyScalar(fn.speed);n.vel.lerp(u,Math.min(1,e*fn.turnRate))}n.vel.setLength(fn.speed),n.mesh.position.addScaledVector(n.vel,e),n.mesh.quaternion.setFromUnitVectors(new A(0,1,0),n.vel.clone().normalize()),n.life-=e,this.effects.tracer(i,n.mesh.position,"#ffb27f",.05);const l=n.mesh.position;let h=!1;for(const u of this.drones.drones)if(!u.dying&&wo.pointSegDist(u.group.position,i,l)<u.radius+fn.fuseRadius){h=!0;break}(l.y<.15||this.solidWorldPoint(l)||n.life<=0)&&(h=!0),h&&(this.detonateRocket(l.clone(),n.direct),this.engine.scene.remove(n.mesh),this.rockets.splice(t,1))}}onDroneExplosion(e,t,n){if(this.effects.explosion(e,t==="heavy"||t==="colossus"?1.5:t==="kamikaze"||t==="bomber"?1.4:.9),this.audio.explosion(),n){const a=so[t].credits;this.player.credits+=a,this.mission.stats.kills[t]+=1,this.addScore(a);return}const i=ln[this.levelIdx].dmgMul;if(t==="bomber"){const a=this.player.pos.distanceTo(e);a<Qi.radius&&this.damagePlayer(Math.round(Qi.maxDamage*i*Math.max(0,1-a/Qi.radius)),e),this.outpost.towerPos.distanceTo(e)<Qi.towerRadius&&(this.mission.heat+=Qi.towerHeat);return}const r=this.player.pos.distanceTo(e);r<6&&this.damagePlayer(Math.round(76*i*Math.max(0,1-r/6)),e),this.outpost.towerPos.distanceTo(e)<7&&(this.mission.heat+=gt.kamikazeTowerHeat)}damagePlayer(e,t){if(e<=0||this.mission.phase!=="playing")return;const n=this.player;if(n.armor>0){const o=Math.min(n.armor,e*.6);n.armor-=o,n.health-=e-o}else n.health-=e;this.controller.addTrauma(.5),this.hud.flashDamage(e);const i=Math.atan2(t.x-n.pos.x,t.z-n.pos.z),r=Math.atan2(-Math.sin(n.yaw),-Math.cos(n.yaw));this.hud.flashHit(i,r),n.health<=0&&this.defeat("Vitals flatlined — the outpost line has collapsed")}defeat(e){var t;this.mission.phase==="won"||this.mission.phase==="lost"||(this.mission.phase="lost",this.mission.endReason=e,this.audio.setAlarm(!1),this.audio.defeat(),(t=document.exitPointerLock)==null||t.call(document),this.hud.setInteract(null,0),this.hud.setPhase("lost"),this.hud.showEnd(!1,this.mission,this.mission.time),this.hud.restartCb=()=>location.reload())}toggleSearchlight(){const e=this.mission;if(e.searchlightOn)e.searchlightOn=!1;else{if(e.time<e.searchlightCooldownUntil)return;e.searchlightOn=!0}this.audio.uiClick()}refillAllAmmo(){for(const e of Object.keys(this.runtimes))this.runtimes[e].reserve=dt[e].reserveMax}doInteract(e){var t;switch(e.kind){case"ammo":{if(Object.keys(this.runtimes).every(i=>this.runtimes[i].reserve>=dt[i].reserveMax)){this.hud.banner_show("Ammo station","All reserves already full — rack stands by");break}this.refillAllAmmo(),e.readyAt=this.mission.time+gt.ammoStationCooldown,this.audio.pickup();break}case"medkit":{if(this.player.health>=this.player.maxHealth-.5&&this.player.armor>=_t.maxArmor-.5){this.hud.banner_show("Med station","Already at full vitals — station stands by");break}this.player.health=Math.min(this.player.maxHealth,this.player.health+gt.medHeal),this.player.armor=Math.min(_t.maxArmor,this.player.armor+gt.medArmor),e.readyAt=this.mission.time+gt.medStationCooldown,this.audio.pickup();break}case"airdrop":{this.refillAllAmmo(),this.player.health=this.player.maxHealth,this.player.armor=_t.maxArmor,this.player.credits+=40,this.mission.stats.airdrops+=1,this.audio.pickup(),(t=e.remove)==null||t.call(e);break}case"workbench":this.openUpgrade();break;case"searchlight":this.toggleSearchlight();break}}victory(){this.mission.phase==="playing"&&(this.mission.phase="playing",this.empTimer=0,this.drones.killAll(),this.effects.triggerEmp(this.outpost.towerPos),this.audio.setAlarm(!1),this.audio.fanfare())}finishWin(){var t;this.mission.phase="won",(t=document.exitPointerLock)==null||t.call(document),this.hud.setInteract(null,0),this.hud.setPhase("won");const e=ln[this.levelIdx+1];this.hud.showEnd(!0,this.mission,this.mission.time,e?`LEVEL ${this.levelIdx+2} · ${e.name}`:void 0),this.hud.restartCb=()=>location.reload(),this.hud.advanceCb=e?()=>this.advance():null}update(e,t=!0){this.lightRig.update(this.engine.camera.position);const n=this.mission,i=n.phase==="playing"&&!this.paused;if(n.phase==="upgrade"){this.effects.update(e),t&&this.engine.render();return}if(i){if(n.time+=e,this.controller.update(e),this.weapons.update(e),this.engine.camera.userData.adsEase=this.player.ads,this.firingHeld&&(dt[this.weapons.current].auto||this.firePressedEdge)&&this.fire(),this.empTimer<0){const f=n.overheated?0:this.waves.spawning?gt.waveSignalRate:gt.baseSignalRate;n.progress=Math.min(100,n.progress+f*e),n.overheated?n.heat=Math.max(gt.overheatCoolTo-4,n.heat-gt.heatCool*.6*e):(n.heat=Math.min(gt.overheatAt,n.heat+(gt.heatGain-gt.heatCool)*e),n.heat>=gt.overheatAt&&(n.overheated=!0,n.stats.overheatEvents+=1,this.audio.setAlarm(!0),this.hud.banner_show("Transmitter overheated","Uplink stalled — get to the console and hold F to repair"))),n.wave=this.waves.waveForProgress(n.progress),this.waves.waveBanner&&(this.hud.banner_show(this.waves.waveBanner.title,this.waves.waveBanner.sub),this.waves.waveBanner=null),this.waves.update(e,n.progress),this.waves.updateAirdrops(e,p=>this.interact.add(p),p=>this.interact.remove(p))}n.searchlightOn?(n.searchlightRuntime+=e,n.searchlightRuntime>=gt.searchlightOverloadTime&&(n.searchlightOn=!1,n.searchlightRuntime=0,n.searchlightCooldownUntil=n.time+gt.searchlightCooldown,this.hud.banner_show("Searchlight overloaded","Breaker cooling — try again later"))):n.searchlightRuntime=0;const l=[];for(const f of this.drones.drones)f.dying||(n.searchlightOn&&this.outpost.searchlight.isInBeam(f.group.position)?f.spotted=!0:f.spotted=!1,l.push(f.group.position));this.outpost.searchlight.update(e,n.time,l,n.searchlightOn),this.drones.update(e,n.time,this.player.pos,this.outpost.towerPos,!0),this.updateRockets(e);const h=this.engine.camera.getWorldDirection(new A);this.focus=this.interact.findFocus(this.engine.camera.position,h,_t.interactRange,n.time);let u=0;this.focus?this.focus.kind==="console"?n.overheated&&this.fHeld?(this.holdConsole+=e/gt.overheatRestartHold,u=this.holdConsole,this.holdConsole>=1&&(n.overheated=!1,n.heat=gt.overheatCoolTo,n.stats.repairs+=1,this.holdConsole=0,this.audio.setAlarm(!1),this.audio.repairDone(),this.hud.banner_show("Transmitter rebooted","Signal uplink restored"))):n.overheated||(this.holdConsole=0):this.fPressedEdge&&this.doInteract(this.focus):this.holdConsole=0,this.hud.setInteract(this.focus?this.focus.kind==="console"&&!n.overheated?"Transmitter nominal":this.focus.kind==="console"?"Hold F to repair & reboot":this.focus.label:null,u),n.blizzard=vt.clamp(.22+n.wave*.15+.08*Math.sin(n.time*.11),.1,1),n.progress>=100&&this.empTimer<0&&this.victory(),this.fPressedEdge&&(this.fPressedEdge=!1)}this.empTimer>=0&&(this.empTimer+=e,this.drones.update(e,n.time,this.player.pos,this.outpost.towerPos,!1),this.empTimer>3.2&&!this.endShown&&(this.endShown=!0,this.finishWin())),this.outpost.update(e,n.time),this.outpost.setSignalVisuals(n.progress,n.heat,n.overheated),this.weather.update(e,n.time,this.engine.camera.position,n.blizzard),this.engine.setFog(n.blizzard),this.audio.setWind(n.blizzard),this.audio.setDroneHum(this.drones.activeCount()),this.effects.update(e);for(const l of this.waves.airdrops)!l.landed&&!l.opened&&this.effects.smokePlume(l.pod.position,e);this.hud.setTop(n);const r=this.runtimes[this.weapons.current];this.hud.setWeapon(this.weapons.current,r.mag,r.reserve,this.weapons.reloadTimer>0,this.mission.level),this.hud.setVitals(Math.max(0,this.player.health),this.player.armor,this.player.credits,this.player.maxHealth);const o=dt[this.weapons.current].spreadDeg*(1-this.player.ads)+dt[this.weapons.current].adsSpreadDeg*this.player.ads,a=this.controller.planarSpeed()>1.5?1.6:0,c=this.weapons.cooldown>0?2:0;this.hud.setCrosshairSpread(o*9*(1+a)+c),this.firePressedEdge=!1,t&&this.engine.render()}debugHooks(){return{mission:this.mission,player:this.player,runtimes:this.runtimes,drones:this.drones,weapons:this.weapons,spawn:(e,t=30,n=0)=>this.drones.spawn(e,new A(Math.cos(n)*t,e==="crawler"?.6:4,Math.sin(n)*t)),setProgress:e=>{this.mission.progress=e},addScore:e=>this.addScore(e),damagePlayer:e=>this.damagePlayer(e,new A(10,2,0)),openUpgrade:()=>this.openUpgrade(),closeUpgrade:()=>this.closeUpgrade(),win:()=>this.victory(),start:()=>this.startLevel(0),startLevel:e=>this.startLevel(e),advance:()=>this.advance(),currentLevel:()=>{const e=ln[this.levelIdx];return{idx:this.levelIdx,id:e.id,name:e.name,hpMul:e.hpMul,dmgMul:e.dmgMul,launcherUnlock:e.launcherUnlock}},activeMap:()=>ln[this.levelIdx].id,prof:(e=!1)=>{var a;const t=[...this.frameGaps].sort((c,l)=>c-l),n=c=>t.length?t[Math.min(t.length-1,Math.floor(t.length*c))]:0,i=t.length?t.reduce((c,l)=>c+l,0)/t.length:0,r=this.engine.renderer.info,o={samples:t.length,fps:i?+(1e3/i).toFixed(1):0,frameMS:{p50:+n(.5).toFixed(1),p90:+n(.9).toFixed(1),p99:+n(.99).toFixed(1),max:+n(.999).toFixed(1)},hitchesOver50ms:this.frameGaps.filter(c=>c>50).length,drawCalls:r.render.calls,programs:((a=r.programs)==null?void 0:a.length)??0,geometries:r.memory.geometries,textures:r.memory.textures,lights:this.lightRig.stats(),pixelRatio:this.engine.renderer.getPixelRatio()};return e&&(this.frameGaps.length=0),o},rig:()=>this.lightRig,lightRelease:()=>this.lightRig.release(),lightBudget:e=>(typeof e=="number"&&this.lightRig.setBudget(e),this.lightRig.stats()),mapGroupsVisible:()=>this.mapRuntimes.map(e=>e.group.visible),rockets:()=>this.rockets.length,spawnAt:(e,t,n,i)=>(this.drones.spawn(e,new A(t,n,i)),this.drones.drones.length-1),fire:()=>this.fire(),step:(e,t=!1)=>{this.paused=!1,this.update(Math.min(.05,e),t)},rayTest:()=>{const e=new oc,t=this.engine.camera.getWorldDirection(new A);e.set(this.engine.camera.position,t),e.far=200;const n=[...this.drones.hitMeshes(),...this.staticProxies,this.groundMesh],i=e.intersectObjects(n,!1);return{dir:{x:+t.x.toFixed(3),y:+t.y.toFixed(3),z:+t.z.toFixed(3)},hits:i.slice(0,4).map(r=>{var o;return{d:+r.distance.toFixed(2),part:String(r.object.userData.part??((o=r.object.userData)!=null&&o.drone?"drone":"?"))}})}},switchWeapon:e=>this.weapons.switchTo(e),searchlight:()=>this.toggleSearchlight(),look:(e,t)=>{this.player.yaw=e,this.player.pitch=t},teleport:(e,t)=>{this.player.pos.set(e,0,t)},setF:e=>{this.fHeld=e,e&&(this.fPressedEdge=!0)},focusId:()=>{var e;return((e=this.focus)==null?void 0:e.id)??null},airdropPos:()=>this.waves.airdrops.filter(e=>e.landed&&!e.opened).map(e=>({x:e.pos.x,z:e.pos.z})),airdropClearance:()=>{const e=this.mapRuntimes[this.levelIdx].colliders;return this.waves.airdrops.filter(t=>!t.opened).map(t=>{let n=999;for(const i of e){const r=i.kind==="cyl"?Math.hypot(t.pos.x-i.x,t.pos.z-i.z)-i.r:Math.max(Math.abs(t.pos.x-i.x)-i.hx,Math.abs(t.pos.z-i.z)-i.hz);r<n&&(n=r)}return+n.toFixed(2)})},finish:()=>this.finishWin()}}}window.addEventListener("DOMContentLoaded",()=>{new wo});
