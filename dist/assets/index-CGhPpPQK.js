function mb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uw={exports:{}},Cc={},Fw={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),yb=Symbol.for("react.portal"),vb=Symbol.for("react.fragment"),_b=Symbol.for("react.strict_mode"),wb=Symbol.for("react.profiler"),xb=Symbol.for("react.provider"),Eb=Symbol.for("react.context"),Tb=Symbol.for("react.forward_ref"),Ib=Symbol.for("react.suspense"),Sb=Symbol.for("react.memo"),bb=Symbol.for("react.lazy"),Ey=Symbol.iterator;function Nb(t){return t===null||typeof t!="object"?null:(t=Ey&&t[Ey]||t["@@iterator"],typeof t=="function"?t:null)}var $w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bw=Object.assign,zw={};function yo(t,e,n){this.props=t,this.context=e,this.refs=zw,this.updater=n||$w}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qw(){}qw.prototype=yo.prototype;function pp(t,e,n){this.props=t,this.context=e,this.refs=zw,this.updater=n||$w}var mp=pp.prototype=new qw;mp.constructor=pp;Bw(mp,yo.prototype);mp.isPureReactComponent=!0;var Ty=Array.isArray,Ww=Object.prototype.hasOwnProperty,gp={current:null},Hw={key:!0,ref:!0,__self:!0,__source:!0};function Gw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Ww.call(e,r)&&!Hw.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:rl,type:t,key:i,ref:o,props:s,_owner:gp.current}}function Ab(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function Cb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iy=/\/+/g;function zd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cb(""+t.key):e.toString(36)}function pu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rl:case yb:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+zd(o,0):r,Ty(s)?(n="",t!=null&&(n=t.replace(Iy,"$&/")+"/"),pu(s,e,n,"",function(d){return d})):s!=null&&(yp(s)&&(s=Ab(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Iy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Ty(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+zd(i,a);o+=pu(i,e,n,u,s)}else if(u=Nb(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+zd(i,a++),o+=pu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $l(t,e,n){if(t==null)return t;var r=[],s=0;return pu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Rb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},mu={transition:null},kb={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:mu,ReactCurrentOwner:gp};function Kw(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:$l,forEach:function(t,e,n){$l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $l(t,function(){e++}),e},toArray:function(t){return $l(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_e.Component=yo;_e.Fragment=vb;_e.Profiler=wb;_e.PureComponent=pp;_e.StrictMode=_b;_e.Suspense=Ib;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kb;_e.act=Kw;_e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=gp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Ww.call(e,u)&&!Hw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:rl,type:t.type,key:s,ref:i,props:r,_owner:o}};_e.createContext=function(t){return t={$$typeof:Eb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xb,_context:t},t.Consumer=t};_e.createElement=Gw;_e.createFactory=function(t){var e=Gw.bind(null,t);return e.type=t,e};_e.createRef=function(){return{current:null}};_e.forwardRef=function(t){return{$$typeof:Tb,render:t}};_e.isValidElement=yp;_e.lazy=function(t){return{$$typeof:bb,_payload:{_status:-1,_result:t},_init:Rb}};_e.memo=function(t,e){return{$$typeof:Sb,type:t,compare:e===void 0?null:e}};_e.startTransition=function(t){var e=mu.transition;mu.transition={};try{t()}finally{mu.transition=e}};_e.unstable_act=Kw;_e.useCallback=function(t,e){return Zt.current.useCallback(t,e)};_e.useContext=function(t){return Zt.current.useContext(t)};_e.useDebugValue=function(){};_e.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};_e.useEffect=function(t,e){return Zt.current.useEffect(t,e)};_e.useId=function(){return Zt.current.useId()};_e.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};_e.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};_e.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};_e.useMemo=function(t,e){return Zt.current.useMemo(t,e)};_e.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};_e.useRef=function(t){return Zt.current.useRef(t)};_e.useState=function(t){return Zt.current.useState(t)};_e.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};_e.useTransition=function(){return Zt.current.useTransition()};_e.version="18.3.1";Fw.exports=_e;var C=Fw.exports;const G=gb(C),Pb=mb({__proto__:null,default:G},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jb=C,Db=Symbol.for("react.element"),Ob=Symbol.for("react.fragment"),Lb=Object.prototype.hasOwnProperty,Vb=jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mb={key:!0,ref:!0,__self:!0,__source:!0};function Qw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Lb.call(e,r)&&!Mb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Db,type:t,key:i,ref:o,props:s,_owner:Vb.current}}Cc.Fragment=Ob;Cc.jsx=Qw;Cc.jsxs=Qw;Uw.exports=Cc;var c=Uw.exports,Mh={},Yw={exports:{}},xn={},Xw={exports:{}},Jw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,q){var Z=M.length;M.push(q);e:for(;0<Z;){var ye=Z-1>>>1,me=M[ye];if(0<s(me,q))M[ye]=q,M[Z]=me,Z=ye;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var q=M[0],Z=M.pop();if(Z!==q){M[0]=Z;e:for(var ye=0,me=M.length,ce=me>>>1;ye<ce;){var lt=2*(ye+1)-1,B=M[lt],K=lt+1,F=M[K];if(0>s(B,Z))K<me&&0>s(F,B)?(M[ye]=F,M[K]=Z,ye=K):(M[ye]=B,M[lt]=Z,ye=lt);else if(K<me&&0>s(F,Z))M[ye]=F,M[K]=Z,ye=K;else break e}}return q}function s(M,q){var Z=M.sortIndex-q.sortIndex;return Z!==0?Z:M.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],d=[],h=1,p=null,m=3,y=!1,_=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=M)r(d),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(d)}}function R(M){if(E=!1,v(M),!_)if(n(u)!==null)_=!0,X(j);else{var q=n(d);q!==null&&W(R,q.startTime-M)}}function j(M,q){_=!1,E&&(E=!1,T(w),w=-1),y=!0;var Z=m;try{for(v(q),p=n(u);p!==null&&(!(p.expirationTime>q)||M&&!P());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,m=p.priorityLevel;var me=ye(p.expirationTime<=q);q=t.unstable_now(),typeof me=="function"?p.callback=me:p===n(u)&&r(u),v(q)}else r(u);p=n(u)}if(p!==null)var ce=!0;else{var lt=n(d);lt!==null&&W(R,lt.startTime-q),ce=!1}return ce}finally{p=null,m=Z,y=!1}}var L=!1,b=null,w=-1,N=5,A=-1;function P(){return!(t.unstable_now()-A<N)}function D(){if(b!==null){var M=t.unstable_now();A=M;var q=!0;try{q=b(!0,M)}finally{q?k():(L=!1,b=null)}}else L=!1}var k;if(typeof x=="function")k=function(){x(D)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,qe=Ae.port2;Ae.port1.onmessage=D,k=function(){qe.postMessage(null)}}else k=function(){S(D,0)};function X(M){b=M,L||(L=!0,k())}function W(M,q){w=S(function(){M(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,X(j))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(M){switch(m){case 1:case 2:case 3:var q=3;break;default:q=m}var Z=m;m=q;try{return M()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=m;m=M;try{return q()}finally{m=Z}},t.unstable_scheduleCallback=function(M,q,Z){var ye=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,M){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Z+me,M={id:h++,callback:q,priorityLevel:M,startTime:Z,expirationTime:me,sortIndex:-1},Z>ye?(M.sortIndex=Z,e(d,M),n(u)===null&&M===n(d)&&(E?(T(w),w=-1):E=!0,W(R,Z-ye))):(M.sortIndex=me,e(u,M),_||y||(_=!0,X(j))),M},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(M){var q=m;return function(){var Z=m;m=q;try{return M.apply(this,arguments)}finally{m=Z}}}})(Jw);Xw.exports=Jw;var Ub=Xw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fb=C,vn=Ub;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zw=new Set,Sa={};function fi(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(Sa[t]=e,t=0;t<e.length;t++)Zw.add(e[t])}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uh=Object.prototype.hasOwnProperty,$b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sy={},by={};function Bb(t){return Uh.call(by,t)?!0:Uh.call(Sy,t)?!1:$b.test(t)?by[t]=!0:(Sy[t]=!0,!1)}function zb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qb(t,e,n,r){if(e===null||typeof e>"u"||zb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var vp=/[\-:]([a-z])/g;function _p(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vp,_p);At[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vp,_p);At[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vp,_p);At[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function wp(t,e,n,r){var s=At.hasOwnProperty(e)?At[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qb(e,n,s,r)&&(n=null),r||s===null?Bb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lr=Fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bl=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),ex=Symbol.for("react.provider"),tx=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Bh=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),nx=Symbol.for("react.offscreen"),Ny=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=Ny&&t[Ny]||t["@@iterator"],typeof t=="function"?t:null)}var et=Object.assign,qd;function Zo(t){if(qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qd=e&&e[1]||""}return`
`+qd+t}var Wd=!1;function Hd(t,e){if(!t||Wd)return"";Wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function Wb(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=Hd(t.type,!1),t;case 11:return t=Hd(t.type.render,!1),t;case 1:return t=Hd(t.type,!0),t;default:return""}}function zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ki:return"Fragment";case Ri:return"Portal";case Fh:return"Profiler";case xp:return"StrictMode";case $h:return"Suspense";case Bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tx:return(t.displayName||"Context")+".Consumer";case ex:return(t._context.displayName||"Context")+".Provider";case Ep:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:zh(t.type)||"Memo";case Kr:e=t._payload,t=t._init;try{return zh(t(e))}catch{}}return null}function Hb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zh(e);case 8:return e===xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ws(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gb(t){var e=rx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zl(t){t._valueTracker||(t._valueTracker=Gb(t))}function sx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qh(t,e){var n=e.checked;return et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ay(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ws(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ix(t,e){e=e.checked,e!=null&&wp(t,"checked",e,!1)}function Wh(t,e){ix(t,e);var n=ws(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hh(t,e.type,ws(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hh(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function qi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ws(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ry(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ea(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ws(n)}}function ox(t,e){var n=ws(e.value),r=ws(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ky(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ax(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ax(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ql,lx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ql=ql||document.createElement("div"),ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kb=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){Kb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function ux(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function cx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ux(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Qb=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(t,e){if(e){if(Qb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xh=null;function Ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jh=null,Wi=null,Hi=null;function Py(t){if(t=ol(t)){if(typeof Jh!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Dc(e),Jh(t.stateNode,t.type,e))}}function dx(t){Wi?Hi?Hi.push(t):Hi=[t]:Wi=t}function hx(){if(Wi){var t=Wi,e=Hi;if(Hi=Wi=null,Py(t),e)for(t=0;t<e.length;t++)Py(e[t])}}function fx(t,e){return t(e)}function px(){}var Gd=!1;function mx(t,e,n){if(Gd)return t(e,n);Gd=!0;try{return fx(t,e,n)}finally{Gd=!1,(Wi!==null||Hi!==null)&&(px(),hx())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var r=Dc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Zh=!1;if(Nr)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){Zh=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{Zh=!1}function Yb(t,e,n,r,s,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var ua=!1,Lu=null,Vu=!1,ef=null,Xb={onError:function(t){ua=!0,Lu=t}};function Jb(t,e,n,r,s,i,o,a,u){ua=!1,Lu=null,Yb.apply(Xb,arguments)}function Zb(t,e,n,r,s,i,o,a,u){if(Jb.apply(this,arguments),ua){if(ua){var d=Lu;ua=!1,Lu=null}else throw Error(z(198));Vu||(Vu=!0,ef=d)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jy(t){if(pi(t)!==t)throw Error(z(188))}function eN(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return jy(s),t;if(i===r)return jy(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function yx(t){return t=eN(t),t!==null?vx(t):null}function vx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vx(t);if(e!==null)return e;t=t.sibling}return null}var _x=vn.unstable_scheduleCallback,Dy=vn.unstable_cancelCallback,tN=vn.unstable_shouldYield,nN=vn.unstable_requestPaint,at=vn.unstable_now,rN=vn.unstable_getCurrentPriorityLevel,Sp=vn.unstable_ImmediatePriority,wx=vn.unstable_UserBlockingPriority,Mu=vn.unstable_NormalPriority,sN=vn.unstable_LowPriority,xx=vn.unstable_IdlePriority,Rc=null,tr=null;function iN(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Rc,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:lN,oN=Math.log,aN=Math.LN2;function lN(t){return t>>>=0,t===0?32:31-(oN(t)/aN|0)|0}var Wl=64,Hl=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ta(a):(i&=o,i!==0&&(r=ta(i)))}else o=n&~s,o!==0?r=ta(o):i!==0&&(r=ta(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bn(e),s=1<<n,r|=t[n],e&=~s;return r}function uN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Bn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=uN(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ex(){var t=Wl;return Wl<<=1,!(Wl&4194240)&&(Wl=64),t}function Kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function dN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Bn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Pe=0;function Tx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ix,Np,Sx,bx,Nx,nf=!1,Gl=[],as=null,ls=null,us=null,Aa=new Map,Ca=new Map,Yr=[],hN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oy(t,e){switch(t){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Ho(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ol(e),e!==null&&Np(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function fN(t,e,n,r,s){switch(e){case"focusin":return as=Ho(as,t,e,n,r,s),!0;case"dragenter":return ls=Ho(ls,t,e,n,r,s),!0;case"mouseover":return us=Ho(us,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Aa.set(i,Ho(Aa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ca.set(i,Ho(Ca.get(i)||null,t,e,n,r,s)),!0}return!1}function Ax(t){var e=qs(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=gx(n),e!==null){t.blockedOn=e,Nx(t.priority,function(){Sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xh=r,n.target.dispatchEvent(r),Xh=null}else return e=ol(n),e!==null&&Np(e),t.blockedOn=n,!1;e.shift()}return!0}function Ly(t,e,n){gu(t)&&n.delete(e)}function pN(){nf=!1,as!==null&&gu(as)&&(as=null),ls!==null&&gu(ls)&&(ls=null),us!==null&&gu(us)&&(us=null),Aa.forEach(Ly),Ca.forEach(Ly)}function Go(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,pN)))}function Ra(t){function e(s){return Go(s,t)}if(0<Gl.length){Go(Gl[0],t);for(var n=1;n<Gl.length;n++){var r=Gl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(as!==null&&Go(as,t),ls!==null&&Go(ls,t),us!==null&&Go(us,t),Aa.forEach(e),Ca.forEach(e),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)Ax(n),n.blockedOn===null&&Yr.shift()}var Gi=Lr.ReactCurrentBatchConfig,Fu=!0;function mN(t,e,n,r){var s=Pe,i=Gi.transition;Gi.transition=null;try{Pe=1,Ap(t,e,n,r)}finally{Pe=s,Gi.transition=i}}function gN(t,e,n,r){var s=Pe,i=Gi.transition;Gi.transition=null;try{Pe=4,Ap(t,e,n,r)}finally{Pe=s,Gi.transition=i}}function Ap(t,e,n,r){if(Fu){var s=rf(t,e,n,r);if(s===null)sh(t,e,r,$u,n),Oy(t,r);else if(fN(s,t,e,n,r))r.stopPropagation();else if(Oy(t,r),e&4&&-1<hN.indexOf(t)){for(;s!==null;){var i=ol(s);if(i!==null&&Ix(i),i=rf(t,e,n,r),i===null&&sh(t,e,r,$u,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else sh(t,e,r,null,n)}}var $u=null;function rf(t,e,n,r){if($u=null,t=Ip(r),t=qs(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function Cx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rN()){case Sp:return 1;case wx:return 4;case Mu:case sN:return 16;case xx:return 536870912;default:return 16}default:return 16}}var rs=null,Cp=null,yu=null;function Rx(){if(yu)return yu;var t,e=Cp,n=e.length,r,s="value"in rs?rs.value:rs.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return yu=s.slice(t,1<r?1-r:void 0)}function vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function Vy(){return!1}function En(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kl:Vy,this.isPropagationStopped=Vy,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rp=En(vo),il=et({},vo,{view:0,detail:0}),yN=En(il),Qd,Yd,Ko,kc=et({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(Qd=t.screenX-Ko.screenX,Yd=t.screenY-Ko.screenY):Yd=Qd=0,Ko=t),Qd)},movementY:function(t){return"movementY"in t?t.movementY:Yd}}),My=En(kc),vN=et({},kc,{dataTransfer:0}),_N=En(vN),wN=et({},il,{relatedTarget:0}),Xd=En(wN),xN=et({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),EN=En(xN),TN=et({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IN=En(TN),SN=et({},vo,{data:0}),Uy=En(SN),bN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AN[t])?!!e[t]:!1}function kp(){return CN}var RN=et({},il,{key:function(t){if(t.key){var e=bN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(t){return t.type==="keypress"?vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kN=En(RN),PN=et({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fy=En(PN),jN=et({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),DN=En(jN),ON=et({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),LN=En(ON),VN=et({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MN=En(VN),UN=[9,13,27,32],Pp=Nr&&"CompositionEvent"in window,ca=null;Nr&&"documentMode"in document&&(ca=document.documentMode);var FN=Nr&&"TextEvent"in window&&!ca,kx=Nr&&(!Pp||ca&&8<ca&&11>=ca),$y=" ",By=!1;function Px(t,e){switch(t){case"keyup":return UN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function $N(t,e){switch(t){case"compositionend":return jx(e);case"keypress":return e.which!==32?null:(By=!0,$y);case"textInput":return t=e.data,t===$y&&By?null:t;default:return null}}function BN(t,e){if(Pi)return t==="compositionend"||!Pp&&Px(t,e)?(t=Rx(),yu=Cp=rs=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kx&&e.locale!=="ko"?null:e.data;default:return null}}var zN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zN[t.type]:e==="textarea"}function Dx(t,e,n,r){dx(r),e=Bu(e,"onChange"),0<e.length&&(n=new Rp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,ka=null;function qN(t){Wx(t,0)}function Pc(t){var e=Oi(t);if(sx(e))return t}function WN(t,e){if(t==="change")return e}var Ox=!1;if(Nr){var Jd;if(Nr){var Zd="oninput"in document;if(!Zd){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),Zd=typeof qy.oninput=="function"}Jd=Zd}else Jd=!1;Ox=Jd&&(!document.documentMode||9<document.documentMode)}function Wy(){da&&(da.detachEvent("onpropertychange",Lx),ka=da=null)}function Lx(t){if(t.propertyName==="value"&&Pc(ka)){var e=[];Dx(e,ka,t,Ip(t)),mx(qN,e)}}function HN(t,e,n){t==="focusin"?(Wy(),da=e,ka=n,da.attachEvent("onpropertychange",Lx)):t==="focusout"&&Wy()}function GN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(ka)}function KN(t,e){if(t==="click")return Pc(e)}function QN(t,e){if(t==="input"||t==="change")return Pc(e)}function YN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:YN;function Pa(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Uh.call(e,s)||!Gn(t[s],e[s]))return!1}return!0}function Hy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gy(t,e){var n=Hy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hy(n)}}function Vx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mx(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XN(t){var e=Mx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vx(n.ownerDocument.documentElement,n)){if(r!==null&&jp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Gy(n,i);var o=Gy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JN=Nr&&"documentMode"in document&&11>=document.documentMode,ji=null,sf=null,ha=null,of=!1;function Ky(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||ji==null||ji!==Ou(r)||(r=ji,"selectionStart"in r&&jp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&Pa(ha,r)||(ha=r,r=Bu(sf,"onSelect"),0<r.length&&(e=new Rp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}function Ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Ql("Animation","AnimationEnd"),animationiteration:Ql("Animation","AnimationIteration"),animationstart:Ql("Animation","AnimationStart"),transitionend:Ql("Transition","TransitionEnd")},eh={},Ux={};Nr&&(Ux=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function jc(t){if(eh[t])return eh[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ux)return eh[t]=e[n];return t}var Fx=jc("animationend"),$x=jc("animationiteration"),Bx=jc("animationstart"),zx=jc("transitionend"),qx=new Map,Qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function As(t,e){qx.set(t,e),fi(e,[t])}for(var th=0;th<Qy.length;th++){var nh=Qy[th],ZN=nh.toLowerCase(),eA=nh[0].toUpperCase()+nh.slice(1);As(ZN,"on"+eA)}As(Fx,"onAnimationEnd");As($x,"onAnimationIteration");As(Bx,"onAnimationStart");As("dblclick","onDoubleClick");As("focusin","onFocus");As("focusout","onBlur");As(zx,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tA=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Yy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Zb(r,e,void 0,t),t.currentTarget=null}function Wx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;Yy(s,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;Yy(s,a,d),i=u}}}if(Vu)throw t=ef,Vu=!1,ef=null,t}function Be(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var r=t+"__bubble";n.has(r)||(Hx(e,t,2,!1),n.add(r))}function rh(t,e,n){var r=0;e&&(r|=4),Hx(n,t,r,e)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[Yl]){t[Yl]=!0,Zw.forEach(function(n){n!=="selectionchange"&&(tA.has(n)||rh(n,!1,t),rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yl]||(e[Yl]=!0,rh("selectionchange",!1,e))}}function Hx(t,e,n,r){switch(Cx(e)){case 1:var s=mN;break;case 4:s=gN;break;default:s=Ap}n=s.bind(null,e,n,t),s=void 0,!Zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function sh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=qs(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}mx(function(){var d=i,h=Ip(n),p=[];e:{var m=qx.get(t);if(m!==void 0){var y=Rp,_=t;switch(t){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":y=kN;break;case"focusin":_="focus",y=Xd;break;case"focusout":_="blur",y=Xd;break;case"beforeblur":case"afterblur":y=Xd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=My;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_N;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=DN;break;case Fx:case $x:case Bx:y=EN;break;case zx:y=LN;break;case"scroll":y=yN;break;case"wheel":y=MN;break;case"copy":case"cut":case"paste":y=IN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Fy}var E=(e&4)!==0,S=!E&&t==="scroll",T=E?m!==null?m+"Capture":null:m;E=[];for(var x=d,v;x!==null;){v=x;var R=v.stateNode;if(v.tag===5&&R!==null&&(v=R,T!==null&&(R=Na(x,T),R!=null&&E.push(Da(x,R,v)))),S)break;x=x.return}0<E.length&&(m=new y(m,_,null,n,h),p.push({event:m,listeners:E}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Xh&&(_=n.relatedTarget||n.fromElement)&&(qs(_)||_[Ar]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=d,_=_?qs(_):null,_!==null&&(S=pi(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=d),y!==_)){if(E=My,R="onMouseLeave",T="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=Fy,R="onPointerLeave",T="onPointerEnter",x="pointer"),S=y==null?m:Oi(y),v=_==null?m:Oi(_),m=new E(R,x+"leave",y,n,h),m.target=S,m.relatedTarget=v,R=null,qs(h)===d&&(E=new E(T,x+"enter",_,n,h),E.target=v,E.relatedTarget=S,R=E),S=R,y&&_)t:{for(E=y,T=_,x=0,v=E;v;v=bi(v))x++;for(v=0,R=T;R;R=bi(R))v++;for(;0<x-v;)E=bi(E),x--;for(;0<v-x;)T=bi(T),v--;for(;x--;){if(E===T||T!==null&&E===T.alternate)break t;E=bi(E),T=bi(T)}E=null}else E=null;y!==null&&Xy(p,m,y,E,!1),_!==null&&S!==null&&Xy(p,S,_,E,!0)}}e:{if(m=d?Oi(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var j=WN;else if(zy(m))if(Ox)j=QN;else{j=GN;var L=HN}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=KN);if(j&&(j=j(t,d))){Dx(p,j,n,h);break e}L&&L(t,m,d),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Hh(m,"number",m.value)}switch(L=d?Oi(d):window,t){case"focusin":(zy(L)||L.contentEditable==="true")&&(ji=L,sf=d,ha=null);break;case"focusout":ha=sf=ji=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Ky(p,n,h);break;case"selectionchange":if(JN)break;case"keydown":case"keyup":Ky(p,n,h)}var b;if(Pp)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Pi?Px(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(kx&&n.locale!=="ko"&&(Pi||w!=="onCompositionStart"?w==="onCompositionEnd"&&Pi&&(b=Rx()):(rs=h,Cp="value"in rs?rs.value:rs.textContent,Pi=!0)),L=Bu(d,w),0<L.length&&(w=new Uy(w,t,null,n,h),p.push({event:w,listeners:L}),b?w.data=b:(b=jx(n),b!==null&&(w.data=b)))),(b=FN?$N(t,n):BN(t,n))&&(d=Bu(d,"onBeforeInput"),0<d.length&&(h=new Uy("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=b))}Wx(p,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Na(t,n),i!=null&&r.unshift(Da(t,i,s)),i=Na(t,e),i!=null&&r.push(Da(t,i,s))),t=t.return}return r}function bi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xy(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,s?(u=Na(n,i),u!=null&&o.unshift(Da(n,u,a))):s||(u=Na(n,i),u!=null&&o.push(Da(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nA=/\r\n?/g,rA=/\u0000|\uFFFD/g;function Jy(t){return(typeof t=="string"?t:""+t).replace(nA,`
`).replace(rA,"")}function Xl(t,e,n){if(e=Jy(e),Jy(t)!==e&&n)throw Error(z(425))}function zu(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,sA=typeof clearTimeout=="function"?clearTimeout:void 0,Zy=typeof Promise=="function"?Promise:void 0,iA=typeof queueMicrotask=="function"?queueMicrotask:typeof Zy<"u"?function(t){return Zy.resolve(null).then(t).catch(oA)}:cf;function oA(t){setTimeout(function(){throw t})}function ih(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ra(e)}function cs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ev(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Zn="__reactFiber$"+_o,Oa="__reactProps$"+_o,Ar="__reactContainer$"+_o,df="__reactEvents$"+_o,aA="__reactListeners$"+_o,lA="__reactHandles$"+_o;function qs(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ev(t);t!==null;){if(n=t[Zn])return n;t=ev(t)}return e}t=n,n=t.parentNode}return null}function ol(t){return t=t[Zn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Dc(t){return t[Oa]||null}var hf=[],Li=-1;function Cs(t){return{current:t}}function ze(t){0>Li||(t.current=hf[Li],hf[Li]=null,Li--)}function Ue(t,e){Li++,hf[Li]=t.current,t.current=e}var xs={},$t=Cs(xs),an=Cs(!1),Zs=xs;function to(t,e){var n=t.type.contextTypes;if(!n)return xs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ln(t){return t=t.childContextTypes,t!=null}function qu(){ze(an),ze($t)}function tv(t,e,n){if($t.current!==xs)throw Error(z(168));Ue($t,e),Ue(an,n)}function Gx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,Hb(t)||"Unknown",s));return et({},n,r)}function Wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,Zs=$t.current,Ue($t,t),Ue(an,an.current),!0}function nv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=Gx(t,e,Zs),r.__reactInternalMemoizedMergedChildContext=t,ze(an),ze($t),Ue($t,t)):ze(an),Ue(an,n)}var yr=null,Oc=!1,oh=!1;function Kx(t){yr===null?yr=[t]:yr.push(t)}function uA(t){Oc=!0,Kx(t)}function Rs(){if(!oh&&yr!==null){oh=!0;var t=0,e=Pe;try{var n=yr;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yr=null,Oc=!1}catch(s){throw yr!==null&&(yr=yr.slice(t+1)),_x(Sp,Rs),s}finally{Pe=e,oh=!1}}return null}var Vi=[],Mi=0,Hu=null,Gu=0,In=[],Sn=0,ei=null,vr=1,_r="";function $s(t,e){Vi[Mi++]=Gu,Vi[Mi++]=Hu,Hu=t,Gu=e}function Qx(t,e,n){In[Sn++]=vr,In[Sn++]=_r,In[Sn++]=ei,ei=t;var r=vr;t=_r;var s=32-Bn(r)-1;r&=~(1<<s),n+=1;var i=32-Bn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,vr=1<<32-Bn(e)+s|n<<s|r,_r=i+t}else vr=1<<i|n<<s|r,_r=t}function Dp(t){t.return!==null&&($s(t,1),Qx(t,1,0))}function Op(t){for(;t===Hu;)Hu=Vi[--Mi],Vi[Mi]=null,Gu=Vi[--Mi],Vi[Mi]=null;for(;t===ei;)ei=In[--Sn],In[Sn]=null,_r=In[--Sn],In[Sn]=null,vr=In[--Sn],In[Sn]=null}var yn=null,pn=null,He=!1,Fn=null;function Yx(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,pn=cs(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:vr,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,pn=null,!0):!1;default:return!1}}function ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(He){var e=pn;if(e){var n=e;if(!rv(t,e)){if(ff(t))throw Error(z(418));e=cs(n.nextSibling);var r=yn;e&&rv(t,e)?Yx(r,n):(t.flags=t.flags&-4097|2,He=!1,yn=t)}}else{if(ff(t))throw Error(z(418));t.flags=t.flags&-4097|2,He=!1,yn=t}}}function sv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Jl(t){if(t!==yn)return!1;if(!He)return sv(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=pn)){if(ff(t))throw Xx(),Error(z(418));for(;e;)Yx(t,e),e=cs(e.nextSibling)}if(sv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=cs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=yn?cs(t.stateNode.nextSibling):null;return!0}function Xx(){for(var t=pn;t;)t=cs(t.nextSibling)}function no(){pn=yn=null,He=!1}function Lp(t){Fn===null?Fn=[t]:Fn.push(t)}var cA=Lr.ReactCurrentBatchConfig;function Qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Zl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iv(t){var e=t._init;return e(t._payload)}function Jx(t){function e(T,x){if(t){var v=T.deletions;v===null?(T.deletions=[x],T.flags|=16):v.push(x)}}function n(T,x){if(!t)return null;for(;x!==null;)e(T,x),x=x.sibling;return null}function r(T,x){for(T=new Map;x!==null;)x.key!==null?T.set(x.key,x):T.set(x.index,x),x=x.sibling;return T}function s(T,x){return T=ps(T,x),T.index=0,T.sibling=null,T}function i(T,x,v){return T.index=v,t?(v=T.alternate,v!==null?(v=v.index,v<x?(T.flags|=2,x):v):(T.flags|=2,x)):(T.flags|=1048576,x)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,x,v,R){return x===null||x.tag!==6?(x=fh(v,T.mode,R),x.return=T,x):(x=s(x,v),x.return=T,x)}function u(T,x,v,R){var j=v.type;return j===ki?h(T,x,v.props.children,R,v.key):x!==null&&(x.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Kr&&iv(j)===x.type)?(R=s(x,v.props),R.ref=Qo(T,x,v),R.return=T,R):(R=Su(v.type,v.key,v.props,null,T.mode,R),R.ref=Qo(T,x,v),R.return=T,R)}function d(T,x,v,R){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=ph(v,T.mode,R),x.return=T,x):(x=s(x,v.children||[]),x.return=T,x)}function h(T,x,v,R,j){return x===null||x.tag!==7?(x=Xs(v,T.mode,R,j),x.return=T,x):(x=s(x,v),x.return=T,x)}function p(T,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=fh(""+x,T.mode,v),x.return=T,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Bl:return v=Su(x.type,x.key,x.props,null,T.mode,v),v.ref=Qo(T,null,x),v.return=T,v;case Ri:return x=ph(x,T.mode,v),x.return=T,x;case Kr:var R=x._init;return p(T,R(x._payload),v)}if(ea(x)||qo(x))return x=Xs(x,T.mode,v,null),x.return=T,x;Zl(T,x)}return null}function m(T,x,v,R){var j=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:a(T,x,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bl:return v.key===j?u(T,x,v,R):null;case Ri:return v.key===j?d(T,x,v,R):null;case Kr:return j=v._init,m(T,x,j(v._payload),R)}if(ea(v)||qo(v))return j!==null?null:h(T,x,v,R,null);Zl(T,v)}return null}function y(T,x,v,R,j){if(typeof R=="string"&&R!==""||typeof R=="number")return T=T.get(v)||null,a(x,T,""+R,j);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Bl:return T=T.get(R.key===null?v:R.key)||null,u(x,T,R,j);case Ri:return T=T.get(R.key===null?v:R.key)||null,d(x,T,R,j);case Kr:var L=R._init;return y(T,x,v,L(R._payload),j)}if(ea(R)||qo(R))return T=T.get(v)||null,h(x,T,R,j,null);Zl(x,R)}return null}function _(T,x,v,R){for(var j=null,L=null,b=x,w=x=0,N=null;b!==null&&w<v.length;w++){b.index>w?(N=b,b=null):N=b.sibling;var A=m(T,b,v[w],R);if(A===null){b===null&&(b=N);break}t&&b&&A.alternate===null&&e(T,b),x=i(A,x,w),L===null?j=A:L.sibling=A,L=A,b=N}if(w===v.length)return n(T,b),He&&$s(T,w),j;if(b===null){for(;w<v.length;w++)b=p(T,v[w],R),b!==null&&(x=i(b,x,w),L===null?j=b:L.sibling=b,L=b);return He&&$s(T,w),j}for(b=r(T,b);w<v.length;w++)N=y(b,T,w,v[w],R),N!==null&&(t&&N.alternate!==null&&b.delete(N.key===null?w:N.key),x=i(N,x,w),L===null?j=N:L.sibling=N,L=N);return t&&b.forEach(function(P){return e(T,P)}),He&&$s(T,w),j}function E(T,x,v,R){var j=qo(v);if(typeof j!="function")throw Error(z(150));if(v=j.call(v),v==null)throw Error(z(151));for(var L=j=null,b=x,w=x=0,N=null,A=v.next();b!==null&&!A.done;w++,A=v.next()){b.index>w?(N=b,b=null):N=b.sibling;var P=m(T,b,A.value,R);if(P===null){b===null&&(b=N);break}t&&b&&P.alternate===null&&e(T,b),x=i(P,x,w),L===null?j=P:L.sibling=P,L=P,b=N}if(A.done)return n(T,b),He&&$s(T,w),j;if(b===null){for(;!A.done;w++,A=v.next())A=p(T,A.value,R),A!==null&&(x=i(A,x,w),L===null?j=A:L.sibling=A,L=A);return He&&$s(T,w),j}for(b=r(T,b);!A.done;w++,A=v.next())A=y(b,T,w,A.value,R),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?w:A.key),x=i(A,x,w),L===null?j=A:L.sibling=A,L=A);return t&&b.forEach(function(D){return e(T,D)}),He&&$s(T,w),j}function S(T,x,v,R){if(typeof v=="object"&&v!==null&&v.type===ki&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bl:e:{for(var j=v.key,L=x;L!==null;){if(L.key===j){if(j=v.type,j===ki){if(L.tag===7){n(T,L.sibling),x=s(L,v.props.children),x.return=T,T=x;break e}}else if(L.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Kr&&iv(j)===L.type){n(T,L.sibling),x=s(L,v.props),x.ref=Qo(T,L,v),x.return=T,T=x;break e}n(T,L);break}else e(T,L);L=L.sibling}v.type===ki?(x=Xs(v.props.children,T.mode,R,v.key),x.return=T,T=x):(R=Su(v.type,v.key,v.props,null,T.mode,R),R.ref=Qo(T,x,v),R.return=T,T=R)}return o(T);case Ri:e:{for(L=v.key;x!==null;){if(x.key===L)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(T,x.sibling),x=s(x,v.children||[]),x.return=T,T=x;break e}else{n(T,x);break}else e(T,x);x=x.sibling}x=ph(v,T.mode,R),x.return=T,T=x}return o(T);case Kr:return L=v._init,S(T,x,L(v._payload),R)}if(ea(v))return _(T,x,v,R);if(qo(v))return E(T,x,v,R);Zl(T,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(T,x.sibling),x=s(x,v),x.return=T,T=x):(n(T,x),x=fh(v,T.mode,R),x.return=T,T=x),o(T)):n(T,x)}return S}var ro=Jx(!0),Zx=Jx(!1),Ku=Cs(null),Qu=null,Ui=null,Vp=null;function Mp(){Vp=Ui=Qu=null}function Up(t){var e=Ku.current;ze(Ku),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ki(t,e){Qu=t,Vp=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Vp!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(Qu===null)throw Error(z(308));Ui=t,Qu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Ws=null;function Fp(t){Ws===null?Ws=[t]:Ws.push(t)}function e0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Fp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qr=!1;function $p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ds(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Cr(t,n)}return s=r.interleaved,s===null?(e.next=e,Fp(r)):(e.next=s.next,s.next=e),r.interleaved=e,Cr(t,n)}function _u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}function ov(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yu(t,e,n,r){var s=t.updateQueue;Qr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,h=d=u=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(m=e,y=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){p=_.call(y,p,m);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,m=typeof _=="function"?_.call(y,p,m):_,m==null)break e;p=et({},p,m);break e;case 2:Qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=y,u=p):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(u=p),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=p}}function av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var al={},nr=Cs(al),La=Cs(al),Va=Cs(al);function Hs(t){if(t===al)throw Error(z(174));return t}function Bp(t,e){switch(Ue(Va,e),Ue(La,t),Ue(nr,al),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kh(e,t)}ze(nr),Ue(nr,e)}function so(){ze(nr),ze(La),ze(Va)}function n0(t){Hs(Va.current);var e=Hs(nr.current),n=Kh(e,t.type);e!==n&&(Ue(La,t),Ue(nr,n))}function zp(t){La.current===t&&(ze(nr),ze(La))}var Ye=Cs(0);function Xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function qp(){for(var t=0;t<ah.length;t++)ah[t]._workInProgressVersionPrimary=null;ah.length=0}var wu=Lr.ReactCurrentDispatcher,lh=Lr.ReactCurrentBatchConfig,ti=0,Je=null,pt=null,vt=null,Ju=!1,fa=!1,Ma=0,dA=0;function Pt(){throw Error(z(321))}function Wp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Hp(t,e,n,r,s,i){if(ti=i,Je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wu.current=t===null||t.memoizedState===null?mA:gA,t=n(r,s),fa){i=0;do{if(fa=!1,Ma=0,25<=i)throw Error(z(301));i+=1,vt=pt=null,e.updateQueue=null,wu.current=yA,t=n(r,s)}while(fa)}if(wu.current=Zu,e=pt!==null&&pt.next!==null,ti=0,vt=pt=Je=null,Ju=!1,e)throw Error(z(300));return t}function Gp(){var t=Ma!==0;return Ma=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Je.memoizedState=vt=t:vt=vt.next=t,vt}function Rn(){if(pt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=vt===null?Je.memoizedState:vt.next;if(e!==null)vt=e,pt=t;else{if(t===null)throw Error(z(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?Je.memoizedState=vt=t:vt=vt.next=t}return vt}function Ua(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=Rn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=pt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,d=i;do{var h=d.lane;if((ti&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Je.lanes|=h,ni|=h}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,Gn(r,e.memoizedState)||(sn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Je.lanes|=i,ni|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=Rn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Gn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function r0(){}function s0(t,e){var n=Je,r=Rn(),s=e(),i=!Gn(r.memoizedState,s);if(i&&(r.memoizedState=s,sn=!0),r=r.queue,Kp(a0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||vt!==null&&vt.memoizedState.tag&1){if(n.flags|=2048,Fa(9,o0.bind(null,n,r,s,e),void 0,null),wt===null)throw Error(z(349));ti&30||i0(n,e,s)}return s}function i0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function o0(t,e,n,r){e.value=n,e.getSnapshot=r,l0(e)&&u0(t)}function a0(t,e,n){return n(function(){l0(e)&&u0(t)})}function l0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function u0(t){var e=Cr(t,1);e!==null&&zn(e,t,1,-1)}function lv(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=pA.bind(null,Je,t),[e.memoizedState,t]}function Fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Je.updateQueue,e===null?(e={lastEffect:null,stores:null},Je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function c0(){return Rn().memoizedState}function xu(t,e,n,r){var s=Xn();Je.flags|=t,s.memoizedState=Fa(1|e,n,void 0,r===void 0?null:r)}function Lc(t,e,n,r){var s=Rn();r=r===void 0?null:r;var i=void 0;if(pt!==null){var o=pt.memoizedState;if(i=o.destroy,r!==null&&Wp(r,o.deps)){s.memoizedState=Fa(e,n,i,r);return}}Je.flags|=t,s.memoizedState=Fa(1|e,n,i,r)}function uv(t,e){return xu(8390656,8,t,e)}function Kp(t,e){return Lc(2048,8,t,e)}function d0(t,e){return Lc(4,2,t,e)}function h0(t,e){return Lc(4,4,t,e)}function f0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p0(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,f0.bind(null,e,t),n)}function Qp(){}function m0(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function g0(t,e){var n=Rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function y0(t,e,n){return ti&21?(Gn(n,e)||(n=Ex(),Je.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function hA(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=lh.transition;lh.transition={};try{t(!1),e()}finally{Pe=n,lh.transition=r}}function v0(){return Rn().memoizedState}function fA(t,e,n){var r=fs(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_0(t))w0(e,n);else if(n=e0(t,e,n,r),n!==null){var s=Yt();zn(n,t,r,s),x0(n,e,r)}}function pA(t,e,n){var r=fs(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(t))w0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Gn(a,o)){var u=e.interleaved;u===null?(s.next=s,Fp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=e0(t,e,s,r),n!==null&&(s=Yt(),zn(n,t,r,s),x0(n,e,r))}}function _0(t){var e=t.alternate;return t===Je||e!==null&&e===Je}function w0(t,e){fa=Ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bp(t,n)}}var Zu={readContext:Cn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},mA={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:uv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xu(4194308,4,f0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return xu(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fA.bind(null,Je,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:lv,useDebugValue:Qp,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=lv(!1),e=t[0];return t=hA.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Je,s=Xn();if(He){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),wt===null)throw Error(z(349));ti&30||i0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,uv(a0.bind(null,r,i,t),[t]),r.flags|=2048,Fa(9,o0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Xn(),e=wt.identifierPrefix;if(He){var n=_r,r=vr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gA={readContext:Cn,useCallback:m0,useContext:Cn,useEffect:Kp,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:g0,useReducer:uh,useRef:c0,useState:function(){return uh(Ua)},useDebugValue:Qp,useDeferredValue:function(t){var e=Rn();return y0(e,pt.memoizedState,t)},useTransition:function(){var t=uh(Ua)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:r0,useSyncExternalStore:s0,useId:v0,unstable_isNewReconciler:!1},yA={readContext:Cn,useCallback:m0,useContext:Cn,useEffect:Kp,useImperativeHandle:p0,useInsertionEffect:d0,useLayoutEffect:h0,useMemo:g0,useReducer:ch,useRef:c0,useState:function(){return ch(Ua)},useDebugValue:Qp,useDeferredValue:function(t){var e=Rn();return pt===null?e.memoizedState=t:y0(e,pt.memoizedState,t)},useTransition:function(){var t=ch(Ua)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:r0,useSyncExternalStore:s0,useId:v0,unstable_isNewReconciler:!1};function Mn(t,e){if(t&&t.defaultProps){e=et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),s=fs(t),i=Er(r,s);i.payload=e,n!=null&&(i.callback=n),e=ds(t,i,s),e!==null&&(zn(e,t,s,r),_u(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),s=fs(t),i=Er(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ds(t,i,s),e!==null&&(zn(e,t,s,r),_u(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=fs(t),s=Er(n,r);s.tag=2,e!=null&&(s.callback=e),e=ds(t,s,r),e!==null&&(zn(e,t,r,n),_u(e,t,r))}};function cv(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,r)||!Pa(s,i):!0}function E0(t,e,n){var r=!1,s=xs,i=e.contextType;return typeof i=="object"&&i!==null?i=Cn(i):(s=ln(e)?Zs:$t.current,r=e.contextTypes,i=(r=r!=null)?to(t,s):xs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function dv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function yf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},$p(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Cn(i):(i=ln(e)?Zs:$t.current,s.context=to(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(gf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Vc.enqueueReplaceState(s,s.state,null),Yu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",r=e;do n+=Wb(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function dh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vA=typeof WeakMap=="function"?WeakMap:Map;function T0(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tc||(tc=!0,Af=r),vf(t,e)},n}function I0(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){vf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof r!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=PA.bind(null,t,e,n),e.then(t,t))}function fv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,ds(n,e,1))),n.lanes|=1),t)}var _A=Lr.ReactCurrentOwner,sn=!1;function Gt(t,e,n,r){e.child=t===null?Zx(e,null,n,r):ro(e,t.child,n,r)}function mv(t,e,n,r,s){n=n.render;var i=e.ref;return Ki(e,s),r=Hp(t,e,n,r,i,s),n=Gp(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rr(t,e,s)):(He&&n&&Dp(e),e.flags|=1,Gt(t,e,r,s),e.child)}function gv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!rm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,S0(t,e,i,r,s)):(t=Su(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,r)&&t.ref===e.ref)return Rr(t,e,s)}return e.flags|=1,t=ps(i,r),t.ref=e.ref,t.return=e,e.child=t}function S0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Pa(i,r)&&t.ref===e.ref)if(sn=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Rr(t,e,s)}return _f(t,e,n,r,s)}function b0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue($i,hn),hn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ue($i,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ue($i,hn),hn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ue($i,hn),hn|=r;return Gt(t,e,s,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,r,s){var i=ln(n)?Zs:$t.current;return i=to(e,i),Ki(e,s),n=Hp(t,e,n,r,i,s),r=Gp(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rr(t,e,s)):(He&&r&&Dp(e),e.flags|=1,Gt(t,e,n,s),e.child)}function yv(t,e,n,r,s){if(ln(n)){var i=!0;Wu(e)}else i=!1;if(Ki(e,s),e.stateNode===null)Eu(t,e),E0(e,n,r),yf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Cn(d):(d=ln(n)?Zs:$t.current,d=to(e,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&dv(e,o,r,d),Qr=!1;var m=e.memoizedState;o.state=m,Yu(e,r,o,s),u=e.memoizedState,a!==r||m!==u||an.current||Qr?(typeof h=="function"&&(gf(e,n,h,r),u=e.memoizedState),(a=Qr||cv(e,n,a,r,m,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,t0(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:Mn(e.type,a),o.props=d,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Cn(u):(u=ln(n)?Zs:$t.current,u=to(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&dv(e,o,r,u),Qr=!1,m=e.memoizedState,o.state=m,Yu(e,r,o,s);var _=e.memoizedState;a!==p||m!==_||an.current||Qr?(typeof y=="function"&&(gf(e,n,y,r),_=e.memoizedState),(d=Qr||cv(e,n,d,r,m,_,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return wf(t,e,n,r,i,s)}function wf(t,e,n,r,s,i){N0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&nv(e,n,!1),Rr(t,e,i);r=e.stateNode,_A.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,i),e.child=ro(e,null,a,i)):Gt(t,e,a,i),e.memoizedState=r.state,s&&nv(e,n,!0),e.child}function A0(t){var e=t.stateNode;e.pendingContext?tv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tv(t,e.context,!1),Bp(t,e.containerInfo)}function vv(t,e,n,r,s){return no(),Lp(s),e.flags|=256,Gt(t,e,n,r),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function C0(t,e,n){var r=e.pendingProps,s=Ye.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ue(Ye,s&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Fc(o,r,0,null),t=Xs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ef(n),e.memoizedState=xf,t):Yp(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return wA(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ps(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ps(a,i):(i=Xs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=xf,r}return i=t.child,t=i.sibling,r=ps(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yp(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function eu(t,e,n,r){return r!==null&&Lp(r),ro(e,t.child,null,n),t=Yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=dh(Error(z(422))),eu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Fc({mode:"visible",children:r.children},s,0,null),i=Xs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Ef(o),e.memoizedState=xf,i);if(!(e.mode&1))return eu(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=dh(i,r,void 0),eu(t,e,o,r)}if(a=(o&t.childLanes)!==0,sn||a){if(r=wt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Cr(t,s),zn(r,t,s,-1))}return nm(),r=dh(Error(z(421))),eu(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=jA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,pn=cs(s.nextSibling),yn=e,He=!0,Fn=null,t!==null&&(In[Sn++]=vr,In[Sn++]=_r,In[Sn++]=ei,vr=t.id,_r=t.overflow,ei=e),e=Yp(e,r.children),e.flags|=4096,e)}function _v(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mf(t.return,e,n)}function hh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function R0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Gt(t,e,r.children,n),r=Ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_v(t,n,e);else if(t.tag===19)_v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ue(Ye,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Xu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Xu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hh(e,!0,n,null,i);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ps(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ps(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xA(t,e,n){switch(e.tag){case 3:A0(e),no();break;case 5:n0(e);break;case 1:ln(e.type)&&Wu(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ue(Ku,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Ye,Ye.current&1),e.flags|=128,null):n&e.child.childLanes?C0(t,e,n):(Ue(Ye,Ye.current&1),t=Rr(t,e,n),t!==null?t.sibling:null);Ue(Ye,Ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return R0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ue(Ye,Ye.current),r)break;return null;case 22:case 23:return e.lanes=0,b0(t,e,n)}return Rr(t,e,n)}var k0,Tf,P0,j0;k0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};P0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Hs(nr.current);var i=null;switch(n){case"input":s=qh(t,s),r=qh(t,r),i=[];break;case"select":s=et({},s,{value:void 0}),r=et({},r,{value:void 0}),i=[];break;case"textarea":s=Gh(t,s),r=Gh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zu)}Qh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Sa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Be("scroll",t),i||a===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};j0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yo(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function EA(t,e,n){var r=e.pendingProps;switch(Op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return ln(e.type)&&qu(),jt(e),null;case 3:return r=e.stateNode,so(),ze(an),ze($t),qp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(kf(Fn),Fn=null))),Tf(t,e),jt(e),null;case 5:zp(e);var s=Hs(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return jt(e),null}if(t=Hs(nr.current),Jl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Zn]=e,r[Oa]=i,t=(e.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(s=0;s<na.length;s++)Be(na[s],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":Ay(r,i),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Be("invalid",r);break;case"textarea":Ry(r,i),Be("invalid",r)}Qh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Xl(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Xl(r.textContent,a,t),s=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Be("scroll",r)}switch(n){case"input":zl(r),Cy(r,i,!0);break;case"textarea":zl(r),ky(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=zu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ax(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zn]=e,t[Oa]=r,k0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yh(n,r),n){case"dialog":Be("cancel",t),Be("close",t),s=r;break;case"iframe":case"object":case"embed":Be("load",t),s=r;break;case"video":case"audio":for(s=0;s<na.length;s++)Be(na[s],t);s=r;break;case"source":Be("error",t),s=r;break;case"img":case"image":case"link":Be("error",t),Be("load",t),s=r;break;case"details":Be("toggle",t),s=r;break;case"input":Ay(t,r),s=qh(t,r),Be("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=et({},r,{value:void 0}),Be("invalid",t);break;case"textarea":Ry(t,r),s=Gh(t,r),Be("invalid",t);break;default:s=r}Qh(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?cx(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lx(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ba(t,u):typeof u=="number"&&ba(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Sa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Be("scroll",t):u!=null&&wp(t,i,u,o))}switch(n){case"input":zl(t),Cy(t,r,!1);break;case"textarea":zl(t),ky(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ws(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?qi(t,!!r.multiple,i,!1):r.defaultValue!=null&&qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=zu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)j0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Hs(Va.current),Hs(nr.current),Jl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zn]=e,(i=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Xl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zn]=e,e.stateNode=r}return jt(e),null;case 13:if(ze(Ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&pn!==null&&e.mode&1&&!(e.flags&128))Xx(),no(),e.flags|=98560,i=!1;else if(i=Jl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Zn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),i=!1}else Fn!==null&&(kf(Fn),Fn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ye.current&1?mt===0&&(mt=3):nm())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return so(),Tf(t,e),t===null&&ja(e.stateNode.containerInfo),jt(e),null;case 10:return Up(e.type._context),jt(e),null;case 17:return ln(e.type)&&qu(),jt(e),null;case 19:if(ze(Ye),i=e.memoizedState,i===null)return jt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Yo(i,!1);else{if(mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xu(t),o!==null){for(e.flags|=128,Yo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ue(Ye,Ye.current&1|2),e.child}t=t.sibling}i.tail!==null&&at()>oo&&(e.flags|=128,r=!0,Yo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!He)return jt(e),null}else 2*at()-i.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,Yo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=at(),e.sibling=null,n=Ye.current,Ue(Ye,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function TA(t,e){switch(Op(e),e.tag){case 1:return ln(e.type)&&qu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),ze(an),ze($t),qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zp(e),null;case 13:if(ze(Ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ze(Ye),null;case 4:return so(),null;case 10:return Up(e.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var tu=!1,Vt=!1,IA=typeof WeakSet=="function"?WeakSet:Set,te=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){rt(t,e,r)}else n.current=null}function If(t,e,n){try{n()}catch(r){rt(t,e,r)}}var wv=!1;function SA(t,e){if(af=Fu,t=Mx(),jp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,h=0,p=t,m=null;t:for(;;){for(var y;p!==n||s!==0&&p.nodeType!==3||(a=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===t)break t;if(m===n&&++d===s&&(a=o),m===i&&++h===r&&(u=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Fu=!1,te=e;te!==null;)if(e=te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,te=t;else for(;te!==null;){e=te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,S=_.memoizedState,T=e.stateNode,x=T.getSnapshotBeforeUpdate(e.elementType===e.type?E:Mn(e.type,E),S);T.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(R){rt(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,te=t;break}te=e.return}return _=wv,wv=!1,_}function pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&If(e,n,i)}s=s.next}while(s!==r)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Oa],delete e[df],delete e[aA],delete e[lA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O0(t){return t.tag===5||t.tag===3||t.tag===4}function xv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zu));else if(r!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}function Nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}var It=null,Un=!1;function qr(t,e,n){for(n=n.child;n!==null;)L0(t,e,n),n=n.sibling}function L0(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 5:Vt||Fi(n,e);case 6:var r=It,s=Un;It=null,qr(t,e,n),It=r,Un=s,It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?ih(t.parentNode,n):t.nodeType===1&&ih(t,n),Ra(t)):ih(It,n.stateNode));break;case 4:r=It,s=Un,It=n.stateNode.containerInfo,Un=!0,qr(t,e,n),It=r,Un=s;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&If(n,e,o),s=s.next}while(s!==r)}qr(t,e,n);break;case 1:if(!Vt&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){rt(n,e,a)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,qr(t,e,n),Vt=r):qr(t,e,n);break;default:qr(t,e,n)}}function Ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new IA),e.forEach(function(r){var s=DA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Un=!1;break e;case 3:It=a.stateNode.containerInfo,Un=!0;break e;case 4:It=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(It===null)throw Error(z(160));L0(i,o,s),It=null,Un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){rt(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V0(e,t),e=e.sibling}function V0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),Yn(t),r&4){try{pa(3,t,t.return),Mc(3,t)}catch(E){rt(t,t.return,E)}try{pa(5,t,t.return)}catch(E){rt(t,t.return,E)}}break;case 1:Vn(e,t),Yn(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(Vn(e,t),Yn(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var s=t.stateNode;try{ba(s,"")}catch(E){rt(t,t.return,E)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ix(s,i),Yh(a,o);var d=Yh(a,i);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?cx(s,p):h==="dangerouslySetInnerHTML"?lx(s,p):h==="children"?ba(s,p):wp(s,h,p,d)}switch(a){case"input":Wh(s,i);break;case"textarea":ox(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?qi(s,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?qi(s,!!i.multiple,i.defaultValue,!0):qi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Oa]=i}catch(E){rt(t,t.return,E)}}break;case 6:if(Vn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(E){rt(t,t.return,E)}}break;case 3:if(Vn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(E){rt(t,t.return,E)}break;case 4:Vn(e,t),Yn(t);break;case 13:Vn(e,t),Yn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Zp=at())),r&4&&Ev(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(d=Vt)||h,Vn(e,t),Vt=d):Vn(e,t),Yn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(te=t,h=t.child;h!==null;){for(p=te=h;te!==null;){switch(m=te,y=m.child,m.tag){case 0:case 11:case 14:case 15:pa(4,m,m.return);break;case 1:Fi(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){rt(r,n,E)}}break;case 5:Fi(m,m.return);break;case 22:if(m.memoizedState!==null){Iv(p);continue}}y!==null?(y.return=m,te=y):Iv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ux("display",o))}catch(E){rt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(E){rt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vn(e,t),Yn(t),r&4&&Ev(t);break;case 21:break;default:Vn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ba(s,""),r.flags&=-33);var i=xv(t);Nf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xv(t);bf(t,a,o);break;default:throw Error(z(161))}}catch(u){rt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bA(t,e,n){te=t,M0(t)}function M0(t,e,n){for(var r=(t.mode&1)!==0;te!==null;){var s=te,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||tu;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||Vt;a=tu;var d=Vt;if(tu=o,(Vt=u)&&!d)for(te=s;te!==null;)o=te,u=o.child,o.tag===22&&o.memoizedState!==null?Sv(s):u!==null?(u.return=o,te=u):Sv(s);for(;i!==null;)te=i,M0(i),i=i.sibling;te=s,tu=a,Vt=d}Tv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,te=i):Tv(t)}}function Tv(t){for(;te!==null;){var e=te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&av(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}av(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Vt||e.flags&512&&Sf(e)}catch(m){rt(e,e.return,m)}}if(e===t){te=null;break}if(n=e.sibling,n!==null){n.return=e.return,te=n;break}te=e.return}}function Iv(t){for(;te!==null;){var e=te;if(e===t){te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,te=n;break}te=e.return}}function Sv(t){for(;te!==null;){var e=te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(u){rt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){rt(e,s,u)}}var i=e.return;try{Sf(e)}catch(u){rt(e,i,u)}break;case 5:var o=e.return;try{Sf(e)}catch(u){rt(e,o,u)}}}catch(u){rt(e,e.return,u)}if(e===t){te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,te=a;break}te=e.return}}var NA=Math.ceil,ec=Lr.ReactCurrentDispatcher,Xp=Lr.ReactCurrentOwner,An=Lr.ReactCurrentBatchConfig,Se=0,wt=null,dt=null,Nt=0,hn=0,$i=Cs(0),mt=0,$a=null,ni=0,Uc=0,Jp=0,ma=null,nn=null,Zp=0,oo=1/0,mr=null,tc=!1,Af=null,hs=null,nu=!1,ss=null,nc=0,ga=0,Cf=null,Tu=-1,Iu=0;function Yt(){return Se&6?at():Tu!==-1?Tu:Tu=at()}function fs(t){return t.mode&1?Se&2&&Nt!==0?Nt&-Nt:cA.transition!==null?(Iu===0&&(Iu=Ex()),Iu):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:Cx(t.type)),t):1}function zn(t,e,n,r){if(50<ga)throw ga=0,Cf=null,Error(z(185));sl(t,n,r),(!(Se&2)||t!==wt)&&(t===wt&&(!(Se&2)&&(Uc|=n),mt===4&&Xr(t,Nt)),un(t,r),n===1&&Se===0&&!(e.mode&1)&&(oo=at()+500,Oc&&Rs()))}function un(t,e){var n=t.callbackNode;cN(t,e);var r=Uu(t,t===wt?Nt:0);if(r===0)n!==null&&Dy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dy(n),e===1)t.tag===0?uA(bv.bind(null,t)):Kx(bv.bind(null,t)),iA(function(){!(Se&6)&&Rs()}),n=null;else{switch(Tx(r)){case 1:n=Sp;break;case 4:n=wx;break;case 16:n=Mu;break;case 536870912:n=xx;break;default:n=Mu}n=H0(n,U0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U0(t,e){if(Tu=-1,Iu=0,Se&6)throw Error(z(327));var n=t.callbackNode;if(Qi()&&t.callbackNode!==n)return null;var r=Uu(t,t===wt?Nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rc(t,r);else{e=r;var s=Se;Se|=2;var i=$0();(wt!==t||Nt!==e)&&(mr=null,oo=at()+500,Ys(t,e));do try{RA();break}catch(a){F0(t,a)}while(!0);Mp(),ec.current=i,Se=s,dt!==null?e=0:(wt=null,Nt=0,e=mt)}if(e!==0){if(e===2&&(s=tf(t),s!==0&&(r=s,e=Rf(t,s))),e===1)throw n=$a,Ys(t,0),Xr(t,r),un(t,at()),n;if(e===6)Xr(t,r);else{if(s=t.current.alternate,!(r&30)&&!AA(s)&&(e=rc(t,r),e===2&&(i=tf(t),i!==0&&(r=i,e=Rf(t,i))),e===1))throw n=$a,Ys(t,0),Xr(t,r),un(t,at()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Bs(t,nn,mr);break;case 3:if(Xr(t,r),(r&130023424)===r&&(e=Zp+500-at(),10<e)){if(Uu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=cf(Bs.bind(null,t,nn,mr),e);break}Bs(t,nn,mr);break;case 4:if(Xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Bn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=at()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NA(r/1960))-r,10<r){t.timeoutHandle=cf(Bs.bind(null,t,nn,mr),r);break}Bs(t,nn,mr);break;case 5:Bs(t,nn,mr);break;default:throw Error(z(329))}}}return un(t,at()),t.callbackNode===n?U0.bind(null,t):null}function Rf(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Ys(t,e).flags|=256),t=rc(t,e),t!==2&&(e=nn,nn=n,e!==null&&kf(e)),t}function kf(t){nn===null?nn=t:nn.push.apply(nn,t)}function AA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Gn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xr(t,e){for(e&=~Jp,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),r=1<<n;t[n]=-1,e&=~r}}function bv(t){if(Se&6)throw Error(z(327));Qi();var e=Uu(t,0);if(!(e&1))return un(t,at()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var r=tf(t);r!==0&&(e=r,n=Rf(t,r))}if(n===1)throw n=$a,Ys(t,0),Xr(t,e),un(t,at()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bs(t,nn,mr),un(t,at()),null}function em(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&(oo=at()+500,Oc&&Rs())}}function ri(t){ss!==null&&ss.tag===0&&!(Se&6)&&Qi();var e=Se;Se|=1;var n=An.transition,r=Pe;try{if(An.transition=null,Pe=1,t)return t()}finally{Pe=r,An.transition=n,Se=e,!(Se&6)&&Rs()}}function tm(){hn=$i.current,ze($i)}function Ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sA(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(Op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qu();break;case 3:so(),ze(an),ze($t),qp();break;case 5:zp(r);break;case 4:so();break;case 13:ze(Ye);break;case 19:ze(Ye);break;case 10:Up(r.type._context);break;case 22:case 23:tm()}n=n.return}if(wt=t,dt=t=ps(t.current,null),Nt=hn=e,mt=0,$a=null,Jp=Uc=ni=0,nn=ma=null,Ws!==null){for(e=0;e<Ws.length;e++)if(n=Ws[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ws=null}return t}function F0(t,e){do{var n=dt;try{if(Mp(),wu.current=Zu,Ju){for(var r=Je.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ju=!1}if(ti=0,vt=pt=Je=null,fa=!1,Ma=0,Xp.current=null,n===null||n.return===null){mt=1,$a=e,dt=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=Nt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=fv(o);if(y!==null){y.flags&=-257,pv(y,o,a,i,e),y.mode&1&&hv(i,d,e),e=y,u=d;var _=e.updateQueue;if(_===null){var E=new Set;E.add(u),e.updateQueue=E}else _.add(u);break e}else{if(!(e&1)){hv(i,d,e),nm();break e}u=Error(z(426))}}else if(He&&a.mode&1){var S=fv(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),pv(S,o,a,i,e),Lp(io(u,a));break e}}i=u=io(u,a),mt!==4&&(mt=2),ma===null?ma=[i]:ma.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=T0(i,u,e);ov(i,T);break e;case 1:a=u;var x=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(hs===null||!hs.has(v)))){i.flags|=65536,e&=-e,i.lanes|=e;var R=I0(i,a,e);ov(i,R);break e}}i=i.return}while(i!==null)}z0(n)}catch(j){e=j,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(!0)}function $0(){var t=ec.current;return ec.current=Zu,t===null?Zu:t}function nm(){(mt===0||mt===3||mt===2)&&(mt=4),wt===null||!(ni&268435455)&&!(Uc&268435455)||Xr(wt,Nt)}function rc(t,e){var n=Se;Se|=2;var r=$0();(wt!==t||Nt!==e)&&(mr=null,Ys(t,e));do try{CA();break}catch(s){F0(t,s)}while(!0);if(Mp(),Se=n,ec.current=r,dt!==null)throw Error(z(261));return wt=null,Nt=0,mt}function CA(){for(;dt!==null;)B0(dt)}function RA(){for(;dt!==null&&!tN();)B0(dt)}function B0(t){var e=W0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?z0(t):dt=e,Xp.current=null}function z0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TA(n,e),n!==null){n.flags&=32767,dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mt=6,dt=null;return}}else if(n=EA(n,e,hn),n!==null){dt=n;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);mt===0&&(mt=5)}function Bs(t,e,n){var r=Pe,s=An.transition;try{An.transition=null,Pe=1,kA(t,e,n,r)}finally{An.transition=s,Pe=r}return null}function kA(t,e,n,r){do Qi();while(ss!==null);if(Se&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(dN(t,i),t===wt&&(dt=wt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nu||(nu=!0,H0(Mu,function(){return Qi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=An.transition,An.transition=null;var o=Pe;Pe=1;var a=Se;Se|=4,Xp.current=null,SA(t,n),V0(n,t),XN(lf),Fu=!!af,lf=af=null,t.current=n,bA(n),nN(),Se=a,Pe=o,An.transition=i}else t.current=n;if(nu&&(nu=!1,ss=t,nc=s),i=t.pendingLanes,i===0&&(hs=null),iN(n.stateNode),un(t,at()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(tc)throw tc=!1,t=Af,Af=null,t;return nc&1&&t.tag!==0&&Qi(),i=t.pendingLanes,i&1?t===Cf?ga++:(ga=0,Cf=t):ga=0,Rs(),null}function Qi(){if(ss!==null){var t=Tx(nc),e=An.transition,n=Pe;try{if(An.transition=null,Pe=16>t?16:t,ss===null)var r=!1;else{if(t=ss,ss=null,nc=0,Se&6)throw Error(z(331));var s=Se;for(Se|=4,te=t.current;te!==null;){var i=te,o=i.child;if(te.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(te=d;te!==null;){var h=te;switch(h.tag){case 0:case 11:case 15:pa(8,h,i)}var p=h.child;if(p!==null)p.return=h,te=p;else for(;te!==null;){h=te;var m=h.sibling,y=h.return;if(D0(h),h===d){te=null;break}if(m!==null){m.return=y,te=m;break}te=y}}}var _=i.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var S=E.sibling;E.sibling=null,E=S}while(E!==null)}}te=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,te=o;else e:for(;te!==null;){if(i=te,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pa(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,te=T;break e}te=i.return}}var x=t.current;for(te=x;te!==null;){o=te;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,te=v;else e:for(o=x;te!==null;){if(a=te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(j){rt(a,a.return,j)}if(a===o){te=null;break e}var R=a.sibling;if(R!==null){R.return=a.return,te=R;break e}te=a.return}}if(Se=s,Rs(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Rc,t)}catch{}r=!0}return r}finally{Pe=n,An.transition=e}}return!1}function Nv(t,e,n){e=io(n,e),e=T0(t,e,1),t=ds(t,e,1),e=Yt(),t!==null&&(sl(t,1,e),un(t,e))}function rt(t,e,n){if(t.tag===3)Nv(t,t,n);else for(;e!==null;){if(e.tag===3){Nv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hs===null||!hs.has(r))){t=io(n,t),t=I0(e,t,1),e=ds(e,t,1),t=Yt(),e!==null&&(sl(e,1,t),un(e,t));break}}e=e.return}}function PA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,wt===t&&(Nt&n)===n&&(mt===4||mt===3&&(Nt&130023424)===Nt&&500>at()-Zp?Ys(t,0):Jp|=n),un(t,e)}function q0(t,e){e===0&&(t.mode&1?(e=Hl,Hl<<=1,!(Hl&130023424)&&(Hl=4194304)):e=1);var n=Yt();t=Cr(t,e),t!==null&&(sl(t,e,n),un(t,n))}function jA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q0(t,n)}function DA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),q0(t,n)}var W0;W0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,xA(t,e,n);sn=!!(t.flags&131072)}else sn=!1,He&&e.flags&1048576&&Qx(e,Gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Eu(t,e),t=e.pendingProps;var s=to(e,$t.current);Ki(e,n),s=Hp(null,e,r,t,s,n);var i=Gp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(i=!0,Wu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$p(e),s.updater=Vc,e.stateNode=s,s._reactInternals=e,yf(e,r,t,n),e=wf(null,e,r,!0,i,n)):(e.tag=0,He&&i&&Dp(e),Gt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Eu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=LA(r),t=Mn(r,t),s){case 0:e=_f(null,e,r,t,n);break e;case 1:e=yv(null,e,r,t,n);break e;case 11:e=mv(null,e,r,t,n);break e;case 14:e=gv(null,e,r,Mn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),_f(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),yv(t,e,r,s,n);case 3:e:{if(A0(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,t0(t,e),Yu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=io(Error(z(423)),e),e=vv(t,e,r,n,s);break e}else if(r!==s){s=io(Error(z(424)),e),e=vv(t,e,r,n,s);break e}else for(pn=cs(e.stateNode.containerInfo.firstChild),yn=e,He=!0,Fn=null,n=Zx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===s){e=Rr(t,e,n);break e}Gt(t,e,r,n)}e=e.child}return e;case 5:return n0(e),t===null&&pf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,uf(r,s)?o=null:i!==null&&uf(r,i)&&(e.flags|=32),N0(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return C0(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):Gt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),mv(t,e,r,s,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ue(Ku,r._currentValue),r._currentValue=o,i!==null)if(Gn(i.value,o)){if(i.children===s.children&&!an.current){e=Rr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Er(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),mf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Gt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ki(e,n),s=Cn(s),r=r(s),e.flags|=1,Gt(t,e,r,n),e.child;case 14:return r=e.type,s=Mn(r,e.pendingProps),s=Mn(r.type,s),gv(t,e,r,s,n);case 15:return S0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),Eu(t,e),e.tag=1,ln(r)?(t=!0,Wu(e)):t=!1,Ki(e,n),E0(e,r,s),yf(e,r,s,n),wf(null,e,r,!0,t,n);case 19:return R0(t,e,n);case 22:return b0(t,e,n)}throw Error(z(156,e.tag))};function H0(t,e){return _x(t,e)}function OA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,r){return new OA(t,e,n,r)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LA(t){if(typeof t=="function")return rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ep)return 11;if(t===Tp)return 14}return 2}function ps(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Su(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ki:return Xs(n.children,s,i,e);case xp:o=8,s|=8;break;case Fh:return t=Nn(12,n,e,s|2),t.elementType=Fh,t.lanes=i,t;case $h:return t=Nn(13,n,e,s),t.elementType=$h,t.lanes=i,t;case Bh:return t=Nn(19,n,e,s),t.elementType=Bh,t.lanes=i,t;case nx:return Fc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ex:o=10;break e;case tx:o=9;break e;case Ep:o=11;break e;case Tp:o=14;break e;case Kr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Nn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Xs(t,e,n,r){return t=Nn(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=Nn(22,t,r,e),t.elementType=nx,t.lanes=n,t.stateNode={isHidden:!1},t}function fh(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function ph(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kd(0),this.expirationTimes=Kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function sm(t,e,n,r,s,i,o,a,u){return t=new VA(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Nn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$p(i),t}function MA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G0(t){if(!t)return xs;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(ln(n))return Gx(t,n,e)}return e}function K0(t,e,n,r,s,i,o,a,u){return t=sm(n,r,!0,t,s,i,o,a,u),t.context=G0(null),n=t.current,r=Yt(),s=fs(n),i=Er(r,s),i.callback=e??null,ds(n,i,s),t.current.lanes=s,sl(t,s,r),un(t,r),t}function $c(t,e,n,r){var s=e.current,i=Yt(),o=fs(s);return n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ds(s,e,o),t!==null&&(zn(t,s,o,i),_u(t,s,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function im(t,e){Av(t,e),(t=t.alternate)&&Av(t,e)}function UA(){return null}var Q0=typeof reportError=="function"?reportError:function(t){console.error(t)};function om(t){this._internalRoot=t}Bc.prototype.render=om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));$c(t,e,null,null)};Bc.prototype.unmount=om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){$c(null,t,null,null)}),e[Ar]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=bx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yr.length&&e!==0&&e<Yr[n].priority;n++);Yr.splice(n,0,t),n===0&&Ax(t)}};function am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cv(){}function FA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=sc(o);i.call(d)}}var o=K0(e,r,t,0,null,!1,!1,"",Cv);return t._reactRootContainer=o,t[Ar]=o.current,ja(t.nodeType===8?t.parentNode:t),ri(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=sc(u);a.call(d)}}var u=sm(t,0,!1,null,null,!1,!1,"",Cv);return t._reactRootContainer=u,t[Ar]=u.current,ja(t.nodeType===8?t.parentNode:t),ri(function(){$c(e,u,n,r)}),u}function qc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=sc(o);a.call(u)}}$c(e,o,t,s)}else o=FA(n,e,t,s,r);return sc(o)}Ix=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(bp(e,n|1),un(e,at()),!(Se&6)&&(oo=at()+500,Rs()))}break;case 13:ri(function(){var r=Cr(t,1);if(r!==null){var s=Yt();zn(r,t,1,s)}}),im(t,1)}};Np=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Yt();zn(e,t,134217728,n)}im(t,134217728)}};Sx=function(t){if(t.tag===13){var e=fs(t),n=Cr(t,e);if(n!==null){var r=Yt();zn(n,t,e,r)}im(t,e)}};bx=function(){return Pe};Nx=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};Jh=function(t,e,n){switch(e){case"input":if(Wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Dc(r);if(!s)throw Error(z(90));sx(r),Wh(r,s)}}}break;case"textarea":ox(t,n);break;case"select":e=n.value,e!=null&&qi(t,!!n.multiple,e,!1)}};fx=em;px=ri;var $A={usingClientEntryPoint:!1,Events:[ol,Oi,Dc,dx,hx,em]},Xo={findFiberByHostInstance:qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BA={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yx(t),t===null?null:t.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||UA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Rc=ru.inject(BA),tr=ru}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$A;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(e))throw Error(z(200));return MA(t,e,null,n)};xn.createRoot=function(t,e){if(!am(t))throw Error(z(299));var n=!1,r="",s=Q0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=sm(t,1,!1,null,null,n,!1,r,s),t[Ar]=e.current,ja(t.nodeType===8?t.parentNode:t),new om(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=yx(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return ri(t)};xn.hydrate=function(t,e,n){if(!zc(e))throw Error(z(200));return qc(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!am(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Q0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=K0(e,null,t,1,n??null,s,!1,i,o),t[Ar]=e.current,ja(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Bc(e)};xn.render=function(t,e,n){if(!zc(e))throw Error(z(200));return qc(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!zc(t))throw Error(z(40));return t._reactRootContainer?(ri(function(){qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};xn.unstable_batchedUpdates=em;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return qc(t,e,n,!1,r)};xn.version="18.3.1-next-f1338f8080-20240426";function Y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)}catch(t){console.error(t)}}Y0(),Yw.exports=xn;var zA=Yw.exports,Rv=zA;Mh.createRoot=Rv.createRoot,Mh.hydrateRoot=Rv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}var is;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(is||(is={}));const kv="popstate";function qA(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return Pf("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ic(s)}return HA(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function X0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function WA(){return Math.random().toString(36).substr(2,8)}function Pv(t,e){return{usr:t.state,key:t.key,idx:e}}function Pf(t,e,n,r){return n===void 0&&(n=null),Ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wo(e):e,{state:n,key:e&&e.key||r||WA()})}function ic(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function wo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function HA(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=is.Pop,u=null,d=h();d==null&&(d=0,o.replaceState(Ba({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=is.Pop;let S=h(),T=S==null?null:S-d;d=S,u&&u({action:a,location:E.location,delta:T})}function m(S,T){a=is.Push;let x=Pf(E.location,S,T);d=h()+1;let v=Pv(x,d),R=E.createHref(x);try{o.pushState(v,"",R)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(R)}i&&u&&u({action:a,location:E.location,delta:1})}function y(S,T){a=is.Replace;let x=Pf(E.location,S,T);d=h();let v=Pv(x,d),R=E.createHref(x);o.replaceState(v,"",R),i&&u&&u({action:a,location:E.location,delta:0})}function _(S){let T=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof S=="string"?S:ic(S);return x=x.replace(/ $/,"%20"),Ze(T,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,T)}let E={get action(){return a},get location(){return t(s,o)},listen(S){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(kv,p),u=S,()=>{s.removeEventListener(kv,p),u=null}},createHref(S){return e(s,S)},createURL:_,encodeLocation(S){let T=_(S);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:y,go(S){return o.go(S)}};return E}var jv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jv||(jv={}));function GA(t,e,n){return n===void 0&&(n="/"),KA(t,e,n)}function KA(t,e,n,r){let s=typeof e=="string"?wo(e):e,i=ao(s.pathname||"/",n);if(i==null)return null;let o=J0(t);QA(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let d=o1(i);a=s1(o[u],d)}return a}function J0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=ms([r,u.relativePath]),h=n.concat(u);i.children&&i.children.length>0&&(Ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),J0(i.children,e,h,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:n1(d,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let u of Z0(i.path))s(i,o,u)}),e}function Z0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Z0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function QA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:r1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YA=/^:[\w-]+$/,XA=3,JA=2,ZA=1,e1=10,t1=-2,Dv=t=>t==="*";function n1(t,e){let n=t.split("/"),r=n.length;return n.some(Dv)&&(r+=t1),e&&(r+=JA),n.filter(s=>!Dv(s)).reduce((s,i)=>s+(YA.test(i)?XA:i===""?ZA:e1),r)}function r1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function s1(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",p=jf({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h),m=u.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:ms([i,p.pathname]),pathnameBase:c1(ms([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=ms([i,p.pathnameBase]))}return o}function jf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=i1(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,h,p)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let E=a[p]||"";o=i.slice(0,i.length-E.length).replace(/(.)\/+$/,"$1")}const _=a[p];return y&&!_?d[m]=void 0:d[m]=(_||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function i1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),X0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function o1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return X0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ao(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function a1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?wo(t):t;return{pathname:n?n.startsWith("/")?n:l1(n,e):e,search:d1(r),hash:h1(s)}}function l1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function mh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lm(t,e){let n=u1(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function um(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=wo(t):(s=Ba({},t),Ze(!s.pathname||!s.pathname.includes("?"),mh("?","pathname","search",s)),Ze(!s.pathname||!s.pathname.includes("#"),mh("#","pathname","hash",s)),Ze(!s.search||!s.search.includes("#"),mh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;s.pathname=m.join("/")}a=p>=0?e[p]:"/"}let u=a1(s,a),d=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const ms=t=>t.join("/").replace(/\/\/+/g,"/"),c1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),d1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,h1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function f1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eE=["post","put","patch","delete"];new Set(eE);const p1=["get",...eE];new Set(p1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},za.apply(this,arguments)}const Wc=C.createContext(null),tE=C.createContext(null),Vr=C.createContext(null),Hc=C.createContext(null),Mr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),nE=C.createContext(null);function m1(t,e){let{relative:n}=e===void 0?{}:e;xo()||Ze(!1);let{basename:r,navigator:s}=C.useContext(Vr),{hash:i,pathname:o,search:a}=Gc(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ms([r,o])),s.createHref({pathname:u,search:a,hash:i})}function xo(){return C.useContext(Hc)!=null}function jn(){return xo()||Ze(!1),C.useContext(Hc).location}function rE(t){C.useContext(Vr).static||C.useLayoutEffect(t)}function Ur(){let{isDataRoute:t}=C.useContext(Mr);return t?A1():g1()}function g1(){xo()||Ze(!1);let t=C.useContext(Wc),{basename:e,future:n,navigator:r}=C.useContext(Vr),{matches:s}=C.useContext(Mr),{pathname:i}=jn(),o=JSON.stringify(lm(s,n.v7_relativeSplatPath)),a=C.useRef(!1);return rE(()=>{a.current=!0}),C.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let p=um(d,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ms([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,i,t])}function mi(){let{matches:t}=C.useContext(Mr),e=t[t.length-1];return e?e.params:{}}function Gc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Vr),{matches:s}=C.useContext(Mr),{pathname:i}=jn(),o=JSON.stringify(lm(s,r.v7_relativeSplatPath));return C.useMemo(()=>um(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function y1(t,e){return v1(t,e)}function v1(t,e,n,r){xo()||Ze(!1);let{navigator:s}=C.useContext(Vr),{matches:i}=C.useContext(Mr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=jn(),h;if(e){var p;let S=typeof e=="string"?wo(e):e;u==="/"||(p=S.pathname)!=null&&p.startsWith(u)||Ze(!1),h=S}else h=d;let m=h.pathname||"/",y=m;if(u!=="/"){let S=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(S.length).join("/")}let _=GA(t,{pathname:y}),E=T1(_&&_.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:ms([u,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:ms([u,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return e&&E?C.createElement(Hc.Provider,{value:{location:za({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:is.Pop}},E):E}function _1(){let t=N1(),e=f1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:s},n):null,null)}const w1=C.createElement(_1,null);class x1 extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Mr.Provider,{value:this.props.routeContext},C.createElement(nE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E1(t){let{routeContext:e,match:n,children:r}=t,s=C.useContext(Wc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Mr.Provider,{value:e},r)}function T1(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||Ze(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=h),p.route.id){let{loaderData:m,errors:y}=n,_=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||_){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let y,_=!1,E=null,S=null;n&&(y=a&&p.route.id?a[p.route.id]:void 0,E=p.route.errorElement||w1,u&&(d<0&&m===0?(C1("route-fallback"),_=!0,S=null):d===m&&(_=!0,S=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),x=()=>{let v;return y?v=E:_?v=S:p.route.Component?v=C.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=h,C.createElement(E1,{match:p,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:v})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?C.createElement(x1,{location:n.location,revalidation:n.revalidation,component:E,error:y,children:x(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):x()},null)}var sE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sE||{}),iE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(iE||{});function I1(t){let e=C.useContext(Wc);return e||Ze(!1),e}function S1(t){let e=C.useContext(tE);return e||Ze(!1),e}function b1(t){let e=C.useContext(Mr);return e||Ze(!1),e}function oE(t){let e=b1(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function N1(){var t;let e=C.useContext(nE),n=S1(),r=oE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function A1(){let{router:t}=I1(sE.UseNavigateStable),e=oE(iE.UseNavigateStable),n=C.useRef(!1);return rE(()=>{n.current=!0}),C.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,za({fromRouteId:e},i)))},[t,e])}const Ov={};function C1(t,e,n){Ov[t]||(Ov[t]=!0)}function R1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function rr(t){let{to:e,replace:n,state:r,relative:s}=t;xo()||Ze(!1);let{future:i,static:o}=C.useContext(Vr),{matches:a}=C.useContext(Mr),{pathname:u}=jn(),d=Ur(),h=um(e,lm(a,i.v7_relativeSplatPath),u,s==="path"),p=JSON.stringify(h);return C.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:s}),[d,p,s,n,r]),null}function Re(t){Ze(!1)}function k1(t){let{basename:e="/",children:n=null,location:r,navigationType:s=is.Pop,navigator:i,static:o=!1,future:a}=t;xo()&&Ze(!1);let u=e.replace(/^\/*/,"/"),d=C.useMemo(()=>({basename:u,navigator:i,static:o,future:za({v7_relativeSplatPath:!1},a)}),[u,a,i,o]);typeof r=="string"&&(r=wo(r));let{pathname:h="/",search:p="",hash:m="",state:y=null,key:_="default"}=r,E=C.useMemo(()=>{let S=ao(h,u);return S==null?null:{location:{pathname:S,search:p,hash:m,state:y,key:_},navigationType:s}},[u,h,p,m,y,_,s]);return E==null?null:C.createElement(Vr.Provider,{value:d},C.createElement(Hc.Provider,{children:n,value:E}))}function P1(t){let{children:e,location:n}=t;return y1(Df(e),n)}new Promise(()=>{});function Df(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,s)=>{if(!C.isValidElement(r))return;let i=[...e,s];if(r.type===C.Fragment){n.push.apply(n,Df(r.props.children,i));return}r.type!==Re&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Df(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oc.apply(this,arguments)}function aE(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function j1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function D1(t,e){return t.button===0&&(!e||e==="_self")&&!j1(t)}function Of(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function O1(t,e){let n=Of(t);return e&&e.forEach((r,s)=>{n.has(s)||e.getAll(s).forEach(i=>{n.append(s,i)})}),n}const L1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],V1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],M1="6";try{window.__reactRouterVersion=M1}catch{}const U1=C.createContext({isTransitioning:!1}),F1="startTransition",Lv=Pb[F1];function $1(t){let{basename:e,children:n,future:r,window:s}=t,i=C.useRef();i.current==null&&(i.current=qA({window:s,v5Compat:!0}));let o=i.current,[a,u]=C.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},h=C.useCallback(p=>{d&&Lv?Lv(()=>u(p)):u(p)},[u,d]);return C.useLayoutEffect(()=>o.listen(h),[o,h]),C.useEffect(()=>R1(r),[r]),C.createElement(k1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const B1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ve=C.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:u,to:d,preventScrollReset:h,viewTransition:p}=e,m=aE(e,L1),{basename:y}=C.useContext(Vr),_,E=!1;if(typeof d=="string"&&z1.test(d)&&(_=d,B1))try{let v=new URL(window.location.href),R=d.startsWith("//")?new URL(v.protocol+d):new URL(d),j=ao(R.pathname,y);R.origin===v.origin&&j!=null?d=j+R.search+R.hash:E=!0}catch{}let S=m1(d,{relative:s}),T=W1(d,{replace:o,state:a,target:u,preventScrollReset:h,relative:s,viewTransition:p});function x(v){r&&r(v),v.defaultPrevented||T(v)}return C.createElement("a",oc({},m,{href:_||S,onClick:E||i?r:x,ref:n,target:u}))}),su=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:u,viewTransition:d,children:h}=e,p=aE(e,V1),m=Gc(u,{relative:p.relative}),y=jn(),_=C.useContext(tE),{navigator:E,basename:S}=C.useContext(Vr),T=_!=null&&G1(m)&&d===!0,x=E.encodeLocation?E.encodeLocation(m).pathname:m.pathname,v=y.pathname,R=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(v=v.toLowerCase(),R=R?R.toLowerCase():null,x=x.toLowerCase()),R&&S&&(R=ao(R,S)||R);const j=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let L=v===x||!o&&v.startsWith(x)&&v.charAt(j)==="/",b=R!=null&&(R===x||!o&&R.startsWith(x)&&R.charAt(x.length)==="/"),w={isActive:L,isPending:b,isTransitioning:T},N=L?r:void 0,A;typeof i=="function"?A=i(w):A=[i,L?"active":null,b?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(w):a;return C.createElement(ve,oc({},p,{"aria-current":N,className:A,ref:n,style:P,to:u,viewTransition:d}),typeof h=="function"?h(w):h)});var Lf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Lf||(Lf={}));var Vv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vv||(Vv={}));function q1(t){let e=C.useContext(Wc);return e||Ze(!1),e}function W1(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,u=Ur(),d=jn(),h=Gc(t,{relative:o});return C.useCallback(p=>{if(D1(p,n)){p.preventDefault();let m=r!==void 0?r:ic(d)===ic(h);u(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[d,u,h,r,s,n,t,i,o,a])}function H1(t){let e=C.useRef(Of(t)),n=C.useRef(!1),r=jn(),s=C.useMemo(()=>O1(r.search,n.current?null:e.current),[r.search]),i=Ur(),o=C.useCallback((a,u)=>{const d=Of(typeof a=="function"?a(s):a);n.current=!0,i("?"+d,u)},[i,s]);return[s,o]}function G1(t,e){e===void 0&&(e={});let n=C.useContext(U1);n==null&&Ze(!1);let{basename:r}=q1(Lf.useViewTransitionState),s=Gc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=ao(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ao(n.nextLocation.pathname,r)||n.nextLocation.pathname;return jf(s.pathname,o)!=null||jf(s.pathname,i)!=null}const K1=()=>{};var Mv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Q1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},uE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,h=i>>2,p=(i&3)<<4|a>>4;let m=(a&15)<<2|d>>6,y=d&63;u||(y=64,o||(m=64)),r.push(n[h],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Q1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||d==null||p==null)throw new Y1;const m=i<<2|a>>4;if(r.push(m),d!==64){const y=a<<4&240|d>>2;if(r.push(y),p!==64){const _=d<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Y1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X1=function(t){const e=lE(t);return uE.encodeByteArray(e,!0)},ac=function(t){return X1(t).replace(/\./g,"")},cE=function(t){try{return uE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=()=>J1().__FIREBASE_DEFAULTS__,eC=()=>{if(typeof process>"u"||typeof Mv>"u")return;const t=Mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cE(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return K1()||Z1()||eC()||tC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dE=t=>{var e,n;return(n=(e=Kc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},cm=t=>{const e=dE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hE=()=>{var t;return(t=Kc())==null?void 0:t.config},fE=t=>{var e;return(e=Kc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qc(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ac(JSON.stringify(n)),ac(JSON.stringify(o)),""].join(".")}const ya={};function rC(){const t={prod:[],emulator:[]};for(const e of Object.keys(ya))ya[e]?t.emulator.push(e):t.prod.push(e);return t}function sC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Uv=!1;function Yc(t,e){if(typeof window>"u"||typeof document>"u"||!Fr(window.location.host)||ya[t]===e||ya[t]||Uv)return;ya[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=rC().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Uv=!0,o()},m}function h(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=sC(r),y=n("text"),_=document.getElementById(y)||document.createElement("span"),E=n("learnmore"),S=document.getElementById(E)||document.createElement("a"),T=n("preprendIcon"),x=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const v=m.element;a(v),h(S,E);const R=d();u(x,T),v.append(x,_,S,R),document.body.appendChild(v)}i?(_.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function oC(){var e;const t=(e=Kc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cC(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dC(){return!oC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function gE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function hC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fC,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,a,r)}}function pC(t,e){return t.replace(mC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mC=/\{\$([^}]+)}/g;function gC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Fv(i)&&Fv(o)){if(!si(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ra(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yC(t,e){const n=new vC(t,e);return n.subscribe.bind(n)}class vC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_C(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gh),s.error===void 0&&(s.error=gh),s.complete===void 0&&(s.complete=gh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _C(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EC(e))try{this.getOrInitializeService({instanceIdentifier:zs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zs){return this.instances.has(e)}getOptions(e=zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zs){return this.component?this.component.multipleInstances?e:zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xC(t){return t===zs?void 0:t}function EC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const IC={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},SC=we.INFO,bC={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},NC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=bC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dm{constructor(e){this.name=e,this._logLevel=SC,this._logHandler=NC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const AC=(t,e)=>e.some(n=>t instanceof n);let $v,Bv;function CC(){return $v||($v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RC(){return Bv||(Bv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yE=new WeakMap,Vf=new WeakMap,vE=new WeakMap,yh=new WeakMap,hm=new WeakMap;function kC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yE.set(n,t)}).catch(()=>{}),hm.set(e,t),e}function PC(t){if(Vf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vf.set(t,e)}let Mf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jC(t){Mf=t(Mf)}function DC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vh(this),e,...n);return vE.set(r,e.sort?e.sort():[e]),Tr(r)}:RC().includes(t)?function(...e){return t.apply(vh(this),e),Tr(yE.get(this))}:function(...e){return Tr(t.apply(vh(this),e))}}function OC(t){return typeof t=="function"?DC(t):(t instanceof IDBTransaction&&PC(t),AC(t,CC())?new Proxy(t,Mf):t)}function Tr(t){if(t instanceof IDBRequest)return kC(t);if(yh.has(t))return yh.get(t);const e=OC(t);return e!==t&&(yh.set(t,e),hm.set(e,t)),e}const vh=t=>hm.get(t);function Xc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Tr(o.result),u.oldVersion,u.newVersion,Tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}function _h(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Tr(n).then(()=>{})}const LC=["get","getKey","getAll","getAllKeys","count"],VC=["put","add","delete","clear"],wh=new Map;function zv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wh.get(e))return wh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=VC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LC.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&u.done]))[0]};return wh.set(e,i),i}jC(t=>({...t,get:(e,n,r)=>zv(e,n)||t.get(e,n,r),has:(e,n)=>!!zv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uf="@firebase/app",qv="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new dm("@firebase/app"),FC="@firebase/app-compat",$C="@firebase/analytics-compat",BC="@firebase/analytics",zC="@firebase/app-check-compat",qC="@firebase/app-check",WC="@firebase/auth",HC="@firebase/auth-compat",GC="@firebase/database",KC="@firebase/data-connect",QC="@firebase/database-compat",YC="@firebase/functions",XC="@firebase/functions-compat",JC="@firebase/installations",ZC="@firebase/installations-compat",eR="@firebase/messaging",tR="@firebase/messaging-compat",nR="@firebase/performance",rR="@firebase/performance-compat",sR="@firebase/remote-config",iR="@firebase/remote-config-compat",oR="@firebase/storage",aR="@firebase/storage-compat",lR="@firebase/firestore",uR="@firebase/ai",cR="@firebase/firestore-compat",dR="firebase",hR="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="[DEFAULT]",fR={[Uf]:"fire-core",[FC]:"fire-core-compat",[BC]:"fire-analytics",[$C]:"fire-analytics-compat",[qC]:"fire-app-check",[zC]:"fire-app-check-compat",[WC]:"fire-auth",[HC]:"fire-auth-compat",[GC]:"fire-rtdb",[KC]:"fire-data-connect",[QC]:"fire-rtdb-compat",[YC]:"fire-fn",[XC]:"fire-fn-compat",[JC]:"fire-iid",[ZC]:"fire-iid-compat",[eR]:"fire-fcm",[tR]:"fire-fcm-compat",[nR]:"fire-perf",[rR]:"fire-perf-compat",[sR]:"fire-rc",[iR]:"fire-rc-compat",[oR]:"fire-gcs",[aR]:"fire-gcs-compat",[lR]:"fire-fst",[cR]:"fire-fst-compat",[uR]:"fire-vertex","fire-js":"fire-js",[dR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map,pR=new Map,$f=new Map;function Wv(t,e){try{t.container.addComponent(e)}catch(n){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kn(t){const e=t.name;if($f.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;$f.set(e,t);for(const n of qa.values())Wv(n,t);for(const n of pR.values())Wv(n,t);return!0}function ks(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gs=new gi("app","Firebase",mR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=hR;function _E(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ff,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw gs.create("bad-app-name",{appName:String(s)});if(n||(n=hE()),!n)throw gs.create("no-options");const i=qa.get(s);if(i){if(si(n,i.options)&&si(r,i.config))return i;throw gs.create("duplicate-app",{appName:s})}const o=new TC(s);for(const u of $f.values())o.addComponent(u);const a=new gR(n,r,o);return qa.set(s,a),a}function Eo(t=Ff){const e=qa.get(t);if(!e&&t===Ff&&hE())return _E();if(!e)throw gs.create("no-app",{appName:t});return e}function yR(){return Array.from(qa.values())}function Ut(t,e,n){let r=fR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(o.join(" "));return}kn(new _n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="firebase-heartbeat-database",_R=1,Wa="firebase-heartbeat-store";let xh=null;function wE(){return xh||(xh=Xc(vR,_R,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wa)}catch(n){console.warn(n)}}}}).catch(t=>{throw gs.create("idb-open",{originalErrorMessage:t.message})})),xh}async function wR(t){try{const n=(await wE()).transaction(Wa),r=await n.objectStore(Wa).get(xE(t));return await n.done,r}catch(e){if(e instanceof Dn)kr.warn(e.message);else{const n=gs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(n.message)}}}async function Hv(t,e){try{const r=(await wE()).transaction(Wa,"readwrite");await r.objectStore(Wa).put(e,xE(t)),await r.done}catch(n){if(n instanceof Dn)kr.warn(n.message);else{const r=gs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=1024,ER=30;class TR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ER){const o=bR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gv(),{heartbeatsToSend:r,unsentEntries:s}=IR(this._heartbeatsCache.heartbeats),i=ac(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kr.warn(n),""}}}function Gv(){return new Date().toISOString().substring(0,10)}function IR(t,e=xR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kv(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}function bR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t){kn(new _n("platform-logger",e=>new MC(e),"PRIVATE")),kn(new _n("heartbeat",e=>new TR(e),"PRIVATE")),Ut(Uf,qv,t),Ut(Uf,qv,"esm2020"),Ut("fire-js","")}NR("");function EE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AR=EE,TE=new gi("auth","Firebase",EE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new dm("@firebase/auth");function CR(t,...e){lc.logLevel<=we.WARN&&lc.warn(`Auth (${yi}): ${t}`,...e)}function bu(t,...e){lc.logLevel<=we.ERROR&&lc.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw pm(t,...e)}function qn(t,...e){return pm(t,...e)}function fm(t,e,n){const r={...AR(),[e]:n};return new gi("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return fm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),fm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TE.create(t,...e)}function ae(t,e,...n){if(!t)throw pm(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bu(e),new Error(e)}function Pr(t,e){t||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function kR(){return Qv()==="http:"||Qv()==="https:"}function Qv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kR()||lC()||"connection"in navigator)?navigator.onLine:!0}function jR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=iC()||uC()}get(){return PR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LR=new ul(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qn(t,e,n,r,s={}){return SE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ll({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return aC()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Fr(t.emulatorConfig.host)&&(d.credentials="include"),IE.fetch()(await bE(t,t.config.apiHost,n,a),d)})}async function SE(t,e,n){t._canInitEmulator=!1;const r={...DR,...e};try{const s=new MR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw iu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw iu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw iu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw iu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fm(t,h,d);wn(t,h)}}catch(s){if(s instanceof Dn)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function cl(t,e,n,r,s={}){const i=await Qn(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function bE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mm(t.config,s):`${t.config.apiScheme}://${s}`;return OR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function VR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),LR.get())})}}function iu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qn(t,e,r);return s.customData._tokenResponse=n,s}function Yv(t){return t!==void 0&&t.enterprise!==void 0}class UR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function FR(t,e){return Qn(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function uc(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BR(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=gm(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:va(Eh(s.auth_time)),issuedAtTime:va(Eh(s.iat)),expirationTime:va(Eh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Eh(t){return Number(t)*1e3}function gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bu("JWT malformed, contained fewer than 3 sections"),null;try{const s=cE(n);return s?JSON.parse(s):(bu("Failed to decode base64 JWT payload"),null)}catch(s){return bu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xv(t){const e=gm(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&zR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await lo(t,uc(e,{idToken:n}));ae(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?NE(s.providerUserInfo):[],o=HR(t.providerData,i),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=a?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function WR(t){const e=Te(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function NE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e){const n=await SE(t,{},async()=>{const r=ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await bE(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:r};return t.emulatorConfig&&Fr(t.emulatorConfig.host)&&(u.credentials="include"),IE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KR(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Xv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await GR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yi;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new qR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BR(this,e)}reload(){return WR(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await lo(this,$R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:_,stsTokenManager:E}=n;ae(p&&E,e,"internal-error");const S=Yi.fromJSON(this.name,E);ae(typeof p=="string",e,"internal-error"),Wr(r,e.name),Wr(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof y=="boolean",e,"internal-error"),Wr(i,e.name),Wr(o,e.name),Wr(a,e.name),Wr(u,e.name),Wr(d,e.name),Wr(h,e.name);const T=new $n({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:S,createdAt:d,lastLoginAt:h});return _&&Array.isArray(_)&&(T.providerData=_.map(x=>({...x}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yi;s.updateFromServerResponse(n);const i=new $n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?NE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Yi;a.updateFromIdToken(r);const u=new $n({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Map;function xr(t){Pr(t instanceof Function,"Expected a class definition");let e=Jv.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AE.type="NONE";const Zv=AE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await uc(this.auth,{idToken:e}).catch(()=>{});return n?$n._fromGetAccountInfoResponse(this.auth,n,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(xr(Zv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||xr(Zv);const o=Nu(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(o);if(h){let p;if(typeof h=="string"){const m=await uc(e,{idToken:h}).catch(()=>{});if(!m)break;p=await $n._fromGetAccountInfoResponse(e,m,h)}else p=$n._fromJSON(e,h);d!==i&&(a=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Xi(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Xi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DE(e))return"Blackberry";if(OE(e))return"Webos";if(RE(e))return"Safari";if((e.includes("chrome/")||kE(e))&&!e.includes("edge/"))return"Chrome";if(jE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CE(t=Bt()){return/firefox\//i.test(t)}function RE(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kE(t=Bt()){return/crios\//i.test(t)}function PE(t=Bt()){return/iemobile/i.test(t)}function jE(t=Bt()){return/android/i.test(t)}function DE(t=Bt()){return/blackberry/i.test(t)}function OE(t=Bt()){return/webos/i.test(t)}function ym(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QR(t=Bt()){var e;return ym(t)&&!!((e=window.navigator)!=null&&e.standalone)}function YR(){return cC()&&document.documentMode===10}function LE(t=Bt()){return ym(t)||jE(t)||OE(t)||DE(t)||/windows phone/i.test(t)||PE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e=[]){let n;switch(t){case"Browser":n=e_(Bt());break;case"Worker":n=`${e_(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=6;class ek{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ZR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t_(this),this.idTokenSubscription=new t_(this),this.beforeStateQueue=new XR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uc(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(Ir(this));const n=e?Te(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JR(this),n=new ek(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xr(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[xr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&CR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function cr(t){return Te(t)}class t_{constructor(e){this.auth=e,this.observer=null,this.addObserver=yC(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nk(t){Jc=t}function ME(t){return Jc.loadJS(t)}function rk(){return Jc.recaptchaEnterpriseScript}function sk(){return Jc.gapiScript}function ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ok{constructor(){this.enterprise=new ak}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ak{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const lk="recaptcha-enterprise",UE="NO_RECAPTCHA";class uk{constructor(e){this.type=lk,this.auth=cr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{FR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new UR(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;Yv(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(UE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ok().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Yv(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=rk();u.length!==0&&(u+=a),ME(u).then(()=>{s(a,i,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function n_(t,e,n,r=!1,s=!1){const i=new uk(t);let o;if(s)o=UE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function dc(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await n_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await n_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t,e){const n=ks(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(si(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hk(t,e,n){const r=cr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=FE(e),{host:o,port:a}=fk(e),u=a===null?"":`:${a}`,d={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(si(d,r.config.emulator)&&si(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Fr(o)?(Qc(`${i}//${o}${u}`),Yc("Auth",!0)):pk()}function FE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fk(t){const e=FE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:r_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:r_(o)}}}function r_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(t,e){return Qn(t,"POST","/v1/accounts:resetPassword",ur(t,e))}async function mk(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e){return cl(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}async function yk(t,e){return Qn(t,"POST","/v1/accounts:sendOobCode",ur(t,e))}async function vk(t,e){return yk(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function wk(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends vm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(e,n,"signInWithPassword",gk);case"emailLink":return _k(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(e,r,"signUpPassword",mk);case"emailLink":return wk(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e){return cl(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="http://localhost";class ii extends vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ii(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:xk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ll(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tk(t){const e=ra(sa(t)).link,n=e?ra(sa(e)).deep_link_id:null,r=ra(sa(t)).deep_link_id;return(r?ra(sa(r)).link:null)||r||n||e||t}class _m{constructor(e){const n=ra(sa(e)),r=n.apiKey??null,s=n.oobCode??null,i=Ek(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Tk(e);try{return new _m(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,n){return Ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_m.parseLink(n);return ae(r,"argument-error"),Ha._fromEmailAndCode(e,r.code,r.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends dl{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends dl{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends dl{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return es.credential(n,r)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(t,e){return cl(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $n._fromIdTokenResponse(e,r,s),o=s_(r);return new oi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=s_(r);return new oi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function s_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Dn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hc(e,n,r,s)}}function BE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,i,e,r):i})}async function Sk(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(Ir(r));const s="reauthenticate";try{const i=await lo(t,BE(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=gm(i.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(t.uid===a,r,"user-mismatch"),oi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(t,e,n=!1){if(Kt(t.app))return Promise.reject(Ir(t));const r="signIn",s=await BE(t,r,e),i=await oi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Nk(t,e){return zE(cr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Em._fromServerResponse(e,n):"totpInfo"in n?Tm._fromServerResponse(e,n):wn(e,"internal-error")}}class Em extends xm{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Em(n)}}class Tm extends xm{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Tm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(t){const e=cr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ak(t,e,n){const r=cr(t);await dc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",vk)}async function Ck(t,e,n){await $E(Te(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Im(t),r})}async function Rk(t,e){const n=Te(t),r=await $E(n,{oobCode:e}),s=r.requestType;switch(ae(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ae(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ae(r.mfaInfo,n,"internal-error");default:ae(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=xm._fromServerResponse(cr(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function kk(t,e){const{data:n}=await Rk(Te(t),e);return n.email}async function Pk(t,e,n){if(Kt(t.app))return Promise.reject(Ir(t));const r=cr(t),o=await dc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ik).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Im(t),u}),a=await oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qE(t,e,n){return Kt(t.app)?Promise.reject(Ir(t)):Nk(Te(t),To.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Im(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await lo(r,jk(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Dk(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function Ok(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function On(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function qf(t){return Te(t).signOut()}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=1e3,Vk=10;class GE extends HE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=LE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Vk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GE.type="LOCAL";const Mk=GE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE extends HE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KE.type="SESSION";const QE=KE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async d=>d(n.origin,i)),u=await Uk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const d=Sm("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function $k(t){sr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function Bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qk(){return YE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebaseLocalStorageDb",Wk=1,pc="firebaseLocalStorage",JE="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ed(t,e){return t.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function Hk(){const t=indexedDB.deleteDatabase(XE);return new hl(t).toPromise()}function Wf(){const t=indexedDB.open(XE,Wk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pc,{keyPath:JE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pc)?e(r):(r.close(),await Hk(),e(await Wf()))})})}async function i_(t,e,n){const r=ed(t,!0).put({[JE]:e,value:n});return new hl(r).toPromise()}async function Gk(t,e){const n=ed(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function o_(t,e){const n=ed(t,!0).delete(e);return new hl(n).toPromise()}const Kk=800,Qk=3;class ZE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(qk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Bk(),!this.activeServiceWorker)return;this.sender=new Fk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await i_(e,fc,"1"),await o_(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>i_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>o_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ed(s,!1).getAll();return new hl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZE.type="LOCAL";const Yk=ZE;new ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e){return e?xr(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xk(t){return zE(t.auth,new bm(t),t.bypassAuthState)}function Jk(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),bk(n,new bm(t),t.bypassAuthState)}async function Zk(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Sk(n,new bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Jk;default:wn(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=new ul(2e3,1e4);async function Nm(t,e,n){if(Kt(t.app))return Promise.reject(qn(t,"operation-not-supported-in-this-environment"));const r=cr(t);RR(t,e,wm);const s=eT(r,n);return new Gs(r,"signInViaPopup",e,s).executeNotNull()}class Gs extends tT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eP.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP="pendingRedirect",Au=new Map;class nP extends tT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const r=await rP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rP(t,e){const n=oP(e),r=iP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sP(t,e){Au.set(t._key(),e)}function iP(t){return xr(t._redirectPersistence)}function oP(t){return Nu(tP,t.config.apiKey,t.name)}async function aP(t,e,n=!1){if(Kt(t.app))return Promise.reject(Ir(t));const r=cr(t),s=eT(r,e),o=await new nP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=10*60*1e3;class uP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lP&&this.cachedEventUids.clear(),this.cachedEventUids.has(a_(e))}saveEventToCache(e){this.cachedEventUids.add(a_(e)),this.lastProcessedEventTime=Date.now()}}function a_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fP=/^https?/;async function pP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dP(t);for(const n of e)try{if(mP(n))return}catch{}wn(t,"unauthorized-domain")}function mP(t){const e=Bf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fP.test(n))return!1;if(hP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=new ul(3e4,6e4);function l_(){const t=sr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yP(t){return new Promise((e,n)=>{var s,i,o;function r(){l_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{l_(),n(qn(t,"network-request-failed"))},timeout:gP.get()})}if((i=(s=sr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=sr().gapi)!=null&&o.load)r();else{const a=ik("iframefcb");return sr()[a]=()=>{gapi.load?r():n(qn(t,"network-request-failed"))},ME(`${sk()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function vP(t){return Cu=Cu||yP(t),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=new ul(5e3,15e3),wP="__/auth/iframe",xP="emulator/auth/iframe",EP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IP(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mm(e,xP):`https://${t.config.authDomain}/${wP}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=TP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ll(r).slice(1)}`}async function SP(t){const e=await vP(t),n=sr().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:IP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qn(t,"network-request-failed"),a=sr().setTimeout(()=>{i(o)},_P.get());function u(){sr().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NP=500,AP=600,CP="_blank",RP="http://localhost";class u_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kP(t,e,n,r=NP,s=AP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u={...bP,width:r.toString(),height:s.toString(),top:i,left:o},d=Bt().toLowerCase();n&&(a=kE(d)?CP:n),CE(d)&&(e=e||RP,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[y,_])=>`${m}${y}=${_},`,"");if(QR(d)&&a!=="_self")return PP(e||"",a),new u_(null);const p=window.open(e||"",a,h);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new u_(p)}function PP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="__/auth/handler",DP="emulator/auth/handler",OP=encodeURIComponent("fac");async function c_(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof wm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof dl){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),d=u?`#${OP}=${encodeURIComponent(u)}`:"";return`${LP(t)}?${ll(a).slice(1)}${d}`}function LP({config:t}){return t.emulator?mm(t,DP):`https://${t.authDomain}/${jP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="webStorageSupport";class VP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QE,this._completeRedirectFn=aP,this._overrideRedirectResult=sP}async _openPopup(e,n,r,s){var o;Pr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await c_(e,n,r,Bf(),s);return kP(e,i,Sm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await c_(e,n,r,Bf(),s);return $k(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SP(e),r=new uP(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Th,{type:Th},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Th];i!==void 0&&n(!!i),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LE()||RE()||ym()}}const MP=VP;var d_="@firebase/auth",h_="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $P(t){kn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VE(t)},d=new tk(r,s,i,u);return dk(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kn(new _n("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(r=>new UP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(d_,h_,FP(t)),Ut(d_,h_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=5*60,zP=fE("authIdTokenMaxAge")||BP;let f_=null;const qP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zP)return;const s=n==null?void 0:n.token;f_!==s&&(f_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fe(t=Eo()){const e=ks(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ck(t,{popupRedirectResolver:MP,persistence:[Yk,Mk,QE]}),r=fE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qP(i.toString());Ok(n,o,()=>o(n.currentUser)),Dk(n,a=>o(a))}}const s=dE("auth");return s&&hk(n,`http://${s}`),n}function WP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}nk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",WP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$P("Browser");var p_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys,rT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,w){function N(){}N.prototype=w.prototype,b.D=w.prototype,b.prototype=new N,b.prototype.constructor=b,b.C=function(A,P,D){for(var k=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)k[Ae-2]=arguments[Ae];return w.prototype[P].apply(A,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,w,N){N||(N=0);var A=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)A[P]=w.charCodeAt(N++)|w.charCodeAt(N++)<<8|w.charCodeAt(N++)<<16|w.charCodeAt(N++)<<24;else for(P=0;16>P;++P)A[P]=w[N++]|w[N++]<<8|w[N++]<<16|w[N++]<<24;w=b.g[0],N=b.g[1],P=b.g[2];var D=b.g[3],k=w+(D^N&(P^D))+A[0]+3614090360&4294967295;w=N+(k<<7&4294967295|k>>>25),k=D+(P^w&(N^P))+A[1]+3905402710&4294967295,D=w+(k<<12&4294967295|k>>>20),k=P+(N^D&(w^N))+A[2]+606105819&4294967295,P=D+(k<<17&4294967295|k>>>15),k=N+(w^P&(D^w))+A[3]+3250441966&4294967295,N=P+(k<<22&4294967295|k>>>10),k=w+(D^N&(P^D))+A[4]+4118548399&4294967295,w=N+(k<<7&4294967295|k>>>25),k=D+(P^w&(N^P))+A[5]+1200080426&4294967295,D=w+(k<<12&4294967295|k>>>20),k=P+(N^D&(w^N))+A[6]+2821735955&4294967295,P=D+(k<<17&4294967295|k>>>15),k=N+(w^P&(D^w))+A[7]+4249261313&4294967295,N=P+(k<<22&4294967295|k>>>10),k=w+(D^N&(P^D))+A[8]+1770035416&4294967295,w=N+(k<<7&4294967295|k>>>25),k=D+(P^w&(N^P))+A[9]+2336552879&4294967295,D=w+(k<<12&4294967295|k>>>20),k=P+(N^D&(w^N))+A[10]+4294925233&4294967295,P=D+(k<<17&4294967295|k>>>15),k=N+(w^P&(D^w))+A[11]+2304563134&4294967295,N=P+(k<<22&4294967295|k>>>10),k=w+(D^N&(P^D))+A[12]+1804603682&4294967295,w=N+(k<<7&4294967295|k>>>25),k=D+(P^w&(N^P))+A[13]+4254626195&4294967295,D=w+(k<<12&4294967295|k>>>20),k=P+(N^D&(w^N))+A[14]+2792965006&4294967295,P=D+(k<<17&4294967295|k>>>15),k=N+(w^P&(D^w))+A[15]+1236535329&4294967295,N=P+(k<<22&4294967295|k>>>10),k=w+(P^D&(N^P))+A[1]+4129170786&4294967295,w=N+(k<<5&4294967295|k>>>27),k=D+(N^P&(w^N))+A[6]+3225465664&4294967295,D=w+(k<<9&4294967295|k>>>23),k=P+(w^N&(D^w))+A[11]+643717713&4294967295,P=D+(k<<14&4294967295|k>>>18),k=N+(D^w&(P^D))+A[0]+3921069994&4294967295,N=P+(k<<20&4294967295|k>>>12),k=w+(P^D&(N^P))+A[5]+3593408605&4294967295,w=N+(k<<5&4294967295|k>>>27),k=D+(N^P&(w^N))+A[10]+38016083&4294967295,D=w+(k<<9&4294967295|k>>>23),k=P+(w^N&(D^w))+A[15]+3634488961&4294967295,P=D+(k<<14&4294967295|k>>>18),k=N+(D^w&(P^D))+A[4]+3889429448&4294967295,N=P+(k<<20&4294967295|k>>>12),k=w+(P^D&(N^P))+A[9]+568446438&4294967295,w=N+(k<<5&4294967295|k>>>27),k=D+(N^P&(w^N))+A[14]+3275163606&4294967295,D=w+(k<<9&4294967295|k>>>23),k=P+(w^N&(D^w))+A[3]+4107603335&4294967295,P=D+(k<<14&4294967295|k>>>18),k=N+(D^w&(P^D))+A[8]+1163531501&4294967295,N=P+(k<<20&4294967295|k>>>12),k=w+(P^D&(N^P))+A[13]+2850285829&4294967295,w=N+(k<<5&4294967295|k>>>27),k=D+(N^P&(w^N))+A[2]+4243563512&4294967295,D=w+(k<<9&4294967295|k>>>23),k=P+(w^N&(D^w))+A[7]+1735328473&4294967295,P=D+(k<<14&4294967295|k>>>18),k=N+(D^w&(P^D))+A[12]+2368359562&4294967295,N=P+(k<<20&4294967295|k>>>12),k=w+(N^P^D)+A[5]+4294588738&4294967295,w=N+(k<<4&4294967295|k>>>28),k=D+(w^N^P)+A[8]+2272392833&4294967295,D=w+(k<<11&4294967295|k>>>21),k=P+(D^w^N)+A[11]+1839030562&4294967295,P=D+(k<<16&4294967295|k>>>16),k=N+(P^D^w)+A[14]+4259657740&4294967295,N=P+(k<<23&4294967295|k>>>9),k=w+(N^P^D)+A[1]+2763975236&4294967295,w=N+(k<<4&4294967295|k>>>28),k=D+(w^N^P)+A[4]+1272893353&4294967295,D=w+(k<<11&4294967295|k>>>21),k=P+(D^w^N)+A[7]+4139469664&4294967295,P=D+(k<<16&4294967295|k>>>16),k=N+(P^D^w)+A[10]+3200236656&4294967295,N=P+(k<<23&4294967295|k>>>9),k=w+(N^P^D)+A[13]+681279174&4294967295,w=N+(k<<4&4294967295|k>>>28),k=D+(w^N^P)+A[0]+3936430074&4294967295,D=w+(k<<11&4294967295|k>>>21),k=P+(D^w^N)+A[3]+3572445317&4294967295,P=D+(k<<16&4294967295|k>>>16),k=N+(P^D^w)+A[6]+76029189&4294967295,N=P+(k<<23&4294967295|k>>>9),k=w+(N^P^D)+A[9]+3654602809&4294967295,w=N+(k<<4&4294967295|k>>>28),k=D+(w^N^P)+A[12]+3873151461&4294967295,D=w+(k<<11&4294967295|k>>>21),k=P+(D^w^N)+A[15]+530742520&4294967295,P=D+(k<<16&4294967295|k>>>16),k=N+(P^D^w)+A[2]+3299628645&4294967295,N=P+(k<<23&4294967295|k>>>9),k=w+(P^(N|~D))+A[0]+4096336452&4294967295,w=N+(k<<6&4294967295|k>>>26),k=D+(N^(w|~P))+A[7]+1126891415&4294967295,D=w+(k<<10&4294967295|k>>>22),k=P+(w^(D|~N))+A[14]+2878612391&4294967295,P=D+(k<<15&4294967295|k>>>17),k=N+(D^(P|~w))+A[5]+4237533241&4294967295,N=P+(k<<21&4294967295|k>>>11),k=w+(P^(N|~D))+A[12]+1700485571&4294967295,w=N+(k<<6&4294967295|k>>>26),k=D+(N^(w|~P))+A[3]+2399980690&4294967295,D=w+(k<<10&4294967295|k>>>22),k=P+(w^(D|~N))+A[10]+4293915773&4294967295,P=D+(k<<15&4294967295|k>>>17),k=N+(D^(P|~w))+A[1]+2240044497&4294967295,N=P+(k<<21&4294967295|k>>>11),k=w+(P^(N|~D))+A[8]+1873313359&4294967295,w=N+(k<<6&4294967295|k>>>26),k=D+(N^(w|~P))+A[15]+4264355552&4294967295,D=w+(k<<10&4294967295|k>>>22),k=P+(w^(D|~N))+A[6]+2734768916&4294967295,P=D+(k<<15&4294967295|k>>>17),k=N+(D^(P|~w))+A[13]+1309151649&4294967295,N=P+(k<<21&4294967295|k>>>11),k=w+(P^(N|~D))+A[4]+4149444226&4294967295,w=N+(k<<6&4294967295|k>>>26),k=D+(N^(w|~P))+A[11]+3174756917&4294967295,D=w+(k<<10&4294967295|k>>>22),k=P+(w^(D|~N))+A[2]+718787259&4294967295,P=D+(k<<15&4294967295|k>>>17),k=N+(D^(P|~w))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+w&4294967295,b.g[1]=b.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+D&4294967295}r.prototype.u=function(b,w){w===void 0&&(w=b.length);for(var N=w-this.blockSize,A=this.B,P=this.h,D=0;D<w;){if(P==0)for(;D<=N;)s(this,b,D),D+=this.blockSize;if(typeof b=="string"){for(;D<w;)if(A[P++]=b.charCodeAt(D++),P==this.blockSize){s(this,A),P=0;break}}else for(;D<w;)if(A[P++]=b[D++],P==this.blockSize){s(this,A),P=0;break}}this.h=P,this.o+=w},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var w=1;w<b.length-8;++w)b[w]=0;var N=8*this.o;for(w=b.length-8;w<b.length;++w)b[w]=N&255,N/=256;for(this.u(b),b=Array(16),w=N=0;4>w;++w)for(var A=0;32>A;A+=8)b[N++]=this.g[w]>>>A&255;return b};function i(b,w){var N=a;return Object.prototype.hasOwnProperty.call(N,b)?N[b]:N[b]=w(b)}function o(b,w){this.h=w;for(var N=[],A=!0,P=b.length-1;0<=P;P--){var D=b[P]|0;A&&D==w||(N[P]=D,A=!1)}this.g=N}var a={};function u(b){return-128<=b&&128>b?i(b,function(w){return new o([w|0],0>w?-1:0)}):new o([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return S(d(-b));for(var w=[],N=1,A=0;b>=N;A++)w[A]=b/N|0,N*=4294967296;return new o(w,0)}function h(b,w){if(b.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(b.charAt(0)=="-")return S(h(b.substring(1),w));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=d(Math.pow(w,8)),A=p,P=0;P<b.length;P+=8){var D=Math.min(8,b.length-P),k=parseInt(b.substring(P,P+D),w);8>D?(D=d(Math.pow(w,D)),A=A.j(D).add(d(k))):(A=A.j(N),A=A.add(d(k)))}return A}var p=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(E(this))return-S(this).m();for(var b=0,w=1,N=0;N<this.g.length;N++){var A=this.i(N);b+=(0<=A?A:4294967296+A)*w,w*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(_(this))return"0";if(E(this))return"-"+S(this).toString(b);for(var w=d(Math.pow(b,6)),N=this,A="";;){var P=R(N,w).g;N=T(N,P.j(w));var D=((0<N.g.length?N.g[0]:N.h)>>>0).toString(b);if(N=P,_(N))return D+A;for(;6>D.length;)D="0"+D;A=D+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function _(b){if(b.h!=0)return!1;for(var w=0;w<b.g.length;w++)if(b.g[w]!=0)return!1;return!0}function E(b){return b.h==-1}t.l=function(b){return b=T(this,b),E(b)?-1:_(b)?0:1};function S(b){for(var w=b.g.length,N=[],A=0;A<w;A++)N[A]=~b.g[A];return new o(N,~b.h).add(m)}t.abs=function(){return E(this)?S(this):this},t.add=function(b){for(var w=Math.max(this.g.length,b.g.length),N=[],A=0,P=0;P<=w;P++){var D=A+(this.i(P)&65535)+(b.i(P)&65535),k=(D>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);A=k>>>16,D&=65535,k&=65535,N[P]=k<<16|D}return new o(N,N[N.length-1]&-2147483648?-1:0)};function T(b,w){return b.add(S(w))}t.j=function(b){if(_(this)||_(b))return p;if(E(this))return E(b)?S(this).j(S(b)):S(S(this).j(b));if(E(b))return S(this.j(S(b)));if(0>this.l(y)&&0>b.l(y))return d(this.m()*b.m());for(var w=this.g.length+b.g.length,N=[],A=0;A<2*w;A++)N[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<b.g.length;P++){var D=this.i(A)>>>16,k=this.i(A)&65535,Ae=b.i(P)>>>16,qe=b.i(P)&65535;N[2*A+2*P]+=k*qe,x(N,2*A+2*P),N[2*A+2*P+1]+=D*qe,x(N,2*A+2*P+1),N[2*A+2*P+1]+=k*Ae,x(N,2*A+2*P+1),N[2*A+2*P+2]+=D*Ae,x(N,2*A+2*P+2)}for(A=0;A<w;A++)N[A]=N[2*A+1]<<16|N[2*A];for(A=w;A<2*w;A++)N[A]=0;return new o(N,0)};function x(b,w){for(;(b[w]&65535)!=b[w];)b[w+1]+=b[w]>>>16,b[w]&=65535,w++}function v(b,w){this.g=b,this.h=w}function R(b,w){if(_(w))throw Error("division by zero");if(_(b))return new v(p,p);if(E(b))return w=R(S(b),w),new v(S(w.g),S(w.h));if(E(w))return w=R(b,S(w)),new v(S(w.g),w.h);if(30<b.g.length){if(E(b)||E(w))throw Error("slowDivide_ only works with positive integers.");for(var N=m,A=w;0>=A.l(b);)N=j(N),A=j(A);var P=L(N,1),D=L(A,1);for(A=L(A,2),N=L(N,2);!_(A);){var k=D.add(A);0>=k.l(b)&&(P=P.add(N),D=k),A=L(A,1),N=L(N,1)}return w=T(b,P.j(w)),new v(P,w)}for(P=p;0<=b.l(w);){for(N=Math.max(1,Math.floor(b.m()/w.m())),A=Math.ceil(Math.log(N)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),D=d(N),k=D.j(w);E(k)||0<k.l(b);)N-=A,D=d(N),k=D.j(w);_(D)&&(D=m),P=P.add(D),b=T(b,k)}return new v(P,b)}t.A=function(b){return R(this,b).h},t.and=function(b){for(var w=Math.max(this.g.length,b.g.length),N=[],A=0;A<w;A++)N[A]=this.i(A)&b.i(A);return new o(N,this.h&b.h)},t.or=function(b){for(var w=Math.max(this.g.length,b.g.length),N=[],A=0;A<w;A++)N[A]=this.i(A)|b.i(A);return new o(N,this.h|b.h)},t.xor=function(b){for(var w=Math.max(this.g.length,b.g.length),N=[],A=0;A<w;A++)N[A]=this.i(A)^b.i(A);return new o(N,this.h^b.h)};function j(b){for(var w=b.g.length+1,N=[],A=0;A<w;A++)N[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(N,b.h)}function L(b,w){var N=w>>5;w%=32;for(var A=b.g.length-N,P=[],D=0;D<A;D++)P[D]=0<w?b.i(D+N)>>>w|b.i(D+N+1)<<32-w:b.i(D+N);return new o(P,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,ys=o}).apply(typeof p_<"u"?p_:typeof self<"u"?self:typeof window<"u"?window:{});var ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sT,ia,iT,Ru,Hf,oT,aT,lT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ou=="object"&&ou];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(l,f){if(f)e:{var g=r;l=l.split(".");for(var I=0;I<l.length-1;I++){var O=l[I];if(!(O in g))break e;g=g[O]}l=l[l.length-1],I=g[l],f=f(I),f!=I&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var g=0,I=!1,O={next:function(){if(!I&&g<l.length){var V=g++;return{value:f(V,l[V]),done:!1}}return I=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}s("Array.prototype.values",function(l){return l||function(){return i(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function d(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,g){return l.call.apply(l.bind,arguments)}function p(l,f,g){if(!l)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,I),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function m(l,f,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function y(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var I=g.slice();return I.push.apply(I,arguments),l.apply(this,I)}}function _(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(I,O,V){for(var H=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)H[Oe-2]=arguments[Oe];return f.prototype[O].apply(I,H)}}function E(l){const f=l.length;if(0<f){const g=Array(f);for(let I=0;I<f;I++)g[I]=l[I];return g}return[]}function S(l,f){for(let g=1;g<arguments.length;g++){const I=arguments[g];if(u(I)){const O=l.length||0,V=I.length||0;l.length=O+V;for(let H=0;H<V;H++)l[O+H]=I[H]}else l.push(I)}}class T{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function x(l){return/^[\s\xa0]*$/.test(l)}function v(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function R(l){return R[" "](l),l}R[" "]=function(){};var j=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function L(l,f,g){for(const I in l)f.call(g,l[I],I,l)}function b(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function w(l){const f={};for(const g in l)f[g]=l[g];return f}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,f){let g,I;for(let O=1;O<arguments.length;O++){I=arguments[O];for(g in I)l[g]=I[g];for(let V=0;V<N.length;V++)g=N[V],Object.prototype.hasOwnProperty.call(I,g)&&(l[g]=I[g])}}function P(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function D(l){a.setTimeout(()=>{throw l},0)}function k(){var l=q;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ae{constructor(){this.h=this.g=null}add(f,g){const I=qe.get();I.set(f,g),this.h?this.h.next=I:this.g=I,this.h=I}}var qe=new T(()=>new X,l=>l.reset());class X{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let W,M=!1,q=new Ae,Z=()=>{const l=a.Promise.resolve(void 0);W=()=>{l.then(ye)}};var ye=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(g){D(g)}var f=qe;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}M=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var lt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return l}();function B(l,f){if(ce.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,I=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(j){e:{try{R(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:K[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&B.aa.h.call(this)}}_(B,ce);var K={2:"touch",3:"pen",4:"mouse"};B.prototype.h=function(){B.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),le=0;function ne(l,f,g,I,O){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!I,this.ha=O,this.key=++le,this.da=this.fa=!1}function re(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function J(l){this.src=l,this.g={},this.h=0}J.prototype.add=function(l,f,g,I,O){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var H=de(l,f,I,O);return-1<H?(f=l[H],g||(f.fa=!1)):(f=new ne(f,this.src,V,!!I,O),f.fa=g,l.push(f)),f};function se(l,f){var g=f.type;if(g in l.g){var I=l.g[g],O=Array.prototype.indexOf.call(I,f,void 0),V;(V=0<=O)&&Array.prototype.splice.call(I,O,1),V&&(re(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function de(l,f,g,I){for(var O=0;O<l.length;++O){var V=l[O];if(!V.da&&V.listener==f&&V.capture==!!g&&V.ha==I)return O}return-1}var ue="closure_lm_"+(1e6*Math.random()|0),Ve={};function Qe(l,f,g,I,O){if(Array.isArray(f)){for(var V=0;V<f.length;V++)Qe(l,f[V],g,I,O);return null}return g=bg(g),l&&l[F]?l.K(f,g,d(I)?!!I.capture:!1,O):cn(l,f,g,!1,I,O)}function cn(l,f,g,I,O,V){if(!f)throw Error("Invalid event type");var H=d(O)?!!O.capture:!!O,Oe=Sd(l);if(Oe||(l[ue]=Oe=new J(l)),g=Oe.add(f,g,I,H,V),g.proxy)return g;if(I=ut(),g.proxy=I,I.src=l,I.listener=g,l.addEventListener)lt||(O=H),O===void 0&&(O=!1),l.addEventListener(f.toString(),I,O);else if(l.attachEvent)l.attachEvent(Sg(f.toString()),I);else if(l.addListener&&l.removeListener)l.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ut(){function l(g){return f.call(l.src,l.listener,g)}const f=BS;return l}function Ds(l,f,g,I,O){if(Array.isArray(f))for(var V=0;V<f.length;V++)Ds(l,f[V],g,I,O);else I=d(I)?!!I.capture:!!I,g=bg(g),l&&l[F]?(l=l.i,f=String(f).toString(),f in l.g&&(V=l.g[f],g=de(V,g,I,O),-1<g&&(re(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete l.g[f],l.h--)))):l&&(l=Sd(l))&&(f=l.g[f.toString()],l=-1,f&&(l=de(f,g,I,O)),(g=-1<l?f[l]:null)&&Os(g))}function Os(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[F])se(f.i,l);else{var g=l.type,I=l.proxy;f.removeEventListener?f.removeEventListener(g,I,l.capture):f.detachEvent?f.detachEvent(Sg(g),I):f.addListener&&f.removeListener&&f.removeListener(I),(g=Sd(f))?(se(g,l),g.h==0&&(g.src=null,f[ue]=null)):re(l)}}}function Sg(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function BS(l,f){if(l.da)l=!0;else{f=new B(f,this);var g=l.listener,I=l.ha||l.src;l.fa&&Os(l),l=g.call(I,f)}return l}function Sd(l){return l=l[ue],l instanceof J?l:null}var bd="__closure_events_fn_"+(1e9*Math.random()>>>0);function bg(l){return typeof l=="function"?l:(l[bd]||(l[bd]=function(f){return l.handleEvent(f)}),l[bd])}function Ct(){me.call(this),this.i=new J(this),this.M=this,this.F=null}_(Ct,me),Ct.prototype[F]=!0,Ct.prototype.removeEventListener=function(l,f,g,I){Ds(this,l,f,g,I)};function zt(l,f){var g,I=l.F;if(I)for(g=[];I;I=I.F)g.push(I);if(l=l.M,I=f.type||f,typeof f=="string")f=new ce(f,l);else if(f instanceof ce)f.target=f.target||l;else{var O=f;f=new ce(I,l),A(f,O)}if(O=!0,g)for(var V=g.length-1;0<=V;V--){var H=f.g=g[V];O=Sl(H,I,!0,f)&&O}if(H=f.g=l,O=Sl(H,I,!0,f)&&O,O=Sl(H,I,!1,f)&&O,g)for(V=0;V<g.length;V++)H=f.g=g[V],O=Sl(H,I,!1,f)&&O}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],I=0;I<g.length;I++)re(g[I]);delete l.g[f],l.h--}}this.F=null},Ct.prototype.K=function(l,f,g,I){return this.i.add(String(l),f,!1,g,I)},Ct.prototype.L=function(l,f,g,I){return this.i.add(String(l),f,!0,g,I)};function Sl(l,f,g,I){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,V=0;V<f.length;++V){var H=f[V];if(H&&!H.da&&H.capture==g){var Oe=H.listener,Tt=H.ha||H.src;H.fa&&se(l.i,H),O=Oe.call(Tt,I)!==!1&&O}}return O&&!I.defaultPrevented}function Ng(l,f,g){if(typeof l=="function")g&&(l=m(l,g));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Ag(l){l.g=Ng(()=>{l.g=null,l.i&&(l.i=!1,Ag(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class zS extends me{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ag(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(l){me.call(this),this.h=l,this.g={}}_(ko,me);var Cg=[];function Rg(l){L(l.g,function(f,g){this.g.hasOwnProperty(g)&&Os(f)},l),l.g={}}ko.prototype.N=function(){ko.aa.N.call(this),Rg(this)},ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nd=a.JSON.stringify,qS=a.JSON.parse,WS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ad(){}Ad.prototype.h=null;function kg(l){return l.h||(l.h=l.i())}function Pg(){}var Po={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cd(){ce.call(this,"d")}_(Cd,ce);function Rd(){ce.call(this,"c")}_(Rd,ce);var Ls={},jg=null;function bl(){return jg=jg||new Ct}Ls.La="serverreachability";function Dg(l){ce.call(this,Ls.La,l)}_(Dg,ce);function jo(l){const f=bl();zt(f,new Dg(f))}Ls.STAT_EVENT="statevent";function Og(l,f){ce.call(this,Ls.STAT_EVENT,l),this.stat=f}_(Og,ce);function qt(l){const f=bl();zt(f,new Og(f,l))}Ls.Ma="timingevent";function Lg(l,f){ce.call(this,Ls.Ma,l),this.size=f}_(Lg,ce);function Do(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Oo(){this.g=!0}Oo.prototype.xa=function(){this.g=!1};function HS(l,f,g,I,O,V){l.info(function(){if(l.g)if(V)for(var H="",Oe=V.split("&"),Tt=0;Tt<Oe.length;Tt++){var Ce=Oe[Tt].split("=");if(1<Ce.length){var Rt=Ce[0];Ce=Ce[1];var kt=Rt.split("_");H=2<=kt.length&&kt[1]=="type"?H+(Rt+"="+Ce+"&"):H+(Rt+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+I+") [attempt "+O+"]: "+f+`
`+g+`
`+H})}function GS(l,f,g,I,O,V,H){l.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+O+"]: "+f+`
`+g+`
`+V+" "+H})}function Ei(l,f,g,I){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+QS(l,g)+(I?" "+I:"")})}function KS(l,f){l.info(function(){return"TIMEOUT: "+f})}Oo.prototype.info=function(){};function QS(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var I=g[l];if(!(2>I.length)){var O=I[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return Nd(g)}catch{return f}}var Nl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kd;function Al(){}_(Al,Ad),Al.prototype.g=function(){return new XMLHttpRequest},Al.prototype.i=function(){return{}},kd=new Al;function $r(l,f,g,I){this.j=l,this.i=f,this.l=g,this.R=I||1,this.U=new ko(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mg}function Mg(){this.i=null,this.g="",this.h=!1}var Ug={},Pd={};function jd(l,f,g){l.L=1,l.v=Pl(fr(f)),l.m=g,l.P=!0,Fg(l,null)}function Fg(l,f){l.F=Date.now(),Cl(l),l.A=fr(l.v);var g=l.A,I=l.R;Array.isArray(I)||(I=[String(I)]),ey(g.i,"t",I),l.C=0,g=l.j.J,l.h=new Mg,l.g=vy(l.j,g?f:null,!l.m),0<l.O&&(l.M=new zS(m(l.Y,l,l.g),l.O)),f=l.U,g=l.g,I=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Cg[0]=O.toString()),O=Cg);for(var V=0;V<O.length;V++){var H=Qe(g,O[V],I||f.handleEvent,!1,f.h||f);if(!H)break;f.g[H.key]=H}f=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),jo(),HS(l.i,l.u,l.A,l.l,l.R,l.m)}$r.prototype.ca=function(l){l=l.target;const f=this.M;f&&pr(l)==3?f.j():this.Y(l)},$r.prototype.Y=function(l){try{if(l==this.g)e:{const kt=pr(this.g);var f=this.g.Ba();const Si=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||ay(this.g)))){this.J||kt!=4||f==7||(f==8||0>=Si?jo(3):jo(2)),Dd(this);var g=this.g.Z();this.X=g;t:if($g(this)){var I=ay(this.g);l="";var O=I.length,V=pr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vs(this),Lo(this);var H="";break t}this.h.i=new a.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(I[f],{stream:!(V&&f==O-1)});I.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=g==200,GS(this.i,this.u,this.A,this.l,this.R,kt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Tt=this.g;if((Oe=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Oe)){var Ce=Oe;break t}}Ce=null}if(g=Ce)Ei(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Od(this,g);else{this.o=!1,this.s=3,qt(12),Vs(this),Lo(this);break e}}if(this.P){g=!0;let Ln;for(;!this.J&&this.C<H.length;)if(Ln=YS(this,H),Ln==Pd){kt==4&&(this.s=4,qt(14),g=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(Ln==Ug){this.s=4,qt(15),Ei(this.i,this.l,H,"[Invalid Chunk]"),g=!1;break}else Ei(this.i,this.l,Ln,null),Od(this,Ln);if($g(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||H.length!=0||this.h.h||(this.s=1,qt(16),g=!1),this.o=this.o&&g,!g)Ei(this.i,this.l,H,"[Invalid Chunked Response]"),Vs(this),Lo(this);else if(0<H.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),$d(Rt),Rt.M=!0,qt(11))}}else Ei(this.i,this.l,H,null),Od(this,H);kt==4&&Vs(this),this.o&&!this.J&&(kt==4?py(this.j,this):(this.o=!1,Cl(this)))}else fb(this.g),g==400&&0<H.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),Vs(this),Lo(this)}}}catch{}finally{}};function $g(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function YS(l,f){var g=l.C,I=f.indexOf(`
`,g);return I==-1?Pd:(g=Number(f.substring(g,I)),isNaN(g)?Ug:(I+=1,I+g>f.length?Pd:(f=f.slice(I,I+g),l.C=I+g,f)))}$r.prototype.cancel=function(){this.J=!0,Vs(this)};function Cl(l){l.S=Date.now()+l.I,Bg(l,l.I)}function Bg(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Do(m(l.ba,l),f)}function Dd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}$r.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(KS(this.i,this.A),this.L!=2&&(jo(),qt(17)),Vs(this),this.s=2,Lo(this)):Bg(this,this.S-l)};function Lo(l){l.j.G==0||l.J||py(l.j,l)}function Vs(l){Dd(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Rg(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Od(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ld(g.h,l))){if(!l.K&&Ld(g.h,l)&&g.G==3){try{var I=g.Da.g.parse(f)}catch{I=null}if(Array.isArray(I)&&I.length==3){var O=I;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ml(g),Ll(g);else break e;Fd(g),qt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=Do(m(g.Za,g),6e3));if(1>=Wg(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Us(g,11)}else if((l.K||g.g==l)&&Ml(g),!x(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let Ce=O[f];if(g.T=Ce[0],Ce=Ce[1],g.G==2)if(Ce[0]=="c"){g.K=Ce[1],g.ia=Ce[2];const Rt=Ce[3];Rt!=null&&(g.la=Rt,g.j.info("VER="+g.la));const kt=Ce[4];kt!=null&&(g.Aa=kt,g.j.info("SVER="+g.Aa));const Si=Ce[5];Si!=null&&typeof Si=="number"&&0<Si&&(I=1.5*Si,g.L=I,g.j.info("backChannelRequestTimeoutMs_="+I)),I=g;const Ln=l.g;if(Ln){const Fl=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fl){var V=I.h;V.g||Fl.indexOf("spdy")==-1&&Fl.indexOf("quic")==-1&&Fl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Vd(V,V.h),V.h=null))}if(I.D){const Bd=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Bd&&(I.ya=Bd,$e(I.I,I.D,Bd))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),I=g;var H=l;if(I.qa=yy(I,I.J?I.ia:null,I.W),H.K){Hg(I.h,H);var Oe=H,Tt=I.L;Tt&&(Oe.I=Tt),Oe.B&&(Dd(Oe),Cl(Oe)),I.g=H}else hy(I);0<g.i.length&&Vl(g)}else Ce[0]!="stop"&&Ce[0]!="close"||Us(g,7);else g.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Us(g,7):Ud(g):Ce[0]!="noop"&&g.l&&g.l.ta(Ce),g.v=0)}}jo(4)}catch{}}var XS=class{constructor(l,f){this.g=l,this.map=f}};function zg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Wg(l){return l.h?1:l.g?l.g.size:0}function Ld(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Vd(l,f){l.g?l.g.add(f):l.h=f}function Hg(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}zg.prototype.cancel=function(){if(this.i=Gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return E(l.i)}function JS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],g=l.length,I=0;I<g;I++)f.push(l[I]);return f}f=[],g=0;for(I in l)f[g++]=l[I];return f}function ZS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const I in l)f[g++]=I;return f}}}function Kg(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ZS(l),I=JS(l),O=I.length,V=0;V<O;V++)f.call(void 0,I[V],g&&g[V],l)}var Qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eb(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var I=l[g].indexOf("="),O=null;if(0<=I){var V=l[g].substring(0,I);O=l[g].substring(I+1)}else V=l[g];f(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Ms(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ms){this.h=l.h,Rl(this,l.j),this.o=l.o,this.g=l.g,kl(this,l.s),this.l=l.l;var f=l.i,g=new Uo;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Yg(this,g),this.m=l.m}else l&&(f=String(l).match(Qg))?(this.h=!1,Rl(this,f[1]||"",!0),this.o=Vo(f[2]||""),this.g=Vo(f[3]||"",!0),kl(this,f[4]),this.l=Vo(f[5]||"",!0),Yg(this,f[6]||"",!0),this.m=Vo(f[7]||"")):(this.h=!1,this.i=new Uo(null,this.h))}Ms.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Mo(f,Xg,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Mo(f,Xg,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Mo(g,g.charAt(0)=="/"?rb:nb,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Mo(g,ib)),l.join("")};function fr(l){return new Ms(l)}function Rl(l,f,g){l.j=g?Vo(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function kl(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Yg(l,f,g){f instanceof Uo?(l.i=f,ob(l.i,l.h)):(g||(f=Mo(f,sb)),l.i=new Uo(f,l.h))}function $e(l,f,g){l.i.set(f,g)}function Pl(l){return $e(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Vo(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mo(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,tb),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function tb(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Xg=/[#\/\?@]/g,nb=/[#\?:]/g,rb=/[#\?]/g,sb=/[#\?@]/g,ib=/#/g;function Uo(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Br(l){l.g||(l.g=new Map,l.h=0,l.i&&eb(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=Uo.prototype,t.add=function(l,f){Br(this),this.i=null,l=Ti(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Jg(l,f){Br(l),f=Ti(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Zg(l,f){return Br(l),f=Ti(l,f),l.g.has(f)}t.forEach=function(l,f){Br(this),this.g.forEach(function(g,I){g.forEach(function(O){l.call(f,O,I,this)},this)},this)},t.na=function(){Br(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let I=0;I<f.length;I++){const O=l[I];for(let V=0;V<O.length;V++)g.push(f[I])}return g},t.V=function(l){Br(this);let f=[];if(typeof l=="string")Zg(this,l)&&(f=f.concat(this.g.get(Ti(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},t.set=function(l,f){return Br(this),this.i=null,l=Ti(this,l),Zg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function ey(l,f,g){Jg(l,f),0<g.length&&(l.i=null,l.g.set(Ti(l,f),E(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var I=f[g];const V=encodeURIComponent(String(I)),H=this.V(I);for(I=0;I<H.length;I++){var O=V;H[I]!==""&&(O+="="+encodeURIComponent(String(H[I]))),l.push(O)}}return this.i=l.join("&")};function Ti(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function ob(l,f){f&&!l.j&&(Br(l),l.i=null,l.g.forEach(function(g,I){var O=I.toLowerCase();I!=O&&(Jg(this,I),ey(this,O,g))},l)),l.j=f}function ab(l,f){const g=new Oo;if(a.Image){const I=new Image;I.onload=y(zr,g,"TestLoadImage: loaded",!0,f,I),I.onerror=y(zr,g,"TestLoadImage: error",!1,f,I),I.onabort=y(zr,g,"TestLoadImage: abort",!1,f,I),I.ontimeout=y(zr,g,"TestLoadImage: timeout",!1,f,I),a.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=l}else f(!1)}function lb(l,f){const g=new Oo,I=new AbortController,O=setTimeout(()=>{I.abort(),zr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:I.signal}).then(V=>{clearTimeout(O),V.ok?zr(g,"TestPingServer: ok",!0,f):zr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),zr(g,"TestPingServer: error",!1,f)})}function zr(l,f,g,I,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),I(g)}catch{}}function ub(){this.g=new WS}function cb(l,f,g){const I=g||"";try{Kg(l,function(O,V){let H=O;d(O)&&(H=Nd(O)),f.push(I+V+"="+encodeURIComponent(H))})}catch(O){throw f.push(I+"type="+encodeURIComponent("_badmap")),O}}function jl(l){this.l=l.Ub||null,this.j=l.eb||!1}_(jl,Ad),jl.prototype.g=function(){return new Dl(this.l,this.j)},jl.prototype.i=function(l){return function(){return l}}({});function Dl(l,f){Ct.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Dl,Ct),t=Dl.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,$o(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ty(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ty(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Fo(this):$o(this),this.readyState==3&&ty(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Fo(this))},t.Qa=function(l){this.g&&(this.response=l,Fo(this))},t.ga=function(){this.g&&Fo(this)};function Fo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,$o(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function $o(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ny(l){let f="";return L(l,function(g,I){f+=I,f+=":",f+=g,f+=`\r
`}),f}function Md(l,f,g){e:{for(I in g){var I=!1;break e}I=!0}I||(g=ny(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):$e(l,f,g))}function nt(l){Ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(nt,Ct);var db=/^https?$/i,hb=["POST","PUT"];t=nt.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,g,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kd.g(),this.v=this.o?kg(this.o):kg(kd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(V){ry(this,V);return}if(l=g||"",g=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var O in I)g.set(O,I[O]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const V of I.keys())g.set(V,I.get(V));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),O=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(hb,f,void 0))||I||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of g)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oy(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){ry(this,V)}};function ry(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,sy(l),Ol(l)}function sy(l){l.A||(l.A=!0,zt(l,"complete"),zt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,zt(this,"complete"),zt(this,"abort"),Ol(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ol(this,!0)),nt.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?iy(this):this.bb())},t.bb=function(){iy(this)};function iy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||pr(l)!=4||l.Z()!=2)){if(l.u&&pr(l)==4)Ng(l.Ea,0,l);else if(zt(l,"readystatechange"),pr(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var I;if(I=H===0){var O=String(l.D).match(Qg)[1]||null;!O&&a.self&&a.self.location&&(O=a.self.location.protocol.slice(0,-1)),I=!db.test(O?O.toLowerCase():"")}g=I}if(g)zt(l,"complete"),zt(l,"success");else{l.m=6;try{var V=2<pr(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",sy(l)}}finally{Ol(l)}}}}function Ol(l,f){if(l.g){oy(l);const g=l.g,I=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||zt(l,"ready");try{g.onreadystatechange=I}catch{}}}function oy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function pr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<pr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),qS(f)}};function ay(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function fb(l){const f={};l=(l.g&&2<=pr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<l.length;I++){if(x(l[I]))continue;var g=P(l[I]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=f[O]||[];f[O]=V,V.push(g)}b(f,function(I){return I.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bo(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function ly(l){this.Aa=0,this.i=[],this.j=new Oo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bo("baseRetryDelayMs",5e3,l),this.cb=Bo("retryDelaySeedMs",1e4,l),this.Wa=Bo("forwardChannelMaxRetries",2,l),this.wa=Bo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new zg(l&&l.concurrentRequestLimit),this.Da=new ub,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ly.prototype,t.la=8,t.G=1,t.connect=function(l,f,g,I){qt(0),this.W=l,this.H=f||{},g&&I!==void 0&&(this.H.OSID=g,this.H.OAID=I),this.F=this.X,this.I=yy(this,null,this.W),Vl(this)};function Ud(l){if(uy(l),l.G==3){var f=l.U++,g=fr(l.I);if($e(g,"SID",l.K),$e(g,"RID",f),$e(g,"TYPE","terminate"),zo(l,g),f=new $r(l,l.j,f),f.L=2,f.v=Pl(fr(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=vy(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Cl(f)}gy(l)}function Ll(l){l.g&&($d(l),l.g.cancel(),l.g=null)}function uy(l){Ll(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ml(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Vl(l){if(!qg(l.h)&&!l.s){l.s=!0;var f=l.Ga;W||Z(),M||(W(),M=!0),q.add(f,l),l.B=0}}function pb(l,f){return Wg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Do(m(l.Ga,l,f),my(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new $r(this,this.j,l);let V=this.o;if(this.S&&(V?(V=w(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var I=this.i[g];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(f+=I,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=dy(this,O,f),g=fr(this.I),$e(g,"RID",l),$e(g,"CVER",22),this.D&&$e(g,"X-HTTP-Session-Id",this.D),zo(this,g),V&&(this.O?f="headers="+encodeURIComponent(String(ny(V)))+"&"+f:this.m&&Md(g,this.m,V)),Vd(this.h,O),this.Ua&&$e(g,"TYPE","init"),this.P?($e(g,"$req",f),$e(g,"SID","null"),O.T=!0,jd(O,g,null)):jd(O,g,f),this.G=2}}else this.G==3&&(l?cy(this,l):this.i.length==0||qg(this.h)||cy(this))};function cy(l,f){var g;f?g=f.l:g=l.U++;const I=fr(l.I);$e(I,"SID",l.K),$e(I,"RID",g),$e(I,"AID",l.T),zo(l,I),l.m&&l.o&&Md(I,l.m,l.o),g=new $r(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=dy(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Vd(l.h,g),jd(g,I,f)}function zo(l,f){l.H&&L(l.H,function(g,I){$e(f,I,g)}),l.l&&Kg({},function(g,I){$e(f,I,g)})}function dy(l,f,g){g=Math.min(l.i.length,g);var I=l.l?m(l.l.Na,l.l,l):null;e:{var O=l.i;let V=-1;for(;;){const H=["count="+g];V==-1?0<g?(V=O[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let Oe=!0;for(let Tt=0;Tt<g;Tt++){let Ce=O[Tt].g;const Rt=O[Tt].map;if(Ce-=V,0>Ce)V=Math.max(0,O[Tt].g-100),Oe=!1;else try{cb(Rt,H,"req"+Ce+"_")}catch{I&&I(Rt)}}if(Oe){I=H.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,I}function hy(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;W||Z(),M||(W(),M=!0),q.add(f,l),l.v=0}}function Fd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Do(m(l.Fa,l),my(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,fy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Do(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),Ll(this),fy(this))};function $d(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function fy(l){l.g=new $r(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=fr(l.qa);$e(f,"RID","rpc"),$e(f,"SID",l.K),$e(f,"AID",l.T),$e(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&$e(f,"TO",l.ja),$e(f,"TYPE","xmlhttp"),zo(l,f),l.m&&l.o&&Md(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Pl(fr(f)),g.m=null,g.P=!0,Fg(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Ll(this),Fd(this),qt(19))};function Ml(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function py(l,f){var g=null;if(l.g==f){Ml(l),$d(l),l.g=null;var I=2}else if(Ld(l.h,f))g=f.D,Hg(l.h,f),I=1;else return;if(l.G!=0){if(f.o)if(I==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;I=bl(),zt(I,new Lg(I,g)),Vl(l)}else hy(l);else if(O=f.s,O==3||O==0&&0<f.X||!(I==1&&pb(l,f)||I==2&&Fd(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),O){case 1:Us(l,5);break;case 4:Us(l,10);break;case 3:Us(l,6);break;default:Us(l,2)}}}function my(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function Us(l,f){if(l.j.info("Error code "+f),f==2){var g=m(l.fb,l),I=l.Xa;const O=!I;I=new Ms(I||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Rl(I,"https"),Pl(I),O?ab(I.toString(),g):lb(I.toString(),g)}else qt(2);l.G=0,l.l&&l.l.sa(f),gy(l),uy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function gy(l){if(l.G=0,l.ka=[],l.l){const f=Gg(l.h);(f.length!=0||l.i.length!=0)&&(S(l.ka,f),S(l.ka,l.i),l.h.i.length=0,E(l.i),l.i.length=0),l.l.ra()}}function yy(l,f,g){var I=g instanceof Ms?fr(g):new Ms(g);if(I.g!="")f&&(I.g=f+"."+I.g),kl(I,I.s);else{var O=a.location;I=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var V=new Ms(null);I&&Rl(V,I),f&&(V.g=f),O&&kl(V,O),g&&(V.l=g),I=V}return g=l.D,f=l.ya,g&&f&&$e(I,g,f),$e(I,"VER",l.la),zo(l,I),I}function vy(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new nt(new jl({eb:g})):new nt(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _y(){}t=_y.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ul(){}Ul.prototype.g=function(l,f){return new dn(l,f)};function dn(l,f){Ct.call(this),this.g=new ly(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!x(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!x(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Ii(this)}_(dn,Ct),dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Ud(this.g)},dn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Nd(l),l=g);f.i.push(new XS(f.Ya++,l)),f.G==3&&Vl(f)},dn.prototype.N=function(){this.g.l=null,delete this.j,Ud(this.g),delete this.g,dn.aa.N.call(this)};function wy(l){Cd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}_(wy,Cd);function xy(){Rd.call(this),this.status=1}_(xy,Rd);function Ii(l){this.g=l}_(Ii,_y),Ii.prototype.ua=function(){zt(this.g,"a")},Ii.prototype.ta=function(l){zt(this.g,new wy(l))},Ii.prototype.sa=function(l){zt(this.g,new xy)},Ii.prototype.ra=function(){zt(this.g,"b")},Ul.prototype.createWebChannel=Ul.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,lT=function(){return new Ul},aT=function(){return bl()},oT=Ls,Hf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nl.NO_ERROR=0,Nl.TIMEOUT=8,Nl.HTTP_ERROR=6,Ru=Nl,Vg.COMPLETE="complete",iT=Vg,Pg.EventType=Po,Po.OPEN="a",Po.CLOSE="b",Po.ERROR="c",Po.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,ia=Pg,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,sT=nt}).apply(typeof ou<"u"?ou:typeof self<"u"?self:typeof window<"u"?window:{});const m_="@firebase/firestore",g_="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new dm("@firebase/firestore");function Ni(){return ai.logLevel}function ee(t,...e){if(ai.logLevel<=we.DEBUG){const n=e.map(Am);ai.debug(`Firestore (${Io}): ${t}`,...n)}}function jr(t,...e){if(ai.logLevel<=we.ERROR){const n=e.map(Am);ai.error(`Firestore (${Io}): ${t}`,...n)}}function li(t,...e){if(ai.logLevel<=we.WARN){const n=e.map(Am);ai.warn(`Firestore (${Io}): ${t}`,...n)}}function Am(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,uT(t,r,n)}function uT(t,e,n){let r=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw jr(r),new Error(r)}function ke(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||uT(e,s,r)}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class HP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GP{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new cT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new Ot(e)}}class KP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class QP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new KP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ke(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new y_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new y_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=XP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function Gf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ih(s)===Ih(i)?xe(s,i):Ih(s)?1:-1}return xe(t.length,e.length)}const JP=55296,ZP=57343;function Ih(t){const e=t.charCodeAt(0);return e>=JP&&e<=ZP}function uo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="__name__";class Jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&he(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Jn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return xe(e.length,n.length)}static compareSegments(e,n){const r=Jn.isNumericId(e),s=Jn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Jn.extractNumericId(e).compare(Jn.extractNumericId(n)):Gf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ys.fromString(e.substring(4,e.length-2))}}class Le extends Jn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const e2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Jn{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return e2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===v_}static keyField(){return new _t([v_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Y(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Y(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Le.fromString(e))}static fromName(e){return new oe(Le.fromString(e).popFirst(5))}static empty(){return new oe(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e,n){if(!n)throw new Y(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hT(t,e,n,r){if(e===!0&&r===!0)throw new Y(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function __(t){if(!oe.isDocumentKey(t))throw new Y(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function w_(t){if(oe.isDocumentKey(t))throw new Y(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he(12329,{type:typeof t})}function xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nd(t);throw new Y(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function fl(t,e){if(!fT(t))throw new Y(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=-62135596800,E_=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*E_);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<x_)throw new Y(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/E_}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,Me._jsonSchema))return new Me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-x_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Me._jsonSchemaVersion="firestore/timestamp/1.0",Me._jsonSchema={type:ft("string",Me._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new Me(0,0))}static max(){return new ge(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=-1;function t2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Es(s,oe.empty(),e)}function n2(t){return new Es(t.readTime,t.key,Ga)}class Es{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Es(ge.min(),oe.empty(),Ga)}static max(){return new Es(ge.max(),oe.empty(),Ga)}}function r2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class i2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==s2)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(h=>{o[d]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function o2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=-1;function sd(t){return t==null}function mc(t){return t===0&&1/t==-1/0}function a2(t){return typeof t=="number"&&Number.isInteger(t)&&!mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="";function l2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=T_(e)),e=u2(t.get(n),e);return T_(e)}function u2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case pT:n+="";break;default:n+=i}}return n}function T_(t){return t+pT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c2(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function mT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new au(this.root,e,this.comparator,!1)}getReverseIterator(){return new au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new au(this.root,e,this.comparator,!0)}}class au{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??St.RED,this.left=s??St.EMPTY,this.right=i??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new St(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return St.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw he(43730,{key:this.key,value:this.value});if(this.right.isRed())throw he(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw he(27949);return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw he(57766)}get value(){throw he(16141)}get color(){throw he(16727)}get left(){throw he(29726)}get right(){throw he(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(e){return new S_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class S_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new mn([])}unionWith(e){let n=new gt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gT("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const d2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ts(t){if(ke(!!t,39018),typeof t=="string"){let e=0;const n=d2.exec(t);if(ke(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ot(t.seconds),nanos:ot(t.nanos)}}function ot(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="server_timestamp",vT="__type__",_T="__previous_value__",wT="__local_write_time__";function km(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vT])==null?void 0:r.stringValue)===yT}function id(t){const e=t.mapValue.fields[_T];return km(e)?id(e):e}function Ka(t){const e=Ts(t.mapValue.fields[wT].timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r,s,i,o,a,u,d,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=h}}const gc="(default)";class co{constructor(e,n){this.projectId=e,this.database=n||gc}static empty(){return new co("","")}get isDefaultDatabase(){return this.database===gc}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="__type__",f2="__max__",lu={mapValue:{}},ET="__vector__",yc="value";function Ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?km(t)?4:m2(t)?9007199254740991:p2(t)?10:11:he(28295,{value:t})}function lr(t,e){if(t===e)return!0;const n=Ss(t);if(n!==Ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ka(t).isEqual(Ka(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ts(s.timestampValue),a=Ts(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Is(s.bytesValue).isEqual(Is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ot(s.geoPointValue.latitude)===ot(i.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ot(s.integerValue)===ot(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ot(s.doubleValue),a=ot(i.doubleValue);return o===a?mc(o)===mc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return uo(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(I_(o)!==I_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!lr(o[u],a[u])))return!1;return!0}(t,e);default:return he(52216,{left:t})}}function Qa(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function ho(t,e){if(t===e)return 0;const n=Ss(t),r=Ss(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ot(i.integerValue||i.doubleValue),u=ot(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return b_(t.timestampValue,e.timestampValue);case 4:return b_(Ka(t),Ka(e));case 5:return Gf(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Is(i),u=Is(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let d=0;d<a.length&&d<u.length;d++){const h=xe(a[d],u[d]);if(h!==0)return h}return xe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=xe(ot(i.latitude),ot(o.latitude));return a!==0?a:xe(ot(i.longitude),ot(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return N_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,_,E;const a=i.fields||{},u=o.fields||{},d=(m=a[yc])==null?void 0:m.arrayValue,h=(y=u[yc])==null?void 0:y.arrayValue,p=xe(((_=d==null?void 0:d.values)==null?void 0:_.length)||0,((E=h==null?void 0:h.values)==null?void 0:E.length)||0);return p!==0?p:N_(d,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===lu.mapValue&&o===lu.mapValue)return 0;if(i===lu.mapValue)return 1;if(o===lu.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),d=o.fields||{},h=Object.keys(d);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=Gf(u[p],h[p]);if(m!==0)return m;const y=ho(a[u[p]],d[h[p]]);if(y!==0)return y}return xe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw he(23264,{he:n})}}function b_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Ts(t),r=Ts(e),s=xe(n.seconds,r.seconds);return s!==0?s:xe(n.nanos,r.nanos)}function N_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ho(n[s],r[s]);if(i)return i}return xe(n.length,r.length)}function fo(t){return Kf(t)}function Kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ts(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kf(n.fields[o])}`;return s+"}"}(t.mapValue):he(61005,{value:t})}function ku(t){switch(Ss(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=id(t);return e?16+ku(e):16;case 5:return 2*t.stringValue.length;case 6:return Is(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ku(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ps(r.fields,(i,o)=>{s+=i.length+ku(o)}),s}(t.mapValue);default:throw he(13486,{value:t})}}function A_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qf(t){return!!t&&"integerValue"in t}function Pm(t){return!!t&&"arrayValue"in t}function C_(t){return!!t&&"nullValue"in t}function R_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pu(t){return!!t&&"mapValue"in t}function p2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[xT])==null?void 0:r.stringValue)===ET}function _a(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return{...t}}function m2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===f2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=_a(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Pu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Pu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rn(_a(this.value))}}function TT(t){const e=[];return Ps(t.fields,(n,r)=>{const s=new _t([n]);if(Pu(r)){const i=TT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Mt(e,0,ge.min(),ge.min(),ge.min(),rn.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,ge.min(),ge.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ge.min(),ge.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function k_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=ho(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function P_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function g2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{}class ht extends IT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new v2(e,n,r):n==="array-contains"?new x2(e,r):n==="in"?new E2(e,r):n==="not-in"?new T2(e,r):n==="array-contains-any"?new I2(e,r):new ht(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _2(e,r):new w2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&Ss(this.value)===Ss(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends IT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Kn(e,n)}matches(e){return ST(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ST(t){return t.op==="and"}function bT(t){return y2(t)&&ST(t)}function y2(t){for(const e of t.filters)if(e instanceof Kn)return!1;return!0}function Yf(t){if(t instanceof ht)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(bT(t))return t.filters.map(e=>Yf(e)).join(",");{const e=t.filters.map(n=>Yf(n)).join(",");return`${t.op}(${e})`}}function NT(t,e){return t instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&lr(r.value,s.value)}(t,e):t instanceof Kn?function(r,s){return s instanceof Kn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&NT(o,s.filters[a]),!0):!1}(t,e):void he(19439)}function AT(t){return t instanceof ht?function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`}(t):t instanceof Kn?function(n){return n.op.toString()+" {"+n.getFilters().map(AT).join(" ,")+"}"}(t):"Filter"}class v2 extends ht{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class _2 extends ht{constructor(e,n){super(e,"in",n),this.keys=CT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class w2 extends ht{constructor(e,n){super(e,"not-in",n),this.keys=CT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class x2 extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pm(n)&&Qa(n.arrayValue,this.value)}}class E2 extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qa(this.value.arrayValue,n)}}class T2 extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qa(this.value.arrayValue,n)}}class I2 extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function j_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new S2(t,e,n,r,s,i,o)}function jm(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.Te=n}return e.Te}function Dm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!g2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!P_(t.startAt,e.startAt)&&P_(t.endAt,e.endAt)}function Xf(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function b2(t,e,n,r,s,i,o,a){return new vi(t,e,n,r,s,i,o,a)}function od(t){return new vi(t)}function D_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RT(t){return t.collectionGroup!==null}function wa(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(_t.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ya(i,r))}),n.has(_t.keyField().canonicalString())||e.Ie.push(new Ya(_t.keyField(),r))}return e.Ie}function or(t){const e=pe(t);return e.Ee||(e.Ee=kT(e,wa(t))),e.Ee}function N2(t){const e=pe(t);return e.de||(e.de=kT(e,t.explicitOrderBy)),e.de}function kT(t,e){if(t.limitType==="F")return j_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ya(s.field,i)});const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return j_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jf(t,e){const n=t.filters.concat([e]);return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zf(t,e,n){return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ad(t,e){return Dm(or(t),or(e))&&t.limitType===e.limitType}function PT(t){return`${jm(or(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>AT(s)).join(", ")}]`),sd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fo(s)).join(",")),`Target(${r})`}(or(t))}; limitType=${t.limitType})`}function ld(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of wa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const d=k_(o,a,u);return o.inclusive?d<=0:d<0}(r.startAt,wa(r),s)||r.endAt&&!function(o,a,u){const d=k_(o,a,u);return o.inclusive?d>=0:d>0}(r.endAt,wa(r),s))}(t,e)}function A2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jT(t){return(e,n)=>{let r=!1;for(const s of wa(t)){const i=C2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function C2(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),d=a.data.field(i);return u!==null&&d!==null?ho(u,d):he(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=new tt(oe.comparator);function Dr(){return R2}const DT=new tt(oe.comparator);function oa(...t){let e=DT;for(const n of t)e=e.insert(n.key,n);return e}function OT(t){let e=DT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ks(){return xa()}function LT(){return xa()}function xa(){return new _i(t=>t.toString(),(t,e)=>t.isEqual(e))}const k2=new tt(oe.comparator),P2=new gt(oe.comparator);function Ee(...t){let e=P2;for(const n of t)e=e.add(n);return e}const j2=new gt(xe);function D2(){return j2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function VT(t){return{integerValue:""+t}}function O2(t,e){return a2(e)?VT(e):Om(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this._=void 0}}function L2(t,e,n){return t instanceof Xa?function(s,i){const o={fields:{[vT]:{stringValue:yT},[wT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&km(i)&&(i=id(i)),i&&(o.fields[_T]=i),{mapValue:o}}(n,e):t instanceof Ja?UT(t,e):t instanceof Za?FT(t,e):function(s,i){const o=MT(s,i),a=O_(o)+O_(s.Ae);return Qf(o)&&Qf(s.Ae)?VT(a):Om(s.serializer,a)}(t,e)}function V2(t,e,n){return t instanceof Ja?UT(t,e):t instanceof Za?FT(t,e):n}function MT(t,e){return t instanceof _c?function(r){return Qf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xa extends ud{}class Ja extends ud{constructor(e){super(),this.elements=e}}function UT(t,e){const n=$T(e);for(const r of t.elements)n.some(s=>lr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Za extends ud{constructor(e){super(),this.elements=e}}function FT(t,e){let n=$T(e);for(const r of t.elements)n=n.filter(s=>!lr(s,r));return{arrayValue:{values:n}}}class _c extends ud{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function O_(t){return ot(t.integerValue||t.doubleValue)}function $T(t){return Pm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n){this.field=e,this.transform=n}}function U2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ja&&s instanceof Ja||r instanceof Za&&s instanceof Za?uo(r.elements,s.elements,lr):r instanceof _c&&s instanceof _c?lr(r.Ae,s.Ae):r instanceof Xa&&s instanceof Xa}(t.transform,e.transform)}class F2{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cd{}function BT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dd(t.key,Xt.none()):new pl(t.key,t.data,Xt.none());{const n=t.data,r=rn.empty();let s=new gt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new js(t.key,r,new mn(s.toArray()),Xt.none())}}function $2(t,e,n){t instanceof pl?function(s,i,o){const a=s.value.clone(),u=V_(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof js?function(s,i,o){if(!ju(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=V_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(zT(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ea(t,e,n,r){return t instanceof pl?function(i,o,a,u){if(!ju(i.precondition,o))return a;const d=i.value.clone(),h=M_(i.fieldTransforms,u,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof js?function(i,o,a,u){if(!ju(i.precondition,o))return a;const d=M_(i.fieldTransforms,u,o),h=o.data;return h.setAll(zT(i)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,a){return ju(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function B2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=MT(r.transform,s||null);i!=null&&(n===null&&(n=rn.empty()),n.set(r.field,i))}return n||null}function L_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&uo(r,s,(i,o)=>U2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pl extends cd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class js extends cd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function V_(t,e,n){const r=new Map;ke(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,V2(o,a,n[s]))}return r}function M_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,L2(i,o,e))}return r}class dd extends cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z2 extends cd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=BT(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,r)=>L_(n,r))&&uo(this.baseMutations,e.baseMutations,(n,r)=>L_(n,r))}}class Lm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return k2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lm(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Ie;function K2(t){switch(t){case U.OK:return he(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return he(15467,{code:t})}}function qT(t){if(t===void 0)return jr("GRPC error has no .code"),U.UNKNOWN;switch(t){case ct.OK:return U.OK;case ct.CANCELLED:return U.CANCELLED;case ct.UNKNOWN:return U.UNKNOWN;case ct.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ct.INTERNAL:return U.INTERNAL;case ct.UNAVAILABLE:return U.UNAVAILABLE;case ct.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ct.NOT_FOUND:return U.NOT_FOUND;case ct.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ct.ABORTED:return U.ABORTED;case ct.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ct.DATA_LOSS:return U.DATA_LOSS;default:return he(39323,{code:t})}}(Ie=ct||(ct={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=new ys([4294967295,4294967295],0);function U_(t){const e=Q2().encode(t),n=new rT;return n.update(e),new Uint8Array(n.digest())}function F_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ys([n,r],0),new ys([s,i],0)]}class Vm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new aa(`Invalid padding: ${n}`);if(r<0)throw new aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new aa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ys.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ys.fromNumber(r)));return s.compare(Y2)===1&&(s=new ys([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=U_(e),[r,s]=F_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vm(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=U_(e),[r,s]=F_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hd(ge.min(),s,new tt(xe),Dr(),Ee())}}class ml{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ml(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class WT{constructor(e,n){this.targetId=e,this.Ce=n}}class HT{constructor(e,n,r=Et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $_{constructor(){this.ve=0,this.Fe=B_(),this.Me=Et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),r=Ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he(38017,{changeType:i})}}),new ml(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=B_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class X2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dr(),this.Je=uu(),this.He=uu(),this.Ye=new tt(xe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:he(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Xf(i))if(r===0){const o=new oe(i.path);this.et(n,o,Mt.newNoDocument(o,ge.min()))}else ke(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Is(r).toUint8Array()}catch(u){if(u instanceof gT)return li("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Vm(o,s,i)}catch(u){return li(u instanceof aa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Xf(a.target)){const u=new oe(a.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Mt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ee();this.He.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new hd(e,n,this.Ye,this.je,r);return this.je=Dr(),this.Je=uu(),this.He=uu(),this.Ye=new tt(xe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new $_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new gt(xe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new gt(xe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new $_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function uu(){return new tt(oe.comparator)}function B_(){return new tt(oe.comparator)}const J2={asc:"ASCENDING",desc:"DESCENDING"},Z2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ej={and:"AND",or:"OR"};class tj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ep(t,e){return t.useProto3Json||sd(e)?e:{value:e}}function wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nj(t,e){return wc(t,e.toTimestamp())}function ar(t){return ke(!!t,49232),ge.fromTimestamp(function(n){const r=Ts(n);return new Me(r.seconds,r.nanos)}(t))}function Mm(t,e){return tp(t,e).canonicalString()}function tp(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KT(t){const e=Le.fromString(t);return ke(eI(e),10190,{key:e.toString()}),e}function np(t,e){return Mm(t.databaseId,e.path)}function Sh(t,e){const n=KT(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(YT(n))}function QT(t,e){return Mm(t.databaseId,e)}function rj(t){const e=KT(t);return e.length===4?Le.emptyPath():YT(e)}function rp(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YT(t){return ke(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function z_(t,e,n){return{name:np(t,e),fields:n.value.mapValue.fields}}function sj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:he(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,h){return d.useProto3Json?(ke(h===void 0||typeof h=="string",58123),Et.fromBase64String(h||"")):(ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const h=d.code===void 0?U.UNKNOWN:qT(d.code);return new Y(h,d.message||"")}(o);n=new HT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sh(t,r.document.name),i=ar(r.document.updateTime),o=r.document.createTime?ar(r.document.createTime):ge.min(),a=new rn({mapValue:{fields:r.document.fields}}),u=Mt.newFoundDocument(s,i,o,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new Du(d,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sh(t,r.document),i=r.readTime?ar(r.readTime):ge.min(),o=Mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sh(t,r.document),i=r.removedTargetIds||[];n=new Du([],i,s,null)}else{if(!("filter"in e))return he(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new G2(s,i),a=r.targetId;n=new WT(a,o)}}return n}function ij(t,e){let n;if(e instanceof pl)n={update:z_(t,e.key,e.value)};else if(e instanceof dd)n={delete:np(t,e.key)};else if(e instanceof js)n={update:z_(t,e.key,e.data),updateMask:pj(e.fieldMask)};else{if(!(e instanceof z2))return he(16599,{Vt:e.type});n={verify:np(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Xa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ja)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Za)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _c)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw he(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nj(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he(27497)}(t,e.precondition)),n}function oj(t,e){return t&&t.length>0?(ke(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?ar(s.updateTime):ar(i);return o.isEqual(ge.min())&&(o=ar(i)),new F2(o,s.transformResults||[])}(n,e))):[]}function aj(t,e){return{documents:[QT(t,e.path)]}}function XT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QT(t,s);const i=function(d){if(d.length!==0)return ZT(Kn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(h=>function(m){return{field:ts(m.field),direction:dj(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ep(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function lj(t,e,n,r){const{ft:s,parent:i}=XT(t,e),o={},a=[];let u=0;return n.forEach(d=>{const h="aggregate_"+u++;o[h]=d.alias,d.aggregateType==="count"?a.push({alias:h,count:{}}):d.aggregateType==="avg"?a.push({alias:h,avg:{field:ts(d.fieldPath)}}):d.aggregateType==="sum"&&a.push({alias:h,sum:{field:ts(d.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function uj(t){let e=rj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const m=JT(p);return m instanceof Kn&&bT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(_){return new Ya(Ci(_.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,sd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,y=p.values||[];return new vc(y,m)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const m=!p.before,y=p.values||[];return new vc(y,m)}(n.endAt)),b2(e,s,o,i,a,"F",u,d)}function cj(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function JT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ci(n.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ci(n.unaryFilter.field);return ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return ht.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return he(61313);default:return he(60726)}}(t):t.fieldFilter!==void 0?function(n){return ht.create(Ci(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return he(58110);default:return he(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kn.create(n.compositeFilter.filters.map(r=>JT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he(1026)}}(n.compositeFilter.op))}(t):he(30097,{filter:t})}function dj(t){return J2[t]}function hj(t){return Z2[t]}function fj(t){return ej[t]}function ts(t){return{fieldPath:t.canonicalString()}}function Ci(t){return _t.fromServerFormat(t.fieldPath)}function ZT(t){return t instanceof ht?function(n){if(n.op==="=="){if(R_(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(C_(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(R_(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(C_(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:hj(n.op),value:n.value}}}(t):t instanceof Kn?function(n){const r=n.getFilters().map(s=>ZT(s));return r.length===1?r[0]:{compositeFilter:{op:fj(n.op),filters:r}}}(t):he(54877,{filter:t})}function pj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=Et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mj{constructor(e){this.yt=e}}function gj(t){const e=uj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yj{constructor(){this.Cn=new vj}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Es.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Es.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class vj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new gt(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new gt(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tI=41943040;class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(tI,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new po(0)}static cr(){return new po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="LruGarbageCollector",_j=1048576;function H_([t,e],[n,r]){const s=xe(t,n);return s===0?xe(e,r):s}class wj{constructor(e){this.Ir=e,this.buffer=new gt(H_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();H_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ee(W_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bo(n)?ee(W_,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Vr(3e5)})}}class Ej{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(rd.ce);const r=new wj(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(q_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),q_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,a,u,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),Ni()<=we.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Tj(t,e){return new Ej(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij{constructor(){this.changes=new _i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ea(r.mutation,s,mn.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Ks();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oa();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ks();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Dr();const o=xa(),a=function(){return xa()}();return n.forEach((u,d)=>{const h=r.get(d.key);s.has(d.key)&&(h===void 0||h.mutation instanceof js)?i=i.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),Ea(h.mutation,d,h.mutation.getFieldMask(),Me.now())):o.set(d.key,mn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>a.set(d,new Sj(h,o.get(d)??null))),a))}recalculateAndSaveOverlays(e,n){const r=xa();let s=new tt((o,a)=>o-a),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let h=r.get(u)||mn.empty();h=a.applyToLocalView(d,h),r.set(u,h);const p=(s.get(a.batchId)||Ee()).add(u);s=s.insert(a.batchId,p)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,h=u.value,p=LT();h.forEach(m=>{if(!i.has(m)){const y=BT(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Ks());let a=Ga,u=i;return o.next(d=>$.forEach(d,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,Ee())).next(h=>({batchId:a,changes:OT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=oa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oa();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,u=>{const d=function(p,m){return new vi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,Mt.newInvalidDocument(h)))});let a=oa();return o.forEach((u,d)=>{const h=i.get(u);h!==void 0&&Ea(h.mutation,d,mn.empty(),Me.now()),ld(n,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ar(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:gj(s.bundledQuery),readTime:ar(s.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(){this.overlays=new tt(oe.comparator),this.qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ks();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Ks(),i=n.length+1,o=new oe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new tt((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=i.get(d.largestBatchId);h===null&&(h=Ks(),i=i.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=Ks(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=s)););return $.resolve(a)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new W2(n,r));let i=this.qr.get(n);i===void 0&&(i=Ee(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.Qr=new gt(yt.$r),this.Ur=new gt(yt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new yt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new yt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new oe(new Le([])),r=new yt(n,e),s=new yt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new oe(new Le([])),r=new yt(n,e),s=new yt(n,e+1);let i=Ee();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new yt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class yt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return oe.comparator(e.key,n.key)||xe(e.Yr,n.Yr)}static Kr(e,n){return xe(e.Yr,n.Yr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new gt(yt.$r)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new q2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Zr=this.Zr.add(new yt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Rm:this.tr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new yt(n,0),s=new yt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const a=this.Xr(o.Yr);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(xe);return n.forEach(s=>{const i=new yt(s,0),o=new yt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],a=>{r=r.add(a.Yr)})}),$.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new yt(new oe(i),0);let a=new gt(xe);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(a=a.add(u.Yr)),!0)},o),$.resolve(this.ti(a))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return $.forEach(n.mutations,s=>{const i=new yt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new yt(n,0),s=this.Zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kj{constructor(e){this.ri=e,this.docs=function(){return new tt(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=Dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dr();const o=n.path,a=new oe(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:h}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||r2(n2(h),r)<=0||(s.has(h.key)||ld(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he(9500)}ii(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Pj(this)}getSize(e){return $.resolve(this.size)}}class Pj extends Ij{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e){this.persistence=e,this.si=new _i(n=>jm(n),Dm),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.oi=0,this._i=new Um,this.targetCount=0,this.ai=po.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),$.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new po(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Pr(n),$.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.ui={},this.overlays={},this.ci=new rd(0),this.li=!1,this.li=!0,this.hi=new Cj,this.referenceDelegate=e(this),this.Pi=new jj(this),this.indexManager=new yj,this.remoteDocumentCache=function(s){return new kj(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new mj(n),this.Ii=new Nj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Aj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Rj(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new Dj(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return $.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Dj extends i2{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Ri=new Um,this.Vi=null}static mi(e){return new Fm(e)}get fi(){if(this.Vi)return this.Vi;throw he(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,r=>{const s=oe.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xc{constructor(e,n){this.persistence=e,this.pi=new _i(r=>l2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Tj(this,n)}static mi(e,n){return new xc(e,n)}Ei(){}di(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return $.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),$.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ku(e.data.value)),n}br(e,n,r){return $.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $m(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return dC()?8:o2(Bt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Oj;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.Vs)return this.bs(e,n,o,a.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ni()<=we.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(Ni()<=we.DEBUG&&ee("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ni()<=we.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(n))):$.resolve())}ys(e,n){if(D_(n))return $.resolve(null);let r=or(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zf(n,null,"F"),r=or(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ps.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(n,a);return this.Cs(n,d,o,u.readTime)?this.ys(e,Zf(n,null,"F")):this.vs(e,d,n,u)}))})))}ws(e,n,r,s){return D_(n)||s.isEqual(ge.min())?$.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?$.resolve(null):(Ni()<=we.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ai(n)),this.vs(e,o,n,t2(s,Ga)).next(a=>a))})}Ds(e,n){let r=new gt(jT(e));return n.forEach((s,i)=>{ld(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ni()<=we.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.ps.getDocumentsMatchingQuery(e,n,Es.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="LocalStore",Vj=3e8;class Mj{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new tt(xe),this.xs=new _i(i=>jm(i),Dm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bj(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Uj(t,e,n,r){return new Mj(t,e,n,r)}async function rI(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=Ee();for(const d of s){o.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}for(const d of i){a.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:a}))})})}function Fj(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(a,u,d,h){const p=d.batch,m=p.keys();let y=$.resolve();return m.forEach(_=>{y=y.next(()=>h.getEntry(u,_)).next(E=>{const S=d.docVersions.get(_);ke(S!==null,48541),E.version.compareTo(S)<0&&(p.applyToRemoteDocument(E,d),E.isValidDocument()&&(E.setReadTime(d.commitVersion),h.addEntry(E)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Ee();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sI(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function $j(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const a=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;a.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(Et.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(p,y),function(E,S,T){return E.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=Vj?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,y,h)&&a.push(n.Pi.updateTargetData(i,y))});let u=Dr(),d=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Bj(i,o,e.documentUpdates).next(h=>{u=h.ks,d=h.qs})),!r.isEqual(ge.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.Ms=s,i))}function Bj(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dr();return n.forEach((a,u)=>{const d=i.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(ge.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):ee(Bm,"Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{ks:o,qs:s}})}function zj(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qj(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new os(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function sp(t,e,n){const r=pe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bo(o))throw o;ee(Bm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function G_(t,e,n){const r=pe(t);let s=ge.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,h){const p=pe(u),m=p.xs.get(h);return m!==void 0?$.resolve(p.Ms.get(m)):p.Pi.getTargetData(d,h)}(r,o,or(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ee())).next(a=>(Wj(r,A2(e),a),{documents:a,Qs:i})))}function Wj(t,e,n){let r=t.Os.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class K_{constructor(){this.activeTargetIds=D2()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hj{constructor(){this.Mo=new K_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new K_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="ConnectivityMonitor";class Y_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ee(Q_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ee(Q_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu=null;function ip(){return cu===null?cu=function(){return 268435456+Math.round(2147483648*Math.random())}():cu++,"0x"+cu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="RestConnection",Kj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qj{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===gc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=ip(),a=this.zo(e,n.toUriEncodedString());ee(bh,`Sending RPC '${e}' ${o}:`,a,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(a),h=Fr(d);return this.Jo(e,a,u,r,h).then(p=>(ee(bh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw li(bh,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Kj[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class Xj extends Qj{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=ip();return new Promise((a,u)=>{const d=new sT;d.setWithCredentials(!0),d.listenOnce(iT.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ru.NO_ERROR:const p=d.getResponseJson();ee(Dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Ru.TIMEOUT:ee(Dt,`RPC '${e}' ${o} timed out`),u(new Y(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ru.HTTP_ERROR:const m=d.getStatus();if(ee(Dt,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let y=d.getResponseJson();Array.isArray(y)&&(y=y[0]);const _=y==null?void 0:y.error;if(_&&_.status&&_.message){const E=function(T){const x=T.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(x)>=0?x:U.UNKNOWN}(_.status);u(new Y(E,_.message))}else u(new Y(U.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new Y(U.UNAVAILABLE,"Connection failed."));break;default:he(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{ee(Dt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);ee(Dt,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",h,r,15)})}T_(e,n,r){const s=ip(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lT(),a=aT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");ee(Dt,`Creating RPC '${e}' stream ${s}: ${h}`,u);const p=o.createWebChannel(h,u);this.I_(p);let m=!1,y=!1;const _=new Yj({Yo:S=>{y?ee(Dt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(ee(Dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ee(Dt,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Zo:()=>p.close()}),E=(S,T,x)=>{S.listen(T,v=>{try{x(v)}catch(R){setTimeout(()=>{throw R},0)}})};return E(p,ia.EventType.OPEN,()=>{y||(ee(Dt,`RPC '${e}' stream ${s} transport opened.`),_.o_())}),E(p,ia.EventType.CLOSE,()=>{y||(y=!0,ee(Dt,`RPC '${e}' stream ${s} transport closed`),_.a_(),this.E_(p))}),E(p,ia.EventType.ERROR,S=>{y||(y=!0,li(Dt,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),_.a_(new Y(U.UNAVAILABLE,"The operation could not be completed")))}),E(p,ia.EventType.MESSAGE,S=>{var T;if(!y){const x=S.data[0];ke(!!x,16349);const v=x,R=(v==null?void 0:v.error)||((T=v[0])==null?void 0:T.error);if(R){ee(Dt,`RPC '${e}' stream ${s} received error:`,R);const j=R.status;let L=function(N){const A=ct[N];if(A!==void 0)return qT(A)}(j),b=R.message;L===void 0&&(L=U.INTERNAL,b="Unknown error status: "+j+" with message "+R.message),y=!0,_.a_(new Y(L,b)),p.close()}else ee(Dt,`RPC '${e}' stream ${s} received:`,x),_.u_(x)}}),E(a,oT.STAT_EVENT,S=>{S.stat===Hf.PROXY?ee(Dt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Hf.NOPROXY&&ee(Dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.__()},0),_}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Nh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){return new tj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="PersistentStream";class oI{constructor(e,n,r,s,i,o,a,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ee(X_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ee(X_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jj extends oI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=sj(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?ar(o.readTime):ge.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=rp(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Xf(u)?{documents:aj(i,u)}:{query:XT(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GT(i,o.resumeToken);const d=ep(i,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=wc(i,o.snapshotVersion.toTimestamp());const d=ep(i,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=cj(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=rp(this.serializer),n.removeTarget=e,this.q_(n)}}class Zj extends oI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=oj(e.writeResults,e.commitTime),r=ar(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=rp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ij(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{}class tD extends eD{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,tp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Ho(e,tp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class nD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(jr(n),this.aa=!1):ee("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="RemoteStore";class rD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{wi(this)&&(ee(ui,"Restarting streams for network reachability change."),await async function(u){const d=pe(u);d.Ea.add(4),await gl(d),d.Ra.set("Unknown"),d.Ea.delete(4),await pd(d)}(this))})}),this.Ra=new nD(r,s)}}async function pd(t){if(wi(t))for(const e of t.da)await e(!0)}async function gl(t){for(const e of t.da)await e(!1)}function aI(t,e){const n=pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Hm(n)?Wm(n):No(n).O_()&&qm(n,e))}function zm(t,e){const n=pe(t),r=No(n);n.Ia.delete(e),r.O_()&&lI(n,e),n.Ia.size===0&&(r.O_()?r.L_():wi(n)&&n.Ra.set("Unknown"))}function qm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}No(t).Y_(e)}function lI(t,e){t.Va.Ue(e),No(t).Z_(e)}function Wm(t){t.Va=new X2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),No(t).start(),t.Ra.ua()}function Hm(t){return wi(t)&&!No(t).x_()&&t.Ia.size>0}function wi(t){return pe(t).Ea.size===0}function uI(t){t.Va=void 0}async function sD(t){t.Ra.set("Online")}async function iD(t){t.Ia.forEach((e,n)=>{qm(t,e)})}async function oD(t,e){uI(t),Hm(t)?(t.Ra.ha(e),Wm(t)):t.Ra.set("Unknown")}async function aD(t,e,n){if(t.Ra.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.Va.removeTarget(a))}(t,e)}catch(r){ee(ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ec(t,r)}else if(e instanceof Du?t.Va.Ze(e):e instanceof WT?t.Va.st(e):t.Va.tt(e),!n.isEqual(ge.min()))try{const r=await sI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Va.Tt(o);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.Ia.get(d);h&&i.Ia.set(d,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,d)=>{const h=i.Ia.get(u);if(!h)return;i.Ia.set(u,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),lI(i,u);const p=new os(h.target,u,d,h.sequenceNumber);qm(i,p)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee(ui,"Failed to raise snapshot:",r),await Ec(t,r)}}async function Ec(t,e,n){if(!bo(e))throw e;t.Ea.add(1),await gl(t),t.Ra.set("Offline"),n||(n=()=>sI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(ui,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pd(t)})}function cI(t,e){return e().catch(n=>Ec(t,n,e))}async function md(t){const e=pe(t),n=bs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rm;for(;lD(e);)try{const s=await zj(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,uD(e,s)}catch(s){await Ec(e,s)}dI(e)&&hI(e)}function lD(t){return wi(t)&&t.Ta.length<10}function uD(t,e){t.Ta.push(e);const n=bs(t);n.O_()&&n.X_&&n.ea(e.mutations)}function dI(t){return wi(t)&&!bs(t).x_()&&t.Ta.length>0}function hI(t){bs(t).start()}async function cD(t){bs(t).ra()}async function dD(t){const e=bs(t);for(const n of t.Ta)e.ea(n.mutations)}async function hD(t,e,n){const r=t.Ta.shift(),s=Lm.from(r,e,n);await cI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await md(t)}async function fD(t,e){e&&bs(t).X_&&await async function(r,s){if(function(o){return K2(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();bs(r).B_(),await cI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await md(r)}}(t,e),dI(t)&&hI(t)}async function J_(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),ee(ui,"RemoteStore received new credentials");const r=wi(n);n.Ea.add(3),await gl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pd(n)}async function pD(t,e){const n=pe(t);e?(n.Ea.delete(2),await pd(n)):e||(n.Ea.add(2),await gl(n),n.Ra.set("Unknown"))}function No(t){return t.ma||(t.ma=function(n,r,s){const i=pe(n);return i.sa(),new Jj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:sD.bind(null,t),t_:iD.bind(null,t),r_:oD.bind(null,t),H_:aD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Hm(t)?Wm(t):t.Ra.set("Unknown")):(await t.ma.stop(),uI(t))})),t.ma}function bs(t){return t.fa||(t.fa=function(n,r,s){const i=pe(n);return i.sa(),new Zj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:cD.bind(null,t),r_:fD.bind(null,t),ta:dD.bind(null,t),na:hD.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await md(t)):(await t.fa.stop(),t.Ta.length>0&&(ee(ui,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Gm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Km(t,e){if(jr("AsyncQueue",`${e}: ${t}`),bo(t))return new Y(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{static emptySet(e){return new Zi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=oa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.ga=new tt(oe.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):he(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,s,i,o,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mo(e,n,Zi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class gD{constructor(){this.queries=ew(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=ew(),i.forEach((o,a)=>{for(const u of a.Sa)u.onError(r)})})(this,new Y(U.ABORTED,"Firestore shutting down"))}}function ew(){return new _i(t=>PT(t),ad)}async function Qm(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new mD,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Km(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Xm(n)}async function Ym(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yD(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(r=!0);o.wa=s}}r&&Xm(n)}function vD(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Xm(t){t.Ca.forEach(e=>{e.next()})}var op,tw;(tw=op||(op={})).Ma="default",tw.Cache="cache";class Jm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==op.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.key=e}}class pI{constructor(e){this.key=e}}class _D{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ee(),this.mutatedKeys=Ee(),this.eu=jT(e),this.tu=new Zi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Z_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),y=ld(this.query,p)?p:null,_=!!m&&this.mutatedKeys.has(m.key),E=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let S=!1;m&&y?m.data.isEqual(y.data)?_!==E&&(r.track({type:3,doc:y}),S=!0):this.su(m,y)||(r.track({type:2,doc:y}),S=!0,(u&&this.eu(y,u)>0||d&&this.eu(y,d)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),S=!0):m&&!y&&(r.track({type:1,doc:m}),S=!0,(u||d)&&(a=!0)),S&&(y?(o=o.add(y),i=E?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(y,_){const E=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he(20277,{Rt:S})}};return E(y)-E(_)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,o.length!==0||d?{snapshot:new mo(this.query,e.tu,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Z_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ee(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new pI(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new fI(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ee();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return mo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zm="SyncEngine";class wD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xD{constructor(e){this.key=e,this.hu=!1}}class ED{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new _i(a=>PT(a),ad),this.Iu=new Map,this.Eu=new Set,this.du=new tt(oe.comparator),this.Au=new Map,this.Ru=new Um,this.Vu={},this.mu=new Map,this.fu=po.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TD(t,e,n=!0){const r=wI(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await mI(r,e,n,!0),s}async function ID(t,e){const n=wI(t);await mI(n,e,!0,!1)}async function mI(t,e,n,r){const s=await qj(t.localStore,or(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await SD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&aI(t.remoteStore,s),a}async function SD(t,e,n,r,s){t.pu=(p,m,y)=>async function(E,S,T,x){let v=S.view.ru(T);v.Cs&&(v=await G_(E.localStore,S.query,!1).then(({documents:b})=>S.view.ru(b,v)));const R=x&&x.targetChanges.get(S.targetId),j=x&&x.targetMismatches.get(S.targetId)!=null,L=S.view.applyChanges(v,E.isPrimaryClient,R,j);return rw(E,S.targetId,L.au),L.snapshot}(t,p,m,y);const i=await G_(t.localStore,e,!0),o=new _D(e,i.Qs),a=o.ru(i.documents),u=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(a,t.isPrimaryClient,u);rw(t,n,d.au);const h=new wD(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function bD(t,e,n){const r=pe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ad(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&zm(r.remoteStore,s.targetId),ap(r,s.targetId)}).catch(So)):(ap(r,s.targetId),await sp(r.localStore,s.targetId,!0))}async function ND(t,e){const n=pe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zm(n.remoteStore,r.targetId))}async function AD(t,e,n){const r=OD(t);try{const s=await function(o,a){const u=pe(o),d=Me.now(),h=a.reduce((y,_)=>y.add(_.key),Ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let _=Dr(),E=Ee();return u.Ns.getEntries(y,h).next(S=>{_=S,_.forEach((T,x)=>{x.isValidDocument()||(E=E.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,_)).next(S=>{p=S;const T=[];for(const x of a){const v=B2(x,p.get(x.key).overlayedDocument);v!=null&&T.push(new js(x.key,v,TT(v.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,d,T,a)}).next(S=>{m=S;const T=S.applyToLocalDocumentSet(p,E);return u.documentOverlayCache.saveOverlays(y,S.batchId,T)})}).then(()=>({batchId:m.batchId,changes:OT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let d=o.Vu[o.currentUser.toKey()];d||(d=new tt(xe)),d=d.insert(a,u),o.Vu[o.currentUser.toKey()]=d}(r,s.batchId,n),await yl(r,s.changes),await md(r.remoteStore)}catch(s){const i=Km(s,"Failed to persist write");n.reject(i)}}async function gI(t,e){const n=pe(t);try{const r=await $j(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ke(o.hu,14607):s.removedDocuments.size>0&&(ke(o.hu,42227),o.hu=!1))}),await yl(n,r,e)}catch(r){await So(r)}}function nw(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=pe(o);u.onlineState=a;let d=!1;u.queries.forEach((h,p)=>{for(const m of p.Sa)m.va(a)&&(d=!0)}),d&&Xm(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CD(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new tt(oe.comparator);o=o.insert(i,Mt.newNoDocument(i,ge.min()));const a=Ee().add(i),u=new hd(ge.min(),new Map,new tt(xe),o,a);await gI(r,u),r.du=r.du.remove(i),r.Au.delete(e),eg(r)}else await sp(r.localStore,e,!1).then(()=>ap(r,e,n)).catch(So)}async function RD(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await Fj(n.localStore,e);vI(n,r,null),yI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,s)}catch(s){await So(s)}}async function kD(t,e,n){const r=pe(t);try{const s=await function(o,a){const u=pe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return u.mutationQueue.lookupMutationBatch(d,a).next(p=>(ke(p!==null,37113),h=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>u.localDocuments.getDocuments(d,h))})}(r.localStore,e);vI(r,e,n),yI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yl(r,s)}catch(s){await So(s)}}function yI(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function vI(t,e,n){const r=pe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||_I(t,r)})}function _I(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(zm(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),eg(t))}function rw(t,e,n){for(const r of n)r instanceof fI?(t.Ru.addReference(r.key,e),PD(t,r)):r instanceof pI?(ee(Zm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||_I(t,r.key)):he(19791,{wu:r})}function PD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(ee(Zm,"New document in limbo: "+n),t.Eu.add(r),eg(t))}function eg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new oe(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new xD(n)),t.du=t.du.insert(n,r),aI(t.remoteStore,new os(or(od(n.path)),r,"TargetPurposeLimboResolution",rd.ce))}}async function yl(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,u)=>{o.push(r.pu(u,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){s.push(d);const p=$m.As(u.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,d){const h=pe(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(d,m=>$.forEach(m.Es,y=>h.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>$.forEach(m.ds,y=>h.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!bo(p))throw p;ee(Bm,"Failed to update sequence numbers: "+p)}for(const p of d){const m=p.targetId;if(!p.fromCache){const y=h.Ms.get(m),_=y.snapshotVersion,E=y.withLastLimboFreeSnapshotVersion(_);h.Ms=h.Ms.insert(m,E)}}}(r.localStore,i))}async function jD(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){ee(Zm,"User change. New user:",e.toKey());const r=await rI(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(u=>{u.reject(new Y(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yl(n,r.Ls)}}function DD(t,e){const n=pe(t),r=n.Au.get(e);if(r&&r.hu)return Ee().add(r.key);{let s=Ee();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function wI(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CD.bind(null,e),e.Pu.H_=yD.bind(null,e.eventManager),e.Pu.yu=vD.bind(null,e.eventManager),e}function OD(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kD.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Uj(this.persistence,new Lj,e.initialUser,this.serializer)}Cu(e){return new nI(Fm.mi,this.serializer)}Du(e){return new Hj}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class LD extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ke(this.persistence.referenceDelegate instanceof xc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xj(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new nI(r=>xc.mi(r,n),this.serializer)}}class lp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>nw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jD.bind(null,this.syncEngine),await pD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gD}()}createDatastore(e){const n=fd(e.databaseInfo.databaseId),r=function(i){return new Xj(i)}(e.databaseInfo);return function(i,o,a,u){return new tD(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new rD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>nw(this.syncEngine,n,0),function(){return Y_.v()?new Y_:new Gj}())}createSyncEngine(e,n){return function(s,i,o,a,u,d,h){const p=new ED(s,i,o,a,u,d);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);ee(ui,"RemoteStore shutting down."),i.Ea.add(5),await gl(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}lp.provider={build:()=>new lp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="FirestoreClient";class VD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=td.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Ns,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Ns,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Km(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ah(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Ns,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MD(t);ee(Ns,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>J_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>J_(e.remoteStore,s)),t._onlineComponents=e}async function MD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Ns,"Using user provided OfflineComponentProvider");try{await Ah(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;li("Error using user provided cache. Falling back to memory cache: "+n),await Ah(t,new Tc)}}else ee(Ns,"Using default OfflineComponentProvider"),await Ah(t,new LD(void 0));return t._offlineComponents}async function ng(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Ns,"Using user provided OnlineComponentProvider"),await sw(t,t._uninitializedComponentsProvider._online)):(ee(Ns,"Using default OnlineComponentProvider"),await sw(t,new lp))),t._onlineComponents}function UD(t){return ng(t).then(e=>e.syncEngine)}function FD(t){return ng(t).then(e=>e.datastore)}async function Ic(t){const e=await ng(t),n=e.eventManager;return n.onListen=TD.bind(null,e.syncEngine),n.onUnlisten=bD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ID.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ND.bind(null,e.syncEngine),n}function $D(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,d){const h=new tg({next:m=>{h.Nu(),o.enqueueAndForget(()=>Ym(i,p));const y=m.docs.has(a);!y&&m.fromCache?d.reject(new Y(U.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?d.reject(new Y(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new Jm(od(a.path),h,{includeMetadataChanges:!0,qa:!0});return Qm(i,p)}(await Ic(t),t.asyncQueue,e,n,r)),r.promise}function BD(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,d){const h=new tg({next:m=>{h.Nu(),o.enqueueAndForget(()=>Ym(i,p)),m.fromCache&&u.source==="server"?d.reject(new Y(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new Jm(a,h,{includeMetadataChanges:!0,qa:!0});return Qm(i,p)}(await Ic(t),t.asyncQueue,e,n,r)),r.promise}function zD(t,e,n){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await FD(t);r.resolve(async function(o,a,u){var E;const d=pe(o),{request:h,gt:p,parent:m}=lj(d.serializer,N2(a),u);d.connection.$o||delete h.parent;const y=(await d.Ho("RunAggregationQuery",d.serializer.databaseId,m,h,1)).filter(S=>!!S.result);ke(y.length===1,64727);const _=(E=y[0].result)==null?void 0:E.aggregateFields;return Object.keys(_).reduce((S,T)=>(S[p[T]]=_[T],S),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="firestore.googleapis.com",ow=!0;class aw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=EI,this.ssl=ow}else this.host=e.host,this.ssl=e.ssl??ow;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_j)throw new Y(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dT;switch(r.type){case"firstParty":return new QP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=iw.get(n);r&&(ee("ComponentProvider","Removing Datastore"),iw.delete(n),r.terminate())}(this),Promise.resolve()}}function TI(t,e,n,r={}){var d;t=xt(t,vl);const s=Fr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Qc(`https://${a}`),Yc("Firestore",!0)),i.host!==EI&&i.host!==a&&li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:r};if(!si(u,o)&&(t._setSettings(u),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=Ot.MOCK_USER;else{h=pE(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Y(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ot(m)}t._authCredentials=new HP(new cT(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dr(this.firestore,e,this._query)}}class Xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fl(n,Xe._jsonSchema))return new Xe(e,r||null,new oe(Le.fromString(n.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:ft("string",Xe._jsonSchemaVersion),referencePath:ft("string")};class Sr extends dr{constructor(e,n,r){super(e,n,od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new oe(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function fe(t,e,...n){if(t=Te(t),Cm("collection","path",e),t instanceof vl){const r=Le.fromString(e,...n);return w_(r),new Sr(t,null,r)}{if(!(t instanceof Xe||t instanceof Sr))throw new Y(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return w_(r),new Sr(t.firestore,null,r)}}function Or(t,e){if(t=xt(t,vl),Cm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Y(U.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new dr(t,null,function(r){return new vi(Le.emptyPath(),r)}(e))}function Q(t,e,...n){if(t=Te(t),arguments.length===1&&(e=td.newId()),Cm("doc","path",e),t instanceof vl){const r=Le.fromString(e,...n);return __(r),new Xe(t,null,new oe(r))}{if(!(t instanceof Xe||t instanceof Sr))throw new Y(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return __(r),new Xe(t.firestore,t instanceof Sr?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="AsyncQueue";class uw{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iI(this,"async_queue_retry"),this._c=()=>{const r=Nh();r&&ee(lw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Nh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ir;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!bo(e))throw e;ee(lw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,jr("INTERNAL UNHANDLED ERROR: ",cw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Gm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&he(47125,{Pc:cw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function cw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Pn extends vl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new uw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uw(e),this._firestoreClient=void 0,await e}}}function De(t,e){const n=typeof t=="object"?t:Eo(),r=typeof t=="string"?t:gc,s=ks(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cm("firestore");i&&TI(s,...i)}return s}function xi(t){if(t._terminated)throw new Y(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qD(t),t._firestoreClient}function qD(t){var r,s,i;const e=t._freezeSettings(),n=function(a,u,d,h){return new h2(a,u,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,xI(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new VD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class SI{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(Et.fromBase64String(e))}catch(n){throw new Y(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fn(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,fn._jsonSchema))return fn.fromBase64String(e.bytes)}}fn._jsonSchemaVersion="firestore/bytes/1.0",fn._jsonSchema={type:ft("string",fn._jsonSchemaVersion),bytes:ft("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wn._jsonSchemaVersion}}static fromJSON(e){if(fl(e,Wn._jsonSchema))return new Wn(e.latitude,e.longitude)}}Wn._jsonSchemaVersion="firestore/geoPoint/1.0",Wn._jsonSchema={type:ft("string",Wn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,Hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Hn(e.vectorValues);throw new Y(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hn._jsonSchemaVersion="firestore/vectorValue/1.0",Hn._jsonSchema={type:ft("string",Hn._jsonSchemaVersion),vectorValues:ft("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=/^__.*__$/;class HD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new js(e,this.data,this.fieldMask,n,this.fieldTransforms):new pl(e,this.data,n,this.fieldTransforms)}}class bI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new js(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function NI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he(40011,{Ac:t})}}class rg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new rg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Sc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(NI(this.Ac)&&WD.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class GD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fd(e)}Cc(e,n,r,s=!1){return new rg({Ac:e,methodName:n,Dc:r,path:_t.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wl(t){const e=t._freezeSettings(),n=fd(t._databaseId);return new GD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sg(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);og("Data must be an object, but it was:",o,r);const a=RI(r,o);let u,d;if(i.merge)u=new mn(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=up(e,p,n);if(!o.contains(m))throw new Y(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);PI(h,m)||h.push(m)}u=new mn(h),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new HD(new rn(a),u,d)}class xl extends _l{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xl}}class ig extends _l{_toFieldTransform(e){return new M2(e.path,new Xa)}isEqual(e){return e instanceof ig}}function AI(t,e,n,r){const s=t.Cc(1,e,n);og("Data must be an object, but it was:",s,r);const i=[],o=rn.empty();Ps(r,(u,d)=>{const h=ag(e,u,n);d=Te(d);const p=s.yc(h);if(d instanceof xl)i.push(h);else{const m=El(d,p);m!=null&&(i.push(h),o.set(h,m))}});const a=new mn(i);return new bI(o,a,s.fieldTransforms)}function CI(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[up(e,r,n)],u=[s];if(i.length%2!=0)throw new Y(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(up(e,i[m])),u.push(i[m+1]);const d=[],h=rn.empty();for(let m=a.length-1;m>=0;--m)if(!PI(d,a[m])){const y=a[m];let _=u[m];_=Te(_);const E=o.yc(y);if(_ instanceof xl)d.push(y);else{const S=El(_,E);S!=null&&(d.push(y),h.set(y,S))}}const p=new mn(d);return new bI(h,p,o.fieldTransforms)}function KD(t,e,n,r=!1){return El(n,t.Cc(r?4:3,e))}function El(t,e){if(kI(t=Te(t)))return og("Unsupported field value:",e,t),RI(t,e);if(t instanceof _l)return function(r,s){if(!NI(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=El(a,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return O2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:wc(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wc(s.serializer,i)}}if(r instanceof Wn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:GT(s.serializer,r._byteString)};if(r instanceof Xe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hn)return function(o,a){return{mapValue:{fields:{[xT]:{stringValue:ET},[yc]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw a.Sc("VectorValues must only contain numeric values.");return Om(a.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${nd(r)}`)}(t,e)}function RI(t,e){const n={};return mT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(t,(r,s)=>{const i=El(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Wn||t instanceof fn||t instanceof Xe||t instanceof _l||t instanceof Hn)}function og(t,e,n){if(!kI(n)||!fT(n)){const r=nd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function up(t,e,n){if((e=Te(e))instanceof Ao)return e._internalPath;if(typeof e=="string")return ag(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const QD=new RegExp("[~\\*/\\[\\]]");function ag(t,e,n){if(e.search(QD)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ao(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Y(U.INVALID_ARGUMENT,a+t+u)}function PI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YD extends jI{data(){return super.data()}}function gd(t,e){return typeof e=="string"?ag(t,e):e instanceof Ao?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lg{}class ug extends lg{}function je(t,e,...n){let r=[];e instanceof lg&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof yd).length,a=i.filter(u=>u instanceof Tl).length;if(o>1||o>0&&a>0)throw new Y(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Tl extends ug{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tl(e,n,r)}_apply(e){const n=this._parse(e);return OI(e._query,n),new dr(e.firestore,e.converter,Jf(e._query,n))}_parse(e){const n=wl(e.firestore);return function(i,o,a,u,d,h,p){let m;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){fw(p,h);const _=[];for(const E of p)_.push(hw(u,i,E));m={arrayValue:{values:_}}}else m=hw(u,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||fw(p,h),m=KD(a,o,p,h==="in"||h==="not-in");return ht.create(d,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qt(t,e,n){const r=e,s=gd("where",t);return Tl._create(s,r,n)}class yd extends lg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)OI(o,u),o=Jf(o,u)}(e._query,n),new dr(e.firestore,e.converter,Jf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vd extends ug{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ya(i,o)}(e._query,this._field,this._direction);return new dr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new vi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Jt(t,e="asc"){const n=e,r=gd("orderBy",t);return vd._create(r,n)}function hw(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new Y(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RT(e)&&n.indexOf("/")!==-1)throw new Y(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!oe.isDocumentKey(r))throw new Y(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return A_(t,new oe(r))}if(n instanceof Xe)return A_(t,n._key);throw new Y(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nd(n)}.`)}function fw(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OI(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class LI{convertValue(e,n="none"){switch(Ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[yc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ot(o.doubleValue));return new Hn(n)}convertGeoPoint(e){return new Wn(ot(e.latitude),ot(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=id(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ka(e));default:return null}}convertTimestamp(e){const n=Ts(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);ke(eI(r),9688,{name:e});const s=new co(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||jr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function VI(){return new II("count")}class Bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends jI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:ft("string",vs._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class Ta extends vs{data(e={}){return super.data(e)}}class _s{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Bi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new Bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Ta(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Ta(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,h=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:XD(a.type),doc:u,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_s._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=td.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){t=xt(t,Xe);const e=xt(t.firestore,Pn);return $D(xi(e),t._key).then(n=>MI(e,t,n))}_s._jsonSchemaVersion="firestore/querySnapshot/1.0",_s._jsonSchema={type:ft("string",_s._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};class _d extends LI{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,n)}}function Ge(t){t=xt(t,dr);const e=xt(t.firestore,Pn),n=xi(e),r=new _d(e);return DI(t._query),BD(n,t._query).then(s=>new _s(e,r,t,s))}function We(t,e,n){t=xt(t,Xe);const r=xt(t.firestore,Pn),s=cg(t.converter,e,n);return Co(r,[sg(wl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xt.none())])}function wd(t,e,n,...r){t=xt(t,Xe);const s=xt(t.firestore,Pn),i=wl(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof Ao?CI(i,"updateDoc",t._key,e,n,r):AI(i,"updateDoc",t._key,e),Co(s,[o.toMutation(t._key,Xt.exists(!0))])}function bt(t){return Co(xt(t.firestore,Pn),[new dd(t._key,Xt.none())])}function br(t,e){const n=xt(t.firestore,Pn),r=Q(t),s=cg(t.converter,e);return Co(n,[sg(wl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function Ke(t,...e){var u,d,h;t=Te(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||dw(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(dw(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(d=p.error)==null?void 0:d.bind(p),e[r+2]=(h=p.complete)==null?void 0:h.bind(p)}let i,o,a;if(t instanceof Xe)o=xt(t.firestore,Pn),a=od(t._key.path),i={next:p=>{e[r]&&e[r](MI(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=xt(t,dr);o=xt(p.firestore,Pn),a=p._query;const m=new _d(o);i={next:y=>{e[r]&&e[r](new _s(o,m,p,y))},error:e[r+1],complete:e[r+2]},DI(t._query)}return function(m,y,_,E){const S=new tg(E),T=new Jm(y,S,_);return m.asyncQueue.enqueueAndForget(async()=>Qm(await Ic(m),T)),()=>{S.Nu(),m.asyncQueue.enqueueAndForget(async()=>Ym(await Ic(m),T))}}(xi(o),a,s,i)}function Co(t,e){return function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget(async()=>AD(await UD(r),s,i)),i.promise}(xi(t),e)}function MI(t,e,n){const r=n.docs.get(e._key),s=new _d(t);return new vs(t,s,e._key,r,new Bi(n.hasPendingWrites,n.fromCache),e.converter)}function UI(t){return FI(t,{count:VI()})}function FI(t,e){const n=xt(t.firestore,Pn),r=xi(n),s=c2(e,(i,o)=>new H2(o,i.aggregateType,i._internalFieldPath));return zD(r,t._query,s).then(i=>function(a,u,d){const h=new _d(a);return new SI(u,h,d)}(n,t,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=wl(e)}set(e,n,r){this._verifyNotCommitted();const s=Ch(e,this._firestore),i=cg(s.converter,n,r),o=sg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Xt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ch(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof Ao?CI(this._dataReader,"WriteBatch.update",i._key,n,r,s):AI(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Xt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ch(e,this._firestore);return this._mutations=this._mutations.concat(new dd(n._key,Xt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Y(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ch(t,e){if((t=Te(t)).firestore!==e)throw new Y(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return new xl("deleteField")}function be(){return new ig("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){return xi(t=xt(t,Pn)),new $I(t,e=>Co(t,e))}(function(e,n=!0){(function(s){Io=s})(yi),kn(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Pn(new GP(r.getProvider("auth-internal")),new YP(o,r.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Y(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new co(d.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ut(m_,g_,e),Ut(m_,g_,"esm2020")})();const JD=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:LI,AggregateField:II,AggregateQuerySnapshot:SI,Bytes:fn,CollectionReference:Sr,DocumentReference:Xe,DocumentSnapshot:vs,FieldPath:Ao,FieldValue:_l,Firestore:Pn,FirestoreError:Y,GeoPoint:Wn,Query:dr,QueryCompositeFilterConstraint:yd,QueryConstraint:ug,QueryDocumentSnapshot:Ta,QueryFieldFilterConstraint:Tl,QueryOrderByConstraint:vd,QuerySnapshot:_s,SnapshotMetadata:Bi,Timestamp:Me,VectorValue:Hn,WriteBatch:$I,_AutoId:td,_ByteString:Et,_DatabaseId:co,_DocumentKey:oe,_EmptyAuthCredentialsProvider:dT,_FieldPath:_t,_cast:xt,_logWarn:li,_validateIsNotUsedTogether:hT,addDoc:br,collection:fe,collectionGroup:Or,connectFirestoreEmulator:TI,count:VI,deleteDoc:bt,deleteField:cp,doc:Q,ensureFirestoreConfigured:xi,executeWrite:Co,getAggregateFromServer:FI,getCountFromServer:UI,getDoc:Ne,getDocs:Ge,getFirestore:De,onSnapshot:Ke,orderBy:Jt,query:je,serverTimestamp:be,setDoc:We,updateDoc:wd,where:Qt,writeBatch:BI},Symbol.toStringTag,{value:"Module"}));var ZD="firebase",eO="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut(ZD,eO,"app");const zI="@firebase/installations",dg="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1e4,WI=`w:${dg}`,HI="FIS_v2",tO="https://firebaseinstallations.googleapis.com/v1",nO=60*60*1e3,rO="installations",sO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ci=new gi(rO,sO,iO);function GI(t){return t instanceof Dn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI({projectId:t}){return`${tO}/projects/${t}/installations`}function QI(t){return{token:t.token,requestStatus:2,expiresIn:aO(t.expiresIn),creationTime:Date.now()}}async function YI(t,e){const r=(await e.json()).error;return ci.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function XI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function oO(t,{refreshToken:e}){const n=XI(t);return n.append("Authorization",lO(e)),n}async function JI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function aO(t){return Number(t.replace("s","000"))}function lO(t){return`${HI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=KI(t),s=XI(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:HI,appId:t.appId,sdkVersion:WI},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await JI(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:QI(d.authToken)}}else throw await YI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^[cdef][\w-]{21}$/,dp="";function hO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=fO(t);return dO.test(n)?n:dp}catch{return dp}}function fO(t){return cO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new Map;function tS(t,e){const n=xd(t);nS(n,e),pO(n,e)}function nS(t,e){const n=eS.get(t);if(n)for(const r of n)r(e)}function pO(t,e){const n=mO();n&&n.postMessage({key:t,fid:e}),gO()}let Qs=null;function mO(){return!Qs&&"BroadcastChannel"in self&&(Qs=new BroadcastChannel("[Firebase] FID Change"),Qs.onmessage=t=>{nS(t.data.key,t.data.fid)}),Qs}function gO(){eS.size===0&&Qs&&(Qs.close(),Qs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="firebase-installations-database",vO=1,di="firebase-installations-store";let Rh=null;function hg(){return Rh||(Rh=Xc(yO,vO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(di)}}})),Rh}async function bc(t,e){const n=xd(t),s=(await hg()).transaction(di,"readwrite"),i=s.objectStore(di),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&tS(t,e.fid),e}async function rS(t){const e=xd(t),r=(await hg()).transaction(di,"readwrite");await r.objectStore(di).delete(e),await r.done}async function Ed(t,e){const n=xd(t),s=(await hg()).transaction(di,"readwrite"),i=s.objectStore(di),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&tS(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t){let e;const n=await Ed(t.appConfig,r=>{const s=_O(r),i=wO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===dp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _O(t){const e=t||{fid:hO(),registrationStatus:0};return sS(e)}function wO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ci.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=xO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:EO(t)}:{installationEntry:e}}async function xO(t,e){try{const n=await uO(t,e);return bc(t.appConfig,n)}catch(n){throw GI(n)&&n.customData.serverCode===409?await rS(t.appConfig):await bc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function EO(t){let e=await pw(t.appConfig);for(;e.registrationStatus===1;)await ZI(100),e=await pw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fg(t);return r||n}return e}function pw(t){return Ed(t,e=>{if(!e)throw ci.create("installation-not-found");return sS(e)})}function sS(t){return TO(t)?{fid:t.fid,registrationStatus:0}:t}function TO(t){return t.registrationStatus===1&&t.registrationTime+qI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IO({appConfig:t,heartbeatServiceProvider:e},n){const r=SO(t,n),s=oO(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:WI,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await JI(()=>fetch(r,a));if(u.ok){const d=await u.json();return QI(d)}else throw await YI("Generate Auth Token",u)}function SO(t,{fid:e}){return`${KI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e=!1){let n;const r=await Ed(t.appConfig,i=>{if(!iS(i))throw ci.create("not-registered");const o=i.authToken;if(!e&&AO(o))return i;if(o.requestStatus===1)return n=bO(t,e),i;{if(!navigator.onLine)throw ci.create("app-offline");const a=RO(i);return n=NO(t,a),a}});return n?await n:r.authToken}async function bO(t,e){let n=await mw(t.appConfig);for(;n.authToken.requestStatus===1;)await ZI(100),n=await mw(t.appConfig);const r=n.authToken;return r.requestStatus===0?pg(t,e):r}function mw(t){return Ed(t,e=>{if(!iS(e))throw ci.create("not-registered");const n=e.authToken;return kO(n)?{...e,authToken:{requestStatus:0}}:e})}async function NO(t,e){try{const n=await IO(t,e),r={...e,authToken:n};return await bc(t.appConfig,r),n}catch(n){if(GI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await rS(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await bc(t.appConfig,r)}throw n}}function iS(t){return t!==void 0&&t.registrationStatus===2}function AO(t){return t.requestStatus===2&&!CO(t)}function CO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+nO}function RO(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function kO(t){return t.requestStatus===1&&t.requestTime+qI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t){const e=t,{installationEntry:n,registrationPromise:r}=await fg(e);return r?r.catch(console.error):pg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jO(t,e=!1){const n=t;return await DO(n),(await pg(n,e)).token}async function DO(t){const{registrationPromise:e}=await fg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){if(!t||!t.options)throw kh("App Configuration");if(!t.name)throw kh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kh(t){return ci.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="installations",LO="installations-internal",VO=t=>{const e=t.getProvider("app").getImmediate(),n=OO(e),r=ks(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},MO=t=>{const e=t.getProvider("app").getImmediate(),n=ks(e,oS).getImmediate();return{getId:()=>PO(n),getToken:s=>jO(n,s)}};function UO(){kn(new _n(oS,VO,"PUBLIC")),kn(new _n(LO,MO,"PRIVATE"))}UO();Ut(zI,dg);Ut(zI,dg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO="/firebase-messaging-sw.js",$O="/firebase-cloud-messaging-push-scope",aS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",BO="https://fcmregistrations.googleapis.com/v1",lS="google.c.a.c_id",zO="google.c.a.c_l",qO="google.c.a.ts",WO="google.c.a.e",gw=1e4;var yw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(yw||(yw={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var el;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(el||(el={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function HO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="fcm_token_details_db",GO=5,vw="fcm_token_object_Store";async function KO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Ph))return null;let e=null;return(await Xc(Ph,GO,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(vw))return;const a=o.objectStore(vw),u=await a.index("fcmSenderId").get(t);if(await a.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:gr(d.vapidKey)}}}else if(s===3){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:gr(d.auth),p256dh:gr(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:gr(d.vapidKey)}}}else if(s===4){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:gr(d.auth),p256dh:gr(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:gr(d.vapidKey)}}}}}})).close(),await _h(Ph),await _h("fcm_vapid_details_db"),await _h("undefined"),QO(e)?e:null}function QO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="firebase-messaging-database",XO=1,tl="firebase-messaging-store";let jh=null;function uS(){return jh||(jh=Xc(YO,XO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tl)}}})),jh}async function JO(t){const e=cS(t),r=await(await uS()).transaction(tl).objectStore(tl).get(e);if(r)return r;{const s=await KO(t.appConfig.senderId);if(s)return await mg(t,s),s}}async function mg(t,e){const n=cS(t),s=(await uS()).transaction(tl,"readwrite");return await s.objectStore(tl).put(e,n),await s.done,e}function cS({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ft=new gi("messaging","Messaging",ZO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(t,e){const n=await yg(t),r=dS(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(gg(t.appConfig),s)).json()}catch(o){throw Ft.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ft.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Ft.create("token-subscribe-no-token");return i.token}async function tL(t,e){const n=await yg(t),r=dS(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${gg(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Ft.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ft.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Ft.create("token-update-no-token");return i.token}async function nL(t,e){const r={method:"DELETE",headers:await yg(t)};try{const i=await(await fetch(`${gg(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Ft.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Ft.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function gg({projectId:t}){return`${BO}/projects/${t}/registrations`}async function yg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function dS({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==aS&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=7*24*60*60*1e3;async function sL(t){const e=await oL(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:gr(e.getKey("auth")),p256dh:gr(e.getKey("p256dh"))},r=await JO(t.firebaseDependencies);if(r){if(aL(r.subscriptionOptions,n))return Date.now()>=r.createTime+rL?iL(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await nL(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return _w(t.firebaseDependencies,n)}else return _w(t.firebaseDependencies,n)}async function iL(t,e){try{const n=await tL(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await mg(t.firebaseDependencies,r),n}catch(n){throw n}}async function _w(t,e){const r={token:await eL(t,e),createTime:Date.now(),subscriptionOptions:e};return await mg(t,r),r.token}async function oL(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:HO(e)})}function aL(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return lL(e,t),uL(e,t),cL(e,t),e}function lL(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function uL(t,e){e.data&&(t.data=e.data)}function cL(t,e){var s,i,o,a;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(a=e.fcmOptions)==null?void 0:a.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(t){return typeof t=="object"&&!!t&&lS in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t){if(!t||!t.options)throw Dh("App Configuration Object");if(!t.name)throw Dh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Dh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Dh(t){return Ft.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=hL(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pL(t){try{t.swRegistration=await navigator.serviceWorker.register(FO,{scope:$O}),t.swRegistration.update().catch(()=>{}),await mL(t.swRegistration)}catch(e){throw Ft.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function mL(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${gw} ms`)),gw),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t,e){if(!e&&!t.swRegistration&&await pL(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ft.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=aS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e){if(!navigator)throw Ft.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ft.create("permission-blocked");return await yL(t,e==null?void 0:e.vapidKey),await gL(t,e==null?void 0:e.serviceWorkerRegistration),sL(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vL(t,e,n){const r=_L(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[lS],message_name:n[zO],message_time:n[qO],message_device_time:Math.floor(Date.now()/1e3)})}function _L(t){switch(t){case el.NOTIFICATION_CLICKED:return"notification_open";case el.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wL(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===el.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(ww(n)):t.onMessageHandler.next(ww(n)));const r=n.data;dL(r)&&r[WO]==="1"&&await vL(t,n.messageType,r)}const xw="@firebase/messaging",Ew="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL=t=>{const e=new fL(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>wL(e,n)),e},EL=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>hS(e,r)}};function TL(){kn(new _n("messaging",xL,"PUBLIC")),kn(new _n("messaging-internal",EL,"PRIVATE")),Ut(xw,Ew),Ut(xw,Ew,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(){try{await gE()}catch{return!1}return typeof window<"u"&&mE()&&hC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t,e){if(!navigator)throw Ft.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t=Eo()){return fS().then(e=>{if(!e)throw Ft.create("unsupported-browser")},e=>{throw Ft.create("indexed-db-unsupported")}),ks(Te(t),"messaging").getImmediate()}async function bL(t,e){return t=Te(t),hS(t,e)}function NL(t,e){return t=Te(t),IL(t,e)}TL();const vg={apiKey:"AIzaSyAvTkBdah-m0JBKF2hPh2ra95ZrFfFXPZs",authDomain:"immanuel-app.firebaseapp.com",projectId:"immanuel-app",storageBucket:"immanuel-app.firebasestorage.app",messagingSenderId:"815824103273",appId:"1:815824103273:web:3817385bebff5f704a3ff8",measurementId:"G-P6WR1NQRB8"};function AL(t){const e=Object.entries(t).filter(([,n])=>!n||String(n).trim()==="").map(([n])=>n);if(e.length){const n=Object.fromEntries(Object.entries(t).map(([r,s])=>[r,s&&(typeof s=="string"?s.slice(0,6)+"…":s)]));throw console.error("[firebase] Missing config keys:",e,`
Loaded values:`,n),new Error("Firebase configuration is incomplete. Missing: "+e.join(", "))}}AL(vg);const ie=yR().length?Eo():_E(vg),nl=Fe(ie),Lt=De(ie),CL=new bn;CL.setCustomParameters({prompt:"select_account"});typeof window<"u"&&(window.__FIREBASE_CONFIG__=vg);async function Td(){try{return await fS()?SL(ie):null}catch{return null}}const pS=C.createContext(void 0);function RL({children:t}){const e=C.useMemo(()=>Fe(ie),[]),n=C.useMemo(()=>De(ie),[]),[r,s]=C.useState(e.currentUser),[i,o]=C.useState(!0),[a,u]=C.useState(!1);async function d(E){if(!E){u(!1);return}try{const S=E.uid,x=(await Ne(Q(n,"admins",S))).exists();let v=!1;try{const R=je(Or(n,"groupAdmins"),Qt("uid","==",S));v=!(await Ge(R)).empty}catch{v=!1}u(x||v)}catch{u(!1)}}C.useEffect(()=>{const E=On(e,async S=>{s(S),await d(S),o(!1)});return()=>E()},[e]);const h=async(E,S)=>{await qE(e,E,S),await d(e.currentUser)},p=async()=>{const E=new bn;await Nm(e,E),await d(e.currentUser)},m=async()=>{await qf(e),u(!1)},y=async()=>{await d(e.currentUser)},_=C.useMemo(()=>({user:r,loading:i,isAdmin:a,login:h,signInWithGoogle:p,logout:m,refresh:y}),[r,i,a]);return c.jsx(pS.Provider,{value:_,children:t})}function Ro(){const t=C.useContext(pS);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}function hr({label:t="Loading..."}){return c.jsxs("div",{className:"flex items-center gap-3 text-slate-500 py-6",children:[c.jsxs("svg",{className:"animate-spin h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]}),c.jsx("span",{children:t})]})}function Tn({children:t}){const e=Fe(ie),[n,r]=G.useState(!1),[s,i]=G.useState(e.currentUser);return G.useEffect(()=>{const o=On(e,a=>{i(a),r(!0)});return()=>o()},[e]),n?s?c.jsx(c.Fragment,{children:t}):c.jsx(rr,{to:"/login",replace:!0}):c.jsx("div",{className:"max-w-xl mx-auto p-6",children:c.jsx(hr,{label:"Checking authentication…"})})}function kL(){var a;const t=Fe(ie),e=De(ie),[n,r]=C.useState(!0),[s,i]=C.useState(null),o=(a=t.currentUser)==null?void 0:a.uid;return C.useEffect(()=>{let u=!0;async function d(){if(!o){i(null),r(!1);return}r(!0);try{const h=Q(e,"users",o),p=await Ne(h);if(p.exists()){if(!u)return;i(p.data()||{})}else{await We(h,{createdAt:be()},{merge:!0});const m=await Ne(h);if(!u)return;i(m.data()||{})}}finally{r(!1)}}return d(),()=>{u=!1}},[e,o]),{loading:n,profile:s,uid:o}}function PL(t){return t?!!(t.displayName&&String(t.displayName).trim().length>1):!1}function Wt({children:t}){const e=Fe(ie),{loading:n,profile:r}=kL(),[s,i]=G.useState(!1),o=e.currentUser,a=jn();if(C.useEffect(()=>{const h=On(e,()=>i(!0));return()=>h()},[e]),!s||n)return c.jsx("div",{className:"max-w-xl mx-auto p-6",children:c.jsx(hr,{label:"Loading your profile…"})});if(!o)return c.jsx(rr,{to:"/login",replace:!0});const u=PL(r),d=a.pathname==="/welcome";return!u&&!d?c.jsx(rr,{to:"/welcome",replace:!0}):u&&d?c.jsx(rr,{to:"/dashboard",replace:!0}):c.jsx(c.Fragment,{children:t})}function jL({label:t="Checking admin access…"}){return c.jsx("div",{className:"max-w-xl mx-auto p-6 text-slate-700",children:t})}function Fs({children:t}){const e=Fe(ie),n=De(ie),[r,s]=G.useState(!1),[i,o]=G.useState(null),[a,u]=G.useState(null);return G.useEffect(()=>{const d=On(e,async h=>{if(s(!0),!h){o(!1);return}try{const p=await Ne(Q(n,"admins",h.uid));o(p.exists())}catch(p){u((p==null?void 0:p.message)||String(p)),o(!1)}});return()=>d()},[e,n]),!r||i===null?c.jsx(jL,{}):e.currentUser?i?c.jsx(c.Fragment,{children:t}):c.jsx(rr,{to:"/dashboard",replace:!0}):c.jsx(rr,{to:"/login",replace:!0})}function DL({label:t="Checking access…"}){return c.jsx("div",{className:"max-w-xl mx-auto p-6 text-slate-700",children:t})}function Oh({children:t}){const{slug:e}=mi(),n=e,r=Fe(ie),s=De(ie),[i,o]=G.useState(!1),[a,u]=G.useState(null);return G.useEffect(()=>{const d=On(r,async h=>{if(o(!0),!h||!n){u(!1);return}try{if((await Ne(Q(s,"admins",h.uid))).exists()){u(!0);return}const m=await Ne(Q(s,`groups/${n}/groupAdmins/${h.uid}`));u(m.exists())}catch{u(!1)}});return()=>d()},[r,s,n]),!i||a===null?c.jsx(DL,{}):a?c.jsx(c.Fragment,{children:t}):c.jsx(rr,{to:"/dashboard",replace:!0})}function mS({group:t,isMember:e,footer:n}){const r=t.name||t.title||Tw(t.id),s=t.description||"",i=t.parent?`Parent: ${Tw(t.parent)}`:null;return c.jsxs("div",{className:"rounded-xl border border-border bg-card p-4 flex flex-col justify-between shadow-sm",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsx("h3",{className:"text-lg font-semibold text-accent",children:r}),e?c.jsx(ve,{to:`/groups/${t.id}`,className:"inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800",children:"View"}):c.jsx("button",{type:"button",disabled:!0,className:"inline-flex items-center rounded-lg bg-slate-200 text-slate-500 px-3 py-1.5 text-sm cursor-not-allowed",title:"Join this group to view",children:"View"})]}),i&&c.jsx("p",{className:"text-xs text-text2 mt-1",children:i}),s&&c.jsx("p",{className:"text-sm text-text2 mt-3",children:s})]}),n&&c.jsx("div",{className:"mt-4 flex items-center gap-2",children:n})]})}function Tw(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function OL({groupId:t,className:e=""}){var m;const n=C.useMemo(()=>Fe(ie),[]),r=C.useMemo(()=>De(ie),[]),[s,i]=C.useState("checking"),[o,a]=C.useState(((m=n.currentUser)==null?void 0:m.uid)??null),[u,d]=C.useState(!1);C.useEffect(()=>{const y=On(n,_=>{a((_==null?void 0:_.uid)??null)});return()=>y()},[n]),C.useEffect(()=>{let y=!0;async function _(){if(!o){i("none");return}try{const E=await Ne(Q(r,`users/${o}/memberships/${t}`));if(!y)return;if(E.exists()){i("member");return}const S=fe(r,`users/${o}/memberships`),T=je(S,Qt("groupId","==",t)),x=await Ge(T);if(!y)return;if(!x.empty){i("member");return}const v=await Ne(Q(r,`users/${o}/membershipRequests/${t}`));if(!y)return;i(v.exists()?"pending":"none")}catch(E){console.warn("Unable to determine membership status; defaulting to 'none'.",E),y&&i("none")}}return _(),()=>{y=!1}},[r,o,t]);async function h(){var y,_;if(o){d(!0);try{let E=((y=n.currentUser)==null?void 0:y.displayName)||"";try{const S=await Ne(Q(r,`users/${o}`));S.exists()&&(E=((_=S.data())==null?void 0:_.displayName)||E)}catch{}await We(Q(r,`users/${o}/membershipRequests/${t}`),{groupId:t,requestedAt:be(),displayName:E},{merge:!0}),i("pending");try{await We(Q(r,`groups/${t}/membershipRequests/${o}`),{uid:o,requestedAt:be(),displayName:E},{merge:!0})}catch(S){console.warn("Could not mirror to group joinRequests; ensure rules allow create.",S)}}finally{d(!1)}}}async function p(){if(o){d(!0);try{await bt(Q(r,`users/${o}/membershipRequests/${t}`));try{await bt(Q(r,`groups/${t}/membershipRequests/${o}`))}catch{}i("none")}finally{d(!1)}}}return s==="checking"?c.jsx("button",{className:`text-xs px-3 py-1.5 rounded-lg border border-border bg-muted text-text2 ${e}`,disabled:!0,children:"Checking…"}):s==="member"?c.jsx("button",{className:`text-xs px-3 py-1.5 rounded-lg border border-border bg-muted text-text2 ${e}`,disabled:!0,children:"Member"}):s==="pending"?c.jsx("button",{onClick:p,className:`text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60 ${e}`,disabled:u,title:"Click to cancel your join request",children:"Pending — Cancel"}):c.jsx("button",{onClick:h,className:`text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60 ${e}`,disabled:u||!o,title:o?void 0:"Sign in to request",children:"Request to Join"})}function LL(){const t=C.useMemo(()=>De(ie),[]),e=Fe(ie),[n,r]=C.useState([]),[s,i]=C.useState(new Set),[o,a]=C.useState(!0);C.useEffect(()=>{let d=!1;async function h(){try{const m=(await Ge(je(fe(t,"groups"),Jt("name")))).docs.map(y=>({id:y.id,...y.data()}));if(d||r(m),e.currentUser){const y=e.currentUser.uid,_=await Ge(fe(t,`users/${y}/memberships`));d||i(new Set(_.docs.map(E=>E.id)))}}finally{d||a(!1)}}return h(),()=>{d=!0}},[t,e.currentUser]);const u=C.useMemo(()=>n.filter(d=>!s.has(d.id)),[n,s]);return o?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx(hr,{label:"Loading groups…"})})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-4",children:"Explore Groups"}),u.length>0?c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:u.map(d=>c.jsx(mS,{group:d,isMember:!1,footer:c.jsx(OL,{groupId:d.id})},d.id))}):c.jsx("div",{className:"rounded-xl border border-border bg-card p-6",children:c.jsx("p",{className:"text-text2",children:"You’ve already joined all available groups."})})]})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebasestorage.googleapis.com",yS="storageBucket",VL=2*60*1e3,ML=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Dn{constructor(e,n,r=0){super(Lh(e),`Firebase Storage: ${n} (${Lh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function Lh(t){return"storage/"+t}function _g(){const t="An unknown error occurred, please check the error payload for server response.";return new it(st.UNKNOWN,t)}function UL(t){return new it(st.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FL(t){return new it(st.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $L(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(st.UNAUTHENTICATED,t)}function BL(){return new it(st.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zL(t){return new it(st.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qL(){return new it(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function WL(){return new it(st.CANCELED,"User canceled the upload/download.")}function HL(t){return new it(st.INVALID_URL,"Invalid URL '"+t+"'.")}function GL(t){return new it(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KL(){return new it(st.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yS+"' property when initializing the app?")}function QL(){return new it(st.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function YL(){return new it(st.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XL(t){return new it(st.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hp(t){return new it(st.INVALID_ARGUMENT,t)}function vS(){return new it(st.APP_DELETED,"The Firebase app was deleted.")}function JL(t){return new it(st.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ia(t,e){return new it(st.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Jo(t){throw new it(st.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw GL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${h}/b/${s}/o${m}`,"i"),_={bucket:1,path:3},E=n===gS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",T=new RegExp(`^https?://${E}/${s}/${S}`,"i"),v=[{regex:a,indices:u,postModify:i},{regex:y,indices:_,postModify:d},{regex:T,indices:{bucket:1,path:2},postModify:d}];for(let R=0;R<v.length;R++){const j=v[R],L=j.regex.exec(e);if(L){const b=L[j.indices.bucket];let w=L[j.indices.path];w||(w=""),r=new gn(b,w),j.postModify(r);break}}if(r==null)throw HL(e);return r}}class ZL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eV(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function u(){return a===2}let d=!1;function h(...S){d||(d=!0,e.apply(null,S))}function p(S){s=setTimeout(()=>{s=null,t(y,u())},S)}function m(){i&&clearTimeout(i)}function y(S,...T){if(d){m();return}if(S){m(),h.call(null,S,...T);return}if(u()||o){m(),h.call(null,S,...T);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,p(v)}let _=!1;function E(S){_||(_=!0,m(),!d&&(s!==null?(S||(a=2),clearTimeout(s),p(0)):S||(a=1)))}return p(0),i=setTimeout(()=>{o=!0,E(!0)},n),E}function tV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(t){return t!==void 0}function rV(t){return typeof t=="object"&&!Array.isArray(t)}function wg(t){return typeof t=="string"||t instanceof String}function Iw(t){return xg()&&t instanceof Blob}function xg(){return typeof Blob<"u"}function Sw(t,e,n,r){if(r<e)throw hp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function _S(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Js;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Js||(Js={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,n,r,s,i,o,a,u,d,h,p,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,E)=>{this.resolve_=_,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new du(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Js.NO_ERROR,u=i.getStatus();if(!a||sV(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Js.ABORT;r(!1,new du(!1,null,h));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new du(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());nV(u)?i(u):i()}catch(u){o(u)}else if(a!==null){const u=_g();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(s.canceled){const u=this.appDelete_?vS():WL();o(u)}else{const u=qL();o(u)}};this.canceled_?n(!1,new du(!1,null,!0)):this.backoffId_=eV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class du{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function oV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function aV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cV(t,e,n,r,s,i,o=!0,a=!1){const u=_S(t.urlParams),d=t.url+u,h=Object.assign({},t.headers);return lV(h,e),oV(h,n),aV(h,i),uV(h,r),new iV(d,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hV(...t){const e=dV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xg())return new Blob(t);throw new it(st.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(t){if(typeof atob>"u")throw XL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vh{constructor(e,n){this.data=e,this.contentType=n||null}}function mV(t,e){switch(t){case er.RAW:return new Vh(wS(e));case er.BASE64:case er.BASE64URL:return new Vh(xS(t,e));case er.DATA_URL:return new Vh(yV(e),vV(e))}throw _g()}function wS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function gV(t){let e;try{e=decodeURIComponent(t)}catch{throw Ia(er.DATA_URL,"Malformed data URL.")}return wS(e)}function xS(t,e){switch(t){case er.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ia(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case er.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ia(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=pV(e)}catch(s){throw s.message.includes("polyfill")?s:Ia(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ES{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ia(er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_V(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yV(t){const e=new ES(t);return e.base64?xS(er.BASE64,e.rest):gV(e.rest)}function vV(t){return new ES(t).contentType}function _V(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){let r=0,s="";Iw(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Iw(this.data_)){const r=this.data_,s=fV(r,e,n);return s===null?null:new ns(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ns(r,!0)}}static getBlob(...e){if(xg()){const n=e.map(r=>r instanceof ns?r.data_:r);return new ns(hV.apply(null,n))}else{const n=e.map(o=>wg(o)?mV(er.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new ns(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){let e;try{e=JSON.parse(t)}catch{return null}return rV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xV(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function IS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(t,e){return e}class Ht{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||EV}}let hu=null;function TV(t){return!wg(t)||t.length<2?t:IS(t)}function SS(){if(hu)return hu;const t=[];t.push(new Ht("bucket")),t.push(new Ht("generation")),t.push(new Ht("metageneration")),t.push(new Ht("name","fullPath",!0));function e(i,o){return TV(o)}const n=new Ht("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ht("size");return s.xform=r,t.push(s),t.push(new Ht("timeCreated")),t.push(new Ht("updated")),t.push(new Ht("md5Hash",null,!0)),t.push(new Ht("cacheControl",null,!0)),t.push(new Ht("contentDisposition",null,!0)),t.push(new Ht("contentEncoding",null,!0)),t.push(new Ht("contentLanguage",null,!0)),t.push(new Ht("contentType",null,!0)),t.push(new Ht("metadata","customMetadata",!0)),hu=t,hu}function IV(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new gn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function SV(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return IV(r,t),r}function bS(t,e,n){const r=TS(e);return r===null?null:SV(t,r,n)}function bV(t,e,n,r){const s=TS(e);if(s===null||!wg(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const h=t.bucket,p=t.fullPath,m="/b/"+o(h)+"/o/"+o(p),y=Eg(m,n,r),_=_S({alt:"media",token:d});return y+_})[0]}function NV(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class NS{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){if(!t)throw _g()}function AV(t,e){function n(r,s){const i=bS(t,s,e);return AS(i!==null),i}return n}function CV(t,e){function n(r,s){const i=bS(t,s,e);return AS(i!==null),bV(i,s,t.host,t._protocol)}return n}function CS(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=BL():s=$L():n.getStatus()===402?s=FL(t.bucket):n.getStatus()===403?s=zL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function RV(t){const e=CS(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=UL(t.path)),i.serverResponse=s.serverResponse,i}return n}function kV(t,e,n){const r=e.fullServerUrl(),s=Eg(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new NS(s,i,CV(t,n),o);return a.errorHandler=RV(e),a}function PV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=PV(null,e)),r}function DV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let R=0;R<2;R++)v=v+Math.random().toString().slice(2);return v}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const d=jV(e,r,s),h=NV(d,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,m=`\r
--`+u+"--",y=ns.getBlob(p,r,m);if(y===null)throw QL();const _={name:d.fullPath},E=Eg(i,t.host,t._protocol),S="POST",T=t.maxUploadRetryTime,x=new NS(E,S,AV(t,n),T);return x.urlParams=_,x.headers=o,x.body=y.uploadData(),x.errorHandler=CS(e),x}class OV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Js.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Js.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Js.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Jo("cannot .send() more than once");if(Fr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Jo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Jo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Jo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Jo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LV extends OV{initXhr(){this.xhr_.responseType="text"}}function RS(){return new LV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hi(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IS(this._location.path)}get storage(){return this._service}get parent(){const e=wV(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new hi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JL(e)}}function VV(t,e,n){t._throwIfRoot("uploadBytes");const r=DV(t.storage,t._location,SS(),new ns(e,!0),n);return t.storage.makeRequestWithTokens(r,RS).then(s=>({metadata:s,ref:t}))}function MV(t){t._throwIfRoot("getDownloadURL");const e=kV(t.storage,t._location,SS());return t.storage.makeRequestWithTokens(e,RS).then(n=>{if(n===null)throw YL();return n})}function UV(t,e){const n=xV(t._location.path,e),r=new gn(t._location.bucket,n);return new hi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FV(t){return/^[A-Za-z]+:\/\//.test(t)}function $V(t,e){return new hi(t,e)}function kS(t,e){if(t instanceof Tg){const n=t;if(n._bucket==null)throw KL();const r=new hi(n,n._bucket);return e!=null?kS(r,e):r}else return e!==void 0?UV(t,e):t}function BV(t,e){if(e&&FV(e)){if(t instanceof Tg)return $V(t,e);throw hp("To use ref(service, url), the first argument must be a Storage instance.")}else return kS(t,e)}function bw(t,e){const n=e==null?void 0:e[yS];return n==null?null:gn.makeFromBucketSpec(n,t)}function zV(t,e,n,r={}){t.host=`${e}:${n}`;const s=Fr(e);s&&(Qc(`https://${t.host}/b`),Yc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:pE(i,t.app.options.projectId))}class Tg{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=gS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VL,this._maxUploadRetryTime=ML,this._requests=new Set,s!=null?this._bucket=gn.makeFromBucketSpec(s,this._host):this._bucket=bw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=bw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hi(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new ZL(vS());{const o=cV(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Nw="@firebase/storage",Aw="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="storage";function jS(t,e,n){return t=Te(t),VV(t,e,n)}function DS(t){return t=Te(t),MV(t)}function OS(t,e){return t=Te(t),BV(t,e)}function LS(t=Eo(),e){t=Te(t);const r=ks(t,PS).getImmediate({identifier:e}),s=cm("storage");return s&&qV(r,...s),r}function qV(t,e,n,r={}){zV(t,e,n,r)}function WV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Tg(n,r,s,e,yi)}function HV(){kn(new _n(PS,WV,"PUBLIC").setMultipleInstances(!0)),Ut(Nw,Aw,""),Ut(Nw,Aw,"esm2020")}HV();function GV({groupId:t,msg:e}){const n=De(ie),r=Fe(ie),s=LS(ie),[i,o]=C.useState(!1),[a,u]=C.useState([]),[d,h]=C.useState(""),[p,m]=C.useState(null);C.useEffect(()=>{if(!i||!e.id)return;const _=je(fe(n,`groups/${t}/messages/${e.id}/replies`),Jt("createdAt","asc"));return Ke(_,S=>{u(S.docs.map(T=>({id:T.id,...T.data()})))})},[n,t,e.id,i]);async function y(_){var x,v;_.preventDefault();const E=(x=r.currentUser)==null?void 0:x.uid;if(!E||!d.trim()&&!p||!e.id)return;const S=Q(fe(n,`groups/${t}/messages/${e.id}/replies`));let T=null;if(p){const R=`groupChatAttachments/${t}/${e.id}/${S.id}/${p.name}`,j=OS(s,R);await jS(j,p),T={fileUrl:await DS(j),fileName:p.name}}await We(S,{uid:E,text:d.trim(),displayName:((v=r.currentUser)==null?void 0:v.displayName)||null,createdAt:be(),...T||{}}),h(""),m(null),_.currentTarget.reset()}return c.jsxs("div",{className:"p-2 text-sm border-b border-border",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:e.displayName||e.uid.slice(0,6)}),": ",e.text,e.fileUrl&&c.jsx("div",{children:c.jsx("a",{href:e.fileUrl,target:"_blank",rel:"noopener",className:"text-accent underline",children:e.fileName||"Attachment"})})]}),c.jsx("button",{onClick:()=>o(_=>!_),className:"mt-1 text-xs text-accent",children:i?"Hide replies":"Reply"}),i&&c.jsxs("div",{className:"mt-2 ml-4",children:[a.length===0&&c.jsx("div",{className:"p-1 text-xs text-text2",children:"No replies yet."}),a.map(_=>c.jsxs("div",{className:"p-1 text-xs border-b border-border",children:[c.jsx("span",{className:"font-medium",children:_.displayName||_.uid.slice(0,6)}),": ",_.text,_.fileUrl&&c.jsx("div",{children:c.jsx("a",{href:_.fileUrl,target:"_blank",rel:"noopener",className:"text-accent underline",children:_.fileName||"Attachment"})})]},_.id)),c.jsxs("form",{onSubmit:y,className:"mt-2 flex gap-2",children:[c.jsx("input",{value:d,onChange:_=>h(_.target.value),placeholder:"Write a reply…",className:"flex-1 rounded-lg border border-border bg-background px-2 py-1 text-xs outline-none"}),c.jsx("input",{type:"file",onChange:_=>{var E;return m(((E=_.target.files)==null?void 0:E[0])||null)},className:"text-xs"}),c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-3 py-1 text-white text-xs",children:"Send"})]})]})]})}function KV({groupId:t}){const e=De(ie),n=Fe(ie),[r,s]=C.useState([]),[i,o]=C.useState(""),[a,u]=C.useState(null),d=LS(ie),h=C.useRef(null);C.useEffect(()=>{const m=je(fe(e,`groups/${t}/messages`),Jt("createdAt","asc"));return Ke(m,_=>{s(_.docs.map(E=>({id:E.id,...E.data()}))),setTimeout(()=>{var E;return(E=h.current)==null?void 0:E.scrollIntoView({behavior:"smooth"})},0)})},[e,t]);async function p(m){var S,T;m.preventDefault();const y=(S=n.currentUser)==null?void 0:S.uid;if(!y||!i.trim()&&!a)return;const _=Q(fe(e,`groups/${t}/messages`));let E=null;if(a){const x=`groupChatAttachments/${t}/${_.id}/${a.name}`,v=OS(d,x);await jS(v,a),E={fileUrl:await DS(v),fileName:a.name}}await We(_,{uid:y,text:i.trim(),displayName:((T=n.currentUser)==null?void 0:T.displayName)||null,createdAt:be(),...E||{}}),o(""),u(null),m.currentTarget.reset()}return c.jsxs("div",{className:"rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Team Chat"}),c.jsxs("div",{className:"mt-3 max-h-72 overflow-y-auto rounded-lg border border-border bg-background",children:[r.length===0&&c.jsx("div",{className:"p-3 text-sm text-text2",children:"No messages yet."}),r.map(m=>c.jsx(GV,{groupId:t,msg:m},m.id)),c.jsx("div",{ref:h})]}),c.jsxs("form",{onSubmit:p,className:"mt-2 flex gap-2",children:[c.jsx("input",{value:i,onChange:m=>o(m.target.value),placeholder:"Write a message…",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"}),c.jsx("input",{type:"file",onChange:m=>{var y;return u(((y=m.target.files)==null?void 0:y[0])||null)},className:"text-sm"}),c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm",children:"Send"})]})]})}function QV(){var K;const{slug:t=""}=mi(),e=G.useMemo(()=>De(ie),[]),n=Fe(ie),[r,s]=G.useState(null),[i,o]=G.useState(!1),[a,u]=G.useState(!1),[d,h]=G.useState(!0),[p,m]=G.useState([]),[y,_]=G.useState([]),[E,S]=G.useState(""),[T,x]=G.useState(""),[v,R]=G.useState(""),[j,L]=G.useState(null),[b,w]=G.useState(""),[N,A]=G.useState(""),[P,D]=G.useState(""),[k,Ae]=G.useState(!1),[qe,X]=G.useState(null),W=((K=n.currentUser)==null?void 0:K.uid)||null,M=G.useMemo(()=>y.find(F=>F.uid===W)||null,[y,W]),[q,Z]=G.useState(!1);G.useEffect(()=>{Z(!!(M!=null&&M.muted))},[M==null?void 0:M.muted]);async function ye(F){try{return(await Ne(F)).exists()}catch{return!1}}G.useEffect(()=>{let F=!1;async function le(){try{if(!t)return;try{const se=await Ne(Q(e,"groups",t));se.exists()&&!F&&s({id:se.id,...se.data()})}catch(se){console.error("Failed to load group doc",se)}let ne=!1,re=!1;const J=n.currentUser;if(J){const se=J.uid;if(await ye(Q(e,"admins",se)))ne=!0,re=!0;else if(await ye(Q(e,`groups/${t}/groupAdmins/${se}`)))ne=!0,re=!0;else if(await ye(Q(e,`users/${se}/memberships/${t}`)))ne=!0;else try{ne=(await Ge(fe(e,`users/${se}/memberships`))).docs.some(cn=>{const ut=cn.data();return(ut==null?void 0:ut.groupId)===t||(ut==null?void 0:ut.groupSlug)===t})}catch(Qe){console.warn("Membership scan failed",Qe)}}F||(u(re),o(ne))}finally{F||h(!1)}}return le(),()=>{F=!0}},[e,n.currentUser,t]),G.useEffect(()=>{if(!i||!t)return;const F=Ke(fe(e,`groups/${t}/resources`),ne=>{const re=ne.docs.map(J=>{var se,de,ue;return{id:J.id,title:((se=J.data())==null?void 0:se.title)||J.id,url:((de=J.data())==null?void 0:de.url)||"#",note:((ue=J.data())==null?void 0:ue.note)||""}});m(re)}),le=Ke(fe(e,`groups/${t}/members`),ne=>{const re=ne.docs.map(J=>({uid:J.id,...J.data()}));_(re)});return()=>{F(),le()}},[e,t,i]);async function me(F){var re;F.preventDefault(),X(null);const le=E.trim(),ne=T.trim();if(!le||!ne){X("Please enter a title and URL.");return}Ae(!0);try{await br(fe(e,`groups/${t}/resources`),{title:le,url:ne,note:v.trim()||"",createdAt:be(),createdBy:((re=n.currentUser)==null?void 0:re.uid)||null}),S(""),x(""),R("")}catch(J){const se=(J==null?void 0:J.message)||"Could not add resource.";X(se)}finally{Ae(!1)}}async function ce(){var ne;if(!j)return;X(null);const F=b.trim(),le=N.trim();if(!F||!le){X("Please enter a title and URL.");return}Ae(!0);try{await wd(Q(e,`groups/${t}/resources/${j}`),{title:F,url:le,note:P.trim()||"",updatedAt:be(),updatedBy:((ne=n.currentUser)==null?void 0:ne.uid)||null}),L(null),w(""),A(""),D("")}catch(re){const J=(re==null?void 0:re.message)||"Could not save changes.";X(J)}finally{Ae(!1)}}function lt(F){L(F.id),w(F.title),A(F.url),D(F.note||""),X(null)}async function B(F){if(X(null),!!window.confirm("Delete this resource?"))try{await bt(Q(e,`groups/${t}/resources/${F}`))}catch(le){const ne=(le==null?void 0:le.message)||"Could not delete resource.";X(ne)}}return d?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx(hr,{label:"Loading group…"})})}):r?i?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:r.name||t}),a&&c.jsx(ve,{to:`/admin/groups/${t}/edit`,className:"inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted",children:"Edit settings"}),r.description&&c.jsx("p",{className:"text-sm text-text2 mt-2",children:r.description})]}),W&&c.jsx("div",{className:"mt-1",children:c.jsxs("label",{className:"inline-flex items-center gap-2 text-sm",children:[c.jsx("input",{type:"checkbox",checked:q,onChange:async F=>{const le=F.target.checked;Z(le);try{await We(Q(e,`groups/${t}/members/${W}`),{muted:le},{merge:!0})}catch{Z(!le),alert("Could not update notification setting.")}}}),c.jsx("span",{children:"Mute notifications for this group"})]})})]}),c.jsx("div",{className:"mt-6",children:c.jsx(KV,{groupId:t})}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("div",{className:"flex items-center justify-between",children:c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Resources"})}),a&&c.jsxs("form",{onSubmit:me,className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{className:"sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Title",value:E,onChange:F=>S(F.target.value)}),c.jsx("input",{className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"https://...",value:T,onChange:F=>x(F.target.value)}),c.jsx("div",{className:"sm:col-span-6",children:c.jsx("textarea",{className:"w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Optional note (description)…",value:v,onChange:F=>R(F.target.value)})}),c.jsxs("div",{className:"sm:col-span-6",children:[c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm",disabled:k,children:k?"Saving…":"Add resource"}),qe&&c.jsx("span",{className:"ml-3 text-sm text-rose-700",children:qe})]})]}),c.jsxs("ul",{className:"mt-3 divide-y divide-border",children:[p.map(F=>c.jsxs("li",{className:"py-2 flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("a",{href:F.url,target:"_blank",rel:"noreferrer",className:"text-sm text-accent underline underline-offset-2 break-all",children:F.title}),F.note&&c.jsx("p",{className:"text-xs text-text2 mt-1",children:F.note})]}),a&&c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{type:"button",onClick:()=>lt(F),className:"text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted",children:"Edit"}),c.jsx("button",{type:"button",onClick:()=>B(F.id),className:"text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50",children:"Remove"})]})]},F.id)),p.length===0&&c.jsx("li",{className:"py-2 text-sm text-text2",children:"No resources yet."})]}),j&&c.jsxs("form",{onSubmit:F=>{F.preventDefault(),ce()},className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{className:"sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Title",value:b,onChange:F=>w(F.target.value)}),c.jsx("input",{className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"https://...",value:N,onChange:F=>A(F.target.value)}),c.jsx("div",{className:"sm:col-span-6",children:c.jsx("textarea",{className:"w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Optional note (description)…",value:P,onChange:F=>D(F.target.value)})}),c.jsxs("div",{className:"sm:col-span-6 flex items-center gap-2",children:[c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm",disabled:k,children:k?"Saving…":"Save changes"}),c.jsx("button",{type:"button",onClick:()=>{L(null),w(""),A(""),D("")},className:"text-sm rounded-lg border border-border px-3 py-2 hover:bg-muted",children:"Cancel"}),qe&&c.jsx("span",{className:"text-sm text-rose-700",children:qe})]})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Team"}),y.length>0?c.jsx("ul",{className:"mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2",children:y.map(F=>c.jsxs("li",{className:"rounded-lg border border-border px-3 py-2",children:[c.jsx("p",{className:"text-sm",children:F.displayName||F.uid}),F.role&&c.jsx("p",{className:"text-xs text-text2",children:F.role}),F.email&&c.jsx("p",{className:"text-xs text-text2",children:F.email}),"muted"in F&&c.jsx("p",{className:"text-[11px] text-text2 mt-1",children:F.muted?"Muted":"Notifications on"})]},F.uid))}):c.jsx("p",{className:"text-sm text-text2 mt-2",children:"No members are listed for this group yet."})]})]})}):c.jsx("div",{className:"container py-8",children:c.jsxs("div",{className:"max-w-3xl mx-auto rounded-xl border border-border bg-card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-accent mb-2",children:r.name||t}),c.jsx("p",{className:"text-sm text-text2 mb-4",children:"Membership is required to view this group."}),c.jsx("p",{className:"text-sm text-text2",children:"Request to join from the Explore page."})]})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx("p",{className:"text-text2",children:"Group not found."})})})}const VS="/assets/Header_Logo-CWkkS3_r.png";function YV(){const[t,e]=C.useState(!1);return C.useEffect(()=>{const n=window.matchMedia&&window.matchMedia("(display-mode: standalone)"),r=navigator.standalone===!0,s=()=>e(!!(n&&n.matches||r));return s(),n&&n.addEventListener&&n.addEventListener("change",s),()=>{n&&n.removeEventListener&&n.removeEventListener("change",s)}},[]),t}function XV(){const t=YV();return c.jsxs(c.Fragment,{children:[t&&c.jsx("style",{children:`
          [data-app-header]{
            padding-top: env(safe-area-inset-top);
            padding-top: constant(safe-area-inset-top);
          }
        `}),c.jsx("header",{"data-app-header":!0,className:"w-full border-b border-border bg-[var(--bg)]",children:c.jsx("div",{className:"container py-2 md:py-3 flex items-center",children:c.jsx(ve,{to:"/login","aria-label":"Immanuel Members Home",className:"shrink-0",children:c.jsx("img",{src:VS,alt:"Immanuel Downtown",className:"h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"})})})})]})}function Cw(t){return t&&t.trim().split(/\s+/)[0]||null}function JV(){const[t,e]=C.useState(!1);return C.useEffect(()=>{const n=window.matchMedia&&window.matchMedia("(display-mode: standalone)"),r=navigator.standalone===!0,s=()=>e(!!(n&&n.matches||r));return s(),n&&n.addEventListener&&n.addEventListener("change",s),()=>{n&&n.removeEventListener&&n.removeEventListener("change",s)}},[]),t}function ZV(){const{user:t,isAdmin:e}=Ro(),n=jn(),[r,s]=C.useState(""),[i,o]=C.useState(!1),a=JV(),u="inline-flex items-center justify-center min-h-[2.25rem] px-3 py-2 rounded-lg text-sm leading-tight text-center whitespace-normal md:whitespace-nowrap",d=h=>`${u} ${h?"bg-muted text-accent":"text-text hover:text-accent"}`;return C.useEffect(()=>{let h=!0;async function p(){if(!t){h&&s("");return}const m=Cw(t.displayName);if(m){h&&s(m);return}try{const y=await Ne(Q(Lt,"users",t.uid));if(y.exists()){const _=y.data(),E=(_==null?void 0:_.name)||[_==null?void 0:_.firstName,_==null?void 0:_.lastName].filter(Boolean).join(" ").trim(),S=Cw(E);if(S){h&&s(S);return}}}catch{}h&&s("there")}return p(),()=>{h=!1}},[t]),C.useEffect(()=>{o(!1)},[n.pathname]),c.jsxs(c.Fragment,{children:[a&&c.jsx("style",{children:`
          [data-app-header] {
            padding-top: env(safe-area-inset-top);
            /* Safari < 11.2 fallback (rare now) */
            padding-top: constant(safe-area-inset-top);
          }
        `}),c.jsxs("header",{"data-app-header":!0,className:"w-full border-b border-border bg-[var(--bg)]",children:[c.jsxs("div",{className:"container py-2 md:py-3 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1 items-center gap-x-3 gap-y-2",children:[c.jsx("div",{className:"col-start-1 row-start-1 md:col-span-1 flex items-center min-w-0",children:c.jsx(ve,{to:"/dashboard","aria-label":"Immanuel Members Home",className:"shrink-0",children:c.jsx("img",{src:VS,alt:"Immanuel Downtown",className:"h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"})})}),c.jsx("div",{className:"col-start-2 row-start-1 md:hidden flex justify-end",children:c.jsx("button",{"aria-label":"Open menu","aria-expanded":i,className:"p-2 rounded-md border border-border/70 bg-surface/40 hover:bg-surface/60 active:scale-[0.98] transition",onClick:()=>o(h=>!h),children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:c.jsx("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})}),c.jsxs("nav",{className:"col-span-2 row-start-2 md:row-start-1 md:col-span-1 flex justify-center gap-4 text-sm",children:[c.jsx(su,{to:"/dashboard",className:({isActive:h})=>d(h),children:"Dashboard"}),c.jsx(su,{to:"/forum",className:({isActive:h})=>d(h),children:"The Forum"}),c.jsx(su,{to:"/groups",className:({isActive:h})=>d(h),children:"Groups"}),e&&c.jsx(su,{to:"/admin",className:({isActive:h})=>d(h),children:"Admin"})]}),c.jsx("div",{className:"hidden md:flex md:col-start-3 md:row-start-1 justify-end items-center gap-2",children:t?c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"text-sm text-text2",children:["Hi",r?`, ${r}`:""]}),c.jsx(ve,{to:"/profile",className:"btn btn-outline btn-md",children:"Profile"}),c.jsx("button",{className:"btn btn-outline btn-md",onClick:()=>qf(nl),children:"Sign out"})]}):n.pathname!=="/login"&&c.jsx(ve,{to:"/login",className:"btn btn-outline btn-md",children:"Sign in"})})]}),i&&c.jsxs("div",{className:"fixed inset-0 z-50",children:[c.jsx("button",{"aria-label":"Close menu",className:"absolute inset-0 bg-black/40",onClick:()=>o(!1)}),c.jsxs("div",{className:"absolute top-2 right-2 w-64 rounded-xl border border-border bg-[var(--bg)] shadow-xl p-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"text-sm text-text2",children:"Menu"}),c.jsx("button",{className:"p-2 rounded-md hover:bg-surface/60",onClick:()=>o(!1),"aria-label":"Close",children:c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M6 6l12 12M18 6l-12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),c.jsx("div",{className:"mt-2 border-t border-border/60 pt-2 grid gap-2",children:t?c.jsxs(c.Fragment,{children:[c.jsx(ve,{to:"/profile",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Profile"}),e&&c.jsx(ve,{to:"/admin",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Admin"}),c.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{o(!1),qf(nl)},children:"Sign out"})]}):n.pathname!=="/login"&&c.jsx(ve,{to:"/login",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Sign in"})})]})]})]})]})}function eM(){const t=Fe(ie),e=Ur(),[n,r]=C.useState(""),[s,i]=C.useState(""),[o,a]=C.useState(!1),[u,d]=C.useState(!1),[h,p]=C.useState(!1),[m,y]=C.useState(null);C.useEffect(()=>On(t,T=>{T&&e("/dashboard",{replace:!0})}),[t,e]);async function _(){y(null),d(!0);try{const S=new bn;await Nm(t,S),e("/dashboard",{replace:!0})}catch{y("Google sign-in was cancelled or failed.")}finally{d(!1)}}async function E(S){if(S.preventDefault(),y(null),!n||!s){y("Please enter your email and password.");return}p(!0);try{await qE(t,n,s),e("/dashboard",{replace:!0})}catch(T){const x=String((T==null?void 0:T.code)||"");let v="Could not sign in with email and password.";x==="auth/invalid-email"?v="Please enter a valid email address.":(x==="auth/user-not-found"||x==="auth/wrong-password")&&(v="Email or password is incorrect."),y(v)}finally{p(!1)}}return c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-1",children:"Welcome back"}),c.jsx("p",{className:"text-sm text-text2 mb-6",children:"Sign in to continue."}),m&&c.jsx("div",{className:"mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",children:m}),c.jsxs("form",{onSubmit:E,className:"grid gap-3 mb-4",children:[c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Email"}),c.jsx("input",{type:"email",value:n,onChange:S=>r(S.target.value),placeholder:"you@example.com",autoComplete:"email",className:"rounded-lg border border-border bg-background px-3 py-2 outline-none",required:!0})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Password"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:o?"text":"password",value:s,onChange:S=>i(S.target.value),placeholder:"••••••••",autoComplete:"current-password",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none",required:!0}),c.jsx("button",{type:"button",onClick:()=>a(S=>!S),className:"rounded-lg border border-border px-3 py-2 text-sm",children:o?"Hide":"Show"})]})]}),c.jsx("button",{type:"submit",disabled:h,className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white disabled:opacity-60",children:h?"Signing in…":"Sign in"})]}),c.jsx("button",{type:"button",onClick:_,disabled:u,className:"btn btn-outline w-full",children:u?"Please wait…":"Sign in with Google"}),c.jsx("div",{className:"mt-2",children:c.jsx(ve,{to:"/signup",className:"btn btn-outline w-full",children:"Create account"})}),c.jsx("div",{className:"mt-6 text-center",children:c.jsx(ve,{to:"/forgot",className:"text-sm text-accent underline underline-offset-2",children:"Forgot password?"})})]})})}function tM(t){const e=t.trim().split(/\s+/).filter(Boolean);return e.length===0?{firstName:"",lastName:""}:e.length===1?{firstName:e[0],lastName:""}:{firstName:e[0],lastName:e.slice(1).join(" ")}}function nM(){const t=Fe(ie),e=Ur(),[n,r]=C.useState(""),[s,i]=C.useState(""),[o,a]=C.useState(""),[u,d]=C.useState(""),[h,p]=C.useState(""),[m,y]=C.useState(!1),[_,E]=C.useState(null),[S,T]=C.useState(!1);C.useEffect(()=>On(t,j=>{j&&e("/dashboard",{replace:!0})}),[t,e]);async function x(R){R.preventDefault(),E(null);const j=n.trim(),L=s.trim();if(!j){E("Please enter your first name.");return}if(!o||!u){E("Please enter an email and password.");return}if(u!==h){E("Passwords do not match.");return}const b=(j+" "+L).trim();T(!0);try{const w=await Pk(t,o,u);w.user&&await WE(w.user,{displayName:b});try{localStorage.setItem("signupName",b),localStorage.setItem("signupFirstName",j),localStorage.setItem("signupLastName",L)}catch{}e("/welcome",{replace:!0,state:{name:b,firstName:j,lastName:L}})}catch(w){const N=String((w==null?void 0:w.code)||"");let A="Could not create account.";N==="auth/email-already-in-use"?A="That email is already in use.":N==="auth/invalid-email"?A="Please enter a valid email address.":N==="auth/weak-password"&&(A="Password should be at least 6 characters."),E(A)}finally{T(!1)}}async function v(){var R;E(null),T(!0);try{const j=new bn,b=((R=(await Nm(t,j)).user)==null?void 0:R.displayName)||"",{firstName:w,lastName:N}=tM(b);try{b&&(localStorage.setItem("signupName",b),localStorage.setItem("signupFirstName",w),localStorage.setItem("signupLastName",N))}catch{}e("/welcome",{replace:!0,state:{name:b,firstName:w,lastName:N}})}catch{E("Google sign-in was cancelled or failed.")}finally{T(!1)}}return c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-1",children:"Create your account"}),c.jsx("p",{className:"text-sm text-text2 mb-6",children:"Join Immanuel Downtown to access your dashboard and groups."}),_&&c.jsx("div",{className:"mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",children:_}),c.jsxs("form",{onSubmit:x,className:"grid gap-3",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"First name"}),c.jsx("input",{type:"text",value:n,onChange:R=>r(R.target.value),placeholder:"Jordan",autoComplete:"given-name",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Last name"}),c.jsx("input",{type:"text",value:s,onChange:R=>i(R.target.value),placeholder:"Smith",autoComplete:"family-name",className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Email"}),c.jsx("input",{type:"email",value:o,onChange:R=>a(R.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Password"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:m?"text":"password",value:u,onChange:R=>d(R.target.value),placeholder:"••••••••",autoComplete:"new-password",required:!0,className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none"}),c.jsx("button",{type:"button",onClick:()=>y(R=>!R),className:"rounded-lg border border-border px-3 py-2 text-sm",children:m?"Hide":"Show"})]})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Confirm password"}),c.jsx("input",{type:m?"text":"password",value:h,onChange:R=>p(R.target.value),placeholder:"••••••••",autoComplete:"new-password",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsx("button",{type:"submit",disabled:S,className:"mt-2 rounded-lg bg-accent px-4 py-2 text-white hover:opacity-90 disabled:opacity-60",children:S?"Creating…":"Create account"})]}),c.jsx("div",{className:"mt-4",children:c.jsx("button",{type:"button",onClick:v,disabled:S,className:"w-full rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted disabled:opacity-60",children:"Continue with Google"})}),c.jsxs("div",{className:"mt-4 text-sm text-text2",children:["Already have an account?"," ",c.jsx(ve,{to:"/login",className:"text-accent underline underline-offset-2",children:"Sign in"})]})]})})}function rM(){const t=C.useMemo(()=>De(ie),[]),{user:e,loading:n}=Ro(),r=(e==null?void 0:e.uid)??null,[s,i]=C.useState(null);if(C.useEffect(()=>{if(!r){i([]);return}const a=je(fe(t,`users/${r}/notifications`),Jt("createdAt","desc")),u=Ke(a,d=>{const h=d.docs.map(p=>({id:p.id,...p.data()}));i(h.filter(p=>!p.read))},d=>{console.error("Notifications listener error:",(d==null?void 0:d.message)||d),i([])});return()=>u()},[t,r]),s===null||n)return c.jsxs("div",{className:"p-1",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Notifications"}),c.jsx("div",{className:"mt-2",children:c.jsx(hr,{label:"Loading notifications…"})})]});async function o(a){if(r)try{await wd(Q(t,`users/${r}/notifications/${a}`),{read:!0,readAt:be()})}catch{}}return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Notifications"}),s.length===0?c.jsx("p",{className:"text-text2 mt-2",children:"You have no new notifications."}):c.jsx("ul",{className:"mt-3 space-y-2",children:s.map(a=>{const u=c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm",children:a.text}),a.groupName&&c.jsxs("p",{className:"text-xs text-text2",children:["Group: ",a.groupName]})]}),c.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200",children:"new"})]});return c.jsx("li",{className:"rounded-lg border border-border bg-card px-3 py-2 ring-1 ring-emerald-300/40",children:a.href?c.jsx(ve,{to:a.href,onClick:()=>o(a.id),className:"block hover:opacity-90",children:u}):c.jsx("button",{onClick:()=>o(a.id),className:"block w-full text-left hover:opacity-90",children:u})},a.id)})})]})}const Rw="https://calendar.google.com/calendar/embed?src=immanueldowntown@gmail.com",sM="America/New_York";function iM(){const{isAdmin:t}=Ro(),e=C.useMemo(()=>Fe(ie),[]),n=C.useMemo(()=>De(ie),[]),[r,s]=C.useState(!1),i=C.useRef(!1),o=C.useRef(!1),a=C.useRef(new Map),u=C.useRef(new Map);C.useEffect(()=>{let p=!1;const m=[],y=()=>{p||s(i.current||o.current)},_=()=>{a.current.forEach(S=>{try{S()}catch{}}),a.current.clear(),u.current.clear(),i.current=!1,y()};async function E(){const S=e.currentUser;if(!S)return;const T=S.uid;let x=!1;try{x=(await Ne(Q(n,"admins",T))).exists()}catch{x=!1}if(x)try{const v=Or(n,"membershipRequests");m.push(Ke(v,R=>{i.current=R.size>0,y()},()=>{i.current=!1,y()}))}catch{i.current=!1,y()}else try{const v=je(Or(n,"groupAdmins"),Qt("uid","==",T));m.push(Ke(v,R=>{const j=new Set;R.forEach(b=>{var N;const w=(N=b.ref.parent.parent)==null?void 0:N.id;w&&j.add(w)});for(const[b,w]of a.current.entries())if(!j.has(b)){try{w()}catch{}a.current.delete(b),u.current.delete(b)}j.forEach(b=>{if(a.current.has(b))return;const w=fe(n,`groups/${b}/membershipRequests`),N=Ke(w,A=>{u.current.set(b,A.size);let P=!1;for(const D of u.current.values())if((D??0)>0){P=!0;break}i.current=P,y()},()=>{u.current.set(b,0);let A=!1;for(const P of u.current.values())if((P??0)>0){A=!0;break}i.current=A,y()});a.current.set(b,N)});let L=!1;for(const b of u.current.values())if((b??0)>0){L=!0;break}i.current=L,y()},()=>{_()}))}catch{_()}if(x){const v=R=>{try{const j=Ke(R,L=>{o.current=L.size>0,y()},()=>{});m.push(j)}catch{}};v(je(fe(n,"users"),Qt("reviewed","==",!1))),v(je(fe(n,"users"),Qt("status","==","pending"))),v(je(fe(n,"users"),Qt("needsReview","==",!0)))}}return E(),()=>{p=!0,m.forEach(S=>{try{S()}catch{}}),_()}},[e,n]);const d=`${Rw}${Rw.includes("?")?"&":"?"}ctz=${encodeURIComponent(sM)}`,h=r?"text-sm px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200":"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200";return c.jsxs("div",{className:"container py-8 md:py-10",children:[c.jsx("div",{className:"text-center mb-6",children:c.jsx("h1",{className:"text-2xl md:text-3xl font-semibold",children:"Welcome!"})}),t&&c.jsxs("section",{className:"mb-6 border border-border p-5 rounded-xl flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Admin Tools"}),c.jsx("p",{className:"text-sm text-text2",children:r?"Attention needed: pending requests or new users.":"You have admin privileges."})]}),c.jsx(ve,{to:"/admin/groups",className:h,title:r?"Pending requests or new users need review":"Open Admin Console",children:"Admin Console"})]}),c.jsxs("section",{className:"border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"General Announcements"}),c.jsxs("ul",{className:"mt-3 space-y-2 text-text",children:[c.jsx("li",{children:"• Welcome to the Community Portal. Check your groups for updates. "}),c.jsx("li",{children:'• Notifications are now working. Open your profile and click on "Enable notification" to be kept up to speed on announcements and new resources and communications in your groups.'}),c.jsx("li",{children:"• We are working on getting Direct Messaging working so everyone can communicate easily in one place."}),c.jsx("li",{children:"• We are still in development. If you find bugs, or have features you'd like to see added, send Sam a DM."})]}),c.jsx("div",{className:"mt-6 pt-5 border-t border-border",children:c.jsx("div",{className:"mt-2",children:c.jsx(rM,{})})})]}),c.jsxs("section",{className:"mt-8 border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Calendar"}),c.jsx("p",{className:"text-text2 text-sm mt-1",children:"Synced from church Google Calendar."}),c.jsx("div",{className:"mt-4 w-full",children:d?c.jsx("iframe",{className:"w-full h-[440px] sm:h-[520px] md:h-[720px] rounded border-0",src:d,title:"Church Calendar",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}):c.jsx("div",{className:"w-full h-[440px] sm:h-[520px] md:h-[720px] flex items-center justify-center text-center p-6 text-sm text-text2 rounded bg-surface/50",children:c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-text mb-1",children:"Calendar not configured"}),c.jsxs("div",{children:["Set ",c.jsx("code",{className:"px-1 py-0.5 rounded bg-surface/50",children:"VITE_GCAL_EMBED_URL"})," in your env. In Google Calendar → ",c.jsx("em",{children:"Settings → Integrate calendar"}),", copy the ",c.jsx("strong",{children:"Embed code"})," ",c.jsx("code",{children:"src"})," URL and paste it there."]})]})})})]})]})}function oM(){const t=Fe(ie),e=C.useMemo(()=>De(ie),[]),[n,r]=C.useState(null),[s,i]=C.useState(!0);return C.useEffect(()=>{if(!t.currentUser)return;const o=t.currentUser.uid,a=Ke(fe(e,`users/${o}/memberships`),async u=>{const d=u.docs.map(p=>p.id);if(d.length===0){r([]),i(!1);return}const h=await Promise.all(d.map(async p=>{const m=await Ne(Q(e,"groups",p));if(m.exists()){const y=m.data();return{id:m.id,...y}}return null}));r(h.filter(Boolean)),i(!1)});return()=>a()},[t.currentUser,e]),s?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx(hr,{label:"Loading your groups…"})})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-4",children:"Your Groups"}),n&&n.length>0?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(o=>c.jsx(mS,{group:o,isMember:!0},o.id))}),c.jsx("div",{className:"mt-6",children:c.jsx(ve,{to:"/groups/explore",className:"inline-flex rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted",children:"Other Available Groups"})})]}):c.jsxs("div",{className:"rounded-xl border border-border bg-card p-6",children:[c.jsx("p",{className:"text-text2",children:"You haven’t joined any groups yet."}),c.jsx(ve,{to:"/groups/explore",className:"inline-flex mt-3 rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800",children:"View More Groups"})]})]})})}function aM(){Fe(ie);const t=De(ie),[e,n]=C.useState([]),[r,s]=C.useState(""),[i,o]=C.useState([]);C.useEffect(()=>{const p=je(Or(t,"resources"),Jt("createdAt","desc"));return Ke(p,y=>{n(y.docs.map(_=>({id:_.id,..._.data(),__path:_.ref.path})))})},[t]);const a=C.useMemo(()=>{const p=new Set;return e.forEach(m=>(m.tags||[]).forEach(y=>p.add(y))),Array.from(p).sort()},[e]),u=p=>{o(m=>m.includes(p)?m.filter(y=>y!==p):[...m,p])},d=p=>{try{const m=p!=null&&p.toDate?p.toDate():p instanceof Date?p:null;if(!m)return!1;const y=7*24*60*60*1e3;return Date.now()-m.getTime()<y}catch{return!1}},h=C.useMemo(()=>{const p=r.trim().toLowerCase();return e.filter(m=>{const y=p.length===0||(m.title||"").toLowerCase().includes(p)||(m.description||"").toLowerCase().includes(p)||(m.url||"").toLowerCase().includes(p),_=i.length===0||i.every(E=>(m.tags||[]).includes(E));return y&&_})},[e,r,i]);return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Resources"}),c.jsx("p",{className:"text-text2 mt-2",children:"Documents, links, and media you have access to."}),c.jsxs("div",{className:"mt-6 flex flex-col gap-3",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("input",{className:"rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none",placeholder:"Search by title, description, or URL",value:r,onChange:p=>s(p.target.value)}),i.length>0&&c.jsx("button",{type:"button",className:"rounded-lg border border-slate-300 px-3 py-2 text-sm hover:bg-slate-100",onClick:()=>o([]),children:"Clear tags"})]}),a.length>0&&c.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(p=>c.jsxs("button",{type:"button",onClick:()=>u(p),className:`text-xs rounded-full px-3 py-1 border ${i.includes(p)?"border-slate-700 bg-slate-800 text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`,"aria-pressed":i.includes(p),children:["#",p]},p))}),c.jsxs("ul",{className:"divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white/70",children:[h.map(p=>c.jsx("li",{className:"p-4 flex items-start justify-between gap-3",children:c.jsxs("div",{className:"min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("a",{href:p.url,target:"_blank",rel:"noreferrer",className:"text-sm text-accent underline underline-offset-2 break-all",children:p.title||p.url}),d(p.createdAt)&&c.jsx("span",{className:"text-[10px] uppercase tracking-wide rounded-full bg-green-100 text-green-800 px-2 py-0.5",children:"New"})]}),p.description&&c.jsx("p",{className:"mt-1 text-sm text-slate-600 whitespace-pre-wrap break-words",children:p.description}),p.tags&&p.tags.length>0&&c.jsx("div",{className:"mt-2 flex flex-wrap gap-1.5",children:p.tags.map(m=>c.jsxs("button",{type:"button",onClick:()=>u(m),className:`text-[11px] rounded-full px-2.5 py-1 border ${i.includes(m)?"border-slate-700 bg-slate-800 text-white":"border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`,"aria-pressed":i.includes(m),title:`Filter by #${m}`,children:["#",m]},m))})]})},p.__path||p.id)),h.length===0&&c.jsx("li",{className:"p-4 text-sm text-slate-600",children:"No resources match your filters."})]})]})]})}function lM(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Events"}),c.jsx("p",{className:"text-text2 mt-2",children:"Calendar and upcoming gatherings."})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM="type.googleapis.com/google.protobuf.Int64Value",cM="type.googleapis.com/google.protobuf.UInt64Value";function MS(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Nc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Nc(e));if(typeof t=="function"||typeof t=="object")return MS(t,e=>Nc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function go(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case uM:case cM:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>go(e)):typeof t=="function"||typeof t=="object"?MS(t,e=>go(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class on extends Dn{constructor(e,n,r){super(`${Ig}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,on.prototype)}}function dM(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Ac(t,e){let n=dM(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!kw[o])return new on("internal","internal");n=kw[o],r=o}const a=i.message;typeof a=="string"&&(r=a),s=i.details,s!==void 0&&(s=go(s))}}catch{}return n==="ok"?null:new on(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Kt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="us-central1",fM=/^data: (.*?)(?:\n|$)/;function pM(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new on("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class mM{constructor(e,n,r,s,i=fp,o=(...a)=>fetch(...a)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new hM(e,n,r,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(i);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=fp}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function gM(t,e,n){const r=Fr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Qc(t.emulatorOrigin),Yc("Functions",!0))}function yM(t,e,n){const r=s=>_M(t,e,s,{});return r.stream=(s,i)=>xM(t,e,s,i),r}async function vM(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function US(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function _M(t,e,n,r){const s=t._url(e);return wM(t,s,n,r)}async function wM(t,e,n,r){n=Nc(n);const s={data:n},i=await US(t,r),o=r.timeout||7e4,a=pM(o),u=await Promise.race([vM(e,s,i,t.fetchImpl),a.promise,t.cancelAllRequests]);if(a.cancel(),!u)throw new on("cancelled","Firebase Functions instance was deleted.");const d=Ac(u.status,u.json);if(d)throw d;if(!u.json)throw new on("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new on("internal","Response is missing data field.");return{data:go(h)}}function xM(t,e,n,r){const s=t._url(e);return EM(t,s,n,r||{})}async function EM(t,e,n,r){var m;n=Nc(n);const s={data:n},i=await US(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal})}catch(y){if(y instanceof Error&&y.name==="AbortError"){const E=new on("cancelled","Request was cancelled.");return{data:Promise.reject(E),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(E)}}}}}}const _=Ac(0,null);return{data:Promise.reject(_),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(_)}}}}}}let a,u;const d=new Promise((y,_)=>{a=y,u=_});(m=r==null?void 0:r.signal)==null||m.addEventListener("abort",()=>{const y=new on("cancelled","Request was cancelled.");u(y)});const h=o.body.getReader(),p=TM(h,a,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const y=p.getReader();return{async next(){const{value:_,done:E}=await y.read();return{value:_,done:E}},async return(){return await y.cancel(),{done:!0,value:void 0}}}}},data:d}}function TM(t,e,n,r){const s=(o,a)=>{const u=o.match(fM);if(!u)return;const d=u[1];try{const h=JSON.parse(d);if("result"in h){e(go(h.result));return}if("message"in h){a.enqueue(go(h.message));return}if("error"in h){const p=Ac(0,h);a.error(p),n(p);return}}catch(h){if(h instanceof on){a.error(h),n(h);return}}},i=new TextDecoder;return new ReadableStream({start(o){let a="";return u();async function u(){if(r!=null&&r.aborted){const d=new on("cancelled","Request was cancelled");return o.error(d),n(d),Promise.resolve()}try{const{value:d,done:h}=await t.read();if(h){a.trim()&&s(a.trim(),o),o.close();return}if(r!=null&&r.aborted){const m=new on("cancelled","Request was cancelled");o.error(m),n(m),await t.cancel();return}a+=i.decode(d,{stream:!0});const p=a.split(`
`);a=p.pop()||"";for(const m of p)m.trim()&&s(m.trim(),o);return u()}catch(d){const h=d instanceof on?d:Ac(0,null);o.error(h),n(h)}}},cancel(){return t.cancel()}})}const Pw="@firebase/functions",jw="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM="auth-internal",SM="app-check-internal",bM="messaging-internal";function NM(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(IM),o=n.getProvider(bM),a=n.getProvider(SM);return new mM(s,i,o,a,r)};kn(new _n(Ig,e,"PUBLIC").setMultipleInstances(!0)),Ut(Pw,jw,t),Ut(Pw,jw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t=Eo(),e=fp){const r=ks(Te(t),Ig).getImmediate({identifier:e}),s=cm("functions");return s&&AM(r,...s),r}function AM(t,e,n){gM(Te(t),e,n)}function Il(t,e,n){return yM(Te(t),e)}NM();function CM(t){return t?"present":"missing"}async function RM(){const t=await(async()=>{try{return!!await Promise.resolve(Td())}catch{return!1}})(),e=await navigator.serviceWorker.getRegistration("/sw.js"),s={permission:typeof Notification<"u"?Notification.permission:"unavailable",swRegistered:!!e,swScope:(e==null?void 0:e.scope)||null,messagingSupported:t,vapidKey:CM("BOhz8CwPpf6kstE2HWU-Pyb4bkPGM6OpdVzU3PYrhyMSGZKyds6UzoSlQN1lRYxrmtf-HGQwSw5DivQ0SjkdxCI")};return console.table(s),s}async function FS(){try{return!!await Promise.resolve(Td())}catch(t){return console.warn("[push] getMessagingIfSupported threw:",t),!1}}async function kM(t){console.groupCollapsed("[push] enroll start");try{if(await RM(),!await FS())return console.warn("[push] messaging not supported in this environment"),null;let e=Notification.permission;if(e!=="granted"&&(e=await Notification.requestPermission()),console.log("[push] permission after request:",e),e!=="granted")return console.warn("[push] user did not grant permission"),null;let n=await navigator.serviceWorker.getRegistration("/sw.js");if(n)console.log("[push] using existing SW at",n.scope);else{console.log("[push] registering /sw.js");try{n=await navigator.serviceWorker.register("/sw.js"),console.log("[push] /sw.js registered at",n.scope)}catch(o){return console.warn("[push] failed to register /sw.js:",o),null}}const r=await Promise.resolve(Td());if(!r)return console.warn("[push] getMessagingIfSupported returned null"),null;const s="BOhz8CwPpf6kstE2HWU-Pyb4bkPGM6OpdVzU3PYrhyMSGZKyds6UzoSlQN1lRYxrmtf-HGQwSw5DivQ0SjkdxCI";let i=null;try{i=await bL(r,{vapidKey:s,serviceWorkerRegistration:n})}catch(o){return console.warn("[push] getToken() threw:",o),null}if(!i)return console.warn("[push] getToken() returned null/empty"),null;console.log("[push] obtained token (truncated):",i.slice(0,10)+"...");try{const o=Q(Lt,`users/${t}/pushTokens/${i}`);await We(o,{token:i,createdAt:be(),userAgent:navigator.userAgent||""},{merge:!0}),console.log("[push] token saved to Firestore (client)")}catch(o){console.warn("[push] failed to write token to Firestore (client):",o)}try{await Il(Id(ie,"us-central1"),"registerPushToken")({token:i}),console.log("[push] token saved via callable (server)")}catch(o){console.warn("[push] registerPushToken callable failed (non-fatal):",o)}return i}finally{console.groupEnd()}}async function PM(t){if(!await FS())return()=>{};const e=await Promise.resolve(Td());return e?NL(e,r=>{try{t(r)}catch(s){console.warn("[push] handler error:",s)}}):()=>{}}function jM(){const t=Fe(),e=t.currentUser,[n,r]=C.useState(null),[s,i]=C.useState(null);C.useEffect(()=>{if(!e)return;const a=Q(Lt,"users",e.uid),u=Ke(a,d=>r(d.data()),d=>console.warn("Profile onSnapshot error:",d));return()=>u()},[e]),C.useEffect(()=>{if(!e)return;let a=null,u=!1;return(async()=>{try{const d=await PM(h=>{console.log("[push] Foreground message:",h);const p=(h==null?void 0:h.data)||{};i({title:p.title||"Notification",body:p.body||""}),setTimeout(()=>i(null),6e3)});u?typeof d=="function"&&d():a=typeof d=="function"?d:null}catch(d){console.warn("listenForegroundMessages failed:",d)}})(),()=>{if(u=!0,typeof a=="function")try{a()}catch{}}},[e]);const o=async()=>{try{const a=t.currentUser;if(!a)return;const u=await kM(a.uid);alert(u?"Notifications enabled on this device.":"Notifications not enabled (permission denied or unsupported).")}catch(a){console.error("Notification setup failed",a),alert("Could not enable notifications.")}};return c.jsx("div",{className:"container py-8",children:c.jsxs("div",{className:"max-w-3xl mx-auto rounded-xl border border-border bg-card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-accent mb-4",children:"Profile"}),e&&c.jsxs("div",{className:"mb-4 text-sm text-text",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Email:"})," ",e.email]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"UID:"})," ",e.uid]})]}),n&&c.jsx("div",{className:"mb-6 text-sm text-text2",children:n.displayName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium text-text",children:"Display Name:"})," ",n.displayName]})}),s&&c.jsxs("div",{className:"mb-4 rounded-lg border border-border bg-card p-3",children:[c.jsx("div",{className:"text-sm font-semibold text-accent",children:s.title}),c.jsx("div",{className:"text-sm text-text2",children:s.body})]}),c.jsxs("section",{className:"mt-2 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Notifications"}),c.jsx("p",{className:"text-sm text-text2 mt-1",children:"Enable push notifications on this device to get updates."}),c.jsx("div",{className:"mt-3 flex gap-3",children:c.jsx("button",{type:"button",onClick:o,className:"rounded-lg px-4 py-2 text-white text-sm",style:{backgroundColor:"#919FAA"},children:"Enable notifications on this device"})})]})]})})}function DM(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Settings"}),c.jsx("p",{className:"text-text2 mt-2",children:"Preferences and app settings."})]})}function OM(){const[t,e]=C.useState(""),[n,r]=C.useState(!1),[s,i]=C.useState(null),[o,a]=C.useState(!1);async function u(d){d.preventDefault(),i(null),r(!0);try{await Ak(nl,t),a(!0)}catch(h){i((h==null?void 0:h.message)||"Failed to send reset email")}finally{r(!1)}}return c.jsx("div",{className:"flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]",children:c.jsxs("div",{className:"w-full max-w-sm",children:[c.jsx("h1",{className:"text-2xl font-bold mb-2 text-center",children:"Forgot password"}),c.jsx("p",{className:"mb-6 text-center text-text2",children:"Enter your account email and we’ll send you a reset link."}),o?c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-accent",children:"Check your email"}),c.jsxs("p",{className:"text-text2 text-sm mt-1",children:["If an account exists for ",c.jsx("span",{className:"text-text",children:t}),", you’ll receive a password reset link shortly."]}),c.jsx(ve,{to:"/login",className:"btn btn-outline mt-4 w-full",children:"Back to sign in"})]}):c.jsxs("form",{onSubmit:u,className:"space-y-3",children:[c.jsx("input",{type:"email",className:"input w-full",placeholder:"Email",value:t,onChange:d=>e(d.target.value),required:!0,autoComplete:"email"}),s&&c.jsx("div",{className:"text-red-400 text-sm",children:s}),c.jsx("button",{className:"btn btn-primary w-full",disabled:n,children:n?"Sending…":"Send reset link"}),c.jsx("div",{className:"text-center",children:c.jsx(ve,{to:"/login",className:"text-sm underline text-text2",children:"Back to sign in"})})]})]})})}function LM(){const[t]=H1(),e=Ur(),n=t.get("oobCode")||"",[r,s]=C.useState(null),[i,o]=C.useState(""),[a,u]=C.useState(""),[d,h]=C.useState(!0),[p,m]=C.useState(null),[y,_]=C.useState(!1);C.useEffect(()=>{async function S(){try{const T=await kk(nl,n);s(T)}catch(T){m((T==null?void 0:T.message)||"Invalid or expired reset link.")}finally{h(!1)}}n?S():(m("Missing reset code."),h(!1))},[n]);async function E(S){if(S.preventDefault(),m(null),i.length<6){m("Password must be at least 6 characters.");return}if(i!==a){m("Passwords do not match.");return}try{await Ck(nl,n,i),_(!0),setTimeout(()=>e("/login",{replace:!0}),1200)}catch(T){m((T==null?void 0:T.message)||"Failed to reset password.")}}return d?c.jsx("div",{className:"container py-20",children:"Checking reset link…"}):c.jsx("div",{className:"flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]",children:c.jsxs("div",{className:"w-full max-w-sm",children:[c.jsx("h1",{className:"text-2xl font-bold mb-2 text-center",children:"Reset password"}),p&&c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-red-400 text-sm",children:p}),c.jsx(ve,{to:"/forgot",className:"btn btn-outline mt-4 w-full",children:"Request a new link"})]}),!p&&!y&&c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"mb-6 text-center text-text2",children:["Resetting password for ",r]}),c.jsxs("form",{onSubmit:E,className:"space-y-3",children:[c.jsx("input",{type:"password",className:"input w-full",placeholder:"New password",value:i,onChange:S=>o(S.target.value),required:!0,autoComplete:"new-password"}),c.jsx("input",{type:"password",className:"input w-full",placeholder:"Confirm new password",value:a,onChange:S=>u(S.target.value),required:!0,autoComplete:"new-password"}),c.jsx("button",{className:"btn btn-primary w-full",children:"Set new password"})]})]}),y&&c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-accent",children:"Password updated!"}),c.jsx("p",{className:"text-text2 text-sm mt-1",children:"Taking you back to sign in…"})]})]})})}const zi=[{id:"downtown",name:"Downtown"}];function VM(t){const e=t.trim().split(/\s+/).filter(Boolean);return e.length===0?{firstName:"",lastName:""}:e.length===1?{firstName:e[0],lastName:""}:{firstName:e[0],lastName:e.slice(1).join(" ")}}function MM(t){if(!t)return"";const e=String(t).trim();return zi.some(n=>n.id.toLowerCase()===e.toLowerCase())?zi.find(n=>n.id.toLowerCase()===e.toLowerCase()).id:zi.some(n=>n.name.toLowerCase()===e.toLowerCase())?zi.find(n=>n.name.toLowerCase()===e.toLowerCase()).id:""}function UM(){const t=Ur(),e=jn(),n=Fe(ie),r=De(ie),[s,i]=G.useState(!1),[o,a]=G.useState(n.currentUser),[u,d]=G.useState(""),[h,p]=G.useState(!1),[m,y]=G.useState(""),[_,E]=G.useState(""),[S,T]=G.useState(!1),[x,v]=G.useState(null);G.useEffect(()=>{const j=On(n,async L=>{var w;if(a(L),!L){i(!0);return}let b=L.displayName||((w=e.state)==null?void 0:w.name)||"";if(!b)try{const N=localStorage.getItem("signupName");N&&(b=N)}catch{}try{const N=await Ne(Q(r,"users",L.uid)),A=N.exists()?N.data():null;!b&&(A!=null&&A.displayName)&&(b=String(A.displayName)),A!=null&&A.phone&&y(String(A.phone)),A!=null&&A.campus&&E(MM(String(A.campus)))}catch{}d(b||""),p(!!b),i(!0)});return()=>j()},[n,r,e.state]);async function R(){var N;if(v(null),!o){v("You are not signed in.");return}const j=u.trim();if(!h&&!j){v("Please enter your name.");return}const L=h?(o==null?void 0:o.displayName)||u:j,{firstName:b,lastName:w}=VM(L);T(!0);try{if(!h){if(!n.currentUser)throw new Error("No current user.");await WE(n.currentUser,{displayName:L})}await We(Q(r,"users",o.uid),{displayName:L,firstName:b,lastName:w,phone:m.trim()||null,campus:_||null,campusName:((N=zi.find(A=>A.id===_))==null?void 0:N.name)||null,updatedAt:be(),onboardedAt:be(),reviewed:!1,needsReview:!0},{merge:!0});try{localStorage.removeItem("signupName"),localStorage.removeItem("signupFirstName"),localStorage.removeItem("signupLastName")}catch{}t("/dashboard",{replace:!0})}catch(A){v((A==null?void 0:A.message)||"Could not save your profile.")}finally{T(!1)}}return s?o?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-2",children:"Welcome!"}),c.jsx("p",{className:"text-sm text-text2 mb-4",children:"Let’s finish setting up your profile."}),h?c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"text-sm block text-text2",children:"Name"}),c.jsx("div",{className:"mt-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm",children:u}),c.jsx("p",{className:"mt-1 text-xs text-text2",children:"Pulled from your sign-up. You can edit this later in Profile."})]}):c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Name"}),c.jsx("input",{type:"text",value:u,onChange:j=>d(j.target.value),placeholder:"First Last",className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"})]}),c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Phone (optional)"}),c.jsx("input",{type:"tel",value:m,onChange:j=>y(j.target.value),placeholder:"(555) 555-5555",className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"})]}),c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Campus (optional)"}),c.jsxs("select",{value:_,onChange:j=>E(j.target.value),className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",children:[c.jsx("option",{value:"",children:"Select a campus (optional)"}),zi.map(j=>c.jsx("option",{value:j.id,children:j.name},j.id))]})]}),x&&c.jsx("p",{className:"text-sm text-rose-700 mb-2",children:x}),c.jsx("button",{onClick:R,disabled:S,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:S?"Saving…":"Save and continue"})]})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6",children:c.jsx("p",{className:"text-sm text-text2",children:"You are not signed in."})})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"mx-auto max-w-md",children:c.jsx(hr,{label:"Loading your account…"})})})}const FM="modulepreload",$M=function(t){return"/"+t},Dw={},BM=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=$M(u),u in Dw)return;Dw[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":FM,d||(p.as="script"),p.crossOrigin="",p.href=u,a&&p.setAttribute("nonce",a),document.head.appendChild(p),d)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};function zM(){const t=G.useMemo(()=>De(ie),[]),{user:e}=Ro(),[n,r]=G.useState(null),[s,i]=G.useState(null),[o,a]=G.useState(""),[u,d]=G.useState(""),[h,p]=G.useState(""),[m,y]=G.useState(null),[_,E]=G.useState(!1);G.useEffect(()=>{let v;if(e!=null&&e.uid){const R=Q(t,"admins",e.uid);BM(async()=>{const{onSnapshot:j}=await Promise.resolve().then(()=>JD);return{onSnapshot:j}},void 0).then(({onSnapshot:j})=>{v=j(R,L=>r(L.exists()))})}else r(!1);return()=>{v&&v()}},[t,e==null?void 0:e.uid]),G.useEffect(()=>{const v=je(fe(t,"sundayResources"),Jt("createdAt","desc")),R=Ke(v,j=>{const L=j.docs.map(b=>({id:b.id,...b.data()}));i(L)});return()=>R()},[t]);async function S(v){if(v.preventDefault(),!!n){if(y(null),!o.trim()||!u.trim()){y("Title and URL are required.");return}try{E(!0),await br(fe(t,"sundayResources"),{title:o.trim(),url:u.trim(),note:h.trim()||null,createdAt:be(),createdBy:(e==null?void 0:e.uid)??null,createdByName:(e==null?void 0:e.displayName)??null}),a(""),d(""),p("")}catch(R){y((R==null?void 0:R.message)||"Failed to add resource.")}finally{E(!1)}}}async function T(v){if(n)try{await bt(Q(t,"sundayResources",v))}catch{}}const x=n===!0;return s===null||n===null?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Sunday White Papers"}),c.jsx("div",{className:"mt-4",children:c.jsx(hr,{label:"Loading…"})})]})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Sunday White Papers"}),c.jsx("p",{className:"text-text2 mt-2",children:"A curated library of Sunday white papers and study resources."}),x&&c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Add a resource"}),m&&c.jsx("p",{className:"text-red-500 text-sm mt-2",children:m}),c.jsxs("form",{onSubmit:S,className:"mt-3 grid grid-cols-1 md:grid-cols-12 gap-3",children:[c.jsx("input",{type:"text",value:o,onChange:v=>a(v.target.value),placeholder:"Title",className:"md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("input",{type:"url",value:u,onChange:v=>d(v.target.value),placeholder:"URL (Google Drive, video, article…)",className:"md:col-span-6 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("input",{type:"text",value:h,onChange:v=>p(v.target.value),placeholder:"Note (optional)",className:"md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("div",{className:"md:col-span-12 flex justify-end",children:c.jsx("button",{type:"submit",disabled:_,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:_?"Adding…":"Add resource"})})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Resources"}),s.length===0?c.jsx("p",{className:"text-text2 text-sm mt-2",children:"No resources yet."}):c.jsx("ul",{className:"mt-3 space-y-2",children:s.map(v=>c.jsx("li",{className:"rounded-lg border border-border bg-muted px-3 py-2",children:c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"text-sm font-medium truncate",children:c.jsx("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:v.title})}),v.note&&c.jsx("p",{className:"text-xs text-text2 mt-0.5",children:v.note})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[c.jsx(ve,{to:v.url,target:"_blank",className:"text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70",children:"Open"}),x&&c.jsx("button",{onClick:()=>T(v.id),className:"text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70",title:"Delete",children:"Delete"})]})]})},v.id))})]})]})})}const qM=Il(Id(ie,"us-central1"),"askPastorQuestion");async function WM(t){await qM({text:t})}function HM(){const{user:t}=Ro(),[e,n]=C.useState(null),[r,s]=C.useState(null),[i,o]=C.useState(null),[a,u]=C.useState(""),[d,h]=C.useState(""),[p,m]=C.useState(null),[y,_]=C.useState(""),[E,S]=C.useState(""),[T,x]=C.useState(""),[v,R]=C.useState(!1),[j,L]=C.useState(""),[b,w]=C.useState(""),[N,A]=C.useState(!1);C.useEffect(()=>{const X=je(fe(Lt,"sundayResources"),Jt("createdAt","asc")),W=Ke(X,M=>{const q=M.docs.map(Z=>({id:Z.id,...Z.data()}));n(q)});return()=>W()},[]),C.useEffect(()=>{const X=je(fe(Lt,"forumThreads"),Jt("createdAt","desc")),W=Ke(X,M=>{const q=M.docs.map(Z=>({id:Z.id,...Z.data()}));o(q)});return()=>W()},[]),C.useEffect(()=>{const X=je(fe(Lt,"forumResources"),Jt("createdAt","desc")),W=Ke(X,M=>{const q=M.docs.map(Z=>({id:Z.id,...Z.data()}));s(q)});return()=>W()},[]),C.useEffect(()=>{let X;if(t!=null&&t.uid){const W=Q(Lt,"admins",t.uid);X=Ke(W,M=>m(M.exists()))}else m(!1);return()=>{X&&X()}},[t==null?void 0:t.uid]);const P=async X=>{X.preventDefault();const W=a.trim(),M=d.trim();if(!W||!M||!t)return;const q=await br(fe(Lt,"forumThreads"),{title:W,createdAt:be(),creator:t.uid});await br(fe(Lt,"forumThreads",q.id,"posts"),{author:t.displayName||t.email||"Anonymous",content:M,uid:t.uid,createdAt:be()}),u(""),h("")},D=async X=>{if(X.preventDefault(),!p)return;const W=y.trim(),M=E.trim(),q=T.trim();!W||!M||(await br(fe(Lt,"forumResources"),{title:W,url:M,note:q||null,createdAt:be(),createdBy:(t==null?void 0:t.uid)??null}),_(""),S(""),x(""))},k=async X=>{p&&await bt(Q(Lt,"forumResources",X))},Ae=()=>{R(!0),L(""),w(""),A(!1)},qe=async X=>{X.preventDefault();const W=j.trim();if(!W){w("Question cannot be empty"),A(!0);return}if(!t){w("Sign in required"),A(!0);return}try{await WM(W),w("Question sent."),A(!1),L("")}catch(M){let q="Could not send question.";(M==null?void 0:M.code)==="unauthenticated"?q="Sign in required":(M==null?void 0:M.code)==="invalid-argument"&&(q="Question cannot be empty"),w(q),A(!0)}};return c.jsxs(c.Fragment,{children:[v&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:c.jsxs("div",{className:"w-full max-w-md rounded-md bg-background p-4",children:[c.jsx("h2",{className:"mb-2 text-lg font-semibold",children:"Ask a Question"}),c.jsxs("form",{onSubmit:qe,className:"space-y-3",children:[c.jsx("textarea",{value:j,onChange:X=>L(X.target.value),placeholder:"Type your question",className:"w-full rounded-md border border-border bg-background p-2",rows:4}),b&&c.jsx("p",{className:`text-sm ${N?"text-red-500":"text-green-600"}`,children:b}),c.jsxs("div",{className:"flex justify-end space-x-2",children:[c.jsx("button",{type:"button",onClick:()=>R(!1),className:"rounded-md border border-border bg-background px-4 py-2",children:"Close"}),c.jsx("button",{type:"submit",className:"rounded-md bg-accent px-4 py-2 text-slate-900",children:"Send"})]})]})]})}),c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto space-y-10",children:[c.jsxs("section",{className:"text-center mb-6",children:[c.jsx("h1",{className:"text-2xl md:text-3xl font-semibold",children:"The Forum"}),c.jsx("p",{className:"text-text2 mt-2",children:"Connect with others and explore resources."})]}),c.jsx("div",{className:"text-right",children:c.jsx("button",{onClick:Ae,className:"mb-4 rounded-md bg-accent px-4 py-2 text-slate-900",children:"Ask a Question"})}),c.jsxs("section",{className:"border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Discussion Board"}),i===null?c.jsx("p",{className:"text-text2 mt-2",children:"Loading…"}):i.length===0?c.jsx("p",{className:"text-text2 mt-2",children:"No threads yet."}):c.jsx("ul",{className:"mt-4 space-y-2",children:i.map(X=>c.jsx("li",{className:"rounded-lg border border-border bg-muted p-3",children:c.jsx(ve,{to:`/forum/thread/${X.id}`,className:"font-medium text-accent hover:underline",children:X.title})},X.id))}),t&&c.jsxs("form",{onSubmit:P,className:"mt-4 space-y-2",children:[c.jsx("input",{type:"text",value:a,onChange:X=>u(X.target.value),placeholder:"New thread title",className:"w-full rounded-md border border-border bg-background p-2"}),c.jsx("textarea",{value:d,onChange:X=>h(X.target.value),placeholder:"Thread message",className:"w-full rounded-md border border-border bg-background p-2",rows:4}),c.jsx("button",{type:"submit",className:"rounded-md bg-accent px-4 py-2 text-slate-900",children:"Create Thread"})]})]}),c.jsxs("section",{className:"border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Sunday White Papers"}),e===null?c.jsx("p",{className:"text-text2 mt-2",children:"Loading…"}):e.length===0?c.jsx("p",{className:"text-text2 mt-2",children:"No papers yet."}):c.jsx("ul",{className:"mt-4 space-y-2",children:e.map(X=>c.jsxs("li",{className:"rounded-lg border border-border bg-muted p-3",children:[c.jsx("a",{href:X.url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-accent hover:underline",children:X.title}),X.note&&c.jsx("p",{className:"text-sm text-text2 mt-1",children:X.note})]},X.id))})]}),c.jsxs("section",{className:"border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Recommended Resources"}),r===null?c.jsx("p",{className:"text-text2 mt-2",children:"Loading…"}):r.length===0?c.jsx("p",{className:"text-text2 mt-2",children:"No resources yet."}):c.jsx("ul",{className:"mt-4 space-y-2",children:r.map(X=>c.jsxs("li",{className:"rounded-lg border border-border bg-muted p-3",children:[c.jsx("a",{href:X.url,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-accent hover:underline",children:X.title}),X.note&&c.jsx("p",{className:"text-sm text-text2 mt-1",children:X.note}),p&&c.jsx("button",{onClick:()=>k(X.id),className:"ml-2 text-xs text-red-500 hover:underline",children:"Delete"})]},X.id))}),p&&c.jsxs("form",{onSubmit:D,className:"mt-4 space-y-2",children:[c.jsx("input",{type:"text",value:y,onChange:X=>_(X.target.value),placeholder:"Title",className:"w-full rounded-md border border-border bg-background p-2"}),c.jsx("input",{type:"url",value:E,onChange:X=>S(X.target.value),placeholder:"URL",className:"w-full rounded-md border border-border bg-background p-2"}),c.jsx("input",{type:"text",value:T,onChange:X=>x(X.target.value),placeholder:"Note (optional)",className:"w-full rounded-md border border-border bg-background p-2"}),c.jsx("button",{type:"submit",className:"rounded-md bg-slate-900 px-4 py-2 text-white",children:"Add resource"})]})]})]})})]})}function GM({threadId:t,post:e}){const{user:n}=Ro(),[r,s]=C.useState(!1),[i,o]=C.useState(""),[a,u]=C.useState(!1);C.useEffect(()=>{if(!(n!=null&&n.uid)){u(!1);return}const p=Q(Lt,"admins",n.uid),m=Ke(p,y=>u(y.exists()));return()=>m()},[n==null?void 0:n.uid]);const d=async p=>{p.preventDefault();const m=i.trim();if(!m||!n)return;const y=e.content.split(/\r?\n/).slice(0,3).join(`
`);await br(fe(Lt,"forumThreads",t,"posts"),{author:n.displayName||n.email||"Anonymous",content:m,quote:y,uid:n.uid,createdAt:be()}),o(""),s(!1)},h=async()=>{n&&await bt(Q(Lt,"forumThreads",t,"posts",e.id))};return c.jsxs("div",{className:"rounded-lg border border-border bg-muted p-3",children:[c.jsx("p",{className:"font-medium text-accent",children:e.author}),e.quote&&c.jsx("blockquote",{className:"mt-1 border-l-2 border-border pl-2 text-sm text-text2 whitespace-pre-line",children:e.quote}),c.jsx("p",{className:"text-text2 mt-1 whitespace-pre-line",children:e.content}),n&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mt-2 flex items-center gap-4 text-sm",children:[c.jsx("button",{onClick:()=>s(p=>!p),className:"text-accent hover:underline",children:"Reply"}),(a||n.uid===e.uid)&&c.jsx("button",{onClick:h,className:"text-red-500 hover:underline",children:"Delete"})]}),r&&c.jsxs("form",{onSubmit:d,className:"mt-2 space-y-2",children:[c.jsx("textarea",{value:i,onChange:p=>o(p.target.value),placeholder:"Write a reply...",className:"w-full rounded-md border border-border bg-background p-2 text-sm",rows:3}),c.jsx("button",{type:"submit",className:"rounded-md bg-accent px-3 py-1 text-sm text-bg",children:"Post Reply"})]})]})]})}function KM(){const{id:t}=mi(),[e,n]=C.useState(void 0),[r,s]=C.useState(null);return C.useEffect(()=>{if(!t)return;const i=Ke(Q(Lt,"forumThreads",t),u=>{u.exists()?n(u.data().title):n(null)}),o=je(fe(Lt,"forumThreads",t,"posts"),Jt("createdAt","asc")),a=Ke(o,u=>{const d=u.docs.map(h=>({id:h.id,...h.data()}));s(d)});return()=>{i(),a()}},[t]),e===void 0?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsx("div",{className:"max-w-4xl mx-auto",children:c.jsx("p",{className:"text-text2",children:"Loading…"})})}):e===null?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsx("div",{className:"max-w-4xl mx-auto",children:c.jsx("p",{className:"text-text2",children:"Thread not found."})})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[c.jsxs("section",{children:[c.jsx(ve,{to:"/forum",className:"text-accent hover:underline",children:"← Back to forum"}),c.jsx("h1",{className:"mt-4 text-2xl font-semibold text-accent",children:e})]}),c.jsx("section",{className:"space-y-4",children:r===null?c.jsx("p",{className:"text-text2",children:"Loading…"}):r.length===0?c.jsx("p",{className:"text-text2",children:"No posts yet."}):r.map(i=>c.jsx(GM,{threadId:t,post:i},i.id))})]})})}const fu=14;function Ow(t){try{return t?t.toDate?t.toDate():t instanceof Date?t:null:null}catch{return null}}function Lw(t,e){if(!t)return!1;const n=e*24*60*60*1e3;return Date.now()-t.getTime()<=n}function QM(){const t=C.useMemo(()=>De(ie),[]),e=Fe(ie),[n,r]=C.useState(!0),[s,i]=C.useState(!1),[o,a]=C.useState([]),[u,d]=C.useState(!1),[h,p]=C.useState([]);return C.useEffect(()=>{let m=!1;async function y(){var _;try{r(!0);const E=e.currentUser;if(!E){m||(i(!1),a([]));return}const S=E.uid,x=(await Ne(Q(t,"admins",S))).exists();m||i(x);let v=[];if(x)v=(await Ge(je(fe(t,"groups"),Jt("name")))).docs.map(L=>L.id);else{const L=(await Ge(je(Or(t,"groupAdmins"),Qt("uid","==",S)))).docs.map(b=>{var w;return((w=b.ref.parent.parent)==null?void 0:w.id)||""}).filter(Boolean);L.length?v=L:v=(await Ge(je(Or(t,"groupAdmins"),Qt("uid","==",S)))).docs.map(w=>{var N;return((N=w.ref.parent.parent)==null?void 0:N.id)||""}).filter(Boolean)}const R=[];for(const j of v)try{const b=(await Ne(Q(t,"groups",j))).data()||{};let w=0;try{const N=await UI(fe(t,`groups/${j}/membershipRequests`));w=Number(((_=N.data())==null?void 0:_.count)||0)}catch{}R.push({id:j,name:b.name||j,parent:b.parent||null,pendingRequests:w})}catch{}m||a(R)}finally{m||r(!1)}}return y(),()=>{m=!0}},[t,e.currentUser]),C.useEffect(()=>{let m=!1;async function y(){try{d(!0);const _={};for(const S of o){try{(await Ge(fe(t,`groups/${S.id}/members`))).forEach(x=>{const v=x.data(),R=x.id;_[R]||(_[R]={uid:R,name:v==null?void 0:v.displayName,email:v==null?void 0:v.email,groups:[],latestJoinAt:null}),_[R].groups.push({id:S.id,name:S.name||S.id});const j=Ow(v==null?void 0:v.joinedAt);if(j){const L=_[R].latestJoinAt;(!L||j>L)&&(_[R].latestJoinAt=j)}})}catch{}if(m)return}let E=Object.values(_).sort((S,T)=>(S.name||S.uid).localeCompare(T.name||T.uid));if(s){const S=[];for(const T of E){try{const v=(await Ne(Q(t,"users",T.uid))).data()||{},R=!!(v!=null&&v.isCommunityApproved),j=Ow(v==null?void 0:v.createdAt),L=Lw(j,fu);(!R||L)&&S.push(T)}catch{}if(m)return}E=S}else E=E.filter(S=>Lw(S.latestJoinAt||null,fu));m||p(E)}finally{m||d(!1)}}return o.length?y():p([]),()=>{m=!0}},[t,o,s]),n?c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx(hr,{label:"Loading admin groups…"})}):c.jsxs("div",{className:"max-w-5xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:s?"All Groups":"Your Groups"}),c.jsx("p",{className:"text-slate-600 mt-2",children:s?"You are a super admin.":"You are a group admin."})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[s&&c.jsx(ve,{to:"/admin/groups/new",className:"text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800",title:"Create a new group",children:"New Group"}),c.jsx(ve,{to:"/admin/users",className:"text-sm text-slate-700 underline",children:"Users"})]})]}),o.length===0?c.jsx("p",{className:"text-slate-600 mt-4",children:"No groups to manage."}):c.jsx("ul",{className:"mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:o.map(m=>{const y=m.pendingRequests||0,_="text-sm px-3 py-1.5 rounded-lg text-center leading-tight min-w-[9rem] whitespace-normal md:whitespace-nowrap",E=y>0?`${_} bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200`:`${_} bg-slate-100 text-slate-900 hover:bg-slate-200`;return c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"font-medium text-slate-900 truncate",children:m.name||m.id}),m.parent&&c.jsxs("div",{className:"text-xs text-slate-500 truncate",children:["Parent: ",m.parent]})]}),c.jsxs("div",{className:"flex gap-2 shrink-0",children:[c.jsx(ve,{to:`/admin/groups/${m.id}/requests`,className:E,title:y>0?`${y} pending`:void 0,children:y>0?`View Requests (${y})`:"View Requests"}),c.jsx(ve,{to:`/admin/groups/${m.id}/members`,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]",children:"Members"}),c.jsx(ve,{to:`/groups/${m.id}`,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]",children:"Open Group"})]})]},m.id)})}),c.jsxs("section",{className:"mt-8 rounded-xl border border-slate-200 bg-white/70 p-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:"Users"}),c.jsx(ve,{to:"/admin/users",className:"text-sm text-slate-700 underline",children:"Open full users page"})]}),u?c.jsx("p",{className:"text-sm text-slate-600 mt-3",children:"Loading users…"}):h.length===0?c.jsx("p",{className:"text-sm text-slate-600 mt-3",children:s?`No new or unapproved users in the last ${fu} days.`:`No recently joined users (last ${fu} days) in your groups.`}):c.jsx("ul",{className:"mt-3 divide-y divide-slate-200",children:h.map(m=>c.jsx("li",{className:"py-3",children:c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"text-sm font-medium text-slate-900 break-all",children:m.name||m.uid}),m.email&&c.jsx("div",{className:"text-xs text-slate-600 break-all",children:m.email}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:m.groups.map(y=>c.jsx(ve,{to:`/admin/groups/${y.id}/members`,className:"text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200",title:"Manage members",children:y.name},y.id))})]}),c.jsx(ve,{to:`/admin/users?uid=${encodeURIComponent(m.uid)}`,className:"text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100 shrink-0",children:"View"})]})},m.uid))})]})]})}const $S=Id(ie,"us-central1");async function Vw(t,e,n){const s=await Il($S,"setUserDisabled")({targetUid:t,disabled:e,reason:n});return(s==null?void 0:s.data)??null}async function YM(t,e=!1){const r=await Il($S,"deleteUserAccount")({targetUid:t,hardDelete:e});return(r==null?void 0:r.data)??null}function XM(){const t=C.useMemo(()=>De(ie),[]),e=Fe(ie),[n,r]=C.useState(!0),[s,i]=C.useState(!1),[o,a]=C.useState([]),[u,d]=C.useState(""),[h,p]=C.useState(""),{search:m}=jn();C.useEffect(()=>{const R=new URLSearchParams(m).get("uid")||"";R&&d(R)},[m]),C.useEffect(()=>{let v=!1;async function R(){try{r(!0);const j=e.currentUser;if(!j){v||(a([]),i(!1));return}const b=(await Ne(Q(t,"admins",j.uid))).exists();v||i(b);const N=(await Ge(fe(t,"users"))).docs.map(A=>{const P=A.data();return{uid:A.id,displayName:(P==null?void 0:P.displayName)||(P==null?void 0:P.name)||"",email:(P==null?void 0:P.email)||"",status:(P==null?void 0:P.status)||"active",isCommunityApproved:!!(P!=null&&P.isCommunityApproved),reviewed:!!(P!=null&&P.reviewed),groups:[]}});for(const A of N){try{const P=await Ge(fe(t,`users/${A.uid}/memberships`)),D=[];for(const k of P.docs){const Ae=k.id;try{const X=(await Ne(Q(t,"groups",Ae))).data()||{};D.push({id:Ae,name:(X==null?void 0:X.name)||Ae})}catch{D.push({id:Ae,name:Ae})}}A.groups=D.sort((k,Ae)=>k.name.localeCompare(Ae.name))}catch{A.groups=[]}if(v)return}N.sort((A,P)=>(A.displayName||A.email||A.uid).localeCompare(P.displayName||P.email||P.uid)),v||a(N)}finally{v||r(!1)}}return R(),()=>{v=!0}},[t,e.currentUser]);const y=o.filter(v=>{const R=u.trim().toLowerCase();return R?v.uid.toLowerCase().includes(R)||(v.displayName||"").toLowerCase().includes(R)||(v.email||"").toLowerCase().includes(R)||v.groups.some(j=>j.name.toLowerCase().includes(R)||j.id.toLowerCase().includes(R)):!0});async function _(v){if(!s)return;const R=window.prompt("Reason for inactivation? (optional)")||void 0;p(`disable:${v}`);try{await Vw(v,!0,R),a(j=>j.map(L=>L.uid===v?{...L,status:"inactive"}:L))}catch{alert("Failed to inactivate user.")}finally{p("")}}async function E(v){if(s&&window.confirm("Reactivate this user?")){p(`enable:${v}`);try{await Vw(v,!1),a(R=>R.map(j=>j.uid===v?{...j,status:"active"}:j))}catch{alert("Failed to reactivate user.")}finally{p("")}}}async function S(v){if(!(!s||!window.confirm("Delete this user? This will remove their authentication account and related data.")||!(window.prompt('Type "DELETE" to confirm.')==="DELETE"))){p(`delete:${v}`);try{await YM(v,!1),a(L=>L.filter(b=>b.uid!==v))}catch{alert("Failed to delete user.")}finally{p("")}}}async function T(v,R){var j;if(s){p(`approve:${v}`);try{const L=((j=e.currentUser)==null?void 0:j.uid)||"",b=R?{isCommunityApproved:!0,dmApprovedAt:be(),dmApprovedBy:L}:{isCommunityApproved:!1,dmApprovedAt:cp(),dmApprovedBy:cp()};await We(Q(t,"users",v),b,{merge:!0}),a(w=>w.map(N=>N.uid===v?{...N,isCommunityApproved:R}:N))}catch{alert("Failed to update approval.")}finally{p("")}}}async function x(v){var R;if(s){p(`review:${v}`);try{await We(Q(t,"users",v),{reviewed:!0,needsReview:!1},{merge:!0});const j=(R=e.currentUser)==null?void 0:R.uid;if(j)try{const L=await Ge(je(fe(t,`users/${j}/notifications`),Qt("type","==","new-user"),Qt("uid","==",v)));for(const b of L.docs)await wd(b.ref,{read:!0,readAt:be()}).catch(()=>{})}catch{}a(L=>L.map(b=>b.uid===v?{...b,reviewed:!0}:b))}catch{alert("Failed to mark reviewed.")}finally{p("")}}}return n?c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx(hr,{label:"Loading users…"})}):c.jsxs("div",{className:"max-w-5xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Users"}),c.jsx("input",{value:u,onChange:v=>d(v.target.value),placeholder:"Search users…",className:"rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none w-56","aria-label":"Search users"})]}),c.jsxs("div",{className:"mt-4 rounded-xl border border-slate-200 bg-white/70 overflow-hidden",children:[c.jsxs("div",{className:"grid grid-cols-12 gap-2 px-4 py-2 text-xs font-medium text-slate-600",children:[c.jsx("div",{className:"col-span-4",children:"Name"}),c.jsx("div",{className:"col-span-3",children:"Email"}),c.jsx("div",{className:"col-span-3",children:"Groups"}),c.jsx("div",{className:"col-span-2 text-right",children:"Actions"})]}),c.jsx("div",{className:"divide-y divide-slate-200",children:y.length===0?c.jsx("div",{className:"px-4 py-4 text-sm text-slate-600",children:"No users found."}):y.map(v=>c.jsxs("div",{className:"grid grid-cols-12 gap-2 px-4 py-3 items-start",children:[c.jsxs("div",{className:"col-span-4 min-w-0",children:[c.jsx("div",{className:"text-sm text-slate-900 truncate",children:v.displayName||v.uid}),v.email&&c.jsx("div",{className:"text-xs text-slate-600 truncate",children:v.email}),c.jsxs("div",{className:"text-[11px] text-slate-500 mt-0.5",children:["Status: ",v.status||"active"]}),c.jsxs("div",{className:"text-[11px] text-slate-500 mt-0.5",children:["DM access: ",c.jsx("b",{children:v.isCommunityApproved?"Approved":"Not approved"})]})]}),c.jsx("div",{className:"col-span-3 min-w-0",children:c.jsxs("div",{className:"flex flex-wrap gap-1",children:[v.groups.map(R=>c.jsx(ve,{to:`/admin/groups/${R.id}/members`,className:"text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200",title:"Manage members",children:R.name},R.id)),v.groups.length===0&&c.jsx("span",{className:"text-xs text-slate-600",children:"—"})]})}),c.jsx("div",{className:"col-span-3 min-w-0",children:c.jsx("span",{className:"text-xs break-all",children:v.uid})}),c.jsx("div",{className:"col-span-2 text-right",children:c.jsxs("div",{className:"inline-flex flex-col gap-1 items-end",children:[c.jsxs("label",{className:"inline-flex items-center gap-2 text-xs select-none",children:[c.jsx("input",{type:"checkbox",checked:!!v.isCommunityApproved,onChange:R=>void T(v.uid,R.target.checked),disabled:!s||!!h}),c.jsx("span",{children:"Approved for DMs"})]}),c.jsx(ve,{to:`/admin/users?uid=${encodeURIComponent(v.uid)}`,className:"text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100",children:"View"}),!v.reviewed&&c.jsx("button",{onClick:()=>x(v.uid),disabled:!s||!!h,className:"text-xs rounded-lg px-2 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200",style:{opacity:h?.6:1},children:h===`review:${v.uid}`?"Saving…":"Mark reviewed"}),s&&c.jsxs("div",{className:"flex flex-wrap gap-1 justify-end",children:[v.status==="inactive"?c.jsx("button",{onClick:()=>E(v.uid),disabled:!!h,className:"text-xs rounded-lg px-2 py-1 text-white",style:{backgroundColor:"#919FAA",opacity:h?.6:1},children:h===`enable:${v.uid}`?"Working…":"Reactivate"}):c.jsx("button",{onClick:()=>_(v.uid),disabled:!!h,className:"text-xs rounded-lg px-2 py-1 text-white",style:{backgroundColor:"#919FAA",opacity:h?.6:1},children:h===`disable:${v.uid}`?"Working…":"Inactivate"}),c.jsx("button",{onClick:()=>S(v.uid),disabled:!!h,className:"text-xs rounded-lg px-2 py-1 bg-rose-100 text-rose-800 hover:bg-rose-200",style:{opacity:h?.6:1},title:"Soft delete (Auth account removed; user doc marked deleted)",children:h===`delete:${v.uid}`?"Deleting…":"Delete"})]})]})})]},v.uid))})]})]})}function JM(){const{slug:t}=mi(),e=De(ie),[n,r]=C.useState(""),[s,i]=C.useState([]),[o,a]=C.useState(!0),[u,d]=C.useState(""),[h,p]=C.useState({}),m=t;C.useEffect(()=>{let E=!0;async function S(){if(m){a(!0);try{const T=Q(e,"groups",m),x=await Ne(T);r(x.exists()&&x.data().name||ZM(m));const v=fe(e,`groups/${m}/membershipRequests`),R=await Ge(v);if(!E)return;const j=[];R.forEach(L=>j.push({uid:L.id,...L.data()})),i(j)}finally{a(!1)}}}return S(),()=>{E=!1}},[e,m]);async function y(E){var S,T;d(E.uid);try{await We(Q(e,`users/${E.uid}/memberships/${m}`),{groupId:m,approvedAt:be(),approvedBy:"admin"},{merge:!0});const x=await Ne(Q(e,"users",E.uid)),v=((S=x.data())==null?void 0:S.displayName)||((T=x.data())==null?void 0:T.name);await We(Q(e,`groups/${m}/members/${E.uid}`),{uid:E.uid,displayName:E.displayName||v||"Member",joinedAt:be()},{merge:!0}),await Promise.all([bt(Q(e,`groups/${m}/membershipRequests/${E.uid}`)),bt(Q(e,`users/${E.uid}/membershipRequests/${m}`))]),p(R=>({...R,[E.uid]:!0})),setTimeout(()=>{i(R=>R.filter(j=>j.uid!==E.uid))},1500)}finally{d("")}}async function _(E){d(E.uid);try{await Promise.all([bt(Q(e,`groups/${m}/membershipRequests/${E.uid}`)),bt(Q(e,`users/${E.uid}/membershipRequests/${m}`))]),i(S=>S.filter(T=>T.uid!==E.uid))}finally{d("")}}return m?c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[c.jsx("div",{className:"mb-4",children:c.jsxs(ve,{to:"/admin",className:"inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted",children:[c.jsx("span",{"aria-hidden":!0,children:"←"}),c.jsx("span",{children:"Return to Admin Console"})]})}),c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Pending Requests"}),c.jsxs("p",{className:"text-slate-600",children:["Group: ",n]})]}),c.jsx(ve,{to:`/groups/${m}`,className:"text-sm text-slate-700 underline",children:"Back to group"})]}),o?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):s.length===0?c.jsx("p",{className:"text-slate-600",children:"No pending requests."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:s.map(E=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:E.displayName||E.uid}),c.jsx("div",{className:"text-xs text-slate-500 truncate",children:E.uid})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>y(E),disabled:!!u||h[E.uid],className:h[E.uid]?"text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900":"text-xs px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-60",children:u===E.uid?"Working…":h[E.uid]?"Approved":"Approve"}),c.jsx("button",{onClick:()=>_(E),disabled:!!u||h[E.uid],className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:"Deny"})]})]},E.uid))})]}):c.jsx("div",{className:"p-6",children:"Missing group slug."})}function ZM(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function e4(){const{slug:t}=mi(),e=C.useMemo(()=>De(ie),[]),n=Fe(ie),[r,s]=C.useState(""),[i,o]=C.useState([]),[a,u]=C.useState({}),[d,h]=C.useState(!0),[p,m]=C.useState(""),[y,_]=C.useState(""),[E,S]=C.useState(!1),[T,x]=C.useState(""),[v,R]=C.useState([]),[j,L]=C.useState(""),[b,w]=C.useState(""),N=(t||"").trim();C.useEffect(()=>{let W=!0;async function M(){if(N){h(!0),_("");try{const Z=Q(e,"groups",N),ye=await Ne(Z);s(ye.exists()&&ye.data().name||t4(N));const me=n.currentUser;if(me){const F=me.uid;if((await Ne(Q(e,"admins",F))).exists())S(!0);else{const ne=await Ne(Q(e,`groups/${N}/groupAdmins/${F}`));S(ne.exists())}}else S(!1);const ce=await Ge(fe(e,`groups/${N}/members`));if(!W)return;const lt=[],B=await Ge(fe(e,`groups/${N}/groupAdmins`)),K={};B.forEach(F=>{K[F.id]=!0}),u(K),ce.forEach(F=>lt.push({uid:F.id,...F.data()})),lt.sort((F,le)=>(F.displayName||F.uid).localeCompare(le.displayName||le.uid)),o(lt)}catch(Z){_((Z==null?void 0:Z.message)||"Failed to load members.")}finally{h(!1)}}}M();async function q(){try{const ye=(await Ge(fe(e,"users"))).docs.map(me=>{const ce=me.data();return{uid:me.id,displayName:(ce==null?void 0:ce.displayName)||(ce==null?void 0:ce.name)||"",email:(ce==null?void 0:ce.email)||""}});ye.sort((me,ce)=>(me.displayName||me.email||me.uid).localeCompare(ce.displayName||ce.email||ce.uid)),R(ye)}catch{R([])}}return q(),()=>{W=!1}},[e,N]);async function A(W,M,q){var ye,me;const Z=W.trim();if(Z){_(""),m("add");try{const ce=BI(e),lt=Q(e,`groups/${N}/members/${Z}`);{const K={uid:Z,displayName:M||Z,role:"member",joinedAt:be(),addedBy:((ye=n.currentUser)==null?void 0:ye.uid)||"unknown"};q&&(K.email=q),ce.set(lt,K,{merge:!0})}const B=Q(e,`users/${Z}/memberships/${N}`);ce.set(B,{groupId:N,approvedAt:be(),approvedBy:((me=n.currentUser)==null?void 0:me.uid)||"admin"},{merge:!0}),await ce.commit(),o(K=>{const F=[...K.filter(le=>le.uid!==Z),{uid:Z,displayName:M||Z,email:q}];return F.sort((le,ne)=>(le.displayName||le.uid).localeCompare(ne.displayName||ne.uid)),F}),x(""),w("")}catch(ce){_((ce==null?void 0:ce.message)||"Failed to add member. Check Firestore rules.")}finally{m("")}}}async function P(){await A(T)}async function D(W){if(W.preventDefault(),!b)return;const M=v.find(q=>q.uid===b);await A(b,M==null?void 0:M.displayName,M==null?void 0:M.email)}async function k(W){var M;m(`admin:${W}`),_("");try{await We(Q(e,`groups/${N}/groupAdmins/${W}`),{uid:W,grantedBy:((M=n.currentUser)==null?void 0:M.uid)||"unknown",createdAt:be()},{merge:!0}),u(q=>({...q,[W]:!0}))}catch(q){_((q==null?void 0:q.message)||"Failed to grant admin.")}finally{m("")}}async function Ae(W){m(`admin:${W}`),_("");try{await bt(Q(e,`groups/${N}/groupAdmins/${W}`)),u(M=>{const q={...M};return delete q[W],q})}catch(M){_((M==null?void 0:M.message)||"Failed to remove admin.")}finally{m("")}}async function qe(W){m(W),_("");try{await bt(Q(e,`groups/${N}/members/${W}`)),await bt(Q(e,`users/${W}/memberships/${N}`)),o(M=>M.filter(q=>q.uid!==W))}catch(M){_((M==null?void 0:M.message)||"Failed to remove member.")}finally{m("")}}if(!N)return c.jsx("div",{className:"p-6",children:"Missing group slug."});const X=C.useMemo(()=>{const W=j.trim().toLowerCase();return W?v.filter(M=>{const q=(M.displayName||"").toLowerCase(),Z=(M.email||"").toLowerCase();return q.includes(W)||Z.includes(W)||M.uid.toLowerCase().includes(W)}):v},[v,j]);return c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Group Members"}),c.jsxs("p",{className:"text-slate-600",children:["Group: ",r]})]}),c.jsx(ve,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),y&&c.jsx("div",{className:"mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800",children:y}),c.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white/70 p-4 mb-6",children:[c.jsx("h2",{className:"font-medium text-slate-900",children:"Add Member (by Name)"}),c.jsxs("form",{onSubmit:D,className:"mt-2 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{value:j,onChange:W=>L(W.target.value),placeholder:"Search users by name, email, or UID…",className:"sm:col-span-2 rounded-lg border border-slate-300 px-3 py-2 text-sm","aria-label":"Filter users",disabled:!E}),c.jsxs("select",{className:"sm:col-span-3 rounded-lg border border-slate-300 px-2 py-2 text-sm",value:b,onChange:W=>w(W.target.value),"aria-label":"Select user to add",disabled:!E,children:[c.jsx("option",{value:"",children:"Select a user…"}),X.map(W=>c.jsx("option",{value:W.uid,children:(W.displayName||"Unnamed")+(W.email?` • ${W.email}`:"")},W.uid))]}),c.jsx("div",{className:"sm:col-span-1",children:c.jsx("button",{type:"submit",disabled:!b||!!p||!E,className:"rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-60",children:p==="add"?"Adding…":"Add to group"})})]}),c.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Admins: choose a user to add them to this group."})]}),c.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white/70 p-4 mb-6",children:[c.jsx("h2",{className:"font-medium text-slate-900",children:"Add Member (by UID)"}),c.jsxs("div",{className:"mt-2 flex gap-2",children:[c.jsx("input",{value:T,onChange:W=>x(W.target.value),placeholder:"Paste a user's UID",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm",disabled:!E}),c.jsx("button",{onClick:P,disabled:!T.trim()||!!p||!E,className:"text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:p==="add"?"Adding…":"Add"})]}),c.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Tip: you can find a user's UID in Firebase → Authentication."})]}),d?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):i.length===0?c.jsx("p",{className:"text-slate-600",children:"No members yet."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:i.map(W=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:W.displayName||W.uid}),c.jsx("div",{className:"text-xs text-slate-500 truncate",children:W.uid})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[a[W.uid]?c.jsx("button",{onClick:()=>Ae(W.uid),disabled:!!p||!E,className:"text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60",children:p===`admin:${W.uid}`?"Updating…":"Remove admin"}):c.jsx("button",{onClick:()=>k(W.uid),disabled:!!p||!E,className:"text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:p===`admin:${W.uid}`?"Updating…":"Make admin"}),c.jsx("button",{onClick:()=>qe(W.uid),disabled:!!p||!E,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:p===W.uid?"Removing…":"Remove"})]})]},W.uid))})]})}function t4(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function n4(){const{slug:t}=mi(),e=De(ie),n=t,[r,s]=C.useState([]),[i,o]=C.useState(!0);return C.useEffect(()=>{let a=!0;async function u(){if(n){o(!0);try{const d=fe(e,`groups/${n}/groupEvents`),h=je(d,Jt("at","desc")),p=await Ge(h);if(!a)return;const m=[];p.forEach(y=>m.push({id:y.id,...y.data()})),s(m)}finally{o(!1)}}}return u(),()=>{a=!1}},[e,n]),c.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Audit Log"}),c.jsx("p",{className:"text-slate-600",children:"Recent events for this group."})]}),c.jsx(ve,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),i?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):r.length===0?c.jsx("p",{className:"text-slate-600",children:"No events yet."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:r.map(a=>{var u;return c.jsxs("li",{className:"p-4",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"font-medium text-slate-900",children:a.type.replace(/_/g," ")}),c.jsx("div",{className:"text-xs text-slate-500",children:(u=a.at)!=null&&u.toDate?a.at.toDate().toLocaleString():"—"})]}),c.jsx("div",{className:"text-xs text-slate-600 mt-1",children:a.uid&&c.jsxs(c.Fragment,{children:["User: ",c.jsx("code",{children:a.uid})]})}),a.payload&&c.jsx("pre",{className:"mt-2 text-xs bg-slate-50 rounded-lg p-2 overflow-auto",children:JSON.stringify(a.payload,null,2)})]},a.id)})})]})}function r4(){const t=Id(ie),e=De(ie),[n,r]=C.useState(""),[s,i]=C.useState(""),[o,a]=C.useState([]),[u,d]=C.useState(!1),[h,p]=C.useState(null);C.useEffect(()=>{async function y(){const _=await Ge(fe(e,"groups")),E=[];_.forEach(S=>E.push({id:S.id,...S.data()})),E.sort((S,T)=>(S.name||S.id).localeCompare(T.name||T.id)),a(E)}y()},[e]);async function m(){d(!0),p(null);try{const _=await Il(t,"grantGroupAdminByEmail")({email:n,groupId:s});p(`✅ Granted admin to ${n} (uid=${_.data.uid})`),r("")}catch(y){p(`❌ ${(y==null?void 0:y.message)||"Failed"}`)}finally{d(!1)}}return c.jsxs("div",{className:"max-w-xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Grant Group Admin (by email)"}),c.jsxs("div",{className:"mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4",children:[c.jsxs("label",{className:"block text-sm",children:[c.jsx("span",{className:"font-medium text-slate-700",children:"User email"}),c.jsx("input",{value:n,onChange:y=>r(y.target.value),placeholder:"user@example.com",className:"mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})]}),c.jsxs("label",{className:"block text-sm",children:[c.jsx("span",{className:"font-medium text-slate-700",children:"Group"}),c.jsxs("select",{value:s,onChange:y=>i(y.target.value),className:"mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm",children:[c.jsx("option",{value:"",children:"Select a group…"}),o.map(y=>c.jsx("option",{value:y.id,children:y.name||y.id},y.id))]})]}),c.jsxs("div",{className:"flex gap-3 items-center",children:[c.jsx("button",{onClick:m,disabled:!n||!s||u,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:u?"Working…":"Grant admin"}),h&&c.jsx("p",{className:"text-sm text-slate-700",children:h})]})]})]})}function s4(t){return t.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")}function Mw(){const t=De(ie),e=Ur(),[n,r]=C.useState(""),[s,i]=C.useState(""),[o,a]=C.useState(""),[u,d]=C.useState(""),[h,p]=C.useState(""),[m,y]=C.useState(""),[_,E]=C.useState(""),[S,T]=C.useState(""),[x,v]=C.useState(!1),[R,j]=C.useState(null),L=C.useMemo(()=>s||s4(n),[s,n]);async function b(){const w=L.trim();if(!n.trim()||!w){j("⚠️ Name and slug are required.");return}v(!0),j(null);try{const N=Q(t,"groups",w);if((await Ne(N)).exists()){j("❌ A group with that slug already exists."),v(!1);return}await We(N,{id:w,name:n.trim(),slug:w,description:o.trim()||null,parent:u||null,campus:h||null,meetingDay:m||null,meetingTime:_||null,imageUrl:S||null,createdAt:be(),updatedAt:be()}),e(`/admin/groups/${w}/edit`,{replace:!0})}catch(N){j("❌ "+((N==null?void 0:N.message)||"Failed to create group."))}finally{v(!1)}}return c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Create Group"}),c.jsxs("div",{className:"mt-4 grid gap-3",children:[c.jsxs(Hr,{label:"Name",children:[c.jsx("input",{value:n,onChange:w=>r(w.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"}),c.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Slug preview: ",c.jsx("code",{children:L||"—"})]})]}),c.jsx(Hr,{label:"Slug (optional)",children:c.jsx("input",{value:s,onChange:w=>i(w.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"auto from name if blank"})}),c.jsx(Hr,{label:"Description",children:c.jsx("textarea",{value:o,onChange:w=>a(w.target.value),rows:4,className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Hr,{label:"Parent ministry (optional)",children:c.jsx("input",{value:u,onChange:w=>d(w.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Hr,{label:"Campus (optional)",children:c.jsx("input",{value:h,onChange:w=>p(w.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})})]}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Hr,{label:"Meeting day (optional)",children:c.jsxs("select",{value:m,onChange:w=>y(w.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70",children:[c.jsx("option",{value:"",children:"—"}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(w=>c.jsx("option",{value:w,children:w},w))]})}),c.jsx(Hr,{label:"Meeting time (optional)",children:c.jsx("input",{value:_,onChange:w=>E(w.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"e.g., 7:00pm"})})]}),c.jsx(Hr,{label:"Image URL (optional)",children:c.jsx("input",{value:S,onChange:w=>T(w.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"https://…"})}),R&&c.jsx("p",{className:"text-sm text-slate-700",children:R}),c.jsx("div",{className:"flex gap-3",children:c.jsx("button",{onClick:b,disabled:x,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:x?"Creating…":"Create group"})})]})]})}function Hr({label:t,children:e}){return c.jsxs("label",{className:"block",children:[c.jsx("div",{className:"text-sm font-medium text-slate-700",children:t}),c.jsx("div",{className:"mt-1",children:e})]})}function i4(){const{slug:t}=mi(),e=De(ie),n=Ur(),[r,s]=C.useState(null),[i,o]=C.useState(!0),[a,u]=C.useState(!1),[d,h]=C.useState(null);C.useEffect(()=>{let y=!0;async function _(){if(!t)return;o(!0);const E=await Ne(Q(e,"groups",t));if(!y)return;const S=E.exists()?E.data():{};s({name:(S==null?void 0:S.name)||"",description:(S==null?void 0:S.description)??"",parent:(S==null?void 0:S.parent)??"",campus:(S==null?void 0:S.campus)??"",meetingDay:(S==null?void 0:S.meetingDay)??"",meetingTime:(S==null?void 0:S.meetingTime)??"",meetingFrequency:(S==null?void 0:S.meetingFrequency)??"",imageUrl:(S==null?void 0:S.imageUrl)??""}),o(!1)}return _(),()=>{y=!1}},[e,t]);async function p(){var y,_,E,S,T,x;if(!(!t||!r)){u(!0),h(null);try{const v={...r,name:String((r==null?void 0:r.name)||"").trim(),description:((y=(r==null?void 0:r.description)||"")==null?void 0:y.trim())||null,parent:((_=(r==null?void 0:r.parent)||"")==null?void 0:_.trim())||null,campus:((E=(r==null?void 0:r.campus)||"")==null?void 0:E.trim())||null,meetingDay:((S=(r==null?void 0:r.meetingDay)||"")==null?void 0:S.trim())||null,meetingTime:((T=(r==null?void 0:r.meetingTime)||"")==null?void 0:T.trim())||null,meetingFrequency:(r==null?void 0:r.meetingFrequency)||"",imageUrl:((x=(r==null?void 0:r.imageUrl)||"")==null?void 0:x.trim())||null,updatedAt:be()};await We(Q(e,"groups",t),v,{merge:!0}),h("✅ Saved")}catch(v){const R=(v==null?void 0:v.message)||"Failed to save.";h(R)}finally{u(!1)}}}async function m(){if(t&&confirm("Delete this group? This cannot be undone."))try{await bt(Q(e,"groups",t)),n("/admin/groups",{replace:!0})}catch(y){const _=(y==null?void 0:y.message)||"Failed to delete.";h(_)}}return i?c.jsx("div",{className:"max-w-3xl mx-auto p-6",children:"Loading…"}):r?c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Edit Group"}),c.jsx(ve,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),c.jsxs("div",{className:"mt-4 grid gap-3",children:[c.jsx(Gr,{label:"Name",children:c.jsx("input",{value:(r==null?void 0:r.name)||"",onChange:y=>s(_=>({..._,name:y.target.value})),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Gr,{label:"Description",children:c.jsx("textarea",{value:(r==null?void 0:r.description)||"",onChange:y=>s(_=>({..._,description:y.target.value})),rows:4,className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Gr,{label:"Parent ministry",children:c.jsx("input",{value:(r==null?void 0:r.parent)||"",onChange:y=>s(_=>({..._,parent:y.target.value})),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Gr,{label:"Campus",children:c.jsx("input",{value:(r==null?void 0:r.campus)||"",onChange:y=>s(_=>({..._,campus:y.target.value})),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})})]}),c.jsxs("div",{className:"grid sm:grid-cols-3 gap-3",children:[c.jsx(Gr,{label:"Meeting day",children:c.jsxs("select",{value:(r==null?void 0:r.meetingDay)||"",onChange:y=>s(_=>({..._,meetingDay:y.target.value})),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70",children:[c.jsx("option",{value:"",children:"—"}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(y=>c.jsx("option",{value:y,children:y},y))]})}),c.jsx(Gr,{label:"Meeting time",children:c.jsx("input",{value:(r==null?void 0:r.meetingTime)||"",onChange:y=>s(_=>({..._,meetingTime:y.target.value})),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"e.g., 7:00pm"})}),c.jsx(Gr,{label:"Meeting frequency",children:c.jsxs("select",{value:(r==null?void 0:r.meetingFrequency)||"",onChange:y=>s(_=>({..._,meetingFrequency:y.target.value})),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70",children:[c.jsx("option",{value:"",children:"—"}),c.jsx("option",{value:"weekly",children:"Weekly"}),c.jsx("option",{value:"biweekly",children:"Bi‑weekly"}),c.jsx("option",{value:"monthly",children:"Monthly"})]})})]}),c.jsx(Gr,{label:"Image URL",children:c.jsx("input",{value:(r==null?void 0:r.imageUrl)||"",onChange:y=>s(_=>({..._,imageUrl:y.target.value})),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"https://…"})}),d&&c.jsx("p",{className:"text-sm text-slate-700",children:d}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:p,disabled:a,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:a?"Saving…":"Save changes"}),c.jsx("button",{onClick:m,className:"px-4 py-2 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200",children:"Delete group"})]})]})]}):c.jsx("div",{className:"max-w-3xl mx-auto p-6",children:"Not found."})}function Gr({label:t,children:e}){return c.jsxs("label",{className:"block",children:[c.jsx("div",{className:"text-sm font-medium text-slate-700",children:t}),c.jsx("div",{className:"mt-1",children:e})]})}function o4(){const t=De(ie),e=Fe(ie),[n,r]=C.useState([]),[s,i]=C.useState(!0),[o,a]=C.useState(""),[u,d]=C.useState("");async function h(){i(!0);const y=await Ge(fe(t,"admins")),_=[];y.forEach(E=>_.push({uid:E.id,...E.data()})),_.sort((E,S)=>E.uid.localeCompare(S.uid)),r(_),i(!1)}C.useEffect(()=>{h()},[]);async function p(){var _;const y=u.trim();if(y){a("add");try{await We(Q(t,"admins",y),{createdAt:be(),createdBy:((_=e.currentUser)==null?void 0:_.uid)||"unknown"},{merge:!0}),d(""),await h()}finally{a("")}}}async function m(y){a(y);try{await bt(Q(t,"admins",y)),await h()}finally{a("")}}return c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Super Admins"}),c.jsx("p",{className:"text-slate-600 mt-1",children:"Add or remove super admins by UID."}),c.jsxs("div",{className:"mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4",children:[c.jsx("label",{className:"block text-sm font-medium text-slate-700",children:"Add by UID"}),c.jsxs("div",{className:"mt-2 flex gap-2",children:[c.jsx("input",{value:u,onChange:y=>d(y.target.value),placeholder:"Paste UID from Firebase Authentication → Users",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"}),c.jsx("button",{onClick:p,disabled:!u.trim()||!!o,className:"px-3 py-2 rounded-lg text-sm bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:o==="add"?"Adding…":"Add"})]})]}),c.jsx("div",{className:"mt-4 rounded-2xl border border-slate-200 bg-white/70",children:s?c.jsx("div",{className:"p-4 text-slate-600",children:"Loading…"}):n.length===0?c.jsx("div",{className:"p-4 text-slate-600",children:"No super admins yet."}):c.jsx("ul",{className:"divide-y divide-slate-200",children:n.map(y=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:y.uid}),c.jsxs("div",{className:"text-xs text-slate-500",children:["Created by: ",y.createdBy||"—"]})]}),c.jsx("button",{onClick:()=>m(y.uid),disabled:!!o,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:o===y.uid?"Removing…":"Remove"})]},y.uid))})})]})}function a4({children:t}){const e=Fe(ie),n=De(ie),[r,s]=G.useState(!1),[i,o]=G.useState(null),[a,u]=G.useState(null),[d,h]=G.useState(null);return G.useEffect(()=>{const p=On(e,async m=>{if(s(!0),!m){o(null),u(!1);return}o(m.uid);try{const y=await Ne(Q(n,"admins",m.uid));u(y.exists())}catch(y){h((y==null?void 0:y.message)||String(y)),u(!1)}});return()=>p()},[e,n]),!r||a===null?c.jsx("div",{className:"max-w-xl mx-auto p-6",children:"Checking…"}):a?c.jsx(c.Fragment,{children:t}):c.jsxs("div",{className:"max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:"AdminRouteDebug"}),c.jsxs("p",{className:"text-sm text-slate-700 mt-2",children:["UID: ",c.jsx("code",{children:i||"—"})]}),c.jsxs("p",{className:"text-sm text-slate-700",children:["admins/UID exists? ",c.jsx("strong",{children:a?"YES":"NO"})]}),!i&&c.jsx("p",{className:"mt-3 text-sm text-rose-700",children:"You are not signed in."}),i&&!a&&c.jsxs("p",{className:"mt-3 text-sm text-amber-700",children:["Signed in, but no document at ",c.jsxs("code",{children:["admins/","{uid}"]}),". Create that doc in Firestore for this project."]}),d&&c.jsxs("p",{className:"mt-3 text-sm text-rose-700",children:["Error reading ",c.jsxs("code",{children:["admins/","{uid}"]}),": ",d]})]})}function l4(t,e){return[t,e].sort().join("_")}function u4(){var lt;const t=G.useMemo(()=>De(ie),[]),e=G.useMemo(()=>Fe(ie),[]),[n,r]=G.useState(((lt=e.currentUser)==null?void 0:lt.uid)??null),[s,i]=G.useState(!1),[o,a]=G.useState(!1);G.useEffect(()=>{const B=On(e,async K=>{var F;if(r((K==null?void 0:K.uid)??null),K!=null&&K.uid){try{const le=await Ne(Q(t,"users",K.uid));i(!!((F=le.data())!=null&&F.isCommunityApproved))}catch{i(!1)}try{const le=await Ne(Q(t,"admins",K.uid));a(le.exists())}catch{a(!1)}}else i(!1),a(!1)});return()=>B()},[e,t]);const[u,d]=G.useState(!1),[h,p]=G.useState("list"),[m,y]=G.useState([]),[_,E]=G.useState(null),[S,T]=G.useState([]),[x,v]=G.useState(""),R=G.useRef(null),[j,L]=G.useState([]),[b,w]=G.useState({}),[N,A]=G.useState(""),[P,D]=G.useState(!1),[k,Ae]=G.useState(""),qe=G.useRef({});async function X(B,K){var le,ne,re,J,se;if(qe.current[B])return qe.current[B];const F=(le=j.find(de=>de.uid===B))==null?void 0:le.displayName;if(F){if(qe.current[B]=F,K)try{await We(Q(t,"dmThreads",K),{[`userNames.${B}`]:F},{merge:!0})}catch{}return F}try{let de=await Ne(Q(t,"users",B)),ue=((ne=de.data())==null?void 0:ne.displayName)||((re=de.data())==null?void 0:re.name);if(ue||(de=await Ne(Q(t,"admins",B)),ue=((J=de.data())==null?void 0:J.displayName)||((se=de.data())==null?void 0:se.name)),ue){if(qe.current[B]=ue,K)try{await We(Q(t,"dmThreads",K),{[`userNames.${B}`]:ue},{merge:!0})}catch{}return ue}return B}catch{return B}}async function W(B){try{const K=je(Or(t,"messages"),Qt("from","==",B)),F=je(Or(t,"messages"),Qt("to","==",B)),[le,ne]=await Promise.all([Ge(K),Ge(F)]),re=[...le.docs,...ne.docs],J=[];for(const se of re){const de=se.ref.path.split("/");if(de.length<4||de[0]!=="dmMessages")continue;const ue=de[1],Ve=se.data(),Qe=Ve.from===B?Ve.to:Ve.from;if(!Qe)continue;const cn=[B,Qe].sort(),ut=Q(t,"dmThreads",ue),Ds={users:cn,lastText:Ve.text||"",lastAt:Ve.createdAt||be(),lastSender:Ve.from||B};J.push(We(ut,Ds,{merge:!0}))}await Promise.allSettled(J)}catch{}}G.useEffect(()=>{if(!n||!s){L([]);return}(async()=>{try{const B={},K=[],F=je(fe(t,"users"),Qt("isCommunityApproved","==",!0));(await Ge(F)).docs.forEach(ne=>{if(ne.id===n)return;B[ne.id]=!0;const re=ne.data(),J=(re==null?void 0:re.displayName)||(re==null?void 0:re.name)||void 0,se=(re==null?void 0:re.email)||void 0,de=[ne.id,...Object.values(re).filter(ue=>typeof ue=="string")].join(" ").toLowerCase();K.push({uid:ne.id,displayName:J,email:se,search:de})});try{(await Ge(fe(t,"admins"))).docs.forEach(re=>{if(re.id===n||B[re.id])return;const J=re.data(),se=(J==null?void 0:J.displayName)||(J==null?void 0:J.name)||void 0,de=(J==null?void 0:J.email)||void 0,ue=[re.id,...Object.values(J).filter(Ve=>typeof Ve=="string")].join(" ").toLowerCase();K.push({uid:re.id,displayName:se,email:de,search:ue})})}catch{}L(K)}catch{L([])}})()},[t,n,s]),G.useEffect(()=>{if(!n||!s)return;let B=null,K=!1;return(async()=>{try{try{const F=je(fe(t,"dmThreads"),Qt("users","array-contains",n)),le=je(F,Jt("lastAt","desc"));B=Ke(le,ne=>{const re=[];ne.docs.forEach(J=>{var Qe,cn;const se=J.data(),de=(se==null?void 0:se.users)||[],ue=de.find(ut=>ut!==n)||"",Ve=(Qe=j.find(ut=>ut.uid===ue))==null?void 0:Qe.displayName;re.push({id:J.id,users:de,lastText:(se==null?void 0:se.lastText)||"",lastAt:se==null?void 0:se.lastAt,otherUid:ue,otherName:((cn=se==null?void 0:se.userNames)==null?void 0:cn[ue])||Ve||qe.current[ue]})}),K||y(re),re.length===0&&W(n),re.forEach(J=>{J.otherUid&&!J.otherName&&X(J.otherUid,J.id).then(se=>{K||se===J.otherUid||y(de=>de.map(ue=>ue.id===J.id?{...ue,otherName:se}:ue))}).catch(()=>{})})},ne=>{ne&&ne.code==="failed-precondition"?B=Ke(F,J=>{const se=[];J.docs.forEach(de=>{var ut,Ds;const ue=de.data(),Ve=(ue==null?void 0:ue.users)||[],Qe=Ve.find(Os=>Os!==n)||"",cn=(ut=j.find(Os=>Os.uid===Qe))==null?void 0:ut.displayName;se.push({id:de.id,users:Ve,lastText:(ue==null?void 0:ue.lastText)||"",lastAt:ue==null?void 0:ue.lastAt,otherUid:Qe,otherName:((Ds=ue==null?void 0:ue.userNames)==null?void 0:Ds[Qe])||cn||qe.current[Qe]})}),se.sort((de,ue)=>{var cn,ut;const Ve=(cn=de.lastAt)!=null&&cn.toMillis?de.lastAt.toMillis():0;return((ut=ue.lastAt)!=null&&ut.toMillis?ue.lastAt.toMillis():0)-Ve}),K||y(se),se.length===0&&W(n),se.forEach(de=>{de.otherUid&&!de.otherName&&X(de.otherUid,de.id).then(ue=>{K||ue===de.otherUid||y(Ve=>Ve.map(Qe=>Qe.id===de.id?{...Qe,otherName:ue}:Qe))}).catch(()=>{})})}):ne&&console.warn("DM thread listener error:",ne)})}catch{console.warn("DM thread listener attach failed")}}catch{}})(),()=>{B&&B()}},[t,n,s]),G.useEffect(()=>{y(B=>B.map(K=>{var le;if(K.otherName&&K.otherName!==K.otherUid)return K;const F=(le=j.find(ne=>ne.uid===K.otherUid))==null?void 0:le.displayName;return F?{...K,otherName:F}:K}))},[j]),G.useEffect(()=>{if(!_||!n){R.current&&(R.current(),R.current=null),T([]);return}R.current&&(R.current(),R.current=null);const B=fe(t,"dmMessages",_.id,"messages"),K=je(B,Jt("createdAt","asc")),F=Ke(K,le=>{const ne=le.docs.map(re=>{const J=re.data();return{id:re.id,text:(J==null?void 0:J.text)||"",from:(J==null?void 0:J.from)||"",to:(J==null?void 0:J.to)||"",displayName:(J==null?void 0:J.displayName)||"",createdAt:J==null?void 0:J.createdAt}});T(ne),ne.forEach(re=>{re.displayName||X(re.from,_.id).then(J=>{T(se=>se.map(de=>de.id===re.id?{...de,displayName:J}:de))})})});return R.current=F,()=>{R.current&&(R.current(),R.current=null)}},[t,_==null?void 0:_.id,n]);async function M(B){if(!n)throw new Error("No user");const K=m.find(F=>F.otherUid===B);return K?{pid:K.id}:{pid:l4(n,B)}}async function q(){var F;if(!_||!n)return;const B=x.trim();if(!B)return;const K=_.otherUid;try{const le=((F=e.currentUser)==null?void 0:F.displayName)||await X(n,_.id)||"Member",ne=_.otherName&&_.otherName!==K?_.otherName:await X(K,_.id),re=Q(t,"dmThreads",_.id);await We(re,{users:[n,K].sort()},{merge:!0});const J=fe(t,"dmMessages",_.id,"messages");await br(J,{text:B,from:n,to:K,displayName:le,createdAt:be()});const se={lastText:B,lastAt:be(),lastSender:n};se[`userNames.${n}`]=le,ne&&ne!==K&&(se[`userNames.${K}`]=ne),await We(re,se,{merge:!0}),v("")}catch{alert("Could not send message.")}}async function Z(){var F,le;if(!n)return;const B=Object.entries(b).filter(([,ne])=>ne).map(([ne])=>ne),K=N.trim();if(!(B.length===0||!K)){D(!0);try{for(const ne of B){const{pid:re}=await M(ne),J=((F=e.currentUser)==null?void 0:F.displayName)||await X(n,re)||"Member",se=(le=j.find(Qe=>Qe.uid===ne))==null?void 0:le.displayName,de=se&&se!==ne?se:await X(ne,re),ue=Q(t,"dmThreads",re);await We(ue,{users:[n,ne].sort()},{merge:!0}),await br(fe(t,"dmMessages",re,"messages"),{text:K,from:n,to:ne,displayName:J,createdAt:be()});const Ve={lastText:K,lastAt:be(),lastSender:n};Ve[`userNames.${n}`]=J,de&&de!==ne&&(Ve[`userNames.${ne}`]=de),await We(ue,Ve,{merge:!0})}A(""),w({}),p("list")}catch{alert("Failed to send message(s).")}finally{D(!1)}}}async function ye(B){if(!_||!n)return;const K=S.find(F=>F.id===B);if(K&&(K.from===n||o))try{await bt(Q(t,"dmMessages",_.id,"messages",B))}catch{alert("Failed to delete message (check rules).")}}function me(){w({}),Ae(""),A(""),p("compose")}if(!n||!s)return null;const ce=j.filter(B=>{const K=k.trim().toLowerCase();return K?[B.uid,B.displayName,B.email,B.search].filter(Boolean).join(" ").toLowerCase().includes(K):!0});return c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",onClick:()=>{d(B=>!B),u||p("list")},className:`fixed bottom-4 right-4 z-[1100] shadow-lg rounded-full px-4 py-2 text-white text-sm md:text-[13px] ${u?"hidden md:inline-flex":"inline-flex"}`,style:{backgroundColor:"#919FAA"},"aria-label":u?"Close direct messages":"Open direct messages",children:u?"Close DMs":"Open DMs"}),u&&c.jsxs("div",{className:`fixed z-[1000] bottom-0 inset-x-0 w-full h-[85vh] rounded-t-2xl
                     md:bottom-16 md:left-1/2 md:inset-x-auto md:w-full md:max-w-[780px] md:max-h-[480px] md:rounded-xl md:-translate-x-1/2 md:transform
                     border border-slate-800 bg-slate-900 text-white shadow-xl overflow-hidden
                     flex md:flex-row flex-col`,style:{paddingBottom:"env(safe-area-inset-bottom)"},children:[c.jsxs("div",{className:"md:hidden flex items-center justify-between px-3 py-2 border-b border-slate-800",children:[c.jsx("button",{type:"button",onClick:()=>d(!1),className:"text-xs rounded-md border border-slate-700 px-2 py-1","aria-label":"Close direct messages",children:"Close"}),c.jsx("div",{className:"text-sm font-semibold",children:"Direct Messages"}),h!=="compose"?c.jsx("button",{type:"button",onClick:me,className:"text-xs rounded-md border border-slate-700 px-2 py-1","aria-label":"New message",children:"New"}):c.jsx("button",{type:"button",onClick:()=>p("list"),className:"text-xs rounded-md border border-slate-700 px-2 py-1","aria-label":"Back to conversations",children:"Back"})]}),h==="list"&&c.jsxs("div",{className:"md:w-64 md:border-r md:border-slate-800 h-[40vh] md:h-full overflow-auto",children:[c.jsxs("div",{className:"hidden md:flex px-3 py-2 text-sm font-semibold items-center justify-between",children:[c.jsx("span",{children:"Conversations"}),c.jsx("button",{type:"button",onClick:me,className:"text-xs rounded-md border border-slate-700 px-2 py-1 hover:bg-slate-800",title:"New message",children:"New"})]}),m.length===0?c.jsx("div",{className:"px-3 py-2 text-sm text-slate-300",children:"No conversations yet."}):c.jsx("ul",{children:m.map(B=>c.jsx("li",{children:c.jsxs("button",{type:"button",onClick:()=>{E(B),p("chat")},className:`w-full text-left px-3 py-2 text-sm hover:bg-slate-800 ${_&&_.id===B.id?"bg-slate-800":""}`,children:[c.jsx("div",{className:"font-medium truncate",children:B.otherName||B.otherUid}),c.jsx("div",{className:"text-xs text-slate-300 truncate",children:B.lastText||"…"})]})},B.id))})]}),c.jsxs("div",{className:"flex-1 h-full flex flex-col",children:[h==="chat"&&_&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 flex items-center gap-2",children:[c.jsx("button",{type:"button",onClick:()=>{E(null),p("list")},className:"text-xs rounded-md border border-slate-700 px-2 py-1 hover:bg-slate-800","aria-label":"Back to conversations",children:"← Back"}),c.jsx("div",{className:"text-sm font-semibold truncate",children:_.otherName||_.otherUid})]}),c.jsxs("div",{className:"flex-1 overflow-auto p-3 space-y-2",children:[S.map(B=>{const K=B.from===n;return c.jsxs("div",{className:`max-w-[85%] md:max-w-[80%] rounded-lg px-3 py-2 text-sm relative ${K?"ml-auto border border-slate-700":"bg-slate-800"}`,children:[c.jsx("div",{className:"text-xs opacity-70 mb-0.5",children:B.displayName||B.from}),c.jsx("div",{children:B.text}),(K||o)&&c.jsx("button",{type:"button",onClick:()=>void ye(B.id),className:"absolute -top-2 -right-2 text-[10px] rounded-full border border-slate-700 bg-slate-900 px-1.5 py-0.5 hover:bg-slate-800",title:"Delete message",children:"×"})]},B.id)}),S.length===0&&c.jsx("div",{className:"text-sm text-slate-300",children:"No messages in this conversation yet."})]}),c.jsxs("div",{className:"border-t border-slate-800 p-2 flex gap-2",children:[c.jsx("textarea",{value:x,onChange:B=>v(B.target.value),placeholder:"Write a message…",className:"flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm outline-none text-white placeholder:text-slate-400 h-10 md:h-auto md:min-h-[40px] max-h-28",onKeyDown:B=>{B.key==="Enter"&&!B.shiftKey&&(B.preventDefault(),q())}}),c.jsx("button",{type:"button",onClick:()=>void q(),className:"rounded-lg px-3 py-2 text-white text-sm hover:opacity-90",style:{backgroundColor:"#919FAA"},disabled:!x.trim(),children:"Send"})]})]}),h==="compose"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 flex items-center gap-2",children:[c.jsx("button",{type:"button",onClick:()=>p("list"),className:"text-xs rounded-md border border-slate-700 px-2 py-1 hover:bg-slate-800",children:"← Back"}),c.jsx("div",{className:"text-sm font-semibold",children:"New message"})]}),c.jsxs("div",{className:"flex-1 p-3 grid grid-cols-1 md:grid-cols-5 gap-3 overflow-auto",children:[c.jsxs("div",{className:"md:col-span-2",children:[c.jsx("label",{className:"text-xs text-slate-300",children:"Recipients"}),c.jsx("input",{value:k,onChange:B=>Ae(B.target.value),placeholder:"Search users…",className:"mt-1 w-full rounded-lg border border-slate-700 bg-slate-800 px-2 py-1.5 text-sm outline-none"}),c.jsx("div",{className:"mt-2 h-56 md:h-48 overflow-auto rounded-lg border border-slate-700",children:ce.length===0?c.jsx("div",{className:"px-2 py-2 text-xs text-slate-400",children:"No matching users."}):c.jsx("ul",{className:"p-2 space-y-1",children:ce.map(B=>c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("input",{id:`sel-${B.uid}`,type:"checkbox",className:"h-4 w-4 accent-[#919FAA]",checked:!!b[B.uid],onChange:K=>w(F=>({...F,[B.uid]:K.target.checked}))}),c.jsxs("label",{htmlFor:`sel-${B.uid}`,className:"text-sm truncate",children:[B.displayName||"(unknown user)",B.email?` • ${B.email}`:""]})]},B.uid))})})]}),c.jsxs("div",{className:"md:col-span-3 flex flex-col",children:[c.jsx("label",{className:"text-xs text-slate-300",children:"Message"}),c.jsx("textarea",{value:N,onChange:B=>A(B.target.value),placeholder:"Write your message…",className:"mt-1 flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm outline-none h-40 md:h-auto"})]})]}),c.jsxs("div",{className:"border-t border-slate-800 p-2 flex items-center justify-end gap-2",children:[c.jsx("button",{type:"button",onClick:()=>p("list"),className:"rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800",children:"Cancel"}),c.jsx("button",{type:"button",onClick:()=>void Z(),disabled:P||!N.trim()||!Object.values(b).some(Boolean),className:"rounded-lg px-3 py-2 text-white text-sm hover:opacity-90 disabled:opacity-60",style:{backgroundColor:"#919FAA"},children:P?"Sending…":"Send"})]})]}),h==="list"&&!_&&c.jsxs("div",{className:"hidden md:grid place-items-center flex-1 text-sm text-slate-300",children:["Select a conversation or click ",c.jsx("b",{className:"mx-1",children:"New"})," to start one."]})]})]})]})}function c4(){var d,h,p;const t=Fe(ie),[e,n]=C.useState(!1),[r,s]=C.useState(((d=t.currentUser)==null?void 0:d.uid)||null),[i,o]=C.useState(((h=t.currentUser)==null?void 0:h.email)||null);C.useEffect(()=>{const m=On(t,y=>{s((y==null?void 0:y.uid)||null),o((y==null?void 0:y.email)||null),n(!0)});return()=>m()},[t]);const a=(p=ie.options)==null?void 0:p.projectId;return c.jsxs("div",{className:"max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70",children:[c.jsx("h1",{className:"text-lg font-semibold text-slate-900",children:"Auth Debug: WhoAmI"}),c.jsxs("div",{className:"mt-2 text-sm text-slate-700",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"ready:"})," ",String(e)]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"email:"})," ",i||"—"]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"uid:"})," ",c.jsx("code",{children:r||"—"})]}),c.jsxs("div",{className:"mt-2",children:[c.jsx("span",{className:"font-medium",children:"SDK projectId:"})," ",c.jsx("code",{children:a||"—"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"ENV projectId:"})," ",c.jsx("code",{children:String("immanuel-app")})]})]})]})}function d4({children:t}){const e=jn(),n=e.pathname==="/login"||e.pathname==="/signup"||e.pathname==="/forgot"||e.pathname==="/reset";return c.jsxs(c.Fragment,{children:[n?c.jsx(XV,{}):c.jsx(ZV,{}),!n&&c.jsx(u4,{}),t]})}function h4(){return c.jsx($1,{children:c.jsx(RL,{children:c.jsx(d4,{children:c.jsxs(P1,{children:[c.jsx(Re,{path:"/",element:c.jsx(rr,{to:"/login",replace:!0})}),c.jsx(Re,{path:"/login",element:c.jsx(eM,{})}),c.jsx(Re,{path:"/signup",element:c.jsx(nM,{})}),c.jsx(Re,{path:"/forgot",element:c.jsx(OM,{})}),c.jsx(Re,{path:"/reset",element:c.jsx(LM,{})}),c.jsx(Re,{path:"/welcome",element:c.jsx(Tn,{children:c.jsx(UM,{})})}),c.jsx(Re,{path:"/dashboard",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(iM,{})})})}),c.jsx(Re,{path:"/groups",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(oM,{})})})}),c.jsx(Re,{path:"/resources",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(aM,{})})})}),c.jsx(Re,{path:"/events",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(lM,{})})})}),c.jsx(Re,{path:"/profile",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(jM,{})})})}),c.jsx(Re,{path:"/settings",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(DM,{})})})}),c.jsx(Re,{path:"/forum",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(HM,{})})})}),c.jsx(Re,{path:"/forum/thread/:id",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(KM,{})})})}),c.jsx(Re,{path:"/sunday-resources",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(zM,{})})})}),c.jsx(Re,{path:"/groups/explore",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(LL,{})})})}),c.jsx(Re,{path:"/groups/:slug",element:c.jsx(Tn,{children:c.jsx(Wt,{children:c.jsx(QV,{})})})}),c.jsx(Re,{path:"/admin",element:c.jsx(Fs,{children:c.jsx(rr,{to:"/admin/groups",replace:!0})})}),c.jsx(Re,{path:"/admin/groups",element:c.jsx(Fs,{children:c.jsx(Wt,{children:c.jsx(QM,{})})})}),c.jsx(Re,{path:"/admin/groups/:slug/requests",element:c.jsx(Oh,{children:c.jsx(Wt,{children:c.jsx(JM,{})})})}),c.jsx(Re,{path:"/admin/groups/:slug/members",element:c.jsx(Oh,{children:c.jsx(Wt,{children:c.jsx(e4,{})})})}),c.jsx(Re,{path:"/admin/groups/:slug/events",element:c.jsx(Oh,{children:c.jsx(Wt,{children:c.jsx(n4,{})})})}),c.jsx(Re,{path:"/admin/super-admins",element:c.jsx(Fs,{children:c.jsx(o4,{})})}),c.jsx(Re,{path:"/admin/group-admins/by-email",element:c.jsx(Fs,{children:c.jsx(r4,{})})}),c.jsx(Re,{path:"/admin/users",element:c.jsx(Fs,{children:c.jsx(XM,{})})}),c.jsx(Re,{path:"/admin/groups/new",element:c.jsx(Fs,{children:c.jsx(Mw,{})})}),c.jsx(Re,{path:"/admin/groups/:slug/edit",element:c.jsx(Fs,{children:c.jsx(i4,{})})}),c.jsx(Re,{path:"/__whoami",element:c.jsx(c4,{})}),c.jsx(Re,{path:"/__admin/new",element:c.jsx(a4,{children:c.jsx(Mw,{})})}),c.jsx(Re,{path:"*",element:c.jsx(rr,{to:"/dashboard",replace:!0})})]})})})})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(t=>{console.error("SW registration failed",t)})});Mh.createRoot(document.getElementById("root")).render(c.jsx(G.StrictMode,{children:c.jsx(h4,{})}));
