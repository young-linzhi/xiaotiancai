import{Q as ie,R as Se,x as _,g as R,u as e,B as j,C as ue,D as Ne,h as Te,G as Me,J as ce,d as Y,o as A,c as P,f as K,i as se,w as X,H as J,n as B,S as U,a as G,U as $e,I as Q,T as ne,V as W,z as Ae,j as fe,k as ve,F as Be,r as He,P as Oe,m as Le,A as Re,W as Pe}from"./index-714ccf26.js";import{j as Ve,k as ze,f as De,b as de,i as je,g as Ue,u as me,E as oe,_ as he,l as We,w as Fe,a as Ke}from"./base-84a34c6e.js";var Xe="Expected a function";function re(o,g,t){var a=!0,d=!0;if(typeof o!="function")throw new TypeError(Xe);return Ve(t)&&(a="leading"in t?!!t.leading:a,d="trailing"in t?!!t.trailing:d),ze(o,g,{leading:a,maxWait:g,trailing:d})}const Ge=(o,g,t)=>De(o.subTree).filter(u=>{var n;return Se(u)&&((n=u.type)==null?void 0:n.name)===g&&!!u.component}).map(u=>u.component.uid).map(u=>t[u]).filter(u=>!!u),Je=(o,g)=>{const t={},a=ie([]);return{children:a,addChild:n=>{t[n.uid]=n,a.value=Ge(o,g,t)},removeChild:n=>{delete t[n],a.value=a.value.filter(m=>m.uid!==n)}}},Qe=de({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),Ye={change:(o,g)=>[o,g].every(je)},pe=Symbol("carouselContextKey"),le=300,qe=(o,g,t)=>{const{children:a,addChild:d,removeChild:u}=Je(ce(),"ElCarouselItem"),n=_(-1),m=_(null),C=_(!1),I=_(),w=_(0),S=R(()=>o.arrow!=="never"&&!e(p)),T=R(()=>a.value.some(s=>s.props.label.toString().length>0)),k=R(()=>o.type==="card"),p=R(()=>o.direction==="vertical"),H=R(()=>o.height!=="auto"?{height:o.height}:{height:`${w.value}px`,overflow:"hidden"}),E=re(s=>{l(s)},le,{trailing:!0}),N=re(s=>{V(s)},le);function M(){m.value&&(clearInterval(m.value),m.value=null)}function O(){o.interval<=0||!o.autoplay||m.value||(m.value=setInterval(()=>i(),o.interval))}const i=()=>{n.value<a.value.length-1?n.value=n.value+1:o.loop&&(n.value=0)};function l(s){if(Me(s)){const z=a.value.filter(F=>F.props.name===s);z.length>0&&(s=a.value.indexOf(z[0]))}if(s=Number(s),Number.isNaN(s)||s!==Math.floor(s))return;const h=a.value.length,$=n.value;s<0?n.value=o.loop?h-1:0:s>=h?n.value=o.loop?0:h-1:n.value=s,$===n.value&&v($),x()}function v(s){a.value.forEach((h,$)=>{h.translateItem($,n.value,s)})}function r(s,h){var $,z,F,ee;const D=e(a),te=D.length;if(te===0||!s.states.inStage)return!1;const Ie=h+1,we=h-1,ae=te-1,be=D[ae].states.active,_e=D[0].states.active,ke=(z=($=D[Ie])==null?void 0:$.states)==null?void 0:z.active,Ee=(ee=(F=D[we])==null?void 0:F.states)==null?void 0:ee.active;return h===ae&&_e||ke?"left":h===0&&be||Ee?"right":!1}function b(){C.value=!0,o.pauseOnHover&&M()}function L(){C.value=!1,O()}function c(s){e(p)||a.value.forEach((h,$)=>{s===r(h,$)&&(h.states.hover=!0)})}function f(){e(p)||a.value.forEach(s=>{s.states.hover=!1})}function y(s){n.value=s}function V(s){o.trigger==="hover"&&s!==n.value&&(n.value=s)}function q(){l(n.value-1)}function ye(){l(n.value+1)}function x(){M(),O()}function Ce(s){o.height==="auto"&&(w.value=s)}j(()=>n.value,(s,h)=>{v(h),h>-1&&g("change",s,h)}),j(()=>o.autoplay,s=>{s?O():M()}),j(()=>o.loop,()=>{l(n.value)}),j(()=>o.interval,()=>{x()}),j(()=>a.value,()=>{a.value.length>0&&l(o.initialIndex)});const Z=ie();return ue(()=>{Z.value=Ue(I.value,()=>{v()}),O()}),Ne(()=>{M(),I.value&&Z.value&&Z.value.stop()}),Te(pe,{root:I,isCardType:k,isVertical:p,items:a,loop:o.loop,addItem:d,removeItem:u,setActiveItem:l,setContainerHeight:Ce}),{root:I,activeIndex:n,arrowDisplay:S,hasLabel:T,hover:C,isCardType:k,items:a,isVertical:p,containerStyle:H,handleButtonEnter:c,handleButtonLeave:f,handleIndicatorClick:y,handleMouseEnter:b,handleMouseLeave:L,setActiveItem:l,prev:q,next:ye,throttledArrowClick:E,throttledIndicatorHover:N}},Ze=["onMouseenter","onClick"],xe={key:0},et="ElCarousel",tt=Y({name:et}),at=Y({...tt,props:Qe,emits:Ye,setup(o,{expose:g,emit:t}){const a=o,{root:d,activeIndex:u,arrowDisplay:n,hasLabel:m,hover:C,isCardType:I,items:w,isVertical:S,containerStyle:T,handleButtonEnter:k,handleButtonLeave:p,handleIndicatorClick:H,handleMouseEnter:E,handleMouseLeave:N,setActiveItem:M,prev:O,next:i,throttledArrowClick:l,throttledIndicatorHover:v}=qe(a,t),r=me("carousel"),b=R(()=>{const c=[r.b(),r.m(a.direction)];return e(I)&&c.push(r.m("card")),c}),L=R(()=>{const c=[r.e("indicators"),r.em("indicators",a.direction)];return e(m)&&c.push(r.em("indicators","labels")),a.indicatorPosition==="outside"&&c.push(r.em("indicators","outside")),e(S)&&c.push(r.em("indicators","right")),c});return g({setActiveItem:M,prev:O,next:i}),(c,f)=>(A(),P("div",{ref_key:"root",ref:d,class:B(e(b)),onMouseenter:f[6]||(f[6]=U((...y)=>e(E)&&e(E)(...y),["stop"])),onMouseleave:f[7]||(f[7]=U((...y)=>e(N)&&e(N)(...y),["stop"]))},[K("div",{class:B(e(r).e("container")),style:ve(e(T))},[e(n)?(A(),se(ne,{key:0,name:"carousel-arrow-left",persisted:""},{default:X(()=>[J(K("button",{type:"button",class:B([e(r).e("arrow"),e(r).em("arrow","left")]),onMouseenter:f[0]||(f[0]=y=>e(k)("left")),onMouseleave:f[1]||(f[1]=(...y)=>e(p)&&e(p)(...y)),onClick:f[2]||(f[2]=U(y=>e(l)(e(u)-1),["stop"]))},[G(e(oe),null,{default:X(()=>[G(e($e))]),_:1})],34),[[Q,(c.arrow==="always"||e(C))&&(a.loop||e(u)>0)]])]),_:1})):W("v-if",!0),e(n)?(A(),se(ne,{key:1,name:"carousel-arrow-right",persisted:""},{default:X(()=>[J(K("button",{type:"button",class:B([e(r).e("arrow"),e(r).em("arrow","right")]),onMouseenter:f[3]||(f[3]=y=>e(k)("right")),onMouseleave:f[4]||(f[4]=(...y)=>e(p)&&e(p)(...y)),onClick:f[5]||(f[5]=U(y=>e(l)(e(u)+1),["stop"]))},[G(e(oe),null,{default:X(()=>[G(e(Ae))]),_:1})],34),[[Q,(c.arrow==="always"||e(C))&&(a.loop||e(u)<e(w).length-1)]])]),_:1})):W("v-if",!0),fe(c.$slots,"default")],6),c.indicatorPosition!=="none"?(A(),P("ul",{key:0,class:B(e(L))},[(A(!0),P(Be,null,He(e(w),(y,V)=>(A(),P("li",{key:V,class:B([e(r).e("indicator"),e(r).em("indicator",c.direction),e(r).is("active",V===e(u))]),onMouseenter:q=>e(v)(V),onClick:U(q=>e(H)(V),["stop"])},[K("button",{class:B(e(r).e("button"))},[e(m)?(A(),P("span",xe,Oe(y.props.label),1)):W("v-if",!0)],2)],42,Ze))),128))],2)):W("v-if",!0)],34))}});var st=he(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const nt=de({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ot=(o,g)=>{const t=Le(pe),a=ce(),d=.83,u=_(),n=_(!1),m=_(0),C=_(1),I=_(!1),w=_(!1),S=_(!1),T=_(!1),{isCardType:k,isVertical:p}=t;function H(i,l,v){const r=v-1,b=l-1,L=l+1,c=v/2;return l===0&&i===r?-1:l===r&&i===0?v:i<b&&l-i>=c?v+1:i>L&&i-l>=c?-2:i}function E(i,l){var v,r;const b=e(p)?((v=t.root.value)==null?void 0:v.offsetHeight)||0:((r=t.root.value)==null?void 0:r.offsetWidth)||0;return S.value?b*((2-d)*(i-l)+1)/4:i<l?-(1+d)*b/4:(3+d)*b/4}function N(i,l,v){const r=t.root.value;return r?((v?r.offsetHeight:r.offsetWidth)||0)*(i-l):0}const M=(i,l,v)=>{var r;const b=e(k),L=(r=t.items.value.length)!=null?r:Number.NaN,c=i===l;!b&&!We(v)&&(T.value=c||i===v),!c&&L>2&&t.loop&&(i=H(i,l,L));const f=e(p);I.value=c,b?(S.value=Math.round(Math.abs(i-l))<=1,m.value=E(i,l),C.value=e(I)?1:d):m.value=N(i,l,f),w.value=!0,c&&u.value&&t.setContainerHeight(u.value.offsetHeight)};function O(){if(t&&e(k)){const i=t.items.value.findIndex(({uid:l})=>l===a.uid);t.setActiveItem(i)}}return ue(()=>{t.addItem({props:o,states:Re({hover:n,translate:m,scale:C,active:I,ready:w,inStage:S,animating:T}),uid:a.uid,translateItem:M})}),Pe(()=>{t.removeItem(a.uid)}),{carouselItemRef:u,active:I,animating:T,hover:n,inStage:S,isVertical:p,translate:m,isCardType:k,scale:C,ready:w,handleItemClick:O}},rt=Y({name:"ElCarouselItem"}),lt=Y({...rt,props:nt,setup(o){const g=o,t=me("carousel"),{carouselItemRef:a,active:d,animating:u,hover:n,inStage:m,isVertical:C,translate:I,isCardType:w,scale:S,ready:T,handleItemClick:k}=ot(g),p=R(()=>{const E=`${`translate${e(C)?"Y":"X"}`}(${e(I)}px)`,N=`scale(${e(S)})`;return{transform:[E,N].join(" ")}});return(H,E)=>J((A(),P("div",{ref_key:"carouselItemRef",ref:a,class:B([e(t).e("item"),e(t).is("active",e(d)),e(t).is("in-stage",e(m)),e(t).is("hover",e(n)),e(t).is("animating",e(u)),{[e(t).em("item","card")]:e(w),[e(t).em("item","card-vertical")]:e(w)&&e(C)}]),style:ve(e(p)),onClick:E[0]||(E[0]=(...N)=>e(k)&&e(k)(...N))},[e(w)?J((A(),P("div",{key:0,class:B(e(t).e("mask"))},null,2)),[[Q,!e(d)]]):W("v-if",!0),fe(H.$slots,"default")],6)),[[Q,e(T)]])}});var ge=he(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const ct=Fe(st,{CarouselItem:ge}),ft=Ke(ge);export{ct as E,ft as a};
