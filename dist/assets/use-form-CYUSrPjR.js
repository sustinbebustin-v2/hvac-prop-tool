import{b as Ve,c as ge,j as pe,q as l,Y as Se}from"./index-o1jhjknc.js";import{a as se}from"./InputBase-CmeBW0gA.js";const me={},ne=Ve((t,e)=>{const r=ge("TextInput",me,t);return pe.jsx(se,{component:"input",ref:e,...r,__staticSelector:"TextInput"})});ne.classes=se.classes;ne.displayName="@mantine/core/TextInput";function Fe(t){if(!/^[0-9a-zA-Z-]+$/.test(t))throw new Error(`[@mantine/use-form] Form name "${t}" is invalid, it should contain only letters, numbers and dashes`)}const je=typeof window<"u"?l.useLayoutEffect:l.useEffect;function j(t,e){je(()=>{if(t)return window.addEventListener(t,e),()=>window.removeEventListener(t,e)},[t])}function ke(t,e){t&&Fe(t),j(`mantine-form:${t}:set-field-value`,r=>e.setFieldValue(r.detail.path,r.detail.value)),j(`mantine-form:${t}:set-values`,r=>e.setValues(r.detail)),j(`mantine-form:${t}:set-initial-values`,r=>e.setInitialValues(r.detail)),j(`mantine-form:${t}:set-errors`,r=>e.setErrors(r.detail)),j(`mantine-form:${t}:set-field-error`,r=>e.setFieldError(r.detail.path,r.detail.error)),j(`mantine-form:${t}:clear-field-error`,r=>e.clearFieldError(r.detail)),j(`mantine-form:${t}:clear-errors`,e.clearErrors),j(`mantine-form:${t}:reset`,e.reset),j(`mantine-form:${t}:validate`,e.validate),j(`mantine-form:${t}:validate-field`,r=>e.validateField(r.detail)),j(`mantine-form:${t}:reorder-list-item`,r=>e.reorderListItem(r.detail.path,r.detail.payload)),j(`mantine-form:${t}:remove-list-item`,r=>e.removeListItem(r.detail.path,r.detail.index)),j(`mantine-form:${t}:insert-list-item`,r=>e.insertListItem(r.detail.path,r.detail.item,r.detail.index)),j(`mantine-form:${t}:set-dirty`,r=>e.setDirty(r.detail)),j(`mantine-form:${t}:set-touched`,r=>e.setTouched(r.detail)),j(`mantine-form:${t}:reset-dirty`,r=>e.resetDirty(r.detail)),j(`mantine-form:${t}:reset-touched`,e.resetTouched)}function Oe(t){return e=>{if(!e)t(e);else if(typeof e=="function")t(e);else if(typeof e=="object"&&"nativeEvent"in e){const{currentTarget:r}=e;r instanceof HTMLInputElement?r.type==="checkbox"?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}}function H(t){return t===null||typeof t!="object"?{}:Object.keys(t).reduce((e,r)=>{const n=t[r];return n!=null&&n!==!1&&(e[r]=n),e},{})}function Ce(t){const[e,r]=l.useState(H(t)),n=l.useRef(e),s=l.useCallback(u=>{r(a=>{const E=H(typeof u=="function"?u(a):u);return n.current=E,E})},[]),o=l.useCallback(()=>s({}),[]),c=l.useCallback(u=>{n.current[u]!==void 0&&s(a=>{const E={...a};return delete E[u],E})},[e]),f=l.useCallback((u,a)=>{a==null||a===!1?c(u):n.current[u]!==a&&s(E=>({...E,[u]:a}))},[e]);return{errorsState:e,setErrors:s,clearErrors:o,setFieldError:f,clearFieldError:c}}function U(t,e){if(e===null||typeof e!="object")return{};const r={...e};return Object.keys(e).forEach(n=>{n.includes(`${String(t)}.`)&&delete r[n]}),r}function Q(t,e){const r=t.substring(e.length+1).split(".")[0];return parseInt(r,10)}function G(t,e,r,n){if(e===void 0)return r;const s=`${String(t)}`;let o=r;n===-1&&(o=U(`${s}.${e}`,o));const c={...o},f=new Set;return Object.entries(o).filter(([u])=>{if(!u.startsWith(`${s}.`))return!1;const a=Q(u,s);return Number.isNaN(a)?!1:a>=e}).forEach(([u,a])=>{const E=Q(u,s),S=u.replace(`${s}.${E}`,`${s}.${E+n}`);c[S]=a,f.add(S),f.has(u)||delete c[u]}),c}function De(t,{from:e,to:r},n){const s=`${t}.${e}`,o=`${t}.${r}`,c={...n};return Object.keys(n).every(f=>{let u,a;if(f.startsWith(s)&&(u=f,a=f.replace(s,o)),f.startsWith(o)&&(u=f.replace(o,s),a=f),u&&a){const E=c[u],S=c[a];return S===void 0?delete c[u]:c[u]=S,E===void 0?delete c[a]:c[a]=E,!1}return!0}),c}function x(t,e,r){typeof r.value=="object"&&(r.value=P(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||e==="__proto__"?Object.defineProperty(t,e,r):t[e]=r.value}function P(t){if(typeof t!="object")return t;var e=0,r,n,s,o=Object.prototype.toString.call(t);if(o==="[object Object]"?s=Object.create(t.__proto__||null):o==="[object Array]"?s=Array(t.length):o==="[object Set]"?(s=new Set,t.forEach(function(c){s.add(P(c))})):o==="[object Map]"?(s=new Map,t.forEach(function(c,f){s.set(P(f),P(c))})):o==="[object Date]"?s=new Date(+t):o==="[object RegExp]"?s=new RegExp(t.source,t.flags):o==="[object DataView]"?s=new t.constructor(P(t.buffer)):o==="[object ArrayBuffer]"?s=t.slice(0):o.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(n=Object.getOwnPropertySymbols(t);e<n.length;e++)x(s,n[e],Object.getOwnPropertyDescriptor(t,n[e]));for(e=0,n=Object.getOwnPropertyNames(t);e<n.length;e++)Object.hasOwnProperty.call(s,r=n[e])&&s[r]===t[r]||x(s,r,Object.getOwnPropertyDescriptor(t,r))}return s||t}function oe(t){return typeof t!="string"?[]:t.split(".")}function k(t,e){const r=oe(t);if(r.length===0||typeof e!="object"||e===null)return;let n=e[r[0]];for(let s=1;s<r.length&&n!=null;s+=1)n=n[r[s]];return n}function M(t,e,r){const n=oe(t);if(n.length===0)return r;const s=P(r);if(n.length===1)return s[n[0]]=e,s;let o=s[n[0]];for(let c=1;c<n.length-1;c+=1){if(o===void 0)return s;o=o[n[c]]}return o[n[n.length-1]]=e,s}function we(t,{from:e,to:r},n){const s=k(t,n);if(!Array.isArray(s))return n;const o=[...s],c=s[e];return o.splice(e,1),o.splice(r,0,c),M(t,o,n)}function $e(t,e,r,n){const s=k(t,n);if(!Array.isArray(s))return n;const o=[...s];return o.splice(typeof r=="number"?r:o.length,0,e),M(t,o,n)}function Te(t,e,r){const n=k(t,r);return Array.isArray(n)?M(t,n.filter((s,o)=>o!==e),r):r}function Ie(t,e,r,n){const s=k(t,n);if(!Array.isArray(s)||s.length<=r)return n;const o=[...s];return o[r]=e,M(t,o,n)}function he({$values:t,$errors:e,$status:r}){const n=l.useCallback((f,u)=>{r.clearFieldDirty(f),e.setErrors(a=>De(f,u,a)),t.setValues({values:we(f,u,t.refValues.current),updateState:!0})},[]),s=l.useCallback((f,u)=>{r.clearFieldDirty(f),e.setErrors(a=>G(f,u,a,-1)),t.setValues({values:Te(f,u,t.refValues.current),updateState:!0})},[]),o=l.useCallback((f,u,a)=>{r.clearFieldDirty(f),e.setErrors(E=>G(f,a,E,1)),t.setValues({values:$e(f,u,a,t.refValues.current),updateState:!0})},[]),c=l.useCallback((f,u,a)=>{r.clearFieldDirty(f),t.setValues({values:Ie(f,a,u,t.refValues.current),updateState:!0})},[]);return{reorderListItem:n,removeListItem:s,insertListItem:o,replaceListItem:c}}var Ae=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,s,o;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(s=n;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(r).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[s]))return!1;for(s=n;s--!==0;){var c=o[s];if(!t(e[c],r[c]))return!1}return!0}return e!==e&&r!==r};const W=Se(Ae);function v(t,e){const r=Object.keys(t);if(typeof e=="string"){const n=r.filter(s=>s.startsWith(`${e}.`));return t[e]||n.some(s=>t[s])||!1}return r.some(n=>t[n])}function Le({initialDirty:t,initialTouched:e,mode:r,$values:n}){const[s,o]=l.useState(e),[c,f]=l.useState(t),u=l.useRef(e),a=l.useRef(t),E=l.useCallback(b=>{const p=typeof b=="function"?b(u.current):b;u.current=p,r==="controlled"&&o(p)},[]),S=l.useCallback((b,p=!1)=>{const m=typeof b=="function"?b(a.current):b;a.current=m,(r==="controlled"||p)&&f(m)},[]),O=l.useCallback(()=>E({}),[]),R=l.useCallback(b=>{const p=b?{...n.refValues.current,...b}:n.refValues.current;n.setValuesSnapshot(p),S({})},[]),_=l.useCallback((b,p)=>{E(m=>v(m,b)===p?m:{...m,[b]:p})},[]),d=l.useCallback((b,p,m)=>{S(w=>v(w,b)===p?w:{...w,[b]:p},m)},[]),y=l.useCallback((b,p)=>{const m=v(a.current,b),w=!W(k(b,n.getValuesSnapshot()),p),L=U(b,a.current);L[b]=w,S(L,m!==w)},[]),g=l.useCallback(b=>v(u.current,b),[]),$=l.useCallback(b=>S(p=>{if(typeof b!="string")return p;const m=U(b,p);return delete m[b],W(m,p)?p:m}),[]),C=l.useCallback(b=>{if(b){const m=k(b,a.current);if(typeof m=="boolean")return m;const w=k(b,n.refValues.current),L=k(b,n.valuesSnapshot.current);return!W(w,L)}return Object.keys(a.current).length>0?v(a.current):!W(n.refValues.current,n.valuesSnapshot.current)},[]),h=l.useCallback(()=>a.current,[]),D=l.useCallback(()=>u.current,[]);return{touchedState:s,dirtyState:c,touchedRef:u,dirtyRef:a,setTouched:E,setDirty:S,resetDirty:R,resetTouched:O,isTouched:g,setFieldTouched:_,setFieldDirty:d,setTouchedState:o,setDirtyState:f,clearFieldDirty:$,isDirty:C,getDirty:h,getTouched:D,setCalculatedFieldDirty:y}}function Re({initialValues:t,onValuesChange:e,mode:r}){const n=l.useRef(!1),[s,o]=l.useState(t||{}),c=l.useRef(s),f=l.useRef(s),u=l.useCallback(({values:d,subscribers:y,updateState:g=!0,mergeWithPreviousValues:$=!0})=>{const C=c.current,h=d instanceof Function?d(c.current):d,D=$?{...C,...h}:h;c.current=D,g&&o(D),e==null||e(D,C),y==null||y.filter(Boolean).forEach(b=>b({updatedValues:D,previousValues:C}))},[e]),a=l.useCallback(d=>{var $;const y=k(d.path,c.current),g=d.value instanceof Function?d.value(y):d.value;if(y!==g){const C=c.current,h=M(d.path,g,c.current);u({values:h,updateState:d.updateState}),($=d.subscribers)==null||$.filter(Boolean).forEach(D=>D({path:d.path,updatedValues:h,previousValues:C}))}},[u]),E=l.useCallback(d=>{f.current=d},[]),S=l.useCallback((d,y)=>{n.current||(n.current=!0,u({values:d,updateState:r==="controlled"}),E(d),y())},[u]),O=l.useCallback(()=>{u({values:f.current,updateState:!0,mergeWithPreviousValues:!1})},[u]),R=l.useCallback(()=>c.current,[]),_=l.useCallback(()=>f.current,[]);return{initialized:n,stateValues:s,refValues:c,valuesSnapshot:f,setValues:u,setFieldValue:a,resetValues:O,setValuesSnapshot:E,initialize:S,getValues:R,getValuesSnapshot:_}}function Pe({$status:t}){const e=l.useRef({}),r=l.useCallback((s,o)=>{l.useEffect(()=>(e.current[s]=e.current[s]||[],e.current[s].push(o),()=>{e.current[s]=e.current[s].filter(c=>c!==o)}),[o])},[]),n=l.useCallback(s=>e.current[s]?e.current[s].map(o=>c=>o({previousValue:k(s,c.previousValues),value:k(s,c.updatedValues),touched:t.isTouched(s),dirty:t.isDirty(s)})):[],[]);return{subscribers:e,watch:r,getFieldSubscribers:n}}function ee(t,e){return t?`${t}-${e.toString()}`:e.toString()}function te(t){const e=H(t);return{hasErrors:Object.keys(e).length>0,errors:e}}function X(t,e,r="",n={}){return typeof t!="object"||t===null?n:Object.keys(t).reduce((s,o)=>{const c=t[o],f=`${r===""?"":`${r}.`}${o}`,u=k(f,e);let a=!1;return typeof c=="function"&&(s[f]=c(u,e,f)),typeof c=="object"&&Array.isArray(u)&&(a=!0,u.forEach((E,S)=>X(c,e,`${f}.${S}`,s))),typeof c=="object"&&typeof u=="object"&&u!==null&&(a||X(c,e,f,s)),s},n)}function Y(t,e){return te(typeof t=="function"?t(e):X(t,e))}function q(t,e,r){if(typeof t!="string")return{hasError:!1,error:null};const n=Y(e,r),s=Object.keys(n.errors).find(o=>t.split(".").every((c,f)=>c===o.split(".")[f]));return{hasError:!!s,error:s?n.errors[s]:null}}const _e="__MANTINE_FORM_INDEX__";function re(t,e){return e?typeof e=="boolean"?e:Array.isArray(e)?e.includes(t.replace(/[.][0-9]+/g,`.${_e}`)):!1:!1}function Me({name:t,mode:e="controlled",initialValues:r,initialErrors:n={},initialDirty:s={},initialTouched:o={},clearInputErrorOnChange:c=!0,validateInputOnChange:f=!1,validateInputOnBlur:u=!1,onValuesChange:a,transformValues:E=d=>d,enhanceGetInputProps:S,validate:O,onSubmitPreventDefault:R="always",touchTrigger:_="change"}={}){const d=Ce(n),y=Re({initialValues:r,onValuesChange:a,mode:e}),g=Le({initialDirty:s,initialTouched:o,$values:y,mode:e}),$=he({$values:y,$errors:d,$status:g}),C=Pe({$status:g}),[h,D]=l.useState(0),[b,p]=l.useState({}),[m,w]=l.useState(!1),L=l.useCallback(()=>{y.resetValues(),d.clearErrors(),g.resetDirty(),g.resetTouched(),e==="uncontrolled"&&D(i=>i+1)},[]),z=l.useCallback(i=>{c&&d.clearErrors(),e==="uncontrolled"&&D(V=>V+1),Object.keys(C.subscribers.current).forEach(V=>{const F=k(V,y.refValues.current),T=k(V,i);F!==T&&C.getFieldSubscribers(V).forEach(A=>A({previousValues:i,updatedValues:y.refValues.current}))})},[c]),ce=l.useCallback(i=>{const V=y.refValues.current;y.initialize(i,()=>e==="uncontrolled"&&D(F=>F+1)),z(V)},[z]),Z=l.useCallback((i,V,F)=>{const T=re(i,f),A=V instanceof Function?V(k(i,y.refValues.current)):V;g.setCalculatedFieldDirty(i,A),_==="change"&&g.setFieldTouched(i,!0),!T&&c&&d.clearFieldError(i),y.setFieldValue({path:i,value:V,updateState:e==="controlled",subscribers:[...C.getFieldSubscribers(i),T?N=>{const I=q(i,O,N.updatedValues);I.hasError?d.setFieldError(i,I.error):d.clearFieldError(i)}:null,(F==null?void 0:F.forceUpdate)!==!1&&e!=="controlled"?()=>p(N=>({...N,[i]:(N[i]||0)+1})):null]})},[a,O]),ue=l.useCallback(i=>{const V=y.refValues.current;y.setValues({values:i,updateState:e==="controlled"}),z(V)},[a,z]),J=l.useCallback(()=>{const i=Y(O,y.refValues.current);return d.setErrors(i.errors),i},[O]),ie=l.useCallback(i=>{const V=q(i,O,y.refValues.current);return V.hasError?d.setFieldError(i,V.error):d.clearFieldError(i),V},[O]),le=(i,{type:V="input",withError:F=!0,withFocus:T=!0,...A}={})=>{const I={onChange:Oe(K=>Z(i,K,{forceUpdate:!1})),"data-path":ee(t,i)};return F&&(I.error=d.errorsState[i]),V==="checkbox"?I[e==="controlled"?"checked":"defaultChecked"]=k(i,y.refValues.current):I[e==="controlled"?"value":"defaultValue"]=k(i,y.refValues.current),T&&(I.onFocus=()=>g.setFieldTouched(i,!0),I.onBlur=()=>{if(re(i,u)){const K=q(i,O,y.refValues.current);K.hasError?d.setFieldError(i,K.error):d.clearFieldError(i)}}),Object.assign(I,S==null?void 0:S({inputProps:I,field:i,options:{type:V,withError:F,withFocus:T,...A},form:B}))},ae=(i,V)=>F=>{R==="always"&&(F==null||F.preventDefault());const T=J();if(T.hasErrors)R==="validation-failed"&&(F==null||F.preventDefault()),V==null||V(T.errors,y.refValues.current,F);else{const A=i==null?void 0:i(E(y.refValues.current),F);A instanceof Promise&&(w(!0),A.finally(()=>w(!1)))}},fe=i=>E(i||y.refValues.current),de=l.useCallback(i=>{i.preventDefault(),L()},[]),ye=l.useCallback(i=>i?!q(i,O,y.refValues.current).hasError:!Y(O,y.refValues.current).hasErrors,[O]),be=i=>`${h}-${i}-${b[i]||0}`,Ee=l.useCallback(i=>document.querySelector(`[data-path="${ee(t,i)}"]`),[]),B={watch:C.watch,initialized:y.initialized.current,values:y.stateValues,getValues:y.getValues,setInitialValues:y.setValuesSnapshot,initialize:ce,setValues:ue,setFieldValue:Z,submitting:m,setSubmitting:w,errors:d.errorsState,setErrors:d.setErrors,setFieldError:d.setFieldError,clearFieldError:d.clearFieldError,clearErrors:d.clearErrors,resetDirty:g.resetDirty,setTouched:g.setTouched,setDirty:g.setDirty,isTouched:g.isTouched,resetTouched:g.resetTouched,isDirty:g.isDirty,getTouched:g.getTouched,getDirty:g.getDirty,reorderListItem:$.reorderListItem,insertListItem:$.insertListItem,removeListItem:$.removeListItem,replaceListItem:$.replaceListItem,reset:L,validate:J,validateField:ie,getInputProps:le,onSubmit:ae,onReset:de,isValid:ye,getTransformedValues:fe,key:be,getInputNode:Ee};return ke(t,B),B}export{ne as T,Me as u};
