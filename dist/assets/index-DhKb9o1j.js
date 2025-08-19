function _S(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function wS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vw={exports:{}},Vc={},_w={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),xS=Symbol.for("react.portal"),ES=Symbol.for("react.fragment"),TS=Symbol.for("react.strict_mode"),IS=Symbol.for("react.profiler"),SS=Symbol.for("react.provider"),NS=Symbol.for("react.context"),AS=Symbol.for("react.forward_ref"),CS=Symbol.for("react.suspense"),bS=Symbol.for("react.memo"),RS=Symbol.for("react.lazy"),uy=Symbol.iterator;function kS(t){return t===null||typeof t!="object"?null:(t=uy&&t[uy]||t["@@iterator"],typeof t=="function"?t:null)}var ww={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xw=Object.assign,Ew={};function Io(t,e,n){this.props=t,this.context=e,this.refs=Ew,this.updater=n||ww}Io.prototype.isReactComponent={};Io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tw(){}Tw.prototype=Io.prototype;function fp(t,e,n){this.props=t,this.context=e,this.refs=Ew,this.updater=n||ww}var pp=fp.prototype=new Tw;pp.constructor=fp;xw(pp,Io.prototype);pp.isPureReactComponent=!0;var cy=Array.isArray,Iw=Object.prototype.hasOwnProperty,mp={current:null},Sw={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Iw.call(e,r)&&!Sw.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:il,type:t,key:i,ref:o,props:s,_owner:mp.current}}function PS(t,e){return{$$typeof:il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gp(t){return typeof t=="object"&&t!==null&&t.$$typeof===il}function jS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dy=/\/+/g;function Wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jS(""+t.key):e.toString(36)}function wu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case il:case xS:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Wd(o,0):r,cy(s)?(n="",t!=null&&(n=t.replace(dy,"$&/")+"/"),wu(s,e,n,"",function(d){return d})):s!=null&&(gp(s)&&(s=PS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(dy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",cy(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Wd(i,l);o+=wu(i,e,n,u,s)}else if(u=kS(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Wd(i,l++),o+=wu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yl(t,e,n){if(t==null)return t;var r=[],s=0;return wu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function DS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},xu={transition:null},OS={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:xu,ReactCurrentOwner:mp};function Aw(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Yl,forEach:function(t,e,n){Yl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yl(t,function(){e++}),e},toArray:function(t){return Yl(t,function(e){return e})||[]},only:function(t){if(!gp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Io;de.Fragment=ES;de.Profiler=IS;de.PureComponent=fp;de.StrictMode=TS;de.Suspense=CS;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;de.act=Aw;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=mp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Iw.call(e,u)&&!Sw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:il,type:t.type,key:s,ref:i,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:NS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:SS,_context:t},t.Consumer=t};de.createElement=Nw;de.createFactory=function(t){var e=Nw.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:AS,render:t}};de.isValidElement=gp;de.lazy=function(t){return{$$typeof:RS,_payload:{_status:-1,_result:t},_init:DS}};de.memo=function(t,e){return{$$typeof:bS,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=xu.transition;xu.transition={};try{t()}finally{xu.transition=e}};de.unstable_act=Aw;de.useCallback=function(t,e){return Mt.current.useCallback(t,e)};de.useContext=function(t){return Mt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Mt.current.useEffect(t,e)};de.useId=function(){return Mt.current.useId()};de.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Mt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};de.useRef=function(t){return Mt.current.useRef(t)};de.useState=function(t){return Mt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Mt.current.useTransition()};de.version="18.3.1";_w.exports=de;var R=_w.exports;const z=wS(R),VS=_S({__proto__:null,default:z},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LS=R,MS=Symbol.for("react.element"),US=Symbol.for("react.fragment"),FS=Object.prototype.hasOwnProperty,$S=LS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BS={key:!0,ref:!0,__self:!0,__source:!0};function Cw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)FS.call(e,r)&&!BS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:MS,type:t,key:i,ref:o,props:s,_owner:$S.current}}Vc.Fragment=US;Vc.jsx=Cw;Vc.jsxs=Cw;vw.exports=Vc;var c=vw.exports,Mh={},bw={exports:{}},un={},Rw={exports:{}},kw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,H){var Q=$.length;$.push(H);e:for(;0<Q;){var ge=Q-1>>>1,ue=$[ge];if(0<s(ue,H))$[ge]=H,$[Q]=ue,Q=ge;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var H=$[0],Q=$.pop();if(Q!==H){$[0]=Q;e:for(var ge=0,ue=$.length,te=ue>>>1;ge<te;){var rt=2*(ge+1)-1,_t=$[rt],qe=rt+1,Ce=$[qe];if(0>s(_t,Q))qe<ue&&0>s(Ce,_t)?($[ge]=Ce,$[qe]=Q,ge=qe):($[ge]=_t,$[rt]=Q,ge=rt);else if(qe<ue&&0>s(Ce,Q))$[ge]=Ce,$[qe]=Q,ge=qe;else break e}}return H}function s($,H){var Q=$.sortIndex-H.sortIndex;return Q!==0?Q:$.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,p=null,m=3,y=!1,S=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var H=n(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=$)r(d),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(d)}}function P($){if(A=!1,E($),!S)if(n(u)!==null)S=!0,or(O);else{var H=n(d);H!==null&&Y(P,H.startTime-$)}}function O($,H){S=!1,A&&(A=!1,_(v),v=-1),y=!0;var Q=m;try{for(E(H),p=n(u);p!==null&&(!(p.expirationTime>H)||$&&!k());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var ue=ge(p.expirationTime<=H);H=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),E(H)}else r(u);p=n(u)}if(p!==null)var te=!0;else{var rt=n(d);rt!==null&&Y(P,rt.startTime-H),te=!1}return te}finally{p=null,m=Q,y=!1}}var M=!1,I=null,v=-1,T=5,N=-1;function k(){return!(t.unstable_now()-N<T)}function j(){if(I!==null){var $=t.unstable_now();N=$;var H=!0;try{H=I(!0,$)}finally{H?b():(M=!1,I=null)}}else M=!1}var b;if(typeof w=="function")b=function(){w(j)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,En=Ke.port2;Ke.port1.onmessage=j,b=function(){En.postMessage(null)}}else b=function(){C(j,0)};function or($){I=$,M||(M=!0,b())}function Y($,H){v=C(function(){$(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||y||(S=!0,or(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var Q=m;m=H;try{return $()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,H){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=m;m=$;try{return H()}finally{m=Q}},t.unstable_scheduleCallback=function($,H,Q){var ge=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ge+Q:ge):Q=ge,$){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Q+ue,$={id:f++,callback:H,priorityLevel:$,startTime:Q,expirationTime:ue,sortIndex:-1},Q>ge?($.sortIndex=Q,e(d,$),n(u)===null&&$===n(d)&&(A?(_(v),v=-1):A=!0,Y(P,Q-ge))):($.sortIndex=ue,e(u,$),S||y||(S=!0,or(O))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var H=m;return function(){var Q=m;m=H;try{return $.apply(this,arguments)}finally{m=Q}}}})(kw);Rw.exports=kw;var zS=Rw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=R,an=zS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pw=new Set,Aa={};function di(t,e){ao(t,e),ao(t+"Capture",e)}function ao(t,e){for(Aa[t]=e,t=0;t<e.length;t++)Pw.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uh=Object.prototype.hasOwnProperty,WS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hy={},fy={};function HS(t){return Uh.call(fy,t)?!0:Uh.call(hy,t)?!1:WS.test(t)?fy[t]=!0:(hy[t]=!0,!1)}function GS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KS(t,e,n,r){if(e===null||typeof e>"u"||GS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){vt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];vt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){vt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){vt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){vt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){vt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){vt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){vt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){vt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yp,vp);vt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yp,vp);vt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yp,vp);vt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){vt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});vt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){vt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function _p(t,e,n,r){var s=vt.hasOwnProperty(e)?vt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KS(e,n,s,r)&&(n=null),r||s===null?HS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=qS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jl=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),jw=Symbol.for("react.provider"),Dw=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Bh=Symbol.for("react.suspense_list"),Ep=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),Ow=Symbol.for("react.offscreen"),py=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=py&&t[py]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Hd;function na(t){if(Hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hd=e&&e[1]||""}return`
`+Hd+t}var Gd=!1;function Kd(t,e){if(!t||Gd)return"";Gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Gd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function QS(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=Kd(t.type,!1),t;case 11:return t=Kd(t.type.render,!1),t;case 1:return t=Kd(t.type,!0),t;default:return""}}function zh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Li:return"Portal";case Fh:return"Profiler";case wp:return"StrictMode";case $h:return"Suspense";case Bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dw:return(t.displayName||"Context")+".Consumer";case jw:return(t._context.displayName||"Context")+".Provider";case xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ep:return e=t.displayName||null,e!==null?e:zh(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return zh(t(e))}catch{}}return null}function YS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zh(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JS(t){var e=Vw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xl(t){t._valueTracker||(t._valueTracker=JS(t))}function Lw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qh(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function my(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mw(t,e){e=e.checked,e!=null&&_p(t,"checked",e,!1)}function Wh(t,e){Mw(t,e);var n=vs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hh(t,e.type,vs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hh(t,e,n){(e!=="number"||$u(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function Ji(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ra(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vs(n)}}function Uw(t,e){var n=vs(e.value),r=vs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zl,$w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zl=Zl||document.createElement("div"),Zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XS=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){XS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function Bw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function zw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Bw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var ZS=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(t,e){if(e){if(ZS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=null;function Tp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xh=null,Xi=null,Zi=null;function _y(t){if(t=ll(t)){if(typeof Xh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=$c(e),Xh(t.stateNode,t.type,e))}}function qw(t){Xi?Zi?Zi.push(t):Zi=[t]:Xi=t}function Ww(){if(Xi){var t=Xi,e=Zi;if(Zi=Xi=null,_y(t),e)for(t=0;t<e.length;t++)_y(e[t])}}function Hw(t,e){return t(e)}function Gw(){}var Qd=!1;function Kw(t,e,n){if(Qd)return t(e,n);Qd=!0;try{return Hw(t,e,n)}finally{Qd=!1,(Xi!==null||Zi!==null)&&(Gw(),Ww())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var r=$c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Zh=!1;if(Sr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Zh=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Zh=!1}function eN(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var ha=!1,Bu=null,zu=!1,ef=null,tN={onError:function(t){ha=!0,Bu=t}};function nN(t,e,n,r,s,i,o,l,u){ha=!1,Bu=null,eN.apply(tN,arguments)}function rN(t,e,n,r,s,i,o,l,u){if(nN.apply(this,arguments),ha){if(ha){var d=Bu;ha=!1,Bu=null}else throw Error(B(198));zu||(zu=!0,ef=d)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wy(t){if(hi(t)!==t)throw Error(B(188))}function sN(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return wy(s),t;if(i===r)return wy(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Yw(t){return t=sN(t),t!==null?Jw(t):null}function Jw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jw(t);if(e!==null)return e;t=t.sibling}return null}var Xw=an.unstable_scheduleCallback,xy=an.unstable_cancelCallback,iN=an.unstable_shouldYield,oN=an.unstable_requestPaint,Ye=an.unstable_now,aN=an.unstable_getCurrentPriorityLevel,Ip=an.unstable_ImmediatePriority,Zw=an.unstable_UserBlockingPriority,qu=an.unstable_NormalPriority,lN=an.unstable_LowPriority,ex=an.unstable_IdlePriority,Lc=null,Kn=null;function uN(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Lc,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:hN,cN=Math.log,dN=Math.LN2;function hN(t){return t>>>=0,t===0?32:31-(cN(t)/dN|0)|0}var eu=64,tu=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=sa(l):(i&=o,i!==0&&(r=sa(i)))}else o=n&~s,o!==0?r=sa(o):i!==0&&(r=sa(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kn(e),s=1<<n,r|=t[n],e&=~s;return r}function fN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-kn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=fN(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tx(){var t=eu;return eu<<=1,!(eu&4194240)&&(eu=64),t}function Yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function mN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-kn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Se=0;function nx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rx,Np,sx,ix,ox,nf=!1,nu=[],is=null,os=null,as=null,Ra=new Map,ka=new Map,Qr=[],gN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ey(t,e){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(e.pointerId)}}function Yo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ll(e),e!==null&&Np(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function yN(t,e,n,r,s){switch(e){case"focusin":return is=Yo(is,t,e,n,r,s),!0;case"dragenter":return os=Yo(os,t,e,n,r,s),!0;case"mouseover":return as=Yo(as,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ra.set(i,Yo(Ra.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ka.set(i,Yo(ka.get(i)||null,t,e,n,r,s)),!0}return!1}function ax(t){var e=zs(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=Qw(n),e!==null){t.blockedOn=e,ox(t.priority,function(){sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jh=r,n.target.dispatchEvent(r),Jh=null}else return e=ll(n),e!==null&&Np(e),t.blockedOn=n,!1;e.shift()}return!0}function Ty(t,e,n){Eu(t)&&n.delete(e)}function vN(){nf=!1,is!==null&&Eu(is)&&(is=null),os!==null&&Eu(os)&&(os=null),as!==null&&Eu(as)&&(as=null),Ra.forEach(Ty),ka.forEach(Ty)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,vN)))}function Pa(t){function e(s){return Jo(s,t)}if(0<nu.length){Jo(nu[0],t);for(var n=1;n<nu.length;n++){var r=nu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(is!==null&&Jo(is,t),os!==null&&Jo(os,t),as!==null&&Jo(as,t),Ra.forEach(e),ka.forEach(e),n=0;n<Qr.length;n++)r=Qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qr.length&&(n=Qr[0],n.blockedOn===null);)ax(n),n.blockedOn===null&&Qr.shift()}var eo=Dr.ReactCurrentBatchConfig,Hu=!0;function _N(t,e,n,r){var s=Se,i=eo.transition;eo.transition=null;try{Se=1,Ap(t,e,n,r)}finally{Se=s,eo.transition=i}}function wN(t,e,n,r){var s=Se,i=eo.transition;eo.transition=null;try{Se=4,Ap(t,e,n,r)}finally{Se=s,eo.transition=i}}function Ap(t,e,n,r){if(Hu){var s=rf(t,e,n,r);if(s===null)oh(t,e,r,Gu,n),Ey(t,r);else if(yN(s,t,e,n,r))r.stopPropagation();else if(Ey(t,r),e&4&&-1<gN.indexOf(t)){for(;s!==null;){var i=ll(s);if(i!==null&&rx(i),i=rf(t,e,n,r),i===null&&oh(t,e,r,Gu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else oh(t,e,r,null,n)}}var Gu=null;function rf(t,e,n,r){if(Gu=null,t=Tp(r),t=zs(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gu=t,null}function lx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aN()){case Ip:return 1;case Zw:return 4;case qu:case lN:return 16;case ex:return 536870912;default:return 16}default:return 16}}var ts=null,Cp=null,Tu=null;function ux(){if(Tu)return Tu;var t,e=Cp,n=e.length,r,s="value"in ts?ts.value:ts.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Tu=s.slice(t,1<r?1-r:void 0)}function Iu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ru(){return!0}function Iy(){return!1}function cn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ru:Iy,this.isPropagationStopped=Iy,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ru)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ru)},persist:function(){},isPersistent:ru}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bp=cn(So),al=Be({},So,{view:0,detail:0}),xN=cn(al),Jd,Xd,Xo,Mc=Be({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(Jd=t.screenX-Xo.screenX,Xd=t.screenY-Xo.screenY):Xd=Jd=0,Xo=t),Jd)},movementY:function(t){return"movementY"in t?t.movementY:Xd}}),Sy=cn(Mc),EN=Be({},Mc,{dataTransfer:0}),TN=cn(EN),IN=Be({},al,{relatedTarget:0}),Zd=cn(IN),SN=Be({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),NN=cn(SN),AN=Be({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CN=cn(AN),bN=Be({},So,{data:0}),Ny=cn(bN),RN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PN[t])?!!e[t]:!1}function Rp(){return jN}var DN=Be({},al,{key:function(t){if(t.key){var e=RN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Iu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(t){return t.type==="keypress"?Iu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Iu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ON=cn(DN),VN=Be({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ay=cn(VN),LN=Be({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),MN=cn(LN),UN=Be({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),FN=cn(UN),$N=Be({},Mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BN=cn($N),zN=[9,13,27,32],kp=Sr&&"CompositionEvent"in window,fa=null;Sr&&"documentMode"in document&&(fa=document.documentMode);var qN=Sr&&"TextEvent"in window&&!fa,cx=Sr&&(!kp||fa&&8<fa&&11>=fa),Cy=" ",by=!1;function dx(t,e){switch(t){case"keyup":return zN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ui=!1;function WN(t,e){switch(t){case"compositionend":return hx(e);case"keypress":return e.which!==32?null:(by=!0,Cy);case"textInput":return t=e.data,t===Cy&&by?null:t;default:return null}}function HN(t,e){if(Ui)return t==="compositionend"||!kp&&dx(t,e)?(t=ux(),Tu=Cp=ts=null,Ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cx&&e.locale!=="ko"?null:e.data;default:return null}}var GN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ry(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GN[t.type]:e==="textarea"}function fx(t,e,n,r){qw(r),e=Ku(e,"onChange"),0<e.length&&(n=new bp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pa=null,ja=null;function KN(t){Ix(t,0)}function Uc(t){var e=Bi(t);if(Lw(e))return t}function QN(t,e){if(t==="change")return e}var px=!1;if(Sr){var eh;if(Sr){var th="oninput"in document;if(!th){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),th=typeof ky.oninput=="function"}eh=th}else eh=!1;px=eh&&(!document.documentMode||9<document.documentMode)}function Py(){pa&&(pa.detachEvent("onpropertychange",mx),ja=pa=null)}function mx(t){if(t.propertyName==="value"&&Uc(ja)){var e=[];fx(e,ja,t,Tp(t)),Kw(KN,e)}}function YN(t,e,n){t==="focusin"?(Py(),pa=e,ja=n,pa.attachEvent("onpropertychange",mx)):t==="focusout"&&Py()}function JN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(ja)}function XN(t,e){if(t==="click")return Uc(e)}function ZN(t,e){if(t==="input"||t==="change")return Uc(e)}function eA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:eA;function Da(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Uh.call(e,s)||!Vn(t[s],e[s]))return!1}return!0}function jy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dy(t,e){var n=jy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jy(n)}}function gx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yx(){for(var t=window,e=$u();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$u(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tA(t){var e=yx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gx(n.ownerDocument.documentElement,n)){if(r!==null&&Pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Dy(n,i);var o=Dy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nA=Sr&&"documentMode"in document&&11>=document.documentMode,Fi=null,sf=null,ma=null,of=!1;function Oy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||Fi==null||Fi!==$u(r)||(r=Fi,"selectionStart"in r&&Pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ma&&Da(ma,r)||(ma=r,r=Ku(sf,"onSelect"),0<r.length&&(e=new bp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:su("Animation","AnimationEnd"),animationiteration:su("Animation","AnimationIteration"),animationstart:su("Animation","AnimationStart"),transitionend:su("Transition","TransitionEnd")},nh={},vx={};Sr&&(vx=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Fc(t){if(nh[t])return nh[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vx)return nh[t]=e[n];return t}var _x=Fc("animationend"),wx=Fc("animationiteration"),xx=Fc("animationstart"),Ex=Fc("transitionend"),Tx=new Map,Vy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ns(t,e){Tx.set(t,e),di(e,[t])}for(var rh=0;rh<Vy.length;rh++){var sh=Vy[rh],rA=sh.toLowerCase(),sA=sh[0].toUpperCase()+sh.slice(1);Ns(rA,"on"+sA)}Ns(_x,"onAnimationEnd");Ns(wx,"onAnimationIteration");Ns(xx,"onAnimationStart");Ns("dblclick","onDoubleClick");Ns("focusin","onFocus");Ns("focusout","onBlur");Ns(Ex,"onTransitionEnd");ao("onMouseEnter",["mouseout","mouseover"]);ao("onMouseLeave",["mouseout","mouseover"]);ao("onPointerEnter",["pointerout","pointerover"]);ao("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iA=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Ly(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rN(r,e,void 0,t),t.currentTarget=null}function Ix(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Ly(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Ly(s,l,d),i=u}}}if(zu)throw t=ef,zu=!1,ef=null,t}function Pe(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var r=t+"__bubble";n.has(r)||(Sx(e,t,2,!1),n.add(r))}function ih(t,e,n){var r=0;e&&(r|=4),Sx(n,t,r,e)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[iu]){t[iu]=!0,Pw.forEach(function(n){n!=="selectionchange"&&(iA.has(n)||ih(n,!1,t),ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[iu]||(e[iu]=!0,ih("selectionchange",!1,e))}}function Sx(t,e,n,r){switch(lx(e)){case 1:var s=_N;break;case 4:s=wN;break;default:s=Ap}n=s.bind(null,e,n,t),s=void 0,!Zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function oh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=zs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Kw(function(){var d=i,f=Tp(n),p=[];e:{var m=Tx.get(t);if(m!==void 0){var y=bp,S=t;switch(t){case"keypress":if(Iu(n)===0)break e;case"keydown":case"keyup":y=ON;break;case"focusin":S="focus",y=Zd;break;case"focusout":S="blur",y=Zd;break;case"beforeblur":case"afterblur":y=Zd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=TN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=MN;break;case _x:case wx:case xx:y=NN;break;case Ex:y=FN;break;case"scroll":y=xN;break;case"wheel":y=BN;break;case"copy":case"cut":case"paste":y=CN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ay}var A=(e&4)!==0,C=!A&&t==="scroll",_=A?m!==null?m+"Capture":null:m;A=[];for(var w=d,E;w!==null;){E=w;var P=E.stateNode;if(E.tag===5&&P!==null&&(E=P,_!==null&&(P=ba(w,_),P!=null&&A.push(Va(w,P,E)))),C)break;w=w.return}0<A.length&&(m=new y(m,S,null,n,f),p.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Jh&&(S=n.relatedTarget||n.fromElement)&&(zs(S)||S[Nr]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=d,S=S?zs(S):null,S!==null&&(C=hi(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=d),y!==S)){if(A=Sy,P="onMouseLeave",_="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(A=Ay,P="onPointerLeave",_="onPointerEnter",w="pointer"),C=y==null?m:Bi(y),E=S==null?m:Bi(S),m=new A(P,w+"leave",y,n,f),m.target=C,m.relatedTarget=E,P=null,zs(f)===d&&(A=new A(_,w+"enter",S,n,f),A.target=E,A.relatedTarget=C,P=A),C=P,y&&S)t:{for(A=y,_=S,w=0,E=A;E;E=ji(E))w++;for(E=0,P=_;P;P=ji(P))E++;for(;0<w-E;)A=ji(A),w--;for(;0<E-w;)_=ji(_),E--;for(;w--;){if(A===_||_!==null&&A===_.alternate)break t;A=ji(A),_=ji(_)}A=null}else A=null;y!==null&&My(p,m,y,A,!1),S!==null&&C!==null&&My(p,C,S,A,!0)}}e:{if(m=d?Bi(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var O=QN;else if(Ry(m))if(px)O=ZN;else{O=JN;var M=YN}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=XN);if(O&&(O=O(t,d))){fx(p,O,n,f);break e}M&&M(t,m,d),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Hh(m,"number",m.value)}switch(M=d?Bi(d):window,t){case"focusin":(Ry(M)||M.contentEditable==="true")&&(Fi=M,sf=d,ma=null);break;case"focusout":ma=sf=Fi=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Oy(p,n,f);break;case"selectionchange":if(nA)break;case"keydown":case"keyup":Oy(p,n,f)}var I;if(kp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ui?dx(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(cx&&n.locale!=="ko"&&(Ui||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ui&&(I=ux()):(ts=f,Cp="value"in ts?ts.value:ts.textContent,Ui=!0)),M=Ku(d,v),0<M.length&&(v=new Ny(v,t,null,n,f),p.push({event:v,listeners:M}),I?v.data=I:(I=hx(n),I!==null&&(v.data=I)))),(I=qN?WN(t,n):HN(t,n))&&(d=Ku(d,"onBeforeInput"),0<d.length&&(f=new Ny("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=I))}Ix(p,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ku(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ba(t,n),i!=null&&r.unshift(Va(t,i,s)),i=ba(t,e),i!=null&&r.push(Va(t,i,s))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function My(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=ba(n,i),u!=null&&o.unshift(Va(n,u,l))):s||(u=ba(n,i),u!=null&&o.push(Va(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oA=/\r\n?/g,aA=/\u0000|\uFFFD/g;function Uy(t){return(typeof t=="string"?t:""+t).replace(oA,`
`).replace(aA,"")}function ou(t,e,n){if(e=Uy(e),Uy(t)!==e&&n)throw Error(B(425))}function Qu(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,lA=typeof clearTimeout=="function"?clearTimeout:void 0,Fy=typeof Promise=="function"?Promise:void 0,uA=typeof queueMicrotask=="function"?queueMicrotask:typeof Fy<"u"?function(t){return Fy.resolve(null).then(t).catch(cA)}:cf;function cA(t){setTimeout(function(){throw t})}function ah(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Pa(e)}function ls(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $y(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var No=Math.random().toString(36).slice(2),Gn="__reactFiber$"+No,La="__reactProps$"+No,Nr="__reactContainer$"+No,df="__reactEvents$"+No,dA="__reactListeners$"+No,hA="__reactHandles$"+No;function zs(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$y(t);t!==null;){if(n=t[Gn])return n;t=$y(t)}return e}t=n,n=t.parentNode}return null}function ll(t){return t=t[Gn]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function $c(t){return t[La]||null}var hf=[],zi=-1;function As(t){return{current:t}}function je(t){0>zi||(t.current=hf[zi],hf[zi]=null,zi--)}function Re(t,e){zi++,hf[zi]=t.current,t.current=e}var _s={},Rt=As(_s),Gt=As(!1),Xs=_s;function lo(t,e){var n=t.type.contextTypes;if(!n)return _s;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Kt(t){return t=t.childContextTypes,t!=null}function Yu(){je(Gt),je(Rt)}function By(t,e,n){if(Rt.current!==_s)throw Error(B(168));Re(Rt,e),Re(Gt,n)}function Nx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,YS(t)||"Unknown",s));return Be({},n,r)}function Ju(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_s,Xs=Rt.current,Re(Rt,t),Re(Gt,Gt.current),!0}function zy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Nx(t,e,Xs),r.__reactInternalMemoizedMergedChildContext=t,je(Gt),je(Rt),Re(Rt,t)):je(Gt),Re(Gt,n)}var gr=null,Bc=!1,lh=!1;function Ax(t){gr===null?gr=[t]:gr.push(t)}function fA(t){Bc=!0,Ax(t)}function Cs(){if(!lh&&gr!==null){lh=!0;var t=0,e=Se;try{var n=gr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Bc=!1}catch(s){throw gr!==null&&(gr=gr.slice(t+1)),Xw(Ip,Cs),s}finally{Se=e,lh=!1}}return null}var qi=[],Wi=0,Xu=null,Zu=0,hn=[],fn=0,Zs=null,yr=1,vr="";function Fs(t,e){qi[Wi++]=Zu,qi[Wi++]=Xu,Xu=t,Zu=e}function Cx(t,e,n){hn[fn++]=yr,hn[fn++]=vr,hn[fn++]=Zs,Zs=t;var r=yr;t=vr;var s=32-kn(r)-1;r&=~(1<<s),n+=1;var i=32-kn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,yr=1<<32-kn(e)+s|n<<s|r,vr=i+t}else yr=1<<i|n<<s|r,vr=t}function jp(t){t.return!==null&&(Fs(t,1),Cx(t,1,0))}function Dp(t){for(;t===Xu;)Xu=qi[--Wi],qi[Wi]=null,Zu=qi[--Wi],qi[Wi]=null;for(;t===Zs;)Zs=hn[--fn],hn[fn]=null,vr=hn[--fn],hn[fn]=null,yr=hn[--fn],hn[fn]=null}var sn=null,nn=null,Oe=!1,Cn=null;function bx(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,nn=ls(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zs!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,nn=null,!0):!1;default:return!1}}function ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(Oe){var e=nn;if(e){var n=e;if(!qy(t,e)){if(ff(t))throw Error(B(418));e=ls(n.nextSibling);var r=sn;e&&qy(t,e)?bx(r,n):(t.flags=t.flags&-4097|2,Oe=!1,sn=t)}}else{if(ff(t))throw Error(B(418));t.flags=t.flags&-4097|2,Oe=!1,sn=t}}}function Wy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function au(t){if(t!==sn)return!1;if(!Oe)return Wy(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=nn)){if(ff(t))throw Rx(),Error(B(418));for(;e;)bx(t,e),e=ls(e.nextSibling)}if(Wy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=ls(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=sn?ls(t.stateNode.nextSibling):null;return!0}function Rx(){for(var t=nn;t;)t=ls(t.nextSibling)}function uo(){nn=sn=null,Oe=!1}function Op(t){Cn===null?Cn=[t]:Cn.push(t)}var pA=Dr.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function lu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hy(t){var e=t._init;return e(t._payload)}function kx(t){function e(_,w){if(t){var E=_.deletions;E===null?(_.deletions=[w],_.flags|=16):E.push(w)}}function n(_,w){if(!t)return null;for(;w!==null;)e(_,w),w=w.sibling;return null}function r(_,w){for(_=new Map;w!==null;)w.key!==null?_.set(w.key,w):_.set(w.index,w),w=w.sibling;return _}function s(_,w){return _=hs(_,w),_.index=0,_.sibling=null,_}function i(_,w,E){return _.index=E,t?(E=_.alternate,E!==null?(E=E.index,E<w?(_.flags|=2,w):E):(_.flags|=2,w)):(_.flags|=1048576,w)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,w,E,P){return w===null||w.tag!==6?(w=mh(E,_.mode,P),w.return=_,w):(w=s(w,E),w.return=_,w)}function u(_,w,E,P){var O=E.type;return O===Mi?f(_,w,E.props.children,P,E.key):w!==null&&(w.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Gr&&Hy(O)===w.type)?(P=s(w,E.props),P.ref=Zo(_,w,E),P.return=_,P):(P=ku(E.type,E.key,E.props,null,_.mode,P),P.ref=Zo(_,w,E),P.return=_,P)}function d(_,w,E,P){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=gh(E,_.mode,P),w.return=_,w):(w=s(w,E.children||[]),w.return=_,w)}function f(_,w,E,P,O){return w===null||w.tag!==7?(w=Js(E,_.mode,P,O),w.return=_,w):(w=s(w,E),w.return=_,w)}function p(_,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=mh(""+w,_.mode,E),w.return=_,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jl:return E=ku(w.type,w.key,w.props,null,_.mode,E),E.ref=Zo(_,null,w),E.return=_,E;case Li:return w=gh(w,_.mode,E),w.return=_,w;case Gr:var P=w._init;return p(_,P(w._payload),E)}if(ra(w)||Ko(w))return w=Js(w,_.mode,E,null),w.return=_,w;lu(_,w)}return null}function m(_,w,E,P){var O=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return O!==null?null:l(_,w,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Jl:return E.key===O?u(_,w,E,P):null;case Li:return E.key===O?d(_,w,E,P):null;case Gr:return O=E._init,m(_,w,O(E._payload),P)}if(ra(E)||Ko(E))return O!==null?null:f(_,w,E,P,null);lu(_,E)}return null}function y(_,w,E,P,O){if(typeof P=="string"&&P!==""||typeof P=="number")return _=_.get(E)||null,l(w,_,""+P,O);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Jl:return _=_.get(P.key===null?E:P.key)||null,u(w,_,P,O);case Li:return _=_.get(P.key===null?E:P.key)||null,d(w,_,P,O);case Gr:var M=P._init;return y(_,w,E,M(P._payload),O)}if(ra(P)||Ko(P))return _=_.get(E)||null,f(w,_,P,O,null);lu(w,P)}return null}function S(_,w,E,P){for(var O=null,M=null,I=w,v=w=0,T=null;I!==null&&v<E.length;v++){I.index>v?(T=I,I=null):T=I.sibling;var N=m(_,I,E[v],P);if(N===null){I===null&&(I=T);break}t&&I&&N.alternate===null&&e(_,I),w=i(N,w,v),M===null?O=N:M.sibling=N,M=N,I=T}if(v===E.length)return n(_,I),Oe&&Fs(_,v),O;if(I===null){for(;v<E.length;v++)I=p(_,E[v],P),I!==null&&(w=i(I,w,v),M===null?O=I:M.sibling=I,M=I);return Oe&&Fs(_,v),O}for(I=r(_,I);v<E.length;v++)T=y(I,_,v,E[v],P),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?v:T.key),w=i(T,w,v),M===null?O=T:M.sibling=T,M=T);return t&&I.forEach(function(k){return e(_,k)}),Oe&&Fs(_,v),O}function A(_,w,E,P){var O=Ko(E);if(typeof O!="function")throw Error(B(150));if(E=O.call(E),E==null)throw Error(B(151));for(var M=O=null,I=w,v=w=0,T=null,N=E.next();I!==null&&!N.done;v++,N=E.next()){I.index>v?(T=I,I=null):T=I.sibling;var k=m(_,I,N.value,P);if(k===null){I===null&&(I=T);break}t&&I&&k.alternate===null&&e(_,I),w=i(k,w,v),M===null?O=k:M.sibling=k,M=k,I=T}if(N.done)return n(_,I),Oe&&Fs(_,v),O;if(I===null){for(;!N.done;v++,N=E.next())N=p(_,N.value,P),N!==null&&(w=i(N,w,v),M===null?O=N:M.sibling=N,M=N);return Oe&&Fs(_,v),O}for(I=r(_,I);!N.done;v++,N=E.next())N=y(I,_,v,N.value,P),N!==null&&(t&&N.alternate!==null&&I.delete(N.key===null?v:N.key),w=i(N,w,v),M===null?O=N:M.sibling=N,M=N);return t&&I.forEach(function(j){return e(_,j)}),Oe&&Fs(_,v),O}function C(_,w,E,P){if(typeof E=="object"&&E!==null&&E.type===Mi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Jl:e:{for(var O=E.key,M=w;M!==null;){if(M.key===O){if(O=E.type,O===Mi){if(M.tag===7){n(_,M.sibling),w=s(M,E.props.children),w.return=_,_=w;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Gr&&Hy(O)===M.type){n(_,M.sibling),w=s(M,E.props),w.ref=Zo(_,M,E),w.return=_,_=w;break e}n(_,M);break}else e(_,M);M=M.sibling}E.type===Mi?(w=Js(E.props.children,_.mode,P,E.key),w.return=_,_=w):(P=ku(E.type,E.key,E.props,null,_.mode,P),P.ref=Zo(_,w,E),P.return=_,_=P)}return o(_);case Li:e:{for(M=E.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(_,w.sibling),w=s(w,E.children||[]),w.return=_,_=w;break e}else{n(_,w);break}else e(_,w);w=w.sibling}w=gh(E,_.mode,P),w.return=_,_=w}return o(_);case Gr:return M=E._init,C(_,w,M(E._payload),P)}if(ra(E))return S(_,w,E,P);if(Ko(E))return A(_,w,E,P);lu(_,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(n(_,w.sibling),w=s(w,E),w.return=_,_=w):(n(_,w),w=mh(E,_.mode,P),w.return=_,_=w),o(_)):n(_,w)}return C}var co=kx(!0),Px=kx(!1),ec=As(null),tc=null,Hi=null,Vp=null;function Lp(){Vp=Hi=tc=null}function Mp(t){var e=ec.current;je(ec),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function to(t,e){tc=t,Vp=Hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(Vp!==t)if(t={context:t,memoizedValue:e,next:null},Hi===null){if(tc===null)throw Error(B(308));Hi=t,tc.dependencies={lanes:0,firstContext:t}}else Hi=Hi.next=t;return e}var qs=null;function Up(t){qs===null?qs=[t]:qs.push(t)}function jx(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Up(e)):(n.next=s.next,s.next=n),e.interleaved=n,Ar(t,r)}function Ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kr=!1;function Fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function us(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Ar(t,n)}return s=r.interleaved,s===null?(e.next=e,Up(r)):(e.next=s.next,s.next=e),r.interleaved=e,Ar(t,n)}function Su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sp(t,n)}}function Gy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nc(t,e,n,r){var s=t.updateQueue;Kr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=d=u=null,l=i;do{var m=l.lane,y=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,A=l;switch(m=e,y=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){p=S.call(y,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,m=typeof S=="function"?S.call(y,p,m):S,m==null)break e;p=Be({},p,m);break e;case 2:Kr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=y,u=p):f=f.next=y,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ti|=o,t.lanes=o,t.memoizedState=p}}function Ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var ul={},Qn=As(ul),Ma=As(ul),Ua=As(ul);function Ws(t){if(t===ul)throw Error(B(174));return t}function $p(t,e){switch(Re(Ua,e),Re(Ma,t),Re(Qn,ul),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kh(e,t)}je(Qn),Re(Qn,e)}function ho(){je(Qn),je(Ma),je(Ua)}function Ox(t){Ws(Ua.current);var e=Ws(Qn.current),n=Kh(e,t.type);e!==n&&(Re(Ma,t),Re(Qn,n))}function Bp(t){Ma.current===t&&(je(Qn),je(Ma))}var Me=As(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uh=[];function zp(){for(var t=0;t<uh.length;t++)uh[t]._workInProgressVersionPrimary=null;uh.length=0}var Nu=Dr.ReactCurrentDispatcher,ch=Dr.ReactCurrentBatchConfig,ei=0,Fe=null,st=null,lt=null,sc=!1,ga=!1,Fa=0,mA=0;function Et(){throw Error(B(321))}function qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Wp(t,e,n,r,s,i){if(ei=i,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nu.current=t===null||t.memoizedState===null?_A:wA,t=n(r,s),ga){i=0;do{if(ga=!1,Fa=0,25<=i)throw Error(B(301));i+=1,lt=st=null,e.updateQueue=null,Nu.current=xA,t=n(r,s)}while(ga)}if(Nu.current=ic,e=st!==null&&st.next!==null,ei=0,lt=st=Fe=null,sc=!1,e)throw Error(B(300));return t}function Hp(){var t=Fa!==0;return Fa=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Fe.memoizedState=lt=t:lt=lt.next=t,lt}function vn(){if(st===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=lt===null?Fe.memoizedState:lt.next;if(e!==null)lt=e,st=t;else{if(t===null)throw Error(B(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},lt===null?Fe.memoizedState=lt=t:lt=lt.next=t}return lt}function $a(t,e){return typeof e=="function"?e(t):e}function dh(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=st,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var f=d.lane;if((ei&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Fe.lanes|=f,ti|=f}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,Vn(r,e.memoizedState)||(Wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Fe.lanes|=i,ti|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hh(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Vn(i,e.memoizedState)||(Wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Vx(){}function Lx(t,e){var n=Fe,r=vn(),s=e(),i=!Vn(r.memoizedState,s);if(i&&(r.memoizedState=s,Wt=!0),r=r.queue,Gp(Fx.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,Ux.bind(null,n,r,s,e),void 0,null),ct===null)throw Error(B(349));ei&30||Mx(n,e,s)}return s}function Mx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ux(t,e,n,r){e.value=n,e.getSnapshot=r,$x(e)&&Bx(t)}function Fx(t,e,n){return n(function(){$x(e)&&Bx(t)})}function $x(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function Bx(t){var e=Ar(t,1);e!==null&&Pn(e,t,1,-1)}function Qy(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=vA.bind(null,Fe,t),[e.memoizedState,t]}function Ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zx(){return vn().memoizedState}function Au(t,e,n,r){var s=Wn();Fe.flags|=t,s.memoizedState=Ba(1|e,n,void 0,r===void 0?null:r)}function zc(t,e,n,r){var s=vn();r=r===void 0?null:r;var i=void 0;if(st!==null){var o=st.memoizedState;if(i=o.destroy,r!==null&&qp(r,o.deps)){s.memoizedState=Ba(e,n,i,r);return}}Fe.flags|=t,s.memoizedState=Ba(1|e,n,i,r)}function Yy(t,e){return Au(8390656,8,t,e)}function Gp(t,e){return zc(2048,8,t,e)}function qx(t,e){return zc(4,2,t,e)}function Wx(t,e){return zc(4,4,t,e)}function Hx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gx(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,Hx.bind(null,e,t),n)}function Kp(){}function Kx(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Qx(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yx(t,e,n){return ei&21?(Vn(n,e)||(n=tx(),Fe.lanes|=n,ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function gA(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=ch.transition;ch.transition={};try{t(!1),e()}finally{Se=n,ch.transition=r}}function Jx(){return vn().memoizedState}function yA(t,e,n){var r=ds(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xx(t))Zx(e,n);else if(n=jx(t,e,n,r),n!==null){var s=Vt();Pn(n,t,r,s),eE(n,e,r)}}function vA(t,e,n){var r=ds(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xx(t))Zx(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Vn(l,o)){var u=e.interleaved;u===null?(s.next=s,Up(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=jx(t,e,s,r),n!==null&&(s=Vt(),Pn(n,t,r,s),eE(n,e,r))}}function Xx(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Zx(t,e){ga=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sp(t,n)}}var ic={readContext:yn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},_A={readContext:yn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Yy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Au(4194308,4,Hx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Au(4194308,4,t,e)},useInsertionEffect:function(t,e){return Au(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yA.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Qy,useDebugValue:Kp,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Qy(!1),e=t[0];return t=gA.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,s=Wn();if(Oe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ct===null)throw Error(B(349));ei&30||Mx(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Yy(Fx.bind(null,r,i,t),[t]),r.flags|=2048,Ba(9,Ux.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Wn(),e=ct.identifierPrefix;if(Oe){var n=vr,r=yr;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wA={readContext:yn,useCallback:Kx,useContext:yn,useEffect:Gp,useImperativeHandle:Gx,useInsertionEffect:qx,useLayoutEffect:Wx,useMemo:Qx,useReducer:dh,useRef:zx,useState:function(){return dh($a)},useDebugValue:Kp,useDeferredValue:function(t){var e=vn();return Yx(e,st.memoizedState,t)},useTransition:function(){var t=dh($a)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Vx,useSyncExternalStore:Lx,useId:Jx,unstable_isNewReconciler:!1},xA={readContext:yn,useCallback:Kx,useContext:yn,useEffect:Gp,useImperativeHandle:Gx,useInsertionEffect:qx,useLayoutEffect:Wx,useMemo:Qx,useReducer:hh,useRef:zx,useState:function(){return hh($a)},useDebugValue:Kp,useDeferredValue:function(t){var e=vn();return st===null?e.memoizedState=t:Yx(e,st.memoizedState,t)},useTransition:function(){var t=hh($a)[0],e=vn().memoizedState;return[t,e]},useMutableSource:Vx,useSyncExternalStore:Lx,useId:Jx,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qc={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),s=ds(t),i=xr(r,s);i.payload=e,n!=null&&(i.callback=n),e=us(t,i,s),e!==null&&(Pn(e,t,s,r),Su(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),s=ds(t),i=xr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=us(t,i,s),e!==null&&(Pn(e,t,s,r),Su(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=ds(t),s=xr(n,r);s.tag=2,e!=null&&(s.callback=e),e=us(t,s,r),e!==null&&(Pn(e,t,r,n),Su(e,t,r))}};function Jy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,r)||!Da(s,i):!0}function tE(t,e,n){var r=!1,s=_s,i=e.contextType;return typeof i=="object"&&i!==null?i=yn(i):(s=Kt(e)?Xs:Rt.current,r=e.contextTypes,i=(r=r!=null)?lo(t,s):_s),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Xy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qc.enqueueReplaceState(e,e.state,null)}function yf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Fp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=yn(i):(i=Kt(e)?Xs:Rt.current,s.context=lo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(gf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&qc.enqueueReplaceState(s,s.state,null),nc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function fo(t,e){try{var n="",r=e;do n+=QS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function fh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EA=typeof WeakMap=="function"?WeakMap:Map;function nE(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ac||(ac=!0,Cf=r),vf(t,e)},n}function rE(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){vf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof r!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=VA.bind(null,t,e,n),e.then(t,t))}function ev(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,us(n,e,1))),n.lanes|=1),t)}var TA=Dr.ReactCurrentOwner,Wt=!1;function Ot(t,e,n,r){e.child=t===null?Px(e,null,n,r):co(e,t.child,n,r)}function nv(t,e,n,r,s){n=n.render;var i=e.ref;return to(e,s),r=Wp(t,e,n,r,i,s),n=Hp(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cr(t,e,s)):(Oe&&n&&jp(e),e.flags|=1,Ot(t,e,r,s),e.child)}function rv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!nm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,sE(t,e,i,r,s)):(t=ku(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,r)&&t.ref===e.ref)return Cr(t,e,s)}return e.flags|=1,t=hs(i,r),t.ref=e.ref,t.return=e,e.child=t}function sE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Da(i,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,Cr(t,e,s)}return _f(t,e,n,r,s)}function iE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Ki,en),en|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Ki,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Re(Ki,en),en|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Re(Ki,en),en|=r;return Ot(t,e,s,n),e.child}function oE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,r,s){var i=Kt(n)?Xs:Rt.current;return i=lo(e,i),to(e,s),n=Wp(t,e,n,r,i,s),r=Hp(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cr(t,e,s)):(Oe&&r&&jp(e),e.flags|=1,Ot(t,e,n,s),e.child)}function sv(t,e,n,r,s){if(Kt(n)){var i=!0;Ju(e)}else i=!1;if(to(e,s),e.stateNode===null)Cu(t,e),tE(e,n,r),yf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=yn(d):(d=Kt(n)?Xs:Rt.current,d=lo(e,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Xy(e,o,r,d),Kr=!1;var m=e.memoizedState;o.state=m,nc(e,r,o,s),u=e.memoizedState,l!==r||m!==u||Gt.current||Kr?(typeof f=="function"&&(gf(e,n,f,r),u=e.memoizedState),(l=Kr||Jy(e,n,l,r,m,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Dx(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Nn(e.type,l),o.props=d,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=yn(u):(u=Kt(n)?Xs:Rt.current,u=lo(e,u));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Xy(e,o,r,u),Kr=!1,m=e.memoizedState,o.state=m,nc(e,r,o,s);var S=e.memoizedState;l!==p||m!==S||Gt.current||Kr?(typeof y=="function"&&(gf(e,n,y,r),S=e.memoizedState),(d=Kr||Jy(e,n,d,r,m,S,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return wf(t,e,n,r,i,s)}function wf(t,e,n,r,s,i){oE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&zy(e,n,!1),Cr(t,e,i);r=e.stateNode,TA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=co(e,t.child,null,i),e.child=co(e,null,l,i)):Ot(t,e,l,i),e.memoizedState=r.state,s&&zy(e,n,!0),e.child}function aE(t){var e=t.stateNode;e.pendingContext?By(t,e.pendingContext,e.pendingContext!==e.context):e.context&&By(t,e.context,!1),$p(t,e.containerInfo)}function iv(t,e,n,r,s){return uo(),Op(s),e.flags|=256,Ot(t,e,n,r),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function lE(t,e,n){var r=e.pendingProps,s=Me.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Re(Me,s&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Gc(o,r,0,null),t=Js(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ef(n),e.memoizedState=xf,t):Qp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return IA(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=hs(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=hs(l,i):(i=Js(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=xf,r}return i=t.child,t=i.sibling,r=hs(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qp(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uu(t,e,n,r){return r!==null&&Op(r),co(e,t.child,null,n),t=Qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=fh(Error(B(422))),uu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Gc({mode:"visible",children:r.children},s,0,null),i=Js(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&co(e,t.child,null,o),e.child.memoizedState=Ef(o),e.memoizedState=xf,i);if(!(e.mode&1))return uu(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=fh(i,r,void 0),uu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Wt||l){if(r=ct,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ar(t,s),Pn(r,t,s,-1))}return tm(),r=fh(Error(B(421))),uu(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=LA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,nn=ls(s.nextSibling),sn=e,Oe=!0,Cn=null,t!==null&&(hn[fn++]=yr,hn[fn++]=vr,hn[fn++]=Zs,yr=t.id,vr=t.overflow,Zs=e),e=Qp(e,r.children),e.flags|=4096,e)}function ov(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mf(t.return,e,n)}function ph(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function uE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ot(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ov(t,n,e);else if(t.tag===19)ov(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Me,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ph(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&rc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ph(e,!0,n,null,i);break;case"together":ph(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=hs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SA(t,e,n){switch(e.tag){case 3:aE(e),uo();break;case 5:Ox(e);break;case 1:Kt(e.type)&&Ju(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Re(ec,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?lE(t,e,n):(Re(Me,Me.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Re(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Re(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,iE(t,e,n)}return Cr(t,e,n)}var cE,Tf,dE,hE;cE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};dE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ws(Qn.current);var i=null;switch(n){case"input":s=qh(t,s),r=qh(t,r),i=[];break;case"select":s=Be({},s,{value:void 0}),r=Be({},r,{value:void 0}),i=[];break;case"textarea":s=Gh(t,s),r=Gh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qu)}Qh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Aa.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Pe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};hE=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NA(t,e,n){var r=e.pendingProps;switch(Dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Kt(e.type)&&Yu(),Tt(e),null;case 3:return r=e.stateNode,ho(),je(Gt),je(Rt),zp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(au(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(kf(Cn),Cn=null))),Tf(t,e),Tt(e),null;case 5:Bp(e);var s=Ws(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)dE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Tt(e),null}if(t=Ws(Qn.current),au(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Gn]=e,r[La]=i,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(s=0;s<ia.length;s++)Pe(ia[s],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":my(r,i),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Pe("invalid",r);break;case"textarea":yy(r,i),Pe("invalid",r)}Qh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ou(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ou(r.textContent,l,t),s=["children",""+l]):Aa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Xl(r),gy(r,i,!0);break;case"textarea":Xl(r),vy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gn]=e,t[La]=r,cE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yh(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),s=r;break;case"iframe":case"object":case"embed":Pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<ia.length;s++)Pe(ia[s],t);s=r;break;case"source":Pe("error",t),s=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),s=r;break;case"details":Pe("toggle",t),s=r;break;case"input":my(t,r),s=qh(t,r),Pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Be({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":yy(t,r),s=Gh(t,r),Pe("invalid",t);break;default:s=r}Qh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?zw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$w(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ca(t,u):typeof u=="number"&&Ca(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Aa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Pe("scroll",t):u!=null&&_p(t,i,u,o))}switch(n){case"input":Xl(t),gy(t,r,!1);break;case"textarea":Xl(t),vy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ji(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)hE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ws(Ua.current),Ws(Qn.current),au(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(i=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:ou(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ou(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return Tt(e),null;case 13:if(je(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&nn!==null&&e.mode&1&&!(e.flags&128))Rx(),uo(),e.flags|=98560,i=!1;else if(i=au(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Gn]=e}else uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),i=!1}else Cn!==null&&(kf(Cn),Cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?it===0&&(it=3):tm())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return ho(),Tf(t,e),t===null&&Oa(e.stateNode.containerInfo),Tt(e),null;case 10:return Mp(e.type._context),Tt(e),null;case 17:return Kt(e.type)&&Yu(),Tt(e),null;case 19:if(je(Me),i=e.memoizedState,i===null)return Tt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ea(i,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,ea(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Me,Me.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ye()>po&&(e.flags|=128,r=!0,ea(i,!1),e.lanes=4194304)}else{if(!r)if(t=rc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Oe)return Tt(e),null}else 2*Ye()-i.renderingStartTime>po&&n!==1073741824&&(e.flags|=128,r=!0,ea(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ye(),e.sibling=null,n=Me.current,Re(Me,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?en&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function AA(t,e){switch(Dp(e),e.tag){case 1:return Kt(e.type)&&Yu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),je(Gt),je(Rt),zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(je(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Me),null;case 4:return ho(),null;case 10:return Mp(e.type._context),null;case 22:case 23:return em(),null;case 24:return null;default:return null}}var cu=!1,Nt=!1,CA=typeof WeakSet=="function"?WeakSet:Set,K=null;function Gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function If(t,e,n){try{n()}catch(r){He(t,e,r)}}var av=!1;function bA(t,e){if(af=Hu,t=yx(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,p=t,m=null;t:for(;;){for(var y;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===t)break t;if(m===n&&++d===s&&(l=o),m===i&&++f===r&&(u=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Hu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,C=S.memoizedState,_=e.stateNode,w=_.getSnapshotBeforeUpdate(e.elementType===e.type?A:Nn(e.type,A),C);_.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(P){He(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return S=av,av=!1,S}function ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&If(e,n,i)}s=s.next}while(s!==r)}}function Wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fE(t){var e=t.alternate;e!==null&&(t.alternate=null,fE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[La],delete e[df],delete e[dA],delete e[hA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pE(t){return t.tag===5||t.tag===3||t.tag===4}function lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qu));else if(r!==4&&(t=t.child,t!==null))for(Nf(t,e,n),t=t.sibling;t!==null;)Nf(t,e,n),t=t.sibling}function Af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}var mt=null,An=!1;function qr(t,e,n){for(n=n.child;n!==null;)mE(t,e,n),n=n.sibling}function mE(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Lc,n)}catch{}switch(n.tag){case 5:Nt||Gi(n,e);case 6:var r=mt,s=An;mt=null,qr(t,e,n),mt=r,An=s,mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(An?(t=mt,n=n.stateNode,t.nodeType===8?ah(t.parentNode,n):t.nodeType===1&&ah(t,n),Pa(t)):ah(mt,n.stateNode));break;case 4:r=mt,s=An,mt=n.stateNode.containerInfo,An=!0,qr(t,e,n),mt=r,An=s;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&If(n,e,o),s=s.next}while(s!==r)}qr(t,e,n);break;case 1:if(!Nt&&(Gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){He(n,e,l)}qr(t,e,n);break;case 21:qr(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,qr(t,e,n),Nt=r):qr(t,e,n);break;default:qr(t,e,n)}}function uv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CA),e.forEach(function(r){var s=MA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:mt=l.stateNode,An=!1;break e;case 3:mt=l.stateNode.containerInfo,An=!0;break e;case 4:mt=l.stateNode.containerInfo,An=!0;break e}l=l.return}if(mt===null)throw Error(B(160));mE(i,o,s),mt=null,An=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){He(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gE(e,t),e=e.sibling}function gE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),qn(t),r&4){try{ya(3,t,t.return),Wc(3,t)}catch(A){He(t,t.return,A)}try{ya(5,t,t.return)}catch(A){He(t,t.return,A)}}break;case 1:Sn(e,t),qn(t),r&512&&n!==null&&Gi(n,n.return);break;case 5:if(Sn(e,t),qn(t),r&512&&n!==null&&Gi(n,n.return),t.flags&32){var s=t.stateNode;try{Ca(s,"")}catch(A){He(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Mw(s,i),Yh(l,o);var d=Yh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?zw(s,p):f==="dangerouslySetInnerHTML"?$w(s,p):f==="children"?Ca(s,p):_p(s,f,p,d)}switch(l){case"input":Wh(s,i);break;case"textarea":Uw(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Ji(s,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ji(s,!!i.multiple,i.defaultValue,!0):Ji(s,!!i.multiple,i.multiple?[]:"",!1))}s[La]=i}catch(A){He(t,t.return,A)}}break;case 6:if(Sn(e,t),qn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){He(t,t.return,A)}}break;case 3:if(Sn(e,t),qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(A){He(t,t.return,A)}break;case 4:Sn(e,t),qn(t);break;case 13:Sn(e,t),qn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Xp=Ye())),r&4&&uv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(d=Nt)||f,Sn(e,t),Nt=d):Sn(e,t),qn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(p=K=f;K!==null;){switch(m=K,y=m.child,m.tag){case 0:case 11:case 14:case 15:ya(4,m,m.return);break;case 1:Gi(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){He(r,n,A)}}break;case 5:Gi(m,m.return);break;case 22:if(m.memoizedState!==null){dv(p);continue}}y!==null?(y.return=m,K=y):dv(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Bw("display",o))}catch(A){He(t,t.return,A)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(A){He(t,t.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Sn(e,t),qn(t),r&4&&uv(t);break;case 21:break;default:Sn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ca(s,""),r.flags&=-33);var i=lv(t);Af(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lv(t);Nf(t,l,o);break;default:throw Error(B(161))}}catch(u){He(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RA(t,e,n){K=t,yE(t)}function yE(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||cu;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Nt;l=cu;var d=Nt;if(cu=o,(Nt=u)&&!d)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?hv(s):u!==null?(u.return=o,K=u):hv(s);for(;i!==null;)K=i,yE(i),i=i.sibling;K=s,cu=l,Nt=d}cv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):cv(t)}}function cv(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Wc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ky(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ky(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Pa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Nt||e.flags&512&&Sf(e)}catch(m){He(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function dv(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function hv(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wc(4,e)}catch(u){He(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){He(e,s,u)}}var i=e.return;try{Sf(e)}catch(u){He(e,i,u)}break;case 5:var o=e.return;try{Sf(e)}catch(u){He(e,o,u)}}}catch(u){He(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var kA=Math.ceil,oc=Dr.ReactCurrentDispatcher,Yp=Dr.ReactCurrentOwner,gn=Dr.ReactCurrentBatchConfig,_e=0,ct=null,et=null,yt=0,en=0,Ki=As(0),it=0,za=null,ti=0,Hc=0,Jp=0,va=null,Bt=null,Xp=0,po=1/0,pr=null,ac=!1,Cf=null,cs=null,du=!1,ns=null,lc=0,_a=0,bf=null,bu=-1,Ru=0;function Vt(){return _e&6?Ye():bu!==-1?bu:bu=Ye()}function ds(t){return t.mode&1?_e&2&&yt!==0?yt&-yt:pA.transition!==null?(Ru===0&&(Ru=tx()),Ru):(t=Se,t!==0||(t=window.event,t=t===void 0?16:lx(t.type)),t):1}function Pn(t,e,n,r){if(50<_a)throw _a=0,bf=null,Error(B(185));ol(t,n,r),(!(_e&2)||t!==ct)&&(t===ct&&(!(_e&2)&&(Hc|=n),it===4&&Yr(t,yt)),Qt(t,r),n===1&&_e===0&&!(e.mode&1)&&(po=Ye()+500,Bc&&Cs()))}function Qt(t,e){var n=t.callbackNode;pN(t,e);var r=Wu(t,t===ct?yt:0);if(r===0)n!==null&&xy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xy(n),e===1)t.tag===0?fA(fv.bind(null,t)):Ax(fv.bind(null,t)),uA(function(){!(_e&6)&&Cs()}),n=null;else{switch(nx(r)){case 1:n=Ip;break;case 4:n=Zw;break;case 16:n=qu;break;case 536870912:n=ex;break;default:n=qu}n=SE(n,vE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vE(t,e){if(bu=-1,Ru=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var r=Wu(t,t===ct?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var s=_e;_e|=2;var i=wE();(ct!==t||yt!==e)&&(pr=null,po=Ye()+500,Ys(t,e));do try{DA();break}catch(l){_E(t,l)}while(!0);Lp(),oc.current=i,_e=s,et!==null?e=0:(ct=null,yt=0,e=it)}if(e!==0){if(e===2&&(s=tf(t),s!==0&&(r=s,e=Rf(t,s))),e===1)throw n=za,Ys(t,0),Yr(t,r),Qt(t,Ye()),n;if(e===6)Yr(t,r);else{if(s=t.current.alternate,!(r&30)&&!PA(s)&&(e=uc(t,r),e===2&&(i=tf(t),i!==0&&(r=i,e=Rf(t,i))),e===1))throw n=za,Ys(t,0),Yr(t,r),Qt(t,Ye()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:$s(t,Bt,pr);break;case 3:if(Yr(t,r),(r&130023424)===r&&(e=Xp+500-Ye(),10<e)){if(Wu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=cf($s.bind(null,t,Bt,pr),e);break}$s(t,Bt,pr);break;case 4:if(Yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-kn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kA(r/1960))-r,10<r){t.timeoutHandle=cf($s.bind(null,t,Bt,pr),r);break}$s(t,Bt,pr);break;case 5:$s(t,Bt,pr);break;default:throw Error(B(329))}}}return Qt(t,Ye()),t.callbackNode===n?vE.bind(null,t):null}function Rf(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(Ys(t,e).flags|=256),t=uc(t,e),t!==2&&(e=Bt,Bt=n,e!==null&&kf(e)),t}function kf(t){Bt===null?Bt=t:Bt.push.apply(Bt,t)}function PA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Vn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~Jp,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),r=1<<n;t[n]=-1,e&=~r}}function fv(t){if(_e&6)throw Error(B(327));no();var e=Wu(t,0);if(!(e&1))return Qt(t,Ye()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=tf(t);r!==0&&(e=r,n=Rf(t,r))}if(n===1)throw n=za,Ys(t,0),Yr(t,e),Qt(t,Ye()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$s(t,Bt,pr),Qt(t,Ye()),null}function Zp(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(po=Ye()+500,Bc&&Cs())}}function ni(t){ns!==null&&ns.tag===0&&!(_e&6)&&no();var e=_e;_e|=1;var n=gn.transition,r=Se;try{if(gn.transition=null,Se=1,t)return t()}finally{Se=r,gn.transition=n,_e=e,!(_e&6)&&Cs()}}function em(){en=Ki.current,je(Ki)}function Ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lA(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(Dp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:ho(),je(Gt),je(Rt),zp();break;case 5:Bp(r);break;case 4:ho();break;case 13:je(Me);break;case 19:je(Me);break;case 10:Mp(r.type._context);break;case 22:case 23:em()}n=n.return}if(ct=t,et=t=hs(t.current,null),yt=en=e,it=0,za=null,Jp=Hc=ti=0,Bt=va=null,qs!==null){for(e=0;e<qs.length;e++)if(n=qs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}qs=null}return t}function _E(t,e){do{var n=et;try{if(Lp(),Nu.current=ic,sc){for(var r=Fe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}sc=!1}if(ei=0,lt=st=Fe=null,ga=!1,Fa=0,Yp.current=null,n===null||n.return===null){it=1,za=e,et=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=yt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ev(o);if(y!==null){y.flags&=-257,tv(y,o,l,i,e),y.mode&1&&Zy(i,d,e),e=y,u=d;var S=e.updateQueue;if(S===null){var A=new Set;A.add(u),e.updateQueue=A}else S.add(u);break e}else{if(!(e&1)){Zy(i,d,e),tm();break e}u=Error(B(426))}}else if(Oe&&l.mode&1){var C=ev(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),tv(C,o,l,i,e),Op(fo(u,l));break e}}i=u=fo(u,l),it!==4&&(it=2),va===null?va=[i]:va.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var _=nE(i,u,e);Gy(i,_);break e;case 1:l=u;var w=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(cs===null||!cs.has(E)))){i.flags|=65536,e&=-e,i.lanes|=e;var P=rE(i,l,e);Gy(i,P);break e}}i=i.return}while(i!==null)}EE(n)}catch(O){e=O,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function wE(){var t=oc.current;return oc.current=ic,t===null?ic:t}function tm(){(it===0||it===3||it===2)&&(it=4),ct===null||!(ti&268435455)&&!(Hc&268435455)||Yr(ct,yt)}function uc(t,e){var n=_e;_e|=2;var r=wE();(ct!==t||yt!==e)&&(pr=null,Ys(t,e));do try{jA();break}catch(s){_E(t,s)}while(!0);if(Lp(),_e=n,oc.current=r,et!==null)throw Error(B(261));return ct=null,yt=0,it}function jA(){for(;et!==null;)xE(et)}function DA(){for(;et!==null&&!iN();)xE(et)}function xE(t){var e=IE(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?EE(t):et=e,Yp.current=null}function EE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AA(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,et=null;return}}else if(n=NA(n,e,en),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);it===0&&(it=5)}function $s(t,e,n){var r=Se,s=gn.transition;try{gn.transition=null,Se=1,OA(t,e,n,r)}finally{gn.transition=s,Se=r}return null}function OA(t,e,n,r){do no();while(ns!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(mN(t,i),t===ct&&(et=ct=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||du||(du=!0,SE(qu,function(){return no(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=gn.transition,gn.transition=null;var o=Se;Se=1;var l=_e;_e|=4,Yp.current=null,bA(t,n),gE(n,t),tA(lf),Hu=!!af,lf=af=null,t.current=n,RA(n),oN(),_e=l,Se=o,gn.transition=i}else t.current=n;if(du&&(du=!1,ns=t,lc=s),i=t.pendingLanes,i===0&&(cs=null),uN(n.stateNode),Qt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ac)throw ac=!1,t=Cf,Cf=null,t;return lc&1&&t.tag!==0&&no(),i=t.pendingLanes,i&1?t===bf?_a++:(_a=0,bf=t):_a=0,Cs(),null}function no(){if(ns!==null){var t=nx(lc),e=gn.transition,n=Se;try{if(gn.transition=null,Se=16>t?16:t,ns===null)var r=!1;else{if(t=ns,ns=null,lc=0,_e&6)throw Error(B(331));var s=_e;for(_e|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(K=d;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:ya(8,f,i)}var p=f.child;if(p!==null)p.return=f,K=p;else for(;K!==null;){f=K;var m=f.sibling,y=f.return;if(fE(f),f===d){K=null;break}if(m!==null){m.return=y,K=m;break}K=y}}}var S=i.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var C=A.sibling;A.sibling=null,A=C}while(A!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ya(9,i,i.return)}var _=i.sibling;if(_!==null){_.return=i.return,K=_;break e}K=i.return}}var w=t.current;for(K=w;K!==null;){o=K;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,K=E;else e:for(o=w;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wc(9,l)}}catch(O){He(l,l.return,O)}if(l===o){K=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,K=P;break e}K=l.return}}if(_e=s,Cs(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Lc,t)}catch{}r=!0}return r}finally{Se=n,gn.transition=e}}return!1}function pv(t,e,n){e=fo(n,e),e=nE(t,e,1),t=us(t,e,1),e=Vt(),t!==null&&(ol(t,1,e),Qt(t,e))}function He(t,e,n){if(t.tag===3)pv(t,t,n);else for(;e!==null;){if(e.tag===3){pv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cs===null||!cs.has(r))){t=fo(n,t),t=rE(e,t,1),e=us(e,t,1),t=Vt(),e!==null&&(ol(e,1,t),Qt(e,t));break}}e=e.return}}function VA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(yt&n)===n&&(it===4||it===3&&(yt&130023424)===yt&&500>Ye()-Xp?Ys(t,0):Jp|=n),Qt(t,e)}function TE(t,e){e===0&&(t.mode&1?(e=tu,tu<<=1,!(tu&130023424)&&(tu=4194304)):e=1);var n=Vt();t=Ar(t,e),t!==null&&(ol(t,e,n),Qt(t,n))}function LA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),TE(t,n)}function MA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),TE(t,n)}var IE;IE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,SA(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Oe&&e.flags&1048576&&Cx(e,Zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cu(t,e),t=e.pendingProps;var s=lo(e,Rt.current);to(e,n),s=Wp(null,e,r,t,s,n);var i=Hp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(i=!0,Ju(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Fp(e),s.updater=qc,e.stateNode=s,s._reactInternals=e,yf(e,r,t,n),e=wf(null,e,r,!0,i,n)):(e.tag=0,Oe&&i&&jp(e),Ot(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=FA(r),t=Nn(r,t),s){case 0:e=_f(null,e,r,t,n);break e;case 1:e=sv(null,e,r,t,n);break e;case 11:e=nv(null,e,r,t,n);break e;case 14:e=rv(null,e,r,Nn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),_f(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),sv(t,e,r,s,n);case 3:e:{if(aE(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Dx(t,e),nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=fo(Error(B(423)),e),e=iv(t,e,r,n,s);break e}else if(r!==s){s=fo(Error(B(424)),e),e=iv(t,e,r,n,s);break e}else for(nn=ls(e.stateNode.containerInfo.firstChild),sn=e,Oe=!0,Cn=null,n=Px(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),r===s){e=Cr(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return Ox(e),t===null&&pf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,uf(r,s)?o=null:i!==null&&uf(r,i)&&(e.flags|=32),oE(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return lE(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=co(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),nv(t,e,r,s,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Re(ec,r._currentValue),r._currentValue=o,i!==null)if(Vn(i.value,o)){if(i.children===s.children&&!Gt.current){e=Cr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xr(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),mf(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ot(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,to(e,n),s=yn(s),r=r(s),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,s=Nn(r,e.pendingProps),s=Nn(r.type,s),rv(t,e,r,s,n);case 15:return sE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),Cu(t,e),e.tag=1,Kt(r)?(t=!0,Ju(e)):t=!1,to(e,n),tE(e,r,s),yf(e,r,s,n),wf(null,e,r,!0,t,n);case 19:return uE(t,e,n);case 22:return iE(t,e,n)}throw Error(B(156,e.tag))};function SE(t,e){return Xw(t,e)}function UA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new UA(t,e,n,r)}function nm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FA(t){if(typeof t=="function")return nm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xp)return 11;if(t===Ep)return 14}return 2}function hs(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ku(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")nm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return Js(n.children,s,i,e);case wp:o=8,s|=8;break;case Fh:return t=mn(12,n,e,s|2),t.elementType=Fh,t.lanes=i,t;case $h:return t=mn(13,n,e,s),t.elementType=$h,t.lanes=i,t;case Bh:return t=mn(19,n,e,s),t.elementType=Bh,t.lanes=i,t;case Ow:return Gc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jw:o=10;break e;case Dw:o=9;break e;case xp:o=11;break e;case Ep:o=14;break e;case Gr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=mn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Js(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=mn(22,t,r,e),t.elementType=Ow,t.lanes=n,t.stateNode={isHidden:!1},t}function mh(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function gh(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $A(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yd(0),this.expirationTimes=Yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function rm(t,e,n,r,s,i,o,l,u){return t=new $A(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=mn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fp(i),t}function BA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NE(t){if(!t)return _s;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Kt(n))return Nx(t,n,e)}return e}function AE(t,e,n,r,s,i,o,l,u){return t=rm(n,r,!0,t,s,i,o,l,u),t.context=NE(null),n=t.current,r=Vt(),s=ds(n),i=xr(r,s),i.callback=e??null,us(n,i,s),t.current.lanes=s,ol(t,s,r),Qt(t,r),t}function Kc(t,e,n,r){var s=e.current,i=Vt(),o=ds(s);return n=NE(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=us(s,e,o),t!==null&&(Pn(t,s,o,i),Su(t,s,o)),o}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sm(t,e){mv(t,e),(t=t.alternate)&&mv(t,e)}function zA(){return null}var CE=typeof reportError=="function"?reportError:function(t){console.error(t)};function im(t){this._internalRoot=t}Qc.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Kc(t,e,null,null)};Qc.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ni(function(){Kc(null,t,null,null)}),e[Nr]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ix();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qr.length&&e!==0&&e<Qr[n].priority;n++);Qr.splice(n,0,t),n===0&&ax(t)}};function om(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gv(){}function qA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=cc(o);i.call(d)}}var o=AE(e,r,t,0,null,!1,!1,"",gv);return t._reactRootContainer=o,t[Nr]=o.current,Oa(t.nodeType===8?t.parentNode:t),ni(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=cc(u);l.call(d)}}var u=rm(t,0,!1,null,null,!1,!1,"",gv);return t._reactRootContainer=u,t[Nr]=u.current,Oa(t.nodeType===8?t.parentNode:t),ni(function(){Kc(e,u,n,r)}),u}function Jc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=cc(o);l.call(u)}}Kc(e,o,t,s)}else o=qA(n,e,t,s,r);return cc(o)}rx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(Sp(e,n|1),Qt(e,Ye()),!(_e&6)&&(po=Ye()+500,Cs()))}break;case 13:ni(function(){var r=Ar(t,1);if(r!==null){var s=Vt();Pn(r,t,1,s)}}),sm(t,1)}};Np=function(t){if(t.tag===13){var e=Ar(t,134217728);if(e!==null){var n=Vt();Pn(e,t,134217728,n)}sm(t,134217728)}};sx=function(t){if(t.tag===13){var e=ds(t),n=Ar(t,e);if(n!==null){var r=Vt();Pn(n,t,e,r)}sm(t,e)}};ix=function(){return Se};ox=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Xh=function(t,e,n){switch(e){case"input":if(Wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=$c(r);if(!s)throw Error(B(90));Lw(r),Wh(r,s)}}}break;case"textarea":Uw(t,n);break;case"select":e=n.value,e!=null&&Ji(t,!!n.multiple,e,!1)}};Hw=Zp;Gw=ni;var WA={usingClientEntryPoint:!1,Events:[ll,Bi,$c,qw,Ww,Zp]},ta={findFiberByHostInstance:zs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},HA={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yw(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||zA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Lc=hu.inject(HA),Kn=hu}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WA;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!om(e))throw Error(B(200));return BA(t,e,null,n)};un.createRoot=function(t,e){if(!om(t))throw Error(B(299));var n=!1,r="",s=CE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=rm(t,1,!1,null,null,n,!1,r,s),t[Nr]=e.current,Oa(t.nodeType===8?t.parentNode:t),new im(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Yw(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return ni(t)};un.hydrate=function(t,e,n){if(!Yc(e))throw Error(B(200));return Jc(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!om(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=CE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=AE(e,null,t,1,n??null,s,!1,i,o),t[Nr]=e.current,Oa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Qc(e)};un.render=function(t,e,n){if(!Yc(e))throw Error(B(200));return Jc(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(B(40));return t._reactRootContainer?(ni(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1};un.unstable_batchedUpdates=Zp;un.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Jc(t,e,n,!1,r)};un.version="18.3.1-next-f1338f8080-20240426";function bE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bE)}catch(t){console.error(t)}}bE(),bw.exports=un;var GA=bw.exports,yv=GA;Mh.createRoot=yv.createRoot,Mh.hydrateRoot=yv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qa.apply(this,arguments)}var rs;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rs||(rs={}));const vv="popstate";function KA(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Pf("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:dc(s)}return YA(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function RE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QA(){return Math.random().toString(36).substr(2,8)}function _v(t,e){return{usr:t.state,key:t.key,idx:e}}function Pf(t,e,n,r){return n===void 0&&(n=null),qa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ao(e):e,{state:n,key:e&&e.key||r||QA()})}function dc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YA(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=rs.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(qa({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=rs.Pop;let C=f(),_=C==null?null:C-d;d=C,u&&u({action:l,location:A.location,delta:_})}function m(C,_){l=rs.Push;let w=Pf(A.location,C,_);d=f()+1;let E=_v(w,d),P=A.createHref(w);try{o.pushState(E,"",P)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;s.location.assign(P)}i&&u&&u({action:l,location:A.location,delta:1})}function y(C,_){l=rs.Replace;let w=Pf(A.location,C,_);d=f();let E=_v(w,d),P=A.createHref(w);o.replaceState(E,"",P),i&&u&&u({action:l,location:A.location,delta:0})}function S(C){let _=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof C=="string"?C:dc(C);return w=w.replace(/ $/,"%20"),$e(_,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,_)}let A={get action(){return l},get location(){return t(s,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(vv,p),u=C,()=>{s.removeEventListener(vv,p),u=null}},createHref(C){return e(s,C)},createURL:S,encodeLocation(C){let _=S(C);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:y,go(C){return o.go(C)}};return A}var wv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wv||(wv={}));function JA(t,e,n){return n===void 0&&(n="/"),XA(t,e,n)}function XA(t,e,n,r){let s=typeof e=="string"?Ao(e):e,i=mo(s.pathname||"/",n);if(i==null)return null;let o=kE(t);ZA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=c1(i);l=l1(o[u],d)}return l}function kE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&($e(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=fs([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&($e(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),kE(i.children,e,f,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:o1(d,i.index),routesMeta:f})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of PE(i.path))s(i,o,u)}),e}function PE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=PE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function ZA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:a1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const e1=/^:[\w-]+$/,t1=3,n1=2,r1=1,s1=10,i1=-2,xv=t=>t==="*";function o1(t,e){let n=t.split("/"),r=n.length;return n.some(xv)&&(r+=i1),e&&(r+=n1),n.filter(s=>!xv(s)).reduce((s,i)=>s+(e1.test(i)?t1:i===""?r1:s1),r)}function a1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function l1(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",p=jf({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),m=u.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:fs([i,p.pathname]),pathnameBase:p1(fs([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=fs([i,p.pathnameBase]))}return o}function jf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=u1(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,f,p)=>{let{paramName:m,isOptional:y}=f;if(m==="*"){let A=l[p]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const S=l[p];return y&&!S?d[m]=void 0:d[m]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function u1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),RE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function c1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return RE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function d1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ao(t):t;return{pathname:n?n.startsWith("/")?n:h1(n,e):e,search:m1(r),hash:g1(s)}}function h1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function yh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function am(t,e){let n=f1(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lm(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ao(t):(s=qa({},t),$e(!s.pathname||!s.pathname.includes("?"),yh("?","pathname","search",s)),$e(!s.pathname||!s.pathname.includes("#"),yh("#","pathname","hash",s)),$e(!s.search||!s.search.includes("#"),yh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;s.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=d1(s,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const fs=t=>t.join("/").replace(/\/\/+/g,"/"),p1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,g1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function y1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jE=["post","put","patch","delete"];new Set(jE);const v1=["get",...jE];new Set(v1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wa.apply(this,arguments)}const Xc=R.createContext(null),DE=R.createContext(null),Or=R.createContext(null),Zc=R.createContext(null),Vr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),OE=R.createContext(null);function _1(t,e){let{relative:n}=e===void 0?{}:e;Co()||$e(!1);let{basename:r,navigator:s}=R.useContext(Or),{hash:i,pathname:o,search:l}=ed(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:fs([r,o])),s.createHref({pathname:u,search:l,hash:i})}function Co(){return R.useContext(Zc)!=null}function xn(){return Co()||$e(!1),R.useContext(Zc).location}function VE(t){R.useContext(Or).static||R.useLayoutEffect(t)}function Lr(){let{isDataRoute:t}=R.useContext(Vr);return t?P1():w1()}function w1(){Co()||$e(!1);let t=R.useContext(Xc),{basename:e,future:n,navigator:r}=R.useContext(Or),{matches:s}=R.useContext(Vr),{pathname:i}=xn(),o=JSON.stringify(am(s,n.v7_relativeSplatPath)),l=R.useRef(!1);return VE(()=>{l.current=!0}),R.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=lm(d,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:fs([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,i,t])}function fi(){let{matches:t}=R.useContext(Vr),e=t[t.length-1];return e?e.params:{}}function ed(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Or),{matches:s}=R.useContext(Vr),{pathname:i}=xn(),o=JSON.stringify(am(s,r.v7_relativeSplatPath));return R.useMemo(()=>lm(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function x1(t,e){return E1(t,e)}function E1(t,e,n,r){Co()||$e(!1);let{navigator:s}=R.useContext(Or),{matches:i}=R.useContext(Vr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=xn(),f;if(e){var p;let C=typeof e=="string"?Ao(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||$e(!1),f=C}else f=d;let m=f.pathname||"/",y=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=JA(t,{pathname:y}),A=A1(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:fs([u,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:fs([u,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return e&&A?R.createElement(Zc.Provider,{value:{location:Wa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:rs.Pop}},A):A}function T1(){let t=k1(),e=y1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:s},n):null,null)}const I1=R.createElement(T1,null);class S1 extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(Vr.Provider,{value:this.props.routeContext},R.createElement(OE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N1(t){let{routeContext:e,match:n,children:r}=t,s=R.useContext(Xc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Vr.Provider,{value:e},r)}function A1(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||$e(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=f),p.route.id){let{loaderData:m,errors:y}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||S){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let y,S=!1,A=null,C=null;n&&(y=l&&p.route.id?l[p.route.id]:void 0,A=p.route.errorElement||I1,u&&(d<0&&m===0?(j1("route-fallback"),S=!0,C=null):d===m&&(S=!0,C=p.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,m+1)),w=()=>{let E;return y?E=A:S?E=C:p.route.Component?E=R.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=f,R.createElement(N1,{match:p,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?R.createElement(S1,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:w(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):w()},null)}var LE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(LE||{}),ME=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ME||{});function C1(t){let e=R.useContext(Xc);return e||$e(!1),e}function b1(t){let e=R.useContext(DE);return e||$e(!1),e}function R1(t){let e=R.useContext(Vr);return e||$e(!1),e}function UE(t){let e=R1(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function k1(){var t;let e=R.useContext(OE),n=b1(),r=UE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function P1(){let{router:t}=C1(LE.UseNavigateStable),e=UE(ME.UseNavigateStable),n=R.useRef(!1);return VE(()=>{n.current=!0}),R.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Wa({fromRouteId:e},i)))},[t,e])}const Ev={};function j1(t,e,n){Ev[t]||(Ev[t]=!0)}function D1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Yn(t){let{to:e,replace:n,state:r,relative:s}=t;Co()||$e(!1);let{future:i,static:o}=R.useContext(Or),{matches:l}=R.useContext(Vr),{pathname:u}=xn(),d=Lr(),f=lm(e,am(l,i.v7_relativeSplatPath),u,s==="path"),p=JSON.stringify(f);return R.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:s}),[d,p,s,n,r]),null}function Ee(t){$e(!1)}function O1(t){let{basename:e="/",children:n=null,location:r,navigationType:s=rs.Pop,navigator:i,static:o=!1,future:l}=t;Co()&&$e(!1);let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:i,static:o,future:Wa({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=Ao(r));let{pathname:f="/",search:p="",hash:m="",state:y=null,key:S="default"}=r,A=R.useMemo(()=>{let C=mo(f,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:y,key:S},navigationType:s}},[u,f,p,m,y,S,s]);return A==null?null:R.createElement(Or.Provider,{value:d},R.createElement(Zc.Provider,{children:n,value:A}))}function V1(t){let{children:e,location:n}=t;return x1(Df(e),n)}new Promise(()=>{});function Df(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,s)=>{if(!R.isValidElement(r))return;let i=[...e,s];if(r.type===R.Fragment){n.push.apply(n,Df(r.props.children,i));return}r.type!==Ee&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Df(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hc(){return hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hc.apply(this,arguments)}function FE(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function L1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function M1(t,e){return t.button===0&&(!e||e==="_self")&&!L1(t)}function Of(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function U1(t,e){let n=Of(t);return e&&e.forEach((r,s)=>{n.has(s)||e.getAll(s).forEach(i=>{n.append(s,i)})}),n}const F1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],B1="6";try{window.__reactRouterVersion=B1}catch{}const z1=R.createContext({isTransitioning:!1}),q1="startTransition",Tv=VS[q1];function W1(t){let{basename:e,children:n,future:r,window:s}=t,i=R.useRef();i.current==null&&(i.current=KA({window:s,v5Compat:!0}));let o=i.current,[l,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=R.useCallback(p=>{d&&Tv?Tv(()=>u(p)):u(p)},[u,d]);return R.useLayoutEffect(()=>o.listen(f),[o,f]),R.useEffect(()=>D1(r),[r]),R.createElement(O1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const H1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=R.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:d,preventScrollReset:f,viewTransition:p}=e,m=FE(e,F1),{basename:y}=R.useContext(Or),S,A=!1;if(typeof d=="string"&&G1.test(d)&&(S=d,H1))try{let E=new URL(window.location.href),P=d.startsWith("//")?new URL(E.protocol+d):new URL(d),O=mo(P.pathname,y);P.origin===E.origin&&O!=null?d=O+P.search+P.hash:A=!0}catch{}let C=_1(d,{relative:s}),_=Q1(d,{replace:o,state:l,target:u,preventScrollReset:f,relative:s,viewTransition:p});function w(E){r&&r(E),E.defaultPrevented||_(E)}return R.createElement("a",hc({},m,{href:S||C,onClick:A||i?r:w,ref:n,target:u}))}),fu=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:d,children:f}=e,p=FE(e,$1),m=ed(u,{relative:p.relative}),y=xn(),S=R.useContext(DE),{navigator:A,basename:C}=R.useContext(Or),_=S!=null&&J1(m)&&d===!0,w=A.encodeLocation?A.encodeLocation(m).pathname:m.pathname,E=y.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;s||(E=E.toLowerCase(),P=P?P.toLowerCase():null,w=w.toLowerCase()),P&&C&&(P=mo(P,C)||P);const O=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let M=E===w||!o&&E.startsWith(w)&&E.charAt(O)==="/",I=P!=null&&(P===w||!o&&P.startsWith(w)&&P.charAt(w.length)==="/"),v={isActive:M,isPending:I,isTransitioning:_},T=M?r:void 0,N;typeof i=="function"?N=i(v):N=[i,M?"active":null,I?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(v):l;return R.createElement(fe,hc({},p,{"aria-current":T,className:N,ref:n,style:k,to:u,viewTransition:d}),typeof f=="function"?f(v):f)});var Vf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vf||(Vf={}));var Iv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Iv||(Iv={}));function K1(t){let e=R.useContext(Xc);return e||$e(!1),e}function Q1(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=Lr(),d=xn(),f=ed(t,{relative:o});return R.useCallback(p=>{if(M1(p,n)){p.preventDefault();let m=r!==void 0?r:dc(d)===dc(f);u(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[d,u,f,r,s,n,t,i,o,l])}function Y1(t){let e=R.useRef(Of(t)),n=R.useRef(!1),r=xn(),s=R.useMemo(()=>U1(r.search,n.current?null:e.current),[r.search]),i=Lr(),o=R.useCallback((l,u)=>{const d=Of(typeof l=="function"?l(s):l);n.current=!0,i("?"+d,u)},[i,s]);return[s,o]}function J1(t,e){e===void 0&&(e={});let n=R.useContext(z1);n==null&&$e(!1);let{basename:r}=K1(Vf.useViewTransitionState),s=ed(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=mo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=mo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return jf(s.pathname,o)!=null||jf(s.pathname,i)!=null}const X1=()=>{};var Sv={};/**
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
 */const $E=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Z1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},BE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|d>>6,y=d&63;u||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($E(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Z1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new eC;const m=i<<2|l>>4;if(r.push(m),d!==64){const y=l<<4&240|d>>2;if(r.push(y),p!==64){const S=d<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tC=function(t){const e=$E(t);return BE.encodeByteArray(e,!0)},fc=function(t){return tC(t).replace(/\./g,"")},zE=function(t){try{return BE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rC=()=>nC().__FIREBASE_DEFAULTS__,sC=()=>{if(typeof process>"u"||typeof Sv>"u")return;const t=Sv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zE(t[1]);return e&&JSON.parse(e)},td=()=>{try{return X1()||rC()||sC()||iC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qE=t=>{var e,n;return(n=(e=td())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},WE=t=>{const e=qE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HE=()=>{var t;return(t=td())==null?void 0:t.config},GE=t=>{var e;return(e=td())==null?void 0:e[`_${t}`]};/**
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
 */class oC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function um(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function aC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[fc(JSON.stringify(n)),fc(JSON.stringify(o)),""].join(".")}const wa={};function lC(){const t={prod:[],emulator:[]};for(const e of Object.keys(wa))wa[e]?t.emulator.push(e):t.prod.push(e);return t}function uC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Nv=!1;function cm(t,e){if(typeof window>"u"||typeof document>"u"||!pi(window.location.host)||wa[t]===e||wa[t]||Nv)return;wa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=lC().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Nv=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=uC(r),y=n("text"),S=document.getElementById(y)||document.createElement("span"),A=n("learnmore"),C=document.getElementById(A)||document.createElement("a"),_=n("preprendIcon"),w=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const E=m.element;l(E),f(C,A);const P=d();u(w,_),E.append(w,S,C,P),document.body.appendChild(E)}i?(S.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function dC(){var e;const t=(e=td())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mC(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gC(){return!dC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KE(){try{return typeof indexedDB=="object"}catch{return!1}}function QE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function yC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vC="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vC,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_C(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Un(s,l,r)}}function _C(t,e){return t.replace(wC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wC=/\{\$([^}]+)}/g;function xC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Av(i)&&Av(o)){if(!ri(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Av(t){return t!==null&&typeof t=="object"}/**
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
 */function cl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function aa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function EC(t,e){const n=new TC(t,e);return n.subscribe.bind(n)}class TC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vh),s.error===void 0&&(s.error=vh),s.complete===void 0&&(s.complete=vh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vh(){}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bs="[DEFAULT]";/**
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
 */class SC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AC(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NC(t){return t===Bs?void 0:t}function AC(t){return t.instantiationMode==="EAGER"}/**
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
 */class CC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const bC={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},RC=he.INFO,kC={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},PC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dm{constructor(e){this.name=e,this._logLevel=RC,this._logHandler=PC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const jC=(t,e)=>e.some(n=>t instanceof n);let Cv,bv;function DC(){return Cv||(Cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OC(){return bv||(bv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const YE=new WeakMap,Lf=new WeakMap,JE=new WeakMap,_h=new WeakMap,hm=new WeakMap;function VC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&YE.set(n,t)}).catch(()=>{}),hm.set(e,t),e}function LC(t){if(Lf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lf.set(t,e)}let Mf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||JE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MC(t){Mf=t(Mf)}function UC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wh(this),e,...n);return JE.set(r,e.sort?e.sort():[e]),Er(r)}:OC().includes(t)?function(...e){return t.apply(wh(this),e),Er(YE.get(this))}:function(...e){return Er(t.apply(wh(this),e))}}function FC(t){return typeof t=="function"?UC(t):(t instanceof IDBTransaction&&LC(t),jC(t,DC())?new Proxy(t,Mf):t)}function Er(t){if(t instanceof IDBRequest)return VC(t);if(_h.has(t))return _h.get(t);const e=FC(t);return e!==t&&(_h.set(t,e),hm.set(e,t)),e}const wh=t=>hm.get(t);function nd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function xh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Er(n).then(()=>{})}const $C=["get","getKey","getAll","getAllKeys","count"],BC=["put","add","delete","clear"],Eh=new Map;function Rv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eh.get(e))return Eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=BC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$C.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return Eh.set(e,i),i}MC(t=>({...t,get:(e,n,r)=>Rv(e,n)||t.get(e,n,r),has:(e,n)=>!!Rv(e,n)||t.has(e,n)}));/**
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
 */class zC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uf="@firebase/app",kv="0.14.1";/**
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
 */const br=new dm("@firebase/app"),WC="@firebase/app-compat",HC="@firebase/analytics-compat",GC="@firebase/analytics",KC="@firebase/app-check-compat",QC="@firebase/app-check",YC="@firebase/auth",JC="@firebase/auth-compat",XC="@firebase/database",ZC="@firebase/data-connect",eb="@firebase/database-compat",tb="@firebase/functions",nb="@firebase/functions-compat",rb="@firebase/installations",sb="@firebase/installations-compat",ib="@firebase/messaging",ob="@firebase/messaging-compat",ab="@firebase/performance",lb="@firebase/performance-compat",ub="@firebase/remote-config",cb="@firebase/remote-config-compat",db="@firebase/storage",hb="@firebase/storage-compat",fb="@firebase/firestore",pb="@firebase/ai",mb="@firebase/firestore-compat",gb="firebase",yb="12.1.0";/**
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
 */const Ff="[DEFAULT]",vb={[Uf]:"fire-core",[WC]:"fire-core-compat",[GC]:"fire-analytics",[HC]:"fire-analytics-compat",[QC]:"fire-app-check",[KC]:"fire-app-check-compat",[YC]:"fire-auth",[JC]:"fire-auth-compat",[XC]:"fire-rtdb",[ZC]:"fire-data-connect",[eb]:"fire-rtdb-compat",[tb]:"fire-fn",[nb]:"fire-fn-compat",[rb]:"fire-iid",[sb]:"fire-iid-compat",[ib]:"fire-fcm",[ob]:"fire-fcm-compat",[ab]:"fire-perf",[lb]:"fire-perf-compat",[ub]:"fire-rc",[cb]:"fire-rc-compat",[db]:"fire-gcs",[hb]:"fire-gcs-compat",[fb]:"fire-fst",[mb]:"fire-fst-compat",[pb]:"fire-vertex","fire-js":"fire-js",[gb]:"fire-js-all"};/**
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
 */const Ha=new Map,_b=new Map,$f=new Map;function Pv(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if($f.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;$f.set(e,t);for(const n of Ha.values())Pv(n,t);for(const n of _b.values())Pv(n,t);return!0}function gi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ps=new mi("app","Firebase",wb);/**
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
 */class xb{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=yb;function XE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ff,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ps.create("bad-app-name",{appName:String(s)});if(n||(n=HE()),!n)throw ps.create("no-options");const i=Ha.get(s);if(i){if(ri(n,i.options)&&ri(r,i.config))return i;throw ps.create("duplicate-app",{appName:s})}const o=new CC(s);for(const u of $f.values())o.addComponent(u);const l=new xb(n,r,o);return Ha.set(s,l),l}function dl(t=Ff){const e=Ha.get(t);if(!e&&t===Ff&&HE())return XE();if(!e)throw ps.create("no-app",{appName:t});return e}function Eb(){return Array.from(Ha.values())}function Yt(t,e,n){let r=vb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(o.join(" "));return}Ln(new _n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Tb="firebase-heartbeat-database",Ib=1,Ga="firebase-heartbeat-store";let Th=null;function ZE(){return Th||(Th=nd(Tb,Ib,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ga)}catch(n){console.warn(n)}}}}).catch(t=>{throw ps.create("idb-open",{originalErrorMessage:t.message})})),Th}async function Sb(t){try{const n=(await ZE()).transaction(Ga),r=await n.objectStore(Ga).get(e0(t));return await n.done,r}catch(e){if(e instanceof Un)br.warn(e.message);else{const n=ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function jv(t,e){try{const r=(await ZE()).transaction(Ga,"readwrite");await r.objectStore(Ga).put(e,e0(t)),await r.done}catch(n){if(n instanceof Un)br.warn(n.message);else{const r=ps.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function e0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nb=1024,Ab=30;class Cb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ab){const o=kb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dv(),{heartbeatsToSend:r,unsentEntries:s}=bb(this._heartbeatsCache.heartbeats),i=fc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return br.warn(n),""}}}function Dv(){return new Date().toISOString().substring(0,10)}function bb(t,e=Nb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ov(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ov(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KE()?QE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ov(t){return fc(JSON.stringify({version:2,heartbeats:t})).length}function kb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Pb(t){Ln(new _n("platform-logger",e=>new zC(e),"PRIVATE")),Ln(new _n("heartbeat",e=>new Cb(e),"PRIVATE")),Yt(Uf,kv,t),Yt(Uf,kv,"esm2020"),Yt("fire-js","")}Pb("");function t0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jb=t0,n0=new mi("auth","Firebase",t0());/**
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
 */const pc=new dm("@firebase/auth");function Db(t,...e){pc.logLevel<=he.WARN&&pc.warn(`Auth (${bo}): ${t}`,...e)}function Pu(t,...e){pc.logLevel<=he.ERROR&&pc.error(`Auth (${bo}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw pm(t,...e)}function jn(t,...e){return pm(t,...e)}function fm(t,e,n){const r={...jb(),[e]:n};return new mi("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return fm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ob(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(t,"argument-error"),fm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return n0.create(t,...e)}function Z(t,e,...n){if(!t)throw pm(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pu(e),new Error(e)}function Rr(t,e){t||_r(e)}/**
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
 */function Bf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Vb(){return Vv()==="http:"||Vv()==="https:"}function Vv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Lb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vb()||fC()||"connection"in navigator)?navigator.onLine:!0}function Mb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rr(n>e,"Short delay should be less than long delay!"),this.isMobile=cC()||pC()}get(){return Lb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mm(t,e){Rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class r0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ub={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$b=new hl(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fn(t,e,n,r,s={}){return s0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=cl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return hC()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&pi(t.emulatorConfig.host)&&(d.credentials="include"),r0.fetch()(await i0(t,t.config.apiHost,n,l),d)})}async function s0(t,e,n){t._canInitEmulator=!1;const r={...Ub,...e};try{const s=new zb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pu(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fm(t,f,d);ln(t,f)}}catch(s){if(s instanceof Un)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function fl(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function i0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?mm(t.config,s):`${t.config.apiScheme}://${s}`;return Fb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Bb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),$b.get())})}}function pu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=jn(t,e,r);return s.customData._tokenResponse=n,s}function Lv(t){return t!==void 0&&t.enterprise!==void 0}class qb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Wb(t,e){return Fn(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
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
 */async function Hb(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function mc(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gb(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),s=gm(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xa(Ih(s.auth_time)),issuedAtTime:xa(Ih(s.iat)),expirationTime:xa(Ih(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ih(t){return Number(t)*1e3}function gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const s=zE(n);return s?JSON.parse(s):(Pu("Failed to decode base64 JWT payload"),null)}catch(s){return Pu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mv(t){const e=gm(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&Kb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Qb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xa(this.lastLoginAt),this.creationTime=xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await go(t,mc(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?o0(s.providerUserInfo):[],o=Jb(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Yb(t){const e=Ie(t);await gc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function o0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Xb(t,e){const n=await s0(t,{},async()=>{const r=cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await i0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&pi(t.emulatorConfig.host)&&(u.credentials="include"),r0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zb(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Mv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ro;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function Wr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Qb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await go(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gb(this,e)}reload(){return Yb(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await go(this,Hb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:S,stsTokenManager:A}=n;Z(p&&A,e,"internal-error");const C=ro.fromJSON(this.name,A);Z(typeof p=="string",e,"internal-error"),Wr(r,e.name),Wr(s,e.name),Z(typeof m=="boolean",e,"internal-error"),Z(typeof y=="boolean",e,"internal-error"),Wr(i,e.name),Wr(o,e.name),Wr(l,e.name),Wr(u,e.name),Wr(d,e.name),Wr(f,e.name);const _=new Rn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:f});return S&&Array.isArray(S)&&(_.providerData=S.map(w=>({...w}))),u&&(_._redirectEventId=u),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ro;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?o0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ro;l.updateFromIdToken(r);const u=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Uv=new Map;function wr(t){Rr(t instanceof Function,"Expected a class definition");let e=Uv.get(t);return e?(Rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uv.set(t,e),e)}/**
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
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a0.type="NONE";const Fv=a0;/**
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
 */function ju(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ju(this.userKey,s.apiKey,i),this.fullPersistenceKey=ju("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mc(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new so(wr(Fv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||wr(Fv);const o=ju(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){let p;if(typeof f=="string"){const m=await mc(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Rn._fromGetAccountInfoResponse(e,m,f)}else p=Rn._fromJSON(e,f);d!==i&&(l=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new so(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new so(i,e,r))}}/**
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
 */function $v(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f0(e))return"Blackberry";if(p0(e))return"Webos";if(u0(e))return"Safari";if((e.includes("chrome/")||c0(e))&&!e.includes("edge/"))return"Chrome";if(h0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l0(t=kt()){return/firefox\//i.test(t)}function u0(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c0(t=kt()){return/crios\//i.test(t)}function d0(t=kt()){return/iemobile/i.test(t)}function h0(t=kt()){return/android/i.test(t)}function f0(t=kt()){return/blackberry/i.test(t)}function p0(t=kt()){return/webos/i.test(t)}function ym(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eR(t=kt()){var e;return ym(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tR(){return mC()&&document.documentMode===10}function m0(t=kt()){return ym(t)||h0(t)||p0(t)||f0(t)||/windows phone/i.test(t)||d0(t)}/**
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
 */function g0(t,e=[]){let n;switch(t){case"Browser":n=$v(kt());break;case"Worker":n=`${$v(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bo}/${r}`}/**
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
 */class nR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rR(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
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
 */const sR=6;class iR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class oR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bv(this),this.idTokenSubscription=new Bv(this),this.beforeStateQueue=new nR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=n0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mc(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(Tr(this));const n=e?Ie(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rR(this),n=new iR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Zb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Db(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rr(t){return Ie(t)}class Bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=EC(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aR(t){rd=t}function y0(t){return rd.loadJS(t)}function lR(){return rd.recaptchaEnterpriseScript}function uR(){return rd.gapiScript}function cR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class dR{constructor(){this.enterprise=new hR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fR="recaptcha-enterprise",v0="NO_RECAPTCHA";class pR{constructor(e){this.type=fR,this.auth=rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Wb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new qb(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Lv(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(v0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Lv(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lR();u.length!==0&&(u+=l),y0(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function zv(t,e,n,r=!1,s=!1){const i=new pR(t);let o;if(s)o=v0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function yc(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await zv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await zv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function mR(t,e){const n=gi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ri(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function gR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yR(t,e,n){const r=rr(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_0(e),{host:o,port:l}=vR(e),u=l===null?"":`:${l}`,d={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(ri(d,r.config.emulator)&&ri(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,pi(o)?(um(`${i}//${o}${u}`),cm("Auth",!0)):_R()}function _0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vR(t){const e=_0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qv(o)}}}function qv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _R(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
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
 */async function w0(t,e){return Fn(t,"POST","/v1/accounts:resetPassword",nr(t,e))}async function wR(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function xR(t,e){return fl(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function ER(t,e){return Fn(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function TR(t,e){return ER(t,e)}/**
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
 */async function IR(t,e){return fl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function SR(t,e){return fl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
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
 */class Ka extends vm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yc(e,n,"signInWithPassword",xR);case"emailLink":return IR(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yc(e,r,"signUpPassword",wR);case"emailLink":return SR(e,{idToken:n,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function io(t,e){return fl(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
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
 */const NR="http://localhost";class si extends vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new si(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,io(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:NR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cl(n)}return e}}/**
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
 */function AR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CR(t){const e=oa(aa(t)).link,n=e?oa(aa(e)).deep_link_id:null,r=oa(aa(t)).deep_link_id;return(r?oa(aa(r)).link:null)||r||n||e||t}class _m{constructor(e){const n=oa(aa(e)),r=n.apiKey??null,s=n.oobCode??null,i=AR(n.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=CR(e);try{return new _m(n)}catch{return null}}}/**
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
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,n){return Ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_m.parseLink(n);return Z(r,"argument-error"),Ka._fromEmailAndCode(e,r.code,r.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pl extends wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jr extends pl{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
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
 */class pn extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class Xr extends pl{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
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
 */class Zr extends pl{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
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
 */async function bR(t,e){return fl(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=Wv(r);return new ii({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wv(r);return new ii({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vc extends Un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vc(e,n,r,s)}}function x0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vc._fromErrorAndOperation(t,i,e,r):i})}async function RR(t,e,n=!1){const r=await go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
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
 */async function kR(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await go(t,x0(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=gm(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),ii._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
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
 */async function E0(t,e,n=!1){if(zt(t.app))return Promise.reject(Tr(t));const r="signIn",s=await x0(t,r,e),i=await ii._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PR(t,e){return E0(rr(t),e)}/**
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
 */class xm{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Em._fromServerResponse(e,n):"totpInfo"in n?Tm._fromServerResponse(e,n):ln(e,"internal-error")}}class Em extends xm{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Em(n)}}class Tm extends xm{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Tm(n)}}/**
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
 */async function Im(t){const e=rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jR(t,e,n){const r=rr(t);await yc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TR)}async function DR(t,e,n){await w0(Ie(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Im(t),r})}async function OR(t,e){const n=Ie(t),r=await w0(n,{oobCode:e}),s=r.requestType;switch(Z(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Z(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Z(r.mfaInfo,n,"internal-error");default:Z(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=xm._fromServerResponse(rr(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function VR(t,e){const{data:n}=await OR(Ie(t),e);return n.email}async function LR(t,e,n){if(zt(t.app))return Promise.reject(Tr(t));const r=rr(t),o=await yc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Im(t),u}),l=await ii._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function T0(t,e,n){return zt(t.app)?Promise.reject(Tr(t)):PR(Ie(t),Ro.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Im(t),r})}/**
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
 */async function MR(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function I0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ie(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await go(r,MR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function UR(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function FR(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function sr(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function qf(t){return Ie(t).signOut()}const _c="__sak";/**
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
 */class S0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $R=1e3,BR=10;class N0 extends S0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N0.type="LOCAL";const zR=N0;/**
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
 */class A0 extends S0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A0.type="SESSION";const C0=A0;/**
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
 */function qR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await qR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sd.receivers=[];/**
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
 */class WR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=Sm("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jn(){return window}function HR(t){Jn().location.href=t}/**
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
 */function b0(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function GR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function QR(){return b0()?self:null}/**
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
 */const R0="firebaseLocalStorageDb",YR=1,wc="firebaseLocalStorage",k0="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function id(t,e){return t.transaction([wc],e?"readwrite":"readonly").objectStore(wc)}function JR(){const t=indexedDB.deleteDatabase(R0);return new ml(t).toPromise()}function Wf(){const t=indexedDB.open(R0,YR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wc,{keyPath:k0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wc)?e(r):(r.close(),await JR(),e(await Wf()))})})}async function Hv(t,e,n){const r=id(t,!0).put({[k0]:e,value:n});return new ml(r).toPromise()}async function XR(t,e){const n=id(t,!1).get(e),r=await new ml(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=id(t,!0).delete(e);return new ml(n).toPromise()}const ZR=800,ek=3;class P0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ek)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sd._getInstance(QR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await GR(),!this.activeServiceWorker)return;this.sender=new WR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await Hv(e,_c,"1"),await Gv(e,_c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=id(s,!1).getAll();return new ml(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P0.type="LOCAL";const tk=P0;new hl(3e4,6e4);/**
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
 */function j0(t,e){return e?wr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nm extends vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nk(t){return E0(t.auth,new Nm(t),t.bypassAuthState)}function rk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),kR(n,new Nm(t),t.bypassAuthState)}async function sk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),RR(n,new Nm(t),t.bypassAuthState)}/**
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
 */class D0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nk;case"linkViaPopup":case"linkViaRedirect":return sk;case"reauthViaPopup":case"reauthViaRedirect":return rk;default:ln(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ik=new hl(2e3,1e4);async function Am(t,e,n){if(zt(t.app))return Promise.reject(jn(t,"operation-not-supported-in-this-environment"));const r=rr(t);Ob(t,e,wm);const s=j0(r,n);return new Hs(r,"signInViaPopup",e,s).executeNotNull()}class Hs extends D0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=Sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ik.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const ok="pendingRedirect",Du=new Map;class ak extends D0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Du.get(this.auth._key());if(!e){try{const r=await lk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Du.set(this.auth._key(),e)}return this.bypassAuthState||Du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lk(t,e){const n=dk(e),r=ck(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uk(t,e){Du.set(t._key(),e)}function ck(t){return wr(t._redirectPersistence)}function dk(t){return ju(ok,t.config.apiKey,t.name)}async function hk(t,e,n=!1){if(zt(t.app))return Promise.reject(Tr(t));const r=rr(t),s=j0(r,e),o=await new ak(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fk=10*60*1e3;class pk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kv(e))}saveEventToCache(e){this.cachedEventUids.add(Kv(e)),this.lastProcessedEventTime=Date.now()}}function Kv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(t);default:return!1}}/**
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
 */async function gk(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vk=/^https?/;async function _k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gk(t);for(const n of e)try{if(wk(n))return}catch{}ln(t,"unauthorized-domain")}function wk(t){const e=Bf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vk.test(n))return!1;if(yk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xk=new hl(3e4,6e4);function Qv(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ek(t){return new Promise((e,n)=>{var s,i,o;function r(){Qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qv(),n(jn(t,"network-request-failed"))},timeout:xk.get()})}if((i=(s=Jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Jn().gapi)!=null&&o.load)r();else{const l=cR("iframefcb");return Jn()[l]=()=>{gapi.load?r():n(jn(t,"network-request-failed"))},y0(`${uR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ou=null,e})}let Ou=null;function Tk(t){return Ou=Ou||Ek(t),Ou}/**
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
 */const Ik=new hl(5e3,15e3),Sk="__/auth/iframe",Nk="emulator/auth/iframe",Ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bk(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mm(e,Nk):`https://${t.config.authDomain}/${Sk}`,r={apiKey:e.apiKey,appName:t.name,v:bo},s=Ck.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cl(r).slice(1)}`}async function Rk(t){const e=await Tk(t),n=Jn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:bk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ak,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),l=Jn().setTimeout(()=>{i(o)},Ik.get());function u(){Jn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pk=500,jk=600,Dk="_blank",Ok="http://localhost";class Yv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vk(t,e,n,r=Pk,s=jk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...kk,width:r.toString(),height:s.toString(),top:i,left:o},d=kt().toLowerCase();n&&(l=c0(d)?Dk:n),l0(d)&&(e=e||Ok,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[y,S])=>`${m}${y}=${S},`,"");if(eR(d)&&l!=="_self")return Lk(e||"",l),new Yv(null);const p=window.open(e||"",l,f);Z(p,t,"popup-blocked");try{p.focus()}catch{}return new Yv(p)}function Lk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mk="__/auth/handler",Uk="emulator/auth/handler",Fk=encodeURIComponent("fac");async function Jv(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bo,eventId:s};if(e instanceof wm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof pl){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${Fk}=${encodeURIComponent(u)}`:"";return`${$k(t)}?${cl(l).slice(1)}${d}`}function $k({config:t}){return t.emulator?mm(t,Uk):`https://${t.authDomain}/${Mk}`}/**
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
 */const Sh="webStorageSupport";class Bk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C0,this._completeRedirectFn=hk,this._overrideRedirectResult=uk}async _openPopup(e,n,r,s){var o;Rr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Jv(e,n,r,Bf(),s);return Vk(e,i,Sm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jv(e,n,r,Bf(),s);return HR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rk(e),r=new pk(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sh,{type:Sh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Sh];i!==void 0&&n(!!i),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m0()||u0()||ym()}}const zk=Bk;var Xv="@firebase/auth",Zv="1.11.0";/**
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
 */class qk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hk(t){Ln(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g0(t)},d=new oR(r,s,i,u);return gR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new _n("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(r=>new qk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Xv,Zv,Wk(t)),Yt(Xv,Zv,"esm2020")}/**
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
 */const Gk=5*60,Kk=GE("authIdTokenMaxAge")||Gk;let e_=null;const Qk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kk)return;const s=n==null?void 0:n.token;e_!==s&&(e_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ge(t=dl()){const e=gi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mR(t,{popupRedirectResolver:zk,persistence:[tk,zR,C0]}),r=GE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Qk(i.toString());FR(n,o,()=>o(n.currentUser)),UR(n,l=>o(l))}}const s=qE("auth");return s&&yR(n,`http://${s}`),n}function Yk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=jn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Yk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hk("Browser");var t_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,V0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function T(){}T.prototype=v.prototype,I.D=v.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(N,k,j){for(var b=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)b[Ke-2]=arguments[Ke];return v.prototype[k].apply(N,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,T){T||(T=0);var N=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)N[k]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(k=0;16>k;++k)N[k]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=I.g[0],T=I.g[1],k=I.g[2];var j=I.g[3],b=v+(j^T&(k^j))+N[0]+3614090360&4294967295;v=T+(b<<7&4294967295|b>>>25),b=j+(k^v&(T^k))+N[1]+3905402710&4294967295,j=v+(b<<12&4294967295|b>>>20),b=k+(T^j&(v^T))+N[2]+606105819&4294967295,k=j+(b<<17&4294967295|b>>>15),b=T+(v^k&(j^v))+N[3]+3250441966&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(j^T&(k^j))+N[4]+4118548399&4294967295,v=T+(b<<7&4294967295|b>>>25),b=j+(k^v&(T^k))+N[5]+1200080426&4294967295,j=v+(b<<12&4294967295|b>>>20),b=k+(T^j&(v^T))+N[6]+2821735955&4294967295,k=j+(b<<17&4294967295|b>>>15),b=T+(v^k&(j^v))+N[7]+4249261313&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(j^T&(k^j))+N[8]+1770035416&4294967295,v=T+(b<<7&4294967295|b>>>25),b=j+(k^v&(T^k))+N[9]+2336552879&4294967295,j=v+(b<<12&4294967295|b>>>20),b=k+(T^j&(v^T))+N[10]+4294925233&4294967295,k=j+(b<<17&4294967295|b>>>15),b=T+(v^k&(j^v))+N[11]+2304563134&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(j^T&(k^j))+N[12]+1804603682&4294967295,v=T+(b<<7&4294967295|b>>>25),b=j+(k^v&(T^k))+N[13]+4254626195&4294967295,j=v+(b<<12&4294967295|b>>>20),b=k+(T^j&(v^T))+N[14]+2792965006&4294967295,k=j+(b<<17&4294967295|b>>>15),b=T+(v^k&(j^v))+N[15]+1236535329&4294967295,T=k+(b<<22&4294967295|b>>>10),b=v+(k^j&(T^k))+N[1]+4129170786&4294967295,v=T+(b<<5&4294967295|b>>>27),b=j+(T^k&(v^T))+N[6]+3225465664&4294967295,j=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(j^v))+N[11]+643717713&4294967295,k=j+(b<<14&4294967295|b>>>18),b=T+(j^v&(k^j))+N[0]+3921069994&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(k^j&(T^k))+N[5]+3593408605&4294967295,v=T+(b<<5&4294967295|b>>>27),b=j+(T^k&(v^T))+N[10]+38016083&4294967295,j=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(j^v))+N[15]+3634488961&4294967295,k=j+(b<<14&4294967295|b>>>18),b=T+(j^v&(k^j))+N[4]+3889429448&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(k^j&(T^k))+N[9]+568446438&4294967295,v=T+(b<<5&4294967295|b>>>27),b=j+(T^k&(v^T))+N[14]+3275163606&4294967295,j=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(j^v))+N[3]+4107603335&4294967295,k=j+(b<<14&4294967295|b>>>18),b=T+(j^v&(k^j))+N[8]+1163531501&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(k^j&(T^k))+N[13]+2850285829&4294967295,v=T+(b<<5&4294967295|b>>>27),b=j+(T^k&(v^T))+N[2]+4243563512&4294967295,j=v+(b<<9&4294967295|b>>>23),b=k+(v^T&(j^v))+N[7]+1735328473&4294967295,k=j+(b<<14&4294967295|b>>>18),b=T+(j^v&(k^j))+N[12]+2368359562&4294967295,T=k+(b<<20&4294967295|b>>>12),b=v+(T^k^j)+N[5]+4294588738&4294967295,v=T+(b<<4&4294967295|b>>>28),b=j+(v^T^k)+N[8]+2272392833&4294967295,j=v+(b<<11&4294967295|b>>>21),b=k+(j^v^T)+N[11]+1839030562&4294967295,k=j+(b<<16&4294967295|b>>>16),b=T+(k^j^v)+N[14]+4259657740&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(T^k^j)+N[1]+2763975236&4294967295,v=T+(b<<4&4294967295|b>>>28),b=j+(v^T^k)+N[4]+1272893353&4294967295,j=v+(b<<11&4294967295|b>>>21),b=k+(j^v^T)+N[7]+4139469664&4294967295,k=j+(b<<16&4294967295|b>>>16),b=T+(k^j^v)+N[10]+3200236656&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(T^k^j)+N[13]+681279174&4294967295,v=T+(b<<4&4294967295|b>>>28),b=j+(v^T^k)+N[0]+3936430074&4294967295,j=v+(b<<11&4294967295|b>>>21),b=k+(j^v^T)+N[3]+3572445317&4294967295,k=j+(b<<16&4294967295|b>>>16),b=T+(k^j^v)+N[6]+76029189&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(T^k^j)+N[9]+3654602809&4294967295,v=T+(b<<4&4294967295|b>>>28),b=j+(v^T^k)+N[12]+3873151461&4294967295,j=v+(b<<11&4294967295|b>>>21),b=k+(j^v^T)+N[15]+530742520&4294967295,k=j+(b<<16&4294967295|b>>>16),b=T+(k^j^v)+N[2]+3299628645&4294967295,T=k+(b<<23&4294967295|b>>>9),b=v+(k^(T|~j))+N[0]+4096336452&4294967295,v=T+(b<<6&4294967295|b>>>26),b=j+(T^(v|~k))+N[7]+1126891415&4294967295,j=v+(b<<10&4294967295|b>>>22),b=k+(v^(j|~T))+N[14]+2878612391&4294967295,k=j+(b<<15&4294967295|b>>>17),b=T+(j^(k|~v))+N[5]+4237533241&4294967295,T=k+(b<<21&4294967295|b>>>11),b=v+(k^(T|~j))+N[12]+1700485571&4294967295,v=T+(b<<6&4294967295|b>>>26),b=j+(T^(v|~k))+N[3]+2399980690&4294967295,j=v+(b<<10&4294967295|b>>>22),b=k+(v^(j|~T))+N[10]+4293915773&4294967295,k=j+(b<<15&4294967295|b>>>17),b=T+(j^(k|~v))+N[1]+2240044497&4294967295,T=k+(b<<21&4294967295|b>>>11),b=v+(k^(T|~j))+N[8]+1873313359&4294967295,v=T+(b<<6&4294967295|b>>>26),b=j+(T^(v|~k))+N[15]+4264355552&4294967295,j=v+(b<<10&4294967295|b>>>22),b=k+(v^(j|~T))+N[6]+2734768916&4294967295,k=j+(b<<15&4294967295|b>>>17),b=T+(j^(k|~v))+N[13]+1309151649&4294967295,T=k+(b<<21&4294967295|b>>>11),b=v+(k^(T|~j))+N[4]+4149444226&4294967295,v=T+(b<<6&4294967295|b>>>26),b=j+(T^(v|~k))+N[11]+3174756917&4294967295,j=v+(b<<10&4294967295|b>>>22),b=k+(v^(j|~T))+N[2]+718787259&4294967295,k=j+(b<<15&4294967295|b>>>17),b=T+(j^(k|~v))+N[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(k+(b<<21&4294967295|b>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+j&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var T=v-this.blockSize,N=this.B,k=this.h,j=0;j<v;){if(k==0)for(;j<=T;)s(this,I,j),j+=this.blockSize;if(typeof I=="string"){for(;j<v;)if(N[k++]=I.charCodeAt(j++),k==this.blockSize){s(this,N),k=0;break}}else for(;j<v;)if(N[k++]=I[j++],k==this.blockSize){s(this,N),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var T=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=T&255,T/=256;for(this.u(I),I=Array(16),v=T=0;4>v;++v)for(var N=0;32>N;N+=8)I[T++]=this.g[v]>>>N&255;return I};function i(I,v){var T=l;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=v(I)}function o(I,v){this.h=v;for(var T=[],N=!0,k=I.length-1;0<=k;k--){var j=I[k]|0;N&&j==v||(T[k]=j,N=!1)}this.g=T}var l={};function u(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return C(d(-I));for(var v=[],T=1,N=0;I>=T;N++)v[N]=I/T|0,T*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return C(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=d(Math.pow(v,8)),N=p,k=0;k<I.length;k+=8){var j=Math.min(8,I.length-k),b=parseInt(I.substring(k,k+j),v);8>j?(j=d(Math.pow(v,j)),N=N.j(j).add(d(b))):(N=N.j(T),N=N.add(d(b)))}return N}var p=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-C(this).m();for(var I=0,v=1,T=0;T<this.g.length;T++){var N=this.i(T);I+=(0<=N?N:4294967296+N)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(A(this))return"-"+C(this).toString(I);for(var v=d(Math.pow(I,6)),T=this,N="";;){var k=P(T,v).g;T=_(T,k.j(v));var j=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=k,S(T))return j+N;for(;6>j.length;)j="0"+j;N=j+N}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function A(I){return I.h==-1}t.l=function(I){return I=_(this,I),A(I)?-1:S(I)?0:1};function C(I){for(var v=I.g.length,T=[],N=0;N<v;N++)T[N]=~I.g[N];return new o(T,~I.h).add(m)}t.abs=function(){return A(this)?C(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],N=0,k=0;k<=v;k++){var j=N+(this.i(k)&65535)+(I.i(k)&65535),b=(j>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);N=b>>>16,j&=65535,b&=65535,T[k]=b<<16|j}return new o(T,T[T.length-1]&-2147483648?-1:0)};function _(I,v){return I.add(C(v))}t.j=function(I){if(S(this)||S(I))return p;if(A(this))return A(I)?C(this).j(C(I)):C(C(this).j(I));if(A(I))return C(this.j(C(I)));if(0>this.l(y)&&0>I.l(y))return d(this.m()*I.m());for(var v=this.g.length+I.g.length,T=[],N=0;N<2*v;N++)T[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<I.g.length;k++){var j=this.i(N)>>>16,b=this.i(N)&65535,Ke=I.i(k)>>>16,En=I.i(k)&65535;T[2*N+2*k]+=b*En,w(T,2*N+2*k),T[2*N+2*k+1]+=j*En,w(T,2*N+2*k+1),T[2*N+2*k+1]+=b*Ke,w(T,2*N+2*k+1),T[2*N+2*k+2]+=j*Ke,w(T,2*N+2*k+2)}for(N=0;N<v;N++)T[N]=T[2*N+1]<<16|T[2*N];for(N=v;N<2*v;N++)T[N]=0;return new o(T,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function E(I,v){this.g=I,this.h=v}function P(I,v){if(S(v))throw Error("division by zero");if(S(I))return new E(p,p);if(A(I))return v=P(C(I),v),new E(C(v.g),C(v.h));if(A(v))return v=P(I,C(v)),new E(C(v.g),v.h);if(30<I.g.length){if(A(I)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var T=m,N=v;0>=N.l(I);)T=O(T),N=O(N);var k=M(T,1),j=M(N,1);for(N=M(N,2),T=M(T,2);!S(N);){var b=j.add(N);0>=b.l(I)&&(k=k.add(T),j=b),N=M(N,1),T=M(T,1)}return v=_(I,k.j(v)),new E(k,v)}for(k=p;0<=I.l(v);){for(T=Math.max(1,Math.floor(I.m()/v.m())),N=Math.ceil(Math.log(T)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),j=d(T),b=j.j(v);A(b)||0<b.l(I);)T-=N,j=d(T),b=j.j(v);S(j)&&(j=m),k=k.add(j),I=_(I,b)}return new E(k,I)}t.A=function(I){return P(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],N=0;N<v;N++)T[N]=this.i(N)&I.i(N);return new o(T,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],N=0;N<v;N++)T[N]=this.i(N)|I.i(N);return new o(T,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],N=0;N<v;N++)T[N]=this.i(N)^I.i(N);return new o(T,this.h^I.h)};function O(I){for(var v=I.g.length+1,T=[],N=0;N<v;N++)T[N]=I.i(N)<<1|I.i(N-1)>>>31;return new o(T,I.h)}function M(I,v){var T=v>>5;v%=32;for(var N=I.g.length-T,k=[],j=0;j<N;j++)k[j]=0<v?I.i(j+T)>>>v|I.i(j+T+1)<<32-v:I.i(j+T);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,V0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,ms=o}).apply(typeof t_<"u"?t_:typeof self<"u"?self:typeof window<"u"?window:{});var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var L0,la,M0,Vu,Hf,U0,F0,$0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,g){return a==Array.prototype||a==Object.prototype||(a[h]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof mu=="object"&&mu];for(var h=0;h<a.length;++h){var g=a[h];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var g=r;a=a.split(".");for(var x=0;x<a.length-1;x++){var D=a[x];if(!(D in g))break e;g=g[D]}a=a[a.length-1],x=g[a],h=h(x),h!=x&&h!=null&&e(g,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var g=0,x=!1,D={next:function(){if(!x&&g<a.length){var V=g++;return{value:h(V,a[V]),done:!1}}return x=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,g){return a.call.apply(a.bind,arguments)}function p(a,h,g){if(!a)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,x),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(a,h){var g=Array.prototype.slice.call(arguments,1);return function(){var x=g.slice();return x.push.apply(x,arguments),a.apply(this,x)}}function S(a,h){function g(){}g.prototype=h.prototype,a.aa=h.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(x,D,V){for(var q=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)q[Ne-2]=arguments[Ne];return h.prototype[D].apply(x,q)}}function A(a){const h=a.length;if(0<h){const g=Array(h);for(let x=0;x<h;x++)g[x]=a[x];return g}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const x=arguments[g];if(u(x)){const D=a.length||0,V=x.length||0;a.length=D+V;for(let q=0;q<V;q++)a[D+q]=x[q]}else a.push(x)}}class _{constructor(h,g){this.i=h,this.j=g,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var O=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,h,g){for(const x in a)h.call(g,a[x],x,a)}function I(a,h){for(const g in a)h.call(void 0,a[g],g,a)}function v(a){const h={};for(const g in a)h[g]=a[g];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(a,h){let g,x;for(let D=1;D<arguments.length;D++){x=arguments[D];for(g in x)a[g]=x[g];for(let V=0;V<T.length;V++)g=T[V],Object.prototype.hasOwnProperty.call(x,g)&&(a[g]=x[g])}}function k(a){var h=1;a=a.split(":");const g=[];for(;0<h&&a.length;)g.push(a.shift()),h--;return a.length&&g.push(a.join(":")),g}function j(a){l.setTimeout(()=>{throw a},0)}function b(){var a=H;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ke{constructor(){this.h=this.g=null}add(h,g){const x=En.get();x.set(h,g),this.h?this.h.next=x:this.g=x,this.h=x}}var En=new _(()=>new or,a=>a.reset());class or{constructor(){this.next=this.g=this.h=null}set(h,g){this.h=h,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,$=!1,H=new Ke,Q=()=>{const a=l.Promise.resolve(void 0);Y=()=>{a.then(ge)}};var ge=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(g){j(g)}var h=En;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var rt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};l.addEventListener("test",g,h),l.removeEventListener("test",g,h)}catch{}return a}();function _t(a,h){if(te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(O){e:{try{P(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else g=="mouseover"?h=a.fromElement:g=="mouseout"&&(h=a.toElement);this.relatedTarget=h,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&_t.aa.h.call(this)}}S(_t,te);var qe={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Pt=0;function ar(a,h,g,x,D){this.listener=a,this.proxy=null,this.src=h,this.type=g,this.capture=!!x,this.ha=D,this.key=++Pt,this.da=this.fa=!1}function lr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ur(a){this.src=a,this.g={},this.h=0}ur.prototype.add=function(a,h,g,x,D){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Ur(a,h,x,D);return-1<q?(h=a[q],g||(h.fa=!1)):(h=new ar(h,this.src,V,!!x,D),h.fa=g,a.push(h)),h};function Mr(a,h){var g=h.type;if(g in a.g){var x=a.g[g],D=Array.prototype.indexOf.call(x,h,void 0),V;(V=0<=D)&&Array.prototype.splice.call(x,D,1),V&&(lr(h),a.g[g].length==0&&(delete a.g[g],a.h--))}}function Ur(a,h,g,x){for(var D=0;D<a.length;++D){var V=a[D];if(!V.da&&V.listener==h&&V.capture==!!g&&V.ha==x)return D}return-1}var Xt="closure_lm_"+(1e6*Math.random()|0),ks={};function Al(a,h,g,x,D){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Al(a,h[V],g,x,D);return null}return g=Rl(g),a&&a[Ce]?a.K(h,g,d(x)?!!x.capture:!1,D):Ei(a,h,g,!1,x,D)}function Ei(a,h,g,x,D,V){if(!h)throw Error("Invalid event type");var q=d(D)?!!D.capture:!!D,Ne=Si(a);if(Ne||(a[Xt]=Ne=new ur(a)),g=Ne.add(h,g,x,q,V),g.proxy)return g;if(x=Cl(),g.proxy=x,x.src=a,x.listener=g,a.addEventListener)rt||(D=q),D===void 0&&(D=!1),a.addEventListener(h.toString(),x,D);else if(a.attachEvent)a.attachEvent(Vo(h.toString()),x);else if(a.addListener&&a.removeListener)a.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Cl(){function a(g){return h.call(a.src,a.listener,g)}const h=bl;return a}function Ti(a,h,g,x,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Ti(a,h[V],g,x,D);else x=d(x)?!!x.capture:!!x,g=Rl(g),a&&a[Ce]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],g=Ur(V,g,x,D),-1<g&&(lr(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Si(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ur(h,g,x,D)),(g=-1<a?h[a]:null)&&Ii(g))}function Ii(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ce])Mr(h.i,a);else{var g=a.type,x=a.proxy;h.removeEventListener?h.removeEventListener(g,x,a.capture):h.detachEvent?h.detachEvent(Vo(g),x):h.addListener&&h.removeListener&&h.removeListener(x),(g=Si(h))?(Mr(g,a),g.h==0&&(g.src=null,h[Xt]=null)):lr(a)}}}function Vo(a){return a in ks?ks[a]:ks[a]="on"+a}function bl(a,h){if(a.da)a=!0;else{h=new _t(h,this);var g=a.listener,x=a.ha||a.src;a.fa&&Ii(a),a=g.call(x,h)}return a}function Si(a){return a=a[Xt],a instanceof ur?a:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rl(a){return typeof a=="function"?a:(a[cr]||(a[cr]=function(h){return a.handleEvent(h)}),a[cr])}function Je(){ue.call(this),this.i=new ur(this),this.M=this,this.F=null}S(Je,ue),Je.prototype[Ce]=!0,Je.prototype.removeEventListener=function(a,h,g,x){Ti(this,a,h,g,x)};function Xe(a,h){var g,x=a.F;if(x)for(g=[];x;x=x.F)g.push(x);if(a=a.M,x=h.type||h,typeof h=="string")h=new te(h,a);else if(h instanceof te)h.target=h.target||a;else{var D=h;h=new te(x,a),N(h,D)}if(D=!0,g)for(var V=g.length-1;0<=V;V--){var q=h.g=g[V];D=Tn(q,x,!0,h)&&D}if(q=h.g=a,D=Tn(q,x,!0,h)&&D,D=Tn(q,x,!1,h)&&D,g)for(V=0;V<g.length;V++)q=h.g=g[V],D=Tn(q,x,!1,h)&&D}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var g=a.g[h],x=0;x<g.length;x++)lr(g[x]);delete a.g[h],a.h--}}this.F=null},Je.prototype.K=function(a,h,g,x){return this.i.add(String(a),h,!1,g,x)},Je.prototype.L=function(a,h,g,x){return this.i.add(String(a),h,!0,g,x)};function Tn(a,h,g,x){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==g){var Ne=q.listener,pt=q.ha||q.src;q.fa&&Mr(a.i,q),D=Ne.call(pt,x)!==!1&&D}}return D&&!x.defaultPrevented}function kl(a,h,g){if(typeof a=="function")g&&(a=m(a,g));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ni(a){a.g=kl(()=>{a.g=null,a.i&&(a.i=!1,Ni(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Pl extends ue{constructor(h,g){super(),this.m=h,this.l=g,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ni(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ps(a){ue.call(this),this.h=a,this.g={}}S(Ps,ue);var Ai=[];function jl(a){M(a.g,function(h,g){this.g.hasOwnProperty(g)&&Ii(h)},a),a.g={}}Ps.prototype.N=function(){Ps.aa.N.call(this),jl(this)},Ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lo=l.JSON.stringify,kd=l.JSON.parse,Pd=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Mo(){}Mo.prototype.h=null;function Dl(a){return a.h||(a.h=a.i())}function Bn(){}var js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ci(){te.call(this,"d")}S(Ci,te);function Uo(){te.call(this,"c")}S(Uo,te);var zn={},Ol=null;function Ds(){return Ol=Ol||new Je}zn.La="serverreachability";function F(a){te.call(this,zn.La,a)}S(F,te);function ne(a){const h=Ds();Xe(h,new F(h))}zn.STAT_EVENT="statevent";function ce(a,h){te.call(this,zn.STAT_EVENT,a),this.stat=h}S(ce,te);function ee(a){const h=Ds();Xe(h,new ce(h,a))}zn.Ma="timingevent";function xe(a,h){te.call(this,zn.Ma,a),this.size=h}S(xe,te);function ie(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function oe(){this.g=!0}oe.prototype.xa=function(){this.g=!1};function jt(a,h,g,x,D,V){a.info(function(){if(a.g)if(V)for(var q="",Ne=V.split("&"),pt=0;pt<Ne.length;pt++){var we=Ne[pt].split("=");if(1<we.length){var wt=we[0];we=we[1];var xt=wt.split("_");q=2<=xt.length&&xt[1]=="type"?q+(wt+"="+we+"&"):q+(wt+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+x+") [attempt "+D+"]: "+h+`
`+g+`
`+q})}function dr(a,h,g,x,D,V,q){a.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+D+"]: "+h+`
`+g+`
`+V+" "+q})}function Ft(a,h,g,x){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Fr(a,g)+(x?" "+x:"")})}function bi(a,h){a.info(function(){return"TIMEOUT: "+h})}oe.prototype.info=function(){};function Fr(a,h){if(!a.g)return h;if(!h)return null;try{var g=JSON.parse(h);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var x=g[a];if(!(2>x.length)){var D=x[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<D.length;q++)D[q]=""}}}}return Lo(g)}catch{return h}}var Vl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ig={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jd;function Ll(){}S(Ll,Mo),Ll.prototype.g=function(){return new XMLHttpRequest},Ll.prototype.i=function(){return{}},jd=new Ll;function $r(a,h,g,x){this.j=a,this.i=h,this.l=g,this.R=x||1,this.U=new Ps(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Sg}function Sg(){this.i=null,this.g="",this.h=!1}var Ng={},Dd={};function Od(a,h,g){a.L=1,a.v=$l(hr(h)),a.m=g,a.P=!0,Ag(a,null)}function Ag(a,h){a.F=Date.now(),Ml(a),a.A=hr(a.v);var g=a.A,x=a.R;Array.isArray(x)||(x=[String(x)]),$g(g.i,"t",x),a.C=0,g=a.j.J,a.h=new Sg,a.g=iy(a.j,g?h:null,!a.m),0<a.O&&(a.M=new Pl(m(a.Y,a,a.g),a.O)),h=a.U,g=a.g,x=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Ai[0]=D.toString()),D=Ai);for(var V=0;V<D.length;V++){var q=Al(g,D[V],x||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ne(),jt(a.i,a.u,a.A,a.l,a.R,a.m)}$r.prototype.ca=function(a){a=a.target;const h=this.M;h&&fr(a)==3?h.j():this.Y(a)},$r.prototype.Y=function(a){try{if(a==this.g)e:{const xt=fr(this.g);var h=this.g.Ba();const Pi=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||Kg(this.g)))){this.J||xt!=4||h==7||(h==8||0>=Pi?ne(3):ne(2)),Vd(this);var g=this.g.Z();this.X=g;t:if(Cg(this)){var x=Kg(this.g);a="";var D=x.length,V=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Os(this),Fo(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(x[h],{stream:!(V&&h==D-1)});x.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=g==200,dr(this.i,this.u,this.A,this.l,this.R,xt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,pt=this.g;if((Ne=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ne)){var we=Ne;break t}}we=null}if(g=we)Ft(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ld(this,g);else{this.o=!1,this.s=3,ee(12),Os(this),Fo(this);break e}}if(this.P){g=!0;let In;for(;!this.J&&this.C<q.length;)if(In=eS(this,q),In==Dd){xt==4&&(this.s=4,ee(14),g=!1),Ft(this.i,this.l,null,"[Incomplete Response]");break}else if(In==Ng){this.s=4,ee(15),Ft(this.i,this.l,q,"[Invalid Chunk]"),g=!1;break}else Ft(this.i,this.l,In,null),Ld(this,In);if(Cg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||q.length!=0||this.h.h||(this.s=1,ee(16),g=!1),this.o=this.o&&g,!g)Ft(this.i,this.l,q,"[Invalid Chunked Response]"),Os(this),Fo(this);else if(0<q.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),zd(wt),wt.M=!0,ee(11))}}else Ft(this.i,this.l,q,null),Ld(this,q);xt==4&&Os(this),this.o&&!this.J&&(xt==4?ty(this.j,this):(this.o=!1,Ml(this)))}else yS(this.g),g==400&&0<q.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Os(this),Fo(this)}}}catch{}finally{}};function Cg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function eS(a,h){var g=a.C,x=h.indexOf(`
`,g);return x==-1?Dd:(g=Number(h.substring(g,x)),isNaN(g)?Ng:(x+=1,x+g>h.length?Dd:(h=h.slice(x,x+g),a.C=x+g,h)))}$r.prototype.cancel=function(){this.J=!0,Os(this)};function Ml(a){a.S=Date.now()+a.I,bg(a,a.I)}function bg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ie(m(a.ba,a),h)}function Vd(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$r.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(bi(this.i,this.A),this.L!=2&&(ne(),ee(17)),Os(this),this.s=2,Fo(this)):bg(this,this.S-a)};function Fo(a){a.j.G==0||a.J||ty(a.j,a)}function Os(a){Vd(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,jl(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ld(a,h){try{var g=a.j;if(g.G!=0&&(g.g==a||Md(g.h,a))){if(!a.K&&Md(g.h,a)&&g.G==3){try{var x=g.Da.g.parse(h)}catch{x=null}if(Array.isArray(x)&&x.length==3){var D=x;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Gl(g),Wl(g);else break e;Bd(g),ee(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=ie(m(g.Za,g),6e3));if(1>=Pg(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ls(g,11)}else if((a.K||g.g==a)&&Gl(g),!w(h))for(D=g.Da.g.parse(h),h=0;h<D.length;h++){let we=D[h];if(g.T=we[0],we=we[1],g.G==2)if(we[0]=="c"){g.K=we[1],g.ia=we[2];const wt=we[3];wt!=null&&(g.la=wt,g.j.info("VER="+g.la));const xt=we[4];xt!=null&&(g.Aa=xt,g.j.info("SVER="+g.Aa));const Pi=we[5];Pi!=null&&typeof Pi=="number"&&0<Pi&&(x=1.5*Pi,g.L=x,g.j.info("backChannelRequestTimeoutMs_="+x)),x=g;const In=a.g;if(In){const Ql=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ql){var V=x.h;V.g||Ql.indexOf("spdy")==-1&&Ql.indexOf("quic")==-1&&Ql.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ud(V,V.h),V.h=null))}if(x.D){const qd=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;qd&&(x.ya=qd,ke(x.I,x.D,qd))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),x=g;var q=a;if(x.qa=sy(x,x.J?x.ia:null,x.W),q.K){jg(x.h,q);var Ne=q,pt=x.L;pt&&(Ne.I=pt),Ne.B&&(Vd(Ne),Ml(Ne)),x.g=q}else Zg(x);0<g.i.length&&Hl(g)}else we[0]!="stop"&&we[0]!="close"||Ls(g,7);else g.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Ls(g,7):$d(g):we[0]!="noop"&&g.l&&g.l.ta(we),g.v=0)}}ne(4)}catch{}}var tS=class{constructor(a,h){this.g=a,this.map=h}};function Rg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Pg(a){return a.h?1:a.g?a.g.size:0}function Md(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ud(a,h){a.g?a.g.add(h):a.h=h}function jg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Rg.prototype.cancel=function(){if(this.i=Dg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const g of a.g.values())h=h.concat(g.D);return h}return A(a.i)}function nS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],g=a.length,x=0;x<g;x++)h.push(a[x]);return h}h=[],g=0;for(x in a)h[g++]=a[x];return h}function rS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var g=0;g<a;g++)h.push(g);return h}h=[],g=0;for(const x in a)h[g++]=x;return h}}}function Og(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var g=rS(a),x=nS(a),D=x.length,V=0;V<D;V++)h.call(void 0,x[V],g&&g[V],a)}var Vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sS(a,h){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var x=a[g].indexOf("="),D=null;if(0<=x){var V=a[g].substring(0,x);D=a[g].substring(x+1)}else V=a[g];h(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Vs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vs){this.h=a.h,Ul(this,a.j),this.o=a.o,this.g=a.g,Fl(this,a.s),this.l=a.l;var h=a.i,g=new zo;g.i=h.i,h.g&&(g.g=new Map(h.g),g.h=h.h),Lg(this,g),this.m=a.m}else a&&(h=String(a).match(Vg))?(this.h=!1,Ul(this,h[1]||"",!0),this.o=$o(h[2]||""),this.g=$o(h[3]||"",!0),Fl(this,h[4]),this.l=$o(h[5]||"",!0),Lg(this,h[6]||"",!0),this.m=$o(h[7]||"")):(this.h=!1,this.i=new zo(null,this.h))}Vs.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Bo(h,Mg,!0),":");var g=this.g;return(g||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Bo(h,Mg,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(Bo(g,g.charAt(0)=="/"?aS:oS,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",Bo(g,uS)),a.join("")};function hr(a){return new Vs(a)}function Ul(a,h,g){a.j=g?$o(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Lg(a,h,g){h instanceof zo?(a.i=h,cS(a.i,a.h)):(g||(h=Bo(h,lS)),a.i=new zo(h,a.h))}function ke(a,h,g){a.i.set(h,g)}function $l(a){return ke(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $o(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bo(a,h,g){return typeof a=="string"?(a=encodeURI(a).replace(h,iS),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mg=/[#\/\?@]/g,oS=/[#\?:]/g,aS=/[#\?]/g,lS=/[#\?@]/g,uS=/#/g;function zo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Br(a){a.g||(a.g=new Map,a.h=0,a.i&&sS(a.i,function(h,g){a.add(decodeURIComponent(h.replace(/\+/g," ")),g)}))}t=zo.prototype,t.add=function(a,h){Br(this),this.i=null,a=Ri(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(h),this.h+=1,this};function Ug(a,h){Br(a),h=Ri(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fg(a,h){return Br(a),h=Ri(a,h),a.g.has(h)}t.forEach=function(a,h){Br(this),this.g.forEach(function(g,x){g.forEach(function(D){a.call(h,D,x,this)},this)},this)},t.na=function(){Br(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),g=[];for(let x=0;x<h.length;x++){const D=a[x];for(let V=0;V<D.length;V++)g.push(h[x])}return g},t.V=function(a){Br(this);let h=[];if(typeof a=="string")Fg(this,a)&&(h=h.concat(this.g.get(Ri(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)h=h.concat(a[g])}return h},t.set=function(a,h){return Br(this),this.i=null,a=Ri(this,a),Fg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function $g(a,h,g){Ug(a,h),0<g.length&&(a.i=null,a.g.set(Ri(a,h),A(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var g=0;g<h.length;g++){var x=h[g];const V=encodeURIComponent(String(x)),q=this.V(x);for(x=0;x<q.length;x++){var D=V;q[x]!==""&&(D+="="+encodeURIComponent(String(q[x]))),a.push(D)}}return this.i=a.join("&")};function Ri(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function cS(a,h){h&&!a.j&&(Br(a),a.i=null,a.g.forEach(function(g,x){var D=x.toLowerCase();x!=D&&(Ug(this,x),$g(this,D,g))},a)),a.j=h}function dS(a,h){const g=new oe;if(l.Image){const x=new Image;x.onload=y(zr,g,"TestLoadImage: loaded",!0,h,x),x.onerror=y(zr,g,"TestLoadImage: error",!1,h,x),x.onabort=y(zr,g,"TestLoadImage: abort",!1,h,x),x.ontimeout=y(zr,g,"TestLoadImage: timeout",!1,h,x),l.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=a}else h(!1)}function hS(a,h){const g=new oe,x=new AbortController,D=setTimeout(()=>{x.abort(),zr(g,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:x.signal}).then(V=>{clearTimeout(D),V.ok?zr(g,"TestPingServer: ok",!0,h):zr(g,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),zr(g,"TestPingServer: error",!1,h)})}function zr(a,h,g,x,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),x(g)}catch{}}function fS(){this.g=new Pd}function pS(a,h,g){const x=g||"";try{Og(a,function(D,V){let q=D;d(D)&&(q=Lo(D)),h.push(x+V+"="+encodeURIComponent(q))})}catch(D){throw h.push(x+"type="+encodeURIComponent("_badmap")),D}}function Bl(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Bl,Mo),Bl.prototype.g=function(){return new zl(this.l,this.j)},Bl.prototype.i=function(a){return function(){return a}}({});function zl(a,h){Je.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(zl,Je),t=zl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qo(this):Wo(this),this.readyState==3&&Bg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qo(this))},t.Qa=function(a){this.g&&(this.response=a,qo(this))},t.ga=function(){this.g&&qo(this)};function qo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Wo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var g=h.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=h.next();return a.join(`\r
`)};function Wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zg(a){let h="";return M(a,function(g,x){h+=x,h+=":",h+=g,h+=`\r
`}),h}function Fd(a,h,g){e:{for(x in g){var x=!1;break e}x=!0}x||(g=zg(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):ke(a,h,g))}function We(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(We,Je);var mS=/^https?$/i,gS=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,g,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jd.g(),this.v=this.o?Dl(this.o):Dl(jd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){qg(this,V);return}if(a=g||"",g=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var D in x)g.set(D,x[D]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const V of x.keys())g.set(V,x.get(V));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(gS,h,void 0))||x||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of g)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gg(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){qg(this,V)}};function qg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Wg(a),ql(a)}function Wg(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Xe(this,"complete"),Xe(this,"abort"),ql(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ql(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hg(this):this.bb())},t.bb=function(){Hg(this)};function Hg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fr(a)!=4||a.Z()!=2)){if(a.u&&fr(a)==4)kl(a.Ea,0,a);else if(Xe(a,"readystatechange"),fr(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var g;if(!(g=h)){var x;if(x=q===0){var D=String(a.D).match(Vg)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),x=!mS.test(D?D.toLowerCase():"")}g=x}if(g)Xe(a,"complete"),Xe(a,"success");else{a.m=6;try{var V=2<fr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Wg(a)}}finally{ql(a)}}}}function ql(a,h){if(a.g){Gg(a);const g=a.g,x=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Xe(a,"ready");try{g.onreadystatechange=x}catch{}}}function Gg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),kd(h)}};function Kg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function yS(a){const h={};a=(a.g&&2<=fr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<a.length;x++){if(w(a[x]))continue;var g=k(a[x]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=h[D]||[];h[D]=V,V.push(g)}I(h,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ho(a,h,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||h}function Qg(a){this.Aa=0,this.i=[],this.j=new oe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ho("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ho("baseRetryDelayMs",5e3,a),this.cb=Ho("retryDelaySeedMs",1e4,a),this.Wa=Ho("forwardChannelMaxRetries",2,a),this.wa=Ho("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Rg(a&&a.concurrentRequestLimit),this.Da=new fS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qg.prototype,t.la=8,t.G=1,t.connect=function(a,h,g,x){ee(0),this.W=a,this.H=h||{},g&&x!==void 0&&(this.H.OSID=g,this.H.OAID=x),this.F=this.X,this.I=sy(this,null,this.W),Hl(this)};function $d(a){if(Yg(a),a.G==3){var h=a.U++,g=hr(a.I);if(ke(g,"SID",a.K),ke(g,"RID",h),ke(g,"TYPE","terminate"),Go(a,g),h=new $r(a,a.j,h),h.L=2,h.v=$l(hr(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!g&&l.Image&&(new Image().src=h.v,g=!0),g||(h.g=iy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ml(h)}ry(a)}function Wl(a){a.g&&(zd(a),a.g.cancel(),a.g=null)}function Yg(a){Wl(a),a.u&&(l.clearTimeout(a.u),a.u=null),Gl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Hl(a){if(!kg(a.h)&&!a.s){a.s=!0;var h=a.Ga;Y||Q(),$||(Y(),$=!0),H.add(h,a),a.B=0}}function vS(a,h){return Pg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ie(m(a.Ga,a,h),ny(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new $r(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),N(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var h=0,g=0;g<this.i.length;g++){t:{var x=this.i[g];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(h+=x,4096<h){h=g;break e}if(h===4096||g===this.i.length-1){h=g+1;break e}}h=1e3}else h=1e3;h=Xg(this,D,h),g=hr(this.I),ke(g,"RID",a),ke(g,"CVER",22),this.D&&ke(g,"X-HTTP-Session-Id",this.D),Go(this,g),V&&(this.O?h="headers="+encodeURIComponent(String(zg(V)))+"&"+h:this.m&&Fd(g,this.m,V)),Ud(this.h,D),this.Ua&&ke(g,"TYPE","init"),this.P?(ke(g,"$req",h),ke(g,"SID","null"),D.T=!0,Od(D,g,null)):Od(D,g,h),this.G=2}}else this.G==3&&(a?Jg(this,a):this.i.length==0||kg(this.h)||Jg(this))};function Jg(a,h){var g;h?g=h.l:g=a.U++;const x=hr(a.I);ke(x,"SID",a.K),ke(x,"RID",g),ke(x,"AID",a.T),Go(a,x),a.m&&a.o&&Fd(x,a.m,a.o),g=new $r(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Xg(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ud(a.h,g),Od(g,x,h)}function Go(a,h){a.H&&M(a.H,function(g,x){ke(h,x,g)}),a.l&&Og({},function(g,x){ke(h,x,g)})}function Xg(a,h,g){g=Math.min(a.i.length,g);var x=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let V=-1;for(;;){const q=["count="+g];V==-1?0<g?(V=D[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let Ne=!0;for(let pt=0;pt<g;pt++){let we=D[pt].g;const wt=D[pt].map;if(we-=V,0>we)V=Math.max(0,D[pt].g-100),Ne=!1;else try{pS(wt,q,"req"+we+"_")}catch{x&&x(wt)}}if(Ne){x=q.join("&");break e}}}return a=a.i.splice(0,g),h.D=a,x}function Zg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Y||Q(),$||(Y(),$=!0),H.add(h,a),a.v=0}}function Bd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ie(m(a.Fa,a),ny(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ey(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ie(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),Wl(this),ey(this))};function zd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ey(a){a.g=new $r(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=hr(a.qa);ke(h,"RID","rpc"),ke(h,"SID",a.K),ke(h,"AID",a.T),ke(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ke(h,"TO",a.ja),ke(h,"TYPE","xmlhttp"),Go(a,h),a.m&&a.o&&Fd(h,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=$l(hr(h)),g.m=null,g.P=!0,Ag(g,a)}t.Za=function(){this.C!=null&&(this.C=null,Wl(this),Bd(this),ee(19))};function Gl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ty(a,h){var g=null;if(a.g==h){Gl(a),zd(a),a.g=null;var x=2}else if(Md(a.h,h))g=h.D,jg(a.h,h),x=1;else return;if(a.G!=0){if(h.o)if(x==1){g=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;x=Ds(),Xe(x,new xe(x,g)),Hl(a)}else Zg(a);else if(D=h.s,D==3||D==0&&0<h.X||!(x==1&&vS(a,h)||x==2&&Bd(a)))switch(g&&0<g.length&&(h=a.h,h.i=h.i.concat(g)),D){case 1:Ls(a,5);break;case 4:Ls(a,10);break;case 3:Ls(a,6);break;default:Ls(a,2)}}}function ny(a,h){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*h}function Ls(a,h){if(a.j.info("Error code "+h),h==2){var g=m(a.fb,a),x=a.Xa;const D=!x;x=new Vs(x||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ul(x,"https"),$l(x),D?dS(x.toString(),g):hS(x.toString(),g)}else ee(2);a.G=0,a.l&&a.l.sa(h),ry(a),Yg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function ry(a){if(a.G=0,a.ka=[],a.l){const h=Dg(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function sy(a,h,g){var x=g instanceof Vs?hr(g):new Vs(g);if(x.g!="")h&&(x.g=h+"."+x.g),Fl(x,x.s);else{var D=l.location;x=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var V=new Vs(null);x&&Ul(V,x),h&&(V.g=h),D&&Fl(V,D),g&&(V.l=g),x=V}return g=a.D,h=a.ya,g&&h&&ke(x,g,h),ke(x,"VER",a.la),Go(a,x),x}function iy(a,h,g){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new Bl({eb:g})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function oy(){}t=oy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Kl(){}Kl.prototype.g=function(a,h){return new Zt(a,h)};function Zt(a,h){Je.call(this),this.g=new Qg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ki(this)}S(Zt,Je),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){$d(this.g)},Zt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=Lo(a),a=g);h.i.push(new tS(h.Ya++,a)),h.G==3&&Hl(h)},Zt.prototype.N=function(){this.g.l=null,delete this.j,$d(this.g),delete this.g,Zt.aa.N.call(this)};function ay(a){Ci.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const g in h){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(ay,Ci);function ly(){Uo.call(this),this.status=1}S(ly,Uo);function ki(a){this.g=a}S(ki,oy),ki.prototype.ua=function(){Xe(this.g,"a")},ki.prototype.ta=function(a){Xe(this.g,new ay(a))},ki.prototype.sa=function(a){Xe(this.g,new ly)},ki.prototype.ra=function(){Xe(this.g,"b")},Kl.prototype.createWebChannel=Kl.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,$0=function(){return new Kl},F0=function(){return Ds()},U0=zn,Hf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vl.NO_ERROR=0,Vl.TIMEOUT=8,Vl.HTTP_ERROR=6,Vu=Vl,Ig.COMPLETE="complete",M0=Ig,Bn.EventType=js,js.OPEN="a",js.CLOSE="b",js.ERROR="c",js.MESSAGE="d",Je.prototype.listen=Je.prototype.K,la=Bn,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,L0=We}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});const n_="@firebase/firestore",r_="4.9.0";/**
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
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
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
 */let ko="12.0.0";/**
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
 */const oi=new dm("@firebase/firestore");function Di(){return oi.logLevel}function G(t,...e){if(oi.logLevel<=he.DEBUG){const n=e.map(Cm);oi.debug(`Firestore (${ko}): ${t}`,...n)}}function kr(t,...e){if(oi.logLevel<=he.ERROR){const n=e.map(Cm);oi.error(`Firestore (${ko}): ${t}`,...n)}}function ai(t,...e){if(oi.logLevel<=he.WARN){const n=e.map(Cm);oi.warn(`Firestore (${ko}): ${t}`,...n)}}function Cm(t){if(typeof t=="string")return t;try{/**
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
 */function re(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,B0(t,r,n)}function B0(t,e,n){let r=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw kr(r),new Error(r)}function Te(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||B0(e,s,r)}function ae(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class z0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class Jk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xk{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new z0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class Zk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Zk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class s_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new s_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new s_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class od{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Gf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Nh(s)===Nh(i)?pe(s,i):Nh(s)?1:-1}return pe(t.length,e.length)}const rP=55296,sP=57343;function Nh(t){const e=t.charCodeAt(0);return e>=rP&&e<=sP}function yo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Kf="__name__";class Hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&re(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Hn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const r=Hn.isNumericId(e),s=Hn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Hn.extractNumericId(e).compare(Hn.extractNumericId(n)):Gf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class Ae extends Hn{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const iP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Hn{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return iP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kf}static keyField(){return new ut([Kf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ae.fromString(e))}static fromName(e){return new X(Ae.fromString(e).popFirst(5))}static empty(){return new X(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ae(e.slice()))}}/**
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
 */function bm(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function W0(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function i_(t){if(!X.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o_(t){if(X.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function H0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ad(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re(12329,{type:typeof t})}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ad(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function nt(t,e){const n={typeString:t};return e&&(n.value=e),n}function gl(t,e){if(!H0(t))throw new W(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const a_=-62135596800,l_=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*l_);return new be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<a_)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/l_}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gl(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-a_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:nt("string",be._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new be(0,0))}static max(){return new le(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qa=-1;function oP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new ws(s,X.empty(),e)}function aP(t){return new ws(t.readTime,t.key,Qa)}class ws{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ws(le.min(),X.empty(),Qa)}static max(){return new ws(le.max(),X.empty(),Qa)}}function lP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const uP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Po(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==uP)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function dP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ld{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ld.ce=-1;/**
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
 */const Rm=-1;function ud(t){return t==null}function xc(t){return t===0&&1/t==-1/0}function hP(t){return typeof t=="number"&&Number.isInteger(t)&&!xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const G0="";function fP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=u_(e)),e=pP(t.get(n),e);return u_(e)}function pP(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case G0:n+="";break;default:n+=i}}return n}function u_(t){return t+G0+""}/**
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
 */function c_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mP(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function K0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}}class gu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=i??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new rn([])}unionWith(e){let n=new ot(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Q0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Q0("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const gP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(t){if(Te(!!t,39018),typeof t=="string"){let e=0;const n=gP.exec(t);if(Te(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */const Y0="server_timestamp",J0="__type__",X0="__previous_value__",Z0="__local_write_time__";function km(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[J0])==null?void 0:r.stringValue)===Y0}function cd(t){const e=t.mapValue.fields[X0];return km(e)?cd(e):e}function Ya(t){const e=xs(t.mapValue.fields[Z0].timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class yP{constructor(e,n,r,s,i,o,l,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const Ec="(default)";class vo{constructor(e,n){this.projectId=e,this.database=n||Ec}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database===Ec}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const eT="__type__",vP="__max__",yu={mapValue:{}},tT="__vector__",Tc="value";function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?km(t)?4:wP(t)?9007199254740991:_P(t)?10:11:re(28295,{value:t})}function tr(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ya(t).isEqual(Ya(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=xs(s.timestampValue),l=xs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Es(s.bytesValue).isEqual(Es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?xc(o)===xc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return yo(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(c_(o)!==c_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tr(o[u],l[u])))return!1;return!0}(t,e);default:return re(52216,{left:t})}}function Ja(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),u=Qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(Ya(t),Ya(e));case 5:return Gf(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Es(i),u=Es(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=pe(l[d],u[d]);if(f!==0)return f}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=pe(Qe(i.latitude),Qe(o.latitude));return l!==0?l:pe(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return f_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,S,A;const l=i.fields||{},u=o.fields||{},d=(m=l[Tc])==null?void 0:m.arrayValue,f=(y=u[Tc])==null?void 0:y.arrayValue,p=pe(((S=d==null?void 0:d.values)==null?void 0:S.length)||0,((A=f==null?void 0:f.values)==null?void 0:A.length)||0);return p!==0?p:f_(d,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===yu.mapValue&&o===yu.mapValue)return 0;if(i===yu.mapValue)return 1;if(o===yu.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Gf(u[p],f[p]);if(m!==0)return m;const y=_o(l[u[p]],d[f[p]]);if(y!==0)return y}return pe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw re(23264,{he:n})}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=xs(t),r=xs(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function f_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_o(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function wo(t){return Qf(t)}function Qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qf(n.fields[o])}`;return s+"}"}(t.mapValue):re(61005,{value:t})}function Lu(t){switch(Ts(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cd(t);return e?16+Lu(e):16;case 5:return 2*t.stringValue.length;case 6:return Es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Lu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return bs(r.fields,(i,o)=>{s+=i.length+Lu(o)}),s}(t.mapValue);default:throw re(13486,{value:t})}}function p_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yf(t){return!!t&&"integerValue"in t}function Pm(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mu(t){return!!t&&"mapValue"in t}function _P(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[eT])==null?void 0:r.stringValue)===tT}function Ea(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ea(t.arrayValue.values[n]);return e}return{...t}}function wP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vP}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ea(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(Ea(this.value))}}function nT(t){const e=[];return bs(t.fields,(n,r)=>{const s=new ut([n]);if(Mu(r)){const i=nT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
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
 */class At{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,le.min(),le.min(),le.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,le.min(),le.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,le.min(),le.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function y_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function v_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function xP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class rT{}class tt extends rT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TP(e,n,r):n==="array-contains"?new NP(e,r):n==="in"?new AP(e,r):n==="not-in"?new CP(e,r):n==="array-contains-any"?new bP(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IP(e,r):new SP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_o(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends rT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Mn(e,n)}matches(e){return sT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sT(t){return t.op==="and"}function iT(t){return EP(t)&&sT(t)}function EP(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Jf(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+wo(t.value);if(iT(t))return t.filters.map(e=>Jf(e)).join(",");{const e=t.filters.map(n=>Jf(n)).join(",");return`${t.op}(${e})`}}function oT(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&tr(r.value,s.value)}(t,e):t instanceof Mn?function(r,s){return s instanceof Mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&oT(o,s.filters[l]),!0):!1}(t,e):void re(19439)}function aT(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${wo(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(aT).join(" ,")+"}"}(t):"Filter"}class TP extends tt{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class IP extends tt{constructor(e,n){super(e,"in",n),this.keys=lT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SP extends tt{constructor(e,n){super(e,"not-in",n),this.keys=lT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class NP extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pm(n)&&Ja(n.arrayValue,this.value)}}class AP extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ja(this.value.arrayValue,n)}}class CP extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ja(this.value.arrayValue,n)}}class bP extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ja(this.value.arrayValue,r))}}/**
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
 */class RP{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function __(t,e=null,n=[],r=[],s=null,i=null,o=null){return new RP(t,e,n,r,s,i,o)}function jm(t){const e=ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ud(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wo(r)).join(",")),e.Te=n}return e.Te}function Dm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!v_(t.startAt,e.startAt)&&v_(t.endAt,e.endAt)}function Xf(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class yi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kP(t,e,n,r,s,i,o,l){return new yi(t,e,n,r,s,i,o,l)}function dd(t){return new yi(t)}function w_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uT(t){return t.collectionGroup!==null}function Ta(t){const e=ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Xa(i,r))}),n.has(ut.keyField().canonicalString())||e.Ie.push(new Xa(ut.keyField(),r))}return e.Ie}function Zn(t){const e=ae(t);return e.Ee||(e.Ee=cT(e,Ta(t))),e.Ee}function PP(t){const e=ae(t);return e.de||(e.de=cT(e,t.explicitOrderBy)),e.de}function cT(t,e){if(t.limitType==="F")return __(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xa(s.field,i)});const n=t.endAt?new Ic(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ic(t.startAt.position,t.startAt.inclusive):null;return __(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zf(t,e){const n=t.filters.concat([e]);return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ep(t,e,n){return new yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hd(t,e){return Dm(Zn(t),Zn(e))&&t.limitType===e.limitType}function dT(t){return`${jm(Zn(t))}|lt:${t.limitType}`}function Oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>aT(s)).join(", ")}]`),ud(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>wo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>wo(s)).join(",")),`Target(${r})`}(Zn(t))}; limitType=${t.limitType})`}function fd(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ta(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=y_(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ta(r),s)||r.endAt&&!function(o,l,u){const d=y_(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ta(r),s))}(t,e)}function jP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hT(t){return(e,n)=>{let r=!1;for(const s of Ta(t)){const i=DP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DP(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?_o(u,d):re(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:t.dir})}}/**
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
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return K0(this.inner)}size(){return this.innerSize}}/**
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
 */const OP=new ze(X.comparator);function Pr(){return OP}const fT=new ze(X.comparator);function ua(...t){let e=fT;for(const n of t)e=e.insert(n.key,n);return e}function pT(t){let e=fT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gs(){return Ia()}function mT(){return Ia()}function Ia(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const VP=new ze(X.comparator),LP=new ot(X.comparator);function me(...t){let e=LP;for(const n of t)e=e.add(n);return e}const MP=new ot(pe);function UP(){return MP}/**
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
 */function Om(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function gT(t){return{integerValue:""+t}}function FP(t,e){return hP(e)?gT(e):Om(t,e)}/**
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
 */class pd{constructor(){this._=void 0}}function $P(t,e,n){return t instanceof Za?function(s,i){const o={fields:{[J0]:{stringValue:Y0},[Z0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&km(i)&&(i=cd(i)),i&&(o.fields[X0]=i),{mapValue:o}}(n,e):t instanceof el?vT(t,e):t instanceof tl?_T(t,e):function(s,i){const o=yT(s,i),l=x_(o)+x_(s.Ae);return Yf(o)&&Yf(s.Ae)?gT(l):Om(s.serializer,l)}(t,e)}function BP(t,e,n){return t instanceof el?vT(t,e):t instanceof tl?_T(t,e):n}function yT(t,e){return t instanceof Sc?function(r){return Yf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Za extends pd{}class el extends pd{constructor(e){super(),this.elements=e}}function vT(t,e){const n=wT(e);for(const r of t.elements)n.some(s=>tr(s,r))||n.push(r);return{arrayValue:{values:n}}}class tl extends pd{constructor(e){super(),this.elements=e}}function _T(t,e){let n=wT(e);for(const r of t.elements)n=n.filter(s=>!tr(s,r));return{arrayValue:{values:n}}}class Sc extends pd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function x_(t){return Qe(t.integerValue||t.doubleValue)}function wT(t){return Pm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class zP{constructor(e,n){this.field=e,this.transform=n}}function qP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof el&&s instanceof el||r instanceof tl&&s instanceof tl?yo(r.elements,s.elements,tr):r instanceof Sc&&s instanceof Sc?tr(r.Ae,s.Ae):r instanceof Za&&s instanceof Za}(t.transform,e.transform)}class WP{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class md{}function xT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gd(t.key,Lt.none()):new yl(t.key,t.data,Lt.none());{const n=t.data,r=qt.empty();let s=new ot(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rs(t.key,r,new rn(s.toArray()),Lt.none())}}function HP(t,e,n){t instanceof yl?function(s,i,o){const l=s.value.clone(),u=T_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rs?function(s,i,o){if(!Uu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=T_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ET(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Sa(t,e,n,r){return t instanceof yl?function(i,o,l,u){if(!Uu(i.precondition,o))return l;const d=i.value.clone(),f=I_(i.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rs?function(i,o,l,u){if(!Uu(i.precondition,o))return l;const d=I_(i.fieldTransforms,u,o),f=o.data;return f.setAll(ET(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Uu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function GP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yT(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yo(r,s,(i,o)=>qP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yl extends md{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rs extends md{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ET(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function T_(t,e,n){const r=new Map;Te(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,BP(o,l,n[s]))}return r}function I_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$P(i,o,e))}return r}class gd extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KP extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=xT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,(n,r)=>E_(n,r))&&yo(this.baseMutations,e.baseMutations,(n,r)=>E_(n,r))}}class Vm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return VP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vm(e,n,r,s)}}/**
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
 */class YP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class JP{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class XP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,ye;function ZP(t){switch(t){case L.OK:return re(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return re(15467,{code:t})}}function TT(t){if(t===void 0)return kr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ze.OK:return L.OK;case Ze.CANCELLED:return L.CANCELLED;case Ze.UNKNOWN:return L.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return L.INTERNAL;case Ze.UNAVAILABLE:return L.UNAVAILABLE;case Ze.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ze.NOT_FOUND:return L.NOT_FOUND;case Ze.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ze.ABORTED:return L.ABORTED;case Ze.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ze.DATA_LOSS:return L.DATA_LOSS;default:return re(39323,{code:t})}}(ye=Ze||(Ze={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function e2(){return new TextEncoder}/**
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
 */const t2=new ms([4294967295,4294967295],0);function S_(t){const e=e2().encode(t),n=new V0;return n.update(e),new Uint8Array(n.digest())}function N_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ms([n,r],0),new ms([s,i],0)]}class Lm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ca(`Invalid padding: ${n}`);if(r<0)throw new ca(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ca(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ca(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ms.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ms.fromNumber(r)));return s.compare(t2)===1&&(s=new ms([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=S_(e),[r,s]=N_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Lm(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=S_(e),[r,s]=N_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ca extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,vl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yd(le.min(),s,new ze(pe),Pr(),me())}}class vl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vl(r,n,me(),me(),me())}}/**
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
 */class Fu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class IT{constructor(e,n){this.targetId=e,this.Ce=n}}class ST{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class A_{constructor(){this.ve=0,this.Fe=C_(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),r=me();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new vl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=C_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class n2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pr(),this.Je=vu(),this.He=vu(),this.Ye=new ze(pe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Xf(i))if(r===0){const o=new X(i.path);this.et(n,o,At.newNoDocument(o,le.min()))}else Te(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Es(r).toUint8Array()}catch(u){if(u instanceof Q0)return ai("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Lm(o,s,i)}catch(u){return ai(u instanceof ca?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Xf(l.target)){const u=new X(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,At.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=me();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new yd(e,n,this.Ye,this.je,r);return this.je=Pr(),this.Je=vu(),this.He=vu(),this.Ye=new ze(pe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new A_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ot(pe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ot(pe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new A_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function vu(){return new ze(X.comparator)}function C_(){return new ze(X.comparator)}const r2={asc:"ASCENDING",desc:"DESCENDING"},s2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},i2={and:"AND",or:"OR"};class o2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tp(t,e){return t.useProto3Json||ud(e)?e:{value:e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function a2(t,e){return Nc(t,e.toTimestamp())}function er(t){return Te(!!t,49232),le.fromTimestamp(function(n){const r=xs(n);return new be(r.seconds,r.nanos)}(t))}function Mm(t,e){return np(t,e).canonicalString()}function np(t,e){const n=function(s){return new Ae(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function AT(t){const e=Ae.fromString(t);return Te(jT(e),10190,{key:e.toString()}),e}function rp(t,e){return Mm(t.databaseId,e.path)}function Ah(t,e){const n=AT(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(bT(n))}function CT(t,e){return Mm(t.databaseId,e)}function l2(t){const e=AT(t);return e.length===4?Ae.emptyPath():bT(e)}function sp(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bT(t){return Te(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function b_(t,e,n){return{name:rp(t,e),fields:n.value.mapValue.fields}}function u2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:re(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(Te(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?L.UNKNOWN:TT(d.code);return new W(f,d.message||"")}(o);n=new ST(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ah(t,r.document.name),i=er(r.document.updateTime),o=r.document.createTime?er(r.document.createTime):le.min(),l=new qt({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(s,i,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Fu(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ah(t,r.document),i=r.readTime?er(r.readTime):le.min(),o=At.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Fu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ah(t,r.document),i=r.removedTargetIds||[];n=new Fu([],i,s,null)}else{if(!("filter"in e))return re(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new XP(s,i),l=r.targetId;n=new IT(l,o)}}return n}function c2(t,e){let n;if(e instanceof yl)n={update:b_(t,e.key,e.value)};else if(e instanceof gd)n={delete:rp(t,e.key)};else if(e instanceof Rs)n={update:b_(t,e.key,e.data),updateMask:_2(e.fieldMask)};else{if(!(e instanceof KP))return re(16599,{Vt:e.type});n={verify:rp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof el)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof tl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Sc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw re(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:a2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)}(t,e.precondition)),n}function d2(t,e){return t&&t.length>0?(Te(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?er(s.updateTime):er(i);return o.isEqual(le.min())&&(o=er(i)),new WP(o,s.transformResults||[])}(n,e))):[]}function h2(t,e){return{documents:[CT(t,e.path)]}}function RT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=CT(t,s);const i=function(d){if(d.length!==0)return PT(Mn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(m){return{field:es(m.field),direction:g2(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=tp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function f2(t,e,n,r){const{ft:s,parent:i}=RT(t,e),o={},l=[];let u=0;return n.forEach(d=>{const f="aggregate_"+u++;o[f]=d.alias,d.aggregateType==="count"?l.push({alias:f,count:{}}):d.aggregateType==="avg"?l.push({alias:f,avg:{field:es(d.fieldPath)}}):d.aggregateType==="sum"&&l.push({alias:f,sum:{field:es(d.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function p2(t){let e=l2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=kT(p);return m instanceof Mn&&iT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new Xa(Vi(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ud(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,y=p.values||[];return new Ic(y,m)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const m=!p.before,y=p.values||[];return new Ic(y,m)}(n.endAt)),kP(e,s,o,i,l,"F",u,d)}function m2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Vi(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vi(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vi(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vi(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(t):t.fieldFilter!==void 0?function(n){return tt.create(Vi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>kT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(t):re(30097,{filter:t})}function g2(t){return r2[t]}function y2(t){return s2[t]}function v2(t){return i2[t]}function es(t){return{fieldPath:t.canonicalString()}}function Vi(t){return ut.fromServerFormat(t.fieldPath)}function PT(t){return t instanceof tt?function(n){if(n.op==="=="){if(g_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NAN"}};if(m_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NAN"}};if(m_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(n.field),op:y2(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(s=>PT(s));return r.length===1?r[0]:{compositeFilter:{op:v2(n.op),filters:r}}}(t):re(54877,{filter:t})}function _2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ss{constructor(e,n,r,s,i=le.min(),o=le.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class w2{constructor(e){this.yt=e}}function x2(t){const e=p2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ep(e,e.limit,"L"):e}/**
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
 */class E2{constructor(){this.Cn=new T2}addToCollectionParentIndex(e,n){return this.Cn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ws.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class T2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Ae.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Ae.comparator)).toArray()}}/**
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
 */const R_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DT=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(DT,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class xo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new xo(0)}static cr(){return new xo(-1)}}/**
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
 */const k_="LruGarbageCollector",I2=1048576;function P_([t,e],[n,r]){const s=pe(t,n);return s===0?pe(e,r):s}class S2{constructor(e){this.Ir=e,this.buffer=new ot(P_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();P_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class N2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(k_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){jo(n)?G(k_,"Ignoring IndexedDB error during garbage collection: ",n):await Po(n)}await this.Vr(3e5)})}}class A2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(ld.ce);const r=new S2(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(R_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),R_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),Di()<=he.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function C2(t,e){return new A2(t,e)}/**
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
 */class b2{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class R2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class k2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Sa(r.mutation,s,rn.empty(),be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=Gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ua();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Pr();const o=Ia(),l=function(){return Ia()}();return n.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Rs)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Sa(f.mutation,d,f.mutation.getFieldMask(),be.now())):o.set(d.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>l.set(d,new R2(f,o.get(d)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ia();let s=new ze((o,l)=>o-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||rn.empty();f=l.applyToLocalView(d,f),r.set(u,f);const p=(s.get(l.batchId)||me()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,p=mT();f.forEach(m=>{if(!i.has(m)){const y=xT(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Gs());let l=Qa,u=i;return o.next(d=>U.forEach(d,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,me())).next(f=>({batchId:l,changes:pT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=ua();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ua();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const d=function(p,m){return new yi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,At.newInvalidDocument(f)))});let l=ua();return o.forEach((u,d)=>{const f=i.get(u);f!==void 0&&Sa(f.mutation,d,rn.empty(),be.now()),fd(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class P2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return U.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:er(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:x2(s.bundledQuery),readTime:er(s.readTime)}}(n)),U.resolve()}}/**
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
 */class j2{constructor(){this.overlays=new ze(X.comparator),this.qr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gs();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Gs(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Gs(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Gs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return U.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YP(n,r));let i=this.qr.get(n);i===void 0&&(i=me(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class D2{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Um{constructor(){this.Qr=new ot(at.$r),this.Ur=new ot(at.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new at(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new X(new Ae([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new X(new Ae([])),r=new at(n,e),s=new at(n,e+1);let i=me();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return X.comparator(e.key,n.key)||pe(e.Yr,n.Yr)}static Kr(e,n){return pe(e.Yr,n.Yr)||X.comparator(e.key,n.key)}}/**
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
 */class O2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ot(at.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QP(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new at(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Rm:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(pe);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),U.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new at(new X(i),0);let l=new ot(pe);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)},o),U.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return U.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new at(n,0),s=this.Zr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class V2{constructor(e){this.ri=e,this.docs=function(){return new ze(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Pr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pr();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||lP(aP(f),r)<=0||(s.has(f.key)||fd(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re(9500)}ii(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new L2(this)}getSize(e){return U.resolve(this.size)}}class L2 extends b2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class M2{constructor(e){this.persistence=e,this.si=new vi(n=>jm(n),Dm),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.oi=0,this._i=new Um,this.targetCount=0,this.ai=xo.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),U.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new xo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Pr(n),U.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this._i.containsKey(n))}}/**
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
 */class OT{constructor(e,n){this.ui={},this.overlays={},this.ci=new ld(0),this.li=!1,this.li=!0,this.hi=new D2,this.referenceDelegate=e(this),this.Pi=new M2(this),this.indexManager=new E2,this.remoteDocumentCache=function(s){return new V2(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new w2(n),this.Ii=new P2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new j2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new O2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new U2(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return U.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class U2 extends cP{constructor(e){super(),this.currentSequenceNumber=e}}class Fm{constructor(e){this.persistence=e,this.Ri=new Um,this.Vi=null}static mi(e){return new Fm(e)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,r=>{const s=X.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ac{constructor(e,n){this.persistence=e,this.pi=new vi(r=>fP(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=C2(this,n)}static mi(e,n){return new Ac(e,n)}Ei(){}di(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return U.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Lu(e.data.value)),n}br(e,n,r){return U.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class $m{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $m(e,n.fromCache,r,s)}}/**
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
 */class F2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return gC()?8:dP(kt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new F2;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Di()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(Di()<=he.DEBUG&&G("QueryEngine","Query:",Oi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Di()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(n))):U.resolve())}ys(e,n){if(w_(n))return U.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ep(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(n,l);return this.Cs(n,d,o,u.readTime)?this.ys(e,ep(n,null,"F")):this.vs(e,d,n,u)}))})))}ws(e,n,r,s){return w_(n)||s.isEqual(le.min())?U.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?U.resolve(null):(Di()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Oi(n)),this.vs(e,o,n,oP(s,Qa)).next(l=>l))})}Ds(e,n){let r=new ot(hT(e));return n.forEach((s,i)=>{fd(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Di()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.ps.getDocumentsMatchingQuery(e,n,ws.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Bm="LocalStore",B2=3e8;class z2{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new ze(pe),this.xs=new vi(i=>jm(i),Dm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function q2(t,e,n,r){return new z2(t,e,n,r)}async function VT(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=me();for(const d of s){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:l}))})})}function W2(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const p=d.batch,m=p.keys();let y=U.resolve();return m.forEach(S=>{y=y.next(()=>f.getEntry(u,S)).next(A=>{const C=d.docVersions.get(S);Te(C!==null,48541),A.version.compareTo(C)<0&&(p.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),f.addEntry(A)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=me();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function LT(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function H2(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ft.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(A,C,_){return A.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=B2?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,y,f)&&l.push(n.Pi.updateTargetData(i,y))});let u=Pr(),d=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(G2(i,o,e.documentUpdates).next(f=>{u=f.ks,d=f.qs})),!r.isEqual(le.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.Ms=s,i))}function G2(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pr();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(Bm,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:o,qs:s}})}function K2(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Q2(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new ss(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ip(t,e,n){const r=ae(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!jo(o))throw o;G(Bm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function j_(t,e,n){const r=ae(t);let s=le.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const p=ae(u),m=p.xs.get(f);return m!==void 0?U.resolve(p.Ms.get(m)):p.Pi.getTargetData(d,f)}(r,o,Zn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:me())).next(l=>(Y2(r,jP(e),l),{documents:l,Qs:i})))}function Y2(t,e,n){let r=t.Os.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class D_{constructor(){this.activeTargetIds=UP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class J2{constructor(){this.Mo=new D_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new D_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X2{Oo(e){}shutdown(){}}/**
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
 */const O_="ConnectivityMonitor";class V_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(O_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(O_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _u=null;function op(){return _u===null?_u=function(){return 268435456+Math.round(2147483648*Math.random())}():_u++,"0x"+_u.toString(16)}/**
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
 */const Ch="RestConnection",Z2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ej{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ec?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=op(),l=this.zo(e,n.toUriEncodedString());G(Ch,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),f=pi(d);return this.Jo(e,l,u,r,f).then(p=>(G(Ch,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ai(Ch,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ko}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=Z2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class tj{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const It="WebChannelConnection";class nj extends ej{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=op();return new Promise((l,u)=>{const d=new L0;d.setWithCredentials(!0),d.listenOnce(M0.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Vu.NO_ERROR:const p=d.getResponseJson();G(It,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Vu.TIMEOUT:G(It,`RPC '${e}' ${o} timed out`),u(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Vu.HTTP_ERROR:const m=d.getStatus();if(G(It,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let y=d.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const A=function(_){const w=_.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(S.status);u(new W(A,S.message))}else u(new W(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new W(L.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{G(It,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);G(It,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",f,r,15)})}T_(e,n,r){const s=op(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$0(),l=F0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");G(It,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let m=!1,y=!1;const S=new tj({Yo:C=>{y?G(It,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(G(It,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),G(It,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Zo:()=>p.close()}),A=(C,_,w)=>{C.listen(_,E=>{try{w(E)}catch(P){setTimeout(()=>{throw P},0)}})};return A(p,la.EventType.OPEN,()=>{y||(G(It,`RPC '${e}' stream ${s} transport opened.`),S.o_())}),A(p,la.EventType.CLOSE,()=>{y||(y=!0,G(It,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(p))}),A(p,la.EventType.ERROR,C=>{y||(y=!0,ai(It,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),S.a_(new W(L.UNAVAILABLE,"The operation could not be completed")))}),A(p,la.EventType.MESSAGE,C=>{var _;if(!y){const w=C.data[0];Te(!!w,16349);const E=w,P=(E==null?void 0:E.error)||((_=E[0])==null?void 0:_.error);if(P){G(It,`RPC '${e}' stream ${s} received error:`,P);const O=P.status;let M=function(T){const N=Ze[T];if(N!==void 0)return TT(N)}(O),I=P.message;M===void 0&&(M=L.INTERNAL,I="Unknown error status: "+O+" with message "+P.message),y=!0,S.a_(new W(M,I)),p.close()}else G(It,`RPC '${e}' stream ${s} received:`,w),S.u_(w)}}),A(l,U0.STAT_EVENT,C=>{C.stat===Hf.PROXY?G(It,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Hf.NOPROXY&&G(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function bh(){return typeof document<"u"?document:null}/**
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
 */function vd(t){return new o2(t,!0)}/**
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
 */class MT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const L_="PersistentStream";class UT{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new MT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(kr(n.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(L_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(G(L_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rj extends UT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=u2(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?er(o.readTime):le.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=sp(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Xf(u)?{documents:h2(i,u)}:{query:RT(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=NT(i,o.resumeToken);const d=tp(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=Nc(i,o.snapshotVersion.toTimestamp());const d=tp(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=m2(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=sp(this.serializer),n.removeTarget=e,this.q_(n)}}class sj extends UT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=d2(e.writeResults,e.commitTime),r=er(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=sp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>c2(this.serializer,r))};this.q_(n)}}/**
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
 */class ij{}class oj extends ij{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,np(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,np(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class aj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kr(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const li="RemoteStore";class lj{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{_i(this)&&(G(li,"Restarting streams for network reachability change."),await async function(u){const d=ae(u);d.Ea.add(4),await _l(d),d.Ra.set("Unknown"),d.Ea.delete(4),await _d(d)}(this))})}),this.Ra=new aj(r,s)}}async function _d(t){if(_i(t))for(const e of t.da)await e(!0)}async function _l(t){for(const e of t.da)await e(!1)}function FT(t,e){const n=ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Hm(n)?Wm(n):Do(n).O_()&&qm(n,e))}function zm(t,e){const n=ae(t),r=Do(n);n.Ia.delete(e),r.O_()&&$T(n,e),n.Ia.size===0&&(r.O_()?r.L_():_i(n)&&n.Ra.set("Unknown"))}function qm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Do(t).Y_(e)}function $T(t,e){t.Va.Ue(e),Do(t).Z_(e)}function Wm(t){t.Va=new n2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Do(t).start(),t.Ra.ua()}function Hm(t){return _i(t)&&!Do(t).x_()&&t.Ia.size>0}function _i(t){return ae(t).Ea.size===0}function BT(t){t.Va=void 0}async function uj(t){t.Ra.set("Online")}async function cj(t){t.Ia.forEach((e,n)=>{qm(t,e)})}async function dj(t,e){BT(t),Hm(t)?(t.Ra.ha(e),Wm(t)):t.Ra.set("Unknown")}async function hj(t,e,n){if(t.Ra.set("Online"),e instanceof ST&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){G(li,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof Fu?t.Va.Ze(e):e instanceof IT?t.Va.st(e):t.Va.tt(e),!n.isEqual(le.min()))try{const r=await LT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),$T(i,u);const p=new ss(f.target,u,d,f.sequenceNumber);qm(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G(li,"Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!jo(e))throw e;t.Ea.add(1),await _l(t),t.Ra.set("Offline"),n||(n=()=>LT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(li,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await _d(t)})}function zT(t,e){return e().catch(n=>Cc(t,n,e))}async function wd(t){const e=ae(t),n=Is(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rm;for(;fj(e);)try{const s=await K2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,pj(e,s)}catch(s){await Cc(e,s)}qT(e)&&WT(e)}function fj(t){return _i(t)&&t.Ta.length<10}function pj(t,e){t.Ta.push(e);const n=Is(t);n.O_()&&n.X_&&n.ea(e.mutations)}function qT(t){return _i(t)&&!Is(t).x_()&&t.Ta.length>0}function WT(t){Is(t).start()}async function mj(t){Is(t).ra()}async function gj(t){const e=Is(t);for(const n of t.Ta)e.ea(n.mutations)}async function yj(t,e,n){const r=t.Ta.shift(),s=Vm.from(r,e,n);await zT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wd(t)}async function vj(t,e){e&&Is(t).X_&&await async function(r,s){if(function(o){return ZP(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Is(r).B_(),await zT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wd(r)}}(t,e),qT(t)&&WT(t)}async function M_(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),G(li,"RemoteStore received new credentials");const r=_i(n);n.Ea.add(3),await _l(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await _d(n)}async function _j(t,e){const n=ae(t);e?(n.Ea.delete(2),await _d(n)):e||(n.Ea.add(2),await _l(n),n.Ra.set("Unknown"))}function Do(t){return t.ma||(t.ma=function(n,r,s){const i=ae(n);return i.sa(),new rj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:uj.bind(null,t),t_:cj.bind(null,t),r_:dj.bind(null,t),H_:hj.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Hm(t)?Wm(t):t.Ra.set("Unknown")):(await t.ma.stop(),BT(t))})),t.ma}function Is(t){return t.fa||(t.fa=function(n,r,s){const i=ae(n);return i.sa(),new sj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:mj.bind(null,t),r_:vj.bind(null,t),ta:gj.bind(null,t),na:yj.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await wd(t)):(await t.fa.stop(),t.Ta.length>0&&(G(li,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Gm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Gm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Km(t,e){if(kr("AsyncQueue",`${e}: ${t}`),jo(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ua(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class U_{constructor(){this.ga=new ze(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):re(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Eo(e,n,oo.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class wj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class xj{constructor(){this.queries=F_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ae(n),i=s.queries;s.queries=F_(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function F_(){return new vi(t=>dT(t),hd)}async function Qm(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new wj,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Km(o,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Jm(n)}async function Ym(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ej(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Jm(n)}function Tj(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Jm(t){t.Ca.forEach(e=>{e.next()})}var ap,$_;($_=ap||(ap={})).Ma="default",$_.Cache="cache";class Xm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ap.Cache}}/**
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
 */class HT{constructor(e){this.key=e}}class GT{constructor(e){this.key=e}}class Ij{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=me(),this.mutatedKeys=me(),this.eu=hT(e),this.tu=new oo(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new U_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),y=fd(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),A=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;m&&y?m.data.isEqual(y.data)?S!==A&&(r.track({type:3,doc:y}),C=!0):this.su(m,y)||(r.track({type:2,doc:y}),C=!0,(u&&this.eu(y,u)>0||d&&this.eu(y,d)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),C=!0):m&&!y&&(r.track({type:1,doc:m}),C=!0,(u||d)&&(l=!0)),C&&(y?(o=o.add(y),i=A?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(y,S){const A=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:C})}};return A(y)-A(S)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,o.length!==0||d?{snapshot:new Eo(this.query,e.tu,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new U_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=me(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new GT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new HT(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Eo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zm="SyncEngine";class Sj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Nj{constructor(e){this.key=e,this.hu=!1}}class Aj{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new vi(l=>dT(l),hd),this.Iu=new Map,this.Eu=new Set,this.du=new ze(X.comparator),this.Au=new Map,this.Ru=new Um,this.Vu={},this.mu=new Map,this.fu=xo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cj(t,e,n=!0){const r=ZT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await KT(r,e,n,!0),s}async function bj(t,e){const n=ZT(t);await KT(n,e,!0,!1)}async function KT(t,e,n,r){const s=await Q2(t.localStore,Zn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Rj(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&FT(t.remoteStore,s),l}async function Rj(t,e,n,r,s){t.pu=(p,m,y)=>async function(A,C,_,w){let E=C.view.ru(_);E.Cs&&(E=await j_(A.localStore,C.query,!1).then(({documents:I})=>C.view.ru(I,E)));const P=w&&w.targetChanges.get(C.targetId),O=w&&w.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(E,A.isPrimaryClient,P,O);return z_(A,C.targetId,M.au),M.snapshot}(t,p,m,y);const i=await j_(t.localStore,e,!0),o=new Ij(e,i.Qs),l=o.ru(i.documents),u=vl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);z_(t,n,d.au);const f=new Sj(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function kj(t,e,n){const r=ae(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!hd(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ip(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&zm(r.remoteStore,s.targetId),lp(r,s.targetId)}).catch(Po)):(lp(r,s.targetId),await ip(r.localStore,s.targetId,!0))}async function Pj(t,e){const n=ae(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zm(n.remoteStore,r.targetId))}async function jj(t,e,n){const r=Fj(t);try{const s=await function(o,l){const u=ae(o),d=be.now(),f=l.reduce((y,S)=>y.add(S.key),me());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=Pr(),A=me();return u.Ns.getEntries(y,f).next(C=>{S=C,S.forEach((_,w)=>{w.isValidDocument()||(A=A.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,S)).next(C=>{p=C;const _=[];for(const w of l){const E=GP(w,p.get(w.key).overlayedDocument);E!=null&&_.push(new Rs(w.key,E,nT(E.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,d,_,l)}).next(C=>{m=C;const _=C.applyToLocalDocumentSet(p,A);return u.documentOverlayCache.saveOverlays(y,C.batchId,_)})}).then(()=>({batchId:m.batchId,changes:pT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Vu[o.currentUser.toKey()];d||(d=new ze(pe)),d=d.insert(l,u),o.Vu[o.currentUser.toKey()]=d}(r,s.batchId,n),await wl(r,s.changes),await wd(r.remoteStore)}catch(s){const i=Km(s,"Failed to persist write");n.reject(i)}}async function QT(t,e){const n=ae(t);try{const r=await H2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Te(o.hu,14607):s.removedDocuments.size>0&&(Te(o.hu,42227),o.hu=!1))}),await wl(n,r,e)}catch(r){await Po(r)}}function B_(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ae(o);u.onlineState=l;let d=!1;u.queries.forEach((f,p)=>{for(const m of p.Sa)m.va(l)&&(d=!0)}),d&&Jm(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Dj(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ze(X.comparator);o=o.insert(i,At.newNoDocument(i,le.min()));const l=me().add(i),u=new yd(le.min(),new Map,new ze(pe),o,l);await QT(r,u),r.du=r.du.remove(i),r.Au.delete(e),eg(r)}else await ip(r.localStore,e,!1).then(()=>lp(r,e,n)).catch(Po)}async function Oj(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await W2(n.localStore,e);JT(n,r,null),YT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wl(n,s)}catch(s){await Po(s)}}async function Vj(t,e,n){const r=ae(t);try{const s=await function(o,l){const u=ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(Te(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);JT(r,e,n),YT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wl(r,s)}catch(s){await Po(s)}}function YT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function JT(t,e,n){const r=ae(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function lp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||XT(t,r)})}function XT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(zm(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),eg(t))}function z_(t,e,n){for(const r of n)r instanceof HT?(t.Ru.addReference(r.key,e),Lj(t,r)):r instanceof GT?(G(Zm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||XT(t,r.key)):re(19791,{wu:r})}function Lj(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(G(Zm,"New document in limbo: "+n),t.Eu.add(r),eg(t))}function eg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new X(Ae.fromString(e)),r=t.fu.next();t.Au.set(r,new Nj(n)),t.du=t.du.insert(n,r),FT(t.remoteStore,new ss(Zn(dd(n.path)),r,"TargetPurposeLimboResolution",ld.ce))}}async function wl(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){s.push(d);const p=$m.As(u.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,d){const f=ae(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(d,m=>U.forEach(m.Es,y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>U.forEach(m.ds,y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!jo(p))throw p;G(Bm,"Failed to update sequence numbers: "+p)}for(const p of d){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),S=y.snapshotVersion,A=y.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(m,A)}}}(r.localStore,i))}async function Mj(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){G(Zm,"User change. New user:",e.toKey());const r=await VT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wl(n,r.Ls)}}function Uj(t,e){const n=ae(t),r=n.Au.get(e);if(r&&r.hu)return me().add(r.key);{let s=me();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function ZT(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dj.bind(null,e),e.Pu.H_=Ej.bind(null,e.eventManager),e.Pu.yu=Tj.bind(null,e.eventManager),e}function Fj(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Oj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vj.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return q2(this.persistence,new $2,e.initialUser,this.serializer)}Cu(e){return new OT(Fm.mi,this.serializer)}Du(e){return new J2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class $j extends bc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Te(this.persistence.referenceDelegate instanceof Ac,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new N2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new OT(r=>Ac.mi(r,n),this.serializer)}}class up{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>B_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mj.bind(null,this.syncEngine),await _j(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xj}()}createDatastore(e){const n=vd(e.databaseInfo.databaseId),r=function(i){return new nj(i)}(e.databaseInfo);return function(i,o,l,u){return new oj(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new lj(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>B_(this.syncEngine,n,0),function(){return V_.v()?new V_:new X2}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,f){const p=new Aj(s,i,o,l,u,d);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ae(s);G(li,"RemoteStore shutting down."),i.Ea.add(5),await _l(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}up.provider={build:()=>new up};/**
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
 */class tg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ss="FirestoreClient";class Bj{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=od.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(Ss,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(Ss,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Km(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rh(t,e){t.asyncQueue.verifyOperationInProgress(),G(Ss,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await VT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function q_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zj(t);G(Ss,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>M_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>M_(e.remoteStore,s)),t._onlineComponents=e}async function zj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Ss,"Using user provided OfflineComponentProvider");try{await Rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ai("Error using user provided cache. Falling back to memory cache: "+n),await Rh(t,new bc)}}else G(Ss,"Using default OfflineComponentProvider"),await Rh(t,new $j(void 0));return t._offlineComponents}async function ng(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Ss,"Using user provided OnlineComponentProvider"),await q_(t,t._uninitializedComponentsProvider._online)):(G(Ss,"Using default OnlineComponentProvider"),await q_(t,new up))),t._onlineComponents}function qj(t){return ng(t).then(e=>e.syncEngine)}function Wj(t){return ng(t).then(e=>e.datastore)}async function Rc(t){const e=await ng(t),n=e.eventManager;return n.onListen=Cj.bind(null,e.syncEngine),n.onUnlisten=kj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=bj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Pj.bind(null,e.syncEngine),n}function Hj(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const f=new tg({next:m=>{f.Nu(),o.enqueueAndForget(()=>Ym(i,p));const y=m.docs.has(l);!y&&m.fromCache?d.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new Xm(dd(l.path),f,{includeMetadataChanges:!0,qa:!0});return Qm(i,p)}(await Rc(t),t.asyncQueue,e,n,r)),r.promise}function Gj(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const f=new tg({next:m=>{f.Nu(),o.enqueueAndForget(()=>Ym(i,p)),m.fromCache&&u.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new Xm(l,f,{includeMetadataChanges:!0,qa:!0});return Qm(i,p)}(await Rc(t),t.asyncQueue,e,n,r)),r.promise}function Kj(t,e,n){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await Wj(t);r.resolve(async function(o,l,u){var A;const d=ae(o),{request:f,gt:p,parent:m}=f2(d.serializer,PP(l),u);d.connection.$o||delete f.parent;const y=(await d.Ho("RunAggregationQuery",d.serializer.databaseId,m,f,1)).filter(C=>!!C.result);Te(y.length===1,64727);const S=(A=y[0].result)==null?void 0:A.aggregateFields;return Object.keys(S).reduce((C,_)=>(C[p[_]]=S[_],C),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}/**
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
 */function eI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const W_=new Map;/**
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
 */const tI="firestore.googleapis.com",H_=!0;class G_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tI,this.ssl=H_}else this.host=e.host,this.ssl=e.ssl??H_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<I2)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}W0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eI(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new G_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new G_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new q0;switch(r.type){case"firstParty":return new eP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=W_.get(n);r&&(G("ComponentProvider","Removing Datastore"),W_.delete(n),r.terminate())}(this),Promise.resolve()}}function nI(t,e,n,r={}){var d;t=dt(t,xl);const s=pi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(um(`https://${l}`),cm("Firestore",!0)),i.host!==tI&&i.host!==l&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ri(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=St.MOCK_USER;else{f=aC(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new St(m)}t._authCredentials=new Jk(new z0(f,p))}}/**
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
 */class ir{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(gl(n,Ue._jsonSchema))return new Ue(e,r||null,new X(Ae.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:nt("string",Ue._jsonSchemaVersion),referencePath:nt("string")};class Ir extends ir{constructor(e,n,r){super(e,n,dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new X(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function ve(t,e,...n){if(t=Ie(t),bm("collection","path",e),t instanceof xl){const r=Ae.fromString(e,...n);return o_(r),new Ir(t,null,r)}{if(!(t instanceof Ue||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return o_(r),new Ir(t.firestore,null,r)}}function rg(t,e){if(t=dt(t,xl),bm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ir(t,null,function(r){return new yi(Ae.emptyPath(),r)}(e))}function J(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=od.newId()),bm("doc","path",e),t instanceof xl){const r=Ae.fromString(e,...n);return i_(r),new Ue(t,null,new X(r))}{if(!(t instanceof Ue||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return i_(r),new Ue(t.firestore,t instanceof Ir?t.converter:null,new X(r))}}/**
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
 */const K_="AsyncQueue";class Q_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new MT(this,"async_queue_retry"),this._c=()=>{const r=bh();r&&G(K_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=bh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Xn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!jo(e))throw e;G(K_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,kr("INTERNAL UNHANDLED ERROR: ",Y_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Gm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&re(47125,{Pc:Y_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Y_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function J_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class wn extends xl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Q_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Q_(e),this._firestoreClient=void 0,await e}}}function Le(t,e){const n=typeof t=="object"?t:dl(),r=typeof t=="string"?t:Ec,s=gi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=WE("firestore");i&&nI(s,...i)}return s}function wi(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Qj(t),t._firestoreClient}function Qj(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,d,f){return new yP(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,eI(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Bj(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class rI{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class sI{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(ft.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gl(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:nt("string",tn._jsonSchemaVersion),bytes:nt("string")};/**
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
 */class xi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function iI(){return new xi(Kf)}/**
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
 */class El{constructor(e){this._methodName=e}}/**
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
 */class Dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(gl(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:nt("string",Dn._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gl(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new W(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:nt("string",On._jsonSchemaVersion),vectorValues:nt("object")};/**
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
 */const Yj=/^__.*__$/;class Jj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new yl(e,this.data,n,this.fieldTransforms)}}class oI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:t})}}class sg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new sg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return kc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(aI(this.Ac)&&Yj.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Xj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vd(e)}Cc(e,n,r,s=!1){return new sg({Ac:e,methodName:n,Dc:r,path:ut.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tl(t){const e=t._freezeSettings(),n=vd(t._databaseId);return new Xj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ig(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ag("Data must be an object, but it was:",o,r);const l=cI(r,o);let u,d;if(i.merge)u=new rn(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=cp(e,p,n);if(!o.contains(m))throw new W(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hI(f,m)||f.push(m)}u=new rn(f),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new Jj(new qt(l),u,d)}class xd extends El{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xd}}class og extends El{_toFieldTransform(e){return new zP(e.path,new Za)}isEqual(e){return e instanceof og}}function lI(t,e,n,r){const s=t.Cc(1,e,n);ag("Data must be an object, but it was:",s,r);const i=[],o=qt.empty();bs(r,(u,d)=>{const f=lg(e,u,n);d=Ie(d);const p=s.yc(f);if(d instanceof xd)i.push(f);else{const m=Il(d,p);m!=null&&(i.push(f),o.set(f,m))}});const l=new rn(i);return new oI(o,l,s.fieldTransforms)}function uI(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[cp(e,r,n)],u=[s];if(i.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(cp(e,i[m])),u.push(i[m+1]);const d=[],f=qt.empty();for(let m=l.length-1;m>=0;--m)if(!hI(d,l[m])){const y=l[m];let S=u[m];S=Ie(S);const A=o.yc(y);if(S instanceof xd)d.push(y);else{const C=Il(S,A);C!=null&&(d.push(y),f.set(y,C))}}const p=new rn(d);return new oI(f,p,o.fieldTransforms)}function Zj(t,e,n,r=!1){return Il(n,t.Cc(r?4:3,e))}function Il(t,e){if(dI(t=Ie(t)))return ag("Unsupported field value:",e,t),cI(t,e);if(t instanceof El)return function(r,s){if(!aI(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Il(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=be.fromDate(r);return{timestampValue:Nc(s.serializer,i)}}if(r instanceof be){const i=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nc(s.serializer,i)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:NT(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof On)return function(o,l){return{mapValue:{fields:{[eT]:{stringValue:tT},[Tc]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Om(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ad(r)}`)}(t,e)}function cI(t,e){const n={};return K0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,s)=>{const i=Il(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Dn||t instanceof tn||t instanceof Ue||t instanceof El||t instanceof On)}function ag(t,e,n){if(!dI(n)||!H0(n)){const r=ad(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function cp(t,e,n){if((e=Ie(e))instanceof xi)return e._internalPath;if(typeof e=="string")return lg(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const eD=new RegExp("[~\\*/\\[\\]]");function lg(t,e,n){if(e.search(eD)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xi(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function hI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class fI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tD extends fI{data(){return super.data()}}function Ed(t,e){return typeof e=="string"?lg(t,e):e instanceof xi?e._internalPath:e._delegate._internalPath}/**
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
 */function pI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ug{}class cg extends ug{}function on(t,e,...n){let r=[];e instanceof ug&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Td).length,l=i.filter(u=>u instanceof Sl).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Sl extends cg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sl(e,n,r)}_apply(e){const n=this._parse(e);return mI(e._query,n),new ir(e.firestore,e.converter,Zf(e._query,n))}_parse(e){const n=Tl(e.firestore);return function(i,o,l,u,d,f,p){let m;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Z_(p,f);const S=[];for(const A of p)S.push(X_(u,i,A));m={arrayValue:{values:S}}}else m=X_(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Z_(p,f),m=Zj(l,o,p,f==="in"||f==="not-in");return tt.create(d,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Nl(t,e,n){const r=e,s=Ed("where",t);return Sl._create(s,r,n)}class Td extends ug{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Td(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)mI(o,u),o=Zf(o,u)}(e._query,n),new ir(e.firestore,e.converter,Zf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Id extends cg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Id(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xa(i,o)}(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new yi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function jr(t,e="asc"){const n=e,r=Ed("orderBy",t);return Id._create(r,n)}function X_(t,e,n){if(typeof(n=Ie(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uT(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!X.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return p_(t,new X(r))}if(n instanceof Ue)return p_(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ad(n)}.`)}function Z_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mI(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gI{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Tc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Qe(o.doubleValue));return new On(n)}convertGeoPoint(e){return new Dn(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ya(e));default:return null}}convertTimestamp(e){const n=xs(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Te(jT(r),9688,{name:e});const s=new vo(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||kr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function dg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function yI(){return new rI("count")}class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends fI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ed("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=gs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",gs._jsonSchema={type:nt("string",gs._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Na extends gs{data(e={}){return super.data(e)}}class ys{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Na(this._firestore,this._userDataWriter,r.key,r,new Qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Na(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Na(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Qi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:nD(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ys._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=od.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:t})}}/**
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
 */function De(t){t=dt(t,Ue);const e=dt(t.firestore,wn);return Hj(wi(e),t._key).then(n=>vI(e,t,n))}ys._jsonSchemaVersion="firestore/querySnapshot/1.0",ys._jsonSchema={type:nt("string",ys._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class Sd extends gI{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function ht(t){t=dt(t,ir);const e=dt(t.firestore,wn),n=wi(e),r=new Sd(e);return pI(t._query),Gj(n,t._query).then(s=>new ys(e,r,t,s))}function Jt(t,e,n){t=dt(t,Ue);const r=dt(t.firestore,wn),s=dg(t.converter,e,n);return Oo(r,[ig(Tl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lt.none())])}function hg(t,e,n,...r){t=dt(t,Ue);const s=dt(t.firestore,wn),i=Tl(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof xi?uI(i,"updateDoc",t._key,e,n,r):lI(i,"updateDoc",t._key,e),Oo(s,[o.toMutation(t._key,Lt.exists(!0))])}function Ct(t){return Oo(dt(t.firestore,wn),[new gd(t._key,Lt.none())])}function Ks(t,e){const n=dt(t.firestore,wn),r=J(t),s=dg(t.converter,e);return Oo(n,[ig(Tl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function bn(t,...e){var u,d,f;t=Ie(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||J_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(J_(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(d=p.error)==null?void 0:d.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,l;if(t instanceof Ue)o=dt(t.firestore,wn),l=dd(t._key.path),i={next:p=>{e[r]&&e[r](vI(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=dt(t,ir);o=dt(p.firestore,wn),l=p._query;const m=new Sd(o);i={next:y=>{e[r]&&e[r](new ys(o,m,p,y))},error:e[r+1],complete:e[r+2]},pI(t._query)}return function(m,y,S,A){const C=new tg(A),_=new Xm(y,C,S);return m.asyncQueue.enqueueAndForget(async()=>Qm(await Rc(m),_)),()=>{C.Nu(),m.asyncQueue.enqueueAndForget(async()=>Ym(await Rc(m),_))}}(wi(o),l,s,i)}function Oo(t,e){return function(r,s){const i=new Xn;return r.asyncQueue.enqueueAndForget(async()=>jj(await qj(r),s,i)),i.promise}(wi(t),e)}function vI(t,e,n){const r=n.docs.get(e._key),s=new Sd(t);return new gs(t,s,e._key,r,new Qi(n.hasPendingWrites,n.fromCache),e.converter)}function Pc(t){return _I(t,{count:yI()})}function _I(t,e){const n=dt(t.firestore,wn),r=wi(n),s=mP(e,(i,o)=>new JP(o,i.aggregateType,i._internalFieldPath));return Kj(r,t._query,s).then(i=>function(l,u,d){const f=new Sd(l);return new sI(u,f,d)}(n,t,i))}/**
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
 */class wI{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Tl(e)}set(e,n,r){this._verifyNotCommitted();const s=kh(e,this._firestore),i=dg(s.converter,n,r),o=ig(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Lt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=kh(e,this._firestore);let o;return o=typeof(n=Ie(n))=="string"||n instanceof xi?uI(this._dataReader,"WriteBatch.update",i._key,n,r,s):lI(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Lt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=kh(e,this._firestore);return this._mutations=this._mutations.concat(new gd(n._key,Lt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function kh(t,e){if((t=Ie(t)).firestore!==e)throw new W(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Ve(){return new og("serverTimestamp")}/**
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
 */function xI(t){return wi(t=dt(t,wn)),new wI(t,e=>Oo(t,e))}(function(e,n=!0){(function(s){ko=s})(bo),Ln(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new wn(new Xk(r.getProvider("auth-internal")),new tP(o,r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(d.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Yt(n_,r_,e),Yt(n_,r_,"esm2020")})();const rD=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:gI,AggregateField:rI,AggregateQuerySnapshot:sI,Bytes:tn,CollectionReference:Ir,DocumentReference:Ue,DocumentSnapshot:gs,FieldPath:xi,FieldValue:El,Firestore:wn,FirestoreError:W,GeoPoint:Dn,Query:ir,QueryCompositeFilterConstraint:Td,QueryConstraint:cg,QueryDocumentSnapshot:Na,QueryFieldFilterConstraint:Sl,QueryOrderByConstraint:Id,QuerySnapshot:ys,SnapshotMetadata:Qi,Timestamp:be,VectorValue:On,WriteBatch:wI,_AutoId:od,_ByteString:ft,_DatabaseId:vo,_DocumentKey:X,_EmptyAuthCredentialsProvider:q0,_FieldPath:ut,_cast:dt,_logWarn:ai,_validateIsNotUsedTogether:W0,addDoc:Ks,collection:ve,collectionGroup:rg,connectFirestoreEmulator:nI,count:yI,deleteDoc:Ct,doc:J,documentId:iI,ensureFirestoreConfigured:wi,executeWrite:Oo,getAggregateFromServer:_I,getCountFromServer:Pc,getDoc:De,getDocs:ht,getFirestore:Le,onSnapshot:bn,orderBy:jr,query:on,serverTimestamp:Ve,setDoc:Jt,updateDoc:hg,where:Nl,writeBatch:xI},Symbol.toStringTag,{value:"Module"}));var sD="firebase",iD="12.1.0";/**
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
 */Yt(sD,iD,"app");const EI="@firebase/installations",fg="0.6.19";/**
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
 */const TI=1e4,II=`w:${fg}`,SI="FIS_v2",oD="https://firebaseinstallations.googleapis.com/v1",aD=60*60*1e3,lD="installations",uD="Installations";/**
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
 */const cD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ui=new mi(lD,uD,cD);function NI(t){return t instanceof Un&&t.code.includes("request-failed")}/**
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
 */function AI({projectId:t}){return`${oD}/projects/${t}/installations`}function CI(t){return{token:t.token,requestStatus:2,expiresIn:hD(t.expiresIn),creationTime:Date.now()}}async function bI(t,e){const r=(await e.json()).error;return ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dD(t,{refreshToken:e}){const n=RI(t);return n.append("Authorization",fD(e)),n}async function kI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function hD(t){return Number(t.replace("s","000"))}function fD(t){return`${SI} ${t}`}/**
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
 */async function pD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=AI(t),s=RI(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:SI,appId:t.appId,sdkVersion:II},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await kI(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:CI(d.authToken)}}else throw await bI("Create Installation",u)}/**
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
 */function PI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function mD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gD=/^[cdef][\w-]{21}$/,dp="";function yD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vD(t);return gD.test(n)?n:dp}catch{return dp}}function vD(t){return mD(t).substr(0,22)}/**
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
 */function Nd(t){return`${t.appName}!${t.appId}`}/**
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
 */const jI=new Map;function DI(t,e){const n=Nd(t);OI(n,e),_D(n,e)}function OI(t,e){const n=jI.get(t);if(n)for(const r of n)r(e)}function _D(t,e){const n=wD();n&&n.postMessage({key:t,fid:e}),xD()}let Qs=null;function wD(){return!Qs&&"BroadcastChannel"in self&&(Qs=new BroadcastChannel("[Firebase] FID Change"),Qs.onmessage=t=>{OI(t.data.key,t.data.fid)}),Qs}function xD(){jI.size===0&&Qs&&(Qs.close(),Qs=null)}/**
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
 */const ED="firebase-installations-database",TD=1,ci="firebase-installations-store";let Ph=null;function pg(){return Ph||(Ph=nd(ED,TD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}})),Ph}async function jc(t,e){const n=Nd(t),s=(await pg()).transaction(ci,"readwrite"),i=s.objectStore(ci),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&DI(t,e.fid),e}async function VI(t){const e=Nd(t),r=(await pg()).transaction(ci,"readwrite");await r.objectStore(ci).delete(e),await r.done}async function Ad(t,e){const n=Nd(t),s=(await pg()).transaction(ci,"readwrite"),i=s.objectStore(ci),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&DI(t,l.fid),l}/**
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
 */async function mg(t){let e;const n=await Ad(t.appConfig,r=>{const s=ID(r),i=SD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===dp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ID(t){const e=t||{fid:yD(),registrationStatus:0};return LI(e)}function SD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ui.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ND(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:AD(t)}:{installationEntry:e}}async function ND(t,e){try{const n=await pD(t,e);return jc(t.appConfig,n)}catch(n){throw NI(n)&&n.customData.serverCode===409?await VI(t.appConfig):await jc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function AD(t){let e=await ew(t.appConfig);for(;e.registrationStatus===1;)await PI(100),e=await ew(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mg(t);return r||n}return e}function ew(t){return Ad(t,e=>{if(!e)throw ui.create("installation-not-found");return LI(e)})}function LI(t){return CD(t)?{fid:t.fid,registrationStatus:0}:t}function CD(t){return t.registrationStatus===1&&t.registrationTime+TI<Date.now()}/**
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
 */async function bD({appConfig:t,heartbeatServiceProvider:e},n){const r=RD(t,n),s=dD(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:II,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await kI(()=>fetch(r,l));if(u.ok){const d=await u.json();return CI(d)}else throw await bI("Generate Auth Token",u)}function RD(t,{fid:e}){return`${AI(t)}/${e}/authTokens:generate`}/**
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
 */async function gg(t,e=!1){let n;const r=await Ad(t.appConfig,i=>{if(!MI(i))throw ui.create("not-registered");const o=i.authToken;if(!e&&jD(o))return i;if(o.requestStatus===1)return n=kD(t,e),i;{if(!navigator.onLine)throw ui.create("app-offline");const l=OD(i);return n=PD(t,l),l}});return n?await n:r.authToken}async function kD(t,e){let n=await tw(t.appConfig);for(;n.authToken.requestStatus===1;)await PI(100),n=await tw(t.appConfig);const r=n.authToken;return r.requestStatus===0?gg(t,e):r}function tw(t){return Ad(t,e=>{if(!MI(e))throw ui.create("not-registered");const n=e.authToken;return VD(n)?{...e,authToken:{requestStatus:0}}:e})}async function PD(t,e){try{const n=await bD(t,e),r={...e,authToken:n};return await jc(t.appConfig,r),n}catch(n){if(NI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await VI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await jc(t.appConfig,r)}throw n}}function MI(t){return t!==void 0&&t.registrationStatus===2}function jD(t){return t.requestStatus===2&&!DD(t)}function DD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+aD}function OD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function VD(t){return t.requestStatus===1&&t.requestTime+TI<Date.now()}/**
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
 */async function LD(t){const e=t,{installationEntry:n,registrationPromise:r}=await mg(e);return r?r.catch(console.error):gg(e).catch(console.error),n.fid}/**
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
 */async function MD(t,e=!1){const n=t;return await UD(n),(await gg(n,e)).token}async function UD(t){const{registrationPromise:e}=await mg(t);e&&await e}/**
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
 */function FD(t){if(!t||!t.options)throw jh("App Configuration");if(!t.name)throw jh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jh(t){return ui.create("missing-app-config-values",{valueName:t})}/**
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
 */const UI="installations",$D="installations-internal",BD=t=>{const e=t.getProvider("app").getImmediate(),n=FD(e),r=gi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zD=t=>{const e=t.getProvider("app").getImmediate(),n=gi(e,UI).getImmediate();return{getId:()=>LD(n),getToken:s=>MD(n,s)}};function qD(){Ln(new _n(UI,BD,"PUBLIC")),Ln(new _n($D,zD,"PRIVATE"))}qD();Yt(EI,fg);Yt(EI,fg,"esm2020");/**
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
 */const WD="/firebase-messaging-sw.js",HD="/firebase-cloud-messaging-push-scope",FI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",GD="https://fcmregistrations.googleapis.com/v1",$I="google.c.a.c_id",KD="google.c.a.c_l",QD="google.c.a.ts",YD="google.c.a.e",nw=1e4;var rw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(rw||(rw={}));/**
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
 */var nl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(nl||(nl={}));/**
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
 */function mr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function JD(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Dh="fcm_token_details_db",XD=5,sw="fcm_token_object_Store";async function ZD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Dh))return null;let e=null;return(await nd(Dh,XD,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(sw))return;const l=o.objectStore(sw),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:mr(d.vapidKey)}}}else if(s===3){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:mr(d.auth),p256dh:mr(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:mr(d.vapidKey)}}}else if(s===4){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:mr(d.auth),p256dh:mr(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:mr(d.vapidKey)}}}}}})).close(),await xh(Dh),await xh("fcm_vapid_details_db"),await xh("undefined"),eO(e)?e:null}function eO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const tO="firebase-messaging-database",nO=1,rl="firebase-messaging-store";let Oh=null;function BI(){return Oh||(Oh=nd(tO,nO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rl)}}})),Oh}async function rO(t){const e=zI(t),r=await(await BI()).transaction(rl).objectStore(rl).get(e);if(r)return r;{const s=await ZD(t.appConfig.senderId);if(s)return await yg(t,s),s}}async function yg(t,e){const n=zI(t),s=(await BI()).transaction(rl,"readwrite");return await s.objectStore(rl).put(e,n),await s.done,e}function zI({appConfig:t}){return t.appId}/**
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
 */const sO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},bt=new mi("messaging","Messaging",sO);/**
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
 */async function iO(t,e){const n=await _g(t),r=qI(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(vg(t.appConfig),s)).json()}catch(o){throw bt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw bt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw bt.create("token-subscribe-no-token");return i.token}async function oO(t,e){const n=await _g(t),r=qI(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${vg(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw bt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw bt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw bt.create("token-update-no-token");return i.token}async function aO(t,e){const r={method:"DELETE",headers:await _g(t)};try{const i=await(await fetch(`${vg(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw bt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw bt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function vg({projectId:t}){return`${GD}/projects/${t}/registrations`}async function _g({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function qI({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==FI&&(s.web.applicationPubKey=r),s}/**
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
 */const lO=7*24*60*60*1e3;async function uO(t){const e=await dO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:mr(e.getKey("auth")),p256dh:mr(e.getKey("p256dh"))},r=await rO(t.firebaseDependencies);if(r){if(hO(r.subscriptionOptions,n))return Date.now()>=r.createTime+lO?cO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await aO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return iw(t.firebaseDependencies,n)}else return iw(t.firebaseDependencies,n)}async function cO(t,e){try{const n=await oO(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await yg(t.firebaseDependencies,r),n}catch(n){throw n}}async function iw(t,e){const r={token:await iO(t,e),createTime:Date.now(),subscriptionOptions:e};return await yg(t,r),r.token}async function dO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:JD(e)})}function hO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function ow(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return fO(e,t),pO(e,t),mO(e,t),e}function fO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function pO(t,e){e.data&&(t.data=e.data)}function mO(t,e){var s,i,o,l;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function gO(t){return typeof t=="object"&&!!t&&$I in t}/**
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
 */function yO(t){if(!t||!t.options)throw Vh("App Configuration Object");if(!t.name)throw Vh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Vh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Vh(t){return bt.create("missing-app-config-values",{valueName:t})}/**
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
 */class vO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=yO(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function _O(t){try{t.swRegistration=await navigator.serviceWorker.register(WD,{scope:HD}),t.swRegistration.update().catch(()=>{}),await wO(t.swRegistration)}catch(e){throw bt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function wO(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${nw} ms`)),nw),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function xO(t,e){if(!e&&!t.swRegistration&&await _O(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw bt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function EO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=FI)}/**
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
 */async function WI(t,e){if(!navigator)throw bt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw bt.create("permission-blocked");return await EO(t,e==null?void 0:e.vapidKey),await xO(t,e==null?void 0:e.serviceWorkerRegistration),uO(t)}/**
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
 */async function TO(t,e,n){const r=IO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[$I],message_name:n[KD],message_time:n[QD],message_device_time:Math.floor(Date.now()/1e3)})}function IO(t){switch(t){case nl.NOTIFICATION_CLICKED:return"notification_open";case nl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function SO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===nl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(ow(n)):t.onMessageHandler.next(ow(n)));const r=n.data;gO(r)&&r[YD]==="1"&&await TO(t,n.messageType,r)}const aw="@firebase/messaging",lw="0.12.23";/**
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
 */const NO=t=>{const e=new vO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>SO(e,n)),e},AO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>WI(e,r)}};function CO(){Ln(new _n("messaging",NO,"PUBLIC")),Ln(new _n("messaging-internal",AO,"PRIVATE")),Yt(aw,lw),Yt(aw,lw,"esm2020")}/**
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
 */async function HI(){try{await QE()}catch{return!1}return typeof window<"u"&&KE()&&yC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function bO(t,e){if(!navigator)throw bt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function RO(t=dl()){return HI().then(e=>{if(!e)throw bt.create("unsupported-browser")},e=>{throw bt.create("indexed-db-unsupported")}),gi(Ie(t),"messaging").getImmediate()}async function kO(t,e){return t=Ie(t),WI(t,e)}function PO(t,e){return t=Ie(t),bO(t,e)}CO();const wg={apiKey:"AIzaSyAvTkBdah-m0JBKF2hPh2ra95ZrFfFXPZs",authDomain:"immanuel-app.firebaseapp.com",projectId:"immanuel-app",storageBucket:"immanuel-app.firebasestorage.app",messagingSenderId:"815824103273",appId:"1:815824103273:web:3817385bebff5f704a3ff8",measurementId:"G-P6WR1NQRB8"};function jO(t){const e=Object.entries(t).filter(([,n])=>!n||String(n).trim()==="").map(([n])=>n);if(e.length){const n=Object.fromEntries(Object.entries(t).map(([r,s])=>[r,s&&(typeof s=="string"?s.slice(0,6)+"…":s)]));throw console.error("[firebase] Missing config keys:",e,`
Loaded values:`,n),new Error("Firebase configuration is incomplete. Missing: "+e.join(", "))}}jO(wg);const se=Eb().length?dl():XE(wg),sl=Ge(se),xg=Le(se),DO=new pn;DO.setCustomParameters({prompt:"select_account"});typeof window<"u"&&(window.__FIREBASE_CONFIG__=wg);async function Cd(){try{return await HI()?RO(se):null}catch{return null}}const GI=R.createContext(void 0);function OO({children:t}){const e=R.useMemo(()=>Ge(se),[]),n=R.useMemo(()=>Le(se),[]),[r,s]=R.useState(e.currentUser),[i,o]=R.useState(!0),[l,u]=R.useState(!1);async function d(A){if(!A){u(!1);return}try{const C=A.uid,w=(await De(J(n,"admins",C))).exists();let E=!1;try{const P=on(rg(n,"groupAdmins"),Nl("uid","==",C));E=!(await ht(P)).empty}catch{E=!1}u(w||E)}catch{u(!1)}}R.useEffect(()=>{const A=sr(e,async C=>{s(C),await d(C),o(!1)});return()=>A()},[e]);const f=async(A,C)=>{await T0(e,A,C),await d(e.currentUser)},p=async()=>{const A=new pn;await Am(e,A),await d(e.currentUser)},m=async()=>{await qf(e),u(!1)},y=async()=>{await d(e.currentUser)},S=R.useMemo(()=>({user:r,loading:i,isAdmin:l,login:f,signInWithGoogle:p,logout:m,refresh:y}),[r,i,l]);return c.jsx(GI.Provider,{value:S,children:t})}function bd(){const t=R.useContext(GI);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}function $n({label:t="Loading..."}){return c.jsxs("div",{className:"flex items-center gap-3 text-slate-500 py-6",children:[c.jsxs("svg",{className:"animate-spin h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]}),c.jsx("span",{children:t})]})}function dn({children:t}){const e=Ge(se),[n,r]=z.useState(!1),[s,i]=z.useState(e.currentUser);return z.useEffect(()=>{const o=sr(e,l=>{i(l),r(!0)});return()=>o()},[e]),n?s?c.jsx(c.Fragment,{children:t}):c.jsx(Yn,{to:"/login",replace:!0}):c.jsx("div",{className:"max-w-xl mx-auto p-6",children:c.jsx($n,{label:"Checking authentication…"})})}function VO(){var l;const t=Ge(se),e=Le(se),[n,r]=R.useState(!0),[s,i]=R.useState(null),o=(l=t.currentUser)==null?void 0:l.uid;return R.useEffect(()=>{let u=!0;async function d(){if(!o){i(null),r(!1);return}r(!0);try{const f=J(e,"users",o),p=await De(f);if(p.exists()){if(!u)return;i(p.data()||{})}else{await Jt(f,{createdAt:Ve()},{merge:!0});const m=await De(f);if(!u)return;i(m.data()||{})}}finally{r(!1)}}return d(),()=>{u=!1}},[e,o]),{loading:n,profile:s,uid:o}}function LO(t){return t?!!(t.displayName&&String(t.displayName).trim().length>1):!1}function Dt({children:t}){const e=Ge(se),{loading:n,profile:r}=VO(),[s,i]=z.useState(!1),o=e.currentUser,l=xn();if(R.useEffect(()=>{const f=sr(e,()=>i(!0));return()=>f()},[e]),!s||n)return c.jsx("div",{className:"max-w-xl mx-auto p-6",children:c.jsx($n,{label:"Loading your profile…"})});if(!o)return c.jsx(Yn,{to:"/login",replace:!0});const u=LO(r),d=l.pathname==="/welcome";return!u&&!d?c.jsx(Yn,{to:"/welcome",replace:!0}):u&&d?c.jsx(Yn,{to:"/dashboard",replace:!0}):c.jsx(c.Fragment,{children:t})}function MO({label:t="Checking admin access…"}){return c.jsx("div",{className:"max-w-xl mx-auto p-6 text-slate-700",children:t})}function Ms({children:t}){const e=Ge(se),n=Le(se),[r,s]=z.useState(!1),[i,o]=z.useState(null),[l,u]=z.useState(null);return z.useEffect(()=>{const d=sr(e,async f=>{if(s(!0),!f){o(!1);return}try{const p=await De(J(n,"admins",f.uid));o(p.exists())}catch(p){u((p==null?void 0:p.message)||String(p)),o(!1)}});return()=>d()},[e,n]),!r||i===null?c.jsx(MO,{}):e.currentUser?i?c.jsx(c.Fragment,{children:t}):c.jsx(Yn,{to:"/dashboard",replace:!0}):c.jsx(Yn,{to:"/login",replace:!0})}function UO({label:t="Checking access…"}){return c.jsx("div",{className:"max-w-xl mx-auto p-6 text-slate-700",children:t})}function Lh({children:t}){const{slug:e}=fi(),n=e,r=Ge(se),s=Le(se),[i,o]=z.useState(!1),[l,u]=z.useState(null);return z.useEffect(()=>{const d=sr(r,async f=>{if(o(!0),!f||!n){u(!1);return}try{if((await De(J(s,"admins",f.uid))).exists()){u(!0);return}const m=await De(J(s,`groups/${n}/groupAdmins/${f.uid}`));u(m.exists())}catch{u(!1)}});return()=>d()},[r,s,n]),!i||l===null?c.jsx(UO,{}):l?c.jsx(c.Fragment,{children:t}):c.jsx(Yn,{to:"/dashboard",replace:!0})}function KI({group:t,isMember:e,footer:n}){const r=t.name||t.title||uw(t.id),s=t.description||"",i=t.parent?`Parent: ${uw(t.parent)}`:null;return c.jsxs("div",{className:"rounded-xl border border-border bg-card p-4 flex flex-col justify-between shadow-sm",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsx("h3",{className:"text-lg font-semibold text-accent",children:r}),e&&c.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-700 border border-emerald-200",children:"Member"})]}),i&&c.jsx("p",{className:"text-xs text-text2 mt-1",children:i}),s&&c.jsx("p",{className:"text-sm text-text2 mt-3",children:s})]}),c.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[e?c.jsx(fe,{to:`/groups/${t.id}`,className:"inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800",children:"View"}):c.jsx("button",{type:"button",disabled:!0,className:"inline-flex items-center rounded-lg bg-slate-200 text-slate-500 px-3 py-1.5 text-sm cursor-not-allowed",title:"Join this group to view",children:"View"}),n]})]})}function uw(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function FO({groupId:t}){const[e,n]=R.useState("none"),[r,s]=R.useState(!1),i=Ge(se),o=Le(se),l=i.currentUser;R.useEffect(()=>{let f=!0;async function p(){if(!l)return;const m=ve(o,`users/${l.uid}/memberships`),y=on(m,Nl("groupId","==",t)),S=await ht(y);if(!f)return;if(!S.empty){n("member");return}const A=J(o,`groups/${t}/membershipRequests/${l.uid}`),C=await De(A);f&&n(C.exists()?"pending":"none")}return p(),()=>{f=!1}},[o,l,t]);async function u(){if(l){s(!0);try{const f=J(o,`users/${l.uid}/membershipRequests/${t}`),p=J(o,`groups/${t}/membershipRequests/${l.uid}`),m={uid:l.uid,groupId:t,createdAt:Ve(),displayName:l.displayName||l.email||"Member"};await Promise.all([Jt(f,m),Jt(p,m)]),n("pending")}finally{s(!1)}}}async function d(){if(l){s(!0);try{const f=J(o,`users/${l.uid}/membershipRequests/${t}`),p=J(o,`groups/${t}/membershipRequests/${l.uid}`);await Promise.all([Ct(f),Ct(p)]),n("none")}finally{s(!1)}}}return l?e==="member"?c.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700",children:"Member"}):e==="pending"?c.jsx("button",{onClick:d,className:"text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60",disabled:r,title:"Cancel request",children:"Pending — Cancel"}):c.jsx("button",{onClick:u,className:"text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60",disabled:r,children:"Request to Join"}):null}function $O(){const t=R.useMemo(()=>Le(se),[]),e=Ge(se),[n,r]=R.useState([]),[s,i]=R.useState(new Set),[o,l]=R.useState(!0);R.useEffect(()=>{let d=!1;async function f(){try{const m=(await ht(on(ve(t,"groups"),jr("name")))).docs.map(y=>({id:y.id,...y.data()}));if(d||r(m),e.currentUser){const y=e.currentUser.uid,S=await ht(ve(t,`users/${y}/memberships`));d||i(new Set(S.docs.map(A=>A.id)))}}finally{d||l(!1)}}return f(),()=>{d=!0}},[t,e.currentUser]);const u=R.useMemo(()=>n.filter(d=>!s.has(d.id)),[n,s]);return o?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading groups…"})})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-4",children:"Explore Groups"}),u.length>0?c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:u.map(d=>c.jsx(KI,{group:d,isMember:!1,footer:c.jsx(FO,{groupId:d.id})},d.id))}):c.jsx("div",{className:"rounded-xl border border-border bg-card p-6",children:c.jsx("p",{className:"text-text2",children:"You’ve already joined all available groups."})})]})})}function BO(){var Ds;const{slug:t=""}=fi(),e=z.useMemo(()=>Le(se),[]),n=Ge(se),[r,s]=z.useState(null),[i,o]=z.useState(!1),[l,u]=z.useState(!1),[d,f]=z.useState(!0),[p,m]=z.useState([]),[y,S]=z.useState([]),[A,C]=z.useState([]),[_,w]=z.useState(""),[E,P]=z.useState(!1),[O,M]=z.useState(!1),[I,v]=z.useState(null),[T,N]=z.useState([]),[k,j]=z.useState(""),[b,Ke]=z.useState(!1),[En,or]=z.useState({}),[Y,$]=z.useState(""),[H,Q]=z.useState(""),[ge,ue]=z.useState(""),[te,rt]=z.useState(null),[_t,qe]=z.useState(""),[Ce,Pt]=z.useState(""),[ar,lr]=z.useState(""),[ur,Mr]=z.useState(!1),[Ur,Xt]=z.useState(null),[ks,Al]=z.useState(""),[Ei,Cl]=z.useState({}),[Ti,Ii]=z.useState(""),[Vo,bl]=z.useState(!1),[Si,cr]=z.useState(""),[Rl,Je]=z.useState(!1),Xe=((Ds=n.currentUser)==null?void 0:Ds.uid)||null,Tn=z.useMemo(()=>y.find(F=>F.uid===Xe)||null,[y,Xe]),[kl,Ni]=z.useState(!1);z.useEffect(()=>{Ni(!!(Tn!=null&&Tn.muted))},[Tn==null?void 0:Tn.muted]);const Pl=z.useMemo(()=>Object.values(Ei).some(Boolean),[Ei]);function Ps(F,ne){return[F,ne].sort().join("_")}async function Ai(F){try{return(await De(F)).exists()}catch{return!1}}z.useEffect(()=>{let F=!1;async function ne(){try{if(!t)return;try{const ie=await De(J(e,"groups",t));ie.exists()&&!F&&s({id:ie.id,...ie.data()})}catch(ie){console.error("Failed to load group doc",ie)}let ce=!1,ee=!1;const xe=n.currentUser;if(xe){const ie=xe.uid;if(await Ai(J(e,"admins",ie)))ce=!0,ee=!0;else if(await Ai(J(e,`groups/${t}/groupAdmins/${ie}`)))ce=!0,ee=!0;else if(await Ai(J(e,`users/${ie}/memberships/${t}`)))ce=!0;else try{ce=(await ht(ve(e,`users/${ie}/memberships`))).docs.some(bi=>{const Fr=bi.data();return(Fr==null?void 0:Fr.groupId)===t||(Fr==null?void 0:Fr.groupSlug)===t})}catch(Ft){console.warn("Membership scan failed",Ft)}}F||(u(ee),o(ce))}finally{F||f(!1)}}return ne(),()=>{F=!0}},[e,n.currentUser,t]),z.useEffect(()=>{if(!i||!t)return;const F=bn(ve(e,`groups/${t}/resources`),ee=>{const xe=ee.docs.map(ie=>{var oe,jt,dr;return{id:ie.id,title:((oe=ie.data())==null?void 0:oe.title)||ie.id,url:((jt=ie.data())==null?void 0:jt.url)||"#",note:((dr=ie.data())==null?void 0:dr.note)||""}});m(xe)}),ne=bn(ve(e,`groups/${t}/members`),ee=>{const xe=ee.docs.map(ie=>({uid:ie.id,...ie.data()}));S(xe)}),ce=bn(on(ve(e,`groups/${t}/messages`),jr("createdAt","asc")),async ee=>{const xe=ee.docs.map(oe=>{var jt,dr,Ft,bi;return{id:oe.id,uid:(jt=oe.data())==null?void 0:jt.uid,displayName:(dr=oe.data())==null?void 0:dr.displayName,text:(Ft=oe.data())==null?void 0:Ft.text,createdAt:(bi=oe.data())==null?void 0:bi.createdAt}}),ie=await Promise.all(xe.map(async oe=>{var jt;try{const Ft=((jt=(await Pc(ve(e,`groups/${t}/messages/${oe.id}/replies`))).data())==null?void 0:jt.count)??0;return{...oe,replyCount:Number(Ft)}}catch{return{...oe,replyCount:0}}}));C(ie)});return()=>{F(),ne(),ce()}},[e,t,i]),z.useEffect(()=>{if(!i||!t||!n.currentUser)return;const F=n.currentUser.uid,ne=bn(on(ve(e,`users/${F}/threadReads`),Nl("groupId","==",t)),ce=>{const ee={};ce.forEach(xe=>{const ie=xe.data(),oe=(ie==null?void 0:ie.messageId)||"";oe&&(ee[oe]={lastReplyCount:ie.lastReplyCount,lastViewedAt:ie.lastViewedAt})}),or(ee)});return()=>ne()},[e,t,i,n.currentUser]);async function jl(F){var ee;F.preventDefault(),Xt(null);const ne=Y.trim(),ce=H.trim();if(!ne||!ce){Xt("Please enter a title and URL.");return}Mr(!0);try{await Ks(ve(e,`groups/${t}/resources`),{title:ne,url:ce,note:ge.trim()||"",createdAt:Ve(),createdBy:((ee=n.currentUser)==null?void 0:ee.uid)||null}),$(""),Q(""),ue("")}catch(xe){const ie=(xe==null?void 0:xe.message)||"Could not add resource.";Xt(ie)}finally{Mr(!1)}}async function Lo(){var ce;if(!te)return;Xt(null);const F=_t.trim(),ne=Ce.trim();if(!F||!ne){Xt("Please enter a title and URL.");return}Mr(!0);try{await hg(J(e,`groups/${t}/resources/${te}`),{title:F,url:ne,note:ar.trim()||"",updatedAt:Ve(),updatedBy:((ce=n.currentUser)==null?void 0:ce.uid)||null}),rt(null),qe(""),Pt(""),lr("")}catch(ee){const xe=(ee==null?void 0:ee.message)||"Could not save changes.";Xt(xe)}finally{Mr(!1)}}function kd(F){rt(F.id),qe(F.title),Pt(F.url),lr(F.note||""),Xt(null)}async function Pd(F){if(Xt(null),!!window.confirm("Delete this resource?"))try{await Ct(J(e,`groups/${t}/resources/${F}`))}catch(ne){const ce=(ne==null?void 0:ne.message)||"Could not delete resource.";Xt(ce)}}async function Mo(F){F.preventDefault();const ne=_.trim();if(!(!ne||!n.currentUser)){P(!0);try{await Ks(ve(e,`groups/${t}/messages`),{uid:n.currentUser.uid,displayName:n.currentUser.displayName||"Member",text:ne,createdAt:Ve()}),w("")}finally{P(!1)}}}async function Dl(F){window.confirm("Delete this message?")&&await Ct(J(e,`groups/${t}/messages/${F}`))}const Bn=z.useRef(null);async function js(F){var ce;v(F),M(!0);try{if(n.currentUser){const ee=n.currentUser.uid,xe=await Pc(ve(e,`groups/${t}/messages/${F.id}/replies`)),ie=Number(((ce=xe.data())==null?void 0:ce.count)||0);await Jt(J(e,`users/${ee}/threadReads/${t}__${F.id}`),{groupId:t,messageId:F.id,lastReplyCount:ie,lastViewedAt:Ve()},{merge:!0})}}catch{}Bn.current&&(Bn.current(),Bn.current=null);const ne=bn(on(ve(e,`groups/${t}/messages/${F.id}/replies`),jr("createdAt","asc")),ee=>{const xe=ee.docs.map(ie=>{const oe=ie.data();return{id:ie.id,uid:(oe==null?void 0:oe.uid)||"",displayName:(oe==null?void 0:oe.displayName)||void 0,text:(oe==null?void 0:oe.text)||"",createdAt:oe==null?void 0:oe.createdAt}});N(xe)});Bn.current=ne}function Ci(){M(!1),v(null),N([]),Bn.current&&(Bn.current(),Bn.current=null)}async function Uo(F){if(F.preventDefault(),!I||!n.currentUser)return;const ne=k.trim();if(ne){Ke(!0);try{await Ks(ve(e,`groups/${t}/messages/${I.id}/replies`),{uid:n.currentUser.uid,displayName:n.currentUser.displayName||"Member",text:ne,createdAt:Ve()}),j("")}catch(ce){alert(ce&&ce.message||"Could not post reply. Check Firestore rules and your connection.")}finally{Ke(!1)}}}const zn=z.useMemo(()=>{var ce;const F=(ce=n.currentUser)==null?void 0:ce.uid,ne=ks.trim().toLowerCase();return y.filter(ee=>ee.uid!==F).filter(ee=>{if(!ne)return!0;const xe=(ee.displayName||"").toLowerCase(),ie=(ee.email||"").toLowerCase();return xe.includes(ne)||ie.includes(ne)||ee.uid.toLowerCase().includes(ne)})},[y,ks,n.currentUser]);async function Ol(F){var xe,ie;F.preventDefault(),cr(""),Je(!1);const ne=(xe=n.currentUser)==null?void 0:xe.uid;if(!ne){cr("You must be signed in.");return}const ce=Ti.trim();if(!ce){cr("Enter a message.");return}const ee=Object.entries(Ei).filter(([,oe])=>oe).map(([oe])=>oe);if(ee.length===0){cr("Select at least one member.");return}bl(!0);try{for(const oe of ee){const jt=Ps(ne,oe);await Ks(ve(e,`groups/${t}/directMessages/${jt}/messages`),{text:ce,from:ne,to:oe,displayName:((ie=n.currentUser)==null?void 0:ie.displayName)||"Member",createdAt:Ve()})}Ii(""),Cl({}),Je(!0),window.setTimeout(()=>Je(!1),2e3)}catch(oe){const jt=(oe==null?void 0:oe.message)||"Failed to send DM(s).";cr(jt)}finally{bl(!1)}}return d?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading group…"})})}):r?i?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:r.name||t}),r.description&&c.jsx("p",{className:"text-sm text-text2 mt-2",children:r.description})]}),Xe&&c.jsx("div",{className:"mt-1",children:c.jsxs("label",{className:"inline-flex items-center gap-2 text-sm",children:[c.jsx("input",{type:"checkbox",checked:kl,onChange:async F=>{const ne=F.target.checked;Ni(ne);try{await Jt(J(e,`groups/${t}/members/${Xe}`),{muted:ne},{merge:!0})}catch{Ni(!ne),alert("Could not update notification setting.")}}}),c.jsx("span",{children:"Mute notifications for this group"})]})})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("div",{className:"flex items-center justify-between",children:c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Resources"})}),l&&c.jsxs("form",{onSubmit:jl,className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{className:"sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Title",value:Y,onChange:F=>$(F.target.value)}),c.jsx("input",{className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"https://...",value:H,onChange:F=>Q(F.target.value)}),c.jsx("div",{className:"sm:col-span-6",children:c.jsx("textarea",{className:"w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Optional note (description)…",value:ge,onChange:F=>ue(F.target.value)})}),c.jsxs("div",{className:"sm:col-span-6",children:[c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm",disabled:ur,children:ur?"Saving…":"Add resource"}),Ur&&c.jsx("span",{className:"ml-3 text-sm text-rose-700",children:Ur})]})]}),c.jsxs("ul",{className:"mt-3 divide-y divide-border",children:[p.map(F=>c.jsxs("li",{className:"py-2 flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("a",{href:F.url,target:"_blank",rel:"noreferrer",className:"text-sm text-accent underline underline-offset-2 break-all",children:F.title}),F.note&&c.jsx("p",{className:"text-xs text-text2 mt-1",children:F.note})]}),l&&c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{type:"button",onClick:()=>kd(F),className:"text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted",children:"Edit"}),c.jsx("button",{type:"button",onClick:()=>Pd(F.id),className:"text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50",children:"Remove"})]})]},F.id)),p.length===0&&c.jsx("li",{className:"py-2 text-sm text-text2",children:"No resources yet."})]}),te&&c.jsxs("form",{onSubmit:F=>{F.preventDefault(),Lo()},className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{className:"sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Title",value:_t,onChange:F=>qe(F.target.value)}),c.jsx("input",{className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"https://...",value:Ce,onChange:F=>Pt(F.target.value)}),c.jsx("div",{className:"sm:col-span-6",children:c.jsx("textarea",{className:"w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Optional note (description)…",value:ar,onChange:F=>lr(F.target.value)})}),c.jsxs("div",{className:"sm:col-span-6 flex items-center gap-2",children:[c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm",disabled:ur,children:ur?"Saving…":"Save changes"}),c.jsx("button",{type:"button",onClick:()=>{rt(null),qe(""),Pt(""),lr("")},className:"text-sm rounded-lg border border-border px-3 py-2 hover:bg-muted",children:"Cancel"}),Ur&&c.jsx("span",{className:"text-sm text-rose-700",children:Ur})]})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5 relative",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Messages"}),c.jsx("div",{className:"mt-3 space-y-2 max-h-80 overflow-auto pr-1",children:A.length>0?A.map(F=>{var xe,ie;const ne=((xe=En[F.id])==null?void 0:xe.lastReplyCount)||0,ce=F.replyCount||0,ee=ce>ne;return c.jsx("div",{className:"rounded-lg border border-slate-700 px-3 py-2",children:c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm",children:c.jsx("span",{className:"font-medium",children:F.displayName||"Member"})}),c.jsx("p",{className:"text-sm text-slate-200 whitespace-pre-wrap",children:F.text})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[ee&&ce>0&&c.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full font-medium",style:{backgroundColor:"#919FAA",color:"#ffffff"},children:"New replies"}),c.jsx("button",{onClick:()=>{js(F)},className:"text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted",title:"View thread / Reply",children:ce>0?`View thread (${ce})`:"Reply"}),(l||((ie=n.currentUser)==null?void 0:ie.uid)===F.uid)&&c.jsx("button",{onClick:()=>{Dl(F.id)},className:"text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit",children:"Delete"})]})]})},F.id)}):c.jsx("p",{className:"text-sm text-text2",children:"No messages yet."})}),c.jsxs("form",{onSubmit:Mo,className:"mt-3 flex gap-2",children:[c.jsx("input",{type:"text",value:_,onChange:F=>w(F.target.value),placeholder:"Write a message…",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"}),c.jsx("button",{type:"submit",disabled:E||!_.trim(),className:"rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800 disabled:opacity-60",children:E?"Sending…":"Send"})]}),O&&I&&c.jsxs("div",{className:"fixed inset-0 z-50",children:[c.jsx("button",{className:"absolute inset-0 bg-black/60",onClick:Ci,"aria-label":"Close thread overlay"}),c.jsxs("div",{className:"absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-slate-900 text-white border-l border-slate-800 shadow-xl p-4 overflow-y-auto",children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{className:"pr-6",children:[c.jsx("p",{className:"text-sm",children:c.jsx("span",{className:"font-medium",children:I.displayName||"Member"})}),c.jsx("p",{className:"text-sm text-slate-200 whitespace-pre-wrap",children:I.text})]}),c.jsx("button",{onClick:Ci,className:"p-2 rounded-md hover:bg-muted","aria-label":"Close thread",children:"✕"})]}),c.jsx("div",{className:"mt-4 space-y-2",children:T.length===0?c.jsx("p",{className:"text-sm text-slate-200",children:"No replies yet."}):T.map(F=>c.jsxs("div",{className:"rounded-lg border border-slate-700 px-3 py-2",children:[c.jsx("p",{className:"text-sm",children:c.jsx("span",{className:"font-medium",children:F.displayName||"Member"})}),c.jsx("p",{className:"text-sm text-slate-200 whitespace-pre-wrap",children:F.text})]},F.id))}),c.jsxs("form",{onSubmit:Uo,className:"mt-3 flex gap-2 sticky bottom-2 pt-2 bg-slate-900",children:[c.jsx("input",{type:"text",value:k,onChange:F=>j(F.target.value),placeholder:"Write a reply…",className:"flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm outline-none text-white placeholder:text-slate-400"}),c.jsx("button",{type:"submit",disabled:b||!k.trim(),className:"rounded-lg bg-slate-100 text-slate-900 px-3 py-1.5 text-sm hover:bg-white disabled:opacity-60",children:b?"Sending…":"Reply"})]})]})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Direct Messages"}),c.jsx("p",{className:"text-sm text-text2 mt-1",children:"Select one or more members and send a private message."}),c.jsxs("div",{className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{type:"text",value:ks,onChange:F=>Al(F.target.value),placeholder:"Search members…",className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none","aria-label":"Filter members for DM"}),c.jsx("div",{className:"sm:col-span-3 max-h-48 overflow-auto rounded-lg border border-border bg-background p-2",children:zn.length===0?c.jsx("p",{className:"text-xs text-text2",children:"No members to message."}):c.jsx("ul",{className:"space-y-1",children:zn.map(F=>c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("input",{id:`dm-${F.uid}`,type:"checkbox",checked:!!Ei[F.uid],onChange:ne=>Cl(ce=>({...ce,[F.uid]:ne.target.checked})),className:"h-4 w-4"}),c.jsxs("label",{htmlFor:`dm-${F.uid}`,className:"text-sm",children:[F.displayName||F.uid,F.email?` • ${F.email}`:""]})]},F.uid))})})]}),c.jsxs("form",{onSubmit:Ol,className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("textarea",{value:Ti,onChange:F=>Ii(F.target.value),placeholder:"Write a private message…",className:"sm:col-span-5 min-h-[3.25rem] rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"}),c.jsx("div",{className:"sm:col-span-1",children:c.jsx("button",{type:"submit",disabled:Vo||!Pl||!Ti.trim(),className:"w-full rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-60",title:Pl?void 0:"Select at least one member",children:Vo?"Sending…":"Send DM"})})]}),Si&&c.jsx("p",{className:"mt-2 text-sm text-rose-700",children:Si}),Rl&&c.jsx("p",{className:"mt-2 text-sm text-emerald-700",children:"Message sent."})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Team"}),y.length>0?c.jsx("ul",{className:"mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2",children:y.map(F=>c.jsxs("li",{className:"rounded-lg border border-border px-3 py-2",children:[c.jsx("p",{className:"text-sm",children:F.displayName||F.uid}),F.role&&c.jsx("p",{className:"text-xs text-text2",children:F.role}),F.email&&c.jsx("p",{className:"text-xs text-text2",children:F.email}),"muted"in F&&c.jsx("p",{className:"text-[11px] text-text2 mt-1",children:F.muted?"Muted":"Notifications on"})]},F.uid))}):c.jsx("p",{className:"text-sm text-text2 mt-2",children:"No members are listed for this group yet."})]})]})}):c.jsx("div",{className:"container py-8",children:c.jsxs("div",{className:"max-w-3xl mx-auto rounded-xl border border-border bg-card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-accent mb-2",children:r.name||t}),c.jsx("p",{className:"text-sm text-text2 mb-4",children:"Membership is required to view this group."}),c.jsx("p",{className:"text-sm text-text2",children:"Request to join from the Explore page."})]})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx("p",{className:"text-text2",children:"Group not found."})})})}const QI="/assets/Header_Logo-CWkkS3_r.png";function zO(){const[t,e]=R.useState(!1);return R.useEffect(()=>{const n=window.matchMedia&&window.matchMedia("(display-mode: standalone)"),r=navigator.standalone===!0,s=()=>e(!!(n&&n.matches||r));return s(),n&&n.addEventListener&&n.addEventListener("change",s),()=>{n&&n.removeEventListener&&n.removeEventListener("change",s)}},[]),t}function qO(){const t=zO();return c.jsxs(c.Fragment,{children:[t&&c.jsx("style",{children:`
          [data-app-header]{
            padding-top: env(safe-area-inset-top);
            padding-top: constant(safe-area-inset-top);
          }
        `}),c.jsx("header",{"data-app-header":!0,className:"w-full border-b border-border bg-[var(--bg)]",children:c.jsx("div",{className:"container py-2 md:py-3 flex items-center",children:c.jsx(fe,{to:"/login","aria-label":"Immanuel Members Home",className:"shrink-0",children:c.jsx("img",{src:QI,alt:"Immanuel Downtown",className:"h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"})})})})]})}function cw(t){return t&&t.trim().split(/\s+/)[0]||null}function WO(){const[t,e]=R.useState(!1);return R.useEffect(()=>{const n=window.matchMedia&&window.matchMedia("(display-mode: standalone)"),r=navigator.standalone===!0,s=()=>e(!!(n&&n.matches||r));return s(),n&&n.addEventListener&&n.addEventListener("change",s),()=>{n&&n.removeEventListener&&n.removeEventListener("change",s)}},[]),t}function HO(){const{user:t,isAdmin:e}=bd(),n=xn(),[r,s]=R.useState(""),[i,o]=R.useState(!1),l=WO(),u="inline-flex items-center justify-center min-h-[2.25rem] px-3 py-2 rounded-lg text-sm leading-tight text-center whitespace-normal md:whitespace-nowrap",d=f=>`${u} ${f?"bg-muted text-accent":"text-text hover:text-accent"}`;return R.useEffect(()=>{let f=!0;async function p(){if(!t){f&&s("");return}const m=cw(t.displayName);if(m){f&&s(m);return}try{const y=await De(J(xg,"users",t.uid));if(y.exists()){const S=y.data(),A=(S==null?void 0:S.name)||[S==null?void 0:S.firstName,S==null?void 0:S.lastName].filter(Boolean).join(" ").trim(),C=cw(A);if(C){f&&s(C);return}}}catch{}f&&s("there")}return p(),()=>{f=!1}},[t]),R.useEffect(()=>{o(!1)},[n.pathname]),c.jsxs(c.Fragment,{children:[l&&c.jsx("style",{children:`
          [data-app-header] {
            padding-top: env(safe-area-inset-top);
            /* Safari < 11.2 fallback (rare now) */
            padding-top: constant(safe-area-inset-top);
          }
        `}),c.jsxs("header",{"data-app-header":!0,className:"w-full border-b border-border bg-[var(--bg)]",children:[c.jsxs("div",{className:"container py-2 md:py-3 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1 items-center gap-x-3 gap-y-2",children:[c.jsx("div",{className:"col-start-1 row-start-1 md:col-span-1 flex items-center min-w-0",children:c.jsx(fe,{to:"/dashboard","aria-label":"Immanuel Members Home",className:"shrink-0",children:c.jsx("img",{src:QI,alt:"Immanuel Downtown",className:"h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"})})}),c.jsx("div",{className:"col-start-2 row-start-1 md:hidden flex justify-end",children:c.jsx("button",{"aria-label":"Open menu","aria-expanded":i,className:"p-2 rounded-md border border-border/70 bg-surface/40 hover:bg-surface/60 active:scale-[0.98] transition",onClick:()=>o(f=>!f),children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:c.jsx("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})}),c.jsxs("nav",{className:"col-span-2 row-start-2 md:row-start-1 md:col-span-1 flex justify-center gap-4 text-sm",children:[c.jsx(fu,{to:"/dashboard",className:({isActive:f})=>d(f),children:"Dashboard"}),c.jsx(fu,{to:"/sunday-resources",className:({isActive:f})=>d(f),children:"Sunday White Papers"}),c.jsx(fu,{to:"/groups",className:({isActive:f})=>d(f),children:"Groups"}),e&&c.jsx(fu,{to:"/admin",className:({isActive:f})=>d(f),children:"Admin"})]}),c.jsx("div",{className:"hidden md:flex md:col-start-3 md:row-start-1 justify-end items-center gap-2",children:t?c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"text-sm text-text2",children:["Hi",r?`, ${r}`:""]}),c.jsx(fe,{to:"/profile",className:"btn btn-outline btn-md",children:"Profile"}),c.jsx("button",{className:"btn btn-outline btn-md",onClick:()=>qf(sl),children:"Sign out"})]}):n.pathname!=="/login"&&c.jsx(fe,{to:"/login",className:"btn btn-outline btn-md",children:"Sign in"})})]}),i&&c.jsxs("div",{className:"fixed inset-0 z-50",children:[c.jsx("button",{"aria-label":"Close menu",className:"absolute inset-0 bg-black/40",onClick:()=>o(!1)}),c.jsxs("div",{className:"absolute top-2 right-2 w-64 rounded-xl border border-border bg-[var(--bg)] shadow-xl p-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"text-sm text-text2",children:"Menu"}),c.jsx("button",{className:"p-2 rounded-md hover:bg-surface/60",onClick:()=>o(!1),"aria-label":"Close",children:c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M6 6l12 12M18 6l-12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),c.jsx("div",{className:"mt-2 border-t border-border/60 pt-2 grid gap-2",children:t?c.jsxs(c.Fragment,{children:[c.jsx(fe,{to:"/profile",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Profile"}),e&&c.jsx(fe,{to:"/admin",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Admin"}),c.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{o(!1),qf(sl)},children:"Sign out"})]}):n.pathname!=="/login"&&c.jsx(fe,{to:"/login",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Sign in"})})]})]})]})]})}function GO(){const t=Ge(se),e=Lr(),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState(!1),[u,d]=R.useState(!1),[f,p]=R.useState(!1),[m,y]=R.useState(null);R.useEffect(()=>sr(t,_=>{_&&e("/dashboard",{replace:!0})}),[t,e]);async function S(){y(null),d(!0);try{const C=new pn;await Am(t,C),e("/dashboard",{replace:!0})}catch{y("Google sign-in was cancelled or failed.")}finally{d(!1)}}async function A(C){if(C.preventDefault(),y(null),!n||!s){y("Please enter your email and password.");return}p(!0);try{await T0(t,n,s),e("/dashboard",{replace:!0})}catch(_){const w=String((_==null?void 0:_.code)||"");let E="Could not sign in with email and password.";w==="auth/invalid-email"?E="Please enter a valid email address.":(w==="auth/user-not-found"||w==="auth/wrong-password")&&(E="Email or password is incorrect."),y(E)}finally{p(!1)}}return c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-1",children:"Welcome back"}),c.jsx("p",{className:"text-sm text-text2 mb-6",children:"Sign in to continue."}),m&&c.jsx("div",{className:"mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",children:m}),c.jsxs("form",{onSubmit:A,className:"grid gap-3 mb-4",children:[c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Email"}),c.jsx("input",{type:"email",value:n,onChange:C=>r(C.target.value),placeholder:"you@example.com",autoComplete:"email",className:"rounded-lg border border-border bg-background px-3 py-2 outline-none",required:!0})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Password"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:o?"text":"password",value:s,onChange:C=>i(C.target.value),placeholder:"••••••••",autoComplete:"current-password",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none",required:!0}),c.jsx("button",{type:"button",onClick:()=>l(C=>!C),className:"rounded-lg border border-border px-3 py-2 text-sm",children:o?"Hide":"Show"})]})]}),c.jsx("button",{type:"submit",disabled:f,className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white disabled:opacity-60",children:f?"Signing in…":"Sign in"})]}),c.jsx("button",{type:"button",onClick:S,disabled:u,className:"btn btn-outline w-full",children:u?"Please wait…":"Sign in with Google"}),c.jsx("div",{className:"mt-2",children:c.jsx(fe,{to:"/signup",className:"btn btn-outline w-full",children:"Create account"})}),c.jsx("div",{className:"mt-6 text-center",children:c.jsx(fe,{to:"/forgot",className:"text-sm text-accent underline underline-offset-2",children:"Forgot password?"})})]})})}function KO(t){const e=t.trim().split(/\s+/).filter(Boolean);return e.length===0?{firstName:"",lastName:""}:e.length===1?{firstName:e[0],lastName:""}:{firstName:e[0],lastName:e.slice(1).join(" ")}}function QO(){const t=Ge(se),e=Lr(),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState(""),[u,d]=R.useState(""),[f,p]=R.useState(""),[m,y]=R.useState(!1),[S,A]=R.useState(null),[C,_]=R.useState(!1);R.useEffect(()=>sr(t,O=>{O&&e("/dashboard",{replace:!0})}),[t,e]);async function w(P){P.preventDefault(),A(null);const O=n.trim(),M=s.trim();if(!O){A("Please enter your first name.");return}if(!o||!u){A("Please enter an email and password.");return}if(u!==f){A("Passwords do not match.");return}const I=(O+" "+M).trim();_(!0);try{const v=await LR(t,o,u);v.user&&await I0(v.user,{displayName:I});try{localStorage.setItem("signupName",I),localStorage.setItem("signupFirstName",O),localStorage.setItem("signupLastName",M)}catch{}e("/welcome",{replace:!0,state:{name:I,firstName:O,lastName:M}})}catch(v){const T=String((v==null?void 0:v.code)||"");let N="Could not create account.";T==="auth/email-already-in-use"?N="That email is already in use.":T==="auth/invalid-email"?N="Please enter a valid email address.":T==="auth/weak-password"&&(N="Password should be at least 6 characters."),A(N)}finally{_(!1)}}async function E(){var P;A(null),_(!0);try{const O=new pn,I=((P=(await Am(t,O)).user)==null?void 0:P.displayName)||"",{firstName:v,lastName:T}=KO(I);try{I&&(localStorage.setItem("signupName",I),localStorage.setItem("signupFirstName",v),localStorage.setItem("signupLastName",T))}catch{}e("/welcome",{replace:!0,state:{name:I,firstName:v,lastName:T}})}catch{A("Google sign-in was cancelled or failed.")}finally{_(!1)}}return c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-1",children:"Create your account"}),c.jsx("p",{className:"text-sm text-text2 mb-6",children:"Join Immanuel Downtown to access your dashboard and groups."}),S&&c.jsx("div",{className:"mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",children:S}),c.jsxs("form",{onSubmit:w,className:"grid gap-3",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"First name"}),c.jsx("input",{type:"text",value:n,onChange:P=>r(P.target.value),placeholder:"Jordan",autoComplete:"given-name",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Last name"}),c.jsx("input",{type:"text",value:s,onChange:P=>i(P.target.value),placeholder:"Smith",autoComplete:"family-name",className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Email"}),c.jsx("input",{type:"email",value:o,onChange:P=>l(P.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Password"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:m?"text":"password",value:u,onChange:P=>d(P.target.value),placeholder:"••••••••",autoComplete:"new-password",required:!0,className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none"}),c.jsx("button",{type:"button",onClick:()=>y(P=>!P),className:"rounded-lg border border-border px-3 py-2 text-sm",children:m?"Hide":"Show"})]})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Confirm password"}),c.jsx("input",{type:m?"text":"password",value:f,onChange:P=>p(P.target.value),placeholder:"••••••••",autoComplete:"new-password",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsx("button",{type:"submit",disabled:C,className:"mt-2 rounded-lg bg-accent px-4 py-2 text-white hover:opacity-90 disabled:opacity-60",children:C?"Creating…":"Create account"})]}),c.jsx("div",{className:"mt-4",children:c.jsx("button",{type:"button",onClick:E,disabled:C,className:"w-full rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted disabled:opacity-60",children:"Continue with Google"})}),c.jsxs("div",{className:"mt-4 text-sm text-text2",children:["Already have an account?"," ",c.jsx(fe,{to:"/login",className:"text-accent underline underline-offset-2",children:"Sign in"})]})]})})}function YO(){const t=R.useMemo(()=>Le(se),[]),{user:e,loading:n}=bd(),r=(e==null?void 0:e.uid)??null,[s,i]=R.useState(null);if(R.useEffect(()=>{if(!r){i([]);return}const l=on(ve(t,`users/${r}/notifications`),jr("createdAt","desc")),u=bn(l,d=>{const f=d.docs.map(p=>({id:p.id,...p.data()}));i(f.filter(p=>!p.read))},d=>{console.error("Notifications listener error:",(d==null?void 0:d.message)||d),i([])});return()=>u()},[t,r]),s===null||n)return c.jsxs("div",{className:"p-1",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Notifications"}),c.jsx("div",{className:"mt-2",children:c.jsx($n,{label:"Loading notifications…"})})]});async function o(l){if(r)try{await hg(J(t,`users/${r}/notifications/${l}`),{read:!0,readAt:Ve()})}catch{}}return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Notifications"}),s.length===0?c.jsx("p",{className:"text-text2 mt-2",children:"You have no new notifications."}):c.jsx("ul",{className:"mt-3 space-y-2",children:s.map(l=>{const u=c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm",children:l.text}),l.groupName&&c.jsxs("p",{className:"text-xs text-text2",children:["Group: ",l.groupName]})]}),c.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200",children:"new"})]});return c.jsx("li",{className:"rounded-lg border border-border bg-card px-3 py-2 ring-1 ring-emerald-300/40",children:l.href?c.jsx(fe,{to:l.href,onClick:()=>o(l.id),className:"block hover:opacity-90",children:u}):c.jsx("button",{onClick:()=>o(l.id),className:"block w-full text-left hover:opacity-90",children:u})},l.id)})})]})}const dw="https://calendar.google.com/calendar/embed?src=immanueldowntown@gmail.com",JO="America/New_York";function XO(){const{isAdmin:t}=bd(),e=`${dw}${dw.includes("?")?"&":"?"}ctz=${encodeURIComponent(JO)}`;return c.jsxs("div",{className:"container py-8 md:py-10",children:[c.jsx("div",{className:"text-center mb-6",children:c.jsx("h1",{className:"text-2xl md:text-3xl font-semibold",children:"Welcome!"})}),t&&c.jsxs("section",{className:"mb-6 border border-border p-5 rounded-xl flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Admin Tools"}),c.jsx("p",{className:"text-sm text-text2",children:"You have admin privileges."})]}),c.jsx(fe,{to:"/admin/groups",className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200",children:"Admin Console"})]}),c.jsxs("section",{className:"border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"General Announcements"}),c.jsxs("ul",{className:"mt-3 space-y-2 text-text",children:[c.jsx("li",{children:"• Welcome to the Community Portal. Check your groups for updates. "}),c.jsx("li",{children:'• The "Sunday White Papers" link at the top has the documents for our morning discussions.'}),c.jsx("li",{children:"• Please be patient with this app, We are still in development. If you find bugs, send a message to Sam."}),c.jsx("li",{children:"• If you have features you'd like to see added, let Sam know."})]}),c.jsx("div",{className:"mt-6 pt-5 border-t border-border",children:c.jsx("div",{className:"mt-2",children:c.jsx(YO,{})})})]}),c.jsxs("section",{className:"mt-8 border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Calendar"}),c.jsx("p",{className:"text-text2 text-sm mt-1",children:"Synced from church Google Calendar."}),c.jsx("div",{className:"mt-4 w-full",children:e?c.jsx("iframe",{className:"w-full h-[440px] sm:h-[520px] md:h-[720px] rounded border-0",src:e,title:"Church Calendar",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}):c.jsx("div",{className:"w-full h-[440px] sm:h-[520px] md:h-[720px] flex items-center justify-center text-center p-6 text-sm text-text2 rounded bg-surface/50",children:c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-text mb-1",children:"Calendar not configured"}),c.jsxs("div",{children:["Set ",c.jsx("code",{className:"px-1 py-0.5 rounded bg-surface/50",children:"VITE_GCAL_EMBED_URL"})," in your env. In Google Calendar → ",c.jsx("em",{children:"Settings → Integrate calendar"}),", copy the ",c.jsx("strong",{children:"Embed code"})," ",c.jsx("code",{children:"src"})," URL and paste it there."]})]})})})]})]})}function ZO(){const t=Ge(se),e=R.useMemo(()=>Le(se),[]),[n,r]=R.useState(null),[s,i]=R.useState(!0);return R.useEffect(()=>{if(!t.currentUser)return;const o=t.currentUser.uid,l=bn(ve(e,`users/${o}/memberships`),async u=>{const d=u.docs.map(p=>p.id);if(d.length===0){r([]),i(!1);return}const f=await Promise.all(d.map(async p=>{const m=await De(J(e,"groups",p));if(m.exists()){const y=m.data();return{id:m.id,...y}}return null}));r(f.filter(Boolean)),i(!1)});return()=>l()},[t.currentUser,e]),s?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading your groups…"})})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-4",children:"Your Groups"}),n&&n.length>0?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(o=>c.jsx(KI,{group:o,isMember:!0},o.id))}),c.jsx("div",{className:"mt-6",children:c.jsx(fe,{to:"/groups/explore",className:"inline-flex rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted",children:"Other Available Groups"})})]}):c.jsxs("div",{className:"rounded-xl border border-border bg-card p-6",children:[c.jsx("p",{className:"text-text2",children:"You haven’t joined any groups yet."}),c.jsx(fe,{to:"/groups/explore",className:"inline-flex mt-3 rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800",children:"View More Groups"})]})]})})}function eV(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Forums"}),c.jsx("p",{className:"text-text2 mt-2",children:"Community discussions coming soon."})]})}function tV(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Resources"}),c.jsx("p",{className:"text-text2 mt-2",children:"Documents, links, and media for members."})]})}function nV(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Events"}),c.jsx("p",{className:"text-text2 mt-2",children:"Calendar and upcoming gatherings."})]})}/**
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
 */const rV="type.googleapis.com/google.protobuf.Int64Value",sV="type.googleapis.com/google.protobuf.UInt64Value";function YI(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Dc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Dc(e));if(typeof t=="function"||typeof t=="object")return YI(t,e=>Dc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function To(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case rV:case sV:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>To(e)):typeof t=="function"||typeof t=="object"?YI(t,e=>To(e)):t}/**
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
 */const Eg="functions";/**
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
 */const hw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ht extends Un{constructor(e,n,r){super(`${Eg}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Ht.prototype)}}function iV(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Oc(t,e){let n=iV(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!hw[o])return new Ht("internal","internal");n=hw[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=To(s))}}catch{}return n==="ok"?null:new Ht(n,r,s)}/**
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
 */class oV{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const hp="us-central1",aV=/^data: (.*?)(?:\n|$)/;function lV(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ht("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class uV{constructor(e,n,r,s,i=hp,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new oV(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=hp}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function cV(t,e,n){const r=pi(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(um(t.emulatorOrigin),cm("Functions",!0))}function dV(t,e,n){const r=s=>fV(t,e,s,{});return r.stream=(s,i)=>mV(t,e,s,i),r}async function hV(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function JI(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function fV(t,e,n,r){const s=t._url(e);return pV(t,s,n,r)}async function pV(t,e,n,r){n=Dc(n);const s={data:n},i=await JI(t,r),o=r.timeout||7e4,l=lV(o),u=await Promise.race([hV(e,s,i,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Ht("cancelled","Firebase Functions instance was deleted.");const d=Oc(u.status,u.json);if(d)throw d;if(!u.json)throw new Ht("internal","Response is not valid JSON object.");let f=u.json.data;if(typeof f>"u"&&(f=u.json.result),typeof f>"u")throw new Ht("internal","Response is missing data field.");return{data:To(f)}}function mV(t,e,n,r){const s=t._url(e);return gV(t,s,n,r||{})}async function gV(t,e,n,r){var m;n=Dc(n);const s={data:n},i=await JI(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal})}catch(y){if(y instanceof Error&&y.name==="AbortError"){const A=new Ht("cancelled","Request was cancelled.");return{data:Promise.reject(A),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(A)}}}}}}const S=Oc(0,null);return{data:Promise.reject(S),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(S)}}}}}}let l,u;const d=new Promise((y,S)=>{l=y,u=S});(m=r==null?void 0:r.signal)==null||m.addEventListener("abort",()=>{const y=new Ht("cancelled","Request was cancelled.");u(y)});const f=o.body.getReader(),p=yV(f,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const y=p.getReader();return{async next(){const{value:S,done:A}=await y.read();return{value:S,done:A}},async return(){return await y.cancel(),{done:!0,value:void 0}}}}},data:d}}function yV(t,e,n,r){const s=(o,l)=>{const u=o.match(aV);if(!u)return;const d=u[1];try{const f=JSON.parse(d);if("result"in f){e(To(f.result));return}if("message"in f){l.enqueue(To(f.message));return}if("error"in f){const p=Oc(0,f);l.error(p),n(p);return}}catch(f){if(f instanceof Ht){l.error(f),n(f);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const d=new Ht("cancelled","Request was cancelled");return o.error(d),n(d),Promise.resolve()}try{const{value:d,done:f}=await t.read();if(f){l.trim()&&s(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const m=new Ht("cancelled","Request was cancelled");o.error(m),n(m),await t.cancel();return}l+=i.decode(d,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const m of p)m.trim()&&s(m.trim(),o);return u()}catch(d){const f=d instanceof Ht?d:Oc(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const fw="@firebase/functions",pw="0.13.0";/**
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
 */const vV="auth-internal",_V="app-check-internal",wV="messaging-internal";function xV(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(vV),o=n.getProvider(wV),l=n.getProvider(_V);return new uV(s,i,o,l,r)};Ln(new _n(Eg,e,"PUBLIC").setMultipleInstances(!0)),Yt(fw,pw,t),Yt(fw,pw,"esm2020")}/**
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
 */function Tg(t=dl(),e=hp){const r=gi(Ie(t),Eg).getImmediate({identifier:e}),s=WE("functions");return s&&EV(r,...s),r}function EV(t,e,n){cV(Ie(t),e,n)}function Rd(t,e,n){return dV(Ie(t),e)}xV();function TV(t){return t?"present":"missing"}async function IV(){const t=await(async()=>{try{return!!await Promise.resolve(Cd())}catch{return!1}})(),e=await navigator.serviceWorker.getRegistration(),s={permission:typeof Notification<"u"?Notification.permission:"unavailable",swRegistered:!!e,swScope:(e==null?void 0:e.scope)||null,messagingSupported:t,vapidKey:TV("BOhz8CwPpf6kstE2HWU-Pyb4bkPGM6OpdVzU3PYrhyMSGZKyds6UzoSlQN1lRYxrmtf-HGQwSw5DivQ0SjkdxCI")};return console.table(s),s}async function XI(){try{return!!await Promise.resolve(Cd())}catch(t){return console.warn("[push] getMessagingIfSupported threw:",t),!1}}async function SV(t){console.groupCollapsed("[push] enroll start");try{const e=await IV();if(!await XI())return console.warn("[push] messaging not supported in this environment"),null;let n=Notification.permission;if(n!=="granted"&&(n=await Notification.requestPermission()),console.log("[push] permission after request:",n),n!=="granted")return console.warn("[push] user did not grant permission"),null;let r=await navigator.serviceWorker.getRegistration();if(r)console.log("[push] using existing SW at",r.scope);else{console.log("[push] registering /sw.js");try{r=await navigator.serviceWorker.register("/sw.js"),console.log("[push] /sw.js registered at",r.scope)}catch(l){return console.warn("[push] failed to register /sw.js:",l),null}}const s=await Promise.resolve(Cd());if(!s)return console.warn("[push] getMessagingIfSupported returned null"),null;const i="BOhz8CwPpf6kstE2HWU-Pyb4bkPGM6OpdVzU3PYrhyMSGZKyds6UzoSlQN1lRYxrmtf-HGQwSw5DivQ0SjkdxCI";let o=null;try{o=await kO(s,{vapidKey:i,serviceWorkerRegistration:r})}catch(l){return console.warn("[push] getToken() threw:",l),null}if(!o)return console.warn("[push] getToken() returned null/empty"),null;console.log("[push] obtained token (truncated):",o.slice(0,10)+"…");try{const l=J(xg,`users/${t}/pushTokens/${o}`);await Jt(l,{token:o,createdAt:Ve(),userAgent:navigator.userAgent||""},{merge:!0}),console.log("[push] token saved to Firestore (client)")}catch(l){console.warn("[push] failed to write token to Firestore (client):",l)}try{await Rd(Tg(se,"us-central1"),"registerPushToken")({token:o}),console.log("[push] token saved via callable (server)")}catch(l){console.warn("[push] registerPushToken callable failed (non-fatal):",l)}return o}finally{console.groupEnd()}}async function NV(t){if(!await XI())return()=>{};const e=await Promise.resolve(Cd());return e?PO(e,r=>{try{t(r)}catch(s){console.warn("[push] handler error:",s)}}):()=>{}}function AV(){const t=Ge(),e=t.currentUser,[n,r]=R.useState(null),[s,i]=R.useState(null);R.useEffect(()=>{if(!e)return;const l=J(xg,"users",e.uid),u=bn(l,d=>r(d.data()),d=>console.warn("Profile onSnapshot error:",d));return()=>u()},[e]),R.useEffect(()=>{if(!e)return;let l=null,u=!1;return(async()=>{try{const d=await NV(f=>{console.log("[push] Foreground message:",f);const p=(f==null?void 0:f.data)||{};i({title:p.title||"Notification",body:p.body||""}),setTimeout(()=>i(null),6e3)});u?typeof d=="function"&&d():l=typeof d=="function"?d:null}catch(d){console.warn("listenForegroundMessages failed:",d)}})(),()=>{if(u=!0,typeof l=="function")try{l()}catch{}}},[e]);const o=async()=>{try{const l=t.currentUser;if(!l)return;const u=await SV(l.uid);alert(u?"Notifications enabled on this device.":"Notifications not enabled (permission denied or unsupported).")}catch(l){console.error("Notification setup failed",l),alert("Could not enable notifications.")}};return c.jsx("div",{className:"container py-8",children:c.jsxs("div",{className:"max-w-3xl mx-auto rounded-xl border border-border bg-card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-accent mb-4",children:"Profile"}),e&&c.jsxs("div",{className:"mb-4 text-sm text-text",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Email:"})," ",e.email]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"UID:"})," ",e.uid]})]}),n&&c.jsx("div",{className:"mb-6 text-sm text-text2",children:n.displayName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium text-text",children:"Display Name:"})," ",n.displayName]})}),s&&c.jsxs("div",{className:"mb-4 rounded-lg border border-border bg-card p-3",children:[c.jsx("div",{className:"text-sm font-semibold text-accent",children:s.title}),c.jsx("div",{className:"text-sm text-text2",children:s.body})]}),c.jsxs("section",{className:"mt-2 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Notifications"}),c.jsx("p",{className:"text-sm text-text2 mt-1",children:"Enable push notifications on this device to get updates."}),c.jsx("div",{className:"mt-3 flex gap-3",children:c.jsx("button",{type:"button",onClick:o,className:"rounded-lg px-4 py-2 text-white text-sm",style:{backgroundColor:"#919FAA"},children:"Enable notifications on this device"})})]})]})})}function CV(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Settings"}),c.jsx("p",{className:"text-text2 mt-2",children:"Preferences and app settings."})]})}function bV(){const[t,e]=R.useState(""),[n,r]=R.useState(!1),[s,i]=R.useState(null),[o,l]=R.useState(!1);async function u(d){d.preventDefault(),i(null),r(!0);try{await jR(sl,t),l(!0)}catch(f){i((f==null?void 0:f.message)||"Failed to send reset email")}finally{r(!1)}}return c.jsx("div",{className:"flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]",children:c.jsxs("div",{className:"w-full max-w-sm",children:[c.jsx("h1",{className:"text-2xl font-bold mb-2 text-center",children:"Forgot password"}),c.jsx("p",{className:"mb-6 text-center text-text2",children:"Enter your account email and we’ll send you a reset link."}),o?c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-accent",children:"Check your email"}),c.jsxs("p",{className:"text-text2 text-sm mt-1",children:["If an account exists for ",c.jsx("span",{className:"text-text",children:t}),", you’ll receive a password reset link shortly."]}),c.jsx(fe,{to:"/login",className:"btn btn-outline mt-4 w-full",children:"Back to sign in"})]}):c.jsxs("form",{onSubmit:u,className:"space-y-3",children:[c.jsx("input",{type:"email",className:"input w-full",placeholder:"Email",value:t,onChange:d=>e(d.target.value),required:!0,autoComplete:"email"}),s&&c.jsx("div",{className:"text-red-400 text-sm",children:s}),c.jsx("button",{className:"btn btn-primary w-full",disabled:n,children:n?"Sending…":"Send reset link"}),c.jsx("div",{className:"text-center",children:c.jsx(fe,{to:"/login",className:"text-sm underline text-text2",children:"Back to sign in"})})]})]})})}function RV(){const[t]=Y1(),e=Lr(),n=t.get("oobCode")||"",[r,s]=R.useState(null),[i,o]=R.useState(""),[l,u]=R.useState(""),[d,f]=R.useState(!0),[p,m]=R.useState(null),[y,S]=R.useState(!1);R.useEffect(()=>{async function C(){try{const _=await VR(sl,n);s(_)}catch(_){m((_==null?void 0:_.message)||"Invalid or expired reset link.")}finally{f(!1)}}n?C():(m("Missing reset code."),f(!1))},[n]);async function A(C){if(C.preventDefault(),m(null),i.length<6){m("Password must be at least 6 characters.");return}if(i!==l){m("Passwords do not match.");return}try{await DR(sl,n,i),S(!0),setTimeout(()=>e("/login",{replace:!0}),1200)}catch(_){m((_==null?void 0:_.message)||"Failed to reset password.")}}return d?c.jsx("div",{className:"container py-20",children:"Checking reset link…"}):c.jsx("div",{className:"flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]",children:c.jsxs("div",{className:"w-full max-w-sm",children:[c.jsx("h1",{className:"text-2xl font-bold mb-2 text-center",children:"Reset password"}),p&&c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-red-400 text-sm",children:p}),c.jsx(fe,{to:"/forgot",className:"btn btn-outline mt-4 w-full",children:"Request a new link"})]}),!p&&!y&&c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"mb-6 text-center text-text2",children:["Resetting password for ",r]}),c.jsxs("form",{onSubmit:A,className:"space-y-3",children:[c.jsx("input",{type:"password",className:"input w-full",placeholder:"New password",value:i,onChange:C=>o(C.target.value),required:!0,autoComplete:"new-password"}),c.jsx("input",{type:"password",className:"input w-full",placeholder:"Confirm new password",value:l,onChange:C=>u(C.target.value),required:!0,autoComplete:"new-password"}),c.jsx("button",{className:"btn btn-primary w-full",children:"Set new password"})]})]}),y&&c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-accent",children:"Password updated!"}),c.jsx("p",{className:"text-text2 text-sm mt-1",children:"Taking you back to sign in…"})]})]})})}const Yi=[{id:"downtown",name:"Downtown"}];function kV(t){const e=t.trim().split(/\s+/).filter(Boolean);return e.length===0?{firstName:"",lastName:""}:e.length===1?{firstName:e[0],lastName:""}:{firstName:e[0],lastName:e.slice(1).join(" ")}}function PV(t){if(!t)return"";const e=String(t).trim();return Yi.some(n=>n.id.toLowerCase()===e.toLowerCase())?Yi.find(n=>n.id.toLowerCase()===e.toLowerCase()).id:Yi.some(n=>n.name.toLowerCase()===e.toLowerCase())?Yi.find(n=>n.name.toLowerCase()===e.toLowerCase()).id:""}function jV(){const t=Lr(),e=xn(),n=Ge(se),r=Le(se),[s,i]=z.useState(!1),[o,l]=z.useState(n.currentUser),[u,d]=z.useState(""),[f,p]=z.useState(!1),[m,y]=z.useState(""),[S,A]=z.useState(""),[C,_]=z.useState(!1),[w,E]=z.useState(null);z.useEffect(()=>{const O=sr(n,async M=>{var v;if(l(M),!M){i(!0);return}let I=M.displayName||((v=e.state)==null?void 0:v.name)||"";if(!I)try{const T=localStorage.getItem("signupName");T&&(I=T)}catch{}try{const T=await De(J(r,"users",M.uid)),N=T.exists()?T.data():null;!I&&(N!=null&&N.displayName)&&(I=String(N.displayName)),N!=null&&N.phone&&y(String(N.phone)),N!=null&&N.campus&&A(PV(String(N.campus)))}catch{}d(I||""),p(!!I),i(!0)});return()=>O()},[n,r,e.state]);async function P(){var T;if(E(null),!o){E("You are not signed in.");return}const O=u.trim();if(!f&&!O){E("Please enter your name.");return}const M=f?(o==null?void 0:o.displayName)||u:O,{firstName:I,lastName:v}=kV(M);_(!0);try{if(!f){if(!n.currentUser)throw new Error("No current user.");await I0(n.currentUser,{displayName:M})}await Jt(J(r,"users",o.uid),{displayName:M,firstName:I,lastName:v,phone:m.trim()||null,campus:S||null,campusName:((T=Yi.find(N=>N.id===S))==null?void 0:T.name)||null,updatedAt:Ve(),onboardedAt:Ve()},{merge:!0});try{localStorage.removeItem("signupName"),localStorage.removeItem("signupFirstName"),localStorage.removeItem("signupLastName")}catch{}t("/dashboard",{replace:!0})}catch(N){E((N==null?void 0:N.message)||"Could not save your profile.")}finally{_(!1)}}return s?o?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-2",children:"Welcome!"}),c.jsx("p",{className:"text-sm text-text2 mb-4",children:"Let’s finish setting up your profile."}),f?c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"text-sm block text-text2",children:"Name"}),c.jsx("div",{className:"mt-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm",children:u}),c.jsx("p",{className:"mt-1 text-xs text-text2",children:"Pulled from your sign-up. You can edit this later in Profile."})]}):c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Name"}),c.jsx("input",{type:"text",value:u,onChange:O=>d(O.target.value),placeholder:"First Last",className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"})]}),c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Phone (optional)"}),c.jsx("input",{type:"tel",value:m,onChange:O=>y(O.target.value),placeholder:"(555) 555-5555",className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"})]}),c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Campus (optional)"}),c.jsxs("select",{value:S,onChange:O=>A(O.target.value),className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",children:[c.jsx("option",{value:"",children:"Select a campus (optional)"}),Yi.map(O=>c.jsx("option",{value:O.id,children:O.name},O.id))]})]}),w&&c.jsx("p",{className:"text-sm text-rose-700 mb-2",children:w}),c.jsx("button",{onClick:P,disabled:C,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:C?"Saving…":"Save and continue"})]})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6",children:c.jsx("p",{className:"text-sm text-text2",children:"You are not signed in."})})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"mx-auto max-w-md",children:c.jsx($n,{label:"Loading your account…"})})})}const DV="modulepreload",OV=function(t){return"/"+t},mw={},VV=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=OV(u),u in mw)return;mw[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":DV,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function LV(){const t=z.useMemo(()=>Le(se),[]),{user:e}=bd(),[n,r]=z.useState(null),[s,i]=z.useState(null),[o,l]=z.useState(""),[u,d]=z.useState(""),[f,p]=z.useState(""),[m,y]=z.useState(null),[S,A]=z.useState(!1);z.useEffect(()=>{let E;if(e!=null&&e.uid){const P=J(t,"admins",e.uid);VV(async()=>{const{onSnapshot:O}=await Promise.resolve().then(()=>rD);return{onSnapshot:O}},void 0).then(({onSnapshot:O})=>{E=O(P,M=>r(M.exists()))})}else r(!1);return()=>{E&&E()}},[t,e==null?void 0:e.uid]),z.useEffect(()=>{const E=on(ve(t,"sundayResources"),jr("createdAt","desc")),P=bn(E,O=>{const M=O.docs.map(I=>({id:I.id,...I.data()}));i(M)});return()=>P()},[t]);async function C(E){if(E.preventDefault(),!!n){if(y(null),!o.trim()||!u.trim()){y("Title and URL are required.");return}try{A(!0),await Ks(ve(t,"sundayResources"),{title:o.trim(),url:u.trim(),note:f.trim()||null,createdAt:Ve(),createdBy:(e==null?void 0:e.uid)??null,createdByName:(e==null?void 0:e.displayName)??null}),l(""),d(""),p("")}catch(P){y((P==null?void 0:P.message)||"Failed to add resource.")}finally{A(!1)}}}async function _(E){if(n)try{await Ct(J(t,"sundayResources",E))}catch{}}const w=n===!0;return s===null||n===null?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Sunday White Papers"}),c.jsx("div",{className:"mt-4",children:c.jsx($n,{label:"Loading…"})})]})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Sunday White Papers"}),c.jsx("p",{className:"text-text2 mt-2",children:"A curated library of Sunday white papers and study resources."}),w&&c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Add a resource"}),m&&c.jsx("p",{className:"text-red-500 text-sm mt-2",children:m}),c.jsxs("form",{onSubmit:C,className:"mt-3 grid grid-cols-1 md:grid-cols-12 gap-3",children:[c.jsx("input",{type:"text",value:o,onChange:E=>l(E.target.value),placeholder:"Title",className:"md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("input",{type:"url",value:u,onChange:E=>d(E.target.value),placeholder:"URL (Google Drive, video, article…)",className:"md:col-span-6 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("input",{type:"text",value:f,onChange:E=>p(E.target.value),placeholder:"Note (optional)",className:"md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("div",{className:"md:col-span-12 flex justify-end",children:c.jsx("button",{type:"submit",disabled:S,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:S?"Adding…":"Add resource"})})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Resources"}),s.length===0?c.jsx("p",{className:"text-text2 text-sm mt-2",children:"No resources yet."}):c.jsx("ul",{className:"mt-3 space-y-2",children:s.map(E=>c.jsx("li",{className:"rounded-lg border border-border bg-muted px-3 py-2",children:c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"text-sm font-medium truncate",children:c.jsx("a",{href:E.url,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:E.title})}),E.note&&c.jsx("p",{className:"text-xs text-text2 mt-0.5",children:E.note})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[c.jsx(fe,{to:E.url,target:"_blank",className:"text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70",children:"Open"}),w&&c.jsx("button",{onClick:()=>_(E.id),className:"text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70",title:"Delete",children:"Delete"})]})]})},E.id))})]})]})})}function MV(t,e){return[t,e].sort().join("_")}function UV(){var C;const{slug:t="",otherUid:e=""}=fi(),n=z.useMemo(()=>Le(se),[]),r=Ge(se),[s,i]=z.useState(!0),[o,l]=z.useState(""),[u,d]=z.useState([]),[f,p]=z.useState(""),m=((C=r.currentUser)==null?void 0:C.uid)||"",y=z.useMemo(()=>m?MV(m,e):"",[m,e]);z.useEffect(()=>{let _=!1,w;async function E(){try{i(!0);try{const O=await De(J(n,"groups",t));if(O.exists()){const M=O.data();_||l((M==null?void 0:M.name)||t)}else _||l(t)}catch{_||l(t)}if(!m||!y)return;const P=on(ve(n,`groups/${t}/directMessages/${y}/messages`),jr("createdAt","asc"));w=bn(P,O=>{const M=O.docs.map(I=>({id:I.id,...I.data()}));_||d(M)})}finally{_||i(!1)}}return E().catch(()=>{}),()=>{_=!0,w&&w()}},[n,t,m,y]);async function S(_){var w;if(_.preventDefault(),!(!f.trim()||!m||!y))try{await Ks(ve(n,`groups/${t}/directMessages/${y}/messages`),{text:f.trim(),from:m,to:e,displayName:((w=r.currentUser)==null?void 0:w.displayName)||"Member",createdAt:Ve()}),p("")}catch(E){alert((E==null?void 0:E.message)||"Failed to send")}}async function A(_,w){w===m&&confirm("Delete this message?")&&await Ct(J(n,`groups/${t}/directMessages/${y}/messages/${_}`))}return s?c.jsx("div",{className:"max-w-4xl mx-auto p-6",children:c.jsx($n,{label:"Loading direct messages…"})}):c.jsx("div",{className:"container py-6",children:c.jsxs("div",{className:"max-w-4xl mx-auto rounded-xl border border-border bg-card p-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-lg font-semibold text-accent",children:"Direct Messages"}),c.jsx(fe,{to:`/groups/${t}`,className:"text-sm text-text2 underline",children:"Back to group"})]}),c.jsxs("p",{className:"text-sm text-text2 mt-1",children:["Group: ",o]}),c.jsx("div",{className:"mt-4 max-h-[60vh] overflow-auto space-y-2 pr-1",children:u.length===0?c.jsx("p",{className:"text-sm text-text2",children:"No messages yet."}):u.map(_=>c.jsx("div",{className:"rounded-lg px-3 py-2 border "+(_.from===m?"border-slate-300 bg-white":"border-slate-700 bg-slate-800 text-white"),children:c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-xs opacity-70",children:_.displayName||_.from}),c.jsx("p",{className:"text-sm whitespace-pre-wrap",children:_.text})]}),_.from===m&&c.jsx("button",{onClick:()=>A(_.id,_.from),className:"text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit",children:"Delete"})]})},_.id))}),c.jsxs("form",{onSubmit:S,className:"mt-3 flex gap-2",children:[c.jsx("input",{type:"text",value:f,onChange:_=>p(_.target.value),placeholder:"Write a message…",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"}),c.jsx("button",{type:"submit",disabled:!f.trim(),className:"rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800 disabled:opacity-60",children:"Send"})]})]})})}function FV(){const t=R.useMemo(()=>Le(se),[]),e=Ge(se),[n,r]=R.useState(!0),[s,i]=R.useState(!1),[o,l]=R.useState([]),[u,d]=R.useState(!1),[f,p]=R.useState([]);return R.useEffect(()=>{let m=!1;async function y(){var S;try{r(!0);const A=e.currentUser;if(!A){m||(i(!1),l([]));return}const C=A.uid,w=(await De(J(t,"admins",C))).exists();m||i(w);let E=[];w?E=(await ht(on(ve(t,"groups"),jr("name")))).docs.map(M=>M.id):E=(await ht(on(rg(t,"groupAdmins"),Nl(iI(),"==",C)))).docs.map(M=>{const I=M.ref.parent.parent;return I?I.id:""}).filter(Boolean);const P=[];for(const O of E)try{const I=(await De(J(t,"groups",O))).data()||{};let v=0;try{const T=await Pc(ve(t,`groups/${O}/membershipRequests`));v=Number(((S=T.data())==null?void 0:S.count)||0)}catch{}P.push({id:O,name:I.name||O,parent:I.parent||null,pendingRequests:v})}catch{}m||l(P)}finally{m||r(!1)}}return y(),()=>{m=!0}},[t,e.currentUser]),R.useEffect(()=>{let m=!1;async function y(){try{d(!0);const S={};for(const C of o){try{(await ht(ve(t,`groups/${C.id}/members`))).forEach(w=>{const E=w.data(),P=w.id;S[P]||(S[P]={uid:P,name:E==null?void 0:E.displayName,email:E==null?void 0:E.email,groups:[]}),S[P].groups.push({id:C.id,name:C.name||C.id})})}catch{}if(m)return}const A=Object.values(S).sort((C,_)=>(C.name||C.uid).localeCompare(_.name||_.uid));m||p(A)}finally{m||d(!1)}}return o.length?y():p([]),()=>{m=!0}},[t,o]),n?c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading admin groups…"})}):c.jsxs("div",{className:"max-w-5xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:s?"All Groups":"Your Groups"}),c.jsx("p",{className:"text-slate-600 mt-2",children:s?"You are a super admin.":"You are a group admin."})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[s&&c.jsx(fe,{to:"/admin/groups/new",className:"text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800",title:"Create a new group",children:"New Group"}),c.jsx(fe,{to:"/admin/users",className:"text-sm text-slate-700 underline",children:"Users"})]})]}),o.length===0?c.jsx("p",{className:"text-slate-600 mt-4",children:"No groups to manage."}):c.jsx("ul",{className:"mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:o.map(m=>{const y=m.pendingRequests||0,S="text-sm px-3 py-1.5 rounded-lg text-center leading-tight min-w-[9rem] whitespace-normal md:whitespace-nowrap",A=y>0?`${S} bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200`:`${S} bg-slate-100 text-slate-900 hover:bg-slate-200`;return c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"font-medium text-slate-900 truncate",children:m.name||m.id}),m.parent&&c.jsxs("div",{className:"text-xs text-slate-500 truncate",children:["Parent: ",m.parent]})]}),c.jsxs("div",{className:"flex gap-2 shrink-0",children:[c.jsx(fe,{to:`/admin/groups/${m.id}/requests`,className:A,title:y>0?`${y} pending`:void 0,children:y>0?`View Requests (${y})`:"View Requests"}),c.jsx(fe,{to:`/admin/groups/${m.id}/members`,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]",children:"Members"}),c.jsx(fe,{to:`/groups/${m.id}`,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]",children:"Open Group"})]})]},m.id)})}),c.jsxs("section",{className:"mt-8 rounded-xl border border-slate-200 bg-white/70 p-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:"Users"}),c.jsx(fe,{to:"/admin/users",className:"text-sm text-slate-700 underline",children:"Open full users page"})]}),u?c.jsx("p",{className:"text-sm text-slate-600 mt-3",children:"Loading users…"}):f.length===0?c.jsx("p",{className:"text-sm text-slate-600 mt-3",children:"No users found."}):c.jsx("ul",{className:"mt-3 divide-y divide-slate-200",children:f.map(m=>c.jsx("li",{className:"py-3",children:c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"text-sm font-medium text-slate-900 break-all",children:m.name||m.uid}),m.email&&c.jsx("div",{className:"text-xs text-slate-600 break-all",children:m.email}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:m.groups.map(y=>c.jsx(fe,{to:`/admin/groups/${y.id}/members`,className:"text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200",title:"Manage members",children:y.name},y.id))})]}),c.jsx(fe,{to:`/admin/users?uid=${encodeURIComponent(m.uid)}`,className:"text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100 shrink-0",children:"View"})]})},m.uid))})]})]})}const ZI=Tg(se,"us-central1");async function gw(t,e,n){const s=await Rd(ZI,"setUserDisabled")({targetUid:t,disabled:e,reason:n});return(s==null?void 0:s.data)??null}async function $V(t,e=!1){const r=await Rd(ZI,"deleteUserAccount")({targetUid:t,hardDelete:e});return(r==null?void 0:r.data)??null}function BV(){const t=R.useMemo(()=>Le(se),[]),e=Ge(se),[n,r]=R.useState(!0),[s,i]=R.useState(!1),[o,l]=R.useState([]),[u,d]=R.useState(""),[f,p]=R.useState(""),{search:m}=xn();R.useEffect(()=>{const w=new URLSearchParams(m).get("uid")||"";w&&d(w)},[m]),R.useEffect(()=>{let _=!1;async function w(){try{r(!0);const E=e.currentUser;if(!E){_||(l([]),i(!1));return}const O=(await De(J(t,"admins",E.uid))).exists();_||i(O);const I=(await ht(ve(t,"users"))).docs.map(v=>{const T=v.data();return{uid:v.id,displayName:(T==null?void 0:T.displayName)||(T==null?void 0:T.name)||"",email:(T==null?void 0:T.email)||"",status:(T==null?void 0:T.status)||"active",groups:[]}});for(const v of I){try{const T=await ht(ve(t,`users/${v.uid}/memberships`)),N=[];for(const k of T.docs){const j=k.id;try{const Ke=(await De(J(t,"groups",j))).data()||{};N.push({id:j,name:(Ke==null?void 0:Ke.name)||j})}catch{N.push({id:j,name:j})}}v.groups=N.sort((k,j)=>k.name.localeCompare(j.name))}catch{v.groups=[]}if(_)return}I.sort((v,T)=>(v.displayName||v.email||v.uid).localeCompare(T.displayName||T.email||T.uid)),_||l(I)}finally{_||r(!1)}}return w(),()=>{_=!0}},[t,e.currentUser]);const y=o.filter(_=>{const w=u.trim().toLowerCase();return w?_.uid.toLowerCase().includes(w)||(_.displayName||"").toLowerCase().includes(w)||(_.email||"").toLowerCase().includes(w)||_.groups.some(E=>E.name.toLowerCase().includes(w)||E.id.toLowerCase().includes(w)):!0});async function S(_){if(!s)return;const w=window.prompt("Reason for inactivation? (optional)")||void 0;p(`disable:${_}`);try{await gw(_,!0,w),l(E=>E.map(P=>P.uid===_?{...P,status:"inactive"}:P))}catch{alert("Failed to inactivate user.")}finally{p("")}}async function A(_){if(s&&window.confirm("Reactivate this user?")){p(`enable:${_}`);try{await gw(_,!1),l(w=>w.map(E=>E.uid===_?{...E,status:"active"}:E))}catch{alert("Failed to reactivate user.")}finally{p("")}}}async function C(_){if(!(!s||!window.confirm("Delete this user? This will remove their authentication account and related data.")||!(window.prompt('Type "DELETE" to confirm.')==="DELETE"))){p(`delete:${_}`);try{await $V(_,!1),l(P=>P.filter(O=>O.uid!==_))}catch{alert("Failed to delete user.")}finally{p("")}}}return n?c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading users…"})}):c.jsxs("div",{className:"max-w-5xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Users"}),c.jsx("input",{value:u,onChange:_=>d(_.target.value),placeholder:"Search users…",className:"rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none w-56","aria-label":"Search users"})]}),c.jsxs("div",{className:"mt-4 rounded-xl border border-slate-200 bg-white/70 overflow-hidden",children:[c.jsxs("div",{className:"grid grid-cols-12 gap-2 px-4 py-2 text-xs font-medium text-slate-600",children:[c.jsx("div",{className:"col-span-4",children:"Name"}),c.jsx("div",{className:"col-span-3",children:"Email"}),c.jsx("div",{className:"col-span-3",children:"Groups"}),c.jsx("div",{className:"col-span-2 text-right",children:"Actions"})]}),c.jsx("div",{className:"divide-y divide-slate-200",children:y.length===0?c.jsx("div",{className:"px-4 py-4 text-sm text-slate-600",children:"No users found."}):y.map(_=>c.jsxs("div",{className:"grid grid-cols-12 gap-2 px-4 py-3 items-start",children:[c.jsxs("div",{className:"col-span-4 min-w-0",children:[c.jsx("div",{className:"text-sm text-slate-900 truncate",children:_.displayName||_.uid}),_.email&&c.jsx("div",{className:"text-xs text-slate-600 truncate",children:_.email}),c.jsxs("div",{className:"text-[11px] text-slate-500 mt-0.5",children:["Status: ",_.status||"active"]})]}),c.jsx("div",{className:"col-span-3 min-w-0",children:c.jsxs("div",{className:"flex flex-wrap gap-1",children:[_.groups.map(w=>c.jsx(fe,{to:`/admin/groups/${w.id}/members`,className:"text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200",title:"Manage members",children:w.name},w.id)),_.groups.length===0&&c.jsx("span",{className:"text-xs text-slate-600",children:"—"})]})}),c.jsx("div",{className:"col-span-3 min-w-0",children:c.jsx("span",{className:"text-xs break-all",children:_.uid})}),c.jsx("div",{className:"col-span-2 text-right",children:c.jsxs("div",{className:"inline-flex flex-col gap-1 items-end",children:[c.jsx(fe,{to:`/admin/users?uid=${encodeURIComponent(_.uid)}`,className:"text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100",children:"View"}),s&&c.jsxs("div",{className:"flex flex-wrap gap-1 justify-end",children:[_.status==="inactive"?c.jsx("button",{onClick:()=>A(_.uid),disabled:!!f,className:"text-xs rounded-lg px-2 py-1 text-white",style:{backgroundColor:"#919FAA",opacity:f?.6:1},children:f===`enable:${_.uid}`?"Working…":"Reactivate"}):c.jsx("button",{onClick:()=>S(_.uid),disabled:!!f,className:"text-xs rounded-lg px-2 py-1 text-white",style:{backgroundColor:"#919FAA",opacity:f?.6:1},children:f===`disable:${_.uid}`?"Working…":"Inactivate"}),c.jsx("button",{onClick:()=>C(_.uid),disabled:!!f,className:"text-xs rounded-lg px-2 py-1 bg-rose-100 text-rose-800 hover:bg-rose-200",style:{opacity:f?.6:1},title:"Soft delete (Auth account removed; user doc marked deleted)",children:f===`delete:${_.uid}`?"Deleting…":"Delete"})]})]})})]},_.uid))})]})]})}function zV(){const{slug:t}=fi(),e=Le(se),[n,r]=R.useState(""),[s,i]=R.useState([]),[o,l]=R.useState(!0),[u,d]=R.useState(""),f=t;R.useEffect(()=>{let y=!0;async function S(){if(f){l(!0);try{const A=J(e,"groups",f),C=await De(A);r(C.exists()&&C.data().name||qV(f));const _=ve(e,`groups/${f}/membershipRequests`),w=await ht(_);if(!y)return;const E=[];w.forEach(P=>E.push(P.data())),i(E)}finally{l(!1)}}}return S(),()=>{y=!1}},[e,f]);async function p(y){d(y.uid);try{await Jt(J(e,`users/${y.uid}/memberships/${f}`),{groupId:f,approvedAt:Ve(),approvedBy:"admin"},{merge:!0}),await Jt(J(e,`groups/${f}/members/${y.uid}`),{uid:y.uid,displayName:y.displayName||"Member",joinedAt:Ve()},{merge:!0}),await Promise.all([Ct(J(e,`groups/${f}/membershipRequests/${y.uid}`)),Ct(J(e,`users/${y.uid}/membershipRequests/${f}`))]),i(S=>S.filter(A=>A.uid!==y.uid))}finally{d("")}}async function m(y){d(y.uid);try{await Promise.all([Ct(J(e,`groups/${f}/membershipRequests/${y.uid}`)),Ct(J(e,`users/${y.uid}/membershipRequests/${f}`))]),i(S=>S.filter(A=>A.uid!==y.uid))}finally{d("")}}return f?c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[c.jsx("div",{className:"mb-4",children:c.jsxs(fe,{to:"/admin",className:"inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted",children:[c.jsx("span",{"aria-hidden":!0,children:"←"}),c.jsx("span",{children:"Return to Admin Console"})]})}),c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Pending Requests"}),c.jsxs("p",{className:"text-slate-600",children:["Group: ",n]})]}),c.jsx(fe,{to:`/groups/${f}`,className:"text-sm text-slate-700 underline",children:"Back to group"})]}),o?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):s.length===0?c.jsx("p",{className:"text-slate-600",children:"No pending requests."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:s.map(y=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:y.displayName||y.uid}),c.jsx("div",{className:"text-xs text-slate-500 truncate",children:y.uid})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>p(y),disabled:!!u,className:"text-xs px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-60",children:u===y.uid?"Working…":"Approve"}),c.jsx("button",{onClick:()=>m(y),disabled:!!u,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:"Deny"})]})]},y.uid))})]}):c.jsx("div",{className:"p-6",children:"Missing group slug."})}function qV(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function WV(){const{slug:t}=fi(),e=R.useMemo(()=>Le(se),[]),n=Ge(se),[r,s]=R.useState(""),[i,o]=R.useState([]),[l,u]=R.useState({}),[d,f]=R.useState(!0),[p,m]=R.useState(""),[y,S]=R.useState(""),[A,C]=R.useState(!1),[_,w]=R.useState(""),[E,P]=R.useState([]),[O,M]=R.useState(""),[I,v]=R.useState(""),T=(t||"").trim();R.useEffect(()=>{let Y=!0;async function $(){if(T){f(!0),S("");try{const Q=J(e,"groups",T),ge=await De(Q);s(ge.exists()&&ge.data().name||HV(T));const ue=n.currentUser;if(ue){const Ce=ue.uid;if((await De(J(e,"admins",Ce))).exists())C(!0);else{const ar=await De(J(e,`groups/${T}/groupAdmins/${Ce}`));C(ar.exists())}}else C(!1);const te=await ht(ve(e,`groups/${T}/members`));if(!Y)return;const rt=[],_t=await ht(ve(e,`groups/${T}/groupAdmins`)),qe={};_t.forEach(Ce=>{qe[Ce.id]=!0}),u(qe),te.forEach(Ce=>rt.push({uid:Ce.id,...Ce.data()})),rt.sort((Ce,Pt)=>(Ce.displayName||Ce.uid).localeCompare(Pt.displayName||Pt.uid)),o(rt)}catch(Q){S((Q==null?void 0:Q.message)||"Failed to load members.")}finally{f(!1)}}}$();async function H(){try{const ge=(await ht(ve(e,"users"))).docs.map(ue=>{const te=ue.data();return{uid:ue.id,displayName:(te==null?void 0:te.displayName)||(te==null?void 0:te.name)||"",email:(te==null?void 0:te.email)||""}});ge.sort((ue,te)=>(ue.displayName||ue.email||ue.uid).localeCompare(te.displayName||te.email||te.uid)),P(ge)}catch{P([])}}return H(),()=>{Y=!1}},[e,T]);async function N(Y,$,H){var ge,ue;const Q=Y.trim();if(Q){S(""),m("add");try{const te=xI(e),rt=J(e,`groups/${T}/members/${Q}`);{const qe={uid:Q,displayName:$||Q,role:"member",joinedAt:Ve(),addedBy:((ge=n.currentUser)==null?void 0:ge.uid)||"unknown"};H&&(qe.email=H),te.set(rt,qe,{merge:!0})}const _t=J(e,`users/${Q}/memberships/${T}`);te.set(_t,{groupId:T,approvedAt:Ve(),approvedBy:((ue=n.currentUser)==null?void 0:ue.uid)||"admin"},{merge:!0}),await te.commit(),o(qe=>{const Ce=[...qe.filter(Pt=>Pt.uid!==Q),{uid:Q,displayName:$||Q,email:H}];return Ce.sort((Pt,ar)=>(Pt.displayName||Pt.uid).localeCompare(ar.displayName||ar.uid)),Ce}),w(""),v("")}catch(te){S((te==null?void 0:te.message)||"Failed to add member. Check Firestore rules.")}finally{m("")}}}async function k(){await N(_)}async function j(Y){if(Y.preventDefault(),!I)return;const $=E.find(H=>H.uid===I);await N(I,$==null?void 0:$.displayName,$==null?void 0:$.email)}async function b(Y){var $;m(`admin:${Y}`),S("");try{await Jt(J(e,`groups/${T}/groupAdmins/${Y}`),{uid:Y,grantedBy:(($=n.currentUser)==null?void 0:$.uid)||"unknown",createdAt:Ve()},{merge:!0}),u(H=>({...H,[Y]:!0}))}catch(H){S((H==null?void 0:H.message)||"Failed to grant admin.")}finally{m("")}}async function Ke(Y){m(`admin:${Y}`),S("");try{await Ct(J(e,`groups/${T}/groupAdmins/${Y}`)),u($=>{const H={...$};return delete H[Y],H})}catch($){S(($==null?void 0:$.message)||"Failed to remove admin.")}finally{m("")}}async function En(Y){m(Y),S("");try{await Ct(J(e,`groups/${T}/members/${Y}`)),await Ct(J(e,`users/${Y}/memberships/${T}`)),o($=>$.filter(H=>H.uid!==Y))}catch($){S(($==null?void 0:$.message)||"Failed to remove member.")}finally{m("")}}if(!T)return c.jsx("div",{className:"p-6",children:"Missing group slug."});const or=R.useMemo(()=>{const Y=O.trim().toLowerCase();return Y?E.filter($=>{const H=($.displayName||"").toLowerCase(),Q=($.email||"").toLowerCase();return H.includes(Y)||Q.includes(Y)||$.uid.toLowerCase().includes(Y)}):E},[E,O]);return c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Group Members"}),c.jsxs("p",{className:"text-slate-600",children:["Group: ",r]})]}),c.jsx(fe,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),y&&c.jsx("div",{className:"mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800",children:y}),c.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white/70 p-4 mb-6",children:[c.jsx("h2",{className:"font-medium text-slate-900",children:"Add Member (by Name)"}),c.jsxs("form",{onSubmit:j,className:"mt-2 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{value:O,onChange:Y=>M(Y.target.value),placeholder:"Search users by name, email, or UID…",className:"sm:col-span-2 rounded-lg border border-slate-300 px-3 py-2 text-sm","aria-label":"Filter users",disabled:!A}),c.jsxs("select",{className:"sm:col-span-3 rounded-lg border border-slate-300 px-2 py-2 text-sm",value:I,onChange:Y=>v(Y.target.value),"aria-label":"Select user to add",disabled:!A,children:[c.jsx("option",{value:"",children:"Select a user…"}),or.map(Y=>c.jsx("option",{value:Y.uid,children:(Y.displayName||"Unnamed")+(Y.email?` • ${Y.email}`:"")},Y.uid))]}),c.jsx("div",{className:"sm:col-span-1",children:c.jsx("button",{type:"submit",disabled:!I||!!p||!A,className:"rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-60",children:p==="add"?"Adding…":"Add to group"})})]}),c.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Admins: choose a user to add them to this group."})]}),c.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white/70 p-4 mb-6",children:[c.jsx("h2",{className:"font-medium text-slate-900",children:"Add Member (by UID)"}),c.jsxs("div",{className:"mt-2 flex gap-2",children:[c.jsx("input",{value:_,onChange:Y=>w(Y.target.value),placeholder:"Paste a user's UID",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm",disabled:!A}),c.jsx("button",{onClick:k,disabled:!_.trim()||!!p||!A,className:"text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:p==="add"?"Adding…":"Add"})]}),c.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Tip: you can find a user's UID in Firebase → Authentication."})]}),d?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):i.length===0?c.jsx("p",{className:"text-slate-600",children:"No members yet."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:i.map(Y=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:Y.displayName||Y.uid}),c.jsx("div",{className:"text-xs text-slate-500 truncate",children:Y.uid})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[l[Y.uid]?c.jsx("button",{onClick:()=>Ke(Y.uid),disabled:!!p||!A,className:"text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60",children:p===`admin:${Y.uid}`?"Updating…":"Remove admin"}):c.jsx("button",{onClick:()=>b(Y.uid),disabled:!!p||!A,className:"text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:p===`admin:${Y.uid}`?"Updating…":"Make admin"}),c.jsx("button",{onClick:()=>En(Y.uid),disabled:!!p||!A,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:p===Y.uid?"Removing…":"Remove"})]})]},Y.uid))})]})}function HV(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function GV(){const{slug:t}=fi(),e=Le(se),n=t,[r,s]=R.useState([]),[i,o]=R.useState(!0);return R.useEffect(()=>{let l=!0;async function u(){if(n){o(!0);try{const d=ve(e,`groups/${n}/groupEvents`),f=on(d,jr("at","desc")),p=await ht(f);if(!l)return;const m=[];p.forEach(y=>m.push({id:y.id,...y.data()})),s(m)}finally{o(!1)}}}return u(),()=>{l=!1}},[e,n]),c.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Audit Log"}),c.jsx("p",{className:"text-slate-600",children:"Recent events for this group."})]}),c.jsx(fe,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),i?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):r.length===0?c.jsx("p",{className:"text-slate-600",children:"No events yet."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:r.map(l=>{var u;return c.jsxs("li",{className:"p-4",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"font-medium text-slate-900",children:l.type.replace(/_/g," ")}),c.jsx("div",{className:"text-xs text-slate-500",children:(u=l.at)!=null&&u.toDate?l.at.toDate().toLocaleString():"—"})]}),c.jsx("div",{className:"text-xs text-slate-600 mt-1",children:l.uid&&c.jsxs(c.Fragment,{children:["User: ",c.jsx("code",{children:l.uid})]})}),l.payload&&c.jsx("pre",{className:"mt-2 text-xs bg-slate-50 rounded-lg p-2 overflow-auto",children:JSON.stringify(l.payload,null,2)})]},l.id)})})]})}function KV(){const t=Tg(se),e=Le(se),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState([]),[u,d]=R.useState(!1),[f,p]=R.useState(null);R.useEffect(()=>{async function y(){const S=await ht(ve(e,"groups")),A=[];S.forEach(C=>A.push({id:C.id,...C.data()})),A.sort((C,_)=>(C.name||C.id).localeCompare(_.name||_.id)),l(A)}y()},[e]);async function m(){d(!0),p(null);try{const S=await Rd(t,"grantGroupAdminByEmail")({email:n,groupId:s});p(`✅ Granted admin to ${n} (uid=${S.data.uid})`),r("")}catch(y){p(`❌ ${(y==null?void 0:y.message)||"Failed"}`)}finally{d(!1)}}return c.jsxs("div",{className:"max-w-xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Grant Group Admin (by email)"}),c.jsxs("div",{className:"mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4",children:[c.jsxs("label",{className:"block text-sm",children:[c.jsx("span",{className:"font-medium text-slate-700",children:"User email"}),c.jsx("input",{value:n,onChange:y=>r(y.target.value),placeholder:"user@example.com",className:"mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})]}),c.jsxs("label",{className:"block text-sm",children:[c.jsx("span",{className:"font-medium text-slate-700",children:"Group"}),c.jsxs("select",{value:s,onChange:y=>i(y.target.value),className:"mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm",children:[c.jsx("option",{value:"",children:"Select a group…"}),o.map(y=>c.jsx("option",{value:y.id,children:y.name||y.id},y.id))]})]}),c.jsxs("div",{className:"flex gap-3 items-center",children:[c.jsx("button",{onClick:m,disabled:!n||!s||u,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:u?"Working…":"Grant admin"}),f&&c.jsx("p",{className:"text-sm text-slate-700",children:f})]})]})]})}function QV(t){return t.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")}function yw(){const t=Le(se),e=Lr(),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState(""),[u,d]=R.useState(""),[f,p]=R.useState(""),[m,y]=R.useState(""),[S,A]=R.useState(""),[C,_]=R.useState(""),[w,E]=R.useState(!1),[P,O]=R.useState(null),M=R.useMemo(()=>s||QV(n),[s,n]);async function I(){const v=M.trim();if(!n.trim()||!v){O("⚠️ Name and slug are required.");return}E(!0),O(null);try{const T=J(t,"groups",v);if((await De(T)).exists()){O("❌ A group with that slug already exists."),E(!1);return}await Jt(T,{id:v,name:n.trim(),slug:v,description:o.trim()||null,parent:u||null,campus:f||null,meetingDay:m||null,meetingTime:S||null,imageUrl:C||null,createdAt:Ve(),updatedAt:Ve()}),e(`/admin/groups/${v}/edit`,{replace:!0})}catch(T){O("❌ "+((T==null?void 0:T.message)||"Failed to create group."))}finally{E(!1)}}return c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Create Group"}),c.jsxs("div",{className:"mt-4 grid gap-3",children:[c.jsxs(Hr,{label:"Name",children:[c.jsx("input",{value:n,onChange:v=>r(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"}),c.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Slug preview: ",c.jsx("code",{children:M||"—"})]})]}),c.jsx(Hr,{label:"Slug (optional)",children:c.jsx("input",{value:s,onChange:v=>i(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"auto from name if blank"})}),c.jsx(Hr,{label:"Description",children:c.jsx("textarea",{value:o,onChange:v=>l(v.target.value),rows:4,className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Hr,{label:"Parent ministry (optional)",children:c.jsx("input",{value:u,onChange:v=>d(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Hr,{label:"Campus (optional)",children:c.jsx("input",{value:f,onChange:v=>p(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})})]}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Hr,{label:"Meeting day (optional)",children:c.jsxs("select",{value:m,onChange:v=>y(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70",children:[c.jsx("option",{value:"",children:"—"}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(v=>c.jsx("option",{value:v,children:v},v))]})}),c.jsx(Hr,{label:"Meeting time (optional)",children:c.jsx("input",{value:S,onChange:v=>A(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"e.g., 7:00pm"})})]}),c.jsx(Hr,{label:"Image URL (optional)",children:c.jsx("input",{value:C,onChange:v=>_(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"https://…"})}),P&&c.jsx("p",{className:"text-sm text-slate-700",children:P}),c.jsx("div",{className:"flex gap-3",children:c.jsx("button",{onClick:I,disabled:w,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:w?"Creating…":"Create group"})})]})]})}function Hr({label:t,children:e}){return c.jsxs("label",{className:"block",children:[c.jsx("div",{className:"text-sm font-medium text-slate-700",children:t}),c.jsx("div",{className:"mt-1",children:e})]})}function YV(){const{slug:t}=fi(),e=Le(se),n=Lr(),[r,s]=R.useState(null),[i,o]=R.useState(!0),[l,u]=R.useState(!1),[d,f]=R.useState(null);R.useEffect(()=>{let y=!0;async function S(){if(!t)return;o(!0);const A=await De(J(e,"groups",t));y&&(s(A.exists()?A.data():{}),o(!1))}return S(),()=>{y=!1}},[e,t]);async function p(){if(t){u(!0),f(null);try{await Jt(J(e,"groups",t),{...r,name:String((r==null?void 0:r.name)||"").trim(),description:((r==null?void 0:r.description)||"").trim()||null,updatedAt:Ve()},{merge:!0}),f("✅ Saved")}catch(y){f((y==null?void 0:y.message)||"Failed to save.")}finally{u(!1)}}}async function m(){if(t&&confirm("Delete this group? This cannot be undone."))try{await Ct(J(e,"groups",t)),n("/admin/groups",{replace:!0})}catch(y){f((y==null?void 0:y.message)||"Failed to delete.")}}return i?c.jsx("div",{className:"max-w-3xl mx-auto p-6",children:"Loading…"}):r?c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Edit Group"}),c.jsx(fe,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),c.jsxs("div",{className:"mt-4 grid gap-3",children:[c.jsx(Us,{label:"Name",children:c.jsx("input",{value:(r==null?void 0:r.name)||"",onChange:y=>s({...r,name:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Us,{label:"Description",children:c.jsx("textarea",{value:(r==null?void 0:r.description)||"",onChange:y=>s({...r,description:y.target.value}),rows:4,className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Us,{label:"Parent ministry",children:c.jsx("input",{value:(r==null?void 0:r.parent)||"",onChange:y=>s({...r,parent:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Us,{label:"Campus",children:c.jsx("input",{value:(r==null?void 0:r.campus)||"",onChange:y=>s({...r,campus:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})})]}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Us,{label:"Meeting day",children:c.jsxs("select",{value:(r==null?void 0:r.meetingDay)||"",onChange:y=>s({...r,meetingDay:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70",children:[c.jsx("option",{value:"",children:"—"}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(y=>c.jsx("option",{value:y,children:y},y))]})}),c.jsx(Us,{label:"Meeting time",children:c.jsx("input",{value:(r==null?void 0:r.meetingTime)||"",onChange:y=>s({...r,meetingTime:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"e.g., 7:00pm"})})]}),c.jsx(Us,{label:"Image URL",children:c.jsx("input",{value:(r==null?void 0:r.imageUrl)||"",onChange:y=>s({...r,imageUrl:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"https://…"})}),d&&c.jsx("p",{className:"text-sm text-slate-700",children:d}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:p,disabled:l,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:l?"Saving…":"Save changes"}),c.jsx("button",{onClick:m,className:"px-4 py-2 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200",children:"Delete group"})]})]})]}):c.jsx("div",{className:"max-w-3xl mx-auto p-6",children:"Not found."})}function Us({label:t,children:e}){return c.jsxs("label",{className:"block",children:[c.jsx("div",{className:"text-sm font-medium text-slate-700",children:t}),c.jsx("div",{className:"mt-1",children:e})]})}function JV(){const t=Le(se),e=Ge(se),[n,r]=R.useState([]),[s,i]=R.useState(!0),[o,l]=R.useState(""),[u,d]=R.useState("");async function f(){i(!0);const y=await ht(ve(t,"admins")),S=[];y.forEach(A=>S.push({uid:A.id,...A.data()})),S.sort((A,C)=>A.uid.localeCompare(C.uid)),r(S),i(!1)}R.useEffect(()=>{f()},[]);async function p(){var S;const y=u.trim();if(y){l("add");try{await Jt(J(t,"admins",y),{createdAt:Ve(),createdBy:((S=e.currentUser)==null?void 0:S.uid)||"unknown"},{merge:!0}),d(""),await f()}finally{l("")}}}async function m(y){l(y);try{await Ct(J(t,"admins",y)),await f()}finally{l("")}}return c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Super Admins"}),c.jsx("p",{className:"text-slate-600 mt-1",children:"Add or remove super admins by UID."}),c.jsxs("div",{className:"mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4",children:[c.jsx("label",{className:"block text-sm font-medium text-slate-700",children:"Add by UID"}),c.jsxs("div",{className:"mt-2 flex gap-2",children:[c.jsx("input",{value:u,onChange:y=>d(y.target.value),placeholder:"Paste UID from Firebase Authentication → Users",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"}),c.jsx("button",{onClick:p,disabled:!u.trim()||!!o,className:"px-3 py-2 rounded-lg text-sm bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:o==="add"?"Adding…":"Add"})]})]}),c.jsx("div",{className:"mt-4 rounded-2xl border border-slate-200 bg-white/70",children:s?c.jsx("div",{className:"p-4 text-slate-600",children:"Loading…"}):n.length===0?c.jsx("div",{className:"p-4 text-slate-600",children:"No super admins yet."}):c.jsx("ul",{className:"divide-y divide-slate-200",children:n.map(y=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:y.uid}),c.jsxs("div",{className:"text-xs text-slate-500",children:["Created by: ",y.createdBy||"—"]})]}),c.jsx("button",{onClick:()=>m(y.uid),disabled:!!o,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:o===y.uid?"Removing…":"Remove"})]},y.uid))})})]})}function XV({children:t}){const e=Ge(se),n=Le(se),[r,s]=z.useState(!1),[i,o]=z.useState(null),[l,u]=z.useState(null),[d,f]=z.useState(null);return z.useEffect(()=>{const p=sr(e,async m=>{if(s(!0),!m){o(null),u(!1);return}o(m.uid);try{const y=await De(J(n,"admins",m.uid));u(y.exists())}catch(y){f((y==null?void 0:y.message)||String(y)),u(!1)}});return()=>p()},[e,n]),!r||l===null?c.jsx("div",{className:"max-w-xl mx-auto p-6",children:"Checking…"}):l?c.jsx(c.Fragment,{children:t}):c.jsxs("div",{className:"max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:"AdminRouteDebug"}),c.jsxs("p",{className:"text-sm text-slate-700 mt-2",children:["UID: ",c.jsx("code",{children:i||"—"})]}),c.jsxs("p",{className:"text-sm text-slate-700",children:["admins/UID exists? ",c.jsx("strong",{children:l?"YES":"NO"})]}),!i&&c.jsx("p",{className:"mt-3 text-sm text-rose-700",children:"You are not signed in."}),i&&!l&&c.jsxs("p",{className:"mt-3 text-sm text-amber-700",children:["Signed in, but no document at ",c.jsxs("code",{children:["admins/","{uid}"]}),". Create that doc in Firestore for this project."]}),d&&c.jsxs("p",{className:"mt-3 text-sm text-rose-700",children:["Error reading ",c.jsxs("code",{children:["admins/","{uid}"]}),": ",d]})]})}function ZV(){var d,f,p;const t=Ge(se),[e,n]=R.useState(!1),[r,s]=R.useState(((d=t.currentUser)==null?void 0:d.uid)||null),[i,o]=R.useState(((f=t.currentUser)==null?void 0:f.email)||null);R.useEffect(()=>{const m=sr(t,y=>{s((y==null?void 0:y.uid)||null),o((y==null?void 0:y.email)||null),n(!0)});return()=>m()},[t]);const l=(p=se.options)==null?void 0:p.projectId;return c.jsxs("div",{className:"max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70",children:[c.jsx("h1",{className:"text-lg font-semibold text-slate-900",children:"Auth Debug: WhoAmI"}),c.jsxs("div",{className:"mt-2 text-sm text-slate-700",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"ready:"})," ",String(e)]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"email:"})," ",i||"—"]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"uid:"})," ",c.jsx("code",{children:r||"—"})]}),c.jsxs("div",{className:"mt-2",children:[c.jsx("span",{className:"font-medium",children:"SDK projectId:"})," ",c.jsx("code",{children:l||"—"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"ENV projectId:"})," ",c.jsx("code",{children:String("immanuel-app")})]})]})]})}function eL({children:t}){const e=xn(),n=e.pathname==="/login"||e.pathname==="/signup"||e.pathname==="/forgot"||e.pathname==="/reset";return c.jsxs(c.Fragment,{children:[n?c.jsx(qO,{}):c.jsx(HO,{}),t]})}function tL(){return c.jsx(W1,{children:c.jsx(OO,{children:c.jsx(eL,{children:c.jsxs(V1,{children:[c.jsx(Ee,{path:"/",element:c.jsx(Yn,{to:"/login",replace:!0})}),c.jsx(Ee,{path:"/login",element:c.jsx(GO,{})}),c.jsx(Ee,{path:"/signup",element:c.jsx(QO,{})}),c.jsx(Ee,{path:"/forgot",element:c.jsx(bV,{})}),c.jsx(Ee,{path:"/reset",element:c.jsx(RV,{})}),c.jsx(Ee,{path:"/welcome",element:c.jsx(dn,{children:c.jsx(jV,{})})}),c.jsx(Ee,{path:"/dashboard",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(XO,{})})})}),c.jsx(Ee,{path:"/groups",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(ZO,{})})})}),c.jsx(Ee,{path:"/forums",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(eV,{})})})}),c.jsx(Ee,{path:"/resources",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(tV,{})})})}),c.jsx(Ee,{path:"/events",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(nV,{})})})}),c.jsx(Ee,{path:"/profile",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(AV,{})})})}),c.jsx(Ee,{path:"/settings",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(CV,{})})})}),c.jsx(Ee,{path:"/sunday-resources",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(LV,{})})})}),c.jsx(Ee,{path:"/groups/explore",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx($O,{})})})}),c.jsx(Ee,{path:"/groups/:slug",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(BO,{})})})}),c.jsx(Ee,{path:"/groups/:slug/dm/:otherUid",element:c.jsx(dn,{children:c.jsx(Dt,{children:c.jsx(UV,{})})})}),c.jsx(Ee,{path:"/admin",element:c.jsx(Ms,{children:c.jsx(Yn,{to:"/admin/groups",replace:!0})})}),c.jsx(Ee,{path:"/admin/groups",element:c.jsx(Ms,{children:c.jsx(Dt,{children:c.jsx(FV,{})})})}),c.jsx(Ee,{path:"/admin/groups/:slug/requests",element:c.jsx(Lh,{children:c.jsx(Dt,{children:c.jsx(zV,{})})})}),c.jsx(Ee,{path:"/admin/groups/:slug/members",element:c.jsx(Lh,{children:c.jsx(Dt,{children:c.jsx(WV,{})})})}),c.jsx(Ee,{path:"/admin/groups/:slug/events",element:c.jsx(Lh,{children:c.jsx(Dt,{children:c.jsx(GV,{})})})}),c.jsx(Ee,{path:"/admin/super-admins",element:c.jsx(Ms,{children:c.jsx(JV,{})})}),c.jsx(Ee,{path:"/admin/group-admins/by-email",element:c.jsx(Ms,{children:c.jsx(KV,{})})}),c.jsx(Ee,{path:"/admin/users",element:c.jsx(Ms,{children:c.jsx(BV,{})})}),c.jsx(Ee,{path:"/admin/groups/new",element:c.jsx(Ms,{children:c.jsx(yw,{})})}),c.jsx(Ee,{path:"/admin/groups/:slug/edit",element:c.jsx(Ms,{children:c.jsx(YV,{})})}),c.jsx(Ee,{path:"/__whoami",element:c.jsx(ZV,{})}),c.jsx(Ee,{path:"/__admin/new",element:c.jsx(XV,{children:c.jsx(yw,{})})}),c.jsx(Ee,{path:"*",element:c.jsx(Yn,{to:"/dashboard",replace:!0})})]})})})})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(t=>{console.error("SW registration failed",t)})});Mh.createRoot(document.getElementById("root")).render(c.jsx(z.StrictMode,{children:c.jsx(tL,{})}));
