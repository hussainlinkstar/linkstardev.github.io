webpackJsonp([47],{2038:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"formName",function(){return O});var a=t(9),s=t.n(a),n=t(10),c=t.n(n),o=t(100),u=t(28),i=t(19),d=t(17),p=t(6),f=t(2990),b=t(2991),l=t(477),w=t(67),h=this,v=new l.a,O="CandidateFinishResetPassword",j=Object(o.s)({form:O,validate:b.a})(f.a),m=function(e,r){var t=Object(p.pathOr)("/candidate/login",["location","state","from"],r);return{resetPassword:function(){function e(e){return a.apply(this,arguments)}var a=c()(s.a.mark(function e(a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.finishResetPasswordCandidate(a.newPassword,r.match.params.token);case 3:return w.a.success(Object(d.b)("alerts.resetPasswordSuccess")),e.abrupt("return",r.history.push(t));case 7:return e.prev=7,e.t0=e.catch(0),w.a.error(Object(d.b)("alerts.resetPasswordFailed")),e.abrupt("return",console.error(e.t0));case 11:case"end":return e.stop()}},e,h,[[0,7]])}));return e}()}};r.default=Object(i.g)(Object(u.b)(null,m)(j))}});
//# sourceMappingURL=CandidateFinishResetPasswordFormConnector.7266bec7.chunk.js.map