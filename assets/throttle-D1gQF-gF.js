import{i as s}from"./mock-api-DgooW6Mo.js";import{P as p}from"./index-aspJk_2k.js";import{b6 as t,G as d,Y as i,E as f,R as F}from"./antd-BS7GgtZr.js";import{d as r,k as u,f as m,G as e}from"./vue-COhTiP8A.js";import{u as E}from"./index-DTKIrnCf.js";import"./entry/index-D8YYXnE2-1709615158874.js";import"./useContentViewHeight-DWl9sgFK.js";import"./useWindowSizeFn-jaUQjqgc.js";import"./onMountedOrActivated-GpUdBAv_.js";const c=r({setup(){const a=m(""),{data:l,loading:n}=E(s,{throttleWait:1e3,refreshDeps:[a]});return()=>u(F,{title:"节流"},{default:()=>[u(t,null,{default:()=>[u(t.Paragraph,null,{default:()=>[e("通过设置"),u(t.Text,{type:"danger"},{default:()=>[e(" options.throttleWait ")]}),e("，进入节流模式，此时如果频繁触发"),u(t.Text,{code:!0},{default:()=>[e(" run ")]}),e("或者"),u(t.Text,{code:!0},{default:()=>[e(" runAsync ")]}),e(", 则会以节流策略进行请求。")]}),u(t.Paragraph,null,{default:()=>[u(t.Text,{code:!0},{default:()=>["const { data, run } = useRequest(imitateApi, { throttleWait: 300, manual: true });"]})]}),u(t.Paragraph,null,{default:()=>[e("如上示例代码，频繁触发"),u(t.Text,{code:!0},{default:()=>[e(" run ")]}),e(", 300ms 执行一次。")]}),u(t.Paragraph,null,{default:()=>[e("你可以在下面 input 框中快速输入文本，体验效果")]})]}),u(d,{spinning:n.value},{default:()=>[u(i,{direction:"vertical"},{default:()=>[u(f,{value:a.value,"onUpdate:value":o=>a.value=o,placeholder:"Please enter username"},null),u("div",null,[e("Username: "),l.value])]})]})]})}}),T=r({setup(){return()=>u(p,null,{default:()=>[u(c,null,null)]})}});export{T as default};
