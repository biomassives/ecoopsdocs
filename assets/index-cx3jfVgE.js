var k=(C,u,s)=>new Promise((r,l)=>{var d=t=>{try{i(s.next(t))}catch(n){l(n)}},m=t=>{try{i(s.throw(t))}catch(n){l(n)}},i=t=>t.done?r(t.value):Promise.resolve(t.value).then(d,m);i((s=s.apply(C,u)).next())});import{P as x}from"./index-aspJk_2k.js";import{aL as v}from"./entry/index-D8YYXnE2-1709615158874.js";import{u as R}from"./index-DTKIrnCf.js";import{U as b,V as y,R as w,Y as g,j as _}from"./antd-BS7GgtZr.js";import{d as T,a7 as V,Z as $,a8 as B,a9 as e,k as o,u as a,G as f,$ as h}from"./vue-COhTiP8A.js";import"./useContentViewHeight-DWl9sgFK.js";import"./useWindowSizeFn-jaUQjqgc.js";import"./onMountedOrActivated-GpUdBAv_.js";const E=h("div",{class:"mt-4"},"打开浏览器的 network 面板，可以看到发出了六次请求",-1),N=h("div",{class:"mt-4"},"错误重试，retryInterval 如果不设置，默认采用简易的指数退避算法，取 1000 * 2 ** retryCount，也就是第一次重试等待 2s，第二次重试等待 4s，以此类推，如果大于 30s，则取 30s ",-1),U=T({__name:"index",setup(C){const u=()=>k(this,null,function*(){yield v()});function s(){return new Promise((n,c)=>{setTimeout(()=>{c(`TimeError: ${Date.now()}`)},1300)})}let r=0;const{loading:l,run:d,cancel:m}=R(s,{manual:!0,retryCount:5,onError(n){r===0&&(_.error("发现错误"),r++);const c=Date.now();_.error(`第 ${r++} 次重试, Time:${c}`)}}),i=()=>{r=0,d()},t=()=>{r=0,m(),_.info("已取消")};return(n,c)=>{const p=V("a-button");return $(),B(a(x),{title:"错误重试"},{default:e(()=>[o(a(b),{gutter:16},{default:e(()=>[o(a(y),{span:8},{default:e(()=>[o(a(w),{title:"Axios 错误重试"},{default:e(()=>[o(p,{onClick:u,type:"primary"},{default:e(()=>[f(" 点击会重新发起请求5次 ")]),_:1}),E]),_:1})]),_:1}),o(a(y),{span:8},{default:e(()=>[o(a(w),{title:"hooks 错误重试"},{default:e(()=>[o(a(g),null,{default:e(()=>[o(p,{onClick:i,type:"primary",disabled:a(l)},{default:e(()=>[f(" 使用 hooks 发起重试 ")]),_:1},8,["disabled"]),o(p,{onClick:t},{default:e(()=>[f("取消")]),_:1})]),_:1}),N]),_:1})]),_:1})]),_:1})]),_:1})}}});export{U as default};
