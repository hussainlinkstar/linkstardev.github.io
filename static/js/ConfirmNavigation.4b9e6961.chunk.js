webpackJsonp([25],{2048:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),a=n.n(r),c=n(4),u=n.n(c),o=n(5),s=n.n(o),i=n(13),l=n.n(i),p=n(14),f=n.n(p),b=n(0),h=n.n(b),d=n(4584),m=function(e){function t(){var e,n,r,c;u()(this,t);for(var o=arguments.length,s=Array(o),i=0;i<o;i++)s[i]=arguments[i];return n=r=l()(this,(e=t.__proto__||a()(t)).call.apply(e,[this].concat(s))),r.state={show:!0},r.close=function(e){r.hidePrompt(),r.props.callback(e)},r.hidePrompt=function(){return r.setState({show:!1})},c=n,l()(r,c)}return f()(t,e),s()(t,[{key:"componentWillReceiveProps",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this.props.message;return h.a.createElement(d.a,{message:e,close:this.close,show:this.state.show,handleClose:this.hidePrompt})}}]),t}(b.Component);m.propTypes={},t.default=m},4584:function(e,t,n){"use strict";var r=n(28),a=n(2094),c=n(4585),u=n(4586),o=function(e,t){return{disabled:Object(a.n)(e),submitName:Object(a.o)(e),cancelName:Object(a.m)(e),title:Object(a.b)(e),isJobOfferConfirm:Object(a.l)(e)}},s=function(e,t){return{handleSave:function(){return e(Object(u.a)())}}};t.a=Object(r.b)(o,s)(c.a)},4585:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(10),u=n.n(c),o=n(0),s=n.n(o),i=n(3),l=n.n(i),p=n(764),f=n(21),b=this,h=function(e){var t=function(){var t=u()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isJobOfferConfirm||!e.disabled){t.next=2;break}return t.abrupt("return",e.handleClose());case 2:return t.next=4,e.handleSave();case 4:return t.abrupt("return",e.close(!0));case 5:case"end":return t.stop()}},t,b)}));return function(){return t.apply(this,arguments)}}(),n=function(){return e.close(!0)},r=e.message,c=r.split("\n");return s.a.createElement(p.d,{title:e.title,handleSubmit:t,handleClose:e.handleClose,show:e.show,handleCancel:n,cancelText:e.cancelName,submitText:e.submitName,showContact:!1,disableSubmitButton:!e.isJobOfferConfirm&&e.disabled,showCancel:!0},s.a.createElement("p",null,2===c.length?c[0]:r),s.a.createElement("p",null,2===c.length&&c[1]))};h.propTypes={show:l.a.bool.isRequired,close:l.a.func.isRequired},t.a=Object(f.a)(h)},4586:function(e,t,n){"use strict";n.d(t,"a",function(){return _});var r=n(9),a=n.n(r),c=n(7),u=n.n(c),o=n(10),s=n.n(o),i=n(43),l=n.n(i),p=n(2094),f=n(451),b=n(100),h=n(47),d=n(157),m=n(842),O=n(30),j=n(120),v=n(198),w=n(473),k=n(66),x=n(234),y=n(44),C=n(6),g=this,N=function(){return function(e,t){var n=Object(p.e)(t());return l.a.all(n.map(function(t){return e(Object(b.u)(t))}))}},S=function(e){return function(){var t=s()(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(Object(d.g)(u()({},e)));case 2:return t.next=4,n(Object(m.b)(e.id,C.pipe(C.propOr([],"teamMembers"),C.map(C.pipe(C.prop("value"),C.objOf("id"))))(e)));case 4:return t.abrupt("return",n(Object(d.t)(e.id,e.shouldNotifyOnNewApplication)));case 5:case"end":return t.stop()}},t,g)}));return function(e){return t.apply(this,arguments)}}()},_=function(){return function(){var e=s()(a.a.mark(function e(t,n){var r,c,o,s,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(p.c)(n()),c=Object(p.f)(n()),o=Object(f.k)(n(),Object(k.l)(window.location.pathname)),e.t0=!0,e.next=e.t0===Object(h.a)(r)?6:e.t0===(Object(h.a)(c)&&1===c.length)?9:16;break;case 6:return e.next=8,t(N());case 8:return e.abrupt("return",t(Object(y.n)()));case 9:if(s=Object(b.k)(c[0])(n()),!Object(O.n)(n())||Object(j.a)(n())){e.next=14;break}return e.next=13,t(Object(v.k)(s.companyInformation,!0));case 13:t(Object(w.d)());case 14:return i=o===x.h.draft?x.h.draft:x.h.active,e.abrupt("return",t(S(C.dissoc("companyInformation",u()({},s,{status:i})))));case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e,g)}));return function(t,n){return e.apply(this,arguments)}}()}}});
//# sourceMappingURL=ConfirmNavigation.4b9e6961.chunk.js.map