"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[671],{1863:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r=t(2791),i=t(3855),a=t(3982),o=t(3634),l="NOT_FOUND";var u=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,i=void 0===r?u:r,a=t.maxSize,o=void 0===a?1:a,s=t.resultEqualityCheck,d=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,i=0;i<r;i++)if(!e(n[i],t[i]))return!1;return!0}}(i),c=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:l},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(d):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return l}return{get:r,put:function(n,i){r(n)===l&&(t.unshift({key:n,value:i}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,d);function p(){var n=c.get(arguments);if(n===l){if(n=e.apply(null,arguments),s){var t=c.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}c.put(arguments,n)}return n}return p.clearCache=function(){return c.clear()},p}function d(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function c(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var i=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a,o=0,l={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(l=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var s=l,c=s.memoizeOptions,p=void 0===c?t:c,f=Array.isArray(p)?p:[p],h=d(r),v=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(f)),m=e((function(){for(var e=[],n=h.length,t=0;t<n;t++)e.push(h[t].apply(null,arguments));return a=v.apply(null,e)}));return Object.assign(m,{resultFunc:u,memoizedResultFunc:v,dependencies:h,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),m};return i}var p=c(s),f=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},v=function(e){return e.contacts.error},m=p([f,function(e){return e.filter.name}],(function(e,n){return{items:e.filter((function(e){return e.name.toLowerCase().includes(n)})),inPhonebook:e.length}})),x=t(4973),y=t(2548),g=t(6411),b=t(184),j={width:"100%",marginBottom:"15px",padding:"5px",border:"1px solid black",borderRadius:"5px",backgroundColor:"rgba(188, 199, 145, 0.55)"},C=function(){var e=(0,i.I0)();return(0,b.jsxs)("div",{style:j,children:[(0,b.jsx)("p",{children:"Find contacts by name:"}),(0,b.jsx)(g.I,{type:"text",focusBorderColor:"teal.400",color:"teal",onChange:function(n){e((0,y.n)(n.target.value))}})]})},k=function(){return(0,b.jsx)("div",{children:(0,b.jsx)(C,{})})},Z=function(e){var n=e.message;return(0,b.jsx)("p",{children:n})},I=t(9055),w=t(4134),R=(0,w.I)({displayName:"PlusSquareIcon",path:(0,b.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,b.jsx)("rect",{height:"18",width:"18",rx:"2",ry:"2",x:"3",y:"3"}),(0,b.jsx)("path",{d:"M12 8v8"}),(0,b.jsx)("path",{d:"M8 12h8"})]})}),N=t(7562),S=t(7943),_=t(5231),z=function(e){var n=e.defaultValue,t=void 0===n?"":n;return(0,b.jsxs)(N.B,{_focusWithin:{color:"blue"},children:[(0,b.jsx)(S.Z,{children:(0,b.jsx)(_.s,{})}),(0,b.jsx)(g.I,{focusBorderColor:"blue.400",color:"black",type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,defaultValue:t,borderColor:"black",_hover:{borderColor:"grey"}})]})},E=(0,w.I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),F=function(e){var n=e.defaultValue,t=void 0===n?"":n;return(0,b.jsxs)(N.B,{_focusWithin:{color:"blue"},children:[(0,b.jsx)(S.Z,{children:(0,b.jsx)(E,{})}),(0,b.jsx)(g.I,{focusBorderColor:"blue.400",color:"black",name:"number",placeholder:"Number",type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,defaultValue:t,borderColor:"black",_hover:{borderColor:"grey"}})]})},B={display:"flex",flexDirection:"column",gap:"10px",marginBottom:"15px",padding:"5px",borderRadius:"5px",border:"1px solid black",backgroundColor:"rgba(50, 126, 143, 0.55)"},P=function(){var e=(0,i.I0)(),n=(0,i.v9)(f);return(0,b.jsxs)("form",{style:B,onSubmit:function(t){t.preventDefault();var r,i=t.currentTarget;(r=i.name.value,n.filter((function(e){return e.name===r})).length>=1)?console.log("This contact is already in your phonebook."):(e((0,o.uK)({name:i.name.value,number:i.number.value})),i.reset())},children:[(0,b.jsx)(z,{}),(0,b.jsx)(F,{}),(0,b.jsxs)(I.z,{type:"submit",colorScheme:"teal",variant:"outline",children:[(0,b.jsx)(R,{})," Add contact"]})]})},q=t(9439),A=t(8560),O=(0,w.I)({displayName:"EditIcon",path:(0,b.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,b.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,b.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),L=(0,w.I)({displayName:"DeleteIcon",path:(0,b.jsx)("g",{fill:"currentColor",children:(0,b.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),T=function(e){var n=e.onClick;return(0,b.jsx)(I.z,{type:"button",colorScheme:"red",color:"#a70505ab",variant:"outline",onClick:n,children:(0,b.jsx)(L,{})})},D={width:"100%",padding:"5px 10px",display:"flex",flexWrap:"nowrap",justifyContent:"left",alignItems:"center",border:"1px solid black",borderRadius:"5px",backgroundColor:"rgba(25, 70, 32, 0.43)"},M={display:"flex",justifyContent:"space-around",alignItems:"center"},G={display:"flex",flexWrap:"nowrap",gap:"20px"},H={display:"flex",flexDirection:"column",flexWrap:"norwap",gap:"5px"},W=function(e){var n=e.contact,t=e.expand,r=void 0!==t&&t,a=(0,i.I0)();return(0,b.jsx)("li",{id:n.id,style:D,children:r?(0,b.jsxs)("form",{style:H,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;a((0,o.Tk)({id:n.id,name:t.name.value,number:t.number.value}))},children:[(0,b.jsx)(z,{defaultValue:n.name}),(0,b.jsx)(F,{defaultValue:n.number}),(0,b.jsxs)("div",{style:M,children:[(0,b.jsxs)(I.z,{colorScheme:"blue",type:"submit",variant:"outline",children:[(0,b.jsx)(O,{})," Update"]}),(0,b.jsx)(T,{onClick:function(){a((0,o.GK)(n.id))}})]})]}):(0,b.jsxs)("div",{style:G,children:[(0,b.jsx)("span",{style:{width:"150px",overflow:"hidden"},children:n.name}),(0,b.jsx)("span",{style:{width:"150px",overflow:"hidden"},children:n.number})]})})},V={width:"100%",display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",gap:"5px",listStyle:"none",padding:"5px",border:"1px solid black",borderRadius:"5px",backgroundColor:"rgba(206, 229, 210, 0.43)"},Q=function(){var e=(0,A.v9)(m).items,n=(0,r.useState)(""),t=(0,q.Z)(n,2),i=t[0],a=t[1],o=function(e){!e.target.closest("li")&&a("")};return(0,r.useEffect)((function(){return setTimeout((function(){i&&window.addEventListener("click",o)}),1e3),function(){window.removeEventListener("click",o)}}),[i]),(0,b.jsx)("ul",{style:V,onClick:function(e){var n=e.target.closest("li");"UL"!==e.target.nodeName?a(n.id):a("")},children:0===e.length?(0,b.jsx)(Z,{message:"Seems like there isn't a single one contact with your querry."}):e.map((function(e){return(0,b.jsx)(W,{contact:e,expand:i===e.id},e.id)}))})},U=function(){var e=(0,i.I0)(),n=(0,a.a)().isRefreshing,t=(0,i.v9)(h),l=(0,i.v9)(v),u=(0,i.v9)(m).inPhonebook;return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,b.jsxs)("div",{children:[n&&(0,b.jsx)(x.a,{}),l&&(0,b.jsx)("p",{children:l}),!l&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(P,{}),u>0&&(0,b.jsx)(k,{}),0===u.length?(0,b.jsx)(Z,{message:"You have no contacts in your phonebook. Add some!"}):t?(0,b.jsx)(x.a,{}):(0,b.jsx)(Q,{})]})]})}},4134:function(e,n,t){t.d(n,{I:function(){return u}});var r=t(1413),i=t(9640),a=t(5597),o=t(2791),l=t(184);function u(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,u=e.d,s=e.displayName,d=e.defaultProps,c=void 0===d?{}:d,p=o.Children.toArray(e.path),f=(0,a.G)((function(e,n){return(0,l.jsx)(i.J,(0,r.Z)((0,r.Z)((0,r.Z)({ref:n,viewBox:t},c),e),{},{children:p.length?p:(0,l.jsx)("path",{fill:"currentColor",d:u})}))}));return f.displayName=s,f}},5231:function(e,n,t){t.d(n,{s:function(){return r}});var r=(0,t(4134).I)({d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})},7943:function(e,n,t){t.d(n,{Z:function(){return m},x:function(){return x}});var r=t(4942),i=t(1413),a=t(4925),o=t(7562),l=t(5113),u=t(5597),s=t(6992),d=t(184),c=["placement"],p=["className"],f=["className"],h=(0,l.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),v=(0,u.G)((function(e,n){var t,l,u,s=e.placement,p=void 0===s?"left":s,f=(0,a.Z)(e,c),v=(0,o.m)(),m=v.field,x="left"===p?"insetStart":"insetEnd",y=(0,i.Z)((t={},(0,r.Z)(t,x,"0"),(0,r.Z)(t,"width",null!=(l=null==m?void 0:m.height)?l:null==m?void 0:m.h),(0,r.Z)(t,"height",null!=(u=null==m?void 0:m.height)?u:null==m?void 0:m.h),(0,r.Z)(t,"fontSize",null==m?void 0:m.fontSize),t),v.element);return(0,d.jsx)(h,(0,i.Z)({ref:n,__css:y},f))}));v.id="InputElement",v.displayName="InputElement";var m=(0,u.G)((function(e,n){var t=e.className,r=(0,a.Z)(e,p),o=(0,s.cx)("chakra-input__left-element",t);return(0,d.jsx)(v,(0,i.Z)({ref:n,placement:"left",className:o},r))}));m.id="InputLeftElement",m.displayName="InputLeftElement";var x=(0,u.G)((function(e,n){var t=e.className,r=(0,a.Z)(e,f),o=(0,s.cx)("chakra-input__right-element",t);return(0,d.jsx)(v,(0,i.Z)({ref:n,placement:"right",className:o},r))}));x.id="InputRightElement",x.displayName="InputRightElement"},6411:function(e,n,t){t.d(n,{I:function(){return _}});var r=t(1413),i=t(4925),a=t(9439),o=t(9886),l=t(4591),u=t(5597),s=t(2481),d=t(2996),c=t(5113),p=t(6992),f=t(2791),h=t(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],m=["getRootProps","htmlProps"],x=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,a.Z)(x,2),g=y[0],b=y[1],j=(0,o.k)({strict:!1,name:"FormControlContext"}),C=(0,a.Z)(j,2),k=C[0],Z=C[1];var I=(0,u.G)((function(e,n){var t=(0,s.jC)("Form",e),o=function(e){var n=e.id,t=e.isRequired,o=e.isInvalid,u=e.isDisabled,s=e.isReadOnly,d=(0,i.Z)(e,v),c=(0,f.useId)(),h=n||"field-".concat(c),m="".concat(h,"-label"),x="".concat(h,"-feedback"),y="".concat(h,"-helptext"),g=(0,f.useState)(!1),b=(0,a.Z)(g,2),j=b[0],C=b[1],k=(0,f.useState)(!1),Z=(0,a.Z)(k,2),I=Z[0],w=Z[1],R=(0,f.useState)(!1),N=(0,a.Z)(R,2),S=N[0],_=N[1],z=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:y},e),{},{ref:(0,l.lq)(n,(function(e){e&&w(!0)}))})}),[y]),E=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(S),"data-disabled":(0,p.PB)(u),"data-invalid":(0,p.PB)(o),"data-readonly":(0,p.PB)(s),id:void 0!==e.id?e.id:m,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,u,S,o,s,m]),F=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,l.lq)(n,(function(e){e&&C(!0)})),"aria-live":"polite"})}),[x]),B=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),d),{},{ref:n,role:"group","data-focus":(0,p.PB)(S),"data-disabled":(0,p.PB)(u),"data-invalid":(0,p.PB)(o),"data-readonly":(0,p.PB)(s)})}),[d,u,S,o,s]),P=(0,f.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!o,isReadOnly:!!s,isDisabled:!!u,isFocused:!!S,onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},hasFeedbackText:j,setHasFeedbackText:C,hasHelpText:I,setHasHelpText:w,id:h,labelId:m,feedbackId:x,helpTextId:y,htmlProps:d,getHelpTextProps:z,getErrorMessageProps:F,getRootProps:B,getLabelProps:E,getRequiredIndicatorProps:P}}((0,d.Lr)(e)),u=o.getRootProps,x=(o.htmlProps,(0,i.Z)(o,m)),y=(0,p.cx)("chakra-form-control",e.className);return(0,h.jsx)(k,{value:x,children:(0,h.jsx)(g,{value:t,children:(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},u({},n)),{},{className:y,__css:t.container}))})})}));I.displayName="FormControl",(0,u.G)((function(e,n){var t=Z(),i=b(),a=(0,p.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:i.helperText,className:a}))})).displayName="FormHelperText";var w=["isDisabled","isInvalid","isReadOnly","isRequired"],R=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function N(e){var n=function(e){var n,t,a,o=Z(),l=e.id,u=e.disabled,s=e.readOnly,d=e.required,c=e.isRequired,f=e.isInvalid,h=e.isReadOnly,v=e.isDisabled,m=e.onFocus,x=e.onBlur,y=(0,i.Z)(e,R),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&g.push(o.feedbackId);(null==o?void 0:o.hasHelpText)&&g.push(o.helpTextId);return(0,r.Z)((0,r.Z)({},y),{},{"aria-describedby":g.join(" ")||void 0,id:null!=l?l:null==o?void 0:o.id,isDisabled:null!=(n=null!=u?u:v)?n:null==o?void 0:o.isDisabled,isReadOnly:null!=(t=null!=s?s:h)?t:null==o?void 0:o.isReadOnly,isRequired:null!=(a=null!=d?d:c)?a:null==o?void 0:o.isRequired,isInvalid:null!=f?f:null==o?void 0:o.isInvalid,onFocus:(0,p.v0)(null==o?void 0:o.onFocus,m),onBlur:(0,p.v0)(null==o?void 0:o.onBlur,x)})}(e),t=n.isDisabled,a=n.isInvalid,o=n.isReadOnly,l=n.isRequired,u=(0,i.Z)(n,w);return(0,r.Z)((0,r.Z)({},u),{},{disabled:t,readOnly:o,required:l,"aria-invalid":(0,p.Qm)(a),"aria-required":(0,p.Qm)(l),"aria-readonly":(0,p.Qm)(o)})}var S=["htmlSize"],_=(0,u.G)((function(e,n){var t=e.htmlSize,a=(0,i.Z)(e,S),o=(0,s.jC)("Input",a),l=N((0,d.Lr)(a)),u=(0,p.cx)("chakra-input",e.className);return(0,h.jsx)(c.m.input,(0,r.Z)((0,r.Z)({size:t},l),{},{__css:o.field,ref:n,className:u}))}));_.displayName="Input",_.id="Input"},7562:function(e,n,t){t.d(n,{B:function(){return b},m:function(){return g}});var r=t(1413),i=t(4925),a=t(9439),o=t(9886),l=t(7200),u=t(5597),s=t(2481),d=t(2996),c=t(5113),p=t(6992);var f=t(2791),h=t(184),v=["children","className"],m=(0,o.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),x=(0,a.Z)(m,2),y=x[0],g=x[1],b=(0,u.G)((function(e,n){var t=(0,s.jC)("Input",e),a=(0,d.Lr)(e),o=a.children,u=a.className,m=(0,i.Z)(a,v),x=(0,p.cx)("chakra-input__group",u),g={},b=(0,l.W)(o),j=t.field;b.forEach((function(e){var n,r;t&&(j&&"InputLeftElement"===e.type.id&&(g.paddingStart=null!=(n=j.height)?n:j.h),j&&"InputRightElement"===e.type.id&&(g.paddingEnd=null!=(r=j.height)?r:j.h),"InputRightAddon"===e.type.id&&(g.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(g.borderStartRadius=0))}));var C=b.map((function(n){var t,r,i=function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?(0,f.cloneElement)(n,i):(0,f.cloneElement)(n,Object.assign(i,g,n.props))}));return(0,h.jsx)(c.m.div,(0,r.Z)((0,r.Z)({className:x,ref:n,__css:(0,r.Z)({width:"100%",display:"flex",position:"relative",isolation:"isolate"},t.group),"data-group":!0},m),{},{children:(0,h.jsx)(y,{value:t,children:C})}))}));b.displayName="InputGroup"}}]);
//# sourceMappingURL=671.e0af7a6b.chunk.js.map