webpackJsonp([19],{2013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),r=n(100),a=n(28),c=n(19),s=n(3381),l=n(3389),A=n(2951),p=n(21),m=n(68),u=n(23),d=function(e){return{role:u.f.candidate.name,isValid:Object(r.q)(l.b)(e),signUp:function(){return i.a.createElement(l.a,null)},completeRegistration:function(e){return i.a.createElement(s.a,{email:e})},isLoading:e.user.isLoading}},f=function(e,t){return{registerUser:function(t){return e(Object(m.m)(t))}}};t.default=Object(c.g)(Object(a.b)(d,f)(Object(p.a)(A.a)))},2361:function(e,t,n){"use strict";t.a={EMAIL_ALREADY_TAKEN:"EmailAlreadyTaken",EMAIL_DOMAIN_BLACKLISTED:"EmailDomainBlacklisted",ACCOUNT_IS_NOT_ACTIVE:"Account is not active"}},2664:function(e,t,n){"use strict";function o(e){var t=Object(s.useState)("accept"),n=c()(t,2),o=n[0],i=n[1],a=function(e){return{input:{onChange:function(){return i(e)},value:o},meta:{touched:!1,error:!1,submitting:!1}}},d=function(e){return o===e&&"select-option-confirmation__radio-selected"},_=function(){return Object(f.cond)([[Object(f.equals)("accept"),e.handleAccept],[Object(f.equals)("decline"),e.handleDecline],[f.T,function(){}]])(o)};return l.a.createElement(A.d,{title:e.title,handleSubmit:_,handleClose:e.handleClose,handleCancel:e.handleClose,show:e.show,cancelText:Object(p.b)("common.cancel"),submitText:Object(p.b)("common.continue"),closeOnSubmit:!1,closeOnCancel:!1,loading:e.isLoading},l.a.createElement("div",{className:"select-option-confirmation__description"},e.description),l.a.createElement("div",{className:"select-option-confirmation__radio-container"},l.a.createElement(m.b,{layout:m.a.vertical},l.a.createElement(u.a,r()({className:d("accept")},a("accept"),{radioButtonValue:"accept",text:e.acceptText})),l.a.createElement(u.a,r()({className:d("decline")},a("decline"),{radioButtonValue:"decline",text:e.declineText})))))}var i=n(7),r=n.n(i),a=n(119),c=n.n(a),s=n(0),l=n.n(s),A=n(765),p=n(17),m=n(793),u=n(792),d=n(2665),f=(n.n(d),n(6));t.a=o},2665:function(e,t,n){var o=n(2666);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(1999)(o,i);o.locals&&(e.exports=o.locals)},2666:function(e,t,n){t=e.exports=n(1998)(!0),t.push([e.i,".select-option-confirmation__description{font-size:15px;line-height:25px;color:#2f3233;margin-top:30px}.select-option-confirmation__radio-container .form__wrapper--radio-checkbox{border:none}.select-option-confirmation__radio-container .form__input--radio{-ms-flex-align:start;align-items:flex-start}.select-option-confirmation__radio-container .form-radio--label-text{font-size:16px;line-height:26px}.select-option-confirmation__radio-container .form-radio .form-icon{top:7px}.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio,.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio+.form__group--radio{border:1px solid #dce1e4}.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio:first-child{border-radius:4px 4px 0 0}.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio:last-child{border-radius:0 0 4px 4px}.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio.select-option-confirmation__radio-selected{border:1px solid #4353ff}.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio.select-option-confirmation__radio-selected .form-radio--label-text{color:#4353ff}","",{version:3,sources:["C:/projects/oliv-frontend/src/Shared/components/SelectOptionConfirmation/SelectOptionConfirmation.scss"],names:[],mappings:"AAAA,yCACE,eAAgB,AAChB,iBAAkB,AAClB,cAAe,AACf,eAAiB,CAAE,AAErB,4EACE,WAAa,CAAE,AAEjB,iEACE,qBAAsB,AAClB,sBAAwB,CAAE,AAEhC,qEACE,eAAgB,AAChB,gBAAkB,CAAE,AAEtB,oEACE,OAAS,CAAE,AAKb,0NACE,wBAA0B,CAAE,AAC5B,+GACE,yBAA2B,CAAE,AAC/B,8GACE,yBAA2B,CAAE,AAEjC,8IACE,wBAA0B,CAAE,AAC5B,sKACE,aAAe,CAAE",file:"SelectOptionConfirmation.scss",sourcesContent:[".select-option-confirmation__description {\n  font-size: 15px;\n  line-height: 25px;\n  color: #2f3233;\n  margin-top: 30px; }\n\n.select-option-confirmation__radio-container .form__wrapper--radio-checkbox {\n  border: none; }\n\n.select-option-confirmation__radio-container .form__input--radio {\n  -ms-flex-align: start;\n      align-items: flex-start; }\n\n.select-option-confirmation__radio-container .form-radio--label-text {\n  font-size: 16px;\n  line-height: 26px; }\n\n.select-option-confirmation__radio-container .form-radio .form-icon {\n  top: 7px; }\n\n.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio + .form__group--radio {\n  border: 1px solid #dce1e4; }\n\n.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio {\n  border: 1px solid #dce1e4; }\n  .select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio:first-child {\n    border-radius: 4px 4px 0 0; }\n  .select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio:last-child {\n    border-radius: 0 0 4px 4px; }\n\n.select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio.select-option-confirmation__radio-selected {\n  border: 1px solid #4353ff; }\n  .select-option-confirmation__radio-container .form__wrapper--checkbox-vertical .form__group--radio.select-option-confirmation__radio-selected .form-radio--label-text {\n    color: #4353ff; }\n"],sourceRoot:""}])},2950:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return f});var o=n(9),i=n.n(o),r=n(10),a=n.n(r),c=n(17),s=n(800),l=n.n(s),A=n(2254),p=n(2160),m=n(2361),u=this,d=function(e){var t={};return["email","password","firstName","lastName","phoneNumber","dateOfBirth","hasAcceptedUnderageAgreement"].forEach(function(n){e[n]||(t[n]={key:"errors.requiredField",options:{field:Object(c.b)("forms."+n+".label")}})}),e.email&&!l()(e.email)&&(t.email={key:"errors.invalidEmail",options:{}}),e.phoneNumber&&!Object(A.a)(e.phoneNumber)&&(t.phoneNumber={key:"errors.invalidPhoneNumber",options:{}}),e.password&&e.password.length<p.b&&(t.password={key:"errors.passwordTooShort",options:{chars:p.b}}),!0!==e.hasAcceptedTermsAndPolicies&&(t.hasAcceptedTermsAndPolicies={key:"errors.termsAgree"}),!0!==e.hasAcceptedUnderageAgreement&&(t.hasAcceptedUnderageAgreement={key:"errors.underageAgreeRequired"}),t},f=function(e){return function(){var t=a()(i.a.mark(function t(n){var o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.email){t.next=2;break}throw{email:{key:"errors.emailNotProvided"}};case 2:return t.prev=2,t.next=5,e(n.email);case 5:return t.abrupt("return",!1);case 8:t.prev=8,t.t0=t.catch(2),o=t.t0.response.data.error.name,t.t1=o,t.next=t.t1===m.a.EMAIL_ALREADY_TAKEN?14:15;break;case 14:throw{email:{key:"errors.emailAlreadyTaken"}};case 15:throw{email:{key:"errors.emailNotProvided"}};case 16:case"end":return t.stop()}},t,u,[[2,8]])}));return function(e){return t.apply(this,arguments)}}()}},3381:function(e,t,n){"use strict";var o=n(100),i=n(28),r=n(3382),a=n(2950),c=n(239),s=n(154),l=n(2089),A=Object(o.s)({form:"CompleteRegistration",onSubmitFail:l.a,validate:a.a})(r.a),p=function(e,t){return{dateOfBirthValue:Object(o.g)("CompleteRegistration")(e,"dateOfBirth"),isAutoApprovalEnabled:Object(s.q)(e),initialValues:{email:t.email}}},m=function(e){return{fetchCurrentLocationIfNeeded:function(){return e(Object(c.c)())}}};t.a=Object(i.b)(p,m)(A)},3382:function(e,t,n){"use strict";var o=n(119),i=n.n(o),r=n(0),a=n.n(r),c=n(100),s=n(824),l=n(111),A=n(19),p=n(766),m=n(91),u=n(449),d=n(21),f=n(3383),_=(n.n(f),n(59)),g=n.n(_),h=n(6),b=n(54),C=n(3385),B=n(2664),x=n(189),E=n.n(x),v=function(e){var t=e.error,n=e.submitting,o=e.t,d=e.handleSubmit,f=e.registerUser,_=e.dateOfBirthValue,x=e.isAutoApprovalEnabled,v=Object(r.useState)(!1),w=i()(v,2),k=w[0],y=w[1],O=Object(r.useState)(!1),j=i()(O,2),N=j[0],S=j[1],T=function(){switch(!0){case Object(b.s)(32)(_):return a.a.createElement("div",null,o("authorization.isThirtyTwoOrAbove")," ",a.a.createElement(A.c,{to:"/about"},o("authorization.learMore")));case Object(b.q)(28,31)(_):return o("authorization.isBetweenTwentyEightAndThirtyTwo");default:return null}};Object(r.useEffect)(function(){y(!x&&Object(b.s)(28)(_)?!0:!1),T(),x&&Object(b.s)(30)(_)&&S(!0)},[_]);var z=g()().diff(_,"years",!0),U=h.allPass([h.pipe(h.isNil,h.not),h.gt(18),h.lt(0)])(z);Object(r.useEffect)(function(){e.fetchCurrentLocationIfNeeded()},[]);var L=function(){y(!1)},I=function(){return S(!1)},q=function(){return e.history.push("/candidate/sign-up/cancel")},R=function(){E.a.track("Button Click - Join Oliv - Sign Up"),E.a.track("Button Click - Join Oliv - Candidate - Sign Up")};return a.a.createElement(c.c,{className:"complete-registration",onSubmit:d(f),autocomplete:"off"},a.a.createElement(C.a,{type:"error",isVisible:k,onClose:L},T()),a.a.createElement(s.a,{text:o("authorization.completeRegistration")}),a.a.createElement("div",null,a.a.createElement(c.a,{className:"complete-registration__hidden-field",component:p.f,name:"email",type:"email",autoComplete:"username"})),a.a.createElement(c.a,{component:p.f,label:o("forms.firstName.label"),name:"firstName",placeholder:o("forms.firstName.placeholder"),type:"text",autoComplete:"off"}),a.a.createElement(c.a,{component:p.f,label:o("forms.lastName.label"),name:"lastName",placeholder:o("forms.lastName.placeholder"),type:"text",autoComplete:"off"}),a.a.createElement(c.a,{component:p.n,className:"form-group",label:o("forms.phoneNumber.label"),name:"phoneNumber",autoComplete:"off"}),a.a.createElement(c.a,{component:p.j,iconClassName:"ion-md-lock",label:o("forms.password.label"),name:"password",placeholder:o("forms.password.placeholder"),type:"password",autoComplete:"password"}),a.a.createElement(c.a,{component:p.h,label:o("forms.dateOfBirth.label"),tooltip:a.a.createElement(u.a,{content:o("forms.dateOfBirth.tooltipContent"),position:"top"},a.a.createElement("div",{className:"sign-up__tooltip"},o("forms.dateOfBirth.tooltipLabel"))),name:"dateOfBirth",icon:"ion-md-clock",floatRight:!0,minDate:g()().utc().subtract(72,"years"),maxDate:g()().utc().subtract(14,"years"),scrollableYearDropdown:!0,showYearDropdown:!0,showMonthDropdown:!0,yearDropdownItemNumber:40,placeholderText:o("forms.dateOfBirth.placeholder"),format:function(e){return e?g()(e,g.a.ISO_8601):null},autoComplete:"off"}),a.a.createElement("div",{className:"sign-up__info"},o("authorization.cannotBeChanged")),U&&a.a.createElement(c.a,{component:p.c,text:a.a.createElement(l.c,{i18nKey:"terms.privacyNotice.underageAgree",parent:"span"},"Please ask a parent or guardian to review these documents, and by doing so, confirm they have read and accept Oliv's ",a.a.createElement(A.b,{to:"/privacy",target:"_blank"},a.a.createElement("strong",null,"Privacy Policy ")),"and ",a.a.createElement(A.b,{to:"/terms",target:"_blank"},a.a.createElement("strong",null,"Terms & Conditions")),"."),name:"hasAcceptedUnderageAgreement"}),a.a.createElement(c.a,{component:p.c,text:a.a.createElement(l.c,{i18nKey:"terms.privacyNotice.agree",parent:"span"},"I agree to the ",a.a.createElement(A.b,{to:"/terms",target:"_blank"},a.a.createElement("strong",null,"terms and conditions")),"."),name:"hasAcceptedTermsAndPolicies"}),a.a.createElement(m.c,{className:"button--submit",disabled:t||n,type:"submit",onClick:R,block:!0},o("authorization.joinInternsme")),a.a.createElement(B.a,{title:o("modals.autoApproveSignUpAgeConfirmation.title"),d:!0,description:o("modals.autoApproveSignUpAgeConfirmation.description"),acceptText:o("modals.autoApproveSignUpAgeConfirmation.options.continue"),declineText:o("modals.autoApproveSignUpAgeConfirmation.options.decline"),show:N,handleClose:I,handleAccept:I,handleDecline:q}))};t.a=Object(A.g)(Object(d.a)(v))},3383:function(e,t,n){var o=n(3384);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(1999)(o,i);o.locals&&(e.exports=o.locals)},3384:function(e,t,n){t=e.exports=n(1998)(!0),t.push([e.i,".sign-up__subtitle{font-size:16px;line-height:19px;margin-top:32px}.sign-up__text{font-size:13px;line-height:19px;color:#2f3233;margin-top:8px}.sign-up__tooltip{color:#4353ff;cursor:pointer;text-transform:uppercase;font-size:10px;font-weight:600;letter-spacing:1px;line-height:12px;text-align:right}.main--arabic .sign-up__tooltip{text-align:left}.sign-up__info{color:#818385;font-size:13px;line-height:19px;font-weight:300;letter-spacing:.2px;margin-top:8px}.complete-registration__hidden-field{display:inline-block;width:0;height:0;overflow:hidden;opacity:0}","",{version:3,sources:["C:/projects/oliv-frontend/src/Candidate/forms/Registration/CompleteRegistration.scss"],names:[],mappings:"AAAA,mBACE,eAAgB,AAChB,iBAAkB,AAClB,eAAiB,CAAE,AAErB,eACE,eAAgB,AAChB,iBAAkB,AAClB,cAAe,AACf,cAAgB,CAAE,AAEpB,kBACE,cAAe,AACf,eAAgB,AAChB,yBAA0B,AAC1B,eAAgB,AAChB,gBAAiB,AACjB,mBAAoB,AACpB,iBAAkB,AAClB,gBAAkB,CAAE,AACpB,gCACE,eAAiB,CAAE,AAEvB,eACE,cAAe,AACf,eAAgB,AAChB,iBAAkB,AAClB,gBAAiB,AACjB,oBAAqB,AACrB,cAAgB,CAAE,AAEpB,qCACE,qBAAsB,AACtB,QAAS,AACT,SAAU,AACV,gBAAiB,AACjB,SAAW,CAAE",file:"CompleteRegistration.scss",sourcesContent:[".sign-up__subtitle {\n  font-size: 16px;\n  line-height: 19px;\n  margin-top: 32px; }\n\n.sign-up__text {\n  font-size: 13px;\n  line-height: 19px;\n  color: #2f3233;\n  margin-top: 8px; }\n\n.sign-up__tooltip {\n  color: #4353ff;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  line-height: 12px;\n  text-align: right; }\n  .main--arabic .sign-up__tooltip {\n    text-align: left; }\n\n.sign-up__info {\n  color: #818385;\n  font-size: 13px;\n  line-height: 19px;\n  font-weight: 300;\n  letter-spacing: .2px;\n  margin-top: 8px; }\n\n.complete-registration__hidden-field {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  opacity: 0; }\n"],sourceRoot:""}])},3385:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(3386),a=(n.n(r),n(11)),c=n.n(a),s=n(3388),l=n(3),A=n.n(l),p=function(e){var t=e.type,n=e.isVisible,o=e.children,r=e.onClose,a=c()({"custom-notie__container":!0,"custom-notie__visible":n,"custom-notie__error":t===s.a.error,"custom-notie__success":t===s.a.success,"custom-notie__warning":t===s.a.warning});return i.a.createElement("div",{className:a},i.a.createElement("div",{className:"custom-notie__content"},i.a.createElement("i",{className:"icon-im-close custom-notie__close-mark",onClick:r}),o))};p.propTypes={type:A.a.string.isRequired,isVisible:A.a.bool.isRequired,onClose:A.a.func},t.a=p},3386:function(e,t,n){var o=n(3387);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(1999)(o,i);o.locals&&(e.exports=o.locals)},3387:function(e,t,n){t=e.exports=n(1998)(!0),t.push([e.i,".custom-notie__container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;font-size:1.6rem;min-height:80px;position:fixed;top:-50vh;left:0;background-color:#fff;right:0;text-align:center;z-index:999;-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,.5);box-shadow:0 0 5px 0 rgba(0,0,0,.5);-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.custom-notie__visible{top:0}.custom-notie__content{width:100%;max-width:1000px;padding:20px 50px;position:relative}@media screen and (max-width:768px){.custom-notie__content{padding:20px 30px}}.custom-notie__content a{color:#fff;font-weight:600}.custom-notie__error{background-color:#f5456e;color:#fff}.custom-notie__success{background-color:#32b643;color:#fff}.custom-notie__warning{background-color:#4353ff;color:#fff}.custom-notie__close-mark{position:absolute;top:20px;right:20px;width:15px;cursor:pointer}","",{version:3,sources:["C:/projects/oliv-frontend/src/Shared/components/CustomNotie/CustomNotie.scss"],names:[],mappings:"AAAA,yBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,WAAY,AACZ,iBAAkB,AAClB,gBAAiB,AACjB,eAAgB,AAChB,UAAW,AACX,OAAQ,AACR,sBAAuB,AACvB,QAAS,AACT,kBAAmB,AACnB,YAAa,AACb,4CAAiD,AACzC,oCAAyC,AACjD,uCAAwC,AACxC,kCAAmC,AACnC,8BAAgC,CAAE,AAEpC,uBACE,KAAO,CAAE,AAEX,uBACE,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,iBAAmB,CAAE,AACrB,oCACE,uBACE,iBAAmB,CAAE,CAAE,AAC3B,yBACE,WAAY,AACZ,eAAiB,CAAE,AAEvB,qBACE,yBAA0B,AAC1B,UAAY,CAAE,AAEhB,uBACE,yBAA0B,AAC1B,UAAY,CAAE,AAEhB,uBACE,yBAA0B,AAC1B,UAAY,CAAE,AAEhB,0BACE,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,WAAY,AACZ,cAAgB,CAAE",file:"CustomNotie.scss",sourcesContent:[".custom-notie__container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  font-size: 1.6rem;\n  min-height: 80px;\n  position: fixed;\n  top: -50vh;\n  left: 0;\n  background-color: #fff;\n  right: 0;\n  text-align: center;\n  z-index: 999;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n  -webkit-transition: all .5s ease-in-out;\n  -o-transition: all .5s ease-in-out;\n  transition: all .5s ease-in-out; }\n\n.custom-notie__visible {\n  top: 0; }\n\n.custom-notie__content {\n  width: 100%;\n  max-width: 1000px;\n  padding: 20px 50px;\n  position: relative; }\n  @media screen and (max-width: 768px) {\n    .custom-notie__content {\n      padding: 20px 30px; } }\n  .custom-notie__content a {\n    color: #fff;\n    font-weight: 600; }\n\n.custom-notie__error {\n  background-color: #f5456e;\n  color: #fff; }\n\n.custom-notie__success {\n  background-color: #32b643;\n  color: #fff; }\n\n.custom-notie__warning {\n  background-color: #4353ff;\n  color: #fff; }\n\n.custom-notie__close-mark {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 15px;\n  cursor: pointer; }\n"],sourceRoot:""}])},3388:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={success:"success",error:"error",warning:"warning"}},3389:function(e,t,n){"use strict";n.d(t,"b",function(){return b});var o=n(9),i=n.n(o),r=n(10),a=n.n(r),c=n(100),s=n(19),l=n(28),A=n(3390),p=n(159),m=n(2950),u=n(66),d=n(102),f=n(68),_=n(2080),g=this,h=new p.a,b="CandidateSignUpForm",C=Object(c.s)({form:b,validate:m.a,asyncValidate:Object(m.b)(h.verifyCandidateEmail),shouldAsyncValidate:function(){return!0},asyncBlurFields:[]})(A.a),B=function(e){var t=Object(_.a)("stripe_form_email"),n=Object(u.w)(["email"],window.location.search),o=n.email;return{initialValues:{email:o?decodeURIComponent(o):t||""},isLoading:e.user.isLoading}},x=function(e,t){var n=function(e){return e?"/candidate/thanks":"/candidate/dashboard"};return{loginWithLinkedIn:function(){function o(e){return r.apply(this,arguments)}var r=a()(i.a.mark(function o(r){var a,c,s;return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=Object(d.k)(r),o.next=3,e(Object(f.j)(a));case 3:return c=o.sent,s=c.isNewAccount,o.abrupt("return",t.history.push(n(s)));case 6:case"end":return o.stop()}},o,g)}));return o}(),loginWithGoogle:function(){function o(e){return r.apply(this,arguments)}var r=a()(i.a.mark(function o(r){var a,c,s;return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return a=Object(d.j)(r),o.next=3,e(Object(f.i)(a));case 3:return c=o.sent,s=c.isNewAccount,o.abrupt("return",t.history.push(n(s)));case 6:case"end":return o.stop()}},o,g)}));return o}()}};t.a=Object(s.g)(Object(l.b)(B,x)(C))},3390:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(100),a=n(766),c=n(91),s=n(21),l=n(2948),A=n(2949),p=n(2947),m=n(67),u=n(812),d=n(486),f=n(2080),_=n(189),g=n.n(_),h=function(e){var t=e.error,n=e.submitting,s=e.t,_=e.handleSubmit,h=e.redirectToComplete,b=e.loginWithLinkedIn,C=e.loginWithGoogle,B=e.isLoading,x=function(e){"popup_closed_by_user"===e.error&&(console.error(e),m.a.error(s("alerts.loginWithSocialFailed")))},E=function(e){console.log(e),u.b.startSignUp(e.email),d.c.startSignUp(e.email),h(e),Object(f.c)("stripe_form_email")},v=function(e){return s(n||B?"authorization.signingUp":"authorization."+e)},w=function(){var e=Object(f.a)("stripe_form_email");e&&e&&_(E({email:e}))};return Object(o.useEffect)(function(){w(),g.a.track("Page View - Sign Up")},[]),i.a.createElement(r.c,{onSubmit:_(E)},i.a.createElement(a.z,{text:s("authorization.signUp")}),i.a.createElement("p",{className:"form__text form__text--sign-up"},s("authorization.candidateSignUpCTA")),i.a.createElement(r.a,{component:a.f,label:s("forms.email.label"),name:"email",placeholder:s("forms.email.placeholder"),type:"email"}),i.a.createElement(c.c,{className:"button--submit",disabled:t||n||e.isLoading,type:"submit",block:!0},v("createAccount")),i.a.createElement(p.a,{text:s("authorization.orSignupWith")}),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column col-6 col-sm-12 button--linked-in__wrapper"},i.a.createElement(l.a,{disabled:e.isLoading,clientId:"77vqq3c2wowk75",text:v("linkedIn"),callback:b})),i.a.createElement("div",{className:"column col-6 col-sm-12"},i.a.createElement(A.a,{clientId:"203838489787-0lsdlf5sbjhm0dne2mcgg9rk6jvgr016.apps.googleusercontent.com",onSuccess:C,onFailure:x,disabled:e.isLoading,text:v("google")}))))};t.a=Object(s.a)(h)}});
//# sourceMappingURL=CandidateRegistrationConnector.5c21081d.chunk.js.map