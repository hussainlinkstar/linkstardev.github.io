webpackJsonp([17],{2019:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(28),o=e(3541),c=e(154),r=e(156),i=function(n){return{phoneNumber:Object(c.m)(n),isOlivReachable:Object(c.s)(n),isMobile:Object(r.c)(n)}};t.default=Object(a.b)(i)(o.a)},3541:function(n,t,e){"use strict";var a=e(12),o=e.n(a),c=e(4),r=e.n(c),i=e(5),A=e.n(i),s=e(13),l=e.n(s),p=e(14),m=e.n(p),u=e(0),f=e.n(u),d=e(319),g=(e.n(d),e(19)),B=e(21),x=e(3542),C=e(766),b=e(2088),h=e(47),E=e(2203),y=e(6),v=e(3550),_=e.n(v),w=e(3551),k=e.n(w),j=e(3552),O=(e.n(j),e(3553)),z=(e.n(O),e(3555)),U=e.n(z),D=e(773),N=e(3556),S=Object(N.a)(),q=S.view,P=Object(y.pipe)(Object(y.propOr)("","phoneNumber"),h.d),R=function(){return f.a.createElement("div",null)},F=function(n){function t(){var n,e,a,c;r()(this,t);for(var i=arguments.length,A=Array(i),s=0;s<i;s++)A[s]=arguments[s];return e=a=l()(this,(n=t.__proto__||o()(t)).call.apply(n,[this].concat(A))),a.state={ready:!1},a.getPhoneNumber=function(){return f.a.createElement("div",{className:"contact-container--company__phone"},f.a.createElement("img",{className:"contact-container--company__icon",src:_.a,alt:"contact icon"}),Object(E.b)(a.props.phoneNumber))},a.getEmail=function(){return f.a.createElement("div",{className:"contact-container--company__email"},f.a.createElement("img",{className:"contact-container--company__icon",src:k.a,alt:"contact icon"}),b.g)},a.getContact=function(){return Object(y.cond)([[Object(y.propEq)("isOlivReachable",!1),R],[P,a.getPhoneNumber],[y.T,a.getEmail]])(a.props)},c=e,l()(a,c)}return m()(t,n),A()(t,[{key:"componentWillReceiveProps",value:function(n){var t=n.isScriptLoaded,e=n.isScriptLoadSucceed;t&&e&&this.setState({ready:!0})}},{key:"render",value:function(){var n=this.props,t=n.t,e=n.isMobile;return f.a.createElement("section",{className:"contact-us__container parsing--hidden"},f.a.createElement(d.Helmet,null,f.a.createElement("title",null,D.c.title),f.a.createElement("meta",{name:"description",content:D.c.description}),f.a.createElement("meta",{property:"og:title",content:D.c.title}),f.a.createElement("meta",{property:"og:type",content:"website"}),f.a.createElement("meta",{property:"og:image",content:D.c.image}),f.a.createElement("meta",{property:"og:image:width",content:"1200"}),f.a.createElement("meta",{property:"og:image:height",content:"630"}),f.a.createElement("meta",{property:"og:url",content:D.c.url}),f.a.createElement("meta",{property:"og:description",content:D.c.description})),f.a.createElement(C.a,null,f.a.createElement("div",{className:"contact-container"},f.a.createElement(q,null),f.a.createElement("div",{className:"about-container column col-6 col-sm-12"},e?"":f.a.createElement("img",{src:U.a}),f.a.createElement("div",{className:"column col-12 col-sm-12 contact-container--about"},f.a.createElement("div",{className:"contact-container--about__heading"}," ",t("contactPage.aboutUs")," "),f.a.createElement("div",{className:"contact-container--about__more"},f.a.createElement("p",null,t("contactPage.aboutUsMore_1")," "),f.a.createElement("p",null,t("contactPage.aboutUsMore_2")," ")),f.a.createElement(x.a,null))))))}}]),t}(u.Component);t.a=Object(g.g)(Object(B.a)(F))},3542:function(n,t,e){"use strict";var a=e(0),o=e.n(a),c=e(3543),r=e(3548),i=(e.n(r),function(){return o.a.createElement("div",{className:"social-icons"},function(){return c.a.map(function(n,t){return o.a.createElement("span",{key:n.key},o.a.createElement("a",{href:n.link},o.a.createElement("img",{src:n.svg})))})}())});t.a=i},3543:function(n,t,e){"use strict";e.d(t,"a",function(){return p});var a=e(3544),o=e.n(a),c=e(3545),r=e.n(c),i=e(3546),A=e.n(i),s=e(3547),l=e.n(s),p=[{svg:o.a,link:"https://www.instagram.com/oliv/",key:"Oliv's Instagram"},{svg:r.a,link:"https://twitter.com/OlivHQ",key:"Oliv's Twitter"},{svg:A.a,link:"https://www.facebook.com/OlivHQ/",key:"Oliv's Facebook"},{svg:l.a,link:"https://www.linkedin.com/company/olivhq",key:"Oliv's LinkedIn"}]},3544:function(n,t,e){n.exports=e.p+"static/media/insta-icon.1ad5a7cc.svg"},3545:function(n,t,e){n.exports=e.p+"static/media/twitter-icon.c13e6cf3.svg"},3546:function(n,t,e){n.exports=e.p+"static/media/facebook-icon.788eeb8b.svg"},3547:function(n,t,e){n.exports=e.p+"static/media/linkedIn-icon.39a01ce8.svg"},3548:function(n,t,e){var a=e(3549);"string"===typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0};o.transform=void 0;e(1996)(a,o);a.locals&&(n.exports=a.locals)},3549:function(n,t,e){t=n.exports=e(1995)(!0),t.push([n.i,".social-icons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:50px;margin-top:56px}","",{version:3,sources:["/Users/fahadzahid/oliv-frontend/src/Shared/layouts/ContactUs/components/SocialIcon.scss"],names:[],mappings:"AAAA,cACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,SAAU,AACV,eAAiB,CAAE",file:"SocialIcon.scss",sourcesContent:[".social-icons {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  gap: 50px;\n  margin-top: 56px; }\n"],sourceRoot:""}])},3550:function(n,t,e){n.exports=e.p+"static/media/contact-icon-call.32cc1057.svg"},3551:function(n,t,e){n.exports=e.p+"static/media/contact-icon-email.9f182470.svg"},3552:function(n,t,e){n.exports=e.p+"static/media/contact-icon-location.70b3b373.svg"},3553:function(n,t,e){var a=e(3554);"string"===typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0};o.transform=void 0;e(1996)(a,o);a.locals&&(n.exports=a.locals)},3554:function(n,t,e){t=n.exports=e(1995)(!0),t.push([n.i,".contact-us__container{display:block!important}.about-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}@media screen and (max-width:768px){.about-container{text-align:unset}}.contact-container{margin-top:80px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width:768px){.contact-container{margin-top:46px}}.contact-container .contact-container--heading{color:#2f3233;text-align:center;font-size:48px;font-weight:700;line-height:56px;margin:0}.contact-container .contact-container--company{margin:72px 0 88px}.contact-container .contact-container--company__name{font-size:22px;font-weight:500;line-height:36px;color:#2f3233;display:-ms-flexbox;display:flex}.contact-container .contact-container--company__address{margin:8px 0 42px 60px;font-weight:400}.contact-container .contact-container--company__address p{margin:2px}.contact-container .contact-container--company__social-icon{margin-top:56px;text-indent:-8px}.contact-container .contact-container--company__social-icon i{width:72px;text-align:center;display:inline-block;color:#c2c6c9}.contact-container .contact-container--company__social-icon i:before{font-size:48px}.contact-container .contact-container--company__social-icon i:hover{color:#4353ff;-o-transition:color .4s ease-out,background 1s ease-in;-ms-transition:color .4s ease-out,background 1s ease-in;-moz-transition:color .4s ease-out,background 1s ease-in;-webkit-transition:color .4s ease-out,background 1s ease-in}.contact-container .contact-container--company__phone{display:-ms-flexbox;display:flex;margin-top:22px;font-size:22px;font-weight:500;line-height:36px;color:#2f3233}.contact-container .contact-container--company__email{display:-ms-flexbox;display:flex;margin-top:28px;font-size:22px;font-weight:500;line-height:36px;color:#2f3233}.contact-container .contact-container--company__map{margin-top:70px}.contact-container .contact-container--company__icon{width:28px;height:36px;margin-right:32px}.main--arabic .contact-container .contact-container--company__icon{margin-left:32px;margin-right:0}.contact-container .contact-container--about .contact-container--about__heading{color:#2f3233;font-size:22px;font-weight:500;line-height:36px}@media screen and (max-width:768px){.contact-container .contact-container--about .contact-container--about__heading{margin-top:24px;text-align:center}}.contact-container .contact-container--about .contact-container--about__more{margin-top:14px;font-size:16px;line-height:26px;text-align:justify;font-weight:400}","",{version:3,sources:["/Users/fahadzahid/oliv-frontend/src/Shared/layouts/ContactUs/ContactUs.scss"],names:[],mappings:"AAAA,uBACE,uBAA0B,CAAE,AAE9B,iBACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,6BAA+B,CAAE,AACrC,oCACE,iBACE,gBAAkB,CAAE,CAAE,AAE5B,mBACE,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,cAAgB,CAAE,AACtB,oCACE,mBACE,eAAiB,CAAE,CAAE,AACzB,+CACE,cAAe,AACf,kBAAmB,AACnB,eAAgB,AAChB,gBAAkB,AAClB,iBAAkB,AAClB,QAAU,CAAE,AACd,+CACE,kBAAoB,CAAE,AACxB,qDACE,eAAgB,AAChB,gBAAiB,AACjB,iBAAkB,AAClB,cAAe,AACf,oBAAqB,AACrB,YAAc,CAAE,AAClB,wDACE,uBAAwB,AACxB,eAAiB,CAAE,AACnB,0DACE,UAAY,CAAE,AAClB,4DACE,gBAAiB,AACjB,gBAAkB,CAAE,AACpB,8DACE,WAAY,AACZ,kBAAmB,AACnB,qBAAsB,AACtB,aAAe,CAAE,AACjB,qEACE,cAAgB,CAAE,AACpB,oEACE,cAAe,AACf,uDAAyD,AACzD,wDAA0D,AAC1D,yDAA2D,AAC3D,2DAA8D,CAAE,AACtE,sDACE,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,iBAAkB,AAClB,aAAe,CAAE,AACnB,sDACE,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,iBAAkB,AAClB,aAAe,CAAE,AACnB,oDACE,eAAiB,CAAE,AACrB,qDACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CAAE,AACrB,mEACE,iBAAkB,AAClB,cAAgB,CAAE,AACtB,gFACE,cAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,gBAAkB,CAAE,AACpB,oCACE,gFACE,gBAAiB,AACjB,iBAAmB,CAAE,CAAE,AAC7B,6EACE,gBAAiB,AACjB,eAAgB,AAChB,iBAAkB,AAClB,mBAAoB,AACpB,eAAiB,CAAE",file:"ContactUs.scss",sourcesContent:[".contact-us__container {\n  display: block !important; }\n\n.about-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  @media screen and (max-width: 768px) {\n    .about-container {\n      text-align: unset; } }\n\n.contact-container {\n  margin-top: 80px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  @media screen and (max-width: 768px) {\n    .contact-container {\n      margin-top: 46px; } }\n  .contact-container .contact-container--heading {\n    color: #2f3233;\n    text-align: center;\n    font-size: 48px;\n    font-weight: bold;\n    line-height: 56px;\n    margin: 0; }\n  .contact-container .contact-container--company {\n    margin: 72px 0 88px; }\n  .contact-container .contact-container--company__name {\n    font-size: 22px;\n    font-weight: 500;\n    line-height: 36px;\n    color: #2f3233;\n    display: -ms-flexbox;\n    display: flex; }\n  .contact-container .contact-container--company__address {\n    margin: 8px 0 42px 60px;\n    font-weight: 400; }\n    .contact-container .contact-container--company__address p {\n      margin: 2px; }\n  .contact-container .contact-container--company__social-icon {\n    margin-top: 56px;\n    text-indent: -8px; }\n    .contact-container .contact-container--company__social-icon i {\n      width: 72px;\n      text-align: center;\n      display: inline-block;\n      color: #c2c6c9; }\n      .contact-container .contact-container--company__social-icon i::before {\n        font-size: 48px; }\n      .contact-container .contact-container--company__social-icon i:hover {\n        color: #4353ff;\n        -o-transition: color .4s ease-out, background 1s ease-in;\n        -ms-transition: color .4s ease-out, background 1s ease-in;\n        -moz-transition: color .4s ease-out, background 1s ease-in;\n        -webkit-transition: color .4s ease-out, background 1s ease-in; }\n  .contact-container .contact-container--company__phone {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 22px;\n    font-size: 22px;\n    font-weight: 500;\n    line-height: 36px;\n    color: #2f3233; }\n  .contact-container .contact-container--company__email {\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 28px;\n    font-size: 22px;\n    font-weight: 500;\n    line-height: 36px;\n    color: #2f3233; }\n  .contact-container .contact-container--company__map {\n    margin-top: 70px; }\n  .contact-container .contact-container--company__icon {\n    width: 28px;\n    height: 36px;\n    margin-right: 32px; }\n    .main--arabic .contact-container .contact-container--company__icon {\n      margin-left: 32px;\n      margin-right: 0; }\n  .contact-container .contact-container--about .contact-container--about__heading {\n    color: #2f3233;\n    font-size: 22px;\n    font-weight: 500;\n    line-height: 36px; }\n    @media screen and (max-width: 768px) {\n      .contact-container .contact-container--about .contact-container--about__heading {\n        margin-top: 24px;\n        text-align: center; } }\n  .contact-container .contact-container--about .contact-container--about__more {\n    margin-top: 14px;\n    font-size: 16px;\n    line-height: 26px;\n    text-align: justify;\n    font-weight: 400; }\n"],sourceRoot:""}])},3555:function(n,t,e){n.exports=e.p+"static/media/contact-us-form.9479e7e0.svg"},3556:function(n,t,e){"use strict";var a=e(9),o=e.n(a),c=e(10),r=e.n(c),i=e(0),A=e.n(i),s=e(3557),l=e(3561),p=this,m=function(n){var t=Object(l.a)(),e=t.onSubmitForm,a=function(){var n=r()(o.a.mark(function n(t){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e(t));case 1:case"end":return n.stop()}},n,p)}));return function(t){return n.apply(this,arguments)}}();return{view:function(){return A.a.createElement(A.a.Fragment,null,A.a.createElement(s.a,{onSubmitForm:a}))}}};t.a=m},3557:function(n,t,e){"use strict";function a(n){var t=this,e=n.onSubmitForm,a=n.t,o=Object(g.useState)({name:"",email:"",phone:"",description:""}),r=d()(o,2),A=r[0],l=r[1],m=Object(g.useState)(!1),f=d()(m,2),x=f[0],C=f[1],h=Object(g.useState)({}),E=d()(h,2),y=E[0],v=E[1],_=Object(g.useState)(!1),w=d()(_,2),k=w[0],j=w[1],O=Object(g.useState)(!1),z=d()(O,2),U=z[0],D=z[1],N={name:A.name,email:A.email,phone:A.phone,description:A.description},S=function(){return u()(A).every(function(n){return!0===n})?(C(!0),!0):(C(!1),!1)},q=function(n){var t=n.target,e=t.value,a=t.name,o=t.type;v(function(n){return p()({},n,s()({},a,e))}),l(function(n){return p()({},n,s()({},a,!!Object(b.b)(e,o,!0)))}),S()},P=function(){document.getElementById("contact-form").reset(),l({name:"",email:"",phone:"",description:""}),C(!1),v({}),j(!0),setTimeout(function(){j(!1)},3e3)},R=function(){var n=i()(c.a.mark(function n(){var a;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(x){n.next=2;break}return n.abrupt("return");case 2:return D(!0),n.next=5,e({name:y.name,email:y.email,phone:y.phone,description:y.description});case 5:a=n.sent;try{a.success&&P()}catch(n){console.log("ERROR",n)}finally{D(!1)}case 7:case"end":return n.stop()}},n,t)}));return function(){return n.apply(this,arguments)}}();return B.a.createElement(B.a.Fragment,null,B.a.createElement("div",{className:"column col-6 col-sm-12"},B.a.createElement("div",{className:"contact-us-form"},B.a.createElement("form",{id:"contact-form",autoComplete:"off"},B.a.createElement("h1",null,a("contactUsPage.form.heading","Contact us")),B.a.createElement("h3",null,a("contactUsPage.form.title","Report bugs, request features, and contact our team for account and billing help.")),B.a.createElement("div",{className:"form-group","data-valid":N.name},B.a.createElement("label",null,a("contactUsPage.form.full_name_label","Full Name")),B.a.createElement("input",{name:"name",type:"text",placeholder:a("contactUsPage.form.full_name_placeholder","Enter your full name"),onKeyUp:function(n){return q(n)},onChange:function(n){return q(n)},required:!0,autoComplete:"none"})),B.a.createElement("div",{className:"form-group","data-valid":N.email},B.a.createElement("label",null,a("contactUsPage.form.email_label","Email")),B.a.createElement("input",{name:"email",type:"email",placeholder:a("contactUsPage.form.email_placeholder","Enter your email"),onKeyUp:function(n){return q(n)},onChange:function(n){return q(n)},required:!0,autoComplete:"none"})),B.a.createElement("div",{className:"form-group","data-valid":N.phone},B.a.createElement("label",null,a("contactUsPage.form.phone_label","Phone Number")),B.a.createElement("input",{name:"phone",type:"tel",placeholder:a("+00 000 000 0000"),onKeyUp:function(n){return q(n)},onChange:function(n){return q(n)},required:!0,autoComplete:"none",onKeyPress:function(n){/[0-9]/.test(n.key)||n.preventDefault()}})),B.a.createElement("div",{className:"form-group","data-valid":N.description},B.a.createElement("label",null,a("contactUsPage.form.description_label","DESCRIPTION")),B.a.createElement("textarea",{name:"description",placeholder:a("contactUsPage.form.description_placeholder","Talk about the problem you're facing"),onKeyUp:function(n){return q(n)},onChange:function(n){return q(n)},required:!0,autoComplete:"none"}))),B.a.createElement("div",{className:"btn"},B.a.createElement("button",{className:"form-btn "+(!x&&"disabled_btn")+" col-sm-12",onClick:function(){R()},disabled:!x||U},a("contactUsPage.form.submit_btn_text","Submit Request")),k?B.a.createElement("span",{className:"form-response"},"Submit Successfully"):""))))}var o=e(9),c=e.n(o),r=e(10),i=e.n(r),A=e(8),s=e.n(A),l=e(7),p=e.n(l),m=e(163),u=e.n(m),f=e(153),d=e.n(f),g=e(0),B=e.n(g),x=e(21),C=e(3558),b=(e.n(C),e(2248)),h=e(3560);e.n(h);t.a=Object(x.a)(a)},3558:function(n,t,e){var a=e(3559);"string"===typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0};o.transform=void 0;e(1996)(a,o);a.locals&&(n.exports=a.locals)},3559:function(n,t,e){t=n.exports=e(1995)(!0),t.push([n.i,".contact-us-form{padding-right:75px}@media screen and (max-width:768px){.contact-us-form{padding-right:30px}}.contact-us-form h1,.contact-us-form h3{margin-bottom:20px}.contact-us-form .form-group{position:relative}.contact-us-form .form-group label{font-size:1.2rem;font-style:normal;font-weight:700;line-height:16px;text-transform:uppercase;color:#818385}.contact-us-form .form-group input{height:48px;padding:4px 16px}.contact-us-form .form-group input,.contact-us-form .form-group textarea{margin-top:5px;border-radius:.4rem;border:1px solid #dce1e4;background:#fff;margin-bottom:24px}.contact-us-form .form-group textarea{width:100%;height:150px;padding:15px 16px;resize:none;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.contact-us-form .form-group[data-valid=false] label{color:#f5456e}.contact-us-form .form-group[data-valid=false] input,.contact-us-form .form-group[data-valid=false] textarea{border:1px solid #f5456e}.contact-us-form .btn{position:relative}.contact-us-form .btn .form-btn{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-left:auto;border-radius:.4rem;background:#4353ff;-webkit-box-shadow:0 2px 8px 0 rgba(62,168,244,.1);box-shadow:0 2px 8px 0 rgba(62,168,244,.1);height:48px;padding:10px 36px;border:none;color:#fff;font-size:14px;font-style:normal;font-weight:600;line-height:16px}.contact-us-form .btn .form-response{position:absolute;right:0;margin-top:10px;padding:3px 28px;border-radius:.4rem;font-size:small}.disabled_btn{pointer-events:auto!important;cursor:not-allowed!important;background:#8f98f5!important}","",{version:3,sources:["/Users/fahadzahid/oliv-frontend/src/Shared/layouts/ContactUs/ContactUsView.scss"],names:[],mappings:"AAAA,iBACE,kBAAoB,CAAE,AACtB,oCACE,iBACE,kBAAoB,CAAE,CAAE,AAC5B,wCAEE,kBAAoB,CAAE,AACxB,6BACE,iBAAmB,CAAE,AACrB,mCACE,iBAAkB,AAClB,kBAAmB,AACnB,gBAAiB,AACjB,iBAAkB,AAClB,yBAA0B,AAC1B,aAAe,CAAE,AACnB,mCAEE,YAAa,AACb,gBAAkB,CAII,AACxB,yEAPE,eAAgB,AAGhB,oBAAsB,AACtB,yBAA0B,AAC1B,gBAAiB,AACjB,kBAAoB,CAaD,AAZrB,sCAEE,WAAY,AACZ,aAAc,AACd,kBAAmB,AAKnB,YAAa,AACb,8BAA+B,AACvB,sBAAuB,AAC/B,eAAiB,CAAE,AACrB,qDACE,aAAe,CAAE,AACnB,6GACE,wBAA0B,CAAE,AAChC,sBACE,iBAAmB,CAAE,AACrB,gCACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,iBAAkB,AAClB,oBAAsB,AACtB,mBAAoB,AACpB,mDAAwD,AACxD,2CAAgD,AAChD,YAAa,AACb,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,gBAAiB,AACjB,gBAAkB,CAAE,AACtB,qCACE,kBAAmB,AACnB,QAAS,AACT,gBAAiB,AACjB,iBAAkB,AAClB,oBAAsB,AACtB,eAAiB,CAAE,AAEzB,cACE,8BAAgC,AAChC,6BAAgC,AAChC,4BAA+B,CAAE",file:"ContactUsView.scss",sourcesContent:['.contact-us-form {\n  padding-right: 75px; }\n  @media screen and (max-width: 768px) {\n    .contact-us-form {\n      padding-right: 30px; } }\n  .contact-us-form h1,\n  .contact-us-form h3 {\n    margin-bottom: 20px; }\n  .contact-us-form .form-group {\n    position: relative; }\n    .contact-us-form .form-group label {\n      font-size: 1.2rem;\n      font-style: normal;\n      font-weight: 700;\n      line-height: 16px;\n      text-transform: uppercase;\n      color: #818385; }\n    .contact-us-form .form-group input {\n      margin-top: 5px;\n      height: 48px;\n      padding: 4px 16px;\n      border-radius: 0.4rem;\n      border: 1px solid #DCE1E4;\n      background: #fff;\n      margin-bottom: 24px; }\n    .contact-us-form .form-group textarea {\n      margin-top: 5px;\n      width: 100%;\n      height: 150px;\n      padding: 15px 16px;\n      border-radius: 0.4rem;\n      border: 1px solid #DCE1E4;\n      background: #fff;\n      margin-bottom: 24px;\n      resize: none;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow: hidden; }\n    .contact-us-form .form-group[data-valid="false"] label {\n      color: #f5456e; }\n    .contact-us-form .form-group[data-valid="false"] input, .contact-us-form .form-group[data-valid="false"] textarea {\n      border: 1px solid #f5456e; }\n  .contact-us-form .btn {\n    position: relative; }\n    .contact-us-form .btn .form-btn {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n      margin-left: auto;\n      border-radius: 0.4rem;\n      background: #4353ff;\n      -webkit-box-shadow: 0 2px 8px 0 rgba(62, 168, 244, 0.1);\n      box-shadow: 0 2px 8px 0 rgba(62, 168, 244, 0.1);\n      height: 48px;\n      padding: 10px 36px;\n      border: none;\n      color: #fff;\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 600;\n      line-height: 16px; }\n    .contact-us-form .btn .form-response {\n      position: absolute;\n      right: 0;\n      margin-top: 10px;\n      padding: 3px 28px;\n      border-radius: 0.4rem;\n      font-size: small; }\n\n.disabled_btn {\n  pointer-events: auto !important;\n  cursor: not-allowed  !important;\n  background: #8f98f5 !important; }\n'],sourceRoot:""}])},3560:function(n,t,e){n.exports=e.p+"static/media/earth-icon.bc72bd4d.svg"},3561:function(n,t,e){"use strict";var a=e(9),o=e.n(a),c=e(10),r=e.n(c),i=e(0),A=(e.n(i),e(3562)),s=this,l=function(){var n=Object(A.a)(),t=n.apiContactUsForm;return{onSubmitForm:function(){var n=r()(o.a.mark(function n(e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t(e));case 1:case"end":return n.stop()}},n,s)}));return function(t){return n.apply(this,arguments)}}()}};t.a=l},3562:function(n,t,e){"use strict";var a=e(9),o=e.n(a),c=e(10),r=e.n(c),i=e(0),A=(e.n(i),e(2124)),s=e(2125),l=this,p=function(){return{apiContactUsForm:function(){var n=r()(o.a.mark(function n(t){var e,a;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.a.contactForm,n.prev=1,n.next=4,Object(A.b)(e,t);case 4:if(a=n.sent,!a.success){n.next=7;break}return n.abrupt("return",a);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("ERROR",n.t0);case 12:case"end":return n.stop()}},n,l,[[1,9]])}));return function(t){return n.apply(this,arguments)}}()}};t.a=p}});