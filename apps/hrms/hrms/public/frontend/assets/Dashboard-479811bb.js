import{h as g,G as u,H as b,j as B,J as M,l as V,K as $,r as C,c as w,w as v,o as l,a as n,n as c,t as N,u as r,x as j,b as i,y as D,M as L,F,q as R,N as T}from"./index-a4ebe9d4.js";import U from"./BaseLayout-f257e0f4.js";import q from"./SalarySlipItem-d1eba2c1.js";import{f as A}from"./formatters-c8b2d612.js";import"./Avatar.vue_vue_type_script_setup_true_lang-bcd6ccc1.js";import"./notifications-2188d3ee.js";const E={class:"flex flex-col items-center my-7 p-4"},G={class:"flex flex-col w-full bg-white rounded py-5 px-3.5 gap-5"},H={key:0,class:"flex flex-col w-full gap-1.5"},J=n("span",{class:"text-gray-600 text-sm font-medium leading-5"}," Year To Date ",-1),K={class:"text-gray-800 text-xl font-bold leading-6"},z={class:"flex flex-col items-center mt-5 mb-7 w-full"},I={key:0,class:"flex flex-col bg-white rounded mt-5 overflow-auto w-full"},te={__name:"Dashboard",setup(O){var p,x;let t=g({}),_=g({});const d=u("$employee"),f=u("$dayjs"),y=u("$socket"),k=b({doctype:"Payroll Period",fields:["name","start_date","end_date"],filters:{company:(p=d.data)==null?void 0:p.company},orderBy:"start_date desc",auto:!0,transform(e){return e.map(a=>(_.value[a.name]=a,{label:S(a),value:a.name}))},onSuccess:e=>{t.value=e[0]}}),s=b({doctype:"Salary Slip",fields:["name","start_date","end_date","currency","gross_pay","net_pay","year_to_date"],filters:{employee:(x=d.data)==null?void 0:x.name,docstatus:1},orderBy:"end_date desc"}),m=B(()=>{var e;return(e=s.data)==null?void 0:e[0]});function S(e){return`${f(e==null?void 0:e.start_date).format("MMM YYYY")} - ${f(e==null?void 0:e.end_date).format("MMM YYYY")}`}return M(()=>t.value,e=>{let a=_.value[e==null?void 0:e.value];s.filters.start_date=["between",[a==null?void 0:a.start_date,a==null?void 0:a.end_date]],s.reload()}),V(()=>{y.on("hrms:update_salary_slips",e=>{e.employee===d.data.name&&s.reload()})}),$(()=>{y.off("hrms:update_salary_slips")}),(e,a)=>{const P=C("router-link");return l(),w(U,{pageTitle:"Salary Slips"},{body:v(()=>{var h;return[n("div",E,[n("div",G,[m.value?(l(),c("div",H,[J,n("span",K,N(r(A)(m.value.year_to_date,m.value.currency)),1)])):j("",!0),i(r(L),{label:"Payroll Period",class:"w-full",placeholder:"Select Payroll Period",modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=o=>D(t)?t.value=o:t=o),options:r(k).data},null,8,["modelValue","options"])]),n("div",z,[(h=r(s).data)!=null&&h.length?(l(),c("div",I,[(l(!0),c(F,null,R(r(s).data,o=>(l(),c("div",{class:"p-3.5 items-center justify-between border-b cursor-pointer",key:o.name},[i(P,{to:{name:"SalarySlipDetailView",params:{id:o.name}}},{default:v(({navigate:Y})=>[i(q,{doc:o,onClick:Y},null,8,["doc","onClick"])]),_:2},1032,["to"])]))),128))])):(l(),w(T,{key:1,message:"No salary slips found"}))])])]}),_:1})}}};export{te as default};
