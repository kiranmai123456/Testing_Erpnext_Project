import{a5 as u}from"./index-a4ebe9d4.js";const r=u({});function a(e,i,t){n(e,i),e.on("list_update",s=>{s.doctype==i&&t(s.name)})}function n(e,i){r[i]||(e.emit("doctype_subscribe",i),r[i]=!0)}export{a as u};