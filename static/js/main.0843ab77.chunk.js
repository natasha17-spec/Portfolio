(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(23),r=t.n(o),i=(t(67),t(9)),l=t(11),s=t(10),m=(t(68),t(31)),p=t.n(m),_=t(49),d=t(14),u=t.n(d),v=t(15),E=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).scrollToTop=function(){v.animateScroll.scrollToTop()},e}return Object(_.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:u.a.navMenu},c.a.createElement("a",{href:"#main",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",to:"main",spy:!0,smooth:!0,offset:-70,duration:700},"Main")),c.a.createElement("a",{href:"#skills",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",spy:!0,to:"skills",smooth:!0,offset:-70,duration:700},"Skills")),c.a.createElement("a",{href:"#project",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",to:"project",spy:!0,smooth:!0,offset:-70,duration:700},"Project")),c.a.createElement("a",{href:"#contact",className:u.a.link,onClick:this.scrollToTop},c.a.createElement(v.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:700},"Contact")))}}]),t}(c.a.Component);var h=function(){return c.a.createElement("div",{className:p.a.headerBox},c.a.createElement("div",{className:p.a.headerContainer},c.a.createElement(E,null)))},f=t(12),k=t.n(f);var g=function(){return c.a.createElement("div",{className:k.a.main,id:"main"},c.a.createElement("div",{className:k.a.container},c.a.createElement("div",{className:k.a.greeting},c.a.createElement("span",null,"Hi!"),c.a.createElement("span",null,"My name is ",c.a.createElement("span",null,"Nataliya Gerasimovich")),c.a.createElement("div",{className:k.a.greetingIam},c.a.createElement("h1",{className:k.a.title},"I'm Frontend developer"))),c.a.createElement("div",{className:k.a.mainPhoto},c.a.createElement("div",null))))},b=t(2),j=t.n(b),N=t(24),S=t.n(N),P=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).render=function(){return c.a.createElement("div",{className:S.a.skillBox},c.a.createElement("span",{className:S.a.skillTitle},e.props.title),c.a.createElement("span",{className:S.a.skillDescription},e.props.description))},e}return t}(c.a.Component),x=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).render=function(){return c.a.createElement("div",{className:j.a.skills,id:"skills"},c.a.createElement("div",{className:j.a.wrapper},c.a.createElement("div",{className:j.a.skillTitle},c.a.createElement("span",{name:"top"}," My skills "),c.a.createElement("div",{className:j.a.moduleLine})),c.a.createElement("div",{className:j.a.skillsWrapper},c.a.createElement("div",{className:j.a.paddings_one},c.a.createElement("div",{className:j.a.icon}),c.a.createElement(P,{title:e.props.tasks[0].title})),c.a.createElement("div",{className:j.a.paddings_one},c.a.createElement("div",{className:j.a.icon1}),c.a.createElement(P,{title:e.props.tasks[1].title})),c.a.createElement("div",{className:j.a.paddings_one},c.a.createElement("div",{className:j.a.icon2}),c.a.createElement(P,{title:e.props.tasks[2].title})),c.a.createElement("div",{className:j.a.paddings_one},c.a.createElement("div",{className:j.a.icon3}),c.a.createElement(P,{title:e.props.tasks[3].title})),c.a.createElement("div",{className:j.a.paddings_one},c.a.createElement("div",{className:j.a.icon4}),c.a.createElement(P,{title:e.props.tasks[4].title})),c.a.createElement("div",{className:j.a.paddings_one},c.a.createElement("div",{className:j.a.icon5}),c.a.createElement(P,{title:e.props.tasks[5].title})))))},e}return t}(c.a.Component),C=t(16),T=t.n(C),w=t(13);var L=function(){return c.a.createElement(w.Flip,{top:!0},c.a.createElement("div",{className:T.a.slogan},c.a.createElement("div",{className:T.a.sloganContainer},c.a.createElement("span",{className:T.a.sloganTitle},"I Am Available For Freelancer"),c.a.createElement("div",{className:T.a.wrapper},c.a.createElement("a",{href:"#!",className:T.a.btn}," Hire me",c.a.createElement("svg",null,c.a.createElement("rect",null)))))))},y=t(25),M=t(5),R=t.n(M);function O(e){var a=Object(n.useState)(""),t=Object(y.a)(a,2),o=t[0],r=t[1],i=Object(n.useState)(""),l=Object(y.a)(i,2),s=l[0],m=l[1],p=Object(n.useState)(""),_=Object(y.a)(p,2),d=_[0],u=_[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:R.a.form,id:"contact-form",onSubmit:function(a){a.preventDefault(),e.onSubmit(o,s,d)}},c.a.createElement(w.Fade,{bottom:!0},c.a.createElement("input",{className:R.a.formArea,type:"text",placeholder:"Name",id:"name",value:o,onChange:function(e){return r(e.currentTarget.value)}})),c.a.createElement(w.Fade,{bottom:!0},c.a.createElement("input",{className:R.a.formArea,type:"text",placeholder:"E-mail",id:"e_mail",value:s,onChange:function(e){return m(e.currentTarget.value)}})),c.a.createElement(w.Fade,{bottom:!0},c.a.createElement("textarea",{className:R.a.formArea,type:"text",placeholder:"Message",id:"message",value:d,onChange:function(e){return u(e.currentTarget.value)}})),c.a.createElement("div",{className:R.a.wrapper},c.a.createElement("button",{className:R.a.btn},"Send Message",c.a.createElement("svg",null,c.a.createElement("rect",null))))))}var A=function(e){return c.a.createElement("div",{className:R.a.contacts,id:"contact"},c.a.createElement("div",{className:R.a.container},c.a.createElement("span",{className:R.a.contactSpan},"Contact"),c.a.createElement("div",{className:R.a.moduleLine}," "),c.a.createElement(O,{onSubmit:e.onSubmit})))},I=t(7),F=t.n(I),B=t(20),J=t(51),z=t(19),H=t(50),W=t.n(H);z.b.add(J.a);var D=function(){return c.a.createElement("div",{className:F.a.footer},c.a.createElement("div",{className:F.a.name},c.a.createElement("div",null,"Gerasimovich Natalia"),c.a.createElement("div",{className:F.a.moduleLine}),c.a.createElement("div",{className:F.a.containerIcon},c.a.createElement(W.a,null,c.a.createElement("div",{className:F.a.icon},c.a.createElement("a",{href:"https://t.me/natali_kul",target:"_blank"},c.a.createElement(B.a,{icon:["fab","telegram-plane"],size:"2x"}))),c.a.createElement("div",{className:F.a.icon},c.a.createElement("a",{href:"https://www.instagram.com/natali_gerasimovich/?hl=ru",target:"_blank"},c.a.createElement(B.a,{icon:["fab","instagram"],size:"2x"}))),c.a.createElement("div",{className:F.a.icon},c.a.createElement("a",{href:"https://m.vk.com/natali_gerasimovich",target:"_blank"},c.a.createElement(B.a,{icon:["fab","vk"],size:"2x"}))),c.a.createElement("div",{className:F.a.icon},c.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=375293452559",target:"_blank"},c.a.createElement(B.a,{icon:["fab","whatsapp"],size:"2x"}))))),c.a.createElement("span",{className:F.a.prava},"\xa92020 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b")))},q=t(17),G=t.n(q),Y=t(8),Q=t.n(Y);var K=function(e){return"../../s8_assets/".concat(e.urlImage),c.a.createElement("div",{className:Q.a.project},c.a.createElement("div",{className:Q.a.projectImg,style:{backgroundImage:"url(".concat(e.urlImage,")")}}),c.a.createElement("div",{className:Q.a.lookHref},c.a.createElement("a",{className:Q.a.btn,href:e.href,target:"_blank"},"Look Demo"),c.a.createElement("a",{className:Q.a.btn,href:e.lookResource,target:"_blank"},"Look Resources")),c.a.createElement("div",{className:Q.a.container},c.a.createElement("span",{className:Q.a.title},e.titleProject),c.a.createElement("span",{className:Q.a.description},e.descriptionProject)))},U=t(52),X=t.n(U),V=t(53),Z=t.n(V),$=t(54),ee=t.n($),ae=t(55),te=t.n(ae),ne=t(56),ce=t.n(ne);var oe=function(e){var a=["https://natasha17-spec.github.io/Network/#/profile","https://natasha17-spec.github.io/ToDoListIT","https://github.com/natasha17-spec/Portfolio","https://natasha17-spec.github.io/Simple_Counter_Redux","https://natasha17-spec.github.io/Advanced_counter_Redux","https://natasha17-spec.github.io/Simple_Counter_Redux"],t=["https://github.com/natasha17-spec/Portfolio/tree/master","https://github.com/natasha17-spec/ToDoListIT","https://github.com/natasha17-spec/Portfolio/tree/master","https://github.com/natasha17-spec/Simple_Counter_Redux","https://github.com/natasha17-spec/Advanced_counter_Redux","https://github.com/natasha17-spec/Simple_Counter_Redux"],n=[X.a,Z.a,ee.a,te.a,ce.a],o=e.project.map((function(e,o){return c.a.createElement(K,{titleProject:e.titleProject,urlImage:n[o],href:a[o],lookResource:t[o],descriptionProject:e.descriptionProject})}));return c.a.createElement("div",{className:G.a.projectsBlock},c.a.createElement("div",{className:G.a.projectContainer},c.a.createElement("div",{className:G.a.projectTitle},c.a.createElement("span",null,"My Project"),c.a.createElement("div",{className:G.a.moduleLine})),c.a.createElement("div",{className:G.a.projects},o)))},re=t(57),ie=t.n(re),le=t(58),se=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={tasks:[{title:"REACT",description:"React \u2014 \u044d\u0442\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 JavaScript \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430. \u041e\u043d\u0430 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 Facebook \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u0432 2013 \u0433\u043e\u0434\u0443."},{title:"HTML",description:"\u0421\u0442\u0438\u043b\u0435\u043c \u0438\u043b\u0438 CSS (Cascading Style Sheets, \u043a\u0430\u0441\u043a\u0430\u0434\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u0442\u0438\u043b\u0435\u0439) \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0431\u043e\u0440 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0445 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434."},{title:"CSS",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."},{title:"TYPESCRIPT",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."},{title:"JS",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."},{title:"REACT/REDUX",description:"JavaScript \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u043c Brendan Eich \u0438\u0437 Netscape \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432 \u0434\u0435\u043a\u0430\u0431\u0440\u0435 1995 \u0433\u043e\u0434\u0430 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c LiveScript."}],project:[{titleProject:"Social Network",descriptionProject:"React/React-Redux, Thunk, API/Ajax, Cookie"},{titleProject:"TodoList",descriptionProject:"React/React-Redux,Thunk, API/Ajax, Type Script"},{titleProject:"Portfolio",descriptionProject:"React, HTML, CSS, JS, Flexbox, Node Express"},{titleProject:"Simple Count",descriptionProject:"React,Redux, HTML, CSS, JS"},{titleProject:"Advanced Count",descriptionProject:"React, Redux, HTML, CSS, JS"}]},e.render=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"portfolio"},c.a.createElement(ie.a,{className:"particles",params:{particles:{number:{value:450},color:{value:"#5ec5e1"},shape:{type:"circle",stroke:{width:.3,color:"#5ec5e1"},polygon:{nb_sides:6},image:{src:"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"}},opacity:{value:.4,random:!0,anim:{enable:!1,speed:3}},size:{value:3,random:!1,anim:{enable:!1,speed:40}},line_linked:{enable:!0,distance:140,color:"#fff",width:1},move:{enable:!0,speed:8,direction:"none",bounce:!1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"push"}},modes:{repulse:{distance:50,duration:.4},bubble:{distance:100,size:10}}}}}),c.a.createElement(h,{tasks:e.state.tasks}),c.a.createElement(g,null),c.a.createElement(x,{tasks:e.state.tasks}),c.a.createElement(oe,{project:e.state.project}),c.a.createElement(L,null),c.a.createElement(A,{onSubmit:function(e,a,t){le.post("https://g-mail-portfolio.herokuapp.com/sendMessage",{name:e,email:a,message:t}).then((function(e){alert("\u0412\u0430\u0448\u0435 \u043f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e")}))}}),c.a.createElement(D,null)))},e}return t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=t(61);r.a.render(c.a.createElement(me.a,null,c.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},12:function(e,a,t){e.exports={main:"Main_main__m5Z81",container:"Main_container__1Ao8h",greeting:"Main_greeting__YifPs",greetingIam:"Main_greetingIam__1cilR",title:"Main_title__3m__m","flashing-border":"Main_flashing-border__Rp-zN","printed-text":"Main_printed-text__1jVW3",mainPhoto:"Main_mainPhoto___523M"}},14:function(e,a,t){e.exports={navMenu:"NavMenu_navMenu__2Yduo",link:"NavMenu_link__2U4xd",activeLink:"NavMenu_activeLink__3MJu7"}},16:function(e,a,t){e.exports={slogan:"Slogan_slogan__1fAXy",sloganContainer:"Slogan_sloganContainer__fxJjq",sloganTitle:"Slogan_sloganTitle__1pW-Q",wrapper:"Slogan_wrapper__22NAu",btn:"Slogan_btn__kOuTP"}},17:function(e,a,t){e.exports={projectContainer:"Projects_projectContainer__2zXzE",projects:"Projects_projects__2q8r7",icon:"Projects_icon__29-ga",containerSpan:"Projects_containerSpan__1dULH",btn:"Projects_btn__SArGb",title:"Projects_title__1eDfM",description:"Projects_description__1xtme",boxProject:"Projects_boxProject__3aq-o",projectTitle:"Projects_projectTitle__2uQsE",moduleLine:"Projects_moduleLine__2-kP4"}},2:function(e,a,t){e.exports={skills:"Skills_skills__34Woj",wrapper:"Skills_wrapper__1fxQ9",icon:"Skills_icon__1pTtb",skillTitle:"Skills_skillTitle__2mY5x",skillsWrapper:"Skills_skillsWrapper__EemB2",icon1:"Skills_icon1__1cwOg",icon2:"Skills_icon2__Sj_vO",icon3:"Skills_icon3__1NPBT",icon4:"Skills_icon4__TlwpE",icon5:"Skills_icon5__PoFwK",paddings_one:"Skills_paddings_one__3JrWD",moduleLine:"Skills_moduleLine__3LJse"}},24:function(e,a,t){e.exports={skillBox:"Skill_skillBox__uGCIY",icon:"Skill_icon__yGqVU",skillTitle:"Skill_skillTitle__1_4rz",skillDescription:"Skill_skillDescription__29COC"}},31:function(e,a,t){e.exports={headerBox:"Header_headerBox__Yebsb",headerContainer:"Header_headerContainer__1pb44"}},5:function(e,a,t){e.exports={contacts:"Contacts_contacts__3ek1O",contactSpan:"Contacts_contactSpan__1qkVd",container:"Contacts_container__1muKx",form:"Contacts_form__3J3f-",conteiner:"Contacts_conteiner__2FnQo",button:"Contacts_button__1vMBv",wrapper:"Contacts_wrapper__17aCW",btn:"Contacts_btn__1296K",formArea:"Contacts_formArea__1OIXf",moduleLine:"Contacts_moduleLine__1eb3b"}},52:function(e,a,t){e.exports=t.p+"static/media/social_network.a111b285.png"},53:function(e,a,t){e.exports=t.p+"static/media/todolist.01236eee.png"},54:function(e,a,t){e.exports=t.p+"static/media/portfolio.cd5ca201.PNG"},55:function(e,a,t){e.exports=t.p+"static/media/Simpl_Count_On_Redux.fd7795de.PNG"},56:function(e,a,t){e.exports=t.p+"static/media/advanced.ecf6a1de.png"},62:function(e,a,t){e.exports=t(107)},67:function(e,a,t){},68:function(e,a,t){},7:function(e,a,t){e.exports={footer:"Footer_footer__3s_gg",name:"Footer_name__h4Gv9",title:"Footer_title__3l-e0",containerIcon:"Footer_containerIcon__3wQLc",icon:"Footer_icon__3K4i7",prava:"Footer_prava__GBt61",moduleLine:"Footer_moduleLine__g6zUs"}},8:function(e,a,t){e.exports={projectContainer:"Project_projectContainer__2zIvq",project:"Project_project__3NegM",projectImg:"Project_projectImg__1fq76",container:"Project_container__qL0pE",btn:"Project_btn__1BW8b",title:"Project_title__NoN0P",description:"Project_description__1iI5e",boxProject:"Project_boxProject__2dqmc",projectTitle:"Project_projectTitle__1-J_K",moduleLine:"Project_moduleLine__1b39Q",name:"Project_name__32X3Y",lookHref:"Project_lookHref__35Rn_"}}},[[62,1,2]]]);
//# sourceMappingURL=main.0843ab77.chunk.js.map