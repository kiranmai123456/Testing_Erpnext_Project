import{G as _,r as f,o as n,c as m,w as a,b as t,a as e,t as u,u as s,p,n as x,x as h,O as b,P as g,Q as w,R as k}from"./index-a4ebe9d4.js";import{_ as v}from"./Avatar.vue_vue_type_script_setup_true_lang-bcd6ccc1.js";import{u as y}from"./notifications-2188d3ee.js";const C={class:"w-full sm:w-96"},B={class:"flex flex-col bg-white shadow-sm p-4"},N={class:"flex flex-row justify-between items-center"},$={class:"flex flex-row items-center gap-2"},I={class:"text-xl font-bold text-gray-900"},P={class:"flex flex-row items-center gap-3 ml-auto"},S=["onClick"],V={key:0,class:"absolute top-0 right-0.5 inline-block w-2 h-2 bg-red-600 rounded-full border border-white"},j={class:"flex flex-col h-screen w-screen sm:w-96"},z={__name:"BaseLayout",props:{pageTitle:{type:String,required:!1,default:"Frappe HR"}},setup(i){const r=i,o=_("$user");return(c,H)=>{const l=f("router-link");return n(),m(s(k),null,{default:a(()=>[t(s(b),{class:"ion-no-border"},{default:a(()=>[e("div",C,[e("div",B,[e("div",N,[e("div",$,[e("h2",I,u(r.pageTitle),1)]),e("div",P,[t(l,{to:{name:"Notifications"},class:"flex flex-col items-center"},{default:a(({navigate:d})=>[e("span",{class:"relative inline-block",onClick:d},[t(s(p),{name:"bell",class:"h-6 w-6"}),s(y).data?(n(),x("span",V)):h("",!0)],8,S)]),_:1}),t(l,{to:{name:"Profile"},class:"flex flex-col items-center"},{default:a(()=>[t(s(v),{image:s(o).data.user_image,label:s(o).data.first_name,size:"xl"},null,8,["image","label"])]),_:1})])])])])]),_:1}),t(s(w),{class:"ion-no-padding"},{default:a(()=>[e("div",j,[g(c.$slots,"body")])]),_:3})]),_:3})}}};export{z as default};
