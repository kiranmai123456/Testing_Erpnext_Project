import{a5 as p,e as _,f as g,j as d,o as s,n as v,c as u,u as m,x as I,a as h,t as x}from"./index-a4ebe9d4.js";import{_ as c}from"./Avatar.vue_vue_type_script_setup_true_lang-bcd6ccc1.js";let f=p({}),y=p({});_({url:"hrms.api.get_all_employees",auto:!0,transform(a){return a.map(e=>(e.isActive=e.status==="Active",f[e.name]=e,y[e.user_id]=e,e))},onError(a){a&&a.exc_type==="AuthenticationError"&&router.push({name:"Login"})}});function B(a){return a||(a=g.data.name),f[a]}function D(a){return y[a]}const b={key:0,class:"flex flex-row items-center gap-2"},z={class:"text-base text-gray-800 grow"},S={__name:"EmployeeAvatar",props:{employeeID:{type:String,required:!1},userID:{type:String,required:!1},size:{type:String,default:"sm"},showLabel:{type:Boolean,default:!1}},setup(a){const e=a,t=d(()=>{if(e.employeeID)return B(e.employeeID);if(e.userID)return D(e.userID)});return(k,E)=>{var r,l,o,n,i;return a.showLabel?(s(),v("div",b,[t.value?(s(),u(m(c),{key:0,label:(r=t.value)==null?void 0:r.employee_name,image:(l=t.value)==null?void 0:l.image,size:e.size},null,8,["label","image","size"])):I("",!0),h("div",z,x((o=t.value)==null?void 0:o.employee_name),1)])):(s(),u(m(c),{key:1,label:(n=t.value)==null?void 0:n.employee_name,image:(i=t.value)==null?void 0:i.image,size:e.size},null,8,["label","image","size"]))}}};export{S as default};
