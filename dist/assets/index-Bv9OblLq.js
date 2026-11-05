var xl=Object.defineProperty;var Ml=(s,t,e)=>t in s?xl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var F=(s,t,e)=>Ml(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="160",yl=0,No=1,Sl=2,Tc=1,Ac=2,Tn=3,Hn=0,Ge=1,Ve=2,Bn=0,Fi=1,Qe=2,Fo=3,Oo=4,wl=5,ti=100,bl=101,El=102,zo=103,Bo=104,Tl=200,Al=201,Rl=202,Cl=203,jr=204,Jr=205,Pl=206,Ll=207,Dl=208,Il=209,Ul=210,Nl=211,Fl=212,Ol=213,zl=214,Bl=0,kl=1,Gl=2,Ks=3,Hl=4,Vl=5,Wl=6,Xl=7,Rc=0,ql=1,Yl=2,kn=0,$l=1,Kl=2,jl=3,Cc=4,Jl=5,Zl=6,Pc=300,zi=301,Bi=302,Zr=303,Qr=304,sr=306,to=1e3,dn=1001,eo=1002,ze=1003,ko=1004,fr=1005,sn=1006,Ql=1007,ds=1008,Gn=1009,th=1010,eh=1011,uo=1012,Lc=1013,Fn=1014,On=1015,fs=1016,Dc=1017,Ic=1018,ii=1020,nh=1021,fn=1023,ih=1024,sh=1025,si=1026,ki=1027,rh=1028,Uc=1029,oh=1030,Nc=1031,Fc=1033,pr=33776,mr=33777,gr=33778,_r=33779,Go=35840,Ho=35841,Vo=35842,Wo=35843,Oc=36196,Xo=37492,qo=37496,Yo=37808,$o=37809,Ko=37810,jo=37811,Jo=37812,Zo=37813,Qo=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,oa=37821,vr=36492,aa=36494,ca=36495,ah=36283,la=36284,ha=36285,ua=36286,zc=3e3,ri=3001,ch=3200,lh=3201,Bc=0,hh=1,on="",Ae="srgb",Cn="srgb-linear",fo="display-p3",rr="display-p3-linear",js="linear",ce="srgb",Js="rec709",Zs="p3",di=7680,da=519,uh=512,dh=513,fh=514,kc=515,ph=516,mh=517,gh=518,_h=519,no=35044,fa="300 es",io=1035,An=2e3,Qs=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pa=1234567;const os=Math.PI/180,Gi=180/Math.PI;function Rn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function po(s,t){return(s%t+t)%t}function vh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xh(s,t,e){return s!==t?(e-s)/(t-s):0}function as(s,t,e){return(1-e)*s+e*t}function Mh(s,t,e,n){return as(s,t,1-Math.exp(-e*n))}function yh(s,t=1){return t-Math.abs(po(s,t*2)-t)}function Sh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function wh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function bh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Eh(s,t){return s+Math.random()*(t-s)}function Th(s){return s*(.5-Math.random())}function Ah(s){s!==void 0&&(pa=s);let t=pa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rh(s){return s*os}function Ch(s){return s*Gi}function so(s){return(s&s-1)===0&&s!==0}function Ph(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _e={DEG2RAD:os,RAD2DEG:Gi,generateUUID:Rn,clamp:be,euclideanModulo:po,mapLinear:vh,inverseLerp:xh,lerp:as,damp:Mh,pingpong:yh,smoothstep:Sh,smootherstep:wh,randInt:bh,randFloat:Eh,randFloatSpread:Th,seededRandom:Ah,degToRad:Rh,radToDeg:Ch,isPowerOfTwo:so,ceilPowerOfTwo:Ph,floorPowerOfTwo:tr,setQuaternionFromProperEuler:Lh,normalize:te,denormalize:vn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,r,o,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],x=i[1],M=i[4],y=i[7],C=i[2],E=i[5],R=i[8];return r[0]=o*_+a*x+c*C,r[3]=o*m+a*M+c*E,r[6]=o*d+a*y+c*R,r[1]=l*_+h*x+u*C,r[4]=l*m+h*M+u*E,r[7]=l*d+h*y+u*R,r[2]=f*_+p*x+g*C,r[5]=f*m+p*M+g*E,r[8]=f*d+p*y+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new $t;function Gc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dh(){const s=er("canvas");return s.style.display="block",s}const ma={};function cs(s){s in ma||(ma[s]=!0,console.warn(s))}const ga=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_a=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_s={[Cn]:{transfer:js,primaries:Js,toReference:s=>s,fromReference:s=>s},[Ae]:{transfer:ce,primaries:Js,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rr]:{transfer:js,primaries:Zs,toReference:s=>s.applyMatrix3(_a),fromReference:s=>s.applyMatrix3(ga)},[fo]:{transfer:ce,primaries:Zs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(_a),fromReference:s=>s.applyMatrix3(ga).convertLinearToSRGB()}},Ih=new Set([Cn,rr]),ee={enabled:!0,_workingColorSpace:Cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ih.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=_s[t].toReference,i=_s[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return _s[s].primaries},getTransfer:function(s){return s===on?js:_s[s].transfer}};function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fi;class Hc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=er("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uh=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(yr(i[o].image)):r.push(yr(i[o]))}else r=yr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function yr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;class Xe extends Vi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=dn,i=dn,r=sn,o=ds,a=fn,c=Gn,l=Xe.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Rn(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ri?Ae:on),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?ri:zc}set encoding(t){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ri?Ae:on}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Pc;Xe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(p+1)/2,C=(d+1)/2,E=(h+f)/4,R=(u+_)/4,N=(g+m)/4;return M>y&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=R/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=N/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ri?Ae:on),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wc extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oh extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*_,x=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),E=Math.atan2(C,d*x);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const y=a*x;if(c=c*m+f*y,l=l*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(va.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(va.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sr.copy(this).projectOnVector(t),this.sub(Sr)}reflect(t){return this.sub(Sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new A,va=new Wi;class hi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),xs.subVectors(this.max,Ki),pi.subVectors(t.a,Ki),mi.subVectors(t.b,Ki),gi.subVectors(t.c,Ki),Ln.subVectors(mi,pi),Dn.subVectors(gi,mi),$n.subVectors(pi,gi);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-$n.z,$n.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,$n.z,0,-$n.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-$n.y,$n.x,0];return!wr(e,pi,mi,gi,xs)||(e=[1,0,0,0,1,0,0,0,1],!wr(e,pi,mi,gi,xs))?!1:(Ms.crossVectors(Ln,Dn),e=[Ms.x,Ms.y,Ms.z],wr(e,pi,mi,gi,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new A,new A,new A,new A,new A,new A,new A,new A],an=new A,vs=new hi,pi=new A,mi=new A,gi=new A,Ln=new A,Dn=new A,$n=new A,Ki=new A,xs=new A,Ms=new A,Kn=new A;function wr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Kn.fromArray(s,r);const a=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const zh=new hi,ji=new A,br=new A;class Xi{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(br)),this.expandByPoint(ji.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new A,Er=new A,ys=new A,In=new A,Tr=new A,Ss=new A,Ar=new A;class mo{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Er.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Er);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ys),a=In.dot(this.direction),c=-In.dot(ys),l=In.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Er).addScaledVector(ys,f),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,r){Tr.subVectors(e,t),Ss.subVectors(n,t),Ar.crossVectors(Tr,Ss);let o=this.direction.dot(Ar),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);const c=a*this.direction.dot(Ss.crossVectors(In,Ss));if(c<0)return null;const l=a*this.direction.dot(Tr.cross(In));if(l<0||c+l>o)return null;const h=-a*In.dot(Ar);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,r,o,a,c,l,h,u,f,p,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bh,t,kh)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Un.crossVectors(n,Ke),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Un.crossVectors(n,Ke)),Un.normalize(),ws.crossVectors(Ke,Un),i[0]=Un.x,i[4]=ws.x,i[8]=Ke.x,i[1]=Un.y,i[5]=ws.y,i[9]=Ke.y,i[2]=Un.z,i[6]=ws.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],x=n[3],M=n[7],y=n[11],C=n[15],E=i[0],R=i[4],N=i[8],v=i[12],S=i[1],I=i[5],O=i[9],j=i[13],P=i[2],D=i[6],V=i[10],K=i[14],Y=i[3],$=i[7],q=i[11],nt=i[15];return r[0]=o*E+a*S+c*P+l*Y,r[4]=o*R+a*I+c*D+l*$,r[8]=o*N+a*O+c*V+l*q,r[12]=o*v+a*j+c*K+l*nt,r[1]=h*E+u*S+f*P+p*Y,r[5]=h*R+u*I+f*D+p*$,r[9]=h*N+u*O+f*V+p*q,r[13]=h*v+u*j+f*K+p*nt,r[2]=g*E+_*S+m*P+d*Y,r[6]=g*R+_*I+m*D+d*$,r[10]=g*N+_*O+m*V+d*q,r[14]=g*v+_*j+m*K+d*nt,r[3]=x*E+M*S+y*P+C*Y,r[7]=x*R+M*I+y*D+C*$,r[11]=x*N+M*O+y*V+C*q,r[15]=x*v+M*j+y*K+C*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],x=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,M=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,y=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,C=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,E=e*x+n*M+i*y+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=x*R,t[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*R,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*d+n*c*d)*R,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*R,t[4]=M*R,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*R,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*d-e*c*d)*R,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*p+e*c*p)*R,t[8]=y*R,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*R,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*R,t[12]=C*R,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,x=c*l,M=c*h,y=c*u,C=n.x,E=n.y,R=n.z;return i[0]=(1-(_+d))*C,i[1]=(p+y)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(f+d))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(g+M)*R,i[9]=(m-x)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=_i.set(i[0],i[1],i[2]).length();const o=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);const l=1/r,h=1/o,u=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=An){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===An)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=An){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,p=(n+i)*h;let g,_;if(a===An)g=(o+r)*u,_=-2*u;else if(a===Qs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new A,cn=new ne,Bh=new A(0,0,0),kh=new A(1,1,1),Un=new A,ws=new A,Ke=new A,xa=new ne,Ma=new Wi;class or{constructor(t=0,e=0,n=0,i=or.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gh=0;const ya=new A,vi=new Wi,wn=new ne,bs=new A,Ji=new A,Hh=new A,Vh=new Wi,Sa=new A(1,0,0),wa=new A(0,1,0),ba=new A(0,0,1),Wh={type:"added"},Xh={type:"removed"};class ae extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new A,e=new or,n=new Wi,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new $t}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(Sa,t)}rotateY(t){return this.rotateOnAxis(wa,t)}rotateZ(t){return this.rotateOnAxis(ba,t)}translateOnAxis(t,e){return ya.copy(t).applyQuaternion(this.quaternion),this.position.add(ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sa,t)}translateY(t){return this.translateOnAxis(wa,t)}translateZ(t){return this.translateOnAxis(ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ji,bs,this.up):wn.lookAt(bs,Ji,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(wn),this.quaternion.premultiply(vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ae.DEFAULT_UP=new A(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new A,bn=new A,Rr=new A,En=new A,xi=new A,Mi=new A,Ea=new A,Cr=new A,Pr=new A,Lr=new A;let Es=!1;class rn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),bn.subVectors(n,e),Rr.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(bn),c=ln.dot(Rr),l=bn.dot(bn),h=bn.dot(Rr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(t,e,n,i,r,o,a,c){return Es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Es=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),bn.subVectors(t,e),ln.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),ln.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Es=!0),rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;xi.subVectors(i,n),Mi.subVectors(r,n),Cr.subVectors(t,n);const c=xi.dot(Cr),l=Mi.dot(Cr);if(c<=0&&l<=0)return e.copy(n);Pr.subVectors(t,i);const h=xi.dot(Pr),u=Mi.dot(Pr);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(xi,o);Lr.subVectors(t,r);const p=xi.dot(Lr),g=Mi.dot(Lr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Mi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ea.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Ea,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(xi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class it{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=po(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dr(o,r,t+1/3),this.g=Dr(o,r,t),this.b=Dr(o,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ee.fromWorkingColorSpace(De.copy(this),t),Math.round(be(De.r*255,0,255))*65536+Math.round(be(De.g*255,0,255))*256+Math.round(be(De.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,r=De.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ae){ee.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Ts);const n=as(Nn.h,Ts.h,e),i=as(Nn.s,Ts.s,e),r=as(Nn.l,Ts.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new it;it.NAMES=Xc;let qh=0;class ui extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Fi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Jr,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ye extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new A,As=new vt;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=no,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),t}}class qc extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yh=0;const en=new ne,Ir=new ae,yi=new A,je=new hi,Zi=new hi,we=new A;class Ce extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Yc:qc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(je.min,Zi.min),je.expandByPoint(we),we.addVectors(je.max,Zi.max),je.expandByPoint(we)):(je.expandByPoint(Zi.min),je.expandByPoint(Zi.max))}je.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)we.fromBufferAttribute(a,l),c&&(yi.fromBufferAttribute(t,l),we.add(yi)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new A,h[S]=new A;const u=new A,f=new A,p=new A,g=new vt,_=new vt,m=new vt,d=new A,x=new A;function M(S,I,O){u.fromArray(i,S*3),f.fromArray(i,I*3),p.fromArray(i,O*3),g.fromArray(o,S*2),_.fromArray(o,I*2),m.fromArray(o,O*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);const j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(j),x.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(j),l[S].add(d),l[I].add(d),l[O].add(d),h[S].add(x),h[I].add(x),h[O].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,I=y.length;S<I;++S){const O=y[S],j=O.start,P=O.count;for(let D=j,V=j+P;D<V;D+=3)M(n[D+0],n[D+1],n[D+2])}const C=new A,E=new A,R=new A,N=new A;function v(S){R.fromArray(r,S*3),N.copy(R);const I=l[S];C.copy(I),C.sub(R.multiplyScalar(R.dot(I))).normalize(),E.crossVectors(N,I);const j=E.dot(h[S])<0?-1:1;c[S*4]=C.x,c[S*4+1]=C.y,c[S*4+2]=C.z,c[S*4+3]=j}for(let S=0,I=y.length;S<I;++S){const O=y[S],j=O.start,P=O.count;for(let D=j,V=j+P;D<V;D+=3)v(n[D+0]),v(n[D+1]),v(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new ne,jn=new mo,Rs=new Xi,Aa=new A,Si=new A,wi=new A,bi=new A,Ur=new A,Cs=new A,Ps=new vt,Ls=new vt,Ds=new vt,Ra=new A,Ca=new A,Pa=new A,Is=new A,Us=new A;class z extends ae{constructor(t=new Ce,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ur.fromBufferAttribute(u,t),o?Cs.addScaledVector(Ur,h):Cs.addScaledVector(Ur.sub(e),h))}e.add(Cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Rs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Rs,Aa)===null||jn.origin.distanceToSquared(Aa)>(t.far-t.near)**2))&&(Ta.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=M;y<C;y+=3){const E=a.getX(y),R=a.getX(y+1),N=a.getX(y+2);i=Ns(this,d,t,n,l,h,u,E,R,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=Ns(this,o,t,n,l,h,u,x,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,C=M;y<C;y+=3){const E=y,R=y+1,N=y+2;i=Ns(this,d,t,n,l,h,u,E,R,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,M=m+1,y=m+2;i=Ns(this,o,t,n,l,h,u,x,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function $h(s,t,e,n,i,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Hn,a),c===null)return null;Us.copy(a),Us.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Us);return l<e.near||l>e.far?null:{distance:l,point:Us.clone(),object:s}}function Ns(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Si),s.getVertexPosition(c,wi),s.getVertexPosition(l,bi);const h=$h(s,t,e,n,Si,wi,bi,Is);if(h){i&&(Ps.fromBufferAttribute(i,a),Ls.fromBufferAttribute(i,c),Ds.fromBufferAttribute(i,l),h.uv=rn.getInterpolation(Is,Si,wi,bi,Ps,Ls,Ds,new vt)),r&&(Ps.fromBufferAttribute(r,a),Ls.fromBufferAttribute(r,c),Ds.fromBufferAttribute(r,l),h.uv1=rn.getInterpolation(Is,Si,wi,bi,Ps,Ls,Ds,new vt),h.uv2=h.uv1),o&&(Ra.fromBufferAttribute(o,a),Ca.fromBufferAttribute(o,c),Pa.fromBufferAttribute(o,l),h.normal=rn.getInterpolation(Is,Si,wi,bi,Ra,Ca,Pa,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new A,materialIndex:0};rn.getNormal(Si,wi,bi,u.normal),h.face=u}return h}class pt extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,d,x,M,y,C,E,R,N,v){const S=y/R,I=C/N,O=y/2,j=C/2,P=E/2,D=R+1,V=N+1;let K=0,Y=0;const $=new A;for(let q=0;q<V;q++){const nt=q*I-j;for(let at=0;at<D;at++){const X=at*S-O;$[_]=X*x,$[m]=nt*M,$[d]=P,l.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(at/R),u.push(1-q/N),K+=1}}for(let q=0;q<N;q++)for(let nt=0;nt<R;nt++){const at=f+nt+D*q,X=f+nt+D*(q+1),J=f+(nt+1)+D*(q+1),xt=f+(nt+1)+D*q;c.push(at,X,xt),c.push(X,J,xt),Y+=6}a.addGroup(p,Y,v),p+=Y,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=Hi(s[e]);for(const i in n)t[i]=n[i]}return t}function Kh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $c(s){return s.getRenderTarget()===null?s.outputColorSpace:ee.workingColorSpace}const jh={clone:Hi,merge:Oe};var Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kc extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class He extends Kc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,Ti=1;class Qh extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(Ei,Ti,t,e);i.layers=this.layers,this.add(i);const r=new He(Ei,Ti,t,e);r.layers=this.layers,this.add(r);const o=new He(Ei,Ti,t,e);o.layers=this.layers,this.add(o);const a=new He(Ei,Ti,t,e);a.layers=this.layers,this.add(a);const c=new He(Ei,Ti,t,e);c.layers=this.layers,this.add(c);const l=new He(Ei,Ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends Xe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tu extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ri?Ae:on),this.texture=new jc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pt(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Bn});r.uniforms.tEquirect.value=e;const o=new z(i,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=sn),new Qh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Nr=new A,eu=new A,nu=new $t;class Zn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Nr.subVectors(n,e).cross(eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nu.getNormalMatrix(t),i=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new Xi,Fs=new A;class _o{constructor(t=new Zn,e=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],x=i[13],M=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,m-p,y-d).normalize(),n[1].setComponents(c+r,f+l,m+p,y+d).normalize(),n[2].setComponents(c+o,f+h,m+g,y+x).normalize(),n[3].setComponents(c-o,f-h,m-g,y-x).normalize(),n[4].setComponents(c-a,f-u,m-_,y-M).normalize(),e===An)n[5].setComponents(c+a,f+u,m+_,y+M).normalize();else if(e===Qs)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function iu(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){const f=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),p.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class li extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const x=d*f-o;for(let M=0;M<l;M++){const y=M*u-r;g.push(y,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<a;x++){const M=x+l*d,y=x+l*(d+1),C=x+1+l*(d+1),E=x+1+l*d;p.push(M,y,E),p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.width,t.height,t.widthSegments,t.heightSegments)}}var su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ru=`#ifdef USE_ALPHAHASH
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
#endif`,ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
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
#endif`,uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
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
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_u=`#ifdef USE_IRIDESCENCE
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
#endif`,vu=`#ifdef USE_BUMPMAP
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Au=`#define PI 3.141592653589793
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
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cu=`vec3 transformedNormal = objectNormal;
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
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`
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
}`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
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
}`,qu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ju=`uniform bool receiveShadow;
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
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
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
#endif`,id=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pd=`#if defined( USE_POINTS_UV )
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
#endif`,md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
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
#endif`,xd=`#ifdef USE_MORPHTARGETS
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
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
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
#endif`,Ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hd=`float getShadowMask() {
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
}`,Vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
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
}`,uf=`#if DEPTH_PACKING == 3200
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
}`,df=`#define DISTANCE
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
}`,ff=`#define DISTANCE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
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
}`,_f=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,xf=`uniform vec3 diffuse;
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
}`,Mf=`#define LAMBERT
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
}`,yf=`#define LAMBERT
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
}`,Sf=`#define MATCAP
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
}`,wf=`#define MATCAP
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
}`,bf=`#define NORMAL
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
}`,Ef=`#define NORMAL
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
}`,Tf=`#define PHONG
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
}`,Af=`#define PHONG
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
}`,Rf=`#define STANDARD
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
}`,Cf=`#define STANDARD
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
}`,Pf=`#define TOON
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
}`,Lf=`#define TOON
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
}`,Df=`uniform float size;
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
}`,If=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 color;
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
}`,Ff=`uniform float rotation;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:su,alphahash_pars_fragment:ru,alphamap_fragment:ou,alphamap_pars_fragment:au,alphatest_fragment:cu,alphatest_pars_fragment:lu,aomap_fragment:hu,aomap_pars_fragment:uu,batching_pars_vertex:du,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:_u,bumpmap_pars_fragment:vu,clipping_planes_fragment:xu,clipping_planes_pars_fragment:Mu,clipping_planes_pars_vertex:yu,clipping_planes_vertex:Su,color_fragment:wu,color_pars_fragment:bu,color_pars_vertex:Eu,color_vertex:Tu,common:Au,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Pu,displacementmap_vertex:Lu,emissivemap_fragment:Du,emissivemap_pars_fragment:Iu,colorspace_fragment:Uu,colorspace_pars_fragment:Nu,envmap_fragment:Fu,envmap_common_pars_fragment:Ou,envmap_pars_fragment:zu,envmap_pars_vertex:Bu,envmap_physical_pars_fragment:Ju,envmap_vertex:ku,fog_vertex:Gu,fog_pars_vertex:Hu,fog_fragment:Vu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_fragment:qu,lightmap_pars_fragment:Yu,lights_lambert_fragment:$u,lights_lambert_pars_fragment:Ku,lights_pars_begin:ju,lights_toon_fragment:Zu,lights_toon_pars_fragment:Qu,lights_phong_fragment:td,lights_phong_pars_fragment:ed,lights_physical_fragment:nd,lights_physical_pars_fragment:id,lights_fragment_begin:sd,lights_fragment_maps:rd,lights_fragment_end:od,logdepthbuf_fragment:ad,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:hd,map_fragment:ud,map_pars_fragment:dd,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:md,metalnessmap_pars_fragment:gd,morphcolor_vertex:_d,morphnormal_vertex:vd,morphtarget_pars_vertex:xd,morphtarget_vertex:Md,normal_fragment_begin:yd,normal_fragment_maps:Sd,normal_pars_fragment:wd,normal_pars_vertex:bd,normal_vertex:Ed,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Pd,opaque_fragment:Ld,packing:Dd,premultiplied_alpha_fragment:Id,project_vertex:Ud,dithering_fragment:Nd,dithering_pars_fragment:Fd,roughnessmap_fragment:Od,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Bd,shadowmap_pars_vertex:kd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Hd,skinbase_vertex:Vd,skinning_pars_vertex:Wd,skinning_vertex:Xd,skinnormal_vertex:qd,specularmap_fragment:Yd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:jd,transmission_fragment:Jd,transmission_pars_fragment:Zd,uv_pars_fragment:Qd,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:of,backgroundCube_frag:af,cube_vert:cf,cube_frag:lf,depth_vert:hf,depth_frag:uf,distanceRGBA_vert:df,distanceRGBA_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:_f,meshbasic_vert:vf,meshbasic_frag:xf,meshlambert_vert:Mf,meshlambert_frag:yf,meshmatcap_vert:Sf,meshmatcap_frag:wf,meshnormal_vert:bf,meshnormal_frag:Ef,meshphong_vert:Tf,meshphong_frag:Af,meshphysical_vert:Rf,meshphysical_frag:Cf,meshtoon_vert:Pf,meshtoon_frag:Lf,points_vert:Df,points_frag:If,shadow_vert:Uf,shadow_frag:Nf,sprite_vert:Ff,sprite_frag:Of},dt={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},_n={basic:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new it(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Oe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Oe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new it(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Oe([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Oe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Oe([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Oe([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Oe([dt.common,dt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Oe([dt.lights,dt.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};_n.physical={uniforms:Oe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Os={r:0,b:0,g:0};function zf(s,t,e,n,i,r,o){const a=new it(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let x=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?_(a,c):M&&M.isColor&&(_(M,1),x=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===sr)?(h===void 0&&(h=new z(new pt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Hi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ee.getTransfer(M.colorSpace)!==ce,(u!==M||f!==M.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new z(new li(2,2),new Vn({name:"BackgroundMaterial",uniforms:Hi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ee.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Os,$c(s)),n.buffers.color.setClear(Os.r,Os.g,Os.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Bf(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(P,D,V,K,Y){let $=!1;if(o){const q=_(K,V,D);l!==q&&(l=q,p(l.object)),$=d(P,K,V,Y),$&&x(P,K,V,Y)}else{const q=D.wireframe===!0;(l.geometry!==K.id||l.program!==V.id||l.wireframe!==q)&&(l.geometry=K.id,l.program=V.id,l.wireframe=q,$=!0)}Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,N(P,D,V,K),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,D,V){const K=V.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let $=Y[D.id];$===void 0&&($={},Y[D.id]=$);let q=$[K];return q===void 0&&(q=m(f()),$[K]=q),q}function m(P){const D=[],V=[],K=[];for(let Y=0;Y<i;Y++)D[Y]=0,V[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:K,object:P,attributes:{},index:null}}function d(P,D,V,K){const Y=l.attributes,$=D.attributes;let q=0;const nt=V.getAttributes();for(const at in nt)if(nt[at].location>=0){const J=Y[at];let xt=$[at];if(xt===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),J===void 0||J.attribute!==xt||xt&&J.data!==xt.data)return!0;q++}return l.attributesNum!==q||l.index!==K}function x(P,D,V,K){const Y={},$=D.attributes;let q=0;const nt=V.getAttributes();for(const at in nt)if(nt[at].location>=0){let J=$[at];J===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const xt={};xt.attribute=J,J&&J.data&&(xt.data=J.data),Y[at]=xt,q++}l.attributes=Y,l.attributesNum=q,l.index=K}function M(){const P=l.newAttributes;for(let D=0,V=P.length;D<V;D++)P[D]=0}function y(P){C(P,0)}function C(P,D){const V=l.newAttributes,K=l.enabledAttributes,Y=l.attributeDivisors;V[P]=1,K[P]===0&&(s.enableVertexAttribArray(P),K[P]=1),Y[P]!==D&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),Y[P]=D)}function E(){const P=l.newAttributes,D=l.enabledAttributes;for(let V=0,K=D.length;V<K;V++)D[V]!==P[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function R(P,D,V,K,Y,$,q){q===!0?s.vertexAttribIPointer(P,D,V,Y,$):s.vertexAttribPointer(P,D,V,K,Y,$)}function N(P,D,V,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const Y=K.attributes,$=V.getAttributes(),q=D.defaultAttributeValues;for(const nt in $){const at=$[nt];if(at.location>=0){let X=Y[nt];if(X===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const J=X.normalized,xt=X.itemSize,Et=e.get(X);if(Et===void 0)continue;const wt=Et.buffer,Ft=Et.type,Ot=Et.bytesPerElement,Rt=n.isWebGL2===!0&&(Ft===s.INT||Ft===s.UNSIGNED_INT||X.gpuType===Lc);if(X.isInterleavedBufferAttribute){const Kt=X.data,B=Kt.stride,Te=X.offset;if(Kt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<at.locationSize;Pt++)C(at.location+Pt,Kt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Kt.meshPerAttribute*Kt.count)}else for(let Pt=0;Pt<at.locationSize;Pt++)y(at.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let Pt=0;Pt<at.locationSize;Pt++)R(at.location+Pt,xt/at.locationSize,Ft,J,B*Ot,(Te+xt/at.locationSize*Pt)*Ot,Rt)}else{if(X.isInstancedBufferAttribute){for(let Kt=0;Kt<at.locationSize;Kt++)C(at.location+Kt,X.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Kt=0;Kt<at.locationSize;Kt++)y(at.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let Kt=0;Kt<at.locationSize;Kt++)R(at.location+Kt,xt/at.locationSize,Ft,J,xt*Ot,xt/at.locationSize*Kt*Ot,Rt)}}else if(q!==void 0){const J=q[nt];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(at.location,J);break;case 3:s.vertexAttrib3fv(at.location,J);break;case 4:s.vertexAttrib4fv(at.location,J);break;default:s.vertexAttrib1fv(at.location,J)}}}}E()}function v(){O();for(const P in a){const D=a[P];for(const V in D){const K=D[V];for(const Y in K)g(K[Y].object),delete K[Y];delete D[V]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;const D=a[P.id];for(const V in D){const K=D[V];for(const Y in K)g(K[Y].object),delete K[Y];delete D[V]}delete a[P.id]}function I(P){for(const D in a){const V=a[D];if(V[P.id]===void 0)continue;const K=V[P.id];for(const Y in K)g(K[Y].object),delete K[Y];delete V[P.id]}}function O(){j(),h=!0,l!==c&&(l=c,p(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:j,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:y,disableUnusedAttributes:E}}function kf(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Gf(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,y=o||t.has("OES_texture_float"),C=M&&y,E=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:E}}function Hf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Zn,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,M=x*4;let y=d.clippingState||null;c.value=y,y=h(g,f,M,p);for(let C=0;C!==M;++C)y[C]=e[C];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Vf(s){let t=new WeakMap;function e(o,a){return a===Zr?o.mapping=zi:a===Qr&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zr||a===Qr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tu(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zc extends Kc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,La=[.125,.215,.35,.446,.526,.582],ei=20,Fr=new Zc,Da=new it;let Or=null,zr=0,Br=0;const Qn=(1+Math.sqrt(5))/2,Ai=1/Qn,Ia=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Qn,Ai),new A(0,Qn,-Ai),new A(Ai,0,Qn),new A(-Ai,0,Qn),new A(Qn,Ai,0),new A(-Qn,Ai,0)];class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Or=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,zr,Br),t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:fs,format:fn,colorSpace:Cn,depthBuffer:!1},i=Na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wf(r)),this._blurMaterial=Xf(r,t,e)}return i}_compileMaterial(t){const e=new z(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,i){const a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Da),h.toneMapping=kn,h.autoClear=!1;const p=new Ye({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new z(new pt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Da),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):x===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const M=this._cubeSize;zs(i,x*M,d>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zi||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ia[(i-1)%Ia.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ei-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ei;m>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);const d=[];let x=0;for(let R=0;R<ei;++R){const N=R/_,v=Math.exp(-N*N/2);d.push(v),R===0?x+=v:R<m&&(x+=2*v)}for(let R=0;R<d.length;R++)d[R]=d[R]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[i],C=3*y*(i>M-Ii?i-M+Ii:0),E=4*(this._cubeSize-y);zs(e,C,E,3*y,2*y),c.setRenderTarget(e),c.render(u,Fr)}}function Wf(s){const t=[],e=[],n=[];let i=s;const r=s-Ii+1+La.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ii?c=La[o-s+Ii-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),M=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,N=E>2?0:-1,v=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];x.set(v,_*g*E),M.set(f,m*g*E);const S=[E,E,E,E,E,E];y.set(S,d*g*E)}const C=new Ce;C.setAttribute("position",new qe(x,_)),C.setAttribute("uv",new qe(M,m)),C.setAttribute("faceIndex",new qe(y,d)),t.push(C),i>Ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Na(s,t,e){const n=new ci(s,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xf(s,t,e){const n=new Float32Array(ei),i=new A(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Fa(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Oa(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function qf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zr||c===Qr,h=c===zi||c===Bi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ua(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Ua(s));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $f(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let M=0,y=x.length;M<y;M+=3){const C=x[M+0],E=x[M+1],R=x[M+2];f.push(C,E,E,R,R,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const C=M+0,E=M+1,R=M+2;f.push(C,E,E,R,R,C)}}else return;const m=new(Gc(f)?Yc:qc)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Kf(s,t,e,n){const i=n.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){s.drawElements(r,g,a,p*c),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function jf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jf(s,t){return s[0]-t[0]}function Zf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Qf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new he,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let D=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var p=D;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let v=0;M===!0&&(v=1),y===!0&&(v=2),C===!0&&(v=3);let S=h.attributes.position.count*v,I=1;S>t.maxTextureSize&&(I=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const O=new Float32Array(S*I*4*_),j=new Wc(O,S,I,_);j.type=On,j.needsUpdate=!0;const P=v*4;for(let V=0;V<_;V++){const K=E[V],Y=R[V],$=N[V],q=S*I*4*V;for(let nt=0;nt<K.count;nt++){const at=nt*P;M===!0&&(o.fromBufferAttribute(K,nt),O[q+at+0]=o.x,O[q+at+1]=o.y,O[q+at+2]=o.z,O[q+at+3]=0),y===!0&&(o.fromBufferAttribute(Y,nt),O[q+at+4]=o.x,O[q+at+5]=o.y,O[q+at+6]=o.z,O[q+at+7]=0),C===!0&&(o.fromBufferAttribute($,nt),O[q+at+8]=o.x,O[q+at+9]=o.y,O[q+at+10]=o.z,O[q+at+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:j,size:new vt(S,I)},r.set(h,m),h.addEventListener("dispose",D)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const x=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const C=_[y];C[0]=y,C[1]=f[y]}_.sort(Zf);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Jf);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const C=a[y],E=C[0],R=C[1];E!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+y)!==m[E]&&h.setAttribute("morphTarget"+y,m[E]),d&&h.getAttribute("morphNormal"+y)!==d[E]&&h.setAttribute("morphNormal"+y,d[E]),i[y]=R,x+=R):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const M=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function tp(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Qc extends Xe{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:si,h!==si&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===si&&(n=Fn),n===void 0&&h===ki&&(n=ii),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=c!==void 0?c:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tl=new Xe,el=new Qc(1,1);el.compareFunction=kc;const nl=new Wc,il=new Oh,sl=new jc,za=[],Ba=[],ka=new Float32Array(16),Ga=new Float32Array(9),Ha=new Float32Array(4);function qi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=za[i];if(r===void 0&&(r=new Float32Array(i),za[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ar(s,t){let e=Ba[t];e===void 0&&(e=new Int32Array(t),Ba[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function rp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ha.set(n),s.uniformMatrix2fv(this.addr,!1,Ha),Me(e,n)}}function op(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Ga.set(n),s.uniformMatrix3fv(this.addr,!1,Ga),Me(e,n)}}function ap(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;ka.set(n),s.uniformMatrix4fv(this.addr,!1,ka),Me(e,n)}}function cp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function gp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?el:tl;e.setTexture2D(t||r,i)}function _p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||il,i)}function vp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||sl,i)}function xp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nl,i)}function Mp(s){switch(s){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return op;case 35676:return ap;case 5124:case 35670:return cp;case 35667:case 35671:return lp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}function yp(s,t){s.uniform1fv(this.addr,t)}function Sp(s,t){const e=qi(t,this.size,2);s.uniform2fv(this.addr,e)}function wp(s,t){const e=qi(t,this.size,3);s.uniform3fv(this.addr,e)}function bp(s,t){const e=qi(t,this.size,4);s.uniform4fv(this.addr,e)}function Ep(s,t){const e=qi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tp(s,t){const e=qi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ap(s,t){const e=qi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rp(s,t){s.uniform1iv(this.addr,t)}function Cp(s,t){s.uniform2iv(this.addr,t)}function Pp(s,t){s.uniform3iv(this.addr,t)}function Lp(s,t){s.uniform4iv(this.addr,t)}function Dp(s,t){s.uniform1uiv(this.addr,t)}function Ip(s,t){s.uniform2uiv(this.addr,t)}function Up(s,t){s.uniform3uiv(this.addr,t)}function Np(s,t){s.uniform4uiv(this.addr,t)}function Fp(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tl,r[o])}function Op(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||il,r[o])}function zp(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||sl,r[o])}function Bp(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||nl,r[o])}function kp(s){switch(s){case 5126:return yp;case 35664:return Sp;case 35665:return wp;case 35666:return bp;case 35674:return Ep;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Ip;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Bp}}class Gp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mp(e.type)}}class Hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kp(e.type)}}class Vp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Va(s,t){s.seq.push(t),s.map[t.id]=t}function Wp(s,t,e){const n=s.name,i=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),o=kr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Va(e,l===void 0?new Gp(a,s,t):new Hp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Vp(a),Va(e,u)),e=u}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Wp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Wa(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Xp=37297;let qp=0;function Yp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $p(s){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s);let n;switch(t===e?n="":t===Zs&&e===Js?n="LinearDisplayP3ToLinearSRGB":t===Js&&e===Zs&&(n="LinearSRGBToLinearDisplayP3"),s){case Cn:case rr:return[n,"LinearTransferOETF"];case Ae:case fo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Xa(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Yp(s.getShaderSource(t),o)}else return i}function Kp(s,t){const e=$p(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jp(s,t){let e;switch(t){case $l:e="Linear";break;case Kl:e="Reinhard";break;case jl:e="OptimizedCineon";break;case Cc:e="ACESFilmic";break;case Zl:e="AgX";break;case Jl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Jp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function Zp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ui).join(`
`)}function Qp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ui(s){return s!==""}function qa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ya(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(s){return s.replace(em,im)}const nm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function im(s,t){let e=Xt[t];if(e===void 0){const n=nm.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(s){return s.replace(sm,rm)}function rm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ka(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function om(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function am(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function lm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case ql:t="ENVMAP_BLENDING_MIX";break;case Yl:t="ENVMAP_BLENDING_ADD";break}return t}function hm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function um(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=om(e),l=am(e),h=cm(e),u=lm(e),f=hm(e),p=e.isWebGL2?"":Jp(e),g=Zp(e),_=Qp(r),m=i.createProgram();let d,x,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ui).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ui).join(`
`),x.length>0&&(x+=`
`)):(d=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),x=[p,Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==kn?jp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Kp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),o=ro(o),o=qa(o,e),o=Ya(o,e),a=ro(a),a=qa(a,e),a=Ya(a,e),o=$a(o),a=$a(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=M+d+o,C=M+x+a,E=Wa(i,i.VERTEX_SHADER,y),R=Wa(i,i.FRAGMENT_SHADER,C);i.attachShader(m,E),i.attachShader(m,R),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function N(O){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(E).trim(),D=i.getShaderInfoLog(R).trim();let V=!0,K=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,E,R);else{const Y=Xa(i,E,"vertex"),$=Xa(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+Y+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||D==="")&&(K=!1);K&&(O.diagnostics={runnable:V,programLog:j,vertexShader:{log:P,prefix:d},fragmentShader:{log:D,prefix:x}})}i.deleteShader(E),i.deleteShader(R),v=new Ys(i,m),S=tm(i,m)}let v;this.getUniforms=function(){return v===void 0&&N(this),v};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,Xp)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=R,this}let dm=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pm(t),e.set(t,n)),n}}class pm{constructor(t){this.id=dm++,this.code=t,this.usedTimes=0}}function mm(s,t,e,n,i,r,o){const a=new go,c=new fm,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,S,I,O,j){const P=O.fog,D=j.geometry,V=v.isMeshStandardMaterial?O.environment:null,K=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),Y=K&&K.mapping===sr?K.image.height:null,$=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,nt=q!==void 0?q.length:0;let at=0;D.morphAttributes.position!==void 0&&(at=1),D.morphAttributes.normal!==void 0&&(at=2),D.morphAttributes.color!==void 0&&(at=3);let X,J,xt,Et;if($){const Ue=_n[$];X=Ue.vertexShader,J=Ue.fragmentShader}else X=v.vertexShader,J=v.fragmentShader,c.update(v),xt=c.getVertexShaderID(v),Et=c.getFragmentShaderID(v);const wt=s.getRenderTarget(),Ft=j.isInstancedMesh===!0,Ot=j.isBatchedMesh===!0,Rt=!!v.map,Kt=!!v.matcap,B=!!K,Te=!!v.aoMap,Pt=!!v.lightMap,Lt=!!v.bumpMap,St=!!v.normalMap,Qt=!!v.displacementMap,kt=!!v.emissiveMap,T=!!v.metalnessMap,w=!!v.roughnessMap,k=v.anisotropy>0,Z=v.clearcoat>0,Q=v.iridescence>0,st=v.sheen>0,bt=v.transmission>0,ft=k&&!!v.anisotropyMap,yt=Z&&!!v.clearcoatMap,Tt=Z&&!!v.clearcoatNormalMap,Ht=Z&&!!v.clearcoatRoughnessMap,tt=Q&&!!v.iridescenceMap,_t=Q&&!!v.iridescenceThicknessMap,ht=st&&!!v.sheenColorMap,lt=st&&!!v.sheenRoughnessMap,rt=!!v.specularMap,ut=!!v.specularColorMap,Ct=!!v.specularIntensityMap,Vt=bt&&!!v.transmissionMap,zt=bt&&!!v.thicknessMap,Bt=!!v.gradientMap,ct=!!v.alphaMap,L=v.alphaTest>0,mt=!!v.alphaHash,gt=!!v.extensions,Ut=!!D.attributes.uv1,Dt=!!D.attributes.uv2,se=!!D.attributes.uv3;let re=kn;return v.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(re=s.toneMapping),{isWebGL2:h,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:J,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:Et,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ot,instancing:Ft,instancingColor:Ft&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Cn,map:Rt,matcap:Kt,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:Y,aoMap:Te,lightMap:Pt,bumpMap:Lt,normalMap:St,displacementMap:f&&Qt,emissiveMap:kt,normalMapObjectSpace:St&&v.normalMapType===hh,normalMapTangentSpace:St&&v.normalMapType===Bc,metalnessMap:T,roughnessMap:w,anisotropy:k,anisotropyMap:ft,clearcoat:Z,clearcoatMap:yt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ht,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:_t,sheen:st,sheenColorMap:ht,sheenRoughnessMap:lt,specularMap:rt,specularColorMap:ut,specularIntensityMap:Ct,transmission:bt,transmissionMap:Vt,thicknessMap:zt,gradientMap:Bt,opaque:v.transparent===!1&&v.blending===Fi,alphaMap:ct,alphaTest:L,alphaHash:mt,combine:v.combine,mapUv:Rt&&_(v.map.channel),aoMapUv:Te&&_(v.aoMap.channel),lightMapUv:Pt&&_(v.lightMap.channel),bumpMapUv:Lt&&_(v.bumpMap.channel),normalMapUv:St&&_(v.normalMap.channel),displacementMapUv:Qt&&_(v.displacementMap.channel),emissiveMapUv:kt&&_(v.emissiveMap.channel),metalnessMapUv:T&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:ft&&_(v.anisotropyMap.channel),clearcoatMapUv:yt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(v.sheenRoughnessMap.channel),specularMapUv:rt&&_(v.specularMap.channel),specularColorMapUv:ut&&_(v.specularColorMap.channel),specularIntensityMapUv:Ct&&_(v.specularIntensityMap.channel),transmissionMapUv:Vt&&_(v.transmissionMap.channel),thicknessMapUv:zt&&_(v.thicknessMap.channel),alphaMapUv:ct&&_(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(St||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Dt,vertexUv3s:se,pointsUvs:j.isPoints===!0&&!!D.attributes.uv&&(Rt||ct),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:re,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ve,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:gt&&v.extensions.derivatives===!0,extensionFragDepth:gt&&v.extensions.fragDepth===!0,extensionDrawBuffers:gt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:gt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:gt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(S,v),M(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function y(v){const S=g[v.type];let I;if(S){const O=_n[S];I=jh.clone(O.uniforms)}else I=v.uniforms;return I}function C(v,S){let I;for(let O=0,j=l.length;O<j;O++){const P=l[O];if(P.cacheKey===S){I=P,++I.usedTimes;break}}return I===void 0&&(I=new um(s,S,v,r),l.push(I)),I}function E(v){if(--v.usedTimes===0){const S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),v.destroy()}}function R(v){c.remove(v)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:l,dispose:N}}function gm(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _m(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ja(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ja(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,g,_,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||_m),n.length>1&&n.sort(f||ja),i.length>1&&i.sort(f||ja)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function vm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ja,s.set(n,[o])):i>=r.length?(o=new Ja,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function xm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new it};break;case"SpotLight":e={position:new A,direction:new A,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new it,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new it,groundColor:new it};break;case"RectAreaLight":e={color:new it,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function Mm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ym=0;function Sm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wm(s,t){const e=new xm,n=Mm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);const r=new A,o=new ne,a=new ne;function c(h,u){let f=0,p=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let _=0,m=0,d=0,x=0,M=0,y=0,C=0,E=0,R=0,N=0,v=0;h.sort(Sm);const S=u===!0?Math.PI:1;for(let O=0,j=h.length;O<j;O++){const P=h[O],D=P.color,V=P.intensity,K=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=D.r*V*S,p+=D.g*V*S,g+=D.b*V*S;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],V);v++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const q=P.shadow,nt=n.get(P);nt.shadowBias=q.bias,nt.shadowNormalBias=q.normalBias,nt.shadowRadius=q.radius,nt.shadowMapSize=q.mapSize,i.directionalShadow[_]=nt,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=$,_++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(D).multiplyScalar(V*S),$.distance=K,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[d]=$;const q=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,q.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[d]=q.matrix,P.castShadow){const nt=n.get(P);nt.shadowBias=q.bias,nt.shadowNormalBias=q.normalBias,nt.shadowRadius=q.radius,nt.shadowMapSize=q.mapSize,i.spotShadow[d]=nt,i.spotShadowMap[d]=Y,E++}d++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(D).multiplyScalar(V),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=$,x++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),$.distance=P.distance,$.decay=P.decay,P.castShadow){const q=P.shadow,nt=n.get(P);nt.shadowBias=q.bias,nt.shadowNormalBias=q.normalBias,nt.shadowRadius=q.radius,nt.shadowMapSize=q.mapSize,nt.shadowCameraNear=q.camera.near,nt.shadowCameraFar=q.camera.far,i.pointShadow[m]=nt,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=P.shadow.matrix,C++}i.point[m]=$,m++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(V*S),$.groundColor.copy(P.groundColor).multiplyScalar(V*S),i.hemi[M]=$,M++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==x||I.hemiLength!==M||I.numDirectionalShadows!==y||I.numPointShadows!==C||I.numSpotShadows!==E||I.numSpotMaps!==R||I.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=x,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+R-N,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=v,I.directionalLength=_,I.pointLength=m,I.spotLength=d,I.rectAreaLength=x,I.hemiLength=M,I.numDirectionalShadows=y,I.numPointShadows=C,I.numSpotShadows=E,I.numSpotMaps=R,I.numLightProbes=v,i.version=ym++)}function l(h,u){let f=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let x=0,M=h.length;x<M;x++){const y=h[x];if(y.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(y.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function Za(s,t){const e=new wm(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function bm(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Za(s,t),e.set(r,[c])):o>=a.length?(c=new Za(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Em extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rm=`uniform sampler2D shadow_pass;
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
}`;function Cm(s,t,e){let n=new _o;const i=new vt,r=new vt,o=new he,a=new Em({depthPacking:lh}),c=new Tm,l={},h=e.maxTextureSize,u={[Hn]:Ge,[Ge]:Hn,[Ve]:Ve},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new z(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let d=this.type;this.render=function(E,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const v=s.getRenderTarget(),S=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Bn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const j=d!==Tn&&this.type===Tn,P=d===Tn&&this.type!==Tn;for(let D=0,V=E.length;D<V;D++){const K=E[D],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const $=Y.getFrameExtents();if(i.multiply($),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,Y.mapSize.y=r.y)),Y.map===null||j===!0||P===!0){const nt=this.type!==Tn?{minFilter:ze,magFilter:ze}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ci(i.x,i.y,nt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const q=Y.getViewportCount();for(let nt=0;nt<q;nt++){const at=Y.getViewport(nt);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),O.viewport(o),Y.updateMatrices(K,nt),n=Y.getFrustum(),y(R,N,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Tn&&x(Y,N),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(v,S,I)};function x(E,R){const N=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ci(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,N,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,N,p,_,null)}function M(E,R,N,v){let S=null;const I=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=S.uuid,j=R.uuid;let P=l[O];P===void 0&&(P={},l[O]=P);let D=P[j];D===void 0&&(D=S.clone(),P[j]=D,R.addEventListener("dispose",C)),S=D}if(S.visible=R.visible,S.wireframe=R.wireframe,v===Tn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=s.properties.get(S);O.light=N}return S}function y(E,R,N,v,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Tn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);const j=t.update(E),P=E.material;if(Array.isArray(P)){const D=j.groups;for(let V=0,K=D.length;V<K;V++){const Y=D[V],$=P[Y.materialIndex];if($&&$.visible){const q=M(E,$,v,S);E.onBeforeShadow(s,E,R,N,j,q,Y),s.renderBufferDirect(N,null,j,q,E,Y),E.onAfterShadow(s,E,R,N,j,q,Y)}}}else if(P.visible){const D=M(E,P,v,S);E.onBeforeShadow(s,E,R,N,j,D,null),s.renderBufferDirect(N,null,j,D,E,null),E.onAfterShadow(s,E,R,N,j,D,null)}}const O=E.children;for(let j=0,P=O.length;j<P;j++)y(O[j],R,N,v,S)}function C(E){E.target.removeEventListener("dispose",C);for(const N in l){const v=l[N],S=E.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function Pm(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const mt=new he;let gt=null;const Ut=new he(0,0,0,0);return{setMask:function(Dt){gt!==Dt&&!L&&(s.colorMask(Dt,Dt,Dt,Dt),gt=Dt)},setLocked:function(Dt){L=Dt},setClear:function(Dt,se,re,ye,Ue){Ue===!0&&(Dt*=ye,se*=ye,re*=ye),mt.set(Dt,se,re,ye),Ut.equals(mt)===!1&&(s.clearColor(Dt,se,re,ye),Ut.copy(mt))},reset:function(){L=!1,gt=null,Ut.set(-1,0,0,0)}}}function r(){let L=!1,mt=null,gt=null,Ut=null;return{setTest:function(Dt){Dt?Ot(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(Dt){mt!==Dt&&!L&&(s.depthMask(Dt),mt=Dt)},setFunc:function(Dt){if(gt!==Dt){switch(Dt){case Bl:s.depthFunc(s.NEVER);break;case kl:s.depthFunc(s.ALWAYS);break;case Gl:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Vl:s.depthFunc(s.GEQUAL);break;case Wl:s.depthFunc(s.GREATER);break;case Xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Dt}},setLocked:function(Dt){L=Dt},setClear:function(Dt){Ut!==Dt&&(s.clearDepth(Dt),Ut=Dt)},reset:function(){L=!1,mt=null,gt=null,Ut=null}}}function o(){let L=!1,mt=null,gt=null,Ut=null,Dt=null,se=null,re=null,ye=null,Ue=null;return{setTest:function(oe){L||(oe?Ot(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(oe){mt!==oe&&!L&&(s.stencilMask(oe),mt=oe)},setFunc:function(oe,Ne,pn){(gt!==oe||Ut!==Ne||Dt!==pn)&&(s.stencilFunc(oe,Ne,pn),gt=oe,Ut=Ne,Dt=pn)},setOp:function(oe,Ne,pn){(se!==oe||re!==Ne||ye!==pn)&&(s.stencilOp(oe,Ne,pn),se=oe,re=Ne,ye=pn)},setLocked:function(oe){L=oe},setClear:function(oe){Ue!==oe&&(s.clearStencil(oe),Ue=oe)},reset:function(){L=!1,mt=null,gt=null,Ut=null,Dt=null,se=null,re=null,ye=null,Ue=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,M=null,y=null,C=null,E=null,R=null,N=null,v=new it(0,0,0),S=0,I=!1,O=null,j=null,P=null,D=null,V=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=$>=2);let nt=null,at={};const X=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),xt=new he().fromArray(X),Et=new he().fromArray(J);function wt(L,mt,gt,Ut){const Dt=new Uint8Array(4),se=s.createTexture();s.bindTexture(L,se),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<gt;re++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(mt,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(mt+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return se}const Ft={};Ft[s.TEXTURE_2D]=wt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ft[s.TEXTURE_CUBE_MAP]=wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ft[s.TEXTURE_2D_ARRAY]=wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ft[s.TEXTURE_3D]=wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ot(s.DEPTH_TEST),c.setFunc(Ks),kt(!1),T(No),Ot(s.CULL_FACE),St(Bn);function Ot(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function Rt(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function Kt(L,mt){return p[L]!==mt?(s.bindFramebuffer(L,mt),p[L]=mt,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=mt),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=mt)),!0):!1}function B(L,mt){let gt=_,Ut=!1;if(L)if(gt=g.get(mt),gt===void 0&&(gt=[],g.set(mt,gt)),L.isWebGLMultipleRenderTargets){const Dt=L.texture;if(gt.length!==Dt.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let se=0,re=Dt.length;se<re;se++)gt[se]=s.COLOR_ATTACHMENT0+se;gt.length=Dt.length,Ut=!0}}else gt[0]!==s.COLOR_ATTACHMENT0&&(gt[0]=s.COLOR_ATTACHMENT0,Ut=!0);else gt[0]!==s.BACK&&(gt[0]=s.BACK,Ut=!0);Ut&&(e.isWebGL2?s.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function Te(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Pt={[ti]:s.FUNC_ADD,[bl]:s.FUNC_SUBTRACT,[El]:s.FUNC_REVERSE_SUBTRACT};if(n)Pt[zo]=s.MIN,Pt[Bo]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(Pt[zo]=L.MIN_EXT,Pt[Bo]=L.MAX_EXT)}const Lt={[Tl]:s.ZERO,[Al]:s.ONE,[Rl]:s.SRC_COLOR,[jr]:s.SRC_ALPHA,[Ul]:s.SRC_ALPHA_SATURATE,[Dl]:s.DST_COLOR,[Pl]:s.DST_ALPHA,[Cl]:s.ONE_MINUS_SRC_COLOR,[Jr]:s.ONE_MINUS_SRC_ALPHA,[Il]:s.ONE_MINUS_DST_COLOR,[Ll]:s.ONE_MINUS_DST_ALPHA,[Nl]:s.CONSTANT_COLOR,[Fl]:s.ONE_MINUS_CONSTANT_COLOR,[Ol]:s.CONSTANT_ALPHA,[zl]:s.ONE_MINUS_CONSTANT_ALPHA};function St(L,mt,gt,Ut,Dt,se,re,ye,Ue,oe){if(L===Bn){d===!0&&(Rt(s.BLEND),d=!1);return}if(d===!1&&(Ot(s.BLEND),d=!0),L!==wl){if(L!==x||oe!==I){if((M!==ti||E!==ti)&&(s.blendEquation(s.FUNC_ADD),M=ti,E=ti),oe)switch(L){case Fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qe:s.blendFunc(s.ONE,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,R=null,N=null,v.set(0,0,0),S=0,x=L,I=oe}return}Dt=Dt||mt,se=se||gt,re=re||Ut,(mt!==M||Dt!==E)&&(s.blendEquationSeparate(Pt[mt],Pt[Dt]),M=mt,E=Dt),(gt!==y||Ut!==C||se!==R||re!==N)&&(s.blendFuncSeparate(Lt[gt],Lt[Ut],Lt[se],Lt[re]),y=gt,C=Ut,R=se,N=re),(ye.equals(v)===!1||Ue!==S)&&(s.blendColor(ye.r,ye.g,ye.b,Ue),v.copy(ye),S=Ue),x=L,I=!1}function Qt(L,mt){L.side===Ve?Rt(s.CULL_FACE):Ot(s.CULL_FACE);let gt=L.side===Ge;mt&&(gt=!gt),kt(gt),L.blending===Fi&&L.transparent===!1?St(Bn):St(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ut=L.stencilWrite;l.setTest(Ut),Ut&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ot(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){O!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),O=L)}function T(L){L!==yl?(Ot(s.CULL_FACE),L!==j&&(L===No?s.cullFace(s.BACK):L===Sl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),j=L}function w(L){L!==P&&(Y&&s.lineWidth(L),P=L)}function k(L,mt,gt){L?(Ot(s.POLYGON_OFFSET_FILL),(D!==mt||V!==gt)&&(s.polygonOffset(mt,gt),D=mt,V=gt)):Rt(s.POLYGON_OFFSET_FILL)}function Z(L){L?Ot(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function Q(L){L===void 0&&(L=s.TEXTURE0+K-1),nt!==L&&(s.activeTexture(L),nt=L)}function st(L,mt,gt){gt===void 0&&(nt===null?gt=s.TEXTURE0+K-1:gt=nt);let Ut=at[gt];Ut===void 0&&(Ut={type:void 0,texture:void 0},at[gt]=Ut),(Ut.type!==L||Ut.texture!==mt)&&(nt!==gt&&(s.activeTexture(gt),nt=gt),s.bindTexture(L,mt||Ft[L]),Ut.type=L,Ut.texture=mt)}function bt(){const L=at[nt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ft(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ht(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){xt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),xt.copy(L))}function Vt(L){Et.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Et.copy(L))}function zt(L,mt){let gt=u.get(mt);gt===void 0&&(gt=new WeakMap,u.set(mt,gt));let Ut=gt.get(L);Ut===void 0&&(Ut=s.getUniformBlockIndex(mt,L.name),gt.set(L,Ut))}function Bt(L,mt){const Ut=u.get(mt).get(L);h.get(mt)!==Ut&&(s.uniformBlockBinding(mt,Ut,L.__bindingPointIndex),h.set(mt,Ut))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},nt=null,at={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,M=null,y=null,C=null,E=null,R=null,N=null,v=new it(0,0,0),S=0,I=!1,O=null,j=null,P=null,D=null,V=null,xt.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ot,disable:Rt,bindFramebuffer:Kt,drawBuffers:B,useProgram:Te,setBlending:St,setMaterial:Qt,setFlipSided:kt,setCullFace:T,setLineWidth:w,setPolygonOffset:k,setScissorTest:Z,activeTexture:Q,bindTexture:st,unbindTexture:bt,compressedTexImage2D:ft,compressedTexImage3D:yt,texImage2D:rt,texImage3D:ut,updateUBOMapping:zt,uniformBlockBinding:Bt,texStorage2D:ht,texStorage3D:lt,texSubImage2D:Tt,texSubImage3D:Ht,compressedTexSubImage2D:tt,compressedTexSubImage3D:_t,scissor:Ct,viewport:Vt,reset:ct}}function Lm(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,w){return p?new OffscreenCanvas(T,w):er("canvas")}function _(T,w,k,Z){let Q=1;if((T.width>Z||T.height>Z)&&(Q=Z/Math.max(T.width,T.height)),Q<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const st=w?tr:Math.floor,bt=st(Q*T.width),ft=st(Q*T.height);u===void 0&&(u=g(bt,ft));const yt=k?g(bt,ft):u;return yt.width=bt,yt.height=ft,yt.getContext("2d").drawImage(T,0,0,bt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+bt+"x"+ft+")."),yt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return so(T.width)&&so(T.height)}function d(T){return a?!1:T.wrapS!==dn||T.wrapT!==dn||T.minFilter!==ze&&T.minFilter!==sn}function x(T,w){return T.generateMipmaps&&w&&T.minFilter!==ze&&T.minFilter!==sn}function M(T){s.generateMipmap(T)}function y(T,w,k,Z,Q=!1){if(a===!1)return w;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let st=w;if(w===s.RED&&(k===s.FLOAT&&(st=s.R32F),k===s.HALF_FLOAT&&(st=s.R16F),k===s.UNSIGNED_BYTE&&(st=s.R8)),w===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(st=s.R8UI),k===s.UNSIGNED_SHORT&&(st=s.R16UI),k===s.UNSIGNED_INT&&(st=s.R32UI),k===s.BYTE&&(st=s.R8I),k===s.SHORT&&(st=s.R16I),k===s.INT&&(st=s.R32I)),w===s.RG&&(k===s.FLOAT&&(st=s.RG32F),k===s.HALF_FLOAT&&(st=s.RG16F),k===s.UNSIGNED_BYTE&&(st=s.RG8)),w===s.RGBA){const bt=Q?js:ee.getTransfer(Z);k===s.FLOAT&&(st=s.RGBA32F),k===s.HALF_FLOAT&&(st=s.RGBA16F),k===s.UNSIGNED_BYTE&&(st=bt===ce?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function C(T,w,k){return x(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==ze&&T.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function E(T){return T===ze||T===ko||T===fr?s.NEAREST:s.LINEAR}function R(T){const w=T.target;w.removeEventListener("dispose",R),v(w),w.isVideoTexture&&h.delete(w)}function N(T){const w=T.target;w.removeEventListener("dispose",N),I(w)}function v(T){const w=n.get(T);if(w.__webglInit===void 0)return;const k=T.source,Z=f.get(k);if(Z){const Q=Z[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(T),Object.keys(Z).length===0&&f.delete(k)}n.remove(T)}function S(T){const w=n.get(T);s.deleteTexture(w.__webglTexture);const k=T.source,Z=f.get(k);delete Z[w.__cacheKey],o.memory.textures--}function I(T){const w=T.texture,k=n.get(T),Z=n.get(w);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let st=0;st<k.__webglFramebuffer[Q].length;st++)s.deleteFramebuffer(k.__webglFramebuffer[Q][st]);else s.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)s.deleteFramebuffer(k.__webglFramebuffer[Q]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,st=w.length;Q<st;Q++){const bt=n.get(w[Q]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(w[Q])}n.remove(w),n.remove(T)}let O=0;function j(){O=0}function P(){const T=O;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),O+=1,T}function D(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function V(T,w){const k=n.get(T);if(T.isVideoTexture&&Qt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(k,T,w);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+w)}function K(T,w){const k=n.get(T);if(T.version>0&&k.__version!==T.version){xt(k,T,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+w)}function Y(T,w){const k=n.get(T);if(T.version>0&&k.__version!==T.version){xt(k,T,w);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+w)}function $(T,w){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Et(k,T,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+w)}const q={[to]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[eo]:s.MIRRORED_REPEAT},nt={[ze]:s.NEAREST,[ko]:s.NEAREST_MIPMAP_NEAREST,[fr]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Ql]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},at={[uh]:s.NEVER,[_h]:s.ALWAYS,[dh]:s.LESS,[kc]:s.LEQUAL,[fh]:s.EQUAL,[gh]:s.GEQUAL,[ph]:s.GREATER,[mh]:s.NOTEQUAL};function X(T,w,k){if(k?(s.texParameteri(T,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,q[w.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,nt[w.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,nt[w.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==dn||w.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,E(w.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==ze&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,at[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===ze||w.minFilter!==fr&&w.minFilter!==ds||w.type===On&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===fs&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function J(T,w){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",R));const Z=w.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const st=D(w);if(st!==T.__cacheKey){Q[st]===void 0&&(Q[st]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[st].usedTimes++;const bt=Q[T.__cacheKey];bt!==void 0&&(Q[T.__cacheKey].usedTimes--,bt.usedTimes===0&&S(w)),T.__cacheKey=st,T.__webglTexture=Q[st].texture}return k}function xt(T,w,k){let Z=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=s.TEXTURE_3D);const Q=J(T,w),st=w.source;e.bindTexture(Z,T.__webglTexture,s.TEXTURE0+k);const bt=n.get(st);if(st.version!==bt.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const ft=ee.getPrimaries(ee.workingColorSpace),yt=w.colorSpace===on?null:ee.getPrimaries(w.colorSpace),Tt=w.colorSpace===on||ft===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ht=d(w)&&m(w.image)===!1;let tt=_(w.image,Ht,!1,i.maxTextureSize);tt=kt(w,tt);const _t=m(tt)||a,ht=r.convert(w.format,w.colorSpace);let lt=r.convert(w.type),rt=y(w.internalFormat,ht,lt,w.colorSpace,w.isVideoTexture);X(Z,w,_t);let ut;const Ct=w.mipmaps,Vt=a&&w.isVideoTexture!==!0&&rt!==Oc,zt=bt.__version===void 0||Q===!0,Bt=C(w,tt,_t);if(w.isDepthTexture)rt=s.DEPTH_COMPONENT,a?w.type===On?rt=s.DEPTH_COMPONENT32F:w.type===Fn?rt=s.DEPTH_COMPONENT24:w.type===ii?rt=s.DEPTH24_STENCIL8:rt=s.DEPTH_COMPONENT16:w.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===si&&rt===s.DEPTH_COMPONENT&&w.type!==uo&&w.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Fn,lt=r.convert(w.type)),w.format===ki&&rt===s.DEPTH_COMPONENT&&(rt=s.DEPTH_STENCIL,w.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ii,lt=r.convert(w.type))),zt&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,rt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,rt,tt.width,tt.height,0,ht,lt,null));else if(w.isDataTexture)if(Ct.length>0&&_t){Vt&&zt&&e.texStorage2D(s.TEXTURE_2D,Bt,rt,Ct[0].width,Ct[0].height);for(let ct=0,L=Ct.length;ct<L;ct++)ut=Ct[ct],Vt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,ut.width,ut.height,ht,lt,ut.data):e.texImage2D(s.TEXTURE_2D,ct,rt,ut.width,ut.height,0,ht,lt,ut.data);w.generateMipmaps=!1}else Vt?(zt&&e.texStorage2D(s.TEXTURE_2D,Bt,rt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,ht,lt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,rt,tt.width,tt.height,0,ht,lt,tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Vt&&zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,rt,Ct[0].width,Ct[0].height,tt.depth);for(let ct=0,L=Ct.length;ct<L;ct++)ut=Ct[ct],w.format!==fn?ht!==null?Vt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,ut.width,ut.height,tt.depth,ht,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,rt,ut.width,ut.height,tt.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,ut.width,ut.height,tt.depth,ht,lt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,rt,ut.width,ut.height,tt.depth,0,ht,lt,ut.data)}else{Vt&&zt&&e.texStorage2D(s.TEXTURE_2D,Bt,rt,Ct[0].width,Ct[0].height);for(let ct=0,L=Ct.length;ct<L;ct++)ut=Ct[ct],w.format!==fn?ht!==null?Vt?e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,rt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,ut.width,ut.height,ht,lt,ut.data):e.texImage2D(s.TEXTURE_2D,ct,rt,ut.width,ut.height,0,ht,lt,ut.data)}else if(w.isDataArrayTexture)Vt?(zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,rt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,lt,tt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,tt.width,tt.height,tt.depth,0,ht,lt,tt.data);else if(w.isData3DTexture)Vt?(zt&&e.texStorage3D(s.TEXTURE_3D,Bt,rt,tt.width,tt.height,tt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,lt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,rt,tt.width,tt.height,tt.depth,0,ht,lt,tt.data);else if(w.isFramebufferTexture){if(zt)if(Vt)e.texStorage2D(s.TEXTURE_2D,Bt,rt,tt.width,tt.height);else{let ct=tt.width,L=tt.height;for(let mt=0;mt<Bt;mt++)e.texImage2D(s.TEXTURE_2D,mt,rt,ct,L,0,ht,lt,null),ct>>=1,L>>=1}}else if(Ct.length>0&&_t){Vt&&zt&&e.texStorage2D(s.TEXTURE_2D,Bt,rt,Ct[0].width,Ct[0].height);for(let ct=0,L=Ct.length;ct<L;ct++)ut=Ct[ct],Vt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,ht,lt,ut):e.texImage2D(s.TEXTURE_2D,ct,rt,ht,lt,ut);w.generateMipmaps=!1}else Vt?(zt&&e.texStorage2D(s.TEXTURE_2D,Bt,rt,tt.width,tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,lt,tt)):e.texImage2D(s.TEXTURE_2D,0,rt,ht,lt,tt);x(w,_t)&&M(Z),bt.__version=st.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Et(T,w,k){if(w.image.length!==6)return;const Z=J(T,w),Q=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const st=n.get(Q);if(Q.version!==st.__version||Z===!0){e.activeTexture(s.TEXTURE0+k);const bt=ee.getPrimaries(ee.workingColorSpace),ft=w.colorSpace===on?null:ee.getPrimaries(w.colorSpace),yt=w.colorSpace===on||bt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Tt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ht=w.image[0]&&w.image[0].isDataTexture,tt=[];for(let ct=0;ct<6;ct++)!Tt&&!Ht?tt[ct]=_(w.image[ct],!1,!0,i.maxCubemapSize):tt[ct]=Ht?w.image[ct].image:w.image[ct],tt[ct]=kt(w,tt[ct]);const _t=tt[0],ht=m(_t)||a,lt=r.convert(w.format,w.colorSpace),rt=r.convert(w.type),ut=y(w.internalFormat,lt,rt,w.colorSpace),Ct=a&&w.isVideoTexture!==!0,Vt=st.__version===void 0||Z===!0;let zt=C(w,_t,ht);X(s.TEXTURE_CUBE_MAP,w,ht);let Bt;if(Tt){Ct&&Vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ut,_t.width,_t.height);for(let ct=0;ct<6;ct++){Bt=tt[ct].mipmaps;for(let L=0;L<Bt.length;L++){const mt=Bt[L];w.format!==fn?lt!==null?Ct?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,mt.width,mt.height,lt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,ut,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,mt.width,mt.height,lt,rt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,ut,mt.width,mt.height,0,lt,rt,mt.data)}}}else{Bt=w.mipmaps,Ct&&Vt&&(Bt.length>0&&zt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,zt,ut,tt[0].width,tt[0].height));for(let ct=0;ct<6;ct++)if(Ht){Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,tt[ct].width,tt[ct].height,lt,rt,tt[ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,tt[ct].width,tt[ct].height,0,lt,rt,tt[ct].data);for(let L=0;L<Bt.length;L++){const gt=Bt[L].image[ct].image;Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,gt.width,gt.height,lt,rt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,ut,gt.width,gt.height,0,lt,rt,gt.data)}}else{Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,lt,rt,tt[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,lt,rt,tt[ct]);for(let L=0;L<Bt.length;L++){const mt=Bt[L];Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,lt,rt,mt.image[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,ut,lt,rt,mt.image[ct])}}}x(w,ht)&&M(s.TEXTURE_CUBE_MAP),st.__version=Q.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function wt(T,w,k,Z,Q,st){const bt=r.convert(k.format,k.colorSpace),ft=r.convert(k.type),yt=y(k.internalFormat,bt,ft,k.colorSpace);if(!n.get(w).__hasExternalTextures){const Ht=Math.max(1,w.width>>st),tt=Math.max(1,w.height>>st);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,st,yt,Ht,tt,w.depth,0,bt,ft,null):e.texImage2D(Q,st,yt,Ht,tt,0,bt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),St(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,Q,n.get(k).__webglTexture,0,Lt(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,Q,n.get(k).__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(T,w,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let Z=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||St(w)){const Q=w.depthTexture;Q&&Q.isDepthTexture&&(Q.type===On?Z=s.DEPTH_COMPONENT32F:Q.type===Fn&&(Z=s.DEPTH_COMPONENT24));const st=Lt(w);St(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,Z,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Z,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){const Z=Lt(w);k&&St(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,w.width,w.height):St(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const Z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0;Q<Z.length;Q++){const st=Z[Q],bt=r.convert(st.format,st.colorSpace),ft=r.convert(st.type),yt=y(st.internalFormat,bt,ft,st.colorSpace),Tt=Lt(w);k&&St(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,yt,w.width,w.height):St(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,yt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,yt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const Z=n.get(w.depthTexture).__webglTexture,Q=Lt(w);if(w.depthTexture.format===si)St(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(w.depthTexture.format===ki)St(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Rt(T){const w=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ot(w.__webglFramebuffer,T)}else if(k){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ft(w.__webglDepthbuffer[Z],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Ft(w.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(T,w,k){const Z=n.get(T);w!==void 0&&wt(Z.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Rt(T)}function B(T){const w=T.texture,k=n.get(T),Z=n.get(w);T.addEventListener("dispose",N),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=w.version,o.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,st=T.isWebGLMultipleRenderTargets===!0,bt=m(T)||a;if(Q){k.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[ft]=[];for(let yt=0;yt<w.mipmaps.length;yt++)k.__webglFramebuffer[ft][yt]=s.createFramebuffer()}else k.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)k.__webglFramebuffer[ft]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(st)if(i.drawBuffers){const ft=T.texture;for(let yt=0,Tt=ft.length;yt<Tt;yt++){const Ht=n.get(ft[yt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&St(T)===!1){const ft=st?w:[w];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let yt=0;yt<ft.length;yt++){const Tt=ft[yt];k.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[yt]);const Ht=r.convert(Tt.format,Tt.colorSpace),tt=r.convert(Tt.type),_t=y(Tt.internalFormat,Ht,tt,Tt.colorSpace,T.isXRRenderTarget===!0),ht=Lt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,_t,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,k.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ft(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),X(s.TEXTURE_CUBE_MAP,w,bt);for(let ft=0;ft<6;ft++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)wt(k.__webglFramebuffer[ft][yt],T,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else wt(k.__webglFramebuffer[ft],T,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(w,bt)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const ft=T.texture;for(let yt=0,Tt=ft.length;yt<Tt;yt++){const Ht=ft[yt],tt=n.get(Ht);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),X(s.TEXTURE_2D,Ht,bt),wt(k.__webglFramebuffer,T,Ht,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),x(Ht,bt)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ft=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,Z.__webglTexture),X(ft,w,bt),a&&w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)wt(k.__webglFramebuffer[yt],T,w,s.COLOR_ATTACHMENT0,ft,yt);else wt(k.__webglFramebuffer,T,w,s.COLOR_ATTACHMENT0,ft,0);x(w,bt)&&M(ft),e.unbindTexture()}T.depthBuffer&&Rt(T)}function Te(T){const w=m(T)||a,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,Q=k.length;Z<Q;Z++){const st=k[Z];if(x(st,w)){const bt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ft=n.get(st).__webglTexture;e.bindTexture(bt,ft),M(bt),e.unbindTexture()}}}function Pt(T){if(a&&T.samples>0&&St(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,Z=T.height;let Q=s.COLOR_BUFFER_BIT;const st=[],bt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=n.get(T),yt=T.isWebGLMultipleRenderTargets===!0;if(yt)for(let Tt=0;Tt<w.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Tt=0;Tt<w.length;Tt++){st.push(s.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&st.push(bt);const Ht=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(Ht===!1&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),yt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Tt]),Ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[bt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[bt])),yt){const tt=n.get(w[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let Tt=0;Tt<w.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Tt]);const Ht=n.get(w[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function Lt(T){return Math.min(i.maxSamples,T.samples)}function St(T){const w=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Qt(T){const w=o.render.frame;h.get(T)!==w&&(h.set(T,w),T.update())}function kt(T,w){const k=T.colorSpace,Z=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===io||k!==Cn&&k!==on&&(ee.getTransfer(k)===ce?a===!1?t.has("EXT_sRGB")===!0&&Z===fn?(T.format=io,T.minFilter=sn,T.generateMipmaps=!1):w=Hc.sRGBToLinear(w):(Z!==fn||Q!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Kt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=St}function Dm(s,t,e){const n=e.isWebGL2;function i(r,o=on){let a;const c=ee.getTransfer(o);if(r===Gn)return s.UNSIGNED_BYTE;if(r===Dc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ic)return s.UNSIGNED_SHORT_5_5_5_1;if(r===th)return s.BYTE;if(r===eh)return s.SHORT;if(r===uo)return s.UNSIGNED_SHORT;if(r===Lc)return s.INT;if(r===Fn)return s.UNSIGNED_INT;if(r===On)return s.FLOAT;if(r===fs)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===nh)return s.ALPHA;if(r===fn)return s.RGBA;if(r===ih)return s.LUMINANCE;if(r===sh)return s.LUMINANCE_ALPHA;if(r===si)return s.DEPTH_COMPONENT;if(r===ki)return s.DEPTH_STENCIL;if(r===io)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rh)return s.RED;if(r===Uc)return s.RED_INTEGER;if(r===oh)return s.RG;if(r===Nc)return s.RG_INTEGER;if(r===Fc)return s.RGBA_INTEGER;if(r===pr||r===mr||r===gr||r===_r)if(c===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Go||r===Ho||r===Vo||r===Wo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xo||r===qo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Xo)return c===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qo)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yo||r===$o||r===Ko||r===jo||r===Jo||r===Zo||r===Qo||r===ta||r===ea||r===na||r===ia||r===sa||r===ra||r===oa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Yo)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$o)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ko)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jo)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jo)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zo)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qo)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ta)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ea)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===na)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ia)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sa)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ra)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oa)return c===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vr||r===aa||r===ca)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===vr)return c===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===aa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ca)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ah||r===la||r===ha||r===ua)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===vr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===la)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ha)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ua)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ii?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Im extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Um={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Nm extends Vi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const x=[],M=[],y=new vt;let C=null;const E=new He;E.layers.enable(1),E.viewport=new he;const R=new He;R.layers.enable(2),R.viewport=new he;const N=[E,R],v=new Im;v.layers.enable(1),v.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=x[X];return J===void 0&&(J=new Gr,x[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=x[X];return J===void 0&&(J=new Gr,x[X]=J),J.getGripSpace()},this.getHand=function(X){let J=x[X];return J===void 0&&(J=new Gr,x[X]=J),J.getHandSpace()};function O(X){const J=M.indexOf(X.inputSource);if(J===-1)return;const xt=x[J];xt!==void 0&&(xt.update(X.inputSource,X.frame,l||o),xt.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",P);for(let X=0;X<x.length;X++){const J=M[X];J!==null&&(M[X]=null,x[X].disconnect(J))}S=null,I=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",j),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new ci(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,xt=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=_.stencil?ki:si,xt=_.stencil?ii:Fn);const wt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new ci(f.textureWidth,f.textureHeight,{format:fn,type:Gn,depthTexture:new Qc(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Ft=t.properties.get(d);Ft.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(X){for(let J=0;J<X.removed.length;J++){const xt=X.removed[J],Et=M.indexOf(xt);Et>=0&&(M[Et]=null,x[Et].disconnect(xt))}for(let J=0;J<X.added.length;J++){const xt=X.added[J];let Et=M.indexOf(xt);if(Et===-1){for(let Ft=0;Ft<x.length;Ft++)if(Ft>=M.length){M.push(xt),Et=Ft;break}else if(M[Ft]===null){M[Ft]=xt,Et=Ft;break}if(Et===-1)break}const wt=x[Et];wt&&wt.connect(xt)}}const D=new A,V=new A;function K(X,J,xt){D.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(xt.matrixWorld);const Et=D.distanceTo(V),wt=J.projectionMatrix.elements,Ft=xt.projectionMatrix.elements,Ot=wt[14]/(wt[10]-1),Rt=wt[14]/(wt[10]+1),Kt=(wt[9]+1)/wt[5],B=(wt[9]-1)/wt[5],Te=(wt[8]-1)/wt[0],Pt=(Ft[8]+1)/Ft[0],Lt=Ot*Te,St=Ot*Pt,Qt=Et/(-Te+Pt),kt=Qt*-Te;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(kt),X.translateZ(Qt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Ot+Qt,w=Rt+Qt,k=Lt-kt,Z=St+(Et-kt),Q=Kt*Rt/w*T,st=B*Rt/w*T;X.projectionMatrix.makePerspective(k,Z,Q,st,T,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.near=R.near=E.near=X.near,v.far=R.far=E.far=X.far,(S!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,I=v.far);const J=X.parent,xt=v.cameras;Y(v,J);for(let Et=0;Et<xt.length;Et++)Y(xt[Et],J);xt.length===2?K(v,E,R):v.projectionMatrix.copy(E.projectionMatrix),$(X,v,J)};function $(X,J,xt){xt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(xt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Gi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let q=null;function nt(X,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let Et=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,Et=!0);for(let wt=0;wt<xt.length;wt++){const Ft=xt[wt];let Ot=null;if(p!==null)Ot=p.getViewport(Ft);else{const Kt=u.getViewSubImage(f,Ft);Ot=Kt.viewport,wt===0&&(t.setRenderTargetTextures(d,Kt.colorTexture,f.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(d))}let Rt=N[wt];Rt===void 0&&(Rt=new He,Rt.layers.enable(wt),Rt.viewport=new he,N[wt]=Rt),Rt.matrix.fromArray(Ft.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ft.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),wt===0&&(v.matrix.copy(Rt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Et===!0&&v.cameras.push(Rt)}}for(let xt=0;xt<x.length;xt++){const Et=M[xt],wt=x[xt];Et!==null&&wt!==void 0&&wt.update(Et,J,l||o)}q&&q(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const at=new Jc;at.setAnimationLoop(nt),this.setAnimationLoop=function(X){q=X},this.dispose=function(){}}}function Fm(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,$c(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,x,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,x,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ge&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ge&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Om(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function l(x,M){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(x,C);const E=t.render.frame;r[x.id]!==E&&(f(x),r[x.id]=E)}function h(x){const M=u();x.__bindingPointIndex=M;const y=s.createBuffer(),C=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=i[x.id],y=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,R=y.length;E<R;E++){const N=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,S=N.length;v<S;v++){const I=N[v];if(p(I,E,v,C)===!0){const O=I.__offset,j=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let D=0;D<j.length;D++){const V=j[D],K=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+P,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,P),P+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,M,y,C){const E=x.value,R=M+"_"+y;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:C[R]=E.clone(),!0;{const N=C[R];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return C[R]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function g(x){const M=x.uniforms;let y=0;const C=16;for(let R=0,N=M.length;R<N;R++){const v=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,I=v.length;S<I;S++){const O=v[S],j=Array.isArray(O.value)?O.value:[O.value];for(let P=0,D=j.length;P<D;P++){const V=j[P],K=_(V),Y=y%C;Y!==0&&C-Y<K.boundary&&(y+=C-Y),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=K.storage}}}const E=y%C;return E>0&&(y+=C-E),x.__size=y,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}class rl{constructor(t={}){const{canvas:e=Dh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const M=this;let y=!1,C=0,E=0,R=null,N=-1,v=null;const S=new he,I=new he;let O=null;const j=new it(0);let P=0,D=e.width,V=e.height,K=1,Y=null,$=null;const q=new he(0,0,D,V),nt=new he(0,0,D,V);let at=!1;const X=new _o;let J=!1,xt=!1,Et=null;const wt=new ne,Ft=new vt,Ot=new A,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Kt(){return R===null?K:1}let B=n;function Te(b,U){for(let H=0;H<b.length;H++){const W=b[H],G=e.getContext(W,U);if(G!==null)return G}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",mt,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&U.shift(),B=Te(U,b),B===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Pt,Lt,St,Qt,kt,T,w,k,Z,Q,st,bt,ft,yt,Tt,Ht,tt,_t,ht,lt,rt,ut,Ct,Vt;function zt(){Pt=new Yf(B),Lt=new Gf(B,Pt,t),Pt.init(Lt),ut=new Dm(B,Pt,Lt),St=new Pm(B,Pt,Lt),Qt=new jf(B),kt=new gm,T=new Lm(B,Pt,St,kt,Lt,ut,Qt),w=new Vf(M),k=new qf(M),Z=new iu(B,Lt),Ct=new Bf(B,Pt,Z,Lt),Q=new $f(B,Z,Qt,Ct),st=new tp(B,Q,Z,Qt),ht=new Qf(B,Lt,T),Ht=new Hf(kt),bt=new mm(M,w,k,Pt,Lt,Ct,Ht),ft=new Fm(M,kt),yt=new vm,Tt=new bm(Pt,Lt),_t=new zf(M,w,k,St,st,f,c),tt=new Cm(M,st,Lt),Vt=new Om(B,Qt,Lt,St),lt=new kf(B,Pt,Qt,Lt),rt=new Kf(B,Pt,Qt,Lt),Qt.programs=bt.programs,M.capabilities=Lt,M.extensions=Pt,M.properties=kt,M.renderLists=yt,M.shadowMap=tt,M.state=St,M.info=Qt}zt();const Bt=new Nm(M,B);this.xr=Bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=Pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(D,V,!1))},this.getSize=function(b){return b.set(D,V)},this.setSize=function(b,U,H=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=b,V=U,e.width=Math.floor(b*K),e.height=Math.floor(U*K),H===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(D*K,V*K).floor()},this.setDrawingBufferSize=function(b,U,H){D=b,V=U,K=H,e.width=Math.floor(b*H),e.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,U,H,W){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,U,H,W),St.viewport(S.copy(q).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,U,H,W){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,U,H,W),St.scissor(I.copy(nt).multiplyScalar(K).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){St.setScissorTest(at=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(b=!0,U=!0,H=!0){let W=0;if(b){let G=!1;if(R!==null){const Mt=R.texture.format;G=Mt===Fc||Mt===Nc||Mt===Uc}if(G){const Mt=R.texture.type,At=Mt===Gn||Mt===Fn||Mt===uo||Mt===ii||Mt===Dc||Mt===Ic,It=_t.getClearColor(),Nt=_t.getClearAlpha(),qt=It.r,Gt=It.g,Wt=It.b;At?(p[0]=qt,p[1]=Gt,p[2]=Wt,p[3]=Nt,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=qt,g[1]=Gt,g[2]=Wt,g[3]=Nt,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),H&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),Tt.dispose(),kt.dispose(),w.dispose(),k.dispose(),st.dispose(),Ct.dispose(),Vt.dispose(),bt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Ue),Bt.removeEventListener("sessionend",oe),Et&&(Et.dispose(),Et=null),Ne.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=Qt.autoReset,U=tt.enabled,H=tt.autoUpdate,W=tt.needsUpdate,G=tt.type;zt(),Qt.autoReset=b,tt.enabled=U,tt.autoUpdate=H,tt.needsUpdate=W,tt.type=G}function mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const U=b.target;U.removeEventListener("dispose",gt),Ut(U)}function Ut(b){Dt(b),kt.remove(b)}function Dt(b){const U=kt.get(b).programs;U!==void 0&&(U.forEach(function(H){bt.releaseProgram(H)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,W,G,Mt){U===null&&(U=Rt);const At=G.isMesh&&G.matrixWorld.determinant()<0,It=ml(b,U,H,W,G);St.setMaterial(W,At);let Nt=H.index,qt=1;if(W.wireframe===!0){if(Nt=Q.getWireframeAttribute(H),Nt===void 0)return;qt=2}const Gt=H.drawRange,Wt=H.attributes.position;let pe=Gt.start*qt,$e=(Gt.start+Gt.count)*qt;Mt!==null&&(pe=Math.max(pe,Mt.start*qt),$e=Math.min($e,(Mt.start+Mt.count)*qt)),Nt!==null?(pe=Math.max(pe,0),$e=Math.min($e,Nt.count)):Wt!=null&&(pe=Math.max(pe,0),$e=Math.min($e,Wt.count));const Se=$e-pe;if(Se<0||Se===1/0)return;Ct.setup(G,W,It,H,Nt);let Mn,ue=lt;if(Nt!==null&&(Mn=Z.get(Nt),ue=rt,ue.setIndex(Mn)),G.isMesh)W.wireframe===!0?(St.setLineWidth(W.wireframeLinewidth*Kt()),ue.setMode(B.LINES)):ue.setMode(B.TRIANGLES);else if(G.isLine){let Yt=W.linewidth;Yt===void 0&&(Yt=1),St.setLineWidth(Yt*Kt()),G.isLineSegments?ue.setMode(B.LINES):G.isLineLoop?ue.setMode(B.LINE_LOOP):ue.setMode(B.LINE_STRIP)}else G.isPoints?ue.setMode(B.POINTS):G.isSprite&&ue.setMode(B.TRIANGLES);if(G.isBatchedMesh)ue.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ue.renderInstances(pe,Se,G.count);else if(H.isInstancedBufferGeometry){const Yt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,lr=Math.min(H.instanceCount,Yt);ue.renderInstances(pe,Se,lr)}else ue.render(pe,Se)};function se(b,U,H){b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,gs(b,U,H),b.side=Hn,b.needsUpdate=!0,gs(b,U,H),b.side=Ve):gs(b,U,H)}this.compile=function(b,U,H=null){H===null&&(H=b),m=Tt.get(H),m.init(),x.push(m),H.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),b!==H&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(M._useLegacyLights);const W=new Set;return b.traverse(function(G){const Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let At=0;At<Mt.length;At++){const It=Mt[At];se(It,H,G),W.add(It)}else se(Mt,H,G),W.add(Mt)}),x.pop(),m=null,W},this.compileAsync=function(b,U,H=null){const W=this.compile(b,U,H);return new Promise(G=>{function Mt(){if(W.forEach(function(At){kt.get(At).currentProgram.isReady()&&W.delete(At)}),W.size===0){G(b);return}setTimeout(Mt,10)}Pt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let re=null;function ye(b){re&&re(b)}function Ue(){Ne.stop()}function oe(){Ne.start()}const Ne=new Jc;Ne.setAnimationLoop(ye),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(b){re=b,Bt.setAnimationLoop(b),b===null?Ne.stop():Ne.start()},Bt.addEventListener("sessionstart",Ue),Bt.addEventListener("sessionend",oe),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(U),U=Bt.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,U,R),m=Tt.get(b,x.length),m.init(),x.push(m),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(wt),xt=this.localClippingEnabled,J=Ht.init(this.clippingPlanes,xt),_=yt.get(b,d.length),_.init(),d.push(_),pn(b,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,J===!0&&Ht.beginShadows();const H=m.state.shadowsArray;if(tt.render(H,b,U),J===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),_t.render(_,b),m.setupLights(M._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let G=0,Mt=W.length;G<Mt;G++){const At=W[G];Co(_,b,At,At.viewport)}}else Co(_,b,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(M,b,U),Ct.resetDefaultState(),N=-1,v=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function pn(b,U,H,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){W&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);const At=st.update(b),It=b.material;It.visible&&_.push(b,At,It,H,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const At=st.update(b),It=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ot.copy(At.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(It)){const Nt=At.groups;for(let qt=0,Gt=Nt.length;qt<Gt;qt++){const Wt=Nt[qt],pe=It[Wt.materialIndex];pe&&pe.visible&&_.push(b,At,pe,H,Ot.z,Wt)}}else It.visible&&_.push(b,At,It,H,Ot.z,null)}}const Mt=b.children;for(let At=0,It=Mt.length;At<It;At++)pn(Mt[At],U,H,W)}function Co(b,U,H,W){const G=b.opaque,Mt=b.transmissive,At=b.transparent;m.setupLightsView(H),J===!0&&Ht.setGlobalState(M.clippingPlanes,H),Mt.length>0&&pl(G,Mt,U,H),W&&St.viewport(S.copy(W)),G.length>0&&ms(G,U,H),Mt.length>0&&ms(Mt,U,H),At.length>0&&ms(At,U,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function pl(b,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const Mt=Lt.isWebGL2;Et===null&&(Et=new ci(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")?fs:Gn,minFilter:ds,samples:Mt?4:0})),M.getDrawingBufferSize(Ft),Mt?Et.setSize(Ft.x,Ft.y):Et.setSize(tr(Ft.x),tr(Ft.y));const At=M.getRenderTarget();M.setRenderTarget(Et),M.getClearColor(j),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear();const It=M.toneMapping;M.toneMapping=kn,ms(b,H,W),T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et);let Nt=!1;for(let qt=0,Gt=U.length;qt<Gt;qt++){const Wt=U[qt],pe=Wt.object,$e=Wt.geometry,Se=Wt.material,Mn=Wt.group;if(Se.side===Ve&&pe.layers.test(W.layers)){const ue=Se.side;Se.side=Ge,Se.needsUpdate=!0,Po(pe,H,W,$e,Se,Mn),Se.side=ue,Se.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et)),M.setRenderTarget(At),M.setClearColor(j,P),M.toneMapping=It}function ms(b,U,H){const W=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Mt=b.length;G<Mt;G++){const At=b[G],It=At.object,Nt=At.geometry,qt=W===null?At.material:W,Gt=At.group;It.layers.test(H.layers)&&Po(It,U,H,Nt,qt,Gt)}}function Po(b,U,H,W,G,Mt){b.onBeforeRender(M,U,H,W,G,Mt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(M,U,H,W,b,Mt),G.transparent===!0&&G.side===Ve&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,M.renderBufferDirect(H,U,W,G,b,Mt),G.side=Hn,G.needsUpdate=!0,M.renderBufferDirect(H,U,W,G,b,Mt),G.side=Ve):M.renderBufferDirect(H,U,W,G,b,Mt),b.onAfterRender(M,U,H,W,G,Mt)}function gs(b,U,H){U.isScene!==!0&&(U=Rt);const W=kt.get(b),G=m.state.lights,Mt=m.state.shadowsArray,At=G.state.version,It=bt.getParameters(b,G.state,Mt,U,H),Nt=bt.getProgramCacheKey(It);let qt=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?k:w).get(b.envMap||W.environment),qt===void 0&&(b.addEventListener("dispose",gt),qt=new Map,W.programs=qt);let Gt=qt.get(Nt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===At)return Do(b,It),Gt}else It.uniforms=bt.getUniforms(b),b.onBuild(H,It,M),b.onBeforeCompile(It,M),Gt=bt.acquireProgram(It,Nt),qt.set(Nt,Gt),W.uniforms=It.uniforms;const Wt=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Wt.clippingPlanes=Ht.uniform),Do(b,It),W.needsLights=_l(b),W.lightsStateVersion=At,W.needsLights&&(Wt.ambientLightColor.value=G.state.ambient,Wt.lightProbe.value=G.state.probe,Wt.directionalLights.value=G.state.directional,Wt.directionalLightShadows.value=G.state.directionalShadow,Wt.spotLights.value=G.state.spot,Wt.spotLightShadows.value=G.state.spotShadow,Wt.rectAreaLights.value=G.state.rectArea,Wt.ltc_1.value=G.state.rectAreaLTC1,Wt.ltc_2.value=G.state.rectAreaLTC2,Wt.pointLights.value=G.state.point,Wt.pointLightShadows.value=G.state.pointShadow,Wt.hemisphereLights.value=G.state.hemi,Wt.directionalShadowMap.value=G.state.directionalShadowMap,Wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Wt.spotShadowMap.value=G.state.spotShadowMap,Wt.spotLightMatrix.value=G.state.spotLightMatrix,Wt.spotLightMap.value=G.state.spotLightMap,Wt.pointShadowMap.value=G.state.pointShadowMap,Wt.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function Lo(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Ys.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Do(b,U){const H=kt.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ml(b,U,H,W,G){U.isScene!==!0&&(U=Rt),T.resetTextureUnits();const Mt=U.fog,At=W.isMeshStandardMaterial?U.environment:null,It=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Cn,Nt=(W.isMeshStandardMaterial?k:w).get(W.envMap||At),qt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Wt=!!H.morphAttributes.position,pe=!!H.morphAttributes.normal,$e=!!H.morphAttributes.color;let Se=kn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=M.toneMapping);const Mn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=Mn!==void 0?Mn.length:0,Yt=kt.get(W),lr=m.state.lights;if(J===!0&&(xt===!0||b!==v)){const tn=b===v&&W.id===N;Ht.setState(W,b,tn)}let fe=!1;W.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==lr.state.version||Yt.outputColorSpace!==It||G.isBatchedMesh&&Yt.batching===!1||!G.isBatchedMesh&&Yt.batching===!0||G.isInstancedMesh&&Yt.instancing===!1||!G.isInstancedMesh&&Yt.instancing===!0||G.isSkinnedMesh&&Yt.skinning===!1||!G.isSkinnedMesh&&Yt.skinning===!0||G.isInstancedMesh&&Yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Yt.instancingColor===!1&&G.instanceColor!==null||Yt.envMap!==Nt||W.fog===!0&&Yt.fog!==Mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ht.numPlanes||Yt.numIntersection!==Ht.numIntersection)||Yt.vertexAlphas!==qt||Yt.vertexTangents!==Gt||Yt.morphTargets!==Wt||Yt.morphNormals!==pe||Yt.morphColors!==$e||Yt.toneMapping!==Se||Lt.isWebGL2===!0&&Yt.morphTargetsCount!==ue)&&(fe=!0):(fe=!0,Yt.__version=W.version);let qn=Yt.currentProgram;fe===!0&&(qn=gs(W,U,G));let Io=!1,$i=!1,hr=!1;const Pe=qn.getUniforms(),Yn=Yt.uniforms;if(St.useProgram(qn.program)&&(Io=!0,$i=!0,hr=!0),W.id!==N&&(N=W.id,$i=!0),Io||v!==b){Pe.setValue(B,"projectionMatrix",b.projectionMatrix),Pe.setValue(B,"viewMatrix",b.matrixWorldInverse);const tn=Pe.map.cameraPosition;tn!==void 0&&tn.setValue(B,Ot.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,$i=!0,hr=!0)}if(G.isSkinnedMesh){Pe.setOptional(B,G,"bindMatrix"),Pe.setOptional(B,G,"bindMatrixInverse");const tn=G.skeleton;tn&&(Lt.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Pe.setValue(B,"boneTexture",tn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Pe.setOptional(B,G,"batchingTexture"),Pe.setValue(B,"batchingTexture",G._matricesTexture,T));const ur=H.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0&&Lt.isWebGL2===!0)&&ht.update(G,H,qn),($i||Yt.receiveShadow!==G.receiveShadow)&&(Yt.receiveShadow=G.receiveShadow,Pe.setValue(B,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Yn.envMap.value=Nt,Yn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$i&&(Pe.setValue(B,"toneMappingExposure",M.toneMappingExposure),Yt.needsLights&&gl(Yn,hr),Mt&&W.fog===!0&&ft.refreshFogUniforms(Yn,Mt),ft.refreshMaterialUniforms(Yn,W,K,V,Et),Ys.upload(B,Lo(Yt),Yn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ys.upload(B,Lo(Yt),Yn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pe.setValue(B,"center",G.center),Pe.setValue(B,"modelViewMatrix",G.modelViewMatrix),Pe.setValue(B,"normalMatrix",G.normalMatrix),Pe.setValue(B,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let dr=0,vl=tn.length;dr<vl;dr++)if(Lt.isWebGL2){const Uo=tn[dr];Vt.update(Uo,qn),Vt.bind(Uo,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function gl(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function _l(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,H){kt.get(b.texture).__webglTexture=U,kt.get(b.depthTexture).__webglTexture=H;const W=kt.get(b);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){const H=kt.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,H=0){R=b,C=U,E=H;let W=!0,G=null,Mt=!1,At=!1;if(b){const Nt=kt.get(b);Nt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Nt.__webglFramebuffer===void 0?T.setupRenderTarget(b):Nt.__hasExternalTextures&&T.rebindTextures(b,kt.get(b.texture).__webglTexture,kt.get(b.depthTexture).__webglTexture);const qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(At=!0);const Gt=kt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?G=Gt[U][H]:G=Gt[U],Mt=!0):Lt.isWebGL2&&b.samples>0&&T.useMultisampledRTT(b)===!1?G=kt.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?G=Gt[H]:G=Gt,S.copy(b.viewport),I.copy(b.scissor),O=b.scissorTest}else S.copy(q).multiplyScalar(K).floor(),I.copy(nt).multiplyScalar(K).floor(),O=at;if(St.bindFramebuffer(B.FRAMEBUFFER,G)&&Lt.drawBuffers&&W&&St.drawBuffers(b,G),St.viewport(S),St.scissor(I),St.setScissorTest(O),Mt){const Nt=kt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Nt.__webglTexture,H)}else if(At){const Nt=kt.get(b.texture),qt=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.__webglTexture,H||0,qt)}N=-1},this.readRenderTargetPixels=function(b,U,H,W,G,Mt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){St.bindFramebuffer(B.FRAMEBUFFER,It);try{const Nt=b.texture,qt=Nt.format,Gt=Nt.type;if(qt!==fn&&ut.convert(qt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Gt===fs&&(Pt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Pt.has("EXT_color_buffer_float"));if(Gt!==Gn&&ut.convert(Gt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===On&&(Lt.isWebGL2||Pt.has("OES_texture_float")||Pt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&H>=0&&H<=b.height-G&&B.readPixels(U,H,W,G,ut.convert(qt),ut.convert(Gt),Mt)}finally{const Nt=R!==null?kt.get(R).__webglFramebuffer:null;St.bindFramebuffer(B.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(b,U,H=0){const W=Math.pow(2,-H),G=Math.floor(U.image.width*W),Mt=Math.floor(U.image.height*W);T.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,b.x,b.y,G,Mt),St.unbindTexture()},this.copyTextureToTexture=function(b,U,H,W=0){const G=U.image.width,Mt=U.image.height,At=ut.convert(H.format),It=ut.convert(H.type);T.setTexture2D(H,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,H.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,b.x,b.y,G,Mt,At,It,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,At,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,b.x,b.y,At,It,U.image),W===0&&H.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(b,U,H,W,G=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=b.max.x-b.min.x+1,At=b.max.y-b.min.y+1,It=b.max.z-b.min.z+1,Nt=ut.convert(W.format),qt=ut.convert(W.type);let Gt;if(W.isData3DTexture)T.setTexture3D(W,0),Gt=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)T.setTexture2DArray(W,0),Gt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Wt=B.getParameter(B.UNPACK_ROW_LENGTH),pe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$e=B.getParameter(B.UNPACK_SKIP_PIXELS),Se=B.getParameter(B.UNPACK_SKIP_ROWS),Mn=B.getParameter(B.UNPACK_SKIP_IMAGES),ue=H.isCompressedTexture?H.mipmaps[G]:H.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ue.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ue.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?B.texSubImage3D(Gt,G,U.x,U.y,U.z,Mt,At,It,Nt,qt,ue.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Gt,G,U.x,U.y,U.z,Mt,At,It,Nt,ue.data)):B.texSubImage3D(Gt,G,U.x,U.y,U.z,Mt,At,It,Nt,qt,ue),B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,pe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$e),B.pixelStorei(B.UNPACK_SKIP_ROWS,Se),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Mn),G===0&&W.generateMipmaps&&B.generateMipmap(Gt),St.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),St.unbindTexture()},this.resetState=function(){C=0,E=0,R=null,St.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===fo?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===rr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?ri:zc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ri?Ae:Cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zm extends rl{}zm.prototype.isWebGL1Renderer=!0;class xo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new it(t),this.density=e}clone(){return new xo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bm extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class km{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=no,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new A;class nr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oo extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ri;const Qi=new A,Ci=new A,Pi=new A,Li=new vt,ts=new vt,ol=new ne,Bs=new A,es=new A,ks=new A,Qa=new vt,Hr=new vt,tc=new vt;class ec extends ae{constructor(t=new oo){if(super(),this.isSprite=!0,this.type="Sprite",Ri===void 0){Ri=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new km(e,5);Ri.setIndex([0,1,2,0,2,3]),Ri.setAttribute("position",new nr(n,3,0,!1)),Ri.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=Ri,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ci.setFromMatrixScale(this.matrixWorld),ol.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ci.multiplyScalar(-Pi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Gs(Bs.set(-.5,-.5,0),Pi,o,Ci,i,r),Gs(es.set(.5,-.5,0),Pi,o,Ci,i,r),Gs(ks.set(.5,.5,0),Pi,o,Ci,i,r),Qa.set(0,0),Hr.set(1,0),tc.set(1,1);let a=t.ray.intersectTriangle(Bs,es,ks,!1,Qi);if(a===null&&(Gs(es.set(-.5,.5,0),Pi,o,Ci,i,r),Hr.set(0,1),a=t.ray.intersectTriangle(Bs,ks,es,!1,Qi),a===null))return;const c=t.ray.origin.distanceTo(Qi);c<t.near||c>t.far||e.push({distance:c,point:Qi.clone(),uv:rn.getInterpolation(Qi,Bs,es,ks,Qa,Hr,tc,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gs(s,t,e,n,i,r){Li.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ts.x=r*Li.x-i*Li.y,ts.y=i*Li.x+r*Li.y):ts.copy(Li),s.copy(t),s.x+=ts.x,s.y+=ts.y,s.applyMatrix4(ol)}class nc extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Di=new ne,ic=new ne,Hs=[],sc=new hi,Gm=new ne,ns=new z,is=new Xi;class zn extends z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),sc.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),is.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),t.ray.intersectsSphere(is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),ic.multiplyMatrices(n,Di),ns.matrixWorld=ic,ns.raycast(t,Hs);for(let o=0,a=Hs.length;o<a;o++){const c=Hs[o];c.instanceId=r,c.object=this,e.push(c)}Hs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mo extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rc=new ne,ao=new mo,Vs=new Xi,Ws=new A;class al extends ae{constructor(t=new Ce,e=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;rc.copy(i).invert(),ao.copy(t.ray).applyMatrix4(rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);Ws.fromBufferAttribute(u,m),oc(Ws,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Ws.fromBufferAttribute(u,g),oc(Ws,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oc(s,t,e,n,i,r,o){const a=ao.distanceSqToPoint(s);if(a<e){const c=new A;ao.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class cl extends Xe{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new vt:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],o=[],a=new A,c=new ne;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(be(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yo extends xn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new vt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hm extends yo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function So(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Xs=new A,Vr=new So,Wr=new So,Xr=new So;class Vm extends xn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Xs.subVectors(i[0],i[1]).add(i[0]),l=Xs);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Xs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Wr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Xr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Vr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Wr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Xr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Vr.calc(c),Wr.calc(c),Xr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ac(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Wm(s,t){const e=1-s;return e*e*t}function Xm(s,t){return 2*(1-s)*s*t}function qm(s,t){return s*s*t}function ls(s,t,e,n){return Wm(s,t)+Xm(s,e)+qm(s,n)}function Ym(s,t){const e=1-s;return e*e*e*t}function $m(s,t){const e=1-s;return 3*e*e*s*t}function Km(s,t){return 3*(1-s)*s*s*t}function jm(s,t){return s*s*s*t}function hs(s,t,e,n,i){return Ym(s,t)+$m(s,e)+Km(s,n)+jm(s,i)}class ll extends xn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,i.x,r.x,o.x,a.x),hs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jm extends xn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hs(t,i.x,r.x,o.x,a.x),hs(t,i.y,r.y,o.y,a.y),hs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hl extends xn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zm extends xn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ul extends xn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,i.x,r.x,o.x),ls(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qm extends xn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,i.x,r.x,o.x),ls(t,i.y,r.y,o.y),ls(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dl extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ac(a,c.x,l.x,h.x,u.x),ac(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new vt().fromArray(i))}return this}}var cc=Object.freeze({__proto__:null,ArcCurve:Hm,CatmullRomCurve3:Vm,CubicBezierCurve:ll,CubicBezierCurve3:Jm,EllipseCurve:yo,LineCurve:hl,LineCurve3:Zm,QuadraticBezierCurve:ul,QuadraticBezierCurve3:Qm,SplineCurve:dl});class t0 extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new cc[i.type]().fromJSON(i))}return this}}class e0 extends t0{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hl(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new ul(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new ll(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new dl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new yo(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wo extends Ce{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=be(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,f=new vt,p=new A,g=new A,_=new A;let m=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=e;x++){const M=n+x*h*i,y=Math.sin(M),C=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*C,o.push(u.x,u.y,u.z),f.x=x/e,f.y=E/(t.length-1),a.push(f.x,f.y);const R=c[3*E+0]*y,N=c[3*E+1],v=c[3*E+0]*C;l.push(R,N,v)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const y=M+x*t.length,C=y,E=y+t.length,R=y+t.length+1,N=y+1;r.push(C,E,N),r.push(R,N,E)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.points,t.segments,t.phiStart,t.phiLength)}}class bo extends wo{constructor(t=1,e=1,n=4,i=8){const r=new e0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class ke extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new vt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jt extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(p,2));function x(){const y=new A,C=new A;let E=0;const R=(e-t)/n;for(let N=0;N<=r;N++){const v=[],S=N/r,I=S*(e-t)+t;for(let O=0;O<=i;O++){const j=O/i,P=j*c+a,D=Math.sin(P),V=Math.cos(P);C.x=I*D,C.y=-S*n+m,C.z=I*V,u.push(C.x,C.y,C.z),y.set(D,R,V).normalize(),f.push(y.x,y.y,y.z),p.push(j,1-S),v.push(g++)}_.push(v)}for(let N=0;N<i;N++)for(let v=0;v<r;v++){const S=_[v][N],I=_[v+1][N],O=_[v+1][N+1],j=_[v][N+1];h.push(S,I,j),h.push(I,O,j),E+=6}l.addGroup(d,E,0),d+=E}function M(y){const C=g,E=new vt,R=new A;let N=0;const v=y===!0?t:e,S=y===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const I=g;for(let O=0;O<=i;O++){const P=O/i*c+a,D=Math.cos(P),V=Math.sin(P);R.x=v*V,R.y=m*S,R.z=v*D,u.push(R.x,R.y,R.z),f.push(0,S,0),E.x=D*.5+.5,E.y=V*.5*S+.5,p.push(E.x,E.y),g++}for(let O=0;O<i;O++){const j=C+O,P=I+O;y===!0?h.push(P,P+1,j):h.push(P+1,P,j),N+=3}l.addGroup(d,N,y===!0?1:2),d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ze extends Jt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ze(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new A,y=new A,C=new A;for(let E=0;E<e.length;E+=3)p(e[E+0],M),p(e[E+1],y),p(e[E+2],C),c(M,y,C,x)}function c(x,M,y,C){const E=C+1,R=[];for(let N=0;N<=E;N++){R[N]=[];const v=x.clone().lerp(y,N/E),S=M.clone().lerp(y,N/E),I=E-N;for(let O=0;O<=I;O++)O===0&&N===E?R[N][O]=v:R[N][O]=v.clone().lerp(S,O/I)}for(let N=0;N<E;N++)for(let v=0;v<2*(E-N)-1;v++){const S=Math.floor(v/2);v%2===0?(f(R[N][S+1]),f(R[N+1][S]),f(R[N][S])):(f(R[N][S+1]),f(R[N+1][S+1]),f(R[N+1][S]))}}function l(x){const M=new A;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(x),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){const x=new A;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const y=m(x)/2/Math.PI+.5,C=d(x)/Math.PI+.5;o.push(y,1-C)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const M=o[x+0],y=o[x+2],C=o[x+4],E=Math.max(M,y,C),R=Math.min(M,y,C);E>.9&&R<.1&&(M<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,M){const y=x*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){const x=new A,M=new A,y=new A,C=new A,E=new vt,R=new vt,N=new vt;for(let v=0,S=0;v<r.length;v+=9,S+=6){x.set(r[v+0],r[v+1],r[v+2]),M.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),E.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(x).add(M).add(y).divideScalar(3);const I=m(C);_(E,S+0,x,I),_(R,S+2,M,I),_(N,S+4,y,I)}}function _(x,M,y,C){C<0&&x.x===1&&(o[M]=x.x-1),y.x===0&&y.z===0&&(o[M]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.vertices,t.indices,t.radius,t.details)}}class cr extends Eo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cr(t.radius,t.detail)}}class Wn extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,f=new A,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const x=[],M=d/n;let y=0;d===0&&o===0?y=.5/e:d===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const E=C/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+y,1-M),x.push(l++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const M=h[d][x+1],y=h[d][x],C=h[d+1][x],E=h[d+1][x+1];(d!==0||o>0)&&p.push(M,y,E),(d!==n-1||c<Math.PI)&&p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xn extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,f=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,x=(i+1)*p+g;o.push(_,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ot extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ps extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new it(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class n0 extends ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qr=new ne,lc=new A,hc=new A;class To{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class i0 extends To{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Gi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class s0 extends ps{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new i0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const uc=new ne,ss=new A,Yr=new A;class r0 extends To{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(ss),Yr.copy(n.position),Yr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Yr),n.updateMatrixWorld(),i.makeTranslation(-ss.x,-ss.y,-ss.z),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc)}}class Be extends ps{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new r0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class o0 extends To{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a0 extends ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new o0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class c0 extends ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dc{constructor(t,e,n=0,i=1/0){this.ray=new mo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return co(t,this,n,e),n.sort(fc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)co(t[i],this,n,e);return n.sort(fc),n}}function fc(s,t){return s.distance-t.distance}function co(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)co(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);const Ie={nightTop:"#070b12",nightBottom:"#0f172a",amber:"#f59e0b",red:"#ef4444",green:"#10b981"},ge={eyeHeight:1.62,radius:.42,walkSpeed:4.6,sprintSpeed:7.4,accel:42,maxHealth:100,maxArmor:50,leanAngle:.15,leanOffset:.62,leanRate:9,adsFov:55,baseFov:75,interactRange:3.5},de={pistol:{name:"M9 Tactical Pistol",damage:26,pellets:1,fireInterval:.26,magSize:12,reserveMax:96,reloadTime:1.1,spreadDeg:.8,adsSpreadDeg:.25,recoilPitchDeg:.9,recoilYawDeg:.22,auto:!1,range:90,kickback:.05},rifle:{name:"K2 Assault Rifle",damage:17,pellets:1,fireInterval:.095,magSize:30,reserveMax:180,reloadTime:2,spreadDeg:1.6,adsSpreadDeg:.5,recoilPitchDeg:.5,recoilYawDeg:.16,auto:!0,range:150,kickback:.035},shotgun:{name:"M870 Pump Shotgun",damage:13,pellets:8,fireInterval:.95,magSize:5,reserveMax:30,reloadTime:2.6,spreadDeg:4.6,adsSpreadDeg:3.4,recoilPitchDeg:2.1,recoilYawDeg:.5,auto:!1,range:60,kickback:.09},launcher:{name:'FIM-92 "Vulcan" SAM',damage:60,pellets:1,fireInterval:1.5,magSize:1,reserveMax:6,reloadTime:3.4,spreadDeg:1,adsSpreadDeg:.4,recoilPitchDeg:1.4,recoilYawDeg:.3,auto:!1,range:240,kickback:.07}},mn={speed:26,blastRadius:5.5,blastMult:2,lockConeDeg:45,turnRate:6,fuseRadius:.9},gn={maxLevel:10,thresholds:[0,40,100,190,300,430,590,780,1e3,1250],hpPerLevel:12,healOnLevelUp:25,damagePerLevel:.1,fireRatePerLevel:.08,reloadPerLevel:.08};function ir(s){return s>=9?3:s>=6?2:s>=3?1:0}const l0=[{dmgAdd:6,magAdd:2,pelletsAdd:0},{dmgAdd:12,magAdd:4,pelletsAdd:1},{dmgAdd:20,magAdd:6,pelletsAdd:2}],us={maxLevel:5,cost:s=>30+25*s,damagePerLevel:.18,fireRatePerLevel:.12,capacityPerLevel:.25,reloadPerLevel:.12},lo={scout:{hp:34,shield:0,speed:6.6,radius:.55,credits:10,fireDamage:4,fireInterval:3.2,burst:1,attackRange:26},heavy:{hp:120,shield:90,speed:2.4,radius:.95,credits:30,fireDamage:6,fireInterval:4,burst:5,attackRange:32},kamikaze:{hp:45,shield:0,speed:9.2,radius:.6,credits:20,fireDamage:45,fireInterval:0,burst:0,attackRange:0},warden:{hp:45,shield:0,speed:4.2,radius:.7,credits:25,fireDamage:18,fireInterval:4.5,burst:1,attackRange:48},bomber:{hp:80,shield:0,speed:3.2,radius:.9,credits:35,fireDamage:46,fireInterval:5,burst:0,attackRange:0},crawler:{hp:55,shield:0,speed:5.4,radius:.55,credits:15,fireDamage:8,fireInterval:.9,burst:0,attackRange:0},colossus:{hp:420,shield:260,speed:1.8,radius:1.45,credits:90,fireDamage:12,fireInterval:4.6,burst:3,attackRange:36}},h0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,concurrent:6,spawnGap:2.2},{atProgress:20,scouts:8,heavies:0,kamikazes:3,concurrent:8,spawnGap:1.9},{atProgress:40,scouts:8,heavies:3,kamikazes:4,concurrent:10,spawnGap:1.6},{atProgress:60,scouts:10,heavies:5,kamikazes:6,concurrent:12,spawnGap:1.4},{atProgress:80,scouts:14,heavies:6,kamikazes:10,concurrent:15,spawnGap:1.1}],u0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,concurrent:6,spawnGap:2.2},{atProgress:20,scouts:7,heavies:0,kamikazes:3,wardens:2,concurrent:9,spawnGap:1.9},{atProgress:40,scouts:7,heavies:3,kamikazes:3,wardens:2,bombers:2,concurrent:11,spawnGap:1.6},{atProgress:60,scouts:9,heavies:4,kamikazes:5,wardens:3,bombers:2,concurrent:13,spawnGap:1.4},{atProgress:80,scouts:12,heavies:5,kamikazes:8,wardens:4,bombers:3,concurrent:16,spawnGap:1.1}],d0={skyTop:"#070b12",skyBottom:"#0f172a",ambient:"#1b2a44",ambientInt:.7,hemiSky:"#2c3d5e",hemiGround:"#0a0e15",hemiInt:.55,moon:"#8fb2e8",moonInt:.85,fog:"#0f172a"},f0={skyTop:"#060a14",skyBottom:"#131c30",ambient:"#1e2c48",ambientInt:.7,hemiSky:"#31446a",hemiGround:"#0a0e15",hemiInt:.55,moon:"#a3c2f0",moonInt:1,fog:"#101a2c"},p0={skyTop:"#141026",skyBottom:"#6b3b2f",ambient:"#4c3a4e",ambientInt:.75,hemiSky:"#5a4055",hemiGround:"#171018",hemiInt:.6,moon:"#ffb37a",moonInt:.65,fog:"#3a2a35"},m0={skyTop:"#0e1830",skyBottom:"#4f7d92",ambient:"#3a5670",ambientInt:.8,hemiSky:"#6f93ac",hemiGround:"#141c26",hemiInt:.65,moon:"#bfe0ff",moonInt:.95,fog:"#2c4257"},g0={skyTop:"#180a12",skyBottom:"#7c2833",ambient:"#63303c",ambientInt:.75,hemiSky:"#7a3a44",hemiGround:"#1a0e12",hemiInt:.55,moon:"#ff9a70",moonInt:.7,fog:"#421f28"},pc={shack:[-9,-6],tower:[0,-4.5],bench:[8,5],searchlight:[-14.5,7],walls:[[8,-2.5,-.6],[-4,9,.4],[11,7.5,1.1]],sandbags:[[-8.5,5.5,.5],[6.5,-7.5,-.9],[12.5,2,1.4],[-2.5,-9.5,.1]]},_0={shack:[-11,-7],tower:[1,-2],bench:[9,7],searchlight:[-15,-4],walls:[[-6,6,.3],[7,-6,-.4],[3,10,1.2]],sandbags:[[-7,-10.5,.6],[6,-3,-.7],[12,10,1.3],[-1,-4,.2]]},v0={shack:[-10,7],tower:[0,1],bench:[9,-6],searchlight:[-14,-8],walls:[[-7,-3,.5],[6,6,-.3],[9,-10,.8]],sandbags:[[-6,-7,.3],[4,9,-1],[12,4,1.5],[-3,4,.1]]},x0={shack:[-9,8],tower:[0,-3],bench:[9,6],searchlight:[-13,-9],walls:[[-6,-8,.4],[7,3,-.5],[2,11,1.2]],sandbags:[[-8,-2,.2],[6,-9,-.8],[11,-6,1.4],[-6,12,.6]]},M0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,concurrent:6,spawnGap:2.2},{atProgress:20,scouts:7,heavies:0,kamikazes:3,crawlers:5,concurrent:10,spawnGap:1.9},{atProgress:40,scouts:7,heavies:3,kamikazes:3,wardens:2,bombers:1,crawlers:6,concurrent:12,spawnGap:1.6},{atProgress:60,scouts:9,heavies:4,kamikazes:5,wardens:3,crawlers:7,concurrent:14,spawnGap:1.4},{atProgress:80,scouts:12,heavies:5,kamikazes:8,wardens:4,bombers:3,crawlers:9,concurrent:17,spawnGap:1.1}],y0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,crawlers:3,concurrent:8,spawnGap:2.1},{atProgress:20,scouts:6,heavies:0,kamikazes:3,wardens:2,crawlers:5,concurrent:10,spawnGap:1.9},{atProgress:40,scouts:7,heavies:3,kamikazes:3,bombers:2,colossi:1,crawlers:6,concurrent:12,spawnGap:1.6},{atProgress:60,scouts:9,heavies:4,kamikazes:5,wardens:3,crawlers:7,colossi:1,concurrent:14,spawnGap:1.4},{atProgress:80,scouts:11,heavies:5,kamikazes:8,wardens:4,bombers:3,crawlers:8,colossi:2,concurrent:17,spawnGap:1.1}],S0=[{atProgress:0,scouts:6,heavies:0,kamikazes:0,crawlers:4,concurrent:8,spawnGap:2.1},{atProgress:20,scouts:7,heavies:0,kamikazes:4,wardens:2,crawlers:6,concurrent:11,spawnGap:1.9},{atProgress:40,scouts:8,heavies:3,kamikazes:3,bombers:2,crawlers:7,wardens:2,colossi:1,concurrent:13,spawnGap:1.6},{atProgress:60,scouts:10,heavies:4,kamikazes:6,wardens:3,crawlers:8,colossi:2,concurrent:15,spawnGap:1.4},{atProgress:80,scouts:12,heavies:6,kamikazes:9,wardens:4,bombers:4,crawlers:10,colossi:3,concurrent:18,spawnGap:1.1}],hn=[{id:"alpine",name:"ALPINE PASS",timeOfDay:"Night",blurb:"Standard hold on the snow plateau — scouts, heavies and kamikazes attack from every bearing.",newThreats:"",waves:h0,hpMul:1,dmgMul:1,ambience:d0,layout:pc,launcherUnlock:!1},{id:"canyon",name:"CANYON RELAY",timeOfDay:"Night",blurb:"Narrow rock-walled corridor; hostiles funnel from both ridge gaps.",newThreats:"NEW: Warden sniper · Bomber drone",waves:u0,hpMul:1.15,dmgMul:1.1,ambience:f0,layout:pc,launcherUnlock:!1},{id:"rail",name:"FROZEN RAIL YARD",timeOfDay:"Dusk",blurb:"Dusk falls over the frozen rail yard — parked cars, warehouse and gantry choke the field.",newThreats:"NEW: Crawler ground unit · Unlock: Vulcan SAM",waves:M0,hpMul:1.3,dmgMul:1.2,ambience:p0,layout:_0,launcherUnlock:!0},{id:"dam",name:"DAM OVERLOOK",timeOfDay:"Dawn",blurb:"Dawn at the high dam — the 20 m wall shields the north, hostiles pour up from the valley.",newThreats:"NEW: Colossus armored fortress",waves:y0,hpMul:1.5,dmgMul:1.3,ambience:m0,layout:v0,launcherUnlock:!1},{id:"crater",name:"SUMMIT CRATER",timeOfDay:"Blood Dusk",blurb:"Final siege inside a ring-walled crater — the swarm enters through four gaps and everything it has comes at once.",newThreats:"All classes · Colossus pack",waves:S0,hpMul:1.75,dmgMul:1.45,ambience:g0,layout:x0,launcherUnlock:!1}],rs={radius:5.5,maxDamage:46,towerHeat:14,towerRadius:7},w0=14,me={baseSignalRate:.42,waveSignalRate:.3,heatGain:1.9,heatCool:.7,overheatAt:100,overheatRestartHold:2.5,overheatCoolTo:18,kamikazeTowerHeat:26,airdropProgress:[10,30,50,70,92],ammoStationCooldown:32,medStationCooldown:40,medHeal:40,medArmor:15,searchlightOverloadTime:22,searchlightCooldown:12,searchlightRange:62,searchlightAngleDeg:13},ni={baseFog:.011,fogPerBlizzard:.017,fogOscillation:.0035,snowCount:1400,snowBox:55};class b0{constructor(t){F(this,"renderer");F(this,"scene");F(this,"camera");F(this,"fog");F(this,"moon");F(this,"skyTop");F(this,"skyBottom");F(this,"ambient");F(this,"hemi");this.renderer=new rl({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=Cc,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ac,t.appendChild(this.renderer.domElement),this.scene=new Bm,this.fog=new xo(new it(Ie.nightBottom),ni.baseFog),this.scene.fog=this.fog,this.camera=new He(E0,window.innerWidth/window.innerHeight,.05,400),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.ambient=new c0(new it("#1b2a44"),.7),this.scene.add(this.ambient),this.hemi=new n0(new it("#2c3d5e"),new it("#0a0e15"),.55),this.scene.add(this.hemi),this.moon=new a0(new it("#8fb2e8"),.85),this.moon.position.set(-40,55,-25),this.moon.castShadow=!0,this.moon.shadow.mapSize.set(1024,1024);const e=this.moon.shadow.camera;e.left=-45,e.right=45,e.top=45,e.bottom=-45,e.near=5,e.far=140,this.moon.shadow.bias=-.0015,this.scene.add(this.moon),this.buildSky(),window.addEventListener("resize",()=>this.onResize())}buildSky(){const t=new Wn(320,24,16),e=new Vn({side:Ge,depthWrite:!1,fog:!1,uniforms:{top:{value:new it(Ie.nightTop)},bottom:{value:new it(Ie.nightBottom)}},vertexShader:`
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
        }`});this.skyTop=e.uniforms.top.value,this.skyBottom=e.uniforms.bottom.value,this.scene.add(new z(t,e));const n=new Ce,i=500,r=new Float32Array(i*3);for(let a=0;a<i;a++){const c=Math.random()*Math.PI*2,l=Math.acos(Math.random()*.92+.06),h=300;r[a*3]=h*Math.sin(l)*Math.cos(c),r[a*3+1]=h*Math.cos(l),r[a*3+2]=h*Math.sin(l)*Math.sin(c)}n.setAttribute("position",new qe(r,3));const o=new Mo({color:12571903,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:.8,fog:!1});this.scene.add(new al(n,o))}setAmbience(t){this.skyTop.set(t.skyTop),this.skyBottom.set(t.skyBottom),this.ambient.color.set(t.ambient),this.ambient.intensity=t.ambientInt,this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.hemi.intensity=t.hemiInt,this.moon.color.set(t.moon),this.moon.intensity=t.moonInt,this.fog.color.set(t.fog)}setFog(t){this.fog.density=ni.baseFog+ni.fogPerBlizzard*t+ni.fogOscillation*Math.sin(performance.now()*4e-4)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}render(){this.renderer.render(this.scene,this.camera)}}const E0=75;class T0{constructor(){F(this,"ctx",null);F(this,"master");F(this,"noiseBuf");F(this,"windGain",null);F(this,"humGain",null);F(this,"alarmOsc",null);F(this,"alarmGain",null);F(this,"enabled",!0)}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;this.startWind(),this.startDroneHum()}resume(){var t;(t=this.ctx)==null||t.resume()}noise(t){const e=this.ctx.createBufferSource();return e.buffer=this.noiseBuf,e.loop=!0,e.start(),e.stop(this.ctx.currentTime+t),e}env(t,e,n){const i=this.ctx.createGain(),r=this.ctx.currentTime;return i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(t,r+e),i.gain.exponentialRampToValueAtTime(1e-4,r+e+n),i}startWind(){const t=this.ctx.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=380,e.Q.value=.6,this.windGain=this.ctx.createGain(),this.windGain.gain.value=.04,t.connect(e).connect(this.windGain).connect(this.master),t.start()}setWind(t){this.windGain&&(this.windGain.gain.value=.02+.09*t)}startDroneHum(){const t=this.ctx,e=t.createOscillator();e.type="sawtooth",e.frequency.value=84;const n=t.createOscillator();n.type="square",n.frequency.value=42;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=260,this.humGain=t.createGain(),this.humGain.gain.value=0,e.connect(i),n.connect(i),i.connect(this.humGain).connect(this.master),e.start(),n.start()}setDroneHum(t){this.humGain&&(this.humGain.gain.value=Math.min(.12,t*.018))}setAlarm(t){if(this.ctx)if(t&&!this.alarmOsc){const e=this.ctx.createOscillator();e.type="square",e.frequency.value=660;const n=this.ctx.createOscillator();n.frequency.value=3.2;const i=this.ctx.createGain();i.gain.value=.05,this.alarmGain=this.ctx.createGain(),this.alarmGain.gain.value=.06,n.connect(i).connect(this.alarmGain.gain),e.connect(this.alarmGain).connect(this.master),e.start(),n.start(),this.alarmOsc=e}else!t&&this.alarmOsc&&(this.alarmOsc.stop(),this.alarmOsc=null,this.alarmGain=null)}gunshot(t){if(!this.ctx||!this.enabled)return;const e=t==="shotgun"?{peak:.9,lp:900,decay:.28,thump:55}:t==="rifle"?{peak:.5,lp:2400,decay:.13,thump:85}:t==="launcher"?{peak:.85,lp:650,decay:.4,thump:46}:{peak:.55,lp:1600,decay:.16,thump:100},n=this.noise(e.decay+.05),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=e.lp;const r=this.env(e.peak,.002,e.decay);n.connect(i).connect(r).connect(this.master);const o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(e.thump,this.ctx.currentTime),o.frequency.exponentialRampToValueAtTime(30,this.ctx.currentTime+e.decay);const a=this.env(e.peak*.8,.002,e.decay*.8);o.connect(a).connect(this.master),o.start(),o.stop(this.ctx.currentTime+e.decay+.1)}dryFire(){this.blip(2200,.05,.15,"square")}reload(){this.blip(900,.03,.08,"square"),setTimeout(()=>this.blip(650,.03,.09,"square"),180)}hitTick(){this.blip(1750,.04,.06,"triangle")}shieldZap(){if(!this.ctx||!this.enabled)return;const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.setValueAtTime(1200,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(220,this.ctx.currentTime+.12);const e=this.env(.16,.002,.13);t.connect(e).connect(this.master),t.start(),t.stop(this.ctx.currentTime+.2)}laser(){if(!this.ctx||!this.enabled)return;const t=this.ctx.createOscillator();t.type="square",t.frequency.setValueAtTime(2400,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(700,this.ctx.currentTime+.15);const e=this.env(.12,.002,.16);t.connect(e).connect(this.master),t.start(),t.stop(this.ctx.currentTime+.25)}explosion(){if(!this.ctx||!this.enabled)return;const t=this.noise(.9),e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(1400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(120,this.ctx.currentTime+.8);const n=this.env(.85,.004,.85);t.connect(e).connect(n).connect(this.master);const i=this.ctx.createOscillator();i.type="sine",i.frequency.setValueAtTime(70,this.ctx.currentTime),i.frequency.exponentialRampToValueAtTime(24,this.ctx.currentTime+.7);const r=this.env(.7,.004,.7);i.connect(r).connect(this.master),i.start(),i.stop(this.ctx.currentTime+.9)}proximityBeep(t){this.blip(t,.05,.1,"sine")}pickup(){this.blip(880,.05,.12,"sine"),setTimeout(()=>this.blip(1320,.05,.14,"sine"),90)}uiClick(){this.blip(1100,.02,.05,"square")}repairDone(){this.blip(520,.04,.1,"sine"),setTimeout(()=>this.blip(780,.04,.12,"sine"),110),setTimeout(()=>this.blip(1040,.05,.16,"sine"),220)}levelUp(){[660,880,990,1320].forEach((e,n)=>setTimeout(()=>this.blip(e,.09,.3,"triangle"),n*90)),setTimeout(()=>this.blip(1980,.05,.45,"sine"),380)}fanfare(){[523,659,784,1046].forEach((e,n)=>setTimeout(()=>this.blip(e,.12,.5,"triangle"),n*160))}defeat(){[392,330,262,196].forEach((e,n)=>setTimeout(()=>this.blip(e,.1,.6,"sawtooth"),n*220))}blip(t,e,n,i){if(!this.ctx||!this.enabled)return;const r=this.ctx.createOscillator();r.type=i,r.frequency.value=t;const o=this.env(e,.003,n);r.connect(o).connect(this.master),r.start(),r.stop(this.ctx.currentTime+n+.05)}}function mc(s,t,e,n,i,r,o=3){s.push({kind:t,x:e,z:n,hx:0,hz:0,r:i,top:o})}function A0(s){const t=[],e=new jt;s.add(e);const n=new ot({color:5333884,roughness:.95,metalness:0}),i=new z(new ke(120,48),n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,e.add(i);const r=new z(new ke(16,32),new ot({color:3951456,roughness:1}));r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,e.add(r);const o=new ot({color:791330,roughness:1,fog:!0}),a=new ot({color:1450810,roughness:1});for(let v=0;v<14;v++){const S=v/14*Math.PI*2+Math.random()*.25,I=150+Math.random()*70,O=45+Math.random()*60,j=new z(new Ze(35+Math.random()*30,O,6),o);j.position.set(Math.cos(S)*I,O/2-6,Math.sin(S)*I),j.rotation.y=Math.random()*Math.PI,e.add(j);const P=new z(new Ze(10+Math.random()*8,O*.3,6),a);P.position.set(j.position.x,O*.75,j.position.z),P.rotation.y=j.rotation.y,e.add(P)}const c=new ot({color:2766408,roughness:1});for(let v=0;v<26;v++){const S=v/26*Math.PI*2,I=54+Math.random()*4,O=8+Math.random()*6,j=12+Math.random()*12,P=new z(new pt(O,j,O*.8),c);P.position.set(Math.cos(S)*I,j/2-1.5,Math.random()*2-1),P.position.x=Math.cos(S)*I,P.position.z=Math.sin(S)*I,P.rotation.y=S+Math.PI/2+(Math.random()-.5)*.4,P.receiveShadow=!0,e.add(P);const D=new z(new pt(O*.95,1.2,O*.75),new ot({color:9414335,roughness:.9}));D.position.set(P.position.x,j-1.2,P.position.z),D.rotation.y=P.rotation.y,e.add(D),mc(t,"cyl",Math.cos(S)*I,Math.sin(S)*I,O*.42,void 0,20)}const l=new ot({color:3753562,roughness:1,flatShading:!0});for(let v=0;v<16;v++){const S=Math.random()*Math.PI*2,I=20+Math.random()*28,O=.8+Math.random()*1.6,j=new z(new cr(O,0),l);j.position.set(Math.cos(S)*I,O*.5,Math.sin(S)*I),j.rotation.set(Math.random(),Math.random(),Math.random()),j.castShadow=!0,j.receiveShadow=!0,e.add(j),O>1.4&&mc(t,"cyl",j.position.x,j.position.z,O*.9,void 0,O*1.6)}const h=new ot({color:2892056,roughness:1}),u=new ot({color:1320478,roughness:.9}),f=new ot({color:5334138,roughness:.9,transparent:!0,opacity:.35}),p=[];let g=0;for(;p.length<90&&g++<600;){const v=Math.random()*Math.PI*2,S=20+Math.random()*30,I=Math.cos(v)*S,O=Math.sin(v)*S;Math.hypot(I+8,O+6)<7||Math.hypot(I,O)<17&&Math.abs(O)<12&&Math.abs(I)<14||p.push({x:I,z:O,s:.8+Math.random()*.9})}const _=new Jt(.12,.2,1.6,5),m=new Ze(1.5,4.6,7),d=new Ze(1.55,1.4,7),x=new zn(_,h,p.length),M=new zn(m,u,p.length),y=new zn(d,f,p.length),C=new ne;p.forEach((v,S)=>{C.makeScale(v.s,v.s,v.s).setPosition(v.x,.8*v.s,v.z),x.setMatrixAt(S,C),C.makeScale(v.s,v.s,v.s).setPosition(v.x,3.6*v.s,v.z),M.setMatrixAt(S,C),C.makeScale(v.s,v.s,v.s).setPosition(v.x,5.4*v.s,v.z),y.setMatrixAt(S,C)}),x.castShadow=!0,M.castShadow=!0,e.add(x,M,y);const E=new ot({color:2305082,roughness:.7,metalness:.6}),R=new Jt(.05,.05,1.4,4),N=new zn(R,E,28);for(let v=0;v<28;v++){const S=v/28*Math.PI*2;C.makeTranslation(Math.cos(S)*15.5,.7,Math.sin(S)*15.5),N.setMatrixAt(v,C)}return e.add(N),{group:e,ground:i,colliders:t,spawnRingRadius:50,spawnAngle:()=>Math.random()*Math.PI*2}}class R0{constructor(t,e){F(this,"pool",[]);F(this,"fixtures",[]);F(this,"budget",0);F(this,"active",0);F(this,"_cands",[]);F(this,"_tmp",new A);F(this,"_frame",0);this.scene=t,this.setBudget(e)}collect(){const t=[];this.scene.traverse(e=>{e.isPointLight&&!this.pool.includes(e)&&t.push(e)});for(const e of t){const n=e.parent;n&&n.remove(e),this.fixtures.push({light:e,parent:n&&n!==this.scene?n:null})}return this.fixtures.length}setBudget(t){for(t=Math.max(1,Math.floor(t));this.pool.length<t;){const e=new Be(16777215,0,0,2);e.name=`lightRigPool${this.pool.length}`,this.scene.add(e),this.pool.push(e)}for(;this.pool.length>t;){const e=this.pool.pop();e&&this.scene.remove(e)}this.budget=t}sweep(){this.scene.traverse(t=>{const e=t;if(!e.isPointLight||this.pool.includes(e)||this.fixtures.some(i=>i.light===e))return;const n=e.parent;n&&n.remove(e),this.fixtures.push({light:e,parent:n&&n!==this.scene?n:null})}),this.fixtures=this.fixtures.filter(t=>this.connected(t))}connected(t){if(!t.parent)return!0;let e=t.parent;for(;e;){if(e===this.scene)return!0;e=e.parent}return!1}shown(t){if(!t.light.visible)return!1;let e=t.parent;for(;e;){if(!e.visible)return!1;e=e.parent}return!0}worldPos(t,e){return t.parent?e.copy(t.light.position).applyMatrix4(t.parent.matrixWorld):e.copy(t.light.position),e}update(t){(this._frame=(this._frame+1)%20)===0&&this.sweep();const e=this._cands;e.length=0;for(const n of this.fixtures){const i=n.light;if(i.intensity<=0||!this.shown(n))continue;const r=this.worldPos(n,this._tmp).distanceToSquared(t),o=(i.distance||0)+8;r>o*o||e.push({f:n,d2:r})}e.sort((n,i)=>n.d2-i.d2);for(let n=0;n<this.pool.length;n++){const i=this.pool[n],r=e[n];if(!r){i.intensity=0;continue}const o=r.f.light;i.color.copy(o.color),i.intensity=o.intensity,i.distance=o.distance,i.decay=o.decay,this.worldPos(r.f,i.position)}this.active=Math.min(e.length,this.pool.length)}release(){for(const t of this.fixtures)t.parent?t.parent.add(t.light):this.scene.add(t.light);this.fixtures=[]}stats(){return{fixtures:this.fixtures.length,budget:this.budget,active:this.active}}}function gc(s,t,e,n,i,r,o=3){s.push({kind:t,x:e,z:n,hx:0,hz:0,r:i,top:o})}function C0(s){const t=[],e=new jt;s.add(e);const n=new ot({color:4278099,roughness:.98,metalness:.05}),i=new z(new ke(120,48),n);i.rotation.x=-Math.PI/2,i.receiveShadow=!0,e.add(i);const r=new z(new ke(16,32),new ot({color:3752013,roughness:1}));r.rotation.x=-Math.PI/2,r.position.y=.02,r.receiveShadow=!0,e.add(r);const o=new z(new li(9,130),new ot({color:1915474,roughness:.25,metalness:.55}));o.rotation.x=-Math.PI/2,o.position.set(3.2,.03,4),e.add(o);const a=new ot({color:2574435,roughness:.3,metalness:.4});for(let P=0;P<6;P++){const D=new z(new ke(1.6+Math.random()*2.4,10),a);D.rotation.x=-Math.PI/2,D.position.set(-16+Math.random()*32,.028,-30+Math.random()*60),e.add(D)}const c=new ot({color:3093825,roughness:1,flatShading:!0}),l=new ot({color:8360875,roughness:.9}),h=new ne,u=new pt(9,18,7),f=new pt(9.2,1.4,7.2),p=[];for(const P of[-1,1])for(let D=0;D<=17;D++){const V=-63+D*7.5+(Math.random()-.5)*2.5,K=P*(26+Math.random()*5),Y=14+Math.random()*12,$=new z(u,c);$.position.set(K,Y*18/36,V),$.scale.y=Y/18,$.rotation.y=P*(Math.PI/2)+(Math.random()-.5)*.3,$.receiveShadow=!0,p.push($),gc(t,"cyl",K,V,4.2,void 0,20)}const g=new zn(u,c,p.length);p.forEach((P,D)=>{h.compose(P.position,P.quaternion,P.scale),g.setMatrixAt(D,h)}),e.add(g);const _=[];p.forEach(P=>{const D=new z(f,l);D.position.set(P.position.x,P.scale.y*9+.4,P.position.z),D.rotation.copy(P.rotation),_.push(D)});const m=new zn(f,l,_.length);_.forEach((P,D)=>{h.makeRotationY(P.rotation.y).setPosition(P.position),m.setMatrixAt(D,h)}),e.add(m);for(const P of[-1,1])for(let D=0;D<9;D++){const V=-72+D*18,K=26+Math.random()*18,Y=new z(new pt(10,K,14),new ot({color:1251880,roughness:1,fog:!0}));Y.position.set(P*(44+Math.random()*6),K/2-1,V),Y.rotation.y=(Math.random()-.5)*.4,e.add(Y)}const d=new ot({color:3817808,roughness:1,flatShading:!0});for(let P=0;P<14;P++){const D=Math.random()*Math.PI*2,V=20+Math.random()*24,K=Math.cos(D)*V,Y=Math.sin(D)*V;if(Math.abs(K)>20)continue;const $=.8+Math.random()*1.5,q=new z(new cr($,0),d);q.position.set(K,$*.5,Y),q.rotation.set(Math.random(),Math.random(),Math.random()),q.castShadow=!0,e.add(q),$>1.3&&gc(t,"cyl",K,Y,$*.9,void 0,$*1.6)}const x=new ot({color:2366484,roughness:1}),M=new Jt(.09,.2,4.2,5),y=new zn(M,x,34);let C=0,E=0;for(;C<34&&E++<400;){const P=-40+Math.random()*80,D=(Math.random()-.5)*40;Math.hypot(D,P)<18||(h.makeScale(1,.7+Math.random()*.7,1).setPosition(D,1.8,P),y.setMatrixAt(C++,h))}y.count=C,y.castShadow=!0,e.add(y);const R=(P,D,V,K)=>{const q=new z(new pt(6.2,2.6,2.4),new ot({color:K,roughness:.7,metalness:.35}));q.position.set(P,1.3,D),q.rotation.y=V,q.castShadow=!0,q.receiveShadow=!0,e.add(q);const nt=new z(new pt(6.2+.05,.5,2.4+.05),new ot({color:2304048,roughness:.8,metalness:.3}));nt.position.set(P,2.1,D),nt.rotation.y=V,e.add(nt);const at=Math.abs(Math.cos(V))>.5;t.push({kind:"box",x:P,z:D,hx:at?6.2/2:2.4/2,hz:at?2.4/2:6.2/2,r:0,top:2.6})};R(-17,3,0,6962990),R(16,6,Math.PI/2,3033694),R(2,19,0,5003834),R(-6,-14.5,Math.PI/2,6181680),R(19.5,-10,Math.PI/2,3752527);const N=new ot({color:4864560,roughness:.85,metalness:.25}),v=new z(new pt(2.2,1.6,2.4),N);v.position.set(-2,.8,-19),v.castShadow=!0,e.add(v);const S=new z(new pt(4.4,1.4,2.5),N);S.position.set(-6.2,.9,-19.4),S.rotation.z=.22,S.castShadow=!0,e.add(S),t.push({kind:"box",x:-4.2,z:-19.2,hx:4.4,hz:1.6,r:0,top:1.7});const I=new ot({color:2305082,roughness:.7,metalness:.6}),O=new Jt(.05,.05,1.4,4),j=new zn(O,I,28);for(let P=0;P<28;P++){const D=P/28*Math.PI*2;h.makeTranslation(Math.cos(D)*15.5,.7,Math.sin(D)*15.5),j.setMatrixAt(P,h)}return e.add(j),{group:e,ground:i,colliders:t,spawnRingRadius:50,spawnAngle:()=>(Math.random()<.5?Math.PI/2:-Math.PI/2)+(Math.random()-.5)*.6}}const Je=(s,t=.6)=>new ot({color:s,roughness:.55,metalness:t});function P0(s){const t=[],e=new jt;s.add(e);const n=new z(new ke(120,48),new ot({color:3355965,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);const i=new z(new ke(16,32),new ot({color:4014153,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=.02,i.receiveShadow=!0,e.add(i);const r=new ot({color:2500654,roughness:1}),o=Je(9147298,.85),a=[-17,-23,13,19];for(const d of a){const x=new z(new pt(84,.1,2.2),r);x.position.set(0,.05,d),x.receiveShadow=!0,e.add(x);for(const M of[-.75,.75]){const y=new z(new pt(84,.14,.12),o);y.position.set(0,.17,d+M),e.add(y)}}const c=[6109742,3622234,4866608,4477022];a.forEach((d,x)=>{for(const M of[-24,-10,4,18]){const y=new jt,C=new z(new pt(11,3.2,2.6),Je(c[(x+(M>0?1:0))%4],.35));C.position.y=2.1,C.castShadow=!0,C.receiveShadow=!0,y.add(C);const E=new z(new pt(11.2,.2,2.8),Je(2304048,.4));E.position.y=3.8,y.add(E);for(const N of[-4,4]){const v=new z(new pt(2.4,.7,2.2),Je(1843498,.7));v.position.set(N,.55,0),y.add(v)}const R=new z(new pt(11.05,.3,.05),new ot({color:273,emissive:new it("#f59e0b"),emissiveIntensity:.5}));R.position.set(0,2.6,1.31),y.add(R),y.position.set(M,0,d),e.add(y),t.push({kind:"box",x:M,z:d,hx:5.6,hz:1.5,r:0,top:4})}});const l=new z(new pt(10,2.8,2.6),Je(4864560,.3));l.position.set(-31,1.4,3),l.rotation.z=1.25,l.rotation.y=.4,l.castShadow=!0,e.add(l),t.push({kind:"box",x:-31,z:3,hx:4,hz:2.2,r:0,top:2.8});const h=new jt,u=new z(new pt(16,7,12),Je(3358799,.4));u.position.y=3.5,u.castShadow=!0,u.receiveShadow=!0,h.add(u);const f=new z(new pt(16.6,.5,12.6),Je(2107702,.5));f.position.y=7.2,h.add(f);const p=new z(new li(3.4,4.2),new ot({color:790809}));p.position.set(-8.05,2.1,0),p.rotation.y=Math.PI/2,h.add(p),h.position.set(32,0,-6),e.add(h),t.push({kind:"box",x:32,z:-6,hx:8,hz:6,r:0,top:7});const g=new Be(new it("#ffc98a"),45,26,1.6);g.position.set(23,5,-6),e.add(g);for(const d of[-20,20]){const x=new z(new Jt(.32,.36,9,8),Je(4477022));x.position.set(26,4.5,d),x.castShadow=!0,e.add(x),t.push({kind:"cyl",x:26,z:d,hx:0,hz:0,r:.5,top:9})}const _=new z(new pt(.5,.6,41),Je(3752527));_.position.set(26,9.1,0),e.add(_);for(let d=0;d<6;d++){const x=-30+d*12,M=new z(new pt(.26,7,.26),Je(2892056,.15));M.position.set(x,3.5,27),M.castShadow=!0,e.add(M);const y=new z(new pt(2.2,.14,.14),Je(2892056,.15));y.position.set(x,6.4,27),e.add(y)}for(const d of[-18,18]){const x=new z(new Jt(.18,.24,10,8),Je(3884631));x.position.set(d,5,0),e.add(x);const M=new z(new pt(.9,.3,.5),Je(2305082));M.position.set(d,10,0),e.add(M);const y=new Be(new it("#ffbd80"),55,34,1.6);y.position.set(d,9.6,0),e.add(y)}const m=new ot({color:1315096,roughness:1,fog:!0});for(let d=0;d<10;d++){const x=d/10*Math.PI*2+.3,M=140+Math.random()*50,y=30+Math.random()*40,C=new z(new Ze(30+Math.random()*24,y,6),m);C.position.set(Math.cos(x)*M,y/2-5,Math.sin(x)*M),C.rotation.y=Math.random()*Math.PI,e.add(C)}return{group:e,ground:n,colliders:t,spawnRingRadius:50,spawnAngle:()=>Math.random()*Math.PI*2}}const qs=s=>new ot({color:s,roughness:.95});function L0(s){const t=[],e=new jt;s.add(e);const n=new z(new ke(120,48),new ot({color:4015698,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);const i=new z(new ke(16,32),new ot({color:4608092,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=.02,i.receiveShadow=!0,e.add(i);const r=qs(5594988),o=qs(7042692),a=0,c=-55,l=26;for(let x=0;x<19;x++){const M=(-70+x*7.777777777777778)*(Math.PI/180),y=a+Math.sin(M)*l,C=c+Math.cos(M)*l,E=new z(new pt(9.2,26,3.4),r);E.position.set(y,11.5,C),E.rotation.y=M,E.castShadow=!0,E.receiveShadow=!0,e.add(E);const R=new z(new pt(9.4,.6,3.8),o);R.position.set(y,24.6,C),R.rotation.y=M,e.add(R),t.push({kind:"cyl",x:y,z:C,hx:0,hz:0,r:3.6,top:20})}const h=new Be(new it("#9fd4ff"),40,30,1.6);h.position.set(0,2,-28),e.add(h);for(const x of[19,25]){const M=new z(new pt(1.3,8,16),qs(5068645));M.position.set(x,4,-2),M.castShadow=!0,M.receiveShadow=!0,e.add(M),t.push({kind:"box",x,z:-2,hx:.7,hz:8,r:0,top:8})}const u=new z(new pt(5.4,.1,16),new ot({color:2900567,roughness:.4,metalness:.15}));u.position.set(22,.06,-2),e.add(u);const f=qs(4871265),p=[[-24,16],[-19,16],[-14,18],[-24,22],[-19,22],[-14,24]];for(const[x,M]of p){const y=new z(new pt(3.4,2.6,3.4),f);y.position.set(x,1.3,M),y.castShadow=!0,y.receiveShadow=!0,e.add(y);const C=new z(new Jt(.18,.18,1.1,6),new ot({color:6969902,roughness:.6}));C.position.set(x,3.1,M),e.add(C),t.push({kind:"box",x,z:M,hx:1.7,hz:1.7,r:0,top:2.6})}const g=new ot({color:2892056,roughness:1}),_=new ot({color:1909808,roughness:.95});for(let x=0;x<8;x++){const M=-34+Math.random()*6,y=-14+x*4.5,C=new z(new Jt(.14,.22,4.4,5),g);C.position.set(M,2.2,y),C.rotation.z=(Math.random()-.5)*.24,e.add(C);for(let E=0;E<3;E++){const R=new z(new pt(2.4-E*.6,.09,.09),_);R.position.set(M+(E%2?.9:-.9),2.6+E*.8,y),R.rotation.z=(E%2?-1:1)*.5,e.add(R)}}for(const x of[-16,16]){const M=new Be(new it("#bfe0ff"),30,24,1.7);M.position.set(x,24.5,-32),e.add(M)}const m=new ot({color:857120,roughness:1,fog:!0});for(let x=0;x<9;x++){const M=Math.PI+x/9*Math.PI,y=160+Math.random()*40,C=50+Math.random()*55,E=new z(new Ze(34+Math.random()*26,C,6),m);E.position.set(Math.cos(M)*y,C/2-6,Math.sin(M)*y-40),e.add(E)}return{group:e,ground:n,colliders:t,spawnRingRadius:50,spawnAngle:()=>Math.random()<.7?Math.PI/2+(Math.random()-.5)*2.4:(Math.random()<.5?0:Math.PI)+(Math.random()-.5)*.6}}function D0(s){const t=[],e=new jt;s.add(e);const n=new z(new ke(120,48),new ot({color:2365984,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);const i=new z(new ke(44,40),new ot({color:2826278,roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=.01,i.receiveShadow=!0,e.add(i);const r=new z(new ke(18,32),new ot({color:3820126,roughness:.4,metalness:.15}));r.rotation.x=-Math.PI/2,r.position.y=.03,e.add(r);const o=new z(new ke(16,32),new ot({color:3352108,roughness:1}));o.rotation.x=-Math.PI/2,o.position.y=.05,o.receiveShadow=!0,e.add(o);const a=new ot({color:3811888,roughness:1,flatShading:!0}),c=new ot({color:5913146,roughness:1}),l=[Math.PI/4,3*Math.PI/4,5*Math.PI/4,7*Math.PI/4];for(let x=0;x<24;x++){const M=x/24*Math.PI*2;if(l.some(I=>Math.abs(Math.atan2(Math.sin(M-I),Math.cos(M-I)))<Math.PI/12))continue;const C=40+(Math.random()-.5)*1.6,E=11+Math.random()*6,R=Math.cos(M)*C,N=Math.sin(M)*C,v=new z(new pt(10.4,E,7),a);v.position.set(R,E/2-1,N),v.rotation.y=M+Math.PI/2,v.castShadow=!0,v.receiveShadow=!0,e.add(v);const S=new z(new pt(10.6,1.1,7.2),c);S.position.set(R,E-1.1,N),S.rotation.y=v.rotation.y,e.add(S),t.push({kind:"cyl",x:R,z:N,hx:0,hz:0,r:3.6,top:E-1})}for(const x of l){const M=new z(new Wn(.3,8,8),new ot({color:4196360,emissive:new it("#ef4444"),emissiveIntensity:2.2}));M.position.set(Math.cos(x)*40,3.2,Math.sin(x)*40),e.add(M)}const h=new ot({color:1445910,roughness:.35,metalness:.4,flatShading:!0}),u=[[-28,10,7],[-23,-14,6],[-17,25,5],[15,27,7],[27,13,6],[30,-9,8],[19,-25,5],[7,-31,7],[-7,-26,6],[-31,-3,5]];for(const[x,M,y]of u){const C=new z(new Ze(1.3,y,6),h);C.position.set(x,y/2,M),C.rotation.y=Math.random()*Math.PI,C.rotation.z=(Math.random()-.5)*.2,C.castShadow=!0,e.add(C),t.push({kind:"cyl",x,z:M,hx:0,hz:0,r:1,top:y})}const f=new ot({color:2365984,roughness:1}),p=new Ye({color:new it("#c9b0a8"),transparent:!0,opacity:.07,blending:Qe,depthWrite:!1,side:Ve}),g=[[-14,19],[17,-15],[-21,-19],[12,21]];for(const[x,M]of g){const y=new z(new Jt(.95,1.15,.7,10),f);y.position.set(x,.35,M),e.add(y),t.push({kind:"cyl",x,z:M,hx:0,hz:0,r:1,top:.7});const C=new z(new Ze(2.2,12,10,1,!0),p);C.position.set(x,6,M),e.add(C)}const _=new z(new pt(7,2.4,3),new ot({color:4142135,roughness:.8,metalness:.3}));_.position.set(22,1.1,30),_.rotation.y=.7,_.rotation.z=.2,_.castShadow=!0,e.add(_),t.push({kind:"box",x:22,z:30,hx:3.4,hz:1.7,r:0,top:2.6});const m=new ot({color:1182224,roughness:1,fog:!0});for(let x=0;x<10;x++){const M=x/10*Math.PI*2,y=150+Math.random()*60,C=26+Math.random()*34,E=new z(new Ze(30+Math.random()*22,C,5),m);E.position.set(Math.cos(M)*y,C/2-6,Math.sin(M)*y),e.add(E)}return{group:e,ground:n,colliders:t,spawnRingRadius:46,spawnAngle:()=>l[Math.floor(Math.random()*l.length)]+(Math.random()-.5)*.3}}const nn=(s=3884631,t=.7)=>new ot({color:s,roughness:.55,metalness:t}),I0=new ot({color:4870753,roughness:.95}),U0=new ot({color:7037520,roughness:1});function N0(s,t){const e=[],n=[],i=new jt;s.add(i);const r=(_t,ht,lt,rt=3)=>e.push({kind:"cyl",x:_t,z:ht,hx:0,hz:0,r:lt,top:rt}),o=(_t,ht,lt,rt,ut=3)=>e.push({kind:"box",x:_t,z:ht,hx:lt,hz:rt,r:0,top:ut}),a=new jt,c=new ot({color:3029321,roughness:.8}),l=(_t,ht,lt,rt,ut,Ct,Vt=c)=>{const zt=new z(new pt(_t,ht,lt),Vt);return zt.position.set(rt,ut,Ct),zt.castShadow=!0,zt.receiveShadow=!0,a.add(zt),zt};l(7,3.4,.3,0,1.7,-3),l(.3,3.4,6,-3.5,1.7,0),l(7,3.4,.3,0,1.7,3),l(.3,3.4,2.2,3.5,1.7,-1.9),l(.3,3.4,2.4,3.5,1.7,1.8),l(.3,1,1.4,3.5,2.9,0);const h=l(7.6,.25,6.6,0,3.55,0,new ot({color:5596284,roughness:.9}));h.rotation.z=.03;const u=new z(new li(1.4,2.4),new ot({color:790809}));u.position.set(3.51,1.2,0),u.rotation.y=-Math.PI/2,a.add(u);const[f,p]=t.shack;a.position.set(f,0,p),i.add(a),o(f,p,3.8,3.3,3.6);const g=new Be(new it(Ie.amber),26,14,1.6);g.position.set(f,2.4,p),i.add(g);const _=new Be(new it("#ffd9a0"),14,7,1.8);_.position.set(f+3.9,2,p),i.add(_);const m=new A(t.tower[0],0,t.tower[1]),d=new jt,x=nn(5397869,.8),M=new Jt(.1,.14,22,6);for(let _t=0;_t<3;_t++){const ht=_t/3*Math.PI*2,lt=new z(M,x);lt.position.set(Math.cos(ht)*1.4,11,Math.sin(ht)*1.4),lt.castShadow=!0,d.add(lt)}for(let _t=3;_t<=21;_t+=4.5){const ht=new z(new Xn(1.35-_t/22*.9,.05,4,12),x);ht.rotation.x=Math.PI/2,ht.position.y=_t,d.add(ht)}const y=new z(new Jt(.06,.1,5,5),x);y.position.y=24,d.add(y);const C=new z(new Wn(.28,10,10),new ot({color:5570560,emissive:new it(Ie.red),emissiveIntensity:2}));C.position.y=26.6,d.add(C);const E=new Be(new it(Ie.red),30,25,1.5);E.position.y=26.6,d.add(E);const R=new z(new Wn(1.6,14,10,0,Math.PI*2,0,Math.PI/2.6),nn(9082792,.6));R.position.set(0,13,1.6),R.rotation.x=-Math.PI/3.2,d.add(R);const N=[];for(let _t=0;_t<3;_t++){const ht=new Ye({color:new it(Ie.green),transparent:!0,opacity:.5,blending:Qe,depthWrite:!1}),lt=new z(new Xn(1.8+_t*.35,.035,6,20),ht);lt.rotation.x=Math.PI/2,lt.position.y=2,lt.userData.base=_t,d.add(lt),N.push(ht)}const v=new Be(new it(Ie.green),18,16,1.5);v.position.set(0,3,0),d.add(v),d.position.copy(m),i.add(d),r(m.x,m.z,1.7,26);const S=new A(m.x+1.4,0,m.z+3.1),I=new jt,O=new z(new pt(1.9,1.1,.9),nn(3752527,.5));O.position.y=.55,O.castShadow=!0,I.add(O);const j=new z(new li(1.5,.55),new ot({color:267277,emissive:new it(Ie.green),emissiveIntensity:1.4}));j.position.set(0,1.15,-.2),j.rotation.x=-.5,I.add(j);const P=new Be(new it(Ie.green),6,5,1.8);P.position.set(0,1.4,.2),I.add(P),I.position.copy(S),I.lookAt(m.x,0,m.z),i.add(I),o(S.x,S.z,1.1,.6,1.1),n.push({id:"console",kind:"console",pos:new A(S.x-.1,1.2,S.z+1.3),label:"Repair & reboot transmitter",readyAt:0});const D=(_t,ht,lt)=>{const rt=new z(new pt(5.5,1.5,.7),I0);rt.position.set(_t,.75,ht),rt.rotation.y=lt,rt.castShadow=!0,rt.receiveShadow=!0,i.add(rt);const ut=new z(new pt(5.5,.15,.75),new ot({color:8228518,roughness:.9}));ut.position.set(_t,1.55,ht),ut.rotation.y=lt,i.add(ut),r(_t,ht,2.4,1.6)};for(const[_t,ht,lt]of t.walls)D(_t,ht,lt);const V=new pt(1.1,.36,.62);for(const[_t,ht,lt]of t.sandbags){const rt=new jt;for(let Ct=0;Ct<3;Ct++)for(let Vt=0;Vt<3-(Ct===2?1:0);Vt++){const zt=new z(V,U0);zt.position.set((Vt-1)*1.05+(Ct===1?.5:0),.18+Ct*.36,0),zt.castShadow=!0,zt.receiveShadow=!0,rt.add(zt)}const ut=new z(new pt(3,.06,.7),new ot({color:9676735,roughness:.9}));ut.position.y=1.26,rt.add(ut),rt.position.set(_t,0,ht),rt.rotation.y=lt,i.add(rt),r(_t,ht,1.5,1.3)}const K=new z(new pt(2.4,1.7,1.5),nn(4477025));K.position.set(13,.85,-3.5),K.castShadow=!0,i.add(K);const Y=new z(new Jt(.12,.12,2.6,6),nn(5924469));Y.position.set(13.8,2.2,-3.5),i.add(Y);const $=new z(new Jt(1,1,3,12),new ot({color:8010538,roughness:.6,metalness:.4}));$.position.set(15,1.5,-1),$.castShadow=!0,i.add($),r(13.8,-2.6,2.4,3);const q=new A(t.searchlight[0],0,t.searchlight[1]),nt=new jt,at=new z(new Jt(.16,.22,6.6,8),nn(5003112));at.position.y=3.3,nt.add(at);const X=new z(new Jt(.8,.8,.16,10),nn(3752527));X.position.y=6.6,nt.add(X);const J=nn(6977158,.8),xt=[],Et=[],wt=[],Ft=new Jt(.34,.5,.8,10);for(const _t of[-.7,.7]){const ht=new z(Ft,J);ht.rotation.x=Math.PI/2,ht.position.set(_t,7.2,0),nt.add(ht);const lt=new ae;lt.position.set(0,4,34),nt.add(lt);const rt=new s0(new it("#d8ecff"),0,90,_e.degToRad(me.searchlightAngleDeg),.45,1);rt.position.set(_t,7.2,0),rt.target=lt,nt.add(rt),Et.push(rt),xt.push(lt);const ut=55,Ct=new Ze(4.6,ut,16,1,!0);Ct.translate(0,-ut/2,0);const Vt=new z(Ct,new Ye({color:new it("#bcd8ff"),transparent:!0,opacity:.07,blending:Qe,depthWrite:!1,side:Ve}));Vt.position.set(_t,7.2,0),nt.add(Vt),wt.push(Vt)}nt.position.copy(q),i.add(nt),r(q.x,q.z,.7,6.6);const Ot=new z(new pt(.5,.7,.3),nn(5595762));Ot.position.set(q.x+.7,1.3,q.z),i.add(Ot),n.push({id:"searchlight",kind:"searchlight",pos:new A(q.x+1.2,1.3,q.z),label:"Searchlight breaker",readyAt:0});const Rt=new A(0,-.06,1),Kt=new A(q.x,7.2,q.z);let B=.4;const Te={group:nt,update(_t,ht,lt,rt){B=.55*Math.sin(ht*.22);let ut=B;if(lt.length>0){let zt=0,Bt=0;for(const L of lt)zt+=L.x,Bt+=L.z;ut=Math.atan2(zt-q.x,Bt-q.z);let ct=ut-B;for(;ct>Math.PI;)ct-=Math.PI*2;for(;ct<-Math.PI;)ct+=Math.PI*2;ut=B+ct*.6}const Ct=-.12+.06*Math.sin(ht*.31);Rt.set(Math.sin(ut),Ct,Math.cos(ut)).normalize();const Vt=rt?2200:0;for(let zt=0;zt<Et.length;zt++){Et[zt].intensity=Vt,xt[zt].position.set(Rt.x*40,Rt.y*40,Rt.z*40);const Bt=new Wi().setFromUnitVectors(new A(0,-1,0),Rt);wt[zt].quaternion.copy(Bt),wt[zt].visible=rt}},isInBeam(_t){const ht=_t.clone().sub(Kt);return ht.length()>me.searchlightRange?!1:(ht.normalize(),ht.dot(Rt)>Math.cos(_e.degToRad(me.searchlightAngleDeg)+.06))}},Pt=(_t,ht,lt)=>{const rt=new z(new pt(1.1,.8,1.1),new ot({color:lt,roughness:.8}));return rt.position.set(_t,.4,ht),rt.castShadow=!0,i.add(rt),e.push({kind:"box",x:_t,z:ht,hx:.6,hz:.6,r:0,top:.85}),rt},Lt=f+5.6,St=p-1.2,Qt=p+2.2;Pt(Lt,St,5003834);const kt=new z(new pt(1.12,.08,.08),new ot({color:273,emissive:new it(Ie.amber),emissiveIntensity:1.6}));kt.position.set(Lt,.62,St+.58),i.add(kt),n.push({id:"ammo",kind:"ammo",pos:new A(Lt,1,St+.85),label:"Ammo resupply rack",readyAt:0}),Pt(Lt,Qt,5911347);const T=new ot({color:273,emissive:new it(Ie.red),emissiveIntensity:1.8}),w=new z(new pt(.5,.14,.06),T);w.position.set(Lt,.5,Qt+.58);const k=new z(new pt(.14,.5,.06),T);k.position.set(Lt,.5,Qt+.58),i.add(w,k),n.push({id:"medkit",kind:"medkit",pos:new A(Lt,1,Qt+.85),label:"Med station",readyAt:0});const Z=new jt,Q=new z(new pt(2.4,.12,1),nn(4871268,.3));Q.position.y=.95,Q.castShadow=!0,Z.add(Q);for(const[_t,ht]of[[-1,-.4],[1,-.4],[-1,.4],[1,.4]]){const lt=new z(new pt(.1,.9,.1),nn(3752527));lt.position.set(_t,.45,ht),Z.add(lt)}const st=new z(new pt(.08,1.2,1.8),nn(2896961));st.position.set(-1.3,1.6,0),Z.add(st);const bt=new Be(new it(Ie.amber),10,6,1.8);bt.position.set(0,2,0),Z.add(bt);const[ft,yt]=t.bench;Z.position.set(ft,0,yt),i.add(Z),o(ft,yt,1.4,.7,2.2),n.push({id:"workbench",kind:"workbench",pos:new A(ft-1.2,1.2,yt),label:"Weapon mod bench (B)",readyAt:0});const Tt=new it,Ht=(_t,ht)=>{const lt=Math.sin(ht*3)>.6;C.material.emissiveIntensity=lt?3:.4,E.intensity=lt?36:4;for(let rt=0;rt<N.length;rt++)N[rt].opacity=.35+.25*Math.sin(ht*2+rt*1.4)},tt=(_t,ht,lt)=>{lt?Tt.set(Ie.red):ht>70?Tt.set(Ie.amber):Tt.set(Ie.green);for(const rt of N)rt.color.copy(Tt);v.color.copy(Tt),j.material.emissive.copy(Tt),P.color.copy(Tt),v.intensity=12+_t*.2};return{root:i,colliders:e,interactables:n,searchlight:Te,towerTop:new A(m.x,26.6,m.z),towerPos:m,consolePos:S,setSignalVisuals:tt,update:Ht}}class F0{constructor(t,e,n){F(this,"keys",{});F(this,"recoilPitch",0);F(this,"recoilYaw",0);F(this,"trauma",0);F(this,"mouseSens",.0021);F(this,"adsHeld",!1);this.camera=t,this.colliders=e,this.state=n}setColliders(t){this.colliders=t}onKey(t,e){this.keys[t]=e}onMouseMove(t,e){this.state.ads>.4?this.mouseSens=.0013:this.mouseSens=.0021,this.state.yaw-=t*this.mouseSens,this.state.pitch-=e*this.mouseSens,this.state.pitch=_e.clamp(this.state.pitch,-1.45,1.45)}addRecoil(t,e){this.recoilPitch+=t,this.recoilYaw+=(Math.random()-.5)*2*e}addTrauma(t){this.trauma=Math.min(1,this.trauma+t)}update(t){const e=this.state,n=this.keys,i=-Math.sin(e.yaw),r=-Math.cos(e.yaw),o=Math.cos(e.yaw),a=-Math.sin(e.yaw);let c=0,l=0;n.KeyW&&(c+=i,l+=r),n.KeyS&&(c-=i,l-=r),n.KeyD&&(c+=o,l+=a),n.KeyA&&(c-=o,l-=a);const h=Math.hypot(c,l);e.sprinting=!!n.ShiftLeft&&h>0&&this.state.ads<.3;const u=(e.sprinting?ge.sprintSpeed:ge.walkSpeed)*(1-.45*e.ads);h>0&&(c/=h,l/=h,e.vel.x+=c*ge.accel*t,e.vel.z+=l*ge.accel*t);const f=Math.hypot(e.vel.x,e.vel.z),p=h>0?u:0;if(f>p){const E=Math.exp(-10*t);e.vel.x*=E,e.vel.z*=E}e.pos.x+=e.vel.x*t,e.pos.z+=e.vel.z*t;for(const E of this.colliders)if(E.kind==="cyl"){const R=e.pos.x-E.x,N=e.pos.z-E.z,v=Math.hypot(R,N),S=E.r+ge.radius;if(v<S&&v>1e-4){const I=(S-v)/v;e.pos.x+=R*I,e.pos.z+=N*I}}else{const R=e.pos.x-E.x,N=e.pos.z-E.z,v=E.hx+ge.radius-Math.abs(R),S=E.hz+ge.radius-Math.abs(N);v>0&&S>0&&(v<S?e.pos.x+=R>0?v:-v:e.pos.z+=N>0?S:-S)}const g=Math.hypot(e.pos.x,e.pos.z);if(g>52){const E=52/g;e.pos.x*=E,e.pos.z*=E}e.leanTarget=(n.KeyE?1:0)+(n.KeyQ?-1:0),e.ads>.6&&(e.leanTarget*=.35),e.lean=_e.damp(e.lean,e.leanTarget,ge.leanRate,t);const _=this.adsHeld&&!e.sprinting?1:0;e.ads=_e.damp(e.ads,_,12,t);const m=Math.exp(-7*t);this.recoilPitch*=m,this.recoilYaw*=m,this.trauma*=Math.exp(-2.2*t);const d=performance.now()*.001,M=f>1.5?Math.sin(d*(e.sprinting?11:8))*.035*(e.ads>.5?.25:1):0,y=this.trauma*.02;this.camera.position.set(e.pos.x+o*e.lean*ge.leanOffset,ge.eyeHeight+M+Math.sin(d*31)*y,e.pos.z+a*e.lean*ge.leanOffset),this.camera.rotation.set(e.pitch+this.recoilPitch+Math.sin(d*27)*y,e.yaw+this.recoilYaw+Math.sin(d*19)*y*.7,-e.lean*ge.leanAngle);const C=_e.lerp(ge.baseFov,ge.adsFov,e.ads);Math.abs(this.camera.fov-C)>.01&&(this.camera.fov=C,this.camera.updateProjectionMatrix())}planarSpeed(){return Math.hypot(this.state.vel.x,this.state.vel.z)}eye(){return this.camera.position.clone()}}function O0(){return{pos:new A(0,0,10),vel:new A,yaw:0,pitch:0,health:ge.maxHealth,maxHealth:ge.maxHealth,armor:25,lean:0,leanTarget:0,ads:0,sprinting:!1,credits:0}}function z0(){return{phase:"brief",time:0,progress:0,wave:0,heat:0,overheated:!1,blizzard:.25,searchlightOn:!1,searchlightRuntime:0,searchlightCooldownUntil:0,stats:{kills:{scout:0,heavy:0,kamikaze:0,warden:0,bomber:0,crawler:0,colossus:0},shotsFired:0,pelletsFired:0,pelletsHit:0,airdrops:0,overheatEvents:0,repairs:0},endReason:"",score:0,level:1}}function B0(){return{pistol:{id:"pistol",mag:de.pistol.magSize,reserve:de.pistol.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}},rifle:{id:"rifle",mag:de.rifle.magSize,reserve:de.rifle.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}},shotgun:{id:"shotgun",mag:de.shotgun.magSize,reserve:de.shotgun.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}},launcher:{id:"launcher",mag:de.launcher.magSize,reserve:de.launcher.reserveMax,levels:{damage:0,fireRate:0,capacity:0,reload:0}}}}function $s(s,t,e=1){const n=de[s],i=Math.max(0,e-1),r=ir(e),o=r>0?l0[r-1]:{dmgAdd:0,magAdd:0,pelletsAdd:0};return{damage:(n.damage+o.dmgAdd)*(1+.18*t.damage)*(1+gn.damagePerLevel*i),pellets:n.pellets+o.pelletsAdd,fireInterval:n.fireInterval/((1+.12*t.fireRate)*(1+gn.fireRatePerLevel*i)),magSize:Math.round((n.magSize+o.magAdd)*(1+.25*t.capacity)),reloadTime:n.reloadTime/((1+.12*t.reload)*(1+gn.reloadPerLevel*i))}}const Ee=(s=4015442,t=.25)=>new ot({color:s,roughness:.45,metalness:t}),oi=(s=3357253)=>new ot({color:s,roughness:.8,metalness:.1}),_c=()=>new ot({color:6112816,roughness:.8});function ie(s,t,e,n,i,r){const o=new z(s,t);return o.position.set(e,n,i),r.add(o),o}function k0(){const s=new jt;ie(new pt(.04,.055,.24),Ee(3818064),0,-.02,-.14,s),ie(new pt(.036,.13,.05),oi(),0,-.09,-.03,s).rotation.x=.25,ie(new pt(.03,.02,.03),Ee(1382946),0,-.005,-.27,s),ie(new pt(.008,.014,.008),Ee(10134965),0,.015,-.25,s),ie(new pt(.02,.018,.012),Ee(10134965),0,.015,-.03,s);const t=new ae;return t.position.set(0,-.02,-.3),s.add(t),s.userData.muzzle=t,s}function G0(){const s=new jt;ie(new pt(.055,.08,.46),Ee(3423047),0,-.04,-.28,s),ie(new Jt(.016,.016,.42,8),Ee(2764858),0,-.025,-.68,s).rotation.x=Math.PI/2,ie(new pt(.03,.16,.07),oi(),0,-.15,-.2,s),ie(new pt(.035,.06,.22),oi(),0,-.05,.08,s),ie(new pt(.028,.11,.04),oi(),0,-.11,-.06,s).rotation.x=.3,ie(new pt(.016,.014,.3),Ee(4871525),0,.005,-.3,s),ie(new pt(.012,.02,.02),Ee(1119516),0,.02,-.42,s),ie(new Xn(.014,.003,6,12),Ee(1119516),0,.02,-.16,s),ie(new Jt(.018,.018,.09,8),Ee(1711912),.035,-.075,-.45,s).rotation.x=Math.PI/2;const t=new ae;return t.position.set(0,-.025,-.9),s.add(t),s.userData.muzzle=t,s}function H0(){const s=new jt;ie(new pt(.055,.085,.34),Ee(3686219),0,-.04,-.18,s),ie(new Jt(.021,.021,.62,8),Ee(2501686),0,-.005,-.66,s).rotation.x=Math.PI/2,ie(new Jt(.026,.026,.2,8),Ee(2764858),0,-.05,-.55,s).rotation.x=Math.PI/2,ie(new pt(.04,.07,.26),_c(),0,-.06,.12,s),ie(new pt(.03,.1,.04),_c(),0,-.11,-.02,s).rotation.x=.35,ie(new Jt(.024,.024,.03,8),Ee(5858426),0,-.005,-.97,s).rotation.x=Math.PI/2;const t=new ae;return t.position.set(0,-.005,-.98),s.add(t),s.userData.muzzle=t,s}function V0(){const s=new jt,t=ie(new Jt(.055,.06,.78,10),Ee(3818062),0,-.04,-.32,s);t.rotation.x=Math.PI/2;const e=ie(new Jt(.07,.055,.16,10),Ee(2764858),0,-.04,.12,s);e.rotation.x=Math.PI/2,ie(new pt(.05,.03,.3),oi(2830910),0,.02,-.5,s),ie(new pt(.018,.045,.018),Ee(10134965),0,.05,-.62,s),ie(new pt(.014,.06,.03),oi(),0,-.12,-.24,s).rotation.x=.3,ie(new pt(.016,.07,.035),oi(),0,-.13,-.02,s).rotation.x=.25,ie(new Xn(.03,.006,6,12),Ee(5858426),0,.03,-.15,s);const n=new ae;return n.position.set(0,-.04,-.74),s.add(n),s.userData.muzzle=n,s}class W0{constructor(t,e,n){F(this,"current","pistol");F(this,"autoLevel",1);F(this,"groups");F(this,"muzzleFlash");F(this,"flashTimer",0);F(this,"cooldown",0);F(this,"reloadTimer",0);F(this,"reloadTotal",1);F(this,"switchTimer",0);F(this,"kick",0);F(this,"pump",0);F(this,"locked",new Set(["launcher"]));this.camera=t,this.runtimes=e,this.audio=n,this.groups={pistol:k0(),rifle:G0(),shotgun:H0(),launcher:V0()};for(const r of Object.keys(this.groups))this.groups[r].visible=r===this.current,this.groups[r].scale.setScalar(.52),t.add(this.groups[r]);this.muzzleFlash=new Be(new it("#ffb347"),0,8,2),this.muzzleFlash.position.set(.3,-.25,-.9),t.add(this.muzzleFlash);const i=new Be(new it("#9fb8e8"),1.1,2.2,1.6);i.position.set(.2,.25,0),t.add(i)}get busy(){return this.reloadTimer>0||this.switchTimer>0}unlock(t){this.locked.delete(t)}switchTo(t){t===this.current||this.busy||this.locked.has(t)||(this.groups[this.current].visible=!1,this.current=t,this.groups[t].visible=!0,this.switchTimer=.65,this.reloadTimer=0,this.cooldown=.3,this.audio.uiClick())}cycle(t){const e=["pistol","rifle","shotgun","launcher"].filter(i=>!this.locked.has(i)),n=e.indexOf(this.current);this.switchTo(e[(n+t+e.length)%e.length])}startReload(){const t=this.runtimes[this.current],e=$s(this.current,t.levels,this.autoLevel);return this.busy||t.mag>=e.magSize||t.reserve<=0?!1:(this.reloadTotal=e.reloadTime,this.reloadTimer=e.reloadTime,this.audio.reload(),!0)}tryFire(t,e){if(this.busy||this.cooldown>0)return null;const n=this.runtimes[this.current],i=$s(this.current,n.levels,this.autoLevel);if(n.mag<=0)return this.audio.dryFire(),this.startReload(),null;n.mag-=1,this.cooldown=i.fireInterval,this.kick=1,this.current==="shotgun"&&(this.pump=1),this.flashTimer=.05,this.audio.gunshot(this.current);const r=this.camera.getWorldDirection(new A),a=_e.degToRad(de[this.current].spreadDeg*(1-t.ads)+de[this.current].adsSpreadDeg*t.ads)*(1+(e?.9:0)),c=[];for(let h=0;h<i.pellets;h++){const u=r.clone();if(a>0){const f=Math.random()*Math.PI*2,p=(h===0?0:Math.sqrt(Math.random()))*a,g=new A(0,1,0),_=new A().crossVectors(g,r).normalize(),m=new A().crossVectors(r,_).normalize();u.addScaledVector(_,Math.cos(f)*p).addScaledVector(m,Math.sin(f)*p).normalize()}c.push(u)}const l=this.groups[this.current].userData.muzzle.getWorldPosition(new A);return{dirs:c,muzzleWorld:l,damage:i.damage,range:de[this.current].range}}finishReload(){const t=this.runtimes[this.current],n=$s(this.current,t.levels,this.autoLevel).magSize-t.mag,i=Math.min(n,t.reserve);t.mag+=i,t.reserve-=i}update(t){this.cooldown=Math.max(0,this.cooldown-t),this.reloadTimer>0&&(this.reloadTimer-=t,this.reloadTimer<=0&&(this.reloadTimer=0,this.finishReload())),this.switchTimer>0&&(this.switchTimer=Math.max(0,this.switchTimer-t)),this.kick=Math.max(0,this.kick-t*6),this.pump=Math.max(0,this.pump-t*3),this.flashTimer=Math.max(0,this.flashTimer-t),this.muzzleFlash.intensity=this.flashTimer>0?25*(this.flashTimer/.05):0;const e=this.groups[this.current],n=e.userData.adsEase??0,i=e,r=this.camera.userData.adsEase??0;i.userData.adsEase=_e.damp(n,r,12,t);const o=i.userData.adsEase,a=Math.sin(performance.now()*.0016)*.004,c=Math.cos(performance.now()*.0013)*.004,l=Math.sin(Math.min(1,this.switchTimer/.65)*Math.PI)*-.25,h=this.reloadTimer>0?Math.sin((1-this.reloadTimer/this.reloadTotal)*Math.PI)*-.18:0;if(i.position.set(_e.lerp(.16,0,o)+a,_e.lerp(-.12,-.008,o)+c+l+h-this.kick*de[this.current].kickback,_e.lerp(-.5,-.34,o)+this.kick*.06),i.rotation.set(this.kick*.12+(this.reloadTimer>0?.35:0),this.kick*.02,-this.kick*.05),this.current==="shotgun"){const u=i.children[2];u&&(u.position.z=-.55+this.pump*.12)}}}const Zt=s=>new ot({color:s,roughness:.5,metalness:.65}),$r=new Ye({visible:!1}),vc=new Map;function Yi(s,t){let e=vc.get(s);return e||(e=t(),vc.set(s,e)),e}const Re=(s,t,e)=>Yi(`box:${s},${t},${e}`,()=>new pt(s,t,e)),ai=(s,t,e,n)=>Yi(`cyl:${s},${t},${e},${n}`,()=>new Jt(s,t,e,n)),We=(s,t,e)=>Yi(`sph:${s},${t},${e}`,()=>new Wn(s,t,e)),fl=(s,t,e,n,i)=>Yi(`sphA:${s},${t},${e},${n},${i}`,()=>new Wn(s,t,e,0,Math.PI*2,n,i)),X0=(s,t,e,n)=>Yi(`tor:${s},${t},${e},${n}`,()=>new Xn(s,t,e,n)),q0=(s,t,e,n)=>Yi(`cap:${s},${t},${e},${n}`,()=>new bo(s,t,e,n));function Pn(s,t,e,n,i,r){const o=new jt;o.position.set(t,e,n);const a=new z(X0(i,.045,6,14),Zt(2896704));a.rotation.x=Math.PI/2,o.add(a);const c=new jt;for(let l=0;l<2;l++){const h=new z(Re(i*1.9,.015,.08),r);h.rotation.y=l*Math.PI/2,c.add(h)}return o.add(c),s.add(o),s.userData.blades=s.userData.blades||[],s.userData.blades.push(c),o}function Y0(){const s=new jt,t=Zt(4608100),e=new z(q0(.24,.42,4,10),t);e.rotation.x=Math.PI/2,s.add(e);const n=new ot({color:3346688,emissive:new it("#ff5a1f"),emissiveIntensity:2.4}),i=new z(We(.09,10,10),n);i.position.set(0,0,-.42),s.add(i);for(let r=0;r<3;r++){const o=r/3*Math.PI*2+.5,a=Math.cos(o)*.42,c=Math.sin(o)*.42,l=new z(Re(.35,.04,.06),t);l.position.set(a*.6,.12,c*.6),l.lookAt(0,.12,0),s.add(l),Pn(s,a,.18,c,.2,Zt(7042694))}return s.userData.blades=s.userData.blades,s}function $0(){const s=new jt,t=new z(Re(1.3,.75,1),Zt(3818580));t.castShadow=!0,s.add(t);const e=new z(Re(1.7,.22,.5),Zt(3028806));e.position.set(0,.42,0),s.add(e),Pn(s,-.75,.55,0,.42,Zt(5858426)),Pn(s,.75,.55,0,.42,Zt(5858426));const n=new ot({color:207411,emissive:new it("#22d3ee"),emissiveIntensity:2}),i=new z(ai(.18,.18,.3,10),n);i.position.set(0,0,.55),s.add(i);const r=new ot({color:3345677,emissive:new it("#ef4444"),emissiveIntensity:2.2});for(const c of[-.3,.3]){const l=new z(We(.07,8,8),r);l.position.set(c,.05,-.52),s.add(l)}const o=new Ye({color:new it("#06b6d4"),transparent:!0,opacity:.22,blending:Qe,depthWrite:!1,side:Ve}),a=new z(fl(1.25,16,12,Math.PI*.7,Math.PI*1.6),o);return a.rotation.y=Math.PI/2,s.add(a),s.userData.shieldMesh=a,s}function K0(){const s=new jt,t=new ot({color:3804429,emissive:new it("#ef4444"),emissiveIntensity:2.4}),e=new z(We(.34,12,12),t);s.add(e);const n=new z(Re(1,.08,1),Zt(4866100));n.rotation.y=Math.PI/4,n.position.y=.18,s.add(n);for(const[a,c]of[[.42,.42],[-.42,.42],[.42,-.42],[-.42,-.42]])Pn(s,a,.26,c,.22,Zt(7042694));const i=new z(Re(.05,.3,.2),Zt(3357769));i.position.set(0,.35,.3),s.add(i);const r=new ot({color:3345677,emissive:new it("#ff7847"),emissiveIntensity:2.6}),o=new z(We(.08,8,8),r);return o.position.set(0,-.2,-.3),s.add(o),s.userData.blades=s.userData.blades,s}function j0(){const s=new jt,t=new z(ai(.3,.42,.95,6),Zt(5130042));t.castShadow=!0,s.add(t);const e=new z(ai(.46,.46,.12,6),Zt(3354666));e.position.y=.4,s.add(e),Pn(s,-.62,.62,0,.3,Zt(7827551)),Pn(s,.62,.62,0,.3,Zt(7827551));const n=new z(ai(.05,.06,.95,6),Zt(2764085));n.rotation.x=Math.PI/2,n.position.set(0,-.05,-.72),s.add(n);const i=new ot({color:3351040,emissive:new it("#ffb020"),emissiveIntensity:2.6}),r=new z(We(.1,10,10),i);r.position.set(0,.05,-.4),s.add(r);const o=new z(Re(.16,.1,.24),Zt(2040880));o.position.set(0,.28,-.3),s.add(o);const a=new z(Re(.05,.34,.26),Zt(3357769));return a.position.set(0,.28,.36),s.add(a),s.userData.blades=s.userData.blades,s}function J0(){const s=new jt,t=new z(Re(1.15,.42,1.15),Zt(5260854));t.castShadow=!0,s.add(t);const e=new z(Re(1.5,.12,1.5),Zt(3682858));e.position.y=.26,s.add(e);for(let c=0;c<6;c++){const l=c/6*Math.PI*2+Math.PI/6;Pn(s,Math.cos(l)*.88,.36,Math.sin(l)*.88,.26,Zt(7301208))}const n=new ot({color:2367258,roughness:.6,metalness:.4,emissive:new it("#ef4444"),emissiveIntensity:1.1}),i=new z(We(.3,12,10),n);i.position.y=-.42,s.add(i);const r=new ot({color:273,emissive:new it("#f59e0b"),emissiveIntensity:1.6}),o=new z(Re(1.2,.06,.06),r);o.position.set(0,.34,.62),s.add(o);const a=new ot({color:3345677,emissive:new it("#ff7847"),emissiveIntensity:2.2});for(const c of[-.4,.4]){const l=new z(We(.06,8,8),a);l.position.set(c,.1,-.6),s.add(l)}return s.userData.blades=s.userData.blades,s}function Z0(){const s=new jt,t=new z(ai(.5,.36,1.1,6),Zt(4867126));t.rotation.x=Math.PI/2,t.position.y=.62,t.castShadow=!0,s.add(t);const e=new z(Re(.9,.14,.7),Zt(3485738));e.position.y=1,s.add(e);const n=new ot({color:3345677,emissive:new it("#ff5a1f"),emissiveIntensity:2.4}),i=new z(We(.09,8,8),n);i.position.set(0,.75,-.58),s.add(i);const r=new ot({color:1841686,roughness:.6,metalness:.5,emissive:new it("#ef4444"),emissiveIntensity:.8}),o=new z(Re(.34,.2,.3),r);o.position.set(0,.45,-.68),s.add(o);const a=Re(.09,.62,.09),c=Zt(2895928),l=[];for(const[h,u]of[[-1,0],[1,Math.PI]])for(let f=0;f<3;f++){const p=new jt;p.position.set(h*.42,.66,-.36+f*.36);const g=new z(a,c);g.position.y=-.3,p.add(g),p.rotation.z=h*.5,p.userData.phase=u+f*1.3,s.add(p),l.push(p)}return s.userData.legs=l,Pn(s,0,1.08,.42,.26,Zt(7301208)),s}function Q0(){const s=new jt,t=new z(Re(2.5,1.3,1.9),Zt(3752271));t.castShadow=!0,s.add(t);const e=new z(Re(1.5,.5,1.2),Zt(2831168));e.position.y=.85,s.add(e);for(const[l,h]of[[-1.35,-.9],[1.35,-.9],[-1.35,.9],[1.35,.9]])Pn(s,l,1.15,h,.68,Zt(5726842));const n=new ot({color:207411,emissive:new it("#22d3ee"),emissiveIntensity:1.8}),i=new z(ai(.3,.3,.5,12),n);i.position.set(0,0,.98),s.add(i);const r=new ot({color:3345677,emissive:new it("#ef4444"),emissiveIntensity:2.2});for(const l of[-.55,0,.55]){const h=new z(We(.09,8,8),r);h.position.set(l,.15,-.98),s.add(h)}const o=new z(Re(.8,.4,1.2),Zt(2304565));o.position.set(0,-.8,-.5),s.add(o);for(const l of[-.25,.25]){const h=new z(ai(.06,.07,.9,6),Zt(1711912));h.rotation.x=Math.PI/2,h.position.set(l,-.85,-1.2),s.add(h)}const a=new Ye({color:new it("#06b6d4"),transparent:!0,opacity:.22,blending:Qe,depthWrite:!1,side:Ve}),c=new z(fl(2.05,18,12,Math.PI*.7,Math.PI*1.6),a);return c.rotation.y=Math.PI/2,s.add(c),s.userData.shieldMesh=c,s}function tg(s){return new A(s.x,s.y+1.8,s.z)}function eg(s,t,e,n){const i=t.clone().sub(s),r=n.clone().sub(e),o=s.clone().sub(e),a=i.lengthSq(),c=r.lengthSq(),l=r.dot(o);let h=0,u=0,f=0,p=0;if(a<=1e-9&&c<=1e-9)return s.distanceTo(e);if(a<=1e-9)u=l/c;else{if(p=i.dot(o),c<=1e-9)h=-p/a;else{f=i.dot(r);const g=a*c-f*f;h=g!==0?(f*l-p*c)/g:0,u=(f*h+l)/c}h=_e.clamp(h,0,1),u=_e.clamp(u,0,1),h=_e.clamp((f*u-p)/a,0,1)}return u=_e.clamp(u,0,1),s.clone().addScaledVector(i,h).distanceTo(e.clone().addScaledVector(r,u))}const ng={scout:Y0,heavy:$0,kamikaze:K0,warden:j0,bomber:J0,crawler:Z0,colossus:Q0},ig=96,sg=24;class Ni{constructor(t,e){F(this,"drones",[]);F(this,"scene");F(this,"projectiles",[]);F(this,"projFree",[]);F(this,"bombs",[]);F(this,"bombFree",[]);F(this,"projGeo",We(.09,6,6));F(this,"projMat",new Ye({color:new it("#ff6b4a"),blending:Qe,transparent:!0,fog:!1}));F(this,"bombGeo",We(.16,8,8));F(this,"bombMat",new ot({color:1314828,roughness:.7,emissive:new it("#ef4444"),emissiveIntensity:1.2}));F(this,"colliders",[]);F(this,"hpMul",1);F(this,"dmgMul",1);this.cb=e,this.scene=t;for(let n=0;n<ig;n++){const i=new z(this.projGeo,this.projMat);i.visible=!1,t.add(i),this.projectiles.push({mesh:i,vel:new A,life:0,dmg:0}),this.projFree.push(n)}for(let n=0;n<sg;n++){const i=new z(this.bombGeo,this.bombMat);i.visible=!1,t.add(i),this.bombs.push({mesh:i,vel:new A,life:0,dmg:0}),this.bombFree.push(n)}}fireBolt(t,e,n,i,r,o,a=1){let c=e.pop();if(c===void 0){const h=t.find(u=>u.life>0);h&&(h.mesh.visible=!1,c=t.indexOf(h))}if(c===void 0)return;const l=t[c];l.mesh.scale.setScalar(a),l.mesh.position.copy(n),l.mesh.visible=!0,l.vel.copy(i),l.life=r,l.dmg=o}static release(t,e,n){t[n].mesh.visible=!1,t[n].life=0,e.push(n)}setColliders(t){this.colliders=t}setMods(t,e){this.hpMul=t,this.dmgMul=e}spawn(t,e){const n=lo[t],i=ng[t]();i.position.copy(e);const r=new z(We(n.radius+.12,8,8),$r);i.add(r);let o=null,a=null;if(t==="heavy"||t==="colossus"){const l=t==="colossus";o=new z(We(l?2.15:1.3,10,8),$r),o.position.set(0,0,l?-.9:-.45),i.add(o),a=new z(We(l?.75:.5,6,6),$r),a.position.set(0,l?1.05:.62,0),i.add(a)}const c={kind:t,group:i,hp:Math.round(n.hp*this.hpMul),shield:Math.round(n.shield*this.hpMul),maxShield:Math.round(n.shield*this.hpMul),radius:n.radius,phase:Math.random()*Math.PI*2,strafe:Math.random()>.5?1:-1,fireTimer:1+Math.random()*2,burstLeft:0,burstTimer:0,spotted:!1,dying:!1,deathTimer:0,targetTower:t==="kamikaze"&&Math.random()<.35,beepTimer:0,charge:0,chargeTick:0,hitN:null,rotors:i.userData.blades??[],bodyHit:r,shieldHit:o,weakHit:a,shieldMat:t==="heavy"?i.userData.shieldMesh.material:null,vel:new A};r.userData={drone:c,part:"body"},o&&(o.userData={drone:c,part:"shield"}),a&&(a.userData={drone:c,part:"weak"}),this.drones.push(c),this.scene.add(i)}hitMeshes(){const t=[];for(const e of this.drones)e.dying||(t.push(e.bodyHit),e.shieldHit&&e.shield>0&&t.push(e.shieldHit),e.weakHit&&t.push(e.weakHit));return t}applyDamage(t,e,n){if(t.dying)return{killed:!1,shieldHit:!1};let i=n,r=!1;if(e==="weak"){if(i*=2,t.shield>0){const o=Math.min(t.shield,i);t.shield-=o,i-=o,r=!0}}else if(e==="shield"&&t.shield>0){const o=Math.min(t.shield,i);t.shield-=o,i-=o,r=!0}if(t.shield<=0&&t.shieldMat){t.shieldMat.opacity=0;const o=t.group.userData.shieldMesh;o&&(o.visible=!1)}if(t.hp-=i,t.shieldMat&&t.shield<=0){t.shieldMat.opacity=0;const o=t.group.userData.shieldMesh;o&&(o.visible=!1)}return t.hp<=0?(t.kind==="kamikaze"&&this.cb.onExplosion(t.group.position.clone(),"kamikaze",!0),t.dying=!0,t.deathTimer=1.4,t.kind!=="kamikaze"&&this.cb.onExplosion(t.group.position.clone(),t.kind,!0),{killed:!0,shieldHit:r}):{killed:!1,shieldHit:r}}killAll(){for(const t of this.drones)t.dying||(t.dying=!0,t.deathTimer=.9,this.cb.onExplosion(t.group.position.clone(),t.kind,!0))}activeCount(){return this.drones.filter(t=>!t.dying).length}clearHostiles(){for(const t of this.drones)this.scene.remove(t.group);this.drones.length=0,this.projectiles.forEach((t,e)=>{t.life>0&&Ni.release(this.projectiles,this.projFree,e)}),this.bombs.forEach((t,e)=>{t.life>0&&Ni.release(this.bombs,this.bombFree,e)})}update(t,e,n,i,r){const o=new A;for(let a=this.drones.length-1;a>=0;a--){const c=this.drones[a];for(const _ of c.rotors)_.rotation.y+=t*40;if(c.dying){c.deathTimer-=t,c.group.rotation.z+=t*6,c.group.rotation.x+=t*2,c.group.position.y-=t*9,c.group.traverse(_=>{const m=_;if(m.isMesh&&m.material instanceof ot){let d=m.material;m.userData.dyingInit||(m.userData.dyingInit=!0,d=d.clone(),m.material=d),d.emissive=new it("#ff6a00"),d.emissiveIntensity=Math.max(0,d.emissiveIntensity*(1-t*2))}}),c.deathTimer<=0&&(this.scene.remove(c.group),this.drones.splice(a,1));continue}if(!r)continue;const l=lo[c.kind],h=c.kind==="kamikaze"&&c.targetTower?i:n,u=o.copy(h).sub(c.group.position),f=u.length();u.normalize();const p=new A;for(const _ of this.drones){if(_===c||_.dying)continue;const m=_.group.position.distanceTo(c.group.position);m<2.2&&m>.001&&p.addScaledVector(c.group.position.clone().sub(_.group.position),(2.2-m)/m)}const g=l.speed;if(c.kind==="scout"){const _=11+Math.sin(e*.6+c.phase)*3,m=new A(-u.z,0,u.x).multiplyScalar(c.strafe),d=new A(Math.sin(e*3.1+c.phase),Math.sin(e*2.3+c.phase*2)*.5,Math.cos(e*2.7+c.phase)).multiplyScalar(c.spotted?.8:2.6),x=u.multiplyScalar(f>_?g:-g*.6).add(m.multiplyScalar(g*.5)).add(d).add(p.multiplyScalar(1.4));x.y+=(3.2+Math.sin(e+c.phase)*1.2-c.group.position.y)*1.5,this.steer(c,x,t,g*1.6)}else if(c.kind==="heavy"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*(c.spotted?0:g*.55)),d=u.multiplyScalar(f>17?g:-g*.4).add(m).add(p.multiplyScalar(2));d.y+=(4.2-c.group.position.y)*1.2,this.steer(c,d,t,g*1.2),c.group.lookAt(n.x,c.group.position.y,n.z)}else if(c.kind==="colossus"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*(c.spotted?0:g*.5)),d=u.clone().multiplyScalar(f>20?g:-g*.35).add(m).add(p.multiplyScalar(2.4));d.y+=(5-c.group.position.y)*1.1,this.steer(c,d,t,g*1.2),c.group.lookAt(n.x,c.group.position.y,n.z)}else if(c.kind==="crawler"){const _=u.clone().multiplyScalar(g).add(p.multiplyScalar(1.6));_.y+=(.75-c.group.position.y)*3,this.steer(c,_,t,g*1.4),c.group.lookAt(h.x,c.group.position.y,h.z);const m=c.group.userData.legs;if(m)for(let d=0;d<m.length;d++)m[d].rotation.x=Math.sin(e*16+m[d].userData.phase)*.42;if(f<2.4&&r&&(c.fireTimer-=t,c.fireTimer<=0)){c.fireTimer=l.fireInterval*(.85+Math.random()*.4);const d=c.group.position.clone().add(new A(0,.6,0)),x=n.clone().add(new A(0,1,0));this.cb.onLaser(d,x),this.cb.onPlayerHit(Math.round(l.fireDamage*this.dmgMul),d),this.cb.onBeep(240)}}else if(c.kind==="warden"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*g*.75),d=f>33?g:f<26?-g:0,x=u.clone().multiplyScalar(d).add(m).add(p.multiplyScalar(1.5));x.y+=(6.2+Math.sin(e*.7+c.phase)*.8-c.group.position.y)*1.2,this.steer(c,x,t,g*1.3),c.group.lookAt(h.x,c.group.position.y,h.z)}else if(c.kind==="bomber"){const m=new A(-u.z,0,u.x).multiplyScalar(c.strafe*g*.6),d=u.clone().multiplyScalar(f>20?g:-g*.4).add(m).add(p.multiplyScalar(2));if(d.y+=(7.6-c.group.position.y)*1.2,this.steer(c,d,t,g*1.3),c.group.lookAt(h.x,c.group.position.y,h.z),c.fireTimer-=t,c.fireTimer<=0){c.fireTimer=l.fireInterval*(.8+Math.random()*.5);const x=c.group.position.clone().add(new A(0,-.6,0)),M=new A(n.x-c.group.position.x,0,n.z-c.group.position.z).clampLength(0,3);this.fireBolt(this.bombs,this.bombFree,x,new A(M.x,-1,M.z),8,0),this.cb.onBeep(320)}}else{const _=u.clone().multiplyScalar(g).add(p.multiplyScalar(1.8));_.y+=(Math.max(h.y+1.2,1.6)-c.group.position.y)*.8,this.steer(c,_,t,g*1.5),c.group.lookAt(h.x,h.y+1,h.z);const m=c.targetTower?3.6:2.4;if(f<m){this.cb.onExplosion(c.group.position.clone(),"kamikaze",!1),c.dying=!0,c.deathTimer=.01;continue}if(c.beepTimer-=t,c.beepTimer<=0){const d=_e.clamp(1-f/40,0,1);this.cb.onBeep(500+d*1400),c.beepTimer=.9-d*.75}}if(c.kind==="warden")if(c.charge>0){if(c.charge-=t,c.chargeTick-=t,c.chargeTick<=0){c.chargeTick=.28;const _=c.group.position.clone(),m=n.clone().add(new A(0,1.1,0));this.cb.onLaser(_,m),this.cb.onBeep(1150)}if(c.charge<=0){const _=c.group.position.clone(),m=n.clone().add(new A(0,1,0)),d=new A((Math.random()-.5)*.5,(Math.random()-.5)*.3,(Math.random()-.5)*.5).multiplyScalar(c.spotted?.3:1);m.add(d),this.cb.onLaser(_,m),this.fireBolt(this.projectiles,this.projFree,_,m.sub(_).normalize().multiplyScalar(34),4,Math.round(l.fireDamage*this.dmgMul),1.4)}}else c.fireTimer-=t,c.fireTimer<=0&&f<l.attackRange&&(c.charge=1.4,c.chargeTick=0,c.fireTimer=l.fireInterval*(.85+Math.random()*.4));if(c.kind==="scout"||c.kind==="heavy"||c.kind==="colossus")if(c.fireTimer-=t,c.burstLeft>0){if(c.burstTimer-=t,c.burstTimer<=0){c.burstLeft-=1,c.burstTimer=.12;const _=c.group.position.clone(),m=new A((Math.random()-.5)*1.4,(Math.random()-.5)*1,(Math.random()-.5)*1.4).multiplyScalar(c.spotted?.4:1),d=n.clone().add(new A(0,1.1,0)).add(m);this.cb.onLaser(_,d);const x=d.sub(_).normalize().multiplyScalar(19);this.fireBolt(this.projectiles,this.projFree,_,x,3,Math.round(l.fireDamage*this.dmgMul))}}else c.fireTimer<=0&&f<l.attackRange&&(c.burstLeft=l.burst,c.burstTimer=0,c.fireTimer=l.fireInterval*(.7+Math.random()*.6));c.shieldMat&&c.shield>0&&(c.shieldMat.opacity=.16+.08*Math.sin(e*5+c.phase))}for(let a=0;a<this.projectiles.length;a++){const c=this.projectiles[a];if(c.life<=0)continue;const l=c.mesh.position.clone();c.mesh.position.addScaledVector(c.vel,t),c.life-=t;const h=c.mesh.position;let u=!1;r&&eg(l,h,n,tg(n))<.45&&(this.cb.onPlayerHit(c.dmg,h),u=!0),this.solidAt(h)&&(u=!0),(c.life<=0||h.y<.1)&&(u=!0),u&&Ni.release(this.projectiles,this.projFree,a)}for(let a=0;a<this.bombs.length;a++){const c=this.bombs[a];if(c.life<=0)continue;c.vel.y-=15*t,c.mesh.position.addScaledVector(c.vel,t),c.mesh.rotation.x+=t*6,c.life-=t;const l=c.mesh.position;(l.y<=.3||this.solidAt(l)||c.life<=0)&&(this.cb.onExplosion(l.clone(),"bomber",!1),Ni.release(this.bombs,this.bombFree,a))}}solidAt(t){for(const e of this.colliders)if(!(t.y>=e.top)){if(e.kind==="cyl"){if(Math.hypot(t.x-e.x,t.z-e.z)<e.r)return!0}else if(Math.abs(t.x-e.x)<e.hx&&Math.abs(t.z-e.z)<e.hz)return!0}return!1}applyWallSlide(t,e,n){const i=t.hitN;if(!i)return;const r=i.length();if(r<1e-4)return;i.divideScalar(r);const o=e.dot(i);o>0&&e.addScaledVector(i,-o);const a=new A(-i.z,0,i.x).multiplyScalar(t.strafe);e.addScaledVector(a,n*.85)}steer(t,e,n,i){this.applyWallSlide(t,e,i),e.length()>i&&e.setLength(i),t.vel.lerp(e,Math.min(1,n*2.2)),t.group.position.addScaledVector(t.vel,n);const r=t.kind==="crawler"?.75:1.2;t.group.position.y<r&&(t.group.position.y=r),t.group.position.y>9&&(t.group.position.y=9);const o=Math.hypot(t.group.position.x,t.group.position.z);o>50&&(t.group.position.x*=50/o,t.group.position.z*=50/o),this.resolveCollision(t)}resolveCollision(t){const e=t.group.position,n=t.radius+.35;t.hitN=null;for(const i of this.colliders)if(!(e.y-.4>=i.top))if(i.kind==="cyl"){const r=e.x-i.x,o=e.z-i.z,a=Math.hypot(r,o),c=i.r+n;if(a<c){const l=a>1e-4?r/a:1,h=a>1e-4?o/a:0;e.x+=l*(c-a),e.z+=h*(c-a);const u=-(t.vel.x*l+t.vel.z*h);u>0&&(t.vel.x+=l*u,t.vel.z+=h*u),t.hitN?t.hitN.add(new A(l,0,h)):t.hitN=new A(l,0,h)}}else{const r=e.x-i.x,o=e.z-i.z,a=i.hx+n-Math.abs(r),c=i.hz+n-Math.abs(o);if(a>0&&c>0){let l=0,h=0;a<c?(l=r>=0?1:-1,e.x+=l*a,(r>=0?t.vel.x:-t.vel.x)<0&&(t.vel.x=0)):(h=o>=0?1:-1,e.z+=h*c,(o>=0?t.vel.z:-t.vel.z)<0&&(t.vel.z=0)),t.hitN?t.hitN.add(new A(l,0,h)):t.hitN=new A(l,0,h)}}}}const rg=64,og=320,ag=48,cg=96;function Kr(s){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,2,32,32,30);return n.addColorStop(0,s),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new cl(t)}const Ao=new Jt(.018,.006,1,5);Ao.translate(0,.5,0);Ao.rotateX(Math.PI/2);const lg=new pt(1,1,1),hg=new ot({color:2830652,emissive:new it("#ff7a30"),emissiveIntensity:.8,roughness:.6});class un{constructor(t){F(this,"tracers",[]);F(this,"tracerActive",[]);F(this,"tracerFree",[]);F(this,"sprites",[]);F(this,"spriteActive",[]);F(this,"spriteFree",[]);F(this,"smokes",[]);F(this,"smokeActive",[]);F(this,"smokeFree",[]);F(this,"debris",[]);F(this,"debrisActive",[]);F(this,"debrisFree",[]);F(this,"poolSize",10);F(this,"pool",[]);F(this,"empRing");F(this,"empTime",-1);F(this,"sparkTex",Kr("rgba(255,200,120,0.9)"));F(this,"cyanTex",Kr("rgba(80,220,255,0.9)"));F(this,"fireTex",Kr("rgba(255,120,40,0.9)"));this.scene=t;for(let n=0;n<this.poolSize;n++){const i=new Be(16777215,0,1,1.6);i.visible=!0,t.add(i),this.pool.push({light:i,life:0,life0:1,peak:0})}this.empRing=new z(new Xn(1,.25,8,40),new Ye({color:new it("#67e8f9"),transparent:!0,opacity:.8,blending:Qe,depthWrite:!1,fog:!1})),this.empRing.rotation.x=Math.PI/2,this.empRing.visible=!1,t.add(this.empRing);for(let n=0;n<rg;n++){const i=new Ye({color:16777215,transparent:!0,opacity:0,blending:Qe,depthWrite:!1,fog:!1}),r=new z(Ao,i);r.visible=!1,t.add(r),this.tracers.push({mesh:r,mat:i,life:0,max:1}),this.tracerFree.push(n)}const e=[this.fireTex,this.sparkTex,this.cyanTex];for(let n=0;n<og;n++){const i=new oo({map:e[n%e.length],color:16777215,transparent:!0,opacity:0,blending:Qe,depthWrite:!1,fog:!1}),r=new ec(i);r.visible=!1,t.add(r),this.sprites.push({sprite:r,mat:i,vel:new A,life:0,max:1,grav:0,size0:1}),this.spriteFree.push(n)}for(let n=0;n<ag;n++){const i=new oo({map:this.fireTex,color:new it("#ff9a3c"),transparent:!0,opacity:0,depthWrite:!1,fog:!0}),r=new ec(i);r.visible=!1,t.add(r),this.smokes.push({sprite:r,mat:i,vel:new A,life:0,max:1,grav:0,size0:1}),this.smokeFree.push(n)}for(let n=0;n<cg;n++){const i=new z(lg,hg);i.visible=!1,t.add(i),this.debris.push({mesh:i,vel:new A,spin:new A,life:0}),this.debrisFree.push(n)}}static take(t,e){let n=e.pop();return n===void 0&&(n=t.shift()),t.push(n),n}static retire(t,e,n){e.push(n);const i=t.indexOf(n);i>=0&&t.splice(i,1)}tracer(t,e,n,i=.07){const r=un.take(this.tracerActive,this.tracerFree),o=this.tracers[r];o.mat.color.set(n),o.mat.opacity=.95;const a=t.distanceTo(e);o.mesh.scale.set(1,1,Math.max(.1,a)),o.mesh.position.copy(t),o.mesh.lookAt(e),o.mesh.visible=!0,o.life=i,o.max=i}sparks(t,e,n=8){const i=e==="cyan"?this.cyanTex:e==="red"?this.fireTex:this.sparkTex,r=e==="cyan"?new it("#22d3ee"):e==="red"?new it("#ff5a3c"):new it("#ffb45e");for(let o=0;o<n;o++){const a=un.take(this.spriteActive,this.spriteFree),c=this.sprites[a];c.mat.map=i,c.mat.color.copy(r),c.mat.opacity=1;const l=.08+Math.random()*.12;c.sprite.scale.set(l,l,1),c.sprite.position.copy(t),c.sprite.visible=!0,c.vel.set((Math.random()-.5)*5,(Math.random()-.3)*5,(Math.random()-.5)*5),c.life=.3+Math.random()*.4,c.max=.7,c.grav=6,c.size0=l}}explosion(t,e=1){for(let n=0;n<10;n++){const i=un.take(this.spriteActive,this.spriteFree),r=this.sprites[i];r.mat.map=this.fireTex,r.mat.color.set(n<5?"#ffd27f":"#ff5a2c"),r.mat.opacity=1;const o=(.6+Math.random()*1.2)*e;r.sprite.scale.set(o,o,1),r.sprite.position.copy(t).add(new A((Math.random()-.5)*e,(Math.random()-.5)*e,(Math.random()-.5)*e)),r.sprite.visible=!0,r.vel.set((Math.random()-.5)*6*e,Math.random()*4*e,(Math.random()-.5)*6*e),r.life=.4+Math.random()*.5,r.max=.9,r.grav=1,r.size0=o}this.flash(t,"#ffa040",160*e,26*e,.35);for(let n=0;n<6;n++){const i=un.take(this.debrisActive,this.debrisFree),r=this.debris[i],o=.08+Math.random()*.16;r.mesh.scale.set(o,o,o),r.mesh.position.copy(t),r.mesh.rotation.set(0,0,0),r.mesh.visible=!0,r.vel.set((Math.random()-.5)*9,2+Math.random()*6,(Math.random()-.5)*9),r.spin.set(Math.random()*10,Math.random()*10,Math.random()*10),r.life=1.6}}shieldRipple(t){const e=un.take(this.spriteActive,this.spriteFree),n=this.sprites[e];n.mat.map=this.cyanTex,n.mat.color.set("#38e2ff"),n.mat.opacity=1,n.sprite.scale.set(.9,.9,1),n.sprite.position.copy(t),n.sprite.visible=!0,n.vel.set(0,0,0),n.life=.25,n.max=.25,n.grav=0,n.size0=.9}triggerEmp(t){this.empRing.position.copy(t).setY(1.2),this.empRing.visible=!0,this.empTime=0,this.flash(t.clone().setY(6),"#67e8f9",900,90,1.2)}flash(t,e,n,i,r){let o=this.pool.find(a=>a.life<=0);o||(o=this.pool.reduce((a,c)=>a.life<c.life?a:c)),o.light.color.set(e),o.light.distance=i,o.light.position.copy(t),o.light.intensity=n,o.peak=n,o.life=r,o.life0=r}update(t){for(let e=this.tracerActive.length-1;e>=0;e--){const n=this.tracerActive[e],i=this.tracers[n];i.life-=t,i.mat.opacity=Math.max(0,i.life/i.max),i.life<=0&&(i.mesh.visible=!1,un.retire(this.tracerActive,this.tracerFree,n))}for(const e of[this.sprites,this.smokes]){const n=e===this.sprites?this.spriteActive:this.smokeActive,i=e===this.sprites?this.spriteFree:this.smokeFree;for(let r=n.length-1;r>=0;r--){const o=n[r],a=e[o];a.life-=t,a.vel.y-=a.grav*t,a.sprite.position.addScaledVector(a.vel,t);const c=Math.max(0,a.life/a.max);a.sprite.scale.setScalar(a.size0*(.4+.6*c+(1-c)*.6)),a.mat.opacity=c,a.life<=0&&(a.sprite.visible=!1,un.retire(n,i,o))}}for(let e=this.debrisActive.length-1;e>=0;e--){const n=this.debrisActive[e],i=this.debris[n];i.life-=t,i.vel.y-=14*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.rotation.x+=i.spin.x*t,i.mesh.rotation.y+=i.spin.y*t,i.mesh.position.y<.04&&(i.mesh.position.y=.04,i.vel.set(i.vel.x*.6,0,i.vel.z*.6),i.spin.multiplyScalar(.5)),i.life<=0&&(i.mesh.visible=!1,un.retire(this.debrisActive,this.debrisFree,n))}for(const e of this.pool)e.life>0&&(e.life-=t,e.light.intensity=e.life>0?e.peak*(e.life/e.life0):0);if(this.empTime>=0){this.empTime+=t;const e=this.empTime/1.6;this.empRing.scale.setScalar(1+e*42),this.empRing.material.opacity=Math.max(0,.85*(1-e)),e>=1&&(this.empRing.visible=!1,this.empTime=-1)}}smokePlume(t,e){if(Math.random()>e*14)return;const n=un.take(this.smokeActive,this.smokeFree),i=this.smokes[n];i.mat.opacity=.6;const r=.5+Math.random()*.5;i.sprite.scale.set(r,r,1),i.sprite.position.copy(t).add(new A((Math.random()-.5)*.3,0,(Math.random()-.5)*.3)),i.sprite.visible=!0,i.vel.set(0,1.6,0),i.life=1.6,i.max=1.6,i.grav=-.6,i.size0=r}}function ug(){const s=document.createElement("canvas");s.width=s.height=32;const t=s.getContext("2d"),e=t.createRadialGradient(16,16,1,16,16,15);return e.addColorStop(0,"rgba(235,244,255,0.95)"),e.addColorStop(1,"rgba(235,244,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new cl(s)}class dg{constructor(t){F(this,"points");F(this,"vel");F(this,"positions");this.scene=t;const e=ni.snowCount,n=new Ce;this.positions=new Float32Array(e*3),this.vel=new Float32Array(e);const i=ni.snowBox;for(let o=0;o<e;o++)this.positions[o*3]=(Math.random()-.5)*i*2,this.positions[o*3+1]=Math.random()*26,this.positions[o*3+2]=(Math.random()-.5)*i*2,this.vel[o]=1.5+Math.random()*3.5;n.setAttribute("position",new qe(this.positions,3));const r=new Mo({map:ug(),color:new it("#dce8f7"),size:.16,transparent:!0,opacity:.85,depthWrite:!1,sizeAttenuation:!0});this.points=new al(n,r),this.points.frustumCulled=!1,t.add(this.points)}update(t,e,n,i){const r=ni.snowBox,o=Math.sin(e*.25)*3+2,a=Math.cos(e*.19)*2.4-1.2,c=1+i*2.4;for(let l=0;l<this.vel.length;l++){const h=l*3;this.positions[h]+=(o*i*2+.4)*t,this.positions[h+1]-=this.vel[l]*c*t,this.positions[h+2]+=a*i*2*t,this.positions[h+1]<0&&(this.positions[h+1]+=26);const u=this.positions[h]-n.x,f=this.positions[h+2]-n.z;u>r?this.positions[h]-=r*2:u<-r&&(this.positions[h]+=r*2),f>r?this.positions[h+2]-=r*2:f<-r&&(this.positions[h+2]+=r*2)}this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.material.opacity=.5+i*.5,this.points.material.size=.12+i*.1}}const xc=new pt(.9,.9,.9),Mc=new ot({color:6969902,roughness:.6,metalness:.3,emissive:new it("#3a2b10"),emissiveIntensity:.4}),yc=new pt(.95,.12,.95),Sc=new ot({color:273,emissive:new it("#f59e0b"),emissiveIntensity:2}),wc=new Jt(1.1,1.1,24,12,1,!0),bc=new Ye({color:new it("#f59e0b"),transparent:!0,opacity:.22,blending:Qe,depthWrite:!1,side:Ve,fog:!0});class fg{constructor(t,e,n,i,r){F(this,"kindQueue",[]);F(this,"spawnTimer",0);F(this,"lastWave",0);F(this,"airDropsDone",new Set);F(this,"airdrops",[]);F(this,"waveBanner",null);this.scene=t,this.drones=e,this.colliders=n,this.waves=i,this.spawnAngle=r;const o=new jt,a=new z(xc,Mc);a.position.y=.45;const c=new z(yc,Sc);c.position.y=.45;const l=new z(wc,bc);l.position.y=12,o.add(a,c,l),o.visible=!1,t.add(o)}reset(){this.kindQueue=[],this.spawnTimer=0,this.lastWave=0,this.airDropsDone.clear()}waveForProgress(t){let e=0;for(let n=0;n<this.waves.length;n++)t>=this.waves[n].atProgress&&(e=n+1);return e}update(t,e){const n=this.waveForProgress(e);if(n===0)return;const i=this.waves[n-1];if(n>this.lastWave){this.lastWave=n,this.kindQueue=[];const r=(o,a)=>{for(let c=0;c<a;c++)this.kindQueue.push(o)};r("scout",i.scouts),r("heavy",i.heavies),r("kamikaze",i.kamikazes),r("warden",i.wardens??0),r("bomber",i.bombers??0),r("crawler",i.crawlers??0),r("colossus",i.colossi??0);for(let o=this.kindQueue.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1));[this.kindQueue[o],this.kindQueue[a]]=[this.kindQueue[a],this.kindQueue[o]]}this.waveBanner={title:`Wave ${n} incoming`,sub:n===this.waves.length?"Final hold — all hands to battle stations":`Hostile units: ${this.kindQueue.length}`}}if(this.kindQueue.length>0&&(this.spawnTimer-=t,this.spawnTimer<=0&&this.drones.activeCount()<i.concurrent)){const r=this.kindQueue.shift(),o=this.spawnAngle(),a=44+Math.random()*6,c=r==="crawler"?.6:r==="heavy"||r==="bomber"?5.5:r==="warden"?6.5:r==="colossus"?5:2.5+Math.random()*4;this.drones.spawn(r,new A(Math.cos(o)*a,c,Math.sin(o)*a)),this.spawnTimer=i.spawnGap*(.7+Math.random()*.6)}for(const r of me.airdropProgress)e>=r&&!this.airDropsDone.has(r)&&(this.airDropsDone.add(r),this.dropAirdrop())}get spawning(){return this.kindQueue.length>0}findDropSite(t=2.2){for(let e=0;e<60;e++){const n=Math.random()*Math.PI*2,i=17+Math.random()*12,r=Math.cos(n)*i,o=Math.sin(n)*i;if(!this.nearCollider(r,o,t))return{x:r,z:o}}for(const e of[t,t*.6])for(let n=16;n<=30;n+=1.5)for(let i=0;i<24;i++){const r=i/24*Math.PI*2+n*.35,o=Math.cos(r)*n,a=Math.sin(r)*n;if(!this.nearCollider(o,a,e))return{x:o,z:a}}return{x:0,z:0}}dropAirdrop(){const{x:t,z:e}=this.findDropSite(),n=new jt,i=new z(xc,Mc);i.position.y=.45,n.add(i);const r=new z(yc,Sc);r.position.y=.45,n.add(r);const o=new z(wc,bc);o.position.y=12,n.add(o);const a=new Be(new it("#f59e0b"),40,16,1.6);a.position.y=1.5,n.add(a),n.position.set(t,40,e),this.scene.add(n),this.airdrops.push({pod:n,pos:new A(t,0,e),landed:!1,opened:!1,beacon:o})}nearCollider(t,e,n){for(const i of this.colliders)if(i.kind==="cyl"){if(Math.hypot(t-i.x,e-i.z)<i.r+n)return!0}else if(Math.abs(t-i.x)<i.hx+n&&Math.abs(e-i.z)<i.hz+n)return!0;return!1}updateAirdrops(t,e,n){for(const i of this.airdrops)i.opened||(i.landed||(i.pod.position.y-=9*t,i.pod.position.y<=0&&(i.pod.position.y=0,i.landed=!0,e({id:`airdrop-${i.pos.x.toFixed(1)}-${i.pos.z.toFixed(1)}`,kind:"airdrop",pos:new A(i.pos.x,1,i.pos.z),label:"Open airdrop crate",readyAt:0,remove:()=>this.openAirdrop(i,n)}))),i.beacon.material.opacity=.16+.12*Math.abs(Math.sin(performance.now()*.003)))}openAirdrop(t,e){t.opened=!0,t.pod.visible=!1,e(`airdrop-${t.pos.x.toFixed(1)}-${t.pos.z.toFixed(1)}`)}clear(){for(const t of this.airdrops)t.pod.parent&&this.scene.remove(t.pod);this.airdrops.length=0}}class Ec{constructor(t){F(this,"items");F(this,"byId",new Map);this.items=t;for(const e of t)this.byId.set(e.id,e)}add(t){this.byId.has(t.id)||(this.items.push(t),this.byId.set(t.id,t))}remove(t){const e=this.byId.get(t);if(!e)return;this.byId.delete(t);const n=this.items.indexOf(e);n>=0&&this.items.splice(n,1)}findFocus(t,e,n,i){let r=null,o=-1/0;for(const a of this.items){if(a.readyAt>i)continue;const c=a.pos.clone().sub(t),l=c.length();if(l>n)continue;const h=c.normalize().dot(e);if(h<(l<1.6?-.25:.35))continue;const u=h*2-l*.15;u>o&&(o=u,r=a)}return r}}const pg=[{key:"damage",label:"Damage"},{key:"fireRate",label:"Fire rate"},{key:"capacity",label:"Capacity"},{key:"reload",label:"Reload"}],mg={pistol:"M9 Pistol",rifle:"K2 Rifle",shotgun:"M870 Shotgun",launcher:"Vulcan SAM"};function et(s,t,e){const n=document.createElement("div");return n.className=s,e!==void 0&&(n.textContent=e),t.appendChild(n),n}class gg{constructor(t){F(this,"root");F(this,"progressFill");F(this,"progressText");F(this,"waveChip");F(this,"heatChip");F(this,"heatFill");F(this,"lightChip");F(this,"rankChip");F(this,"mapChip");F(this,"cross");F(this,"crossTicks",[]);F(this,"hitLayer");F(this,"vignette");F(this,"prompt");F(this,"promptKey");F(this,"promptLabel");F(this,"promptRing");F(this,"dock");F(this,"hpFill");F(this,"hpText");F(this,"armorFill");F(this,"armorText");F(this,"weaponName");F(this,"ammoMag");F(this,"ammoReserve");F(this,"creditsText");F(this,"reloadHint");F(this,"banner");F(this,"bannerTitle");F(this,"bannerSub");F(this,"brief");F(this,"upgrade");F(this,"end");F(this,"pause");F(this,"upgradeBody");F(this,"endBody");F(this,"lastValues",new Map);F(this,"restartCb",null);F(this,"advanceCb",null);this.root=document.getElementById("hud-root");const e=et("topbar",this.root),n=et("signal",e);et("sig-label",n,"Rescue Signal");const i=et("bar",n);this.progressFill=et("fill green",i),this.progressText=et("sig-pct mono",n,"0.0%"),this.waveChip=et("chip",e,"STANDBY");const r=et("chip heat",e);et("chip-label",r,"Transmitter");const o=et("mini-bar",r);this.heatFill=et("fill amber",o),this.heatChip=r,this.lightChip=et("chip",e,"Searchlight ○"),this.rankChip=et("chip",e,"RANK 1"),this.mapChip=et("chip",e,"ALPINE PASS");const a=et("crosshair",this.root);this.cross=a;for(const v of["tick up","tick down","tick left","tick right"])this.crossTicks.push(et(v,a));et("cross-dot",a),this.hitLayer=et("hit-layer",this.root),this.vignette=et("vignette",this.root),this.prompt=et("prompt",this.root),this.prompt.style.display="none",this.promptRing=et("hold-ring",this.prompt),this.promptKey=et("key",this.prompt,"F"),this.promptLabel=et("prompt-label",this.prompt,""),this.dock=et("dock",this.root);const c=et("vitals",this.dock),l=et("meter",c);et("meter-label",l,"HP");const h=et("bar",l);this.hpFill=et("fill green",h),this.hpText=et("meter-num mono",l,"100");const u=et("meter",c);et("meter-label",u,"Armor");const f=et("bar",u);this.armorFill=et("fill cyan",f),this.armorText=et("meter-num mono",u,"25");const p=et("weapon-block",this.dock);this.weaponName=et("weapon-name",p,"M9 Tactical Pistol");const g=et("ammo",p);this.ammoMag=et("ammo-mag mono",g,"12"),et("ammo-sep",g,"/"),this.ammoReserve=et("ammo-reserve mono",g,"96"),this.reloadHint=et("reload-hint",p,"Reloading…"),this.reloadHint.style.display="none";const _=et("dock-right",this.dock);et("credits-label",_,"Tactical credits"),this.creditsText=et("credits mono",_,"0"),et("hints",_,"WASD Move · Shift Sprint · Q/E Lean · RMB Aim · R Reload · B Bench · T Searchlight · H Dock"),this.banner=et("banner",this.root),this.banner.style.display="none",this.bannerTitle=et("banner-title",this.banner,""),this.bannerSub=et("banner-sub",this.banner,""),this.brief=et("overlay",this.root);const m=et("card",this.brief);et("card-kicker",m,"OUTPOST ZERO // SIGNAL HOLD"),et("card-title",m,"Alpine Radio Outpost · Night Defense"),et("card-body",m,"Elevation 3,800 m. The transmitter is ready — once the distress uplink to the orbital satellite begins, its raw electromagnetic radiation will draw a swarm of rogue combat drones out of the valley. Hold the outpost through five waves, manage transmitter overheat crises, and keep the uplink running until it reaches 100%.");const d=et("keygrid",m),x=[["WASD / Shift","Move · Sprint"],["Q / E","Lean at cover"],["LMB / RMB","Fire / Precision aim"],["1 / 2 / 3 / 4 · Wheel","Pistol / Rifle / Shotgun / Vulcan SAM"],["F","Repair · Resupply · Airdrop · Searchlight"],["B","Weapon mod bench"],["T · H","Searchlight on/off · Collapse dock"]];for(const[v,S]of x){const I=et("keyrow",d);et("k mono",I,v),et("v",I,S)}et("map-blurb",m,"Five-hold campaign. Clear a level and your rank, upgrades, credits and hardened vitals carry forward to the next — the swarm gets heavier and stranger with every map. You only re-deploy from Level 1 if the line collapses.");const M=et("level-list",m);hn.forEach((v,S)=>{const I=et(`lv-row${S===0?"":" locked"}`,M);et("lv-title mono",I,`LEVEL ${S+1} · ${v.name}`),et("lv-sub",I,[v.timeOfDay,v.newThreats].filter(Boolean).join(" · ")||"Standard hostile mix")}),et("btn",m,`Deploy — LEVEL 1 · ${hn[0].name}`).addEventListener("click",()=>t.onStart()),this.upgrade=et("overlay",this.root),this.upgrade.style.display="none";const C=et("card wide",this.upgrade);et("card-kicker",C,"TACTICAL WORKBENCH"),et("card-title",C,"Weapon Mod Bench"),this.upgradeBody=et("upgrade-body",C),et("btn",C,"Back to the line (B)").addEventListener("click",()=>t.onCloseUpgrade()),this.end=et("overlay",this.root),this.end.style.display="none";const R=et("card",this.end);this.endBody=R,this.pause=et("overlay translucent",this.root),this.pause.style.display="none";const N=et("card small",this.pause);et("card-title",N,"Paused"),et("card-body",N,"Pointer released. Click to resume combat."),this.pause.addEventListener("click",()=>t.onResume())}set(t,e,n){this.lastValues.get(t)!==n&&(this.lastValues.set(t,n),e.textContent=n)}setTop(t){const e=t.progress.toFixed(1);this.progressFill.style.width=`${t.progress}%`,this.set("prog",this.progressText,`${e}%`),this.set("wave",this.waveChip,t.wave>0?`Wave ${t.wave}`:"STANDBY"),this.heatFill.style.width=`${t.heat}%`,this.heatFill.className=`fill ${t.overheated||t.heat>70?"red":"amber"}`,this.set("heat",this.heatChip.querySelector(".chip-label"),t.overheated?"OVERHEAT":"Transmitter"),this.heatChip.classList.toggle("danger",t.overheated);const n=t.searchlightOn?"Searchlight ●":t.searchlightCooldownUntil>t.time?"Searchlight ⚡ overload":"Searchlight ○";this.set("sl",this.lightChip,n),this.lightChip.classList.toggle("lit",t.searchlightOn),this.set("rank",this.rankChip,`RANK ${t.level}`),this.rankChip.classList.toggle("gold",t.level>1)}setMap(t){this.set("map",this.mapChip,t)}setWeapon(t,e,n,i,r=1){const o=ir(r);this.set("wname",this.weaponName,o>0?`${de[t].name} Mk ${["I","II","III"][o-1]}`:de[t].name),this.set("mag",this.ammoMag,`${e}`),this.set("res",this.ammoReserve,`${n}`),this.ammoMag.classList.toggle("low",e===0),this.reloadHint.style.display=i?"block":"none"}setVitals(t,e,n,i=100){const r=Math.max(0,Math.min(100,t/i*100));this.hpFill.style.width=`${r}%`,this.hpFill.className=`fill ${r>50?"green":r>25?"amber":"red"}`,this.set("hp",this.hpText,`${Math.ceil(t)}`),this.armorFill.style.width=`${e/50*100}%`,this.set("armor",this.armorText,`${Math.ceil(e)}`),this.set("credits",this.creditsText,`${n}`)}setCrosshairSpread(t){const e=5+t,n=this.crossTicks;n[0].style.transform=`translateY(-${e}px)`,n[1].style.transform=`translateY(${e}px)`,n[2].style.transform=`translateX(-${e}px)`,n[3].style.transform=`translateX(${e}px)`,this.cross.classList.toggle("hidden",t<-100)}flashHit(t,e){const n=t-e,i=et("hit-arc",this.hitLayer);i.style.transform=`rotate(${n*180/Math.PI}deg)`,setTimeout(()=>i.remove(),900)}flashDamage(t){this.vignette.style.opacity=String(Math.min(.85,.25+t/60)),setTimeout(()=>this.vignette.style.opacity="0",140)}setInteract(t,e){if(!t){this.prompt.style.display="none";return}this.prompt.style.display="flex",this.promptLabel.textContent=t,this.promptRing.style.background=e>0?`conic-gradient(#f59e0b ${e*360}deg, rgba(255,255,255,0.15) 0deg)`:"conic-gradient(rgba(255,255,255,0.15) 360deg, rgba(255,255,255,0.15) 0deg)"}banner_show(t,e){this.bannerTitle.textContent=t,this.bannerSub.textContent=e,this.banner.style.display="block",this.banner.classList.remove("fade"),this.banner.offsetWidth,setTimeout(()=>this.banner.classList.add("fade"),2400),setTimeout(()=>this.banner.style.display="none",3200)}setPhase(t){this.brief.style.display=t==="brief"?"flex":"none",this.upgrade.style.display=t==="upgrade"?"flex":"none",this.end.style.display=t==="won"||t==="lost"?"flex":"none"}showPause(t){this.pause.style.display=t?"flex":"none"}toggleDock(){this.dock.classList.toggle("collapsed")}renderUpgrade(t,e,n,i=!1){this.upgradeBody.textContent="",et("upgrade-credits mono",this.upgradeBody,`Credits on hand: ${t}`);const r=i?["pistol","rifle","shotgun","launcher"]:["pistol","rifle","shotgun"];for(const o of r){const a=et("up-row",this.upgradeBody);et("up-weapon",a,mg[o]);const c=et("up-tracks",a);for(const l of pg){const h=et("up-cell",c);et("up-track-name",h,l.label);const u=et("up-pips",h),f=e[o].levels[l.key];for(let p=0;p<us.maxLevel;p++){const g=et("pip",u);p<f&&g.classList.add("on")}if(f<us.maxLevel){const p=us.cost(f),g=document.createElement("button");g.className="up-buy mono",g.textContent=`Upgrade ${p}`,g.disabled=t<p,g.addEventListener("click",()=>n(o,l.key)),h.appendChild(g)}else et("up-max mono",h,"MAX")}}}showEnd(t,e,n,i){this.endBody.textContent="",et("card-kicker",this.endBody,t?"RESCUE INBOUND":"SIGNAL LOST"),et("card-title",this.endBody,t?"Rescue arrived — signal complete":"Outpost lost"),t||et("card-body",this.endBody,e.endReason);const r=e.stats,o=Math.max(1,r.pelletsFired),a=Math.round(r.pelletsHit/o*100),c=Math.floor(n/60),l=Math.floor(n%60),h=t?a>=45&&e.stats.kills.heavy>=5&&e.progress>=100?"S":a>=30?"A":"B":"F",u=et("statgrid",this.endBody),f=[["Grade",h],["Rank reached",`${e.level}`],["Final progress",`${e.progress.toFixed(1)}%`],["Waves held",`${Math.max(1,e.wave)} / 5`],["Time survived",`${c}:${String(l).padStart(2,"0")}`],["Scouts downed",`${r.kills.scout}`],["Heavies downed",`${r.kills.heavy}`],["Kamikazes downed",`${r.kills.kamikaze}`],["Accuracy",`${a}%`],["Overheat crises",`${r.overheatEvents} / repairs ${r.repairs}`]];(r.kills.warden>0||r.kills.bomber>0)&&f.push(["Wardens downed",`${r.kills.warden}`],["Bombers downed",`${r.kills.bomber}`]),(r.kills.crawler>0||r.kills.colossus>0)&&f.push(["Crawlers downed",`${r.kills.crawler}`],["Colossi downed",`${r.kills.colossus}`]);for(const[p,g]of f){const _=et("statrow",u);et("k",_,p),et("v mono",_,g)}t&&i?(et("btn",this.endBody,`ADVANCE — ${i}`).addEventListener("click",()=>{var _;return(_=this.advanceCb)==null?void 0:_.call(this)}),et("btn ghost",this.endBody,"Restart campaign from Level 1").addEventListener("click",()=>{var _;return(_=this.restartCb)==null?void 0:_.call(this)})):et("btn",this.endBody,t?"Campaign complete — redeploy":"Redeploy").addEventListener("click",()=>{var g;return(g=this.restartCb)==null?void 0:g.call(this)})}}const _g=12;class Ro{constructor(){F(this,"engine");F(this,"lightRig");F(this,"frameGaps",[]);F(this,"audio",new T0);F(this,"mission");F(this,"player",O0());F(this,"runtimes",B0());F(this,"controller");F(this,"weapons");F(this,"drones");F(this,"effects");F(this,"weather");F(this,"waves");F(this,"interact");F(this,"hud");F(this,"outpost");F(this,"mapRuntimes");F(this,"levelIdx",0);F(this,"staticProxies",[]);F(this,"groundMesh");F(this,"rockets",[]);F(this,"rocketGeo",new Ze(.09,.5,6));F(this,"rocketMat",new Ye({color:new it("#ffd9a0"),blending:Qe,transparent:!0,fog:!1}));F(this,"rocketPool",[]);F(this,"rocketFree",[]);F(this,"firingHeld",!1);F(this,"firePressedEdge",!1);F(this,"fHeld",!1);F(this,"fPressedEdge",!1);F(this,"holdConsole",0);F(this,"focus",null);F(this,"paused",!1);F(this,"empTimer",-1);F(this,"endShown",!1);this.engine=new b0(document.getElementById("viewport"));const t=this.engine.scene;this.mission=z0(),this.effects=new un(t),this.weather=new dg(t),this.drones=new Ni(t,{onPlayerHit:(o,a)=>this.damagePlayer(o,a),onExplosion:(o,a,c)=>this.onDroneExplosion(o,a,c),onLaser:(o,a)=>this.effects.tracer(o,a,"#ff5a4a",.1),onBeep:o=>this.audio.proximityBeep(o)});const e={alpine:A0,canyon:C0,rail:P0,dam:L0,crater:D0};this.mapRuntimes=hn.map((o,a)=>this.makeMapRuntime(a,e[o.id](t),N0(t,o.layout))),this.outpost=this.mapRuntimes[0].outpost,this.waves=this.mapRuntimes[0].waves,this.staticProxies=this.mapRuntimes[0].proxies,this.groundMesh=this.mapRuntimes[0].ground,this.controller=new F0(this.engine.camera,this.mapRuntimes[0].colliders,this.player),this.weapons=new W0(this.engine.camera,this.runtimes,this.audio),this.interact=new Ec(this.outpost.interactables),this.engine.setAmbience(hn[0].ambience),this.lightRig=new R0(t,w0),console.log(`[lights] ${this.lightRig.collect()} fixtures -> pool of ${this.lightRig.budget}`);for(let o=0;o<_g;o++){const a=new z(this.rocketGeo,this.rocketMat);a.visible=!1,t.add(a),this.rocketPool.push(a),this.rocketFree.push(o)}const n=performance.now();this.warmHostiles(),this.prewarmMaterials(),window.__bootTimings={warmHostiles:Math.round(performance.now()-n)},this.hud=new gg({onStart:()=>this.startLevel(0),onBuy:(o,a)=>this.buyUpgrade(o,a),onCloseUpgrade:()=>this.closeUpgrade(),onRestart:()=>location.reload(),onResume:()=>this.requestLock()}),this.hud.restartCb=()=>location.reload(),this.hud.setPhase("brief"),this.bindInput(),window.__outpost=this.debugHooks();let i=performance.now();const r=o=>{this.frameGaps.push(o-i),this.frameGaps.length>240&&this.frameGaps.shift();const a=Math.min(.05,(o-i)/1e3);i=o,this.update(a),requestAnimationFrame(r)};requestAnimationFrame(r)}warmHostiles(){const t=["scout","heavy","kamikaze","warden","bomber","crawler","colossus"],e=this.drones.drones.length,n=this.engine.camera,i=new A;n.getWorldDirection(i),t.forEach((a,c)=>{const l=(c-(t.length-1)/2)*.3,h=n.position.clone().addScaledVector(i,24).add(new A(-i.z*Math.sin(l)*24,7+c*1.4,i.x*Math.sin(l)*24));this.drones.spawn(a,h)});const r=[],o=[];this.engine.scene.traverse(a=>{a.visible||(a.visible=!0,r.push(a)),a.frustumCulled&&(a.frustumCulled=!1,o.push(a))}),this.engine.renderer.compile(this.engine.scene,n),this.engine.render(),this.engine.render();for(const a of o)a.frustumCulled=!0;for(const a of r)a.visible=!1;for(const a of this.drones.drones.slice(e))this.engine.scene.remove(a.group);this.drones.drones.length=e,console.log(`[warm] ${t.length} hostile kinds built, rendered once, removed`)}prewarmMaterials(){this.engine.renderer.compile(this.engine.scene,this.engine.camera)}makeMapRuntime(t,e,n){const i=new jt;i.add(e.group,n.root),this.engine.scene.add(i);const r=[...e.colliders,...n.colliders],o=[],a=new Ye({visible:!1});for(const l of r){const h=l.top,u=l.kind==="box"?new pt(l.hx*2,h,l.hz*2):new Jt(l.r,l.r,h,8),f=new z(u,a);f.position.set(l.x,h/2,l.z),f.userData={part:"world"},i.add(f),o.push(f)}i.visible=t===0;const c=new fg(this.engine.scene,this.drones,r,hn[t].waves,e.spawnAngle);return{group:i,ground:e.ground,colliders:r,proxies:o,outpost:n,waves:c}}startLevel(t){const e=hn[t],n=this.mission;n.time=0,n.progress=0,n.wave=0,n.heat=0,n.overheated=!1,n.blizzard=.25,n.searchlightOn=!1,n.searchlightRuntime=0,n.searchlightCooldownUntil=0,n.endReason="",n.phase="brief",this.holdConsole=0,this.levelIdx=t,this.endShown=!1,this.empTimer=-1,this.clearRockets(),this.mapRuntimes.forEach((r,o)=>r.group.visible=o===t);const i=this.mapRuntimes[t];this.outpost=i.outpost,this.waves=i.waves,this.staticProxies=i.proxies,this.groundMesh=i.ground,this.interact=new Ec(this.outpost.interactables),this.controller.setColliders(i.colliders),this.drones.setColliders(i.colliders),this.drones.setMods(e.hpMul,e.dmgMul),this.drones.clearHostiles(),this.engine.setAmbience(e.ambience),e.launcherUnlock&&this.weapons.locked.has("launcher")&&(this.weapons.unlock("launcher"),this.hud.banner_show("Vulcan SAM acquired","Press 4 — shoulder-fired homing missile; resupply at ammo racks")),this.player.pos.set(0,0,10),this.player.health=this.player.maxHealth,this.player.armor=ge.maxArmor;for(const r of Object.keys(this.runtimes)){const o=this.runtimes[r];o.mag=$s(r,o.levels,n.level).magSize,o.reserve=de[r].reserveMax}this.weapons.autoLevel=n.level,this.weapons.locked.has(this.weapons.current)&&this.weapons.switchTo("pistol"),this.hud.setMap(`L${t+1} · ${e.name}`),this.audio.init(),this.audio.resume(),n.phase="playing",this.hud.setPhase("playing"),this.hud.banner_show(`LEVEL ${t+1} — ${e.name}`,`${e.timeOfDay} · ${e.blurb}`),this.requestLock()}advance(){this.levelIdx>=hn.length-1||this.startLevel(this.levelIdx+1)}requestLock(){var e;this.paused=!1,this.hud.showPause(!1);const t=this.engine.renderer.domElement;if(document.pointerLockElement!==t)try{const n=(e=t.requestPointerLock)==null?void 0:e.call(t);n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}this.audio.resume()}restart(){location.reload()}bindInput(){const t=this.engine.renderer.domElement;document.addEventListener("pointerlockchange",()=>{const e=document.pointerLockElement===t;!e&&this.mission.phase==="playing"?(this.paused=!0,this.hud.showPause(!0)):e&&(this.paused=!1,this.hud.showPause(!1))}),document.addEventListener("mousemove",e=>{document.pointerLockElement===t&&this.controller.onMouseMove(e.movementX,e.movementY)}),t.addEventListener("mousedown",e=>{if(document.pointerLockElement!==t){this.mission.phase==="playing"&&this.requestLock();return}e.button===0&&(this.firingHeld=!0,this.firePressedEdge=!0),e.button===2&&(this.controller.adsHeld=!0)}),document.addEventListener("mouseup",e=>{e.button===0&&(this.firingHeld=!1),e.button===2&&(this.controller.adsHeld=!1)}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("wheel",e=>{this.mission.phase==="playing"&&this.weapons.cycle(e.deltaY>0?1:-1)}),document.addEventListener("keydown",e=>{if(e.repeat){this.controller.onKey(e.code,!0);return}switch(this.controller.onKey(e.code,!0),e.code){case"Digit1":this.weapons.switchTo("pistol");break;case"Digit2":this.weapons.switchTo("rifle");break;case"Digit3":this.weapons.switchTo("shotgun");break;case"Digit4":this.weapons.switchTo("launcher");break;case"KeyR":this.weapons.startReload();break;case"KeyF":this.fHeld=!0,this.fPressedEdge=!0;break;case"KeyB":this.mission.phase==="playing"?this.openUpgrade():this.mission.phase==="upgrade"&&this.closeUpgrade();break;case"KeyH":this.hud.toggleDock();break;case"KeyT":this.mission.phase==="playing"&&this.toggleSearchlight();break}}),document.addEventListener("keyup",e=>{this.controller.onKey(e.code,!1),e.code==="KeyF"&&(this.fHeld=!1)})}openUpgrade(){var t;this.mission.phase="upgrade",this.hud.setPhase("upgrade"),this.renderUpgradePanel(),(t=document.exitPointerLock)==null||t.call(document)}closeUpgrade(){this.mission.phase="playing",this.hud.setPhase("playing"),this.requestLock()}renderUpgradePanel(){this.hud.renderUpgrade(this.player.credits,this.runtimes,(t,e)=>this.buyUpgrade(t,e),!this.weapons.locked.has("launcher"))}buyUpgrade(t,e){const n=this.runtimes[t].levels,i=n[e];if(i>=us.maxLevel)return;const r=us.cost(i);this.player.credits<r||(this.player.credits-=r,n[e]=i+1,this.audio.pickup(),this.renderUpgradePanel())}addScore(t){const e=this.mission;for(e.score+=t;e.level<gn.maxLevel&&e.score>=gn.thresholds[e.level];){e.level+=1;const n=this.player;n.maxHealth+=gn.hpPerLevel,n.health=Math.min(n.maxHealth,n.health+gn.healOnLevelUp),this.weapons.autoLevel=e.level,this.audio.levelUp();const i=ir(e.level),r=ir(e.level-1);let o=`Max HP ${n.maxHealth} (+${gn.hpPerLevel}) · Healed +${gn.healOnLevelUp} · Damage +${(e.level-1)*gn.damagePerLevel*100|0}% · Fire rate up`;i>r&&(o+=` · All weapons Mk ${["I","II","III"][i-1]} unlocked`),this.hud.banner_show(`RANK ${e.level}`,o)}}fire(){const t=this.weapons.tryFire(this.player,this.controller.planarSpeed()>1.5);if(t){if(this.mission.stats.shotsFired+=1,this.mission.stats.pelletsFired+=t.dirs.length,this.weapons.current==="launcher"){const e=t.dirs[0],n=this.takeRocketSlot(),i=this.rocketPool[n];i.position.copy(t.muzzleWorld),i.quaternion.setFromUnitVectors(new A(0,1,0),e),i.visible=!0,this.rockets.push({slot:n,mesh:i,vel:e.clone().multiplyScalar(mn.speed),life:8,direct:t.damage}),this.effects.flash(t.muzzleWorld,"#ffb27f",26,6,.12)}else{const e=this.engine.camera.position,n=new dc,i=[...this.drones.hitMeshes(),...this.staticProxies,this.groundMesh];for(const r of t.dirs){n.set(e,r),n.far=t.range;const a=n.intersectObjects(i,!1)[0];if(a){const c=a.object.userData,l=a.point;this.effects.tracer(t.muzzleWorld,l,"#ffd27f",.06),c.drone&&c.part?(this.drones.applyDamage(c.drone,c.part,t.damage),this.mission.stats.pelletsHit+=1,c.part==="shield"?(this.effects.shieldRipple(l),this.audio.shieldZap()):(this.effects.sparks(l,c.part==="weak"?"red":"amber",6),this.audio.hitTick())):c.part==="world"?this.effects.sparks(l,"amber",3):this.effects.sparks(l,"amber",2)}else{const c=e.clone().addScaledVector(r,t.range);this.effects.tracer(t.muzzleWorld,c,"#ffd27f",.06)}}}this.controller.addRecoil(_e.degToRad(de[this.weapons.current].recoilPitchDeg),_e.degToRad(de[this.weapons.current].recoilYawDeg)),this.controller.addTrauma(this.weapons.current==="shotgun"?.35:this.weapons.current==="launcher"?.4:.12)}}clearRockets(){for(const t of this.rockets)t.mesh.visible=!1,this.rocketFree.push(t.slot);this.rockets.length=0}takeRocketSlot(){const t=this.rocketFree.pop();if(t!==void 0)return t;const e=this.rockets.shift();return e.mesh.visible=!1,this.rocketFree.push(e.slot),this.rocketFree.pop()}static pointSegDist(t,e,n){const i=n.clone().sub(e),r=i.lengthSq(),o=r<=1e-9?0:_e.clamp(t.clone().sub(e).dot(i)/r,0,1);return e.clone().addScaledVector(i,o).distanceTo(t)}solidWorldPoint(t){for(const e of this.mapRuntimes[this.levelIdx].colliders)if(!(t.y>=e.top)){if(e.kind==="cyl"){if(Math.hypot(t.x-e.x,t.z-e.z)<e.r)return!0}else if(Math.abs(t.x-e.x)<e.hx&&Math.abs(t.z-e.z)<e.hz)return!0}return!1}detonateRocket(t,e){this.effects.explosion(t,1.7),this.audio.explosion(),this.controller.addTrauma(.3);const n=e*mn.blastMult;for(const i of[...this.drones.drones]){if(i.dying)continue;const r=i.group.position.distanceTo(t);if(r>mn.blastRadius+i.radius)continue;const o=Math.max(0,1-Math.max(0,r-i.radius)/mn.blastRadius),a=r<i.radius+mn.fuseRadius?e:0;this.drones.applyDamage(i,"body",a+n*o)}}updateRockets(t){for(let e=this.rockets.length-1;e>=0;e--){const n=this.rockets[e],i=n.mesh.position.clone();let r=null,o=1/0;const a=n.vel.clone().normalize(),c=Math.cos(_e.degToRad(mn.lockConeDeg));for(const u of this.drones.drones){if(u.dying)continue;const f=u.group.position.clone().sub(n.mesh.position),p=f.length();p>120||p>=o||p>4&&f.normalize().dot(a)<c||(r=u,o=p)}if(r){const u=r.group.position.clone().sub(n.mesh.position).normalize().multiplyScalar(mn.speed);n.vel.lerp(u,Math.min(1,t*mn.turnRate))}n.vel.setLength(mn.speed),n.mesh.position.addScaledVector(n.vel,t),n.mesh.quaternion.setFromUnitVectors(new A(0,1,0),n.vel.clone().normalize()),n.life-=t,this.effects.tracer(i,n.mesh.position,"#ffb27f",.05);const l=n.mesh.position;let h=!1;for(const u of this.drones.drones)if(!u.dying&&Ro.pointSegDist(u.group.position,i,l)<u.radius+mn.fuseRadius){h=!0;break}(l.y<.15||this.solidWorldPoint(l)||n.life<=0)&&(h=!0),h&&(this.detonateRocket(l.clone(),n.direct),n.mesh.visible=!1,this.rocketFree.push(n.slot),this.rockets.splice(e,1))}}onDroneExplosion(t,e,n){if(this.effects.explosion(t,e==="heavy"||e==="colossus"?1.5:e==="kamikaze"||e==="bomber"?1.4:.9),this.audio.explosion(),n){const a=lo[e].credits;this.player.credits+=a,this.mission.stats.kills[e]+=1,this.addScore(a);return}const i=hn[this.levelIdx].dmgMul;if(e==="bomber"){const a=this.player.pos.distanceTo(t);a<rs.radius&&this.damagePlayer(Math.round(rs.maxDamage*i*Math.max(0,1-a/rs.radius)),t),this.outpost.towerPos.distanceTo(t)<rs.towerRadius&&(this.mission.heat+=rs.towerHeat);return}const r=this.player.pos.distanceTo(t);r<6&&this.damagePlayer(Math.round(76*i*Math.max(0,1-r/6)),t),this.outpost.towerPos.distanceTo(t)<7&&(this.mission.heat+=me.kamikazeTowerHeat)}damagePlayer(t,e){if(t<=0||this.mission.phase!=="playing")return;const n=this.player;if(n.armor>0){const o=Math.min(n.armor,t*.6);n.armor-=o,n.health-=t-o}else n.health-=t;this.controller.addTrauma(.5),this.hud.flashDamage(t);const i=Math.atan2(e.x-n.pos.x,e.z-n.pos.z),r=Math.atan2(-Math.sin(n.yaw),-Math.cos(n.yaw));this.hud.flashHit(i,r),n.health<=0&&this.defeat("Vitals flatlined — the outpost line has collapsed")}defeat(t){var e;this.mission.phase==="won"||this.mission.phase==="lost"||(this.mission.phase="lost",this.mission.endReason=t,this.audio.setAlarm(!1),this.audio.defeat(),(e=document.exitPointerLock)==null||e.call(document),this.hud.setInteract(null,0),this.hud.setPhase("lost"),this.hud.showEnd(!1,this.mission,this.mission.time),this.hud.restartCb=()=>location.reload())}toggleSearchlight(){const t=this.mission;if(t.searchlightOn)t.searchlightOn=!1;else{if(t.time<t.searchlightCooldownUntil)return;t.searchlightOn=!0}this.audio.uiClick()}refillAllAmmo(){for(const t of Object.keys(this.runtimes))this.runtimes[t].reserve=de[t].reserveMax}doInteract(t){var e;switch(t.kind){case"ammo":{if(Object.keys(this.runtimes).every(i=>this.runtimes[i].reserve>=de[i].reserveMax)){this.hud.banner_show("Ammo station","All reserves already full — rack stands by");break}this.refillAllAmmo(),t.readyAt=this.mission.time+me.ammoStationCooldown,this.audio.pickup();break}case"medkit":{if(this.player.health>=this.player.maxHealth-.5&&this.player.armor>=ge.maxArmor-.5){this.hud.banner_show("Med station","Already at full vitals — station stands by");break}this.player.health=Math.min(this.player.maxHealth,this.player.health+me.medHeal),this.player.armor=Math.min(ge.maxArmor,this.player.armor+me.medArmor),t.readyAt=this.mission.time+me.medStationCooldown,this.audio.pickup();break}case"airdrop":{this.refillAllAmmo(),this.player.health=this.player.maxHealth,this.player.armor=ge.maxArmor,this.player.credits+=40,this.mission.stats.airdrops+=1,this.audio.pickup(),(e=t.remove)==null||e.call(t);break}case"workbench":this.openUpgrade();break;case"searchlight":this.toggleSearchlight();break}}victory(){this.mission.phase==="playing"&&(this.mission.phase="playing",this.empTimer=0,this.drones.killAll(),this.effects.triggerEmp(this.outpost.towerPos),this.audio.setAlarm(!1),this.audio.fanfare())}finishWin(){var e;this.mission.phase="won",(e=document.exitPointerLock)==null||e.call(document),this.hud.setInteract(null,0),this.hud.setPhase("won");const t=hn[this.levelIdx+1];this.hud.showEnd(!0,this.mission,this.mission.time,t?`LEVEL ${this.levelIdx+2} · ${t.name}`:void 0),this.hud.restartCb=()=>location.reload(),this.hud.advanceCb=t?()=>this.advance():null}update(t,e=!0){this.lightRig.update(this.engine.camera.position);const n=this.mission,i=n.phase==="playing"&&!this.paused;if(n.phase==="upgrade"){this.effects.update(t),e&&this.engine.render();return}if(i){if(n.time+=t,this.controller.update(t),this.weapons.update(t),this.engine.camera.userData.adsEase=this.player.ads,this.firingHeld&&(de[this.weapons.current].auto||this.firePressedEdge)&&this.fire(),this.empTimer<0){const f=n.overheated?0:this.waves.spawning?me.waveSignalRate:me.baseSignalRate;n.progress=Math.min(100,n.progress+f*t),n.overheated?n.heat=Math.max(me.overheatCoolTo-4,n.heat-me.heatCool*.6*t):(n.heat=Math.min(me.overheatAt,n.heat+(me.heatGain-me.heatCool)*t),n.heat>=me.overheatAt&&(n.overheated=!0,n.stats.overheatEvents+=1,this.audio.setAlarm(!0),this.hud.banner_show("Transmitter overheated","Uplink stalled — get to the console and hold F to repair"))),n.wave=this.waves.waveForProgress(n.progress),this.waves.waveBanner&&(this.hud.banner_show(this.waves.waveBanner.title,this.waves.waveBanner.sub),this.waves.waveBanner=null),this.waves.update(t,n.progress),this.waves.updateAirdrops(t,p=>this.interact.add(p),p=>this.interact.remove(p))}n.searchlightOn?(n.searchlightRuntime+=t,n.searchlightRuntime>=me.searchlightOverloadTime&&(n.searchlightOn=!1,n.searchlightRuntime=0,n.searchlightCooldownUntil=n.time+me.searchlightCooldown,this.hud.banner_show("Searchlight overloaded","Breaker cooling — try again later"))):n.searchlightRuntime=0;const l=[];for(const f of this.drones.drones)f.dying||(n.searchlightOn&&this.outpost.searchlight.isInBeam(f.group.position)?f.spotted=!0:f.spotted=!1,l.push(f.group.position));this.outpost.searchlight.update(t,n.time,l,n.searchlightOn),this.drones.update(t,n.time,this.player.pos,this.outpost.towerPos,!0),this.updateRockets(t);const h=this.engine.camera.getWorldDirection(new A);this.focus=this.interact.findFocus(this.engine.camera.position,h,ge.interactRange,n.time);let u=0;this.focus?this.focus.kind==="console"?n.overheated&&this.fHeld?(this.holdConsole+=t/me.overheatRestartHold,u=this.holdConsole,this.holdConsole>=1&&(n.overheated=!1,n.heat=me.overheatCoolTo,n.stats.repairs+=1,this.holdConsole=0,this.audio.setAlarm(!1),this.audio.repairDone(),this.hud.banner_show("Transmitter rebooted","Signal uplink restored"))):n.overheated||(this.holdConsole=0):this.fPressedEdge&&this.doInteract(this.focus):this.holdConsole=0,this.hud.setInteract(this.focus?this.focus.kind==="console"&&!n.overheated?"Transmitter nominal":this.focus.kind==="console"?"Hold F to repair & reboot":this.focus.label:null,u),n.blizzard=_e.clamp(.22+n.wave*.15+.08*Math.sin(n.time*.11),.1,1),n.progress>=100&&this.empTimer<0&&this.victory(),this.fPressedEdge&&(this.fPressedEdge=!1)}this.empTimer>=0&&(this.empTimer+=t,this.drones.update(t,n.time,this.player.pos,this.outpost.towerPos,!1),this.empTimer>3.2&&!this.endShown&&(this.endShown=!0,this.finishWin())),this.outpost.update(t,n.time),this.outpost.setSignalVisuals(n.progress,n.heat,n.overheated),this.weather.update(t,n.time,this.engine.camera.position,n.blizzard),this.engine.setFog(n.blizzard),this.audio.setWind(n.blizzard),this.audio.setDroneHum(this.drones.activeCount()),this.effects.update(t);for(const l of this.waves.airdrops)!l.landed&&!l.opened&&this.effects.smokePlume(l.pod.position,t);this.hud.setTop(n);const r=this.runtimes[this.weapons.current];this.hud.setWeapon(this.weapons.current,r.mag,r.reserve,this.weapons.reloadTimer>0,this.mission.level),this.hud.setVitals(Math.max(0,this.player.health),this.player.armor,this.player.credits,this.player.maxHealth);const o=de[this.weapons.current].spreadDeg*(1-this.player.ads)+de[this.weapons.current].adsSpreadDeg*this.player.ads,a=this.controller.planarSpeed()>1.5?1.6:0,c=this.weapons.cooldown>0?2:0;this.hud.setCrosshairSpread(o*9*(1+a)+c),this.firePressedEdge=!1,e&&this.engine.render()}debugHooks(){return{mission:this.mission,player:this.player,runtimes:this.runtimes,drones:this.drones,weapons:this.weapons,spawn:(t,e=30,n=0)=>this.drones.spawn(t,new A(Math.cos(n)*e,t==="crawler"?.6:4,Math.sin(n)*e)),setProgress:t=>{this.mission.progress=t},addScore:t=>this.addScore(t),damagePlayer:t=>this.damagePlayer(t,new A(10,2,0)),openUpgrade:()=>this.openUpgrade(),closeUpgrade:()=>this.closeUpgrade(),win:()=>this.victory(),start:()=>this.startLevel(0),startLevel:t=>this.startLevel(t),advance:()=>this.advance(),currentLevel:()=>{const t=hn[this.levelIdx];return{idx:this.levelIdx,id:t.id,name:t.name,hpMul:t.hpMul,dmgMul:t.dmgMul,launcherUnlock:t.launcherUnlock}},activeMap:()=>hn[this.levelIdx].id,prof:(t=!1)=>{var a;const e=[...this.frameGaps].sort((c,l)=>c-l),n=c=>e.length?e[Math.min(e.length-1,Math.floor(e.length*c))]:0,i=e.length?e.reduce((c,l)=>c+l,0)/e.length:0,r=this.engine.renderer.info,o={samples:e.length,fps:i?+(1e3/i).toFixed(1):0,frameMS:{p50:+n(.5).toFixed(1),p90:+n(.9).toFixed(1),p99:+n(.99).toFixed(1),max:+n(.999).toFixed(1)},hitchesOver50ms:this.frameGaps.filter(c=>c>50).length,drawCalls:r.render.calls,programs:((a=r.programs)==null?void 0:a.length)??0,geometries:r.memory.geometries,textures:r.memory.textures,lights:this.lightRig.stats(),pixelRatio:this.engine.renderer.getPixelRatio()};return t&&(this.frameGaps.length=0),o},rig:()=>this.lightRig,lightRelease:()=>this.lightRig.release(),lightBudget:t=>(typeof t=="number"&&this.lightRig.setBudget(t),this.lightRig.stats()),mapGroupsVisible:()=>this.mapRuntimes.map(t=>t.group.visible),rockets:()=>this.rockets.length,spawnAt:(t,e,n,i)=>(this.drones.spawn(t,new A(e,n,i)),this.drones.drones.length-1),fire:()=>this.fire(),step:(t,e=!1)=>{this.paused=!1,this.update(Math.min(.05,t),e)},rayTest:()=>{const t=new dc,e=this.engine.camera.getWorldDirection(new A);t.set(this.engine.camera.position,e),t.far=200;const n=[...this.drones.hitMeshes(),...this.staticProxies,this.groundMesh],i=t.intersectObjects(n,!1);return{dir:{x:+e.x.toFixed(3),y:+e.y.toFixed(3),z:+e.z.toFixed(3)},hits:i.slice(0,4).map(r=>{var o;return{d:+r.distance.toFixed(2),part:String(r.object.userData.part??((o=r.object.userData)!=null&&o.drone?"drone":"?"))}})}},switchWeapon:t=>this.weapons.switchTo(t),searchlight:()=>this.toggleSearchlight(),look:(t,e)=>{this.player.yaw=t,this.player.pitch=e},teleport:(t,e)=>{this.player.pos.set(t,0,e)},setF:t=>{this.fHeld=t,t&&(this.fPressedEdge=!0)},focusId:()=>{var t;return((t=this.focus)==null?void 0:t.id)??null},airdropPos:()=>this.waves.airdrops.filter(t=>t.landed&&!t.opened).map(t=>({x:t.pos.x,z:t.pos.z})),airdropClearance:()=>{const t=this.mapRuntimes[this.levelIdx].colliders;return this.waves.airdrops.filter(e=>!e.opened).map(e=>{let n=999;for(const i of t){const r=i.kind==="cyl"?Math.hypot(e.pos.x-i.x,e.pos.z-i.z)-i.r:Math.max(Math.abs(e.pos.x-i.x)-i.hx,Math.abs(e.pos.z-i.z)-i.hz);r<n&&(n=r)}return+n.toFixed(2)})},finish:()=>this.finishWin()}}}window.addEventListener("DOMContentLoaded",()=>{new Ro});
