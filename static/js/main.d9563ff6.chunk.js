(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(9),s=a.n(c),o=a(7),i=a(6),l=a(2),u=a(3),j=a(5),d=a(4),f=(a(15),a(0)),m=function(){return Object(f.jsxs)("h1",{children:["Todo App ",Object(f.jsx)("i",{className:"fas fa-check-square"})]})},b=a(10),h=(a(17),function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.challenge,a=t.onDelete,n=t.makeDone,r=t.makeImportant,c=t.important,s="innerTodo";return t.done&&(s+=" completed "),Object(f.jsxs)("span",{className:s,children:[Object(f.jsxs)("div",{className:"todoContent",children:[Object(f.jsx)("span",{children:e})," ",c?Object(f.jsx)("i",{className:"fas fa-star"}):null]}),Object(f.jsxs)("div",{className:"TodoButtons",children:[Object(f.jsx)("button",{className:"done",title:"done",onClick:n,children:Object(f.jsx)("i",{className:"fas fa-check"})}),Object(f.jsx)("button",{className:"importantBtn",onClick:r,children:Object(f.jsx)("i",{className:"fas fa-star"})}),Object(f.jsx)("button",{className:"delete",title:"delete",onClick:a,children:Object(f.jsx)("i",{className:"fas fa-trash-alt"})})]})]})}}]),a}(r.a.Component)),O=(a(18),["id"]),p=function(t){var e=t.Todos,a=t.onDelete,n=t.makeImportant,r=t.makeDone,c=e.map((function(t){var e=t.id,c=Object(b.a)(t,O);return Object(f.jsx)("li",{className:"todoItem",id:e,children:Object(f.jsx)(h,Object(o.a)({onDelete:function(){return a(e)},makeImportant:function(){n(e)},makeDone:function(){return r(e)}},c))},e)}));return Object(f.jsx)("ul",{className:"todoList",children:c})},k=(a(19),a(20),function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.searchChange=function(e){var a=e.target.value;t.setState({term:a}),t.props.setTerm(t.state.term)},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props.setTerm;return Object(f.jsxs)("div",{className:"searchPanel",children:[Object(f.jsx)("input",{className:"search",placeholder:"Search...",onChange:function(e){t(e.target.value)}}),Object(f.jsx)("i",{className:"fas fa-search searchDecoration"})]})}}]),a}(r.a.Component)),v=(a(21),function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).buttonsData=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.setFilter,a=t.filter,n=this.buttonsData.map((function(t){return Object(f.jsx)("button",{className:a===t.name?"active":null,onClick:function(){return e(t.name)},children:t.label},t.name)}));return Object(f.jsx)("div",{className:"filterPanel",children:n})}}]),a}(r.a.Component)),x=function(t){var e=t.setTerm,a=t.setFilter,n=t.filter;return Object(f.jsxs)("div",{className:"mainPanel",children:[Object(f.jsx)(k,{setTerm:e}),Object(f.jsx)(v,{setFilter:a,filter:n})]})},D=(a(22),a(23),function(t){return Object(f.jsxs)("div",{className:"stats",children:[" ",t.toDoCount," done, ",t.toDoLeft," more to do"]})}),N=(a(24),function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={taskName:""},t.newTaskName=function(e){t.setState((function(){return{taskName:e.target.value}}))},t.createTask=function(e){e.preventDefault(),t.props.onCreate(t.state.taskName),t.setState({taskName:""})},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"createTask",onSubmit:this.createTask,children:[Object(f.jsx)("input",{className:"taskInput",placeholder:"Type task...",onChange:this.newTaskName,value:this.state.taskName,required:!0}),Object(f.jsx)("button",{className:"taskButton",children:"Create New Task"})]})}}]),a}(r.a.Component)),T=function(t){Object(j.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).startId=1,t.state={todoData:[t.createTask("Drink Tea"),t.createTask("Make Awesome React App"),t.createTask("Eat Pizza")],term:"",filter:"all"},t.addTask=function(e){t.setState((function(a){var n=a.todoData;return{todoData:[].concat(Object(i.a)(n),[t.createTask(e)])}}))},t.deleteTask=function(e){t.setState((function(t){var a=t.todoData,n=a.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(i.a)(a.slice(0,n)),Object(i.a)(a.slice(n+1)))}}))},t.makeImportant=function(e){t.setState((function(a){var n=a.todoData,r=n.findIndex((function(t){return t.id===e}));console.log(n[r].important);var c=Object(o.a)(Object(o.a)({},n[r]),{},{important:!t.state.todoData[r].important});return{todoData:[].concat(Object(i.a)(n.slice(0,r)),[c],Object(i.a)(n.slice(r+1)))}}))},t.makeDone=function(e){t.setState((function(a){var n=a.todoData,r=n.findIndex((function(t){return t.id===e})),c=Object(o.a)(Object(o.a)({},n[r]),{},{done:!t.state.todoData[r].done});return console.log(n[r].done),{todoData:[].concat(Object(i.a)(n.slice(0,r)),[c],Object(i.a)(n.slice(r+1)))}}))},t.setTerm=function(e){t.setState((function(){return{term:e}}))},t.search=function(t,e){return""===e?t:t.filter((function(t){return t.challenge.toLowerCase().indexOf(e.toLowerCase())>-1}))},t.filter=function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}},t.setFilter=function(e){t.setState({filter:e})},t}return Object(u.a)(a,[{key:"createTask",value:function(t){return{challenge:t,important:!1,done:!1,id:this.startId++}}},{key:"render",value:function(){var t=this.state,e=t.todoData,a=t.term,n=t.filter,r=this.state.todoData.filter((function(t){return t.done})).length,c=this.state.todoData.length-r,s=this.filter(this.search(e,a),this.state.filter);return Object(f.jsxs)("main",{className:"main",children:[Object(f.jsx)(m,{}),Object(f.jsx)(x,{setTerm:this.setTerm,setFilter:this.setFilter,filter:n}),Object(f.jsx)(D,{toDoCount:r,toDoLeft:c}),Object(f.jsx)(p,{onDelete:this.deleteTask,makeImportant:this.makeImportant,makeDone:this.makeDone,Todos:s}),Object(f.jsx)(N,{onCreate:this.addTask})]})}}]),a}(r.a.Component);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.d9563ff6.chunk.js.map