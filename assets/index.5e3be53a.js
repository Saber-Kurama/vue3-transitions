import{d as M,c as A,o as u,a as v,b as O,r as H,n as J,u as Q,e as b,f as g,g as c,h as C,w as a,t as N,i as D,F as k,j as E,k as W,l as i,m as p,_ as ee,p as oe,q as te,s as ne,v as le,x as se,y as ae,A as re}from"./vendor.f9ab1456.js";const ie=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}};ie();const ue=M({props:{index:{type:Number},withButton:{type:Boolean,default:!1},color:{type:Object,default:()=>null}},emits:["remove"],setup(m,{emit:r}){const s=m,d=A(()=>{let{r:n,g:_,b:y}=s.color;return .299*n+.587*_+.114*y}),o=A(()=>{if(s.color){let{r:n,g:_,b:y}=s.color,T=`rgb(${n}, ${_}, ${y})`,x=`rgba(${n}, ${_}, ${y}, 0.5)`;return{"background-color":T,"box-shadow":`0px 6px 20px ${x}`,color:d.value>180?"#777":"#f3f3f3"}}}),t=()=>{r("remove",{index:s.index||0})};return(n,_)=>(u(),v("div",{class:"icon",style:J(Q(o))},[m.withButton?(u(),v("div",{key:0,class:"icon-delete-btn",onMousedown:t},null,32)):O("",!0),H(n.$slots,"default")],4))}}),L=(m,r)=>Math.round(m+Math.random()*r),F=m=>Array.apply(null,new Array(m)).map((r,s)=>({r:L(0,255),g:L(0,255),b:L(0,255),key:Math.random()}));const de={class:"main-content"},ce={key:0},pe={class:"box"},me={key:1,class:"transition-group-wrapper"},_e={class:"transition-select"},fe=p("Beijing"),ve=p("Shanghai"),ge=p("Guangzhou"),ye={class:"transition-settings"},be={class:"transition-settings_setting"},he=p(" Duration "),we={class:"transition-settings_setting"},Ce=p(" Delay "),Te={class:"transition-settings_setting"},xe=p(" \u9009\u62E9 "),ke=p(" Group "),Ee=p(" Simple "),Le=M({setup(m){const r=b(!0),s=b(!1),d=b(300),o=b(0),t=b(F(5)),n=b("FadeTransition"),_={FadeTransition:ee,SlideYUpTransition:oe,SlideYDownTransition:te,SlideXLeftTransition:ne,SlideXRightTransition:le,ZoomCenterTransition:se},y=[{label:"Fade",options:["FadeTransition"]},{label:"Zoom",options:["ZoomCenterTransition","ZoomXTransition","ZoomYTransition"]},{label:"Collapse",options:["CollapseTransition"]},{label:"Scale",options:["ScaleTransition"]},{label:"Slide",options:["SlideYUpTransition","SlideYDownTransition","SlideXLeftTransition","SlideXRightTransition"]}],T=()=>{s.value?U():r.value=!r.value},x=()=>Math.floor(Math.random()*t.value.length),U=()=>{console.log("add");let h=F(1);t.value.splice(x(),0,h[0])},R=h=>{t.value.splice(h,1)},S=()=>{console.log("beforeEnter-----")},X=()=>{console.log("onenter---")},Y=()=>{console.log("onAfterEnter---")},Z=()=>{console.log("onEnterCancelled---")},G=()=>{console.log("onBeforeLeave---")},I=(h,e)=>{console.log("onLeave---"),e()},P=()=>{console.log("afterLeave----")},j=()=>{console.log("leaveCancelled----")};return(h,e)=>{const w=g("a-option"),z=g("a-optgroup"),V=g("a-select"),q=g("a-button"),$=g("a-space"),B=g("a-input-number"),K=g("a-switch");return u(),v("div",de,[c("div",{class:W(["transition-wrapper",{group:s.value}])},[s.value?(u(),v("div",me,[c("div",null,[(u(),C(D(_[n.value]),{group:"",duration:d.value,delay:o.value,onBeforeEnter:S},{default:a(()=>[(u(!0),v(k,null,E(t.value,(l,f)=>(u(),C(ue,{color:l,key:l.key,index:f,"with-button":!0,onRemove:Se=>R(f)},null,8,["color","index","onRemove"]))),128))]),_:1},8,["duration","delay"]))])])):(u(),C(D(_[n.value]),{key:0,appear:"",duration:d.value,delay:o.value,onBeforeEnter:e[0]||(e[0]=()=>{S()}),onEnter:e[1]||(e[1]=()=>{X()}),onAfterEnter:e[2]||(e[2]=()=>{Y()}),onEnterCancelled:e[3]||(e[3]=()=>{Z()}),onBeforeLeave:e[4]||(e[4]=()=>{G()}),onLeave:e[5]||(e[5]=(l,f)=>{I(l,f)}),onAfterLeave:e[6]||(e[6]=()=>{P()}),onLeaveCancelled:e[7]||(e[7]=()=>{j()}),"move-class":"saber"},{default:a(()=>[r.value?(u(),v("div",ce,[c("div",pe,[c("p",null,N(n.value),1)])])):O("",!0)]),_:1},8,["duration","delay"]))],2),c("div",_e,[i($,null,{default:a(()=>[i(V,{style:{width:"320px"},modelValue:n.value,"onUpdate:modelValue":e[8]||(e[8]=l=>n.value=l)},{default:a(()=>[(u(),v(k,null,E(y,l=>i(z,{key:l.label,label:l.label},{default:a(()=>[(u(!0),v(k,null,E(l.options,f=>(u(),C(w,{key:f,value:f,label:f},null,8,["value","label"]))),128))]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"]),i(q,{onClick:T},{default:a(()=>[p(N(s.value?"\u6DFB\u52A0\u4E00\u9879":"\u5207\u6362"),1)]),_:1}),i(V,{style:{width:"320px"}},{default:a(()=>[i(w,null,{default:a(()=>[fe]),_:1}),i(w,null,{default:a(()=>[ve]),_:1}),i(w,null,{default:a(()=>[ge]),_:1})]),_:1})]),_:1})]),c("div",ye,[i($,null,{default:a(()=>[c("div",be,[he,i(B,{style:{width:"320px"},placeholder:"Please Enter Duration",modelValue:d.value,"onUpdate:modelValue":e[9]||(e[9]=l=>d.value=l),step:"100",mode:"button",class:"input-demo"},null,8,["modelValue"])]),c("div",we,[Ce,i(B,{style:{width:"320px"},placeholder:"Please Enter",modelValue:o.value,"onUpdate:modelValue":e[10]||(e[10]=l=>o.value=l),step:"100",mode:"button",class:"input-demo"},null,8,["modelValue"])]),c("div",Te,[xe,i(K,{modelValue:s.value,"onUpdate:modelValue":e[11]||(e[11]=l=>s.value=l)},{checked:a(()=>[ke]),unchecked:a(()=>[Ee]),_:1},8,["modelValue"])])]),_:1})])])}}});ae(Le).use(re,{}).mount("#app");
