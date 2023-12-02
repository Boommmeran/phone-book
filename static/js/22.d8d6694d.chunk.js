"use strict";(self.webpackChunkphone_book=self.webpackChunkphone_book||[]).push([[22],{5022:function(n,e,r){r.r(e),r.d(e,{default:function(){return cn}});var t,o,i,a,c,s=r(2791),l=r(9434),d=r(3634),u=r(6916),p=function(n){return n.filter},x=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},h=(0,u.P1)([x,p],(function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),m=r(5705),g=r(1686),Z=r.n(g),j=r(6727),v=r(168),w=r(5706),y=(0,w.Z)(m.l0)(t||(t=(0,v.Z)(["\n  max-width: 300px;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),k=w.Z.label(o||(o=(0,v.Z)(["\n  display: block;\n  color: #0055b3;\n  font-weight: bold;\n  margin-bottom: 15px;\n"]))),z=(0,w.Z)(m.gN)(i||(i=(0,v.Z)(["\n  position: relative;\n  width: 100%;\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  margin-top: 15px;\n\n  :focus {\n    border-color: #007bff;\n    outline: none;\n    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  }\n"]))),C=w.Z.div(a||(a=(0,v.Z)(["\n  position: absolute;\n  color: #c82333;\n  font-size: 14px;\n  margin-top: 5px;\n"]))),I=w.Z.button(c||(c=(0,v.Z)(["\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n\n  :hover,\n  :focus {\n    background-color: #0055b3;\n  }\n"]))),F=r(3329),N=j.Ry().shape({name:j.Z_().required("It is required field"),number:j.Z_().matches(/^[0-9+ -]+$/,"Invalid character").required("It is required field")});function q(){var n=(0,l.I0)(),e=(0,l.v9)(x);return(0,F.jsx)(m.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){var o=r.name,i=r.number,a=t.resetForm;return e.find((function(n){return n.name===o}))?Z().Notify.failure("This contact is already in your phone book"):0===o.trim().length?Z().Notify.failure("Please insert contact name"):(n(d.addContact({name:o,number:i})),void a())},validationSchema:N,children:(0,F.jsxs)(y,{children:[(0,F.jsxs)(k,{children:["Name",(0,F.jsx)(z,{type:"text",name:"name"}),(0,F.jsx)(m.Bc,{name:"name",children:function(n){return(0,F.jsx)(C,{children:n})}})]}),(0,F.jsxs)(k,{children:["Number",(0,F.jsx)(z,{type:"text",name:"number",placeholder:"Example: 0997755446"}),(0,F.jsx)(m.Bc,{name:"number",children:function(n){return(0,F.jsx)(C,{children:n})}})]}),(0,F.jsx)(I,{type:"submit",children:"Add contact"})]})})}var _,L,S,B,E,P=r(7322),A=w.Z.p(_||(_=(0,v.Z)(["\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),H=w.Z.button(L||(L=(0,v.Z)(["\n  background-color: transparent;\n  color: #007bff;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n  \n  :hover {\n    color: #c82333;\n  }\n"]))),J=(0,w.Z)(P.FH3)(S||(S=(0,v.Z)(["\n  width: 35px;\n  height: 35px;\n"])));function M(n){var e=n.contact,r=(0,l.I0)(),t=d.deleteContact,o=e.name,i=e.number,a=e.id;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{children:[(0,F.jsx)(A,{children:o}),(0,F.jsx)(A,{children:i})]}),(0,F.jsx)(H,{type:"button",onClick:function(){return r(t(a))},children:(0,F.jsx)(J,{})})]})}var O=w.Z.ul(B||(B=(0,v.Z)(["\n  display: flex;\n  width: 600px;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n"]))),R=w.Z.li(E||(E=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  align-items: center;\n  padding: 10px;\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  width: 290px;\n  box-shadow: 0 0 3px #007bff;\n"])));function T(){var n=h,e=(0,l.v9)(n);return(0,F.jsx)(O,{children:e.map((function(n){return(0,F.jsx)(R,{children:(0,F.jsx)(M,{contact:n})},n.id)}))})}var V,$,D,G=r(1273),K=w.Z.div(V||(V=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n"]))),Q=w.Z.label($||($=(0,v.Z)(["\n  display: block;\n  color: #0055b3;\n  font-weight: bold;\n"]))),U=w.Z.input(D||(D=(0,v.Z)(["\n  max-width: 300px;\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n\n  :focus {\n    border-color: #007bff;\n    outline: none;\n    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  }\n"])));function W(){var n=(0,l.v9)(p),e=(0,l.I0)();return(0,F.jsxs)(K,{children:[(0,F.jsx)(Q,{htmlFor:"filter",children:"Find contact by name"}),(0,F.jsx)(U,{type:"text",id:"filter",value:n,onChange:function(n){e((0,G.M)(n.target.value))}})]})}var X,Y,nn,en=r(1947),rn=w.Z.p(X||(X=(0,v.Z)(["\n  color: #c82333;\n  font-size: 25px;\n  text-align: center;\n"])));function tn(n){var e=n.text;return(0,F.jsx)(rn,{children:e})}var on=w.Z.div(Y||(Y=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n  gap: 15px;\n"]))),an=w.Z.h2(nn||(nn=(0,v.Z)(["\n  color: #007bff;\n  font-size: 22px;\n  line-height: 40px;\n  font-weight: normal;\n  text-transform: uppercase;\n  font-family: 'Orienta', sans-serif;\n  letter-spacing: 1px;\n  font-style: italic;\n"])));function cn(){var n=(0,l.I0)(),e=x,r=f,t=b,o=d.fetchContacts,i=(0,l.v9)(e),a=(0,l.v9)(r),c=(0,l.v9)(t);return(0,s.useEffect)((function(){n(o())}),[n,o]),(0,F.jsxs)(on,{children:[(0,F.jsx)(q,{}),(0,F.jsx)(an,{children:"Contacts"}),(0,F.jsx)(W,{}),0!==i.length&&(0,F.jsx)(T,{}),c&&(0,F.jsx)(tn,{text:"Something went wrong, please reload this page"}),a&&(0,F.jsx)(en.Z,{})]})}}}]);
//# sourceMappingURL=22.d8d6694d.chunk.js.map