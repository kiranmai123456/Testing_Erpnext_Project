(()=>{var B=Object.defineProperty;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var S=(i,e,t)=>e in i?B(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,N=(i,e)=>{for(var t in e||(e={}))E.call(e,t)&&S(i,t,e[t]);if(k)for(var t of k(e))I.call(e,t)&&S(i,t,e[t]);return i};frappe.ui.OnboardingTour=class{constructor(){this.driver_steps=[],this.last_step_saved=null,this.last_element_clicked=null}init_driver(){this.driver=new frappe.Driver({className:"frappe-driver",allowClose:!1,padding:10,overlayClickNext:!1,keyboardControl:!1,nextBtnText:__("Next"),prevBtnText:__("Previous"),doneBtnText:__("Done"),closeBtnText:__("Skip"),opacity:.5,onHighlighted:e=>{var n;frappe.ui.next_form_tour=(n=e.options.step_info)==null?void 0:n.next_form_tour;let t=setInterval(()=>{var p,a;!e.popover.node||((p=e.options.step_info)!=null&&p.offset_x&&(e.popover.node.style.left=`${e.popover.node.offsetLeft+e.options.step_info.offset_x}px`),(a=e.options.step_info)!=null&&a.offset_y&&(e.popover.node.style.top=`${e.popover.node.offsetTop+e.options.step_info.offset_y}px`),e.popover.node.offsetLeft<0&&(e.popover.node.style.minWidth="200px",e.popover.node.style.maxWidth=`${350+e.popover.node.offsetLeft}px`,e.popover.node.style.left="0px"),e.popover.closeBtnNode&&(e.popover.closeBtnNode.onclick=()=>{this.on_finish&&this.on_finish(),!frappe.boot.user.onboarding_status[this.tour.name]&&(frappe.boot.user.onboarding_status[this.tour.name]={}),frappe.boot.user.onboarding_status[this.tour.name].is_complete=!0,this.driver.hasNextStep()||(frappe.boot.user.onboarding_status[this.tour.name].all_steps_completed=!0),frappe.call({method:"frappe.desk.doctype.form_tour.form_tour.update_user_status",args:{value:JSON.stringify(frappe.boot.user.onboarding_status),step:JSON.stringify(e.options.step_info)}})}),clearInterval(t))},300),r=$(e.node).find("input").get(0);r&&frappe.utils.sleep(200).then(()=>r.focus())}})}async init({tour_name:e,start_step:t}){this.tour=await frappe.db.get_doc("Form Tour",e),this.init_driver(),this.build_steps(),this.update_driver_steps(),this.tour.track_steps||(t=0),this.start(t)}build_steps(){this.driver_steps=[],this.tour.steps.forEach(e=>{let t=async n=>{var a;let p=this.driver.steps.indexOf(n);p==-1||((a=this.last_step_saved)==null?void 0:a.name)==e.name||(frappe.boot.user.onboarding_status[this.tour.name]={steps_complete:p},this.driver.hasNextStep()||(this.on_finish&&this.on_finish(),frappe.boot.user.onboarding_status[this.tour.name].is_complete=!0),this.last_step_saved=e,frappe.call({method:"frappe.desk.doctype.form_tour.form_tour.update_user_status",args:{value:JSON.stringify(frappe.boot.user.onboarding_status),step:JSON.stringify(e)}}))},r=this.get_step(e,t);r.element&&this.driver_steps.push(r)})}get_step(e,t){let{name:r,element_selector:n,title:p,description:a,ondemand_description:l,position:_,parent_element_selector:s,hide_buttons:o,next_on_click:d,popover_element:v,modal_trigger:c}=e,u=cur_page==null?void 0:cur_page.page.querySelector(n);!u&&(u=document.querySelector(n)),u&&s&&(u=u.closest(s)),u&&(d||o||c)&&$(u).on("click",()=>{var y,x;if(!this.driver.getHighlightedElement()||((y=this.driver.getHighlightedElement().node.id)==null?void 0:y.startsWith("popover")))return;if(c&&(!this.last_element_clicked||new Date().getTime()-new Date(this.last_element_clicked).getTime()>1e3)){this.last_element_clicked=new Date().getTime(),this.handle_modal_steps(this.driver.currentStep,p,l);return}if(v||(t(this.driver.getHighlightedElement()),this.driver.moveNext(),this.driver.overlay.refresh()),!this.driver.getHighlightedElement())return;t(this.driver.getHighlightedElement());let h=this.driver.getHighlightedElement().node.getAttribute("aria-describedby")?this.driver.getHighlightedElement().node:this.driver.getHighlightedElement().node.querySelector('[aria-describedby^="popover"]');if(!h)return;let g=h.getAttribute("aria-describedby"),b=this.driver.steps.indexOf(this.driver.getHighlightedElement());if(((x=this.driver_steps[b+1])==null?void 0:x.element.id)==g)return;this.driver_steps=this.driver_steps.filter(w=>{var T;return!((T=w.element.id)!=null&&T.startsWith("popover"))});let f=N({},this.driver_steps[b]);f.element=document.getElementById(g),f.showButtons=!1,l&&(f.popover.description=l),this.driver_steps.splice(this.driver.currentStep+1,0,f),this.update_driver_steps(),this.driver.moveNext(),this.driver.overlay.refresh(),$(h).one("hide.bs.popover",w=>{this.driver_steps.splice(this.driver.currentStep,1),this.driver_steps[this.driver.currentStep-1].showButtons=!0,f.popover.description=a,this.update_driver_steps(),this.driver.movePrevious(),this.driver.overlay.refresh()})});let m=!0;return(v||o)&&(m=!1),{element:u,name:r,popover:{title:p,description:a,position:frappe.router.slug(_||"Bottom")},onNext:t,step_info:e,showButtons:m}}update_driver_steps(e=[]){e.length==0&&(e=this.driver_steps),this.driver.defineSteps(e)}start(e=0){this.driver_steps.length!=0&&this.driver.start(e)}handle_modal_steps(e,t,r){setTimeout(()=>{let n=$(".modal-content"),p={element:n[0],allowClose:!1,overlayClickNext:!1,popover:{title:t,description:r,position:"left-center",doneBtnText:__("Next")}};this.driver_steps.splice(e+1,0,p),this.update_driver_steps(),this.driver.reset(),this.driver.start(e+1),this.driver.overlay.refresh(),n.closest(".modal").one("hide.bs.modal",()=>{this.driver_steps.splice(this.driver.currentStep,1),this.update_driver_steps(),this.driver.movePrevious(),this.driver.moveNext(),this.driver.overlay.refresh()})},500)}};frappe.ui.init_onboarding_tour=()=>{var _;if(!window.matchMedia("(min-device-width: 992px)").matches)return;typeof frappe.boot.onboarding_tours=="undefined"&&frappe.boot.onboarding_tours==[],typeof frappe.boot.user.onboarding_status=="undefined"&&frappe.boot.user.onboarding_status=={};let i=frappe.router.current_route;if(i[0]==="")return;let e,t=[],r;if(i[0]=="query-report"&&(i=["List",i[1],"Report"]),i[0]!="dashboard-view"&&frappe.boot.onboarding_tours&&frappe.boot.onboarding_tours.forEach(s=>{let o=s[1],d=Math.min(i.length,o.length);d>=1&&i[0]!=o[0]||d>=2&&o[1]!="*"&&i[1]!=o[1]||d>=3&&["*","new-*"].indexOf(o[2])==-1&&i[2]!=o[2]||t.push(s)}),t=t.filter(s=>{var o;return((o=frappe.boot.user.onboarding_status[s[0]])==null?void 0:o.is_complete)!=!0}),t=t.map(s=>{var o;return((o=frappe.boot.user.onboarding_status[s[0]])==null?void 0:o.steps_complete)!=null&&s.push(frappe.boot.user.onboarding_status[s[0]].steps_complete),s}),t.length==0)return;let n=t.find(s=>{var o,d;return s[0]==((d=(o=frappe.ui.currentTourInstance)==null?void 0:o.tour)==null?void 0:d.name)}),p=t.find(s=>s[0]==frappe.ui.next_form_tour);if(n?(e=n[0],r=n.at(-1),typeof r!="number"&&(r=0)):p?(e=p[0],r=p.at(-1),typeof r!="number"?r=0:r+=1,frappe.ui.next_form_tour=void 0):(e=t[0][0],r=t[0].at(-1),typeof r!="number"?r=0:r+=1),!e)return;(_=frappe.ui.currentTourInstance)!=null&&_.driver&&(frappe.ui.currentTourInstance.driver_steps=[],frappe.ui.currentTourInstance.driver.reset(!0),frappe.ui.currentTourInstance.update_driver_steps());let a=frappe.ui.currentTourInstance=new frappe.ui.OnboardingTour,l=setInterval(()=>{cur_page!=null&&cur_page.page.querySelector(".workspace-sidebar-skeleton")||cur_page!=null&&cur_page.page.querySelector(".workspace-skeleton")||document.body.getAttribute("data-ajax-state")==="complete"&&frappe.utils.sleep(500).then(()=>{a.init({tour_name:e,start_step:r}),clearInterval(l)})},100)};frappe.router.on("change",()=>{frappe.ui.init_onboarding_tour()});})();
//# sourceMappingURL=onboarding_tours.bundle.O3ZS5LFF.js.map
