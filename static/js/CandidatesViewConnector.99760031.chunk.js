webpackJsonp([66],{4276:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(28),n=a(4277),i=a(2120),s=a(2087),c=a(768),o=a(2101),d=a(235),l=a(2132),p=a(2552),u=a(238),A=a(2598),h=a(193),m=a(30),g=a(154),f={hitsPerPage:s.e},v=function(e,t){var a=Object(o.c)(t.location.search,!0),r=Object(d.q)(e);return{selectedSearch:Object(p.a)(e,t.match.params.savedSearchId),hasActiveMembership:Object(d.B)(e),indexName:s.l.CANDIDATES_LAST_LOGGED_IN,searchState:a,languages:e.resources.languages.entries,countries:e.resources.countries.entries,currentLocation:e.geolocation.currentLocation,canUseDatabaseSearch:r,configureProps:f,shouldUpdateUrl:!0,searchStateValues:Object(o.b)(a),viewedCandidatesIds:Object(A.b)(e),contactedCandidatesIds:Object(A.a)(e),viewedFilterValue:e.candidateSearchFilters.viewedFilterValue,contactedFilterValue:e.candidateSearchFilters.contactedFilterValue,userEmail:Object(m.I)(e),isAutoApprovalEnabled:Object(g.q)(e)}},b=function(e){return{fetchCountries:function(){return e(Object(c.d)())},fetchLanguages:function(){return e(Object(c.h)())},fetchCurrentLocationIfNeeded:function(){return e(Object(u.c)())},setViewedFilterValue:function(t){return e(Object(h.i)(t))},setContactedFilterValue:function(t){return e(Object(h.h)(t))}}};t.default=Object(l.a)(Object(r.b)(v,b)(Object(i.a)(n.a)))},4277:function(e,t,a){"use strict";var r=a(4278);t.a=r.a},4278:function(e,t,a){"use strict";var r=a(9),n=a.n(r),i=a(7),s=a.n(i),c=a(10),o=a.n(c),d=a(12),l=a.n(d),p=a(4),u=a.n(p),A=a(5),h=a.n(A),m=a(13),g=a.n(m),f=a(14),v=a.n(f),b=a(0),w=a.n(b),C=a(3),E=a.n(C),B=a(17),_=a(6),x=a(3147),S=a(3150),j=a(2252),O=a(2877),y=a(456),F=a(2119),V=a(457),L=a(2878),I=a(3151),k=a(4310),N=(a.n(k),a(3152)),R=a(320),D=(a.n(R),a(770)),U=a(474),P=a(2110),q=a(3153),M=function(e){function t(){var e,a,r,n;u()(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=r=g()(this,(e=t.__proto__||l()(t)).call.apply(e,[this].concat(s))),r.state={seeMoreCandidatesModalVisible:!1,isDropdownOpen:!1,isSavedSearchLoaded:!1,viewedFilterValue:Object(U.f)().all,contactedFilterValue:Object(U.b)().all},r.isFilterLoaded=function(e){return r.state.isSavedSearchLoaded&&_.has(e)(r.props.searchStateValues)},r.handleFilterHitsByIds=function(){var e=r.props,t=e.viewedFilterValue,a=e.contactedFilterValue,n=e.viewedCandidatesIds,i=e.contactedCandidatesIds,s=e.addObjectIdFilters;Object(P.g)(t,a,n,i,s)},r.generateResultLabel=function(e){var t=Object(L.a)(r.props.searchStateValues)&&r.state.viewedFilterValue===Object(U.f)().all&&r.state.contactedFilterValue===Object(U.b)().all?"":"("+e+")";return r.props.hasActiveMembership?Object(B.b)("common.searchResults")+" "+t:""+Object(B.b)("common.searchResults")},r.isRatingLoaded=function(){return r.isFilterLoaded("rating")&&_.path(["rating","min"],r.props.searchStateValues)>0},r.setSearchResults=function(e){return r.setState({hitsNumber:e})},r.showStarRatingFilterIfNeeded=function(){return!r.props.isAutoApprovalEnabled&&w.a.createElement(O.a,{min:0,max:5,shouldUpdate:_.isEmpty(r.props.searchState),attribute:"rating",isLoaded:r.isRatingLoaded(),ratingValue:parseInt(_.pathOr(V.c,["props","searchState","range","rating","min"],r),10)})},n=a,g()(r,n)}return v()(t,e),h()(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=o()(n.a.mark(function e(){var t,a,r=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchCountries();case 2:return e.next=4,this.props.fetchLanguages();case 4:return e.next=6,this.props.fetchCurrentLocationIfNeeded();case 6:t=_.pathOr([],["currentLocation","candidateCountries"],this.props),a=Object(F.b)(this.props.location.search),t.length&&(_.isNil(a.refinementList)||_.isEmpty(a.refinementList)||!_.path(["refinementList","countryOfResidence"],a).length)&&this.props.history.replace({pathname:this.props.history.location.pathname,search:Object(F.a)(s()({},a,{refinementList:{countryOfResidence:t.map(function(e){return _.path(["countries",e,"country"],r.props)})}}))});case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"hasQueryChanged",value:function(e){var t=_.pipe(_.propOr(!1,"query"),JSON.parse)(e.selectedSearch),a=Object(F.b)(e.location.search,!0);return _.not(_.equals(t,s()({},a,{configure:s()({},_.dissoc("optionalFilters",a.configure))})))}},{key:"componentWillReceiveProps",value:function(e){var t=this;if(e.selectedSearch.id&&this.hasQueryChanged(e)&&this.props.history.push({pathname:"/employer/candidates",search:e.location.search}),e.match.params.savedSearchId&&e.match.params.savedSearchId===this.props.match.params.savedSearchId||this.setState({isSavedSearchLoaded:!1}),_.not(_.isEmpty(e.searchStateValues))&&!Object(L.a)(e.searchStateValues)&&!e.match.params.savedSearchId){var a=function(e){return t.props.manualSegmentScripts.searchForCandidates(t.props.employerId,e,t.props.userEmail)};_.pipe(I.a,a)(e.searchState)}}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.match.params.savedSearchId&&this.props.match.params.savedSearchId!==e.match.params.savedSearchId&&this.setState({isSavedSearchLoaded:!0},function(){return setTimeout(function(){return t.setState({isSavedSearchLoaded:!1})},1500)}),this.props.viewedFilterValue===e.viewedFilterValue&&this.props.contactedFilterValue===e.contactedFilterValue||this.handleFilterHitsByIds()}},{key:"render",value:function(){var e=this.props,t=e.canUseDatabaseSearch,a=e.selectedSearch,r=e.countries,n=e.languages;return w.a.createElement(b.Fragment,null,w.a.createElement(R.Helmet,null,w.a.createElement("title",null,Object(B.b)("meta.employer.title.searchProfiles")),w.a.createElement("meta",{property:"og:title",content:Object(B.b)("meta.employer.title.searchProfiles")})),w.a.createElement(D.a,{title:Object(B.b)("common.candidates")}),_.isEmpty(n)||_.isEmpty(r)?w.a.createElement(y.i,null):w.a.createElement(b.Fragment,null,w.a.createElement(q.a,null),w.a.createElement("div",{className:"container container--large candidates-view parsing--hidden"},!t&&w.a.createElement(N.a,null),w.a.createElement("div",{className:"columns candidates-view-container__search-wrapper"},w.a.createElement("div",{className:"column col-6 col-sm-12"},w.a.createElement(j.a,{setSearchResults:this.setSearchResults,generateLabel:this.generateResultLabel,selectedSearchName:a.name,hideCurrentRefinements:!0})),w.a.createElement("div",{className:"column col-6 col-sm-12 candidates-view__additional-filters"},this.showStarRatingFilterIfNeeded())),w.a.createElement(x.a,{hitsNumber:this.state.hitsNumber,viewedFilterValue:this.state.viewedFilterValue}),w.a.createElement(S.a,null))))}}]),t}(w.a.PureComponent);M.propTypes={addFilter:E.a.func,removeFilter:E.a.func,fetchLanguages:E.a.func,fetchCountries:E.a.func,countries:E.a.object,languages:E.a.object,hasActiveMembership:E.a.bool,selectedSearch:E.a.object,searchStateValues:E.a.object.isRequired,addObjectIdFilters:E.a.func},t.a=M},4310:function(e,t,a){var r=a(4311);"string"===typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0};n.transform=void 0;a(1996)(r,n);r.locals&&(e.exports=r.locals)},4311:function(e,t,a){t=e.exports=a(1995)(!0),t.push([e.i,".candidates-view{display:block!important;margin-top:32px;font-size:14px}.candidates-view__additional-filters{text-align:right}.main--arabic .candidates-view__additional-filters{text-align:left}.candidates-view-container__search-wrapper{margin:40px 0}.candidates-view-container__search-wrapper .search-box__container{padding:0;margin:0}.candidates-view-container__search-wrapper .dd-menu .dd-menu-items{margin:auto 0}.candidates-view-container__search-wrapper .dd-menu .dd-menu-items ul{border-radius:4px;border:0;-webkit-box-shadow:0 2px 12px 0 rgba(47,50,51,.08);box-shadow:0 2px 12px 0 rgba(47,50,51,.08);width:200px}.candidates-view-container__search-wrapper .dd-menu .dd-menu-items ul li{line-height:17px;font-size:14px;font-weight:500;padding:20px 16px;text-align:right}.candidates-view-container__search-wrapper .dd-menu .dd-menu-items ul li:hover{border:0;background-color:#f5f8fa!important;color:#2f3233!important}.candidates-view-container__search-wrapper .candidates-sort-item--selected{color:#4353ff;font-weight:700}.candidates-view__sort-trigger{cursor:pointer;line-height:17px;font-weight:400;color:#2f3233;margin-left:32px}.candidates-view__sort-trigger span:nth-child(2){text-transform:lowercase;margin-left:5px}.candidates-view__sort-trigger .dropdown-arrow{margin-left:8px}.candidates-sort-item{cursor:pointer;padding:5px 25px;margin-top:0;white-space:nowrap}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Employer/views/CandidatesView/CandidatesView.scss"],names:[],mappings:"AAAA,iBACE,wBAA0B,AAC1B,gBAAiB,AACjB,cAAgB,CAAE,AAEpB,qCACE,gBAAkB,CAAE,AACpB,mDACE,eAAiB,CAAE,AAEvB,2CACE,aAAe,CAAE,AACjB,kEACE,UAAW,AACX,QAAU,CAAE,AACd,mEACE,aAAe,CAAE,AACjB,sEACE,kBAAmB,AACnB,SAAU,AACV,mDAAwD,AAChD,2CAAgD,AACxD,WAAa,CAAE,AACf,yEACE,iBAAkB,AAClB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,gBAAkB,CAAE,AACpB,+EACE,SAAU,AACV,mCAAqC,AACrC,uBAA0B,CAAE,AACpC,2EACE,cAAe,AACf,eAAkB,CAAE,AAExB,+BACE,eAAgB,AAChB,iBAAkB,AAClB,gBAAiB,AACjB,cAAe,AACf,gBAAkB,CAAE,AACpB,iDACE,yBAA0B,AAC1B,eAAiB,CAAE,AACrB,+CACE,eAAiB,CAAE,AAEvB,sBACE,eAAgB,AAChB,iBAAkB,AAClB,aAAc,AACd,kBAAoB,CAAE",file:"CandidatesView.scss",sourcesContent:[".candidates-view {\n  display: block !important;\n  margin-top: 32px;\n  font-size: 14px; }\n\n.candidates-view__additional-filters {\n  text-align: right; }\n  .main--arabic .candidates-view__additional-filters {\n    text-align: left; }\n\n.candidates-view-container__search-wrapper {\n  margin: 40px 0; }\n  .candidates-view-container__search-wrapper .search-box__container {\n    padding: 0;\n    margin: 0; }\n  .candidates-view-container__search-wrapper .dd-menu .dd-menu-items {\n    margin: auto 0; }\n    .candidates-view-container__search-wrapper .dd-menu .dd-menu-items ul {\n      border-radius: 4px;\n      border: 0;\n      -webkit-box-shadow: 0 2px 12px 0 rgba(47, 50, 51, 0.08);\n              box-shadow: 0 2px 12px 0 rgba(47, 50, 51, 0.08);\n      width: 200px; }\n      .candidates-view-container__search-wrapper .dd-menu .dd-menu-items ul li {\n        line-height: 17px;\n        font-size: 14px;\n        font-weight: 500;\n        padding: 20px 16px;\n        text-align: right; }\n        .candidates-view-container__search-wrapper .dd-menu .dd-menu-items ul li:hover {\n          border: 0;\n          background-color: #f5f8fa !important;\n          color: #2f3233 !important; }\n  .candidates-view-container__search-wrapper .candidates-sort-item--selected {\n    color: #4353ff;\n    font-weight: bold; }\n\n.candidates-view__sort-trigger {\n  cursor: pointer;\n  line-height: 17px;\n  font-weight: 400;\n  color: #2f3233;\n  margin-left: 32px; }\n  .candidates-view__sort-trigger span:nth-child(2) {\n    text-transform: lowercase;\n    margin-left: 5px; }\n  .candidates-view__sort-trigger .dropdown-arrow {\n    margin-left: 8px; }\n\n.candidates-sort-item {\n  cursor: pointer;\n  padding: 5px 25px;\n  margin-top: 0;\n  white-space: nowrap; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=CandidatesViewConnector.99760031.chunk.js.map