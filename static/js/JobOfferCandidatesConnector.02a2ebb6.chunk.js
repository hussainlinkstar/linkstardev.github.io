webpackJsonp([65],{2677:function(e,t,r){"use strict";(function(t){function r(e){var t,r,i,s,c,d,l=Object.create(null);if(this[f]=l,e)if("string"===typeof e)for("?"===e.charAt(0)&&(e=e.slice(1)),s=e.split("&"),c=0,d=s.length;c<d;c++)i=s[c],t=i.indexOf("="),-1<t?a(l,n(i.slice(0,t)),n(i.slice(t+1))):i.length&&a(l,n(i),"");else if(o(e))for(c=0,d=e.length;c<d;c++)i=e[c],a(l,i[0],i[1]);else for(r in e)a(l,r,e[r])}function a(e,t,r){t in e?e[t].push(""+r):e[t]=o(r)?r:[""+r]}function n(e){return decodeURIComponent(e.replace(d," "))}function i(e){return encodeURIComponent(e).replace(c,A)}var o=Array.isArray,s=r.prototype,c=/[!'\(\)~]|%20|%00/g,d=/\+/g,l={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},A=function(e){return l[e]},f="__URLSearchParams__:"+Math.random();s.append=function(e,t){a(this[f],e,t)},s.delete=function(e){delete this[f][e]},s.get=function(e){var t=this[f];return e in t?t[e][0]:null},s.getAll=function(e){var t=this[f];return e in t?t[e].slice(0):[]},s.has=function(e){return e in this[f]},s.set=function(e,t){this[f][e]=[""+t]},s.forEach=function(e,t){var r=this[f];Object.getOwnPropertyNames(r).forEach(function(a){r[a].forEach(function(r){e.call(t,r,a,this)},this)},this)},s.toJSON=function(){return{}},s.toString=function(){var e,t,r,a,n=this[f],o=[];for(t in n)for(r=i(t),e=0,a=n[t];e<a.length;e++)o.push(r+"="+i(a[e]));return o.join("&")},r=e.exports=t.URLSearchParams||r,function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}();"forEach"in e||(e.forEach=function(e,t){var r=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(a){!a.length||a in r||(r[a]=this.getAll(a)).forEach(function(r){e.call(t,r,a,this)},this)},this)}),"keys"in e||(e.keys=function(){var e=[];this.forEach(function(t,r){e.push(r)});var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(r[Symbol.iterator]=function(){return r}),r}),"values"in e||(e.values=function(){var e=[];this.forEach(function(t){e.push(t)});var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(r[Symbol.iterator]=function(){return r}),r}),"entries"in e||(e.entries=function(){var e=[];this.forEach(function(t,r){e.push([r,t])});var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(r[Symbol.iterator]=function(){return r}),r}),!t||Symbol.iterator in e||(e[Symbol.iterator]=e.entries),"sort"in e||(e.sort=function(){for(var e,t,r,a=this.entries(),n=a.next(),i=n.done,o=[],s=Object.create(null);!i;)r=n.value,t=r[0],o.push(t),t in s||(s[t]=[]),s[t].push(r[1]),n=a.next(),i=n.done;for(o.sort(),e=0;e<o.length;e++)this.delete(o[e]);for(e=0;e<o.length;e++)t=o[e],this.append(t,s[t].shift())})}(r.prototype)}).call(t,r(46))},4383:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(28),n=r(19),i=r(4384),o=r(451),s=r(157),c=r(2123),d=r(2092),l=r(769),A=r(2106),f=r(236),p=r(2135),u=r(2560),h=r(239),m=r(2606),g=r(194),b=r(30),C=r(154),v={hitsPerPage:d.e},_=function(e,t){var r=t.match.params.jobOfferId,a=Object(o.h)(e,r),n=Object(A.c)(t.location.search,!0),i=Object(f.q)(e);return{selectedSearch:Object(u.a)(e,t.match.params.savedSearchId),jobOffer:a,indexName:n.sort||d.l.CANDIDATES,searchState:n,languages:e.resources.languages.entries,countries:e.resources.countries.entries,canUseDatabaseSearch:i,configureProps:v,searchStateValues:Object(A.b)(n),currentLocation:e.geolocation.currentLocation,viewedCandidatesIds:Object(m.b)(e),contactedCandidatesIds:Object(m.a)(e),viewedFilterValue:e.candidateSearchFilters.viewedFilterValue,contactedFilterValue:e.candidateSearchFilters.contactedFilterValue,userEmail:Object(b.I)(e),isAutoApprovalEnabled:Object(C.q)(e)}},w=function(e,t){return{fetchJobOffer:function(){return e(Object(s.i)(t.match.params.jobOfferId))},fetchCountries:function(){return e(Object(l.d)())},fetchLanguages:function(){return e(Object(l.h)())},fetchCurrentLocationIfNeeded:function(){return e(Object(h.c)())},setViewedFilterValue:function(t){return e(Object(g.i)(t))},setContactedFilterValue:function(t){return e(Object(g.h)(t))}}};t.default=Object(p.a)(Object(n.g)(Object(a.b)(_,w)(Object(c.a)(i.a))))},4384:function(e,t,r){"use strict";var a=r(9),n=r.n(a),i=r(10),o=r.n(i),s=r(8),c=r.n(s),d=r(7),l=r.n(d),A=r(12),f=r.n(A),p=r(4),u=r.n(p),h=r(5),m=r.n(h),g=r(13),b=r.n(g),C=r(14),v=r.n(C),_=r(0),w=r.n(_),j=r(11),B=r.n(j),x=r(17),E=r(3),O=r.n(E),S=r(59),y=r.n(S),D=r(2677),k=r.n(D),I=r(767),N=r(2170),V=r(164),F=r(3160),L=r(54),T=r(2255),Y=r(2092),z=r(466),U=r(204),R=r(2889),M=r(3163),P=r(457),q=r(2122),J=r(2890),G=r(474),W=r(2114),Q=r(3166),Z=r(4385),H=(r.n(Z),r(3164)),$=r(3165),K=r(771),X=r(6),ee=[Y.l.CANDIDATES,Y.l.CANDIDATES_LAST_LOGGED_IN],te=function(e){function t(){var e,r,a,n,i;u()(this,t);for(var o=arguments.length,s=Array(o),d=0;d<o;d++)s[d]=arguments[d];return a=n=b()(this,(e=t.__proto__||f()(t)).call.apply(e,[this].concat(s))),n.state={isDropdownOpen:!1,selectedSortOption:n.props.indexName,isSavedSearchLoaded:!1,viewedFilterValue:Object(G.f)().all,contactedFilterValue:Object(G.b)().all},n.now=parseInt(y()().format("YYYYMMDD"),10),n.isFilterLoaded=function(e){return n.state.isSavedSearchLoaded&&X.has(e)(n.props.searchStateValues)},n.translateLanguage=function(e){return X.pathOr("",[e.toUpperCase(),"language"],n.props.languages)},n.translateNationality=function(e){return X.pathOr("",[e,"nationality"],n.props.countries)},n.handleFilterHitsByIds=function(){var e=n.props,t=e.viewedFilterValue,r=e.contactedFilterValue,a=e.viewedCandidatesIds,i=e.contactedCandidatesIds,o=e.addObjectIdFilters;Object(W.g)(t,r,a,i,o)},n.transformLabelsConfig={driversLicence:function(e){return l()({},e,{items:e.items.map(function(e){return{label:Object(x.b)("common.drivingLicenseWithValue",{value:e.label}),value:e.value}})})},yearOfBirth:function(e){return l()({},e,{items:e.items.map(function(e){return{label:Object(x.b)("common.ageWithNumber",{age:Object(L.b)(e.label)}),value:e.value}})})},languages:function(e){return l()({},e,{items:e.items.map(function(e){return{label:n.translateLanguage(e.label),value:e.value}})})},nationality:function(e){return l()({},e,{items:e.items.map(function(e){return{label:n.translateNationality(e.label),value:e.value}})})}},n.sortOptionActionsMap=(r={},c()(r,Y.l.CANDIDATES,function(){return n.updateQuerySearch("sort",Y.l.CANDIDATES),n.props.changeIndex(Y.l.CANDIDATES)}),c()(r,Y.l.CANDIDATES_LAST_LOGGED_IN,function(){return n.updateQuerySearch("sort",Y.l.CANDIDATES_LAST_LOGGED_IN),n.props.changeIndex(Y.l.CANDIDATES_LAST_LOGGED_IN)}),r),n.updateQuerySearch=function(e,t){var r=n.props.history,a=new k.a(r.location.search);a.set(e,t),r.replace(l()({},r.location,{search:a.toString()}))},n.transformedLabels=function(e){return Object(W.l)(e,["hasVideoCv","rating"],n.transformLabelsConfig)},n.toggleArrow=function(e){return n.setState({isDropdownOpen:e})},n.closeDropdown=function(){return n.setState({isDropdownOpen:!1})},n.setSelectedOption=function(e){return function(){return n.sortOptionActionsMap[e](),n.setState({selectedSortOption:e})}},n.isRatingLoaded=function(){return n.isFilterLoaded("rating")&&X.path(["rating","min"],n.props.searchStateValues)>0},n.showStarRatingFilterIfNeeded=function(){return!n.props.isAutoApprovalEnabled&&w.a.createElement(R.a,{min:0,max:5,attribute:"rating",shouldUpdate:X.isEmpty(n.props.searchState),ratingValue:parseInt(X.pathOr(P.c,["props","searchState","range","rating","min"],n),10),isLoaded:n.isRatingLoaded()})},i=a,b()(n,i)}return v()(t,e),m()(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=o()(n.a.mark(function e(){var t,r,a=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.fetchLanguages(),this.props.fetchJobOffer(),e.next=4,this.props.fetchCountries();case 4:return e.next=6,this.props.fetchCurrentLocationIfNeeded();case 6:t=X.pathOr([],["currentLocation","candidateCountries"],this.props),r=Object(q.b)(this.props.location.search),t.length&&(X.isNil(r.refinementList)||X.isEmpty(r.refinementList)||!X.path(["refinementList","countryOfResidence"],r).length)&&this.props.history.replace({pathname:this.props.history.location.pathname,search:Object(q.a)(l()({},r,{refinementList:{countryOfResidence:t.map(function(e){return X.path(["countries",e,"country"],a.props)})}}))}),X.isNil(this.props.jobOffer)||this.props.addFilter({departments:"departments:"+this.props.jobOffer.departmentId},!0);case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"hasQueryChanged",value:function(e){var t=X.pipe(X.propOr(!1,"query"),JSON.parse)(e.selectedSearch),r=Object(q.b)(e.location.search,!0);return X.not(X.equals(t,l()({},r,{configure:l()({},X.dissoc("optionalFilters",r.configure))})))}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.selectedSearch.id&&this.hasQueryChanged(e)&&this.props.history.push({pathname:"/employer/job-offer/"+this.props.match.params.jobOfferId+"/candidates",search:e.location.search}),e.match.params.savedSearchId&&e.match.params.savedSearchId===this.props.match.params.savedSearchId||this.setState({isSavedSearchLoaded:!1}),X.not(X.isEmpty(e.searchStateValues))&&!Object(J.a)(e.searchStateValues)&&!e.match.params.savedSearchId){var r=function(e){t.props.manualSegmentScripts.searchForCandidates(t.props.employerId,l()({},e,t.props.match.params),t.props.userEmail)};X.pipe(H.a,r)(e.searchState)}}},{key:"componentDidUpdate",value:function(e){var t=this;X.isNil(e.jobOffer)&&!X.isNil(this.props.jobOffer)&&this.props.addFilter({departments:"departments:"+this.props.jobOffer.departmentId},!0),this.props.match.params.savedSearchId&&this.props.match.params.savedSearchId!==e.match.params.savedSearchId&&this.setState({isSavedSearchLoaded:!0},function(){return setTimeout(function(){return t.setState({isSavedSearchLoaded:!1})},1500)}),this.props.viewedFilterValue===e.viewedFilterValue&&this.props.contactedFilterValue===e.contactedFilterValue||this.handleFilterHitsByIds()}},{key:"render",value:function(){var e=this.props,t=e.jobOffer,r=e.canUseDatabaseSearch;return X.not(X.isNil(t))&&X.not(X.isEmpty(t))&&w.a.createElement("div",null,w.a.createElement(Q.a,null),w.a.createElement(I.a,{className:"job-offer-candidates__container parsing--hidden"},w.a.createElement(K.a,{title:Object(x.b)("common.candidates")}),!r&&w.a.createElement($.a,null),w.a.createElement("div",{className:"job-offer-candidates-view__header"},w.a.createElement(N.a,{link:"/employer/job-offers/active",name:Object(x.b)("common.goBackToMyJobs")}),w.a.createElement("div",{className:"job-offer-candidates-view__header__title"},t.title),w.a.createElement("div",null,w.a.createElement("span",{className:"job-offer-candidates-view__header__details"},Object(x.b)("employer.jobOffers.jobTypes."+t.jobType)),w.a.createElement("span",{className:"job-offer-candidates-view__header__details"},Object(x.b)("employer.jobOffers.commitmentTypes."+t.commitment)),w.a.createElement("span",{className:"job-offer-candidates-view__header__details"},t.city,", ",Object(V.a)(t.country)),t.isPrivate&&w.a.createElement("i",{className:"job-offer-candidates-view__header__is-private ion-ios-eye-off"}))),w.a.createElement("div",null,w.a.createElement("div",{className:"columns job-offer-candidates-view__search-results"},w.a.createElement("div",{className:"column col-6 col-sm-12"},w.a.createElement(T.a,{transformItems:this.transformedLabels,isDefaultSearch:Object(J.a)(this.props.searchStateValues)&&this.props.viewedFilterValue===Object(G.f)().all&&this.props.contactedFilterValue===Object(G.b)().all,selectedSearchName:this.props.selectedSearch.name,viewedFilterValue:this.props.viewedFilterValue,viewedFilterOnChange:this.props.setViewedFilterValue,contactedFilterValue:this.props.contactedFilterValue,contactedFilterOnChange:this.props.setContactedFilterValue,hideCurrentRefinements:!0})),w.a.createElement("div",{className:"column col-6 col-sm-12 job-offer-candidates-view__additional-filters"},this.showStarRatingFilterIfNeeded(),w.a.createElement(z.a,{onToggle:this.toggleArrow,onClose:this.closeDropdown,triggerButton:this.triggerButton,align:"right",closeOnOutsideClick:!0},this.sortMenuItems))),w.a.createElement(F.a,{viewedFilterValue:this.state.viewedFilterValue}),w.a.createElement(M.a,null))))}},{key:"triggerButton",get:function(){return w.a.createElement("div",{className:"job-offer-candidates-view__sort-trigger"},w.a.createElement("span",null,Object(x.b)("common.sortedBy")),w.a.createElement("span",null,Object(x.b)("candidatesList.sortDropdown."+this.state.selectedSortOption)),w.a.createElement(U.a,{isOpen:this.state.isDropdownOpen}))}},{key:"sortMenuItems",get:function(){var e=this;return ee.map(function(t,r){var a=B()({"job-offer-candidates-sort-item":!0,"job-offer-candidates-sort-item--selected":e.state.selectedSortOption===t});return w.a.createElement("li",{className:a,key:r+"-"+t,onClick:e.setSelectedOption(t)},Object(x.b)("candidatesList.sortDropdown."+t))})}}]),t}(w.a.PureComponent);te.propTypes={selectedSearch:O.a.object},t.a=te},4385:function(e,t,r){var a=r(4386);"string"===typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0};n.transform=void 0;r(1999)(a,n);a.locals&&(e.exports=a.locals)},4386:function(e,t,r){t=e.exports=r(1998)(!0),t.push([e.i,'.job-offer-candidates__container{display:block!important;padding-top:32px}.job-offer-candidates-view__header{margin:23px 0}.job-offer-candidates-view__header__title{font-size:34px;color:#2f3233;line-height:40px;font-weight:600;margin-top:35px}.job-offer-candidates-view__header__details{margin-top:8px;font-size:13px;color:#2f3233;font-weight:400;line-height:19px}.job-offer-candidates-view__header__details:not(:last-of-type):after{content:"\\2022";margin:0 5px}.job-offer-candidates-view__header__is-private{color:#c2c6c9;font-size:23px;margin-left:20px}.job-offer-candidates-view__header__is-private:before{-webkit-transform:translateY(20%);-ms-transform:translateY(20%);transform:translateY(20%)}.job-offer-candidates-view__search-results{margin:40px 0}.job-offer-candidates-view__search-results .search-box__container{margin:0;padding:0}.job-offer-candidates-view__search-results .dd-menu .dd-menu-items{margin:auto 0}.job-offer-candidates-view__search-results .dd-menu .dd-menu-items ul{border-radius:4px;border:0;-webkit-box-shadow:0 2px 12px 0 rgba(47,50,51,.08);box-shadow:0 2px 12px 0 rgba(47,50,51,.08);width:170px}.job-offer-candidates-view__search-results .dd-menu .dd-menu-items ul li{line-height:17px;font-size:14px;font-weight:500;padding:20px 16px;text-align:right}.job-offer-candidates-view__search-results .dd-menu .dd-menu-items ul li:hover{border:0;background-color:#f5f8fa!important;color:#2f3233!important}.job-offer-candidates-view__sorted-by{margin-top:12px;padding:24px 0;line-height:17px;font-weight:400;color:#2f3233;text-transform:lowercase}.job-offer-candidates-view__sorted-by:first-letter{text-transform:uppercase}.job-offer-candidates-sort-item{cursor:pointer;padding:5px 25px;margin-top:0;white-space:nowrap}.job-offer-candidates-sort-item--selected{color:#4353ff;font-weight:700}.job-offer-candidates-view__sort-trigger{cursor:pointer;font-weight:400;color:#2f3233;margin-left:32px;font-size:14px}.main--arabic .job-offer-candidates-view__sort-trigger{margin-left:0;margin-right:32px}.job-offer-candidates-view__sort-trigger span:nth-child(2){text-transform:lowercase;margin-left:5px}.job-offer-candidates-view__sort-trigger .dropdown-arrow{margin-left:8px}.main--arabic .job-offer-candidates-view__sort-trigger .dropdown-arrow{margin-left:0;margin-right:8px}.job-offer-candidates-view__additional-filters{text-align:right}.job-offer-candidates-view__additional-filters .dd-menu-items .dd-items-right{-webkit-box-shadow:0 2px 12px 0 rgba(47,50,51,.08);box-shadow:0 2px 12px 0 rgba(47,50,51,.08);margin-top:10px}.job-offer-candidates-view__additional-filters .dd-menu-items .dd-items-right:before{content:"";z-index:-1;position:absolute;left:80%;background-color:#fff;top:3px;width:14px;height:14px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);border-top:1px solid rgba(0,0,0,.08);border-left:1px solid rgba(0,0,0,.08)}.main--arabic .job-offer-candidates-view__additional-filters{text-align:left}',"",{version:3,sources:["C:/projects/oliv-frontend/src/Employer/views/JobOfferCandidatesView/JobOfferCandidatesView.scss"],names:[],mappings:"AACA,iCACE,wBAA0B,AAC1B,gBAAkB,CAAE,AAEtB,mCACE,aAAe,CAAE,AAEnB,0CACE,eAAgB,AAChB,cAAe,AACf,iBAAkB,AAClB,gBAAiB,AACjB,eAAiB,CAAE,AAErB,4CACE,eAAgB,AAChB,eAAgB,AAChB,cAAe,AACf,gBAAiB,AACjB,gBAAkB,CAAE,AACpB,qEACE,gBAAa,AACb,YAAc,CAAE,AAEpB,+CACE,cAAe,AACf,eAAgB,AAChB,gBAAkB,CAAE,AACpB,sDACE,kCAAmC,AAC/B,8BAA+B,AAC3B,yBAA2B,CAAE,AAEzC,2CACE,aAAe,CAAE,AACjB,kEACE,SAAU,AACV,SAAW,CAAE,AACf,mEACE,aAAe,CAAE,AACjB,sEACE,kBAAmB,AACnB,SAAU,AACV,mDAAwD,AAChD,2CAAgD,AACxD,WAAa,CAAE,AACf,yEACE,iBAAkB,AAClB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,gBAAkB,CAAE,AACpB,+EACE,SAAU,AACV,mCAAqC,AACrC,uBAA0B,CAAE,AAEtC,sCACE,gBAAiB,AACjB,eAAgB,AAChB,iBAAkB,AAClB,gBAAiB,AACjB,cAAe,AACf,wBAA0B,CAAE,AAC5B,mDACE,wBAA0B,CAAE,AAEhC,gCACE,eAAgB,AAChB,iBAAkB,AAClB,aAAc,AACd,kBAAoB,CAAE,AAExB,0CACE,cAAe,AACf,eAAkB,CAAE,AAEtB,yCACE,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,iBAAkB,AAClB,cAAgB,CAAE,AAClB,uDACE,cAAe,AACf,iBAAmB,CAAE,AACvB,2DACE,yBAA0B,AAC1B,eAAiB,CAAE,AACrB,yDACE,eAAiB,CAAE,AACnB,uEACE,cAAe,AACf,gBAAkB,CAAE,AAE1B,+CACE,gBAAkB,CAAE,AACpB,8EACE,mDAAwD,AAChD,2CAAgD,AACxD,eAAiB,CAAE,AACnB,qFACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,SAAU,AACV,sBAAuB,AACvB,QAAS,AACT,WAAY,AACZ,YAAa,AACb,gCAAiC,AAC7B,4BAA6B,AACzB,wBAAyB,AACjC,qCAA0C,AAC1C,qCAA2C,CAAE,AACjD,6DACE,eAAiB,CAAE",file:"JobOfferCandidatesView.scss",sourcesContent:["@charset \"UTF-8\";\n.job-offer-candidates__container {\n  display: block !important;\n  padding-top: 32px; }\n\n.job-offer-candidates-view__header {\n  margin: 23px 0; }\n\n.job-offer-candidates-view__header__title {\n  font-size: 34px;\n  color: #2f3233;\n  line-height: 40px;\n  font-weight: 600;\n  margin-top: 35px; }\n\n.job-offer-candidates-view__header__details {\n  margin-top: 8px;\n  font-size: 13px;\n  color: #2f3233;\n  font-weight: 400;\n  line-height: 19px; }\n  .job-offer-candidates-view__header__details:not(:last-of-type)::after {\n    content: '\u2022';\n    margin: 0 5px; }\n\n.job-offer-candidates-view__header__is-private {\n  color: #c2c6c9;\n  font-size: 23px;\n  margin-left: 20px; }\n  .job-offer-candidates-view__header__is-private::before {\n    -webkit-transform: translateY(20%);\n        -ms-transform: translateY(20%);\n            transform: translateY(20%); }\n\n.job-offer-candidates-view__search-results {\n  margin: 40px 0; }\n  .job-offer-candidates-view__search-results .search-box__container {\n    margin: 0;\n    padding: 0; }\n  .job-offer-candidates-view__search-results .dd-menu .dd-menu-items {\n    margin: auto 0; }\n    .job-offer-candidates-view__search-results .dd-menu .dd-menu-items ul {\n      border-radius: 4px;\n      border: 0;\n      -webkit-box-shadow: 0 2px 12px 0 rgba(47, 50, 51, 0.08);\n              box-shadow: 0 2px 12px 0 rgba(47, 50, 51, 0.08);\n      width: 170px; }\n      .job-offer-candidates-view__search-results .dd-menu .dd-menu-items ul li {\n        line-height: 17px;\n        font-size: 14px;\n        font-weight: 500;\n        padding: 20px 16px;\n        text-align: right; }\n        .job-offer-candidates-view__search-results .dd-menu .dd-menu-items ul li:hover {\n          border: 0;\n          background-color: #f5f8fa !important;\n          color: #2f3233 !important; }\n\n.job-offer-candidates-view__sorted-by {\n  margin-top: 12px;\n  padding: 24px 0;\n  line-height: 17px;\n  font-weight: 400;\n  color: #2f3233;\n  text-transform: lowercase; }\n  .job-offer-candidates-view__sorted-by::first-letter {\n    text-transform: uppercase; }\n\n.job-offer-candidates-sort-item {\n  cursor: pointer;\n  padding: 5px 25px;\n  margin-top: 0;\n  white-space: nowrap; }\n\n.job-offer-candidates-sort-item--selected {\n  color: #4353ff;\n  font-weight: bold; }\n\n.job-offer-candidates-view__sort-trigger {\n  cursor: pointer;\n  font-weight: 400;\n  color: #2f3233;\n  margin-left: 32px;\n  font-size: 14px; }\n  .main--arabic .job-offer-candidates-view__sort-trigger {\n    margin-left: 0;\n    margin-right: 32px; }\n  .job-offer-candidates-view__sort-trigger span:nth-child(2) {\n    text-transform: lowercase;\n    margin-left: 5px; }\n  .job-offer-candidates-view__sort-trigger .dropdown-arrow {\n    margin-left: 8px; }\n    .main--arabic .job-offer-candidates-view__sort-trigger .dropdown-arrow {\n      margin-left: 0;\n      margin-right: 8px; }\n\n.job-offer-candidates-view__additional-filters {\n  text-align: right; }\n  .job-offer-candidates-view__additional-filters .dd-menu-items .dd-items-right {\n    -webkit-box-shadow: 0 2px 12px 0 rgba(47, 50, 51, 0.08);\n            box-shadow: 0 2px 12px 0 rgba(47, 50, 51, 0.08);\n    margin-top: 10px; }\n    .job-offer-candidates-view__additional-filters .dd-menu-items .dd-items-right::before {\n      content: '';\n      z-index: -1;\n      position: absolute;\n      left: 80%;\n      background-color: #fff;\n      top: 3px;\n      width: 14px;\n      height: 14px;\n      -webkit-transform: rotate(45deg);\n          -ms-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-top: 1px solid rgba(0, 0, 0, 0.08);\n      border-left: 1px solid rgba(0, 0, 0, 0.08); }\n  .main--arabic .job-offer-candidates-view__additional-filters {\n    text-align: left; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=JobOfferCandidatesConnector.02a2ebb6.chunk.js.map