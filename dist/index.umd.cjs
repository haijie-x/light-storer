(function(g,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],m):(g=typeof globalThis<"u"?globalThis:g||self,m(g.lightStore={},g.React))})(this,function(g,m){"use strict";function Y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I={exports:{}},C={},x={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K;function k(){if(K)return j;K=1;var e=m;function S(n,o){return n===o&&(n!==0||1/n===1/o)||n!==n&&o!==o}var v=typeof Object.is=="function"?Object.is:S,L=e.useState,T=e.useEffect,p=e.useLayoutEffect,w=e.useDebugValue;function O(n,o){var a=o(),s=L({inst:{value:a,getSnapshot:o}}),c=s[0].inst,f=s[1];return p(function(){c.value=a,c.getSnapshot=o,h(c)&&f({inst:c})},[n,a,o]),T(function(){return h(c)&&f({inst:c}),n(function(){h(c)&&f({inst:c})})},[n]),w(a),a}function h(n){var o=n.getSnapshot;n=n.value;try{var a=o();return!v(n,a)}catch{return!0}}function d(n,o){return o()}var u=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?d:O;return j.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:u,j}var M={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U;function J(){return U||(U=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=m,S=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(i){{for(var t=arguments.length,_=new Array(t>1?t-1:0),r=1;r<t;r++)_[r-1]=arguments[r];L("error",i,_)}}function L(i,t,_){{var r=S.ReactDebugCurrentFrame,l=r.getStackAddendum();l!==""&&(t+="%s",_=_.concat([l]));var y=_.map(function(E){return String(E)});y.unshift("Warning: "+t),Function.prototype.apply.call(console[i],console,y)}}function T(i,t){return i===t&&(i!==0||1/i===1/t)||i!==i&&t!==t}var p=typeof Object.is=="function"?Object.is:T,w=e.useState,O=e.useEffect,h=e.useLayoutEffect,d=e.useDebugValue,u=!1,n=!1;function o(i,t,_){u||e.startTransition!==void 0&&(u=!0,v("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var r=t();if(!n){var l=t();p(r,l)||(v("The result of getSnapshot should be cached to avoid an infinite loop"),n=!0)}var y=w({inst:{value:r,getSnapshot:t}}),E=y[0].inst,D=y[1];return h(function(){E.value=r,E.getSnapshot=t,a(E)&&D({inst:E})},[i,r,t]),O(function(){a(E)&&D({inst:E});var G=function(){a(E)&&D({inst:E})};return i(G)},[i]),d(r),r}function a(i){var t=i.getSnapshot,_=i.value;try{var r=t();return!p(_,r)}catch{return!0}}function s(i,t,_){return t()}var c=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f=!c,A=f?s:o,R=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:A;M.useSyncExternalStore=R,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),M}var q;function z(){return q||(q=1,process.env.NODE_ENV==="production"?x.exports=k():x.exports=J()),x.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F;function Q(){if(F)return C;F=1;var e=m,S=z();function v(d,u){return d===u&&(d!==0||1/d===1/u)||d!==d&&u!==u}var L=typeof Object.is=="function"?Object.is:v,T=S.useSyncExternalStore,p=e.useRef,w=e.useEffect,O=e.useMemo,h=e.useDebugValue;return C.useSyncExternalStoreWithSelector=function(d,u,n,o,a){var s=p(null);if(s.current===null){var c={hasValue:!1,value:null};s.current=c}else c=s.current;s=O(function(){function A(r){if(!R){if(R=!0,i=r,r=o(r),a!==void 0&&c.hasValue){var l=c.value;if(a(l,r))return t=l}return t=r}if(l=t,L(i,r))return l;var y=o(r);return a!==void 0&&a(l,y)?l:(i=r,t=y)}var R=!1,i,t,_=n===void 0?null:n;return[function(){return A(u())},_===null?void 0:function(){return A(_())}]},[u,n,o,a]);var f=T(d,s[0],s[1]);return w(function(){c.hasValue=!0,c.value=f},[f]),h(f),f},C}var b={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P;function X(){return P||(P=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=m,S=z();function v(u,n){return u===n&&(u!==0||1/u===1/n)||u!==u&&n!==n}var L=typeof Object.is=="function"?Object.is:v,T=S.useSyncExternalStore,p=e.useRef,w=e.useEffect,O=e.useMemo,h=e.useDebugValue;function d(u,n,o,a,s){var c=p(null),f;c.current===null?(f={hasValue:!1,value:null},c.current=f):f=c.current;var A=O(function(){var _=!1,r,l,y=function(V){if(!_){_=!0,r=V;var B=a(V);if(s!==void 0&&f.hasValue){var W=f.value;if(s(W,B))return l=W,W}return l=B,B}var re=r,N=l;if(L(re,V))return N;var H=a(V);return s!==void 0&&s(N,H)?N:(r=V,l=H,H)},E=o===void 0?null:o,D=function(){return y(n())},G=E===null?void 0:function(){return y(E())};return[D,G]},[n,o,a,s]),R=A[0],i=A[1],t=T(u,R,i);return w(function(){f.hasValue=!0,f.value=t},[t]),h(t),t}b.useSyncExternalStoreWithSelector=d,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),b}process.env.NODE_ENV==="production"?I.exports=Q():I.exports=X();var Z=I.exports;const $=Y(Z),{useSyncExternalStoreWithSelector:ee}=$,te=e=>{const S=new Set,v=()=>p,L=O=>{const h=p,d=typeof O=="function"?O(p):O;Object.is(h,d)||(p=Object.assign({},h,d),S.forEach(u=>u==null?void 0:u()))},T=O=>(S.add(O),()=>S.delete(O));let p=e==null?void 0:e(v,L);return{state:p,setState:L,getState:v,subscribe:T}},ne=(e,S)=>{let v;return typeof m.useSyncExternalStore>"u"?(S=S??e.getState,v=ee(e.subscribe,e.getState,()=>window.__INIT_DATA__,S)):(S&&console.warn("Sorry to tell you, it does not support `selector` params. Because it use `useSyncExternalStore` api which is built in react v18+"),v=m.useSyncExternalStore(e.subscribe,e.getState,()=>window.__INIT_DATA__)),v};g.createStore=te,g.useStore=ne,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});