var y=Object.defineProperty,b=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(i,e,t)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,u=(i,e)=>{for(var t in e||(e={}))v.call(e,t)&&d(i,t,e[t]);if(f)for(var t of f(e))w.call(e,t)&&d(i,t,e[t]);return i},h=(i,e)=>b(i,k(e));var _=(i,e,t)=>new Promise((s,n)=>{var m=r=>{try{a(t.next(r))}catch(l){n(l)}},o=r=>{try{a(t.throw(r))}catch(l){n(l)}},a=r=>r.done?s(r.value):Promise.resolve(r.value).then(m,o);a((t=t.apply(i,e)).next())});import{a as C}from"./componentMap-CMv1Xb5N.js";import"./entry/index-D8YYXnE2-1709615158874.js";import"./helper-CX1_lctI.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CMv04h1m.js";import"./antd-BS7GgtZr.js";import"./index-DMQFk0t8.js";import"./TableImg.vue_vue_type_style_index_0_lang-TnY7Rofj.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import{g as S}from"./system-DWxP3g4T.js";import{P as A}from"./index-aspJk_2k.js";import{_ as B}from"./DeptTree.vue_vue_type_script_setup_true_lang-BFFSAYJV.js";import{d as P}from"./account.data-B5saiW1J.js";import{V as R}from"./index-B43Y7teI.js";import{d as T,f as g,r as V,Z as I,a8 as N,a9 as x,k as c,$,u as p,ac as q}from"./vue-COhTiP8A.js";import"./useFormItem-CGQuU2J0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-Dgy61hAT.js";import"./useSortable-C9nuzYSo.js";import"./download-DnCqQgGQ.js";import"./base64Conver-bBv-IO2K.js";import"./index-DJw5gGQ7.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-Bn3e_oun.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-DW-OU30-.js";import"./index-Ch7YOX5N.js";import"./useWindowSizeFn-jaUQjqgc.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useContentViewHeight-DWl9sgFK.js";import"./index-DembzvQm.js";import"./useContextMenu-CbV1JlcV.js";const z=[{title:"用户名",field:"account",width:120},{title:"昵称",field:"nickname",width:120},{title:"邮箱",field:"email",width:120},{title:"创建时间",field:"createTime",width:180},{title:"角色",field:"role",width:200},{title:"所属部门",field:"dept",slots:{default:({row:i})=>P[i.dept]}},{title:"备注",field:"remark"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],F=[{field:"account",title:"用户名",itemRender:{name:"AInput"},span:6},{field:"nickname",title:"昵称",itemRender:{name:"AInput"},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}],H={class:"m-4 vxebasic-form-container"},_e=T({__name:"index",setup(i){const e=g(),t=g(),s=V({id:"VxeTable",keepSource:!0,columns:z,formConfig:{enabled:!0,items:F},height:"auto",proxyConfig:{ajax:{query:r=>_(this,[r],function*({page:o,form:a}){return S(h(u({page:o.currentPage,pageSize:o.pageSize},a),{searchInfo:t.value}))})}}}),n=(o="")=>{t.value=o,e.value&&e.value.commitProxy("query")},m=o=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var r;(r=e.value)==null||r.remove(o)}}}];return(o,a)=>(I(),N(p(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x(()=>[c(B,{class:"w-1/4 xl:w-1/5",onSelect:n}),$("div",H,[c(p(R),q({ref_key:"tableRef",ref:e},s),{action:x(({row:r})=>[c(p(C),{outside:"",actions:m(r)},null,8,["actions"])]),_:1},16)])]),_:1}))}});export{_e as default};
