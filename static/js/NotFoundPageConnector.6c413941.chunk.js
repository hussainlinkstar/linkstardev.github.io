webpackJsonp([8],{2029:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(28),a=t(3688),o=function(e){return{userRole:e.user.role}};n.default=Object(i.b)(o)(a.a)},2030:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(28),a=t(3691),o=function(e){return{userRole:e.user.role}};n.default=Object(i.b)(o)(a.a)},3688:function(e,n,t){"use strict";var i=t(12),a=t.n(i),o=t(4),A=t.n(o),r=t(5),l=t.n(r),p=t(13),c=t.n(p),d=t(14),s=t.n(d),B=t(0),h=t.n(B),m=t(19),_=t(79),f=t(320),u=(t.n(f),t(91)),x=t(21),C=t(860),g=(t.n(C),t(3689)),v=(t.n(g),function(e){function n(){return A()(this,n),c()(this,(n.__proto__||a()(n)).apply(this,arguments))}return s()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.t,t=e.userRole;return h.a.createElement("div",{className:"not-found__container parsing--hidden"},h.a.createElement(f.Helmet,null,h.a.createElement("meta",{name:"status",content:410})),h.a.createElement("div",{className:"not-found__container-table"},h.a.createElement("div",{className:"not-found__table-cell"},h.a.createElement("h1",{className:"not-found__header"},n("notFoundPage.header")),h.a.createElement("p",{className:"not-found__description"},n("notFoundPage.description")),h.a.createElement(m.b,{to:_.s[t]},h.a.createElement(u.d,null,n("notFoundPage.ctaButton."+t))))))}}]),n}(B.Component));n.a=Object(m.g)(Object(x.a)(v))},3689:function(e,n,t){var i=t(3690);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0};a.transform=void 0;t(1996)(i,a);i.locals&&(e.exports=i.locals)},3690:function(e,n,t){n=e.exports=t(1995)(!0),n.push([e.i,".not-found__container{display:block!important}@media (max-width:480px){.not-found__container{margin-bottom:50px}}.not-found__container-table{display:table;width:100%;height:calc(100vh - 626px)}@media (max-width:480px){.not-found__container-table{height:calc(100vh - 699px)}}@media (min-width:481px) and (max-width:768px){.not-found__container-table{height:calc(100vh - 962px)}}.not-found__table-cell{display:table-cell;vertical-align:middle;padding-top:80px;padding-left:16px;padding-right:16px;text-align:center}.not-found__header{font-size:48px;line-height:56px;margin-bottom:24px}.not-found__description{font-size:18px;font-weight:400;line-height:30px}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/layouts/NotFoundPage/NotFoundPage.scss"],names:[],mappings:"AAAA,sBACE,uBAA0B,CAAE,AAC5B,yBACE,sBACE,kBAAoB,CAAE,CAAE,AAE9B,4BACE,cAAe,AACf,WAAY,AACZ,0BAA4B,CAAE,AAC9B,yBACE,4BACE,0BAA4B,CAAE,CAAE,AACpC,+CACE,4BACE,0BAA4B,CAAE,CAAE,AAEtC,uBACE,mBAAoB,AACpB,sBAAuB,AACvB,iBAAkB,AAClB,kBAAmB,AACnB,mBAAoB,AACpB,iBAAmB,CAAE,AAEvB,mBACE,eAAgB,AAChB,iBAAkB,AAClB,kBAAoB,CAAE,AAExB,wBACE,eAAgB,AAChB,gBAAiB,AACjB,gBAAkB,CAAE",file:"NotFoundPage.scss",sourcesContent:[".not-found__container {\n  display: block !important; }\n  @media (max-width: 480px) {\n    .not-found__container {\n      margin-bottom: 50px; } }\n\n.not-found__container-table {\n  display: table;\n  width: 100%;\n  height: calc(100vh - 626px); }\n  @media (max-width: 480px) {\n    .not-found__container-table {\n      height: calc(100vh - 699px); } }\n  @media (min-width: 481px) and (max-width: 768px) {\n    .not-found__container-table {\n      height: calc(100vh - 962px); } }\n\n.not-found__table-cell {\n  display: table-cell;\n  vertical-align: middle;\n  padding-top: 80px;\n  padding-left: 16px;\n  padding-right: 16px;\n  text-align: center; }\n\n.not-found__header {\n  font-size: 48px;\n  line-height: 56px;\n  margin-bottom: 24px; }\n\n.not-found__description {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 30px; }\n"],sourceRoot:""}])},3691:function(e,n,t){"use strict";var i=t(12),a=t.n(i),o=t(4),A=t.n(o),r=t(5),l=t.n(r),p=t(13),c=t.n(p),d=t(14),s=t.n(d),B=t(0),h=t.n(B),m=t(19),_=t(79),f=t(91),u=t(21),x=t(860),C=(t.n(x),t(3692)),g=(t.n(C),function(e){function n(){return A()(this,n),c()(this,(n.__proto__||a()(n)).apply(this,arguments))}return s()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.t,t=e.userRole;return h.a.createElement("div",{className:"private-profile__container parsing--hidden"},h.a.createElement("div",{className:"private-profile__container-table"},h.a.createElement("div",{className:"private-profile__table-cell"},h.a.createElement("h1",{className:"private-profile__header"},n("privateProfilePage.header")),h.a.createElement("p",{className:"private-profile__description"},n("privateProfilePage.description")),h.a.createElement(m.b,{to:_.s[t]},h.a.createElement(f.d,null,n("privateProfilePage.ctaButton."+t))))))}}]),n}(B.Component));n.a=Object(m.g)(Object(u.a)(g))},3692:function(e,n,t){var i=t(3693);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0};a.transform=void 0;t(1996)(i,a);i.locals&&(e.exports=i.locals)},3693:function(e,n,t){n=e.exports=t(1995)(!0),n.push([e.i,".private-profile__container{display:block!important}@media (max-width:480px){.private-profile__container{margin-bottom:50px}}.private-profile__container-table{display:table;width:100%;height:calc(100vh - 626px)}@media (max-width:480px){.private-profile__container-table{height:calc(100vh - 699px)}}@media (min-width:481px) and (max-width:768px){.private-profile__container-table{height:calc(100vh - 962px)}}.private-profile__table-cell{display:table-cell;vertical-align:middle;padding-top:80px;padding-left:16px;padding-right:16px;text-align:center}.private-profile__header{font-size:48px;line-height:56px;margin-bottom:24px}.private-profile__description{font-size:18px;font-weight:400;line-height:30px}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/layouts/PrivateProfile/PrivateProfile.scss"],names:[],mappings:"AAAA,4BACE,uBAA0B,CAAE,AAC5B,yBACE,4BACE,kBAAoB,CAAE,CAAE,AAE9B,kCACE,cAAe,AACf,WAAY,AACZ,0BAA4B,CAAE,AAC9B,yBACE,kCACE,0BAA4B,CAAE,CAAE,AACpC,+CACE,kCACE,0BAA4B,CAAE,CAAE,AAEtC,6BACE,mBAAoB,AACpB,sBAAuB,AACvB,iBAAkB,AAClB,kBAAmB,AACnB,mBAAoB,AACpB,iBAAmB,CAAE,AAEvB,yBACE,eAAgB,AAChB,iBAAkB,AAClB,kBAAoB,CAAE,AAExB,8BACE,eAAgB,AAChB,gBAAiB,AACjB,gBAAkB,CAAE",file:"PrivateProfile.scss",sourcesContent:[".private-profile__container {\n  display: block !important; }\n  @media (max-width: 480px) {\n    .private-profile__container {\n      margin-bottom: 50px; } }\n\n.private-profile__container-table {\n  display: table;\n  width: 100%;\n  height: calc(100vh - 626px); }\n  @media (max-width: 480px) {\n    .private-profile__container-table {\n      height: calc(100vh - 699px); } }\n  @media (min-width: 481px) and (max-width: 768px) {\n    .private-profile__container-table {\n      height: calc(100vh - 962px); } }\n\n.private-profile__table-cell {\n  display: table-cell;\n  vertical-align: middle;\n  padding-top: 80px;\n  padding-left: 16px;\n  padding-right: 16px;\n  text-align: center; }\n\n.private-profile__header {\n  font-size: 48px;\n  line-height: 56px;\n  margin-bottom: 24px; }\n\n.private-profile__description {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 30px; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=NotFoundPageConnector.6c413941.chunk.js.map