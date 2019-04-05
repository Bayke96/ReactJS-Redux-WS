(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(73)},47:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),l=n(7),s=n(18),c=n(36),u=n(20),i="DELETE_POST",m={id:0,userID:0,title:"",body:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST":return Object(u.a)({},e);case"READ_POST":return e.id=t.id,e.userID=t.userID,e.title=t.title,e.body=t.body,Object(u.a)({},e);case"UPDATE_POST":case i:return Object(u.a)({},e);case"RESET_POST_GET":return function(){for(var e=document.getElementsByClassName("mobile-response-paragraph"),t=document.getElementsByClassName("mobile-post-body"),n=document.getElementsByClassName("post-response"),a=document.getElementById("desktop-post-body"),o=0;o<e.length;++o){var r=e[o];r.innerHTML=""}for(o=0;o<t.length;++o)(r=t[o]).innerHTML="";for(o=0;o<n.length;++o)(r=n[o]).innerHTML="";a.innerText=""}(),{id:0,userID:0,title:"",body:""};case"RESET_POST_DELETE":return function(){for(var e=document.getElementsByClassName("delete-post-paragraph"),t=document.getElementsByClassName("delete-post-body"),n=0;n<e.length;++n){var a=e[n];a.innerText=""}for(n=0;n<t.length;++n)(a=t[n]).innerText=""}(),{id:0,userID:0,title:"",body:""};default:return e}},p=(n(47),n(16)),E=n(14),h=n(9),f=n(10),b=n(12),y=n(11),v=n(13),I=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){document.title="ReactJS - API Call - POST";var e=[],t=[],n=document.getElementById("new-post-userID");fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(a){e.push(a);for(var o=0;o<e[0].length;o++)t.push(e[0][o].id);for(o=0;o<t.length;o++){var r=t[o],l=document.createElement("option");l.textContent=r,l.value=r,n.appendChild(l)}})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.createPost;return o.a.createElement("div",null,o.a.createElement("h2",{className:"body-header"},"CREATE A POST"),o.a.createElement("form",{method:"POST",onSubmitCapture:function(e){e.preventDefault()},onSubmit:e},o.a.createElement("div",{className:"form-div"},o.a.createElement("p",null,o.a.createElement("b",null,"U"),"ser ",o.a.createElement("b",null,"I"),"D"),o.a.createElement("select",{id:"new-post-userID"},o.a.createElement("option",{defaultValue:!0,value:"Choose"},"Choose")),o.a.createElement("p",null,o.a.createElement("b",null,"T"),"itle"),o.a.createElement("input",{type:"text",id:"new-post-title"}),o.a.createElement("p",null,o.a.createElement("b",null,"B"),"ody"),o.a.createElement("textarea",{id:"new-post-body"})," ",o.a.createElement("br",null),o.a.createElement("div",{className:"form-buttons"},o.a.createElement("button",{onClickCapture:function(e){e.preventDefault()},onClick:e}," Create"),o.a.createElement("button",{type:"reset",id:"create-form-reset"},"Reset")))))}}]),t}(a.Component),g=n(19),D=n.n(g);var T=function(){var e=document.getElementById("delete-post-postID").value,t=document.getElementById("reset-delete-form");return function(n){return"Choose"===e?(alert("You must choose a Post ID."),!1):D()({method:"DELETE",url:"https://jsonplaceholder.typicode.com/posts/"+e,data:e,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(e){alert("Post Deleted."),t.click(),n({type:i})}).catch(function(e){if(500===e.response.status||404===e.response.status)return alert("This Post ID does not exist."),!1})}},C=Object(l.b)(function(e){return{user:e}},function(e){return{createPost:function(){return e(function(){var e=document.getElementById("new-post-userID").value,t=document.getElementById("new-post-title").value,n=document.getElementById("new-post-body").value,a=document.getElementById("create-form-reset");return function(o){if("Choose"===e)return alert("You must choose an user ID."),!1;if(""===t.trim())return alert("You must type a title for the post."),!1;if(t.trim().length<3)return alert("The post's title must contain at least 3 characters."),!1;if(""===n.trim())return alert("You must type a body for the post."),!1;if(n.trim().length<3)return alert("The post's body must contain at least 3 characters."),!1;var r=new FormData;return r.set("userId",e),r.set("title",t.trim()),r.set("body",n.trim()),D()({method:"POST",url:"https://jsonplaceholder.typicode.com/posts/",data:r,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(e){alert("New Post Created."),a.click(),o({type:"CREATE_POST"})}).catch(function(e){if(500===e.response.status||404===e.response.status)return alert("This Post ID does not exist."),!1})}}())}}})(I),P=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.post,n=e.readPost,a=e.resetPostGET;return o.a.createElement("div",null,o.a.createElement("h2",{className:"body-header"},"GET A POST"),o.a.createElement("div",{id:"get-post-info-div"},o.a.createElement("form",{id:"get-post-form",method:"GET",onSubmitCapture:function(e){e.preventDefault()},onSubmit:n},o.a.createElement("p",null,o.a.createElement("b",null,"P"),"ost ",o.a.createElement("b",null,"I"),"D"),o.a.createElement("input",{type:"text",id:"getPostID"}),o.a.createElement("div",{className:"form-buttons"},o.a.createElement("button",{type:"button",onClickCapture:function(e){e.preventDefault()},onClick:n},"Search"),o.a.createElement("button",{type:"reset",onClick:a},"Reset")))),o.a.createElement("div",{id:"post-info-mobile"},o.a.createElement("div",{className:"post-info-container"},o.a.createElement("p",null,"Post ID")),o.a.createElement("p",{className:"mobile-response-paragraph"},0===t.id?"":t.id),o.a.createElement("div",{className:"post-info-container"},o.a.createElement("p",null,"User ID")),o.a.createElement("p",{className:"mobile-response-paragraph"},0===t.userID?"":t.userID),o.a.createElement("div",{className:"post-info-container"},o.a.createElement("p",null,"Post's Title")),o.a.createElement("p",{className:"mobile-response-paragraph"},t.title),o.a.createElement("div",{className:"post-info-container"},o.a.createElement("p",null,"Post's Body")),o.a.createElement("p",{className:"mobile-post-body"},t.body)),o.a.createElement("div",{id:"post-info-desktop"},o.a.createElement("div",{id:"left-div-desktop"},o.a.createElement("h2",null,o.a.createElement("b",null,"B"),"ody"),o.a.createElement("p",{id:"desktop-post-body"},t.body)),o.a.createElement("div",{id:"right-div-desktop"},o.a.createElement("h5",null,o.a.createElement("b",null,"P"),"ost ID"),o.a.createElement("p",{className:"post-response"},0===t.id?"":t.id),o.a.createElement("h5",null,o.a.createElement("b",null,"U"),"ser ID"),o.a.createElement("p",{className:"post-response"},0===t.userID?"":t.userID),o.a.createElement("h5",null,o.a.createElement("b",null,"T"),"itle"),o.a.createElement("p",{className:"post-response"},t.title))))}}]),t}(a.Component),O=Object(l.b)(function(e){return{post:e}},function(e){return{readPost:function(){return e(function(){var e=document.getElementById("getPostID").value,t=new RegExp("^[0-9]+$");return function(n){return""===e.trim()?(alert("You must type a Post ID."),!1):!1===t.test(e)?(alert("Only positive numbers allowed."),!1):parseInt(e)<=0?(alert("Only numbers greater than 0 allowed."),!1):D.a.get("https://jsonplaceholder.typicode.com/posts/"+e).then(function(e){var t;n({type:"READ_POST",id:(t=e.data).id,userID:t.userId,title:t.title,body:t.body})}).catch(function(e){if(500===e.response.status||404===e.response.status)return alert("This Post ID does not exist."),!1})}}())},resetPostGET:function(){return e({type:"RESET_POST_GET"})}}})(P),j=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){document.title="ReactJS - API Call - UPDATE";var e=[],t=[],n=[],a=[],o=document.getElementById("update-post-userID"),r=document.getElementById("update-post-postID");fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(e){t.push(e);for(var n=0;n<t[0].length;n++)a.push(t[0][n].id);for(n=0;n<a.length;n++){var o=a[n],l=document.createElement("option");l.textContent=o,l.value=o,r.appendChild(l)}}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.push(t);for(var a=0;a<e[0].length;a++)n.push(e[0][a].id);for(a=0;a<n.length;a++){var r=n[a],l=document.createElement("option");l.textContent=r,l.value=r,o.appendChild(l)}})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.updateExistingPost;return o.a.createElement("div",null,o.a.createElement("h2",{className:"body-header"},"UPDATE AN EXISTING POST"),o.a.createElement("form",{method:"POST",onSubmitCapture:function(e){e.preventDefault()},onSubmit:e},o.a.createElement("div",{className:"form-div"},o.a.createElement("p",null,o.a.createElement("b",null,"P"),"ost ",o.a.createElement("b",null,"I"),"D"),o.a.createElement("select",{id:"update-post-postID",onChange:function(e){var t=e.target.value;"Choose"!==t?fetch("https://jsonplaceholder.typicode.com/posts/"+t).then(function(e){return e.json()}).then(function(e){document.getElementById("update-post-userID").selectedIndex=e.userId,document.getElementById("edit-post-title").value=e.title,document.getElementById("edit-post-body").value=e.body}):(document.getElementById("update-post-userID").selectedIndex=0,document.getElementById("edit-post-title").value="",document.getElementById("edit-post-body").value="")}},o.a.createElement("option",{defaultValue:!0,value:"Choose"},"Choose")),o.a.createElement("p",null,o.a.createElement("b",null,"N"),"ew ",o.a.createElement("b",null,"U"),"ser ",o.a.createElement("b",null,"I"),"D"),o.a.createElement("select",{id:"update-post-userID"},o.a.createElement("option",{defaultValue:!0,value:"Choose"},"Choose")),o.a.createElement("p",null,o.a.createElement("b",null,"N"),"ew Title"),o.a.createElement("input",{type:"text",id:"edit-post-title"}),o.a.createElement("p",null,o.a.createElement("b",null,"N"),"ew Body"),o.a.createElement("textarea",{id:"edit-post-body"})," ",o.a.createElement("br",null),o.a.createElement("div",{className:"form-buttons"},o.a.createElement("button",{onClickCapture:function(e){e.preventDefault()},onClick:e},"Update"),o.a.createElement("button",{type:"reset",id:"reset-update-form"},"Reset")))))}}]),t}(a.Component),N=Object(l.b)(function(e){return{user:e}},function(e){return{updateExistingPost:function(){return e(function(){var e=document.getElementById("update-post-postID").value,t=document.getElementById("update-post-userID").value,n=document.getElementById("edit-post-title").value,a=document.getElementById("edit-post-body").value,o=document.getElementById("reset-update-form");return function(r){if("Choose"===e)return alert("You must choose a Post ID."),!1;if("Choose"===t)return alert("You must choose an user ID."),!1;if(""===n.trim())return alert("You must type a new title for the post."),!1;if(n.trim().length<3)return alert("The post's title must contain at least 3 characters."),!1;if(""===a.trim())return alert("You must type a new body for the post."),!1;if(a.trim().length<3)return alert("The post's new body must contain at least 3 characters."),!1;var l=new FormData;return l.set("userId",t),l.set("title",n.trim()),l.set("body",a.trim()),D()({method:"PUT",url:"https://jsonplaceholder.typicode.com/posts/"+e,data:l,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(e){alert("Post Updated."),o.click(),r({type:"UPDATE_POST"})}).catch(function(e){if(500===e.response.status||404===e.response.status)return alert("This Post ID does not exist."),!1})}}())}}})(j),B=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){document.title="ReactJS - API Call - DELETE";var e=[],t=[],n=document.getElementById("delete-post-postID");fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(a){e.push(a);for(var o=0;o<e[0].length;o++)t.push(e[0][o].id);for(o=0;o<t.length;o++){var r=t[o],l=document.createElement("option");l.textContent=r,l.value=r,n.appendChild(l)}})},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.deleteExistingPost,n=e.resetPostDELETE;return o.a.createElement("div",null,o.a.createElement("h2",{className:"body-header"},"DELETE AN EXISTING POST"),o.a.createElement("form",{method:"POST",onSubmitCapture:function(e){e.preventDefault()},onSubmit:t},o.a.createElement("div",{className:"form-div"},o.a.createElement("p",null,o.a.createElement("b",null,"P"),"ost ",o.a.createElement("b",null,"I"),"D"),o.a.createElement("select",{id:"delete-post-postID",onChange:function(e){var t=e.target.value;"Choose"!==t?fetch("https://jsonplaceholder.typicode.com/posts/"+t).then(function(e){return e.json()}).then(function(e){document.getElementById("delete-post-userID").innerText=e.userId,document.getElementById("delete-post-title").innerText=e.title,document.getElementById("delete-post-body").innerText=e.body}):(document.getElementById("delete-post-userID").innerText="",document.getElementById("delete-post-title").innerText="",document.getElementById("delete-post-body").innerText="")}},o.a.createElement("option",{defaultValue:!0},"Choose")),o.a.createElement("p",null,o.a.createElement("b",null,"U"),"ser ",o.a.createElement("b",null,"I"),"D"),o.a.createElement("p",{className:"delete-post-paragraph",id:"delete-post-userID"}),o.a.createElement("p",null,o.a.createElement("b",null,"T"),"itle"),o.a.createElement("p",{className:"delete-post-paragraph",id:"delete-post-title"}),o.a.createElement("p",null,o.a.createElement("b",null,"B"),"ody"),o.a.createElement("p",{className:"delete-post-body",id:"delete-post-body"}),o.a.createElement("div",{className:"form-buttons"},o.a.createElement("button",{onClickCapture:function(e){e.preventDefault()},onClick:t},"Delete"),o.a.createElement("button",{type:"reset",onClick:n,id:"reset-delete-form"},"Reset")))))}}]),t}(a.Component),S=Object(l.b)(function(e){return{user:e}},function(e){return{deleteExistingPost:function(){return e(T())},resetPostDELETE:function(){return e({type:"RESET_POST_DELETE"})}}})(B),x=function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:""},o.a.createElement("button",{className:"header-button"},o.a.createElement(p.b,{to:"/create"},"Create")),o.a.createElement("button",{className:"header-button"},o.a.createElement(p.b,{to:"/read"},"Read")),o.a.createElement("button",{className:"header-button"},o.a.createElement(p.b,{to:"/update"},"Update")),o.a.createElement("button",{className:"header-button"},o.a.createElement(p.b,{to:"/delete"},"Delete"))),o.a.createElement(E.a,{exact:!0,path:"/",component:O}),o.a.createElement(E.a,{path:"/create",component:C}),o.a.createElement(E.a,{path:"/read",component:O}),o.a.createElement(E.a,{path:"/update",component:N}),o.a.createElement(E.a,{path:"/delete",component:S})))},w=(n(72),Object(s.c)(d,Object(s.a)(c.a)));Object(r.render)(o.a.createElement(l.a,{store:w},o.a.createElement(x,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9422145b.chunk.js.map