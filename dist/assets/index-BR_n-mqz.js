function yS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function vS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fw={exports:{}},kc={},pw={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),_S=Symbol.for("react.portal"),wS=Symbol.for("react.fragment"),xS=Symbol.for("react.strict_mode"),ES=Symbol.for("react.profiler"),TS=Symbol.for("react.provider"),IS=Symbol.for("react.context"),SS=Symbol.for("react.forward_ref"),NS=Symbol.for("react.suspense"),AS=Symbol.for("react.memo"),CS=Symbol.for("react.lazy"),iy=Symbol.iterator;function bS(t){return t===null||typeof t!="object"?null:(t=iy&&t[iy]||t["@@iterator"],typeof t=="function"?t:null)}var mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gw=Object.assign,yw={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vw(){}vw.prototype=Eo.prototype;function lp(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}var up=lp.prototype=new vw;up.constructor=lp;gw(up,Eo.prototype);up.isPureReactComponent=!0;var oy=Array.isArray,_w=Object.prototype.hasOwnProperty,cp={current:null},ww={key:!0,ref:!0,__self:!0,__source:!0};function xw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)_w.call(e,r)&&!ww.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:nl,type:t,key:i,ref:o,props:s,_owner:cp.current}}function RS(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function PS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ay=/\/+/g;function Fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PS(""+t.key):e.toString(36)}function gu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case _S:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Fd(o,0):r,oy(s)?(n="",t!=null&&(n=t.replace(ay,"$&/")+"/"),gu(s,e,n,"",function(d){return d})):s!=null&&(dp(s)&&(s=RS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ay,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",oy(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Fd(i,l);o+=gu(i,e,n,u,s)}else if(u=bS(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Fd(i,l++),o+=gu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hl(t,e,n){if(t==null)return t;var r=[],s=0;return gu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function kS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},yu={transition:null},jS={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:yu,ReactCurrentOwner:cp};function Ew(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Hl,forEach:function(t,e,n){Hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hl(t,function(){e++}),e},toArray:function(t){return Hl(t,function(e){return e})||[]},only:function(t){if(!dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Eo;de.Fragment=wS;de.Profiler=ES;de.PureComponent=lp;de.StrictMode=xS;de.Suspense=NS;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;de.act=Ew;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=cp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)_w.call(e,u)&&!ww.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:nl,type:t.type,key:s,ref:i,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:IS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TS,_context:t},t.Consumer=t};de.createElement=xw;de.createFactory=function(t){var e=xw.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:SS,render:t}};de.isValidElement=dp;de.lazy=function(t){return{$$typeof:CS,_payload:{_status:-1,_result:t},_init:kS}};de.memo=function(t,e){return{$$typeof:AS,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=yu.transition;yu.transition={};try{t()}finally{yu.transition=e}};de.unstable_act=Ew;de.useCallback=function(t,e){return Ut.current.useCallback(t,e)};de.useContext=function(t){return Ut.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};de.useEffect=function(t,e){return Ut.current.useEffect(t,e)};de.useId=function(){return Ut.current.useId()};de.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Ut.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};de.useRef=function(t){return Ut.current.useRef(t)};de.useState=function(t){return Ut.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Ut.current.useTransition()};de.version="18.3.1";pw.exports=de;var R=pw.exports;const q=vS(R),DS=yS({__proto__:null,default:q},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=R,VS=Symbol.for("react.element"),LS=Symbol.for("react.fragment"),MS=Object.prototype.hasOwnProperty,US=OS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FS={key:!0,ref:!0,__self:!0,__source:!0};function Tw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MS.call(e,r)&&!FS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:VS,type:t,key:i,ref:o,props:s,_owner:US.current}}kc.Fragment=LS;kc.jsx=Tw;kc.jsxs=Tw;fw.exports=kc;var c=fw.exports,jh={},Iw={exports:{}},un={},Sw={exports:{}},Nw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,H){var Q=$.length;$.push(H);e:for(;0<Q;){var ge=Q-1>>>1,le=$[ge];if(0<s(le,H))$[ge]=H,$[Q]=le,Q=ge;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var H=$[0],Q=$.pop();if(Q!==H){$[0]=Q;e:for(var ge=0,le=$.length,ee=le>>>1;ge<ee;){var nt=2*(ge+1)-1,wt=$[nt],We=nt+1,Ce=$[We];if(0>s(wt,Q))We<le&&0>s(Ce,wt)?($[ge]=Ce,$[We]=Q,ge=We):($[ge]=wt,$[nt]=Q,ge=nt);else if(We<le&&0>s(Ce,Q))$[ge]=Ce,$[We]=Q,ge=We;else break e}}return H}function s($,H){var Q=$.sortIndex-H.sortIndex;return Q!==0?Q:$.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],h=1,p=null,m=3,y=!1,T=!1,N=!1,C=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var H=n(d);H!==null;){if(H.callback===null)r(d);else if(H.startTime<=$)r(d),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(d)}}function k($){if(N=!1,E($),!T)if(n(u)!==null)T=!0,or(O);else{var H=n(d);H!==null&&Y(k,H.startTime-$)}}function O($,H){T=!1,N&&(N=!1,x(v),v=-1),y=!0;var Q=m;try{for(E(H),p=n(u);p!==null&&(!(p.expirationTime>H)||$&&!P());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=H);H=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),E(H)}else r(u);p=n(u)}if(p!==null)var ee=!0;else{var nt=n(d);nt!==null&&Y(k,nt.startTime-H),ee=!1}return ee}finally{p=null,m=Q,y=!1}}var M=!1,S=null,v=-1,I=5,A=-1;function P(){return!(t.unstable_now()-A<I)}function j(){if(S!==null){var $=t.unstable_now();A=$;var H=!0;try{H=S(!0,$)}finally{H?b():(M=!1,S=null)}}else M=!1}var b;if(typeof w=="function")b=function(){w(j)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Tn=pt.port2;pt.port1.onmessage=j,b=function(){Tn.postMessage(null)}}else b=function(){C(j,0)};function or($){S=$,M||(M=!0,b())}function Y($,H){v=C(function(){$(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||y||(T=!0,or(O))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var Q=m;m=H;try{return $()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,H){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=m;m=$;try{return H()}finally{m=Q}},t.unstable_scheduleCallback=function($,H,Q){var ge=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ge+Q:ge):Q=ge,$){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Q+le,$={id:h++,callback:H,priorityLevel:$,startTime:Q,expirationTime:le,sortIndex:-1},Q>ge?($.sortIndex=Q,e(d,$),n(u)===null&&$===n(d)&&(N?(x(v),v=-1):N=!0,Y(k,Q-ge))):($.sortIndex=le,e(u,$),T||y||(T=!0,or(O))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var H=m;return function(){var Q=m;m=H;try{return $.apply(this,arguments)}finally{m=Q}}}})(Nw);Sw.exports=Nw;var $S=Sw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=R,on=$S;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Aw=new Set,Ia={};function ui(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(Ia[t]=e,t=0;t<e.length;t++)Aw.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dh=Object.prototype.hasOwnProperty,zS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ly={},uy={};function qS(t){return Dh.call(uy,t)?!0:Dh.call(ly,t)?!1:zS.test(t)?uy[t]=!0:(ly[t]=!0,!1)}function WS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HS(t,e,n,r){if(e===null||typeof e>"u"||WS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var hp=/[\-:]([a-z])/g;function fp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hp,fp);_t[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hp,fp);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hp,fp);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function pp(t,e,n,r){var s=_t.hasOwnProperty(e)?_t[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HS(e,n,s,r)&&(n=null),r||s===null?qS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dr=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gl=Symbol.for("react.element"),Oi=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),Cw=Symbol.for("react.provider"),bw=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),Vh=Symbol.for("react.suspense"),Lh=Symbol.for("react.suspense_list"),yp=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),Rw=Symbol.for("react.offscreen"),cy=Symbol.iterator;function Wo(t){return t===null||typeof t!="object"?null:(t=cy&&t[cy]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,$d;function Zo(t){if($d===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$d=e&&e[1]||""}return`
`+$d+t}var Bd=!1;function zd(t,e){if(!t||Bd)return"";Bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Bd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function GS(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=zd(t.type,!1),t;case 11:return t=zd(t.type.render,!1),t;case 1:return t=zd(t.type,!0),t;default:return""}}function Mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vi:return"Fragment";case Oi:return"Portal";case Oh:return"Profiler";case mp:return"StrictMode";case Vh:return"Suspense";case Lh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bw:return(t.displayName||"Context")+".Consumer";case Cw:return(t._context.displayName||"Context")+".Provider";case gp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yp:return e=t.displayName||null,e!==null?e:Mh(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Mh(t(e))}catch{}}return null}function KS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(e);case 8:return e===mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ys(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QS(t){var e=Pw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kl(t){t._valueTracker||(t._valueTracker=QS(t))}function kw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uh(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ys(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jw(t,e){e=e.checked,e!=null&&pp(t,"checked",e,!1)}function Fh(t,e){jw(t,e);var n=ys(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$h(t,e.type,n):e.hasOwnProperty("defaultValue")&&$h(t,e.type,ys(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $h(t,e,n){(e!=="number"||Lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function Qi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ys(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Bh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ea(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ys(n)}}function Dw(t,e){var n=ys(e.value),r=ys(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function py(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ow(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ow(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ql,Vw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ql=Ql||document.createElement("div"),Ql.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ql.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YS=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){YS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function Lw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function Mw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Lw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var JS=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(t,e){if(e){if(JS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Wh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=null;function vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,Yi=null,Ji=null;function my(t){if(t=il(t)){if(typeof Gh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Lc(e),Gh(t.stateNode,t.type,e))}}function Uw(t){Yi?Ji?Ji.push(t):Ji=[t]:Yi=t}function Fw(){if(Yi){var t=Yi,e=Ji;if(Ji=Yi=null,my(t),e)for(t=0;t<e.length;t++)my(e[t])}}function $w(t,e){return t(e)}function Bw(){}var qd=!1;function zw(t,e,n){if(qd)return t(e,n);qd=!0;try{return $w(t,e,n)}finally{qd=!1,(Yi!==null||Ji!==null)&&(Bw(),Fw())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var r=Lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Kh=!1;if(Sr)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Kh=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Kh=!1}function XS(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var ua=!1,Mu=null,Uu=!1,Qh=null,ZS={onError:function(t){ua=!0,Mu=t}};function eN(t,e,n,r,s,i,o,l,u){ua=!1,Mu=null,XS.apply(ZS,arguments)}function tN(t,e,n,r,s,i,o,l,u){if(eN.apply(this,arguments),ua){if(ua){var d=Mu;ua=!1,Mu=null}else throw Error(B(198));Uu||(Uu=!0,Qh=d)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gy(t){if(ci(t)!==t)throw Error(B(188))}function nN(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return gy(s),t;if(i===r)return gy(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Ww(t){return t=nN(t),t!==null?Hw(t):null}function Hw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hw(t);if(e!==null)return e;t=t.sibling}return null}var Gw=on.unstable_scheduleCallback,yy=on.unstable_cancelCallback,rN=on.unstable_shouldYield,sN=on.unstable_requestPaint,Ye=on.unstable_now,iN=on.unstable_getCurrentPriorityLevel,_p=on.unstable_ImmediatePriority,Kw=on.unstable_UserBlockingPriority,Fu=on.unstable_NormalPriority,oN=on.unstable_LowPriority,Qw=on.unstable_IdlePriority,jc=null,Kn=null;function aN(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(jc,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:cN,lN=Math.log,uN=Math.LN2;function cN(t){return t>>>=0,t===0?32:31-(lN(t)/uN|0)|0}var Yl=64,Jl=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $u(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ta(l):(i&=o,i!==0&&(r=ta(i)))}else o=n&~s,o!==0?r=ta(o):i!==0&&(r=ta(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),s=1<<n,r|=t[n],e&=~s;return r}function dN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Pn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=dN(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yw(){var t=Yl;return Yl<<=1,!(Yl&4194240)&&(Yl=64),t}function Wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function fN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Pn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Se=0;function Jw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xw,xp,Zw,ex,tx,Jh=!1,Xl=[],ss=null,is=null,os=null,Aa=new Map,Ca=new Map,Kr=[],pN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vy(t,e){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Go(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=il(e),e!==null&&xp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function mN(t,e,n,r,s){switch(e){case"focusin":return ss=Go(ss,t,e,n,r,s),!0;case"dragenter":return is=Go(is,t,e,n,r,s),!0;case"mouseover":return os=Go(os,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Aa.set(i,Go(Aa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ca.set(i,Go(Ca.get(i)||null,t,e,n,r,s)),!0}return!1}function nx(t){var e=$s(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=qw(n),e!==null){t.blockedOn=e,tx(t.priority,function(){Zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hh=r,n.target.dispatchEvent(r),Hh=null}else return e=il(n),e!==null&&xp(e),t.blockedOn=n,!1;e.shift()}return!0}function _y(t,e,n){vu(t)&&n.delete(e)}function gN(){Jh=!1,ss!==null&&vu(ss)&&(ss=null),is!==null&&vu(is)&&(is=null),os!==null&&vu(os)&&(os=null),Aa.forEach(_y),Ca.forEach(_y)}function Ko(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,gN)))}function ba(t){function e(s){return Ko(s,t)}if(0<Xl.length){Ko(Xl[0],t);for(var n=1;n<Xl.length;n++){var r=Xl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ss!==null&&Ko(ss,t),is!==null&&Ko(is,t),os!==null&&Ko(os,t),Aa.forEach(e),Ca.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)nx(n),n.blockedOn===null&&Kr.shift()}var Xi=Dr.ReactCurrentBatchConfig,Bu=!0;function yN(t,e,n,r){var s=Se,i=Xi.transition;Xi.transition=null;try{Se=1,Ep(t,e,n,r)}finally{Se=s,Xi.transition=i}}function vN(t,e,n,r){var s=Se,i=Xi.transition;Xi.transition=null;try{Se=4,Ep(t,e,n,r)}finally{Se=s,Xi.transition=i}}function Ep(t,e,n,r){if(Bu){var s=Xh(t,e,n,r);if(s===null)th(t,e,r,zu,n),vy(t,r);else if(mN(s,t,e,n,r))r.stopPropagation();else if(vy(t,r),e&4&&-1<pN.indexOf(t)){for(;s!==null;){var i=il(s);if(i!==null&&Xw(i),i=Xh(t,e,n,r),i===null&&th(t,e,r,zu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else th(t,e,r,null,n)}}var zu=null;function Xh(t,e,n,r){if(zu=null,t=vp(r),t=$s(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zu=t,null}function rx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iN()){case _p:return 1;case Kw:return 4;case Fu:case oN:return 16;case Qw:return 536870912;default:return 16}default:return 16}}var es=null,Tp=null,_u=null;function sx(){if(_u)return _u;var t,e=Tp,n=e.length,r,s="value"in es?es.value:es.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return _u=s.slice(t,1<r?1-r:void 0)}function wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function wy(){return!1}function cn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zl:wy,this.isPropagationStopped=wy,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ip=cn(To),sl=ze({},To,{view:0,detail:0}),_N=cn(sl),Hd,Gd,Qo,Dc=ze({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(Hd=t.screenX-Qo.screenX,Gd=t.screenY-Qo.screenY):Gd=Hd=0,Qo=t),Hd)},movementY:function(t){return"movementY"in t?t.movementY:Gd}}),xy=cn(Dc),wN=ze({},Dc,{dataTransfer:0}),xN=cn(wN),EN=ze({},sl,{relatedTarget:0}),Kd=cn(EN),TN=ze({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),IN=cn(TN),SN=ze({},To,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NN=cn(SN),AN=ze({},To,{data:0}),Ey=cn(AN),CN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RN[t])?!!e[t]:!1}function Sp(){return PN}var kN=ze({},sl,{key:function(t){if(t.key){var e=CN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sp,charCode:function(t){return t.type==="keypress"?wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jN=cn(kN),DN=ze({},Dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ty=cn(DN),ON=ze({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sp}),VN=cn(ON),LN=ze({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),MN=cn(LN),UN=ze({},Dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FN=cn(UN),$N=[9,13,27,32],Np=Sr&&"CompositionEvent"in window,ca=null;Sr&&"documentMode"in document&&(ca=document.documentMode);var BN=Sr&&"TextEvent"in window&&!ca,ix=Sr&&(!Np||ca&&8<ca&&11>=ca),Iy=" ",Sy=!1;function ox(t,e){switch(t){case"keyup":return $N.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ax(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function zN(t,e){switch(t){case"compositionend":return ax(e);case"keypress":return e.which!==32?null:(Sy=!0,Iy);case"textInput":return t=e.data,t===Iy&&Sy?null:t;default:return null}}function qN(t,e){if(Li)return t==="compositionend"||!Np&&ox(t,e)?(t=sx(),_u=Tp=es=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ix&&e.locale!=="ko"?null:e.data;default:return null}}var WN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ny(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WN[t.type]:e==="textarea"}function lx(t,e,n,r){Uw(r),e=qu(e,"onChange"),0<e.length&&(n=new Ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,Ra=null;function HN(t){_x(t,0)}function Oc(t){var e=Fi(t);if(kw(e))return t}function GN(t,e){if(t==="change")return e}var ux=!1;if(Sr){var Qd;if(Sr){var Yd="oninput"in document;if(!Yd){var Ay=document.createElement("div");Ay.setAttribute("oninput","return;"),Yd=typeof Ay.oninput=="function"}Qd=Yd}else Qd=!1;ux=Qd&&(!document.documentMode||9<document.documentMode)}function Cy(){da&&(da.detachEvent("onpropertychange",cx),Ra=da=null)}function cx(t){if(t.propertyName==="value"&&Oc(Ra)){var e=[];lx(e,Ra,t,vp(t)),zw(HN,e)}}function KN(t,e,n){t==="focusin"?(Cy(),da=e,Ra=n,da.attachEvent("onpropertychange",cx)):t==="focusout"&&Cy()}function QN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oc(Ra)}function YN(t,e){if(t==="click")return Oc(e)}function JN(t,e){if(t==="input"||t==="change")return Oc(e)}function XN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:XN;function Pa(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Dh.call(e,s)||!Vn(t[s],e[s]))return!1}return!0}function by(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ry(t,e){var n=by(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=by(n)}}function dx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hx(){for(var t=window,e=Lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lu(t.document)}return e}function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZN(t){var e=hx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dx(n.ownerDocument.documentElement,n)){if(r!==null&&Ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ry(n,i);var o=Ry(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eA=Sr&&"documentMode"in document&&11>=document.documentMode,Mi=null,Zh=null,ha=null,ef=!1;function Py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ef||Mi==null||Mi!==Lu(r)||(r=Mi,"selectionStart"in r&&Ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&Pa(ha,r)||(ha=r,r=qu(Zh,"onSelect"),0<r.length&&(e=new Ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mi)))}function eu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:eu("Animation","AnimationEnd"),animationiteration:eu("Animation","AnimationIteration"),animationstart:eu("Animation","AnimationStart"),transitionend:eu("Transition","TransitionEnd")},Jd={},fx={};Sr&&(fx=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function Vc(t){if(Jd[t])return Jd[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fx)return Jd[t]=e[n];return t}var px=Vc("animationend"),mx=Vc("animationiteration"),gx=Vc("animationstart"),yx=Vc("transitionend"),vx=new Map,ky="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ss(t,e){vx.set(t,e),ui(e,[t])}for(var Xd=0;Xd<ky.length;Xd++){var Zd=ky[Xd],tA=Zd.toLowerCase(),nA=Zd[0].toUpperCase()+Zd.slice(1);Ss(tA,"on"+nA)}Ss(px,"onAnimationEnd");Ss(mx,"onAnimationIteration");Ss(gx,"onAnimationStart");Ss("dblclick","onDoubleClick");Ss("focusin","onFocus");Ss("focusout","onBlur");Ss(yx,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rA=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function jy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tN(r,e,void 0,t),t.currentTarget=null}function _x(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;jy(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;jy(s,l,d),i=u}}}if(Uu)throw t=Qh,Uu=!1,Qh=null,t}function ke(t,e){var n=e[of];n===void 0&&(n=e[of]=new Set);var r=t+"__bubble";n.has(r)||(wx(e,t,2,!1),n.add(r))}function eh(t,e,n){var r=0;e&&(r|=4),wx(n,t,r,e)}var tu="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[tu]){t[tu]=!0,Aw.forEach(function(n){n!=="selectionchange"&&(rA.has(n)||eh(n,!1,t),eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tu]||(e[tu]=!0,eh("selectionchange",!1,e))}}function wx(t,e,n,r){switch(rx(e)){case 1:var s=yN;break;case 4:s=vN;break;default:s=Ep}n=s.bind(null,e,n,t),s=void 0,!Kh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function th(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=$s(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}zw(function(){var d=i,h=vp(n),p=[];e:{var m=vx.get(t);if(m!==void 0){var y=Ip,T=t;switch(t){case"keypress":if(wu(n)===0)break e;case"keydown":case"keyup":y=jN;break;case"focusin":T="focus",y=Kd;break;case"focusout":T="blur",y=Kd;break;case"beforeblur":case"afterblur":y=Kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=xN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=VN;break;case px:case mx:case gx:y=IN;break;case yx:y=MN;break;case"scroll":y=_N;break;case"wheel":y=FN;break;case"copy":case"cut":case"paste":y=NN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ty}var N=(e&4)!==0,C=!N&&t==="scroll",x=N?m!==null?m+"Capture":null:m;N=[];for(var w=d,E;w!==null;){E=w;var k=E.stateNode;if(E.tag===5&&k!==null&&(E=k,x!==null&&(k=Na(w,x),k!=null&&N.push(ja(w,k,E)))),C)break;w=w.return}0<N.length&&(m=new y(m,T,null,n,h),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Hh&&(T=n.relatedTarget||n.fromElement)&&($s(T)||T[Nr]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(T=n.relatedTarget||n.toElement,y=d,T=T?$s(T):null,T!==null&&(C=ci(T),T!==C||T.tag!==5&&T.tag!==6)&&(T=null)):(y=null,T=d),y!==T)){if(N=xy,k="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=Ty,k="onPointerLeave",x="onPointerEnter",w="pointer"),C=y==null?m:Fi(y),E=T==null?m:Fi(T),m=new N(k,w+"leave",y,n,h),m.target=C,m.relatedTarget=E,k=null,$s(h)===d&&(N=new N(x,w+"enter",T,n,h),N.target=E,N.relatedTarget=C,k=N),C=k,y&&T)t:{for(N=y,x=T,w=0,E=N;E;E=Pi(E))w++;for(E=0,k=x;k;k=Pi(k))E++;for(;0<w-E;)N=Pi(N),w--;for(;0<E-w;)x=Pi(x),E--;for(;w--;){if(N===x||x!==null&&N===x.alternate)break t;N=Pi(N),x=Pi(x)}N=null}else N=null;y!==null&&Dy(p,m,y,N,!1),T!==null&&C!==null&&Dy(p,C,T,N,!0)}}e:{if(m=d?Fi(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var O=GN;else if(Ny(m))if(ux)O=JN;else{O=QN;var M=KN}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(O=YN);if(O&&(O=O(t,d))){lx(p,O,n,h);break e}M&&M(t,m,d),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&$h(m,"number",m.value)}switch(M=d?Fi(d):window,t){case"focusin":(Ny(M)||M.contentEditable==="true")&&(Mi=M,Zh=d,ha=null);break;case"focusout":ha=Zh=Mi=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Py(p,n,h);break;case"selectionchange":if(eA)break;case"keydown":case"keyup":Py(p,n,h)}var S;if(Np)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Li?ox(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(ix&&n.locale!=="ko"&&(Li||v!=="onCompositionStart"?v==="onCompositionEnd"&&Li&&(S=sx()):(es=h,Tp="value"in es?es.value:es.textContent,Li=!0)),M=qu(d,v),0<M.length&&(v=new Ey(v,t,null,n,h),p.push({event:v,listeners:M}),S?v.data=S:(S=ax(n),S!==null&&(v.data=S)))),(S=BN?zN(t,n):qN(t,n))&&(d=qu(d,"onBeforeInput"),0<d.length&&(h=new Ey("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=S))}_x(p,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Na(t,n),i!=null&&r.unshift(ja(t,i,s)),i=Na(t,e),i!=null&&r.push(ja(t,i,s))),t=t.return}return r}function Pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dy(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=Na(n,i),u!=null&&o.unshift(ja(n,u,l))):s||(u=Na(n,i),u!=null&&o.push(ja(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sA=/\r\n?/g,iA=/\u0000|\uFFFD/g;function Oy(t){return(typeof t=="string"?t:""+t).replace(sA,`
`).replace(iA,"")}function nu(t,e,n){if(e=Oy(e),Oy(t)!==e&&n)throw Error(B(425))}function Wu(){}var tf=null,nf=null;function rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,oA=typeof clearTimeout=="function"?clearTimeout:void 0,Vy=typeof Promise=="function"?Promise:void 0,aA=typeof queueMicrotask=="function"?queueMicrotask:typeof Vy<"u"?function(t){return Vy.resolve(null).then(t).catch(lA)}:sf;function lA(t){setTimeout(function(){throw t})}function nh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ba(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ba(e)}function as(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ly(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Io,Da="__reactProps$"+Io,Nr="__reactContainer$"+Io,of="__reactEvents$"+Io,uA="__reactListeners$"+Io,cA="__reactHandles$"+Io;function $s(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nr]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ly(t);t!==null;){if(n=t[Gn])return n;t=Ly(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[Gn]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Lc(t){return t[Da]||null}var af=[],$i=-1;function Ns(t){return{current:t}}function je(t){0>$i||(t.current=af[$i],af[$i]=null,$i--)}function Re(t,e){$i++,af[$i]=t.current,t.current=e}var vs={},kt=Ns(vs),Gt=Ns(!1),Ys=vs;function oo(t,e){var n=t.type.contextTypes;if(!n)return vs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Kt(t){return t=t.childContextTypes,t!=null}function Hu(){je(Gt),je(kt)}function My(t,e,n){if(kt.current!==vs)throw Error(B(168));Re(kt,e),Re(Gt,n)}function xx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,KS(t)||"Unknown",s));return ze({},n,r)}function Gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vs,Ys=kt.current,Re(kt,t),Re(Gt,Gt.current),!0}function Uy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=xx(t,e,Ys),r.__reactInternalMemoizedMergedChildContext=t,je(Gt),je(kt),Re(kt,t)):je(Gt),Re(Gt,n)}var gr=null,Mc=!1,rh=!1;function Ex(t){gr===null?gr=[t]:gr.push(t)}function dA(t){Mc=!0,Ex(t)}function As(){if(!rh&&gr!==null){rh=!0;var t=0,e=Se;try{var n=gr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Mc=!1}catch(s){throw gr!==null&&(gr=gr.slice(t+1)),Gw(_p,As),s}finally{Se=e,rh=!1}}return null}var Bi=[],zi=0,Ku=null,Qu=0,fn=[],pn=0,Js=null,yr=1,vr="";function Ms(t,e){Bi[zi++]=Qu,Bi[zi++]=Ku,Ku=t,Qu=e}function Tx(t,e,n){fn[pn++]=yr,fn[pn++]=vr,fn[pn++]=Js,Js=t;var r=yr;t=vr;var s=32-Pn(r)-1;r&=~(1<<s),n+=1;var i=32-Pn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,yr=1<<32-Pn(e)+s|n<<s|r,vr=i+t}else yr=1<<i|n<<s|r,vr=t}function Cp(t){t.return!==null&&(Ms(t,1),Tx(t,1,0))}function bp(t){for(;t===Ku;)Ku=Bi[--zi],Bi[zi]=null,Qu=Bi[--zi],Bi[zi]=null;for(;t===Js;)Js=fn[--pn],fn[pn]=null,vr=fn[--pn],fn[pn]=null,yr=fn[--pn],fn[pn]=null}var rn=null,tn=null,De=!1,Cn=null;function Ix(t,e){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,tn=as(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Js!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,tn=null,!0):!1;default:return!1}}function lf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uf(t){if(De){var e=tn;if(e){var n=e;if(!Fy(t,e)){if(lf(t))throw Error(B(418));e=as(n.nextSibling);var r=rn;e&&Fy(t,e)?Ix(r,n):(t.flags=t.flags&-4097|2,De=!1,rn=t)}}else{if(lf(t))throw Error(B(418));t.flags=t.flags&-4097|2,De=!1,rn=t}}}function $y(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function ru(t){if(t!==rn)return!1;if(!De)return $y(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rf(t.type,t.memoizedProps)),e&&(e=tn)){if(lf(t))throw Sx(),Error(B(418));for(;e;)Ix(t,e),e=as(e.nextSibling)}if($y(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=as(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=rn?as(t.stateNode.nextSibling):null;return!0}function Sx(){for(var t=tn;t;)t=as(t.nextSibling)}function ao(){tn=rn=null,De=!1}function Rp(t){Cn===null?Cn=[t]:Cn.push(t)}var hA=Dr.ReactCurrentBatchConfig;function Yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function su(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function By(t){var e=t._init;return e(t._payload)}function Nx(t){function e(x,w){if(t){var E=x.deletions;E===null?(x.deletions=[w],x.flags|=16):E.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function s(x,w){return x=ds(x,w),x.index=0,x.sibling=null,x}function i(x,w,E){return x.index=E,t?(E=x.alternate,E!==null?(E=E.index,E<w?(x.flags|=2,w):E):(x.flags|=2,w)):(x.flags|=1048576,w)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,w,E,k){return w===null||w.tag!==6?(w=ch(E,x.mode,k),w.return=x,w):(w=s(w,E),w.return=x,w)}function u(x,w,E,k){var O=E.type;return O===Vi?h(x,w,E.props.children,k,E.key):w!==null&&(w.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Hr&&By(O)===w.type)?(k=s(w,E.props),k.ref=Yo(x,w,E),k.return=x,k):(k=Au(E.type,E.key,E.props,null,x.mode,k),k.ref=Yo(x,w,E),k.return=x,k)}function d(x,w,E,k){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=dh(E,x.mode,k),w.return=x,w):(w=s(w,E.children||[]),w.return=x,w)}function h(x,w,E,k,O){return w===null||w.tag!==7?(w=Qs(E,x.mode,k,O),w.return=x,w):(w=s(w,E),w.return=x,w)}function p(x,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ch(""+w,x.mode,E),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Gl:return E=Au(w.type,w.key,w.props,null,x.mode,E),E.ref=Yo(x,null,w),E.return=x,E;case Oi:return w=dh(w,x.mode,E),w.return=x,w;case Hr:var k=w._init;return p(x,k(w._payload),E)}if(ea(w)||Wo(w))return w=Qs(w,x.mode,E,null),w.return=x,w;su(x,w)}return null}function m(x,w,E,k){var O=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return O!==null?null:l(x,w,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Gl:return E.key===O?u(x,w,E,k):null;case Oi:return E.key===O?d(x,w,E,k):null;case Hr:return O=E._init,m(x,w,O(E._payload),k)}if(ea(E)||Wo(E))return O!==null?null:h(x,w,E,k,null);su(x,E)}return null}function y(x,w,E,k,O){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(E)||null,l(w,x,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Gl:return x=x.get(k.key===null?E:k.key)||null,u(w,x,k,O);case Oi:return x=x.get(k.key===null?E:k.key)||null,d(w,x,k,O);case Hr:var M=k._init;return y(x,w,E,M(k._payload),O)}if(ea(k)||Wo(k))return x=x.get(E)||null,h(w,x,k,O,null);su(w,k)}return null}function T(x,w,E,k){for(var O=null,M=null,S=w,v=w=0,I=null;S!==null&&v<E.length;v++){S.index>v?(I=S,S=null):I=S.sibling;var A=m(x,S,E[v],k);if(A===null){S===null&&(S=I);break}t&&S&&A.alternate===null&&e(x,S),w=i(A,w,v),M===null?O=A:M.sibling=A,M=A,S=I}if(v===E.length)return n(x,S),De&&Ms(x,v),O;if(S===null){for(;v<E.length;v++)S=p(x,E[v],k),S!==null&&(w=i(S,w,v),M===null?O=S:M.sibling=S,M=S);return De&&Ms(x,v),O}for(S=r(x,S);v<E.length;v++)I=y(S,x,v,E[v],k),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?v:I.key),w=i(I,w,v),M===null?O=I:M.sibling=I,M=I);return t&&S.forEach(function(P){return e(x,P)}),De&&Ms(x,v),O}function N(x,w,E,k){var O=Wo(E);if(typeof O!="function")throw Error(B(150));if(E=O.call(E),E==null)throw Error(B(151));for(var M=O=null,S=w,v=w=0,I=null,A=E.next();S!==null&&!A.done;v++,A=E.next()){S.index>v?(I=S,S=null):I=S.sibling;var P=m(x,S,A.value,k);if(P===null){S===null&&(S=I);break}t&&S&&P.alternate===null&&e(x,S),w=i(P,w,v),M===null?O=P:M.sibling=P,M=P,S=I}if(A.done)return n(x,S),De&&Ms(x,v),O;if(S===null){for(;!A.done;v++,A=E.next())A=p(x,A.value,k),A!==null&&(w=i(A,w,v),M===null?O=A:M.sibling=A,M=A);return De&&Ms(x,v),O}for(S=r(x,S);!A.done;v++,A=E.next())A=y(S,x,v,A.value,k),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?v:A.key),w=i(A,w,v),M===null?O=A:M.sibling=A,M=A);return t&&S.forEach(function(j){return e(x,j)}),De&&Ms(x,v),O}function C(x,w,E,k){if(typeof E=="object"&&E!==null&&E.type===Vi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Gl:e:{for(var O=E.key,M=w;M!==null;){if(M.key===O){if(O=E.type,O===Vi){if(M.tag===7){n(x,M.sibling),w=s(M,E.props.children),w.return=x,x=w;break e}}else if(M.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Hr&&By(O)===M.type){n(x,M.sibling),w=s(M,E.props),w.ref=Yo(x,M,E),w.return=x,x=w;break e}n(x,M);break}else e(x,M);M=M.sibling}E.type===Vi?(w=Qs(E.props.children,x.mode,k,E.key),w.return=x,x=w):(k=Au(E.type,E.key,E.props,null,x.mode,k),k.ref=Yo(x,w,E),k.return=x,x=k)}return o(x);case Oi:e:{for(M=E.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(x,w.sibling),w=s(w,E.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=dh(E,x.mode,k),w.return=x,x=w}return o(x);case Hr:return M=E._init,C(x,w,M(E._payload),k)}if(ea(E))return T(x,w,E,k);if(Wo(E))return N(x,w,E,k);su(x,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(n(x,w.sibling),w=s(w,E),w.return=x,x=w):(n(x,w),w=ch(E,x.mode,k),w.return=x,x=w),o(x)):n(x,w)}return C}var lo=Nx(!0),Ax=Nx(!1),Yu=Ns(null),Ju=null,qi=null,Pp=null;function kp(){Pp=qi=Ju=null}function jp(t){var e=Yu.current;je(Yu),t._currentValue=e}function cf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zi(t,e){Ju=t,Pp=qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(Pp!==t)if(t={context:t,memoizedValue:e,next:null},qi===null){if(Ju===null)throw Error(B(308));qi=t,Ju.dependencies={lanes:0,firstContext:t}}else qi=qi.next=t;return e}var Bs=null;function Dp(t){Bs===null?Bs=[t]:Bs.push(t)}function Cx(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Dp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Ar(t,r)}function Ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ls(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Ar(t,n)}return s=r.interleaved,s===null?(e.next=e,Dp(r)):(e.next=s.next,s.next=e),r.interleaved=e,Ar(t,n)}function xu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wp(t,n)}}function zy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xu(t,e,n,r){var s=t.updateQueue;Gr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,h=d=u=null,l=i;do{var m=l.lane,y=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,N=l;switch(m=e,y=n,N.tag){case 1:if(T=N.payload,typeof T=="function"){p=T.call(y,p,m);break e}p=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=N.payload,m=typeof T=="function"?T.call(y,p,m):T,m==null)break e;p=ze({},p,m);break e;case 2:Gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=y,u=p):h=h.next=y,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(u=p),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Zs|=o,t.lanes=o,t.memoizedState=p}}function qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var ol={},Qn=Ns(ol),Oa=Ns(ol),Va=Ns(ol);function zs(t){if(t===ol)throw Error(B(174));return t}function Vp(t,e){switch(Re(Va,e),Re(Oa,t),Re(Qn,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zh(e,t)}je(Qn),Re(Qn,e)}function uo(){je(Qn),je(Oa),je(Va)}function Rx(t){zs(Va.current);var e=zs(Qn.current),n=zh(e,t.type);e!==n&&(Re(Oa,t),Re(Qn,n))}function Lp(t){Oa.current===t&&(je(Qn),je(Oa))}var Ue=Ns(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sh=[];function Mp(){for(var t=0;t<sh.length;t++)sh[t]._workInProgressVersionPrimary=null;sh.length=0}var Eu=Dr.ReactCurrentDispatcher,ih=Dr.ReactCurrentBatchConfig,Xs=0,$e=null,rt=null,lt=null,ec=!1,fa=!1,La=0,fA=0;function It(){throw Error(B(321))}function Up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Fp(t,e,n,r,s,i){if(Xs=i,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Eu.current=t===null||t.memoizedState===null?yA:vA,t=n(r,s),fa){i=0;do{if(fa=!1,La=0,25<=i)throw Error(B(301));i+=1,lt=rt=null,e.updateQueue=null,Eu.current=_A,t=n(r,s)}while(fa)}if(Eu.current=tc,e=rt!==null&&rt.next!==null,Xs=0,lt=rt=$e=null,ec=!1,e)throw Error(B(300));return t}function $p(){var t=La!==0;return La=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?$e.memoizedState=lt=t:lt=lt.next=t,lt}function _n(){if(rt===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=lt===null?$e.memoizedState:lt.next;if(e!==null)lt=e,rt=t;else{if(t===null)throw Error(B(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},lt===null?$e.memoizedState=lt=t:lt=lt.next=t}return lt}function Ma(t,e){return typeof e=="function"?e(t):e}function oh(t){var e=_n(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=rt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var h=d.lane;if((Xs&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,$e.lanes|=h,Zs|=h}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,Vn(r,e.memoizedState)||(Wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,$e.lanes|=i,Zs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ah(t){var e=_n(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Vn(i,e.memoizedState)||(Wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Px(){}function kx(t,e){var n=$e,r=_n(),s=e(),i=!Vn(r.memoizedState,s);if(i&&(r.memoizedState=s,Wt=!0),r=r.queue,Bp(Ox.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Ua(9,Dx.bind(null,n,r,s,e),void 0,null),ct===null)throw Error(B(349));Xs&30||jx(n,e,s)}return s}function jx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dx(t,e,n,r){e.value=n,e.getSnapshot=r,Vx(e)&&Lx(t)}function Ox(t,e,n){return n(function(){Vx(e)&&Lx(t)})}function Vx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function Lx(t){var e=Ar(t,1);e!==null&&kn(e,t,1,-1)}function Wy(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=gA.bind(null,$e,t),[e.memoizedState,t]}function Ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Mx(){return _n().memoizedState}function Tu(t,e,n,r){var s=Wn();$e.flags|=t,s.memoizedState=Ua(1|e,n,void 0,r===void 0?null:r)}function Uc(t,e,n,r){var s=_n();r=r===void 0?null:r;var i=void 0;if(rt!==null){var o=rt.memoizedState;if(i=o.destroy,r!==null&&Up(r,o.deps)){s.memoizedState=Ua(e,n,i,r);return}}$e.flags|=t,s.memoizedState=Ua(1|e,n,i,r)}function Hy(t,e){return Tu(8390656,8,t,e)}function Bp(t,e){return Uc(2048,8,t,e)}function Ux(t,e){return Uc(4,2,t,e)}function Fx(t,e){return Uc(4,4,t,e)}function $x(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bx(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4,4,$x.bind(null,e,t),n)}function zp(){}function zx(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Up(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qx(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Up(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Wx(t,e,n){return Xs&21?(Vn(n,e)||(n=Yw(),$e.lanes|=n,Zs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function pA(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=ih.transition;ih.transition={};try{t(!1),e()}finally{Se=n,ih.transition=r}}function Hx(){return _n().memoizedState}function mA(t,e,n){var r=cs(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gx(t))Kx(e,n);else if(n=Cx(t,e,n,r),n!==null){var s=Lt();kn(n,t,r,s),Qx(n,e,r)}}function gA(t,e,n){var r=cs(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gx(t))Kx(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Vn(l,o)){var u=e.interleaved;u===null?(s.next=s,Dp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Cx(t,e,s,r),n!==null&&(s=Lt(),kn(n,t,r,s),Qx(n,e,r))}}function Gx(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function Kx(t,e){fa=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wp(t,n)}}var tc={readContext:vn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},yA={readContext:vn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:Hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tu(4194308,4,$x.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tu(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mA.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Wy,useDebugValue:zp,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Wy(!1),e=t[0];return t=pA.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,s=Wn();if(De){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ct===null)throw Error(B(349));Xs&30||jx(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Hy(Ox.bind(null,r,i,t),[t]),r.flags|=2048,Ua(9,Dx.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Wn(),e=ct.identifierPrefix;if(De){var n=vr,r=yr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vA={readContext:vn,useCallback:zx,useContext:vn,useEffect:Bp,useImperativeHandle:Bx,useInsertionEffect:Ux,useLayoutEffect:Fx,useMemo:qx,useReducer:oh,useRef:Mx,useState:function(){return oh(Ma)},useDebugValue:zp,useDeferredValue:function(t){var e=_n();return Wx(e,rt.memoizedState,t)},useTransition:function(){var t=oh(Ma)[0],e=_n().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:kx,useId:Hx,unstable_isNewReconciler:!1},_A={readContext:vn,useCallback:zx,useContext:vn,useEffect:Bp,useImperativeHandle:Bx,useInsertionEffect:Ux,useLayoutEffect:Fx,useMemo:qx,useReducer:ah,useRef:Mx,useState:function(){return ah(Ma)},useDebugValue:zp,useDeferredValue:function(t){var e=_n();return rt===null?e.memoizedState=t:Wx(e,rt.memoizedState,t)},useTransition:function(){var t=ah(Ma)[0],e=_n().memoizedState;return[t,e]},useMutableSource:Px,useSyncExternalStore:kx,useId:Hx,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function df(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fc={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),s=cs(t),i=xr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(kn(e,t,s,r),xu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),s=cs(t),i=xr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(kn(e,t,s,r),xu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=cs(t),s=xr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ls(t,s,r),e!==null&&(kn(e,t,r,n),xu(e,t,r))}};function Gy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,r)||!Pa(s,i):!0}function Yx(t,e,n){var r=!1,s=vs,i=e.contextType;return typeof i=="object"&&i!==null?i=vn(i):(s=Kt(e)?Ys:kt.current,r=e.contextTypes,i=(r=r!=null)?oo(t,s):vs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ky(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function hf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Op(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=vn(i):(i=Kt(e)?Ys:kt.current,s.context=oo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(df(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Fc.enqueueReplaceState(s,s.state,null),Xu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function co(t,e){try{var n="",r=e;do n+=GS(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function lh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wA=typeof WeakMap=="function"?WeakMap:Map;function Jx(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rc||(rc=!0,Tf=r),ff(t,e)},n}function Xx(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ff(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ff(t,e),typeof r!="function"&&(us===null?us=new Set([this]):us.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wA;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=DA.bind(null,t,e,n),e.then(t,t))}function Yy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,ls(n,e,1))),n.lanes|=1),t)}var xA=Dr.ReactCurrentOwner,Wt=!1;function Vt(t,e,n,r){e.child=t===null?Ax(e,null,n,r):lo(e,t.child,n,r)}function Xy(t,e,n,r,s){n=n.render;var i=e.ref;return Zi(e,s),r=Fp(t,e,n,r,i,s),n=$p(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cr(t,e,s)):(De&&n&&Cp(e),e.flags|=1,Vt(t,e,r,s),e.child)}function Zy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Jp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Zx(t,e,i,r,s)):(t=Au(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(o,r)&&t.ref===e.ref)return Cr(t,e,s)}return e.flags|=1,t=ds(i,r),t.ref=e.ref,t.return=e,e.child=t}function Zx(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Pa(i,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,Cr(t,e,s)}return pf(t,e,n,r,s)}function eE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Hi,Zt),Zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Hi,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Re(Hi,Zt),Zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Re(Hi,Zt),Zt|=r;return Vt(t,e,s,n),e.child}function tE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pf(t,e,n,r,s){var i=Kt(n)?Ys:kt.current;return i=oo(e,i),Zi(e,s),n=Fp(t,e,n,r,i,s),r=$p(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Cr(t,e,s)):(De&&r&&Cp(e),e.flags|=1,Vt(t,e,n,s),e.child)}function ev(t,e,n,r,s){if(Kt(n)){var i=!0;Gu(e)}else i=!1;if(Zi(e,s),e.stateNode===null)Iu(t,e),Yx(e,n,r),hf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=vn(d):(d=Kt(n)?Ys:kt.current,d=oo(e,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Ky(e,o,r,d),Gr=!1;var m=e.memoizedState;o.state=m,Xu(e,r,o,s),u=e.memoizedState,l!==r||m!==u||Gt.current||Gr?(typeof h=="function"&&(df(e,n,h,r),u=e.memoizedState),(l=Gr||Gy(e,n,l,r,m,u,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,bx(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Nn(e.type,l),o.props=d,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=vn(u):(u=Kt(n)?Ys:kt.current,u=oo(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Ky(e,o,r,u),Gr=!1,m=e.memoizedState,o.state=m,Xu(e,r,o,s);var T=e.memoizedState;l!==p||m!==T||Gt.current||Gr?(typeof y=="function"&&(df(e,n,y,r),T=e.memoizedState),(d=Gr||Gy(e,n,d,r,m,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return mf(t,e,n,r,i,s)}function mf(t,e,n,r,s,i){tE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Uy(e,n,!1),Cr(t,e,i);r=e.stateNode,xA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,i),e.child=lo(e,null,l,i)):Vt(t,e,l,i),e.memoizedState=r.state,s&&Uy(e,n,!0),e.child}function nE(t){var e=t.stateNode;e.pendingContext?My(t,e.pendingContext,e.pendingContext!==e.context):e.context&&My(t,e.context,!1),Vp(t,e.containerInfo)}function tv(t,e,n,r,s){return ao(),Rp(s),e.flags|=256,Vt(t,e,n,r),e.child}var gf={dehydrated:null,treeContext:null,retryLane:0};function yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function rE(t,e,n){var r=e.pendingProps,s=Ue.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Re(Ue,s&1),t===null)return uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zc(o,r,0,null),t=Qs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=yf(n),e.memoizedState=gf,t):qp(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return EA(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ds(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ds(l,i):(i=Qs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=gf,r}return i=t.child,t=i.sibling,r=ds(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qp(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function iu(t,e,n,r){return r!==null&&Rp(r),lo(e,t.child,null,n),t=qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=lh(Error(B(422))),iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=zc({mode:"visible",children:r.children},s,0,null),i=Qs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=yf(o),e.memoizedState=gf,i);if(!(e.mode&1))return iu(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=lh(i,r,void 0),iu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Wt||l){if(r=ct,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ar(t,s),kn(r,t,s,-1))}return Yp(),r=lh(Error(B(421))),iu(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=OA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,tn=as(s.nextSibling),rn=e,De=!0,Cn=null,t!==null&&(fn[pn++]=yr,fn[pn++]=vr,fn[pn++]=Js,yr=t.id,vr=t.overflow,Js=e),e=qp(e,r.children),e.flags|=4096,e)}function nv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cf(t.return,e,n)}function uh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function sE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Vt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nv(t,n,e);else if(t.tag===19)nv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),uh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Zu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}uh(e,!0,n,null,i);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Iu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ds(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ds(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TA(t,e,n){switch(e.tag){case 3:nE(e),ao();break;case 5:Rx(e);break;case 1:Kt(e.type)&&Gu(e);break;case 4:Vp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Re(Yu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?rE(t,e,n):(Re(Ue,Ue.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Re(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Re(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,eE(t,e,n)}return Cr(t,e,n)}var iE,vf,oE,aE;iE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vf=function(){};oE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,zs(Qn.current);var i=null;switch(n){case"input":s=Uh(t,s),r=Uh(t,r),i=[];break;case"select":s=ze({},s,{value:void 0}),r=ze({},r,{value:void 0}),i=[];break;case"textarea":s=Bh(t,s),r=Bh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Wu)}qh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ia.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ke("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};aE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jo(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IA(t,e,n){var r=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Kt(e.type)&&Hu(),St(e),null;case 3:return r=e.stateNode,uo(),je(Gt),je(kt),Mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(Nf(Cn),Cn=null))),vf(t,e),St(e),null;case 5:Lp(e);var s=zs(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)oE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return St(e),null}if(t=zs(Qn.current),ru(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Gn]=e,r[Da]=i,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<na.length;s++)ke(na[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":dy(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":fy(r,i),ke("invalid",r)}qh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&nu(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&nu(r.textContent,l,t),s=["children",""+l]):Ia.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":Kl(r),hy(r,i,!0);break;case"textarea":Kl(r),py(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ow(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gn]=e,t[Da]=r,iE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wh(n,r),n){case"dialog":ke("cancel",t),ke("close",t),s=r;break;case"iframe":case"object":case"embed":ke("load",t),s=r;break;case"video":case"audio":for(s=0;s<na.length;s++)ke(na[s],t);s=r;break;case"source":ke("error",t),s=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),s=r;break;case"details":ke("toggle",t),s=r;break;case"input":dy(t,r),s=Uh(t,r),ke("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ze({},r,{value:void 0}),ke("invalid",t);break;case"textarea":fy(t,r),s=Bh(t,r),ke("invalid",t);break;default:s=r}qh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Mw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vw(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Sa(t,u):typeof u=="number"&&Sa(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ia.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ke("scroll",t):u!=null&&pp(t,i,u,o))}switch(n){case"input":Kl(t),hy(t,r,!1);break;case"textarea":Kl(t),py(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ys(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Qi(t,!!r.multiple,i,!1):r.defaultValue!=null&&Qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Wu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)aE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=zs(Va.current),zs(Qn.current),ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(i=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:nu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nu(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return St(e),null;case 13:if(je(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&tn!==null&&e.mode&1&&!(e.flags&128))Sx(),ao(),e.flags|=98560,i=!1;else if(i=ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Gn]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),i=!1}else Cn!==null&&(Nf(Cn),Cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?st===0&&(st=3):Yp())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return uo(),vf(t,e),t===null&&ka(e.stateNode.containerInfo),St(e),null;case 10:return jp(e.type._context),St(e),null;case 17:return Kt(e.type)&&Hu(),St(e),null;case 19:if(je(Ue),i=e.memoizedState,i===null)return St(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Jo(i,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zu(t),o!==null){for(e.flags|=128,Jo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ue,Ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ye()>ho&&(e.flags|=128,r=!0,Jo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Zu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!De)return St(e),null}else 2*Ye()-i.renderingStartTime>ho&&n!==1073741824&&(e.flags|=128,r=!0,Jo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ye(),e.sibling=null,n=Ue.current,Re(Ue,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return Qp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function SA(t,e){switch(bp(e),e.tag){case 1:return Kt(e.type)&&Hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return uo(),je(Gt),je(kt),Mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lp(e),null;case 13:if(je(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(Ue),null;case 4:return uo(),null;case 10:return jp(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var ou=!1,Ct=!1,NA=typeof WeakSet=="function"?WeakSet:Set,K=null;function Wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function _f(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var rv=!1;function AA(t,e){if(tf=Bu,t=hx(),Ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,h=0,p=t,m=null;t:for(;;){for(var y;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===t)break t;if(m===n&&++d===s&&(l=o),m===i&&++h===r&&(u=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nf={focusedElem:t,selectionRange:n},Bu=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var N=T.memoizedProps,C=T.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?N:Nn(e.type,N),C);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(k){Ge(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return T=rv,rv=!1,T}function pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&_f(e,n,i)}s=s.next}while(s!==r)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lE(t){var e=t.alternate;e!==null&&(t.alternate=null,lE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[Da],delete e[of],delete e[uA],delete e[cA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uE(t){return t.tag===5||t.tag===3||t.tag===4}function sv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wu));else if(r!==4&&(t=t.child,t!==null))for(xf(t,e,n),t=t.sibling;t!==null;)xf(t,e,n),t=t.sibling}function Ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}var gt=null,An=!1;function zr(t,e,n){for(n=n.child;n!==null;)cE(t,e,n),n=n.sibling}function cE(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:Ct||Wi(n,e);case 6:var r=gt,s=An;gt=null,zr(t,e,n),gt=r,An=s,gt!==null&&(An?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(An?(t=gt,n=n.stateNode,t.nodeType===8?nh(t.parentNode,n):t.nodeType===1&&nh(t,n),ba(t)):nh(gt,n.stateNode));break;case 4:r=gt,s=An,gt=n.stateNode.containerInfo,An=!0,zr(t,e,n),gt=r,An=s;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&_f(n,e,o),s=s.next}while(s!==r)}zr(t,e,n);break;case 1:if(!Ct&&(Wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ge(n,e,l)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,zr(t,e,n),Ct=r):zr(t,e,n);break;default:zr(t,e,n)}}function iv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NA),e.forEach(function(r){var s=VA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:gt=l.stateNode,An=!1;break e;case 3:gt=l.stateNode.containerInfo,An=!0;break e;case 4:gt=l.stateNode.containerInfo,An=!0;break e}l=l.return}if(gt===null)throw Error(B(160));cE(i,o,s),gt=null,An=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Ge(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dE(e,t),e=e.sibling}function dE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),qn(t),r&4){try{pa(3,t,t.return),$c(3,t)}catch(N){Ge(t,t.return,N)}try{pa(5,t,t.return)}catch(N){Ge(t,t.return,N)}}break;case 1:Sn(e,t),qn(t),r&512&&n!==null&&Wi(n,n.return);break;case 5:if(Sn(e,t),qn(t),r&512&&n!==null&&Wi(n,n.return),t.flags&32){var s=t.stateNode;try{Sa(s,"")}catch(N){Ge(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&jw(s,i),Wh(l,o);var d=Wh(l,i);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?Mw(s,p):h==="dangerouslySetInnerHTML"?Vw(s,p):h==="children"?Sa(s,p):pp(s,h,p,d)}switch(l){case"input":Fh(s,i);break;case"textarea":Dw(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qi(s,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Qi(s,!!i.multiple,i.defaultValue,!0):Qi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Da]=i}catch(N){Ge(t,t.return,N)}}break;case 6:if(Sn(e,t),qn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Ge(t,t.return,N)}}break;case 3:if(Sn(e,t),qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(N){Ge(t,t.return,N)}break;case 4:Sn(e,t),qn(t);break;case 13:Sn(e,t),qn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Gp=Ye())),r&4&&iv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ct=(d=Ct)||h,Sn(e,t),Ct=d):Sn(e,t),qn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(K=t,h=t.child;h!==null;){for(p=K=h;K!==null;){switch(m=K,y=m.child,m.tag){case 0:case 11:case 14:case 15:pa(4,m,m.return);break;case 1:Wi(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(N){Ge(r,n,N)}}break;case 5:Wi(m,m.return);break;case 22:if(m.memoizedState!==null){av(p);continue}}y!==null?(y.return=m,K=y):av(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Lw("display",o))}catch(N){Ge(t,t.return,N)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(N){Ge(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Sn(e,t),qn(t),r&4&&iv(t);break;case 21:break;default:Sn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Sa(s,""),r.flags&=-33);var i=sv(t);Ef(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=sv(t);xf(t,l,o);break;default:throw Error(B(161))}}catch(u){Ge(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CA(t,e,n){K=t,hE(t)}function hE(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ou;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Ct;l=ou;var d=Ct;if(ou=o,(Ct=u)&&!d)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?lv(s):u!==null?(u.return=o,K=u):lv(s);for(;i!==null;)K=i,hE(i),i=i.sibling;K=s,ou=l,Ct=d}ov(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):ov(t)}}function ov(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ct||$c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&qy(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ba(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ct||e.flags&512&&wf(e)}catch(m){Ge(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function av(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function lv(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(u){Ge(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ge(e,s,u)}}var i=e.return;try{wf(e)}catch(u){Ge(e,i,u)}break;case 5:var o=e.return;try{wf(e)}catch(u){Ge(e,o,u)}}}catch(u){Ge(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var bA=Math.ceil,nc=Dr.ReactCurrentDispatcher,Wp=Dr.ReactCurrentOwner,yn=Dr.ReactCurrentBatchConfig,we=0,ct=null,Ze=null,vt=0,Zt=0,Hi=Ns(0),st=0,Fa=null,Zs=0,Bc=0,Hp=0,ma=null,Bt=null,Gp=0,ho=1/0,pr=null,rc=!1,Tf=null,us=null,au=!1,ts=null,sc=0,ga=0,If=null,Su=-1,Nu=0;function Lt(){return we&6?Ye():Su!==-1?Su:Su=Ye()}function cs(t){return t.mode&1?we&2&&vt!==0?vt&-vt:hA.transition!==null?(Nu===0&&(Nu=Yw()),Nu):(t=Se,t!==0||(t=window.event,t=t===void 0?16:rx(t.type)),t):1}function kn(t,e,n,r){if(50<ga)throw ga=0,If=null,Error(B(185));rl(t,n,r),(!(we&2)||t!==ct)&&(t===ct&&(!(we&2)&&(Bc|=n),st===4&&Qr(t,vt)),Qt(t,r),n===1&&we===0&&!(e.mode&1)&&(ho=Ye()+500,Mc&&As()))}function Qt(t,e){var n=t.callbackNode;hN(t,e);var r=$u(t,t===ct?vt:0);if(r===0)n!==null&&yy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yy(n),e===1)t.tag===0?dA(uv.bind(null,t)):Ex(uv.bind(null,t)),aA(function(){!(we&6)&&As()}),n=null;else{switch(Jw(r)){case 1:n=_p;break;case 4:n=Kw;break;case 16:n=Fu;break;case 536870912:n=Qw;break;default:n=Fu}n=wE(n,fE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fE(t,e){if(Su=-1,Nu=0,we&6)throw Error(B(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var r=$u(t,t===ct?vt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var s=we;we|=2;var i=mE();(ct!==t||vt!==e)&&(pr=null,ho=Ye()+500,Ks(t,e));do try{kA();break}catch(l){pE(t,l)}while(!0);kp(),nc.current=i,we=s,Ze!==null?e=0:(ct=null,vt=0,e=st)}if(e!==0){if(e===2&&(s=Yh(t),s!==0&&(r=s,e=Sf(t,s))),e===1)throw n=Fa,Ks(t,0),Qr(t,r),Qt(t,Ye()),n;if(e===6)Qr(t,r);else{if(s=t.current.alternate,!(r&30)&&!RA(s)&&(e=ic(t,r),e===2&&(i=Yh(t),i!==0&&(r=i,e=Sf(t,i))),e===1))throw n=Fa,Ks(t,0),Qr(t,r),Qt(t,Ye()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Us(t,Bt,pr);break;case 3:if(Qr(t,r),(r&130023424)===r&&(e=Gp+500-Ye(),10<e)){if($u(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=sf(Us.bind(null,t,Bt,pr),e);break}Us(t,Bt,pr);break;case 4:if(Qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Pn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bA(r/1960))-r,10<r){t.timeoutHandle=sf(Us.bind(null,t,Bt,pr),r);break}Us(t,Bt,pr);break;case 5:Us(t,Bt,pr);break;default:throw Error(B(329))}}}return Qt(t,Ye()),t.callbackNode===n?fE.bind(null,t):null}function Sf(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Ks(t,e).flags|=256),t=ic(t,e),t!==2&&(e=Bt,Bt=n,e!==null&&Nf(e)),t}function Nf(t){Bt===null?Bt=t:Bt.push.apply(Bt,t)}function RA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Vn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(t,e){for(e&=~Hp,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function uv(t){if(we&6)throw Error(B(327));eo();var e=$u(t,0);if(!(e&1))return Qt(t,Ye()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=Yh(t);r!==0&&(e=r,n=Sf(t,r))}if(n===1)throw n=Fa,Ks(t,0),Qr(t,e),Qt(t,Ye()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Us(t,Bt,pr),Qt(t,Ye()),null}function Kp(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(ho=Ye()+500,Mc&&As())}}function ei(t){ts!==null&&ts.tag===0&&!(we&6)&&eo();var e=we;we|=1;var n=yn.transition,r=Se;try{if(yn.transition=null,Se=1,t)return t()}finally{Se=r,yn.transition=n,we=e,!(we&6)&&As()}}function Qp(){Zt=Hi.current,je(Hi)}function Ks(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oA(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hu();break;case 3:uo(),je(Gt),je(kt),Mp();break;case 5:Lp(r);break;case 4:uo();break;case 13:je(Ue);break;case 19:je(Ue);break;case 10:jp(r.type._context);break;case 22:case 23:Qp()}n=n.return}if(ct=t,Ze=t=ds(t.current,null),vt=Zt=e,st=0,Fa=null,Hp=Bc=Zs=0,Bt=ma=null,Bs!==null){for(e=0;e<Bs.length;e++)if(n=Bs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Bs=null}return t}function pE(t,e){do{var n=Ze;try{if(kp(),Eu.current=tc,ec){for(var r=$e.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ec=!1}if(Xs=0,lt=rt=$e=null,fa=!1,La=0,Wp.current=null,n===null||n.return===null){st=1,Fa=e,Ze=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=vt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Yy(o);if(y!==null){y.flags&=-257,Jy(y,o,l,i,e),y.mode&1&&Qy(i,d,e),e=y,u=d;var T=e.updateQueue;if(T===null){var N=new Set;N.add(u),e.updateQueue=N}else T.add(u);break e}else{if(!(e&1)){Qy(i,d,e),Yp();break e}u=Error(B(426))}}else if(De&&l.mode&1){var C=Yy(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Jy(C,o,l,i,e),Rp(co(u,l));break e}}i=u=co(u,l),st!==4&&(st=2),ma===null?ma=[i]:ma.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=Jx(i,u,e);zy(i,x);break e;case 1:l=u;var w=i.type,E=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(us===null||!us.has(E)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=Xx(i,l,e);zy(i,k);break e}}i=i.return}while(i!==null)}yE(n)}catch(O){e=O,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(!0)}function mE(){var t=nc.current;return nc.current=tc,t===null?tc:t}function Yp(){(st===0||st===3||st===2)&&(st=4),ct===null||!(Zs&268435455)&&!(Bc&268435455)||Qr(ct,vt)}function ic(t,e){var n=we;we|=2;var r=mE();(ct!==t||vt!==e)&&(pr=null,Ks(t,e));do try{PA();break}catch(s){pE(t,s)}while(!0);if(kp(),we=n,nc.current=r,Ze!==null)throw Error(B(261));return ct=null,vt=0,st}function PA(){for(;Ze!==null;)gE(Ze)}function kA(){for(;Ze!==null&&!rN();)gE(Ze)}function gE(t){var e=_E(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?yE(t):Ze=e,Wp.current=null}function yE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SA(n,e),n!==null){n.flags&=32767,Ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,Ze=null;return}}else if(n=IA(n,e,Zt),n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);st===0&&(st=5)}function Us(t,e,n){var r=Se,s=yn.transition;try{yn.transition=null,Se=1,jA(t,e,n,r)}finally{yn.transition=s,Se=r}return null}function jA(t,e,n,r){do eo();while(ts!==null);if(we&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(fN(t,i),t===ct&&(Ze=ct=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||au||(au=!0,wE(Fu,function(){return eo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yn.transition,yn.transition=null;var o=Se;Se=1;var l=we;we|=4,Wp.current=null,AA(t,n),dE(n,t),ZN(nf),Bu=!!tf,nf=tf=null,t.current=n,CA(n),sN(),we=l,Se=o,yn.transition=i}else t.current=n;if(au&&(au=!1,ts=t,sc=s),i=t.pendingLanes,i===0&&(us=null),aN(n.stateNode),Qt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(rc)throw rc=!1,t=Tf,Tf=null,t;return sc&1&&t.tag!==0&&eo(),i=t.pendingLanes,i&1?t===If?ga++:(ga=0,If=t):ga=0,As(),null}function eo(){if(ts!==null){var t=Jw(sc),e=yn.transition,n=Se;try{if(yn.transition=null,Se=16>t?16:t,ts===null)var r=!1;else{if(t=ts,ts=null,sc=0,we&6)throw Error(B(331));var s=we;for(we|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(K=d;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:pa(8,h,i)}var p=h.child;if(p!==null)p.return=h,K=p;else for(;K!==null;){h=K;var m=h.sibling,y=h.return;if(lE(h),h===d){K=null;break}if(m!==null){m.return=y,K=m;break}K=y}}}var T=i.alternate;if(T!==null){var N=T.child;if(N!==null){T.child=null;do{var C=N.sibling;N.sibling=null,N=C}while(N!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pa(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,K=x;break e}K=i.return}}var w=t.current;for(K=w;K!==null;){o=K;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,K=E;else e:for(o=w;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$c(9,l)}}catch(O){Ge(l,l.return,O)}if(l===o){K=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,K=k;break e}K=l.return}}if(we=s,As(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(jc,t)}catch{}r=!0}return r}finally{Se=n,yn.transition=e}}return!1}function cv(t,e,n){e=co(n,e),e=Jx(t,e,1),t=ls(t,e,1),e=Lt(),t!==null&&(rl(t,1,e),Qt(t,e))}function Ge(t,e,n){if(t.tag===3)cv(t,t,n);else for(;e!==null;){if(e.tag===3){cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(us===null||!us.has(r))){t=co(n,t),t=Xx(e,t,1),e=ls(e,t,1),t=Lt(),e!==null&&(rl(e,1,t),Qt(e,t));break}}e=e.return}}function DA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,ct===t&&(vt&n)===n&&(st===4||st===3&&(vt&130023424)===vt&&500>Ye()-Gp?Ks(t,0):Hp|=n),Qt(t,e)}function vE(t,e){e===0&&(t.mode&1?(e=Jl,Jl<<=1,!(Jl&130023424)&&(Jl=4194304)):e=1);var n=Lt();t=Ar(t,e),t!==null&&(rl(t,e,n),Qt(t,n))}function OA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vE(t,n)}function VA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),vE(t,n)}var _E;_E=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,TA(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,De&&e.flags&1048576&&Tx(e,Qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Iu(t,e),t=e.pendingProps;var s=oo(e,kt.current);Zi(e,n),s=Fp(null,e,r,t,s,n);var i=$p();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(i=!0,Gu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Op(e),s.updater=Fc,e.stateNode=s,s._reactInternals=e,hf(e,r,t,n),e=mf(null,e,r,!0,i,n)):(e.tag=0,De&&i&&Cp(e),Vt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Iu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=MA(r),t=Nn(r,t),s){case 0:e=pf(null,e,r,t,n);break e;case 1:e=ev(null,e,r,t,n);break e;case 11:e=Xy(null,e,r,t,n);break e;case 14:e=Zy(null,e,r,Nn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),pf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),ev(t,e,r,s,n);case 3:e:{if(nE(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,bx(t,e),Xu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=co(Error(B(423)),e),e=tv(t,e,r,n,s);break e}else if(r!==s){s=co(Error(B(424)),e),e=tv(t,e,r,n,s);break e}else for(tn=as(e.stateNode.containerInfo.firstChild),rn=e,De=!0,Cn=null,n=Ax(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),r===s){e=Cr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return Rx(e),t===null&&uf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,rf(r,s)?o=null:i!==null&&rf(r,i)&&(e.flags|=32),tE(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&uf(e),null;case 13:return rE(t,e,n);case 4:return Vp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=lo(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),Xy(t,e,r,s,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Re(Yu,r._currentValue),r._currentValue=o,i!==null)if(Vn(i.value,o)){if(i.children===s.children&&!Gt.current){e=Cr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xr(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),cf(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Vt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Zi(e,n),s=vn(s),r=r(s),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,s=Nn(r,e.pendingProps),s=Nn(r.type,s),Zy(t,e,r,s,n);case 15:return Zx(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Nn(r,s),Iu(t,e),e.tag=1,Kt(r)?(t=!0,Gu(e)):t=!1,Zi(e,n),Yx(e,r,s),hf(e,r,s,n),mf(null,e,r,!0,t,n);case 19:return sE(t,e,n);case 22:return eE(t,e,n)}throw Error(B(156,e.tag))};function wE(t,e){return Gw(t,e)}function LA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,e,n,r){return new LA(t,e,n,r)}function Jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MA(t){if(typeof t=="function")return Jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gp)return 11;if(t===yp)return 14}return 2}function ds(t,e){var n=t.alternate;return n===null?(n=gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Au(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vi:return Qs(n.children,s,i,e);case mp:o=8,s|=8;break;case Oh:return t=gn(12,n,e,s|2),t.elementType=Oh,t.lanes=i,t;case Vh:return t=gn(13,n,e,s),t.elementType=Vh,t.lanes=i,t;case Lh:return t=gn(19,n,e,s),t.elementType=Lh,t.lanes=i,t;case Rw:return zc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cw:o=10;break e;case bw:o=9;break e;case gp:o=11;break e;case yp:o=14;break e;case Hr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=gn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Qs(t,e,n,r){return t=gn(7,t,r,e),t.lanes=n,t}function zc(t,e,n,r){return t=gn(22,t,r,e),t.elementType=Rw,t.lanes=n,t.stateNode={isHidden:!1},t}function ch(t,e,n){return t=gn(6,t,null,e),t.lanes=n,t}function dh(t,e,n){return e=gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wd(0),this.expirationTimes=Wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Xp(t,e,n,r,s,i,o,l,u){return t=new UA(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=gn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(i),t}function FA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xE(t){if(!t)return vs;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Kt(n))return xx(t,n,e)}return e}function EE(t,e,n,r,s,i,o,l,u){return t=Xp(n,r,!0,t,s,i,o,l,u),t.context=xE(null),n=t.current,r=Lt(),s=cs(n),i=xr(r,s),i.callback=e??null,ls(n,i,s),t.current.lanes=s,rl(t,s,r),Qt(t,r),t}function qc(t,e,n,r){var s=e.current,i=Lt(),o=cs(s);return n=xE(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ls(s,e,o),t!==null&&(kn(t,s,o,i),xu(t,s,o)),o}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zp(t,e){dv(t,e),(t=t.alternate)&&dv(t,e)}function $A(){return null}var TE=typeof reportError=="function"?reportError:function(t){console.error(t)};function em(t){this._internalRoot=t}Wc.prototype.render=em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));qc(t,e,null,null)};Wc.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){qc(null,t,null,null)}),e[Nr]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ex();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&nx(t)}};function tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hv(){}function BA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=oc(o);i.call(d)}}var o=EE(e,r,t,0,null,!1,!1,"",hv);return t._reactRootContainer=o,t[Nr]=o.current,ka(t.nodeType===8?t.parentNode:t),ei(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=oc(u);l.call(d)}}var u=Xp(t,0,!1,null,null,!1,!1,"",hv);return t._reactRootContainer=u,t[Nr]=u.current,ka(t.nodeType===8?t.parentNode:t),ei(function(){qc(e,u,n,r)}),u}function Gc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=oc(o);l.call(u)}}qc(e,o,t,s)}else o=BA(n,e,t,s,r);return oc(o)}Xw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(wp(e,n|1),Qt(e,Ye()),!(we&6)&&(ho=Ye()+500,As()))}break;case 13:ei(function(){var r=Ar(t,1);if(r!==null){var s=Lt();kn(r,t,1,s)}}),Zp(t,1)}};xp=function(t){if(t.tag===13){var e=Ar(t,134217728);if(e!==null){var n=Lt();kn(e,t,134217728,n)}Zp(t,134217728)}};Zw=function(t){if(t.tag===13){var e=cs(t),n=Ar(t,e);if(n!==null){var r=Lt();kn(n,t,e,r)}Zp(t,e)}};ex=function(){return Se};tx=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Gh=function(t,e,n){switch(e){case"input":if(Fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Lc(r);if(!s)throw Error(B(90));kw(r),Fh(r,s)}}}break;case"textarea":Dw(t,n);break;case"select":e=n.value,e!=null&&Qi(t,!!n.multiple,e,!1)}};$w=Kp;Bw=ei;var zA={usingClientEntryPoint:!1,Events:[il,Fi,Lc,Uw,Fw,Kp]},Xo={findFiberByHostInstance:$s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qA={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ww(t),t===null?null:t.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||$A,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{jc=lu.inject(qA),Kn=lu}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zA;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(e))throw Error(B(200));return FA(t,e,null,n)};un.createRoot=function(t,e){if(!tm(t))throw Error(B(299));var n=!1,r="",s=TE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Xp(t,1,!1,null,null,n,!1,r,s),t[Nr]=e.current,ka(t.nodeType===8?t.parentNode:t),new em(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Ww(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return ei(t)};un.hydrate=function(t,e,n){if(!Hc(e))throw Error(B(200));return Gc(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!tm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=TE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=EE(e,null,t,1,n??null,s,!1,i,o),t[Nr]=e.current,ka(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Wc(e)};un.render=function(t,e,n){if(!Hc(e))throw Error(B(200));return Gc(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(B(40));return t._reactRootContainer?(ei(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1};un.unstable_batchedUpdates=Kp;un.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Gc(t,e,n,!1,r)};un.version="18.3.1-next-f1338f8080-20240426";function IE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IE)}catch(t){console.error(t)}}IE(),Iw.exports=un;var WA=Iw.exports,fv=WA;jh.createRoot=fv.createRoot,jh.hydrateRoot=fv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$a.apply(this,arguments)}var ns;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ns||(ns={}));const pv="popstate";function HA(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:l}=r.location;return Af("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ac(s)}return KA(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function SE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GA(){return Math.random().toString(36).substr(2,8)}function mv(t,e){return{usr:t.state,key:t.key,idx:e}}function Af(t,e,n,r){return n===void 0&&(n=null),$a({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?So(e):e,{state:n,key:e&&e.key||r||GA()})}function ac(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function So(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KA(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=ns.Pop,u=null,d=h();d==null&&(d=0,o.replaceState($a({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function p(){l=ns.Pop;let C=h(),x=C==null?null:C-d;d=C,u&&u({action:l,location:N.location,delta:x})}function m(C,x){l=ns.Push;let w=Af(N.location,C,x);d=h()+1;let E=mv(w,d),k=N.createHref(w);try{o.pushState(E,"",k)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;s.location.assign(k)}i&&u&&u({action:l,location:N.location,delta:1})}function y(C,x){l=ns.Replace;let w=Af(N.location,C,x);d=h();let E=mv(w,d),k=N.createHref(w);o.replaceState(E,"",k),i&&u&&u({action:l,location:N.location,delta:0})}function T(C){let x=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof C=="string"?C:ac(C);return w=w.replace(/ $/,"%20"),Be(x,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,x)}let N={get action(){return l},get location(){return t(s,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(pv,p),u=C,()=>{s.removeEventListener(pv,p),u=null}},createHref(C){return e(s,C)},createURL:T,encodeLocation(C){let x=T(C);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:y,go(C){return o.go(C)}};return N}var gv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gv||(gv={}));function QA(t,e,n){return n===void 0&&(n="/"),YA(t,e,n)}function YA(t,e,n,r){let s=typeof e=="string"?So(e):e,i=fo(s.pathname||"/",n);if(i==null)return null;let o=NE(t);JA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=l1(i);l=o1(o[u],d)}return l}function NE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=hs([r,u.relativePath]),h=n.concat(u);i.children&&i.children.length>0&&(Be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),NE(i.children,e,h,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:s1(d,i.index),routesMeta:h})};return t.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let u of AE(i.path))s(i,o,u)}),e}function AE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=AE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function JA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:i1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XA=/^:[\w-]+$/,ZA=3,e1=2,t1=1,n1=10,r1=-2,yv=t=>t==="*";function s1(t,e){let n=t.split("/"),r=n.length;return n.some(yv)&&(r+=r1),e&&(r+=e1),n.filter(s=>!yv(s)).reduce((s,i)=>s+(XA.test(i)?ZA:i===""?t1:n1),r)}function i1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function o1(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",p=Cf({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h),m=u.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:hs([i,p.pathname]),pathnameBase:h1(hs([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=hs([i,p.pathnameBase]))}return o}function Cf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=a1(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,h,p)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let N=l[p]||"";o=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const T=l[p];return y&&!T?d[m]=void 0:d[m]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function a1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),SE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function l1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return SE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function fo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function u1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?So(t):t;return{pathname:n?n.startsWith("/")?n:c1(n,e):e,search:f1(r),hash:p1(s)}}function c1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function hh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function d1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nm(t,e){let n=d1(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rm(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=So(t):(s=$a({},t),Be(!s.pathname||!s.pathname.includes("?"),hh("?","pathname","search",s)),Be(!s.pathname||!s.pathname.includes("#"),hh("#","pathname","hash",s)),Be(!s.search||!s.search.includes("#"),hh("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;s.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=u1(s,l),d=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const hs=t=>t.join("/").replace(/\/\/+/g,"/"),h1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),f1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,p1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function m1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const CE=["post","put","patch","delete"];new Set(CE);const g1=["get",...CE];new Set(g1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}const Kc=R.createContext(null),bE=R.createContext(null),Or=R.createContext(null),Qc=R.createContext(null),Vr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),RE=R.createContext(null);function y1(t,e){let{relative:n}=e===void 0?{}:e;No()||Be(!1);let{basename:r,navigator:s}=R.useContext(Or),{hash:i,pathname:o,search:l}=Yc(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:hs([r,o])),s.createHref({pathname:u,search:l,hash:i})}function No(){return R.useContext(Qc)!=null}function En(){return No()||Be(!1),R.useContext(Qc).location}function PE(t){R.useContext(Or).static||R.useLayoutEffect(t)}function Lr(){let{isDataRoute:t}=R.useContext(Vr);return t?R1():v1()}function v1(){No()||Be(!1);let t=R.useContext(Kc),{basename:e,future:n,navigator:r}=R.useContext(Or),{matches:s}=R.useContext(Vr),{pathname:i}=En(),o=JSON.stringify(nm(s,n.v7_relativeSplatPath)),l=R.useRef(!1);return PE(()=>{l.current=!0}),R.useCallback(function(d,h){if(h===void 0&&(h={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=rm(d,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:hs([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,i,t])}function di(){let{matches:t}=R.useContext(Vr),e=t[t.length-1];return e?e.params:{}}function Yc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(Or),{matches:s}=R.useContext(Vr),{pathname:i}=En(),o=JSON.stringify(nm(s,r.v7_relativeSplatPath));return R.useMemo(()=>rm(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function _1(t,e){return w1(t,e)}function w1(t,e,n,r){No()||Be(!1);let{navigator:s}=R.useContext(Or),{matches:i}=R.useContext(Vr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=En(),h;if(e){var p;let C=typeof e=="string"?So(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||Be(!1),h=C}else h=d;let m=h.pathname||"/",y=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let T=QA(t,{pathname:y}),N=S1(T&&T.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:hs([u,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:hs([u,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return e&&N?R.createElement(Qc.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ns.Pop}},N):N}function x1(){let t=b1(),e=m1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:s},n):null,null)}const E1=R.createElement(x1,null);class T1 extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(Vr.Provider,{value:this.props.routeContext},R.createElement(RE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I1(t){let{routeContext:e,match:n,children:r}=t,s=R.useContext(Kc);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Vr.Provider,{value:e},r)}function S1(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(s=n)==null?void 0:s.errors;if(l!=null){let h=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||Be(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=h),p.route.id){let{loaderData:m,errors:y}=n,T=p.route.loader&&m[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||T){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let y,T=!1,N=null,C=null;n&&(y=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||E1,u&&(d<0&&m===0?(P1("route-fallback"),T=!0,C=null):d===m&&(T=!0,C=p.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,m+1)),w=()=>{let E;return y?E=N:T?E=C:p.route.Component?E=R.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=h,R.createElement(I1,{match:p,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?R.createElement(T1,{location:n.location,revalidation:n.revalidation,component:N,error:y,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):w()},null)}var kE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(kE||{}),jE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(jE||{});function N1(t){let e=R.useContext(Kc);return e||Be(!1),e}function A1(t){let e=R.useContext(bE);return e||Be(!1),e}function C1(t){let e=R.useContext(Vr);return e||Be(!1),e}function DE(t){let e=C1(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function b1(){var t;let e=R.useContext(RE),n=A1(),r=DE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function R1(){let{router:t}=N1(kE.UseNavigateStable),e=DE(jE.UseNavigateStable),n=R.useRef(!1);return PE(()=>{n.current=!0}),R.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ba({fromRouteId:e},i)))},[t,e])}const vv={};function P1(t,e,n){vv[t]||(vv[t]=!0)}function k1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Yn(t){let{to:e,replace:n,state:r,relative:s}=t;No()||Be(!1);let{future:i,static:o}=R.useContext(Or),{matches:l}=R.useContext(Vr),{pathname:u}=En(),d=Lr(),h=rm(e,nm(l,i.v7_relativeSplatPath),u,s==="path"),p=JSON.stringify(h);return R.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:s}),[d,p,s,n,r]),null}function Ee(t){Be(!1)}function j1(t){let{basename:e="/",children:n=null,location:r,navigationType:s=ns.Pop,navigator:i,static:o=!1,future:l}=t;No()&&Be(!1);let u=e.replace(/^\/*/,"/"),d=R.useMemo(()=>({basename:u,navigator:i,static:o,future:Ba({v7_relativeSplatPath:!1},l)}),[u,l,i,o]);typeof r=="string"&&(r=So(r));let{pathname:h="/",search:p="",hash:m="",state:y=null,key:T="default"}=r,N=R.useMemo(()=>{let C=fo(h,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:y,key:T},navigationType:s}},[u,h,p,m,y,T,s]);return N==null?null:R.createElement(Or.Provider,{value:d},R.createElement(Qc.Provider,{children:n,value:N}))}function D1(t){let{children:e,location:n}=t;return _1(bf(e),n)}new Promise(()=>{});function bf(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,s)=>{if(!R.isValidElement(r))return;let i=[...e,s];if(r.type===R.Fragment){n.push.apply(n,bf(r.props.children,i));return}r.type!==Ee&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bf(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lc(){return lc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lc.apply(this,arguments)}function OE(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function O1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function V1(t,e){return t.button===0&&(!e||e==="_self")&&!O1(t)}function Rf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function L1(t,e){let n=Rf(t);return e&&e.forEach((r,s)=>{n.has(s)||e.getAll(s).forEach(i=>{n.append(s,i)})}),n}const M1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],U1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],F1="6";try{window.__reactRouterVersion=F1}catch{}const $1=R.createContext({isTransitioning:!1}),B1="startTransition",_v=DS[B1];function z1(t){let{basename:e,children:n,future:r,window:s}=t,i=R.useRef();i.current==null&&(i.current=HA({window:s,v5Compat:!0}));let o=i.current,[l,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},h=R.useCallback(p=>{d&&_v?_v(()=>u(p)):u(p)},[u,d]);return R.useLayoutEffect(()=>o.listen(h),[o,h]),R.useEffect(()=>k1(r),[r]),R.createElement(j1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=R.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:u,to:d,preventScrollReset:h,viewTransition:p}=e,m=OE(e,M1),{basename:y}=R.useContext(Or),T,N=!1;if(typeof d=="string"&&W1.test(d)&&(T=d,q1))try{let E=new URL(window.location.href),k=d.startsWith("//")?new URL(E.protocol+d):new URL(d),O=fo(k.pathname,y);k.origin===E.origin&&O!=null?d=O+k.search+k.hash:N=!0}catch{}let C=y1(d,{relative:s}),x=G1(d,{replace:o,state:l,target:u,preventScrollReset:h,relative:s,viewTransition:p});function w(E){r&&r(E),E.defaultPrevented||x(E)}return R.createElement("a",lc({},m,{href:T||C,onClick:N||i?r:w,ref:n,target:u}))}),uu=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:d,children:h}=e,p=OE(e,U1),m=Yc(u,{relative:p.relative}),y=En(),T=R.useContext(bE),{navigator:N,basename:C}=R.useContext(Or),x=T!=null&&Q1(m)&&d===!0,w=N.encodeLocation?N.encodeLocation(m).pathname:m.pathname,E=y.pathname,k=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(E=E.toLowerCase(),k=k?k.toLowerCase():null,w=w.toLowerCase()),k&&C&&(k=fo(k,C)||k);const O=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let M=E===w||!o&&E.startsWith(w)&&E.charAt(O)==="/",S=k!=null&&(k===w||!o&&k.startsWith(w)&&k.charAt(w.length)==="/"),v={isActive:M,isPending:S,isTransitioning:x},I=M?r:void 0,A;typeof i=="function"?A=i(v):A=[i,M?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(v):l;return R.createElement(fe,lc({},p,{"aria-current":I,className:A,ref:n,style:P,to:u,viewTransition:d}),typeof h=="function"?h(v):h)});var Pf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pf||(Pf={}));var wv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wv||(wv={}));function H1(t){let e=R.useContext(Kc);return e||Be(!1),e}function G1(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=e===void 0?{}:e,u=Lr(),d=En(),h=Yc(t,{relative:o});return R.useCallback(p=>{if(V1(p,n)){p.preventDefault();let m=r!==void 0?r:ac(d)===ac(h);u(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[d,u,h,r,s,n,t,i,o,l])}function K1(t){let e=R.useRef(Rf(t)),n=R.useRef(!1),r=En(),s=R.useMemo(()=>L1(r.search,n.current?null:e.current),[r.search]),i=Lr(),o=R.useCallback((l,u)=>{const d=Rf(typeof l=="function"?l(s):l);n.current=!0,i("?"+d,u)},[i,s]);return[s,o]}function Q1(t,e){e===void 0&&(e={});let n=R.useContext($1);n==null&&Be(!1);let{basename:r}=H1(Pf.useViewTransitionState),s=Yc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=fo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=fo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cf(s.pathname,o)!=null||Cf(s.pathname,i)!=null}const Y1=()=>{};var xv={};/**
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
 */const VE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},J1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},LE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,h=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|d>>6,y=d&63;u||(y=64,o||(m=64)),r.push(n[h],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(VE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||p==null)throw new X1;const m=i<<2|l>>4;if(r.push(m),d!==64){const y=l<<4&240|d>>2;if(r.push(y),p!==64){const T=d<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z1=function(t){const e=VE(t);return LE.encodeByteArray(e,!0)},uc=function(t){return Z1(t).replace(/\./g,"")},ME=function(t){try{return LE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tC=()=>eC().__FIREBASE_DEFAULTS__,nC=()=>{if(typeof process>"u"||typeof xv>"u")return;const t=xv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ME(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return Y1()||tC()||nC()||rC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},UE=t=>{var e,n;return(n=(e=Jc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},FE=t=>{const e=UE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$E=()=>{var t;return(t=Jc())==null?void 0:t.config},BE=t=>{var e;return(e=Jc())==null?void 0:e[`_${t}`]};/**
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
 */class sC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sm(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function iC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),""].join(".")}const ya={};function oC(){const t={prod:[],emulator:[]};for(const e of Object.keys(ya))ya[e]?t.emulator.push(e):t.prod.push(e);return t}function aC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ev=!1;function im(t,e){if(typeof window>"u"||typeof document>"u"||!hi(window.location.host)||ya[t]===e||ya[t]||Ev)return;ya[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=oC().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Ev=!0,o()},m}function h(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=aC(r),y=n("text"),T=document.getElementById(y)||document.createElement("span"),N=n("learnmore"),C=document.getElementById(N)||document.createElement("a"),x=n("preprendIcon"),w=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const E=m.element;l(E),h(C,N);const k=d();u(w,x),E.append(w,T,C,k),document.body.appendChild(E)}i?(T.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function uC(){var e;const t=(e=Jc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pC(){return!uC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zE(){try{return typeof indexedDB=="object"}catch{return!1}}function qE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function mC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gC="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yC(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Un(s,l,r)}}function yC(t,e){return t.replace(vC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vC=/\{\$([^}]+)}/g;function _C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tv(i)&&Tv(o)){if(!ti(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tv(t){return t!==null&&typeof t=="object"}/**
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
 */function al(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ra(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wC(t,e){const n=new xC(t,e);return n.subscribe.bind(n)}class xC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=fh),s.error===void 0&&(s.error=fh),s.complete===void 0&&(s.complete=fh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fh(){}/**
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
 */function Ie(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fs="[DEFAULT]";/**
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
 */class TC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SC(e))try{this.getOrInitializeService({instanceIdentifier:Fs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fs){return this.instances.has(e)}getOptions(e=Fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fs){return this.component?this.component.multipleInstances?e:Fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IC(t){return t===Fs?void 0:t}function SC(t){return t.instantiationMode==="EAGER"}/**
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
 */class NC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const AC={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},CC=he.INFO,bC={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},RC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=bC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class om{constructor(e){this.name=e,this._logLevel=CC,this._logHandler=RC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const PC=(t,e)=>e.some(n=>t instanceof n);let Iv,Sv;function kC(){return Iv||(Iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jC(){return Sv||(Sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WE=new WeakMap,kf=new WeakMap,HE=new WeakMap,ph=new WeakMap,am=new WeakMap;function DC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&WE.set(n,t)}).catch(()=>{}),am.set(e,t),e}function OC(t){if(kf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kf.set(t,e)}let jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||HE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VC(t){jf=t(jf)}function LC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mh(this),e,...n);return HE.set(r,e.sort?e.sort():[e]),Er(r)}:jC().includes(t)?function(...e){return t.apply(mh(this),e),Er(WE.get(this))}:function(...e){return Er(t.apply(mh(this),e))}}function MC(t){return typeof t=="function"?LC(t):(t instanceof IDBTransaction&&OC(t),PC(t,kC())?new Proxy(t,jf):t)}function Er(t){if(t instanceof IDBRequest)return DC(t);if(ph.has(t))return ph.get(t);const e=MC(t);return e!==t&&(ph.set(t,e),am.set(e,t)),e}const mh=t=>am.get(t);function Xc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Er(o.result),u.oldVersion,u.newVersion,Er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function gh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Er(n).then(()=>{})}const UC=["get","getKey","getAll","getAllKeys","count"],FC=["put","add","delete","clear"],yh=new Map;function Nv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yh.get(e))return yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=FC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UC.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return yh.set(e,i),i}VC(t=>({...t,get:(e,n,r)=>Nv(e,n)||t.get(e,n,r),has:(e,n)=>!!Nv(e,n)||t.has(e,n)}));/**
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
 */class $C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Df="@firebase/app",Av="0.14.1";/**
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
 */const br=new om("@firebase/app"),zC="@firebase/app-compat",qC="@firebase/analytics-compat",WC="@firebase/analytics",HC="@firebase/app-check-compat",GC="@firebase/app-check",KC="@firebase/auth",QC="@firebase/auth-compat",YC="@firebase/database",JC="@firebase/data-connect",XC="@firebase/database-compat",ZC="@firebase/functions",eb="@firebase/functions-compat",tb="@firebase/installations",nb="@firebase/installations-compat",rb="@firebase/messaging",sb="@firebase/messaging-compat",ib="@firebase/performance",ob="@firebase/performance-compat",ab="@firebase/remote-config",lb="@firebase/remote-config-compat",ub="@firebase/storage",cb="@firebase/storage-compat",db="@firebase/firestore",hb="@firebase/ai",fb="@firebase/firestore-compat",pb="firebase",mb="12.1.0";/**
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
 */const Of="[DEFAULT]",gb={[Df]:"fire-core",[zC]:"fire-core-compat",[WC]:"fire-analytics",[qC]:"fire-analytics-compat",[GC]:"fire-app-check",[HC]:"fire-app-check-compat",[KC]:"fire-auth",[QC]:"fire-auth-compat",[YC]:"fire-rtdb",[JC]:"fire-data-connect",[XC]:"fire-rtdb-compat",[ZC]:"fire-fn",[eb]:"fire-fn-compat",[tb]:"fire-iid",[nb]:"fire-iid-compat",[rb]:"fire-fcm",[sb]:"fire-fcm-compat",[ib]:"fire-perf",[ob]:"fire-perf-compat",[ab]:"fire-rc",[lb]:"fire-rc-compat",[ub]:"fire-gcs",[cb]:"fire-gcs-compat",[db]:"fire-fst",[fb]:"fire-fst-compat",[hb]:"fire-vertex","fire-js":"fire-js",[pb]:"fire-js-all"};/**
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
 */const za=new Map,yb=new Map,Vf=new Map;function Cv(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Vf.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of za.values())Cv(n,t);for(const n of yb.values())Cv(n,t);return!0}function pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const vb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fs=new fi("app","Firebase",vb);/**
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
 */class _b{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ao=mb;function GE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Of,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw fs.create("bad-app-name",{appName:String(s)});if(n||(n=$E()),!n)throw fs.create("no-options");const i=za.get(s);if(i){if(ti(n,i.options)&&ti(r,i.config))return i;throw fs.create("duplicate-app",{appName:s})}const o=new NC(s);for(const u of Vf.values())o.addComponent(u);const l=new _b(n,r,o);return za.set(s,l),l}function ll(t=Of){const e=za.get(t);if(!e&&t===Of&&$E())return GE();if(!e)throw fs.create("no-app",{appName:t});return e}function wb(){return Array.from(za.values())}function Yt(t,e,n){let r=gb[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(o.join(" "));return}Ln(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xb="firebase-heartbeat-database",Eb=1,qa="firebase-heartbeat-store";let vh=null;function KE(){return vh||(vh=Xc(xb,Eb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qa)}catch(n){console.warn(n)}}}}).catch(t=>{throw fs.create("idb-open",{originalErrorMessage:t.message})})),vh}async function Tb(t){try{const n=(await KE()).transaction(qa),r=await n.objectStore(qa).get(QE(t));return await n.done,r}catch(e){if(e instanceof Un)br.warn(e.message);else{const n=fs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function bv(t,e){try{const r=(await KE()).transaction(qa,"readwrite");await r.objectStore(qa).put(e,QE(t)),await r.done}catch(n){if(n instanceof Un)br.warn(n.message);else{const r=fs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ib=1024,Sb=30;class Nb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Sb){const o=bb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rv(),{heartbeatsToSend:r,unsentEntries:s}=Ab(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return br.warn(n),""}}}function Rv(){return new Date().toISOString().substring(0,10)}function Ab(t,e=Ib){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zE()?qE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return bv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pv(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}function bb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Rb(t){Ln(new wn("platform-logger",e=>new $C(e),"PRIVATE")),Ln(new wn("heartbeat",e=>new Nb(e),"PRIVATE")),Yt(Df,Av,t),Yt(Df,Av,"esm2020"),Yt("fire-js","")}Rb("");function YE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pb=YE,JE=new fi("auth","Firebase",YE());/**
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
 */const cc=new om("@firebase/auth");function kb(t,...e){cc.logLevel<=he.WARN&&cc.warn(`Auth (${Ao}): ${t}`,...e)}function Cu(t,...e){cc.logLevel<=he.ERROR&&cc.error(`Auth (${Ao}): ${t}`,...e)}/**
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
 */function an(t,...e){throw um(t,...e)}function jn(t,...e){return um(t,...e)}function lm(t,e,n){const r={...Pb(),[e]:n};return new fi("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return lm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&an(t,"argument-error"),lm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function um(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JE.create(t,...e)}function Z(t,e,...n){if(!t)throw um(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function Rr(t,e){t||_r(e)}/**
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
 */function Lf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Db(){return kv()==="http:"||kv()==="https:"}function kv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Ob(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Db()||dC()||"connection"in navigator)?navigator.onLine:!0}function Vb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rr(n>e,"Short delay should be less than long delay!"),this.isMobile=lC()||hC()}get(){return Ob()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cm(t,e){Rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class XE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ub=new ul(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fn(t,e,n,r,s={}){return ZE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=al({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...i};return cC()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&hi(t.emulatorConfig.host)&&(d.credentials="include"),XE.fetch()(await e0(t,t.config.apiHost,n,l),d)})}async function ZE(t,e,n){t._canInitEmulator=!1;const r={...Lb,...e};try{const s=new $b(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw lm(t,h,d);an(t,h)}}catch(s){if(s instanceof Un)throw s;an(t,"network-request-failed",{message:String(s)})}}async function cl(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function e0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?cm(t.config,s):`${t.config.apiScheme}://${s}`;return Mb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Fb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $b{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jn(this.auth,"network-request-failed")),Ub.get())})}}function cu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=jn(t,e,r);return s.customData._tokenResponse=n,s}function jv(t){return t!==void 0&&t.enterprise!==void 0}class Bb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zb(t,e){return Fn(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
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
 */async function qb(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function dc(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wb(t,e=!1){const n=Ie(t),r=await n.getIdToken(e),s=dm(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:va(_h(s.auth_time)),issuedAtTime:va(_h(s.iat)),expirationTime:va(_h(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _h(t){return Number(t)*1e3}function dm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const s=ME(n);return s?JSON.parse(s):(Cu("Failed to decode base64 JWT payload"),null)}catch(s){return Cu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dv(t){const e=dm(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&Hb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await po(t,dc(e,{idToken:n}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?t0(s.providerUserInfo):[],o=Qb(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Mf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Kb(t){const e=Ie(t);await hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function t0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Yb(t,e){const n=await ZE(t,{},async()=>{const r=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await e0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&hi(t.emulatorConfig.host)&&(u.credentials="include"),XE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jb(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Dv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Yb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new to;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function qr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Gb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wb(this,e)}reload(){return Kb(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await po(this,qb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:T,stsTokenManager:N}=n;Z(p&&N,e,"internal-error");const C=to.fromJSON(this.name,N);Z(typeof p=="string",e,"internal-error"),qr(r,e.name),qr(s,e.name),Z(typeof m=="boolean",e,"internal-error"),Z(typeof y=="boolean",e,"internal-error"),qr(i,e.name),qr(o,e.name),qr(l,e.name),qr(u,e.name),qr(d,e.name),qr(h,e.name);const x=new Rn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:d,lastLoginAt:h});return T&&Array.isArray(T)&&(x.providerData=T.map(w=>({...w}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new to;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?t0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new to;l.updateFromIdToken(r);const u=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Ov=new Map;function wr(t){Rr(t instanceof Function,"Expected a class definition");let e=Ov.get(t);return e?(Rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ov.set(t,e),e)}/**
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
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n0.type="NONE";const Vv=n0;/**
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
 */function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bu(this.userKey,s.apiKey,i),this.fullPersistenceKey=bu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dc(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(wr(Vv),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||wr(Vv);const o=bu(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const h=await d._get(o);if(h){let p;if(typeof h=="string"){const m=await dc(e,{idToken:h}).catch(()=>{});if(!m)break;p=await Rn._fromGetAccountInfoResponse(e,m,h)}else p=Rn._fromJSON(e,h);d!==i&&(l=p),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new no(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new no(i,e,r))}}/**
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
 */function Lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l0(e))return"Blackberry";if(u0(e))return"Webos";if(s0(e))return"Safari";if((e.includes("chrome/")||i0(e))&&!e.includes("edge/"))return"Chrome";if(a0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r0(t=jt()){return/firefox\//i.test(t)}function s0(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i0(t=jt()){return/crios\//i.test(t)}function o0(t=jt()){return/iemobile/i.test(t)}function a0(t=jt()){return/android/i.test(t)}function l0(t=jt()){return/blackberry/i.test(t)}function u0(t=jt()){return/webos/i.test(t)}function hm(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xb(t=jt()){var e;return hm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Zb(){return fC()&&document.documentMode===10}function c0(t=jt()){return hm(t)||a0(t)||u0(t)||l0(t)||/windows phone/i.test(t)||o0(t)}/**
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
 */function d0(t,e=[]){let n;switch(t){case"Browser":n=Lv(jt());break;case"Worker":n=`${Lv(jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ao}/${r}`}/**
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
 */class eR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tR(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
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
 */const nR=6;class rR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??nR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class sR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mv(this),this.idTokenSubscription=new Mv(this),this.beforeStateQueue=new eR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dc(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(Tr(this));const n=e?Ie(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tR(this),n=new rR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=d0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&kb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rr(t){return Ie(t)}class Mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=wC(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iR(t){Zc=t}function h0(t){return Zc.loadJS(t)}function oR(){return Zc.recaptchaEnterpriseScript}function aR(){return Zc.gapiScript}function lR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class uR{constructor(){this.enterprise=new cR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dR="recaptcha-enterprise",f0="NO_RECAPTCHA";class hR{constructor(e){this.type=dR,this.auth=rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{zb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Bb(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;jv(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(f0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&jv(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=oR();u.length!==0&&(u+=l),h0(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Uv(t,e,n,r=!1,s=!1){const i=new hR(t);let o;if(s)o=f0;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function fc(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Uv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Uv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function fR(t,e){const n=pi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ti(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function pR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mR(t,e,n){const r=rr(t);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=p0(e),{host:o,port:l}=gR(e),u=l===null?"":`:${l}`,d={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(ti(d,r.config.emulator)&&ti(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,hi(o)?(sm(`${i}//${o}${u}`),im("Auth",!0)):yR()}function p0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gR(t){const e=p0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Fv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Fv(o)}}}function Fv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
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
 */async function m0(t,e){return Fn(t,"POST","/v1/accounts:resetPassword",nr(t,e))}async function vR(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _R(t,e){return cl(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function wR(t,e){return Fn(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function xR(t,e){return wR(t,e)}/**
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
 */async function ER(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function TR(t,e){return cl(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
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
 */class Wa extends fm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,n,"signInWithPassword",_R);case"emailLink":return ER(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,r,"signUpPassword",vR);case"emailLink":return TR(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ro(t,e){return cl(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
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
 */const IR="http://localhost";class ni extends fm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ni(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:IR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=al(n)}return e}}/**
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
 */function SR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NR(t){const e=ra(sa(t)).link,n=e?ra(sa(e)).deep_link_id:null,r=ra(sa(t)).deep_link_id;return(r?ra(sa(r)).link:null)||r||n||e||t}class pm{constructor(e){const n=ra(sa(e)),r=n.apiKey??null,s=n.oobCode??null,i=SR(n.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=NR(e);try{return new pm(n)}catch{return null}}}/**
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
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,n){return Wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pm.parseLink(n);return Z(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dl extends mm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yr extends dl{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
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
 */class mn extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class Jr extends dl{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
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
 */class Xr extends dl{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
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
 */async function AR(t,e){return cl(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=$v(r);return new ri({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$v(r);return new ri({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $v(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pc extends Un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pc(e,n,r,s)}}function g0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,i,e,r):i})}async function CR(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
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
 */async function bR(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await po(t,g0(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=dm(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),ri._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
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
 */async function y0(t,e,n=!1){if(zt(t.app))return Promise.reject(Tr(t));const r="signIn",s=await g0(t,r,e),i=await ri._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function RR(t,e){return y0(rr(t),e)}/**
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
 */class gm{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ym._fromServerResponse(e,n):"totpInfo"in n?vm._fromServerResponse(e,n):an(e,"internal-error")}}class ym extends gm{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ym(n)}}class vm extends gm{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new vm(n)}}/**
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
 */async function _m(t){const e=rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PR(t,e,n){const r=rr(t);await fc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",xR)}async function kR(t,e,n){await m0(Ie(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_m(t),r})}async function jR(t,e){const n=Ie(t),r=await m0(n,{oobCode:e}),s=r.requestType;switch(Z(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Z(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Z(r.mfaInfo,n,"internal-error");default:Z(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=gm._fromServerResponse(rr(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function DR(t,e){const{data:n}=await jR(Ie(t),e);return n.email}async function OR(t,e,n){if(zt(t.app))return Promise.reject(Tr(t));const r=rr(t),o=await fc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&_m(t),u}),l=await ri._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function v0(t,e,n){return zt(t.app)?Promise.reject(Tr(t)):RR(Ie(t),Co.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_m(t),r})}/**
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
 */async function VR(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ie(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await po(r,VR(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LR(t,e,n,r){return Ie(t).onIdTokenChanged(e,n,r)}function MR(t,e,n){return Ie(t).beforeAuthStateChanged(e,n)}function sr(t,e,n,r){return Ie(t).onAuthStateChanged(e,n,r)}function Uf(t){return Ie(t).signOut()}const mc="__sak";/**
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
 */class w0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UR=1e3,FR=10;class x0 extends w0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Zb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,FR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const $R=x0;/**
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
 */class E0 extends w0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E0.type="SESSION";const T0=E0;/**
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
 */function BR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ed(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await BR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
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
 */function wm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=wm("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jn(){return window}function qR(t){Jn().location.href=t}/**
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
 */function I0(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function WR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function GR(){return I0()?self:null}/**
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
 */const S0="firebaseLocalStorageDb",KR=1,gc="firebaseLocalStorage",N0="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function td(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function QR(){const t=indexedDB.deleteDatabase(S0);return new hl(t).toPromise()}function Ff(){const t=indexedDB.open(S0,KR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:N0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await QR(),e(await Ff()))})})}async function Bv(t,e,n){const r=td(t,!0).put({[N0]:e,value:n});return new hl(r).toPromise()}async function YR(t,e){const n=td(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function zv(t,e){const n=td(t,!0).delete(e);return new hl(n).toPromise()}const JR=800,XR=3;class A0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ff(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(GR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await WR(),!this.activeServiceWorker)return;this.sender=new zR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ff();return await Bv(e,mc,"1"),await zv(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=td(s,!1).getAll();return new hl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A0.type="LOCAL";const ZR=A0;new ul(3e4,6e4);/**
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
 */function C0(t,e){return e?wr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xm extends fm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eP(t){return y0(t.auth,new xm(t),t.bypassAuthState)}function tP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),bR(n,new xm(t),t.bypassAuthState)}async function nP(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),CR(n,new xm(t),t.bypassAuthState)}/**
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
 */class b0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eP;case"linkViaPopup":case"linkViaRedirect":return nP;case"reauthViaPopup":case"reauthViaRedirect":return tP;default:an(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rP=new ul(2e3,1e4);async function Em(t,e,n){if(zt(t.app))return Promise.reject(jn(t,"operation-not-supported-in-this-environment"));const r=rr(t);jb(t,e,mm);const s=C0(r,n);return new qs(r,"signInViaPopup",e,s).executeNotNull()}class qs extends b0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=wm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rP.get())};e()}}qs.currentPopupAction=null;/**
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
 */const sP="pendingRedirect",Ru=new Map;class iP extends b0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const r=await oP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oP(t,e){const n=uP(e),r=lP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aP(t,e){Ru.set(t._key(),e)}function lP(t){return wr(t._redirectPersistence)}function uP(t){return bu(sP,t.config.apiKey,t.name)}async function cP(t,e,n=!1){if(zt(t.app))return Promise.reject(Tr(t));const r=rr(t),s=C0(r,e),o=await new iP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dP=10*60*1e3;class hP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!R0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dP&&this.cachedEventUids.clear(),this.cachedEventUids.has(qv(e))}saveEventToCache(e){this.cachedEventUids.add(qv(e)),this.lastProcessedEventTime=Date.now()}}function qv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function R0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return R0(t);default:return!1}}/**
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
 */async function pP(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const mP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gP=/^https?/;async function yP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pP(t);for(const n of e)try{if(vP(n))return}catch{}an(t,"unauthorized-domain")}function vP(t){const e=Lf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gP.test(n))return!1;if(mP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _P=new ul(3e4,6e4);function Wv(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wP(t){return new Promise((e,n)=>{var s,i,o;function r(){Wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wv(),n(jn(t,"network-request-failed"))},timeout:_P.get()})}if((i=(s=Jn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Jn().gapi)!=null&&o.load)r();else{const l=lR("iframefcb");return Jn()[l]=()=>{gapi.load?r():n(jn(t,"network-request-failed"))},h0(`${aR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function xP(t){return Pu=Pu||wP(t),Pu}/**
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
 */const EP=new ul(5e3,15e3),TP="__/auth/iframe",IP="emulator/auth/iframe",SP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AP(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cm(e,IP):`https://${t.config.authDomain}/${TP}`,r={apiKey:e.apiKey,appName:t.name,v:Ao},s=NP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${al(r).slice(1)}`}async function CP(t){const e=await xP(t),n=Jn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:AP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=jn(t,"network-request-failed"),l=Jn().setTimeout(()=>{i(o)},EP.get());function u(){Jn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RP=500,PP=600,kP="_blank",jP="http://localhost";class Hv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DP(t,e,n,r=RP,s=PP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...bP,width:r.toString(),height:s.toString(),top:i,left:o},d=jt().toLowerCase();n&&(l=i0(d)?kP:n),r0(d)&&(e=e||jP,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[y,T])=>`${m}${y}=${T},`,"");if(Xb(d)&&l!=="_self")return OP(e||"",l),new Hv(null);const p=window.open(e||"",l,h);Z(p,t,"popup-blocked");try{p.focus()}catch{}return new Hv(p)}function OP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VP="__/auth/handler",LP="emulator/auth/handler",MP=encodeURIComponent("fac");async function Gv(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ao,eventId:s};if(e instanceof mm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_C(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof dl){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const u=await t._getAppCheckToken(),d=u?`#${MP}=${encodeURIComponent(u)}`:"";return`${UP(t)}?${al(l).slice(1)}${d}`}function UP({config:t}){return t.emulator?cm(t,LP):`https://${t.authDomain}/${VP}`}/**
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
 */const wh="webStorageSupport";class FP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T0,this._completeRedirectFn=cP,this._overrideRedirectResult=aP}async _openPopup(e,n,r,s){var o;Rr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Gv(e,n,r,Lf(),s);return DP(e,i,wm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gv(e,n,r,Lf(),s);return qR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CP(e),r=new hP(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wh,{type:wh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[wh];i!==void 0&&n(!!i),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return c0()||s0()||hm()}}const $P=FP;var Kv="@firebase/auth",Qv="1.11.0";/**
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
 */class BP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qP(t){Ln(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:d0(t)},d=new sR(r,s,i,u);return pR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new wn("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(r=>new BP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Kv,Qv,zP(t)),Yt(Kv,Qv,"esm2020")}/**
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
 */const WP=5*60,HP=BE("authIdTokenMaxAge")||WP;let Yv=null;const GP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HP)return;const s=n==null?void 0:n.token;Yv!==s&&(Yv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ke(t=ll()){const e=pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fR(t,{popupRedirectResolver:$P,persistence:[ZR,$R,T0]}),r=BE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=GP(i.toString());MR(n,o,()=>o(n.currentUser)),LR(n,l=>o(l))}}const s=UE("auth");return s&&mR(n,`http://${s}`),n}function KP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}iR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=jn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qP("Browser");var Jv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,P0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function I(){}I.prototype=v.prototype,S.D=v.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(A,P,j){for(var b=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)b[pt-2]=arguments[pt];return v.prototype[P].apply(A,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)A[P]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(P=0;16>P;++P)A[P]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=S.g[0],I=S.g[1],P=S.g[2];var j=S.g[3],b=v+(j^I&(P^j))+A[0]+3614090360&4294967295;v=I+(b<<7&4294967295|b>>>25),b=j+(P^v&(I^P))+A[1]+3905402710&4294967295,j=v+(b<<12&4294967295|b>>>20),b=P+(I^j&(v^I))+A[2]+606105819&4294967295,P=j+(b<<17&4294967295|b>>>15),b=I+(v^P&(j^v))+A[3]+3250441966&4294967295,I=P+(b<<22&4294967295|b>>>10),b=v+(j^I&(P^j))+A[4]+4118548399&4294967295,v=I+(b<<7&4294967295|b>>>25),b=j+(P^v&(I^P))+A[5]+1200080426&4294967295,j=v+(b<<12&4294967295|b>>>20),b=P+(I^j&(v^I))+A[6]+2821735955&4294967295,P=j+(b<<17&4294967295|b>>>15),b=I+(v^P&(j^v))+A[7]+4249261313&4294967295,I=P+(b<<22&4294967295|b>>>10),b=v+(j^I&(P^j))+A[8]+1770035416&4294967295,v=I+(b<<7&4294967295|b>>>25),b=j+(P^v&(I^P))+A[9]+2336552879&4294967295,j=v+(b<<12&4294967295|b>>>20),b=P+(I^j&(v^I))+A[10]+4294925233&4294967295,P=j+(b<<17&4294967295|b>>>15),b=I+(v^P&(j^v))+A[11]+2304563134&4294967295,I=P+(b<<22&4294967295|b>>>10),b=v+(j^I&(P^j))+A[12]+1804603682&4294967295,v=I+(b<<7&4294967295|b>>>25),b=j+(P^v&(I^P))+A[13]+4254626195&4294967295,j=v+(b<<12&4294967295|b>>>20),b=P+(I^j&(v^I))+A[14]+2792965006&4294967295,P=j+(b<<17&4294967295|b>>>15),b=I+(v^P&(j^v))+A[15]+1236535329&4294967295,I=P+(b<<22&4294967295|b>>>10),b=v+(P^j&(I^P))+A[1]+4129170786&4294967295,v=I+(b<<5&4294967295|b>>>27),b=j+(I^P&(v^I))+A[6]+3225465664&4294967295,j=v+(b<<9&4294967295|b>>>23),b=P+(v^I&(j^v))+A[11]+643717713&4294967295,P=j+(b<<14&4294967295|b>>>18),b=I+(j^v&(P^j))+A[0]+3921069994&4294967295,I=P+(b<<20&4294967295|b>>>12),b=v+(P^j&(I^P))+A[5]+3593408605&4294967295,v=I+(b<<5&4294967295|b>>>27),b=j+(I^P&(v^I))+A[10]+38016083&4294967295,j=v+(b<<9&4294967295|b>>>23),b=P+(v^I&(j^v))+A[15]+3634488961&4294967295,P=j+(b<<14&4294967295|b>>>18),b=I+(j^v&(P^j))+A[4]+3889429448&4294967295,I=P+(b<<20&4294967295|b>>>12),b=v+(P^j&(I^P))+A[9]+568446438&4294967295,v=I+(b<<5&4294967295|b>>>27),b=j+(I^P&(v^I))+A[14]+3275163606&4294967295,j=v+(b<<9&4294967295|b>>>23),b=P+(v^I&(j^v))+A[3]+4107603335&4294967295,P=j+(b<<14&4294967295|b>>>18),b=I+(j^v&(P^j))+A[8]+1163531501&4294967295,I=P+(b<<20&4294967295|b>>>12),b=v+(P^j&(I^P))+A[13]+2850285829&4294967295,v=I+(b<<5&4294967295|b>>>27),b=j+(I^P&(v^I))+A[2]+4243563512&4294967295,j=v+(b<<9&4294967295|b>>>23),b=P+(v^I&(j^v))+A[7]+1735328473&4294967295,P=j+(b<<14&4294967295|b>>>18),b=I+(j^v&(P^j))+A[12]+2368359562&4294967295,I=P+(b<<20&4294967295|b>>>12),b=v+(I^P^j)+A[5]+4294588738&4294967295,v=I+(b<<4&4294967295|b>>>28),b=j+(v^I^P)+A[8]+2272392833&4294967295,j=v+(b<<11&4294967295|b>>>21),b=P+(j^v^I)+A[11]+1839030562&4294967295,P=j+(b<<16&4294967295|b>>>16),b=I+(P^j^v)+A[14]+4259657740&4294967295,I=P+(b<<23&4294967295|b>>>9),b=v+(I^P^j)+A[1]+2763975236&4294967295,v=I+(b<<4&4294967295|b>>>28),b=j+(v^I^P)+A[4]+1272893353&4294967295,j=v+(b<<11&4294967295|b>>>21),b=P+(j^v^I)+A[7]+4139469664&4294967295,P=j+(b<<16&4294967295|b>>>16),b=I+(P^j^v)+A[10]+3200236656&4294967295,I=P+(b<<23&4294967295|b>>>9),b=v+(I^P^j)+A[13]+681279174&4294967295,v=I+(b<<4&4294967295|b>>>28),b=j+(v^I^P)+A[0]+3936430074&4294967295,j=v+(b<<11&4294967295|b>>>21),b=P+(j^v^I)+A[3]+3572445317&4294967295,P=j+(b<<16&4294967295|b>>>16),b=I+(P^j^v)+A[6]+76029189&4294967295,I=P+(b<<23&4294967295|b>>>9),b=v+(I^P^j)+A[9]+3654602809&4294967295,v=I+(b<<4&4294967295|b>>>28),b=j+(v^I^P)+A[12]+3873151461&4294967295,j=v+(b<<11&4294967295|b>>>21),b=P+(j^v^I)+A[15]+530742520&4294967295,P=j+(b<<16&4294967295|b>>>16),b=I+(P^j^v)+A[2]+3299628645&4294967295,I=P+(b<<23&4294967295|b>>>9),b=v+(P^(I|~j))+A[0]+4096336452&4294967295,v=I+(b<<6&4294967295|b>>>26),b=j+(I^(v|~P))+A[7]+1126891415&4294967295,j=v+(b<<10&4294967295|b>>>22),b=P+(v^(j|~I))+A[14]+2878612391&4294967295,P=j+(b<<15&4294967295|b>>>17),b=I+(j^(P|~v))+A[5]+4237533241&4294967295,I=P+(b<<21&4294967295|b>>>11),b=v+(P^(I|~j))+A[12]+1700485571&4294967295,v=I+(b<<6&4294967295|b>>>26),b=j+(I^(v|~P))+A[3]+2399980690&4294967295,j=v+(b<<10&4294967295|b>>>22),b=P+(v^(j|~I))+A[10]+4293915773&4294967295,P=j+(b<<15&4294967295|b>>>17),b=I+(j^(P|~v))+A[1]+2240044497&4294967295,I=P+(b<<21&4294967295|b>>>11),b=v+(P^(I|~j))+A[8]+1873313359&4294967295,v=I+(b<<6&4294967295|b>>>26),b=j+(I^(v|~P))+A[15]+4264355552&4294967295,j=v+(b<<10&4294967295|b>>>22),b=P+(v^(j|~I))+A[6]+2734768916&4294967295,P=j+(b<<15&4294967295|b>>>17),b=I+(j^(P|~v))+A[13]+1309151649&4294967295,I=P+(b<<21&4294967295|b>>>11),b=v+(P^(I|~j))+A[4]+4149444226&4294967295,v=I+(b<<6&4294967295|b>>>26),b=j+(I^(v|~P))+A[11]+3174756917&4294967295,j=v+(b<<10&4294967295|b>>>22),b=P+(v^(j|~I))+A[2]+718787259&4294967295,P=j+(b<<15&4294967295|b>>>17),b=I+(j^(P|~v))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(P+(b<<21&4294967295|b>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+j&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var I=v-this.blockSize,A=this.B,P=this.h,j=0;j<v;){if(P==0)for(;j<=I;)s(this,S,j),j+=this.blockSize;if(typeof S=="string"){for(;j<v;)if(A[P++]=S.charCodeAt(j++),P==this.blockSize){s(this,A),P=0;break}}else for(;j<v;)if(A[P++]=S[j++],P==this.blockSize){s(this,A),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var I=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=I&255,I/=256;for(this.u(S),S=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)S[I++]=this.g[v]>>>A&255;return S};function i(S,v){var I=l;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=v(S)}function o(S,v){this.h=v;for(var I=[],A=!0,P=S.length-1;0<=P;P--){var j=S[P]|0;A&&j==v||(I[P]=j,A=!1)}this.g=I}var l={};function u(S){return-128<=S&&128>S?i(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function d(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return C(d(-S));for(var v=[],I=1,A=0;S>=I;A++)v[A]=S/I|0,I*=4294967296;return new o(v,0)}function h(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return C(h(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(v,8)),A=p,P=0;P<S.length;P+=8){var j=Math.min(8,S.length-P),b=parseInt(S.substring(P,P+j),v);8>j?(j=d(Math.pow(v,j)),A=A.j(j).add(d(b))):(A=A.j(I),A=A.add(d(b)))}return A}var p=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-C(this).m();for(var S=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);S+=(0<=A?A:4294967296+A)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(T(this))return"0";if(N(this))return"-"+C(this).toString(S);for(var v=d(Math.pow(S,6)),I=this,A="";;){var P=k(I,v).g;I=x(I,P.j(v));var j=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=P,T(I))return j+A;for(;6>j.length;)j="0"+j;A=j+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function T(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function N(S){return S.h==-1}t.l=function(S){return S=x(this,S),N(S)?-1:T(S)?0:1};function C(S){for(var v=S.g.length,I=[],A=0;A<v;A++)I[A]=~S.g[A];return new o(I,~S.h).add(m)}t.abs=function(){return N(this)?C(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0,P=0;P<=v;P++){var j=A+(this.i(P)&65535)+(S.i(P)&65535),b=(j>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);A=b>>>16,j&=65535,b&=65535,I[P]=b<<16|j}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(S,v){return S.add(C(v))}t.j=function(S){if(T(this)||T(S))return p;if(N(this))return N(S)?C(this).j(C(S)):C(C(this).j(S));if(N(S))return C(this.j(C(S)));if(0>this.l(y)&&0>S.l(y))return d(this.m()*S.m());for(var v=this.g.length+S.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<S.g.length;P++){var j=this.i(A)>>>16,b=this.i(A)&65535,pt=S.i(P)>>>16,Tn=S.i(P)&65535;I[2*A+2*P]+=b*Tn,w(I,2*A+2*P),I[2*A+2*P+1]+=j*Tn,w(I,2*A+2*P+1),I[2*A+2*P+1]+=b*pt,w(I,2*A+2*P+1),I[2*A+2*P+2]+=j*pt,w(I,2*A+2*P+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function w(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function E(S,v){this.g=S,this.h=v}function k(S,v){if(T(v))throw Error("division by zero");if(T(S))return new E(p,p);if(N(S))return v=k(C(S),v),new E(C(v.g),C(v.h));if(N(v))return v=k(S,C(v)),new E(C(v.g),v.h);if(30<S.g.length){if(N(S)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=v;0>=A.l(S);)I=O(I),A=O(A);var P=M(I,1),j=M(A,1);for(A=M(A,2),I=M(I,2);!T(A);){var b=j.add(A);0>=b.l(S)&&(P=P.add(I),j=b),A=M(A,1),I=M(I,1)}return v=x(S,P.j(v)),new E(P,v)}for(P=p;0<=S.l(v);){for(I=Math.max(1,Math.floor(S.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),j=d(I),b=j.j(v);N(b)||0<b.l(S);)I-=A,j=d(I),b=j.j(v);T(j)&&(j=m),P=P.add(j),S=x(S,b)}return new E(P,S)}t.A=function(S){return k(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&S.i(A);return new o(I,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|S.i(A);return new o(I,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^S.i(A);return new o(I,this.h^S.h)};function O(S){for(var v=S.g.length+1,I=[],A=0;A<v;A++)I[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(I,S.h)}function M(S,v){var I=v>>5;v%=32;for(var A=S.g.length-I,P=[],j=0;j<A;j++)P[j]=0<v?S.i(j+I)>>>v|S.i(j+I+1)<<32-v:S.i(j+I);return new o(P,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,P0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,ps=o}).apply(typeof Jv<"u"?Jv:typeof self<"u"?self:typeof window<"u"?window:{});var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var k0,ia,j0,ku,$f,D0,O0,V0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof du=="object"&&du];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(a,f){if(f)e:{var g=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in g))break e;g=g[D]}a=a[a.length-1],_=g[a],f=f(_),f!=_&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}function i(a,f){a instanceof String&&(a+="");var g=0,_=!1,D={next:function(){if(!_&&g<a.length){var V=g++;return{value:f(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function d(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function h(a,f,g){return a.call.apply(a.bind,arguments)}function p(a,f,g){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(f,D)}}return function(){return a.apply(f,arguments)}}function m(a,f,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function y(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function T(a,f){function g(){}g.prototype=f.prototype,a.aa=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(_,D,V){for(var z=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)z[Ne-2]=arguments[Ne];return f.prototype[D].apply(_,z)}}function N(a){const f=a.length;if(0<f){const g=Array(f);for(let _=0;_<f;_++)g[_]=a[_];return g}return[]}function C(a,f){for(let g=1;g<arguments.length;g++){const _=arguments[g];if(u(_)){const D=a.length||0,V=_.length||0;a.length=D+V;for(let z=0;z<V;z++)a[D+z]=_[z]}else a.push(_)}}class x{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function w(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var O=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,f,g){for(const _ in a)f.call(g,a[_],_,a)}function S(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function v(a){const f={};for(const g in a)f[g]=a[g];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,f){let g,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(g in _)a[g]=_[g];for(let V=0;V<I.length;V++)g=I[V],Object.prototype.hasOwnProperty.call(_,g)&&(a[g]=_[g])}}function P(a){var f=1;a=a.split(":");const g=[];for(;0<f&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function j(a){l.setTimeout(()=>{throw a},0)}function b(){var a=H;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class pt{constructor(){this.h=this.g=null}add(f,g){const _=Tn.get();_.set(f,g),this.h?this.h.next=_:this.g=_,this.h=_}}var Tn=new x(()=>new or,a=>a.reset());class or{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,$=!1,H=new pt,Q=()=>{const a=l.Promise.resolve(void 0);Y=()=>{a.then(ge)}};var ge=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(g){j(g)}var f=Tn;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}$=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var nt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};l.addEventListener("test",g,f),l.removeEventListener("test",g,f)}catch{}return a}();function wt(a,f){if(ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(O){e:{try{k(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:We[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&wt.aa.h.call(this)}}T(wt,ee);var We={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Dt=0;function ar(a,f,g,_,D){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!_,this.ha=D,this.key=++Dt,this.da=this.fa=!1}function lr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ur(a){this.src=a,this.g={},this.h=0}ur.prototype.add=function(a,f,g,_,D){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=Ur(a,f,_,D);return-1<z?(f=a[z],g||(f.fa=!1)):(f=new ar(f,this.src,V,!!_,D),f.fa=g,a.push(f)),f};function Mr(a,f){var g=f.type;if(g in a.g){var _=a.g[g],D=Array.prototype.indexOf.call(_,f,void 0),V;(V=0<=D)&&Array.prototype.splice.call(_,D,1),V&&(lr(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function Ur(a,f,g,_){for(var D=0;D<a.length;++D){var V=a[D];if(!V.da&&V.listener==f&&V.capture==!!g&&V.ha==_)return D}return-1}var Jt="closure_lm_"+(1e6*Math.random()|0),Rs={};function Il(a,f,g,_,D){if(Array.isArray(f)){for(var V=0;V<f.length;V++)Il(a,f[V],g,_,D);return null}return g=Al(g),a&&a[Ce]?a.K(f,g,d(_)?!!_.capture:!1,D):wi(a,f,g,!1,_,D)}function wi(a,f,g,_,D,V){if(!f)throw Error("Invalid event type");var z=d(D)?!!D.capture:!!D,Ne=Ti(a);if(Ne||(a[Jt]=Ne=new ur(a)),g=Ne.add(f,g,_,z,V),g.proxy)return g;if(_=Sl(),g.proxy=_,_.src=a,_.listener=g,a.addEventListener)nt||(D=z),D===void 0&&(D=!1),a.addEventListener(f.toString(),_,D);else if(a.attachEvent)a.attachEvent(Do(f.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Sl(){function a(g){return f.call(a.src,a.listener,g)}const f=Nl;return a}function xi(a,f,g,_,D){if(Array.isArray(f))for(var V=0;V<f.length;V++)xi(a,f[V],g,_,D);else _=d(_)?!!_.capture:!!_,g=Al(g),a&&a[Ce]?(a=a.i,f=String(f).toString(),f in a.g&&(V=a.g[f],g=Ur(V,g,_,D),-1<g&&(lr(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete a.g[f],a.h--)))):a&&(a=Ti(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Ur(f,g,_,D)),(g=-1<a?f[a]:null)&&Ei(g))}function Ei(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[Ce])Mr(f.i,a);else{var g=a.type,_=a.proxy;f.removeEventListener?f.removeEventListener(g,_,a.capture):f.detachEvent?f.detachEvent(Do(g),_):f.addListener&&f.removeListener&&f.removeListener(_),(g=Ti(f))?(Mr(g,a),g.h==0&&(g.src=null,f[Jt]=null)):lr(a)}}}function Do(a){return a in Rs?Rs[a]:Rs[a]="on"+a}function Nl(a,f){if(a.da)a=!0;else{f=new wt(f,this);var g=a.listener,_=a.ha||a.src;a.fa&&Ei(a),a=g.call(_,f)}return a}function Ti(a){return a=a[Jt],a instanceof ur?a:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Al(a){return typeof a=="function"?a:(a[cr]||(a[cr]=function(f){return a.handleEvent(f)}),a[cr])}function Je(){le.call(this),this.i=new ur(this),this.M=this,this.F=null}T(Je,le),Je.prototype[Ce]=!0,Je.prototype.removeEventListener=function(a,f,g,_){xi(this,a,f,g,_)};function ot(a,f){var g,_=a.F;if(_)for(g=[];_;_=_.F)g.push(_);if(a=a.M,_=f.type||f,typeof f=="string")f=new ee(f,a);else if(f instanceof ee)f.target=f.target||a;else{var D=f;f=new ee(_,a),A(f,D)}if(D=!0,g)for(var V=g.length-1;0<=V;V--){var z=f.g=g[V];D=Ii(z,_,!0,f)&&D}if(z=f.g=a,D=Ii(z,_,!0,f)&&D,D=Ii(z,_,!1,f)&&D,g)for(V=0;V<g.length;V++)z=f.g=g[V],D=Ii(z,_,!1,f)&&D}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var g=a.g[f],_=0;_<g.length;_++)lr(g[_]);delete a.g[f],a.h--}}this.F=null},Je.prototype.K=function(a,f,g,_){return this.i.add(String(a),f,!1,g,_)},Je.prototype.L=function(a,f,g,_){return this.i.add(String(a),f,!0,g,_)};function Ii(a,f,g,_){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,V=0;V<f.length;++V){var z=f[V];if(z&&!z.da&&z.capture==g){var Ne=z.listener,mt=z.ha||z.src;z.fa&&Mr(a.i,z),D=Ne.call(mt,_)!==!1&&D}}return D&&!_.defaultPrevented}function Si(a,f,g){if(typeof a=="function")g&&(a=m(a,g));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:l.setTimeout(a,f||0)}function Cl(a){a.g=Si(()=>{a.g=null,a.i&&(a.i=!1,Cl(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Nd extends le{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ps(a){le.call(this),this.h=a,this.g={}}T(Ps,le);var bl=[];function Rl(a){M(a.g,function(f,g){this.g.hasOwnProperty(g)&&Ei(f)},a),a.g={}}Ps.prototype.N=function(){Ps.aa.N.call(this),Rl(this)},Ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=l.JSON.stringify,dr=l.JSON.parse,Ad=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ni(){}Ni.prototype.h=null;function Pl(a){return a.h||(a.h=a.i())}function Vo(){}var ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function F(){ee.call(this,"d")}T(F,ee);function ue(){ee.call(this,"c")}T(ue,ee);var ae={},ce=null;function _e(){return ce=ce||new Je}ae.La="serverreachability";function ie(a){ee.call(this,ae.La,a)}T(ie,ee);function re(a){const f=_e();ot(f,new ie(f))}ae.STAT_EVENT="statevent";function xt(a,f){ee.call(this,ae.STAT_EVENT,a),this.stat=f}T(xt,ee);function Me(a){const f=_e();ot(f,new xt(f,a))}ae.Ma="timingevent";function Bn(a,f){ee.call(this,ae.Ma,a),this.size=f}T(Bn,ee);function zn(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},f)}function dn(){this.g=!0}dn.prototype.xa=function(){this.g=!1};function KI(a,f,g,_,D,V){a.info(function(){if(a.g)if(V)for(var z="",Ne=V.split("&"),mt=0;mt<Ne.length;mt++){var xe=Ne[mt].split("=");if(1<xe.length){var Et=xe[0];xe=xe[1];var Tt=Et.split("_");z=2<=Tt.length&&Tt[1]=="type"?z+(Et+"="+xe+"&"):z+(Et+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+f+`
`+g+`
`+z})}function QI(a,f,g,_,D,V,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+f+`
`+g+`
`+V+" "+z})}function Ai(a,f,g,_){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+JI(a,g)+(_?" "+_:"")})}function YI(a,f){a.info(function(){return"TIMEOUT: "+f})}dn.prototype.info=function(){};function JI(a,f){if(!a.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var _=g[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return Oo(g)}catch{return f}}var kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cd;function jl(){}T(jl,Ni),jl.prototype.g=function(){return new XMLHttpRequest},jl.prototype.i=function(){return{}},Cd=new jl;function Fr(a,f,g,_){this.j=a,this.i=f,this.l=g,this.R=_||1,this.U=new Ps(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xg}function xg(){this.i=null,this.g="",this.h=!1}var Eg={},bd={};function Rd(a,f,g){a.L=1,a.v=Ll(hr(f)),a.m=g,a.P=!0,Tg(a,null)}function Tg(a,f){a.F=Date.now(),Dl(a),a.A=hr(a.v);var g=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Lg(g.i,"t",_),a.C=0,g=a.j.J,a.h=new xg,a.g=ty(a.j,g?f:null,!a.m),0<a.O&&(a.M=new Nd(m(a.Y,a,a.g),a.O)),f=a.U,g=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(bl[0]=D.toString()),D=bl);for(var V=0;V<D.length;V++){var z=Il(g,D[V],_||f.handleEvent,!1,f.h||f);if(!z)break;f.g[z.key]=z}f=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),re(),KI(a.i,a.u,a.A,a.l,a.R,a.m)}Fr.prototype.ca=function(a){a=a.target;const f=this.M;f&&fr(a)==3?f.j():this.Y(a)},Fr.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=fr(this.g);var f=this.g.Ba();const Ri=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||qg(this.g)))){this.J||Tt!=4||f==7||(f==8||0>=Ri?re(3):re(2)),Pd(this);var g=this.g.Z();this.X=g;t:if(Ig(this)){var _=qg(this.g);a="";var D=_.length,V=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){js(this),Lo(this);var z="";break t}this.h.i=new l.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,a+=this.h.i.decode(_[f],{stream:!(V&&f==D-1)});_.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=g==200,QI(this.i,this.u,this.A,this.l,this.R,Tt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,mt=this.g;if((Ne=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ne)){var xe=Ne;break t}}xe=null}if(g=xe)Ai(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kd(this,g);else{this.o=!1,this.s=3,Me(12),js(this),Lo(this);break e}}if(this.P){g=!0;let In;for(;!this.J&&this.C<z.length;)if(In=XI(this,z),In==bd){Tt==4&&(this.s=4,Me(14),g=!1),Ai(this.i,this.l,null,"[Incomplete Response]");break}else if(In==Eg){this.s=4,Me(15),Ai(this.i,this.l,z,"[Invalid Chunk]"),g=!1;break}else Ai(this.i,this.l,In,null),kd(this,In);if(Ig(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||z.length!=0||this.h.h||(this.s=1,Me(16),g=!1),this.o=this.o&&g,!g)Ai(this.i,this.l,z,"[Invalid Chunked Response]"),js(this),Lo(this);else if(0<z.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Md(Et),Et.M=!0,Me(11))}}else Ai(this.i,this.l,z,null),kd(this,z);Tt==4&&js(this),this.o&&!this.J&&(Tt==4?Jg(this.j,this):(this.o=!1,Dl(this)))}else mS(this.g),g==400&&0<z.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),js(this),Lo(this)}}}catch{}finally{}};function Ig(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function XI(a,f){var g=a.C,_=f.indexOf(`
`,g);return _==-1?bd:(g=Number(f.substring(g,_)),isNaN(g)?Eg:(_+=1,_+g>f.length?bd:(f=f.slice(_,_+g),a.C=_+g,f)))}Fr.prototype.cancel=function(){this.J=!0,js(this)};function Dl(a){a.S=Date.now()+a.I,Sg(a,a.I)}function Sg(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zn(m(a.ba,a),f)}function Pd(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(YI(this.i,this.A),this.L!=2&&(re(),Me(17)),js(this),this.s=2,Lo(this)):Sg(this,this.S-a)};function Lo(a){a.j.G==0||a.J||Jg(a.j,a)}function js(a){Pd(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Rl(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function kd(a,f){try{var g=a.j;if(g.G!=0&&(g.g==a||jd(g.h,a))){if(!a.K&&jd(g.h,a)&&g.G==3){try{var _=g.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)zl(g),$l(g);else break e;Ld(g),Me(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=zn(m(g.Za,g),6e3));if(1>=Cg(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Os(g,11)}else if((a.K||g.g==a)&&zl(g),!w(f))for(D=g.Da.g.parse(f),f=0;f<D.length;f++){let xe=D[f];if(g.T=xe[0],xe=xe[1],g.G==2)if(xe[0]=="c"){g.K=xe[1],g.ia=xe[2];const Et=xe[3];Et!=null&&(g.la=Et,g.j.info("VER="+g.la));const Tt=xe[4];Tt!=null&&(g.Aa=Tt,g.j.info("SVER="+g.Aa));const Ri=xe[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(_=1.5*Ri,g.L=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const In=a.g;if(In){const Wl=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wl){var V=_.h;V.g||Wl.indexOf("spdy")==-1&&Wl.indexOf("quic")==-1&&Wl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Dd(V,V.h),V.h=null))}if(_.D){const Ud=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;Ud&&(_.ya=Ud,Pe(_.I,_.D,Ud))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),_=g;var z=a;if(_.qa=ey(_,_.J?_.ia:null,_.W),z.K){bg(_.h,z);var Ne=z,mt=_.L;mt&&(Ne.I=mt),Ne.B&&(Pd(Ne),Dl(Ne)),_.g=z}else Qg(_);0<g.i.length&&Bl(g)}else xe[0]!="stop"&&xe[0]!="close"||Os(g,7);else g.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Os(g,7):Vd(g):xe[0]!="noop"&&g.l&&g.l.ta(xe),g.v=0)}}re(4)}catch{}}var ZI=class{constructor(a,f){this.g=a,this.map=f}};function Ng(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ag(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cg(a){return a.h?1:a.g?a.g.size:0}function jd(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Dd(a,f){a.g?a.g.add(f):a.h=f}function bg(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Ng.prototype.cancel=function(){if(this.i=Rg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.D);return f}return N(a.i)}function eS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var f=[],g=a.length,_=0;_<g;_++)f.push(a[_]);return f}f=[],g=0;for(_ in a)f[g++]=a[_];return f}function tS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var f=[];a=a.length;for(var g=0;g<a;g++)f.push(g);return f}f=[],g=0;for(const _ in a)f[g++]=_;return f}}}function Pg(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var g=tS(a),_=eS(a),D=_.length,V=0;V<D;V++)f.call(void 0,_[V],g&&g[V],a)}var kg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nS(a,f){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var _=a[g].indexOf("="),D=null;if(0<=_){var V=a[g].substring(0,_);D=a[g].substring(_+1)}else V=a[g];f(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ds(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ds){this.h=a.h,Ol(this,a.j),this.o=a.o,this.g=a.g,Vl(this,a.s),this.l=a.l;var f=a.i,g=new Fo;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),jg(this,g),this.m=a.m}else a&&(f=String(a).match(kg))?(this.h=!1,Ol(this,f[1]||"",!0),this.o=Mo(f[2]||""),this.g=Mo(f[3]||"",!0),Vl(this,f[4]),this.l=Mo(f[5]||"",!0),jg(this,f[6]||"",!0),this.m=Mo(f[7]||"")):(this.h=!1,this.i=new Fo(null,this.h))}Ds.prototype.toString=function(){var a=[],f=this.j;f&&a.push(Uo(f,Dg,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Uo(f,Dg,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(Uo(g,g.charAt(0)=="/"?iS:sS,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",Uo(g,aS)),a.join("")};function hr(a){return new Ds(a)}function Ol(a,f,g){a.j=g?Mo(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Vl(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function jg(a,f,g){f instanceof Fo?(a.i=f,lS(a.i,a.h)):(g||(f=Uo(f,oS)),a.i=new Fo(f,a.h))}function Pe(a,f,g){a.i.set(f,g)}function Ll(a){return Pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Mo(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Uo(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,rS),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Dg=/[#\/\?@]/g,sS=/[#\?:]/g,iS=/[#\?]/g,oS=/[#\?@]/g,aS=/#/g;function Fo(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function $r(a){a.g||(a.g=new Map,a.h=0,a.i&&nS(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=Fo.prototype,t.add=function(a,f){$r(this),this.i=null,a=Ci(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function Og(a,f){$r(a),f=Ci(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Vg(a,f){return $r(a),f=Ci(a,f),a.g.has(f)}t.forEach=function(a,f){$r(this),this.g.forEach(function(g,_){g.forEach(function(D){a.call(f,D,_,this)},this)},this)},t.na=function(){$r(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let _=0;_<f.length;_++){const D=a[_];for(let V=0;V<D.length;V++)g.push(f[_])}return g},t.V=function(a){$r(this);let f=[];if(typeof a=="string")Vg(this,a)&&(f=f.concat(this.g.get(Ci(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)f=f.concat(a[g])}return f},t.set=function(a,f){return $r(this),this.i=null,a=Ci(this,a),Vg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Lg(a,f,g){Og(a,f),0<g.length&&(a.i=null,a.g.set(Ci(a,f),N(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var _=f[g];const V=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var D=V;z[_]!==""&&(D+="="+encodeURIComponent(String(z[_]))),a.push(D)}}return this.i=a.join("&")};function Ci(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function lS(a,f){f&&!a.j&&($r(a),a.i=null,a.g.forEach(function(g,_){var D=_.toLowerCase();_!=D&&(Og(this,_),Lg(this,D,g))},a)),a.j=f}function uS(a,f){const g=new dn;if(l.Image){const _=new Image;_.onload=y(Br,g,"TestLoadImage: loaded",!0,f,_),_.onerror=y(Br,g,"TestLoadImage: error",!1,f,_),_.onabort=y(Br,g,"TestLoadImage: abort",!1,f,_),_.ontimeout=y(Br,g,"TestLoadImage: timeout",!1,f,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else f(!1)}function cS(a,f){const g=new dn,_=new AbortController,D=setTimeout(()=>{_.abort(),Br(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?Br(g,"TestPingServer: ok",!0,f):Br(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Br(g,"TestPingServer: error",!1,f)})}function Br(a,f,g,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(g)}catch{}}function dS(){this.g=new Ad}function hS(a,f,g){const _=g||"";try{Pg(a,function(D,V){let z=D;d(D)&&(z=Oo(D)),f.push(_+V+"="+encodeURIComponent(z))})}catch(D){throw f.push(_+"type="+encodeURIComponent("_badmap")),D}}function Ml(a){this.l=a.Ub||null,this.j=a.eb||!1}T(Ml,Ni),Ml.prototype.g=function(){return new Ul(this.l,this.j)},Ml.prototype.i=function(a){return function(){return a}}({});function Ul(a,f){Je.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Ul,Je),t=Ul.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Bo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||l).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$o(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Bo(this)),this.g&&(this.readyState=3,Bo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?$o(this):Bo(this),this.readyState==3&&Mg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,$o(this))},t.Qa=function(a){this.g&&(this.response=a,$o(this))},t.ga=function(){this.g&&$o(this)};function $o(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Bo(a)}t.setRequestHeader=function(a,f){this.u.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function Bo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ul.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ug(a){let f="";return M(a,function(g,_){f+=_,f+=":",f+=g,f+=`\r
`}),f}function Od(a,f,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=Ug(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Pe(a,f,g))}function He(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(He,Je);var fS=/^https?$/i,pS=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,f,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cd.g(),this.v=this.o?Pl(this.o):Pl(Cd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(V){Fg(this,V);return}if(a=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)g.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())g.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pS,f,void 0))||_||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of g)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zg(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Fg(this,V)}};function Fg(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,$g(a),Fl(a)}function $g(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ot(this,"complete"),ot(this,"abort"),Fl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fl(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bg(this):this.bb())},t.bb=function(){Bg(this)};function Bg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fr(a)!=4||a.Z()!=2)){if(a.u&&fr(a)==4)Si(a.Ea,0,a);else if(ot(a,"readystatechange"),fr(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var _;if(_=z===0){var D=String(a.D).match(kg)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),_=!fS.test(D?D.toLowerCase():"")}g=_}if(g)ot(a,"complete"),ot(a,"success");else{a.m=6;try{var V=2<fr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",$g(a)}}finally{Fl(a)}}}}function Fl(a,f){if(a.g){zg(a);const g=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||ot(a,"ready");try{g.onreadystatechange=_}catch{}}}function zg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),dr(f)}};function qg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mS(a){const f={};a=(a.g&&2<=fr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(w(a[_]))continue;var g=P(a[_]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=f[D]||[];f[D]=V,V.push(g)}S(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zo(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function Wg(a){this.Aa=0,this.i=[],this.j=new dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zo("baseRetryDelayMs",5e3,a),this.cb=zo("retryDelaySeedMs",1e4,a),this.Wa=zo("forwardChannelMaxRetries",2,a),this.wa=zo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ng(a&&a.concurrentRequestLimit),this.Da=new dS,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wg.prototype,t.la=8,t.G=1,t.connect=function(a,f,g,_){Me(0),this.W=a,this.H=f||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.I=ey(this,null,this.W),Bl(this)};function Vd(a){if(Hg(a),a.G==3){var f=a.U++,g=hr(a.I);if(Pe(g,"SID",a.K),Pe(g,"RID",f),Pe(g,"TYPE","terminate"),qo(a,g),f=new Fr(a,a.j,f),f.L=2,f.v=Ll(hr(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&l.Image&&(new Image().src=f.v,g=!0),g||(f.g=ty(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Dl(f)}Zg(a)}function $l(a){a.g&&(Md(a),a.g.cancel(),a.g=null)}function Hg(a){$l(a),a.u&&(l.clearTimeout(a.u),a.u=null),zl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Bl(a){if(!Ag(a.h)&&!a.s){a.s=!0;var f=a.Ga;Y||Q(),$||(Y(),$=!0),H.add(f,a),a.B=0}}function gS(a,f){return Cg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zn(m(a.Ga,a,f),Xg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Fr(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Kg(this,D,f),g=hr(this.I),Pe(g,"RID",a),Pe(g,"CVER",22),this.D&&Pe(g,"X-HTTP-Session-Id",this.D),qo(this,g),V&&(this.O?f="headers="+encodeURIComponent(String(Ug(V)))+"&"+f:this.m&&Od(g,this.m,V)),Dd(this.h,D),this.Ua&&Pe(g,"TYPE","init"),this.P?(Pe(g,"$req",f),Pe(g,"SID","null"),D.T=!0,Rd(D,g,null)):Rd(D,g,f),this.G=2}}else this.G==3&&(a?Gg(this,a):this.i.length==0||Ag(this.h)||Gg(this))};function Gg(a,f){var g;f?g=f.l:g=a.U++;const _=hr(a.I);Pe(_,"SID",a.K),Pe(_,"RID",g),Pe(_,"AID",a.T),qo(a,_),a.m&&a.o&&Od(_,a.m,a.o),g=new Fr(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Kg(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Dd(a.h,g),Rd(g,_,f)}function qo(a,f){a.H&&M(a.H,function(g,_){Pe(f,_,g)}),a.l&&Pg({},function(g,_){Pe(f,_,g)})}function Kg(a,f,g){g=Math.min(a.i.length,g);var _=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let V=-1;for(;;){const z=["count="+g];V==-1?0<g?(V=D[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let Ne=!0;for(let mt=0;mt<g;mt++){let xe=D[mt].g;const Et=D[mt].map;if(xe-=V,0>xe)V=Math.max(0,D[mt].g-100),Ne=!1;else try{hS(Et,z,"req"+xe+"_")}catch{_&&_(Et)}}if(Ne){_=z.join("&");break e}}}return a=a.i.splice(0,g),f.D=a,_}function Qg(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;Y||Q(),$||(Y(),$=!0),H.add(f,a),a.v=0}}function Ld(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zn(m(a.Fa,a),Xg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Yg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zn(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),$l(this),Yg(this))};function Md(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Yg(a){a.g=new Fr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=hr(a.qa);Pe(f,"RID","rpc"),Pe(f,"SID",a.K),Pe(f,"AID",a.T),Pe(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Pe(f,"TO",a.ja),Pe(f,"TYPE","xmlhttp"),qo(a,f),a.m&&a.o&&Od(f,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=Ll(hr(f)),g.m=null,g.P=!0,Tg(g,a)}t.Za=function(){this.C!=null&&(this.C=null,$l(this),Ld(this),Me(19))};function zl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jg(a,f){var g=null;if(a.g==f){zl(a),Md(a),a.g=null;var _=2}else if(jd(a.h,f))g=f.D,bg(a.h,f),_=1;else return;if(a.G!=0){if(f.o)if(_==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var D=a.B;_=_e(),ot(_,new Bn(_,g)),Bl(a)}else Qg(a);else if(D=f.s,D==3||D==0&&0<f.X||!(_==1&&gS(a,f)||_==2&&Ld(a)))switch(g&&0<g.length&&(f=a.h,f.i=f.i.concat(g)),D){case 1:Os(a,5);break;case 4:Os(a,10);break;case 3:Os(a,6);break;default:Os(a,2)}}}function Xg(a,f){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*f}function Os(a,f){if(a.j.info("Error code "+f),f==2){var g=m(a.fb,a),_=a.Xa;const D=!_;_=new Ds(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ol(_,"https"),Ll(_),D?uS(_.toString(),g):cS(_.toString(),g)}else Me(2);a.G=0,a.l&&a.l.sa(f),Zg(a),Hg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Zg(a){if(a.G=0,a.ka=[],a.l){const f=Rg(a.h);(f.length!=0||a.i.length!=0)&&(C(a.ka,f),C(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function ey(a,f,g){var _=g instanceof Ds?hr(g):new Ds(g);if(_.g!="")f&&(_.g=f+"."+_.g),Vl(_,_.s);else{var D=l.location;_=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var V=new Ds(null);_&&Ol(V,_),f&&(V.g=f),D&&Vl(V,D),g&&(V.l=g),_=V}return g=a.D,f=a.ya,g&&f&&Pe(_,g,f),Pe(_,"VER",a.la),qo(a,_),_}function ty(a,f,g){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new He(new Ml({eb:g})):new He(a.pa),f.Ha(a.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ny(){}t=ny.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ql(){}ql.prototype.g=function(a,f){return new Xt(a,f)};function Xt(a,f){Je.call(this),this.g=new Wg(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!w(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!w(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new bi(this)}T(Xt,Je),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Vd(this.g)},Xt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=Oo(a),a=g);f.i.push(new ZI(f.Ya++,a)),f.G==3&&Bl(f)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Vd(this.g),delete this.g,Xt.aa.N.call(this)};function ry(a){F.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}T(ry,F);function sy(){ue.call(this),this.status=1}T(sy,ue);function bi(a){this.g=a}T(bi,ny),bi.prototype.ua=function(){ot(this.g,"a")},bi.prototype.ta=function(a){ot(this.g,new ry(a))},bi.prototype.sa=function(a){ot(this.g,new sy)},bi.prototype.ra=function(){ot(this.g,"b")},ql.prototype.createWebChannel=ql.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,V0=function(){return new ql},O0=function(){return _e()},D0=ae,$f={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kl.NO_ERROR=0,kl.TIMEOUT=8,kl.HTTP_ERROR=6,ku=kl,wg.COMPLETE="complete",j0=wg,Vo.EventType=ks,ks.OPEN="a",ks.CLOSE="b",ks.ERROR="c",ks.MESSAGE="d",Je.prototype.listen=Je.prototype.K,ia=Vo,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,k0=He}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});const Xv="@firebase/firestore",Zv="4.9.0";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let bo="12.0.0";/**
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
 */const si=new om("@firebase/firestore");function ki(){return si.logLevel}function G(t,...e){if(si.logLevel<=he.DEBUG){const n=e.map(Tm);si.debug(`Firestore (${bo}): ${t}`,...n)}}function Pr(t,...e){if(si.logLevel<=he.ERROR){const n=e.map(Tm);si.error(`Firestore (${bo}): ${t}`,...n)}}function ii(t,...e){if(si.logLevel<=he.WARN){const n=e.map(Tm);si.warn(`Firestore (${bo}): ${t}`,...n)}}function Tm(t){if(typeof t=="string")return t;try{/**
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
 */function te(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,L0(t,r,n)}function L0(t,e,n){let r=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pr(r),new Error(r)}function Te(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||L0(e,s,r)}function se(t,e){return t}/**
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
 */class M0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class U0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class QP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YP{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new M0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new At(e)}}class JP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class e_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new e_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new e_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ek(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ek(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Bf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return xh(s)===xh(i)?pe(s,i):xh(s)?1:-1}return pe(t.length,e.length)}const tk=55296,nk=57343;function xh(t){const e=t.charCodeAt(0);return e>=tk&&e<=nk}function mo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const zf="__name__";class Hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&te(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Hn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const r=Hn.isNumericId(e),s=Hn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Hn.extractNumericId(e).compare(Hn.extractNumericId(n)):Bf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ps.fromString(e.substring(4,e.length-2))}}class Ae extends Hn{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const rk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Hn{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return rk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zf}static keyField(){return new ut([zf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */function Im(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F0(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t_(t){if(!X.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n_(t){if(X.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function rd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te(12329,{type:typeof t})}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rd(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function fl(t,e){if(!$0(t))throw new W(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const r_=-62135596800,s_=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*s_);return new be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<r_)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/s_}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fl(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-r_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:tt("string",be._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
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
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new be(0,0))}static max(){return new oe(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ha=-1;function sk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new _s(s,X.empty(),e)}function ik(t){return new _s(t.readTime,t.key,Ha)}class _s{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _s(oe.min(),X.empty(),Ha)}static max(){return new _s(oe.max(),X.empty(),Ha)}}function ok(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const ak="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ro(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==ak)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(h=>{o[d]=h,++l,l===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function uk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Po(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sd.ce=-1;/**
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
 */const Sm=-1;function id(t){return t==null}function yc(t){return t===0&&1/t==-1/0}function ck(t){return typeof t=="number"&&Number.isInteger(t)&&!yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const B0="";function dk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=i_(e)),e=hk(t.get(n),e);return i_(e)}function hk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case B0:n+="";break;default:n+=i}}return n}function i_(t){return t+B0+""}/**
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
 */function o_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fk(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hu(this.root,e,this.comparator,!0)}}class hu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new yt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new a_(this.data.getIterator())}getIteratorFrom(e){return new a_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class a_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new nn([])}unionWith(e){let n=new it(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class q0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new q0("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const pk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ws(t){if(Te(!!t,39018),typeof t=="string"){let e=0;const n=pk.exec(t);if(Te(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xs(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */const W0="server_timestamp",H0="__type__",G0="__previous_value__",K0="__local_write_time__";function Nm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[H0])==null?void 0:r.stringValue)===W0}function od(t){const e=t.mapValue.fields[G0];return Nm(e)?od(e):e}function Ga(t){const e=ws(t.mapValue.fields[K0].timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class mk{constructor(e,n,r,s,i,o,l,u,d,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=h}}const vc="(default)";class go{constructor(e,n){this.projectId=e,this.database=n||vc}static empty(){return new go("","")}get isDefaultDatabase(){return this.database===vc}isEqual(e){return e instanceof go&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Q0="__type__",gk="__max__",fu={mapValue:{}},Y0="__vector__",_c="value";function Es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nm(t)?4:vk(t)?9007199254740991:yk(t)?10:11:te(28295,{value:t})}function tr(t,e){if(t===e)return!0;const n=Es(t);if(n!==Es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ws(s.timestampValue),l=ws(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xs(s.bytesValue).isEqual(xs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?yc(o)===yc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return mo(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(o_(o)!==o_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tr(o[u],l[u])))return!1;return!0}(t,e);default:return te(52216,{left:t})}}function Ka(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function yo(t,e){if(t===e)return 0;const n=Es(t),r=Es(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),u=Qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return l_(t.timestampValue,e.timestampValue);case 4:return l_(Ga(t),Ga(e));case 5:return Bf(t.stringValue,e.stringValue);case 6:return function(i,o){const l=xs(i),u=xs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const h=pe(l[d],u[d]);if(h!==0)return h}return pe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=pe(Qe(i.latitude),Qe(o.latitude));return l!==0?l:pe(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return u_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,T,N;const l=i.fields||{},u=o.fields||{},d=(m=l[_c])==null?void 0:m.arrayValue,h=(y=u[_c])==null?void 0:y.arrayValue,p=pe(((T=d==null?void 0:d.values)==null?void 0:T.length)||0,((N=h==null?void 0:h.values)==null?void 0:N.length)||0);return p!==0?p:u_(d,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===fu.mapValue&&o===fu.mapValue)return 0;if(i===fu.mapValue)return 1;if(o===fu.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},h=Object.keys(d);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const m=Bf(u[p],h[p]);if(m!==0)return m;const y=yo(l[u[p]],d[h[p]]);if(y!==0)return y}return pe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw te(23264,{he:n})}}function l_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=ws(t),r=ws(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function u_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=yo(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function vo(t){return qf(t)}function qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ws(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=qf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qf(n.fields[o])}`;return s+"}"}(t.mapValue):te(61005,{value:t})}function ju(t){switch(Es(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=od(t);return e?16+ju(e):16;case 5:return 2*t.stringValue.length;case 6:return xs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ju(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cs(r.fields,(i,o)=>{s+=i.length+ju(o)}),s}(t.mapValue);default:throw te(13486,{value:t})}}function c_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wf(t){return!!t&&"integerValue"in t}function Am(t){return!!t&&"arrayValue"in t}function d_(t){return!!t&&"nullValue"in t}function h_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Du(t){return!!t&&"mapValue"in t}function yk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Q0])==null?void 0:r.stringValue)===Y0}function _a(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return{...t}}function vk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gk}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=_a(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Du(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(_a(this.value))}}function J0(t){const e=[];return Cs(t.fields,(n,r)=>{const s=new ut([n]);if(Du(r)){const i=J0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,oe.min(),oe.min(),oe.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,oe.min(),oe.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,oe.min(),oe.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wc{constructor(e,n){this.position=e,this.inclusive=n}}function f_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=yo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function p_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qa{constructor(e,n="asc"){this.field=e,this.dir=n}}function _k(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class X0{}class et extends X0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xk(e,n,r):n==="array-contains"?new Ik(e,r):n==="in"?new Sk(e,r):n==="not-in"?new Nk(e,r):n==="array-contains-any"?new Ak(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ek(e,r):new Tk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(yo(n,this.value)):n!==null&&Es(this.value)===Es(n)&&this.matchesComparison(yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends X0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Mn(e,n)}matches(e){return Z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Z0(t){return t.op==="and"}function eT(t){return wk(t)&&Z0(t)}function wk(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}function Hf(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(eT(t))return t.filters.map(e=>Hf(e)).join(",");{const e=t.filters.map(n=>Hf(n)).join(",");return`${t.op}(${e})`}}function tT(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&tr(r.value,s.value)}(t,e):t instanceof Mn?function(r,s){return s instanceof Mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&tT(o,s.filters[l]),!0):!1}(t,e):void te(19439)}function nT(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(t):t instanceof Mn?function(n){return n.op.toString()+" {"+n.getFilters().map(nT).join(" ,")+"}"}(t):"Filter"}class xk extends et{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ek extends et{constructor(e,n){super(e,"in",n),this.keys=rT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tk extends et{constructor(e,n){super(e,"not-in",n),this.keys=rT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rT(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Ik extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Am(n)&&Ka(n.arrayValue,this.value)}}class Sk extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class Nk extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ka(this.value.arrayValue,n)}}class Ak extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
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
 */class Ck{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function m_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ck(t,e,n,r,s,i,o)}function Cm(t){const e=se(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),id(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.Te=n}return e.Te}function bm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_k(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!p_(t.startAt,e.startAt)&&p_(t.endAt,e.endAt)}function Gf(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function bk(t,e,n,r,s,i,o,l){return new mi(t,e,n,r,s,i,o,l)}function ad(t){return new mi(t)}function g_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sT(t){return t.collectionGroup!==null}function wa(t){const e=se(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Qa(i,r))}),n.has(ut.keyField().canonicalString())||e.Ie.push(new Qa(ut.keyField(),r))}return e.Ie}function Zn(t){const e=se(t);return e.Ee||(e.Ee=iT(e,wa(t))),e.Ee}function Rk(t){const e=se(t);return e.de||(e.de=iT(e,t.explicitOrderBy)),e.de}function iT(t,e){if(t.limitType==="F")return m_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qa(s.field,i)});const n=t.endAt?new wc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wc(t.startAt.position,t.startAt.inclusive):null;return m_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kf(t,e){const n=t.filters.concat([e]);return new mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qf(t,e,n){return new mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ld(t,e){return bm(Zn(t),Zn(e))&&t.limitType===e.limitType}function oT(t){return`${Cm(Zn(t))}|lt:${t.limitType}`}function ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>nT(s)).join(", ")}]`),id(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>vo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>vo(s)).join(",")),`Target(${r})`}(Zn(t))}; limitType=${t.limitType})`}function ud(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of wa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=f_(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,wa(r),s)||r.endAt&&!function(o,l,u){const d=f_(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,wa(r),s))}(t,e)}function Pk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aT(t){return(e,n)=>{let r=!1;for(const s of wa(t)){const i=kk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kk(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?yo(u,d):te(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:t.dir})}}/**
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
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return z0(this.inner)}size(){return this.innerSize}}/**
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
 */const jk=new qe(X.comparator);function kr(){return jk}const lT=new qe(X.comparator);function oa(...t){let e=lT;for(const n of t)e=e.insert(n.key,n);return e}function uT(t){let e=lT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ws(){return xa()}function cT(){return xa()}function xa(){return new gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Dk=new qe(X.comparator),Ok=new it(X.comparator);function me(...t){let e=Ok;for(const n of t)e=e.add(n);return e}const Vk=new it(pe);function Lk(){return Vk}/**
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
 */function Rm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function dT(t){return{integerValue:""+t}}function Mk(t,e){return ck(e)?dT(e):Rm(t,e)}/**
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
 */class cd{constructor(){this._=void 0}}function Uk(t,e,n){return t instanceof Ya?function(s,i){const o={fields:{[H0]:{stringValue:W0},[K0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nm(i)&&(i=od(i)),i&&(o.fields[G0]=i),{mapValue:o}}(n,e):t instanceof Ja?fT(t,e):t instanceof Xa?pT(t,e):function(s,i){const o=hT(s,i),l=y_(o)+y_(s.Ae);return Wf(o)&&Wf(s.Ae)?dT(l):Rm(s.serializer,l)}(t,e)}function Fk(t,e,n){return t instanceof Ja?fT(t,e):t instanceof Xa?pT(t,e):n}function hT(t,e){return t instanceof xc?function(r){return Wf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ya extends cd{}class Ja extends cd{constructor(e){super(),this.elements=e}}function fT(t,e){const n=mT(e);for(const r of t.elements)n.some(s=>tr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xa extends cd{constructor(e){super(),this.elements=e}}function pT(t,e){let n=mT(e);for(const r of t.elements)n=n.filter(s=>!tr(s,r));return{arrayValue:{values:n}}}class xc extends cd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function y_(t){return Qe(t.integerValue||t.doubleValue)}function mT(t){return Am(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class $k{constructor(e,n){this.field=e,this.transform=n}}function Bk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ja&&s instanceof Ja||r instanceof Xa&&s instanceof Xa?mo(r.elements,s.elements,tr):r instanceof xc&&s instanceof xc?tr(r.Ae,s.Ae):r instanceof Ya&&s instanceof Ya}(t.transform,e.transform)}class zk{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dd{}function gT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hd(t.key,Mt.none()):new pl(t.key,t.data,Mt.none());{const n=t.data,r=qt.empty();let s=new it(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new bs(t.key,r,new nn(s.toArray()),Mt.none())}}function qk(t,e,n){t instanceof pl?function(s,i,o){const l=s.value.clone(),u=__(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof bs?function(s,i,o){if(!Ou(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=__(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(yT(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ea(t,e,n,r){return t instanceof pl?function(i,o,l,u){if(!Ou(i.precondition,o))return l;const d=i.value.clone(),h=w_(i.fieldTransforms,u,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof bs?function(i,o,l,u){if(!Ou(i.precondition,o))return l;const d=w_(i.fieldTransforms,u,o),h=o.data;return h.setAll(yT(i)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Ou(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Wk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hT(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function v_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&mo(r,s,(i,o)=>Bk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pl extends dd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class bs extends dd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function __(t,e,n){const r=new Map;Te(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Fk(o,l,n[s]))}return r}function w_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Uk(i,o,e))}return r}class hd extends dd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hk extends dd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=gT(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,(n,r)=>v_(n,r))&&mo(this.baseMutations,e.baseMutations,(n,r)=>v_(n,r))}}class Pm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Dk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Pm(e,n,r,s)}}/**
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
 */class Kk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qk{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class Yk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,ye;function Jk(t){switch(t){case L.OK:return te(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return te(15467,{code:t})}}function vT(t){if(t===void 0)return Pr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Xe.OK:return L.OK;case Xe.CANCELLED:return L.CANCELLED;case Xe.UNKNOWN:return L.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return L.INTERNAL;case Xe.UNAVAILABLE:return L.UNAVAILABLE;case Xe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Xe.NOT_FOUND:return L.NOT_FOUND;case Xe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Xe.ABORTED:return L.ABORTED;case Xe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Xe.DATA_LOSS:return L.DATA_LOSS;default:return te(39323,{code:t})}}(ye=Xe||(Xe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xk(){return new TextEncoder}/**
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
 */const Zk=new ps([4294967295,4294967295],0);function x_(t){const e=Xk().encode(t),n=new P0;return n.update(e),new Uint8Array(n.digest())}function E_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ps([n,r],0),new ps([s,i],0)]}class km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new aa(`Invalid padding: ${n}`);if(r<0)throw new aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new aa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ps.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ps.fromNumber(r)));return s.compare(Zk)===1&&(s=new ps([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=x_(e),[r,s]=E_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new km(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=x_(e),[r,s]=E_(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fd(oe.min(),s,new qe(pe),kr(),me())}}class ml{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ml(r,n,me(),me(),me())}}/**
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
 */class Vu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class _T{constructor(e,n){this.targetId=e,this.Ce=n}}class wT{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class T_{constructor(){this.ve=0,this.Fe=I_(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),r=me();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new ml(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=I_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class e2{constructor(e){this.Ge=e,this.ze=new Map,this.je=kr(),this.Je=pu(),this.He=pu(),this.Ye=new qe(pe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Gf(i))if(r===0){const o=new X(i.path);this.et(n,o,bt.newNoDocument(o,oe.min()))}else Te(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=xs(r).toUint8Array()}catch(u){if(u instanceof q0)return ii("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new km(o,s,i)}catch(u){return ii(u instanceof aa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Gf(l.target)){const u=new X(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,bt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=me();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new fd(e,n,this.Ye,this.je,r);return this.je=kr(),this.Je=pu(),this.He=pu(),this.Ye=new qe(pe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new T_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new it(pe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new it(pe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new T_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function pu(){return new qe(X.comparator)}function I_(){return new qe(X.comparator)}const t2={asc:"ASCENDING",desc:"DESCENDING"},n2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r2={and:"AND",or:"OR"};class s2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yf(t,e){return t.useProto3Json||id(e)?e:{value:e}}function Ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function i2(t,e){return Ec(t,e.toTimestamp())}function er(t){return Te(!!t,49232),oe.fromTimestamp(function(n){const r=ws(n);return new be(r.seconds,r.nanos)}(t))}function jm(t,e){return Jf(t,e).canonicalString()}function Jf(t,e){const n=function(s){return new Ae(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ET(t){const e=Ae.fromString(t);return Te(CT(e),10190,{key:e.toString()}),e}function Xf(t,e){return jm(t.databaseId,e.path)}function Eh(t,e){const n=ET(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(IT(n))}function TT(t,e){return jm(t.databaseId,e)}function o2(t){const e=ET(t);return e.length===4?Ae.emptyPath():IT(e)}function Zf(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IT(t){return Te(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function S_(t,e,n){return{name:Xf(t,e),fields:n.value.mapValue.fields}}function a2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:te(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,h){return d.useProto3Json?(Te(h===void 0||typeof h=="string",58123),ft.fromBase64String(h||"")):(Te(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const h=d.code===void 0?L.UNKNOWN:vT(d.code);return new W(h,d.message||"")}(o);n=new wT(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Eh(t,r.document.name),i=er(r.document.updateTime),o=r.document.createTime?er(r.document.createTime):oe.min(),l=new qt({mapValue:{fields:r.document.fields}}),u=bt.newFoundDocument(s,i,o,l),d=r.targetIds||[],h=r.removedTargetIds||[];n=new Vu(d,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Eh(t,r.document),i=r.readTime?er(r.readTime):oe.min(),o=bt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Vu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Eh(t,r.document),i=r.removedTargetIds||[];n=new Vu([],i,s,null)}else{if(!("filter"in e))return te(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Yk(s,i),l=r.targetId;n=new _T(l,o)}}return n}function l2(t,e){let n;if(e instanceof pl)n={update:S_(t,e.key,e.value)};else if(e instanceof hd)n={delete:Xf(t,e.key)};else if(e instanceof bs)n={update:S_(t,e.key,e.data),updateMask:y2(e.fieldMask)};else{if(!(e instanceof Hk))return te(16599,{Vt:e.type});n={verify:Xf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ya)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ja)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw te(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:i2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)}(t,e.precondition)),n}function u2(t,e){return t&&t.length>0?(Te(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?er(s.updateTime):er(i);return o.isEqual(oe.min())&&(o=er(i)),new zk(o,s.transformResults||[])}(n,e))):[]}function c2(t,e){return{documents:[TT(t,e.path)]}}function ST(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TT(t,s);const i=function(d){if(d.length!==0)return AT(Mn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(h=>function(m){return{field:Zr(m.field),direction:p2(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Yf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function d2(t,e,n,r){const{ft:s,parent:i}=ST(t,e),o={},l=[];let u=0;return n.forEach(d=>{const h="aggregate_"+u++;o[h]=d.alias,d.aggregateType==="count"?l.push({alias:h,count:{}}):d.aggregateType==="avg"?l.push({alias:h,avg:{field:Zr(d.fieldPath)}}):d.aggregateType==="sum"&&l.push({alias:h,sum:{field:Zr(d.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function h2(t){let e=o2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const m=NT(p);return m instanceof Mn&&eT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(T){return new Qa(Di(T.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,id(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,y=p.values||[];return new wc(y,m)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const m=!p.before,y=p.values||[];return new wc(y,m)}(n.endAt)),bk(e,s,o,i,l,"F",u,d)}function f2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Di(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Di(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Di(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Di(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(t):t.fieldFilter!==void 0?function(n){return et.create(Di(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mn.create(n.compositeFilter.filters.map(r=>NT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(n.compositeFilter.op))}(t):te(30097,{filter:t})}function p2(t){return t2[t]}function m2(t){return n2[t]}function g2(t){return r2[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function Di(t){return ut.fromServerFormat(t.fieldPath)}function AT(t){return t instanceof et?function(n){if(n.op==="=="){if(h_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(d_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(h_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(d_(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:m2(n.op),value:n.value}}}(t):t instanceof Mn?function(n){const r=n.getFilters().map(s=>AT(s));return r.length===1?r[0]:{compositeFilter:{op:g2(n.op),filters:r}}}(t):te(54877,{filter:t})}function y2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function CT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rs{constructor(e,n,r,s,i=oe.min(),o=oe.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class v2{constructor(e){this.yt=e}}function _2(t){const e=h2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qf(e,e.limit,"L"):e}/**
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
 */class w2{constructor(){this.Cn=new x2}addToCollectionParentIndex(e,n){return this.Cn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(_s.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(_s.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class x2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Ae.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ae.comparator)).toArray()}}/**
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
 */const N_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bT=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(bT,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class _o{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new _o(0)}static cr(){return new _o(-1)}}/**
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
 */const A_="LruGarbageCollector",E2=1048576;function C_([t,e],[n,r]){const s=pe(t,n);return s===0?pe(e,r):s}class T2{constructor(e){this.Ir=e,this.buffer=new it(C_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();C_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class I2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(A_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Po(n)?G(A_,"Ignoring IndexedDB error during garbage collection: ",n):await Ro(n)}await this.Vr(3e5)})}}class S2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(sd.ce);const r=new T2(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(N_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),N_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),ki()<=he.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-h}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function N2(t,e){return new S2(t,e)}/**
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
 */class A2{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class C2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class b2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ea(r.mutation,s,nn.empty(),be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=Ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oa();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=kr();const o=xa(),l=function(){return xa()}();return n.forEach((u,d)=>{const h=r.get(d.key);s.has(d.key)&&(h===void 0||h.mutation instanceof bs)?i=i.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),Ea(h.mutation,d,h.mutation.getFieldMask(),be.now())):o.set(d.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>l.set(d,new C2(h,o.get(d)??null))),l))}recalculateAndSaveOverlays(e,n){const r=xa();let s=new qe((o,l)=>o-l),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let h=r.get(u)||nn.empty();h=l.applyToLocalView(d,h),r.set(u,h);const p=(s.get(l.batchId)||me()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,h=u.value,p=cT();h.forEach(m=>{if(!i.has(m)){const y=gT(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Ws());let l=Ha,u=i;return o.next(d=>U.forEach(d,(h,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,me())).next(h=>({batchId:l,changes:uT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=oa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oa();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,u=>{const d=function(p,m){return new mi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let l=oa();return o.forEach((u,d)=>{const h=i.get(u);h!==void 0&&Ea(h.mutation,d,nn.empty(),be.now()),ud(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class R2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return U.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:er(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:_2(s.bundledQuery),readTime:er(s.readTime)}}(n)),U.resolve()}}/**
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
 */class P2{constructor(){this.overlays=new qe(X.comparator),this.qr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ws();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Ws(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=i.get(d.largestBatchId);h===null&&(h=Ws(),i=i.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const l=Ws(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,h)=>l.set(d,h)),!(l.size()>=s)););return U.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Kk(n,r));let i=this.qr.get(n);i===void 0&&(i=me(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class k2{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Dm{constructor(){this.Qr=new it(at.$r),this.Ur=new it(at.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new at(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new at(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new X(new Ae([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new X(new Ae([])),r=new at(n,e),s=new at(n,e+1);let i=me();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return X.comparator(e.key,n.key)||pe(e.Yr,n.Yr)}static Kr(e,n){return pe(e.Yr,n.Yr)||X.comparator(e.key,n.key)}}/**
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
 */class j2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new it(at.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new at(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Sm:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(pe);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),U.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new at(new X(i),0);let l=new it(pe);return this.Zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Yr)),!0)},o),U.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return U.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new at(n,0),s=this.Zr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class D2{constructor(e){this.ri=e,this.docs=function(){return new qe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=kr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kr();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:h}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||ok(ik(h),r)<=0||(s.has(h.key)||ud(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te(9500)}ii(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new O2(this)}getSize(e){return U.resolve(this.size)}}class O2 extends A2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class V2{constructor(e){this.persistence=e,this.si=new gi(n=>Cm(n),bm),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.oi=0,this._i=new Dm,this.targetCount=0,this.ai=_o.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),U.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new _o(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Pr(n),U.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this._i.containsKey(n))}}/**
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
 */class RT{constructor(e,n){this.ui={},this.overlays={},this.ci=new sd(0),this.li=!1,this.li=!0,this.hi=new k2,this.referenceDelegate=e(this),this.Pi=new V2(this),this.indexManager=new w2,this.remoteDocumentCache=function(s){return new D2(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new v2(n),this.Ii=new R2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new P2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new j2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new L2(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return U.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class L2 extends lk{constructor(e){super(),this.currentSequenceNumber=e}}class Om{constructor(e){this.persistence=e,this.Ri=new Dm,this.Vi=null}static mi(e){return new Om(e)}get fi(){if(this.Vi)return this.Vi;throw te(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,r=>{const s=X.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Tc{constructor(e,n){this.persistence=e,this.pi=new gi(r=>dk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=N2(this,n)}static mi(e,n){return new Tc(e,n)}Ei(){}di(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return U.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ju(e.data.value)),n}br(e,n,r){return U.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vm(e,n.fromCache,r,s)}}/**
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
 */class M2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class U2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return pC()?8:uk(jt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new M2;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(ki()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(ki()<=he.DEBUG&&G("QueryEngine","Query:",ji(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ki()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zn(n))):U.resolve())}ys(e,n){if(g_(n))return U.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qf(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ds(n,l);return this.Cs(n,d,o,u.readTime)?this.ys(e,Qf(n,null,"F")):this.vs(e,d,n,u)}))})))}ws(e,n,r,s){return g_(n)||s.isEqual(oe.min())?U.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?U.resolve(null):(ki()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ji(n)),this.vs(e,o,n,sk(s,Ha)).next(l=>l))})}Ds(e,n){let r=new it(aT(e));return n.forEach((s,i)=>{ud(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ki()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ji(n)),this.ps.getDocumentsMatchingQuery(e,n,_s.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Lm="LocalStore",F2=3e8;class $2{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new qe(pe),this.xs=new gi(i=>Cm(i),bm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new b2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function B2(t,e,n,r){return new $2(t,e,n,r)}async function PT(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=me();for(const d of s){o.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}for(const d of i){l.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ls:d,removedBatchIds:o,addedBatchIds:l}))})})}function z2(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,d,h){const p=d.batch,m=p.keys();let y=U.resolve();return m.forEach(T=>{y=y.next(()=>h.getEntry(u,T)).next(N=>{const C=d.docVersions.get(T);Te(C!==null,48541),N.version.compareTo(C)<0&&(p.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),h.addEntry(N)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=me();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function kT(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function q2(t,e){const n=se(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,h.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ft.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(p,y),function(N,C,x){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=F2?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,y,h)&&l.push(n.Pi.updateTargetData(i,y))});let u=kr(),d=me();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),l.push(W2(i,o,e.documentUpdates).next(h=>{u=h.ks,d=h.qs})),!r.isEqual(oe.min())){const h=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(h)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.Ms=s,i))}function W2(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kr();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(Lm,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{ks:o,qs:s}})}function H2(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Sm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function G2(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new rs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ep(t,e,n){const r=se(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Po(o))throw o;G(Lm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function b_(t,e,n){const r=se(t);let s=oe.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,h){const p=se(u),m=p.xs.get(h);return m!==void 0?U.resolve(p.Ms.get(m)):p.Pi.getTargetData(d,h)}(r,o,Zn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:me())).next(l=>(K2(r,Pk(e),l),{documents:l,Qs:i})))}function K2(t,e,n){let r=t.Os.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class R_{constructor(){this.activeTargetIds=Lk()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q2{constructor(){this.Mo=new R_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new R_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Y2{Oo(e){}shutdown(){}}/**
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
 */const P_="ConnectivityMonitor";class k_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(P_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(P_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mu=null;function tp(){return mu===null?mu=function(){return 268435456+Math.round(2147483648*Math.random())}():mu++,"0x"+mu.toString(16)}/**
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
 */const Th="RestConnection",J2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class X2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===vc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=tp(),l=this.zo(e,n.toUriEncodedString());G(Th,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(l),h=hi(d);return this.Jo(e,l,u,r,h).then(p=>(G(Th,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ii(Th,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=J2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Z2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Nt="WebChannelConnection";class ej extends X2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=tp();return new Promise((l,u)=>{const d=new k0;d.setWithCredentials(!0),d.listenOnce(j0.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ku.NO_ERROR:const p=d.getResponseJson();G(Nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ku.TIMEOUT:G(Nt,`RPC '${e}' ${o} timed out`),u(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const m=d.getStatus();if(G(Nt,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let y=d.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const N=function(x){const w=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(T.status);u(new W(N,T.message))}else u(new W(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new W(L.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{G(Nt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);G(Nt,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",h,r,15)})}T_(e,n,r){const s=tp(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=V0(),l=O0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");G(Nt,`Creating RPC '${e}' stream ${s}: ${h}`,u);const p=o.createWebChannel(h,u);this.I_(p);let m=!1,y=!1;const T=new Z2({Yo:C=>{y?G(Nt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(G(Nt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),G(Nt,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Zo:()=>p.close()}),N=(C,x,w)=>{C.listen(x,E=>{try{w(E)}catch(k){setTimeout(()=>{throw k},0)}})};return N(p,ia.EventType.OPEN,()=>{y||(G(Nt,`RPC '${e}' stream ${s} transport opened.`),T.o_())}),N(p,ia.EventType.CLOSE,()=>{y||(y=!0,G(Nt,`RPC '${e}' stream ${s} transport closed`),T.a_(),this.E_(p))}),N(p,ia.EventType.ERROR,C=>{y||(y=!0,ii(Nt,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),T.a_(new W(L.UNAVAILABLE,"The operation could not be completed")))}),N(p,ia.EventType.MESSAGE,C=>{var x;if(!y){const w=C.data[0];Te(!!w,16349);const E=w,k=(E==null?void 0:E.error)||((x=E[0])==null?void 0:x.error);if(k){G(Nt,`RPC '${e}' stream ${s} received error:`,k);const O=k.status;let M=function(I){const A=Xe[I];if(A!==void 0)return vT(A)}(O),S=k.message;M===void 0&&(M=L.INTERNAL,S="Unknown error status: "+O+" with message "+k.message),y=!0,T.a_(new W(M,S)),p.close()}else G(Nt,`RPC '${e}' stream ${s} received:`,w),T.u_(w)}}),N(l,D0.STAT_EVENT,C=>{C.stat===$f.PROXY?G(Nt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===$f.NOPROXY&&G(Nt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.__()},0),T}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Ih(){return typeof document<"u"?document:null}/**
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
 */function pd(t){return new s2(t,!0)}/**
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
 */class jT{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const j_="PersistentStream";class DT{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new jT(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(j_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(G(j_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tj extends DT{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=a2(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?er(o.readTime):oe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Zf(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Gf(u)?{documents:c2(i,u)}:{query:ST(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=xT(i,o.resumeToken);const d=Yf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(oe.min())>0){l.readTime=Ec(i,o.snapshotVersion.toTimestamp());const d=Yf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=f2(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Zf(this.serializer),n.removeTarget=e,this.q_(n)}}class nj extends DT{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=u2(e.writeResults,e.commitTime),r=er(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Zf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>l2(this.serializer,r))};this.q_(n)}}/**
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
 */class rj{}class sj extends rj{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Jf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Jf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ij{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pr(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const oi="RemoteStore";class oj{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{yi(this)&&(G(oi,"Restarting streams for network reachability change."),await async function(u){const d=se(u);d.Ea.add(4),await gl(d),d.Ra.set("Unknown"),d.Ea.delete(4),await md(d)}(this))})}),this.Ra=new ij(r,s)}}async function md(t){if(yi(t))for(const e of t.da)await e(!0)}async function gl(t){for(const e of t.da)await e(!1)}function OT(t,e){const n=se(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),$m(n)?Fm(n):ko(n).O_()&&Um(n,e))}function Mm(t,e){const n=se(t),r=ko(n);n.Ia.delete(e),r.O_()&&VT(n,e),n.Ia.size===0&&(r.O_()?r.L_():yi(n)&&n.Ra.set("Unknown"))}function Um(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(t).Y_(e)}function VT(t,e){t.Va.Ue(e),ko(t).Z_(e)}function Fm(t){t.Va=new e2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ko(t).start(),t.Ra.ua()}function $m(t){return yi(t)&&!ko(t).x_()&&t.Ia.size>0}function yi(t){return se(t).Ea.size===0}function LT(t){t.Va=void 0}async function aj(t){t.Ra.set("Online")}async function lj(t){t.Ia.forEach((e,n)=>{Um(t,e)})}async function uj(t,e){LT(t),$m(t)?(t.Ra.ha(e),Fm(t)):t.Ra.set("Unknown")}async function cj(t,e,n){if(t.Ra.set("Online"),e instanceof wT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){G(oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof Vu?t.Va.Ze(e):e instanceof _T?t.Va.st(e):t.Va.tt(e),!n.isEqual(oe.min()))try{const r=await kT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.Ia.get(d);h&&i.Ia.set(d,h.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const h=i.Ia.get(u);if(!h)return;i.Ia.set(u,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),VT(i,u);const p=new rs(h.target,u,d,h.sequenceNumber);Um(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G(oi,"Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!Po(e))throw e;t.Ea.add(1),await gl(t),t.Ra.set("Offline"),n||(n=()=>kT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(oi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await md(t)})}function MT(t,e){return e().catch(n=>Ic(t,n,e))}async function gd(t){const e=se(t),n=Ts(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Sm;for(;dj(e);)try{const s=await H2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,hj(e,s)}catch(s){await Ic(e,s)}UT(e)&&FT(e)}function dj(t){return yi(t)&&t.Ta.length<10}function hj(t,e){t.Ta.push(e);const n=Ts(t);n.O_()&&n.X_&&n.ea(e.mutations)}function UT(t){return yi(t)&&!Ts(t).x_()&&t.Ta.length>0}function FT(t){Ts(t).start()}async function fj(t){Ts(t).ra()}async function pj(t){const e=Ts(t);for(const n of t.Ta)e.ea(n.mutations)}async function mj(t,e,n){const r=t.Ta.shift(),s=Pm.from(r,e,n);await MT(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gd(t)}async function gj(t,e){e&&Ts(t).X_&&await async function(r,s){if(function(o){return Jk(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Ts(r).B_(),await MT(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gd(r)}}(t,e),UT(t)&&FT(t)}async function D_(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),G(oi,"RemoteStore received new credentials");const r=yi(n);n.Ea.add(3),await gl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await md(n)}async function yj(t,e){const n=se(t);e?(n.Ea.delete(2),await md(n)):e||(n.Ea.add(2),await gl(n),n.Ra.set("Unknown"))}function ko(t){return t.ma||(t.ma=function(n,r,s){const i=se(n);return i.sa(),new tj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:aj.bind(null,t),t_:lj.bind(null,t),r_:uj.bind(null,t),H_:cj.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),$m(t)?Fm(t):t.Ra.set("Unknown")):(await t.ma.stop(),LT(t))})),t.ma}function Ts(t){return t.fa||(t.fa=function(n,r,s){const i=se(n);return i.sa(),new nj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:fj.bind(null,t),r_:gj.bind(null,t),ta:pj.bind(null,t),na:mj.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await gd(t)):(await t.fa.stop(),t.Ta.length>0&&(G(oi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Bm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Bm(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zm(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),Po(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class so{static emptySet(e){return new so(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=oa(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new so;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class O_{constructor(){this.ga=new qe(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):te(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class wo{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new wo(e,n,so.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ld(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vj{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _j{constructor(){this.queries=V_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=se(n),i=s.queries;s.queries=V_(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function V_(){return new gi(t=>oT(t),ld)}async function qm(t,e){const n=se(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new vj,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=zm(o,`Initialization of query '${ji(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Hm(n)}async function Wm(t,e){const n=se(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wj(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Hm(n)}function xj(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Hm(t){t.Ca.forEach(e=>{e.next()})}var np,L_;(L_=np||(np={})).Ma="default",L_.Cache="cache";class Gm{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==np.Cache}}/**
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
 */class $T{constructor(e){this.key=e}}class BT{constructor(e){this.key=e}}class Ej{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=me(),this.mutatedKeys=me(),this.eu=aT(e),this.tu=new so(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new O_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),y=ud(this.query,p)?p:null,T=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;m&&y?m.data.isEqual(y.data)?T!==N&&(r.track({type:3,doc:y}),C=!0):this.su(m,y)||(r.track({type:2,doc:y}),C=!0,(u&&this.eu(y,u)>0||d&&this.eu(y,d)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),C=!0):m&&!y&&(r.track({type:1,doc:m}),C=!0,(u||d)&&(l=!0)),C&&(y?(o=o.add(y),i=N?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(y,T){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Rt:C})}};return N(y)-N(T)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,o.length!==0||d?{snapshot:new wo(this.query,e.tu,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new O_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=me(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new BT(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new $T(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return wo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Km="SyncEngine";class Tj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ij{constructor(e){this.key=e,this.hu=!1}}class Sj{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gi(l=>oT(l),ld),this.Iu=new Map,this.Eu=new Set,this.du=new qe(X.comparator),this.Au=new Map,this.Ru=new Dm,this.Vu={},this.mu=new Map,this.fu=_o.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Nj(t,e,n=!0){const r=KT(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await zT(r,e,n,!0),s}async function Aj(t,e){const n=KT(t);await zT(n,e,!0,!1)}async function zT(t,e,n,r){const s=await G2(t.localStore,Zn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Cj(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&OT(t.remoteStore,s),l}async function Cj(t,e,n,r,s){t.pu=(p,m,y)=>async function(N,C,x,w){let E=C.view.ru(x);E.Cs&&(E=await b_(N.localStore,C.query,!1).then(({documents:S})=>C.view.ru(S,E)));const k=w&&w.targetChanges.get(C.targetId),O=w&&w.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(E,N.isPrimaryClient,k,O);return U_(N,C.targetId,M.au),M.snapshot}(t,p,m,y);const i=await b_(t.localStore,e,!0),o=new Ej(e,i.Qs),l=o.ru(i.documents),u=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);U_(t,n,d.au);const h=new Tj(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function bj(t,e,n){const r=se(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ld(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ep(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Mm(r.remoteStore,s.targetId),rp(r,s.targetId)}).catch(Ro)):(rp(r,s.targetId),await ep(r.localStore,s.targetId,!0))}async function Rj(t,e){const n=se(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mm(n.remoteStore,r.targetId))}async function Pj(t,e,n){const r=Mj(t);try{const s=await function(o,l){const u=se(o),d=be.now(),h=l.reduce((y,T)=>y.add(T.key),me());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let T=kr(),N=me();return u.Ns.getEntries(y,h).next(C=>{T=C,T.forEach((x,w)=>{w.isValidDocument()||(N=N.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,T)).next(C=>{p=C;const x=[];for(const w of l){const E=Wk(w,p.get(w.key).overlayedDocument);E!=null&&x.push(new bs(w.key,E,J0(E.value.mapValue),Mt.exists(!0)))}return u.mutationQueue.addMutationBatch(y,d,x,l)}).next(C=>{m=C;const x=C.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(y,C.batchId,x)})}).then(()=>({batchId:m.batchId,changes:uT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Vu[o.currentUser.toKey()];d||(d=new qe(pe)),d=d.insert(l,u),o.Vu[o.currentUser.toKey()]=d}(r,s.batchId,n),await yl(r,s.changes),await gd(r.remoteStore)}catch(s){const i=zm(s,"Failed to persist write");n.reject(i)}}async function qT(t,e){const n=se(t);try{const r=await q2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Te(o.hu,14607):s.removedDocuments.size>0&&(Te(o.hu,42227),o.hu=!1))}),await yl(n,r,e)}catch(r){await Ro(r)}}function M_(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=se(o);u.onlineState=l;let d=!1;u.queries.forEach((h,p)=>{for(const m of p.Sa)m.va(l)&&(d=!0)}),d&&Hm(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kj(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new qe(X.comparator);o=o.insert(i,bt.newNoDocument(i,oe.min()));const l=me().add(i),u=new fd(oe.min(),new Map,new qe(pe),o,l);await qT(r,u),r.du=r.du.remove(i),r.Au.delete(e),Qm(r)}else await ep(r.localStore,e,!1).then(()=>rp(r,e,n)).catch(Ro)}async function jj(t,e){const n=se(t),r=e.batch.batchId;try{const s=await z2(n.localStore,e);HT(n,r,null),WT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,s)}catch(s){await Ro(s)}}async function Dj(t,e,n){const r=se(t);try{const s=await function(o,l){const u=se(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return u.mutationQueue.lookupMutationBatch(d,l).next(p=>(Te(p!==null,37113),h=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,h,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>u.localDocuments.getDocuments(d,h))})}(r.localStore,e);HT(r,e,n),WT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yl(r,s)}catch(s){await Ro(s)}}function WT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function HT(t,e,n){const r=se(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function rp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||GT(t,r)})}function GT(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Mm(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Qm(t))}function U_(t,e,n){for(const r of n)r instanceof $T?(t.Ru.addReference(r.key,e),Oj(t,r)):r instanceof BT?(G(Km,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||GT(t,r.key)):te(19791,{wu:r})}function Oj(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(G(Km,"New document in limbo: "+n),t.Eu.add(r),Qm(t))}function Qm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new X(Ae.fromString(e)),r=t.fu.next();t.Au.set(r,new Ij(n)),t.du=t.du.insert(n,r),OT(t.remoteStore,new rs(Zn(ad(n.path)),r,"TargetPurposeLimboResolution",sd.ce))}}async function yl(t,e,n){const r=se(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Vm.As(u.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,d){const h=se(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(d,m=>U.forEach(m.Es,y=>h.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>U.forEach(m.ds,y=>h.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Po(p))throw p;G(Lm,"Failed to update sequence numbers: "+p)}for(const p of d){const m=p.targetId;if(!p.fromCache){const y=h.Ms.get(m),T=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(T);h.Ms=h.Ms.insert(m,N)}}}(r.localStore,i))}async function Vj(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){G(Km,"User change. New user:",e.toKey());const r=await PT(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yl(n,r.Ls)}}function Lj(t,e){const n=se(t),r=n.Au.get(e);if(r&&r.hu)return me().add(r.key);{let s=me();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function KT(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kj.bind(null,e),e.Pu.H_=wj.bind(null,e.eventManager),e.Pu.yu=xj.bind(null,e.eventManager),e}function Mj(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dj.bind(null,e),e}class Sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return B2(this.persistence,new U2,e.initialUser,this.serializer)}Cu(e){return new RT(Om.mi,this.serializer)}Du(e){return new Q2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sc.provider={build:()=>new Sc};class Uj extends Sc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Te(this.persistence.referenceDelegate instanceof Tc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new I2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new RT(r=>Tc.mi(r,n),this.serializer)}}class sp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vj.bind(null,this.syncEngine),await yj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _j}()}createDatastore(e){const n=pd(e.databaseInfo.databaseId),r=function(i){return new ej(i)}(e.databaseInfo);return function(i,o,l,u){return new sj(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new oj(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>M_(this.syncEngine,n,0),function(){return k_.v()?new k_:new Y2}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,h){const p=new Sj(s,i,o,l,u,d);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=se(s);G(oi,"RemoteStore shutting down."),i.Ea.add(5),await gl(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}sp.provider={build:()=>new sp};/**
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
 */class Ym{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Is="FirestoreClient";class Fj{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=nd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(Is,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(Is,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sh(t,e){t.asyncQueue.verifyOperationInProgress(),G(Is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await PT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $j(t);G(Is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>D_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>D_(e.remoteStore,s)),t._onlineComponents=e}async function $j(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Is,"Using user provided OfflineComponentProvider");try{await Sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ii("Error using user provided cache. Falling back to memory cache: "+n),await Sh(t,new Sc)}}else G(Is,"Using default OfflineComponentProvider"),await Sh(t,new Uj(void 0));return t._offlineComponents}async function Jm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Is,"Using user provided OnlineComponentProvider"),await F_(t,t._uninitializedComponentsProvider._online)):(G(Is,"Using default OnlineComponentProvider"),await F_(t,new sp))),t._onlineComponents}function Bj(t){return Jm(t).then(e=>e.syncEngine)}function zj(t){return Jm(t).then(e=>e.datastore)}async function Nc(t){const e=await Jm(t),n=e.eventManager;return n.onListen=Nj.bind(null,e.syncEngine),n.onUnlisten=bj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Aj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Rj.bind(null,e.syncEngine),n}function qj(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const h=new Ym({next:m=>{h.Nu(),o.enqueueAndForget(()=>Wm(i,p));const y=m.docs.has(l);!y&&m.fromCache?d.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new Gm(ad(l.path),h,{includeMetadataChanges:!0,qa:!0});return qm(i,p)}(await Nc(t),t.asyncQueue,e,n,r)),r.promise}function Wj(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const h=new Ym({next:m=>{h.Nu(),o.enqueueAndForget(()=>Wm(i,p)),m.fromCache&&u.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),p=new Gm(l,h,{includeMetadataChanges:!0,qa:!0});return qm(i,p)}(await Nc(t),t.asyncQueue,e,n,r)),r.promise}function Hj(t,e,n){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await zj(t);r.resolve(async function(o,l,u){var N;const d=se(o),{request:h,gt:p,parent:m}=d2(d.serializer,Rk(l),u);d.connection.$o||delete h.parent;const y=(await d.Ho("RunAggregationQuery",d.serializer.databaseId,m,h,1)).filter(C=>!!C.result);Te(y.length===1,64727);const T=(N=y[0].result)==null?void 0:N.aggregateFields;return Object.keys(T).reduce((C,x)=>(C[p[x]]=T[x],C),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}/**
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
 */function QT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $_=new Map;/**
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
 */const YT="firestore.googleapis.com",B_=!0;class z_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YT,this.ssl=B_}else this.host=e.host,this.ssl=e.ssl??B_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<E2)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=QT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new U0;switch(r.type){case"firstParty":return new XP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$_.get(n);r&&(G("ComponentProvider","Removing Datastore"),$_.delete(n),r.terminate())}(this),Promise.resolve()}}function JT(t,e,n,r={}){var d;t=dt(t,vl);const s=hi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(sm(`https://${l}`),im("Firestore",!0)),i.host!==YT&&i.host!==l&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ti(u,o)&&(t._setSettings(u),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=At.MOCK_USER;else{h=iC(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new At(m)}t._authCredentials=new QP(new M0(h,p))}}/**
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
 */class ir{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ir(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fl(n,Fe._jsonSchema))return new Fe(e,r||null,new X(Ae.fromString(n.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:tt("string",Fe._jsonSchemaVersion),referencePath:tt("string")};class Ir extends ir{constructor(e,n,r){super(e,n,ad(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new X(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function ve(t,e,...n){if(t=Ie(t),Im("collection","path",e),t instanceof vl){const r=Ae.fromString(e,...n);return n_(r),new Ir(t,null,r)}{if(!(t instanceof Fe||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return n_(r),new Ir(t.firestore,null,r)}}function Xm(t,e){if(t=dt(t,vl),Im("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ir(t,null,function(r){return new mi(Ae.emptyPath(),r)}(e))}function J(t,e,...n){if(t=Ie(t),arguments.length===1&&(e=nd.newId()),Im("doc","path",e),t instanceof vl){const r=Ae.fromString(e,...n);return t_(r),new Fe(t,null,new X(r))}{if(!(t instanceof Fe||t instanceof Ir))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return t_(r),new Fe(t.firestore,t instanceof Ir?t.converter:null,new X(r))}}/**
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
 */const q_="AsyncQueue";class W_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new jT(this,"async_queue_retry"),this._c=()=>{const r=Ih();r&&G(q_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ih();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Xn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Po(e))throw e;G(q_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Pr("INTERNAL UNHANDLED ERROR: ",H_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Bm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:H_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function H_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function G_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xn extends vl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new W_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new W_(e),this._firestoreClient=void 0,await e}}}function Le(t,e){const n=typeof t=="object"?t:ll(),r=typeof t=="string"?t:vc,s=pi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=FE("firestore");i&&JT(s,...i)}return s}function vi(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Gj(t),t._firestoreClient}function Gj(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,d,h){return new mk(l,u,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,QT(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Fj(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class XT{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class ZT{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(ft.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fl(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:tt("string",en._jsonSchemaVersion),bytes:tt("string")};/**
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
 */class _i{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function eI(){return new _i(zf)}/**
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
 */class Dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(fl(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:tt("string",Dn._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fl(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new On(e.vectorValues);throw new W(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:tt("string",On._jsonSchemaVersion),vectorValues:tt("object")};/**
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
 */const Kj=/^__.*__$/;class Qj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,n,this.fieldTransforms):new pl(e,this.data,n,this.fieldTransforms)}}class tI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new bs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ac:t})}}class Zm{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Zm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ac(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(nI(this.Ac)&&Kj.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Yj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pd(e)}Cc(e,n,r,s=!1){return new Zm({Ac:e,methodName:n,Dc:r,path:ut.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wl(t){const e=t._freezeSettings(),n=pd(t._databaseId);return new Yj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eg(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);ng("Data must be an object, but it was:",o,r);const l=iI(r,o);let u,d;if(i.merge)u=new nn(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=ip(e,p,n);if(!o.contains(m))throw new W(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);aI(h,m)||h.push(m)}u=new nn(h),d=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=o.fieldTransforms;return new Qj(new qt(l),u,d)}class yd extends _l{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yd}}class tg extends _l{_toFieldTransform(e){return new $k(e.path,new Ya)}isEqual(e){return e instanceof tg}}function rI(t,e,n,r){const s=t.Cc(1,e,n);ng("Data must be an object, but it was:",s,r);const i=[],o=qt.empty();Cs(r,(u,d)=>{const h=rg(e,u,n);d=Ie(d);const p=s.yc(h);if(d instanceof yd)i.push(h);else{const m=xl(d,p);m!=null&&(i.push(h),o.set(h,m))}});const l=new nn(i);return new tI(o,l,s.fieldTransforms)}function sI(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[ip(e,r,n)],u=[s];if(i.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ip(e,i[m])),u.push(i[m+1]);const d=[],h=qt.empty();for(let m=l.length-1;m>=0;--m)if(!aI(d,l[m])){const y=l[m];let T=u[m];T=Ie(T);const N=o.yc(y);if(T instanceof yd)d.push(y);else{const C=xl(T,N);C!=null&&(d.push(y),h.set(y,C))}}const p=new nn(d);return new tI(h,p,o.fieldTransforms)}function Jj(t,e,n,r=!1){return xl(n,t.Cc(r?4:3,e))}function xl(t,e){if(oI(t=Ie(t)))return ng("Unsupported field value:",e,t),iI(t,e);if(t instanceof _l)return function(r,s){if(!nI(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=xl(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=be.fromDate(r);return{timestampValue:Ec(s.serializer,i)}}if(r instanceof be){const i=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ec(s.serializer,i)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:xT(s.serializer,r._byteString)};if(r instanceof Fe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof On)return function(o,l){return{mapValue:{fields:{[Q0]:{stringValue:Y0},[_c]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Rm(l.serializer,d)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${rd(r)}`)}(t,e)}function iI(t,e){const n={};return z0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,s)=>{const i=xl(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function oI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Dn||t instanceof en||t instanceof Fe||t instanceof _l||t instanceof On)}function ng(t,e,n){if(!oI(n)||!$0(n)){const r=rd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function ip(t,e,n){if((e=Ie(e))instanceof _i)return e._internalPath;if(typeof e=="string")return rg(t,e);throw Ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const Xj=new RegExp("[~\\*/\\[\\]]");function rg(t,e,n){if(e.search(Xj)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _i(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ac(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function aI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class lI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zj extends lI{data(){return super.data()}}function vd(t,e){return typeof e=="string"?rg(t,e):e instanceof _i?e._internalPath:e._delegate._internalPath}/**
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
 */function uI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sg{}class ig extends sg{}function sn(t,e,...n){let r=[];e instanceof sg&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof _d).length,l=i.filter(u=>u instanceof El).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class El extends ig{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new El(e,n,r)}_apply(e){const n=this._parse(e);return cI(e._query,n),new ir(e.firestore,e.converter,Kf(e._query,n))}_parse(e){const n=wl(e.firestore);return function(i,o,l,u,d,h,p){let m;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Q_(p,h);const T=[];for(const N of p)T.push(K_(u,i,N));m={arrayValue:{values:T}}}else m=K_(u,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Q_(p,h),m=Jj(l,o,p,h==="in"||h==="not-in");return et.create(d,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tl(t,e,n){const r=e,s=vd("where",t);return El._create(s,r,n)}class _d extends sg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _d(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)cI(o,u),o=Kf(o,u)}(e._query,n),new ir(e.firestore,e.converter,Kf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wd extends ig{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qa(i,o)}(e._query,this._field,this._direction);return new ir(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new mi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function jr(t,e="asc"){const n=e,r=vd("orderBy",t);return wd._create(r,n)}function K_(t,e,n){if(typeof(n=Ie(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sT(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!X.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return c_(t,new X(r))}if(n instanceof Fe)return c_(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rd(n)}.`)}function Q_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cI(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dI{convertValue(e,n="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[_c].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Qe(o.doubleValue));return new On(n)}convertGeoPoint(e){return new Dn(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=od(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=ws(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Te(CT(r),9688,{name:e});const s=new go(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function og(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function hI(){return new XT("count")}class Gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends lI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ms._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:tt("string",ms._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class Ta extends ms{data(e={}){return super.data(e)}}class gs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ta(this._firestore,this._userDataWriter,r.key,r,new Gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ta(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ta(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,h=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:eD(l.type),doc:u,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=gs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:t})}}/**
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
 */function Ve(t){t=dt(t,Fe);const e=dt(t.firestore,xn);return qj(vi(e),t._key).then(n=>fI(e,t,n))}gs._jsonSchemaVersion="firestore/querySnapshot/1.0",gs._jsonSchema={type:tt("string",gs._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};class xd extends dI{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function ht(t){t=dt(t,ir);const e=dt(t.firestore,xn),n=vi(e),r=new xd(e);return uI(t._query),Wj(n,t._query).then(s=>new gs(e,r,t,s))}function ln(t,e,n){t=dt(t,Fe);const r=dt(t.firestore,xn),s=og(t.converter,e,n);return jo(r,[eg(wl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Mt.none())])}function ag(t,e,n,...r){t=dt(t,Fe);const s=dt(t.firestore,xn),i=wl(s);let o;return o=typeof(e=Ie(e))=="string"||e instanceof _i?sI(i,"updateDoc",t._key,e,n,r):rI(i,"updateDoc",t._key,e),jo(s,[o.toMutation(t._key,Mt.exists(!0))])}function Rt(t){return jo(dt(t.firestore,xn),[new hd(t._key,Mt.none())])}function Hs(t,e){const n=dt(t.firestore,xn),r=J(t),s=og(t.converter,e);return jo(n,[eg(wl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function bn(t,...e){var u,d,h;t=Ie(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||G_(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(G_(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(d=p.error)==null?void 0:d.bind(p),e[r+2]=(h=p.complete)==null?void 0:h.bind(p)}let i,o,l;if(t instanceof Fe)o=dt(t.firestore,xn),l=ad(t._key.path),i={next:p=>{e[r]&&e[r](fI(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=dt(t,ir);o=dt(p.firestore,xn),l=p._query;const m=new xd(o);i={next:y=>{e[r]&&e[r](new gs(o,m,p,y))},error:e[r+1],complete:e[r+2]},uI(t._query)}return function(m,y,T,N){const C=new Ym(N),x=new Gm(y,C,T);return m.asyncQueue.enqueueAndForget(async()=>qm(await Nc(m),x)),()=>{C.Nu(),m.asyncQueue.enqueueAndForget(async()=>Wm(await Nc(m),x))}}(vi(o),l,s,i)}function jo(t,e){return function(r,s){const i=new Xn;return r.asyncQueue.enqueueAndForget(async()=>Pj(await Bj(r),s,i)),i.promise}(vi(t),e)}function fI(t,e,n){const r=n.docs.get(e._key),s=new xd(t);return new ms(t,s,e._key,r,new Gi(n.hasPendingWrites,n.fromCache),e.converter)}function Cc(t){return pI(t,{count:hI()})}function pI(t,e){const n=dt(t.firestore,xn),r=vi(n),s=fk(e,(i,o)=>new Qk(o,i.aggregateType,i._internalFieldPath));return Hj(r,t._query,s).then(i=>function(l,u,d){const h=new xd(l);return new ZT(u,h,d)}(n,t,i))}/**
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
 */class mI{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=wl(e)}set(e,n,r){this._verifyNotCommitted();const s=Nh(e,this._firestore),i=og(s.converter,n,r),o=eg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Mt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Nh(e,this._firestore);let o;return o=typeof(n=Ie(n))=="string"||n instanceof _i?sI(this._dataReader,"WriteBatch.update",i._key,n,r,s):rI(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Nh(e,this._firestore);return this._mutations=this._mutations.concat(new hd(n._key,Mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Nh(t,e){if((t=Ie(t)).firestore!==e)throw new W(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Oe(){return new tg("serverTimestamp")}/**
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
 */function gI(t){return vi(t=dt(t,xn)),new mI(t,e=>jo(t,e))}(function(e,n=!0){(function(s){bo=s})(Ao),Ln(new wn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xn(new YP(r.getProvider("auth-internal")),new ZP(o,r.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new go(d.options.projectId,h)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Yt(Xv,Zv,e),Yt(Xv,Zv,"esm2020")})();const tD=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:dI,AggregateField:XT,AggregateQuerySnapshot:ZT,Bytes:en,CollectionReference:Ir,DocumentReference:Fe,DocumentSnapshot:ms,FieldPath:_i,FieldValue:_l,Firestore:xn,FirestoreError:W,GeoPoint:Dn,Query:ir,QueryCompositeFilterConstraint:_d,QueryConstraint:ig,QueryDocumentSnapshot:Ta,QueryFieldFilterConstraint:El,QueryOrderByConstraint:wd,QuerySnapshot:gs,SnapshotMetadata:Gi,Timestamp:be,VectorValue:On,WriteBatch:mI,_AutoId:nd,_ByteString:ft,_DatabaseId:go,_DocumentKey:X,_EmptyAuthCredentialsProvider:U0,_FieldPath:ut,_cast:dt,_logWarn:ii,_validateIsNotUsedTogether:F0,addDoc:Hs,collection:ve,collectionGroup:Xm,connectFirestoreEmulator:JT,count:hI,deleteDoc:Rt,doc:J,documentId:eI,ensureFirestoreConfigured:vi,executeWrite:jo,getAggregateFromServer:pI,getCountFromServer:Cc,getDoc:Ve,getDocs:ht,getFirestore:Le,onSnapshot:bn,orderBy:jr,query:sn,serverTimestamp:Oe,setDoc:ln,updateDoc:ag,where:Tl,writeBatch:gI},Symbol.toStringTag,{value:"Module"}));var nD="firebase",rD="12.1.0";/**
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
 */Yt(nD,rD,"app");const yI="@firebase/installations",lg="0.6.19";/**
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
 */const vI=1e4,_I=`w:${lg}`,wI="FIS_v2",sD="https://firebaseinstallations.googleapis.com/v1",iD=60*60*1e3,oD="installations",aD="Installations";/**
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
 */const lD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ai=new fi(oD,aD,lD);function xI(t){return t instanceof Un&&t.code.includes("request-failed")}/**
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
 */function EI({projectId:t}){return`${sD}/projects/${t}/installations`}function TI(t){return{token:t.token,requestStatus:2,expiresIn:cD(t.expiresIn),creationTime:Date.now()}}async function II(t,e){const r=(await e.json()).error;return ai.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function SI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function uD(t,{refreshToken:e}){const n=SI(t);return n.append("Authorization",dD(e)),n}async function NI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cD(t){return Number(t.replace("s","000"))}function dD(t){return`${wI} ${t}`}/**
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
 */async function hD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=EI(t),s=SI(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={fid:n,authVersion:wI,appId:t.appId,sdkVersion:_I},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:TI(d.authToken)}}else throw await II("Create Installation",u)}/**
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
 */function AI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function fD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pD=/^[cdef][\w-]{21}$/,op="";function mD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=gD(t);return pD.test(n)?n:op}catch{return op}}function gD(t){return fD(t).substr(0,22)}/**
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
 */function Ed(t){return`${t.appName}!${t.appId}`}/**
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
 */const CI=new Map;function bI(t,e){const n=Ed(t);RI(n,e),yD(n,e)}function RI(t,e){const n=CI.get(t);if(n)for(const r of n)r(e)}function yD(t,e){const n=vD();n&&n.postMessage({key:t,fid:e}),_D()}let Gs=null;function vD(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=t=>{RI(t.data.key,t.data.fid)}),Gs}function _D(){CI.size===0&&Gs&&(Gs.close(),Gs=null)}/**
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
 */const wD="firebase-installations-database",xD=1,li="firebase-installations-store";let Ah=null;function ug(){return Ah||(Ah=Xc(wD,xD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(li)}}})),Ah}async function bc(t,e){const n=Ed(t),s=(await ug()).transaction(li,"readwrite"),i=s.objectStore(li),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&bI(t,e.fid),e}async function PI(t){const e=Ed(t),r=(await ug()).transaction(li,"readwrite");await r.objectStore(li).delete(e),await r.done}async function Td(t,e){const n=Ed(t),s=(await ug()).transaction(li,"readwrite"),i=s.objectStore(li),o=await i.get(n),l=e(o);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!o||o.fid!==l.fid)&&bI(t,l.fid),l}/**
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
 */async function cg(t){let e;const n=await Td(t.appConfig,r=>{const s=ED(r),i=TD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===op?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ED(t){const e=t||{fid:mD(),registrationStatus:0};return kI(e)}function TD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ai.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ID(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:SD(t)}:{installationEntry:e}}async function ID(t,e){try{const n=await hD(t,e);return bc(t.appConfig,n)}catch(n){throw xI(n)&&n.customData.serverCode===409?await PI(t.appConfig):await bc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function SD(t){let e=await Y_(t.appConfig);for(;e.registrationStatus===1;)await AI(100),e=await Y_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cg(t);return r||n}return e}function Y_(t){return Td(t,e=>{if(!e)throw ai.create("installation-not-found");return kI(e)})}function kI(t){return ND(t)?{fid:t.fid,registrationStatus:0}:t}function ND(t){return t.registrationStatus===1&&t.registrationTime+vI<Date.now()}/**
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
 */async function AD({appConfig:t,heartbeatServiceProvider:e},n){const r=CD(t,n),s=uD(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const o={installation:{sdkVersion:_I,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(o)},u=await NI(()=>fetch(r,l));if(u.ok){const d=await u.json();return TI(d)}else throw await II("Generate Auth Token",u)}function CD(t,{fid:e}){return`${EI(t)}/${e}/authTokens:generate`}/**
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
 */async function dg(t,e=!1){let n;const r=await Td(t.appConfig,i=>{if(!jI(i))throw ai.create("not-registered");const o=i.authToken;if(!e&&PD(o))return i;if(o.requestStatus===1)return n=bD(t,e),i;{if(!navigator.onLine)throw ai.create("app-offline");const l=jD(i);return n=RD(t,l),l}});return n?await n:r.authToken}async function bD(t,e){let n=await J_(t.appConfig);for(;n.authToken.requestStatus===1;)await AI(100),n=await J_(t.appConfig);const r=n.authToken;return r.requestStatus===0?dg(t,e):r}function J_(t){return Td(t,e=>{if(!jI(e))throw ai.create("not-registered");const n=e.authToken;return DD(n)?{...e,authToken:{requestStatus:0}}:e})}async function RD(t,e){try{const n=await AD(t,e),r={...e,authToken:n};return await bc(t.appConfig,r),n}catch(n){if(xI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await PI(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await bc(t.appConfig,r)}throw n}}function jI(t){return t!==void 0&&t.registrationStatus===2}function PD(t){return t.requestStatus===2&&!kD(t)}function kD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iD}function jD(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function DD(t){return t.requestStatus===1&&t.requestTime+vI<Date.now()}/**
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
 */async function OD(t){const e=t,{installationEntry:n,registrationPromise:r}=await cg(e);return r?r.catch(console.error):dg(e).catch(console.error),n.fid}/**
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
 */async function VD(t,e=!1){const n=t;return await LD(n),(await dg(n,e)).token}async function LD(t){const{registrationPromise:e}=await cg(t);e&&await e}/**
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
 */function MD(t){if(!t||!t.options)throw Ch("App Configuration");if(!t.name)throw Ch("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ch(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ch(t){return ai.create("missing-app-config-values",{valueName:t})}/**
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
 */const DI="installations",UD="installations-internal",FD=t=>{const e=t.getProvider("app").getImmediate(),n=MD(e),r=pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$D=t=>{const e=t.getProvider("app").getImmediate(),n=pi(e,DI).getImmediate();return{getId:()=>OD(n),getToken:s=>VD(n,s)}};function BD(){Ln(new wn(DI,FD,"PUBLIC")),Ln(new wn(UD,$D,"PRIVATE"))}BD();Yt(yI,lg);Yt(yI,lg,"esm2020");/**
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
 */const zD="/firebase-messaging-sw.js",qD="/firebase-cloud-messaging-push-scope",OI="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",WD="https://fcmregistrations.googleapis.com/v1",VI="google.c.a.c_id",HD="google.c.a.c_l",GD="google.c.a.ts",KD="google.c.a.e",X_=1e4;var Z_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Z_||(Z_={}));/**
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
 */var Za;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Za||(Za={}));/**
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
 */function mr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function QD(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const bh="fcm_token_details_db",YD=5,ew="fcm_token_object_Store";async function JD(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(bh))return null;let e=null;return(await Xc(bh,YD,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(ew))return;const l=o.objectStore(ew),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(s===2){const d=u;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:mr(d.vapidKey)}}}else if(s===3){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:mr(d.auth),p256dh:mr(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:mr(d.vapidKey)}}}else if(s===4){const d=u;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:mr(d.auth),p256dh:mr(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:mr(d.vapidKey)}}}}}})).close(),await gh(bh),await gh("fcm_vapid_details_db"),await gh("undefined"),XD(e)?e:null}function XD(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const ZD="firebase-messaging-database",eO=1,el="firebase-messaging-store";let Rh=null;function LI(){return Rh||(Rh=Xc(ZD,eO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(el)}}})),Rh}async function tO(t){const e=MI(t),r=await(await LI()).transaction(el).objectStore(el).get(e);if(r)return r;{const s=await JD(t.appConfig.senderId);if(s)return await hg(t,s),s}}async function hg(t,e){const n=MI(t),s=(await LI()).transaction(el,"readwrite");return await s.objectStore(el).put(e,n),await s.done,e}function MI({appConfig:t}){return t.appId}/**
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
 */const nO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Pt=new fi("messaging","Messaging",nO);/**
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
 */async function rO(t,e){const n=await pg(t),r=UI(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(fg(t.appConfig),s)).json()}catch(o){throw Pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Pt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Pt.create("token-subscribe-no-token");return i.token}async function sO(t,e){const n=await pg(t),r=UI(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${fg(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Pt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Pt.create("token-update-no-token");return i.token}async function iO(t,e){const r={method:"DELETE",headers:await pg(t)};try{const i=await(await fetch(`${fg(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Pt.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function fg({projectId:t}){return`${WD}/projects/${t}/registrations`}async function pg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function UI({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==OI&&(s.web.applicationPubKey=r),s}/**
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
 */const oO=7*24*60*60*1e3;async function aO(t){const e=await uO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:mr(e.getKey("auth")),p256dh:mr(e.getKey("p256dh"))},r=await tO(t.firebaseDependencies);if(r){if(cO(r.subscriptionOptions,n))return Date.now()>=r.createTime+oO?lO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await iO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return tw(t.firebaseDependencies,n)}else return tw(t.firebaseDependencies,n)}async function lO(t,e){try{const n=await sO(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await hg(t.firebaseDependencies,r),n}catch(n){throw n}}async function tw(t,e){const r={token:await rO(t,e),createTime:Date.now(),subscriptionOptions:e};return await hg(t,r),r.token}async function uO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:QD(e)})}function cO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function nw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return dO(e,t),hO(e,t),fO(e,t),e}function dO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function hO(t,e){e.data&&(t.data=e.data)}function fO(t,e){var s,i,o,l;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;t.fcmOptions={};const n=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function pO(t){return typeof t=="object"&&!!t&&VI in t}/**
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
 */function mO(t){if(!t||!t.options)throw Ph("App Configuration Object");if(!t.name)throw Ph("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ph(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ph(t){return Pt.create("missing-app-config-values",{valueName:t})}/**
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
 */class gO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=mO(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function yO(t){try{t.swRegistration=await navigator.serviceWorker.register(zD,{scope:qD}),t.swRegistration.update().catch(()=>{}),await vO(t.swRegistration)}catch(e){throw Pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function vO(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${X_} ms`)),X_),s=t.installing||t.waiting;t.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function _O(t,e){if(!e&&!t.swRegistration&&await yO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Pt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function wO(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=OI)}/**
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
 */async function FI(t,e){if(!navigator)throw Pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Pt.create("permission-blocked");return await wO(t,e==null?void 0:e.vapidKey),await _O(t,e==null?void 0:e.serviceWorkerRegistration),aO(t)}/**
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
 */async function xO(t,e,n){const r=EO(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[VI],message_name:n[HD],message_time:n[GD],message_device_time:Math.floor(Date.now()/1e3)})}function EO(t){switch(t){case Za.NOTIFICATION_CLICKED:return"notification_open";case Za.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function TO(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Za.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(nw(n)):t.onMessageHandler.next(nw(n)));const r=n.data;pO(r)&&r[KD]==="1"&&await xO(t,n.messageType,r)}const rw="@firebase/messaging",sw="0.12.23";/**
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
 */const IO=t=>{const e=new gO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>TO(e,n)),e},SO=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>FI(e,r)}};function NO(){Ln(new wn("messaging",IO,"PUBLIC")),Ln(new wn("messaging-internal",SO,"PRIVATE")),Yt(rw,sw),Yt(rw,sw,"esm2020")}/**
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
 */async function $I(){try{await qE()}catch{return!1}return typeof window<"u"&&zE()&&mC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function AO(t,e){if(!navigator)throw Pt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function CO(t=ll()){return $I().then(e=>{if(!e)throw Pt.create("unsupported-browser")},e=>{throw Pt.create("indexed-db-unsupported")}),pi(Ie(t),"messaging").getImmediate()}async function bO(t,e){return t=Ie(t),FI(t,e)}function RO(t,e){return t=Ie(t),AO(t,e)}NO();const mg={apiKey:"AIzaSyAvTkBdah-m0JBKF2hPh2ra95ZrFfFXPZs",authDomain:"immanuel-app.firebaseapp.com",projectId:"immanuel-app",storageBucket:"immanuel-app.firebasestorage.app",messagingSenderId:"815824103273",appId:"1:815824103273:web:3817385bebff5f704a3ff8",measurementId:"G-P6WR1NQRB8"};function PO(t){const e=Object.entries(t).filter(([,n])=>!n||String(n).trim()==="").map(([n])=>n);if(e.length){const n=Object.fromEntries(Object.entries(t).map(([r,s])=>[r,s&&(typeof s=="string"?s.slice(0,6)+"…":s)]));throw console.error("[firebase] Missing config keys:",e,`
Loaded values:`,n),new Error("Firebase configuration is incomplete. Missing: "+e.join(", "))}}PO(mg);const ne=wb().length?ll():GE(mg),tl=Ke(ne),gg=Le(ne),kO=new mn;kO.setCustomParameters({prompt:"select_account"});typeof window<"u"&&(window.__FIREBASE_CONFIG__=mg);async function Id(){try{return await $I()?CO(ne):null}catch{return null}}const BI=R.createContext(void 0);function jO({children:t}){const e=R.useMemo(()=>Ke(ne),[]),n=R.useMemo(()=>Le(ne),[]),[r,s]=R.useState(e.currentUser),[i,o]=R.useState(!0),[l,u]=R.useState(!1);async function d(N){if(!N){u(!1);return}try{const C=N.uid,w=(await Ve(J(n,"admins",C))).exists();let E=!1;try{const k=sn(Xm(n,"groupAdmins"),Tl("uid","==",C));E=!(await ht(k)).empty}catch{E=!1}u(w||E)}catch{u(!1)}}R.useEffect(()=>{const N=sr(e,async C=>{s(C),await d(C),o(!1)});return()=>N()},[e]);const h=async(N,C)=>{await v0(e,N,C),await d(e.currentUser)},p=async()=>{const N=new mn;await Em(e,N),await d(e.currentUser)},m=async()=>{await Uf(e),u(!1)},y=async()=>{await d(e.currentUser)},T=R.useMemo(()=>({user:r,loading:i,isAdmin:l,login:h,signInWithGoogle:p,logout:m,refresh:y}),[r,i,l]);return c.jsx(BI.Provider,{value:T,children:t})}function Sd(){const t=R.useContext(BI);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}function $n({label:t="Loading..."}){return c.jsxs("div",{className:"flex items-center gap-3 text-slate-500 py-6",children:[c.jsxs("svg",{className:"animate-spin h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[c.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),c.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]}),c.jsx("span",{children:t})]})}function hn({children:t}){const e=Ke(ne),[n,r]=q.useState(!1),[s,i]=q.useState(e.currentUser);return q.useEffect(()=>{const o=sr(e,l=>{i(l),r(!0)});return()=>o()},[e]),n?s?c.jsx(c.Fragment,{children:t}):c.jsx(Yn,{to:"/login",replace:!0}):c.jsx("div",{className:"max-w-xl mx-auto p-6",children:c.jsx($n,{label:"Checking authentication…"})})}function DO(){var l;const t=Ke(ne),e=Le(ne),[n,r]=R.useState(!0),[s,i]=R.useState(null),o=(l=t.currentUser)==null?void 0:l.uid;return R.useEffect(()=>{let u=!0;async function d(){if(!o){i(null),r(!1);return}r(!0);try{const h=J(e,"users",o),p=await Ve(h);if(p.exists()){if(!u)return;i(p.data()||{})}else{await ln(h,{createdAt:Oe()},{merge:!0});const m=await Ve(h);if(!u)return;i(m.data()||{})}}finally{r(!1)}}return d(),()=>{u=!1}},[e,o]),{loading:n,profile:s,uid:o}}function OO(t){return t?!!(t.displayName&&String(t.displayName).trim().length>1):!1}function Ot({children:t}){const e=Ke(ne),{loading:n,profile:r}=DO(),[s,i]=q.useState(!1),o=e.currentUser,l=En();if(R.useEffect(()=>{const h=sr(e,()=>i(!0));return()=>h()},[e]),!s||n)return c.jsx("div",{className:"max-w-xl mx-auto p-6",children:c.jsx($n,{label:"Loading your profile…"})});if(!o)return c.jsx(Yn,{to:"/login",replace:!0});const u=OO(r),d=l.pathname==="/welcome";return!u&&!d?c.jsx(Yn,{to:"/welcome",replace:!0}):u&&d?c.jsx(Yn,{to:"/dashboard",replace:!0}):c.jsx(c.Fragment,{children:t})}function VO({label:t="Checking admin access…"}){return c.jsx("div",{className:"max-w-xl mx-auto p-6 text-slate-700",children:t})}function Vs({children:t}){const e=Ke(ne),n=Le(ne),[r,s]=q.useState(!1),[i,o]=q.useState(null),[l,u]=q.useState(null);return q.useEffect(()=>{const d=sr(e,async h=>{if(s(!0),!h){o(!1);return}try{const p=await Ve(J(n,"admins",h.uid));o(p.exists())}catch(p){u((p==null?void 0:p.message)||String(p)),o(!1)}});return()=>d()},[e,n]),!r||i===null?c.jsx(VO,{}):e.currentUser?i?c.jsx(c.Fragment,{children:t}):c.jsx(Yn,{to:"/dashboard",replace:!0}):c.jsx(Yn,{to:"/login",replace:!0})}function LO({label:t="Checking access…"}){return c.jsx("div",{className:"max-w-xl mx-auto p-6 text-slate-700",children:t})}function kh({children:t}){const{slug:e}=di(),n=e,r=Ke(ne),s=Le(ne),[i,o]=q.useState(!1),[l,u]=q.useState(null);return q.useEffect(()=>{const d=sr(r,async h=>{if(o(!0),!h||!n){u(!1);return}try{if((await Ve(J(s,"admins",h.uid))).exists()){u(!0);return}const m=await Ve(J(s,`groups/${n}/groupAdmins/${h.uid}`));u(m.exists())}catch{u(!1)}});return()=>d()},[r,s,n]),!i||l===null?c.jsx(LO,{}):l?c.jsx(c.Fragment,{children:t}):c.jsx(Yn,{to:"/dashboard",replace:!0})}function zI({group:t,isMember:e,footer:n}){const r=t.name||t.title||iw(t.id),s=t.description||"",i=t.parent?`Parent: ${iw(t.parent)}`:null;return c.jsxs("div",{className:"rounded-xl border border-border bg-card p-4 flex flex-col justify-between shadow-sm",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsx("h3",{className:"text-lg font-semibold text-accent",children:r}),e&&c.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-700 border border-emerald-200",children:"Member"})]}),i&&c.jsx("p",{className:"text-xs text-text2 mt-1",children:i}),s&&c.jsx("p",{className:"text-sm text-text2 mt-3",children:s})]}),c.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[e?c.jsx(fe,{to:`/groups/${t.id}`,className:"inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800",children:"View"}):c.jsx("button",{type:"button",disabled:!0,className:"inline-flex items-center rounded-lg bg-slate-200 text-slate-500 px-3 py-1.5 text-sm cursor-not-allowed",title:"Join this group to view",children:"View"}),n]})]})}function iw(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function MO({groupId:t}){const[e,n]=R.useState("none"),[r,s]=R.useState(!1),i=Ke(ne),o=Le(ne),l=i.currentUser;R.useEffect(()=>{let h=!0;async function p(){if(!l)return;const m=ve(o,`users/${l.uid}/memberships`),y=sn(m,Tl("groupId","==",t)),T=await ht(y);if(!h)return;if(!T.empty){n("member");return}const N=J(o,`groups/${t}/membershipRequests/${l.uid}`),C=await Ve(N);h&&n(C.exists()?"pending":"none")}return p(),()=>{h=!1}},[o,l,t]);async function u(){if(l){s(!0);try{const h=J(o,`users/${l.uid}/membershipRequests/${t}`),p=J(o,`groups/${t}/membershipRequests/${l.uid}`),m={uid:l.uid,groupId:t,createdAt:Oe(),displayName:l.displayName||l.email||"Member"};await Promise.all([ln(h,m),ln(p,m)]),n("pending")}finally{s(!1)}}}async function d(){if(l){s(!0);try{const h=J(o,`users/${l.uid}/membershipRequests/${t}`),p=J(o,`groups/${t}/membershipRequests/${l.uid}`);await Promise.all([Rt(h),Rt(p)]),n("none")}finally{s(!1)}}}return l?e==="member"?c.jsx("span",{className:"text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700",children:"Member"}):e==="pending"?c.jsx("button",{onClick:d,className:"text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60",disabled:r,title:"Cancel request",children:"Pending — Cancel"}):c.jsx("button",{onClick:u,className:"text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:opacity-60",disabled:r,children:"Request to Join"}):null}function UO(){const t=R.useMemo(()=>Le(ne),[]),e=Ke(ne),[n,r]=R.useState([]),[s,i]=R.useState(new Set),[o,l]=R.useState(!0);R.useEffect(()=>{let d=!1;async function h(){try{const m=(await ht(sn(ve(t,"groups"),jr("name")))).docs.map(y=>({id:y.id,...y.data()}));if(d||r(m),e.currentUser){const y=e.currentUser.uid,T=await ht(ve(t,`users/${y}/memberships`));d||i(new Set(T.docs.map(N=>N.id)))}}finally{d||l(!1)}}return h(),()=>{d=!0}},[t,e.currentUser]);const u=R.useMemo(()=>n.filter(d=>!s.has(d.id)),[n,s]);return o?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading groups…"})})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-4",children:"Explore Groups"}),u.length>0?c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:u.map(d=>c.jsx(zI,{group:d,isMember:!1,footer:c.jsx(MO,{groupId:d.id})},d.id))}):c.jsx("div",{className:"rounded-xl border border-border bg-card p-6",children:c.jsx("p",{className:"text-text2",children:"You’ve already joined all available groups."})})]})})}function FO(){const{slug:t=""}=di(),e=q.useMemo(()=>Le(ne),[]),n=Ke(ne),[r,s]=q.useState(null),[i,o]=q.useState(!1),[l,u]=q.useState(!1),[d,h]=q.useState(!0),[p,m]=q.useState([]),[y,T]=q.useState([]),[N,C]=q.useState([]),[x,w]=q.useState(""),[E,k]=q.useState(!1),[O,M]=q.useState(!1),[S,v]=q.useState(null),[I,A]=q.useState([]),[P,j]=q.useState(""),[b,pt]=q.useState(!1),[Tn,or]=q.useState({}),[Y,$]=q.useState(""),[H,Q]=q.useState(""),[ge,le]=q.useState(""),[ee,nt]=q.useState(null),[wt,We]=q.useState(""),[Ce,Dt]=q.useState(""),[ar,lr]=q.useState(""),[ur,Mr]=q.useState(!1),[Ur,Jt]=q.useState(null),[Rs,Il]=q.useState(""),[wi,Sl]=q.useState({}),[xi,Ei]=q.useState(""),[Do,Nl]=q.useState(!1),[Ti,cr]=q.useState(""),[Al,Je]=q.useState(!1),ot=q.useMemo(()=>Object.values(wi).some(Boolean),[wi]);function Ii(F,ue){return[F,ue].sort().join("_")}async function Si(F){try{return(await Ve(F)).exists()}catch{return!1}}q.useEffect(()=>{let F=!1;async function ue(){try{if(!t)return;try{const ie=await Ve(J(e,"groups",t));ie.exists()&&!F&&s({id:ie.id,...ie.data()})}catch(ie){console.error("Failed to load group doc",ie)}let ae=!1,ce=!1;const _e=n.currentUser;if(_e){const ie=_e.uid;if(await Si(J(e,"admins",ie)))ae=!0,ce=!0;else if(await Si(J(e,`groups/${t}/groupAdmins/${ie}`)))ae=!0,ce=!0;else if(await Si(J(e,`users/${ie}/memberships/${t}`)))ae=!0;else try{ae=(await ht(ve(e,`users/${ie}/memberships`))).docs.some(zn=>{const dn=zn.data();return(dn==null?void 0:dn.groupId)===t||(dn==null?void 0:dn.groupSlug)===t})}catch(Bn){console.warn("Membership scan failed",Bn)}}F||(u(ce),o(ae))}finally{F||h(!1)}}return ue(),()=>{F=!0}},[e,n.currentUser,t]),q.useEffect(()=>{if(!i||!t)return;const F=bn(ve(e,`groups/${t}/resources`),ce=>{const _e=ce.docs.map(ie=>{var re,xt,Me;return{id:ie.id,title:((re=ie.data())==null?void 0:re.title)||ie.id,url:((xt=ie.data())==null?void 0:xt.url)||"#",note:((Me=ie.data())==null?void 0:Me.note)||""}});m(_e)}),ue=bn(ve(e,`groups/${t}/members`),ce=>{const _e=ce.docs.map(ie=>({uid:ie.id,...ie.data()}));T(_e)}),ae=bn(sn(ve(e,`groups/${t}/messages`),jr("createdAt","asc")),async ce=>{const _e=ce.docs.map(re=>{var xt,Me,Bn,zn;return{id:re.id,uid:(xt=re.data())==null?void 0:xt.uid,displayName:(Me=re.data())==null?void 0:Me.displayName,text:(Bn=re.data())==null?void 0:Bn.text,createdAt:(zn=re.data())==null?void 0:zn.createdAt}}),ie=await Promise.all(_e.map(async re=>{var xt;try{const Bn=((xt=(await Cc(ve(e,`groups/${t}/messages/${re.id}/replies`))).data())==null?void 0:xt.count)??0;return{...re,replyCount:Number(Bn)}}catch{return{...re,replyCount:0}}}));C(ie)});return()=>{F(),ue(),ae()}},[e,t,i]),q.useEffect(()=>{if(!i||!t||!n.currentUser)return;const F=n.currentUser.uid,ue=bn(sn(ve(e,`users/${F}/threadReads`),Tl("groupId","==",t)),ae=>{const ce={};ae.forEach(_e=>{const ie=_e.data(),re=(ie==null?void 0:ie.messageId)||"";re&&(ce[re]={lastReplyCount:ie.lastReplyCount,lastViewedAt:ie.lastViewedAt})}),or(ce)});return()=>ue()},[e,t,i,n.currentUser]);async function Cl(F){var ce;F.preventDefault(),Jt(null);const ue=Y.trim(),ae=H.trim();if(!ue||!ae){Jt("Please enter a title and URL.");return}Mr(!0);try{await Hs(ve(e,`groups/${t}/resources`),{title:ue,url:ae,note:ge.trim()||"",createdAt:Oe(),createdBy:((ce=n.currentUser)==null?void 0:ce.uid)||null}),$(""),Q(""),le("")}catch(_e){const ie=(_e==null?void 0:_e.message)||"Could not add resource.";Jt(ie)}finally{Mr(!1)}}async function Nd(){var ae;if(!ee)return;Jt(null);const F=wt.trim(),ue=Ce.trim();if(!F||!ue){Jt("Please enter a title and URL.");return}Mr(!0);try{await ag(J(e,`groups/${t}/resources/${ee}`),{title:F,url:ue,note:ar.trim()||"",updatedAt:Oe(),updatedBy:((ae=n.currentUser)==null?void 0:ae.uid)||null}),nt(null),We(""),Dt(""),lr("")}catch(ce){const _e=(ce==null?void 0:ce.message)||"Could not save changes.";Jt(_e)}finally{Mr(!1)}}function Ps(F){nt(F.id),We(F.title),Dt(F.url),lr(F.note||""),Jt(null)}async function bl(F){if(Jt(null),!!window.confirm("Delete this resource?"))try{await Rt(J(e,`groups/${t}/resources/${F}`))}catch(ue){const ae=(ue==null?void 0:ue.message)||"Could not delete resource.";Jt(ae)}}async function Rl(F){F.preventDefault();const ue=x.trim();if(!(!ue||!n.currentUser)){k(!0);try{await Hs(ve(e,`groups/${t}/messages`),{uid:n.currentUser.uid,displayName:n.currentUser.displayName||"Member",text:ue,createdAt:Oe()}),w("")}finally{k(!1)}}}async function Oo(F){window.confirm("Delete this message?")&&await Rt(J(e,`groups/${t}/messages/${F}`))}const dr=q.useRef(null);async function Ad(F){var ae;v(F),M(!0);try{if(n.currentUser){const ce=n.currentUser.uid,_e=await Cc(ve(e,`groups/${t}/messages/${F.id}/replies`)),ie=Number(((ae=_e.data())==null?void 0:ae.count)||0);await ln(J(e,`users/${ce}/threadReads/${t}__${F.id}`),{groupId:t,messageId:F.id,lastReplyCount:ie,lastViewedAt:Oe()},{merge:!0})}}catch{}dr.current&&(dr.current(),dr.current=null);const ue=bn(sn(ve(e,`groups/${t}/messages/${F.id}/replies`),jr("createdAt","asc")),ce=>{const _e=ce.docs.map(ie=>{const re=ie.data();return{id:ie.id,uid:(re==null?void 0:re.uid)||"",displayName:(re==null?void 0:re.displayName)||void 0,text:(re==null?void 0:re.text)||"",createdAt:re==null?void 0:re.createdAt}});A(_e)});dr.current=ue}function Ni(){M(!1),v(null),A([]),dr.current&&(dr.current(),dr.current=null)}async function Pl(F){if(F.preventDefault(),!S||!n.currentUser)return;const ue=P.trim();if(ue){pt(!0);try{await Hs(ve(e,`groups/${t}/messages/${S.id}/replies`),{uid:n.currentUser.uid,displayName:n.currentUser.displayName||"Member",text:ue,createdAt:Oe()}),j("")}catch(ae){alert(ae&&ae.message||"Could not post reply. Check Firestore rules and your connection.")}finally{pt(!1)}}}const Vo=q.useMemo(()=>{var ae;const F=(ae=n.currentUser)==null?void 0:ae.uid,ue=Rs.trim().toLowerCase();return y.filter(ce=>ce.uid!==F).filter(ce=>{if(!ue)return!0;const _e=(ce.displayName||"").toLowerCase(),ie=(ce.email||"").toLowerCase();return _e.includes(ue)||ie.includes(ue)||ce.uid.toLowerCase().includes(ue)})},[y,Rs,n.currentUser]);async function ks(F){var _e,ie;F.preventDefault(),cr(""),Je(!1);const ue=(_e=n.currentUser)==null?void 0:_e.uid;if(!ue){cr("You must be signed in.");return}const ae=xi.trim();if(!ae){cr("Enter a message.");return}const ce=Object.entries(wi).filter(([,re])=>re).map(([re])=>re);if(ce.length===0){cr("Select at least one member.");return}Nl(!0);try{for(const re of ce){const xt=Ii(ue,re);await Hs(ve(e,`groups/${t}/directMessages/${xt}/messages`),{text:ae,from:ue,to:re,displayName:((ie=n.currentUser)==null?void 0:ie.displayName)||"Member",createdAt:Oe()})}Ei(""),Sl({}),Je(!0),window.setTimeout(()=>Je(!1),2e3)}catch(re){const xt=(re==null?void 0:re.message)||"Failed to send DM(s).";cr(xt)}finally{Nl(!1)}}return d?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading group…"})})}):r?i?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:r.name||t}),r.description&&c.jsx("p",{className:"text-sm text-text2 mt-2",children:r.description}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("div",{className:"flex items-center justify-between",children:c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Resources"})}),l&&c.jsxs("form",{onSubmit:Cl,className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{className:"sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Title",value:Y,onChange:F=>$(F.target.value)}),c.jsx("input",{className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"https://...",value:H,onChange:F=>Q(F.target.value)}),c.jsx("div",{className:"sm:col-span-6",children:c.jsx("textarea",{className:"w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Optional note (description)…",value:ge,onChange:F=>le(F.target.value)})}),c.jsxs("div",{className:"sm:col-span-6",children:[c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm",disabled:ur,children:ur?"Saving…":"Add resource"}),Ur&&c.jsx("span",{className:"ml-3 text-sm text-rose-700",children:Ur})]})]}),c.jsxs("ul",{className:"mt-3 divide-y divide-border",children:[p.map(F=>c.jsxs("li",{className:"py-2 flex items-center justify-between gap-3",children:[c.jsxs("div",{children:[c.jsx("a",{href:F.url,target:"_blank",rel:"noreferrer",className:"text-sm text-accent underline underline-offset-2 break-all",children:F.title}),F.note&&c.jsx("p",{className:"text-xs text-text2 mt-1",children:F.note})]}),l&&c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{type:"button",onClick:()=>Ps(F),className:"text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted",children:"Edit"}),c.jsx("button",{type:"button",onClick:()=>bl(F.id),className:"text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50",children:"Remove"})]})]},F.id)),p.length===0&&c.jsx("li",{className:"py-2 text-sm text-text2",children:"No resources yet."})]}),ee&&c.jsxs("form",{onSubmit:F=>{F.preventDefault(),Nd()},className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{className:"sm:col-span-2 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Title",value:wt,onChange:F=>We(F.target.value)}),c.jsx("input",{className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"https://...",value:Ce,onChange:F=>Dt(F.target.value)}),c.jsx("div",{className:"sm:col-span-6",children:c.jsx("textarea",{className:"w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",placeholder:"Optional note (description)…",value:ar,onChange:F=>lr(F.target.value)})}),c.jsxs("div",{className:"sm:col-span-6 flex items-center gap-2",children:[c.jsx("button",{className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white text-sm",disabled:ur,children:ur?"Saving…":"Save changes"}),c.jsx("button",{type:"button",onClick:()=>{nt(null),We(""),Dt(""),lr("")},className:"text-sm rounded-lg border border-border px-3 py-2 hover:bg-muted",children:"Cancel"}),Ur&&c.jsx("span",{className:"text-sm text-rose-700",children:Ur})]})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5 relative",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Messages"}),c.jsx("div",{className:"mt-3 space-y-2 max-h-80 overflow-auto pr-1",children:N.length>0?N.map(F=>{var _e,ie;const ue=((_e=Tn[F.id])==null?void 0:_e.lastReplyCount)||0,ae=F.replyCount||0,ce=ae>ue;return c.jsx("div",{className:"rounded-lg border border-slate-700 px-3 py-2",children:c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm",children:c.jsx("span",{className:"font-medium",children:F.displayName||"Member"})}),c.jsx("p",{className:"text-sm text-slate-200 whitespace-pre-wrap",children:F.text})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[ce&&ae>0&&c.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full font-medium",style:{backgroundColor:"#919FAA",color:"#ffffff"},children:"New replies"}),c.jsx("button",{onClick:()=>{Ad(F)},className:"text-xs rounded-lg border border-border px-2 py-1 hover:bg-muted",title:"View thread / Reply",children:ae>0?`View thread (${ae})`:"Reply"}),(l||((ie=n.currentUser)==null?void 0:ie.uid)===F.uid)&&c.jsx("button",{onClick:()=>{Oo(F.id)},className:"text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit",children:"Delete"})]})]})},F.id)}):c.jsx("p",{className:"text-sm text-text2",children:"No messages yet."})}),c.jsxs("form",{onSubmit:Rl,className:"mt-3 flex gap-2",children:[c.jsx("input",{type:"text",value:x,onChange:F=>w(F.target.value),placeholder:"Write a message…",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"}),c.jsx("button",{type:"submit",disabled:E||!x.trim(),className:"rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800 disabled:opacity-60",children:E?"Sending…":"Send"})]}),O&&S&&c.jsxs("div",{className:"fixed inset-0 z-50",children:[c.jsx("button",{className:"absolute inset-0 bg-black/60",onClick:Ni,"aria-label":"Close thread overlay"}),c.jsxs("div",{className:"absolute right-0 top-0 h-full w-full sm:w-[28rem] bg-slate-900 text-white border-l border-slate-800 shadow-xl p-4 overflow-y-auto",children:[c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{className:"pr-6",children:[c.jsx("p",{className:"text-sm",children:c.jsx("span",{className:"font-medium",children:S.displayName||"Member"})}),c.jsx("p",{className:"text-sm text-slate-200 whitespace-pre-wrap",children:S.text})]}),c.jsx("button",{onClick:Ni,className:"p-2 rounded-md hover:bg-muted","aria-label":"Close thread",children:"✕"})]}),c.jsx("div",{className:"mt-4 space-y-2",children:I.length===0?c.jsx("p",{className:"text-sm text-slate-200",children:"No replies yet."}):I.map(F=>c.jsxs("div",{className:"rounded-lg border border-slate-700 px-3 py-2",children:[c.jsx("p",{className:"text-sm",children:c.jsx("span",{className:"font-medium",children:F.displayName||"Member"})}),c.jsx("p",{className:"text-sm text-slate-200 whitespace-pre-wrap",children:F.text})]},F.id))}),c.jsxs("form",{onSubmit:Pl,className:"mt-3 flex gap-2 sticky bottom-2 pt-2 bg-slate-900",children:[c.jsx("input",{type:"text",value:P,onChange:F=>j(F.target.value),placeholder:"Write a reply…",className:"flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm outline-none text-white placeholder:text-slate-400"}),c.jsx("button",{type:"submit",disabled:b||!P.trim(),className:"rounded-lg bg-slate-100 text-slate-900 px-3 py-1.5 text-sm hover:bg-white disabled:opacity-60",children:b?"Sending…":"Reply"})]})]})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Direct Messages"}),c.jsx("p",{className:"text-sm text-text2 mt-1",children:"Select one or more members and send a private message."}),c.jsxs("div",{className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{type:"text",value:Rs,onChange:F=>Il(F.target.value),placeholder:"Search members…",className:"sm:col-span-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none","aria-label":"Filter members for DM"}),c.jsx("div",{className:"sm:col-span-3 max-h-48 overflow-auto rounded-lg border border-border bg-background p-2",children:Vo.length===0?c.jsx("p",{className:"text-xs text-text2",children:"No members to message."}):c.jsx("ul",{className:"space-y-1",children:Vo.map(F=>c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx("input",{id:`dm-${F.uid}`,type:"checkbox",checked:!!wi[F.uid],onChange:ue=>Sl(ae=>({...ae,[F.uid]:ue.target.checked})),className:"h-4 w-4"}),c.jsxs("label",{htmlFor:`dm-${F.uid}`,className:"text-sm",children:[F.displayName||F.uid,F.email?` • ${F.email}`:""]})]},F.uid))})})]}),c.jsxs("form",{onSubmit:ks,className:"mt-3 grid gap-2 sm:grid-cols-6",children:[c.jsx("textarea",{value:xi,onChange:F=>Ei(F.target.value),placeholder:"Write a private message…",className:"sm:col-span-5 min-h-[3.25rem] rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"}),c.jsx("div",{className:"sm:col-span-1",children:c.jsx("button",{type:"submit",disabled:Do||!ot||!xi.trim(),className:"w-full rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-60",title:ot?void 0:"Select at least one member",children:Do?"Sending…":"Send DM"})})]}),Ti&&c.jsx("p",{className:"mt-2 text-sm text-rose-700",children:Ti}),Al&&c.jsx("p",{className:"mt-2 text-sm text-emerald-700",children:"Message sent."})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Team"}),y.length>0?c.jsx("ul",{className:"mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2",children:y.map(F=>c.jsxs("li",{className:"rounded-lg border border-border px-3 py-2",children:[c.jsx("p",{className:"text-sm",children:F.displayName||F.uid}),F.role&&c.jsx("p",{className:"text-xs text-text2",children:F.role}),F.email&&c.jsx("p",{className:"text-xs text-text2",children:F.email})]},F.uid))}):c.jsx("p",{className:"text-sm text-text2 mt-2",children:"No members are listed for this group yet."})]})]})}):c.jsx("div",{className:"container py-8",children:c.jsxs("div",{className:"max-w-3xl mx-auto rounded-xl border border-border bg-card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-accent mb-2",children:r.name||t}),c.jsx("p",{className:"text-sm text-text2 mb-4",children:"Membership is required to view this group."}),c.jsx("p",{className:"text-sm text-text2",children:"Request to join from the Explore page."})]})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx("p",{className:"text-text2",children:"Group not found."})})})}const qI="/assets/Header_Logo-CWkkS3_r.png";function $O(){const[t,e]=R.useState(!1);return R.useEffect(()=>{const n=window.matchMedia&&window.matchMedia("(display-mode: standalone)"),r=navigator.standalone===!0,s=()=>e(!!(n&&n.matches||r));return s(),n&&n.addEventListener&&n.addEventListener("change",s),()=>{n&&n.removeEventListener&&n.removeEventListener("change",s)}},[]),t}function BO(){const t=$O();return c.jsxs(c.Fragment,{children:[t&&c.jsx("style",{children:`
          [data-app-header]{
            padding-top: env(safe-area-inset-top);
            padding-top: constant(safe-area-inset-top);
          }
        `}),c.jsx("header",{"data-app-header":!0,className:"w-full border-b border-border bg-[var(--bg)]",children:c.jsx("div",{className:"container py-2 md:py-3 flex items-center",children:c.jsx(fe,{to:"/login","aria-label":"Immanuel Members Home",className:"shrink-0",children:c.jsx("img",{src:qI,alt:"Immanuel Downtown",className:"h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"})})})})]})}function ow(t){return t&&t.trim().split(/\s+/)[0]||null}function zO(){const[t,e]=R.useState(!1);return R.useEffect(()=>{const n=window.matchMedia&&window.matchMedia("(display-mode: standalone)"),r=navigator.standalone===!0,s=()=>e(!!(n&&n.matches||r));return s(),n&&n.addEventListener&&n.addEventListener("change",s),()=>{n&&n.removeEventListener&&n.removeEventListener("change",s)}},[]),t}function qO(){const{user:t,isAdmin:e}=Sd(),n=En(),[r,s]=R.useState(""),[i,o]=R.useState(!1),l=zO(),u="inline-flex items-center justify-center min-h-[2.25rem] px-3 py-2 rounded-lg text-sm leading-tight text-center whitespace-normal md:whitespace-nowrap",d=h=>`${u} ${h?"bg-muted text-accent":"text-text hover:text-accent"}`;return R.useEffect(()=>{let h=!0;async function p(){if(!t){h&&s("");return}const m=ow(t.displayName);if(m){h&&s(m);return}try{const y=await Ve(J(gg,"users",t.uid));if(y.exists()){const T=y.data(),N=(T==null?void 0:T.name)||[T==null?void 0:T.firstName,T==null?void 0:T.lastName].filter(Boolean).join(" ").trim(),C=ow(N);if(C){h&&s(C);return}}}catch{}h&&s("there")}return p(),()=>{h=!1}},[t]),R.useEffect(()=>{o(!1)},[n.pathname]),c.jsxs(c.Fragment,{children:[l&&c.jsx("style",{children:`
          [data-app-header] {
            padding-top: env(safe-area-inset-top);
            /* Safari < 11.2 fallback (rare now) */
            padding-top: constant(safe-area-inset-top);
          }
        `}),c.jsxs("header",{"data-app-header":!0,className:"w-full border-b border-border bg-[var(--bg)]",children:[c.jsxs("div",{className:"container py-2 md:py-3 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1 items-center gap-x-3 gap-y-2",children:[c.jsx("div",{className:"col-start-1 row-start-1 md:col-span-1 flex items-center min-w-0",children:c.jsx(fe,{to:"/dashboard","aria-label":"Immanuel Members Home",className:"shrink-0",children:c.jsx("img",{src:qI,alt:"Immanuel Downtown",className:"h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"})})}),c.jsx("div",{className:"col-start-2 row-start-1 md:hidden flex justify-end",children:c.jsx("button",{"aria-label":"Open menu","aria-expanded":i,className:"p-2 rounded-md border border-border/70 bg-surface/40 hover:bg-surface/60 active:scale-[0.98] transition",onClick:()=>o(h=>!h),children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:c.jsx("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})}),c.jsxs("nav",{className:"col-span-2 row-start-2 md:row-start-1 md:col-span-1 flex justify-center gap-4 text-sm",children:[c.jsx(uu,{to:"/dashboard",className:({isActive:h})=>d(h),children:"Dashboard"}),c.jsx(uu,{to:"/sunday-resources",className:({isActive:h})=>d(h),children:"Sunday White Papers"}),c.jsx(uu,{to:"/groups",className:({isActive:h})=>d(h),children:"Groups"}),e&&c.jsx(uu,{to:"/admin",className:({isActive:h})=>d(h),children:"Admin"})]}),c.jsx("div",{className:"hidden md:flex md:col-start-3 md:row-start-1 justify-end items-center gap-2",children:t?c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"text-sm text-text2",children:["Hi",r?`, ${r}`:""]}),c.jsx(fe,{to:"/profile",className:"btn btn-outline btn-md",children:"Profile"}),c.jsx("button",{className:"btn btn-outline btn-md",onClick:()=>Uf(tl),children:"Sign out"})]}):n.pathname!=="/login"&&c.jsx(fe,{to:"/login",className:"btn btn-outline btn-md",children:"Sign in"})})]}),i&&c.jsxs("div",{className:"fixed inset-0 z-50",children:[c.jsx("button",{"aria-label":"Close menu",className:"absolute inset-0 bg-black/40",onClick:()=>o(!1)}),c.jsxs("div",{className:"absolute top-2 right-2 w-64 rounded-xl border border-border bg-[var(--bg)] shadow-xl p-3",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"text-sm text-text2",children:"Menu"}),c.jsx("button",{className:"p-2 rounded-md hover:bg-surface/60",onClick:()=>o(!1),"aria-label":"Close",children:c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M6 6l12 12M18 6l-12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),c.jsx("div",{className:"mt-2 border-t border-border/60 pt-2 grid gap-2",children:t?c.jsxs(c.Fragment,{children:[c.jsx(fe,{to:"/profile",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Profile"}),e&&c.jsx(fe,{to:"/admin",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Admin"}),c.jsx("button",{className:"btn btn-outline btn-sm",onClick:()=>{o(!1),Uf(tl)},children:"Sign out"})]}):n.pathname!=="/login"&&c.jsx(fe,{to:"/login",className:"btn btn-outline btn-sm",onClick:()=>o(!1),children:"Sign in"})})]})]})]})]})}function WO(){const t=Ke(ne),e=Lr(),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState(!1),[u,d]=R.useState(!1),[h,p]=R.useState(!1),[m,y]=R.useState(null);R.useEffect(()=>sr(t,x=>{x&&e("/dashboard",{replace:!0})}),[t,e]);async function T(){y(null),d(!0);try{const C=new mn;await Em(t,C),e("/dashboard",{replace:!0})}catch{y("Google sign-in was cancelled or failed.")}finally{d(!1)}}async function N(C){if(C.preventDefault(),y(null),!n||!s){y("Please enter your email and password.");return}p(!0);try{await v0(t,n,s),e("/dashboard",{replace:!0})}catch(x){const w=String((x==null?void 0:x.code)||"");let E="Could not sign in with email and password.";w==="auth/invalid-email"?E="Please enter a valid email address.":(w==="auth/user-not-found"||w==="auth/wrong-password")&&(E="Email or password is incorrect."),y(E)}finally{p(!1)}}return c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-1",children:"Welcome back"}),c.jsx("p",{className:"text-sm text-text2 mb-6",children:"Sign in to continue."}),m&&c.jsx("div",{className:"mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",children:m}),c.jsxs("form",{onSubmit:N,className:"grid gap-3 mb-4",children:[c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Email"}),c.jsx("input",{type:"email",value:n,onChange:C=>r(C.target.value),placeholder:"you@example.com",autoComplete:"email",className:"rounded-lg border border-border bg-background px-3 py-2 outline-none",required:!0})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Password"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:o?"text":"password",value:s,onChange:C=>i(C.target.value),placeholder:"••••••••",autoComplete:"current-password",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none",required:!0}),c.jsx("button",{type:"button",onClick:()=>l(C=>!C),className:"rounded-lg border border-border px-3 py-2 text-sm",children:o?"Hide":"Show"})]})]}),c.jsx("button",{type:"submit",disabled:h,className:"rounded-lg bg-[#919FAA] hover:opacity-90 px-4 py-2 text-white disabled:opacity-60",children:h?"Signing in…":"Sign in"})]}),c.jsx("button",{type:"button",onClick:T,disabled:u,className:"btn btn-outline w-full",children:u?"Please wait…":"Sign in with Google"}),c.jsx("div",{className:"mt-2",children:c.jsx(fe,{to:"/signup",className:"btn btn-outline w-full",children:"Create account"})}),c.jsx("div",{className:"mt-6 text-center",children:c.jsx(fe,{to:"/forgot",className:"text-sm text-accent underline underline-offset-2",children:"Forgot password?"})})]})})}function HO(t){const e=t.trim().split(/\s+/).filter(Boolean);return e.length===0?{firstName:"",lastName:""}:e.length===1?{firstName:e[0],lastName:""}:{firstName:e[0],lastName:e.slice(1).join(" ")}}function GO(){const t=Ke(ne),e=Lr(),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState(""),[u,d]=R.useState(""),[h,p]=R.useState(""),[m,y]=R.useState(!1),[T,N]=R.useState(null),[C,x]=R.useState(!1);R.useEffect(()=>sr(t,O=>{O&&e("/dashboard",{replace:!0})}),[t,e]);async function w(k){k.preventDefault(),N(null);const O=n.trim(),M=s.trim();if(!O){N("Please enter your first name.");return}if(!o||!u){N("Please enter an email and password.");return}if(u!==h){N("Passwords do not match.");return}const S=(O+" "+M).trim();x(!0);try{const v=await OR(t,o,u);v.user&&await _0(v.user,{displayName:S});try{localStorage.setItem("signupName",S),localStorage.setItem("signupFirstName",O),localStorage.setItem("signupLastName",M)}catch{}e("/welcome",{replace:!0,state:{name:S,firstName:O,lastName:M}})}catch(v){const I=String((v==null?void 0:v.code)||"");let A="Could not create account.";I==="auth/email-already-in-use"?A="That email is already in use.":I==="auth/invalid-email"?A="Please enter a valid email address.":I==="auth/weak-password"&&(A="Password should be at least 6 characters."),N(A)}finally{x(!1)}}async function E(){var k;N(null),x(!0);try{const O=new mn,S=((k=(await Em(t,O)).user)==null?void 0:k.displayName)||"",{firstName:v,lastName:I}=HO(S);try{S&&(localStorage.setItem("signupName",S),localStorage.setItem("signupFirstName",v),localStorage.setItem("signupLastName",I))}catch{}e("/welcome",{replace:!0,state:{name:S,firstName:v,lastName:I}})}catch{N("Google sign-in was cancelled or failed.")}finally{x(!1)}}return c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-1",children:"Create your account"}),c.jsx("p",{className:"text-sm text-text2 mb-6",children:"Join Immanuel Downtown to access your dashboard and groups."}),T&&c.jsx("div",{className:"mb-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700",children:T}),c.jsxs("form",{onSubmit:w,className:"grid gap-3",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"First name"}),c.jsx("input",{type:"text",value:n,onChange:k=>r(k.target.value),placeholder:"Jordan",autoComplete:"given-name",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Last name"}),c.jsx("input",{type:"text",value:s,onChange:k=>i(k.target.value),placeholder:"Smith",autoComplete:"family-name",className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Email"}),c.jsx("input",{type:"email",value:o,onChange:k=>l(k.target.value),placeholder:"you@example.com",autoComplete:"email",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Password"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:m?"text":"password",value:u,onChange:k=>d(k.target.value),placeholder:"••••••••",autoComplete:"new-password",required:!0,className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 outline-none"}),c.jsx("button",{type:"button",onClick:()=>y(k=>!k),className:"rounded-lg border border-border px-3 py-2 text-sm",children:m?"Hide":"Show"})]})]}),c.jsxs("label",{className:"grid gap-1",children:[c.jsx("span",{className:"text-sm",children:"Confirm password"}),c.jsx("input",{type:m?"text":"password",value:h,onChange:k=>p(k.target.value),placeholder:"••••••••",autoComplete:"new-password",required:!0,className:"rounded-lg border border-border bg-background px-3 py-2 outline-none"})]}),c.jsx("button",{type:"submit",disabled:C,className:"mt-2 rounded-lg bg-accent px-4 py-2 text-white hover:opacity-90 disabled:opacity-60",children:C?"Creating…":"Create account"})]}),c.jsx("div",{className:"mt-4",children:c.jsx("button",{type:"button",onClick:E,disabled:C,className:"w-full rounded-lg border border-border px-4 py-2 text-sm hover:bg-muted disabled:opacity-60",children:"Continue with Google"})}),c.jsxs("div",{className:"mt-4 text-sm text-text2",children:["Already have an account?"," ",c.jsx(fe,{to:"/login",className:"text-accent underline underline-offset-2",children:"Sign in"})]})]})})}function KO(){const t=R.useMemo(()=>Le(ne),[]),{user:e,loading:n}=Sd(),r=(e==null?void 0:e.uid)??null,[s,i]=R.useState(null);if(R.useEffect(()=>{if(!r){i([]);return}const l=sn(ve(t,`users/${r}/notifications`),jr("createdAt","desc")),u=bn(l,d=>{const h=d.docs.map(p=>({id:p.id,...p.data()}));i(h.filter(p=>!p.read))},d=>{console.error("Notifications listener error:",(d==null?void 0:d.message)||d),i([])});return()=>u()},[t,r]),s===null||n)return c.jsxs("div",{className:"p-1",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Notifications"}),c.jsx("div",{className:"mt-2",children:c.jsx($n,{label:"Loading notifications…"})})]});async function o(l){if(r)try{await ag(J(t,`users/${r}/notifications/${l}`),{read:!0,readAt:Oe()})}catch{}}return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Notifications"}),s.length===0?c.jsx("p",{className:"text-text2 mt-2",children:"You have no new notifications."}):c.jsx("ul",{className:"mt-3 space-y-2",children:s.map(l=>{const u=c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm",children:l.text}),l.groupName&&c.jsxs("p",{className:"text-xs text-text2",children:["Group: ",l.groupName]})]}),c.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200",children:"new"})]});return c.jsx("li",{className:"rounded-lg border border-border bg-card px-3 py-2 ring-1 ring-emerald-300/40",children:l.href?c.jsx(fe,{to:l.href,onClick:()=>o(l.id),className:"block hover:opacity-90",children:u}):c.jsx("button",{onClick:()=>o(l.id),className:"block w-full text-left hover:opacity-90",children:u})},l.id)})})]})}const aw="https://calendar.google.com/calendar/embed?src=immanueldowntown@gmail.com",QO="America/New_York";function YO(){const{isAdmin:t}=Sd(),e=`${aw}${aw.includes("?")?"&":"?"}ctz=${encodeURIComponent(QO)}`;return c.jsxs("div",{className:"container py-8 md:py-10",children:[c.jsx("div",{className:"text-center mb-6",children:c.jsx("h1",{className:"text-2xl md:text-3xl font-semibold",children:"Welcome!"})}),t&&c.jsxs("section",{className:"mb-6 border border-border p-5 rounded-xl flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Admin Tools"}),c.jsx("p",{className:"text-sm text-text2",children:"You have admin privileges."})]}),c.jsx(fe,{to:"/admin/groups",className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200",children:"Admin Console"})]}),c.jsxs("section",{className:"border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"General Announcements"}),c.jsxs("ul",{className:"mt-3 space-y-2 text-text",children:[c.jsx("li",{children:"• Welcome to the Community Portal. Check your groups for updates. "}),c.jsx("li",{children:'• The "Sunday White Papers" link at the top has the documents for our morning discussions.'}),c.jsx("li",{children:"• Please be patient with this app, We are still in development. If you find bugs, send a message to Sam."}),c.jsx("li",{children:"• If you have features you'd like to see added, let Sam know."})]}),c.jsx("div",{className:"mt-6 pt-5 border-t border-border",children:c.jsx("div",{className:"mt-2",children:c.jsx(KO,{})})})]}),c.jsxs("section",{className:"mt-8 border border-border p-5 rounded-xl",children:[c.jsx("h2",{className:"text-xl font-semibold text-accent",children:"Calendar"}),c.jsx("p",{className:"text-text2 text-sm mt-1",children:"Synced from church Google Calendar."}),c.jsx("div",{className:"mt-4 w-full",children:e?c.jsx("iframe",{className:"w-full h-[440px] sm:h-[520px] md:h-[720px] rounded border-0",src:e,title:"Church Calendar",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}):c.jsx("div",{className:"w-full h-[440px] sm:h-[520px] md:h-[720px] flex items-center justify-center text-center p-6 text-sm text-text2 rounded bg-surface/50",children:c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-text mb-1",children:"Calendar not configured"}),c.jsxs("div",{children:["Set ",c.jsx("code",{className:"px-1 py-0.5 rounded bg-surface/50",children:"VITE_GCAL_EMBED_URL"})," in your env. In Google Calendar → ",c.jsx("em",{children:"Settings → Integrate calendar"}),", copy the ",c.jsx("strong",{children:"Embed code"})," ",c.jsx("code",{children:"src"})," URL and paste it there."]})]})})})]})]})}function JO(){const t=Ke(ne),e=R.useMemo(()=>Le(ne),[]),[n,r]=R.useState(null),[s,i]=R.useState(!0);return R.useEffect(()=>{if(!t.currentUser)return;const o=t.currentUser.uid,l=bn(ve(e,`users/${o}/memberships`),async u=>{const d=u.docs.map(p=>p.id);if(d.length===0){r([]),i(!1);return}const h=await Promise.all(d.map(async p=>{const m=await Ve(J(e,"groups",p));if(m.exists()){const y=m.data();return{id:m.id,...y}}return null}));r(h.filter(Boolean)),i(!1)});return()=>l()},[t.currentUser,e]),s?c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading your groups…"})})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-5xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-4",children:"Your Groups"}),n&&n.length>0?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map(o=>c.jsx(zI,{group:o,isMember:!0},o.id))}),c.jsx("div",{className:"mt-6",children:c.jsx(fe,{to:"/groups/explore",className:"inline-flex rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted",children:"Other Available Groups"})})]}):c.jsxs("div",{className:"rounded-xl border border-border bg-card p-6",children:[c.jsx("p",{className:"text-text2",children:"You haven’t joined any groups yet."}),c.jsx(fe,{to:"/groups/explore",className:"inline-flex mt-3 rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800",children:"View More Groups"})]})]})})}function XO(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Forums"}),c.jsx("p",{className:"text-text2 mt-2",children:"Community discussions coming soon."})]})}function ZO(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Resources"}),c.jsx("p",{className:"text-text2 mt-2",children:"Documents, links, and media for members."})]})}function eV(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Events"}),c.jsx("p",{className:"text-text2 mt-2",children:"Calendar and upcoming gatherings."})]})}/**
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
 */const tV="type.googleapis.com/google.protobuf.Int64Value",nV="type.googleapis.com/google.protobuf.UInt64Value";function WI(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Rc(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Rc(e));if(typeof t=="function"||typeof t=="object")return WI(t,e=>Rc(e));throw new Error("Data cannot be encoded in JSON: "+t)}function xo(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case tV:case nV:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>xo(e)):typeof t=="function"||typeof t=="object"?WI(t,e=>xo(e)):t}/**
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
 */const yg="functions";/**
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
 */const lw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ht extends Un{constructor(e,n,r){super(`${yg}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Ht.prototype)}}function rV(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Pc(t,e){let n=rV(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!lw[o])return new Ht("internal","internal");n=lw[o],r=o}const l=i.message;typeof l=="string"&&(r=l),s=i.details,s!==void 0&&(s=xo(s))}}catch{}return n==="ok"?null:new Ht(n,r,s)}/**
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
 */class sV{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const ap="us-central1",iV=/^data: (.*?)(?:\n|$)/;function oV(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ht("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class aV{constructor(e,n,r,s,i=ap,o=(...l)=>fetch(...l)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new sV(e,n,r,s),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(i);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=ap}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function lV(t,e,n){const r=hi(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(sm(t.emulatorOrigin),im("Functions",!0))}function uV(t,e,n){const r=s=>dV(t,e,s,{});return r.stream=(s,i)=>fV(t,e,s,i),r}async function cV(t,e,n,r){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let i=null;try{i=await s.json()}catch{}return{status:s.status,json:i}}async function HI(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function dV(t,e,n,r){const s=t._url(e);return hV(t,s,n,r)}async function hV(t,e,n,r){n=Rc(n);const s={data:n},i=await HI(t,r),o=r.timeout||7e4,l=oV(o),u=await Promise.race([cV(e,s,i,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!u)throw new Ht("cancelled","Firebase Functions instance was deleted.");const d=Pc(u.status,u.json);if(d)throw d;if(!u.json)throw new Ht("internal","Response is not valid JSON object.");let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new Ht("internal","Response is missing data field.");return{data:xo(h)}}function fV(t,e,n,r){const s=t._url(e);return pV(t,s,n,r||{})}async function pV(t,e,n,r){var m;n=Rc(n);const s={data:n},i=await HI(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal})}catch(y){if(y instanceof Error&&y.name==="AbortError"){const N=new Ht("cancelled","Request was cancelled.");return{data:Promise.reject(N),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(N)}}}}}}const T=Pc(0,null);return{data:Promise.reject(T),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(T)}}}}}}let l,u;const d=new Promise((y,T)=>{l=y,u=T});(m=r==null?void 0:r.signal)==null||m.addEventListener("abort",()=>{const y=new Ht("cancelled","Request was cancelled.");u(y)});const h=o.body.getReader(),p=mV(h,l,u,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const y=p.getReader();return{async next(){const{value:T,done:N}=await y.read();return{value:T,done:N}},async return(){return await y.cancel(),{done:!0,value:void 0}}}}},data:d}}function mV(t,e,n,r){const s=(o,l)=>{const u=o.match(iV);if(!u)return;const d=u[1];try{const h=JSON.parse(d);if("result"in h){e(xo(h.result));return}if("message"in h){l.enqueue(xo(h.message));return}if("error"in h){const p=Pc(0,h);l.error(p),n(p);return}}catch(h){if(h instanceof Ht){l.error(h),n(h);return}}},i=new TextDecoder;return new ReadableStream({start(o){let l="";return u();async function u(){if(r!=null&&r.aborted){const d=new Ht("cancelled","Request was cancelled");return o.error(d),n(d),Promise.resolve()}try{const{value:d,done:h}=await t.read();if(h){l.trim()&&s(l.trim(),o),o.close();return}if(r!=null&&r.aborted){const m=new Ht("cancelled","Request was cancelled");o.error(m),n(m),await t.cancel();return}l+=i.decode(d,{stream:!0});const p=l.split(`
`);l=p.pop()||"";for(const m of p)m.trim()&&s(m.trim(),o);return u()}catch(d){const h=d instanceof Ht?d:Pc(0,null);o.error(h),n(h)}}},cancel(){return t.cancel()}})}const uw="@firebase/functions",cw="0.13.0";/**
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
 */const gV="auth-internal",yV="app-check-internal",vV="messaging-internal";function _V(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(gV),o=n.getProvider(vV),l=n.getProvider(yV);return new aV(s,i,o,l,r)};Ln(new wn(yg,e,"PUBLIC").setMultipleInstances(!0)),Yt(uw,cw,t),Yt(uw,cw,"esm2020")}/**
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
 */function vg(t=ll(),e=ap){const r=pi(Ie(t),yg).getImmediate({identifier:e}),s=FE("functions");return s&&wV(r,...s),r}function wV(t,e,n){lV(Ie(t),e,n)}function _g(t,e,n){return uV(Ie(t),e)}_V();function xV(t){return t?"present":"missing"}async function EV(){const t=await(async()=>{try{return!!await Promise.resolve(Id())}catch{return!1}})(),e=await navigator.serviceWorker.getRegistration(),s={permission:typeof Notification<"u"?Notification.permission:"unavailable",swRegistered:!!e,swScope:(e==null?void 0:e.scope)||null,messagingSupported:t,vapidKey:xV("BOhz8CwPpf6kstE2HWU-Pyb4bkPGM6OpdVzU3PYrhyMSGZKyds6UzoSlQN1lRYxrmtf-HGQwSw5DivQ0SjkdxCI")};return console.table(s),s}async function GI(){try{return!!await Promise.resolve(Id())}catch(t){return console.warn("[push] getMessagingIfSupported threw:",t),!1}}async function TV(t){console.groupCollapsed("[push] enroll start");try{const e=await EV();if(!await GI())return console.warn("[push] messaging not supported in this environment"),null;let n=Notification.permission;if(n!=="granted"&&(n=await Notification.requestPermission()),console.log("[push] permission after request:",n),n!=="granted")return console.warn("[push] user did not grant permission"),null;let r=await navigator.serviceWorker.getRegistration();if(r)console.log("[push] using existing SW at",r.scope);else{console.log("[push] registering /sw.js");try{r=await navigator.serviceWorker.register("/sw.js"),console.log("[push] /sw.js registered at",r.scope)}catch(l){return console.warn("[push] failed to register /sw.js:",l),null}}const s=await Promise.resolve(Id());if(!s)return console.warn("[push] getMessagingIfSupported returned null"),null;const i="BOhz8CwPpf6kstE2HWU-Pyb4bkPGM6OpdVzU3PYrhyMSGZKyds6UzoSlQN1lRYxrmtf-HGQwSw5DivQ0SjkdxCI";let o=null;try{o=await bO(s,{vapidKey:i,serviceWorkerRegistration:r})}catch(l){return console.warn("[push] getToken() threw:",l),null}if(!o)return console.warn("[push] getToken() returned null/empty"),null;console.log("[push] obtained token (truncated):",o.slice(0,10)+"…");try{const l=J(gg,`users/${t}/pushTokens/${o}`);await ln(l,{token:o,createdAt:Oe(),userAgent:navigator.userAgent||""},{merge:!0}),console.log("[push] token saved to Firestore (client)")}catch(l){console.warn("[push] failed to write token to Firestore (client):",l)}try{await _g(vg(ne,"us-central1"),"registerPushToken")({token:o}),console.log("[push] token saved via callable (server)")}catch(l){console.warn("[push] registerPushToken callable failed (non-fatal):",l)}return o}finally{console.groupEnd()}}async function IV(t){if(!await GI())return()=>{};const e=await Promise.resolve(Id());return e?RO(e,r=>{try{t(r)}catch(s){console.warn("[push] handler error:",s)}}):()=>{}}function SV(){const t=Ke(),e=t.currentUser,[n,r]=R.useState(null),[s,i]=R.useState(null);R.useEffect(()=>{if(!e)return;const d=J(gg,"users",e.uid),h=bn(d,p=>r(p.data()),p=>console.warn("Profile onSnapshot error:",p));return()=>h()},[e]),R.useEffect(()=>{if(!e)return;let d=null,h=!1;return(async()=>{try{const p=await IV(m=>{console.log("[push] Foreground message:",m);const y=(m==null?void 0:m.data)||{};i({title:y.title||"Notification",body:y.body||""}),setTimeout(()=>i(null),6e3)});h?typeof p=="function"&&p():d=typeof p=="function"?p:null}catch(p){console.warn("listenForegroundMessages failed:",p)}})(),()=>{if(h=!0,typeof d=="function")try{d()}catch{}}},[e]);const o="us-central1",l=async()=>{try{const d=t.currentUser;if(!d)return;const h=await TV(d.uid);alert(h?"Notifications enabled on this device.":"Notifications not enabled (permission denied or unsupported).")}catch(d){console.error("Notification setup failed",d),alert("Could not enable notifications.")}},u=async()=>{try{const h=await _g(vg(ne,o),"sendTestPush")({title:"Hello!",body:"This is a test push.",url:"/dashboard"});console.log("sendTestPush:",h.data),alert("Test push sent! Check your notifications.")}catch(d){console.error("sendTestPush failed",d),alert("sendTestPush failed. See console for details.")}};return c.jsx("div",{className:"container py-8",children:c.jsxs("div",{className:"max-w-3xl mx-auto rounded-xl border border-border bg-card p-6",children:[c.jsx("h1",{className:"text-xl font-semibold text-accent mb-4",children:"Profile"}),e&&c.jsxs("div",{className:"mb-4 text-sm text-text",children:[c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"Email:"})," ",e.email]}),c.jsxs("p",{children:[c.jsx("span",{className:"font-medium",children:"UID:"})," ",e.uid]})]}),n&&c.jsx("div",{className:"mb-6 text-sm text-text2",children:n.displayName&&c.jsxs("p",{children:[c.jsx("span",{className:"font-medium text-text",children:"Display Name:"})," ",n.displayName]})}),s&&c.jsxs("div",{className:"mb-4 rounded-lg border border-border bg-card p-3",children:[c.jsx("div",{className:"text-sm font-semibold text-accent",children:s.title}),c.jsx("div",{className:"text-sm text-text2",children:s.body})]}),c.jsxs("section",{className:"mt-2 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Notifications"}),c.jsx("p",{className:"text-sm text-text2 mt-1",children:"Enable push notifications on this device to get updates."}),c.jsxs("div",{className:"mt-3 flex gap-3",children:[c.jsx("button",{type:"button",onClick:l,className:"rounded-lg px-4 py-2 text-white text-sm",style:{backgroundColor:"#919FAA"},children:"Enable notifications on this device"}),c.jsx("button",{type:"button",onClick:u,className:"rounded-lg px-4 py-2 text-white text-sm",style:{backgroundColor:"#919FAA"},children:"Send test push"})]})]})]})})}function NV(){return c.jsxs("div",{className:"container py-10",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Settings"}),c.jsx("p",{className:"text-text2 mt-2",children:"Preferences and app settings."})]})}function AV(){const[t,e]=R.useState(""),[n,r]=R.useState(!1),[s,i]=R.useState(null),[o,l]=R.useState(!1);async function u(d){d.preventDefault(),i(null),r(!0);try{await PR(tl,t),l(!0)}catch(h){i((h==null?void 0:h.message)||"Failed to send reset email")}finally{r(!1)}}return c.jsx("div",{className:"flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]",children:c.jsxs("div",{className:"w-full max-w-sm",children:[c.jsx("h1",{className:"text-2xl font-bold mb-2 text-center",children:"Forgot password"}),c.jsx("p",{className:"mb-6 text-center text-text2",children:"Enter your account email and we’ll send you a reset link."}),o?c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-accent",children:"Check your email"}),c.jsxs("p",{className:"text-text2 text-sm mt-1",children:["If an account exists for ",c.jsx("span",{className:"text-text",children:t}),", you’ll receive a password reset link shortly."]}),c.jsx(fe,{to:"/login",className:"btn btn-outline mt-4 w-full",children:"Back to sign in"})]}):c.jsxs("form",{onSubmit:u,className:"space-y-3",children:[c.jsx("input",{type:"email",className:"input w-full",placeholder:"Email",value:t,onChange:d=>e(d.target.value),required:!0,autoComplete:"email"}),s&&c.jsx("div",{className:"text-red-400 text-sm",children:s}),c.jsx("button",{className:"btn btn-primary w-full",disabled:n,children:n?"Sending…":"Send reset link"}),c.jsx("div",{className:"text-center",children:c.jsx(fe,{to:"/login",className:"text-sm underline text-text2",children:"Back to sign in"})})]})]})})}function CV(){const[t]=K1(),e=Lr(),n=t.get("oobCode")||"",[r,s]=R.useState(null),[i,o]=R.useState(""),[l,u]=R.useState(""),[d,h]=R.useState(!0),[p,m]=R.useState(null),[y,T]=R.useState(!1);R.useEffect(()=>{async function C(){try{const x=await DR(tl,n);s(x)}catch(x){m((x==null?void 0:x.message)||"Invalid or expired reset link.")}finally{h(!1)}}n?C():(m("Missing reset code."),h(!1))},[n]);async function N(C){if(C.preventDefault(),m(null),i.length<6){m("Password must be at least 6 characters.");return}if(i!==l){m("Passwords do not match.");return}try{await kR(tl,n,i),T(!0),setTimeout(()=>e("/login",{replace:!0}),1200)}catch(x){m((x==null?void 0:x.message)||"Failed to reset password.")}}return d?c.jsx("div",{className:"container py-20",children:"Checking reset link…"}):c.jsx("div",{className:"flex flex-col items-center min-h-screen bg-[var(--bg)] text-white pt-[15vh]",children:c.jsxs("div",{className:"w-full max-w-sm",children:[c.jsx("h1",{className:"text-2xl font-bold mb-2 text-center",children:"Reset password"}),p&&c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-red-400 text-sm",children:p}),c.jsx(fe,{to:"/forgot",className:"btn btn-outline mt-4 w-full",children:"Request a new link"})]}),!p&&!y&&c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"mb-6 text-center text-text2",children:["Resetting password for ",r]}),c.jsxs("form",{onSubmit:N,className:"space-y-3",children:[c.jsx("input",{type:"password",className:"input w-full",placeholder:"New password",value:i,onChange:C=>o(C.target.value),required:!0,autoComplete:"new-password"}),c.jsx("input",{type:"password",className:"input w-full",placeholder:"Confirm new password",value:l,onChange:C=>u(C.target.value),required:!0,autoComplete:"new-password"}),c.jsx("button",{className:"btn btn-primary w-full",children:"Set new password"})]})]}),y&&c.jsxs("div",{className:"border border-border p-4 text-center",children:[c.jsx("p",{className:"text-accent",children:"Password updated!"}),c.jsx("p",{className:"text-text2 text-sm mt-1",children:"Taking you back to sign in…"})]})]})})}const Ki=[{id:"downtown",name:"Downtown"}];function bV(t){const e=t.trim().split(/\s+/).filter(Boolean);return e.length===0?{firstName:"",lastName:""}:e.length===1?{firstName:e[0],lastName:""}:{firstName:e[0],lastName:e.slice(1).join(" ")}}function RV(t){if(!t)return"";const e=String(t).trim();return Ki.some(n=>n.id.toLowerCase()===e.toLowerCase())?Ki.find(n=>n.id.toLowerCase()===e.toLowerCase()).id:Ki.some(n=>n.name.toLowerCase()===e.toLowerCase())?Ki.find(n=>n.name.toLowerCase()===e.toLowerCase()).id:""}function PV(){const t=Lr(),e=En(),n=Ke(ne),r=Le(ne),[s,i]=q.useState(!1),[o,l]=q.useState(n.currentUser),[u,d]=q.useState(""),[h,p]=q.useState(!1),[m,y]=q.useState(""),[T,N]=q.useState(""),[C,x]=q.useState(!1),[w,E]=q.useState(null);q.useEffect(()=>{const O=sr(n,async M=>{var v;if(l(M),!M){i(!0);return}let S=M.displayName||((v=e.state)==null?void 0:v.name)||"";if(!S)try{const I=localStorage.getItem("signupName");I&&(S=I)}catch{}try{const I=await Ve(J(r,"users",M.uid)),A=I.exists()?I.data():null;!S&&(A!=null&&A.displayName)&&(S=String(A.displayName)),A!=null&&A.phone&&y(String(A.phone)),A!=null&&A.campus&&N(RV(String(A.campus)))}catch{}d(S||""),p(!!S),i(!0)});return()=>O()},[n,r,e.state]);async function k(){var I;if(E(null),!o){E("You are not signed in.");return}const O=u.trim();if(!h&&!O){E("Please enter your name.");return}const M=h?(o==null?void 0:o.displayName)||u:O,{firstName:S,lastName:v}=bV(M);x(!0);try{if(!h){if(!n.currentUser)throw new Error("No current user.");await _0(n.currentUser,{displayName:M})}await ln(J(r,"users",o.uid),{displayName:M,firstName:S,lastName:v,phone:m.trim()||null,campus:T||null,campusName:((I=Ki.find(A=>A.id===T))==null?void 0:I.name)||null,updatedAt:Oe(),onboardedAt:Oe()},{merge:!0});try{localStorage.removeItem("signupName"),localStorage.removeItem("signupFirstName"),localStorage.removeItem("signupLastName")}catch{}t("/dashboard",{replace:!0})}catch(A){E((A==null?void 0:A.message)||"Could not save your profile.")}finally{x(!1)}}return s?o?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent mb-2",children:"Welcome!"}),c.jsx("p",{className:"text-sm text-text2 mb-4",children:"Let’s finish setting up your profile."}),h?c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"text-sm block text-text2",children:"Name"}),c.jsx("div",{className:"mt-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm",children:u}),c.jsx("p",{className:"mt-1 text-xs text-text2",children:"Pulled from your sign-up. You can edit this later in Profile."})]}):c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Name"}),c.jsx("input",{type:"text",value:u,onChange:O=>d(O.target.value),placeholder:"First Last",className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"})]}),c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Phone (optional)"}),c.jsx("input",{type:"tel",value:m,onChange:O=>y(O.target.value),placeholder:"(555) 555-5555",className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"})]}),c.jsxs("label",{className:"mb-4 block",children:[c.jsx("span",{className:"text-sm",children:"Campus (optional)"}),c.jsxs("select",{value:T,onChange:O=>N(O.target.value),className:"mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",children:[c.jsx("option",{value:"",children:"Select a campus (optional)"}),Ki.map(O=>c.jsx("option",{value:O.id,children:O.name},O.id))]})]}),w&&c.jsx("p",{className:"text-sm text-rose-700 mb-2",children:w}),c.jsx("button",{onClick:k,disabled:C,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:C?"Saving…":"Save and continue"})]})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"mx-auto max-w-md rounded-xl border border-border bg-card p-6",children:c.jsx("p",{className:"text-sm text-text2",children:"You are not signed in."})})}):c.jsx("div",{className:"container py-8",children:c.jsx("div",{className:"mx-auto max-w-md",children:c.jsx($n,{label:"Loading your account…"})})})}const kV="modulepreload",jV=function(t){return"/"+t},dw={},DV=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=jV(u),u in dw)return;dw[u]=!0;const d=u.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":kV,d||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function OV(){const t=q.useMemo(()=>Le(ne),[]),{user:e}=Sd(),[n,r]=q.useState(null),[s,i]=q.useState(null),[o,l]=q.useState(""),[u,d]=q.useState(""),[h,p]=q.useState(""),[m,y]=q.useState(null),[T,N]=q.useState(!1);q.useEffect(()=>{let E;if(e!=null&&e.uid){const k=J(t,"admins",e.uid);DV(async()=>{const{onSnapshot:O}=await Promise.resolve().then(()=>tD);return{onSnapshot:O}},void 0).then(({onSnapshot:O})=>{E=O(k,M=>r(M.exists()))})}else r(!1);return()=>{E&&E()}},[t,e==null?void 0:e.uid]),q.useEffect(()=>{const E=sn(ve(t,"sundayResources"),jr("createdAt","desc")),k=bn(E,O=>{const M=O.docs.map(S=>({id:S.id,...S.data()}));i(M)});return()=>k()},[t]);async function C(E){if(E.preventDefault(),!!n){if(y(null),!o.trim()||!u.trim()){y("Title and URL are required.");return}try{N(!0),await Hs(ve(t,"sundayResources"),{title:o.trim(),url:u.trim(),note:h.trim()||null,createdAt:Oe(),createdBy:(e==null?void 0:e.uid)??null,createdByName:(e==null?void 0:e.displayName)??null}),l(""),d(""),p("")}catch(k){y((k==null?void 0:k.message)||"Failed to add resource.")}finally{N(!1)}}}async function x(E){if(n)try{await Rt(J(t,"sundayResources",E))}catch{}}const w=n===!0;return s===null||n===null?c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Sunday White Papers"}),c.jsx("div",{className:"mt-4",children:c.jsx($n,{label:"Loading…"})})]})}):c.jsx("div",{className:"container py-8 md:py-12",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsx("h1",{className:"text-2xl font-semibold text-accent",children:"Sunday White Papers"}),c.jsx("p",{className:"text-text2 mt-2",children:"A curated library of Sunday white papers and study resources."}),w&&c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Add a resource"}),m&&c.jsx("p",{className:"text-red-500 text-sm mt-2",children:m}),c.jsxs("form",{onSubmit:C,className:"mt-3 grid grid-cols-1 md:grid-cols-12 gap-3",children:[c.jsx("input",{type:"text",value:o,onChange:E=>l(E.target.value),placeholder:"Title",className:"md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("input",{type:"url",value:u,onChange:E=>d(E.target.value),placeholder:"URL (Google Drive, video, article…)",className:"md:col-span-6 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("input",{type:"text",value:h,onChange:E=>p(E.target.value),placeholder:"Note (optional)",className:"md:col-span-3 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30"}),c.jsx("div",{className:"md:col-span-12 flex justify-end",children:c.jsx("button",{type:"submit",disabled:T,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:T?"Adding…":"Add resource"})})]})]}),c.jsxs("section",{className:"mt-6 rounded-xl border border-border bg-card p-5",children:[c.jsx("h2",{className:"text-lg font-semibold text-accent",children:"Resources"}),s.length===0?c.jsx("p",{className:"text-text2 text-sm mt-2",children:"No resources yet."}):c.jsx("ul",{className:"mt-3 space-y-2",children:s.map(E=>c.jsx("li",{className:"rounded-lg border border-border bg-muted px-3 py-2",children:c.jsxs("div",{className:"flex items-center justify-between gap-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("p",{className:"text-sm font-medium truncate",children:c.jsx("a",{href:E.url,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:E.title})}),E.note&&c.jsx("p",{className:"text-xs text-text2 mt-0.5",children:E.note})]}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[c.jsx(fe,{to:E.url,target:"_blank",className:"text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70",children:"Open"}),w&&c.jsx("button",{onClick:()=>x(E.id),className:"text-xs px-2 py-1 rounded-md border border-border hover:bg-muted/70",title:"Delete",children:"Delete"})]})]})},E.id))})]})]})})}function VV(t,e){return[t,e].sort().join("_")}function LV(){var C;const{slug:t="",otherUid:e=""}=di(),n=q.useMemo(()=>Le(ne),[]),r=Ke(ne),[s,i]=q.useState(!0),[o,l]=q.useState(""),[u,d]=q.useState([]),[h,p]=q.useState(""),m=((C=r.currentUser)==null?void 0:C.uid)||"",y=q.useMemo(()=>m?VV(m,e):"",[m,e]);q.useEffect(()=>{let x=!1,w;async function E(){try{i(!0);try{const O=await Ve(J(n,"groups",t));if(O.exists()){const M=O.data();x||l((M==null?void 0:M.name)||t)}else x||l(t)}catch{x||l(t)}if(!m||!y)return;const k=sn(ve(n,`groups/${t}/directMessages/${y}/messages`),jr("createdAt","asc"));w=bn(k,O=>{const M=O.docs.map(S=>({id:S.id,...S.data()}));x||d(M)})}finally{x||i(!1)}}return E().catch(()=>{}),()=>{x=!0,w&&w()}},[n,t,m,y]);async function T(x){var w;if(x.preventDefault(),!(!h.trim()||!m||!y))try{await Hs(ve(n,`groups/${t}/directMessages/${y}/messages`),{text:h.trim(),from:m,to:e,displayName:((w=r.currentUser)==null?void 0:w.displayName)||"Member",createdAt:Oe()}),p("")}catch(E){alert((E==null?void 0:E.message)||"Failed to send")}}async function N(x,w){w===m&&confirm("Delete this message?")&&await Rt(J(n,`groups/${t}/directMessages/${y}/messages/${x}`))}return s?c.jsx("div",{className:"max-w-4xl mx-auto p-6",children:c.jsx($n,{label:"Loading direct messages…"})}):c.jsx("div",{className:"container py-6",children:c.jsxs("div",{className:"max-w-4xl mx-auto rounded-xl border border-border bg-card p-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-lg font-semibold text-accent",children:"Direct Messages"}),c.jsx(fe,{to:`/groups/${t}`,className:"text-sm text-text2 underline",children:"Back to group"})]}),c.jsxs("p",{className:"text-sm text-text2 mt-1",children:["Group: ",o]}),c.jsx("div",{className:"mt-4 max-h-[60vh] overflow-auto space-y-2 pr-1",children:u.length===0?c.jsx("p",{className:"text-sm text-text2",children:"No messages yet."}):u.map(x=>c.jsx("div",{className:"rounded-lg px-3 py-2 border "+(x.from===m?"border-slate-300 bg-white":"border-slate-700 bg-slate-800 text-white"),children:c.jsxs("div",{className:"flex items-start justify-between gap-2",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-xs opacity-70",children:x.displayName||x.from}),c.jsx("p",{className:"text-sm whitespace-pre-wrap",children:x.text})]}),x.from===m&&c.jsx("button",{onClick:()=>N(x.id,x.from),className:"text-xs rounded-lg border border-rose-300 text-rose-700 px-2 py-1 hover:bg-rose-50 h-fit",children:"Delete"})]})},x.id))}),c.jsxs("form",{onSubmit:T,className:"mt-3 flex gap-2",children:[c.jsx("input",{type:"text",value:h,onChange:x=>p(x.target.value),placeholder:"Write a message…",className:"flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none"}),c.jsx("button",{type:"submit",disabled:!h.trim(),className:"rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800 disabled:opacity-60",children:"Send"})]})]})})}function MV(){const t=R.useMemo(()=>Le(ne),[]),e=Ke(ne),[n,r]=R.useState(!0),[s,i]=R.useState(!1),[o,l]=R.useState([]),[u,d]=R.useState(!1),[h,p]=R.useState([]);return R.useEffect(()=>{let m=!1;async function y(){var T;try{r(!0);const N=e.currentUser;if(!N){m||(i(!1),l([]));return}const C=N.uid,w=(await Ve(J(t,"admins",C))).exists();m||i(w);let E=[];w?E=(await ht(sn(ve(t,"groups"),jr("name")))).docs.map(M=>M.id):E=(await ht(sn(Xm(t,"groupAdmins"),Tl(eI(),"==",C)))).docs.map(M=>{const S=M.ref.parent.parent;return S?S.id:""}).filter(Boolean);const k=[];for(const O of E)try{const S=(await Ve(J(t,"groups",O))).data()||{};let v=0;try{const I=await Cc(ve(t,`groups/${O}/membershipRequests`));v=Number(((T=I.data())==null?void 0:T.count)||0)}catch{}k.push({id:O,name:S.name||O,parent:S.parent||null,pendingRequests:v})}catch{}m||l(k)}finally{m||r(!1)}}return y(),()=>{m=!0}},[t,e.currentUser]),R.useEffect(()=>{let m=!1;async function y(){try{d(!0);const T={};for(const C of o){try{(await ht(ve(t,`groups/${C.id}/members`))).forEach(w=>{const E=w.data(),k=w.id;T[k]||(T[k]={uid:k,name:E==null?void 0:E.displayName,email:E==null?void 0:E.email,groups:[]}),T[k].groups.push({id:C.id,name:C.name||C.id})})}catch{}if(m)return}const N=Object.values(T).sort((C,x)=>(C.name||C.uid).localeCompare(x.name||x.uid));m||p(N)}finally{m||d(!1)}}return o.length?y():p([]),()=>{m=!0}},[t,o]),n?c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading admin groups…"})}):c.jsxs("div",{className:"max-w-5xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:s?"All Groups":"Your Groups"}),c.jsx("p",{className:"text-slate-600 mt-2",children:s?"You are a super admin.":"You are a group admin."})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[s&&c.jsx(fe,{to:"/admin/groups/new",className:"text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800",title:"Create a new group",children:"New Group"}),c.jsx(fe,{to:"/admin/users",className:"text-sm text-slate-700 underline",children:"Users"})]})]}),o.length===0?c.jsx("p",{className:"text-slate-600 mt-4",children:"No groups to manage."}):c.jsx("ul",{className:"mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:o.map(m=>{const y=m.pendingRequests||0,T="text-sm px-3 py-1.5 rounded-lg text-center leading-tight min-w-[9rem] whitespace-normal md:whitespace-nowrap",N=y>0?`${T} bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200`:`${T} bg-slate-100 text-slate-900 hover:bg-slate-200`;return c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"font-medium text-slate-900 truncate",children:m.name||m.id}),m.parent&&c.jsxs("div",{className:"text-xs text-slate-500 truncate",children:["Parent: ",m.parent]})]}),c.jsxs("div",{className:"flex gap-2 shrink-0",children:[c.jsx(fe,{to:`/admin/groups/${m.id}/requests`,className:N,title:y>0?`${y} pending`:void 0,children:y>0?`View Requests (${y})`:"View Requests"}),c.jsx(fe,{to:`/admin/groups/${m.id}/members`,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]",children:"Members"}),c.jsx(fe,{to:`/groups/${m.id}`,className:"text-sm px-3 py-1.5 rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200 whitespace-normal md:whitespace-nowrap leading-tight min-w-[8rem]",children:"Open Group"})]})]},m.id)})}),c.jsxs("section",{className:"mt-8 rounded-xl border border-slate-200 bg-white/70 p-5",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:"Users"}),c.jsx(fe,{to:"/admin/users",className:"text-sm text-slate-700 underline",children:"Open full users page"})]}),u?c.jsx("p",{className:"text-sm text-slate-600 mt-3",children:"Loading users…"}):h.length===0?c.jsx("p",{className:"text-sm text-slate-600 mt-3",children:"No users found."}):c.jsx("ul",{className:"mt-3 divide-y divide-slate-200",children:h.map(m=>c.jsx("li",{className:"py-3",children:c.jsxs("div",{className:"flex items-start justify-between gap-3",children:[c.jsxs("div",{className:"min-w-0",children:[c.jsx("div",{className:"text-sm font-medium text-slate-900 break-all",children:m.name||m.uid}),m.email&&c.jsx("div",{className:"text-xs text-slate-600 break-all",children:m.email}),c.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:m.groups.map(y=>c.jsx(fe,{to:`/admin/groups/${y.id}/members`,className:"text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200",title:"Manage members",children:y.name},y.id))})]}),c.jsx(fe,{to:`/admin/users?uid=${encodeURIComponent(m.uid)}`,className:"text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100 shrink-0",children:"View"})]})},m.uid))})]})]})}function UV(){const t=R.useMemo(()=>Le(ne),[]),e=Ke(ne),[n,r]=R.useState(!0),[s,i]=R.useState([]),[o,l]=R.useState(""),{search:u}=En();R.useEffect(()=>{const p=new URLSearchParams(u).get("uid")||"";p&&l(p)},[u]),R.useEffect(()=>{let h=!1;async function p(){try{if(r(!0),!e.currentUser){i([]);return}const y=(await ht(ve(t,"users"))).docs.map(T=>{const N=T.data();return{uid:T.id,displayName:(N==null?void 0:N.displayName)||(N==null?void 0:N.name)||"",email:(N==null?void 0:N.email)||"",groups:[]}});for(const T of y){try{const N=await ht(ve(t,`users/${T.uid}/memberships`)),C=[];for(const x of N.docs){const w=x.id;try{const k=(await Ve(J(t,"groups",w))).data()||{};C.push({id:w,name:(k==null?void 0:k.name)||w})}catch{C.push({id:w,name:w})}}T.groups=C.sort((x,w)=>x.name.localeCompare(w.name))}catch{T.groups=[]}if(h)return}y.sort((T,N)=>(T.displayName||T.email||T.uid).localeCompare(N.displayName||N.email||N.uid)),h||i(y)}finally{h||r(!1)}}return p(),()=>{h=!0}},[t,e.currentUser]);const d=s.filter(h=>{const p=o.trim().toLowerCase();return p?h.uid.toLowerCase().includes(p)||(h.displayName||"").toLowerCase().includes(p)||(h.email||"").toLowerCase().includes(p)||h.groups.some(m=>m.name.toLowerCase().includes(p)||m.id.toLowerCase().includes(p)):!0});return n?c.jsx("div",{className:"max-w-5xl mx-auto p-6",children:c.jsx($n,{label:"Loading users…"})}):c.jsxs("div",{className:"max-w-5xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Users"}),c.jsx("input",{value:o,onChange:h=>l(h.target.value),placeholder:"Search users…",className:"rounded-lg border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none w-56"})]}),c.jsxs("div",{className:"mt-4 rounded-xl border border-slate-200 bg-white/70 overflow-hidden",children:[c.jsxs("div",{className:"grid grid-cols-12 gap-2 px-4 py-2 text-xs font-medium text-slate-600",children:[c.jsx("div",{className:"col-span-4",children:"Name"}),c.jsx("div",{className:"col-span-3",children:"Email"}),c.jsx("div",{className:"col-span-3",children:"Groups"}),c.jsx("div",{className:"col-span-2 text-right",children:"Actions"})]}),c.jsx("div",{className:"divide-y divide-slate-200",children:d.length===0?c.jsx("div",{className:"px-4 py-4 text-sm text-slate-600",children:"No users found."}):d.map(h=>c.jsxs("div",{className:"grid grid-cols-12 gap-2 px-4 py-3 items-start",children:[c.jsxs("div",{className:"col-span-4 min-w-0",children:[c.jsx("div",{className:"text-sm text-slate-900 truncate",children:h.displayName||h.uid}),h.email&&c.jsx("div",{className:"text-xs text-slate-600 truncate",children:h.email})]}),c.jsx("div",{className:"col-span-3 min-w-0",children:c.jsxs("div",{className:"flex flex-wrap gap-1",children:[h.groups.map(p=>c.jsx(fe,{to:`/admin/groups/${p.id}/members`,className:"text-xs rounded-full bg-slate-100 px-2 py-0.5 text-slate-800 hover:bg-slate-200",title:"Manage members",children:p.name},p.id)),h.groups.length===0&&c.jsx("span",{className:"text-xs text-slate-600",children:"—"})]})}),c.jsx("div",{className:"col-span-3 min-w-0",children:c.jsx("span",{className:"text-xs break-all",children:h.uid})}),c.jsx("div",{className:"col-span-2 text-right",children:c.jsx(fe,{to:`/admin/users?uid=${encodeURIComponent(h.uid)}`,className:"text-xs rounded-lg border border-slate-300 px-2 py-1 hover:bg-slate-100",children:"View"})})]},h.uid))})]})]})}function FV(){const{slug:t}=di(),e=Le(ne),[n,r]=R.useState(""),[s,i]=R.useState([]),[o,l]=R.useState(!0),[u,d]=R.useState(""),h=t;R.useEffect(()=>{let y=!0;async function T(){if(h){l(!0);try{const N=J(e,"groups",h),C=await Ve(N);r(C.exists()&&C.data().name||$V(h));const x=ve(e,`groups/${h}/membershipRequests`),w=await ht(x);if(!y)return;const E=[];w.forEach(k=>E.push(k.data())),i(E)}finally{l(!1)}}}return T(),()=>{y=!1}},[e,h]);async function p(y){d(y.uid);try{await ln(J(e,`users/${y.uid}/memberships/${h}`),{groupId:h,approvedAt:Oe(),approvedBy:"admin"},{merge:!0}),await ln(J(e,`groups/${h}/members/${y.uid}`),{uid:y.uid,displayName:y.displayName||"Member",joinedAt:Oe()},{merge:!0}),await Promise.all([Rt(J(e,`groups/${h}/membershipRequests/${y.uid}`)),Rt(J(e,`users/${y.uid}/membershipRequests/${h}`))]),i(T=>T.filter(N=>N.uid!==y.uid))}finally{d("")}}async function m(y){d(y.uid);try{await Promise.all([Rt(J(e,`groups/${h}/membershipRequests/${y.uid}`)),Rt(J(e,`users/${y.uid}/membershipRequests/${h}`))]),i(T=>T.filter(N=>N.uid!==y.uid))}finally{d("")}}return h?c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[c.jsx("div",{className:"mb-4",children:c.jsxs(fe,{to:"/admin",className:"inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-muted",children:[c.jsx("span",{"aria-hidden":!0,children:"←"}),c.jsx("span",{children:"Return to Admin Console"})]})}),c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Pending Requests"}),c.jsxs("p",{className:"text-slate-600",children:["Group: ",n]})]}),c.jsx(fe,{to:`/groups/${h}`,className:"text-sm text-slate-700 underline",children:"Back to group"})]}),o?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):s.length===0?c.jsx("p",{className:"text-slate-600",children:"No pending requests."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:s.map(y=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:y.displayName||y.uid}),c.jsx("div",{className:"text-xs text-slate-500 truncate",children:y.uid})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>p(y),disabled:!!u,className:"text-xs px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-60",children:u===y.uid?"Working…":"Approve"}),c.jsx("button",{onClick:()=>m(y),disabled:!!u,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:"Deny"})]})]},y.uid))})]}):c.jsx("div",{className:"p-6",children:"Missing group slug."})}function $V(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function BV(){const{slug:t}=di(),e=R.useMemo(()=>Le(ne),[]),n=Ke(ne),[r,s]=R.useState(""),[i,o]=R.useState([]),[l,u]=R.useState({}),[d,h]=R.useState(!0),[p,m]=R.useState(""),[y,T]=R.useState(""),[N,C]=R.useState(!1),[x,w]=R.useState(""),[E,k]=R.useState([]),[O,M]=R.useState(""),[S,v]=R.useState(""),I=(t||"").trim();R.useEffect(()=>{let Y=!0;async function $(){if(I){h(!0),T("");try{const Q=J(e,"groups",I),ge=await Ve(Q);s(ge.exists()&&ge.data().name||zV(I));const le=n.currentUser;if(le){const Ce=le.uid;if((await Ve(J(e,"admins",Ce))).exists())C(!0);else{const ar=await Ve(J(e,`groups/${I}/groupAdmins/${Ce}`));C(ar.exists())}}else C(!1);const ee=await ht(ve(e,`groups/${I}/members`));if(!Y)return;const nt=[],wt=await ht(ve(e,`groups/${I}/groupAdmins`)),We={};wt.forEach(Ce=>{We[Ce.id]=!0}),u(We),ee.forEach(Ce=>nt.push({uid:Ce.id,...Ce.data()})),nt.sort((Ce,Dt)=>(Ce.displayName||Ce.uid).localeCompare(Dt.displayName||Dt.uid)),o(nt)}catch(Q){T((Q==null?void 0:Q.message)||"Failed to load members.")}finally{h(!1)}}}$();async function H(){try{const ge=(await ht(ve(e,"users"))).docs.map(le=>{const ee=le.data();return{uid:le.id,displayName:(ee==null?void 0:ee.displayName)||(ee==null?void 0:ee.name)||"",email:(ee==null?void 0:ee.email)||""}});ge.sort((le,ee)=>(le.displayName||le.email||le.uid).localeCompare(ee.displayName||ee.email||ee.uid)),k(ge)}catch{k([])}}return H(),()=>{Y=!1}},[e,I]);async function A(Y,$,H){var ge,le;const Q=Y.trim();if(Q){T(""),m("add");try{const ee=gI(e),nt=J(e,`groups/${I}/members/${Q}`);{const We={uid:Q,displayName:$||Q,role:"member",joinedAt:Oe(),addedBy:((ge=n.currentUser)==null?void 0:ge.uid)||"unknown"};H&&(We.email=H),ee.set(nt,We,{merge:!0})}const wt=J(e,`users/${Q}/memberships/${I}`);ee.set(wt,{groupId:I,approvedAt:Oe(),approvedBy:((le=n.currentUser)==null?void 0:le.uid)||"admin"},{merge:!0}),await ee.commit(),o(We=>{const Ce=[...We.filter(Dt=>Dt.uid!==Q),{uid:Q,displayName:$||Q,email:H}];return Ce.sort((Dt,ar)=>(Dt.displayName||Dt.uid).localeCompare(ar.displayName||ar.uid)),Ce}),w(""),v("")}catch(ee){T((ee==null?void 0:ee.message)||"Failed to add member. Check Firestore rules.")}finally{m("")}}}async function P(){await A(x)}async function j(Y){if(Y.preventDefault(),!S)return;const $=E.find(H=>H.uid===S);await A(S,$==null?void 0:$.displayName,$==null?void 0:$.email)}async function b(Y){var $;m(`admin:${Y}`),T("");try{await ln(J(e,`groups/${I}/groupAdmins/${Y}`),{uid:Y,grantedBy:(($=n.currentUser)==null?void 0:$.uid)||"unknown",createdAt:Oe()},{merge:!0}),u(H=>({...H,[Y]:!0}))}catch(H){T((H==null?void 0:H.message)||"Failed to grant admin.")}finally{m("")}}async function pt(Y){m(`admin:${Y}`),T("");try{await Rt(J(e,`groups/${I}/groupAdmins/${Y}`)),u($=>{const H={...$};return delete H[Y],H})}catch($){T(($==null?void 0:$.message)||"Failed to remove admin.")}finally{m("")}}async function Tn(Y){m(Y),T("");try{await Rt(J(e,`groups/${I}/members/${Y}`)),await Rt(J(e,`users/${Y}/memberships/${I}`)),o($=>$.filter(H=>H.uid!==Y))}catch($){T(($==null?void 0:$.message)||"Failed to remove member.")}finally{m("")}}if(!I)return c.jsx("div",{className:"p-6",children:"Missing group slug."});const or=R.useMemo(()=>{const Y=O.trim().toLowerCase();return Y?E.filter($=>{const H=($.displayName||"").toLowerCase(),Q=($.email||"").toLowerCase();return H.includes(Y)||Q.includes(Y)||$.uid.toLowerCase().includes(Y)}):E},[E,O]);return c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Group Members"}),c.jsxs("p",{className:"text-slate-600",children:["Group: ",r]})]}),c.jsx(fe,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),y&&c.jsx("div",{className:"mb-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800",children:y}),c.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white/70 p-4 mb-6",children:[c.jsx("h2",{className:"font-medium text-slate-900",children:"Add Member (by Name)"}),c.jsxs("form",{onSubmit:j,className:"mt-2 grid gap-2 sm:grid-cols-6",children:[c.jsx("input",{value:O,onChange:Y=>M(Y.target.value),placeholder:"Search users by name, email, or UID…",className:"sm:col-span-2 rounded-lg border border-slate-300 px-3 py-2 text-sm","aria-label":"Filter users",disabled:!N}),c.jsxs("select",{className:"sm:col-span-3 rounded-lg border border-slate-300 px-2 py-2 text-sm",value:S,onChange:Y=>v(Y.target.value),"aria-label":"Select user to add",disabled:!N,children:[c.jsx("option",{value:"",children:"Select a user…"}),or.map(Y=>c.jsx("option",{value:Y.uid,children:(Y.displayName||"Unnamed")+(Y.email?` • ${Y.email}`:"")},Y.uid))]}),c.jsx("div",{className:"sm:col-span-1",children:c.jsx("button",{type:"submit",disabled:!S||!!p||!N,className:"rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 disabled:opacity-60",children:p==="add"?"Adding…":"Add to group"})})]}),c.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Admins: choose a user to add them to this group."})]}),c.jsxs("div",{className:"rounded-xl border border-slate-200 bg-white/70 p-4 mb-6",children:[c.jsx("h2",{className:"font-medium text-slate-900",children:"Add Member (by UID)"}),c.jsxs("div",{className:"mt-2 flex gap-2",children:[c.jsx("input",{value:x,onChange:Y=>w(Y.target.value),placeholder:"Paste a user's UID",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm",disabled:!N}),c.jsx("button",{onClick:P,disabled:!x.trim()||!!p||!N,className:"text-sm px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:p==="add"?"Adding…":"Add"})]}),c.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Tip: you can find a user's UID in Firebase → Authentication."})]}),d?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):i.length===0?c.jsx("p",{className:"text-slate-600",children:"No members yet."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:i.map(Y=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:Y.displayName||Y.uid}),c.jsx("div",{className:"text-xs text-slate-500 truncate",children:Y.uid})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[l[Y.uid]?c.jsx("button",{onClick:()=>pt(Y.uid),disabled:!!p||!N,className:"text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 disabled:opacity-60",children:p===`admin:${Y.uid}`?"Updating…":"Remove admin"}):c.jsx("button",{onClick:()=>b(Y.uid),disabled:!!p||!N,className:"text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:p===`admin:${Y.uid}`?"Updating…":"Make admin"}),c.jsx("button",{onClick:()=>Tn(Y.uid),disabled:!!p||!N,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:p===Y.uid?"Removing…":"Remove"})]})]},Y.uid))})]})}function zV(t){return t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function qV(){const{slug:t}=di(),e=Le(ne),n=t,[r,s]=R.useState([]),[i,o]=R.useState(!0);return R.useEffect(()=>{let l=!0;async function u(){if(n){o(!0);try{const d=ve(e,`groups/${n}/groupEvents`),h=sn(d,jr("at","desc")),p=await ht(h);if(!l)return;const m=[];p.forEach(y=>m.push({id:y.id,...y.data()})),s(m)}finally{o(!1)}}}return u(),()=>{l=!1}},[e,n]),c.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[c.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Audit Log"}),c.jsx("p",{className:"text-slate-600",children:"Recent events for this group."})]}),c.jsx(fe,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),i?c.jsx("p",{className:"text-slate-600",children:"Loading…"}):r.length===0?c.jsx("p",{className:"text-slate-600",children:"No events yet."}):c.jsx("ul",{className:"divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white/70",children:r.map(l=>{var u;return c.jsxs("li",{className:"p-4",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"font-medium text-slate-900",children:l.type.replace(/_/g," ")}),c.jsx("div",{className:"text-xs text-slate-500",children:(u=l.at)!=null&&u.toDate?l.at.toDate().toLocaleString():"—"})]}),c.jsx("div",{className:"text-xs text-slate-600 mt-1",children:l.uid&&c.jsxs(c.Fragment,{children:["User: ",c.jsx("code",{children:l.uid})]})}),l.payload&&c.jsx("pre",{className:"mt-2 text-xs bg-slate-50 rounded-lg p-2 overflow-auto",children:JSON.stringify(l.payload,null,2)})]},l.id)})})]})}function WV(){const t=vg(ne),e=Le(ne),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState([]),[u,d]=R.useState(!1),[h,p]=R.useState(null);R.useEffect(()=>{async function y(){const T=await ht(ve(e,"groups")),N=[];T.forEach(C=>N.push({id:C.id,...C.data()})),N.sort((C,x)=>(C.name||C.id).localeCompare(x.name||x.id)),l(N)}y()},[e]);async function m(){d(!0),p(null);try{const T=await _g(t,"grantGroupAdminByEmail")({email:n,groupId:s});p(`✅ Granted admin to ${n} (uid=${T.data.uid})`),r("")}catch(y){p(`❌ ${(y==null?void 0:y.message)||"Failed"}`)}finally{d(!1)}}return c.jsxs("div",{className:"max-w-xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Grant Group Admin (by email)"}),c.jsxs("div",{className:"mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4",children:[c.jsxs("label",{className:"block text-sm",children:[c.jsx("span",{className:"font-medium text-slate-700",children:"User email"}),c.jsx("input",{value:n,onChange:y=>r(y.target.value),placeholder:"user@example.com",className:"mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})]}),c.jsxs("label",{className:"block text-sm",children:[c.jsx("span",{className:"font-medium text-slate-700",children:"Group"}),c.jsxs("select",{value:s,onChange:y=>i(y.target.value),className:"mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 text-sm",children:[c.jsx("option",{value:"",children:"Select a group…"}),o.map(y=>c.jsx("option",{value:y.id,children:y.name||y.id},y.id))]})]}),c.jsxs("div",{className:"flex gap-3 items-center",children:[c.jsx("button",{onClick:m,disabled:!n||!s||u,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:u?"Working…":"Grant admin"}),h&&c.jsx("p",{className:"text-sm text-slate-700",children:h})]})]})]})}function HV(t){return t.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")}function hw(){const t=Le(ne),e=Lr(),[n,r]=R.useState(""),[s,i]=R.useState(""),[o,l]=R.useState(""),[u,d]=R.useState(""),[h,p]=R.useState(""),[m,y]=R.useState(""),[T,N]=R.useState(""),[C,x]=R.useState(""),[w,E]=R.useState(!1),[k,O]=R.useState(null),M=R.useMemo(()=>s||HV(n),[s,n]);async function S(){const v=M.trim();if(!n.trim()||!v){O("⚠️ Name and slug are required.");return}E(!0),O(null);try{const I=J(t,"groups",v);if((await Ve(I)).exists()){O("❌ A group with that slug already exists."),E(!1);return}await ln(I,{id:v,name:n.trim(),slug:v,description:o.trim()||null,parent:u||null,campus:h||null,meetingDay:m||null,meetingTime:T||null,imageUrl:C||null,createdAt:Oe(),updatedAt:Oe()}),e(`/admin/groups/${v}/edit`,{replace:!0})}catch(I){O("❌ "+((I==null?void 0:I.message)||"Failed to create group."))}finally{E(!1)}}return c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Create Group"}),c.jsxs("div",{className:"mt-4 grid gap-3",children:[c.jsxs(Wr,{label:"Name",children:[c.jsx("input",{value:n,onChange:v=>r(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"}),c.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Slug preview: ",c.jsx("code",{children:M||"—"})]})]}),c.jsx(Wr,{label:"Slug (optional)",children:c.jsx("input",{value:s,onChange:v=>i(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"auto from name if blank"})}),c.jsx(Wr,{label:"Description",children:c.jsx("textarea",{value:o,onChange:v=>l(v.target.value),rows:4,className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Wr,{label:"Parent ministry (optional)",children:c.jsx("input",{value:u,onChange:v=>d(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Wr,{label:"Campus (optional)",children:c.jsx("input",{value:h,onChange:v=>p(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})})]}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Wr,{label:"Meeting day (optional)",children:c.jsxs("select",{value:m,onChange:v=>y(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70",children:[c.jsx("option",{value:"",children:"—"}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(v=>c.jsx("option",{value:v,children:v},v))]})}),c.jsx(Wr,{label:"Meeting time (optional)",children:c.jsx("input",{value:T,onChange:v=>N(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"e.g., 7:00pm"})})]}),c.jsx(Wr,{label:"Image URL (optional)",children:c.jsx("input",{value:C,onChange:v=>x(v.target.value),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"https://…"})}),k&&c.jsx("p",{className:"text-sm text-slate-700",children:k}),c.jsx("div",{className:"flex gap-3",children:c.jsx("button",{onClick:S,disabled:w,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:w?"Creating…":"Create group"})})]})]})}function Wr({label:t,children:e}){return c.jsxs("label",{className:"block",children:[c.jsx("div",{className:"text-sm font-medium text-slate-700",children:t}),c.jsx("div",{className:"mt-1",children:e})]})}function GV(){const{slug:t}=di(),e=Le(ne),n=Lr(),[r,s]=R.useState(null),[i,o]=R.useState(!0),[l,u]=R.useState(!1),[d,h]=R.useState(null);R.useEffect(()=>{let y=!0;async function T(){if(!t)return;o(!0);const N=await Ve(J(e,"groups",t));y&&(s(N.exists()?N.data():{}),o(!1))}return T(),()=>{y=!1}},[e,t]);async function p(){if(t){u(!0),h(null);try{await ln(J(e,"groups",t),{...r,name:String((r==null?void 0:r.name)||"").trim(),description:((r==null?void 0:r.description)||"").trim()||null,updatedAt:Oe()},{merge:!0}),h("✅ Saved")}catch(y){h((y==null?void 0:y.message)||"Failed to save.")}finally{u(!1)}}}async function m(){if(t&&confirm("Delete this group? This cannot be undone."))try{await Rt(J(e,"groups",t)),n("/admin/groups",{replace:!0})}catch(y){h((y==null?void 0:y.message)||"Failed to delete.")}}return i?c.jsx("div",{className:"max-w-3xl mx-auto p-6",children:"Loading…"}):r?c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Edit Group"}),c.jsx(fe,{to:"/admin/groups",className:"text-sm text-slate-700 underline",children:"Back to groups"})]}),c.jsxs("div",{className:"mt-4 grid gap-3",children:[c.jsx(Ls,{label:"Name",children:c.jsx("input",{value:(r==null?void 0:r.name)||"",onChange:y=>s({...r,name:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Ls,{label:"Description",children:c.jsx("textarea",{value:(r==null?void 0:r.description)||"",onChange:y=>s({...r,description:y.target.value}),rows:4,className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Ls,{label:"Parent ministry",children:c.jsx("input",{value:(r==null?void 0:r.parent)||"",onChange:y=>s({...r,parent:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})}),c.jsx(Ls,{label:"Campus",children:c.jsx("input",{value:(r==null?void 0:r.campus)||"",onChange:y=>s({...r,campus:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"})})]}),c.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[c.jsx(Ls,{label:"Meeting day",children:c.jsxs("select",{value:(r==null?void 0:r.meetingDay)||"",onChange:y=>s({...r,meetingDay:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white/70",children:[c.jsx("option",{value:"",children:"—"}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map(y=>c.jsx("option",{value:y,children:y},y))]})}),c.jsx(Ls,{label:"Meeting time",children:c.jsx("input",{value:(r==null?void 0:r.meetingTime)||"",onChange:y=>s({...r,meetingTime:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"e.g., 7:00pm"})})]}),c.jsx(Ls,{label:"Image URL",children:c.jsx("input",{value:(r==null?void 0:r.imageUrl)||"",onChange:y=>s({...r,imageUrl:y.target.value}),className:"w-full rounded-lg border border-slate-300 px-3 py-2 text-sm",placeholder:"https://…"})}),d&&c.jsx("p",{className:"text-sm text-slate-700",children:d}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:p,disabled:l,className:"px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:l?"Saving…":"Save changes"}),c.jsx("button",{onClick:m,className:"px-4 py-2 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200",children:"Delete group"})]})]})]}):c.jsx("div",{className:"max-w-3xl mx-auto p-6",children:"Not found."})}function Ls({label:t,children:e}){return c.jsxs("label",{className:"block",children:[c.jsx("div",{className:"text-sm font-medium text-slate-700",children:t}),c.jsx("div",{className:"mt-1",children:e})]})}function KV(){const t=Le(ne),e=Ke(ne),[n,r]=R.useState([]),[s,i]=R.useState(!0),[o,l]=R.useState(""),[u,d]=R.useState("");async function h(){i(!0);const y=await ht(ve(t,"admins")),T=[];y.forEach(N=>T.push({uid:N.id,...N.data()})),T.sort((N,C)=>N.uid.localeCompare(C.uid)),r(T),i(!1)}R.useEffect(()=>{h()},[]);async function p(){var T;const y=u.trim();if(y){l("add");try{await ln(J(t,"admins",y),{createdAt:Oe(),createdBy:((T=e.currentUser)==null?void 0:T.uid)||"unknown"},{merge:!0}),d(""),await h()}finally{l("")}}}async function m(y){l(y);try{await Rt(J(t,"admins",y)),await h()}finally{l("")}}return c.jsxs("div",{className:"max-w-3xl mx-auto p-6",children:[c.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Super Admins"}),c.jsx("p",{className:"text-slate-600 mt-1",children:"Add or remove super admins by UID."}),c.jsxs("div",{className:"mt-4 rounded-2xl border border-slate-200 bg-white/70 p-4",children:[c.jsx("label",{className:"block text-sm font-medium text-slate-700",children:"Add by UID"}),c.jsxs("div",{className:"mt-2 flex gap-2",children:[c.jsx("input",{value:u,onChange:y=>d(y.target.value),placeholder:"Paste UID from Firebase Authentication → Users",className:"flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"}),c.jsx("button",{onClick:p,disabled:!u.trim()||!!o,className:"px-3 py-2 rounded-lg text-sm bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60",children:o==="add"?"Adding…":"Add"})]})]}),c.jsx("div",{className:"mt-4 rounded-2xl border border-slate-200 bg-white/70",children:s?c.jsx("div",{className:"p-4 text-slate-600",children:"Loading…"}):n.length===0?c.jsx("div",{className:"p-4 text-slate-600",children:"No super admins yet."}):c.jsx("ul",{className:"divide-y divide-slate-200",children:n.map(y=>c.jsxs("li",{className:"p-4 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-medium text-slate-900",children:y.uid}),c.jsxs("div",{className:"text-xs text-slate-500",children:["Created by: ",y.createdBy||"—"]})]}),c.jsx("button",{onClick:()=>m(y.uid),disabled:!!o,className:"text-xs px-3 py-1.5 rounded-lg bg-rose-100 text-rose-800 hover:bg-rose-200 disabled:opacity-60",children:o===y.uid?"Removing…":"Remove"})]},y.uid))})})]})}function QV({children:t}){const e=Ke(ne),n=Le(ne),[r,s]=q.useState(!1),[i,o]=q.useState(null),[l,u]=q.useState(null),[d,h]=q.useState(null);return q.useEffect(()=>{const p=sr(e,async m=>{if(s(!0),!m){o(null),u(!1);return}o(m.uid);try{const y=await Ve(J(n,"admins",m.uid));u(y.exists())}catch(y){h((y==null?void 0:y.message)||String(y)),u(!1)}});return()=>p()},[e,n]),!r||l===null?c.jsx("div",{className:"max-w-xl mx-auto p-6",children:"Checking…"}):l?c.jsx(c.Fragment,{children:t}):c.jsxs("div",{className:"max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70",children:[c.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:"AdminRouteDebug"}),c.jsxs("p",{className:"text-sm text-slate-700 mt-2",children:["UID: ",c.jsx("code",{children:i||"—"})]}),c.jsxs("p",{className:"text-sm text-slate-700",children:["admins/UID exists? ",c.jsx("strong",{children:l?"YES":"NO"})]}),!i&&c.jsx("p",{className:"mt-3 text-sm text-rose-700",children:"You are not signed in."}),i&&!l&&c.jsxs("p",{className:"mt-3 text-sm text-amber-700",children:["Signed in, but no document at ",c.jsxs("code",{children:["admins/","{uid}"]}),". Create that doc in Firestore for this project."]}),d&&c.jsxs("p",{className:"mt-3 text-sm text-rose-700",children:["Error reading ",c.jsxs("code",{children:["admins/","{uid}"]}),": ",d]})]})}function YV(){var d,h,p;const t=Ke(ne),[e,n]=R.useState(!1),[r,s]=R.useState(((d=t.currentUser)==null?void 0:d.uid)||null),[i,o]=R.useState(((h=t.currentUser)==null?void 0:h.email)||null);R.useEffect(()=>{const m=sr(t,y=>{s((y==null?void 0:y.uid)||null),o((y==null?void 0:y.email)||null),n(!0)});return()=>m()},[t]);const l=(p=ne.options)==null?void 0:p.projectId;return c.jsxs("div",{className:"max-w-xl mx-auto p-6 rounded-2xl border border-slate-200 bg-white/70",children:[c.jsx("h1",{className:"text-lg font-semibold text-slate-900",children:"Auth Debug: WhoAmI"}),c.jsxs("div",{className:"mt-2 text-sm text-slate-700",children:[c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"ready:"})," ",String(e)]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"email:"})," ",i||"—"]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"uid:"})," ",c.jsx("code",{children:r||"—"})]}),c.jsxs("div",{className:"mt-2",children:[c.jsx("span",{className:"font-medium",children:"SDK projectId:"})," ",c.jsx("code",{children:l||"—"})]}),c.jsxs("div",{children:[c.jsx("span",{className:"font-medium",children:"ENV projectId:"})," ",c.jsx("code",{children:String("immanuel-app")})]})]})]})}function JV({children:t}){const e=En(),n=e.pathname==="/login"||e.pathname==="/signup"||e.pathname==="/forgot"||e.pathname==="/reset";return c.jsxs(c.Fragment,{children:[n?c.jsx(BO,{}):c.jsx(qO,{}),t]})}function XV(){return c.jsx(z1,{children:c.jsx(jO,{children:c.jsx(JV,{children:c.jsxs(D1,{children:[c.jsx(Ee,{path:"/",element:c.jsx(Yn,{to:"/login",replace:!0})}),c.jsx(Ee,{path:"/login",element:c.jsx(WO,{})}),c.jsx(Ee,{path:"/signup",element:c.jsx(GO,{})}),c.jsx(Ee,{path:"/forgot",element:c.jsx(AV,{})}),c.jsx(Ee,{path:"/reset",element:c.jsx(CV,{})}),c.jsx(Ee,{path:"/welcome",element:c.jsx(hn,{children:c.jsx(PV,{})})}),c.jsx(Ee,{path:"/dashboard",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(YO,{})})})}),c.jsx(Ee,{path:"/groups",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(JO,{})})})}),c.jsx(Ee,{path:"/forums",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(XO,{})})})}),c.jsx(Ee,{path:"/resources",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(ZO,{})})})}),c.jsx(Ee,{path:"/events",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(eV,{})})})}),c.jsx(Ee,{path:"/profile",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(SV,{})})})}),c.jsx(Ee,{path:"/settings",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(NV,{})})})}),c.jsx(Ee,{path:"/sunday-resources",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(OV,{})})})}),c.jsx(Ee,{path:"/groups/explore",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(UO,{})})})}),c.jsx(Ee,{path:"/groups/:slug",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(FO,{})})})}),c.jsx(Ee,{path:"/groups/:slug/dm/:otherUid",element:c.jsx(hn,{children:c.jsx(Ot,{children:c.jsx(LV,{})})})}),c.jsx(Ee,{path:"/admin",element:c.jsx(Vs,{children:c.jsx(Yn,{to:"/admin/groups",replace:!0})})}),c.jsx(Ee,{path:"/admin/groups",element:c.jsx(Vs,{children:c.jsx(Ot,{children:c.jsx(MV,{})})})}),c.jsx(Ee,{path:"/admin/groups/:slug/requests",element:c.jsx(kh,{children:c.jsx(Ot,{children:c.jsx(FV,{})})})}),c.jsx(Ee,{path:"/admin/groups/:slug/members",element:c.jsx(kh,{children:c.jsx(Ot,{children:c.jsx(BV,{})})})}),c.jsx(Ee,{path:"/admin/groups/:slug/events",element:c.jsx(kh,{children:c.jsx(Ot,{children:c.jsx(qV,{})})})}),c.jsx(Ee,{path:"/admin/super-admins",element:c.jsx(Vs,{children:c.jsx(KV,{})})}),c.jsx(Ee,{path:"/admin/group-admins/by-email",element:c.jsx(Vs,{children:c.jsx(WV,{})})}),c.jsx(Ee,{path:"/admin/users",element:c.jsx(Vs,{children:c.jsx(UV,{})})}),c.jsx(Ee,{path:"/admin/groups/new",element:c.jsx(Vs,{children:c.jsx(hw,{})})}),c.jsx(Ee,{path:"/admin/groups/:slug/edit",element:c.jsx(Vs,{children:c.jsx(GV,{})})}),c.jsx(Ee,{path:"/__whoami",element:c.jsx(YV,{})}),c.jsx(Ee,{path:"/__admin/new",element:c.jsx(QV,{children:c.jsx(hw,{})})}),c.jsx(Ee,{path:"*",element:c.jsx(Yn,{to:"/dashboard",replace:!0})})]})})})})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(t=>{console.error("SW registration failed",t)})});jh.createRoot(document.getElementById("root")).render(c.jsx(q.StrictMode,{children:c.jsx(XV,{})}));
