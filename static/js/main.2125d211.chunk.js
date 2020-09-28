(this["webpackJsonpgoit-react-hw-02-phonebook2"]=this["webpackJsonpgoit-react-hw-02-phonebook2"]||[]).push([[0],[,function(e,t,a){e.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",labelName:"Form_labelName__2L7Gh",button:"Form_button__243jh"}},function(e,t,a){e.exports={List:"ContactList_List__20gyh",ListItem:"ContactList_ListItem__vxGfb",button:"ContactList_button__1RuFy"}},,,,,function(e,t,a){e.exports={label:"Filter_label__3DcZT",labelName:"Filter_labelName__3VI7p",input:"Filter_input__2DoVp"}},,function(e,t,a){},,function(e,t,a){e.exports={Container:"Container_Container__3tQ9A"}},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(9),a(13)),u=a(3),s=a(4),i=a(6),m=a(5),b=a(22),f=a(11),p=a.n(f),h=function(e){var t=e.children;return r.a.createElement("div",{className:p.a.Container},t)},d=a(2),C=a.n(d),_=function(e){var t=e.name,a=e.number,n=e.deleteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t," : ",a),r.a.createElement("button",{className:C.a.button,type:"button",onClick:n},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))},v=function(e){var t=e.contacts,a=e.onDeleteContact;return r.a.createElement("ul",{className:C.a.List},t.map((function(e){var t=e.id,n=e.name,c=e.number;return r.a.createElement("li",{className:C.a.ListItem,key:t},r.a.createElement(_,{name:n,number:c,deleteContact:function(){return a(t)}}))})))},E=a(12),N=a(1),g=a.n(N),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(E.a)({},n,r))},e.handleSubmit=function(t){var a=e.state,n=a.name,r=a.number;t.preventDefault(),""!==n?""!==r?(e.props.onSubmit(e.state),e.reset()):alert("Please, add a number"):alert("Please, give a name for new contact")},e.reset=function(){e.setState({name:"",number:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:g.a.form,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("label",{className:g.a.label},r.a.createElement("p",{className:g.a.labelName},"Name:*"),r.a.createElement("input",{required:!0,className:g.a.input,type:"text",placeholder:"ex. Anne Hathaway",value:this.state.name,name:"name",onChange:this.handleInputChange})),r.a.createElement("label",{className:g.a.label},r.a.createElement("p",{className:g.a.labelName},"Number:*"),r.a.createElement("input",{required:!0,className:g.a.input,type:"number",placeholder:"ex. 0532455678",value:this.state.number,name:"number",onChange:this.handleInputChange})),r.a.createElement("button",{className:g.a.button,type:"submit"},"Add contact"))}}]),a}(n.Component),S=a(7),L=a.n(S),F=function(e){var t=e.value,a=e.onChange;return r.a.createElement("label",{className:L.a.label},r.a.createElement("p",{className:L.a.labelName},"Find contact by name"),r.a.createElement("input",{className:L.a.input,type:"text",placeholder:"Name",value:t,onChange:a}))},O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.addContact=function(t){var a=t.name,n=t.number,r=e.state.contacts,c={id:Object(b.a)(),name:a,number:n};r.some((function(e){return a.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(a," is already in contacts")):r.find((function(e){return n===e.number}))?alert("This number ".concat(n," is already in contacts")):e.setState((function(e){return{contacts:[c].concat(Object(l.a)(e.contacts))}}))},e.filterContacts=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state,a=t.contacts,n=t.filter.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(n)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state.filter,t=this.getFilteredContacts();return r.a.createElement(h,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(y,{onSubmit:this.addContact}),r.a.createElement(F,{value:e,onChange:this.filterContacts}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(v,{contacts:t,onDeleteContact:this.deleteContact}))}}]),a}(n.Component);a(19);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.2125d211.chunk.js.map