webpackJsonp([46],{2012:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"formName",function(){return m});var a=r(9),n=r.n(a),i=r(10),o=r.n(i),u=r(100),s=r(28),c=r(19),l=r(23),d=r(68),h=r(2945),p=r(2572),b=r(66),f=r(102),O=r(6),j=this,m="CandidateLoginForm",g=Object(u.s)({form:m,validate:p.a,shouldValidate:function(){return!0}})(h.a),y=function(t){return{role:l.f.candidate.name,userRole:t.user.role,isAuthenticated:t.user.isAuthenticated,steps:t.user.stepCompletion,authorizationError:t.user.authorizationError,formValues:Object(u.k)(m)(t),displayCaptcha:t.user.displayCaptcha,isLoading:t.user.isLoading,initialValues:{email:Object(b.r)(window.location.search,"resend-activation-email")}}},v=function(t,e){var r={normal:d.g,normalWithCaptcha:d.g,linkedIn:d.j,google:d.i},a=Object(O.pathOr)(null,["history","location","state","from","pathname"],e),i=function(t){return Object(O.anyPass)([Object(O.equals)("linkedIn"),Object(O.equals)("google")])(Object(f.h)(t))};return{login:function(){function u(t){return s.apply(this,arguments)}var s=o()(n.a.mark(function o(u){var s;return n.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(r[Object(f.h)(u)](u));case 2:s=n.sent,n.t0=!0,n.next=n.t0===(i(u)&&s.isNewAccount)?6:n.t0===(!i(u)&&Object(O.pathOr)(!1,["isNewAccount"],s))?7:n.t0===Object(O.not)(Object(O.isNil)(a))?8:9;break;case 6:return n.abrupt("return",e.history.push("/candidate/thanks"));case 7:return n.abrupt("return",e.history.push("/candidate/profile/complete"));case 8:return n.abrupt("return",e.history.push(a));case 9:return n.abrupt("return",e.history.push("/candidate/dashboard"));case 10:case"end":return n.stop()}},o,j)}));return u}()}};e.default=Object(c.g)(Object(s.b)(y,v)(g))}});
//# sourceMappingURL=CandidateLoginFormConnector.5e01522f.chunk.js.map