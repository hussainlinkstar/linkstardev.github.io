webpackJsonp([10],{2030:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(28),n=r(19),o=r(3692),c=r(154),i=r(239),s=r(481),l=function(e,t){return{price:Object(c.k)(e),currency:Object(c.o)(e),isAuthenticated:e.user.isAuthenticated,orderRef:t.match.params.orderRef,employerId:e.user.details.id}},p=function(e,t){return{fetchCurrentLocationIfNeeded:function(){return e(Object(i.c)())},saveOrderRefIfNeeded:function(){return e(Object(s.e)(t.match.params.orderRef))}}};t.default=Object(n.g)(Object(a.b)(l,p)(o.a))},2031:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(28),n=r(19),o=r(3696),c=r(154),i=r(239),s=r(481),l=function(e,t){return{price:Object(c.a)(e),currency:Object(c.o)(e),isAuthenticated:e.user.isAuthenticated,orderRef:t.match.params.orderRef,employerId:e.user.details.id}},p=function(e,t){return{fetchCurrentLocationIfNeeded:function(){return e(Object(i.c)())},saveOrderRefIfNeeded:function(){return e(Object(s.e)(t.match.params.orderRef))}}};t.default=Object(n.g)(Object(a.b)(l,p)(o.a))},3692:function(e,t,r){"use strict";var a=r(3693);t.a=a.a},3693:function(e,t,r){"use strict";var a=r(9),n=r.n(a),o=r(10),c=r.n(o),i=r(12),s=r.n(i),l=r(4),p=r.n(l),d=r(5),u=r.n(d),m=r(13),h=r.n(m),f=r(14),y=r.n(f),b=r(0),g=r.n(b),v=r(320),w=(r.n(v),r(2594)),k=r(21),A=r(334),j=r(460),E=r(331),P=r(191),O=r(774),_=r(3694),C=(r.n(_),new A.a),R=function(e){function t(){var e,r,a,n;p()(this,t);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return r=a=h()(this,(e=t.__proto__||s()(t)).call.apply(e,[this].concat(c))),a.state={ready:!1,telrReady:!1},a.onTelrLoad=function(){return a.setState({telrReady:!0})},a.redirectByTelrStatusCode=function(e){var t=a.props,r=t.employerId,n=t.orderRef;switch(e){case E.c.paid:Object(j.h)(),window.location.href=window.location.origin+"/employer/"+r+"/payment/"+E.a.authorised+"/"+n;break;case E.c.cancelled:Object(j.h)(),window.location.href=window.location.origin+"/employer/"+r+"/payment/"+E.a.cancelled+"/"+n;break;case E.c.declined:Object(j.h)(),window.location.href=window.location.origin+"/employer/"+r+"/payment/"+E.a.declined+"/"+n;break;default:return a.setState({ready:!0})}},n=r,h()(a,n)}return y()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.props.fetchCurrentLocationIfNeeded(),this.props.saveOrderRefIfNeeded(),this.validatePayment(this.props.orderRef)}},{key:"validatePayment",value:function(){function e(e){return t.apply(this,arguments)}var t=c()(n.a.mark(function e(t){var r,a,o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.checkMembershipPlanPayment(t);case 3:return r=e.sent,a=r.data,o=a.order.content.order.status,e.abrupt("return",this.redirectByTelrStatusCode(o.code));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return e}()},{key:"render",value:function(){var e=this.props,t=e.t,r=e.price,a=e.currency,n=e.orderRef;return g.a.createElement(b.Fragment,null,g.a.createElement(v.Helmet,null,g.a.createElement("title",null,O.k.title),g.a.createElement("meta",{name:"description",content:O.k.description}),g.a.createElement("meta",{property:"og:title",content:O.k.title}),g.a.createElement("meta",{property:"og:type",content:"website"}),g.a.createElement("meta",{property:"og:image",content:O.k.image}),g.a.createElement("meta",{property:"og:image:width",content:"1200"}),g.a.createElement("meta",{property:"og:image:height",content:"630"}),g.a.createElement("meta",{property:"og:url",content:O.k.url}),g.a.createElement("meta",{property:"og:description",content:O.k.description})),g.a.createElement(w.a,{reviewUrl:"/pricing/job-posts/review",checkoutUrl:"/pricing/job-posts/checkout/"+n,order:this.order,productAmount:this.productAmount,price:Object(j.e)(Object(j.a)(Object(j.f)(),r),a),benefits:[t("plansPage.products.jobPost.benefits.expiryPeriod"),t("plansPage.products.jobPost.benefits.companyPage"),t("plansPage.products.jobPost.benefits.applicantFilters"),t("plansPage.products.jobPost.benefits.support")],benefitsTitle:t("order.jobPostBenefitsTitle"),showCheckoutBtn:!1}))}},{key:"order",get:function(){var e=this.props.orderRef,t=this.state,r=t.ready,a=t.telrReady;return g.a.createElement(b.Fragment,null,!r&&!a&&g.a.createElement(P.a,{className:"loader--component"}),g.a.createElement("iframe",{onLoad:this.onTelrLoad,className:"job-post-checkout__frame",src:Object(E.f)(e)}))}},{key:"productAmount",get:function(){var e=this.props.t;return g.a.createElement("div",null,Object(j.f)()+" x "+e("plansPage.products.jobPost.title"),g.a.createElement("div",{className:"job-post-order__summary-description-wrapper"},g.a.createElement("span",{className:"job-post-order__summary-description"},e("plansPage.products.jobPost.summaryDescription"))))}}]),t}(b.Component);t.a=Object(k.a)(R)},3694:function(e,t,r){var a=r(3695);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0};n.transform=void 0;r(1999)(a,n);a.locals&&(e.exports=a.locals)},3695:function(e,t,r){t=e.exports=r(1998)(!0),t.push([e.i,".job-post-checkout__frame{display:block;margin:0 auto;border:0;width:100%;min-height:1500px}@media (max-width:767px){.job-post-checkout__frame{min-height:1500px}}","",{version:3,sources:["C:/projects/oliv-frontend/src/Shared/views/JobPostOrderCheckout/JobPostOrderCheckout.scss"],names:[],mappings:"AAAA,0BACE,cAAe,AACf,cAAe,AACf,SAAU,AACV,WAAY,AACZ,iBAAmB,CAAE,AACrB,yBACE,0BACE,iBAAmB,CAAE,CAAE",file:"JobPostOrderCheckout.scss",sourcesContent:[".job-post-checkout__frame {\n  display: block;\n  margin: 0 auto;\n  border: 0;\n  width: 100%;\n  min-height: 1500px; }\n  @media (max-width: 767px) {\n    .job-post-checkout__frame {\n      min-height: 1500px; } }\n"],sourceRoot:""}])},3696:function(e,t,r){"use strict";var a=r(9),n=r.n(a),o=r(10),c=r.n(o),i=r(12),s=r.n(i),l=r(4),p=r.n(l),d=r(5),u=r.n(d),m=r(13),h=r.n(m),f=r(14),y=r.n(f),b=r(0),g=r.n(b),v=r(320),w=(r.n(v),r(2594)),k=r(21),A=r(334),j=r(331),E=r(191),P=r(111),O=r(460),_=r(774),C=r(2996),R=(r.n(C),new A.a),N=function(e){function t(){var e,r,a,n;p()(this,t);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return r=a=h()(this,(e=t.__proto__||s()(t)).call.apply(e,[this].concat(c))),a.state={ready:!1,telrReady:!1},a.onTelrLoad=function(){return a.setState({telrReady:!0})},a.redirectToHelp=function(){return window.open("https://help.oliv.com/searching-the-community/cancelling-your-membership","_blank")},a.redirectByTelrStatusCode=function(e){var t=a.props,r=t.employerId,n=t.orderRef;switch(e){case j.c.paid:window.location.href=window.location.origin+"/employer/"+r+"/payment/"+j.a.authorised+"/"+n;break;case j.c.cancelled:window.location.href=window.location.origin+"/employer/"+r+"/payment/"+j.a.cancelled+"/"+n;break;case j.c.declined:window.location.href=window.location.origin+"/employer/"+r+"/payment/"+j.a.declined+"/"+n;break;default:return a.setState({ready:!0})}},n=r,h()(a,n)}return y()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.props.fetchCurrentLocationIfNeeded(),this.props.saveOrderRefIfNeeded(),this.validatePayment(this.props.orderRef)}},{key:"validatePayment",value:function(){function e(e){return t.apply(this,arguments)}var t=c()(n.a.mark(function e(t){var r,a,o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.checkMembershipPlanPayment(t);case 3:return r=e.sent,a=r.data,o=a.order.content.order.status,e.abrupt("return",this.redirectByTelrStatusCode(o.code));case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return e}()},{key:"render",value:function(){var e=this.props,t=e.t,r=e.price,a=e.currency,n=e.orderRef;return g.a.createElement(b.Fragment,null,g.a.createElement(v.Helmet,null,g.a.createElement("title",null,_.d.title),g.a.createElement("meta",{name:"description",content:_.d.description}),g.a.createElement("meta",{property:"og:title",content:_.d.title}),g.a.createElement("meta",{property:"og:type",content:"website"}),g.a.createElement("meta",{property:"og:image",content:_.d.image}),g.a.createElement("meta",{property:"og:image:width",content:"1200"}),g.a.createElement("meta",{property:"og:image:height",content:"630"}),g.a.createElement("meta",{property:"og:url",content:_.d.url}),g.a.createElement("meta",{property:"og:description",content:_.d.description})),g.a.createElement(w.a,{reviewUrl:"/pricing/candidates/review",checkoutUrl:"/pricing/candidates/checkout/"+n,order:this.order,productAmount:this.productAmount,price:Object(O.e)(r,a),benefitsTitle:t("order.jobPostBenefitsTitle"),benefits:[t("plansPage.products.databaseSearch.benefits.screenedCommunity"),t("plansPage.products.databaseSearch.benefits.cvs"),t("plansPage.products.databaseSearch.benefits.filters"),t("plansPage.products.databaseSearch.benefits.sort")],showCheckoutBtn:!1}))}},{key:"order",get:function(){var e=this.props.orderRef,t=this.state,r=t.ready,a=t.telrReady;return g.a.createElement(b.Fragment,null,!r&&!a&&g.a.createElement(E.a,{className:"loader--component"}),g.a.createElement("iframe",{onLoad:this.onTelrLoad,className:"credits-checkout__frame",src:Object(j.f)(e)}))}},{key:"productAmount",get:function(){var e=this.props.t;return g.a.createElement("div",{className:"database-search-summary__wrapper"},g.a.createElement("span",null,e("plansPage.products.databaseSearch.title")),g.a.createElement("span",{className:"database-search-summary__description"},g.a.createElement(P.c,{i18nKey:"plansPage.products.databaseSearch.summaryDescription"},"View unlimited profiles and contact up to 50 profiles every month. Renewed every month automatically until you ",g.a.createElement("a",{className:"click-able-link",onClick:this.redirectToHelp},"cancel")," your plan")))}}]),t}(b.Component);t.a=Object(k.a)(N)}});
//# sourceMappingURL=JobPostOrderCheckout.24a8a4b9.chunk.js.map