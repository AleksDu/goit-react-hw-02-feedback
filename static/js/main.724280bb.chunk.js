(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={value:"Statistics_value__vZxOP"}},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(6),i=a.n(s),r=a(7),l=a(8),o=a(9),j=a(11),d=a(10),b=a(5),u=a.n(b),h=a(0),O=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{className:u.a.section,children:[Object(h.jsx)("h1",{className:u.a.title,children:t}),a]})};O.defaultProps={title:"",children:[]};var x=O,p=a(3),v=a.n(p),m=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:v.a.list,children:Object.keys(t).map((function(e){return Object(h.jsx)("li",{className:v.a.item,children:Object(h.jsx)("button",{className:v.a.button,type:"button",onClick:a,children:e})},e)}))})},f=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})};f.defaultProps={message:""};var k=f,g=a(1),_=a.n(g),N=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage,i=n(),r=s();return Object(h.jsx)("div",{children:i?Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:_.a.item,children:Object(h.jsxs)("p",{children:["Good: ",Object(h.jsx)("span",{className:_.a.value,children:t})]})}),Object(h.jsx)("li",{className:_.a.item,children:Object(h.jsxs)("p",{children:["Neutral: ",Object(h.jsx)("span",{className:_.a.value,children:a})]})}),Object(h.jsx)("li",{className:_.a.item,children:Object(h.jsxs)("p",{children:["Bad: ",Object(h.jsx)("span",{className:_.a.value,children:c})]})}),Object(h.jsx)("li",{className:_.a.item,children:Object(h.jsxs)("p",{children:["Total: ",Object(h.jsx)("span",{className:_.a.value,children:i})]})}),Object(h.jsx)("li",{className:_.a.item,children:Object(h.jsxs)("p",{children:["Positive feedback:"," ",Object(h.jsxs)("span",{className:_.a.value,children:[r,"%"]})]})})]}):Object(h.jsx)(k,{message:"No feedback given"})})},F=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.textContent;e.setState((function(e){return Object(r.a)({},a,e[a]+=1)}))},e.countTotalFeedback=function(){return Object.keys(e.state).reduce((function(t,a){return t+e.state[a]}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad,n=this.state,s=this.onLeaveFeedback,i=this.countTotalFeedback,r=this.countPositiveFeedbackPercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:n,onLeaveFeedback:s})}),Object(h.jsx)(x,{title:"Statistics",children:Object(h.jsx)(N,{good:t,neutral:a,bad:c,total:i,positivePercentage:r})})]})}}]),a}(c.Component),P=F;a(17),a(18);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))},3:function(e,t,a){e.exports={list:"FeedbackOptions_list__1_O9J",item:"FeedbackOptions_item__2nkfz",button:"FeedbackOptions_button__1IgYr"}},5:function(e,t,a){e.exports={section:"Section_section__1eS2k",title:"Section_title__1u-rH"}}},[[19,1,2]]]);
//# sourceMappingURL=main.724280bb.chunk.js.map