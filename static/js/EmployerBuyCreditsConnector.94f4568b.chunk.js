webpackJsonp([33],{2024:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(28),c=a(3661),n=a(154),o=a(238),s=a(481),i=a(331),l=a(2985),d=a(30),u=function(e){return{price:Object(n.a)(e),currency:Object(n.o)(e),isAuthenticated:e.user.isAuthenticated,orderRef:Object(l.a)(e),paymentResponseStatus:Object(l.b)(e),userEmail:Object(d.I)(e)}},p=function(e){return{fetchCurrentLocationIfNeeded:function(){return e(Object(o.c)())},createProductTransaction:function(){return e(Object(s.a)(i.e.credits,50))}}};t.default=Object(r.b)(u,p)(c.a)},3661:function(e,t,a){"use strict";var r=a(9),c=a.n(r),n=a(10),o=a.n(n),s=a(12),i=a.n(s),l=a(4),d=a.n(l),u=a(5),p=a.n(u),m=a(13),h=a.n(m),b=a(14),f=a.n(b),E=a(0),g=a.n(E),v=a(320),y=(a.n(v),a(2586)),_=a(21),k=a(460),j=a(111),N=a(2984),O=(a.n(N),a(448)),P=a(156),C=a(79),w=a(67),S=a(78),T=a(773),A=a(494),R=a(6),L=new A.a,z=function(e){function t(){var e,a,r,n,s=this;d()(this,t);for(var l=arguments.length,u=Array(l),p=0;p<l;p++)u[p]=arguments[p];return a=r=h()(this,(e=t.__proto__||i()(t)).call.apply(e,[this].concat(u))),r.redirectToHelp=function(){return window.open("https://help.oliv.com/searching-the-community/cancelling-your-membership","_blank")},r.renderTooltipContent=function(){var e=r.props.t;return g.a.createElement("div",{className:"database-search-order__tooltip-content"},g.a.createElement("span",null,e("plansPage.products.customized.tooltips.contacts.contactsHeader")+":"),g.a.createElement("ul",null,g.a.createElement("li",null,e("plansPage.products.customized.tooltips.contacts.cvDownload")),g.a.createElement("li",null,e("plansPage.products.customized.tooltips.contacts.inviteCandidate")),g.a.createElement("li",null,e("plansPage.products.customized.tooltips.contacts.revealContact"))))},r.handleTransaction=o()(c.a.mark(function e(){var t,a,n,o,i,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.createProductTransaction();case 2:return t=r.props,a=t.t,n=t.paymentResponseStatus,o=t.orderRef,i=function(){return w.a.error(a("errors.transactionCreateError"))},l=function(){return r.props.history.push("/pricing/candidates/checkout/"+o)},e.abrupt("return",Object(R.ifElse)(Object(R.pipe)(Object(R.equals)(200),R.not),i,l)(n));case 6:case"end":return e.stop()}},e,s)})),r.redirectToLogin=function(){return r.props.history.push("/employer/login?selfCheckout=jobPosts")},r.onCheckout=function(){return Object(R.ifElse)(Object(R.equals)(!0),r.handleTransaction,r.redirectToLogin)(r.props.isAuthenticated)},n=a,h()(r,n)}return f()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.props.fetchCurrentLocationIfNeeded(),this.props.isAuthenticated&&L.checkoutStartedEvent({quantity:50,source:"self-checkout",product:"credits",locationCode:Object(k.c)()})}},{key:"render",value:function(){var e=this.props,t=e.t,a=e.price,r=e.currency,c=e.orderRef;return g.a.createElement("div",null,g.a.createElement(v.Helmet,null,g.a.createElement("title",null,T.d.title),g.a.createElement("meta",{name:"description",content:T.d.description}),g.a.createElement("meta",{property:"og:title",content:T.d.title}),g.a.createElement("meta",{property:"og:type",content:"website"}),g.a.createElement("meta",{property:"og:image",content:T.d.image}),g.a.createElement("meta",{property:"og:image:width",content:"1200"}),g.a.createElement("meta",{property:"og:image:height",content:"630"}),g.a.createElement("meta",{property:"og:url",content:T.d.url}),g.a.createElement("meta",{property:"og:description",content:T.d.description})),g.a.createElement(y.a,{reviewUrl:C.n.creditsReview,checkoutUrl:"/pricing/candidates/checkout/"+c,disableCheckoutLink:""===c,order:this.order,productAmount:this.productAmount,price:Object(k.e)(a,r),benefits:[t("plansPage.products.databaseSearch.benefits.screenedCommunity"),t("plansPage.products.databaseSearch.benefits.cvs"),t("plansPage.products.databaseSearch.benefits.filters"),t("plansPage.products.databaseSearch.benefits.sort")],benefitsTitle:t("order.databaseSearchBenefitsTitle"),onCheckout:this.onCheckout,checkoutButtonText:t("order.checkout")}))}},{key:"productAmount",get:function(){var e=this.props.t;return g.a.createElement("div",{className:"database-search-summary__wrapper"},g.a.createElement("span",null,e("plansPage.products.databaseSearch.title")),g.a.createElement("span",{className:"database-search-summary__description"},g.a.createElement(j.c,{i18nKey:"plansPage.products.databaseSearch.summaryDescription"},"View unlimited profiles and contact up to 50 profiles every month. Renewed every month automatically until you ",g.a.createElement("a",{className:"click-able-link",onClick:this.redirectToHelp},"cancel")," your plan")))}},{key:"order",get:function(){var e=this.props,t=e.t,a=e.price,r=e.currency,c=Object(P.c)()?"click":"mouseenter",n=Object(k.e)(a,r);return g.a.createElement("div",{className:"database-search-order"},g.a.createElement("div",{className:"database-search-order__title"},t("order.cvSearch")),g.a.createElement("div",{className:"database-search-order__order-review"},g.a.createElement("div",{className:"database-search-order__order-product"},g.a.createElement("div",{className:"database-search-order__order-product-name"},t("plansPage.products.databaseSearch.title")),g.a.createElement("div",{className:"database-search-order__order-product-price"},g.a.createElement("span",{className:"database-search-order__order-product-price-label"},t("order.cvStartingAt",{priceWithCurrency:n})))),g.a.createElement("div",{className:"database-search-order__select"},g.a.createElement("div",{className:"database-search-order__select-label"},g.a.createElement("span",{className:"database-search-order__select-label--title"},t("plansPage.products.jobPost.total")),g.a.createElement("span",{className:"database-search-order__select-label--amount"},"50"),t("plansPage.products.databaseSearch.contacts"),g.a.createElement(O.a,{className:"database-search-order__tooltip",trigger:c,content:this.renderTooltipContent(),ownTheme:"contacts-popper"},g.a.createElement("i",{className:"ion-md-information-circle"}))))))}}]),t}(E.Component);t.a=Object(S.d)(_.a)(z)}});
//# sourceMappingURL=EmployerBuyCreditsConnector.94f4568b.chunk.js.map