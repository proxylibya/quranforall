(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8772],{21572:function(e,n,t){"use strict";var r,o=t(67597);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}n.Z=function(e){return o.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7Z",fill:"currentColor"})))}},25064:function(e,n,t){"use strict";var r,o=t(67597);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}n.Z=function(e){return o.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=o.createElement("path",{d:"M11.625 0C5.208 0 0 5.208 0 11.625S5.208 23.25 11.625 23.25 23.25 18.042 23.25 11.625 18.042 0 11.625 0Zm1.162 17.438h-2.325v-6.975h2.325v6.975Zm0-9.3h-2.325V5.812h2.325v2.324Z",fill:"currentColor"})))}},68458:function(e,n,t){"use strict";t.d(n,{Eh:function(){return k},VY:function(){return A},fC:function(){return N},xz:function(){return T}});var r=t(78440),o=t(15665),a=t(32848),i=t(44756),s=t(92763),c=t(35336),u=t(84523),l=t(97548),d=t(4092),f=t(25772),m=t(73598),v=t(367),h=t(18209),p=t(48081),_=t(67597),g=t(57384);const[R,y]=(0,v.b)("Popover",[f.D7]),x=(0,f.D7)(),[C,E]=R("Popover"),w=_.forwardRef(((e,n)=>{const{__scopePopover:t,...r}=e,o=E("PopoverTrigger",t),a=x(t),s=(0,h.e)(n,o.triggerRef),c=_.createElement(i.W.button,(0,g.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":S(o.open)},r,{ref:s,onClick:(0,p.M)(e.onClick,o.onOpenToggle)}));return o.hasCustomAnchor?c:_.createElement(f.ee,(0,g.Z)({asChild:!0},a),c)})),b=_.forwardRef(((e,n)=>{const{forceMount:t,...r}=e,o=E("PopoverContent",e.__scopePopover);return _.createElement(s.z,{present:t||o.open},o.modal?_.createElement(O,(0,g.Z)({},r,{ref:n})):_.createElement(P,(0,g.Z)({},r,{ref:n})))})),O=_.forwardRef(((e,n)=>{const{allowPinchZoom:t,portalled:a=!0,...i}=e,s=E("PopoverContent",e.__scopePopover),c=_.useRef(null),l=(0,h.e)(n,c),d=_.useRef(!1);_.useEffect((()=>{const e=c.current;if(e)return(0,r.R)(e)}),[]);const f=a?u.h_:_.Fragment;return _.createElement(f,null,_.createElement(o.Z,{allowPinchZoom:t},_.createElement(j,(0,g.Z)({},i,{ref:l,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,p.M)(e.onCloseAutoFocus,(e=>{var n;e.preventDefault(),d.current||null===(n=s.triggerRef.current)||void 0===n||n.focus()})),onPointerDownOutside:(0,p.M)(e.onPointerDownOutside,(e=>{const n=e.detail.originalEvent,t=0===n.button&&!0===n.ctrlKey,r=2===n.button||t;d.current=r}),{checkForDefaultPrevented:!1}),onFocusOutside:(0,p.M)(e.onFocusOutside,(e=>e.preventDefault()),{checkForDefaultPrevented:!1})}))))})),P=_.forwardRef(((e,n)=>{const{portalled:t=!0,...r}=e,o=E("PopoverContent",e.__scopePopover),a=_.useRef(!1),i=t?u.h_:_.Fragment;return _.createElement(i,null,_.createElement(j,(0,g.Z)({},r,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var t,r;null===(t=e.onCloseAutoFocus)||void 0===t||t.call(e,n),n.defaultPrevented||(a.current||null===(r=o.triggerRef.current)||void 0===r||r.focus(),n.preventDefault()),a.current=!1},onInteractOutside:n=>{var t,r;null===(t=e.onInteractOutside)||void 0===t||t.call(e,n),n.defaultPrevented||(a.current=!0);const i=n.target;(null===(r=o.triggerRef.current)||void 0===r?void 0:r.contains(i))&&n.preventDefault()}})))})),j=_.forwardRef(((e,n)=>{const{__scopePopover:t,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,disableOutsidePointerEvents:i,onEscapeKeyDown:s,onPointerDownOutside:u,onFocusOutside:m,onInteractOutside:v,...h}=e,p=E("PopoverContent",t),R=x(t);return(0,c.EW)(),_.createElement(l.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a},_.createElement(d.XB,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:v,onEscapeKeyDown:s,onPointerDownOutside:u,onFocusOutside:m,onDismiss:()=>p.onOpenChange(!1)},_.createElement(f.VY,(0,g.Z)({"data-state":S(p.open),role:"dialog",id:p.contentId},R,h,{ref:n,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)"}}))))}));function S(e){return e?"open":"closed"}const N=e=>{const{__scopePopover:n,children:t,open:r,defaultOpen:o,onOpenChange:i,modal:s=!1}=e,c=x(n),u=_.useRef(null),[l,d]=_.useState(!1),[v=!1,h]=(0,m.T)({prop:r,defaultProp:o,onChange:i});return _.createElement(f.fC,c,_.createElement(C,{scope:n,contentId:(0,a.M)(),triggerRef:u,open:v,onOpenChange:h,onOpenToggle:_.useCallback((()=>h((e=>!e))),[h]),hasCustomAnchor:l,onCustomAnchorAdd:_.useCallback((()=>d(!0)),[]),onCustomAnchorRemove:_.useCallback((()=>d(!1)),[]),modal:s},t))},T=w,A=b,k=_.forwardRef(((e,n)=>{const{__scopePopover:t,...r}=e,o=x(t);return _.createElement(f.Eh,(0,g.Z)({},o,r,{ref:n}))}))},49127:function(e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}e.exports=async function(e){try{await async function(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}(e)}catch(t){try{await async function(e){const t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);const r=window.getSelection(),o=window.document.createRange();r.removeAllRanges(),o.selectNode(t),r.addRange(o);let a=!1;try{a=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(t)}if(!a)throw n()}(e)}catch(r){throw r||t||n()}}}},8810:function(e){e.exports=function(e,n,t,r){for(var o=-1,a=null==e?0:e.length;++o<a;){var i=e[o];n(r,i,t(i),e)}return r}},72342:function(e,n,t){var r=t(74726);e.exports=function(e,n,t,o){return r(e,(function(e,r,a){n(o,e,t(e),a)})),o}},44197:function(e,n,t){var r=t(96455);e.exports=function(e,n,t){"__proto__"==n&&r?r(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}},74726:function(e,n,t){var r=t(36962),o=t(12582)(r);e.exports=o},1833:function(e,n,t){var r=t(8810),o=t(72342),a=t(63244),i=t(87874);e.exports=function(e,n){return function(t,s){var c=i(t)?r:o,u=n?n():{};return c(t,e,a(s,2),u)}}},12582:function(e,n,t){var r=t(68714);e.exports=function(e,n){return function(t,o){if(null==t)return t;if(!r(t))return e(t,o);for(var a=t.length,i=n?a:-1,s=Object(t);(n?i--:++i<a)&&!1!==o(s[i],i,s););return t}}},96455:function(e,n,t){var r=t(93047),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(n){}}();e.exports=o},85378:function(e,n,t){var r=t(44197),o=t(1833),a=Object.prototype.hasOwnProperty,i=o((function(e,n,t){a.call(e,t)?e[t].push(n):r(e,t,[n])}));e.exports=i},4579:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var r=t(57611),o=t(67597),a=t(9134),i=t.n(a),s=t(61395),c=t(15129),u=t(47189),l=t(22902),d=t(43172),f=t(85754),m=function(e){var n=e.isClearable,t=e.onRemoveCommandClicked,o=e.commandKey;e.isSelected;return n?(0,r.jsx)(f.ZP,{variant:f.Wu.Ghost,size:f.qE.Small,onClick:function(e){return t(e,o)},children:(0,r.jsx)(d.Z,{})}):null},v=t(92375),h=t.n(v),p=t(21572),_=t(39828),g=t.n(_),R=t(77342),y=function(e){var n=e.name,t=e.type,o=(0,s.Z)("common").t;return(0,r.jsxs)("div",{className:g().container,children:[(0,r.jsx)("span",{className:g().commandPrefix,children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)("p",{className:g().name,children:t===R.H.SEARCH_PAGE?o("search-for",{searchQuery:n}):n})]})},x=t(91094),C=t(13675),E=t(9515);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=function(e){var n=e.commandGroups,t=n.groups,a=n.numberOfCommands,d=(0,s.Z)("common").t,f=b((0,x.ZP)(x.nv),2),v=f[0],p=f[1],_=(0,o.useState)(a?0:null),g=_[0],R=_[1],w=(0,o.useState)(null),O=w[0],P=w[1];(0,o.useEffect)((function(){p.current&&P(p.current.offsetTop)}),[g,p]),(0,o.useEffect)((function(){R(a?0:null)}),[a]);var j=(0,c.useRouter)(),S=(0,l.I0)(),N=(0,o.useCallback)((function(e){e.preventDefault(),R((function(e){return e-1})),v()}),[v]),T=(0,o.useCallback)((function(e){e.preventDefault(),R((function(e){return e+1})),v()}),[v]),A=(0,o.useCallback)((function(e){var n=e.name,t=e.resultType,r=e.key;j.push((0,E.zp)(t,r)).then((function(){S({type:C.EK.type,payload:{name:n,resultType:t,key:r}}),S({type:C.Pn.type,payload:!1})}))}),[S,j]);(0,u.y1)("up",N,{enabled:a&&0!==g,enableOnTags:["INPUT"]},[v]),(0,u.y1)("down",T,{enabled:a&&g!==a-1,enableOnTags:["INPUT"]},[v]),(0,u.y1)("enter",(function(){var e=null;Object.keys(t).forEach((function(n){var r=t[n].find((function(e){return e.index===g}));r&&(e=r)})),A(e)}),{enabled:null!==g,enableOnTags:["INPUT"]},[g,t,A]);var k=function(e,n){e.stopPropagation(),S({type:C.vr.type,payload:n})};return 0===a?(0,r.jsx)("p",{className:h().noResult,children:d("command-bar.no-nav-results")}):(0,r.jsxs)("ul",{role:"listbox",children:[(0,r.jsx)("div",{className:h().highlight,style:{transform:O?"translateY(".concat(O,"px)"):"translateY(100%)"}}),(0,r.jsx)("li",{role:"presentation",children:Object.keys(t).map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:h().groupHeader,id:e,children:e}),(0,r.jsx)("ul",{role:"group","aria-labelledby":e,children:t[e].map((function(e){var n,t,o,a=e.name,s=e.resultType,c=g===e.index;return(0,r.jsxs)("li",{ref:c?p:null,role:"option","aria-selected":c,className:i()(h().command,(n={},t=h().selected,o=c,t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n)),onClick:function(){return A(e)},onMouseOver:function(){return R(e.index)},children:[(0,r.jsx)(y,{name:a,type:s}),(0,r.jsx)("div",{className:h().keyboardInputContainer,children:(0,r.jsx)(m,{isClearable:e.isClearable,isSelected:c,commandKey:e.key,onRemoveCommandClicked:k})})]},e.index)}))})]},e)}))})]})}},97572:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(57611),o=(t(67597),t(61395)),a=t(42366),i=t(85723),s=t.n(i),c=t(75038),u=t.n(c),l=t(22367),d=t(60178),f=t(9515),m=function(e){var n=e.searchUrl,t=(0,o.Z)("common").t;return(0,r.jsx)("div",{className:u().linkContainer,children:(0,r.jsx)(l.Z,{href:n||(0,f._0)(),shouldPassHref:!0,onClick:function(){(0,d.MY)("search_drawer_advanced_search")},children:(0,r.jsx)("a",{className:u().link,children:(0,r.jsx)("p",{children:t("search.switch-mode")})})})})},v=function(e){var n=e.searchQuery,t=e.searchUrl,i=void 0===t?"":t,c=e.isSearchDrawer,u=(0,o.Z)("common").t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:s().container,children:(0,r.jsxs)("div",{className:s().mainBody,children:[(0,r.jsx)("div",{className:s().iconContainer,children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)("p",{className:s().mainMessage,children:u("search.no-results")}),(0,r.jsx)("p",{className:s().secondaryMessage,children:u("search.no-results-suggestion",{searchQuery:n})})]})}),c&&(0,r.jsx)(m,{searchUrl:i})]})}},28588:function(e,n,t){"use strict";t.d(n,{H:function(){return r}});var r,o=t(57611),a=t(67597),i=t(61395),s=t(38071),c=t.n(s),u=t(22367),l=t(65643),d=t(8604),f=t(42098),m=t(60178),v=t(76332),h=t(9515),p=t(16129);!function(e){e.SearchDrawer="search_drawer",e.SearchPage="search_page",e.Tarteel="tarteel"}(r||(r={}));n.Z=function(e){var n,t=e.result,r=e.source,s=(0,i.Z)("quran-reader").lang,_=(0,a.useMemo)((function(){return(0,v.Tj)(t.verseKey,s)}),[s,t.verseKey]),g=(0,d.Z)(s);if(!g)return null;var R=(0,p.Tc)(t.verseKey),y=(0,f.dy)(g,R.toString());return(0,o.jsx)("div",{className:c().container,children:(0,o.jsxs)("div",{className:c().itemContainer,children:[(0,o.jsx)(u.Z,{href:(0,h.P6)(t.verseKey),shouldPassHref:!0,onClick:function(){(0,m.MY)("".concat(r,"_result_item"))},children:(0,o.jsxs)("a",{className:c().verseKey,children:[y.transliteratedName," ",_]})}),(0,o.jsx)("div",{className:c().quranTextContainer,children:(0,o.jsx)("div",{className:c().quranTextResult,translate:"no",children:t.words.map((function(e,n){return(0,o.jsx)(l.Z,{isHighlighted:!!e.highlight,word:e,isWordByWordAllowed:!1,isAudioHighlightingAllowed:!1},"".concat(t.verseKey,":").concat(n+1))}))})}),null===(n=t.translations)||void 0===n?void 0:n.map((function(e){return(0,o.jsxs)("div",{className:c().translationContainer,children:[(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:e.text}}),(0,o.jsxs)("p",{className:c().translationName,children:[" - ",e.resourceName]})]},e.resourceId)}))]})})}},12602:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ie}});var r,o,a=t(57611),i=t(67597),s=t(9134),c=t.n(s),u=t(61395),l=t(25064),d=t(15138);function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}var m,v=function(e){return i.createElement("svg",f({width:80,height:61,viewBox:"0 0 80 61",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=i.createElement("path",{d:"M41.784 38.612c5.056 0 9.193-4.146 9.193-9.213V9.212C50.977 4.146 46.84 0 41.784 0S32.59 4.146 32.59 9.212V29.4c0 5.067 4.137 9.213 9.193 9.213Zm16.24-10.116c0 9.212-7.813 15.661-16.24 15.661s-16.241-6.449-16.241-15.661h-5.21c0 10.44 8.275 19.192 18.387 20.575v10.992h6.128V49.07c10.112-1.536 18.387-10.135 18.387-20.575h-5.21Z"})),o||(o=i.createElement("path",{stroke:"var(--color-background-inverse)",strokeWidth:5,d:"m1.583 56.941 76.999-53"})))},h=t(8530),p=t.n(h),_=t(22367),g=t(60178);!function(e){e.NO_PERMISSION="NO_PERMISSION",e.NOT_SUPPORTED="NOT_SUPPORTED",e.SOCKET_ERROR="SOCKET_ERROR",e.RESPONSE_ERROR="RESPONSE_ERROR",e.WORKLET_ERROR="WORKLET_ERROR",e.GENERAL_ERROR="GENERAL_ERROR"}(m||(m={}));var R=m,y=function(e){var n=e.error,t=e.isWaitingForPermission,r=e.isCommandBar,o=(0,u.Z)("common").t,i=null,s=null;if(t)s=(0,a.jsx)("p",{children:o("voice.ask-permission")}),i=(0,a.jsx)(d.Z,{});else{var c="";switch(n){case R.NO_PERMISSION:c=o("voice.no-permission"),i=(0,a.jsx)(v,{});break;case R.NOT_SUPPORTED:c=o("voice.not-supported"),i=(0,a.jsx)(v,{});break;default:c=o("voice.error"),i=(0,a.jsx)(l.Z,{})}s=(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:c}),(0,a.jsx)(_.Z,{href:"https://download.tarteel.ai",isNewTab:!0,variant:_.r.Highlight,onClick:function(){(0,g.Io)("".concat(r?"command_bar":"search_drawer","_error"))},children:o("tarteel.app")})]})}return(0,a.jsxs)("div",{className:p().container,children:[i,s]})},x=t(1693),C=t.n(x),E=function(e,n){e.getByteFrequencyData(n);for(var t=0,r=n.length,o=0;o<r;o+=1)t+=n[o];var a=Math.round(t/r);return a>100?100:a},w=function(e){return Math.max(1.5*e/100)+1},b=function(e){var n=e.partialTranscript,t=e.volume,r=e.verticalLayout,o=(0,u.Z)("common").t;return(0,a.jsxs)("div",{className:c()(C().outerContainer,r&&C().verticalLyaout),children:[(0,a.jsxs)("div",{className:C().innerContainer,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:C().suggestTitle,children:o("voice.suggest-title")}),(0,a.jsx)("p",{className:C().suggestSubtitle,children:o("voice.suggest-subtitle")})]}),(0,a.jsxs)("div",{className:C().circlesContainer,children:[(0,a.jsx)("div",{className:C().volumeCircle,style:{"--volume":w(t)}}),(0,a.jsx)("div",{className:C().micCircle,children:(0,a.jsx)(d.Z,{})})]})]}),(0,a.jsx)("p",{className:C().transcript,children:n})]})},O=t(85378),P=t.n(O),j=t(22902),S=t(4579),N=t(29412),T=t(28588),A=t(93289),k=t(52266),Z=t(3592),I=t(76332),M=t(98366),D=t(77342);function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){L(e,n,t[n])}))}return e}var F,U=function(e){var n=e.searchResult,t=e.isCommandBar,r=(0,j.v9)(A.qw,Z.Hj),o=(0,u.Z)("common"),s=o.t,c=o.lang,l=K({filters:n.matches.map((function(e){return"".concat(e.surahNum,":").concat(e.ayahNum)})).join(","),fields:"text_uthmani"},!t&&K({words:!0},!!r.length&&{translations:r.join(","),translationFields:"text,resource_id,resource_name"})),d=(0,i.useCallback)((function(e){if(t){var n=e.verses.map((function(e){return{key:e.verseKey,resultType:D.H.AYAH,name:"[".concat((0,I.Tj)(e.verseKey,c),"] ").concat((0,M.a)(e.textUthmani,80)),group:s("command-bar.navigations")}}));return(0,a.jsx)(S.Z,{commandGroups:{groups:P()(n.map((function(e,n){return K({},e,{index:n})})),(function(e){return e.group})),numberOfCommands:e.verses.length}})}return(0,a.jsx)(a.Fragment,{children:e.verses.map((function(e){return(0,a.jsx)(T.Z,{result:e,source:T.H.Tarteel},e.verseKey)}))})}),[t,c,s]);return(0,a.jsx)(N.Z,{queryKey:(0,k.Wq)(l),render:d})},H=t(10081),B=t.n(H),W=t(9454),z=t(97572),G=t(88901),q=t.n(G),V=function(e){return e},Y=t(34698);!function(e){e.START_STREAM="START_STREAM",e.END_STREAM="END_STREAM",e.SEARCH_LOADING="SEARCH_LOADING",e.SEARCH_RESULT="SEARCH_RESULT",e.PARTIAL_TRANSCRIPT="PARTIAL_TRANSCRIPT",e.ERROR="ERROR"}(F||(F={}));var Q=F;function J(e,n,t,r,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,o)}function X(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){J(a,r,o,i,s,"next",e)}function s(e){J(a,r,o,i,s,"throw",e)}i(void 0)}))}}var $={sampleRate:16e3,fileFormat:"WAV",channels:1},ee={event:Q.END_STREAM},ne={event:Q.START_STREAM,data:{audioConfig:$}},te={sampleRate:$.sampleRate,channelCount:$.channels,sampleSize:4096},re="USER_MEDIA_NOT_SUPPORTED",oe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=(0,i.useState)(0),r=n[0],o=n[1],a=(0,i.useRef)(null),s=(0,i.useState)(!1),c=s[0],u=s[1],l=(0,i.useState)(null),d=l[0],f=l[1],m=(0,i.useState)(null),v=m[0],h=m[1],p=(0,i.useState)(null),_=p[0],y=p[1],x=(0,i.useState)(!1),C=x[0],w=x[1],b=(0,i.useCallback)((function(){a.current&&a.current.getAudioTracks().forEach((function(e){e.stop()})),o(0)}),[]),O=(0,i.useCallback)((function(e){return e&&e.readyState===e.OPEN}),[]),P=(0,i.useCallback)(function(){var e=X(q().mark((function e(n,t,r,o,a){return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(n)&&(n.send(JSON.stringify(ee)),n.close()),b(),t&&t.disconnect(),r&&r.disconnect(),o&&o.disconnect(),"running"!==a.state){e.next=8;break}return e.next=8,a.close();case 8:case"end":return e.stop()}}),e)})));return function(n,t,r,o,a){return e.apply(this,arguments)}}(),[O,b]),j=(0,i.useCallback)((function(e,n,t,r,o,a){var i=JSON.parse(e.data),s=i.event,c=i.data;switch(s){case Q.SEARCH_LOADING:u(!0);break;case Q.SEARCH_RESULT:u(!1),y(c),c.matches.length||(0,g.Dy)(c.queryText,"tarteel","voice"),P(n,t,r,o,a);break;case Q.PARTIAL_TRANSCRIPT:u(!1),h(c.queryText);break;case Q.ERROR:u(!1),(0,g.Kz)("tarteel_error",{error:s}),f(R.RESPONSE_ERROR)}}),[P]);return(0,Y.Z)((function(){window.AudioContext=window.AudioContext||window.webkitAudioContext,void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var n=navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.getUserMedia;return n?new Promise((function(t,r){n.call(navigator,e,t,r)})):Promise.reject(new Error(re))})}),[]),(0,i.useEffect)((function(){if(e){f(null),h(null),y(null),w(!0);var n=new window.AudioContext({sampleRate:$.sampleRate}),r=null,i=null,s=null,c=null;return navigator.mediaDevices.getUserMedia({audio:te}).then((function(e){try{r=n.createMediaStreamSource(e)}catch(l){throw(0,g.Kz)("voice_search_create_media_stream_error"),P(s,c,i,r,n),new Error(re)}n.audioWorklet.addModule(new V(new URL(t.p+t.u(7618),t.b))).then((function(){(0,g.Kz)("tarteel_websocket_initialize"),u(!0),s=new WebSocket("wss://voice-v2.tarteel.io/search/?Authorization=".concat("1d0274a6715a4fe1939a05b21743c753")),a.current=e,s.onopen=function(){(0,g.Kz)("tarteel_websocket_open"),u(!1),(c=n.createAnalyser()).smoothingTimeConstant=.8,c.fftSize=1024;var e=new Uint8Array(c.frequencyBinCount);i=new AudioWorkletNode(n,"MicInputProcessor"),s.send(JSON.stringify(ne)),r.connect(c),c.connect(i),i.connect(n.destination),i.port.onmessage=function(n){o(E(c,e)),O(s)&&s.send(n.data)}},s.onmessage=function(e){j(e,s,c,i,r,n)},s.onerror=function(){(0,g.Kz)("tarteel_websocket_error"),u(!1),f(R.SOCKET_ERROR),b()}})).catch((function(){(0,g.Kz)("voice_search_worklet_error"),f(R.WORKLET_ERROR)}))})).catch((function(e){if(e.message===re)(0,g.Kz)("voice_search_not_supported"),f(R.NOT_SUPPORTED);else{var n="NotAllowedError"===e.name;n&&(0,g.Kz)("voice_search_permission_denied"),f(n?R.NO_PERMISSION:R.GENERAL_ERROR)}})).finally((function(){w(!1)})),function(){P(s,c,i,r,n)}}}),[O,j,P,e,b]),{isLoading:c,error:d,partialTranscript:v,searchResult:_,volume:r,isWaitingForPermission:C}};function ae(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ie=function(e){var n,t,r=e.isCommandBar,o=void 0!==r&&r,i=oe(),s=i.isLoading,u=i.partialTranscript,l=i.searchResult,d=i.error,f=i.volume,m=i.isWaitingForPermission;return s?(0,a.jsx)(W.Z,{size:W.E.Large}):d||m?(0,a.jsx)("div",{className:c()(ae({},B().container,!o)),children:(0,a.jsx)(y,{isCommandBar:o,error:d,isWaitingForPermission:m})}):l&&!l.matches.length?(0,a.jsx)("div",{className:c()((n={},ae(n,B().container,!o),ae(n,B().noResultContainer,o),n)),children:(0,a.jsx)(z.Z,{searchQuery:u,isSearchDrawer:!1})}):(0,a.jsx)(a.Fragment,{children:l?(0,a.jsx)(U,{searchResult:l,isCommandBar:o}):(0,a.jsx)("div",{className:c()((t={},ae(t,B().container,!o),ae(t,B().commandBarContainer,o),t)),children:(0,a.jsx)(b,{verticalLayout:!o,partialTranscript:u,volume:f})})})}},91094:function(e,n,t){"use strict";t.d(n,{Oz:function(){return o},lT:function(){return i},nv:function(){return a}});var r=t(67597),o=function(e){var n=(0,r.useRef)(null);return[function(){n.current&&n.current.scrollIntoView(e)},n]},a={block:"center",behavior:"smooth"},i={block:"nearest"};n.ZP=o},98366:function(e,n,t){"use strict";t.d(n,{a:function(){return r}});var r=function(e,n){for(var t=e.split("",n),r="",o=0;o<t.length;o+=1){var a=t[o];if(r.length===n-1){r="".concat(r).concat(a,"...");break}r="".concat(r).concat(a)}return r}},92375:function(e){e.exports={noResult:"CommandList_noResult__oTg7n",groupHeader:"CommandList_groupHeader___yWaG",command:"CommandList_command__BB_Gf",selected:"CommandList_selected__rVGLj",highlight:"CommandList_highlight__1HwZs",keyboardInputContainer:"CommandList_keyboardInputContainer__9XbOW"}},39828:function(e){e.exports={commandPrefix:"CommandPrefix_commandPrefix__MOHuk",container:"CommandPrefix_container__xqFc2",name:"CommandPrefix_name__P_IKZ"}},75038:function(e){e.exports={linkContainer:"AdvancedSearchLink_linkContainer__dqTSP"}},85723:function(e){e.exports={container:"NoResults_container__I2jHF",mainBody:"NoResults_mainBody__GC8l_",iconContainer:"NoResults_iconContainer__ks7uY",mainMessage:"NoResults_mainMessage__o3ksN",secondaryMessage:"NoResults_secondaryMessage__CNI0d"}},38071:function(e){e.exports={translationName:"SearchResultItem_translationName__5mkDi",translationContainer:"SearchResultItem_translationContainer__OaPZE",container:"SearchResultItem_container__Cvqx0",itemContainer:"SearchResultItem_itemContainer__NRd1r",quranTextResult:"SearchResultItem_quranTextResult__texyH",verseKey:"SearchResultItem_verseKey__dyumW"}},8530:function(e){e.exports={container:"Error_container__yeY3V"}},1693:function(e){e.exports={outerContainer:"PartialResult_outerContainer__AcDv0",innerContainer:"PartialResult_innerContainer__v1QDG",transcript:"PartialResult_transcript__Lcscd",suggestTitle:"PartialResult_suggestTitle__e8lBr",suggestSubtitle:"PartialResult_suggestSubtitle__utXHd",micCircle:"PartialResult_micCircle__ioN7o",circlesContainer:"PartialResult_circlesContainer__EWZIJ",volumeCircle:"PartialResult_volumeCircle__GvhbK",verticalLyaout:"PartialResult_verticalLyaout__XWlc6"}},10081:function(e){e.exports={container:"VoiceSearchBodyContainer_container__GpMSO",noResultContainer:"VoiceSearchBodyContainer_noResultContainer__lv_Zl",commandBarContainer:"VoiceSearchBodyContainer_commandBarContainer__U85vU"}}}]);