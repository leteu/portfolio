var Be=Object.defineProperty,De=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var ie=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))Qe.call(t,n)&&ie(e,n,t[n]);if(se)for(var n of se(t))Fe.call(t,n)&&ie(e,n,t[n]);return e},D=(e,t)=>De(e,Re(t));import{c as be,i as le,l as Ke,d as Ge,a as w,h as R,b as we,g as U,_ as y,A as m,H as p,F as X,G as Y,D as d,y as k,I as W,J as Ue,K as Xe,P as Ye,o as J,z as T,E as _,C as $,L as Je,r as q,M as Ze,N as re,s as et,O as L,w as S,f as j,R as Q,j as F,S as ce,T as tt,t as at,U as ot,V as nt,W as st,X as it,Y as lt,Z as rt,$ as ct,a0 as ut,e as dt,a1 as vt,a2 as ft,a3 as ue,a4 as de,a5 as ve,a6 as fe,a7 as me,a8 as mt,a9 as he,B as $e,aa as ht}from"./index.b6216f28.js";import{A as Te}from"./aos.63f8db2f.js";var pt=be({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=U(),a=le(Ke);le(Ge,()=>{console.error("QPage needs to be child of QPageContainer")});const s=w(()=>{const o=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const r=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(o,r)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),u=w(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>R("main",{class:u.value,style:s.value},we(t.default))}});const _t={},Se=e=>(X("data-v-3f35939c"),e=e(),Y(),e),gt={version:"1.1",id:"L",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 300 650",style:{"enable-background":"new 0 0 300 650"},"xml:space":"preserve"},yt=Se(()=>d("polygon",{class:"st0",points:"0,350 0,550 100,650 100,450"},null,-1)),xt=Se(()=>d("polygon",{class:"st1",points:"0,0 0,350 100,450 100,100 	"},null,-1)),bt=[yt,xt];function wt(e,t){return m(),p("svg",gt,bt)}var $t=y(_t,[["render",wt],["__scopeId","data-v-3f35939c"]]);const Tt={},St={class:"mouse"};function kt(e,t){return m(),p("div",St)}var Ct=y(Tt,[["render",kt],["__scopeId","data-v-663b7ef6"]]);const Ht=k({props:{strArray:{type:Array}},setup(e){}}),z=e=>(X("data-v-7cb02a89"),e=e(),Y(),e),Mt={class:"typing-text d2coding"},qt=z(()=>d("p",null," Hello, I'm leteu. ",-1)),Pt=z(()=>d("p",null,[W(" Web "),d("span",{class:"gradient-text"},"frontend"),W(" developer. ")],-1)),Et=z(()=>d("p",{class:"fs-80"}," Always think about ",-1)),Wt=z(()=>d("p",{class:"fs-80"},[W(" optimize "),d("span",{class:"gradient-text"},"performance.")],-1)),Lt=[qt,Pt,Et,Wt];function jt(e,t,n,a,s,u){return m(),p("div",Mt,Lt)}var Vt=y(Ht,[["render",jt],["__scopeId","data-v-7cb02a89"]]);const At=k({setup(){}}),zt={class:"window"},It=Xe('<div class="window__header row" data-v-1cbcf991><div class="col flex items-center justify-start q-ml-sm" data-v-1cbcf991><div class="dot dot__close" data-v-1cbcf991></div><div class="dot dot__min" data-v-1cbcf991></div><div class="dot dot__max" data-v-1cbcf991></div></div><div class="col flex justify-center items-center" data-v-1cbcf991> leteu / Gyuhyeon Shin / \uC2E0\uADDC\uD604 </div><div class="col flex justify-end items-center" data-v-1cbcf991><div class="q-mr-sm" data-v-1cbcf991> \u2325\u23181 </div></div></div>',1),Ot={class:"window__body"};function Nt(e,t,n,a,s,u){return m(),p("div",zt,[It,d("div",Ot,[Ue(e.$slots,"default",{},void 0,!0)])])}var Bt=y(At,[["render",Nt],["__scopeId","data-v-1cbcf991"]]);const Dt=k({components:{LogoAnimation:$t,NudgeMouse:Ct,Typing:Vt,PlaneSvg:Ye,MacStyleWindow:Bt},setup(){J(()=>{Te.init()})}}),Rt={class:"height-100vh main-box relative-position column"},Qt={class:"col row z-index-50"},Ft={class:"col flex justify-center items-center"},Kt={class:"flex justify-center items-center q-mb-lg"};function Gt(e,t,n,a,s,u){const o=T("Typing"),r=T("MacStyleWindow"),c=T("NudgeMouse");return m(),p("div",Rt,[d("div",Qt,[d("div",Ft,[_(r,{class:"width-900px","data-aos":"flip-left"},{default:$(()=>[_(o,{class:"q-pl-xl q-ml-xl text-weight-bold fs-400 q-py-xl"})]),_:1})])]),d("div",Kt,[_(c)])])}var Ut=y(Dt,[["render",Gt],["__scopeId","data-v-46c30fc2"]]);function K(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Je.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Xt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Yt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:a,proxy:s,emit:u}=U(),o=q(null);let r;function c(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const l={};n===void 0&&(Object.assign(l,{hide(i){s.hide(i)},toggle(i){s.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Ze(i,13)===!0&&l.toggle(i)},contextClick(i){s.hide(i),re(i),et(()=>{s.show(i),i.qAnchorHandled=!0})},prevent:re,mobileTouch(i){if(l.mobileCleanup(i),c(i)!==!0)return;s.hide(i),o.value.classList.add("non-selectable");const h=i.target;L(l,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{s.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),clearTimeout(r),e.value===!0&&i!==void 0&&K()}}),n=function(i=a.contextMenu){if(a.noParentEvent===!0||o.value===null)return;let h;i===!0?s.$q.platform.is.mobile===!0?h=[[o.value,"touchstart","mobileTouch","passive"]]:h=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:h=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],L(l,"anchor",h)});function v(){Q(l,"anchor")}function I(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function P(){if(a.target===!1||a.target==="")o.value=null;else if(a.target===!0)I(s.$el.parentNode);else{let i=a.target;if(typeof a.target=="string")try{i=document.querySelector(a.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${a.target}" not found`))}}return S(()=>a.contextMenu,i=>{o.value!==null&&(v(),n(i))}),S(()=>a.target,()=>{o.value!==null&&v(),P()}),S(()=>a.noParentEvent,i=>{o.value!==null&&(i===!0?v():n())}),J(()=>{P(),t!==!0&&a.modelValue===!0&&o.value===null&&u("update:modelValue",!1)}),j(()=>{clearTimeout(r),v()}),{anchorEl:o,canShow:c,anchorEvents:l}}function Jt(e,t){const n=q(null);let a;function s(r,c){const l=`${c!==void 0?"add":"remove"}EventListener`,v=c!==void 0?c:a;r!==window&&r[l]("scroll",v,F.passive),window[l]("scroll",v,F.passive),a=c}function u(){n.value!==null&&(s(n.value),n.value=null)}const o=S(()=>e.noParentEvent,()=>{n.value!==null&&(u(),t())});return j(o),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:s}}let ke;const{notPassiveCapture:V}=F,b=[];function A(e){clearTimeout(ke);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=ce.length-1;for(;n>=0;){const a=ce[n].$;if(a.type.name!=="QDialog")break;if(a.props.seamless!==!0)return;n--}for(let a=b.length-1;a>=0;a--){const s=b[a];if((s.anchorEl.value===null||s.anchorEl.value.contains(t)===!1)&&(t===document.body||s.innerRef.value!==null&&s.innerRef.value.contains(t)===!1))e.qClickOutside=!0,s.onClickOutside(e);else return}}function Zt(e){b.push(e),b.length===1&&(document.addEventListener("mousedown",A,V),document.addEventListener("touchstart",A,V))}function pe(e){const t=b.findIndex(n=>n===e);t>-1&&(b.splice(t,1),b.length===0&&(clearTimeout(ke),document.removeEventListener("mousedown",A,V),document.removeEventListener("touchstart",A,V)))}let _e,ge;function ye(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ea(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const G={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{G[`${e}#ltr`]=e,G[`${e}#rtl`]=e});function xe(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:G[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function ta(e,t){let{top:n,left:a,right:s,bottom:u,width:o,height:r}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],a-=t[0],u+=t[1],s+=t[0],o+=t[0],r+=t[1]),{top:n,left:a,right:s,bottom:u,width:o,height:r,middle:a+(s-a)/2,center:n+(u-n)/2}}function aa(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function oa(e){if(tt.is.ios===!0&&window.visualViewport!==void 0){const r=document.body.style,{offsetLeft:c,offsetTop:l}=window.visualViewport;c!==_e&&(r.setProperty("--q-pe-left",c+"px"),_e=c),l!==ge&&(r.setProperty("--q-pe-top",l+"px"),ge=l)}let t;const{scrollLeft:n,scrollTop:a}=e.el;if(e.absoluteOffset===void 0)t=ta(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:r,left:c}=e.anchorEl.getBoundingClientRect(),l=r+e.absoluteOffset.top,v=c+e.absoluteOffset.left;t={top:l,left:v,width:1,height:1,right:v+1,center:l,middle:v,bottom:l+1}}let s={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(s.minWidth=t.width+"px",e.cover===!0&&(s.minHeight=t.height+"px")),Object.assign(e.el.style,s);const u=aa(e.el),o={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};na(o,t,u,e.anchorOrigin,e.selfOrigin),s={top:o.top+"px",left:o.left+"px"},o.maxHeight!==void 0&&(s.maxHeight=o.maxHeight+"px",t.height>o.maxHeight&&(s.minHeight=s.maxHeight)),o.maxWidth!==void 0&&(s.maxWidth=o.maxWidth+"px",t.width>o.maxWidth&&(s.minWidth=s.maxWidth)),Object.assign(e.el.style,s),e.el.scrollTop!==a&&(e.el.scrollTop=a),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function na(e,t,n,a,s){const u=n.bottom,o=n.right,r=at(),c=window.innerHeight-r,l=document.body.clientWidth;if(e.top<0||e.top+u>c)if(s.vertical==="center")e.top=t[a.vertical]>c/2?Math.max(0,c-u):0,e.maxHeight=Math.min(u,c);else if(t[a.vertical]>c/2){const v=Math.min(c,a.vertical==="center"?t.center:a.vertical===s.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,v),e.top=Math.max(0,v-u)}else e.top=Math.max(0,a.vertical==="center"?t.center:a.vertical===s.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,c-e.top);if(e.left<0||e.left+o>l)if(e.maxWidth=Math.min(o,l),s.horizontal==="middle")e.left=t[a.horizontal]>l/2?Math.max(0,l-o):0;else if(t[a.horizontal]>l/2){const v=Math.min(l,a.horizontal==="middle"?t.middle:a.horizontal===s.horizontal?t.right:t.left);e.maxWidth=Math.min(o,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,a.horizontal==="middle"?t.middle:a.horizontal===s.horizontal?t.left:t.right),e.maxWidth=Math.min(o,l-e.left)}var sa=be({name:"QTooltip",inheritAttrs:!1,props:D(M(M(M({},Xt),ot),nt),{maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ye},self:{type:String,default:"top middle",validator:ye},offset:{type:Array,default:()=>[14,14],validator:ea},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}}),emits:[...st],setup(e,{slots:t,emit:n,attrs:a}){let s,u;const o=U(),{proxy:{$q:r}}=o,c=q(null),l=q(!1),v=w(()=>xe(e.anchor,r.lang.rtl)),I=w(()=>xe(e.self,r.lang.rtl)),P=w(()=>e.persistent!==!0),{registerTick:i,removeTick:h}=it(),{registerTimeout:E,removeTimeout:O}=lt(),{transition:Ce,transitionStyle:He}=rt(e,l),{localScrollTarget:ee,changeScrollEvent:Me,unconfigureScrollTarget:qe}=Jt(e,oe),{anchorEl:g,canShow:Pe,anchorEvents:C}=Yt({showing:l,configureAnchorEl:Ie}),{show:Ee,hide:N}=ct({showing:l,canShow:Pe,handleShow:je,handleHide:Ve,hideOnRouteChange:P,processOnMount:!0});Object.assign(C,{delayShow:Ae,delayHide:ze});const{showPortal:te,hidePortal:We,renderPortal:Le}=ut(o,c,Ne);if(r.platform.is.mobile===!0){const f={anchorEl:g,innerRef:c,onClickOutside(x){return N(x),x.target.classList.contains("q-dialog__backdrop")&&ft(x),!0}},B=w(()=>e.modelValue===null&&e.persistent!==!0&&l.value===!0);S(B,x=>{(x===!0?Zt:pe)(f)}),j(()=>{pe(f)})}function je(f){h(),O(),te(),i(()=>{u=new MutationObserver(()=>H()),u.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),H(),oe()}),s===void 0&&(s=S(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,H)),E(()=>{te(!0),n("show",f)},e.transitionDuration)}function Ve(f){h(),O(),ae(),E(()=>{We(),n("hide",f)},e.transitionDuration)}function ae(){u!==void 0&&(u.disconnect(),u=void 0),s!==void 0&&(s(),s=void 0),qe(),Q(C,"tooltipTemp")}function H(){const f=c.value;g.value===null||!f||oa({el:f,offset:e.offset,anchorEl:g.value,anchorOrigin:v.value,selfOrigin:I.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ae(f){if(r.platform.is.mobile===!0){K(),document.body.classList.add("non-selectable");const B=g.value,x=["touchmove","touchcancel","touchend","click"].map(ne=>[B,ne,"delayHide","passiveCapture"]);L(C,"tooltipTemp",x)}E(()=>{Ee(f)},e.delay)}function ze(f){O(),r.platform.is.mobile===!0&&(Q(C,"tooltipTemp"),K(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),E(()=>{N(f)},e.hideDelay)}function Ie(){if(e.noParentEvent===!0||g.value===null)return;const f=r.platform.is.mobile===!0?[[g.value,"touchstart","delayShow","passive"]]:[[g.value,"mouseenter","delayShow","passive"],[g.value,"mouseleave","delayHide","passive"]];L(C,"anchor",f)}function oe(){if(g.value!==null||e.scrollTarget!==void 0){ee.value=dt(g.value,e.scrollTarget);const f=e.noParentEvent===!0?H:N;Me(ee.value,f)}}function Oe(){return l.value===!0?R("div",D(M({},a),{ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,He.value],role:"complementary"}),we(t.default)):null}function Ne(){return R(vt,{name:Ce.value,appear:!0},Oe)}return j(ae),Object.assign(o.proxy,{updatePosition:H}),Le}}),ia="/portfolio/assets/vuejs.1f9dcb1d.svg",la="/portfolio/assets/javascript.aa4c110a.svg",ra="/portfolio/assets/typescript.b28dde74.svg",ca="/portfolio/assets/flutter.705a9073.svg",ua="/portfolio/assets/sass.7f63089b.svg",da="/portfolio/assets/html.85e01960.svg",va="/portfolio/assets/css.91742440.svg",fa="/portfolio/assets/webpack.ce9910e7.svg",ma="/portfolio/assets/vite.ce0e1348.svg",ha="/portfolio/assets/electron.642a6457.svg",pa="/portfolio/assets/git.555c6d1d.svg",_a="/portfolio/assets/gitlab.e6712e0d.svg",ga="/portfolio/assets/slack.ce6ea5c2.svg",ya="/portfolio/assets/postcss.2fcbba71.svg";const xa=k({setup(){const e=q(""),t={frontend:{name:"Front-end",value:[{name:"vuejs",image:ia},{name:"javascript",image:la},{name:"typescript",image:ra},{name:"flutter",image:ca},{name:"electron",image:ha}]},publish:{name:"Publish",value:[{name:"html",image:da},{name:"css",image:va},{name:"sass",image:ua},{name:"postcss",image:ya}]},devTool:{name:"Dev tools",value:[{name:"webpack",image:fa},{name:"vite",image:ma}]},workplace:{name:"workplace",value:[{name:"git",image:pa},{name:"gitlab",image:_a},{name:"slack",image:ga}]},etc:{name:"etc",value:[{}]}};J(()=>{Te.init()});function n(s){e.value=s}function a(){e.value=""}return{hoverItem:e,hoverHexagon:n,resetHover:a,techList:t}}}),Z=e=>(X("data-v-56d1e19d"),e=e(),Y(),e),ba={class:"full-width q-pa-xl scroll-y"},wa={class:"width-400px text-center q-mx-auto text-grey-5","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"},$a=Z(()=>d("div",{class:"section-title"},"Tech Stack",-1)),Ta={class:"warp text-grey-10 text-h6 row"},Sa=Z(()=>d("div",{class:"col flex items-center justify-start"},[d("div",{class:"dot dot__close"}),d("div",{class:"dot dot__min"}),d("div",{class:"dot dot__max"})],-1)),ka={class:"col text-center fs-85"},Ca=Z(()=>d("div",{class:"col"},null,-1)),Ha={class:"tech-container"},Ma=["data-aos-delay"],qa=["src"];function Pa(e,t,n,a,s,u){return m(),p("div",ba,[d("div",wa,[$a,_(ue,{color:"grey-5",class:"q-mt-lg q-mb-xl"})]),d("div",Ta,[(m(!0),p(de,null,ve(Object.entries(e.techList),([o,r],c)=>(m(),p("div",{key:`card-${c}-${o}`,class:"col-4 q-px-sm q-pb-md"},[_(ht,{class:"height-100pct column border-radius-15px","data-aos":"zoom-in","data-aos-easing":"linear","data-aos-duration":"500","data-aos-delay":c*100},{default:$(()=>[_(fe,{class:"row bg-blue-3 q-py-sm height-50px text-weight-bold"},{default:$(()=>[Sa,d("div",ka,me(r.name),1),Ca]),_:2},1024),_(ue),_(fe,{class:"col bg-grey-2"},{default:$(()=>[d("div",Ha,[(m(!0),p(de,null,ve(r.value,(l,v)=>(m(),p("div",{key:`tech-${o}-${v}`,class:mt(`tech-box tech-box__${l.name}`),"data-aos":"zoom-in","data-aos-easing":"linear","data-aos-duration":"500","data-aos-delay":c*v*100+600},[l.image?(m(),p("img",{key:0,src:l.image,alt:""},null,8,qa)):he("",!0),l.name?(m(),$e(sa,{key:1},{default:$(()=>[W(me(l.name),1)]),_:2},1024)):he("",!0)],10,Ma))),128))])]),_:2},1024)]),_:2},1032,["data-aos-delay"])]))),128))])])}var Ea=y(xa,[["render",Pa],["__scopeId","data-v-56d1e19d"]]);const Wa=k({setup(){}});function La(e,t,n,a,s,u){return null}var ja=y(Wa,[["render",La]]);const Va=k({name:"IndexPage",components:{MainVisualVue:Ut,TechStackVue:Ea,ProjectSectionVue:ja},setup(){}}),Aa={class:"full-width"},za=d("div",{class:"q-pa-sm text-center full-width"},[d("div",{class:"text-grey-6"}," Copyright 2022. leteu. All rights reserved. ")],-1);function Ia(e,t,n,a,s,u){const o=T("MainVisualVue"),r=T("TechStackVue"),c=T("ProjectSectionVue");return m(),$e(pt,{class:"row justify-evenly"},{default:$(()=>[d("div",Aa,[_(o),_(r),_(c),za])]),_:1})}var Da=y(Va,[["render",Ia]]);export{Da as default};