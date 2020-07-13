(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),i=a.n(c),r=(a(17),a(18),a(2)),o=a(3),d=a(7),s=a(4),u=a(5),h=a(9),m=a(8),f=a(6),k=function(e){var t=e.handleAddTask,a=e.task;return l.a.createElement("input",{className:"new-todo",maxLength:"25",placeholder:"What needs to be done?",value:a,onChange:function(e){return t(e.target.value)},required:!0})},p=function(e){var t=e.handleAddTask,a=e.task,n=e.handleSubmit;return l.a.createElement("form",{onSubmit:n,className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(k,{handleAddTask:t,task:a}))},g=a(1),C=a.n(g),b=(C.a.shape({remainedTasks:C.a.number.isRequired,handleShowActive:C.a.func.isRequired,handleShowCompleted:C.a.func.isRequired,handleShowAll:C.a.func.isRequired,handleClearCompleted:C.a.func.isRequired,value:C.a.number.isRequired,generalList:C.a.arrayOf(C.a.shape({task:C.a.string.isRequired,id:C.a.string.isRequired})).isRequired}),function(e){var t=e.remainedTasks,a=e.handleShowActive,n=e.handleShowCompleted,c=e.handleShowAll,i=e.handleClearCompleted,r=e.value,o=e.defaultList.length?{display:"block"}:{display:"none"},d=[{link:"#/",content:"All",onClick:c},{link:"#/active",content:"Active",onClick:a},{link:"#/completed",content:"Completed",onClick:n}];return l.a.createElement("footer",{className:"footer",style:o},l.a.createElement("span",{className:"todo-count"},"".concat(t," items left")),l.a.createElement("ul",{className:"filters"},d.map((function(e,t){return l.a.createElement("li",{key:Object(f.uuid)()},l.a.createElement("a",{onClick:function(){return e.onClick(t)},href:e.link,className:r===t?"selected":""},e.content))}))),l.a.createElement("button",{onClick:i,type:"button",className:"clear-completed"},"Clear completed"))}),v=(C.a.shape({generalList:C.a.arrayOf(C.a.shape({task:C.a.string.isRequired,id:C.a.string.isRequired})).isRequired,checkBoxId:C.a.objectOf(C.a.any).isRequired,handleChecked:C.a.func.isRequired,handleClearCompleted:C.a.func.isRequired,handleClearTask:C.a.func.isRequired,handleMarkAll:C.a.func.isRequired,isTouched:C.a.bool.isRequired}),function(e,t){return!0===t[e]?"completed":""}),S=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={defaultList:Object(d.a)(e.props.generalList),onToggle:"default",value:0},e.handleShowActive=function(t){e.setState({onToggle:"active",value:t})},e.handleShowCompleted=function(t){e.setState({onToggle:"completed",value:t})},e.handleShowAll=function(t){e.setState({onToggle:"default",value:t})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.onToggle,a=e.defaultList,n=e.value,c=this.props,i=c.checkBoxId,r=c.handleChecked,o=c.handleClearCompleted,d=c.handleClearTask,s=c.handleMarkAll,u=c.isTouched,h=Array.from(Object.values(i)).filter((function(e){return!1!==e})).length,m=a.length-h,f=[];switch(t){case"active":f=a.filter((function(e){return!0===!i[e.id]}));break;case"completed":f=a.filter((function(e){return!0===i[e.id]}));break;default:f=a}return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",onClick:function(){return s(u)},id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},f.map((function(e){return l.a.createElement("li",{className:v(e.id,i),key:e.id},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(e.id),checked:!0===i[e.id],onChange:function(t){r(e.id,t.target.checked)}}),l.a.createElement("label",null,e.task),l.a.createElement("button",{type:"button",onClick:function(){return d(e.id)},className:"destroy"})),l.a.createElement("input",{type:"text",className:"edit"}))})))),l.a.createElement(b,{remainedTasks:m,value:n,defaultList:a,handleClearCompleted:o,handleShowActive:this.handleShowActive,handleShowCompleted:this.handleShowCompleted,handleShowAll:this.handleShowAll}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.generalList!==t.defaultList?{defaultList:e.generalList}:null}}]),a}(l.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={task:"",dynamicList:JSON.parse(localStorage.getItem("dynamicList"))||[],checkBoxId:JSON.parse(localStorage.getItem("checkBoxId"))||{},isTouched:!1},e.handleAddTask=function(t){e.setState({task:t.replace(/^\s/,"").replace(/\s/g," ")})},e.handleSubmit=function(t){t.preventDefault(),e.setState((function(e){return{dynamicList:[].concat(Object(d.a)(e.dynamicList),[{task:e.task,id:Object(f.uuid)()}]),task:""}}))},e.handleChecked=function(t,a){e.setState((function(e){return{checkBoxId:Object(o.a)(Object(o.a)({},e.checkBoxId),{},Object(r.a)({},t,a))}}))},e.handleClearCompleted=function(){e.setState((function(e){return{dynamicList:e.dynamicList.filter((function(t){return!0===!e.checkBoxId[t.id]})),checkBoxId:{}}}))},e.handleClearTask=function(t){e.setState((function(e){return{dynamicList:e.dynamicList.filter((function(e){return e.id!==t}))}})),delete e.state.checkBoxId[t]},e.handleMarkAll=function(){e.setState((function(e){return{isTouched:!e.isTouched}}),(function(){!0===e.state.isTouched?e.state.dynamicList.forEach((function(t){e.setState((function(e){return{checkBoxId:Object(o.a)(Object(o.a)({},e.checkBoxId),{},Object(r.a)({},t.id,!0))}}))})):e.setState({checkBoxId:{}})}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.state,t=e.dynamicList,a=e.checkBoxId;localStorage.setItem("dynamicList",JSON.stringify(t)),localStorage.setItem("checkBoxId",JSON.stringify(a))}},{key:"render",value:function(){var e=this.state,t=e.task,a=e.dynamicList,n=e.checkBoxId,c=e.isTouched;return l.a.createElement("section",{className:"todoapp"},l.a.createElement(p,{handleAddTask:this.handleAddTask,task:t,handleSubmit:this.handleSubmit}),l.a.createElement(S,{generalList:a,checkBoxId:n,handleChecked:this.handleChecked,isTouched:c,handleMarkAll:this.handleMarkAll,handleClearTask:this.handleClearTask,handleClearCompleted:this.handleClearCompleted}))}}]),a}(l.a.Component);i.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.27c45f90.chunk.js.map