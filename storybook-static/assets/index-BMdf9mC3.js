import"./index-2yJIXLcc.js";import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{G as f,n as a,o as c,T as y,d as x}from"./createSimplePaletteValueFilter-FxfzK0sK.js";import{u as m}from"./useTheme-DsuocGr7.js";function S(t){return t==null||Object.keys(t).length===0}function b(t){const{styles:e,defaultTheme:o={}}=t,n=typeof e=="function"?s=>e(S(s)?o:s):e;return l.jsx(f,{styles:n})}function h({styles:t,themeId:e,defaultTheme:o={}}){const n=m(o),s=typeof t=="function"?t(e&&n[e]||n):t;return l.jsx(b,{styles:s})}const P=t=>{var n;const e={systemProps:{},otherProps:{}},o=((n=t==null?void 0:t.theme)==null?void 0:n.unstable_sxConfig)??c;return Object.keys(t).forEach(s=>{o[s]?e.systemProps[s]=t[s]:e.otherProps[s]=t[s]}),e};function g(t){const{sx:e,...o}=t,{systemProps:n,otherProps:s}=P(o);let r;return Array.isArray(e)?r=[n,...e]:typeof e=="function"?r=(...u)=>{const i=e(...u);return a(i)?{...n,...i}:n}:r={...n,...e},{...s,sx:r}}function d(t){return l.jsx(h,{...t,defaultTheme:x,themeId:y})}function C(t){return function(o){return l.jsx(d,{styles:typeof t=="function"?n=>t({theme:n,...o}):t})}}function O(){return g}export{g as e,C as g,O as i};
