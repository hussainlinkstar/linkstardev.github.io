webpackJsonp([27],{2040:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),o=n.n(a),i=n(4),s=n.n(i),r=n(5),p=n.n(r),c=n(13),A=n.n(c),h=n(14),l=n.n(h),d=n(0),u=n.n(d),g=n(78),m=n(28),y=n(21),B=n(19),f=n(2097),_=n(2138),k=n(486),v=n(6),C=n(23),x=n(463),E=n(3720),b=(n.n(E),function(e){function t(){var e,n,a,i;s()(this,t);for(var r=arguments.length,p=Array(r),c=0;c<r;c++)p[c]=arguments[c];return n=a=A()(this,(e=t.__proto__||o()(t)).call.apply(e,[this].concat(p))),a.state={ready:!1,veroEventSent:!1,secondsRemaining:f.b},a.countSeconds=function(){return a.setState({secondsRemaining:a.state.secondsRemaining-1})},i=n,A()(a,i)}return l()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.setState({ready:!0}),this.secondsInterval=setInterval(this.countSeconds,1e3)}},{key:"componentDidUpdate",value:function(e,t){1===t.secondsRemaining&&0===this.state.secondsRemaining&&(clearInterval(this.secondsInterval),this.redirectUser()),!!document.getElementById("script-vero")&&Object(v.pathOr)(!1,["history","location","state","id"],this.props)&&!this.state.veroEventSent&&(k.c.signUpConfirmed(this.props.history.location.state.id),this.setState({veroEventSent:!0}))}},{key:"redirectUser",value:function(){switch(!0){case this.props.isAuthenticated&&this.props.userRole===C.f.employer.name:var e=Object(x.c)(this.props.location.search),t=Object(v.propOr)("","selfCheckout",e),n="jobPosts"===t;return this.props.history.push(n?"/pricing/job-posts/review":"/employer/job-offers");case this.props.isAuthenticated&&this.props.userRole===C.f.candidate.name:return this.props.history.push("/candidate/profile/complete");default:var a=this.props.match.path.split("/")[1];return this.props.history.push("/"+a+"/login")}}},{key:"render",value:function(){var e=this.props.t,t=this.props.match.path.split("/")[1];return u.a.createElement("div",{className:"thank-you-page__container parsing--hidden"},u.a.createElement("div",{className:"thank-you-page"},u.a.createElement("div",{className:"thank-you-page__wrapper"},u.a.createElement("div",{className:"thank-you-page__content"},u.a.createElement("i",{className:"icon-im-success thank-you-page__icon"}),u.a.createElement("h2",{className:"thank-you-page__heading"},e("thankYouPage."+t+".header")),u.a.createElement("p",{className:"thank-you-page__text"},e("thankYouPage."+t+".description",{secondsRemaining:this.state.secondsRemaining}))))))}}]),t}(d.PureComponent)),w=function(e){return{isAuthenticated:e.user.isAuthenticated,userRole:e.user.role}};t.default=Object(g.d)(B.g,_.a,y.a,Object(m.b)(w))(b)},3720:function(e,t,n){var a=n(3721);"string"===typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0};o.transform=void 0;n(1999)(a,o);a.locals&&(e.exports=a.locals)},3721:function(e,t,n){t=e.exports=n(1998)(!0),t.push([e.i,".thank-you-page__container{display:block!important}.thank-you-page{display:table;width:100%;height:calc(100vh - 183px)}@media (max-width:768px){.thank-you-page{height:calc(100vh - 271px)}}.thank-you-page__heading{font-size:21px;margin:29px 0 21px}.thank-you-page__text{color:#2f3233;font-weight:400}.thank-you-page__wrapper{display:table-cell;vertical-align:middle;padding-top:80px;padding-left:16px;padding-right:16px}.thank-you-page__content{text-align:center;max-width:568px;margin:0 auto;width:100%}.thank-you-page__icon{color:#4353ff;font-size:64px}","",{version:3,sources:["C:/projects/oliv-frontend/src/Shared/components/ThankYouPage/ThankYouPage.scss"],names:[],mappings:"AAAA,2BACE,uBAA0B,CAAE,AAE9B,gBACE,cAAe,AACf,WAAY,AACZ,0BAA4B,CAAE,AAC9B,yBACE,gBACE,0BAA4B,CAAE,CAAE,AAEtC,yBACE,eAAgB,AAChB,kBAAoB,CAAE,AAExB,sBACE,cAAe,AACf,eAAiB,CAAE,AAErB,yBACE,mBAAoB,AACpB,sBAAuB,AACvB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAoB,CAAE,AAExB,yBACE,kBAAmB,AACnB,gBAAiB,AACjB,cAAe,AACf,UAAY,CAAE,AAEhB,sBACE,cAAe,AACf,cAAgB,CAAE",file:"ThankYouPage.scss",sourcesContent:[".thank-you-page__container {\n  display: block !important; }\n\n.thank-you-page {\n  display: table;\n  width: 100%;\n  height: calc(100vh - 183px); }\n  @media (max-width: 768px) {\n    .thank-you-page {\n      height: calc(100vh - 271px); } }\n\n.thank-you-page__heading {\n  font-size: 21px;\n  margin: 29px 0 21px; }\n\n.thank-you-page__text {\n  color: #2f3233;\n  font-weight: 400; }\n\n.thank-you-page__wrapper {\n  display: table-cell;\n  vertical-align: middle;\n  padding-top: 80px;\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.thank-you-page__content {\n  text-align: center;\n  max-width: 568px;\n  margin: 0 auto;\n  width: 100%; }\n\n.thank-you-page__icon {\n  color: #4353ff;\n  font-size: 64px; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=ThankYouPage.8b8bc86c.chunk.js.map