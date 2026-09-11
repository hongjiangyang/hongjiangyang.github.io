import{r as e,t}from"./rolldown-runtime-C60lm6uB.js";import{i as n,n as r,r as i}from"./framework-D_rUT4EX.js";var a=e(n(),1);function o({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=a.useRef(e!==void 0),[o,s]=a.useState(t);return[i?e:o,a.useCallback(e=>{i||s(e)},[])]}var s={...a},c={};function l(e,t){let n=a.useRef(c);return n.current===c&&(n.current=e(t)),n}var u=s.useInsertionEffect,d=u&&u!==s.useLayoutEffect?u:e=>e();function f(e){let t=l(p).current;return t.next=e,d(t.effect),t.trampoline}function p(){let e={next:void 0,callback:m,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function m(){}var h=typeof document<`u`?a.useLayoutEffect:()=>{},g=a.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},nextIndexRef:{current:0}});function _(){return a.useContext(g)}var v=i();function y(e){let{children:t,elementsRef:n,labelsRef:r,onMapChange:i}=e,o=f(i),[,s]=a.useState(!1),c=l(x).current,u=l(b).current,d=a.useRef(0),p=a.useRef(!0),m=a.useRef([]),_=a.useRef(null),y=f(()=>{p.current||(p.current=!0,s(e=>!e))}),E=f((e,t)=>{u.set(e,t),y()}),D=f(e=>{u.delete(e),y()}),O=f(e=>{let t=new Map;return n.current.length=0,r&&(r.current.length=0),e.forEach(e=>{t.set(e.element,{...e.registration.metadata??{},index:e.index}),n.current[e.index]=e.element,r&&(r.current[e.index]=e.registration.label===void 0?e.registration.textRef?.current?.textContent??e.element.textContent:e.registration.label)}),d.current=n.current.length,t});function k(e){if(_.current?.disconnect(),_.current=null,typeof MutationObserver!=`function`||e.length<2)return;let t=new MutationObserver(n=>{if(!w(n))return;let r=null;for(let n of e)if(n.isConnected){if(r&&T(r,n)>0){t.disconnect(),y();return}r=n}});_.current=t;let n=new Set;for(let t=1;t<e.length;t+=1){let r=C(e[t-1],e[t]);r&&n.add(r)}n.forEach(e=>t.observe(e,{childList:!0}))}let A=f(()=>{let[e,t]=S(u),n=O(e);k(t),m.current=e,p.current=!1,c.forEach(e=>e(n)),o(n)});h(()=>(p.current||O(m.current),()=>{n.current=[],r&&(r.current=[])}),[n,r,O]),h(()=>{p.current&&A()}),h(()=>()=>{_.current?.disconnect(),p.current=!0},[]);let j=f(e=>(c.add(e),()=>{c.delete(e)})),M=a.useMemo(()=>({register:E,unregister:D,subscribeMapChange:j,nextIndexRef:d}),[E,D,j,d]);return(0,v.jsx)(g.Provider,{value:M,children:t})}function b(){return new Map}function x(){return new Set}function S(e){let t=new Set,n=[],r=[];e.forEach((e,i)=>{if(!i.isConnected)return;let a=e.index,o={index:a??-1,element:i,registration:e};a===null?r.push(o):a>=0&&(t.add(a),n.push(o))});let i=0;return r.sort((e,t)=>T(e.element,t.element)),r.forEach(e=>{for(;t.has(i);)i+=1;e.index=i,n.push(e),i+=1}),t.size>0&&n.sort((e,t)=>e.index-t.index),[n,r.map(e=>e.element)]}function C(e,t){let n=e.parentElement;for(;n&&!n.contains(t);)n=n.parentElement;return n}function w(e){for(let t of e)for(let e=0;e<t.removedNodes.length;e+=1)if(t.removedNodes[e].isConnected)return!0;return!1}function T(e,t){return e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1}function E(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}var D=E(`https://base-ui.com/production-error`,`Base UI`);function O(e,t,n,r){let i=l(A).current;return j(i,e,t,n,r)&&N(i,[e,t,n,r]),i.callback}function k(e){let t=l(A).current;return M(t,e)&&N(t,e),t.callback}function A(){return{callback:null,cleanup:null,refs:[]}}function j(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}function M(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}function N(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n;break;default:}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null;break;default:}}}}}}var P=19;function F(e){return P>=e}function I(e){if(!a.isValidElement(e))return null;let t=e,n=t.props;return(F(19)?n?.ref:t.ref)??null}function L(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}function R(){}var z=Object.freeze([]),B=Object.freeze({});function V(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}function ee(e,t){return typeof e==`function`?e(t):e}function H(e,t){return typeof e==`function`?e(t):e}var te={};function ne(e,t,n,r,i){if(!n&&!r&&!i&&!e)return ie(t);let a=ie(e);return t&&(a=U(a,t)),n&&(a=U(a,n)),r&&(a=U(a,r)),i&&(a=U(a,i)),a}function re(e){if(e.length===0)return te;if(e.length===1)return ie(e[0]);let t=ie(e[0]);for(let n=1;n<e.length;n+=1)t=U(t,e[n]);return t}function ie(e){return G(e)?{...se(e,te)}:W(e)}function U(e,t){return G(t)?se(t,e):ae(e,t)}function W(e){let t={...e};for(let e in t){let n=t[e];oe(e,n)&&(t[e]=q(n))}return t}function ae(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=L(e.style,r);break;case`className`:e[n]=le(e.className,r);break;default:oe(n,r)?e[n]=K(e[n],r):e[n]=r}}return e}function oe(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}function G(e){return typeof e==`function`}function se(e,t){return G(e)?e(t):e??te}function K(e,t){return t?e?(...n)=>{let r=n[0];if(ue(r)){let i=r;ce(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:q(t):e}function q(e){return e&&((...t)=>{let n=t[0];return ue(n)&&ce(n),e(...t)})}function ce(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function le(e,t){return t?e?t+` `+e:t:e}function ue(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}function de(e,t,n={}){let r=t.render,i=fe(t,n);return n.enabled===!1?null:he(e,r,i,n.state??B)}function fe(e,t={}){let{className:n,style:r,render:i}=e,{state:a=B,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?ee(n,a):void 0,d=l?H(r,a):void 0,f=l?V(a,c):B,p=l&&s?pe(s):void 0,m=l?L(f,p)??{}:B;return typeof document<`u`&&(l?Array.isArray(o)?m.ref=k([m.ref,I(i),...o]):m.ref=O(m.ref,I(i),o):O(null,null)),l?(u!==void 0&&(m.className=le(m.className,u)),d!==void 0&&(m.style=L(m.style,d)),m):B}function pe(e){return Array.isArray(e)?re(e):ne(void 0,e)}var me=Symbol.for(`react.lazy`);function he(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=ne(n,t.props);e.ref=n.ref;let i=t;return i?.$$typeof===me&&(i=a.Children.toArray(t)[0]),a.cloneElement(i,e)}if(e&&typeof e==`string`)return ge(e,n);throw Error(D(8))}function ge(e,t){return e===`button`?(0,a.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,a.createElement)(`img`,{alt:``,...t,key:t.key}):a.createElement(e,t)}var _e=0;function ve(e,t=`mui`){let[n,r]=a.useState(e),i=e||n;return a.useEffect(()=>{n??(_e+=1,r(`${t}-${_e}`))},[n,t]),i}var ye=s.useId;function be(e,t){if(ye!==void 0){let n=ye();return e??(t?`${t}-${n}`:n)}return ve(e,t)}function xe(e){return be(e,`base-ui`)}var Se=`none`,Ce=`trigger-press`,we=`outside-press`,Te=`item-press`,Ee=`close-press`,De=`clear-press`,Oe=`track-press`,ke=`input-change`,Ae=`input-clear`,je=`input-press`,Me=`focus-out`,Ne=`escape-key`,Pe=`list-navigation`,Fe=`keyboard`,Ie=`pointer`,Le=`drag`,Re=`cancel-open`;function ze(e,t,n,r){let i=!1,a=!1,o=r??B;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function Be(e,t,n){let r=n??B;return{reason:e,event:t??new Event(`base-ui`),...r}}function Ve(e){a.useEffect(e,z)}var He=null;globalThis.requestAnimationFrame;var Ue=new class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,n=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,n>0)for(let n=0;n<t.length;n+=1)t[n]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||=(requestAnimationFrame(this.tick),!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||(this.callbacks[t]=null,--this.callbacksCount)}},We=class e{static create(){return new e}static request(e){return Ue.request(e)}static cancel(e){return Ue.cancel(e)}currentId=He;request(e){this.cancel(),this.currentId=Ue.request(()=>{this.currentId=He,e()})}cancel=()=>{this.currentId!==He&&(Ue.cancel(this.currentId),this.currentId=He)};disposeEffect=()=>this.cancel};function Ge(){let e=l(We.create).current;return Ve(e.disposeEffect),e}function Ke(e,t=!1,n=!1){let[r,i]=a.useState(e&&t?`idle`:void 0),[o,s]=a.useState(e);return e&&!o&&(s(!0),i(`starting`)),!e&&o&&r!==`ending`&&!n&&i(`ending`),!e&&!o&&r===`ending`&&i(void 0),h(()=>{if(!e&&o&&r!==`ending`&&n){let e=We.request(()=>{i(`ending`)});return()=>{We.cancel(e)}}},[e,o,r,n]),h(()=>{if(!e||t)return;let n=We.request(()=>{i(void 0)});return()=>{We.cancel(n)}},[t,e]),h(()=>{if(!e||!t)return;e&&o&&r!==`idle`&&i(`starting`);let n=We.request(()=>{i(`idle`)});return()=>{We.cancel(n)}},[t,e,o,r]),{mounted:o,setMounted:s,transitionStatus:r}}function qe(e={}){let{guess:t,label:n,metadata:r,textRef:i,index:o}=e,{register:s,unregister:c,subscribeMapChange:l,nextIndexRef:u}=_(),d=a.useRef(-1),[f,p]=a.useState(o==null&&t?()=>{if(d.current===-1){let e=u.current;u.current+=1,d.current=e}return d.current}:-1),m=o??f,g=a.useRef(null),v=a.useCallback(e=>{let t=g.current;t&&c(t),g.current=e,e&&s(e,{metadata:r??null,index:o??null,label:n,textRef:i})},[o,s,c,r,n,i]);return h(()=>{if(o==null)return l(e=>{let t=g.current?e.get(g.current)?.index:null;t!=null&&p(t)})},[o,l]),{ref:v,index:m}}var Je=function(e){return e.startingStyle=`data-starting-style`,e.endingStyle=`data-ending-style`,e}({}),Ye={"data-starting-style":``},Xe={"data-ending-style":``},Ze={transitionStatus(e){return e===`starting`?Ye:e===`ending`?Xe:null}};function Qe(){return!0}function $e(e){return nt(e)?(e.nodeName||``).toLowerCase():`#document`}function et(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function tt(e){return((nt(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function nt(e){return Qe()?e instanceof Node||e instanceof et(e).Node:!1}function rt(e){return Qe()?e instanceof Element||e instanceof et(e).Element:!1}function it(e){return Qe()?e instanceof HTMLElement||e instanceof et(e).HTMLElement:!1}function at(e){return!Qe()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof et(e).ShadowRoot}function ot(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=_t(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function st(e){return/^(table|td|th)$/.test($e(e))}function ct(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var lt=/transform|translate|scale|rotate|perspective|filter/,ut=/paint|layout|strict|content/,dt=e=>!!e&&e!==`none`,ft;function pt(e){let t=rt(e)?_t(e):e;return dt(t.transform)||dt(t.translate)||dt(t.scale)||dt(t.rotate)||dt(t.perspective)||!ht()&&(dt(t.backdropFilter)||dt(t.filter))||lt.test(t.willChange||``)||ut.test(t.contain||``)}function mt(e){let t=yt(e);for(;it(t)&&!gt(t);){if(pt(t))return t;if(ct(t))return null;t=yt(t)}return null}function ht(){return ft??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),ft}function gt(e){return/^(html|body|#document)$/.test($e(e))}function _t(e){return et(e).getComputedStyle(e)}function vt(e){return rt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function yt(e){if($e(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||at(e)&&e.host||tt(e);return at(t)?t.host:t}function bt(e){let t=yt(e);return gt(t)?(e.ownerDocument||e).body:it(t)&&ot(t)?t:bt(t)}function xt(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=bt(e),i=r===e.ownerDocument?.body,a=et(r);if(i){let e=St(a);return t.concat(a,a.visualViewport||[],ot(r)?r:[],e&&n?xt(e):[])}else return t.concat(r,xt(r,[],n))}function St(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Ct=a.createContext(void 0);function wt(e=!1){let t=a.useContext(Ct);if(t===void 0&&!e)throw Error(D(16));return t}function Tt(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:o}=e,s=r&&t!==!1,c=r&&t===!1;return{props:a.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!o&&n&&(e.tabIndex=t?i:-1)),(o&&(t||s)||!o&&n)&&(e[`aria-disabled`]=n),o&&(!t||c)&&(e.disabled=n),e},[r,n,t,s,c,o,i])}}function Et(e){return e?.ownerDocument||document}function Dt(e,t,{detail:n=0}={}){e.dispatchEvent(new(et(e)).PointerEvent(`click`,{bubbles:!0,cancelable:!0,composed:!0,detail:n,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,altKey:t.altKey,metaKey:t.metaKey}))}function Ot(e={}){let{disabled:t=!1,focusableWhenDisabled:n,tabIndex:r=0,native:i=!0,composite:o}=e,s=a.useRef(null),c=wt(!0),l=o??c!==void 0,{props:u}=Tt({focusableWhenDisabled:n,disabled:t,composite:l,tabIndex:r,isNativeButton:i}),d=a.useCallback(()=>{let e=s.current;kt(e)&&l&&t&&u.disabled===void 0&&e.disabled&&(e.disabled=!1)},[t,u.disabled,l]);return h(d,[d]),{getButtonProps:a.useCallback((e={})=>{let{onClick:n,onMouseDown:r,onKeyUp:a,onKeyDown:o,onPointerDown:s,...c}=e;return ne({onClick(e){if(t){e.preventDefault();return}n?.(e)},onMouseDown(e){t||r?.(e)},onKeyDown(e){if(t||(ce(e),o?.(e),e.baseUIHandlerPrevented))return;let n=e.target===e.currentTarget,r=e.currentTarget,a=kt(r),s=!i&&At(r),c=n&&(i?a:!s),u=e.key===`Enter`,d=e.key===` `,f=r.getAttribute(`role`),p=f?.startsWith(`menuitem`)||f===`option`||f===`gridcell`;if(n&&l&&d){if(e.defaultPrevented&&p)return;e.preventDefault(),(!i||a)&&(e.preventBaseUIHandler(),Dt(r,e));return}if(!c||i||!d&&!u){n&&s&&d&&e.preventDefault();return}e.defaultPrevented||(e.preventDefault(),u&&(e.preventBaseUIHandler(),Dt(r,e)))},onKeyUp(e){if(!t){if(ce(e),a?.(e),e.target===e.currentTarget&&i&&l&&kt(e.currentTarget)&&e.key===` `){e.preventDefault();return}e.baseUIHandlerPrevented||e.target===e.currentTarget&&!i&&!l&&!e.defaultPrevented&&e.key===` `&&(e.preventBaseUIHandler(),Dt(e.currentTarget,e))}},onPointerDown(e){if(t){e.preventDefault();return}s?.(e)}},i?{type:`button`}:{role:`button`},u,c)},[t,u,l,i]),buttonRef:f(e=>{s.current=e,d()})}}function kt(e){return it(e)&&e.tagName===`BUTTON`}function At(e){return it(e)&&e.tagName===`A`&&!!e.href}function jt(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function Mt(e){let t=l(Nt,e).current;return t.next=e,h(t.effect),t}function Nt(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}function Pt(e){return e==null?e:`current`in e?e.current:e}var Ft=e(r(),1);function It(e,t=!1){let n=Ge();return f((r,i=null)=>{n.cancel();let a=Pt(e);if(a==null)return;let o=a,s=()=>{Ft.flushSync(r)};if(typeof o.getAnimations!=`function`||globalThis.BASE_UI_ANIMATIONS_DISABLED){r();return}function c(){Promise.all(o.getAnimations().map(e=>e.finished)).then(()=>{i?.aborted||s()},()=>{if(!i?.aborted){if(o.getAnimations().some(e=>e.pending||e.playState!==`finished`)){c();return}s()}})}if(t){let e=`data-starting-style`;if(!o.hasAttribute(e)){n.request(c);return}let t=new MutationObserver(()=>{o.hasAttribute(e)||(t.disconnect(),c())});t.observe(o,{attributes:!0,attributeFilter:[e]}),i?.addEventListener(`abort`,()=>t.disconnect(),{once:!0});return}n.request(c)})}function Lt(e){let{enabled:t=!0,open:n,ref:r,onComplete:i}=e,o=f(i),s=It(r,n);a.useEffect(()=>{if(!t)return;let e=new AbortController;return s(o,e.signal),()=>{e.abort()}},[t,n,o,s])}function Rt(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var{userAgent:zt,platform:Bt,maxTouchPoints:Vt}=Rt(),Ht=zt.toLowerCase(),Ut=Bt.toLowerCase(),Wt=/^i(os$|p)/.test(Ut)||Ut===`macintel`&&Vt>1,Gt=`android`,Kt=Ut===Gt||Ht.includes(Gt),qt=!Wt&&Ut.startsWith(`mac`);Ut.startsWith(`win`),!Kt&&/^(linux|chrome os)/.test(Ut);var Jt=qt||Wt,Yt=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`),Xt=!Yt&&Ht.includes(`firefox`);!Yt&&Ht.includes(`chrom`);var Zt=Jt,Qt=/jsdom|happydom/.test(Ht),$t=0,en=class e{static create(){return new e}currentId=$t;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=$t,t()},e)}isStarted(){return this.currentId!==$t}clear=()=>{this.currentId!==$t&&(clearTimeout(this.currentId),this.currentId=$t)};disposeEffect=()=>this.clear};function tn(){let e=l(en.create).current;return Ve(e.disposeEffect),e}var nn={},rn={},an=``;function on(e,t){return ot(e)?e:t}function sn(e,t,n){return/hidden|clip/.test(e.getComputedStyle(on(t,n)).overflowY)}function cn(e){if(typeof document>`u`)return!1;let t=Et(e);return et(t).innerWidth-t.documentElement.clientWidth>0}function ln(e){if(!(typeof CSS<`u`&&CSS.supports&&CSS.supports(`scrollbar-gutter`,`stable`))||typeof document>`u`)return!1;let t=Et(e),n=t.documentElement,r=t.body,i=on(n,r),a=i.style.overflowY,o=n.style.scrollbarGutter;n.style.scrollbarGutter=`stable`,i.style.overflowY=`scroll`;let s=i.offsetWidth;i.style.overflowY=`hidden`;let c=i.offsetWidth;return i.style.overflowY=a,n.style.scrollbarGutter=o,s===c}function un(e){let t=Et(e),n=t.documentElement,r=t.body,i=on(n,r),a={overflowY:i.style.overflowY,overflowX:i.style.overflowX};return Object.assign(i.style,{overflowY:`hidden`,overflowX:`hidden`}),()=>{Object.assign(i.style,a)}}function dn(e){let t=Et(e),n=t.documentElement,r=t.body,i=et(n),a=0,o=0,s=!1,c=We.create();if(Yt&&(i.visualViewport?.scale??1)!==1)return()=>{};function l(){let t=i.getComputedStyle(n),c=i.getComputedStyle(r),l=(t.scrollbarGutter||``).includes(`both-edges`)?`stable both-edges`:`stable`;a=n.scrollTop,o=n.scrollLeft,nn={scrollbarGutter:n.style.scrollbarGutter,overflowY:n.style.overflowY,overflowX:n.style.overflowX},an=n.style.scrollBehavior,rn={position:r.style.position,height:r.style.height,width:r.style.width,boxSizing:r.style.boxSizing,overflowY:r.style.overflowY,overflowX:r.style.overflowX,scrollBehavior:r.style.scrollBehavior};let u=n.scrollHeight>n.clientHeight,d=n.scrollWidth>n.clientWidth,f=t.overflowY===`scroll`||c.overflowY===`scroll`,p=t.overflowX===`scroll`||c.overflowX===`scroll`,m=Math.max(0,i.innerWidth-r.clientWidth),h=Math.max(0,i.innerHeight-r.clientHeight),g=parseFloat(c.marginTop)+parseFloat(c.marginBottom),_=parseFloat(c.marginLeft)+parseFloat(c.marginRight),v=on(n,r);if(s=ln(e),s){n.style.scrollbarGutter=l,v.style.overflowY=`hidden`,v.style.overflowX=`hidden`;return}Object.assign(n.style,{scrollbarGutter:l,overflowY:`hidden`,overflowX:`hidden`}),(u||f)&&(n.style.overflowY=`scroll`),(d||p)&&(n.style.overflowX=`scroll`),Object.assign(r.style,{position:`relative`,height:g||h?`calc(100dvh - ${g+h}px)`:`100dvh`,width:_||m?`calc(100vw - ${_+m}px)`:`100vw`,boxSizing:`border-box`,overflowY:`hidden`,overflowX:`hidden`,scrollBehavior:`unset`}),r.scrollTop=a,r.scrollLeft=o,n.setAttribute(`data-base-ui-scroll-locked`,``),n.style.scrollBehavior=`unset`}function u(){Object.assign(n.style,nn),Object.assign(r.style,rn),s||(n.scrollTop=a,n.scrollLeft=o,n.removeAttribute(`data-base-ui-scroll-locked`),n.style.scrollBehavior=an)}function d(){u(),c.request(l)}l();let f=jt(i,`resize`,d);return()=>{c.cancel(),u(),typeof i.removeEventListener==`function`&&f()}}var fn=new class{lockCount=0;restore=null;timeoutLock=en.create();timeoutUnlock=en.create();acquire(e){return this.lockCount+=1,this.lockCount===1&&this.restore===null&&this.timeoutLock.start(0,()=>this.lock(e)),this.release}release=()=>{--this.lockCount,this.lockCount===0&&this.restore&&this.timeoutUnlock.start(0,this.unlock)};unlock=()=>{this.lockCount===0&&this.restore&&(this.restore?.(),this.restore=null)};lock(e){if(this.lockCount===0||this.restore!==null)return;let t=Et(e),n=t.documentElement,r=t.body,i=et(n);if(sn(i,n,r)){let t=new i.MutationObserver(()=>{sn(i,n,r)||(t.disconnect(),this.restore=null,this.lock(e))}),a={attributes:!0};t.observe(n,a),t.observe(r,a),this.restore=()=>t.disconnect();return}let a=Wt||!cn(e);this.restore=a?un(e):dn(e)}};function pn(e=!0,t=null){h(()=>{if(e)return fn.acquire(t)},[e,t])}function mn(e){e.preventDefault(),e.stopPropagation()}function hn(e){return`nativeEvent`in e}function gn(e){return e.pointerType===``&&e.isTrusted?!0:Kt&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function _n(e){return Qt?!1:!Kt&&e.width===0&&e.height===0||Kt&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType===`mouse`||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType===`touch`}function vn(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}function yn(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}var bn=`data-base-ui-focusable`,xn=`ArrowLeft`,Sn=`ArrowRight`,Cn=`ArrowUp`,wn=`ArrowDown`;function Tn(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function En(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&at(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Dn(e){return`composedPath`in e?e.composedPath()[0]:e.target}function On(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function kn(e){return e.matches(`html,body`)}function An(e){return it(e)&&e.matches(`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`)}function jn(e){return e?e.getAttribute(`role`)===`combobox`&&An(e):!1}function Mn(e){if(!e||Qt)return!0;try{return e.matches(`:focus-visible`)}catch{return!0}}function Nn(e){return e?e.hasAttribute(`data-base-ui-focusable`)?e:e.querySelector(`[data-base-ui-focusable]`)||e:null}function Pn(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}var Fn={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},In={...Fn,position:`fixed`,top:0,left:0},Ln={...Fn,position:`absolute`},Rn=a.forwardRef(function(e,t){let[n,r]=a.useState();h(()=>{Zt&&Yt&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,v.jsx)(`span`,{...e,ref:t,style:In,"aria-hidden":n?void 0:!0,...i,"data-base-ui-focus-guard":``})}),zn=Math.min,Bn=Math.max,Vn=Math.round,Hn=Math.floor,Un=e=>({x:e,y:e}),Wn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Gn(e,t,n){return Bn(e,zn(t,n))}function Kn(e,t){return typeof e==`function`?e(t):e}function qn(e){return e.split(`-`)[0]}function Jn(e){return e.split(`-`)[1]}function Yn(e){return e===`x`?`y`:`x`}function Xn(e){return e===`y`?`height`:`width`}function Zn(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Qn(e){return Yn(Zn(e))}function $n(e,t,n){n===void 0&&(n=!1);let r=Jn(e),i=Qn(e),a=Xn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=cr(o)),[o,cr(o)]}function er(e){let t=cr(e);return[tr(e),t,tr(t)]}function tr(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var nr=[`left`,`right`],rr=[`right`,`left`],ir=[`top`,`bottom`],ar=[`bottom`,`top`];function or(e,t,n){switch(e){case`top`:case`bottom`:return n?t?rr:nr:t?nr:rr;case`left`:case`right`:return t?ir:ar;default:return[]}}function sr(e,t,n,r){let i=Jn(e),a=or(qn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(tr)))),a}function cr(e){let t=qn(e);return Wn[t]+e.slice(t.length)}function lr(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function ur(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:lr(e)}function dr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function fr(e,t,n){return Math.floor(e/t)!==n}function pr(e,t){return t<0||t>=e.length}function mr(e,t){return gr(e.current,{disabledIndices:t})}function hr(e,t){return gr(e.current,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function gr(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:i=1}={}){let a=t;do a+=n?-i:i;while(a>=0&&a<=e.length-1&&vr(e,a,r));return a}function _r(e,{event:t,orientation:n,loopFocus:r,onLoop:i,rtl:a,cols:o,disabledIndices:s,minIndex:c,maxIndex:l,prevIndex:u,stopEvent:d=!1}){let f=u,p;if(t.key===`ArrowUp`?p=`up`:t.key===`ArrowDown`&&(p=`down`),p){let n=[],a=[],m=!1,h=0;{let t=null,r=-1;e.forEach((e,i)=>{if(e==null)return;h+=1;let o=e.closest(`[role="row"]`);o&&(m=!0),(o!==t||r===-1)&&(t=o,r+=1,n[r]=[]),n[r].push(i),a[i]=r})}let g=!1,_=0;if(m)for(let e of n){let t=e.length;t>_&&(_=t),t!==o&&(g=!0)}let v=g&&h<e.length,y=_||o,b=o=>{if(!g||u===-1)return;let c=a[u];if(c==null)return;let l=n[c].indexOf(u),d=o===`up`?-1:1;for(let o=c+d,f=0;f<n.length;f+=1,o+=d){if(o<0||o>=n.length){if(!r||v)return;if(o=o<0?n.length-1:0,i){let e=Math.min(l,n[o].length-1);o=a[i(t,u,n[o][e]??n[o][0])]??o}}let c=n[o];for(let t=Math.min(l,c.length-1);t>=0;--t){let n=c[t];if(!vr(e,n,s))return n}}},x=t=>{if(!v||u===-1)return;let n=u%y,i=t===`up`?-y:y,a=l-l%y,o=Hn(l/y)+1;for(let t=u-n+i,c=0;c<o;c+=1,t+=i){if(t<0||t>l){if(!r)return;t=t<0?a:0}let i=Math.min(t+y-1,l);for(let r=Math.min(t+n,i);r>=t;--r)if(!vr(e,r,s))return r}};d&&mn(t);let S=b(p)??x(p);if(S!==void 0)f=S;else if(u===-1)f=p===`up`?l:c;else if(f=gr(e,{startingIndex:u,amount:y,decrement:p===`up`,disabledIndices:s}),r){if(p===`up`&&(u-y<c||f<0)){let e=u%y,n=l%y,r=l-(n-e);f=n===e?l:n>e?r:r-y,i&&(f=i(t,u,f))}p===`down`&&u+y>l&&(f=gr(e,{startingIndex:u%y-y,amount:y,disabledIndices:s}),i&&(f=i(t,u,f)))}pr(e,f)&&(f=u)}if(n===`both`){let n=Hn(u/o);t.key===(a?`ArrowLeft`:`ArrowRight`)&&(d&&mn(t),u%o===o-1?r&&(f=gr(e,{startingIndex:u-u%o-1,disabledIndices:s}),i&&(f=i(t,u,f))):(f=gr(e,{startingIndex:u,disabledIndices:s}),r&&fr(f,o,n)&&(f=gr(e,{startingIndex:u-u%o-1,disabledIndices:s}),i&&(f=i(t,u,f)))),fr(f,o,n)&&(f=u)),t.key===(a?`ArrowRight`:`ArrowLeft`)&&(d&&mn(t),u%o===0?r&&(f=gr(e,{startingIndex:u+(o-u%o),decrement:!0,disabledIndices:s}),i&&(f=i(t,u,f))):(f=gr(e,{startingIndex:u,decrement:!0,disabledIndices:s}),r&&fr(f,o,n)&&(f=gr(e,{startingIndex:u+(o-u%o),decrement:!0,disabledIndices:s}),i&&(f=i(t,u,f)))),fr(f,o,n)&&(f=u));let c=Hn(l/o)===n;pr(e,f)&&(r&&c?(f=t.key===(a?`ArrowRight`:`ArrowLeft`)?l:gr(e,{startingIndex:u-u%o-1,disabledIndices:s}),i&&(f=i(t,u,f))):f=u)}return f}function vr(e,t,n){if(typeof n==`function`?n(t):n?.includes(t)??!1)return!0;let r=e[t];return r?!br(r)||r.matches(`:disabled`)?!0:!n&&(r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`):!1}function yr(e){return e.visibility===`hidden`||e.visibility===`collapse`}function br(e,t=e?_t(e):null){return!e||!e.isConnected||!t||yr(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var xr=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`;function Sr(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return at(n)?n.host:null}function Cr(e){for(let t of Array.from(e.children))if($e(t)===`summary`)return t;return null}function wr(e,t){let n=Cr(t);return!!n&&(e===n||En(n,e))}function Tr(e){let t=e?$e(e):``;return e!=null&&e.matches(xr)&&(t!==`summary`||e.parentElement!=null&&$e(e.parentElement)===`details`&&Cr(e.parentElement)===e)&&(t!==`details`||Cr(e)==null)&&(t!==`input`||e.type!==`hidden`)}function Er(e){if(!Tr(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=Sr(t)){let n=t!==e,r=$e(t)===`slot`;if(t.hasAttribute(`inert`)||n&&$e(t)===`details`&&!t.open&&!wr(e,t)||t.hasAttribute(`hidden`)||!r&&!Dr(t,n))return!1}return!0}function Dr(e,t){let n=_t(e);return t?n.display!==`none`:br(e,n)}function Or(e){let t=e.tabIndex;if(t<0){let t=$e(e);if(t===`details`||t===`audio`||t===`video`||it(e)&&e.isContentEditable)return 0}return t}function kr(e){if($e(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function Ar(e,t){let n=kr(e);if(!n)return!0;let r=t.find(e=>{let t=kr(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=kr(e);return t?.name===n.name&&t.form===n.form})===n}function jr(e){if(it(e)&&$e(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return it(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function Mr(e,t){jr(e).forEach(e=>{Tr(e)&&t.push(e),Mr(e,t)})}function Nr(e,t,n){jr(e).forEach(e=>{it(e)&&e.matches(t)&&n.push(e),Nr(e,t,n)})}function Pr(e){return Er(e)&&Or(e)>=0}function Fr(e){let t=[];return Mr(e,t),t.filter(Er)}function Ir(e){let t=Fr(e);return t.filter(e=>Or(e)>=0&&Ar(e,t))}function Lr(e,t){let n=Ir(e),r=n.length;if(r===0)return;let i=Tn(Et(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function Rr(e){return Lr(Et(e).body,1)||e}function zr(e){return Lr(Et(e).body,-1)||e}function Br(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!En(n,r)}function Vr(e){Ir(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function Hr(e){let t=[];Nr(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}function Ur(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...Ur(e,t.id,n)])}function Wr(e,t){let n=[],r=e.find(e=>e.id===t)?.parentId;for(;r;){let t=e.find(e=>e.id===r);r=t?.parentId,t&&(n=n.concat(t))}return n}function Gr(e){return`data-base-ui-${e}`}var Kr=0;function qr(e,t={}){let{preventScroll:n=!1,sync:r=!1,shouldFocus:i}=t;cancelAnimationFrame(Kr);function a(){i&&!i()||e?.focus({preventScroll:n})}if(r)return a(),R;let o=requestAnimationFrame(a);return Kr=o,()=>{Kr===o&&(cancelAnimationFrame(o),Kr=0)}}var Jr={inert:new WeakMap,"aria-hidden":new WeakMap},Yr=`data-base-ui-inert`,Xr={inert:new WeakSet,"aria-hidden":new WeakSet},Zr=new WeakMap,Qr=0;function $r(e){return Xr[e]}function ei(e){return e?at(e)?e.host:ei(e.parentNode):null}var ti=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=ei(t);return e.contains(n)?n:null}).filter(e=>e!=null),ni=e=>{let t=new Set;return e.forEach(e=>{let n=e;for(;n&&!t.has(n);)t.add(n),n=n.parentNode}),t},ri=(e,t,n)=>{let r=[],i=e=>{!e||n.has(e)||Array.from(e.children).forEach(e=>{$e(e)!==`script`&&(t.has(e)?i(e):r.push(e))})};return i(e),r};function ii(e,t,n,r,{mark:i=!0}){let a=null;r?a=`inert`:n&&(a=`aria-hidden`);let o=null,s=null,c=ti(t,e),l=i?ri(t,ni(c),new Set(c)):[],u=[],d=[];if(a){let e=Jr[a],n=$r(a);s=n,o=e;let r=ti(t,Array.from(t.querySelectorAll(`[aria-live]`))),i=c.concat(r);ri(t,ni(i),new Set(i)).forEach(t=>{let r=t.getAttribute(a),i=r!==null&&r!==`false`,o=(e.get(t)||0)+1;e.set(t,o),u.push(t),o===1&&i&&n.add(t),i||t.setAttribute(a,a===`inert`?``:`true`)})}return i&&l.forEach(e=>{let t=(Zr.get(e)||0)+1;Zr.set(e,t),d.push(e),t===1&&e.setAttribute(Yr,``)}),Qr+=1,()=>{o&&u.forEach(e=>{let t=(o.get(e)||0)-1;o.set(e,t),t||(!s?.has(e)&&a&&e.removeAttribute(a),s?.delete(e))}),i&&d.forEach(e=>{let t=(Zr.get(e)||0)-1;Zr.set(e,t),t||e.removeAttribute(Yr)}),--Qr,Qr||(Jr.inert=new WeakMap,Jr[`aria-hidden`]=new WeakMap,Xr.inert=new WeakSet,Xr[`aria-hidden`]=new WeakSet,Zr=new WeakMap)}}function ai(e,t={}){let{ariaHidden:n=!1,inert:r=!1,mark:i=!0}=t,a=Et(e[0]).body;return ii(e,a,n,r,{mark:i})}var oi={style:{transition:`none`}},si={fallbackAxisSide:`none`},ci={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0},li=a.createContext(null),ui=()=>a.useContext(li),di=Gr(`portal`);function fi(e={}){let{ref:t,container:n,componentProps:r=B,elementProps:i}=e,o=be(),s=ui()?.portalNode,[c,l]=a.useState(null),[u,d]=a.useState(null),p=f(e=>{e!==null&&d(e)}),m=a.useRef(null);h(()=>{if(n===null){m.current&&(m.current=null,d(null),l(null));return}let e=(n&&(nt(n)?n:n.current))??s??document.body;if(e==null){m.current&&(m.current=null,d(null),l(null));return}m.current!==e&&(m.current=e,d(null),l(e))},[n,s]);let g=de(`div`,r,{ref:[t,p],props:[{id:o,[di]:``},i]}),_=c&&g?Ft.createPortal(g,c):null;return{node:u,nodeId:a.isValidElement(g)?g.props.id:void 0,subtree:_}}var pi=a.forwardRef(function(e,t){let{render:n,className:r,style:i,children:o,container:s,...c}=e,{node:l,nodeId:u,subtree:d}=fi({container:s,ref:t,componentProps:e,elementProps:c}),f=a.useRef(null),p=a.useRef(null),m=a.useRef(null),g=a.useRef(null),[_,y]=a.useState(null),b=a.useRef(!1),x=_?.modal,S=_?.open,C=!!_&&!_.modal&&_.open&&!!l;a.useEffect(()=>{if(!l||x)return;function e(e){l&&e.relatedTarget&&Br(e)&&(e.type===`focusin`?b.current&&=(Hr(l),!1):(Vr(l),b.current=!0))}return Pn(jt(l,`focusin`,e,!0),jt(l,`focusout`,e,!0))},[l,x]),h(()=>{!l||S!==!0||!b.current||(Hr(l),b.current=!1)},[S,l]);let w=a.useMemo(()=>({beforeOutsideRef:f,afterOutsideRef:p,beforeInsideRef:m,afterInsideRef:g,portalNode:l,setFocusManagerState:y}),[l]);return(0,v.jsxs)(a.Fragment,{children:[d,(0,v.jsxs)(li.Provider,{value:w,children:[C&&l&&(0,v.jsx)(Rn,{"data-type":`outside`,ref:f,onFocus:e=>{Br(e,l)?m.current?.focus():zr(_?_.domReference:null)?.focus()}}),C&&l&&(0,v.jsx)(`span`,{"aria-owns":u,style:ci}),l&&Ft.createPortal(o,l),C&&l&&(0,v.jsx)(Rn,{"data-type":`outside`,ref:p,onFocus:e=>{Br(e,l)?g.current?.focus():(Rr(_?_.domReference:null)?.focus(),_?.closeOnFocusOut&&_?.onOpenChange(!1,ze(`focus-out`,e.nativeEvent)))}})]})]})});function mi(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var hi=a.createContext(null),gi=a.createContext(null),_i=()=>a.useContext(hi)?.id||null,vi=e=>{let t=a.useContext(gi);return e??t};function yi(e,t){let n=et(Dn(e));return e instanceof n.KeyboardEvent?`keyboard`:e instanceof n.FocusEvent?t||`keyboard`:`pointerType`in e?e.pointerType||`keyboard`:`touches`in e?`touch`:e instanceof n.MouseEvent?t||(e.detail===0?`keyboard`:`mouse`):``}var bi=20,xi=[];function Si(){xi=xi.filter(e=>e.deref()?.isConnected)}function Ci(e){Si(),e&&$e(e)!==`body`&&(xi.push(new WeakRef(e)),xi.length>bi&&(xi=xi.slice(-bi)))}function wi(){return Si(),xi[xi.length-1]?.deref()}function Ti(e){return e?Pr(e)?e:Ir(e)[0]||e:null}function Ei(e){if(e.hasAttribute(`tabindex`)&&!e.hasAttribute(`data-tabindex`)||!e.getAttribute(`role`)?.includes(`dialog`))return;let t=Fr(e).filter(e=>{let t=e.getAttribute(`data-tabindex`)||``;return Pr(e)||e.hasAttribute(`data-tabindex`)&&!t.startsWith(`-`)}),n=e.getAttribute(`tabindex`);t.length===0?n!==`0`&&(e.setAttribute(`tabindex`,`0`),e.setAttribute(`data-tabindex`,`0`)):(n!==`-1`||e.hasAttribute(`data-tabindex`)&&e.getAttribute(`data-tabindex`)!==`-1`)&&(e.setAttribute(`tabindex`,`-1`),e.setAttribute(`data-tabindex`,`-1`))}function Di(e){let{context:t,children:n,disabled:r=!1,initialFocus:i=!0,returnFocus:o=!0,restoreFocus:s=!1,modal:c=!0,closeOnFocusOut:l=!0,openInteractionType:u=``,nextFocusableElement:d,previousFocusableElement:p,beforeContentFocusGuardRef:m,externalTree:g,getInsideElements:_}=e,y=`rootStore`in t?t.rootStore:t,b=y.useState(`open`),x=y.useState(`domReferenceElement`),S=y.useState(`floatingElement`),{events:C,dataRef:w}=y.context,T=f(()=>w.current.floatingContext?.nodeId),E=i===!1,D=jn(x)&&E,k=Mt(i),A=Mt(o),j=Mt(u),M=Mt(b),N=vi(g),P=ui(),F=a.useRef(!1),I=a.useRef(!1),L=a.useRef(!1),R=a.useRef(null),z=a.useRef(``),B=a.useRef(``),V=a.useRef(null),ee=a.useRef(null),H=O(V,m,P?.beforeInsideRef),te=O(ee,P?.afterInsideRef),ne=tn(),re=tn(),ie=Ge(),U=P!=null,W=Nn(S),ae=f((e=W)=>e?Ir(e):[]),oe=f(()=>_?.().filter(e=>e!=null)??[]);a.useEffect(()=>{if(r||!c)return;function e(e){e.key===`Tab`&&En(W,Tn(Et(W)))&&ae().length===0&&!D&&mn(e)}return jt(Et(W),`keydown`,e)},[r,W,c,D,ae]),a.useEffect(()=>{if(r||!b)return;let e=Et(W);function t(){L.current=!1}function n(e){let t=Dn(e),n=oe();L.current=!(En(S,t)||En(x,t)||En(P?.portalNode,t)||n.some(e=>e===t||En(e,t))),B.current=e.pointerType||`keyboard`,t?.closest(`[data-base-ui-click-trigger]`)&&(I.current=!0,re.start(0,()=>{I.current=!1}))}function i(){B.current=`keyboard`}return Pn(jt(e,`pointerdown`,n,!0),jt(e,`pointerup`,t,!0),jt(e,`pointercancel`,t,!0),jt(e,`keydown`,i,!0),t)},[r,S,x,W,b,P,re,oe]),a.useEffect(()=>{if(r||!l)return;let e=Et(W);function t(){I.current=!0,re.start(0,()=>{I.current=!1})}function n(e){let t=Dn(e);Pr(t)&&(R.current=t)}function i(t){let n=t.relatedTarget,r=t.currentTarget,i=Dn(t);c&&n==null&&i!=null&&En(S,i)&&Ci(i),queueMicrotask(()=>{let a=T(),o=y.context.triggerElements,l=oe(),u=n?.hasAttribute(Gr(`focus-guard`))&&[V.current,ee.current,P?.beforeInsideRef.current,P?.afterInsideRef.current,P?.beforeOutsideRef.current,P?.afterOutsideRef.current,Pt(p),Pt(d)].includes(n),f=!(En(x,n)||En(S,n)||En(n,S)||En(P?.portalNode,n)||l.some(e=>e===n||En(e,n))||o.hasMatchingElement(e=>En(e,n))||u||N&&(Ur(N.nodesRef.current,a).find(e=>En(e.context?.elements.floating,n)||En(e.context?.elements.domReference,n))||Wr(N.nodesRef.current,a).find(e=>[e.context?.elements.floating,Nn(e.context?.elements.floating)].includes(n)||e.context?.elements.domReference===n)));if(r===x&&W&&Ei(W),s&&r!==x&&!br(i)&&Tn(e)===e.body){if(it(W)&&(W.focus(),s===`popup`)){ie.request(()=>{W.focus()});return}let e=ae(),t=R.current,n=(t&&e.includes(t)?t:null)||e[e.length-1]||W;it(n)&&n.focus()}if(w.current.insideReactTree){w.current.insideReactTree=!1;return}(D||!c)&&n&&f&&!I.current&&(D||n!==wi())&&(F.current=!0,y.setOpen(!1,ze(Me,t)))})}function a(){L.current||(w.current.insideReactTree=!0,ne.start(0,()=>{w.current.insideReactTree=!1}))}let o=it(x)?x:null;if(!(!S&&!o))return Pn(o&&jt(o,`focusout`,i),o&&jt(o,`pointerdown`,t),S&&jt(S,`focusin`,n),S&&jt(S,`focusout`,i),S&&P&&jt(S,`focusout`,a,!0))},[r,x,S,W,c,N,P,y,l,s,ae,D,T,w,ne,re,ie,d,p,oe]),a.useEffect(()=>{if(r||!S||!b)return;let e=Array.from(P?.portalNode?.querySelectorAll(`[${Gr(`portal`)}]`)||[]),t=(N?Wr(N.nodesRef.current,T()):[]).find(e=>jn(e.context?.elements.domReference||null))?.context?.elements.domReference,n=ai([S,...e,V.current,ee.current,P?.beforeOutsideRef.current,P?.afterOutsideRef.current,...oe(),t,Pt(p),Pt(d),D?x:null].filter(e=>e!=null),{ariaHidden:c||D,mark:!1}),i=ai([S,...e].filter(e=>e!=null));return()=>{i(),n()}},[b,r,x,S,c,P,D,N,T,d,p,oe]),h(()=>{if(!b||r||!it(W))return;z.current=``,B.current=``;let e=Et(W),t=Tn(e);queueMicrotask(()=>{let n=k.current,r=typeof n==`function`?n(j.current||``):n;if(r===void 0||r===!1||En(W,t))return;let i=null,a=()=>(i??=ae(W),i[0]||W),o;o=r===!0||r===null?a():Pt(r),o||=a();let s=En(W,Tn(e));qr(o,{preventScroll:o===W,shouldFocus(){if(!M.current)return!1;if(s)return!0;let t=Tn(e);return!(t!==o&&En(W,t))}})})},[r,b,W,ae,k,j,M]),h(()=>{if(r||!W)return;let e=Et(W),t=Tn(e),n=j.current==null;Ci(t);function i(e){if(e.open||(z.current=yi(e.nativeEvent,B.current)),e.reason===`trigger-hover`&&e.nativeEvent.type===`mouseleave`&&(F.current=!0),e.reason===`outside-press`)if(e.nested)F.current=!1;else if(gn(e.nativeEvent)||_n(e.nativeEvent))F.current=!1;else{let e=!1;Et(W).createElement(`div`).focus({get preventScroll(){return e=!0,!1}}),e?F.current=!1:F.current=!0}}C.on(`openchange`,i);function a(e){let r=A.current,i=typeof r==`function`?r(e):r;if(i===void 0||i===!1)return null;i===null&&(i=!0);let a=x?.isConnected?x:null,o=t?.isConnected&&$e(t)!==`body`?t:null,s=n?o||a:a||o;return s||=wi()||null,typeof i==`boolean`?s:Pt(i)||s||null}return()=>{C.off(`openchange`,i);let t=Tn(e),n=oe(),r=En(S,t)||n.some(e=>e===t||En(e,t))||N&&Ur(N.nodesRef.current,T(),!1).some(e=>En(e.context?.elements.floating,t)),o=A.current,s=z.current,c=a(s);queueMicrotask(()=>{let n=Ti(c),i=typeof o!=`boolean`;if(o&&!F.current&&it(n)&&(!(!i&&n!==t&&t!==e.body)||r)){let e={preventScroll:!0};s===`keyboard`&&(e.focusVisible=!0),n.focus(e)}F.current=!1})}},[r,S,W,A,j,C,N,x,T,oe]),h(()=>{if(!Yt||b||!S)return;let e=Tn(Et(S));!it(e)||!An(e)||En(S,e)&&e.blur()},[b,S]),h(()=>{if(!(r||!P))return P.setFocusManagerState({modal:c,closeOnFocusOut:l,open:b,onOpenChange:y.setOpen,domReference:x}),()=>{P.setFocusManagerState(null)}},[r,P,c,b,y,l,x]),h(()=>{if(!(r||!W))return Ei(W),()=>{queueMicrotask(Si)}},[r,W]);let G=!r&&(c?!D:!0)&&(U||c);return(0,v.jsxs)(a.Fragment,{children:[G&&(0,v.jsx)(Rn,{"data-type":`inside`,ref:H,onFocus:e=>{if(c){let e=ae();qr(e[e.length-1])}else P?.portalNode&&(F.current=!1,Br(e,P.portalNode)?Rr(x)?.focus():Pt(p??P.beforeOutsideRef)?.focus())}}),n,G&&(0,v.jsx)(Rn,{"data-type":`inside`,ref:te,onFocus:e=>{c?qr(ae()[0]):P?.portalNode&&(l&&(F.current=!0),Br(e,P.portalNode)?zr(x)?.focus():Pt(d??P.afterOutsideRef)?.focus())}})]})}function Oi(e,t={}){let{enabled:n=!0,event:r=`click`,toggle:i=!0,ignoreMouse:o=!1,stickIfOpen:s=!0,touchOpenDelay:c=0,reason:l=Ce}=t,u=`rootStore`in e?e.rootStore:e,d=u.context.dataRef,f=a.useRef(void 0),p=Ge(),m=tn(),h=a.useMemo(()=>{function e(e,t,n,r){let i=ze(l,t,n);e&&r===`touch`&&c>0?m.start(c,()=>{u.setOpen(!0,i)}):u.setOpen(e,i)}function t(e,t,n){let r=d.current.openEvent,a=u.select(`domReferenceElement`)!==t;return e&&a||!e||!i?!0:r&&s?!n(r.type):!1}return{onPointerDown(e){f.current=vn(e.pointerType,!0)&&_n(e.nativeEvent)?`virtual`:e.pointerType},onMouseDown(n){let i=f.current,a=n.nativeEvent,s=u.select(`open`);if(n.button!==0||r===`click`||vn(i,!0)&&o)return;let c=t(s,n.currentTarget,e=>e===`click`||e===`mousedown`),l=Dn(a);if(An(l)){e(c,a,l,i);return}let d=n.currentTarget;p.request(()=>{e(c,a,d,i)})},onClick(n){if(r===`mousedown-only`)return;let i=f.current;if(r===`mousedown`&&i){f.current=void 0;return}vn(i,!0)&&o||e(t(u.select(`open`),n.currentTarget,e=>e===`click`||e===`mousedown`||e===`keydown`||e===`keyup`),n.nativeEvent,n.currentTarget,i)},onKeyDown(){f.current=void 0}}},[d,r,o,l,u,s,i,p,m,c]);return a.useMemo(()=>n?{reference:h}:B,[n,h])}function ki(){return!1}function Ai(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function ji(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:o=`sloppy`,referencePress:s=ki,bubbles:c,externalTree:l}=t,u=`rootStore`in e?e.rootStore:e,d=u.useState(`open`),p=u.useState(`floatingElement`),{dataRef:m}=u.context,h=vi(l),g=f(typeof i==`function`?i:()=>!1),_=typeof i==`function`?g:i,v=_!==!1,y=f(()=>o),{escapeKey:b,outsidePress:x}=Ai(c),S=a.useRef(!1),C=a.useRef(!1),w=a.useRef(!1),T=a.useRef(!1),E=a.useRef(``),D=a.useRef(null),O=tn(),k=tn(),A=f(()=>{k.clear(),m.current.insideReactTree=!1}),j=f(e=>{let t=m.current.floatingContext?.nodeId;return(h?Ur(h.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),M=f(e=>On(e,u.select(`floatingElement`))||On(e,u.select(`domReferenceElement`))),N=f(e=>{s()&&u.setOpen(!1,ze(Ce,e.nativeEvent))}),P=f(e=>{if(!d||!n||!r||e.key!==`Escape`||T.current||!b&&j(`__escapeKeyBubbles`))return;let t=ze(Ne,hn(e)?e.nativeEvent:e);u.setOpen(!1,t),t.isCanceled||e.preventDefault(),!b&&!t.isPropagationAllowed&&e.stopPropagation()}),F=f(()=>{m.current.insideReactTree=!0,k.start(0,A)}),I=f(e=>{if(!d||!n||e.button!==0)return;let t=Dn(e.nativeEvent);En(u.select(`floatingElement`),t)&&(S.current||(S.current=!0,C.current=!1))}),L=f(e=>{!d||!n||(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&S.current&&(C.current=!0)});a.useEffect(()=>{if(!d||!n)return A;m.current.__escapeKeyBubbles=b,m.current.__outsidePressBubbles=x;let e=new en,t=new en;function i(){e.clear(),T.current=!0}function a(){e.start(Yt?5:0,()=>{T.current=!1})}function o(){w.current=!0,t.start(0,()=>{w.current=!1})}function s(){S.current=!1,C.current=!1}function c(){let e=E.current,t=e===`pen`||!e?`mouse`:e,n=y(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function l(e){let t=c();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function f(e){let t=m.current.floatingContext?.nodeId,n=h&&Ur(h.nodesRef.current,t).some(t=>On(e,t.context?.elements.floating));return M(e)||n}function g(e){if(l(e)){e.type!==`click`&&!M(e)&&(t.clear(),w.current=!1),A();return}if(m.current.insideReactTree){A();return}let n=Dn(e),r=`[${Gr(`inert`)}]`,i=rt(n)?n.getRootNode():null,a=Array.from((at(i)?i:Et(u.select(`floatingElement`))).querySelectorAll(r)),o=u.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>En(e,n))))return;let s=rt(n)?n:null;for(;s&&!gt(s);){let e=yt(s);if(gt(e)||!rt(e))break;s=e}if(!(a.length&&rt(n)&&!kn(n)&&!En(n,u.select(`floatingElement`))&&a.every(e=>!En(s,e)))){if(it(n)&&!(`touches`in e)){let t=gt(n),r=_t(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!f(e)){if(c()===`intentional`&&w.current){t.clear(),w.current=!1;return}typeof _==`function`&&!_(e)||j(`__outsidePressBubbles`)||(u.setOpen(!1,ze(we,e)),A())}}}function k(e){c()!==`sloppy`||e.pointerType===`touch`||!u.select(`open`)||!n||M(e)||g(e)}function N(e){if(c()!==`sloppy`||!u.select(`open`)||!n||M(e))return;let t=e.touches[0];t&&(D.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},O.start(1e3,()=>{D.current&&(D.current.dismissOnTouchEnd=!1,D.current.dismissOnMouseDown=!1)}))}function F(e,t){let n=Dn(e);if(!n)return;let r=jt(n,e.type,()=>{t(e),r()})}function I(e){E.current=`touch`,F(e,N)}function L(e){O.clear(),e.type===`pointerdown`&&(E.current=e.pointerType),!(e.type===`mousedown`&&D.current&&!D.current.dismissOnMouseDown)&&F(e,e=>{e.type===`pointerdown`?k(e):g(e)})}function R(e){if(!S.current)return;let n=C.current;if(s(),c()===`intentional`){if(e.type===`pointercancel`){n&&o();return}if(!f(e)){if(n){o();return}typeof _==`function`&&!_(e)||(t.clear(),w.current=!0,A())}}}function z(e){if(c()!==`sloppy`||!D.current||M(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-D.current.startX),r=Math.abs(t.clientY-D.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(D.current.dismissOnTouchEnd=!0),i>10&&(g(e),O.clear(),D.current=null)}function B(e){F(e,z)}function V(e){c()!==`sloppy`||!D.current||M(e)||(D.current.dismissOnTouchEnd&&g(e),O.clear(),D.current=null)}function ee(e){F(e,V)}let H=Et(p),te=Pn(r&&Pn(jt(H,`keydown`,P),jt(H,`compositionstart`,i),jt(H,`compositionend`,a)),v&&Pn(jt(H,`click`,L,!0),jt(H,`pointerdown`,L,!0),jt(H,`pointerup`,R,!0),jt(H,`pointercancel`,R,!0),jt(H,`mousedown`,L,!0),jt(H,`mouseup`,R,!0),jt(H,`touchstart`,I,!0),jt(H,`touchmove`,B,!0),jt(H,`touchend`,ee,!0)));return()=>{te(),e.clear(),t.clear(),s(),w.current=!1,A()}},[m,p,r,v,_,d,n,b,x,P,A,y,j,M,h,u,O]);let R=a.useMemo(()=>({onKeyDown:P,onPointerDown:N,onClick:N}),[P,N]),z=a.useMemo(()=>({onKeyDown:P,onPointerDown:L,onMouseDown:L,onClickCapture:F,onMouseDownCapture(e){F(),I(e)},onPointerDownCapture(e){F(),I(e)},onMouseUpCapture:F,onTouchEndCapture:F,onTouchMoveCapture:F}),[P,F,I,L]);return a.useMemo(()=>n?{reference:R,floating:z,trigger:R}:{},[n,R,z])}function Mi(e,t,n){let{reference:r,floating:i}=e,a=Zn(t),o=Qn(t),s=Xn(o),c=qn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Jn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Ni(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Kn(t,e),p=ur(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=dr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=dr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Pi=50,Fi=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Ni},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Mi(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Pi&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Mi(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Ii=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Kn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=qn(r),_=Zn(o),v=qn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[cr(o)]:er(o)),x=p!==`none`;!d&&x&&b.push(...sr(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=$n(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==Zn(t))||T.every(e=>Zn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Zn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Li=new Set([`left`,`top`]);async function Ri(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=qn(n),s=Jn(n),c=Zn(n)===`y`,l=Li.has(o)?-1:1,u=a&&c?-1:1,d=Kn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var zi=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Ri(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Bi=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Kn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Zn(i),p=Yn(f),m=u[p],h=u[f],g=(e,t)=>Gn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Vi=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=Kn(e,t),u={x:n,y:r},d=Zn(i),f=Yn(d),p=u[f],m=u[d],h=Kn(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=Li.has(qn(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},Hi=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Kn(e,t),c=await i.detectOverflow(t,s),l=qn(n),u=Jn(n),d=Zn(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=zn(p-c[m],g),y=zn(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Bn(c.left,c.right):S=p-2*Bn(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function Ui(e){let t=_t(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=it(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Vn(n)!==a||Vn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Wi(e){return rt(e)?e:e.contextElement}function Gi(e){let t=Wi(e);if(!it(t))return Un(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ui(t),o=(a?Vn(n.width):n.width)/r,s=(a?Vn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Ki=Un(0);function qi(e){let t=et(e);return!ht()||!t.visualViewport?Ki:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ji(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===et(e)}function Yi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Wi(e),o=Un(1);t&&(r?rt(r)&&(o=Gi(r)):o=Gi(e));let s=Ji(a,n,r)?qi(a):Un(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=et(a),t=rt(r)?et(r):r,n=e,i=St(n);for(;i&&t!==n;){let e=Gi(i),t=i.getBoundingClientRect(),r=_t(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=et(i),i=St(n)}}return dr({width:u,height:d,x:c,y:l})}function Xi(e,t){let n=vt(e).scrollLeft;return t?t.left+n:Yi(tt(e)).left+n}function Zi(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Xi(e,n),y:n.top+t.scrollTop}}function Qi(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=tt(r),s=t?ct(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Un(1),u=Un(0),d=it(r);if((d||!a)&&(($e(r)!==`body`||ot(o))&&(c=vt(r)),d)){let e=Yi(r);l=Gi(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Zi(o,c):Un(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function $i(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function ea(e){let t=vt(e),n=e.ownerDocument.body,r=Bn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Bn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Xi(e),o=-t.scrollTop;return _t(n).direction===`rtl`&&(a+=Bn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}var ta=25;function na(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=et(e),a=tt(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!ht()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Xi(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=ta&&(s-=o)}return{width:s,height:c,x:l,y:u}}function ra(e,t){let n=Yi(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Gi(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ia(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=na(e,n,t);else if(t===`document`)r=ea(tt(e));else if(rt(t))r=ra(t,n);else{let n=qi(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return dr(r)}function aa(e,t){let n=t.get(e);if(n)return n;let r=xt(e,[],!1).filter(e=>rt(e)&&$e(e)!==`body`),i=null,a=_t(e).position===`fixed`,o=a?yt(e):e;for(;rt(o)&&!gt(o);){let e=_t(o),t=pt(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=yt(o)}return t.set(e,r),r}function oa(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?ct(t)?[]:aa(t,this._c):[].concat(n),r],o=ia(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ia(t,a[e],i);s=Bn(n.top,s),c=zn(n.right,c),l=zn(n.bottom,l),u=Bn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function sa(e){let{width:t,height:n}=Ui(e);return{width:t,height:n}}function ca(e,t,n){let r=it(t),i=tt(t),a=n===`fixed`,o=Yi(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Un(0);if((r||!a)&&(($e(t)!==`body`||ot(i))&&(s=vt(t)),r)){let e=Yi(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Xi(i));let l=i&&!r&&!a?Zi(i,s):Un(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function la(e){return _t(e).position===`static`}function ua(e,t){if(!it(e)||_t(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return tt(e)===n&&(n=n.ownerDocument.body),n}function da(e,t){let n=et(e);if(ct(e))return n;if(!it(e)){let t=yt(e);for(;t&&!gt(t);){if(rt(t)&&!la(t))return t;t=yt(t)}return n}let r=ua(e,t);for(;r&&st(r)&&la(r);)r=ua(r,t);return r&&gt(r)&&la(r)&&!pt(r)?n:r||mt(e)||n}var fa=async function(e){let t=this.getOffsetParent||da,n=this.getDimensions,r=await n(e.floating);return{reference:ca(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function pa(e){return _t(e).direction===`rtl`}var ma={convertOffsetParentRelativeRectToViewportRelativeRect:Qi,getDocumentElement:tt,getClippingRect:oa,getOffsetParent:da,getElementRects:fa,getClientRects:$i,getDimensions:sa,getScale:Gi,isElement:rt,isRTL:pa};function ha(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ga(e,t,n){let r=null,i,a=tt(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Hn(d),h=Hn(a.clientWidth-(u+f)),g=Hn(a.clientHeight-(d+p)),_=Hn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Bn(0,zn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!ha(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=et(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function _a(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Wi(e),u=i||a?[...l?xt(l):[],...t?xt(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?ga(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Yi(e):null;c&&g();function g(){let t=Yi(e);h&&!ha(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var va=zi,ya=Bi,ba=Ii,xa=Hi,Sa=Vi,Ca=(e,t,n)=>{let r=new Map,i=n??{},a={...ma,...i.platform,_c:r};return Fi(e,t,{...i,platform:a})},wa=typeof document<`u`?a.useLayoutEffect:function(){};function Ta(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Ta(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Ta(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Ea(e){return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Da(e,t){let n=Ea(e);return Math.round(t*n)/n}function Oa(e){let t=a.useRef(e);return wa(()=>{t.current=e}),t}function ka(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:c=!0,whileElementsMounted:l,open:u}=e,[d,f]=a.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=a.useState(r);Ta(p,r)||m(r);let[h,g]=a.useState(null),[_,v]=a.useState(null),y=a.useCallback(e=>{e!==C.current&&(C.current=e,g(e))},[]),b=a.useCallback(e=>{e!==w.current&&(w.current=e,v(e))},[]),x=o||h,S=s||_,C=a.useRef(null),w=a.useRef(null),T=a.useRef(d),E=l!=null,D=Oa(l),O=Oa(i),k=Oa(u),A=a.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:p};O.current&&(e.platform=O.current),Ca(C.current,w.current,e).then(e=>{let t={...e,isPositioned:k.current!==!1};j.current&&!Ta(T.current,t)&&(T.current=t,Ft.flushSync(()=>{f(t)}))})},[p,t,n,O,k]);wa(()=>{u===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,f(e=>({...e,isPositioned:!1})))},[u]);let j=a.useRef(!1);wa(()=>(j.current=!0,()=>{j.current=!1}),[]),wa(()=>{if(x&&(C.current=x),S&&(w.current=S),x&&S){if(D.current)return D.current(x,S,A);A()}},[x,S,A,D,E]);let M=a.useMemo(()=>({reference:C,floating:w,setReference:y,setFloating:b}),[y,b]),N=a.useMemo(()=>({reference:x,floating:S}),[x,S]),P=a.useMemo(()=>{let e={position:n,left:0,top:0};if(!N.floating)return e;let t=Da(N.floating,d.x),r=Da(N.floating,d.y);return c?{...e,transform:`translate(`+t+`px, `+r+`px)`,...Ea(N.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,c,N.floating,d.x,d.y]);return a.useMemo(()=>({...d,update:A,refs:M,elements:N,floatingStyles:P}),[d,A,M,N,P])}var Aa=(e,t)=>{let n=va(e);return{name:n.name,fn:n.fn,options:[e,t]}},ja=(e,t)=>{let n=ya(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ma=(e,t)=>({fn:Sa(e).fn,options:[e,t]}),Na=(e,t)=>{let n=ba(e);return{name:n.name,fn:n.fn,options:[e,t]}},Pa=(e,t)=>{let n=xa(e);return{name:n.name,fn:n.fn,options:[e,t]}},Fa=t((e=>{var t=n();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var i=typeof Object.is==`function`?Object.is:r,a=t.useState,o=t.useEffect,s=t.useLayoutEffect,c=t.useDebugValue;function l(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return s(function(){i.value=n,i.getSnapshot=t,u(i)&&l({inst:i})},[e,n,t]),o(function(){return u(i)&&l({inst:i}),e(function(){u(i)&&l({inst:i})})},[e]),c(n),n}function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch{return!0}}function d(e,t){return t()}var f=window.document===void 0||window.document.createElement===void 0?d:l;e.useSyncExternalStore=t.useSyncExternalStore===void 0?f:t.useSyncExternalStore})),Ia=t(((e,t)=>{t.exports=Fa()})),La=t((e=>{var t=n(),r=Ia();function i(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var a=typeof Object.is==`function`?Object.is:i,o=r.useSyncExternalStore,s=t.useRef,c=t.useEffect,l=t.useMemo,u=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=l(function(){function e(e){if(!o){if(o=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,a(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var o=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=o(e,d[0],d[1]);return c(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}})),Ra=t(((e,t)=>{t.exports=La()})),za=[],Ba=void 0;function Va(){return Ba}function Ha(e){za.push(e)}var Ua=Ia(),Wa=Ra(),Ga=F(19)?qa:Ja;function J(e,t,n,r,i){return Ga(e,t,n,r,i)}function Ka(e,t,n,r,i){let o=a.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,Ua.useSyncExternalStore)(e.subscribe,o,o)}Ha({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,Ua.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}});function qa(e,t,n,r,i){let a=Va();if(!a)return Ka(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function Ja(e,t,n,r,i){return(0,Wa.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var Ya=class{constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return J(this,e,t,n,r)}},Xa=class extends Ya{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){a.useDebugValue(e);let n=this;h(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;h(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this;h(()=>{t.update(e)},[t,...Object.values(e)])}useControlledProp(e,t){a.useDebugValue(e);let n=this,r=t!==void 0;h(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return a.useDebugValue(e),J(this,this.selectors[e],t,n,r)}useContextCallback(e,t){a.useDebugValue(e);let n=f(t??R);this.context[e]=n}useStateSetter(e){let t=a.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}},Za={open:e=>e.open,transitionStatus:e=>e.transitionStatus,domReferenceElement:e=>e.domReferenceElement,referenceElement:e=>e.positionReference??e.referenceElement,floatingElement:e=>e.floatingElement,floatingId:e=>e.floatingId},Qa=class extends Xa{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:mi(),nested:n,triggerElements:i},Za),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&yn(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}},$a={tabIndex:-1,[bn]:``},eo=class{constructor(){this.idMap=new Map}add(e,t){this.idMap.set(e,t)}delete(e){this.idMap.delete(e)}hasElement(e){for(let t of this.idMap.values())if(t===e)return!0;return!1}hasMatchingElement(e){for(let t of this.idMap.values())if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.idMap.values()}get size(){return this.idMap.size}};function to(e){let{open:t=!1,onOpenChange:n,elements:r={}}=e,i=be(),a=_i()!=null,o=l(()=>new Qa({open:t,transitionStatus:void 0,onOpenChange:n,referenceElement:r.reference??null,floatingElement:r.floating??null,triggerElements:new eo,floatingId:i,syncOnly:!1,nested:a})).current;return h(()=>{let e={open:t,floatingId:i};r.reference!==void 0&&(e.referenceElement=r.reference,e.domReferenceElement=rt(r.reference)?r.reference:null),r.floating!==void 0&&(e.floatingElement=r.floating),o.update(e)},[t,i,r.reference,r.floating,o]),o.context.onOpenChange=n,o.context.nested=a,o}function no(e){return ro(e,e.rootContext)}function ro(e,t){let{nodeId:n,externalTree:r}=e,i=t.useState(`referenceElement`),o=t.useState(`floatingElement`),s=t.useState(`domReferenceElement`),c=t.useState(`open`),l=t.useState(`floatingId`),[u,d]=a.useState(null),[f,p]=a.useState(void 0),[m,g]=a.useState(void 0),_=a.useRef(null),v=vi(r),y=a.useMemo(()=>({reference:i,floating:o,domReference:s}),[i,o,s]),b=ka({...e,elements:{...y,...u&&{reference:u}}}),x=rt(f)?f:null,S=m===void 0?t.state.floatingElement:m;t.useSyncedValue(`referenceElement`,f??null),t.useSyncedValue(`domReferenceElement`,f===void 0?s:x),t.useSyncedValue(`floatingElement`,S);let C=a.useCallback(e=>{let t=rt(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;d(t),b.refs.setReference(t)},[b.refs]),w=a.useCallback(e=>{(rt(e)||e===null)&&(_.current=e,p(e)),(rt(b.refs.reference.current)||b.refs.reference.current===null||e!==null&&!rt(e))&&b.refs.setReference(e)},[b.refs,p]),T=a.useCallback(e=>{g(e),b.refs.setFloating(e)},[b.refs]),E=a.useMemo(()=>({...b.refs,setReference:w,setFloating:T,setPositionReference:C,domReference:_}),[b.refs,w,T,C]),D=a.useMemo(()=>({...b.elements,domReference:s}),[b.elements,s]),O=a.useMemo(()=>({...b,dataRef:t.context.dataRef,open:c,onOpenChange:t.setOpen,events:t.context.events,floatingId:l,refs:E,elements:D,nodeId:n,rootStore:t}),[b,E,D,n,t,c,l]);return h(()=>{s&&(_.current=s)},[s]),h(()=>{t.context.dataRef.current.floatingContext=O;let e=v?.nodesRef.current.find(e=>e.id===n);e&&(e.context=O)}),a.useMemo(()=>({...b,context:O,refs:E,elements:D,rootStore:t}),[b,E,D,O,t])}var io=`Escape`;function ao(e){return Yt&&e.movementX===0&&e.movementY===0}function oo(e,t,n){switch(e){case`vertical`:return t;case`horizontal`:return n;default:return t||n}}function so(e,t){return oo(t,e===`ArrowUp`||e===`ArrowDown`,e===`ArrowLeft`||e===`ArrowRight`)}function co(e,t,n){return oo(t,e===`ArrowDown`,n?e===`ArrowLeft`:e===`ArrowRight`)||e===`Enter`||e===` `||e===``}function lo(e,t,n){return oo(t,n?e===xn:e===Sn,e===wn)}function uo(e,t,n,r){return t===`both`||t===`horizontal`&&r?e===io:oo(t,n?e===Sn:e===xn,e===Cn)}function fo(e,t){let{listRef:n,activeIndex:r,onNavigate:i=()=>{},enabled:o=!0,selectedIndex:s=null,allowEscape:c=!1,loopFocus:l=!1,nested:u=!1,rtl:d=!1,virtual:p=!1,focusItemOnOpen:m=`auto`,focusItemOnHover:g=!0,openOnArrowKeyDown:_=!0,disabledIndices:v=void 0,orientation:y=`vertical`,parentOrientation:b,id:x,resetOnPointerLeave:S=!0,externalTree:C,grid:w}=t,T=w!=null,E=`rootStore`in e?e.rootStore:e,D=E.useState(`open`),O=E.useState(`floatingElement`),k=E.useState(`domReferenceElement`),A=E.context.dataRef,j=Nn(O),M=jn(k),N=Mt(j),P=_i(),F=vi(C),I=a.useRef(m),L=a.useRef(s??-1),R=a.useRef(null),z=a.useRef(!0),B=f(e=>{i(L.current===-1?null:L.current,e)}),V=a.useRef(!!O),ee=a.useRef(D),H=a.useRef(!1),te=a.useRef(!1),ne=a.useRef(null),re=Mt(v),ie=Mt(D),U=Mt(s),W=Mt(S),ae=Ge(),oe=Ge(),G=f(()=>{function e(e){p?F?.events.emit(`virtualfocus`,e):ne.current=qr(e,{sync:H.current,preventScroll:!0})}let t=n.current[L.current],r=te.current;t&&e(t),(H.current?e=>e():e=>ae.request(e))(()=>{let i=n.current[L.current]||t;i&&(t||e(i),ue&&(r||!z.current)&&i.scrollIntoView?.({block:`nearest`,inline:`nearest`}))})});h(()=>{A.current.orientation=y},[A,y]),h(()=>{o&&(D&&O?(L.current=s??-1,I.current&&s!=null&&(te.current=!0,B())):V.current&&(L.current=-1,B()))},[o,D,O,s,B]),h(()=>{if(o){if(!D){H.current=!1;return}if(O)if(r==null){if(H.current=!1,U.current!=null)return;if(V.current&&(L.current=-1,G()),(!ee.current||!V.current)&&I.current&&(R.current!=null||I.current===!0&&R.current==null)){let e=0,t=()=>{n.current[0]==null?(e<2&&(e?e=>oe.request(e):queueMicrotask)(t),e+=1):(L.current=R.current==null||co(R.current,y,d)||u?mr(n):hr(n),R.current=null,B())};t()}}else pr(n.current,r)||(L.current=r,G(),te.current=!1)}},[o,D,O,r,U,u,n,y,d,B,G,oe]),h(()=>{if(!o||O||!F||p||!V.current)return;let e=F.nodesRef.current,t=e.find(e=>e.id===P)?.context?.elements.floating,n=Tn(Et(k??t??null)),r=e.some(e=>e.context&&En(e.context.elements.floating,n));t&&!r&&z.current&&t.focus({preventScroll:!0})},[o,O,k,F,P,p]),h(()=>{ee.current=D,V.current=!!O}),h(()=>{D||(R.current=null,I.current=m)},[D,m]);let se=r!=null,K=f(e=>{if(!ie.current)return;let t=n.current.indexOf(e.currentTarget);t!==-1&&(L.current!==t||r!==t)&&(L.current=t,B(e))}),q=f(()=>b??F?.nodesRef.current.find(e=>e.id===P)?.context?.dataRef?.current.orientation),ce=f(()=>mr(n,re.current)),le=f(e=>{if(z.current=!1,H.current=!0,e.which===229||!ie.current&&e.currentTarget===N.current)return;if(u&&uo(e.key,y,d,T)){so(e.key,q())||mn(e),E.setOpen(!1,ze(Pe,e.nativeEvent)),it(k)&&(p?F?.events.emit(`virtualfocus`,k):k.focus());return}let t=L.current,r=mr(n,v),i=hr(n,v);if(M||(e.key===`Home`&&(mn(e),L.current=r,B(e)),e.key===`End`&&(mn(e),L.current=i,B(e))),w!=null){let t=w(e,L.current,n,y,l,d,v,r,i);if(t!=null&&(L.current=t,B(e)),y===`both`)return}if(so(e.key,y)){if(mn(e),D&&!p&&Tn(e.currentTarget.ownerDocument)===e.currentTarget){L.current=co(e.key,y,d)?r:i,B(e);return}co(e.key,y,d)?l?t>=i?c&&t!==n.current.length?L.current=-1:(H.current=!1,L.current=r):L.current=gr(n.current,{startingIndex:t,disabledIndices:v}):L.current=Math.min(i,gr(n.current,{startingIndex:t,disabledIndices:v})):l?t<=r?c&&t!==-1?L.current=n.current.length:(H.current=!1,L.current=i):L.current=gr(n.current,{startingIndex:t,decrement:!0,disabledIndices:v}):L.current=Math.max(r,gr(n.current,{startingIndex:t,decrement:!0,disabledIndices:v})),pr(n.current,L.current)&&(L.current=-1),B(e)}}),ue=a.useMemo(()=>({onFocus(e){H.current=!0,K(e)},onClick:({currentTarget:e})=>e.focus({preventScroll:!0}),onMouseMove(e){ao(e)||(H.current=!0,te.current=!1,g&&K(e))},onPointerLeave(e){if(!ie.current||!z.current||e.pointerType===`touch`)return;H.current=!0;let t=e.relatedTarget;if(!(!g||n.current.includes(t))&&W.current&&(ne.current?.(),ne.current=null,L.current=-1,B(e),!p)){let e=N.current,t=Tn(Et(e));e&&En(e,t)&&e.focus({preventScroll:!0})}}}),[K,ie,N,g,n,B,W,p]),de=a.useMemo(()=>p&&D&&se&&{"aria-activedescendant":`${x}-${r}`},[p,D,se,x,r]),fe=a.useMemo(()=>({"aria-orientation":y===`both`?void 0:y,...M?{}:de,onKeyDown(e){if(e.key===`Tab`&&e.shiftKey&&D&&!p){let t=Dn(e.nativeEvent);if(t&&!En(N.current,t))return;mn(e),E.setOpen(!1,ze(Me,e.nativeEvent)),it(k)&&k.focus();return}le(e)},onPointerMove(e){ao(e)||(z.current=!0)}}),[de,le,N,y,M,E,D,p,k]),pe=a.useMemo(()=>{function e(e){E.setOpen(!0,ze(Pe,e.nativeEvent,e.currentTarget))}function t(e){m===`auto`&&gn(e.nativeEvent)&&(I.current=!p)}function n(e){I.current=m,m===`auto`&&_n(e.nativeEvent)&&(I.current=!0)}return{onKeyDown(t){let n=E.select(`open`);z.current=!1;let r=t.key.startsWith(`Arrow`),i=lo(t.key,q(),d),a=so(t.key,y),o=(u?i:a)||t.key===`Enter`||t.key.trim()===``;if(p&&n)return le(t);if(!(!n&&!_&&r)){if(o){let e=so(t.key,q());R.current=u&&e?null:t.key}if(u){i&&(mn(t),n?(L.current=ce(),B(t)):e(t));return}a&&(U.current!=null&&(L.current=U.current),mn(t),!n&&_?e(t):le(t),n&&B(t))}},onFocus(e){E.select(`open`)&&!p&&(L.current=-1,B(e))},onPointerDown:n,onPointerEnter:n,onMouseDown:t,onClick:t}},[le,m,ce,u,B,E,_,y,q,d,U,p]),me=a.useMemo(()=>({...de,...pe}),[de,pe]);return a.useMemo(()=>o?{reference:me,floating:fe,item:ue,trigger:pe}:{},[o,me,fe,pe,ue])}function po(e,t){let{listRef:n,elementsRef:r,activeIndex:i,onMatch:o,disabledIndices:s,onTyping:c,enabled:l=!0,resetMs:u=750,selectedIndex:d=null}=t,p=`rootStore`in e?e.rootStore:e,m=p.useState(`open`),g=tn(),_=a.useRef(``),v=a.useRef(d??i??-1),y=a.useRef(null),b=f(e=>{function t(e){return r?.current[e]}function a(e){let n=t(e);return n&&!br(n)||n?.matches(`:disabled`)?!1:s==null||!vr(z,e,s)}function l(e,t,n=0){if(e.length===0)return-1;let r=(n%e.length+e.length)%e.length,i=t.toLowerCase();for(let t=0;t<e.length;t+=1){let n=(r+t)%e.length;if(!(!e[n]?.toLowerCase().startsWith(i)||!a(n)))return n}return-1}let f=n.current;if(_.current.length>0&&e.key===` `&&(mn(e),c?.(!0)),_.current.length>0&&_.current[0]!==` `&&l(f,_.current)===-1&&e.key!==` `&&c?.(!1),f==null||e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;m&&e.key!==` `&&(mn(e),c?.(!0));let p=_.current===``;p&&(v.current=d??i??-1),f.every((e,t)=>e&&a(t)?e[0]?.toLowerCase()!==e[1]?.toLowerCase():!0)&&_.current===e.key&&(_.current=``,v.current=y.current),_.current+=e.key,g.start(u,()=>{_.current=``,v.current=y.current,c?.(!1)});let h=((p?d??i??-1:v.current)??0)+1,b=l(f,_.current,h);b===-1?e.key!==` `&&(_.current=``,c?.(!1)):(o?.(b),y.current=b)}),x=f(e=>{let t=e.relatedTarget,n=p.select(`domReferenceElement`),r=p.select(`floatingElement`);En(n,t)||En(r,t)||(g.clear(),_.current=``,v.current=y.current,c?.(!1))});h(()=>{!m&&d!==null||(g.clear(),y.current=null,_.current!==``&&(_.current=``))},[m,d,g]);let S=a.useMemo(()=>({onKeyDown:b,onBlur:x}),[b,x]);return a.useMemo(()=>l?{reference:S,floating:S}:{},[l,S])}(function(e){return e.open=`data-open`,e.closed=`data-closed`,e[e.startingStyle=Je.startingStyle]=`startingStyle`,e[e.endingStyle=Je.endingStyle]=`endingStyle`,e.anchorHidden=`data-anchor-hidden`,e.side=`data-side`,e.align=`data-align`,e})({});var mo={"data-popup-open":``},ho={"data-popup-open":``,"data-pressed":``},go={"data-open":``},_o={"data-closed":``},vo={"data-anchor-hidden":``},yo={open(e){return e?mo:null}},bo={open(e){return e?ho:null}},xo={open(e){return e?go:_o},anchorHidden(e){return e?vo:null}};({...xo,...Ze});var So=`ArrowUp`,Co=`ArrowDown`,wo=`ArrowLeft`,To=`ArrowRight`,Eo=`Home`,Do=`PageUp`,Oo=`PageDown`,ko=new Set([So,Co,wo,To,Eo,`End`]);function Ao(e){return F(19)?e:e?`true`:void 0}var jo=a.forwardRef(function(e,t){let{cutout:n,...r}=e,i;if(n){let e=n.getBoundingClientRect();i=`polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`}return(0,v.jsx)(`div`,{ref:t,role:`presentation`,"data-base-ui-inert":``,...r,style:{position:`fixed`,inset:0,userSelect:`none`,WebkitUserSelect:`none`,clipPath:i}})});function Mo(e){let t=a.useRef(``),n=a.useCallback(n=>{n.defaultPrevented||(t.current=n.pointerType,e(n,n.pointerType))},[e]);return{onClick:a.useCallback(n=>{if(n.detail===0){e(n,`keyboard`);return}`pointerType`in n?e(n,n.pointerType):e(n,t.current),t.current=``},[e]),onPointerDown:n}}function No(e,t){let n=a.useRef(e),r=f(t);h(()=>{n.current!==e&&r(n.current),n.current=e},[e,r])}function Po(e,t){let{onClick:n,onPointerDown:r}=Mo(f((n,r)=>{(typeof e==`function`?e():e)||t(r||(Wt?`touch`:``))}));return a.useMemo(()=>({onClick:n,onPointerDown:r}),[n,r])}function Fo(e){let[t,n]=a.useState(null),r=Po(e,n);return No(e,t=>{t&&!e&&n(null)}),a.useMemo(()=>({openMethod:t,triggerProps:r}),[t,r])}function Io(e){let t=a.useRef(!0);t.current&&(t.current=!1,e())}function Lo(e,t,n,r,i,a,o,s,c,l=2){let u=_r(n.current,{event:e,orientation:r,loopFocus:i,rtl:a,cols:l,disabledIndices:o,minIndex:s,maxIndex:c,prevIndex:t>c?s:t,stopEvent:!0});return pr(n.current,u)?void 0:u}var Ro=a.createContext(void 0),zo=a.createContext(void 0),Bo=a.createContext(void 0),Vo=a.createContext(!1),Ho=a.createContext(``);function Uo(){let e=a.useContext(Ro);if(!e)throw Error(D(22));return e}function Wo(){let e=a.useContext(zo);if(!e)throw Error(D(23));return e}function Go(){let e=a.useContext(Bo);if(!e)throw Error(D(24));return e}function Ko(){return a.useContext(Ho)}function qo(){return a.useContext(Vo)}var Jo=(e,t)=>Object.is(e,t);function Yo(e,t,n){return e==null||t==null?Object.is(e,t):n(e,t)}function Xo(e,t,n){return!e||e.length===0?!1:e.some(e=>e===void 0?!1:Yo(t,e,n))}function Zo(e,t,n){return!e||e.length===0?-1:e.findIndex(e=>e===void 0?!1:Yo(e,t,n))}function Qo(e,t,n,r){let i=Zo(e,r&&Array.isArray(t)?t[t.length-1]:t,n);return i===-1?null:i}function $o(e,t,n){return e.filter(e=>!Yo(t,e,n))}function es(e){if(e==null)return``;if(typeof e==`string`)return e;try{return JSON.stringify(e)}catch{return String(e)}}function ts(e){return e!=null&&e.length>0&&typeof e[0]==`object`&&e[0]!=null&&`items`in e[0]}function ns(e){if(!Array.isArray(e))return e!=null&&`null`in e;let t=e;if(ts(t)){for(let e of t)for(let t of e.items)if(t&&t.value==null&&t.label!=null)return!0;return!1}for(let e of t)if(e&&e.value==null&&e.label!=null)return!0;return!1}function rs(e,t){if(t&&e!=null)return t(e)??``;if(e&&typeof e==`object`){if(`label`in e&&e.label!=null)return String(e.label);if(`value`in e)return String(e.value)}return es(e)}function is(e,t){return t&&e!=null?t(e)??``:e&&typeof e==`object`&&`value`in e&&`label`in e?es(e.value):es(e)}var Y={id:e=>e.id,labelId:e=>e.labelId,items:e=>e.items,selectedValue:e=>e.selectedValue,hasSelectionChips:e=>{let t=e.selectedValue;return Array.isArray(t)&&t.length>0},hasSelectedValue:e=>{let{selectedValue:t,selectionMode:n}=e;return t==null?!1:n===`multiple`&&Array.isArray(t)?t.length>0:!0},hasNullItemLabel:(e,t)=>t?ns(e.items):!1,open:e=>e.open,mounted:e=>e.mounted,forceMounted:e=>e.forceMounted,inline:e=>e.inline,activeIndex:e=>e.activeIndex,selectedIndex:e=>e.selectedIndex,isActive:(e,t)=>e.activeIndex===t,isSelected:(e,t)=>{let n=e.isItemEqualToValue,r=e.selectedValue;return Array.isArray(r)?r.some(e=>Yo(t,e,n)):Yo(t,r,n)},transitionStatus:e=>e.transitionStatus,popupProps:e=>e.popupProps,listProps:e=>e.listProps,inputProps:e=>e.inputProps,triggerProps:e=>e.triggerProps,itemProps:e=>e.itemProps,positionerElement:e=>e.positionerElement,listElement:e=>e.listElement,popupId:e=>e.popupId,triggerElement:e=>e.triggerElement,inputElement:e=>e.inputElement,inputGroupElement:e=>e.inputGroupElement,popupSide:e=>e.popupSide,openMethod:e=>e.openMethod,inputInsidePopup:e=>e.inputInsidePopup,inputOwnsFormValue:e=>e.inputOwnsFormValue,selectionMode:e=>e.selectionMode,name:e=>e.name,form:e=>e.form,disabled:e=>e.disabled,readOnly:e=>e.readOnly,required:e=>e.required,grid:e=>e.grid,virtualized:e=>e.virtualized,itemToStringLabel:e=>e.itemToStringLabel,isItemEqualToValue:e=>e.isItemEqualToValue,modal:e=>e.modal,autoHighlight:e=>e.autoHighlight},as={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},os={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},ss={disabled:!1,...os},cs={valid(e){return e===null?null:e?{"data-valid":``}:{"data-invalid":``}}},ls={invalid:void 0,name:void 0,validityData:{state:as,errors:[],error:``,value:``,initialValue:null},setValidityData:R,disabled:void 0,setTouched:R,setDirty:R,setFilled:R,setFocused:R,validationMode:`onSubmit`,shouldValidateOnChange:()=>!1,state:ss,registerFieldControl:R,validation:{getValidationProps:(e,t=B)=>t,inputRef:{current:null},registeredInputs:new Map,registerInput:R,getInputControl:()=>null,commit:async()=>{},change:R}},us=a.createContext(ls);function ds(e=!0){let t=a.useContext(us);if(t.setValidityData===R&&!e)throw Error(D(28));return t}function fs(e,t,n,r,i=!0,a){let{registerFieldControl:o}=ds(),s=l(()=>Symbol());h(()=>{let c=s.current;if(!i){o(c,void 0);return}o(c,{controlRef:e,getValue:r,id:t,name:a,value:n})},[e,i,r,t,a,o,s,n]),h(()=>{let e=s.current;return()=>{o(e,void 0)}},[o,s])}var ps=a.createContext({elementRef:{current:null},formRef:{current:{fields:new Map}},errors:{},clearErrors:R,validationMode:`onSubmit`,submitAttemptedRef:{current:!1}});function ms(){return a.useContext(ps)}var hs=a.createContext({controlId:void 0,registerControlId:R,labelId:void 0,setLabelId:R,messageIds:[],setMessageIds:R,getDescriptionProps:e=>e});function gs(){return a.useContext(hs)}function _s(e={}){let{id:t,implicit:n=!1,controlRef:r}=e,{controlId:i,registerControlId:o}=gs(),s=xe(t),c=n?i:void 0,u=l(()=>Symbol()),d=a.useRef(!1),p=a.useRef(t!=null),m=f(()=>{!d.current||o===R||(d.current=!1,o(u.current,void 0))});return h(()=>{if(o===R)return;let e;if(n){let n=r?.current;e=rt(n)&&n.closest(`label`)!=null?t??null:c??s}else if(t!=null)p.current=!0,e=t;else if(p.current)e=s;else{m();return}if(e===void 0){m();return}d.current=!0,o(u.current,e)},[t,r,c,o,n,s,u,m]),a.useEffect(()=>m,[m]),i??s}function vs(e){return e==null?void 0:`${e}-popup`}function ys(e,t){return(n,r)=>n==null?!1:e.contains(n,r,t)}function bs(e){return Array.isArray(e)?e.map(e=>bs(e)).join(`,`):e==null?``:String(e)}var xs=new Map;function Ss(e={}){let t={usage:`search`,sensitivity:`base`,ignorePunctuation:!0,...e},n=`${bs(e.locale)}|${JSON.stringify(t)}`,r=xs.get(n);if(r)return r;let i=new Intl.Collator(e.locale,t),a={contains(e,t,n){if(!t)return!0;let r=rs(e,n);for(let e=0;e<=r.length-t.length;e+=1)if(i.compare(r.slice(e,e+t.length),t)===0)return!0;return!1},startsWith(e,t,n){if(!t)return!0;let r=rs(e,n);return i.compare(r.slice(0,t.length),t)===0},endsWith(e,t,n){if(!t)return!0;let r=rs(e,n),a=t.length;return r.length>=a&&i.compare(r.slice(r.length-a),t)===0}};return xs.set(n,a),a}var Cs=Ss;function ws(e,t=!1){let{overflowY:n}=_t(e);return n!==`auto`&&n!==`scroll`?!1:t?e.clientHeight>0:e.scrollHeight>e.clientHeight}function Ts(e,t,n=(e,t)=>e===t){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}var Es=Symbol(`none`),Ds={value:Es,index:-1},Os=a.createContext(void 0);function ks(){return a.useContext(Os)?.direction??`ltr`}function As(e){let{id:t,onOpenChangeComplete:n,defaultSelectedValue:r=null,selectedValue:i,onSelectedValueChange:s,defaultInputValue:c,inputValue:u,open:d,defaultOpen:p=!1,selectionMode:m,onItemHighlighted:g,name:_,form:y,disabled:b=!1,readOnly:x=!1,required:S=!1,inputRef:C,grid:w=!1,items:T,filteredItems:E,filter:D,openOnInputClick:k=!0,autoHighlight:A=!1,keepHighlight:j=!1,highlightItemOnHover:M=!0,loopFocus:N=!0,itemToStringLabel:P,itemToStringValue:F,isItemEqualToValue:I=Jo,virtualized:L=!1,inline:V=!1,fillInputOnItemPress:ee=!0,modal:H=!1,limit:te=-1,autoComplete:re=`list`,formAutoComplete:ie,locale:U,submitOnItemClick:W=!1}=e,{clearErrors:ae}=ms(),{setDirty:oe,validityData:G,setFilled:se,name:K,disabled:q,setTouched:ce,setFocused:le,validationMode:ue,validation:de}=ds(),fe=ks(),pe=_s({id:t}),me=Cs({locale:U}),[he,ge]=a.useState(!1),[_e,ve]=a.useState(null),ye=a.useRef([]),be=a.useRef([]),xe=a.useRef(null),Ce=a.useRef(null),we=a.useRef(null),Ee=a.useRef(null),De=a.useRef(null),Oe=a.useRef(!0),ke=a.useRef(!1),Me=a.useRef(null),Ne=a.useRef(null),Pe=a.useRef(null),Le=a.useRef(Ds),Re=a.useRef(null),Ve=a.useRef([]),He=a.useRef(null),Ue=q||b,We=K??_,Ge=m===`multiple`,qe=m===`single`,Je=u!==void 0||c!==void 0,Ye=T!==void 0,Xe=E!==void 0,Ze;Ze=A===`always`?`always`:A?`input-change`:!1;let[Qe,$e]=o({controlled:i,default:Ge?r??z:r,name:`Combobox`,state:`selectedValue`}),et=a.useMemo(()=>D===null?()=>!0:D===void 0?ys(me,P):D,[D,me,P]),tt=l(()=>Je?c??``:qe?rs(Qe,P):``).current,[nt,rt]=o({controlled:u,default:tt,name:`Combobox`,state:`inputValue`}),[at,ot]=o({controlled:d,default:p,name:`Combobox`,state:`open`}),st=ts(T),ct=_e??String(nt).trim(),lt=qe?rs(Qe,P):``,ut=qe&&!he&&ct!==``&&lt.length===ct.length&&me.contains(lt,ct),dt=ut?``:ct,ft=Ye&&Xe&&ut,pt=a.useMemo(()=>T?st?T.flatMap(e=>e.items):T:z,[T,st]),mt=a.useMemo(()=>{if(E&&!ft)return E;if(!T)return z;if(st){let e=T,t=[],n=0;for(let r of e){if(te>-1&&n>=te)break;let e=te>-1?te-n:1/0,i=dt===``?r.items.slice(0,e):[];if(dt!==``)for(let t of r.items){if(i.length>=e)break;et(t,dt,P)&&i.push(t)}if(i.length>0){let e={...r,items:i};t.push(e),n+=i.length}}return t}if(dt===``)return te>-1?pt.slice(0,te):pt;let e=[];for(let t of pt){if(te>-1&&e.length>=te)break;et(t,dt,P)&&e.push(t)}return e},[E,ft,T,st,dt,te,et,P,pt]),ht=a.useMemo(()=>st?mt.flatMap(e=>e.items):mt,[mt,st]),gt=l(()=>{let e=null;return V&&at&&Ye&&m!==`none`&&(e=Qo(ht,Qe,I,Ge)),new Ya({id:pe,labelId:void 0,selectedValue:Qe,open:at,items:T,selectionMode:m,listRef:ye,labelsRef:be,popupRef:xe,emptyRef:De,inputRef:Ce,startDismissRef:we,endDismissRef:Ee,keyboardActiveRef:Oe,chipsContainerRef:Me,clearRef:Ne,valuesRef:Ve,pointerDownItemRef:He,selectionEventRef:Pe,name:We,form:y,disabled:Ue,readOnly:x,required:S,grid:w,virtualized:L,openOnInputClick:k,itemToStringLabel:P,isItemEqualToValue:I,modal:H,autoHighlight:Ze,submitOnItemClick:W,hasInputValue:Je,mounted:!1,forceMounted:!1,transitionStatus:`idle`,inline:V,activeIndex:null,selectedIndex:e,popupProps:{},listProps:{},inputProps:{},triggerProps:{},itemProps:B,positionerElement:null,listElement:null,popupId:void 0,triggerElement:null,inputElement:null,inputGroupElement:null,popupSide:null,openMethod:null,inputInsidePopup:!0,inputOwnsFormValue:m===`none`,onOpenChangeComplete:R,setOpen:R,setInputValue:R,setSelectedValue:R,setIndices:R,handleSelection:R,forceMount:R,requestSubmit:R})}).current,_t=m===`none`?nt:Qe,vt=a.useMemo(()=>m===`none`?_t:Array.isArray(Qe)?Qe.map(e=>is(e,F)):is(Qe,F),[_t,F,m,Qe]),yt=f(g),bt=f(n),St=J(gt,Y.activeIndex),Ct=J(gt,Y.selectedIndex),wt=J(gt,Y.positionerElement),Tt=J(gt,Y.listElement),Et=J(gt,Y.triggerElement),Dt=J(gt,Y.inputElement),Ot=J(gt,Y.inputGroupElement),kt=J(gt,Y.inline),At=J(gt,Y.inputInsidePopup),jt=J(gt,Y.inputOwnsFormValue),Nt=Mt(Et),{mounted:Pt,setMounted:Ft,transitionStatus:It}=Ke(at),{openMethod:Rt,triggerProps:zt}=Fo(at),Bt=f(()=>vt);fs(At?Nt:Ce,pe,_t,Bt,!Ue,_);let Vt=f(()=>{T?be.current=ht.map(e=>rs(e,P)):gt.set(`forceMounted`,!0)}),Ht=f((e,t,n)=>{if(t===-1){if(Le.current===Ds)return;Le.current=Ds}else Le.current={value:e,index:t};yt(e,Be(n,void 0,{index:t}))}),Ut=f(e=>{gt.update(e);let t=e.activeIndex;if(t===void 0)return;let n=e.type||`none`;t===null?Ht(void 0,-1,n):Ht(Ve.current[t],t,n)}),Wt=f((t,n)=>{if(ke.current=n.reason===Ae,e.onInputValueChange?.(t,n),!n.isCanceled){if(n.reason===`input-change`){at&&_e!==null&&ve(null);let e=n.event,r=e.inputType;if(e.type===`compositionend`||r!=null&&r!==``&&r!==`insertReplacementText`){let e=t.trim()!==``;e&&ge(!0),Re.current={hasQuery:e};let n=gt.state.listElement;if(!gt.state.virtualized&&n){let e=xe.current;for(let t of xt(n.firstElementChild??n)){if(!it(t)||(e?!En(e,t):t.getAttribute(`role`)===`dialog`))break;if(ws(t)){t.scrollTop=0;break}}}e&&Ze&&gt.state.activeIndex==null&&(at||kt)&&gt.set(`activeIndex`,0)}}else n.reason===`input-clear`&&t===``&&gt.state.inputInsidePopup&&(Re.current={hasQuery:!1,selection:!0});rt(t)}}),Gt=f((t,n)=>{if(at!==t&&(n.reason===`escape-key`&&Ye&&ht.length===0&&!De.current&&n.allowPropagation(),e.onOpenChange?.(t,n),!n.isCanceled&&(t&&At&&!kt&&_e!==null&&(ge(!1),ve(null),nt!==``&&n.reason!==`input-change`&&Wt(``,ze(Ae,n.event))),!t&&he&&(qe?(kt||ve(ct),ct===``&&ge(!1)):Ge&&(kt||ve(ct),At&&Ut({activeIndex:null}),(!At||kt)&&Wt(``,ze(Ae,n.event)))),ot(t),!t&&At&&(n.reason===`focus-out`||n.reason===`outside-press`)&&(ce(!0),le(!1),ue===`onBlur`)))){let e=m===`none`?nt:Qe;de.commit(e)}}),Kt=f((e,t)=>{s?.(e,t),!t.isCanceled&&($e(e),(m===`none`&&xe.current&&ee||qe&&!gt.state.inputInsidePopup)&&Wt(rs(e,P),ze(t.reason,t.event)))}),qt=f((e,t)=>{let n=Dn(e),r=Pe.current??e;Pe.current=null;let i=ze(Te,r),a=n?.closest(`a`)?.getAttribute(`href`);if(a){a.startsWith(`#`)&&Gt(!1,i);return}if(Ge){let e=Array.isArray(Qe)?Qe:[];if(Kt(Xo(e,t,I)?$o(e,t,I):[...e,t],i),i.isCanceled||!(Ce.current&&Ce.current.value.trim()!==``))return;gt.state.inputInsidePopup?Wt(``,ze(Ae,i.event)):Gt(!1,i)}else{if(Kt(t,i),i.isCanceled)return;Gt(!1,i)}}),Jt=f(()=>{let e=de.inputRef.current?.form??gt.state.inputElement?.form;e&&typeof e.requestSubmit==`function`&&e.requestSubmit()}),Yt=f(()=>{if(Ft(!1),bt?.(!1),ge(!1),ve(null),Ut(m===`none`?{activeIndex:null,selectedIndex:null}:{activeIndex:null}),Ge&&Ce.current&&Ce.current.value!==``&&!ke.current&&Wt(``,ze(Ae)),qe)if(gt.state.inputInsidePopup)Ce.current&&Ce.current.value!==``&&Wt(``,ze(Ae));else{let e=rs(Qe,P);Ce.current&&Ce.current.value!==e&&Wt(e,ze(e===``?Ae:Se))}}),Xt=a.useMemo(()=>kt&&wt?{current:wt.closest(`[role="dialog"]`)}:xe,[kt,wt]);Lt({enabled:!e.actionsRef,open:at,ref:Xt,onComplete(){at||Yt()}}),a.useImperativeHandle(e.actionsRef,()=>({unmount:Yt}),[Yt]),h(function(){at||(He.current=null,m!==`none`&&Ut({selectedIndex:Qo(Ye?pt:Ve.current,Qe,I,Ge)}))},[at,Qe,m,Ge,Ye,pt,I,Ut]),h(()=>{T&&(Ve.current=ht,ye.current.length=ht.length)},[T,ht]),h(()=>{let e=Re.current;if(e){let t=at||kt||gt.state.positionerElement?.hidden===!1;if(e.hasQuery)Ze&&t&&gt.set(`activeIndex`,0),Re.current=null;else if(String(nt).trim()===``&&(Re.current=null,t)){let t=e.selection;Ze===`always`&&!t&&gt.state.selectionMode===`none`&&gt.set(`activeIndex`,0),queueMicrotask(()=>{if(!gt.state.open&&!gt.state.inline||Ce.current&&Ce.current.value.trim()!==``)return;let e=gt.state.selectedValue,n=gt.state.selectionMode===`multiple`,r=n&&Array.isArray(e)?e[e.length-1]:e,i=gt.state.selectionMode!==`none`&&r!=null;if(i||t){let t=Ye||Xe?ht:Ve.current;gt.set(`activeIndex`,i?Qo(t,e,gt.state.isItemEqualToValue,n):null)}else Ze===`always`&&gt.set(`activeIndex`,0)})}}if(!at&&!kt)return;let t=Ye||Xe?ht:Ve.current,n=gt.state.activeIndex;if(n==null){if(Ze===`always`&&t.length>0){gt.set(`activeIndex`,0);return}Ht(void 0,-1,Se);return}if(n>=t.length){Ht(void 0,-1,Se),gt.set(`activeIndex`,null);return}let r=t[n],i=Le.current.value,a=i!==Es&&Yo(r,i,gt.state.isItemEqualToValue);(Le.current.index!==n||!a)&&Ht(r,n,Se)},[St,Ze,Ht,Xe,Ye,ht,kt,at,gt,nt]),h(()=>{if(m===`none`){se(String(nt)!==``);return}se(Ge?Array.isArray(Qe)&&Qe.length>0:Qe!=null)},[se,m,nt,Qe,Ge]),a.useEffect(()=>{Ye&&Ze&&ht.length===0&&Ut({activeIndex:null})},[Ye,Ze,ht.length,Ut]);function Zt(e){let t=G.initialValue;return Array.isArray(e)&&Array.isArray(t)?!Ts(e,t,(e,t)=>Yo(e,t,I)):e!==t}No(ct,()=>{!at||ct===``||ct===String(tt)||ge(!0)});function Qt(){let e=rs(Qe,P);nt!==e&&Wt(e,ze(Se))}No(Qe,()=>{m!==`none`&&(ae(We),oe(Zt(Qe)),de.change(Qe),qe&&!Je&&!At&&Qt())}),No(nt,()=>{m===`none`&&(ae(We),oe(nt!==G.initialValue),de.change(nt))}),No(T,()=>{!qe||Je||At||he||Qt()});let $t=to({open:kt?!0:at,onOpenChange:Gt,elements:{reference:At?Et:Dt,floating:wt}}),en=w?`grid`:`listbox`,tn=at||kt,nn=tn?`true`:`false`,rn=a.useMemo(()=>{let e=Dt?.tagName===`INPUT`,t=Dt==null||e,n=t||tn,r=t?{autoComplete:`off`,spellCheck:`false`,autoCorrect:`off`,autoCapitalize:`none`}:{};return n&&(r.role=`combobox`,r[`aria-expanded`]=nn,r[`aria-haspopup`]=en,r[`aria-controls`]=tn?Tt?.id:void 0,r[`aria-autocomplete`]=re),{reference:r,floating:{role:`presentation`}}},[Dt,tn,nn,en,Tt?.id,re]),an=Oi($t,{enabled:!x&&!Ue&&k,event:`mousedown-only`,toggle:!1,touchOpenDelay:At?0:100,reason:je}),on=ji($t,{enabled:!x&&!Ue&&!kt,outsidePressEvent:{mouse:`sloppy`,touch:`intentional`},bubbles:kt?!0:void 0,outsidePress(e){let t=Dn(e);return!En(Et,t)&&!En(Ne.current,t)&&!En(Me.current,t)&&!En(Ot,t)}}),sn=fo($t,{enabled:!x&&!Ue,id:pe,listRef:ye,activeIndex:St,selectedIndex:Ct,virtual:!0,loopFocus:N,allowEscape:N&&!Ze,focusItemOnOpen:he||m===`none`&&!Ze?!1:`auto`,focusItemOnHover:M,resetOnPointerLeave:!j,orientation:w?`horizontal`:void 0,rtl:fe===`rtl`,disabledIndices:z,grid:w?Lo:void 0,onNavigate(e,t){!t&&!at||It===`ending`||Ut(t?{activeIndex:e,type:Oe.current?Fe:Ie}:{activeIndex:e})}}),cn=a.useMemo(()=>ne(sn.reference,{onKeyDown(e){w&&gt.state.activeIndex==null&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&e.preventBaseUIHandler()}},on.reference,an.reference,rn.reference),[sn.reference,on.reference,an.reference,rn.reference,w,gt]),ln=a.useMemo(()=>ne($a,on.floating),[on.floating]),un=a.useMemo(()=>ne(sn.floating,rn.floating),[sn.floating,rn.floating]),dn=a.useMemo(()=>{let e=sn.item;return e?{...e,onFocus:void 0}:B},[sn.item]);Io(()=>{gt.update({inline:V,popupProps:ln,listProps:un,inputProps:cn,triggerProps:zt,itemProps:dn,setOpen:Gt,setInputValue:Wt,setSelectedValue:Kt,setIndices:Ut,handleSelection:qt,forceMount:Vt,requestSubmit:Jt,onOpenChangeComplete:bt})}),h(()=>{gt.update({id:pe,selectedValue:Qe,open:at,mounted:Pt,transitionStatus:It,items:T,inline:V,popupProps:ln,listProps:un,inputProps:cn,triggerProps:zt,openMethod:Rt,itemProps:dn,selectionMode:m,name:We,form:y,disabled:Ue,readOnly:x,required:S,grid:w,virtualized:L,openOnInputClick:k,itemToStringLabel:P,modal:H,autoHighlight:Ze,isItemEqualToValue:I,submitOnItemClick:W,hasInputValue:Je,inputOwnsFormValue:m===`none`&&(V||!gt.state.inputInsidePopup)})},[gt,pe,Qe,at,Pt,It,T,ln,un,cn,dn,Rt,zt,m,We,Ue,x,S,w,L,k,P,H,I,W,Je,V,Ze,y]);let fn=O(C,de.inputRef),pn=a.useMemo(()=>({query:ct,hasItems:Ye,filteredItems:mt,flatFilteredItems:ht}),[ct,Ye,mt,ht]),mn=a.useMemo(()=>Array.isArray(_t)?``:is(_t,F),[_t,F]),hn=Ge&&Array.isArray(Qe)&&Qe.length>0,gn=Ge||m===`none`&&jt?void 0:We,_n=a.useMemo(()=>!Ge||!Array.isArray(Qe)||!We?null:Qe.map(e=>{let t=is(e,F);return(0,v.jsx)(`input`,{type:`hidden`,form:y,name:We,value:t,disabled:Ue},t)}),[Ge,Qe,y,We,F,Ue]),vn=(0,v.jsxs)(a.Fragment,{children:[e.children,(0,v.jsx)(`input`,{...de.getValidationProps(Ue,{onFocus(){if(At){Et?.focus();return}(Ce.current||Et)?.focus()},onChange(e){if(e.nativeEvent.defaultPrevented||Ue||x)return;let t=e.currentTarget.value,n=t.toLowerCase(),r=ze(Se,e.nativeEvent),i=()=>Ve.current.findIndex(e=>is(e,F).toLowerCase()===n||rs(e,P).toLowerCase()===n);function a(){if(Ge)return;if(m===`none`){Wt(t,r);return}let e=i();e===-1&&(e=Ve.current.findIndex((e,t)=>{let r=be.current[t];return r!=null&&r.toLowerCase()===n}));let a=e===-1?void 0:Ve.current[e];a!=null&&Kt?.(a,r)}qe&&(Vt(),T&&i()===-1&&gt.set(`forceMounted`,!0)),queueMicrotask(a)}}),id:pe&&gn==null?`${pe}-hidden-input`:void 0,form:y,name:gn,autoComplete:ie,disabled:Ue,required:S&&!hn,readOnly:x,value:mn,ref:fn,style:gn?Ln:In,tabIndex:-1,"aria-hidden":!0,suppressHydrationWarning:!0}),_n]});return(0,v.jsx)(Ro.Provider,{value:gt,children:(0,v.jsx)(zo.Provider,{value:$t,children:(0,v.jsx)(Vo.Provider,{value:Ye,children:(0,v.jsx)(Bo.Provider,{value:pn,children:(0,v.jsx)(Ho.Provider,{value:nt,children:vn})})})})})}var js={...bo,...cs,popupSide:e=>e?{"data-popup-side":e}:null,listEmpty:e=>e?{"data-list-empty":``}:null},Ms=5;function Ns(e,t){let n=Ps(t);return e.clientX>=n.left-Ms&&e.clientX<=n.right+Ms&&e.clientY>=n.top-Ms&&e.clientY<=n.bottom+Ms}function Ps(e){let t=e.getBoundingClientRect(),n=et(e);if(Qt)return t;let r=n.getComputedStyle(e,`::before`),i=n.getComputedStyle(e,`::after`);if(!(r.content!==`none`||i.content!==`none`))return t;let a=parseFloat(r.width)||0,o=parseFloat(r.height)||0,s=parseFloat(i.width)||0,c=parseFloat(i.height)||0,l=Math.max(t.width,a,s),u=Math.max(t.height,o,c),d=l-t.width,f=u-t.height;return{left:t.left-d/2,right:t.right+d/2,top:t.top-f/2,bottom:t.bottom+f/2}}function Fs(e){return e==null?void 0:`${e}-label`}function Is(e,t){return e??t}function Ls(e){let t=J(e,Y.mounted),n=J(e,Y.popupSide),r=J(e,Y.positionerElement);return t&&r?n:null}function Rs(){return Go().filteredItems.length===0}function zs(e){return e===`rtl`?[`ArrowRight`,`ArrowLeft`]:[`ArrowLeft`,`ArrowRight`]}function Bs(e,t){let n=e>=t-1?t-2:e;return n>=0?n:void 0}function Vs(e,t,n){let r=e.state.listRef.current[t];r&&(e.state.selectionEventRef.current=n,r.click(),e.state.selectionEventRef.current=null)}var Hs=a.forwardRef(function(e,t){let{render:n,className:r,nativeButton:i=!0,disabled:o=!1,id:s,style:c,...l}=e,{state:u,disabled:d,setTouched:p,setFocused:m,validationMode:h,validation:g}=ds(),{labelId:_}=gs(),v=Uo(),y=J(v,Y.selectionMode),b=J(v,Y.disabled),x=J(v,Y.readOnly),S=J(v,Y.required),C=J(v,Y.positionerElement),w=J(v,Y.listElement),T=J(v,Y.popupId),E=J(v,Y.triggerProps),D=J(v,Y.inputInsidePopup),O=J(v,Y.id),k=J(v,Y.labelId),A=J(v,Y.open),j=J(v,Y.selectedValue),M=J(v,Y.activeIndex),N=J(v,Y.selectedIndex),P=J(v,Y.hasSelectedValue),F=Wo(),I=Ko(),L=tn(),R=d||b||o,z=Rs(),B=Ls(v);_s({id:D?s:void 0});let V=D?s??O:s,ee=Is(_,k),H;A&&D?H=T??vs(O):A&&(H=w?.id);let te=a.useRef(``);function ne(e){te.current=e.pointerType}let{reference:re}=po(F,{enabled:!A&&!x&&!b&&y===`single`,listRef:v.state.labelsRef,activeIndex:M,selectedIndex:N,onMatch(e){let t=v.state.valuesRef.current[e];t!==void 0&&v.state.setSelectedValue(t,ze(Se))}}),{reference:ie}=Oi(F,{enabled:!x&&!b,event:`mousedown`}),{buttonRef:U,getButtonProps:W}=Ot({native:i,disabled:R}),ae={...u,open:A,disabled:R,popupSide:B,listEmpty:z,placeholder:y===`none`?!1:!P};return de(`button`,e,{ref:[t,U,f(e=>{v.set(`triggerElement`,e)})],state:ae,props:[E,ie,re,{id:V,tabIndex:D?0:-1,role:D?`combobox`:void 0,"aria-expanded":A,"aria-haspopup":D?`dialog`:`listbox`,"aria-controls":H,"aria-required":D&&S||void 0,"aria-labelledby":ee,onPointerDown:ne,onPointerEnter:ne,onFocus(){m(!0),!(R||x)&&L.start(0,v.state.forceMount)},onBlur(e){if(!En(C,e.relatedTarget)&&(p(!0),m(!1),h===`onBlur`)){let e=y===`none`?I:j;g.commit(e)}},onMouseDown(e){if(R||x||(D||F.set(`domReferenceElement`,e.currentTarget),v.state.forceMount(),te.current!==`touch`&&(v.state.inputRef.current?.focus(),D||e.preventDefault()),A))return;let t=Et(e.currentTarget);function n(e){let t=v.state.triggerElement;if(!t)return;let n=Dn(e),r=v.state.positionerElement,i=v.state.listElement;En(t,n)||En(r,n)||En(i,n)||Ns(e,t)||v.state.setOpen(!1,ze(Re,e))}D&&t.addEventListener(`mouseup`,n,{once:!0})},onKeyDown(e){x||(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(mn(e),v.state.setOpen(!0,ze(Pe,e.nativeEvent)),v.state.inputRef.current?.focus())}},g.getValidationProps(R,l),W],stateAttributesMapping:js})}),Us=a.createContext(void 0);function Ws(){return a.useContext(Us)}var Gs=a.createContext(void 0);function Ks(e){let t=a.useContext(Gs);if(t===void 0&&!e)throw Error(D(21));return t}var qs=a.forwardRef(function(e,t){let n=Uo(),{buttonRef:r,getButtonProps:i}=Ot({native:!1}),a=O(t,r);function o(e){n.state.setOpen(!1,ze(Ee,e.nativeEvent,e.currentTarget))}return(0,v.jsx)(`span`,{ref:a,...i({onClick:o}),"aria-label":`Dismiss`,tabIndex:void 0,style:Ln})}),Js=a.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,id:o,style:s,...c}=e,{state:l,disabled:u,setTouched:d,setFocused:p,validationMode:m,validation:h}=ds(),{labelId:g}=gs(),_=Ws(),y=!!Ks(!0),b=Uo(),x=Ko(),S=ks(),C=J(b,Y.required),w=J(b,Y.disabled),T=J(b,Y.readOnly),E=J(b,Y.name),D=J(b,Y.form),O=J(b,Y.selectionMode),k=J(b,Y.autoHighlight),A=J(b,Y.inputProps),j=J(b,Y.triggerProps),M=J(b,Y.open),N=J(b,Y.mounted),P=J(b,Y.selectedValue),F=J(b,Y.id),I=J(b,Y.inline),L=J(b,Y.modal),R=!!k,z=Ls(b),B=u||w||i,V=Rs(),ee=y||I,H=!ee||L,te=xe(o??(ee?void 0:F)),ne=y?os:l,[re,ie]=a.useState(null),U=a.useRef(!1),W=a.useRef(null),ae=a.useRef(!1),oe=O===`none`&&!y,G=f(e=>{let t=y||b.state.inline;t&&!b.state.hasInputValue&&b.state.setInputValue(``,ze(Se)),b.update({inputElement:e,inputInsidePopup:t,inputOwnsFormValue:oe})}),se=y?c:h.getValidationProps(B,c);function K(){b.state.setIndices({activeIndex:null,selectedIndex:null,type:b.state.keyboardActiveRef.current?Fe:Ie})}function q(){b.state.keyboardActiveRef.current=!1}let ce={...ne,open:M,disabled:B,readOnly:T,popupSide:z,listEmpty:V};function le(e){if(!_)return;let t,{highlightedChipIndex:n}=_,r=_.chipsRef.current.length,[i,a]=zs(S);return n===void 0?(e.key===i&&(e.currentTarget.selectionStart??0)===0&&P.length>0&&(e.preventDefault(),t=r>0?r-1:void 0),t):(e.key===i?(e.preventDefault(),t=n>0?n-1:void 0):e.key===a?(e.preventDefault(),t=n<r-1?n+1:void 0):(e.key===`Backspace`||e.key===`Delete`)&&(e.preventDefault(),t=Bs(n,P.length),K()),t)}let ue=de(`input`,e,{state:ce,ref:[t,b.state.inputRef,G],props:[A,j,{value:re??x,"aria-readonly":T||void 0,"aria-required":C||void 0,"aria-labelledby":g,disabled:B,readOnly:T,required:O===`none`?C:void 0,form:D,...oe&&E&&{name:E},id:te,onFocus(){if(p(!0),!I||!ae.current)return;ae.current=!1;let e=W.current;e==null||!Object.hasOwn(b.state.valuesRef.current,e)||b.state.setIndices({activeIndex:e})},onBlur(){d(!0),p(!1);let e=b.state.activeIndex;if(I&&e!==null&&k!==`always`&&(W.current=e,ae.current=!0,b.state.setIndices({activeIndex:null})),m===`onBlur`){let e=O===`none`?x:P;h.commit(e)}},onCompositionStart(e){Kt||(U.current=!0,ie(e.currentTarget.value))},onCompositionEnd(e){U.current=!1;let t=e.currentTarget.value;ie(null),b.state.setInputValue(t,ze(ke,e.nativeEvent))},onChange(e){let t=e.nativeEvent,n=t.inputType,r=!n||n===`insertReplacementText`,i=U.current||!r;function a(e){T||B||!e||!i||(b.state.setOpen(!0,ze(ke,t)),R||K())}if(U.current){let n=e.currentTarget.value;ie(n),n===``&&!b.state.openOnInputClick&&!b.state.inputInsidePopup&&b.state.setOpen(!1,ze(Ae,t));let r=n.trim(),i=R&&r!==``;a(r),M&&b.state.activeIndex!==null&&!i&&K();return}let o=ze(ke,t);if(b.state.setInputValue(e.currentTarget.value,o),o.isCanceled)return;let s=e.currentTarget.value===``,c=ze(Ae,t);s&&!b.state.inputInsidePopup&&(O===`single`&&b.state.setSelectedValue(null,c),b.state.openOnInputClick||b.state.setOpen(!1,c)),a(e.currentTarget.value.trim()),M&&b.state.activeIndex!==null&&!R&&K()},onKeyDown(e){if(B||T||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return;b.state.keyboardActiveRef.current=!0;let t=e.currentTarget,n=t.scrollWidth-t.clientWidth,r=S===`rtl`;if(e.key===`Home`){mn(e);let n=Xt&&r?t.value.length:0;t.setSelectionRange(n,n),t.scrollLeft=0;return}if(e.key===`End`){mn(e);let i=Xt&&r?0:t.value.length;t.setSelectionRange(i,i),t.scrollLeft=r?-n:n;return}if(!N&&e.key===`Escape`){let t=O===`multiple`&&Array.isArray(P)?P.length===0:P===null,n=ze(Ne,e.nativeEvent),r=O===`multiple`?[]:null;b.state.setInputValue(``,n),b.state.setSelectedValue(r,n),!t&&!b.state.inline&&!n.isPropagationAllowed&&e.stopPropagation();return}if(_&&e.key===`Backspace`&&t.value===``&&_.highlightedChipIndex===void 0&&Array.isArray(P)&&P.length>0){let t=_.chipsRef.current.length,n=t>0?t-1:P.length-1,r=P.filter((e,t)=>t!==n);K(),b.state.setSelectedValue(r,ze(Se,e.nativeEvent));return}let i=_?.highlightedChipIndex!==void 0,a=le(e);if(_?.setHighlightedChipIndex(a),a===void 0?i&&b.state.inputRef.current?.focus():_?.chipsRef.current[a]?.focus(),e.which!==229&&e.key===`Enter`&&M){let t=b.state.activeIndex,n=e.nativeEvent;if(t===null){if(I)return;b.state.setOpen(!1,ze(Se,n));return}mn(e),Vs(b,t,n)}},onPointerMove:q,onPointerDown:q},se],stateAttributesMapping:js}),fe=y?(0,v.jsx)(us.Provider,{value:ls,children:ue}):ue;return(0,v.jsxs)(a.Fragment,{children:[M&&H&&(0,v.jsx)(qs,{ref:b.state.startDismissRef}),fe]})}),Ys={...Ze,...yo},Xs=a.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,nativeButton:a=!0,keepMounted:o=!1,style:s,...c}=e,{disabled:l}=ds(),u=Uo(),d=J(u,Y.selectionMode),f=J(u,Y.disabled),p=J(u,Y.readOnly),m=J(u,Y.open),h=J(u,Y.selectedValue),g=J(u,Y.hasSelectionChips),_=Ko(),v=!1;v=d===`none`?_!==``:d===`single`?h!=null:g;let y=l||f||i,{buttonRef:b,getButtonProps:x}=Ot({native:a,disabled:y}),{mounted:S,transitionStatus:C,setMounted:w}=Ke(v),T={disabled:y,visible:v,open:m,transitionStatus:C};Lt({open:v,ref:u.state.clearRef,onComplete(){v||w(!1)}});let E=de(`button`,e,{state:T,ref:[t,b,u.state.clearRef],props:[{tabIndex:-1,children:`x`,onMouseDown(e){e.preventDefault()},onClick(e){if(y||p)return;let t=u.state.keyboardActiveRef.current?Fe:Ie;u.state.setInputValue(``,ze(De,e.nativeEvent)),d===`none`?u.state.setIndices({activeIndex:null,type:t}):(u.state.setSelectedValue(Array.isArray(h)?[]:null,ze(De,e.nativeEvent)),u.state.setIndices({activeIndex:null,selectedIndex:null,type:t})),u.state.inputRef.current?.focus()}},c,x],stateAttributesMapping:Ys});return o||S?E:null}),Zs=a.createContext(null);function Qs(){return a.useContext(Zs)}function $s(e){let{children:t}=e,{filteredItems:n}=Go(),r=Qs(),i=r?r.items:n;return(0,v.jsx)(a.Fragment,{children:i.map(t)})}var ec=a.forwardRef(function(e,t){var n;let{render:r,className:i,style:o,children:s,...c}=e,l=Uo(),u=Wo(),d=!!Ks(!0),{filteredItems:p,hasItems:m}=Go(),h=J(l,Y.selectionMode),g=J(l,Y.grid),_=J(l,Y.listProps),b=J(l,Y.virtualized),x=J(l,Y.forceMounted),S=h===`multiple`,C=p.length===0,w=f(e=>{l.set(`positionerElement`,e)}),T=f(e=>{l.set(`listElement`,e)}),E=a.useMemo(()=>typeof s==`function`?n||=(0,v.jsx)($s,{children:s}):s,[s]),D={empty:C},O=u.useState(`floatingId`),k=de(`div`,e,{state:D,ref:[t,T,d?null:w],props:[_,{children:E,tabIndex:-1,id:O,role:g?`grid`:`listbox`,"aria-multiselectable":S?`true`:void 0,onKeyDown(e){if(!(l.state.disabled||l.state.readOnly)&&e.key===`Enter`){let t=l.state.activeIndex;if(t==null)return;mn(e),Vs(l,t,e.nativeEvent)}},onKeyDownCapture(){l.state.keyboardActiveRef.current=!0},onPointerMoveCapture(){l.state.keyboardActiveRef.current=!1}},c]});if(b)return k;let A=m&&!x?void 0:l.state.labelsRef;return(0,v.jsx)(y,{elementsRef:l.state.listRef,labelsRef:A,children:k})}),tc=a.createContext(void 0);function nc(){let e=a.useContext(tc);if(e===void 0)throw Error(D(20));return e}var rc=a.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,i=Uo(),a=J(i,Y.mounted),o=J(i,Y.forceMounted);return a||n||o?(0,v.jsx)(tc.Provider,{value:n,children:(0,v.jsx)(pi,{ref:t,...r})}):null}),ic=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0,offsetParent:d=`real`}=Kn(e,t)||{};if(l==null)return{};let f=ur(u),p={x:n,y:r},m=Qn(i),h=Xn(m),g=await o.getDimensions(l),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=a.reference[h]+a.reference[m]-p[m]-a.floating[h],S=p[m]-a.reference[m],C=d===`real`?await o.getOffsetParent?.(l):s.floating,w=s.floating[b]||a.floating[h];(!w||!await o.isElement?.(C))&&(w=s.floating[b]||a.floating[h]);let T=x/2-S/2,E=w/2-g[h]/2-1,D=Math.min(f[v],E),O=Math.min(f[y],E),k=D,A=w-g[h]-O,j=w/2-g[h]/2+T,M=Gn(k,j,A),N=!c.arrow&&Jn(i)!=null&&j!==M&&a.reference[h]/2-(j<k?D:O)-g[h]/2<0,P=N?j<k?j-k:j-A:0;return{[m]:p[m]+P,data:{[m]:M,centerOffset:j-M-P,...N&&{alignmentOffset:P}},reset:N}}}),ac=(e,t)=>({...ic(e),options:[e,t]}),oc={name:`hide`,async fn(e){let{width:t,height:n,x:r,y:i}=e.rects.reference,a=t===0&&n===0&&r===0&&i===0,o=await e.platform.detectOverflow(e,{elementContext:`reference`});return{data:{referenceHidden:o.top-n>=0||o.right-t>=0||o.bottom-n>=0||o.left-t>=0||a}}}},sc={sideX:`left`,sideY:`top`},cc=`--available-width`,lc=`--available-height`;function uc(e,t,n){let r=e===`inline-start`||e===`inline-end`;return{top:`top`,right:r?n?`inline-start`:`inline-end`:`right`,bottom:`bottom`,left:r?n?`inline-end`:`inline-start`:`left`}[t]}function dc(e,t,n){let{rects:r,placement:i}=e;return{side:uc(t,qn(i),n),align:Jn(i)||`center`,anchor:{width:r.reference.width,height:r.reference.height},positioner:{width:r.floating.width,height:r.floating.height}}}function fc(e){return pc(e,no)}function pc(e,t){let{anchor:n,positionMethod:r=`absolute`,side:i=`bottom`,sideOffset:o=0,align:s=`center`,alignOffset:c=0,collisionBoundary:l,collisionPadding:u=5,sticky:d=!1,arrowPadding:p=5,disableAnchorTracking:m=!1,inline:g,keepMounted:_=!1,floatingRootContext:v,mounted:y,collisionAvoidance:b,shift:x,nodeId:S,adaptiveOrigin:C,lazyFlip:w=!1,externalTree:T}=e,[E,D]=a.useState(null);!y&&E!==null&&D(null);let O=b.side||`flip`,k=b.align||`flip`,A=b.fallbackAxisSide||`end`,j=x?.crossAxis??!1,M=x?.rootBoundary,N=typeof n==`function`?n:void 0,P=f(N),F=N?P:n,I=Mt(n),L=Mt(y),R=ks()===`rtl`,z=E||{top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inline-end":R?`left`:`right`,"inline-start":R?`right`:`left`}[i],B=s===`center`?z:`${z}-${s}`,V=u;typeof V==`number`?V={top:V,right:V,bottom:V,left:V}:V&&={top:V.top||0,right:V.right||0,bottom:V.bottom||0,left:V.left||0};let ee=+(i===`bottom`),H=+(i===`top`),te=+(i===`right`),ne=+(i===`left`),re={boundary:l===`clipping-ancestors`?`clippingAncestors`:l,padding:V},ie=a.useRef(null),U=Mt(o),W=Mt(c),ae=typeof o==`function`?0:o,oe=typeof c==`function`?0:c,G=[];g&&G.push(g),G.push(Aa(e=>{let t=dc(e,i,R),n=typeof U.current==`function`?U.current(t):U.current,r=typeof W.current==`function`?W.current(t):W.current;return{mainAxis:n,crossAxis:r,alignmentAxis:r}},[ae,oe,R,i]));let se=k===`none`&&O!==`shift`,K=!se&&(d||j||O===`shift`),q=O===`none`?null:Na({...re,padding:{top:V.top+1+ee,right:V.right+1+ne,bottom:V.bottom+1+H,left:V.left+1+te},mainAxis:!j&&O===`flip`,crossAxis:k===`flip`?`alignment`:!1,fallbackAxisSideDirection:A}),ce=se?null:ja({...re,rootBoundary:M,mainAxis:k!==`none`,crossAxis:K,limiter:d||j?void 0:Ma(e=>{if(!ie.current)return{};let{width:t,height:n}=ie.current.getBoundingClientRect(),r=Zn(qn(e.placement)),i=r===`y`?t:n,a=r===`y`?V.left+V.right:V.top+V.bottom;return{offset:i/2+a/2}})},[re,d,j,M,V,k]);O===`shift`||k===`shift`||s===`center`?G.push(ce,q):G.push(q,ce),G.push(Pa({...re,apply({elements:{floating:e},availableWidth:t,availableHeight:n,rects:r}){if(!L.current)return;let i=e.style;i.setProperty(cc,`${t}px`),i.setProperty(lc,`${n}px`);let a=et(e).devicePixelRatio||1,{x:o,y:s,width:c,height:l}=r.reference,u=(Math.round((o+c)*a)-Math.round(o*a))/a,d=(Math.round((s+l)*a)-Math.round(s*a))/a;i.setProperty(`--anchor-width`,`${u}px`),i.setProperty(`--anchor-height`,`${d}px`)}}),ac(e=>({element:ie.current||Et(e.elements.floating).createElement(`div`),padding:p,offsetParent:`floating`}),[p]),{name:`transformOrigin`,fn(e){let{elements:t,middlewareData:n,placement:r,rects:a,y:s}=e,c=qn(r),l=Zn(c),u=ie.current,d=n.arrow?.x||0,f=n.arrow?.y||0,p=u?.clientWidth||0,m=u?.clientHeight||0,h=d+p/2,g=f+m/2,_=Math.abs(n.shift?.y||0),v=a.reference.height/2,y=typeof o==`function`?o(dc(e,i,R)):o,b=_>y,x={top:`${h}px calc(100% + ${y}px)`,bottom:`${h}px ${-y}px`,left:`calc(100% + ${y}px) ${g}px`,right:`${-y}px ${g}px`}[c],S=`${h}px ${a.reference.y+v-s}px`;return t.floating.style.setProperty(`--transform-origin`,K&&l===`y`&&b?S:x),{}}},oc,C),h(()=>{!y&&v&&v.update({referenceElement:null,floatingElement:null,domReferenceElement:null,positionReference:null})},[y,v]);let le=a.useMemo(()=>({elementResize:!m&&typeof ResizeObserver<`u`,layoutShift:!m&&typeof IntersectionObserver<`u`}),[m]),{refs:ue,elements:de,x:fe,y:pe,middlewareData:me,update:he,placement:ge,context:_e,isPositioned:ve,floatingStyles:ye}=t({rootContext:v,open:_?y:void 0,placement:B,middleware:G,strategy:r,whileElementsMounted:_?void 0:(...e)=>_a(...e,le),nodeId:S,externalTree:T}),{sideX:be,sideY:xe}=me.adaptiveOrigin||sc,Se=ve?r:`fixed`,Ce=a.useMemo(()=>{let e;return e=ve?C?{position:Se,[be]:fe,[xe]:pe}:{...ye,position:Se}:{position:Se,top:0,left:0},e[cc]=`100vw`,e[lc]=`100vh`,ve||(e.opacity=0),e},[C,Se,be,fe,xe,pe,ye,ve]),we=a.useRef(null);h(()=>{if(!y)return;let e=I.current,t=typeof e==`function`?e():e,n=(mc(t)?t.current:t)||null;n!==we.current&&(ue.setPositionReference(n),we.current=n)},[y,ue,F,I]),a.useEffect(()=>{if(!y)return;let e=I.current;typeof e!=`function`&&mc(e)&&e.current!==we.current&&(ue.setPositionReference(e.current),we.current=e.current)},[y,ue,F,I]),a.useEffect(()=>{if(_&&y&&de.reference&&de.floating)return _a(de.reference,de.floating,he,le)},[_,y,de,he,le]);let Te=qn(ge),Ee=uc(i,Te,R),De=Jn(ge)||`center`,Oe=!!me.hide?.referenceHidden;h(()=>{w&&y&&ve&&Te!==z&&D(Te)},[w,y,ve,Te,z]);let ke=a.useMemo(()=>({position:`absolute`,top:me.arrow?.y,left:me.arrow?.x}),[me.arrow]),Ae=me.arrow?.centerOffset!==0;return a.useMemo(()=>({positionerStyles:Ce,arrowStyles:ke,arrowRef:ie,arrowUncentered:Ae,side:Ee,align:De,physicalSide:Te,anchorHidden:Oe,refs:ue,context:_e,isPositioned:ve,update:he}),[Ce,ke,ie,Ae,Ee,De,Te,Oe,ue,_e,ve,he])}function mc(e){return e!=null&&`current`in e}function hc(e){return e===`starting`?oi:B}function gc(e,t,{styles:n,transitionStatus:r,props:i,refs:a,hidden:o,inert:s=!1}){let c={...n};return s&&(c.pointerEvents=`none`),de(`div`,e,{state:t,ref:a,props:[{role:`presentation`,hidden:o,style:c},hc(r),i],stateAttributesMapping:xo})}var _c=20;function vc(e,t,n,r){let[i,o]=a.useState(!1);h(()=>{if(!e||!t||n==null){o(!1);return}let r=Et(n).documentElement.clientWidth,i=n.offsetWidth;o(r>0&&i>0&&i>=r-_c)},[e,t,n]),pn(e&&(!t||i),r)}var yc=a.forwardRef(function(e,t){let{render:n,className:r,anchor:i,positionMethod:a,side:o,align:s,sideOffset:c,alignOffset:l,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d,arrowPadding:p,sticky:m,disableAnchorTracking:g=!1,collisionAvoidance:_=si,style:y,...b}=e,x=Uo(),S=Wo(),C=nc(),w=J(x,Y.modal),T=J(x,Y.open),E=J(x,Y.mounted),D=J(x,Y.openMethod),O=J(x,Y.positionerElement),k=J(x,Y.triggerElement),A=J(x,Y.inputElement),j=J(x,Y.inputGroupElement),M=J(x,Y.inputInsidePopup),N=J(x,Y.transitionStatus),P=Rs(),F=fc({anchor:i??(M?k:j??A),floatingRootContext:S,positionMethod:a,mounted:E,side:o,sideOffset:c,align:s,alignOffset:l,arrowPadding:p,collisionBoundary:u,collisionPadding:d,sticky:m,disableAnchorTracking:g,keepMounted:C,collisionAvoidance:_,lazyFlip:!0});vc(T&&w,D===`touch`,O,k);let I={open:T,side:F.side,align:F.align,anchorHidden:F.anchorHidden,empty:P};h(()=>{x.set(`popupSide`,F.side)},[x,F.side]);let L=f(e=>{x.set(`positionerElement`,e)}),R=gc(e,I,{styles:F.positionerStyles,transitionStatus:N,props:b,refs:[t,L],hidden:!E,inert:!T});return(0,v.jsxs)(Gs.Provider,{value:F,children:[E&&w&&(0,v.jsx)(jo,{inert:Ao(!T),cutout:j??A??k}),R]})}),bc={...xo,...Ze},xc=a.forwardRef(function(e,t){let{render:n,className:r,style:i,initialFocus:o,finalFocus:s,...c}=e,l=Uo(),u=Ks(),d=Wo(),f=J(l,Y.mounted),p=J(l,Y.open),m=J(l,Y.openMethod),g=J(l,Y.popupProps),_=J(l,Y.transitionStatus),y=J(l,Y.inputInsidePopup),b=J(l,Y.inputElement),x=J(l,Y.modal),S=J(l,Y.id),C=Rs(),w=c.id??(y?vs(S):void 0);h(()=>(l.set(`popupId`,l.state.popupRef.current?.id||w),()=>{l.set(`popupId`,void 0)}),[l,w]),Lt({open:p,ref:l.state.popupRef,onComplete(){p&&l.state.onOpenChangeComplete(!0)}});let T=de(`div`,e,{state:{open:p,side:u.side,align:u.align,anchorHidden:u.anchorHidden,transitionStatus:_,empty:C},ref:[t,l.state.popupRef],props:[g,{id:w,role:y?`dialog`:`presentation`,onFocus(e){let t=Dn(e.nativeEvent);m!==`touch`&&(En(l.state.listElement,t)||t===e.currentTarget)&&l.state.inputRef.current?.focus()}},hc(_),c],stateAttributesMapping:bc}),E=o===void 0?y?e=>e===`touch`?l.state.popupRef.current:b:!1:o,D;D=s??(y?void 0:!1);let O=!y||x;return(0,v.jsx)(Di,{context:d,disabled:!f,modal:O,openInteractionType:m,initialFocus:E,returnFocus:D,getInsideElements:()=>[l.state.startDismissRef.current,l.state.endDismissRef.current],children:(0,v.jsxs)(a.Fragment,{children:[T,O&&(0,v.jsx)(qs,{ref:l.state.endDismissRef})]})})}),Sc=a.createContext(void 0);function Cc(){let e=a.useContext(Sc);if(!e)throw Error(D(19));return e}var wc=a.createContext(!1);function Tc(){return a.useContext(wc)}function Ec(e){let{componentProps:t,forwardedRef:n,virtualized:r,indexFromFilter:i}=e,{render:o,className:s,style:c,value:l=null,index:u,disabled:d=!1,nativeButton:f=!1,...p}=t,m=a.useRef(null),g=qe({guess:!0,index:u,textRef:m}),_=Uo(),y=Tc(),b=qo(),x=J(_,Y.selectionMode),S=J(_,Y.disabled),C=J(_,Y.readOnly),w=J(_,Y.isItemEqualToValue),T=S||d,E=x!==`none`,D=u??i??g.index,O=D!==-1,k=J(_,Y.id),A=J(_,Y.isActive,D),j=J(_,Y.isSelected,l),M=J(_,Y.itemProps),N=a.useRef(null),P=k!=null&&O?`${k}-${D}`:void 0,F=j&&E;h(()=>{if(!(O&&(r||u!=null)))return;let e=_.state.listRef.current;return e[D]=N.current,()=>{delete e[D]}},[O,r,D,u,_]),h(()=>{if(!O||b)return;let e=_.state.valuesRef.current;return e[D]=l,()=>{delete e[D]}},[O,b,D,l,_]),h(()=>{if(!O||b)return;let e=_.state.selectedValue;Yo(l,Array.isArray(e)?e[e.length-1]:e,w)&&_.set(`selectedIndex`,D)},[O,b,_,D,l,w]);let{getButtonProps:I,buttonRef:L}=Ot({disabled:T,focusableWhenDisabled:!0,native:f,composite:!0}),R={disabled:T,selected:F,highlighted:A};function z(e){function t(){_.state.handleSelection(e,l)}_.state.submitOnItemClick?(Ft.flushSync(t),_.state.requestSubmit()):t()}let B={id:P,role:y?`gridcell`:`option`,"aria-selected":E?F:void 0,tabIndex:void 0,onPointerDownCapture(e){e.isPrimary&&(_.state.pointerDownItemRef.current=e.currentTarget),e.preventDefault()},onMouseDown(e){e.preventDefault()},onClick(e){T||C||z(e.nativeEvent)},onMouseUp(e){let t=_.state.pointerDownItemRef.current===e.currentTarget;_.state.pointerDownItemRef.current=null,!(T||C||e.button!==0||t||!A)&&z(e.nativeEvent)}},V=de(`div`,t,{ref:[L,n,g.ref,N],state:R,props:[M,B,p,I]}),ee=a.useMemo(()=>({selected:F,textRef:m}),[F,m]);return(0,v.jsx)(Sc.Provider,{value:ee,children:V})}function Dc(e){let{componentProps:t,forwardedRef:n}=e,r=J(Uo(),Y.isItemEqualToValue),{flatFilteredItems:i}=Go();return(0,v.jsx)(Ec,{componentProps:t,forwardedRef:n,virtualized:!0,indexFromFilter:Zo(i,t.value??null,r)})}var Oc=a.memo(a.forwardRef(function(e,t){let n=J(Uo(),Y.virtualized);return n&&e.index==null?(0,v.jsx)(Dc,{componentProps:e,forwardedRef:t}):(0,v.jsx)(Ec,{componentProps:e,forwardedRef:t,virtualized:n,indexFromFilter:void 0})})),kc=a.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,focusableWhenDisabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{getButtonProps:l,buttonRef:u}=Ot({disabled:i,focusableWhenDisabled:a,native:o});return de(`button`,e,{state:{disabled:i},ref:[t,u],props:[c,l]})});function Ac(e,t,n,r=!0,i){let[o,s]=a.useState(),c=xe(i?`${i}-label`:void 0),l=e??t??o;return h(()=>{let i=e||t||!r?void 0:jc(n.current,c);o!==i&&s(i)}),l}function jc(e,t){let n=Mc(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function Mc(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}function Nc(e){let{multiple:t=!1,defaultValue:n,value:r,onValueChange:i,autoComplete:a,...o}=e;return(0,v.jsx)(As,{...o,selectionMode:t?`multiple`:`single`,selectedValue:r,defaultSelectedValue:n,onSelectedValueChange:i,formAutoComplete:a})}var Pc=a.forwardRef(function(e,t){let{selected:n}=Cc();return e.keepMounted||n?(0,v.jsx)(Fc,{...e,ref:t}):null}),Fc=a.memo(a.forwardRef((e,t)=>{let{render:n,className:r,style:i,keepMounted:o,...s}=e,{selected:c}=Cc(),l=a.useRef(null),{transitionStatus:u,setMounted:d}=Ke(c),f=de(`span`,e,{ref:[t,l],state:{selected:c,transitionStatus:u},props:[{"aria-hidden":!0,children:`✔️`},s],stateAttributesMapping:Ze});return Lt({open:c,ref:l,onComplete(){c||d(!1)}}),f})),Ic=a.createContext(void 0),Lc={disableStyleElements:!1};function Rc(){return a.useContext(Ic)??Lc}function zc(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}var Bc=a.forwardRef(function(e,t){let{render:n,className:r,id:i,name:s,value:c,disabled:l=!1,onValueChange:u,defaultValue:d,autoFocus:p=!1,style:m,...g}=e,{state:_,name:v,disabled:y,setTouched:b,setDirty:x,validityData:S,setFocused:C,setFilled:w,validationMode:T,validation:E}=ds(),{clearErrors:D}=ms(),O=y||l,k=v??s,A={..._,disabled:O},{labelId:j}=gs(),M=_s({id:i});h(()=>{let e=c!=null;E.inputRef.current?.value||e&&c!==``?w(!0):e&&c===``&&w(!1)},[E.inputRef,w,c]);let N=a.useRef(null);h(()=>{p&&N.current===Tn(Et(N.current))&&C(!0)},[p,C]);let[P]=o({controlled:c,default:d,name:`FieldControl`,state:`value`}),F=c!==void 0,I=F?P:void 0,L=f(()=>E.inputRef.current?.value);return fs(E.inputRef,M,I,L,!O,s),de(`input`,e,{ref:[t,N],state:A,props:[{id:M,disabled:O,name:k,ref:E.inputRef,"aria-labelledby":j,autoFocus:p,...F?{value:I}:{defaultValue:d},onChange(e){let t=e.currentTarget.value;u?.(t,ze(Se,e.nativeEvent)),x(t!==(S.initialValue??``)),w(t!==``),e.nativeEvent.defaultPrevented||(D(k),E.change(t))},onFocus(){C(!0)},onBlur(e){b(!0),C(!1),T===`onBlur`&&E.commit(e.currentTarget.value)},onKeyDown(e){e.currentTarget.tagName===`INPUT`&&e.key===`Enter`&&(b(!0),E.commit(e.currentTarget.value))}},g,e=>E.getValidationProps(O,e)],stateAttributesMapping:cs})}),Vc=a.forwardRef(function(e,t){return(0,v.jsx)(Bc,{ref:t,...e})}),Hc=new Map;function Uc(e,t){let n=JSON.stringify({locale:bs(e),options:t}),r=Hc.get(n);if(r)return r;let i=new Intl.NumberFormat(e,t);return Hc.set(n,i),i}function Wc(e,t,n){return e==null?``:Uc(t,n).format(e)}function Gc(e,t,n){return(e-t)*100/(n-t)}function Kc(e,t){return e-t}function qc(e,t,n,r,i,a){let o=zc(e,n,r);if(!i)return o;let s=a.slice();return s[t]=zc(o,a[t-1]??-1/0,a[t+1]??1/0),s.sort(Kc)}function Jc(e,t,n){if(!Array.isArray(e))return!0;let r=t*n;for(let t=0;t<e.length-1;t+=1)if(!(Math.abs(e[t]-e[t+1])>=r))return!1;return!0}var Yc=()=>null,Xc={activeThumbIndex:Yc,max:Yc,min:Yc,minStepsBetweenValues:Yc,step:Yc,values:Yc,...cs},Zc=a.createContext(void 0);function Qc(){let e=a.useContext(Zc);if(e===void 0)throw Error(D(62));return e}function $c(e,t){return e===t||Array.isArray(e)&&Array.isArray(t)&&Ts(e,t)}var el=a.forwardRef(function(e,t){let{"aria-labelledby":n,className:r,defaultValue:i,disabled:s=!1,id:c,format:l,largeStep:u=10,locale:d,render:p,max:m=100,min:g=0,minStepsBetweenValues:_=0,form:b,name:x,onValueChange:S,onValueCommitted:C,orientation:w=`horizontal`,step:T=1,thumbCollisionBehavior:E=`push`,thumbAlignment:D=`center`,value:O,style:k,...A}=e,j=xe(c),M=Fs(j),N=f(S),P=f(C),{clearErrors:F}=ms(),{state:I,disabled:L,name:R,setTouched:z,setDirty:B,validityData:V,validation:ee}=ds(),{labelId:H}=gs(),[te,ne]=a.useState(),re=n??Is(H,te),ie=L||s,U=R??x,[W,ae]=o({controlled:O,default:i??g,name:`Slider`}),oe=a.useRef(null),G=a.useRef(null),se=a.useRef([]),K=a.useRef(null),q=a.useRef(-1),ce=a.useRef(null),le=a.useRef(Se),[ue,fe]=a.useState(-1),[pe,me]=a.useState(-1),[he,ge]=a.useState(!1),[_e,ve]=a.useState(()=>new Map),[ye,be]=a.useState([void 0,void 0]),Ce=f(e=>{fe(e),e!==-1&&me(e)}),we=f(e=>{e&&(G.current=e)}),Te=Array.isArray(W),Ee=a.useMemo(()=>Te?W.map(e=>zc(e,g,m)).sort(Kc):[zc(W,g,m)],[m,g,Te,W]),De=Te?Ee:Ee[0];fs(ee.inputRef,j,De,void 0,!ie,x),No(De,()=>{F(U),ee.change(De);let e=V.initialValue,t;t=Array.isArray(De)&&Array.isArray(e)?!Ts(De,e):De!==e,B(t)});let Oe=f((e,t)=>{if(Number.isNaN(e)||$c(e,W))return!1;let n=t.event,r=n.constructor,i=new r(n.type,n);return Object.defineProperty(i,`target`,{writable:!0,value:{value:e,name:U}}),t.event=i,N(e,t),t.isCanceled?!1:(le.current=t.reason,ae(e),!0)}),Ae=f((e,t,n)=>{let r=qc(e,t,g,m,Te,Ee);if(Jc(r,T,_)){let e=`key`in n?Fe:ke,i=Oe(r,ze(e,n.nativeEvent,void 0,{activeThumbIndex:t}));z(!0),i&&P(r,Be(e,n.nativeEvent))}});h(()=>{if(!ie)return;let e=Tn(Et(oe.current));En(oe.current,e)&&e.blur(),ue!==-1&&Ce(-1)},[ue,ie,Ce]);let je=a.useMemo(()=>({...I,activeThumbIndex:ue,disabled:ie,dragging:he,orientation:w,max:m,min:g,minStepsBetweenValues:_,step:T,values:Ee}),[I,ue,ie,he,m,g,_,w,T,Ee]),Me=a.useMemo(()=>({active:ue,controlRef:G,disabled:ie,dragging:he,validation:ee,format:l,handleInputChange:Ae,indicatorPosition:ye,inset:D!==`center`,labelId:re,rootLabelId:M,largeStep:u,lastUsedThumbIndex:pe,lastChangeReasonRef:le,form:b,locale:d,max:m,min:g,minStepsBetweenValues:_,name:U,onValueCommitted:P,orientation:w,pressedThumbCenterOffsetRef:K,pressedThumbIndexRef:q,pressedValuesRef:ce,registerFieldControlRef:we,renderBeforeHydration:D===`edge`,setActive:Ce,setDragging:ge,setIndicatorPosition:be,setLabelId:ne,setValue:Oe,state:je,step:T,thumbCollisionBehavior:E,thumbMap:_e,thumbRefs:se,values:Ee}),[ue,re,M,ie,he,ee,l,Ae,ye,u,pe,b,d,m,g,_,U,P,w,we,Ce,Oe,je,T,E,D,_e,Ee]),Ne=de(`div`,e,{state:je,ref:[t,oe],props:[{"aria-labelledby":re,id:j,role:`group`},A,e=>ee.getValidationProps(ie,e)],stateAttributesMapping:Xc});return(0,v.jsx)(Zc.Provider,{value:Me,children:(0,v.jsx)(y,{elementsRef:se,onMapChange:ve,children:Ne})})});function tl(e,t){let n=e.getBoundingClientRect();return t?(n.top+n.bottom)/2:(n.left+n.right)/2}function nl(e){if(e===0)return 0;if(Math.abs(e)<1){let t=e.toExponential().split(`e-`),n=t[0].split(`.`)[1];return(n?n.length:0)+parseInt(t[1],10)}let t=e.toString().split(`.`)[1];return t?t.length:0}function rl(e,t,n){let r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Math.max(nl(t),nl(n))))}function il(e,t,n,r,i,a,o,s){let c=e.slice(),l=a*o,u=c.length-1,d=s??e;c[t]=zc(n,r+t*l,i-(u-t)*l);for(let e=t+1;e<=u;e+=1){let t=c[e-1]+l,n=i-(u-e)*l,r=d[e],a=Math.max(c[e],t);r<a&&(a=Math.max(r,t)),c[e]=zc(a,t,n)}for(let e=t-1;e>=0;--e){let t=c[e+1]-l,n=r+e*l,i=d[e],a=Math.min(c[e],t);i>a&&(a=Math.min(i,t)),c[e]=zc(a,n,t)}for(let e=0;e<=u;e+=1)c[e]=Number(c[e].toFixed(12));return c}function al(e,t,n,r,i,a,o,s,c,l){let u=n??t,d=r??t;if(!(u.length>1))return{value:a,thumbIndex:0,didSwap:!1};let f=c*l;if(e===`push`)return{value:il(u,i,a,o,s,c,l),thumbIndex:i,didSwap:!1};let p=u.slice(),m=p[i-1],h=p[i+1],g=m==null?o:m+f,_=h==null?s:h-f,v=Number(zc(a,g,_).toFixed(12));switch(p[i]=v,e){case`swap`:{let e=u[i],t=1e-7,n=a>e,r=a<e,g=n&&h!=null&&a>=h-t,_=r&&m!=null&&a<=m+t;if(!g&&!_)return{value:p,thumbIndex:i,didSwap:!1};let y=g?i+1:i-1,b=p.map((e,t)=>t===i?v:d[t]??u[t]),x=a;x=g?Math.max(a,p[y]):Math.min(a,p[y]);let S=il(p,y,x,o,s,c,l,b),C=g?y-1:y+1,w=S[C-1],T=S[C+1],E=w==null?o:w+f;E=Math.max(E,o+C*f);let D=T==null?s:T-f;D=Math.min(D,s-(S.length-1-C)*f);let O=zc(v,E,D);return S[C]=Number(O.toFixed(12)),{value:S,thumbIndex:y,didSwap:!0}}default:return{value:p,thumbIndex:i,didSwap:!1}}}var ol=2;function sl(e,t){if(!e)return{start:0,end:0};function n(e){let t=e==null?0:parseFloat(e);return Number.isNaN(t)?0:t}let r=t?`Top`:`InlineStart`,i=t?`Bottom`:`InlineEnd`;return{start:n(e[`border${r}Width`])+n(e[`padding${r}`]),end:n(e[`border${i}Width`])+n(e[`padding${i}`])}}function cl(e,t){if(t.current!=null&&e.changedTouches){let n=e;for(let e=0;e<n.changedTouches.length;e+=1){let r=n.changedTouches[e];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return null}return{x:e.clientX,y:e.clientY}}var ll=a.forwardRef(function(e,t){let{render:n,className:r,style:i,...o}=e,{disabled:s,dragging:c,inset:l,lastChangeReasonRef:u,max:d,min:p,minStepsBetweenValues:m,onValueCommitted:h,orientation:g,pressedThumbCenterOffsetRef:_,pressedThumbIndexRef:v,pressedValuesRef:y,registerFieldControlRef:b,renderBeforeHydration:x,setActive:S,setDragging:C,setValue:w,state:T,step:E,thumbCollisionBehavior:D,thumbRefs:O,values:k}=Qc(),A=ks(),j=k.length>1,M=g===`vertical`,N=a.useRef(null),P=a.useRef(null),F=f(e=>{e&&P.current==null&&(P.current=et(e).getComputedStyle(e))}),I=a.useRef(null),L=a.useRef(0),R=a.useRef(0),z=a.useRef(null),B=Mt(k);function V(e){return e?.querySelector(`input[type="range"]`)}function ee(e){v.current=e,O.current[e]||(_.current=null)}function H(){v.current=-1,_.current=null}function te(e){return rt(e)?O.current.some(t=>!rt(t)||!En(t,e)?!1:V(t)?.disabled===!0):!1}function ne(e){let t=N.current,n=v.current;if(!t||n<0||n>=k.length)return n>=k.length&&(z.current=null),null;let{width:r,height:i,bottom:a,left:o,right:s}=t.getBoundingClientRect(),c=sl(P.current,M),l=R.current,u=(M?i:r)-c.start-c.end-l*2,f=_.current??0,h=e.x-f,g=e.y-f,b=zc(((M?a-g-c.end:(A===`rtl`?s-h:h-o)-c.start)-l)/u,0,1),x=(d-p)*b+p;return x=rl(x,E,p),x=zc(x,p,d),j?al(D,k,B.current,y.current,n,x,p,d,E,m):{value:x,thumbIndex:n,didSwap:!1}}function re(e){y.current=j?k.slice():null,z.current=null,B.current=k;let t=v.current,n=t;if(t>-1&&t<k.length){if(k[t]===d){let e=t;for(;e>0&&k[e-1]===d;)--e;n=e}}else{let t=M?`y`:`x`,r;n=-1;for(let i=0;i<O.current.length;i+=1){let a=O.current[i];if(rt(a)&&!V(a)?.disabled){let o=tl(a,M),s=Math.abs(e[t]-o);(r===void 0||s<=r)&&(n=i,r=s)}}}if(n>-1&&n!==t&&ee(n),l){let e=O.current[n];rt(e)&&(R.current=e.getBoundingClientRect()[M?`height`:`width`]/2)}}function ie(e){let t=V(O.current?.[e]);t&&t.focus({preventScroll:!0,focusVisible:!1})}function U(e,t,n){let r=w(e.value,ze(t,n,void 0,{activeThumbIndex:e.thumbIndex}));return r&&(z.current=e.value,B.current=Array.isArray(e.value)?e.value:[e.value],e.didSwap&&(ee(e.thumbIndex),ie(e.thumbIndex))),r}let W=f(e=>{let t=cl(e,I);if(t==null)return;if(L.current+=1,e.type===`pointermove`&&e.buttons===0){ae(e);return}let n=ne(t);n!=null&&Jc(n.value,E,m)&&(!c&&L.current>ol&&C(!0),U(n,Le,e))}),ae=f(e=>{S(-1),C(!1),_.current=null;let t=z.current;if(Array.isArray(t)&&t.length!==k.length&&(z.current=null),z.current!=null){let t=u.current;h(z.current,Be(t,e))}`pointerType`in e&&N.current?.hasPointerCapture(e.pointerId)&&N.current?.releasePointerCapture(e.pointerId),v.current=-1,I.current=null,G()}),oe=f(e=>{if(s)return;if(te(Dn(e))){H();return}let t=e.changedTouches[0];if(t==null)return;I.current=t.identifier;let n={x:t.clientX,y:t.clientY};re(n);let r=ne(n);if(r==null)return;ie(r.thumbIndex),U(r,Oe,e),L.current=0;let i=Et(N.current);i.addEventListener(`touchmove`,W,{passive:!0}),i.addEventListener(`touchend`,ae,{passive:!0})}),G=f(()=>{let e=Et(N.current);e.removeEventListener(`pointermove`,W),e.removeEventListener(`pointerup`,ae),e.removeEventListener(`touchmove`,W),e.removeEventListener(`touchend`,ae),y.current=null,z.current=null}),se=Ge();return a.useEffect(()=>{let e=N.current;if(!e)return()=>G();let t=jt(e,`touchstart`,oe,{passive:!0});return()=>{t(),se.cancel(),G()}},[G,oe,N,se]),a.useEffect(()=>{s&&G()},[s,G]),de(`div`,e,{state:T,ref:[t,b,N,F],props:[{"data-base-ui-slider-control":x?``:void 0,onPointerDown(e){let t=N.current,n=Dn(e.nativeEvent);if(!t||s||e.defaultPrevented||!rt(n)||e.button!==0)return;if(te(n)){H();return}let r={x:e.clientX,y:e.clientY};re(r);let i=ne(r);if(i==null)return;En(O.current[i.thumbIndex],Tn(Et(t)))?e.preventDefault():se.request(()=>{ie(i.thumbIndex)}),C(!0),_.current??U(i,Oe,e.nativeEvent),e.nativeEvent.pointerId&&t.setPointerCapture(e.nativeEvent.pointerId),L.current=0;let a=Et(t);a.addEventListener(`pointermove`,W,{passive:!0}),a.addEventListener(`pointerup`,ae,{once:!0})}},o],stateAttributesMapping:Xc})}),ul=a.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{state:o}=Qc();return de(`div`,e,{state:o,ref:t,props:[{style:{position:`relative`}},a],stateAttributesMapping:Xc})});function dl(){return R}function fl(){return!1}function pl(){return!0}function ml(){return(0,Ua.useSyncExternalStore)(dl,fl,pl)}function hl(e){let{script:t}=e,{nonce:n}=Rc();return ml()?(0,v.jsx)(`script`,{nonce:n,dangerouslySetInnerHTML:{__html:t},suppressHydrationWarning:!0}):null}var gl,_l=new Set([...ko,Do,Oo]);function vl(e,t,n,r){if(!(t<0))return e.length===2?`${Wc(e[t],r,n)} ${t===0?`start`:`end`} range`:n?Wc(e[t],r,n):void 0}function yl(e,t,n,r,i){let a=e+t*n;return zc(Number(a.toFixed(Math.max(nl(e),nl(t),nl(r)))),r,i)}var bl=a.forwardRef(function(e,t){let{render:n,children:r,className:i,"aria-describedby":o,"aria-label":s,"aria-labelledby":c,"aria-valuetext":l,disabled:u=!1,getAriaLabel:d,getAriaValueText:p,id:m,index:g,inputRef:_,onBlur:y,onFocus:b,onKeyDown:x,tabIndex:S,style:C,...w}=e,T=xe(m),{active:E,lastUsedThumbIndex:D,controlRef:k,disabled:A,validation:j,format:M,handleInputChange:N,inset:P,labelId:F,largeStep:I,locale:L,max:R,min:z,minStepsBetweenValues:B,form:V,name:ee,orientation:H,pressedThumbCenterOffsetRef:te,pressedThumbIndexRef:re,renderBeforeHydration:ie,setActive:U,setIndicatorPosition:W,state:ae,step:oe,thumbRefs:G,values:se}=Qc(),K=ks(),q=u||A,ce=se.length>1,le=H===`vertical`,ue=K===`rtl`,{setTouched:fe,setFocused:pe,validationMode:me}=ds(),he=a.useRef(null),ge=a.useRef(null),_e=a.useRef(!1),ve=f(e=>{_e.current||b?.(e)}),ye=f(e=>{_e.current||y?.(e)}),be=xe(),Se=_s(),Ce=ce?be:Se,{ref:we,index:Te}=qe({metadata:a.useMemo(()=>({inputId:Ce}),[Ce])}),Ee=ce?g??Te:0,De=Ee===se.length-1,Oe=se[Ee],ke=Gc(Oe,z,R),[Ae,je]=a.useState(),Me=ml(),Ne=D>=0&&D<se.length?D:-1,Pe=f(()=>{let e=k.current,t=he.current;if(!e||!t)return;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=le?`height`:`width`,a=r[i]-n[i],o=(n[i]/2+a*ke/100)/r[i]*100,s=Number.isFinite(o)?o:void 0;je(s),Ee===0?W(e=>[s,e[1]]):De&&W(e=>[e[0],s])});h(()=>{P&&queueMicrotask(Pe)},[Pe,P]),h(()=>{P&&Pe()},[Pe,P,ke]),h(()=>{if(!P)return;let e=k.current,t=he.current;if(!e||!t)return;let n=et(e).ResizeObserver;if(typeof n!=`function`)return;let r=new n(Pe);return r.observe(e),r.observe(t),()=>{r.disconnect()}},[k,Pe,P]);let Fe=le?`bottom`:`insetInlineStart`,Ie=le?`left`:`top`,Le;ce?E===Ee?Le=2:Ne===Ee&&(Le=1):E===Ee&&(Le=1);let Re;Re=!P&&!Number.isFinite(ke)?In:{position:`absolute`,[Fe]:P?`var(--position)`:`${ke}%`,[Ie]:`50%`,translate:`${(le||!ue?-1:1)*50}% ${(le?1:-1)*50}%`,zIndex:Le,...P&&{"--position":`${Ae??0}%`,visibility:ie&&Me||Ae===void 0?`hidden`:void 0}};let ze;le&&(ze=ue?`vertical-rl`:`vertical-lr`);let Be=typeof d==`function`?d(Ee):s,Ve=ne({"aria-label":Be,"aria-labelledby":c??(Be==null?F:void 0),"aria-describedby":o,"aria-orientation":H,"aria-valuenow":Oe,"aria-valuetext":typeof p==`function`?p(Wc(Oe,L,M),Oe,Ee):l??vl(se,Ee,M,L),disabled:q,form:V,id:Ce,max:R,min:z,name:ee,onChange(e){N(e.currentTarget.valueAsNumber,Ee,e)},onFocus(e){let t=_e.current;_e.current=!1,U(Ee),pe(!0),t&&e.stopPropagation()},onBlur(e){if(_e.current){e.stopPropagation();return}U(-1),!G.current.some(t=>En(t,e.relatedTarget))&&(fe(!0),pe(!1),me===`onBlur`&&j.commit(qc(Oe,Ee,z,R,ce,se)))},onKeyDown(e){if(e.defaultPrevented||!_l.has(e.key))return;ko.has(e.key)&&e.stopPropagation();let t=null,n=0,r=e.shiftKey?I:oe,i=rl(Oe,oe,z);switch(e.key){case So:n=1;break;case To:n=ue?-1:1;break;case Co:n=-1;break;case wo:n=ue?1:-1;break;case Do:r=I,n=1;break;case Oo:r=I,n=-1;break;case`End`:t=ce&&Number.isFinite(se[Ee+1])?se[Ee+1]-oe*B:R;break;case Eo:t=ce&&Number.isFinite(se[Ee-1])?se[Ee-1]+oe*B:z;break;default:break}if(n!==0&&(t=yl(i,r,n,z,R)),t!==null){let n=e.currentTarget;Mn(n)||(_e.current=!0,n.blur(),n.focus({preventScroll:!0,focusVisible:!0})),N(t,Ee,e),e.preventDefault()}},step:oe,style:{...In,width:`100%`,height:`100%`,writingMode:ze},tabIndex:S,type:`range`,value:Oe??``},e=>j.getValidationProps(q,e),{onFocus:ve,onBlur:ye,onKeyDown:x}),He=O(ge,j.inputRef,_);return de(`div`,e,{state:ae,ref:[t,we,he],props:[{"data-index":Ee,children:(0,v.jsxs)(a.Fragment,{children:[r,(0,v.jsx)(`input`,{ref:He,...Ve,suppressHydrationWarning:!0}),P&&De&&ie&&(gl||=(0,v.jsx)(hl,{script:``}))]}),id:T,onPointerDown(e){if(q)return;re.current=Ee;let t=tl(e.currentTarget,le);te.current=(le?e.clientY:e.clientX)-t},style:Re,suppressHydrationWarning:ie||void 0},w],stateAttributesMapping:Xc})});function xl(e,t,n,r,i,a){let o={visibility:a||n&&(r===void 0||t&&i===void 0)?`hidden`:void 0,position:e?`absolute`:`relative`,[e?`width`:`height`]:`inherit`},s=`${r??0}%`,c=`${(i??0)-(r??0)}%`;return n&&(o[`--start-position`]=s,s=`var(--start-position)`,t&&(o[`--relative-size`]=c,c=`var(--relative-size)`)),o[e?`bottom`:`insetInlineStart`]=t?s:0,o[e?`height`:`width`]=t?c:s,o}var Sl=a.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{indicatorPosition:o,inset:s,max:c,min:l,orientation:u,renderBeforeHydration:d,state:f,values:p}=Qc(),m=ml(),h=xl(u===`vertical`,p.length>1,s,s?o[0]:Gc(p[0],l,c),s?o[1]:Gc(p[p.length-1],l,c),s&&d&&m);return de(`div`,e,{state:f,ref:t,props:[{"data-base-ui-slider-indicator":d?``:void 0,style:h,suppressHydrationWarning:d||void 0},a],stateAttributesMapping:Xc})}),Cl=a.createContext(void 0);function wl(){let e=a.useContext(Cl);if(e===void 0)throw Error(D(63));return e}var Tl={...cs,checked(e){return e?{"data-checked":``}:{"data-unchecked":``}}},El=a.forwardRef(function(e,t){let{checked:n,className:r,defaultChecked:i,"aria-labelledby":s,form:c,id:l,inputRef:u,name:d,nativeButton:f=!1,onCheckedChange:p,readOnly:m=!1,required:g=!1,disabled:_=!1,render:y,uncheckedValue:b,value:x,style:S,...C}=e,{clearErrors:w}=ms(),{state:T,setTouched:E,setDirty:D,validityData:k,setFilled:A,setFocused:j,validationMode:M,disabled:N,name:P,validation:F}=ds(),{labelId:I}=gs(),L=N||_,R=P??d,z=a.useRef(null),V=O(z,u,F.inputRef),ee=a.useRef(null),H=xe(),te=_s({id:l,implicit:!1,controlRef:ee}),ne=f?void 0:te,[re,ie]=o({controlled:n,default:!!i,name:`Switch`,state:`checked`});fs(ee,H,re,void 0,!L,d),h(()=>{z.current&&A(z.current.checked)},[A]),No(re,()=>{w(R),D(re!==k.initialValue),A(re),F.change(re)});let{getButtonProps:U,buttonRef:W}=Ot({disabled:L,native:f}),ae=Ac(s,I,z,!f,ne),oe={id:f?te:H,role:`switch`,"aria-checked":re,"aria-readonly":m||void 0,"aria-required":g||void 0,"aria-labelledby":ae,onFocus(){L||j(!0)},onBlur(){let e=z.current;!e||L||(E(!0),j(!1),M===`onBlur`&&F.commit(e.checked))},onClick(e){if(m||L)return;e.preventDefault();let t=z.current;t&&Dt(t,e)}},G={...F.getValidationProps(L),checked:re,disabled:L,form:c,id:ne,name:R,required:g,style:R?Ln:In,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,ref:V,onChange(e){if(e.nativeEvent.defaultPrevented)return;if(m){e.preventDefault();return}let t=e.currentTarget.checked,n=ze(Se,e.nativeEvent);p?.(t,n),!n.isCanceled&&ie(t)},onClick(e){e.stopPropagation()},onFocus(){ee.current?.focus()},...x===void 0?B:{value:x}},se=a.useMemo(()=>({...T,checked:re,disabled:L,readOnly:m,required:g}),[T,re,L,m,g]),K=de(`span`,e,{state:se,ref:[t,ee,W],props:[oe,C,U,e=>F.getValidationProps(L,e)],stateAttributesMapping:Tl});return(0,v.jsxs)(Cl.Provider,{value:se,children:[K,!re&&R&&b!==void 0&&(0,v.jsx)(`input`,{type:`hidden`,form:c,name:R,value:b,disabled:L}),(0,v.jsx)(`input`,{...G,suppressHydrationWarning:!0})]})}),Dl=a.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e;return de(`span`,e,{state:wl(),ref:t,stateAttributesMapping:Tl,props:a})});function Ol(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ol(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function kl(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ol(e))&&(r&&(r+=` `),r+=t);return r}var Al=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},jl=(e,t)=>({classGroupId:e,validator:t}),Ml=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Nl=`-`,Pl=[],Fl=`arbitrary..`,Il=e=>{let t=zl(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Rl(e);let n=e.split(Nl);return Ll(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?Al(i,t):t:i||Pl}return n[e]||Pl}}},Ll=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Ll(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Nl):e.slice(t).join(Nl),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Rl=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?Fl+r:void 0})(),zl=e=>{let{theme:t,classGroups:n}=e;return Bl(n,t)},Bl=(e,t)=>{let n=Ml();for(let r in e){let i=e[r];Vl(i,n,r,t)}return n},Vl=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Hl(i,t,n,r)}},Hl=(e,t,n,r)=>{if(typeof e==`string`){Ul(e,t,n);return}if(typeof e==`function`){Wl(e,t,n,r);return}Gl(e,t,n,r)},Ul=(e,t,n)=>{let r=e===``?t:Kl(t,e);r.classGroupId=n},Wl=(e,t,n,r)=>{if(ql(e)){Vl(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(jl(n,e))},Gl=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Vl(o,Kl(t,a),n,r)}},Kl=(e,t)=>{let n=e,r=t.split(Nl),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Ml(),n.nextPart.set(t,i)),n=i}return n},ql=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Jl=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Yl=`!`,Xl=`:`,Zl=[],Ql=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),$l=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Xl){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Yl)?(c=s.slice(0,-1),l=!0):s.startsWith(Yl)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Ql(t,l,c,u)};if(t){let e=t+Xl,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Ql(Zl,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},eu=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},tu=e=>({cache:Jl(e.cacheSize),parseClassName:$l(e),sortModifiers:eu(e),postfixLookupClassGroupIds:nu(e),...Il(e)}),nu=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},ru=/\s+/,iu=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(ru),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Yl:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},au=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=ou(n))&&(i&&(i+=` `),i+=r);return i},ou=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=ou(e[r]))&&(n&&(n+=` `),n+=t);return n},su=(e,...t)=>{let n,r,i,a,o=o=>(n=tu(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=iu(e,n);return i(e,a),a};return a=o,(...e)=>a(au(...e))},cu=[],lu=e=>{let t=t=>t[e]||cu;return t.isThemeGetter=!0,t},uu=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,du=/^\((?:(\w[\w-]*):)?(.+)\)$/i,fu=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,pu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,mu=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hu=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,gu=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_u=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,vu=e=>fu.test(e),yu=e=>!!e&&!Number.isNaN(Number(e)),bu=e=>!!e&&Number.isInteger(Number(e)),xu=e=>e.endsWith(`%`)&&yu(e.slice(0,-1)),Su=e=>pu.test(e),Cu=()=>!0,wu=e=>mu.test(e)&&!hu.test(e),Tu=()=>!1,Eu=e=>gu.test(e),Du=e=>_u.test(e),Ou=e=>!X(e)&&!Z(e),ku=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),Au=e=>Gu(e,Yu,Tu),X=e=>uu.test(e),ju=e=>Gu(e,Xu,wu),Mu=e=>Gu(e,Zu,yu),Nu=e=>Gu(e,$u,Cu),Pu=e=>Gu(e,Qu,Tu),Fu=e=>Gu(e,qu,Tu),Iu=e=>Gu(e,Ju,Du),Lu=e=>Gu(e,ed,Eu),Z=e=>du.test(e),Ru=e=>Ku(e,Xu),zu=e=>Ku(e,Qu),Bu=e=>Ku(e,qu),Vu=e=>Ku(e,Yu),Hu=e=>Ku(e,Ju),Uu=e=>Ku(e,ed,!0),Wu=e=>Ku(e,$u,!0),Gu=(e,t,n)=>{let r=uu.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Ku=(e,t,n=!1)=>{let r=du.exec(e);return r?r[1]?t(r[1]):n:!1},qu=e=>e===`position`||e===`percentage`,Ju=e=>e===`image`||e===`url`,Yu=e=>e===`length`||e===`size`||e===`bg-size`,Xu=e=>e===`length`,Zu=e=>e===`number`,Qu=e=>e===`family-name`,$u=e=>e===`number`||e===`weight`,ed=e=>e===`shadow`,td=su(()=>{let e=lu(`color`),t=lu(`font`),n=lu(`text`),r=lu(`font-weight`),i=lu(`tracking`),a=lu(`leading`),o=lu(`breakpoint`),s=lu(`container`),c=lu(`spacing`),l=lu(`radius`),u=lu(`shadow`),d=lu(`inset-shadow`),f=lu(`text-shadow`),p=lu(`drop-shadow`),m=lu(`blur`),h=lu(`perspective`),g=lu(`aspect`),_=lu(`ease`),v=lu(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),Z,X],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[Z,X,c],T=()=>[vu,`full`,`auto`,...w()],E=()=>[bu,`none`,`subgrid`,Z,X],D=()=>[`auto`,{span:[`full`,bu,Z,X]},bu,Z,X],O=()=>[bu,`auto`,Z,X],k=()=>[`auto`,`min`,`max`,`fr`,Z,X],A=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],j=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],M=()=>[`auto`,...w()],N=()=>[vu,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],P=()=>[vu,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],F=()=>[vu,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],I=()=>[e,Z,X],L=()=>[...b(),Bu,Fu,{position:[Z,X]}],R=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],z=()=>[`auto`,`cover`,`contain`,Vu,Au,{size:[Z,X]}],B=()=>[xu,Ru,ju],V=()=>[``,`none`,`full`,l,Z,X],ee=()=>[``,yu,Ru,ju],H=()=>[`solid`,`dashed`,`dotted`,`double`],te=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],ne=()=>[yu,xu,Bu,Fu],re=()=>[``,`none`,m,Z,X],ie=()=>[`none`,yu,Z,X],U=()=>[`none`,yu,Z,X],W=()=>[yu,Z,X],ae=()=>[vu,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Su],breakpoint:[Su],color:[Cu],container:[Su],"drop-shadow":[Su],ease:[`in`,`out`,`in-out`],font:[Ou],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Su],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Su],shadow:[Su],spacing:[`px`,yu],text:[Su],"text-shadow":[Su],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,vu,X,Z,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,Z,X]}],"container-named":[ku],columns:[{columns:[yu,X,Z,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[bu,`auto`,Z,X]}],basis:[{basis:[vu,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[yu,vu,`auto`,`initial`,`none`,X]}],grow:[{grow:[``,yu,Z,X]}],shrink:[{shrink:[``,yu,Z,X]}],order:[{order:[bu,`first`,`last`,`none`,Z,X]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":k()}],"auto-rows":[{"auto-rows":k()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...A(),`normal`]}],"justify-items":[{"justify-items":[...j(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...j()]}],"align-content":[{content:[`normal`,...A()]}],"align-items":[{items:[...j(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...j(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":A()}],"place-items":[{"place-items":[...j(),`baseline`]}],"place-self":[{"place-self":[`auto`,...j()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mbs:[{mbs:M()}],mbe:[{mbe:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:N()}],"inline-size":[{inline:[`auto`,...P()]}],"min-inline-size":[{"min-inline":[`auto`,...P()]}],"max-inline-size":[{"max-inline":[`none`,...P()]}],"block-size":[{block:[`auto`,...F()]}],"min-block-size":[{"min-block":[`auto`,...F()]}],"max-block-size":[{"max-block":[`none`,...F()]}],w:[{w:[s,`screen`,...N()]}],"min-w":[{"min-w":[s,`screen`,`none`,...N()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...N()]}],h:[{h:[`screen`,`lh`,...N()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...N()]}],"max-h":[{"max-h":[`screen`,`lh`,...N()]}],"font-size":[{text:[`base`,n,Ru,ju]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Wu,Nu]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,xu,X]}],"font-family":[{font:[zu,Pu,t]}],"font-features":[{"font-features":[X]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,Z,X]}],"line-clamp":[{"line-clamp":[yu,`none`,Z,Mu]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,Z,X]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,Z,X]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...H(),`wavy`]}],"text-decoration-thickness":[{decoration:[yu,`from-font`,`auto`,Z,ju]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[yu,`auto`,Z,X]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[bu,Z,X]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,Z,X]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,Z,X]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:L()}],"bg-repeat":[{bg:R()}],"bg-size":[{bg:z()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},bu,Z,X],radial:[``,Z,X],conic:[bu,Z,X]},Hu,Iu]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:B()}],"gradient-via-pos":[{via:B()}],"gradient-to-pos":[{to:B()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:V()}],"rounded-s":[{"rounded-s":V()}],"rounded-e":[{"rounded-e":V()}],"rounded-t":[{"rounded-t":V()}],"rounded-r":[{"rounded-r":V()}],"rounded-b":[{"rounded-b":V()}],"rounded-l":[{"rounded-l":V()}],"rounded-ss":[{"rounded-ss":V()}],"rounded-se":[{"rounded-se":V()}],"rounded-ee":[{"rounded-ee":V()}],"rounded-es":[{"rounded-es":V()}],"rounded-tl":[{"rounded-tl":V()}],"rounded-tr":[{"rounded-tr":V()}],"rounded-br":[{"rounded-br":V()}],"rounded-bl":[{"rounded-bl":V()}],"border-w":[{border:ee()}],"border-w-x":[{"border-x":ee()}],"border-w-y":[{"border-y":ee()}],"border-w-s":[{"border-s":ee()}],"border-w-e":[{"border-e":ee()}],"border-w-bs":[{"border-bs":ee()}],"border-w-be":[{"border-be":ee()}],"border-w-t":[{"border-t":ee()}],"border-w-r":[{"border-r":ee()}],"border-w-b":[{"border-b":ee()}],"border-w-l":[{"border-l":ee()}],"divide-x":[{"divide-x":ee()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":ee()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...H(),`hidden`,`none`]}],"divide-style":[{divide:[...H(),`hidden`,`none`]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-bs":[{"border-bs":I()}],"border-color-be":[{"border-be":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...H(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[yu,Z,X]}],"outline-w":[{outline:[``,yu,Ru,ju]}],"outline-color":[{outline:I()}],shadow:[{shadow:[``,`none`,u,Uu,Lu]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":[`none`,d,Uu,Lu]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:ee()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[yu,ju]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":ee()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":[`none`,f,Uu,Lu]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[yu,Z,X]}],"mix-blend":[{"mix-blend":[...te(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":te()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[yu]}],"mask-image-linear-from-pos":[{"mask-linear-from":ne()}],"mask-image-linear-to-pos":[{"mask-linear-to":ne()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":ne()}],"mask-image-t-to-pos":[{"mask-t-to":ne()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":ne()}],"mask-image-r-to-pos":[{"mask-r-to":ne()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":ne()}],"mask-image-b-to-pos":[{"mask-b-to":ne()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":ne()}],"mask-image-l-to-pos":[{"mask-l-to":ne()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":ne()}],"mask-image-x-to-pos":[{"mask-x-to":ne()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":ne()}],"mask-image-y-to-pos":[{"mask-y-to":ne()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[Z,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":ne()}],"mask-image-radial-to-pos":[{"mask-radial-to":ne()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[yu]}],"mask-image-conic-from-pos":[{"mask-conic-from":ne()}],"mask-image-conic-to-pos":[{"mask-conic-to":ne()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:L()}],"mask-repeat":[{mask:R()}],"mask-size":[{mask:z()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,Z,X]}],filter:[{filter:[``,`none`,Z,X]}],blur:[{blur:re()}],brightness:[{brightness:[yu,Z,X]}],contrast:[{contrast:[yu,Z,X]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Uu,Lu]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:[``,yu,Z,X]}],"hue-rotate":[{"hue-rotate":[yu,Z,X]}],invert:[{invert:[``,yu,Z,X]}],saturate:[{saturate:[yu,Z,X]}],sepia:[{sepia:[``,yu,Z,X]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,Z,X]}],"backdrop-blur":[{"backdrop-blur":re()}],"backdrop-brightness":[{"backdrop-brightness":[yu,Z,X]}],"backdrop-contrast":[{"backdrop-contrast":[yu,Z,X]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,yu,Z,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[yu,Z,X]}],"backdrop-invert":[{"backdrop-invert":[``,yu,Z,X]}],"backdrop-opacity":[{"backdrop-opacity":[yu,Z,X]}],"backdrop-saturate":[{"backdrop-saturate":[yu,Z,X]}],"backdrop-sepia":[{"backdrop-sepia":[``,yu,Z,X]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,Z,X]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[yu,`initial`,Z,X]}],ease:[{ease:[`linear`,`initial`,_,Z,X]}],delay:[{delay:[yu,Z,X]}],animate:[{animate:[`none`,v,Z,X]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,Z,X]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:ie()}],"rotate-x":[{"rotate-x":ie()}],"rotate-y":[{"rotate-y":ie()}],"rotate-z":[{"rotate-z":ie()}],scale:[{scale:U()}],"scale-x":[{"scale-x":U()}],"scale-y":[{"scale-y":U()}],"scale-z":[{"scale-z":U()}],"scale-3d":[`scale-3d`],skew:[{skew:W()}],"skew-x":[{"skew-x":W()}],"skew-y":[{"skew-y":W()}],transform:[{transform:[Z,X,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:ae()}],"translate-x":[{"translate-x":ae()}],"translate-y":[{"translate-y":ae()}],"translate-z":[{"translate-z":ae()}],"translate-none":[`translate-none`],zoom:[{zoom:[bu,Z,X]}],accent:[{accent:I()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,Z,X]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":I()}],"scrollbar-track-color":[{"scrollbar-track":I()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,Z,X]}],fill:[{fill:[`none`,...I()]}],"stroke-w":[{stroke:[yu,Ru,ju,Mu]}],stroke:[{stroke:[`none`,...I()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function nd(...e){return td(kl(e))}var rd=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,id=kl,ad=(e,t)=>n=>{if(t?.variants==null)return id(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=rd(t)||rd(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return id(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},od=ad(`group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/80`,outline:`border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,secondary:`bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,ghost:`hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,destructive:`bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,xs:`h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5`,lg:`h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,icon:`size-8`,"icon-xs":`size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg`,"icon-lg":`size-9`}},defaultVariants:{variant:`default`,size:`default`}});function sd({className:e,variant:t=`default`,size:n=`default`,...r}){return(0,v.jsx)(kc,{"data-slot":`button`,className:nd(od({variant:t,size:n,className:e})),...r})}function cd({className:e,type:t,...n}){return(0,v.jsx)(Vc,{type:t,"data-slot":`input`,className:nd(`h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40`,e),...n})}function ld({className:e,...t}){return(0,v.jsx)(`div`,{"data-slot":`input-group`,role:`group`,className:nd(`border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto`,e),...t})}var ud=ad(`text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 flex cursor-text items-center justify-center select-none`,{variants:{align:{"inline-start":`pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first`,"inline-end":`pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last`,"block-start":`px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start`,"block-end":`px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start`}},defaultVariants:{align:`inline-start`}});function dd({className:e,align:t=`inline-start`,...n}){return(0,v.jsx)(`div`,{role:`group`,"data-slot":`input-group-addon`,"data-align":t,className:nd(ud({align:t}),e),onClick:e=>{e.target.closest(`button`)||e.currentTarget.parentElement?.querySelector(`input`)?.focus()},...n})}var fd=ad(`gap-2 text-sm flex items-center shadow-none`,{variants:{size:{xs:`h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5`,sm:``,"icon-xs":`size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0`,"icon-sm":`size-8 p-0 has-[>svg]:p-0`}},defaultVariants:{size:`xs`}});function pd({className:e,type:t=`button`,variant:n=`ghost`,size:r=`xs`,...i}){return(0,v.jsx)(sd,{type:t,"data-size":r,variant:n,className:nd(fd({size:r}),e),...i})}function md({className:e,...t}){return(0,v.jsx)(cd,{"data-slot":`input-group-control`,className:nd(`rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1`,e),...t})}var hd=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),gd=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),_d=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),vd=e=>{let t=_d(e);return t.charAt(0).toUpperCase()+t.slice(1)},yd={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},bd=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},xd=(0,a.createContext)({}),Sd=()=>(0,a.useContext)(xd),Cd=(0,a.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:o,iconNode:s,...c},l)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:p=`currentColor`,className:m=``}=Sd()??{},h=r??f?Number(n??d)*24/Number(t??u):n??d;return(0,a.createElement)(`svg`,{ref:l,...yd,width:t??u??yd.width,height:t??u??yd.height,stroke:e??p,strokeWidth:h,className:hd(`lucide`,m,i),...!o&&!bd(c)&&{"aria-hidden":`true`},...c},[...s.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(o)?o:[o]])}),wd=(e,t)=>{let n=(0,a.forwardRef)(({className:n,...r},i)=>(0,a.createElement)(Cd,{ref:i,iconNode:t,className:hd(`lucide-${gd(vd(e))}`,`lucide-${e}`,n),...r}));return n.displayName=vd(e),n},Td=wd(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Ed=wd(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Dd=wd(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Od=Nc;function kd({className:e,children:t,...n}){return(0,v.jsxs)(Hs,{"data-slot":`combobox-trigger`,className:nd(`[&_svg:not([class*='size-'])]:size-4`,e),...n,children:[t,(0,v.jsx)(Ed,{className:`text-muted-foreground size-4 pointer-events-none`})]})}function Ad({className:e,...t}){return(0,v.jsx)(Xs,{"data-slot":`combobox-clear`,render:(0,v.jsx)(pd,{variant:`ghost`,size:`icon-xs`}),className:nd(e),...t,children:(0,v.jsx)(Dd,{className:`pointer-events-none`})})}function jd({className:e,children:t,disabled:n=!1,showTrigger:r=!0,showClear:i=!1,...a}){return(0,v.jsxs)(ld,{className:nd(`w-auto`,e),children:[(0,v.jsx)(Js,{render:(0,v.jsx)(md,{disabled:n}),...a}),(0,v.jsxs)(dd,{align:`inline-end`,children:[r&&(0,v.jsx)(pd,{size:`icon-xs`,variant:`ghost`,render:(0,v.jsx)(kd,{}),"data-slot":`input-group-button`,className:`group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent`,disabled:n}),i&&(0,v.jsx)(Ad,{disabled:n})]}),t]})}function Md({className:e,side:t=`bottom`,sideOffset:n=6,align:r=`start`,alignOffset:i=0,anchor:a,...o}){return(0,v.jsx)(rc,{children:(0,v.jsx)(yc,{side:t,sideOffset:n,align:r,alignOffset:i,anchor:a,className:`isolate z-50`,children:(0,v.jsx)(xc,{"data-slot":`combobox-content`,"data-chips":!!a,className:nd(`bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 overflow-hidden rounded-lg shadow-md ring-1 duration-100 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 cn-menu-target cn-menu-translucent group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) data-[chips=true]:min-w-(--anchor-width)`,e),...o})})})}function Nd({className:e,...t}){return(0,v.jsx)(ec,{"data-slot":`combobox-list`,className:nd(`no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 p-1 data-empty:p-0 overflow-y-auto overscroll-contain`,e),...t})}function Pd({className:e,children:t,...n}){return(0,v.jsxs)(Oc,{"data-slot":`combobox-item`,className:nd(`data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0`,e),...n,children:[t,(0,v.jsx)(Pc,{render:(0,v.jsx)(`span`,{className:`pointer-events-none absolute right-2 flex size-4 items-center justify-center`}),children:(0,v.jsx)(Td,{className:`pointer-events-none`})})]})}var Fd=[{key:`mPFC`,label:`mPFC`,name:`Medial prefrontal cortex · PL + ILA`,ids:[972,44],aliases:[`medial prefrontal cortex`],ancestors:[]},{key:`CeA`,label:`CeA`,name:`Central amygdala · CEAc + CEAl + CEAm`,ids:[544,551,559],aliases:[`CEA`,`central amygdala`,`central amygdalar nucleus`],ancestors:[]},{key:`MOp`,label:`MOp`,name:`Primary motor area`,ids:[985],aliases:[`Primary motor area`],ancestors:[997,8,567,688,695,315,500]},{key:`MOs`,label:`MOs`,name:`Secondary motor area`,ids:[993],aliases:[`Secondary motor area`],ancestors:[997,8,567,688,695,315,500]},{key:`SSp`,label:`SSp`,name:`Primary somatosensory area`,ids:[322],aliases:[`Primary somatosensory area`],ancestors:[997,8,567,688,695,315,453]},{key:`VISp`,label:`VISp`,name:`Primary visual area`,ids:[385],aliases:[`Primary visual area`],ancestors:[997,8,567,688,695,315,669]},{key:`ACA`,label:`ACC`,name:`Anterior cingulate area`,ids:[31],aliases:[`Anterior cingulate area`,`ACC`,`anterior cingulate cortex`],ancestors:[997,8,567,688,695,315]},{key:`ACAd`,label:`ACAd`,name:`Anterior cingulate area, dorsal part`,ids:[39],aliases:[`Anterior cingulate area, dorsal part`],ancestors:[997,8,567,688,695,315,31]},{key:`ACAv`,label:`ACAv`,name:`Anterior cingulate area, ventral part`,ids:[48],aliases:[`Anterior cingulate area, ventral part`],ancestors:[997,8,567,688,695,315,31]},{key:`PL`,label:`PL`,name:`Prelimbic area`,ids:[972],aliases:[`Prelimbic area`],ancestors:[997,8,567,688,695,315]},{key:`ILA`,label:`ILA`,name:`Infralimbic area`,ids:[44],aliases:[`Infralimbic area`],ancestors:[997,8,567,688,695,315]},{key:`RSP`,label:`RSP`,name:`Retrosplenial area`,ids:[254],aliases:[`Retrosplenial area`],ancestors:[997,8,567,688,695,315]},{key:`HPF`,label:`HPF`,name:`Hippocampal formation`,ids:[1089],aliases:[`Hippocampal formation`],ancestors:[997,8,567,688,695]},{key:`HIP`,label:`Hippocampus`,name:`Hippocampal region`,ids:[1080],aliases:[`Hippocampal region`,`hippocampus`],ancestors:[997,8,567,688,695,1089]},{key:`CA1`,label:`CA1`,name:`Field CA1`,ids:[382],aliases:[`Field CA1`],ancestors:[997,8,567,688,695,1089,1080,375]},{key:`CA2`,label:`CA2`,name:`Field CA2`,ids:[423],aliases:[`Field CA2`],ancestors:[997,8,567,688,695,1089,1080,375]},{key:`CA3`,label:`CA3`,name:`Field CA3`,ids:[463],aliases:[`Field CA3`],ancestors:[997,8,567,688,695,1089,1080,375]},{key:`DG`,label:`DG`,name:`Dentate gyrus`,ids:[726],aliases:[`Dentate gyrus`],ancestors:[997,8,567,688,695,1089,1080]},{key:`LA`,label:`LA`,name:`Lateral amygdalar nucleus`,ids:[131],aliases:[`Lateral amygdalar nucleus`],ancestors:[997,8,567,688,703]},{key:`BLA`,label:`BLA`,name:`Basolateral amygdalar nucleus`,ids:[295],aliases:[`Basolateral amygdalar nucleus`],ancestors:[997,8,567,688,703]},{key:`BMA`,label:`BMA`,name:`Basomedial amygdalar nucleus`,ids:[319],aliases:[`Basomedial amygdalar nucleus`],ancestors:[997,8,567,688,703]},{key:`STR`,label:`STR`,name:`Striatum`,ids:[477],aliases:[`Striatum`],ancestors:[997,8,567,623]},{key:`CP`,label:`CP`,name:`Caudoputamen`,ids:[672],aliases:[`Caudoputamen`],ancestors:[997,8,567,623,477,485]},{key:`ACB`,label:`ACB`,name:`Nucleus accumbens`,ids:[56],aliases:[`Nucleus accumbens`,`NAc`,`nucleus accumbens`],ancestors:[997,8,567,623,477,493]},{key:`CEAc`,label:`CEAc`,name:`Central amygdalar nucleus, capsular part`,ids:[544],aliases:[`Central amygdalar nucleus, capsular part`],ancestors:[997,8,567,623,477,278,536]},{key:`CEAl`,label:`CEAl`,name:`Central amygdalar nucleus, lateral part`,ids:[551],aliases:[`Central amygdalar nucleus, lateral part`],ancestors:[997,8,567,623,477,278,536]},{key:`CEAm`,label:`CEAm`,name:`Central amygdalar nucleus, medial part`,ids:[559],aliases:[`Central amygdalar nucleus, medial part`],ancestors:[997,8,567,623,477,278,536]},{key:`TH`,label:`TH`,name:`Thalamus`,ids:[549],aliases:[`Thalamus`],ancestors:[997,8,343,1129]},{key:`MD`,label:`MD`,name:`Mediodorsal nucleus of thalamus`,ids:[362],aliases:[`Mediodorsal nucleus of thalamus`],ancestors:[997,8,343,1129,549,856,444]},{key:`PVT`,label:`PVT`,name:`Paraventricular nucleus of the thalamus`,ids:[149],aliases:[`Paraventricular nucleus of the thalamus`],ancestors:[997,8,343,1129,549,856,571]},{key:`HY`,label:`HY`,name:`Hypothalamus`,ids:[1097],aliases:[`Hypothalamus`],ancestors:[997,8,343,1129]},{key:`PVH`,label:`PVH`,name:`Paraventricular hypothalamic nucleus`,ids:[38],aliases:[`Paraventricular hypothalamic nucleus`],ancestors:[997,8,343,1129,1097,157]},{key:`CB`,label:`CB`,name:`Cerebellum`,ids:[512],aliases:[`Cerebellum`],ancestors:[997,8]}],Id=[`mPFC`,`CeA`,`ACA`,`HIP`],Ld=e=>e.trim().toLowerCase().replace(/\s+/g,` `);function Rd(e){let t=e.split(/[,，;\n]/).map(e=>e.trim()).filter(Boolean),n=[],r=[];for(let e of t){let t=Ld(e),i=Fd.find(e=>[e.key,e.label,e.name,...e.aliases].some(e=>Ld(e)===t));i?n.some(e=>e.key===i.key)||n.push(i):r.push(e)}return{regions:n,unknown:r}}function zd(e){let t=Ld(e.split(/[,，;\n]/).at(-1)||``);return Fd.filter(e=>[e.key,e.label,e.name,...e.aliases].some(e=>Ld(e).includes(t))).sort((e,n)=>Number(Ld(n.label).startsWith(t))-Number(Ld(e.label).startsWith(t))).slice(0,12)}function Bd(e,t){let n=e.split(/[,，;\n]/);return n.pop(),[...n.map(e=>e.trim()).filter(Boolean),t].join(`, `)+`, `}function Vd(e){let t=[];for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){let i=e[n],a=e[r];(i.ids.some(e=>a.ids.includes(e)||a.ancestors.includes(e))||a.ids.some(e=>i.ancestors.includes(e)))&&t.push(i.label+` / `+a.label)}return t}function Hd({text:e,setText:t,load:n,busy:r,disabled:i}){let[o,s]=(0,a.useState)(!1),c=zd(e);return(0,v.jsxs)(`section`,{className:`region-search`,children:[(0,v.jsx)(`label`,{className:`search-title`,htmlFor:`regions-input`,children:`Brain regions`}),(0,v.jsxs)(Od,{items:c,filter:null,value:null,inputValue:e,open:o,onOpenChange:s,onInputValueChange:(e,n)=>{n.reason===`input-change`&&t(e)},onValueChange:n=>{n&&(t(Bd(e,n.label)),s(!1))},itemToStringLabel:e=>e.label,children:[(0,v.jsx)(jd,{id:`regions-input`,"aria-label":`Brain regions, separated by commas`,placeholder:`e.g. mPFC, CeA, CA1`,showTrigger:!0}),(0,v.jsxs)(Md,{className:`region-suggestions`,children:[(0,v.jsx)(Nd,{children:c.map(e=>(0,v.jsx)(Pd,{value:e,children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:e.label}),(0,v.jsx)(`small`,{children:e.name})]})},e.key))}),c.length===0&&(0,v.jsx)(`p`,{className:`no-match`,children:`No matching local region.`})]})]}),(0,v.jsxs)(`div`,{className:`search-bottom`,children:[(0,v.jsxs)(`small`,{children:[Fd.length,` local regions · Separate with commas`]}),(0,v.jsx)(`button`,{disabled:i||r,onClick:()=>{s(!1),n()},children:r?`Loading…`:`Load regions`})]})]})}function Ud({className:e,defaultValue:t,value:n,min:r=0,max:i=100,...a}){let o=Array.isArray(n)?n:Array.isArray(t)?t:[r,i];return(0,v.jsx)(el,{className:nd(`data-horizontal:w-full data-vertical:h-full`,e),"data-slot":`slider`,defaultValue:t,value:n,min:r,max:i,thumbAlignment:`edge`,...a,children:(0,v.jsxs)(ll,{className:`data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col`,children:[(0,v.jsx)(ul,{"data-slot":`slider-track`,className:`bg-muted rounded-full data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1 relative grow overflow-hidden select-none`,children:(0,v.jsx)(Sl,{"data-slot":`slider-range`,className:`bg-primary select-none data-horizontal:h-full data-vertical:w-full`})}),Array.from({length:o.length},(e,t)=>(0,v.jsx)(bl,{"data-slot":`slider-thumb`,className:`border-ring ring-ring/50 relative size-3 rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50`},t))]})})}function Wd(e,t){let n=document.modelContext;if(!n)return()=>{};let r=new AbortController,i=[{name:`read_brain_scene`,description:`读取鼠脑透明度、共同发光强度和脑区显示状态。`,inputSchema:{type:`object`,properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>({...e()})},{name:`configure_brain_scene`,description:`设置整体鼠脑透明度、深浅、mPFC与CeA共同发光强度及显示开关。`,inputSchema:{type:`object`,properties:{transparency:{type:`number`,minimum:0,maximum:100},darkness:{type:`number`,minimum:0,maximum:100},glow:{type:`number`,minimum:0,maximum:100},brain:{type:`boolean`},rotate:{type:`boolean`}},additionalProperties:!1},annotations:{readOnlyHint:!1},execute:async n=>{if(!n||typeof n!=`object`||Array.isArray(n))throw Error(`需要设置对象`);let r={...e()};for(let[e,t]of Object.entries(n)){if([`transparency`,`darkness`,`glow`].includes(e)){if(typeof t!=`number`||!Number.isFinite(t)||t<0||t>100)throw Error(`范围必须为 0–100`)}else if([`brain`,`rotate`].includes(e)){if(typeof t!=`boolean`)throw Error(`开关必须为布尔值`)}else throw Error(`未知设置`);Object.assign(r,{[e]:t})}return t(r),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))),{...e()}}}];for(let e of i)try{Promise.resolve(n.registerTool(e,{signal:r.signal})).catch(()=>{})}catch{}return()=>r.abort()}function Gd({className:e,size:t=`default`,...n}){return(0,v.jsx)(El,{"data-slot":`switch`,"data-size":t,className:nd(`peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50`,e),...n,children:(0,v.jsx)(Dl,{"data-slot":`switch-thumb`,className:`pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground`})})}var Kd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jd=1e3,Yd=1001,Xd=1002,Zd=1003,Qd=1004,$d=1005,ef=1006,tf=1007,nf=1008,rf=1009,af=1010,of=1011,sf=1012,cf=1013,lf=1014,uf=1015,df=1016,ff=1017,pf=1018,mf=1020,hf=35902,gf=35899,_f=1021,vf=1022,yf=1023,bf=1026,xf=1027,Sf=1028,Cf=1029,wf=1030,Tf=1031,Ef=1033,Df=33776,Of=33777,kf=33778,Af=33779,jf=35840,Mf=35841,Nf=35842,Pf=35843,Ff=36196,If=37492,Lf=37496,Rf=37808,zf=37809,Bf=37810,Vf=37811,Hf=37812,Uf=37813,Wf=37814,Gf=37815,Kf=37816,qf=37817,Jf=37818,Yf=37819,Xf=37820,Zf=37821,Qf=36492,$f=36494,ep=36495,tp=36283,np=36284,rp=36285,ip=36286,ap=2300,op=2301,sp=2302,cp=2400,lp=2401,up=2402,dp=3200,fp=3201,pp=`srgb`,mp=`srgb-linear`,hp=`linear`,gp=`srgb`,_p=7680,vp=35044,yp=2e3,bp=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},xp=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Sp=1234567,Cp=Math.PI/180,wp=180/Math.PI;function Tp(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xp[e&255]+xp[e>>8&255]+xp[e>>16&255]+xp[e>>24&255]+`-`+xp[t&255]+xp[t>>8&255]+`-`+xp[t>>16&15|64]+xp[t>>24&255]+`-`+xp[n&63|128]+xp[n>>8&255]+`-`+xp[n>>16&255]+xp[n>>24&255]+xp[r&255]+xp[r>>8&255]+xp[r>>16&255]+xp[r>>24&255]).toLowerCase()}function Ep(e,t,n){return Math.max(t,Math.min(n,e))}function Dp(e,t){return(e%t+t)%t}function Op(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function kp(e,t,n){return e===t?0:(n-e)/(t-e)}function Ap(e,t,n){return(1-n)*e+n*t}function jp(e,t,n,r){return Ap(e,t,1-Math.exp(-n*r))}function Mp(e,t=1){return t-Math.abs(Dp(e,t*2)-t)}function Np(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Pp(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Fp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ip(e,t){return e+Math.random()*(t-e)}function Lp(e){return e*(.5-Math.random())}function Rp(e){e!==void 0&&(Sp=e);let t=Sp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zp(e){return e*Cp}function Bp(e){return e*wp}function Vp(e){return(e&e-1)==0&&e!==0}function Hp(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Up(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Wp(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Gp(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Kp(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var qp={DEG2RAD:Cp,RAD2DEG:wp,generateUUID:Tp,clamp:Ep,euclideanModulo:Dp,mapLinear:Op,inverseLerp:kp,lerp:Ap,damp:jp,pingpong:Mp,smoothstep:Np,smootherstep:Pp,randInt:Fp,randFloat:Ip,randFloatSpread:Lp,seededRandom:Rp,degToRad:zp,radToDeg:Bp,isPowerOfTwo:Vp,ceilPowerOfTwo:Hp,floorPowerOfTwo:Up,setQuaternionFromProperEuler:Wp,normalize:Kp,denormalize:Gp},Jp=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ep(this.x,e.x,t.x),this.y=Ep(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ep(this.x,e,t),this.y=Ep(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ep(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ep(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yp=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ep(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ep(this.x,e.x,t.x),this.y=Ep(this.y,e.y,t.y),this.z=Ep(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ep(this.x,e,t),this.y=Ep(this.y,e,t),this.z=Ep(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ep(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xp.copy(this).projectOnVector(e),this.sub(Xp)}reflect(e){return this.sub(Xp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ep(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xp=new Q,Zp=new Yp,Qp=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($p.makeScale(e,t)),this}rotate(e){return this.premultiply($p.makeRotation(-e)),this}translate(e,t){return this.premultiply($p.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$p=new Qp;function em(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function tm(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function nm(){let e=tm(`canvas`);return e.style.display=`block`,e}var rm={};function im(e){e in rm||(rm[e]=!0,console.warn(e))}function am(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var om=new Qp().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sm=new Qp().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cm(){let e={enabled:!0,workingColorSpace:mp,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=um(e.r),e.g=um(e.g),e.b=um(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=dm(e.r),e.g=dm(e.g),e.b=dm(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?hp:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return im(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return im(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[mp]:{primaries:t,whitePoint:r,transfer:hp,toXYZ:om,fromXYZ:sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pp},outputColorSpaceConfig:{drawingBufferColorSpace:pp}},[pp]:{primaries:t,whitePoint:r,transfer:gp,toXYZ:om,fromXYZ:sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pp}}}),e}var lm=cm();function um(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function dm(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var fm,pm=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fm===void 0&&(fm=tm(`canvas`)),fm.width=e.width,fm.height=e.height;let t=fm.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=fm}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=tm(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=um(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(um(t[e]/255)*255):t[e]=um(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},mm=0,hm=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:mm++}),this.uuid=Tp(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(gm(r[t].image)):e.push(gm(r[t]))}else e=gm(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function gm(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?pm.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var _m=0,vm=new Q,ym=class e extends bp{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Yd,i=Yd,a=ef,o=nf,s=yf,c=rf,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:_m++}),this.uuid=Tp(),this.name=``,this.source=new hm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Jp(0,0),this.repeat=new Jp(1,1),this.center=new Jp(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qp,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vm).x}get height(){return this.source.getSize(vm).y}get depth(){return this.source.getSize(vm).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x-=Math.floor(e.x);break;case Yd:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y-=Math.floor(e.y);break;case Yd:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ym.DEFAULT_IMAGE=null,ym.DEFAULT_MAPPING=300,ym.DEFAULT_ANISOTROPY=1;var bm=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ep(this.x,e.x,t.x),this.y=Ep(this.y,e.y,t.y),this.z=Ep(this.z,e.z,t.z),this.w=Ep(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ep(this.x,e,t),this.y=Ep(this.y,e,t),this.z=Ep(this.z,e,t),this.w=Ep(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ep(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xm=class extends bp{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ef,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bm(0,0,e,t),this.scissorTest=!1,this.viewport=new bm(0,0,e,t);let r=new ym({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:ef,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new hm(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Sm=class extends xm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cm=class extends ym{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zd,this.minFilter=Zd,this.wrapR=Yd,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},wm=class extends ym{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zd,this.minFilter=Zd,this.wrapR=Yd,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tm=class{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dm.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dm.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Dm):Dm.fromBufferAttribute(r,t),Dm.applyMatrix4(e.matrixWorld),this.expandByPoint(Dm);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Om.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Om.copy(e.boundingBox)),Om.applyMatrix4(e.matrixWorld),this.union(Om)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dm),Dm.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fm),Im.subVectors(this.max,Fm),km.subVectors(e.a,Fm),Am.subVectors(e.b,Fm),jm.subVectors(e.c,Fm),Mm.subVectors(Am,km),Nm.subVectors(jm,Am),Pm.subVectors(km,jm);let t=[0,-Mm.z,Mm.y,0,-Nm.z,Nm.y,0,-Pm.z,Pm.y,Mm.z,0,-Mm.x,Nm.z,0,-Nm.x,Pm.z,0,-Pm.x,-Mm.y,Mm.x,0,-Nm.y,Nm.x,0,-Pm.y,Pm.x,0];return!zm(t,km,Am,jm,Im)||(t=[1,0,0,0,1,0,0,0,1],!zm(t,km,Am,jm,Im))?!1:(Lm.crossVectors(Mm,Nm),t=[Lm.x,Lm.y,Lm.z],zm(t,km,Am,jm,Im))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dm).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dm).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Em[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Em[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Em[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Em[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Em[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Em[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Em[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Em[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Em),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Em=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Dm=new Q,Om=new Tm,km=new Q,Am=new Q,jm=new Q,Mm=new Q,Nm=new Q,Pm=new Q,Fm=new Q,Im=new Q,Lm=new Q,Rm=new Q;function zm(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Rm.fromArray(e,a);let o=i.x*Math.abs(Rm.x)+i.y*Math.abs(Rm.y)+i.z*Math.abs(Rm.z),s=t.dot(Rm),c=n.dot(Rm),l=r.dot(Rm);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Bm=new Tm,Vm=new Q,Hm=new Q,Um=class{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Bm.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vm.subVectors(e,this.center);let t=Vm.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Vm,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vm.copy(e.center).add(Hm)),this.expandByPoint(Vm.copy(e.center).sub(Hm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wm=new Q,Gm=new Q,Km=new Q,qm=new Q,Jm=new Q,Ym=new Q,Xm=new Q,Zm=class{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wm)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wm.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wm.copy(this.origin).addScaledVector(this.direction,t),Wm.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gm.copy(e).add(t).multiplyScalar(.5),Km.copy(t).sub(e).normalize(),qm.copy(this.origin).sub(Gm);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Km),o=qm.dot(this.direction),s=-qm.dot(Km),c=qm.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gm).addScaledVector(Km,d),f}intersectSphere(e,t){Wm.subVectors(e.center,this.origin);let n=Wm.dot(this.direction),r=Wm.dot(Wm)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wm)!==null}intersectTriangle(e,t,n,r,i){Jm.subVectors(t,e),Ym.subVectors(n,e),Xm.crossVectors(Jm,Ym);let a=this.direction.dot(Xm),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qm.subVectors(this.origin,e);let s=o*this.direction.dot(Ym.crossVectors(qm,Ym));if(s<0)return null;let c=o*this.direction.dot(Jm.cross(qm));if(c<0||s+c>a)return null;let l=-o*qm.dot(Xm);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qm=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/$m.setFromMatrixColumn(e,0).length(),i=1/$m.setFromMatrixColumn(e,1).length(),a=1/$m.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(th,e,nh)}lookAt(e,t,n){let r=this.elements;return ah.subVectors(e,t),ah.lengthSq()===0&&(ah.z=1),ah.normalize(),rh.crossVectors(n,ah),rh.lengthSq()===0&&(Math.abs(n.z)===1?ah.x+=1e-4:ah.z+=1e-4,ah.normalize(),rh.crossVectors(n,ah)),rh.normalize(),ih.crossVectors(ah,rh),r[0]=rh.x,r[4]=ih.x,r[8]=ah.x,r[1]=rh.y,r[5]=ih.y,r[9]=ah.y,r[2]=rh.z,r[6]=ih.z,r[10]=ah.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=$m.set(r[0],r[1],r[2]).length(),a=$m.set(r[4],r[5],r[6]).length(),o=$m.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],eh.copy(this);let s=1/i,c=1/a,l=1/o;return eh.elements[0]*=s,eh.elements[1]*=s,eh.elements[2]*=s,eh.elements[4]*=c,eh.elements[5]*=c,eh.elements[6]*=c,eh.elements[8]*=l,eh.elements[9]*=l,eh.elements[10]*=l,t.setFromRotationMatrix(eh),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=yp,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=yp,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},$m=new Q,eh=new Qm,th=new Q(0,0,0),nh=new Q(1,1,1),rh=new Q,ih=new Q,ah=new Q,oh=new Qm,sh=new Yp,ch=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ep(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ep(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ep(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ep(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ep(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ep(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ch.DEFAULT_ORDER=`XYZ`;var lh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},uh=0,dh=new Q,fh=new Yp,ph=new Qm,mh=new Q,hh=new Q,gh=new Q,_h=new Yp,vh=new Q(1,0,0),yh=new Q(0,1,0),bh=new Q(0,0,1),xh={type:`added`},Sh={type:`removed`},Ch={type:`childadded`,child:null},wh={type:`childremoved`,child:null},Th=class e extends bp{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:uh++}),this.uuid=Tp(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Q,n=new ch,r=new Yp,i=new Q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qm},normalMatrix:{value:new Qp}}),this.matrix=new Qm,this.matrixWorld=new Qm,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fh.setFromAxisAngle(e,t),this.quaternion.multiply(fh),this}rotateOnWorldAxis(e,t){return fh.setFromAxisAngle(e,t),this.quaternion.premultiply(fh),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ph.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mh.copy(e):mh.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hh.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ph.lookAt(hh,mh,this.up):ph.lookAt(mh,hh,this.up),this.quaternion.setFromRotationMatrix(ph),r&&(ph.extractRotation(r.matrixWorld),fh.setFromRotationMatrix(ph),this.quaternion.premultiply(fh.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xh),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sh),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ph.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ph.multiply(e.parent.matrixWorld)),e.applyMatrix4(ph),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xh),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hh,e,gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hh,_h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Th.DEFAULT_UP=new Q(0,1,0),Th.DEFAULT_MATRIX_AUTO_UPDATE=!0,Th.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Eh=new Q,Dh=new Q,Oh=new Q,kh=new Q,Ah=new Q,jh=new Q,Mh=new Q,Nh=new Q,Ph=new Q,Fh=new Q,Ih=new bm,Lh=new bm,Rh=new bm,zh=class e{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Eh.subVectors(e,t),r.cross(Eh);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Eh.subVectors(r,t),Dh.subVectors(n,t),Oh.subVectors(e,t);let a=Eh.dot(Eh),o=Eh.dot(Dh),s=Eh.dot(Oh),c=Dh.dot(Dh),l=Dh.dot(Oh),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kh)===null?!1:kh.x>=0&&kh.y>=0&&kh.x+kh.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,kh)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,kh.x),s.addScaledVector(a,kh.y),s.addScaledVector(o,kh.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ih.setScalar(0),Lh.setScalar(0),Rh.setScalar(0),Ih.fromBufferAttribute(e,t),Lh.fromBufferAttribute(e,n),Rh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ih,i.x),a.addScaledVector(Lh,i.y),a.addScaledVector(Rh,i.z),a}static isFrontFacing(e,t,n,r){return Eh.subVectors(n,t),Dh.subVectors(e,t),Eh.cross(Dh).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Eh.subVectors(this.c,this.b),Dh.subVectors(this.a,this.b),Eh.cross(Dh).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ah.subVectors(r,n),jh.subVectors(i,n),Nh.subVectors(e,n);let s=Ah.dot(Nh),c=jh.dot(Nh);if(s<=0&&c<=0)return t.copy(n);Ph.subVectors(e,r);let l=Ah.dot(Ph),u=jh.dot(Ph);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ah,a);Fh.subVectors(e,i);let f=Ah.dot(Fh),p=jh.dot(Fh);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(jh,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Mh.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Mh,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ah,a).addScaledVector(jh,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vh={h:0,s:0,l:0},Hh={h:0,s:0,l:0};function Uh(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Wh=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pp){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lm.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lm.workingColorSpace){return this.r=e,this.g=t,this.b=n,lm.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lm.workingColorSpace){if(e=Dp(e,1),t=Ep(t,0,1),n=Ep(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Uh(i,r,e+1/3),this.g=Uh(i,r,e),this.b=Uh(i,r,e-1/3)}return lm.colorSpaceToWorking(this,r),this}setStyle(e,t=pp){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pp){let n=Bh[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=um(e.r),this.g=um(e.g),this.b=um(e.b),this}copyLinearToSRGB(e){return this.r=dm(e.r),this.g=dm(e.g),this.b=dm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pp){return lm.workingToColorSpace(Gh.copy(this),e),Math.round(Ep(Gh.r*255,0,255))*65536+Math.round(Ep(Gh.g*255,0,255))*256+Math.round(Ep(Gh.b*255,0,255))}getHexString(e=pp){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lm.workingColorSpace){lm.workingToColorSpace(Gh.copy(this),t);let n=Gh.r,r=Gh.g,i=Gh.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=lm.workingColorSpace){return lm.workingToColorSpace(Gh.copy(this),t),e.r=Gh.r,e.g=Gh.g,e.b=Gh.b,e}getStyle(e=pp){lm.workingToColorSpace(Gh.copy(this),e);let t=Gh.r,n=Gh.g,r=Gh.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Vh),this.setHSL(Vh.h+e,Vh.s+t,Vh.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vh),e.getHSL(Hh);let n=Ap(Vh.h,Hh.h,t),r=Ap(Vh.s,Hh.s,t),i=Ap(Vh.l,Hh.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gh=new Wh;Wh.NAMES=Bh;var Kh=0,qh=class extends bp{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:Kh++}),this.uuid=Tp(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wh(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_p,this.stencilZFail=_p,this.stencilZPass=_p,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Jh=class extends qh{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Wh(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ch,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yh=new Q,Xh=new Jp,Zh=0,Qh=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:Zh++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=vp,this.updateRanges=[],this.gpuType=uf,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xh.fromBufferAttribute(this,t),Xh.applyMatrix3(e),this.setXY(t,Xh.x,Xh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yh.fromBufferAttribute(this,t),Yh.applyMatrix3(e),this.setXYZ(t,Yh.x,Yh.y,Yh.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yh.fromBufferAttribute(this,t),Yh.applyMatrix4(e),this.setXYZ(t,Yh.x,Yh.y,Yh.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yh.fromBufferAttribute(this,t),Yh.applyNormalMatrix(e),this.setXYZ(t,Yh.x,Yh.y,Yh.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yh.fromBufferAttribute(this,t),Yh.transformDirection(e),this.setXYZ(t,Yh.x,Yh.y,Yh.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gp(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kp(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gp(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kp(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gp(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kp(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gp(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kp(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gp(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kp(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kp(t,this.array),n=Kp(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Kp(t,this.array),n=Kp(n,this.array),r=Kp(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Kp(t,this.array),n=Kp(n,this.array),r=Kp(r,this.array),i=Kp(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},$h=class extends Qh{constructor(e,t,n){super(new Uint16Array(e),t,n)}},eg=class extends Qh{constructor(e,t,n){super(new Uint32Array(e),t,n)}},tg=class extends Qh{constructor(e,t,n){super(new Float32Array(e),t,n)}},ng=0,rg=new Qm,ig=new Th,ag=new Q,og=new Tm,sg=new Tm,cg=new Q,lg=class e extends bp{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:ng++}),this.uuid=Tp(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(em(e)?eg:$h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Qp().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rg.makeRotationFromQuaternion(e),this.applyMatrix4(rg),this}rotateX(e){return rg.makeRotationX(e),this.applyMatrix4(rg),this}rotateY(e){return rg.makeRotationY(e),this.applyMatrix4(rg),this}rotateZ(e){return rg.makeRotationZ(e),this.applyMatrix4(rg),this}translate(e,t,n){return rg.makeTranslation(e,t,n),this.applyMatrix4(rg),this}scale(e,t,n){return rg.makeScale(e,t,n),this.applyMatrix4(rg),this}lookAt(e){return ig.lookAt(e),ig.updateMatrix(),this.applyMatrix4(ig.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ag).negate(),this.translate(ag.x,ag.y,ag.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new tg(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tm);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];og.setFromBufferAttribute(n),this.morphTargetsRelative?(cg.addVectors(this.boundingBox.min,og.min),this.boundingBox.expandByPoint(cg),cg.addVectors(this.boundingBox.max,og.max),this.boundingBox.expandByPoint(cg)):(this.boundingBox.expandByPoint(og.min),this.boundingBox.expandByPoint(og.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Um);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Q,1/0);return}if(e){let n=this.boundingSphere.center;if(og.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sg.setFromBufferAttribute(n),this.morphTargetsRelative?(cg.addVectors(og.min,sg.min),og.expandByPoint(cg),cg.addVectors(og.max,sg.max),og.expandByPoint(cg)):(og.expandByPoint(sg.min),og.expandByPoint(sg.max))}og.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)cg.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(cg));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)cg.fromBufferAttribute(a,t),o&&(ag.fromBufferAttribute(e,t),cg.add(ag)),r=Math.max(r,n.distanceToSquared(cg))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Qh(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Q,s[e]=new Q;let c=new Q,l=new Q,u=new Q,d=new Jp,f=new Jp,p=new Jp,m=new Q,h=new Q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Q,y=new Q,b=new Q,x=new Q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Qh(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Q,i=new Q,a=new Q,o=new Q,s=new Q,c=new Q,l=new Q,u=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cg.fromBufferAttribute(e,t),cg.normalize(),e.setXYZ(t,cg.x,cg.y,cg.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Qh(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},ug=new Qm,dg=new Zm,fg=new Um,pg=new Q,mg=new Q,hg=new Q,gg=new Q,_g=new Q,vg=new Q,yg=new Q,bg=new Q,xg=class extends Th{constructor(e=new lg,t=new Jh){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){vg.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(_g.fromBufferAttribute(s,e),a?vg.addScaledVector(_g,r):vg.addScaledVector(_g.sub(t),r))}t.add(vg)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fg.copy(n.boundingSphere),fg.applyMatrix4(i),dg.copy(e.ray).recast(e.near),!(fg.containsPoint(dg.origin)===!1&&(dg.intersectSphere(fg,pg)===null||dg.origin.distanceToSquared(pg)>(e.far-e.near)**2))&&(ug.copy(i).invert(),dg.copy(e.ray).applyMatrix4(ug),!(n.boundingBox!==null&&dg.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dg)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Cg(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Cg(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Cg(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Cg(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Sg(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;bg.copy(s),bg.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(bg);return l<n.near||l>n.far?null:{distance:l,point:bg.clone(),object:e}}function Cg(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,mg),e.getVertexPosition(c,hg),e.getVertexPosition(l,gg);let u=Sg(e,t,n,r,mg,hg,gg,yg);if(u){let e=new Q;zh.getBarycoord(yg,mg,hg,gg,e),i&&(u.uv=zh.getInterpolatedAttribute(i,s,c,l,e,new Jp)),a&&(u.uv1=zh.getInterpolatedAttribute(a,s,c,l,e,new Jp)),o&&(u.normal=zh.getInterpolatedAttribute(o,s,c,l,e,new Q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Q,materialIndex:0};zh.getNormal(mg,hg,gg,t.normal),u.face=t,u.barycoord=e}return u}var wg=class e extends lg{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new tg(c,3)),this.setAttribute(`normal`,new tg(l,3)),this.setAttribute(`uv`,new tg(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Tg(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Eg(e){let t={};for(let n=0;n<e.length;n++){let r=Tg(e[n]);for(let e in r)t[e]=r[e]}return t}function Dg(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Og(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:lm.workingColorSpace}var kg={clone:Tg,merge:Eg},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mg=class extends qh{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tg(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ng=class extends Th{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Qm,this.projectionMatrix=new Qm,this.projectionMatrixInverse=new Qm,this.coordinateSystem=yp,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pg=new Q,Fg=new Jp,Ig=new Jp,Lg=class extends Ng{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(Cp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pg.x,Pg.y).multiplyScalar(-e/Pg.z),Pg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pg.x,Pg.y).multiplyScalar(-e/Pg.z)}getViewSize(e,t){return this.getViewBounds(e,Fg,Ig),t.subVectors(Ig,Fg)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rg=-90,zg=1,Bg=class extends Th{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Lg(Rg,zg,e,t);r.layers=this.layers,this.add(r);let i=new Lg(Rg,zg,e,t);i.layers=this.layers,this.add(i);let a=new Lg(Rg,zg,e,t);a.layers=this.layers,this.add(a);let o=new Lg(Rg,zg,e,t);o.layers=this.layers,this.add(o);let s=new Lg(Rg,zg,e,t);s.layers=this.layers,this.add(s);let c=new Lg(Rg,zg,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Vg=class extends ym{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hg=class extends Sm{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vg(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wg(5,5,5),i=new Mg({name:`CubemapFromEquirect`,uniforms:Tg(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new xg(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=ef),new Bg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ug=class extends Th{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Wg={type:`move`},Gg=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ug,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ug,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ug,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ug;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kg=class extends Th{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ch,this.environmentIntensity=1,this.environmentRotation=new ch,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qg=new Q,Jg=new Q,Yg=new Qp,Xg=class{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=qg.subVectors(n,t).cross(Jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qg),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yg.getNormalMatrix(e),r=this.coplanarPoint(qg).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zg=new Um,Qg=new Jp(.5,.5),$g=new Q,e_=class{constructor(e=new Xg,t=new Xg,n=new Xg,r=new Xg,i=new Xg,a=new Xg){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yp,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zg.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zg.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zg)}intersectsSprite(e){return Zg.center.set(0,0,0),Zg.radius=.7071067811865476+Qg.distanceTo(e.center),Zg.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zg)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if($g.x=r.normal.x>0?e.max.x:e.min.x,$g.y=r.normal.y>0?e.max.y:e.min.y,$g.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($g)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},t_=class extends qh{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Wh(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},n_=new Q,r_=new Q,i_=new Qm,a_=new Zm,o_=new Um,s_=new Q,c_=new Q,l_=class extends Th{constructor(e=new lg,t=new t_){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)n_.fromBufferAttribute(t,e-1),r_.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=n_.distanceTo(r_);e.setAttribute(`lineDistance`,new tg(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),o_.copy(n.boundingSphere),o_.applyMatrix4(r),o_.radius+=i,e.ray.intersectsSphere(o_)===!1)return;i_.copy(r).invert(),a_.copy(e.ray).applyMatrix4(i_);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=u_(this,e,a_,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=u_(this,e,a_,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=u_(this,e,a_,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=u_(this,e,a_,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function u_(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(n_.fromBufferAttribute(s,i),r_.fromBufferAttribute(s,a),n.distanceSqToSegment(n_,r_,s_,c_)>r)return;s_.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(s_);if(!(c<t.near||c>t.far))return{distance:c,point:c_.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var d_=new Q,f_=new Q,p_=class extends l_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)d_.fromBufferAttribute(t,e),f_.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+d_.distanceTo(f_);e.setAttribute(`lineDistance`,new tg(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},m_=class extends qh{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Wh(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},h_=new Qm,g_=new Zm,__=new Um,v_=new Q,y_=class extends Th{constructor(e=new lg,t=new m_){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),__.copy(n.boundingSphere),__.applyMatrix4(r),__.radius+=i,e.ray.intersectsSphere(__)===!1)return;h_.copy(r).invert(),g_.copy(e.ray).applyMatrix4(h_);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);v_.fromBufferAttribute(l,n),b_(v_,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)v_.fromBufferAttribute(l,a),b_(v_,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function b_(e,t,n,r,i,a,o){let s=g_.distanceSqToPoint(e);if(s<n){let n=new Q;g_.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var x_=class extends ym{constructor(e,t,n=lf,r,i,a,o=Zd,s=Zd,c,l=bf,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},S_=class extends ym{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},C_=class e extends lg{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new tg(p,3)),this.setAttribute(`normal`,new tg(m,3)),this.setAttribute(`uv`,new tg(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},w_=class extends Mg{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},T_=class extends qh{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Wh(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wh(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Jp(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ch,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},E_=class extends qh{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new Wh(16777215),this.specular=new Wh(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wh(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Jp(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ch,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},D_=class extends qh{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},O_=class extends qh{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function k_(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function A_(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var j_=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},M_=class extends j_{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cp,endingEnd:cp}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case lp:i=e,o=2*t-n;break;case up:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case lp:a=e,s=2*n-t;break;case up:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},N_=class extends j_{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},P_=class extends j_{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},F_=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=k_(t,this.TimeBufferType),this.values=k_(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:k_(e.times,Array),values:k_(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new P_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new N_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new M_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ap:t=this.InterpolantFactoryMethodDiscrete;break;case op:t=this.InterpolantFactoryMethodLinear;break;case sp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ap;case this.InterpolantFactoryMethodLinear:return op;case this.InterpolantFactoryMethodSmooth:return sp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&A_(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===sp,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};F_.prototype.ValueTypeName=``,F_.prototype.TimeBufferType=Float32Array,F_.prototype.ValueBufferType=Float32Array,F_.prototype.DefaultInterpolation=op;var I_=class extends F_{constructor(e,t,n){super(e,t,n)}};I_.prototype.ValueTypeName=`bool`,I_.prototype.ValueBufferType=Array,I_.prototype.DefaultInterpolation=ap,I_.prototype.InterpolantFactoryMethodLinear=void 0,I_.prototype.InterpolantFactoryMethodSmooth=void 0;var L_=class extends F_{constructor(e,t,n,r){super(e,t,n,r)}};L_.prototype.ValueTypeName=`color`;var R_=class extends F_{constructor(e,t,n,r){super(e,t,n,r)}};R_.prototype.ValueTypeName=`number`;var z_=class extends j_{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Yp.slerpFlat(i,0,a,c-o,a,c,s);return i}},B_=class extends F_{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new z_(this.times,this.values,this.getValueSize(),e)}};B_.prototype.ValueTypeName=`quaternion`,B_.prototype.InterpolantFactoryMethodSmooth=void 0;var V_=class extends F_{constructor(e,t,n){super(e,t,n)}};V_.prototype.ValueTypeName=`string`,V_.prototype.ValueBufferType=Array,V_.prototype.DefaultInterpolation=ap,V_.prototype.InterpolantFactoryMethodLinear=void 0,V_.prototype.InterpolantFactoryMethodSmooth=void 0;var H_=class extends F_{constructor(e,t,n,r){super(e,t,n,r)}};H_.prototype.ValueTypeName=`vector`;var U_={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},W_=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},G_=class{constructor(e){this.manager=e===void 0?W_:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};G_.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var K_={},q_=class extends Error{constructor(e,t){super(e),this.response=t}},J_=class extends G_{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=U_.get(`file:${e}`);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(K_[e]!==void 0){K_[e].push({onLoad:t,onProgress:n,onError:r});return}K_[e]=[],K_[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=K_[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}else throw new q_(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{U_.add(`file:${e}`,t);let n=K_[e];delete K_[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=K_[e];if(n===void 0)throw this.manager.itemError(e),t;delete K_[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Y_=class extends Th{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Wh(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},X_=class extends Y_{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Th.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wh(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Z_=new Qm,Q_=new Q,$_=new Q,ev=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jp(512,512),this.mapType=rf,this.map=null,this.mapPass=null,this.matrix=new Qm,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new e_,this._frameExtents=new Jp(1,1),this._viewportCount=1,this._viewports=[new bm(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Q_.setFromMatrixPosition(e.matrixWorld),t.position.copy(Q_),$_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($_),t.updateMatrixWorld(),Z_.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z_,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Z_)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tv=class extends Ng{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nv=class extends ev{constructor(){super(new tv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rv=class extends Y_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Th.DEFAULT_UP),this.updateMatrix(),this.target=new Th,this.shadow=new nv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},iv=class extends Lg{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},av=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ov=`\\[\\]\\.:\\/`,sv=RegExp(`[`+ov+`]`,`g`),cv=`[^`+ov+`]`,lv=`[^`+ov.replace(`\\.`,``)+`]`,uv=`((?:WC+[\\/:])*)`.replace(`WC`,cv),dv=`(WCOD+)?`.replace(`WCOD`,lv),fv=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,cv),pv=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,cv),mv=RegExp(`^`+uv+dv+fv+pv+`$`),hv=[`material`,`materials`,`bones`,`map`],gv=class{constructor(e,t,n){let r=n||_v.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_v=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(sv,``)}static parseTrackName(e){let t=mv.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);hv.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_v.Composite=gv,_v.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_v.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_v.prototype.GetterByBindingType=[_v.prototype._getValue_direct,_v.prototype._getValue_array,_v.prototype._getValue_arrayElement,_v.prototype._getValue_toArray],_v.prototype.SetterByBindingTypeAndVersioning=[[_v.prototype._setValue_direct,_v.prototype._setValue_direct_setNeedsUpdate,_v.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_v.prototype._setValue_array,_v.prototype._setValue_array_setNeedsUpdate,_v.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_v.prototype._setValue_arrayElement,_v.prototype._setValue_arrayElement_setNeedsUpdate,_v.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_v.prototype._setValue_fromArray,_v.prototype._setValue_fromArray_setNeedsUpdate,_v.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vv=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Ep(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ep(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},yv=class extends bp{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn(`THREE.Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function bv(e,t,n,r){let i=xv(r);switch(n){case _f:return e*t;case Sf:return e*t/i.components*i.byteLength;case Cf:return e*t/i.components*i.byteLength;case wf:return e*t*2/i.components*i.byteLength;case Tf:return e*t*2/i.components*i.byteLength;case vf:return e*t*3/i.components*i.byteLength;case yf:return e*t*4/i.components*i.byteLength;case Ef:return e*t*4/i.components*i.byteLength;case Df:case Of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kf:case Af:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mf:case Pf:return Math.max(e,16)*Math.max(t,8)/4;case jf:case Nf:return Math.max(e,8)*Math.max(t,8)/2;case Ff:case If:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Lf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Bf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Vf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Hf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Uf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Wf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Gf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Kf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case qf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Jf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Yf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Zf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Qf:case $f:case ep:return Math.ceil(e/4)*Math.ceil(t/4)*16;case tp:case np:return Math.ceil(e/4)*Math.ceil(t/4)*8;case rp:case ip:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function xv(e){switch(e){case rf:case af:return{byteLength:1,components:1};case sf:case of:case df:return{byteLength:2,components:1};case ff:case pf:return{byteLength:2,components:4};case lf:case cf:case uf:return{byteLength:4,components:1};case hf:case gf:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`180`}})),window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`180`;function Sv(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Cv(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var wv={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},$={common:{diffuse:{value:new Wh(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qp},alphaMap:{value:null},alphaMapTransform:{value:new Qp},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qp}},envmap:{envMap:{value:null},envMapRotation:{value:new Qp},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qp}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qp}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qp},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qp},normalScale:{value:new Jp(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qp},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qp}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qp}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qp}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wh(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wh(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qp},alphaTest:{value:0},uvTransform:{value:new Qp}},sprite:{diffuse:{value:new Wh(16777215)},opacity:{value:1},center:{value:new Jp(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qp},alphaMap:{value:null},alphaMapTransform:{value:new Qp},alphaTest:{value:0}}},Tv={basic:{uniforms:Eg([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:wv.meshbasic_vert,fragmentShader:wv.meshbasic_frag},lambert:{uniforms:Eg([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Wh(0)}}]),vertexShader:wv.meshlambert_vert,fragmentShader:wv.meshlambert_frag},phong:{uniforms:Eg([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Wh(0)},specular:{value:new Wh(1118481)},shininess:{value:30}}]),vertexShader:wv.meshphong_vert,fragmentShader:wv.meshphong_frag},standard:{uniforms:Eg([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Wh(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wv.meshphysical_vert,fragmentShader:wv.meshphysical_frag},toon:{uniforms:Eg([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Wh(0)}}]),vertexShader:wv.meshtoon_vert,fragmentShader:wv.meshtoon_frag},matcap:{uniforms:Eg([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:wv.meshmatcap_vert,fragmentShader:wv.meshmatcap_frag},points:{uniforms:Eg([$.points,$.fog]),vertexShader:wv.points_vert,fragmentShader:wv.points_frag},dashed:{uniforms:Eg([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wv.linedashed_vert,fragmentShader:wv.linedashed_frag},depth:{uniforms:Eg([$.common,$.displacementmap]),vertexShader:wv.depth_vert,fragmentShader:wv.depth_frag},normal:{uniforms:Eg([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:wv.meshnormal_vert,fragmentShader:wv.meshnormal_frag},sprite:{uniforms:Eg([$.sprite,$.fog]),vertexShader:wv.sprite_vert,fragmentShader:wv.sprite_frag},background:{uniforms:{uvTransform:{value:new Qp},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wv.background_vert,fragmentShader:wv.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qp}},vertexShader:wv.backgroundCube_vert,fragmentShader:wv.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wv.cube_vert,fragmentShader:wv.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wv.equirect_vert,fragmentShader:wv.equirect_frag},distanceRGBA:{uniforms:Eg([$.common,$.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wv.distanceRGBA_vert,fragmentShader:wv.distanceRGBA_frag},shadow:{uniforms:Eg([$.lights,$.fog,{color:{value:new Wh(0)},opacity:{value:1}}]),vertexShader:wv.shadow_vert,fragmentShader:wv.shadow_frag}};Tv.physical={uniforms:Eg([Tv.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qp},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qp},clearcoatNormalScale:{value:new Jp(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qp},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qp},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qp},sheen:{value:0},sheenColor:{value:new Wh(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qp},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qp},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qp},transmissionSamplerSize:{value:new Jp},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qp},attenuationDistance:{value:0},attenuationColor:{value:new Wh(0)},specularColor:{value:new Wh(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qp},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qp},anisotropyVector:{value:new Jp},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qp}}]),vertexShader:wv.meshphysical_vert,fragmentShader:wv.meshphysical_frag};var Ev={r:0,b:0,g:0},Dv=new ch,Ov=new Qm;function kv(e,t,n,r,i,a,o){let s=new Wh(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new xg(new wg(1,1,1),new Mg({name:`BackgroundCubeMaterial`,uniforms:Tg(Tv.backgroundCube.uniforms),vertexShader:Tv.backgroundCube.vertexShader,fragmentShader:Tv.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Dv.copy(n.backgroundRotation),Dv.x*=-1,Dv.y*=-1,Dv.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Dv.y*=-1,Dv.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(Dv)),u.material.toneMapped=lm.getTransfer(r.colorSpace)!==gp,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new xg(new C_(2,2),new Mg({name:`BackgroundMaterial`,uniforms:Tg(Tv.background.uniforms),vertexShader:Tv.background.vertexShader,fragmentShader:Tv.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,`map`,{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=lm.getTransfer(r.colorSpace)!==gp,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Ev,Og(e)),r.buffers.color.setClear(Ev.r,Ev.g,Ev.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function Av(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function jv(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Mv(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Nv(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Xg,s=new Qp,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Pv(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new Hg(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Fv=4,Iv=[.125,.215,.35,.446,.526,.582],Lv=20,Rv=new tv,zv=new Wh,Bv=null,Vv=0,Hv=0,Uv=!1,Wv=(1+Math.sqrt(5))/2,Gv=1/Wv,Kv=[new Q(-Wv,Gv,0),new Q(Wv,Gv,0),new Q(-Gv,0,Wv),new Q(Gv,0,Wv),new Q(0,Wv,-Gv),new Q(0,Wv,Gv),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],qv=new Q,Jv=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=qv}=i;Bv=this._renderer.getRenderTarget(),Vv=this._renderer.getActiveCubeFace(),Hv=this._renderer.getActiveMipmapLevel(),Uv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ey(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bv,Vv,Hv),this._renderer.xr.enabled=Uv,e.scissorTest=!1,Zv(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bv=this._renderer.getRenderTarget(),Vv=this._renderer.getActiveCubeFace(),Hv=this._renderer.getActiveMipmapLevel(),Uv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ef,minFilter:ef,generateMipmaps:!1,type:df,format:yf,colorSpace:mp,depthBuffer:!1},r=Xv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xv(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(r)),this._blurMaterial=Qv(r,e,t)}return r}_compileMaterial(e){let t=new xg(this._lodPlanes[0],e);this._renderer.compile(t,Rv)}_sceneToCubeUV(e,t,n,r,i){let a=new Lg(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(zv),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null));let d=new Jh({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new xg(new wg,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(zv),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Zv(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ey()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$v());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new xg(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Zv(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Rv)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Kv[(r-t-1)%Kv.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new xg(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Lv-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Lv;m>Lv&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lv}`);let h=[],g=0;for(let e=0;e<Lv;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Zv(t,3*v*(r>_-Fv?r-_+Fv:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Rv)}};function Yv(e){let t=[],n=[],r=[],i=e,a=e-Fv+1+Iv.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Fv?s=Iv[o-e+Fv-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new lg;h.setAttribute(`position`,new Qh(f,3)),h.setAttribute(`uv`,new Qh(p,2)),h.setAttribute(`faceIndex`,new Qh(m,1)),t.push(h),i>Fv&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Xv(e,t,n){let r=new Sm(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Zv(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Qv(e,t,n){let r=new Float32Array(Lv),i=new Q(0,1,0);return new Mg({name:`SphericalGaussianBlur`,defines:{n:Lv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ty(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $v(){return new Mg({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ty(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ey(){return new Mg({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ty(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ty(){return`

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
	`}function ny(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Jv(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Jv(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ry(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&im(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function iy(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(em(n)?eg:$h)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ay(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function oy(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function sy(e,t,n){let r=new WeakMap,i=new bm;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Cm(h,p,m,u);g.type=uf,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Jp(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function cy(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ly=new ym,uy=new x_(1,1),dy=new Cm,fy=new wm,py=new Vg,my=[],hy=[],gy=new Float32Array(16),_y=new Float32Array(9),vy=new Float32Array(4);function yy(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=my[i];if(a===void 0&&(a=new Float32Array(i),my[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function by(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xy(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Sy(e,t){let n=hy[t];n===void 0&&(n=new Int32Array(t),hy[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cy(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wy(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(by(n,t))return;e.uniform2fv(this.addr,t),xy(n,t)}}function Ty(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(by(n,t))return;e.uniform3fv(this.addr,t),xy(n,t)}}function Ey(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(by(n,t))return;e.uniform4fv(this.addr,t),xy(n,t)}}function Dy(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(by(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xy(n,t)}else{if(by(n,r))return;vy.set(r),e.uniformMatrix2fv(this.addr,!1,vy),xy(n,r)}}function Oy(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(by(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xy(n,t)}else{if(by(n,r))return;_y.set(r),e.uniformMatrix3fv(this.addr,!1,_y),xy(n,r)}}function ky(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(by(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xy(n,t)}else{if(by(n,r))return;gy.set(r),e.uniformMatrix4fv(this.addr,!1,gy),xy(n,r)}}function Ay(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jy(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(by(n,t))return;e.uniform2iv(this.addr,t),xy(n,t)}}function My(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(by(n,t))return;e.uniform3iv(this.addr,t),xy(n,t)}}function Ny(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(by(n,t))return;e.uniform4iv(this.addr,t),xy(n,t)}}function Py(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fy(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(by(n,t))return;e.uniform2uiv(this.addr,t),xy(n,t)}}function Iy(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(by(n,t))return;e.uniform3uiv(this.addr,t),xy(n,t)}}function Ly(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(by(n,t))return;e.uniform4uiv(this.addr,t),xy(n,t)}}function Ry(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(uy.compareFunction=515,a=uy):a=ly,n.setTexture2D(t||a,i)}function zy(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fy,i)}function By(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||py,i)}function Vy(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||dy,i)}function Hy(e){switch(e){case 5126:return Cy;case 35664:return wy;case 35665:return Ty;case 35666:return Ey;case 35674:return Dy;case 35675:return Oy;case 35676:return ky;case 5124:case 35670:return Ay;case 35667:case 35671:return jy;case 35668:case 35672:return My;case 35669:case 35673:return Ny;case 5125:return Py;case 36294:return Fy;case 36295:return Iy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return Vy}}function Uy(e,t){e.uniform1fv(this.addr,t)}function Wy(e,t){let n=yy(t,this.size,2);e.uniform2fv(this.addr,n)}function Gy(e,t){let n=yy(t,this.size,3);e.uniform3fv(this.addr,n)}function Ky(e,t){let n=yy(t,this.size,4);e.uniform4fv(this.addr,n)}function qy(e,t){let n=yy(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Jy(e,t){let n=yy(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Yy(e,t){let n=yy(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xy(e,t){e.uniform1iv(this.addr,t)}function Zy(e,t){e.uniform2iv(this.addr,t)}function Qy(e,t){e.uniform3iv(this.addr,t)}function $y(e,t){e.uniform4iv(this.addr,t)}function eb(e,t){e.uniform1uiv(this.addr,t)}function tb(e,t){e.uniform2uiv(this.addr,t)}function nb(e,t){e.uniform3uiv(this.addr,t)}function rb(e,t){e.uniform4uiv(this.addr,t)}function ib(e,t,n){let r=this.cache,i=t.length,a=Sy(n,i);by(r,a)||(e.uniform1iv(this.addr,a),xy(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ly,a[e])}function ab(e,t,n){let r=this.cache,i=t.length,a=Sy(n,i);by(r,a)||(e.uniform1iv(this.addr,a),xy(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fy,a[e])}function ob(e,t,n){let r=this.cache,i=t.length,a=Sy(n,i);by(r,a)||(e.uniform1iv(this.addr,a),xy(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||py,a[e])}function sb(e,t,n){let r=this.cache,i=t.length,a=Sy(n,i);by(r,a)||(e.uniform1iv(this.addr,a),xy(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||dy,a[e])}function cb(e){switch(e){case 5126:return Uy;case 35664:return Wy;case 35665:return Gy;case 35666:return Ky;case 35674:return qy;case 35675:return Jy;case 35676:return Yy;case 5124:case 35670:return Xy;case 35667:case 35671:return Zy;case 35668:case 35672:return Qy;case 35669:case 35673:return $y;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return sb}}var lb=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hy(t.type)}},ub=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}},db=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fb=/(\w+)(\])?(\[|\.)?/g;function pb(e,t){e.seq.push(t),e.map[t.id]=t}function mb(e,t,n){let r=e.name,i=r.length;for(fb.lastIndex=0;;){let a=fb.exec(r),o=fb.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){pb(n,l===void 0?new lb(s,e,t):new ub(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new db(s),pb(n,e)),n=e}}}var hb=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);mb(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function gb(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var _b=37297,vb=0;function yb(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var bb=new Qp;function xb(e){lm._getMatrix(bb,lm.workingColorSpace,e);let t=`mat3( ${bb.elements.map(e=>e.toFixed(4))} )`;switch(lm.getTransfer(e)){case hp:return[t,`LinearTransferOETF`];case gp:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Sb(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+yb(e.getShaderSource(t),r)}else return i}function Cb(e,t){let n=xb(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function wb(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Tb=new Q;function Eb(){return lm.getLuminanceCoefficients(Tb),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Tb.x.toFixed(4)}, ${Tb.y.toFixed(4)}, ${Tb.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Db(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ab).join(`
`)}function Ob(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function kb(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ab(e){return e!==``}function jb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pb(e){return e.replace(Nb,Ib)}var Fb=new Map;function Ib(e,t){let n=wv[t];if(n===void 0){let e=Fb.get(t);if(e!==void 0)n=wv[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Pb(n)}var Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rb(e){return e.replace(Lb,zb)}function zb(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Bb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Vb(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Hb(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function Ub(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function Wb(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function Gb(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Kb(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Vb(n),l=Hb(n),u=Ub(n),d=Wb(n),f=Gb(n),p=Db(n),m=Ob(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ab).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ab).join(`
`),_.length>0&&(_+=`
`)):(g=[Bb(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ab).join(`
`),_=[Bb(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:wv.tonemapping_pars_fragment,n.toneMapping===0?``:wb(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,wv.colorspace_pars_fragment,Cb(`linearToOutputTexel`,n.outputColorSpace),Eb(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ab).join(`
`)),o=Pb(o),o=jb(o,n),o=Mb(o,n),s=Pb(s),s=jb(s,n),s=Mb(s,n),o=Rb(o),s=Rb(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=gb(i,i.VERTEX_SHADER,y),S=gb(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Sb(i,x,`vertex`),n=Sb(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new hb(i,h),T=kb(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,_b)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vb++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var qb=0,Jb=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yb(e),t.set(e,n)),n}},Yb=class{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}};function Xb(e,t,n,r,i,a,o){let s=new lh,c=new Jb,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Tv[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=_.isInstancedMesh===!0,P=_.isBatchedMesh===!0,F=!!a.map,I=!!a.matcap,L=!!x,R=!!a.aoMap,z=!!a.lightMap,B=!!a.bumpMap,V=!!a.normalMap,ee=!!a.displacementMap,H=!!a.emissiveMap,te=!!a.metalnessMap,ne=!!a.roughnessMap,re=a.anisotropy>0,ie=a.clearcoat>0,U=a.dispersion>0,W=a.iridescence>0,ae=a.sheen>0,oe=a.transmission>0,G=re&&!!a.anisotropyMap,se=ie&&!!a.clearcoatMap,K=ie&&!!a.clearcoatNormalMap,q=ie&&!!a.clearcoatRoughnessMap,ce=W&&!!a.iridescenceMap,le=W&&!!a.iridescenceThicknessMap,ue=ae&&!!a.sheenColorMap,de=ae&&!!a.sheenRoughnessMap,fe=!!a.specularMap,pe=!!a.specularColorMap,me=!!a.specularIntensityMap,he=oe&&!!a.transmissionMap,ge=oe&&!!a.thicknessMap,_e=!!a.gradientMap,ve=!!a.alphaMap,ye=a.alphaTest>0,be=!!a.alphaHash,xe=!!a.extensions,Se=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Se=e.toneMapping);let Ce={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&_._colorsTexture!==null,instancing:N,instancingColor:N&&_.instanceColor!==null,instancingMorph:N&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:mp,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:z,bumpMap:B,normalMap:V,displacementMap:f&&ee,emissiveMap:H,normalMapObjectSpace:V&&a.normalMapType===1,normalMapTangentSpace:V&&a.normalMapType===0,metalnessMap:te,roughnessMap:ne,anisotropy:re,anisotropyMap:G,clearcoat:ie,clearcoatMap:se,clearcoatNormalMap:K,clearcoatRoughnessMap:q,dispersion:U,iridescence:W,iridescenceMap:ce,iridescenceThicknessMap:le,sheen:ae,sheenColorMap:ue,sheenRoughnessMap:de,specularMap:fe,specularColorMap:pe,specularIntensityMap:me,transmission:oe,transmissionMap:he,thicknessMap:ge,gradientMap:_e,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:ve,alphaTest:ye,alphaHash:be,combine:a.combine,mapUv:F&&h(a.map.channel),aoMapUv:R&&h(a.aoMap.channel),lightMapUv:z&&h(a.lightMap.channel),bumpMapUv:B&&h(a.bumpMap.channel),normalMapUv:V&&h(a.normalMap.channel),displacementMapUv:ee&&h(a.displacementMap.channel),emissiveMapUv:H&&h(a.emissiveMap.channel),metalnessMapUv:te&&h(a.metalnessMap.channel),roughnessMapUv:ne&&h(a.roughnessMap.channel),anisotropyMapUv:G&&h(a.anisotropyMap.channel),clearcoatMapUv:se&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:K&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:le&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:de&&h(a.sheenRoughnessMap.channel),specularMapUv:fe&&h(a.specularMap.channel),specularColorMapUv:pe&&h(a.specularColorMap.channel),specularIntensityMapUv:me&&h(a.specularIntensityMap.channel),transmissionMapUv:he&&h(a.transmissionMap.channel),thicknessMapUv:ge&&h(a.thicknessMap.channel),alphaMapUv:ve&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(V||re),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(F||ve),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Se,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&lm.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:H&&a.emissiveMap.isVideoTexture===!0&&lm.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:xe&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(xe&&a.extensions.multiDraw===!0||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Tv[t];n=kg.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Kb(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Zb(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Qb(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $b(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ex(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Qb),r.length>1&&r.sort(t||$b),i.length>1&&i.sort(t||$b)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function tx(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ex,e.set(t,[i])):n>=r.length?(i=new ex,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function nx(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Q,color:new Wh};break;case`SpotLight`:n={position:new Q,direction:new Q,color:new Wh,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Q,color:new Wh,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Q,skyColor:new Wh,groundColor:new Wh};break;case`RectAreaLight`:n={color:new Wh,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return e[t.id]=n,n}}}function rx(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jp};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jp};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jp,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ix=0;function ax(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ox(e){let t=new nx,n=rx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Q);let i=new Q,a=new Qm,o=new Qm;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(ax);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ix++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function sx(e){let t=new ox(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function cx(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new sx(e),t.set(n,[a])):r>=i.length?(a=new sx(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function dx(e,t,n){let r=new e_,i=new Jp,a=new Jp,o=new bm,s=new D_({depthPacking:fp}),c=new O_,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Mg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jp},radius:{value:4}},vertexShader:lx,fragmentShader:ux}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new lg;m.setAttribute(`position`,new Qh(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new xg(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:Zd,magFilter:Zd};d.map!==null&&d.map.dispose(),d.map=new Sm(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Sm(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var fx={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function px(e,t){function n(){let t=!1,n=new bm,r=null,i=new bm(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?H(e.DEPTH_TEST):te(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=fx[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?H(e.STENCIL_TEST):te(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Wh(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,I={},L=e.getParameter(e.SCISSOR_BOX),R=e.getParameter(e.VIEWPORT),z=new bm().fromArray(L),B=new bm().fromArray(R);function V(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ee={};ee[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),ee[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ee[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),H(e.DEPTH_TEST),o.setFunc(3),G(!1),se(1),H(e.CULL_FACE),ae(0);function H(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function te(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ne(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function re(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ie(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let U={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};U[103]=e.MIN,U[104]=e.MAX;let W={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ae(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(te(e.BLEND),h=!1);return}if(h===!1&&(H(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:console.error(`THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:console.error(`THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(U[n],U[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(W[r],W[i],W[o],W[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function oe(t,n){t.side===2?te(e.CULL_FACE):H(e.CULL_FACE);let r=t.side===1;n&&(r=!r),G(r),t.blending===1&&t.transparent===!1?ae(0):ae(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),q(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?H(e.SAMPLE_ALPHA_TO_COVERAGE):te(e.SAMPLE_ALPHA_TO_COVERAGE)}function G(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function se(t){t===0?te(e.CULL_FACE):(H(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function K(t){t!==O&&(M&&e.lineWidth(t),O=t)}function q(t,n,r){t?(H(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):te(e.POLYGON_OFFSET_FILL)}function ce(t){t?H(e.SCISSOR_TEST):te(e.SCISSOR_TEST)}function le(t){t===void 0&&(t=e.TEXTURE0+j-1),F!==t&&(e.activeTexture(t),F=t)}function ue(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+j-1:F);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||ee[t]),i.type=t,i.texture=n)}function de(){let t=I[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function fe(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function pe(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function me(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function he(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(t){z.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))}function Ce(t){B.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),B.copy(t))}function we(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Te(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ee(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},F=null,I={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new Wh(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,z.set(0,0,e.canvas.width,e.canvas.height),B.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:H,disable:te,bindFramebuffer:ne,drawBuffers:re,useProgram:ie,setBlending:ae,setMaterial:oe,setFlipSided:G,setCullFace:se,setLineWidth:K,setPolygonOffset:q,setScissorTest:ce,activeTexture:le,bindTexture:ue,unbindTexture:de,compressedTexImage2D:fe,compressedTexImage3D:pe,texImage2D:be,texImage3D:xe,updateUBOMapping:we,uniformBlockBinding:Te,texStorage2D:ve,texStorage3D:ye,texSubImage2D:me,texSubImage3D:he,compressedTexSubImage2D:ge,compressedTexSubImage3D:_e,scissor:Se,viewport:Ce,reset:Ee}}function mx(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Jp,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(e,t){return p?new OffscreenCanvas(e,t):tm(`canvas`)}function h(e,t,n){let r=1,i=ue(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);d===void 0&&(d=m(n,a));let o=t?m(n,a):d;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function g(e){return e.generateMipmaps}function _(t){e.generateMipmap(t)}function v(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?hp:lm.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&u.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=f.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&f.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=f.get(i);delete a[n.__cacheKey],o.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function k(){let e=D;return e>=i.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),D+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function j(t,i){let a=r.get(t);if(t.isVideoTexture&&ce(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ee(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ee(a,t,i);return}n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ee(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.version>0&&a.__version!==t.version){H(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let F={[Jd]:e.REPEAT,[Yd]:e.CLAMP_TO_EDGE,[Xd]:e.MIRRORED_REPEAT},I={[Zd]:e.NEAREST,[Qd]:e.NEAREST_MIPMAP_NEAREST,[$d]:e.NEAREST_MIPMAP_LINEAR,[ef]:e.LINEAR,[tf]:e.LINEAR_MIPMAP_NEAREST,[nf]:e.LINEAR_MIPMAP_LINEAR},L={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function R(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,F[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,F[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,F[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,I[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,I[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,L[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function z(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=f.get(i);a===void 0&&(a={},f.set(i,a));let s=A(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function B(e,t,n){return Math.floor(Math.floor(e/n)/t)}function V(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=B(n.start,r.width,4),c=B(t.start,r.width,4);n.start<=i+1&&a===c&&B(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ee(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=z(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=lm.getPrimaries(lm.workingColorSpace),r=o.colorSpace===``?null:lm.getPrimaries(o.colorSpace),f=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=h(o.image,!1,i.maxTextureSize);p=le(o,p);let m=a.convert(o.format,o.colorSpace),v=a.convert(o.type),S=y(o.internalFormat,m,v,o.colorSpace,o.isVideoTexture);R(c,o);let C,w=o.mipmaps,T=o.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(o,p);if(o.isDepthTexture)S=b(o.format===xf,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,null));else if(o.isDataTexture)if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&V(o,p,m,v)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,v,p.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],o.format!==1023)if(m!==null)if(T){if(D)if(o.layerUpdates.size>0){let r=bv(C.width,C.height,o.format,o.type);for(let i of o.layerUpdates){let a=C.data.subarray(i*r/C.data.BYTES_PER_ELEMENT,(i+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,C.width,C.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0);else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,v,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,v,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,v,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,v,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}else if(o.isDataArrayTexture)if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D)if(o.layerUpdates.size>0){let t=bv(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,v,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,v,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,v,p.data);else if(o.isFramebufferTexture){if(E)if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,v,null),t>>=1,r>>=1}}else if(w.length>0){if(T&&E){let t=ue(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,v,C):n.texImage2D(e.TEXTURE_2D,t,S,m,v,C);o.generateMipmaps=!1}else if(T){if(E){let t=ue(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,v,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,v,p);g(o)&&_(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function H(t,o,s){if(o.image.length!==6)return;let c=z(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=lm.getPrimaries(lm.workingColorSpace),r=o.colorSpace===``?null:lm.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=h(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=le(o,m[e]);let v=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),C=y(o.internalFormat,b,S,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(o,v);R(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,v.width,v.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,b,S,i.data):b===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ue(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}g(o)&&_(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function te(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=y(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),q(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,K(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ne(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=K(n);q(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=y(o.internalFormat,c,l,o.colorSpace),d=K(n);r&&q(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):q(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function re(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,(!a.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),j(i.depthTexture,0);let o=a.__webglTexture,c=K(i);if(i.depthTexture.format===1026)q(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(i.depthTexture.format===1027)q(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error(`Unknown depthTexture format`)}function ie(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?re(i.__webglFramebuffer[0],t):re(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ne(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ne(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function U(t,n,i){let a=r.get(t);n!==void 0&&te(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ie(t)}function W(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&q(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=y(r.internalFormat,i,o,r.colorSpace,t.isXRRenderTarget===!0),u=K(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ne(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),R(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)te(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(i)&&_(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),R(c,a),te(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),g(a)&&_(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),R(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else te(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);g(i)&&_(r),n.unbindTexture()}t.depthBuffer&&ie(t)}function ae(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(g(a)){let t=v(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),_(t),n.unbindTexture()}}}let oe=[],G=[];function se(t){if(t.samples>0){if(q(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(oe.length=0,G.length=0,oe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(oe.push(l),G.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,G)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,oe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function K(e){return Math.min(i.maxSamples,e.samples)}function q(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ce(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(lm.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function ue(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=M,this.setTexture3D=N,this.setTextureCube=P,this.rebindTextures=U,this.setupRenderTarget=W,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=te,this.useMultisampledRTT=q}function hx(e,t){function n(n,r=``){let i,a=lm.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new S_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mg({vertexShader:gx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xg(new C_(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yx=class extends bp{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new vx,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Jp,C=null,w=new Lg;w.viewport=new bm;let T=new Lg;T.viewport=new bm;let E=[w,T],D=new iv,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Gg,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Gg,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Gg,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,B.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?xf:bf,a=_.stencil?mf:lf);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sm(d.textureWidth,d.textureHeight,{format:yf,type:rf,depthTexture:new x_(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sm(f.framebufferWidth,f.framebufferHeight,{format:yf,type:rf,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new Q,P=new Q;function F(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&3,T.layers.mask=D.layers.mask&5;let i=e.parent,a=D.cameras;I(D,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?F(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),L(e,D,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=wp*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let R=null;function z(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new Lg,o.layers.enable(n),o.viewport=new bm,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new S_,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let B=new Sv;B.setAnimationLoop(z),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},bx=new ch,xx=new Qm;function Sx(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Og(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,bx.copy(o),bx.x*=-1,bx.y*=-1,bx.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(bx.y*=-1,bx.z*=-1),e.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(bx)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Cx(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var wx=class{constructor(e={}){let{canvas:t=nm(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=pp;let x=0,S=0,C=null,w=-1,T=null,E=new bm,D=new bm,O=null,k=new Wh(0),A=0,j=t.width,M=t.height,N=1,P=null,F=null,I=new bm(0,0,j,M),L=new bm(0,0,j,M),R=!1,z=new e_,B=!1,V=!1,ee=new Qm,H=new Q,te=new bm,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function ie(){return C===null?N:1}let U=n;function W(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r180`),t.addEventListener(`webglcontextlost`,Oe,!1),t.addEventListener(`webglcontextrestored`,ke,!1),t.addEventListener(`webglcontextcreationerror`,Ae,!1),U===null){let t=`webgl2`;if(U=W(t,e),U===null)throw W(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ae,oe,G,se,K,q,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te;function Ee(){ae=new ry(U),ae.init(),Ce=new hx(U,ae),oe=new Mv(U,ae,e,Ce),G=new px(U,ae),oe.reversedDepthBuffer&&d&&G.buffers.depth.setReversed(!0),se=new oy(U),K=new Zb,q=new mx(U,ae,G,K,oe,Ce,se),ce=new Pv(y),le=new ny(y),ue=new Cv(U),we=new Av(U,ue),de=new iy(U,ue,se,we),fe=new cy(U,de,ue,se),be=new sy(U,oe,q),_e=new Nv(K),pe=new Xb(y,ce,le,ae,oe,we,_e),me=new Sx(y,K),he=new tx,ge=new cx(ae),ye=new kv(y,ce,le,G,fe,f,s),ve=new dx(y,fe,oe),Te=new Cx(U,se,oe,G),xe=new jv(U,ae,se),Se=new ay(U,ae,se),se.programs=pe.programs,y.capabilities=oe,y.extensions=ae,y.properties=K,y.renderLists=he,y.shadowMap=ve,y.state=G,y.info=se}Ee();let De=new yx(y,U);this.xr=De,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(e){e!==void 0&&(N=e,this.setSize(j,M,!1))},this.getSize=function(e){return e.set(j,M)},this.setSize=function(e,n,r=!0){if(De.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}j=e,M=n,t.width=Math.floor(e*N),t.height=Math.floor(n*N),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(j*N,M*N).floor()},this.setDrawingBufferSize=function(e,n,r){j=e,M=n,N=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(I)},this.setViewport=function(e,t,n,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,n,r),G.viewport(E.copy(I).multiplyScalar(N).round())},this.getScissor=function(e){return e.copy(L)},this.setScissor=function(e,t,n,r){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,r),G.scissor(D.copy(L).multiplyScalar(N).round())},this.getScissorTest=function(){return R},this.setScissorTest=function(e){G.setScissorTest(R=e)},this.setOpaqueSort=function(e){P=e},this.setTransparentSort=function(e){F=e},this.getClearColor=function(e){return e.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=C.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=ye.getClearColor(),r=ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,U.clearBufferuiv(U.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,U.clearBufferiv(U.COLOR,0,m))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Oe,!1),t.removeEventListener(`webglcontextrestored`,ke,!1),t.removeEventListener(`webglcontextcreationerror`,Ae,!1),ye.dispose(),he.dispose(),ge.dispose(),K.dispose(),ce.dispose(),le.dispose(),fe.dispose(),we.dispose(),Te.dispose(),pe.dispose(),De.dispose(),De.removeEventListener(`sessionstart`,Le),De.removeEventListener(`sessionend`,Re),ze.stop()};function Oe(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),b=!0}function ke(){console.log(`THREE.WebGLRenderer: Context Restored.`),b=!1;let e=se.autoReset,t=ve.enabled,n=ve.autoUpdate,r=ve.needsUpdate,i=ve.type;Ee(),se.autoReset=e,ve.enabled=t,ve.autoUpdate=n,ve.needsUpdate=r,ve.type=i}function Ae(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function je(e){let t=e.target;t.removeEventListener(`dispose`,je),Me(t)}function Me(e){Ne(e),K.remove(e)}function Ne(e){let t=K.get(e).programs;t!==void 0&&(t.forEach(function(e){pe.releaseProgram(e)}),e.isShaderMaterial&&pe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ne);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Je(e,t,n,r,i);G.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=de.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;we.setup(i,r,s,n,c);let h,g=xe;if(c!==null&&(h=ue.get(c),g=Se,g.setIndex(h)),i.isMesh)r.wireframe===!0?(G.setLineWidth(r.wireframeLinewidth*ie()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),G.setLineWidth(e*ie()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)im(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ue.get(c).bytesPerElement:1,o=K.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Pe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ge(e,t,n),e.side=0,e.needsUpdate=!0,Ge(e,t,n),e.side=2):Ge(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),g=ge.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Pe(a,n,e),r.add(a)}else Pe(t,n,e),r.add(t)}),g=v.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){K.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Fe=null;function Ie(e){Fe&&Fe(e)}function Le(){ze.stop()}function Re(){ze.start()}let ze=new Sv;ze.setAnimationLoop(Ie),typeof self<`u`&&ze.setContext(self),this.setAnimationLoop=function(e){Fe=e,De.setAnimationLoop(e),e===null?ze.stop():ze.start()},De.addEventListener(`sessionstart`,Le),De.addEventListener(`sessionend`,Re),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(b===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(t),t=De.getCamera()),e.isScene===!0&&e.onBeforeRender(y,e,t,C),g=ge.get(e,v.length),g.init(t),v.push(g),ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),z.setFromProjectionMatrix(ee,yp,t.reversedDepth),V=this.localClippingEnabled,B=_e.init(this.clippingPlanes,V),h=he.get(e,_.length),h.init(),_.push(h),De.enabled===!0&&De.isPresenting===!0){let e=y.xr.getDepthSensingMesh();e!==null&&Be(e,t,-1/0,y.sortObjects)}Be(e,t,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(P,F),re=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,re&&ye.addToRenderList(h,e),this.info.render.frame++,B===!0&&_e.beginShadows();let n=g.state.shadowsArray;ve.render(n,e,t),B===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];He(r,i,e,a)}re&&ye.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Ve(h,e,r,r.viewport)}}else i.length>0&&He(r,i,e,t),re&&ye.render(e),Ve(h,e,t);C!==null&&S===0&&(q.updateMultisampleRenderTarget(C),q.updateRenderTargetMipmap(C)),e.isScene===!0&&e.onAfterRender(y,e,t),we.resetDefaultState(),w=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],B===!0&&_e.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null};function Be(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||z.intersectsSprite(e)){r&&te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ee);let t=fe.update(e),i=e.material;i.visible&&h.push(e,t,i,n,te.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||z.intersectsObject(e))){let t=fe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),te.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),te.copy(e.boundingSphere.center)),te.applyMatrix4(e.matrixWorld).applyMatrix4(ee)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,te.z,o)}}else i.visible&&h.push(e,t,i,n,te.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Be(i[e],t,n,r)}function Ve(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),B===!0&&_e.setGlobalState(y.clippingPlanes,n),r&&G.viewport(E.copy(r)),i.length>0&&Ue(i,t,n),a.length>0&&Ue(a,t,n),o.length>0&&Ue(o,t,n),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function He(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new Sm(1,1,{generateMipmaps:!0,type:ae.has(`EXT_color_buffer_half_float`)||ae.has(`EXT_color_buffer_float`)?df:rf,minFilter:nf,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lm.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z*y.transmissionResolutionScale,o.w*y.transmissionResolutionScale);let s=y.getRenderTarget(),c=y.getActiveCubeFace(),l=y.getActiveMipmapLevel();y.setRenderTarget(a),y.getClearColor(k),A=y.getClearAlpha(),A<1&&y.setClearColor(16777215,.5),y.clear(),re&&ye.render(n);let u=y.toneMapping;y.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),B===!0&&_e.setGlobalState(y.clippingPlanes,r),Ue(e,n,r),q.updateMultisampleRenderTarget(a),q.updateRenderTargetMipmap(a),ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,We(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(q.updateMultisampleRenderTarget(a),q.updateRenderTargetMipmap(a))}y.setRenderTarget(s,c,l),y.setClearColor(k,A),d!==void 0&&(r.viewport=d),y.toneMapping=u}function Ue(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&We(o,t,n,s,l,c)}}function We(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function Ge(e,t,n){t.isScene!==!0&&(t=ne);let r=K.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=pe.getParameters(e,i.state,a,t,n),c=pe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?le:ce).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,je),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return qe(e,s),u}else s.uniforms=pe.getUniforms(e),e.onBeforeCompile(s,y),u=pe.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=_e.uniform),qe(e,s),r.needsLights=Xe(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function Ke(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=hb.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function qe(e,t){let n=K.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Je(e,t,n,r,i){t.isScene!==!0&&(t=ne),q.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mp,c=(r.isMeshStandardMaterial?le:ce).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(m=y.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=K.get(r),b=g.state.lights;if(B===!0&&(V===!0||e!==T)){let t=e===T&&r.id===w;_e.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version?x=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?x=!0:v.envMap===c?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==_e.numPlanes||v.numIntersection!==_e.numIntersection)?x=!0:v.vertexAlphas===l&&v.vertexTangents===u&&v.morphTargets===d&&v.morphNormals===f&&v.morphColors===p&&v.toneMapping===m?v.morphTargetsCount!==_&&(x=!0):x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;x===!0&&(S=Ge(r,t,i));let E=!1,D=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(G.useProgram(S.program)&&(E=!0,D=!0,O=!0),r.id!==w&&(w=r.id,D=!0),E||T!==e){G.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(U,`projectionMatrix`,e.projectionMatrix),k.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(U,H.setFromMatrixPosition(e.matrixWorld)),oe.logarithmicDepthBuffer&&k.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),T!==e&&(T=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(U,i,`bindMatrix`),k.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(U,`boneTexture`,e.boneTexture,q))}i.isBatchedMesh&&(k.setOptional(U,i,`batchingTexture`),k.setValue(U,`batchingTexture`,i._matricesTexture,q),k.setOptional(U,i,`batchingIdTexture`),k.setValue(U,`batchingIdTexture`,i._indirectTexture,q),k.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(U,`batchingColorTexture`,i._colorsTexture,q));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&be.update(i,n,S),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(U,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(U,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&Ye(A,O),a&&r.fog===!0&&me.refreshFogUniforms(A,a),me.refreshMaterialUniforms(A,r,N,M,g.state.transmissionRenderTarget[e.id]),hb.upload(U,Ke(v),A,q)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(hb.upload(U,Ke(v),A,q),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(U,`center`,i.center),k.setValue(U,`modelViewMatrix`,i.modelViewMatrix),k.setValue(U,`normalMatrix`,i.normalMatrix),k.setValue(U,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Te.update(n,S),Te.bind(n,S)}}return S}function Ye(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Xe(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){let r=K.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),K.get(e.texture).__webglTexture=t,K.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=K.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let Ze=U.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=K.get(e);if(s.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(U.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)q.setupRenderTarget(e);else if(s.__hasExternalTextures)q.rebindTextures(e,K.get(e.texture).__webglTexture,K.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&K.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);q.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=K.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&q.useMultisampledRTT(e)===!1?K.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),D.copy(e.scissor),O=e.scissorTest}else E.copy(I).multiplyScalar(N).floor(),D.copy(L).multiplyScalar(N).floor(),O=R;if(n!==0&&(i=Ze),G.bindFramebuffer(U.FRAMEBUFFER,i)&&r&&G.drawBuffers(e,i),G.viewport(E),G.scissor(D),G.setScissorTest(O),a){let r=K.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=K.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=K.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=K.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){G.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!oe.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!oe.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s),U.readPixels(t,n,r,i,Ce.convert(c),Ce.convert(l),a))}finally{let e=C===null?null:K.get(C).__webglFramebuffer;G.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=K.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){G.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!oe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!oe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,d),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s),U.readPixels(t,n,r,i,Ce.convert(l),Ce.convert(u),0);let f=C===null?null:K.get(C).__webglFramebuffer;G.bindFramebuffer(U.FRAMEBUFFER,f);let p=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await am(U,p,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,d),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.deleteBuffer(d),U.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;q.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),G.unbindTexture()};let Qe=U.createFramebuffer(),$e=U.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(im(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ce.convert(t.format),_=Ce.convert(t.type),v;t.isData3DTexture?(q.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(q.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(q.setTexture2D(t,0),v=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=U.getParameter(U.UNPACK_ROW_LENGTH),b=U.getParameter(U.UNPACK_IMAGE_HEIGHT),x=U.getParameter(U.UNPACK_SKIP_PIXELS),S=U.getParameter(U.UNPACK_SKIP_ROWS),C=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,l),U.pixelStorei(U.UNPACK_SKIP_ROWS,u),U.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=K.get(e),r=K.get(t),h=K.get(n.__renderTarget),g=K.get(r.__renderTarget);G.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,K.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,o,s,f,p,o,s,U.DEPTH_BUFFER_BIT,U.NEAREST);G.bindFramebuffer(U.READ_FRAMEBUFFER,null),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||K.has(e)){let n=K.get(e),r=K.get(t);G.bindFramebuffer(U.READ_FRAMEBUFFER,Qe),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,$e);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,o,s,f,p,o,s,U.COLOR_BUFFER_BIT,U.NEAREST);G.bindFramebuffer(U.READ_FRAMEBUFFER,null),G.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);U.pixelStorei(U.UNPACK_ROW_LENGTH,y),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),U.pixelStorei(U.UNPACK_SKIP_PIXELS,x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&U.generateMipmap(v),G.unbindTexture()},this.initRenderTarget=function(e){K.get(e).__webglFramebuffer===void 0&&q.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?q.setTextureCube(e,0):e.isData3DTexture?q.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?q.setTexture2DArray(e,0):q.setTexture2D(e,0),G.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,G.reset(),we.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return yp}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lm._getDrawingBufferColorSpace(e),t.unpackColorSpace=lm._getUnpackColorSpace()}},Tx=/^[og]\s*(.+)?/,Ex=/^mtllib /,Dx=/^usemtl /,Ox=/^usemap /,kx=/\s+/,Ax=new Q,jx=new Q,Mx=new Q,Nx=new Q,Px=new Q,Fx=new Wh;function Ix(){let e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial==`function`?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0),this.object={name:e||``,fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){let n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);let r={index:this.materials.length,name:e||``,mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:``,smooth:n===void 0?this.smooth:n.smooth,groupStart:n===void 0?0:n.groupEnd,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){let t={index:typeof e==`number`?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){let t=this.currentMaterial();if(t&&t.groupEnd===-1&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let e=this.materials.length-1;e>=0;e--)this.materials[e].groupCount<=0&&this.materials.splice(e,1);return e&&this.materials.length===0&&this.materials.push({name:``,smooth:this.smooth}),t}},n&&n.name&&typeof n.clone==`function`){let e=n.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let r=this.vertices,i=this.object.geometry.vertices;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let r=this.normals,i=this.object.geometry.normals;i.push(r[e+0],r[e+1],r[e+2]),i.push(r[t+0],r[t+1],r[t+2]),i.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){let r=this.vertices,i=this.object.geometry.normals;Ax.fromArray(r,e),jx.fromArray(r,t),Mx.fromArray(r,n),Px.subVectors(Mx,jx),Nx.subVectors(Ax,jx),Px.cross(Nx),Px.normalize(),i.push(Px.x,Px.y,Px.z),i.push(Px.x,Px.y,Px.z),i.push(Px.x,Px.y,Px.z)},addColor:function(e,t,n){let r=this.colors,i=this.object.geometry.colors;r[e]!==void 0&&i.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&i.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&i.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){let r=this.uvs,i=this.object.geometry.uvs;i.push(r[e+0],r[e+1]),i.push(r[t+0],r[t+1]),i.push(r[n+0],r[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,i,a,o,s,c){let l=this.vertices.length,u=this.parseVertexIndex(e,l),d=this.parseVertexIndex(t,l),f=this.parseVertexIndex(n,l);if(this.addVertex(u,d,f),this.addColor(u,d,f),o!==void 0&&o!==``){let e=this.normals.length;u=this.parseNormalIndex(o,e),d=this.parseNormalIndex(s,e),f=this.parseNormalIndex(c,e),this.addNormal(u,d,f)}else this.addFaceNormal(u,d,f);if(r!==void 0&&r!==``){let e=this.uvs.length;u=this.parseUVIndex(r,e),d=this.parseUVIndex(i,e),f=this.parseUVIndex(a,e),this.addUV(u,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type=`Points`;let t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type=`Line`;let n=this.vertices.length,r=this.uvs.length;for(let t=0,r=e.length;t<r;t++)this.addVertexLine(this.parseVertexIndex(e[t],n));for(let e=0,n=t.length;e<n;e++)this.addUVLine(this.parseUVIndex(t[e],r))}};return e.startObject(``,!1),e}var Lx=class extends G_{constructor(e){super(e),this.materials=null}load(e,t,n,r){let i=this,a=new J_(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new Ix;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,``));let n=e.split(`
`),r=[];for(let e=0,i=n.length;e<i;e++){let i=n[e].trimStart();if(i.length===0)continue;let a=i.charAt(0);if(a!==`#`)if(a===`v`){let e=i.split(kx);switch(e[0]){case`v`:t.vertices.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),e.length>=7?(Fx.setRGB(parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6]),pp),t.colors.push(Fx.r,Fx.g,Fx.b)):t.colors.push(void 0,void 0,void 0);break;case`vn`:t.normals.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]));break;case`vt`:t.uvs.push(parseFloat(e[1]),parseFloat(e[2]));break}}else if(a===`f`){let e=i.slice(1).trim().split(kx),n=[];for(let t=0,r=e.length;t<r;t++){let r=e[t];if(r.length>0){let e=r.split(`/`);n.push(e)}}let r=n[0];for(let e=1,i=n.length-1;e<i;e++){let i=n[e],a=n[e+1];t.addFace(r[0],i[0],a[0],r[1],i[1],a[1],r[2],i[2],a[2])}}else if(a===`l`){let e=i.substring(1).trim().split(` `),n=[],r=[];if(i.indexOf(`/`)===-1)n=e;else for(let t=0,i=e.length;t<i;t++){let i=e[t].split(`/`);i[0]!==``&&n.push(i[0]),i[1]!==``&&r.push(i[1])}t.addLineGeometry(n,r)}else if(a===`p`){let e=i.slice(1).trim().split(` `);t.addPointGeometry(e)}else if((r=Tx.exec(i))!==null){let e=(` `+r[0].slice(1).trim()).slice(1);t.startObject(e)}else if(Dx.test(i))t.object.startMaterial(i.substring(7).trim(),t.materialLibraries);else if(Ex.test(i))t.materialLibraries.push(i.substring(7).trim());else if(Ox.test(i))console.warn(`THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.`);else if(a===`s`){if(r=i.split(` `),r.length>1){let e=r[1].trim().toLowerCase();t.object.smooth=e!==`0`&&e!==`off`}else t.object.smooth=!0;let e=t.object.currentMaterial();e&&(e.smooth=t.object.smooth)}else{if(i===`\0`)continue;console.warn(`THREE.OBJLoader: Unexpected line: "`+i+`"`)}}t.finalize();let i=new Ug;if(i.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let e=0,n=t.objects.length;e<n;e++){let n=t.objects[e],r=n.geometry,a=n.materials,o=r.type===`Line`,s=r.type===`Points`,c=!1;if(r.vertices.length===0)continue;let l=new lg;l.setAttribute(`position`,new tg(r.vertices,3)),r.normals.length>0&&l.setAttribute(`normal`,new tg(r.normals,3)),r.colors.length>0&&(c=!0,l.setAttribute(`color`,new tg(r.colors,3))),r.hasUVIndices===!0&&l.setAttribute(`uv`,new tg(r.uvs,2));let u=[];for(let e=0,n=a.length;e<n;e++){let n=a[e],r=n.name+`_`+n.smooth+`_`+c,i=t.materials[r];if(this.materials!==null){if(i=this.materials.create(n.name),o&&i&&!(i instanceof t_)){let e=new t_;qh.prototype.copy.call(e,i),e.color.copy(i.color),i=e}else if(s&&i&&!(i instanceof m_)){let e=new m_({size:10,sizeAttenuation:!1});qh.prototype.copy.call(e,i),e.color.copy(i.color),e.map=i.map,i=e}}i===void 0&&(i=o?new t_:s?new m_({size:1,sizeAttenuation:!1}):new E_,i.name=n.name,i.flatShading=!n.smooth,i.vertexColors=c,t.materials[r]=i),u.push(i)}let d;if(u.length>1){for(let e=0,t=a.length;e<t;e++){let t=a[e];l.addGroup(t.groupStart,t.groupCount,e)}d=o?new p_(l,u):s?new y_(l,u):new xg(l,u)}else d=o?new p_(l,u[0]):s?new y_(l,u[0]):new xg(l,u[0]);d.name=n.name,i.add(d)}else if(t.vertices.length>0){let e=new m_({size:1,sizeAttenuation:!1}),n=new lg;n.setAttribute(`position`,new tg(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(n.setAttribute(`color`,new tg(t.colors,3)),e.vertexColors=!0);let r=new y_(n,e);i.add(r)}return i}},Rx={type:`change`},zx={type:`start`},Bx={type:`end`},Vx=new Zm,Hx=new Xg,Ux=Math.cos(70*qp.DEG2RAD),Wx=new Q,Gx=2*Math.PI,Kx={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qx=1e-6,Jx=class extends yv{constructor(e,t=null){super(e,t),this.state=Kx.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Kd.ROTATE,MIDDLE:Kd.DOLLY,RIGHT:Kd.PAN},this.touches={ONE:qd.ROTATE,TWO:qd.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Yp,this._lastTargetPosition=new Q,this._quat=new Yp().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vv,this._sphericalDelta=new vv,this._scale=1,this._panOffset=new Q,this._rotateStart=new Jp,this._rotateEnd=new Jp,this._rotateDelta=new Jp,this._panStart=new Jp,this._panEnd=new Jp,this._panDelta=new Jp,this._dollyStart=new Jp,this._dollyEnd=new Jp,this._dollyDelta=new Jp,this._dollyDirection=new Q,this._mouse=new Jp,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Xx.bind(this),this._onPointerDown=Yx.bind(this),this._onPointerUp=Zx.bind(this),this._onContextMenu=iS.bind(this),this._onMouseWheel=eS.bind(this),this._onKeyDown=tS.bind(this),this._onTouchStart=nS.bind(this),this._onTouchMove=rS.bind(this),this._onMouseDown=Qx.bind(this),this._onMouseMove=$x.bind(this),this._interceptControlDown=aS.bind(this),this._interceptControlUp=oS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rx),this.update(),this.state=Kx.NONE}update(e=null){let t=this.object.position;Wx.copy(t).sub(this.target),Wx.applyQuaternion(this._quat),this._spherical.setFromVector3(Wx),this.autoRotate&&this.state===Kx.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Gx:n>Math.PI&&(n-=Gx),r<-Math.PI?r+=Gx:r>Math.PI&&(r-=Gx),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Wx.setFromSpherical(this._spherical),Wx.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wx),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Wx.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new Q(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new Q(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Wx.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Vx.origin.copy(this.object.position),Vx.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vx.direction))<Ux?this.object.lookAt(this.target):(Hx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vx.intersectPlane(Hx,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>qx||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qx||this._lastTargetPosition.distanceToSquared(this.target)>qx?(this.dispatchEvent(Rx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Gx/60/60*this.autoRotateSpeed:Gx/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wx.setFromMatrixColumn(t,0),Wx.multiplyScalar(-e),this._panOffset.add(Wx)}_panUp(e,t){this.screenSpacePanning===!0?Wx.setFromMatrixColumn(t,1):(Wx.setFromMatrixColumn(t,0),Wx.crossVectors(this.object.up,Wx)),Wx.multiplyScalar(e),this._panOffset.add(Wx)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Wx.copy(r).sub(this.target);let i=Wx.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gx*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gx*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gx*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gx*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gx*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Jp,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Yx(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.domElement.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e)))}function Xx(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Zx(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Bx),this.state=Kx.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Qx(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Kd.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Kx.DOLLY;break;case Kd.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Kx.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Kx.ROTATE}break;case Kd.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Kx.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Kx.PAN}break;default:this.state=Kx.NONE}this.state!==Kx.NONE&&this.dispatchEvent(zx)}function $x(e){switch(this.state){case Kx.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Kx.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Kx.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function eS(e){this.enabled===!1||this.enableZoom===!1||this.state!==Kx.NONE||(e.preventDefault(),this.dispatchEvent(zx),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Bx))}function tS(e){this.enabled!==!1&&this._handleKeyDown(e)}function nS(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case qd.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Kx.TOUCH_ROTATE;break;case qd.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Kx.TOUCH_PAN;break;default:this.state=Kx.NONE}break;case 2:switch(this.touches.TWO){case qd.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Kx.TOUCH_DOLLY_PAN;break;case qd.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Kx.TOUCH_DOLLY_ROTATE;break;default:this.state=Kx.NONE}break;default:this.state=Kx.NONE}this.state!==Kx.NONE&&this.dispatchEvent(zx)}function rS(e){switch(this._trackPointer(e),this.state){case Kx.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Kx.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Kx.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Kx.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Kx.NONE}}function iS(e){this.enabled!==!1&&e.preventDefault()}function aS(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function oS(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var sS={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},cS=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},lS=new tv(-1,1,1,-1,0,1),uS=new class extends lg{constructor(){super(),this.setAttribute(`position`,new tg([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new tg([0,2,0,0,2,0],2))}},dS=class{constructor(e){this._mesh=new xg(uS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},fS=class extends cS{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mg?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kg.clone(e.uniforms),this.material=new Mg({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new dS(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},pS=class extends cS{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},mS=class extends cS{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},hS=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Jp);this._width=n.width,this._height=n.height,t=new Sm(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:df}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fS(sS),this.copyPass.material.blending=0,this.clock=new av}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}pS!==void 0&&(r instanceof pS?n=!0:r instanceof mS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Jp);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},gS=class extends cS{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Wh}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},_S={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wh(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},vS=class e extends cS{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new Jp(256,256):new Jp(e.x,e.y),this.clearColor=new Wh(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Sm(i,a,{type:df}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Sm(i,a,{type:df});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Sm(i,a,{type:df});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=_S;this.highPassUniforms=kg.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mg({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new Jp(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=kg.clone(sS.uniforms),this.blendMaterial=new Mg({uniforms:this.copyUniforms,vertexShader:sS.vertexShader,fragmentShader:sS.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Wh,this._oldClearAlpha=1,this._basic=new Jh,this._fsQuad=new dS(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new Jp(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Mg({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Jp(.5,.5)},direction:{value:new Jp(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Mg({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};vS.BlurDirectionX=new Jp(1,0),vS.BlurDirectionY=new Jp(0,1);var yS={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},bS=class extends cS{constructor(){super(),this.uniforms=kg.clone(yS.uniforms),this.material=new w_({name:yS.name,uniforms:this.uniforms,vertexShader:yS.vertexShader,fragmentShader:yS.fragmentShader}),this._fsQuad=new dS(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lm.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};async function xS(e,t){let n=new wx({antialias:!0,alpha:!0});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.setClearColor(0,0),n.toneMapping=4,n.toneMappingExposure=1,e.appendChild(n.domElement),n.domElement.tabIndex=0,n.domElement.setAttribute(`aria-label`,`Mouse brain: drag or use arrow keys to rotate, scroll or use plus and minus to zoom`);let r=new Kg,i=new Lg(34,1,.1,150),a=new Jx(i,n.domElement);a.enableDamping=!0,a.dampingFactor=.07,a.minDistance=10,a.maxDistance=65,a.autoRotateSpeed=.7,a.target.set(0,0,-.4),r.add(new X_(15331071,4470610,2));let o=new rv(16777215,3);o.position.set(5,12,-10),r.add(o);let s=new rv(13944575,1.2);s.position.set(-8,3,4),r.add(s);let c=new hS(n);c.addPass(new gS(r,i));let l=new vS(new Jp(1,1),.6,.45,1);c.addPass(l),c.addPass(new bS);let u=new Lx,d=[],f=0,p=[],m=new T_({color:16777215,vertexColors:!0,roughness:.38,metalness:.1,emissive:16777215,emissiveIntensity:1.5});m.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
#ifdef USE_COLOR
 totalEmissiveRadiance *= vColor;
#endif`)};let h=new T_({color:4801874,roughness:.38,metalness:.08,transparent:!0,opacity:.35,depthWrite:!1,side:2}),g=new ResizeObserver(()=>_());function _(){let t=e.clientWidth,r=e.clientHeight;!t||!r||(n.setSize(t,r),c.setSize(t,r),i.aspect=t/r,i.updateProjectionMatrix())}g.observe(e);let v=!1,y=0,b=()=>{v=!0,y++,cancelAnimationFrame(f),g.disconnect(),a.dispose(),p.forEach(e=>e.dispose()),m.dispose(),h.dispose(),l.dispose(),c.dispose(),n.dispose(),n.domElement.remove()},x=new Map,S=[],C;function w(e,t=!1){e.traverse(e=>{e instanceof xg&&(e.geometry.applyMatrix4(C),e.geometry.computeVertexNormals(),p.push(e.geometry),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()),e.material=t?h:m,e.renderOrder=t?2:0)})}function T(e){let t=new Set(S.filter(t=>e.includes(t.key)).flatMap(e=>e.ids));x.forEach((e,n)=>{e.visible=t.has(n)})}async function E(e){let t=++y,n=[...new Set(e.flatMap(e=>e.ids))],i=new Map;try{for(let e of n){if(x.has(e))continue;let n=await u.loadAsync(`models/`+e+`.obj`);if(v||y!==t){n.traverse(e=>{e instanceof xg&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))});return}w(n),i.set(e,n)}}catch(e){throw i.forEach(e=>e.traverse(e=>{e instanceof xg&&e.geometry.dispose()})),e}if(!(v||t!==y)){i.forEach((e,t)=>{x.set(t,e),r.add(e)}),S=e;for(let t of e){let e=new Tm;t.ids.forEach(t=>e.expandByObject(x.get(t))),t.ids.forEach(t=>x.get(t).traverse(t=>{if(!(t instanceof xg))return;let n=t.geometry.attributes.position,r=[];for(let t=0;t<n.count;t++){let i=qp.clamp((n.getY(t)-e.min.y)/Math.max(e.max.y-e.min.y,1e-4),0,1),a=new Wh().setRGB(.65,.055,.26).lerp(new Wh().setRGB(.16,.11,.65),i);r.push(a.r,a.g,a.b)}t.geometry.setAttribute(`color`,new tg(r,3))}))}T(e.map(e=>e.key))}}try{let e=await u.loadAsync(`models/997.obj`);d=[e];let t=new Tm().setFromObject(e).getCenter(new Q);C=new Qm().set(0,0,.001,-t.z*.001,0,-.001,0,t.y*.001,.001,0,0,-t.x*.001,0,0,0,1),w(e,!0),r.add(e)}catch(e){throw b(),e}let D=45,O=35;function k(e,t){D=e,O=t;let n=qp.degToRad(e),r=qp.degToRad(t);a.target.set(0,0,-.4),i.position.set(30*Math.sin(n)*Math.cos(r),30*Math.sin(r),-30*Math.cos(n)*Math.cos(r)),a.update()}function A(e){let t=i.position.clone().sub(a.target);t.setLength(qp.clamp(t.length()*e,10,65)),i.position.copy(a.target).add(t),a.update()}n.domElement.addEventListener(`keydown`,e=>{e.key===`+`||e.key===`=`?A(.9):e.key===`-`?A(1.1):e.key.startsWith(`Arrow`)&&(e.preventDefault(),e.key===`ArrowLeft`&&(D-=10),e.key===`ArrowRight`&&(D+=10),e.key===`ArrowUp`&&(O=Math.min(85,O+10)),e.key===`ArrowDown`&&(O=Math.max(-85,O-10)),k(D,O))}),k(45,35),_();let j=performance.now();function M(e){let t=Math.min((e-j)/1e3,.1);j=e,a.update(t),c.render(),f=requestAnimationFrame(M)}return f=requestAnimationFrame(M),{update(e){let t=1-e.transparency/100;h.opacity=t,h.depthWrite=t>=.999,d[0].visible=e.brain&&t>0;let n=new Wh().setRGB(.72,.74,.78).lerp(new Wh().setRGB(.028,.022,.042),e.darkness/100);h.color.copy(n),m.emissiveIntensity=24*(e.glow/100)**2,l.strength=e.glow===0?0:.25+e.glow/100,l.radius=.5,a.autoRotate=e.rotate},setRegions:E,showRegions:T,angle:k,zoom:A,reset(){a.autoRotate=!1,k(45,35)},dispose:b}}var SS={transparency:65,darkness:75,glow:35,brain:!0,rotate:!1};function CS(){let e=(0,a.useRef)(null),t=(0,a.useRef)(null),[n,r]=(0,a.useState)(SS),[i,o]=(0,a.useState)(`Loading brain models…`),[s,c]=(0,a.useState)(!1),[l,u]=(0,a.useState)(`Front right`),[d,f]=(0,a.useState)(`mPFC, CeA, ACC, Hippocampus`),[p,m]=(0,a.useState)(Fd.filter(e=>Id.includes(e.key))),[h,g]=(0,a.useState)(!1),[_,y]=(0,a.useState)(``);async function b(){let e=Rd(d);if(e.unknown.length){y(`Unknown local region: `+e.unknown.join(`, `));return}if(t.current){g(!0),y(``);try{await t.current.setRegions(e.regions),m(e.regions);let n=Vd(e.regions);y(n.length?`Overlapping selections: `+n.join(`, `):e.regions.length?``:`No regions selected.`)}catch{y(`Unable to load a local model. The previous scene is unchanged.`)}finally{g(!1)}}}let x=(0,a.useRef)(n);x.current=n,(0,a.useEffect)(()=>{let n=!1,r;return xS(e.current,o).then(async e=>{if(n){e.dispose();return}r=e,t.current=e,e.update(x.current),await e.setRegions(Fd.filter(e=>Id.includes(e.key))),!n&&(c(!0),o(`Models ready`))}).catch(e=>o(`Unable to load models: `+e.message)),()=>{n=!0,r?.dispose(),t.current=null}},[]),(0,a.useEffect)(()=>{t.current?.update(n)},[n]),(0,a.useEffect)(()=>Wd(()=>x.current,e=>r(e)),[]);let S=(e,t)=>r(n=>({...n,[e]:t})),C=(e,n,i)=>{t.current?.angle(n,i),u(e),r(e=>({...e,rotate:!1}))};return(0,v.jsxs)(`main`,{className:`app`,children:[(0,v.jsxs)(`header`,{children:[(0,v.jsxs)(`div`,{className:`brand`,children:[(0,v.jsx)(`span`,{className:`brand-mark`,children:`◈`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h1`,{children:`Brain Atlas`}),(0,v.jsx)(`span`,{children:`MOUSE BRAIN · REGION EXPLORER`})]})]}),(0,v.jsxs)(`div`,{className:`live`,children:[(0,v.jsx)(`i`,{}),`LIVE 3D`]})]}),(0,v.jsxs)(`div`,{className:`workspace`,children:[(0,v.jsxs)(`section`,{className:`stage`,"aria-label":`Interactive mouse brain`,children:[(0,v.jsx)(`div`,{ref:e,className:`canvas-host`}),(0,v.jsxs)(`div`,{className:`stage-heading`,children:[(0,v.jsx)(`span`,{className:`eyebrow`,children:`ALLEN CCF 2017`}),(0,v.jsx)(`h2`,{children:p.length?p.map(e=>e.label).join(` · `):`Whole brain`}),(0,v.jsx)(`p`,{children:`Drag to rotate · Scroll to zoom · Right-drag to pan`})]}),!s&&(0,v.jsxs)(`div`,{className:`loading`,role:`status`,children:[i,i.includes(`Unable`)&&(0,v.jsx)(`button`,{onClick:()=>location.reload(),children:`Retry`})]}),(0,v.jsxs)(`div`,{className:`view-label`,children:[(0,v.jsx)(`span`,{className:`dot`}),l,(0,v.jsx)(`small`,{children:`Bilateral · Atlas coordinates`})]}),(0,v.jsxs)(`div`,{className:`camera-tools`,children:[(0,v.jsx)(`button`,{"aria-label":`Zoom in`,disabled:!s,onClick:()=>t.current?.zoom(.8),children:`＋`}),(0,v.jsx)(`button`,{"aria-label":`Zoom out`,disabled:!s,onClick:()=>t.current?.zoom(1.25),children:`−`}),(0,v.jsx)(`button`,{disabled:!s,onClick:()=>{t.current?.reset(),u(`Front right`),r(e=>({...e,rotate:!1}))},children:`Reset view`})]}),(0,v.jsx)(`div`,{className:`stage-foot`,children:p.map(e=>(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{className:`region-dot`}),e.label]},e.key))})]}),(0,v.jsxs)(`aside`,{children:[(0,v.jsxs)(`div`,{className:`panel-title`,children:[(0,v.jsx)(`h2`,{children:`Scene controls`}),(0,v.jsx)(`button`,{onClick:()=>{r(SS),t.current?.reset(),u(`Front right`),r(e=>({...e,rotate:!1}))},children:`Reset all`})]}),(0,v.jsx)(Hd,{text:d,setText:f,load:b,busy:h,disabled:!s}),_&&(0,v.jsx)(`p`,{className:`region-message`,role:`status`,children:_}),(0,v.jsxs)(`section`,{className:`control-section`,children:[(0,v.jsxs)(`div`,{className:`section-title`,children:[(0,v.jsx)(`span`,{children:`01`}),(0,v.jsx)(`h3`,{children:`Whole brain`}),(0,v.jsx)(Gd,{"aria-label":`Show whole brain`,checked:n.brain,onCheckedChange:e=>S(`brain`,e)})]}),(0,v.jsx)(wS,{label:`Transparency`,value:n.transparency,onChange:e=>S(`transparency`,e),left:`Opaque`,right:`Transparent`}),(0,v.jsx)(wS,{label:`Shell darkness`,value:n.darkness,onChange:e=>S(`darkness`,e),left:`Light`,right:`Dark`}),(0,v.jsx)(`div`,{className:`presets`,children:[[`Clear`,80,35],[`Smoky`,65,65],[`Dark glass`,45,90]].map(([e,t,n])=>(0,v.jsx)(`button`,{onClick:()=>r(e=>({...e,transparency:Number(t),darkness:Number(n),brain:!0})),children:e},e))})]}),(0,v.jsxs)(`section`,{className:`control-section`,children:[(0,v.jsxs)(`div`,{className:`section-title`,children:[(0,v.jsx)(`span`,{children:`02`}),(0,v.jsx)(`h3`,{children:`Region glow`}),(0,v.jsx)(`span`,{className:`badge`,children:`Linked`})]}),(0,v.jsx)(`p`,{className:`helper`,children:`Applies to all loaded regions.`}),(0,v.jsx)(wS,{label:`Shared glow intensity`,value:n.glow,onChange:e=>S(`glow`,e),left:`Off`,right:`Intense`})]}),(0,v.jsxs)(`section`,{className:`control-section`,children:[(0,v.jsxs)(`div`,{className:`section-title`,children:[(0,v.jsx)(`span`,{children:`03`}),(0,v.jsx)(`h3`,{children:`Viewpoints`})]}),(0,v.jsx)(`div`,{className:`angles`,children:[[`Front right`,45,35],[`Front left`,-45,35],[`Right side`,90,15],[`Left side`,-90,15],[`Dorsal oblique`,35,65],[`Anterior`,0,5]].map(([e,t,n])=>(0,v.jsx)(`button`,{className:l===e?`selected`:``,onClick:()=>C(String(e),Number(t),Number(n)),children:e},e))}),(0,v.jsxs)(`div`,{className:`rotate-row`,children:[(0,v.jsx)(`label`,{htmlFor:`rotate`,children:`Auto-rotate`}),(0,v.jsx)(Gd,{id:`rotate`,checked:n.rotate,onCheckedChange:e=>S(`rotate`,e)})]})]}),(0,v.jsx)(`footer`,{children:(0,v.jsx)(`a`,{href:`https://portal.brain-map.org/`,target:`_blank`,rel:`noreferrer`,children:`Source: Allen Institute ↗`})})]})]})]})}function wS({label:e,value:t,onChange:n,left:r,right:i}){return(0,v.jsxs)(`div`,{className:`range`,children:[(0,v.jsxs)(`div`,{className:`range-label`,children:[(0,v.jsx)(`label`,{children:e}),(0,v.jsxs)(`output`,{children:[t,(0,v.jsx)(`small`,{children:` / 100`})]})]}),(0,v.jsx)(Ud,{"aria-label":e,value:[t],min:0,max:100,step:1,onValueChange:e=>n(Array.isArray(e)?e[0]:e)}),(0,v.jsxs)(`div`,{className:`range-hints`,children:[(0,v.jsx)(`span`,{children:r}),(0,v.jsx)(`span`,{children:i})]})]})}export{CS as default};