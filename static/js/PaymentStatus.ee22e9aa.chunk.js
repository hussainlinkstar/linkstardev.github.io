webpackJsonp([24],{2036:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(28),r=e(3701),s=e(481),i=e(244),c=e(128),o=function(){return{redirectLink:"/employer/job-offers/active"}},p=function(t,n){return{finalizeProductTransaction:function(n){return t(Object(s.d)(n))},fetchCurrentPlan:function(){return t(Object(c.d)())},fetchUser:function(){return t(Object(i.c)(n.match.params.id))}}};n.default=Object(a.b)(o,p)(r.a)},3701:function(t,n,e){"use strict";var a=e(9),r=e.n(a),s=e(10),i=e.n(s),c=e(12),o=e.n(c),p=e(4),A=e.n(p),u=e(5),m=e.n(u),l=e(13),d=e.n(l),f=e(14),h=e.n(f),y=e(0),B=e.n(y),_=e(111),g=e(19),x=e(11),C=e.n(x),v=e(21),E=e(331),b=e(91),k=e(511),w=e(6),j=e(3702),P=(e.n(j),function(t){function n(){var t,e,a,r;A()(this,n);for(var s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return e=a=d()(this,(t=n.__proto__||o()(n)).call.apply(t,[this].concat(i))),a.redirectToDashboard=function(){return a.props.history.push(a.props.redirectLink)},a.contactTeam=function(){return B.a.createElement("span",null,B.a.createElement("a",{href:"mailto:team@oliv.com"},"team@oliv.com"))},a.renderConfirmation=function(){var t=a.props,n=t.t,e=t.match.params.status,r=C()({"payment-status__icon":!0,"icon-im-success":e===E.a.authorised,"icon-im-failure":e!==E.a.authorised});return B.a.createElement("div",{className:"payment-status__container parsing--hidden"},B.a.createElement("div",{className:"payment-status"},B.a.createElement("div",{className:"payment-status__wrapper"},B.a.createElement("div",{className:"payment-status__content"},B.a.createElement("i",{className:r}),B.a.createElement("h2",{className:"payment-status__heading"},n("payment.confirmation."+e+".title")),B.a.createElement(_.b,{parent:"p",i18nKey:"payment.confirmation."+e+".text",className:"payment-status__text",contactTeam:a.contactTeam()}),B.a.createElement(b.l,{onClick:a.redirectToDashboard},n("payment.continue."+e))))))},r=e,d()(a,r)}return h()(n,t),m()(n,[{key:"componentDidMount",value:function(){function t(){return n.apply(this,arguments)}var n=i()(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=w.path(["match","params","signature"],this.props),!Object(k.a)(n)){t.next=6;break}return t.next=4,this.props.finalizeProductTransaction(n);case 4:this.props.fetchCurrentPlan(),this.props.fetchUser();case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"render",value:function(){var t=this.props.match.params.status;return E.b.includes(t)?this.renderConfirmation():B.a.createElement(g.d,{to:this.props.redirectLink})}}]),n}(y.Component));n.a=Object(g.g)(Object(v.a)(P))},3702:function(t,n,e){var a=e(3703);"string"===typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0};r.transform=void 0;e(1996)(a,r);a.locals&&(t.exports=a.locals)},3703:function(t,n,e){n=t.exports=e(1995)(!0),n.push([t.i,".payment-status__container{display:block!important}.payment-status{display:table;width:100%;height:calc(100vh - 126px)}.payment-status__heading{font-size:21px;margin:29px 0 21px}.payment-status__wrapper{display:table-cell;vertical-align:middle;padding-top:80px;padding-left:16px;padding-right:16px}.payment-status__content{text-align:center;max-width:568px;margin:0 auto;width:100%}.payment-status__icon{color:#4353ff;font-size:64px}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/components/PaymentStatus/PaymentStatus.scss"],names:[],mappings:"AAAA,2BACE,uBAA0B,CAAE,AAE9B,gBACE,cAAe,AACf,WAAY,AACZ,0BAA4B,CAAE,AAEhC,yBACE,eAAgB,AAChB,kBAAoB,CAAE,AAExB,yBACE,mBAAoB,AACpB,sBAAuB,AACvB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAoB,CAAE,AAExB,yBACE,kBAAmB,AACnB,gBAAiB,AACjB,cAAe,AACf,UAAY,CAAE,AAEhB,sBACE,cAAe,AACf,cAAgB,CAAE",file:"PaymentStatus.scss",sourcesContent:[".payment-status__container {\n  display: block !important; }\n\n.payment-status {\n  display: table;\n  width: 100%;\n  height: calc(100vh - 126px); }\n\n.payment-status__heading {\n  font-size: 21px;\n  margin: 29px 0 21px; }\n\n.payment-status__wrapper {\n  display: table-cell;\n  vertical-align: middle;\n  padding-top: 80px;\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.payment-status__content {\n  text-align: center;\n  max-width: 568px;\n  margin: 0 auto;\n  width: 100%; }\n\n.payment-status__icon {\n  color: #4353ff;\n  font-size: 64px; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=PaymentStatus.ee22e9aa.chunk.js.map