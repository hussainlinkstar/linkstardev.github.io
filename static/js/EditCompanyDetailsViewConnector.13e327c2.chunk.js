webpackJsonp([64],{2244:function(e,n,t){"use strict";var o=t(28),i=t(2840),a=t(2091),r=function(e,n){return{filesProgress:Object(a.k)(e,n.fileType)}};n.a=Object(o.b)(r)(i.a)},2840:function(e,n,t){"use strict";var o=t(0),i=t.n(o),a=t(6),r=t(2841),s=(t.n(r),function(e,n){return{width:Math.round(parseInt(e)/parseInt(n)*100)+"%"}}),l=function(e){var n=e.fileName,t=e.min,o=e.max;return i.a.createElement("div",{className:"file-progress"},i.a.createElement("div",{className:"file-progress__filename"},n),i.a.createElement("div",{className:"file-progress__bar-container"},i.a.createElement("div",{className:"file-progress__bar",style:s(t,o)})))},c=function(e){var n=e.fileName,t=e.min,o=e.max;return i.a.createElement("div",{className:"non-form-file-progress"},i.a.createElement("div",{className:"non-form-file-progress__filename"},n),i.a.createElement("div",{className:"non-form-file-progress__bar-container"},i.a.createElement("div",{className:"non-form-file-progress__bar",style:s(t,o)})))},p=function(e){var n=e.filesProgress,t=e.formLayout,o=t?l:c;return a.map(o)(n)};p.defaultProps={formLayout:!0},n.a=p},2841:function(e,n,t){var o=t(2842);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;t(1996)(o,i);o.locals&&(e.exports=o.locals)},2842:function(e,n,t){n=e.exports=t(1995)(!0),n.push([e.i,".file-progress{display:-ms-inline-flexbox;display:inline-flex;height:50px;width:100%;border-radius:4px;border:1px solid #dce1e4;margin-top:15px;-ms-flex-align:center;align-items:center}.file-progress__filename{line-height:50px;width:50%;border-right:1px solid #dce1e4;color:#2f3233;font-size:14px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding:0 16px}.file-progress__bar-container{height:16px;line-height:16px;background-color:#d7dde0;border-radius:4px;width:100%;margin:0 16px}.file-progress__bar{height:16px;line-height:16px;border-radius:4px;background-color:#4353ff;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease}.non-form-file-progress{display:-ms-inline-flexbox;display:inline-flex;height:50px;width:100%;margin-top:15px;-ms-flex-align:center;align-items:center}.non-form-file-progress__filename{line-height:50px;width:50%;color:#2f3233;font-size:14px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.non-form-file-progress__bar-container{height:16px;line-height:16px;border-radius:4px;width:100%;margin:0 16px}.non-form-file-progress__bar{height:16px;line-height:16px;border-radius:4px;background-color:#4353ff;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/components/FileUploadProgress/FileUploadProgress.scss"],names:[],mappings:"AAAA,eACE,2BAA4B,AAC5B,oBAAqB,AACrB,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,yBAA0B,AAC1B,gBAAiB,AACjB,sBAAuB,AACnB,kBAAoB,CAAE,AAE5B,yBACE,iBAAkB,AAClB,UAAW,AACX,+BAAgC,AAChC,cAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,gBAAiB,AACjB,0BAA2B,AACxB,uBAAwB,AAC3B,cAAgB,CAAE,AAEpB,8BACE,YAAa,AACb,iBAAkB,AAClB,yBAA0B,AAC1B,kBAAmB,AACnB,WAAY,AACZ,aAAe,CAAE,AAEnB,oBACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,yBAA0B,AAC1B,gCAAiC,AACjC,2BAA4B,AAC5B,uBAAyB,CAAE,AAE7B,wBACE,2BAA4B,AAC5B,oBAAqB,AACrB,YAAa,AACb,WAAY,AACZ,gBAAiB,AACjB,sBAAuB,AACnB,kBAAoB,CAAE,AAE5B,kCACE,iBAAkB,AAClB,UAAW,AACX,cAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,gBAAiB,AACjB,0BAA2B,AACxB,sBAAwB,CAAE,AAE/B,uCACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,aAAe,CAAE,AAEnB,6BACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,yBAA0B,AAC1B,gCAAiC,AACjC,2BAA4B,AAC5B,uBAAyB,CAAE",file:"FileUploadProgress.scss",sourcesContent:[".file-progress {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 50px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #dce1e4;\n  margin-top: 15px;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.file-progress__filename {\n  line-height: 50px;\n  width: 50%;\n  border-right: 1px solid #dce1e4;\n  color: #2f3233;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  padding: 0 16px; }\n\n.file-progress__bar-container {\n  height: 16px;\n  line-height: 16px;\n  background-color: #d7dde0;\n  border-radius: 4px;\n  width: 100%;\n  margin: 0 16px; }\n\n.file-progress__bar {\n  height: 16px;\n  line-height: 16px;\n  border-radius: 4px;\n  background-color: #4353ff;\n  -webkit-transition: .3s all ease;\n  -o-transition: .3s all ease;\n  transition: .3s all ease; }\n\n.non-form-file-progress {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 50px;\n  width: 100%;\n  margin-top: 15px;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.non-form-file-progress__filename {\n  line-height: 50px;\n  width: 50%;\n  color: #2f3233;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis; }\n\n.non-form-file-progress__bar-container {\n  height: 16px;\n  line-height: 16px;\n  border-radius: 4px;\n  width: 100%;\n  margin: 0 16px; }\n\n.non-form-file-progress__bar {\n  height: 16px;\n  line-height: 16px;\n  border-radius: 4px;\n  background-color: #4353ff;\n  -webkit-transition: .3s all ease;\n  -o-transition: .3s all ease;\n  transition: .3s all ease; }\n"],sourceRoot:""}])},4386:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(28),i=t(19),a=t(15),r=t(4387),s=t(798),l=function(e){return{industriesLoading:e.industries.isLoading}},c=function(e){return{fetchIndustries:function(){return e(Object(s.b)())}}};n.default=Object(i.g)(Object(o.b)(l,c,a.a)(r.a))},4387:function(e,n,t){"use strict";var o=t(9),i=t.n(o),a=t(10),r=t.n(a),s=t(12),l=t.n(s),c=t(4),p=t.n(c),m=t(5),d=t.n(m),A=t(13),u=t.n(A),f=t(14),h=t.n(f),g=t(0),b=t.n(g),B=t(3),C=t.n(B),x=t(4388),v=t(770),y=t(21),E=t(766),_=function(e){function n(){return p()(this,n),u()(this,(n.__proto__||l()(n)).apply(this,arguments))}return h()(n,e),d()(n,[{key:"componentDidMount",value:function(){function e(){return n.apply(this,arguments)}var n=r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchIndustries();case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){return b.a.createElement(E.a,null,b.a.createElement(v.a,{title:this.props.t("common.editCompany")}),b.a.createElement(x.a,null))}}]),n}(g.Component);_.propTypes={fetchIndustries:C.a.func.isRequired},n.a=Object(y.a)(_)},4388:function(e,n,t){"use strict";var o=t(9),i=t.n(o),a=t(10),r=t.n(a),s=t(100),l=t(28),c=t(800),p=t(798),m=t(768),d=t(198),A=t(243),u=t(15),f=t(120),h=t(235),g=t(2091),b=t(473),B=t(4389),C=t(4403),x=t(190),v=t(2086),y=(t(6),this),E=new x.a,_=E.mapOptionsByLanguageTranslations,k="EditCompanyDetailsForm",w=Object(s.s)({form:k,validate:C.a,shouldValidate:function(){return!0},onSubmitFail:v.a,enableReinitialize:!0,keepDirtyOnReinitialize:!0})(B.a),O=function(e){var n=Object(f.h)(e),t=n.perks&&Object(u.d)(e.resources.perks.entries).filter(function(e){return n.perks.includes(e.value)}),o=t?E.mapOptionsWithCustomIdByLanguageTranslations(t,"value","title"):[],i=n.socialMediaLinks||{twitter:"",linkedin:""},a=n.address&&n.address.split(","),r=a&&a.pop().trim(),l=a&&a.join(",");return{initialValues:{industryId:n.industryId,logoUrl:n.logoUrl,coverPhotoUrl:n.coverPhotoUrl,name:n.name,description:n.description,perks:o,size:n.size,socialMediaLinks:i,website:n.website,location:n.address||n.city+", "+n.country,oldLocation:{label:l||n.city,value:l||n.city,country:r||n.country},notUsedLocation:{address:n.address,city:n.city,country:n.country,locationCoords:n.locationCoords,googlePlacesId:n.googlePlacesId}},videoUrl:n.videoUrl,isVideoUploading:e.files.videoCvUploadProgress,coverPhotoUrl:Object(s.g)(k)(e,"coverPhotoUrl"),industries:_(Object(u.d)(e.industries.entries)),perks:E.mapOptionsWithCustomIdByLanguageTranslations(Object(u.d)(e.resources.perks.entries),"value","title"),size:E.mapOptionsWithCustomIdByLanguageTranslations(Object(u.d)(e.resources.companySize.entries),"value","name"),canUseCompanyPageService:Object(h.r)(e),organisationId:n.id,images:Object(g.b)(e,n.id),formErrors:Object(s.j)(k)(e)}},j=function(e){return{updateOrganisation:function(){function n(e){return t.apply(this,arguments)}var t=r()(i.a.mark(function n(t){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(Object(d.k)(t));case 2:e(Object(b.d)());case 3:case"end":return n.stop()}},n,y)}));return n}(),fetchIndustries:function(){return e(Object(p.b)())},fetchPerks:function(){return e(Object(m.i)())},fetchCompanySize:function(){return e(Object(m.c)())},fetchImages:function(n){return e(Object(A.g)(n))},uploadOrganisationLogo:function(){function n(e,n){return t.apply(this,arguments)}var t=r()(i.a.mark(function n(t,o){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e(Object(d.l)(t,o,c.f.logoUrl));case 2:e(Object(b.d)());case 3:case"end":return n.stop()}},n,y)}));return n}(),deleteOrganisationLogo:function(){return e(Object(d.j)(c.f.logoUrl))},uploadOrganisationCoverPhoto:function(n,t){return e(Object(d.l)(n,t,c.f.coverPhotoUrl))},deleteOrganisationCoverPhoto:function(){return e(Object(d.j)(c.f.coverPhotoUrl))},uploadVideo:function(n,t){return e(Object(d.m)(n,t))},deleteVideo:function(){return e(Object(A.e)())},generateSignature:function(){return e(Object(A.i)(!0))},uploadFile:function(n,t,o){return e(Object(A.l)(n,t,o))},deleteFile:function(n,t){return e(Object(A.d)(n,t))}}};n.a=Object(l.b)(O,j)(w)},4389:function(e,n,t){"use strict";var o=t(103),i=t.n(o),a=t(9),r=t.n(a),s=t(10),l=t.n(s),c=t(153),p=t.n(c),m=t(7),d=t.n(m),A=t(12),u=t.n(A),f=t(4),h=t.n(f),g=t(5),b=t.n(g),B=t(13),C=t.n(B),x=t(14),v=t.n(x),y=t(0),E=t.n(y),_=t(3),k=t.n(_),w=t(100),O=t(6),j=t(765),U=t(4390),P=t(2129),F=t(21),I=t(91),L=t(2082),N=t(800),D=t(3170),R=t(3171),S=t(4397),M=t(4400),V=t.n(M),z=t(453),q=t(785),Y=t(2171),T=t(4401),W=(t.n(T),t(320)),Z=(t.n(W),t(2132)),H=function(e){function n(){var e,t,o,i;h()(this,n);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=o=C()(this,(e=n.__proto__||u()(n)).call.apply(e,[this].concat(r))),o.state={locationInputValue:"",locationOptions:o.props.initialValues.oldLocation&&o.props.initialValues.oldLocation.value?[o.props.initialValues.oldLocation]:[]},o.onKeyUp=function(e){0!==e.length&&Object(Z.a)(null,{city:e||o.state.locationInputValue}).then(function(e){o.setState({locationOptions:e})})},o.normalizeValues=function(e){var n=O.omit(["location"],e);return d()({},n,e.location,{perks:e.perks.map(function(e){return e.value})})},o.updateOrganisation=function(e){var n=O.map(O.trim,O.split(",",e.location)),t=p()(n,2),i=t[0],a=t[1],r=d()({},e,{googlePlacesId:"999",locationCoords:"99.999 99.999",location:{address:"",city:i,country:a}});return o.props.updateOrganisation(o.normalizeValues(r))},i=t,C()(o,i)}return v()(n,e),b()(n,[{key:"componentDidMount",value:function(){function e(){return n.apply(this,arguments)}var n=l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.fetchPerks();case 2:return e.next=4,this.props.fetchCompanySize();case 4:return e.next=6,this.props.fetchIndustries();case 6:return e.next=8,this.props.fetchImages(this.props.organisationId);case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this,n=this.props,t=n.t,o=n.handleSubmit,a=n.canUseCompanyPageService,r=O.isNil(this.props.initialValues.logoUrl)&&O.has("logoUrl",O.propOr({},"formErrors",this.props))&&this.props.submitFailed,s=[].concat(i()(this.state.locationOptions)).map(function(e){var n=e.value+", "+e.country,t=e.value+", "+(e.country_name||e.country);return d()({},e,{value:n,label:t})});return E.a.createElement(y.Fragment,null,E.a.createElement(W.Helmet,null,E.a.createElement("title",null,t("meta.employer.title.companyProfile")),E.a.createElement("meta",{property:"og:title",content:t("meta.employer.title.companyProfile")})),E.a.createElement("div",{className:"edit-company-details__container parsing--hidden"},E.a.createElement(w.c,{onSubmit:o(this.updateOrganisation)},E.a.createElement(D.a,{className:"form-container--details"},E.a.createElement(R.a,{heading:this.props.t("company.form.edit.title"),description:this.props.t("company.form.edit.description"),image:V.a}),E.a.createElement(w.a,{component:j.f,label:t("forms.companyName.label"),name:"name",placeholder:t("forms.companyName.placeholder"),type:"text"}),E.a.createElement("div",{className:"columns form__wrapper--inline"},E.a.createElement("div",{className:"column col-6"},E.a.createElement(w.a,{component:j.s,options:this.props.industries,label:t("forms.industry.label"),placeholder:t("common.select"),name:"industryId",withIcon:!0})),E.a.createElement("div",{className:"column col-6"},E.a.createElement(w.a,{component:j.s,options:this.props.size,label:t("forms.companySize.label"),placeholder:t("common.select"),name:"size",withIcon:!0}))),E.a.createElement(w.a,{component:j.s,options:s,label:t("forms.location.label"),placeholder:t("forms.location.placeholder"),name:"location",onInputChange:function(n){e.setState({locationInputValue:n}),e.onKeyUp(n)}}),E.a.createElement(j.d,null),E.a.createElement(P.b,{label:t("company.form.sections.description.label"),text:t("company.form.sections.description.text")}),E.a.createElement("div",{className:"form__group"},E.a.createElement(w.a,{component:j.e,label:t("forms.companyDescription.label"),placeholder:t("forms.companyDescription.placeholder"),name:"description",limit:L.a.companyDetailsDescription[1]})),E.a.createElement("div",{className:"form__group"},E.a.createElement(w.a,{component:j.f,label:t("forms.companyWebsiteURL.label"),name:"website",optional:t("common.optional"),placeholder:t("forms.companyWebsiteURL.placeholder"),type:"text"})),E.a.createElement("div",{className:"form__group"},E.a.createElement(j.k,{label:t("forms.companySocialProfiles.label"),optional:t("common.optional")},E.a.createElement(w.a,{component:j.i,name:"socialMediaLinks.linkedin",iconClassName:"icon-im-linkedin",placeholder:t("forms.linkedIn.placeholder"),type:"text",showOnError:!0}),E.a.createElement(w.a,{component:j.i,name:"socialMediaLinks.twitter",iconClassName:"icon-im-twitter",placeholder:t("forms.twitter.placeholder"),type:"text",showOnError:!0}))),E.a.createElement(j.d,null),E.a.createElement(P.b,{label:t("company.form.sections.logo.label"),text:t("company.form.sections.logo.text")}),E.a.createElement(w.a,{component:j.f,name:"logoUrl",type:"hidden"}),E.a.createElement(j.v,{multiple:!1,uploadFile:this.props.uploadOrganisationLogo,deleteFile:this.props.deleteOrganisationLogo,imageUrl:this.props.initialValues.logoUrl,hasError:r,error:O.propOr({},"logoUrl",this.props.formErrors)}),E.a.createElement(j.d,null),E.a.createElement(P.b,{optional:!0,label:t("company.form.sections.perks.label"),text:t("company.form.sections.perks.text")}),E.a.createElement(w.a,{component:j.l,options:this.props.perks,placeholder:t("forms.perks.placeholder"),name:"perks",maxItemsCount:N.e,withIcon:!0}),a?E.a.createElement("div",null,E.a.createElement("div",null,E.a.createElement(j.d,null),E.a.createElement(R.a,{heading:this.props.t("company.form.extraFeatures.title"),description:this.props.t("company.form.extraFeatures.description"),image:V.a}),E.a.createElement(P.b,{label:t("company.form.sections.coverPhoto.label"),text:t("company.form.sections.coverPhoto.text")}),E.a.createElement(w.a,{component:j.f,name:"coverPhotoUrl",type:"hidden"}),E.a.createElement(j.v,{multiple:!1,sizeConstraints:z.b.COVER_PHOTO,layout:"vertical",cropAspectRatio:z.a.COVER_PHOTO,uploadFile:this.props.uploadOrganisationCoverPhoto,deleteFile:this.props.deleteOrganisationCoverPhoto,imageUrl:this.props.initialValues.coverPhotoUrl})),E.a.createElement(j.d,null),E.a.createElement(P.b,{label:t("company.form.sections.video.label"),text:t("company.form.sections.video.text")}),E.a.createElement(j.B,{uploadVideo:this.props.uploadVideo,deleteVideo:this.props.deleteVideo,videoCvUrl:this.props.videoUrl,uploading:this.props.isVideoUploading}),E.a.createElement(j.d,null),E.a.createElement(P.b,{label:t("company.form.sections.images.label"),text:t("company.form.sections.images.text")}),this.props.images.length<q.f&&E.a.createElement(j.r,{generateSignature:this.props.generateSignature,uploadFile:this.props.uploadFile,maxSize:q.g,maxFileCount:q.f,formats:Object(q.h)(),files:this.props.images}),!O.isEmpty(this.props.images)&&E.a.createElement(S.a,{files:this.props.images,deleteFile:this.props.deleteFile})):E.a.createElement("div",null,E.a.createElement(j.d,null),E.a.createElement(P.a,{label:t("company.form.sections.unavailableMediaSections.label")},t("company.form.sections.unavailableMediaSections.text"),"\xa0",E.a.createElement(Y.a,null)))),E.a.createElement(U.a,null,E.a.createElement(I.d,{type:"submit",className:"button--form-controls"},this.props.t("common.save"))))))}}]),n}(y.Component);H.propTypes={uploadOrganisationLogo:k.a.func.isRequired,deleteOrganisationLogo:k.a.func.isRequired,uploadOrganisationCoverPhoto:k.a.func.isRequired,deleteOrganisationCoverPhoto:k.a.func.isRequired,canUseCompanyPageService:k.a.bool.isRequired},n.a=Object(F.a)(H)},4390:function(e,n,t){"use strict";var o=t(8),i=t.n(o),a=t(0),r=t.n(a),s=t(11),l=t.n(s),c=t(3),p=t.n(c),m=t(4391),d=(t.n(m),function(e){var n=e.children,t=e.className,o=l()(i()({"form-controls":!0},t,!!t));return r.a.createElement("div",{className:o},n)});d.propTypes={className:p.a.string},n.a=d},4391:function(e,n,t){var o=t(4392);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;t(1996)(o,i);o.locals&&(e.exports=o.locals)},4392:function(e,n,t){n=e.exports=t(1995)(!0),n.push([e.i,".form-controls{margin-top:32px;text-align:right;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.form-controls .profile__form-footer--save-button{margin-left:auto}.main--arabic .form-controls .profile__form-footer--save-button{margin-left:0;margin-right:auto}@media (max-width:480px){.form-controls .profile__form-footer--save-button{width:100%}}@media (min-width:481px) and (max-width:768px){.form-controls .profile__form-footer--save-button{width:auto}}@media (max-width:480px){.form-controls .button--secondary{display:none}}@media (min-width:481px) and (max-width:768px){.form-controls .button--secondary{display:none}}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/components/FormControls/FormControls.scss"],names:[],mappings:"AAAA,eACE,gBAAiB,AACjB,iBAAkB,AAClB,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACf,wBAA0B,CAAE,AAChC,kDACE,gBAAkB,CAAE,AACpB,gEACE,cAAe,AACf,iBAAmB,CAAE,AACvB,yBACE,kDACE,UAAY,CAAE,CAAE,AACpB,+CACE,kDACE,UAAY,CAAE,CAAE,AACtB,yBACE,kCACE,YAAc,CAAE,CAAE,AACtB,+CACE,kCACE,YAAc,CAAE,CAAE",file:"FormControls.scss",sourcesContent:[".form-controls {\n  margin-top: 32px;\n  text-align: right;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end; }\n  .form-controls .profile__form-footer--save-button {\n    margin-left: auto; }\n    .main--arabic .form-controls .profile__form-footer--save-button {\n      margin-left: 0;\n      margin-right: auto; }\n    @media (max-width: 480px) {\n      .form-controls .profile__form-footer--save-button {\n        width: 100%; } }\n    @media (min-width: 481px) and (max-width: 768px) {\n      .form-controls .profile__form-footer--save-button {\n        width: auto; } }\n  @media (max-width: 480px) {\n    .form-controls .button--secondary {\n      display: none; } }\n  @media (min-width: 481px) and (max-width: 768px) {\n    .form-controls .button--secondary {\n      display: none; } }\n"],sourceRoot:""}])},4397:function(e,n,t){"use strict";var o=t(12),i=t.n(o),a=t(4),r=t.n(a),s=t(5),l=t.n(s),c=t(13),p=t.n(c),m=t(14),d=t.n(m),A=t(0),u=t.n(A),f=t(3),h=t.n(f),g=t(40),b=t(2081),B=t(53),C=t(91),x=t(21),v=t(251),y=t(2244),E=t(4398),_=(t.n(E),new v.a),k=function(e){function n(){var e,t,o,a;r()(this,n);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return t=o=p()(this,(e=n.__proto__||i()(n)).call.apply(e,[this].concat(l))),o.state={fileRemoveId:"",fileRemoveName:"",showDeleteFileModal:!1},o._openDeleteModal=function(e,n){return function(){return o.setState({fileRemoveId:e,fileRemoveName:n,showDeleteFileModal:!0})}},o._hideDeleteModal=function(){return o.setState({fileRemoveId:"",showDeleteFileModal:!1})},o._deleteFile=function(){var e=o.state,n=e.fileRemoveId,t=e.fileRemoveName;o.props.deleteFile(n,t),o._hideDeleteModal()},a=t,p()(o,a)}return d()(n,e),l()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.files,o=n.t,i=this.state.fileRemoveName;return u.a.createElement("div",{className:"uploaded-images-list"},u.a.createElement(g.a,null,o("common.uploadedImages")),t.slice().sort(B.v).map(function(n){return u.a.createElement("div",{key:n.id,className:"uploaded-images-list__image"},u.a.createElement("div",{className:"uploaded-images-list__thumbnail",style:{backgroundImage:"url("+_.generateFileLink(n.path)+")"}}),u.a.createElement("div",{className:"uploaded-images-list__filename"},n.name),u.a.createElement("div",{className:"uploaded-images-list__button"},u.a.createElement(C.l,{justIcon:!0,type:"button",onClick:e._openDeleteModal(n.id,n.name)},u.a.createElement("i",{className:"ion-md-trash"}))))}),u.a.createElement(y.a,null),u.a.createElement(b.b,{title:this.props.t("remove.file.title",{name:i}),content:this.props.t("remove.file.description",{name:i}),handleDelete:this._deleteFile,isModalVisible:this.state.showDeleteFileModal,hideDeleteModal:this._hideDeleteModal}))}}]),n}(A.Component);k.propTypes={files:h.a.array.isRequired,deleteFile:h.a.func.isRequired},n.a=Object(x.a)(k)},4398:function(e,n,t){var o=t(4399);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;t(1996)(o,i);o.locals&&(e.exports=o.locals)},4399:function(e,n,t){n=e.exports=t(1995)(!0),n.push([e.i,".uploaded-images-list{margin-top:24px}.uploaded-images-list__image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:12px}.uploaded-images-list__thumbnail{display:inline-block;background-position:50%;background-size:cover;min-width:70px;min-height:70px;border-radius:4px}.uploaded-images-list__filename{-ms-flex-positive:2;flex-grow:2;padding:25px;word-break:break-all}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/components/UploadedImagesList/UploadedImagesList.scss"],names:[],mappings:"AAAA,sBACE,eAAiB,CAAE,AAErB,6BACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,eAAiB,CAAE,AAErB,iCACE,qBAAsB,AACtB,wBAA4B,AAC5B,sBAAuB,AACvB,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CAAE,AAEvB,gCACE,oBAAqB,AACjB,YAAa,AACjB,aAAc,AACd,oBAAsB,CAAE",file:"UploadedImagesList.scss",sourcesContent:[".uploaded-images-list {\n  margin-top: 24px; }\n\n.uploaded-images-list__image {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-top: 12px; }\n\n.uploaded-images-list__thumbnail {\n  display: inline-block;\n  background-position: center;\n  background-size: cover;\n  min-width: 70px;\n  min-height: 70px;\n  border-radius: 4px; }\n\n.uploaded-images-list__filename {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  padding: 25px;\n  word-break: break-all; }\n"],sourceRoot:""}])},4400:function(e,n,t){e.exports=t.p+"static/media/icon-step3-experience.54aaaa0c.svg"},4401:function(e,n,t){var o=t(4402);"string"===typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;t(1996)(o,i);o.locals&&(e.exports=o.locals)},4402:function(e,n,t){n=e.exports=t(1995)(!0),n.push([e.i,".edit-company-details__container{display:block!important}.edit-company-details__container .location-contact{color:#818385}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Employer/forms/Company/EditCompanyDetailsForm.scss"],names:[],mappings:"AAAA,iCACE,uBAA0B,CAAE,AAE9B,mDACE,aAAe,CAAE",file:"EditCompanyDetailsForm.scss",sourcesContent:[".edit-company-details__container {\n  display: block !important; }\n\n.edit-company-details__container .location-contact {\n  color: #818385; }\n"],sourceRoot:""}])},4403:function(e,n,t){"use strict";var o=t(163),i=t.n(o),a=t(153),r=t.n(a),s=t(450),l=t.n(s),c=t(66),p=t(2082),m=t(767);n.a=function(e){var n={socialMediaLinks:{}},t=[{name:"name",label:"name"},{name:"industryId",label:"industry"},{name:"size",label:"size"},{name:"location",label:"location"},{name:"description",label:"description"},{name:"logoUrl",label:"companyLogo"},{name:"uploadFile",label:"uploadFile"}],o=["twitter","linkedin"],a=r()(p.a.companyDetailsDescription,2),s=a[0],d=a[1];return e.website&&Object(c.C)(e.website)&&(n.website={key:"errors.invalidLink",options:{}}),o.forEach(function(t){e.socialMediaLinks[t]&&Object(c.C)(e.socialMediaLinks[t])&&(n.socialMediaLinks[t]={key:"errors.invalidLink",options:{}})}),e.website&&Object(c.C)(e.website)&&(n.website={key:"errors.invalidLink",options:{}}),e.description&&Object(m.b)(e.description)<s&&(n.description={key:"errors.textFieldTooShort",options:{field:l()("description"),chars:l()(s.toString())}}),e.description&&Object(m.b)(e.description)>d&&(n.description={key:"errors.textFieldTooLong",options:{field:l()("description"),chars:l()(d.toString())}}),e.location&&i()(e.location).some(function(e){return!e})&&(n.location={key:"errors.requiredField",options:{field:l()("location")}}),t.forEach(function(t){e[t.name]||(n[t.name]={key:"errors.requiredField",options:{field:l()(t.label)}})}),n}}});
//# sourceMappingURL=EditCompanyDetailsViewConnector.13e327c2.chunk.js.map