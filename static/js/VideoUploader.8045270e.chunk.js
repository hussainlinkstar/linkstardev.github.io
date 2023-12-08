webpackJsonp([22],{2005:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=o(7),a=o.n(i),t=o(12),r=o.n(t),A=o(4),d=o.n(A),l=o(5),s=o.n(l),p=o(13),c=o.n(p),u=o(14),B=o.n(u),m=o(0),C=o.n(m),_=o(3),x=o.n(_),v=o(2244),g=o(6),f=o(111),h=o(67),b=o(776),E=o(453),w=o(21),y=o(3252),k=o(3255),z=o(3266),j=(o.n(z),function(e){return console.log("upload files",e)}),N=function(e){function n(){var e,o,i,t;d()(this,n);for(var A=arguments.length,l=Array(A),s=0;s<A;s++)l[s]=arguments[s];return o=i=c()(this,(e=n.__proto__||r()(n)).call.apply(e,[this].concat(l))),i.dropzoneRef={},i.state={files:[],fileSize:0},i.onDrop=function(e){return e.length&&i.setState({fileSize:Object(g.head)(e).size})},i.uploadVideo=function(e,n){return i.props.requirement?i.props.uploadVideo(e,n):i.props.handleException()},i.handleReject=function(e){var n=i.props,o=n.t,a=n.maxFileSize;return e[0].size>a?h.a.info(o("alerts.fileToLarge",{limit:a/1024/1024})):h.a.info(o("alerts.fileRejected"))},i.renderVideoComponent=function(){var e=i.props,n=e.videoCvUrl,o=e.acceptedMimeTypes,t=e.maxFileSize,r=e.size;return n?C.a.createElement("div",null,C.a.createElement(k.a,{videoCvUrl:n,filename:Object(b.a)(n),onDelete:i.props.deleteVideo,size:r,videoWidth:"small"===r?272:681,videoHeight:"small"===r?272:345})):C.a.createElement("div",{className:"video-uploader"},C.a.createElement(v.a,a()({},i.props.input,{accept:Object(g.join)(",",o),onDropAccepted:i.uploadVideo,onDropRejected:i.handleReject,maxSize:t,className:"video-uploader__dropzone",activeClassName:"video-uploader__dropzone--active",disableClick:!0,ref:function(e){i.dropzoneRef=e},onDrop:i.onDrop,multiple:!1}),C.a.createElement("div",{className:"video-uploader__container"},C.a.createElement("div",{className:"video-uploader__drop-area"},C.a.createElement("i",{className:"icon-im-upload"}),C.a.createElement(f.b,{parent:"div",i18nKey:"common.uploadVideoInfo",className:"video-uploader__description",uploadButton:i.uploadButton()})))))},i.uploadButton=function(){return C.a.createElement("span",{className:"video-uploader__button--upload",onClick:function(){return i.dropzoneRef.open()}},i.props.t("common.choose"))},t=o,c()(i,t)}return B()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.uploading,o=e.t,i=this.state.fileSize;return C.a.createElement("div",null,n?C.a.createElement(y.a,{min:n,max:i,label:o("common.uploadProgress")}):this.renderVideoComponent())}}]),n}(m.Component);N.propTypes={acceptedMimeTypes:x.a.array,maxFileSize:x.a.number,uploadVideo:x.a.func,deleteVideo:x.a.func.isRequired,t:x.a.func,requirement:x.a.bool,handleException:x.a.func,size:x.a.oneOf(["big","small"]).isRequired},N.defaultProps={acceptedMimeTypes:E.f,maxFileSize:E.e,uploadVideo:j,requirement:!0,size:"small"},n.default=Object(w.a)(N)},3252:function(e,n,o){"use strict";var i=o(0),a=o.n(i),t=o(3),r=o.n(t),A=o(3253),d=(o.n(A),function(e){var n=e.min,o=e.max,i=e.label,t=function(){return Math.round(parseInt(n)/parseInt(o)*100)},r={width:t()+"%"};return a.a.createElement("div",{className:"c-progress-bar"},a.a.createElement("div",{className:"c-progress-bar__total"},a.a.createElement("div",{style:r,className:"c-progress-bar__progress"})),i&&a.a.createElement("div",{className:"c-progress-bar__label"},a.a.createElement("span",null,i)," ",t(),"%"))});d.propTypes={min:r.a.oneOfType([r.a.number,r.a.string]).isRequired,max:r.a.number.isRequired,label:r.a.string},n.a=d},3253:function(e,n,o){var i=o(3254);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0};a.transform=void 0;o(1996)(i,a);i.locals&&(e.exports=i.locals)},3254:function(e,n,o){n=e.exports=o(1995)(!0),n.push([e.i,".c-progress-bar{border:2px dashed #d7dde0;border-radius:4px;padding:72px 88px;height:206px}.c-progress-bar__total{position:relative;height:16px;background-color:#d7dde0;border-radius:4px}.c-progress-bar__progress{height:16px;border-radius:4px;background-color:#4353ff;position:absolute;top:0;left:0;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease}.c-progress-bar__label{text-align:center;font-size:14px;margin-top:16px;font-weight:300}.c-progress-bar__label>span{color:#c2c6c9}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/components/ProgressBar/ProgressBar.scss"],names:[],mappings:"AAAA,gBACE,0BAA2B,AAC3B,kBAAmB,AACnB,kBAAmB,AACnB,YAAc,CAAE,AAElB,uBACE,kBAAmB,AACnB,YAAa,AACb,yBAA0B,AAC1B,iBAAmB,CAAE,AAEvB,0BACE,YAAa,AACb,kBAAmB,AACnB,yBAA0B,AAC1B,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,gCAAiC,AACjC,2BAA4B,AAC5B,uBAAyB,CAAE,AAE7B,uBACE,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,eAAiB,CAAE,AACnB,4BACE,aAAe,CAAE",file:"ProgressBar.scss",sourcesContent:[".c-progress-bar {\n  border: 2px dashed #d7dde0;\n  border-radius: 4px;\n  padding: 72px 88px;\n  height: 206px; }\n\n.c-progress-bar__total {\n  position: relative;\n  height: 16px;\n  background-color: #d7dde0;\n  border-radius: 4px; }\n\n.c-progress-bar__progress {\n  height: 16px;\n  border-radius: 4px;\n  background-color: #4353ff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: .3s all ease;\n  -o-transition: .3s all ease;\n  transition: .3s all ease; }\n\n.c-progress-bar__label {\n  text-align: center;\n  font-size: 14px;\n  margin-top: 16px;\n  font-weight: 300; }\n  .c-progress-bar__label > span {\n    color: #c2c6c9; }\n"],sourceRoot:""}])},3255:function(e,n,o){"use strict";var i=o(12),a=o.n(i),t=o(4),r=o.n(t),A=o(5),d=o.n(A),l=o(13),s=o.n(l),p=o(14),c=o.n(p),u=o(0),B=o.n(u),m=o(11),C=o.n(m),_=o(3),x=o.n(_),v=o(2210),g=o(21),f=o(40),h=o(91),b=o(2079),E=function(e){function n(e){r()(this,n);var o=s()(this,(n.__proto__||a()(n)).call(this,e));return o.triggerVideoError=function(e){return o.setState({videoError:e})},o.triggerVideoLoadedSuccess=function(){return o.setState({videoLoaded:!0})},o._openDeleteModal=function(){return o.setState({showDeleteModal:!0})},o._hideDeleteModal=function(){return o.setState({showDeleteModal:!1})},o.state={showDeleteModal:!1,videoLoaded:!1,videoError:null},o}return c()(n,e),d()(n,[{key:"render",value:function(){var e=this.props,n=e.t,o=e.videoCvUrl,i=e.onDelete,a=e.size,t=C()({"video-uploader__container--video":"small"===a,"video-uploader__container--video-big":"big"===a}),r=C()({"video-uploader__player":!0,"video-uploader__player--loading":!this.state.videoLoaded}),A="small"===a?h.l:h.a,d=C()({"video-uploader__container--controls":"small"===a,"video-uploader__container--controls-big":"big"===a}),l=C()({"video-uploader__notice":"small"===a,"video-uploader__notice--big":"big"===a});return B.a.createElement("div",{className:"video-uploader__uploaded-video-details"},B.a.createElement("div",{className:t},B.a.createElement("div",{className:"video-uploader__container__video-wrapper"},"small"===a&&B.a.createElement(f.a,null,n("common.uploadedVideo")),B.a.createElement("div",null,this.state.videoError?B.a.createElement("div",{className:l},B.a.createElement("i",{className:"video-uploader__notice-icon icon-im-step-done"}),B.a.createElement("h4",{className:"video-uploader__notice-heading"},n("videoUploadNotice.heading")),B.a.createElement("div",{className:"video-uploader__notice-description"},n("videoUploadNotice.description"))):B.a.createElement(v.a,{className:r,videoUrl:o,onReady:this.triggerVideoLoadedSuccess,onError:this.triggerVideoError}))),B.a.createElement("div",{className:d},B.a.createElement(A,{onClick:this._openDeleteModal,justIcon:!0},B.a.createElement("i",{className:"ion-md-trash"})))),B.a.createElement(b.b,{title:this.props.t("remove.video.title"),content:this.props.t("remove.video.description"),handleDelete:i,isModalVisible:this.state.showDeleteModal,hideDeleteModal:this._hideDeleteModal}))}}]),n}(u.Component);E.propTypes={videoCvUrl:x.a.string,width:x.a.number,height:x.a.number,onDelete:x.a.func.isRequired,size:x.a.oneOf(["big","small"]).isRequired},E.defaultProps={videoWidth:272,videoHeight:152,size:"small"},n.a=Object(g.a)(E)},3266:function(e,n,o){var i=o(3267);"string"===typeof i&&(i=[[e.i,i,""]]);var a={hmr:!0};a.transform=void 0;o(1996)(i,a);i.locals&&(e.exports=i.locals)},3267:function(e,n,o){n=e.exports=o(1995)(!0),n.push([e.i,".video-uploader__container{display:-ms-flexbox;display:flex;position:relative;border:2px dashed #d7dde0;border-radius:4px;width:100%;padding:40px 24px 60px;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center}.video-uploader__button--upload{cursor:pointer;color:#4353ff;font-weight:700}.video-uploader__drop-area{color:#c2c6c9;font-size:14px}.video-uploader__drop-area>i{font-size:48px;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease;margin-bottom:16px;display:block}.video-uploader__dropzone--active i{color:#4353ff}.video-uploader__dropzone--active .video-uploader__container{border-color:#4353ff;background-color:rgba(67,83,255,.05)}.video-uploader__description{max-width:280px}.video-uploader__uploaded-video-details{position:relative}.video-uploader__container--video-big{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}@media screen and (max-width:768px){.video-uploader__container--video-big{-ms-flex-direction:column-reverse;flex-direction:column-reverse}}@media screen and (max-width:768px){.video-uploader__container__video-wrapper{width:100%}}@media screen and (max-width:768px){.video-uploader__container--controls-big .button{font-size:16px;height:36px;width:36px;min-width:36px;line-height:36px;padding:0}}@media screen and (max-width:768px){.video-uploader__container--controls-big{position:absolute;right:0;top:-50px}.main--arabic .video-uploader__container--controls-big{right:auto;left:0}}.video-uploader__loader{width:100%;height:206px}.video-uploader__container--controls{position:absolute;right:0;top:calc(50% + 11px);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.main--arabic .video-uploader__container--controls{right:auto;left:0}@media screen and (max-width:768px){.video-uploader__container--controls{position:relative;display:block;top:0;right:0;-webkit-transform:none;-ms-transform:none;transform:none;margin-top:16px}}.video-uploader__notice{width:270px;border:1px solid #22ddab;border-radius:4px;margin-top:32px;padding:24px;text-align:center}.video-uploader__notice--big{border:1px solid #22ddab;border-radius:4px;width:681px;height:345px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:768px){.video-uploader__notice--big{height:173px;width:100%;text-align:center}}.video-uploader__notice-icon{font-size:27px;color:#22ddab}.video-uploader__notice-heading{font-size:16px;margin-top:10px}.video-uploader__notice-description{font-size:13px;margin-top:7px;line-height:1.5}.video-uploader__player{opacity:1}.video-uploader__player--loading{opacity:0;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease;overflow:hidden}","",{version:3,sources:["E:/Projects/oliv-frontend/src/Shared/components/FormElements/VideoUploader/VideoUploader.scss"],names:[],mappings:"AAAA,2BACE,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,0BAA2B,AAC3B,kBAAmB,AACnB,WAAY,AACZ,uBAAwB,AACxB,gCAAiC,AACjC,2BAA4B,AAC5B,wBAAyB,AACzB,kBAAmB,AACf,cAAe,AACnB,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,iBAAmB,CAAE,AAEvB,gCACE,eAAgB,AAChB,cAAe,AACf,eAAiB,CAAE,AAErB,2BACE,cAAe,AACf,cAAgB,CAAE,AAClB,6BACE,eAAgB,AAChB,gCAAiC,AACjC,2BAA4B,AAC5B,wBAAyB,AACzB,mBAAoB,AACpB,aAAe,CAAE,AAErB,oCACE,aAAe,CAAE,AAEnB,6DACE,qBAAsB,AACtB,oCAA0C,CAAE,AAE9C,6BACE,eAAiB,CAAE,AAErB,wCACE,iBAAmB,CAAE,AAEvB,sCACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,sBAAuB,AACnB,kBAAoB,CAAE,AAC1B,oCACE,sCACE,kCAAmC,AAC/B,6BAA+B,CAAE,CAAE,AAE7C,oCACE,0CACE,UAAY,CAAE,CAAE,AAEpB,oCACE,iDACE,eAAgB,AAChB,YAAa,AACb,WAAY,AACZ,eAAgB,AAChB,iBAAkB,AAClB,SAAW,CAAE,CAAE,AAEnB,oCACE,yCACE,kBAAmB,AACnB,QAAS,AACT,SAAW,CAAE,AACb,uDACE,WAAY,AACZ,MAAQ,CAAE,CAAE,AAElB,wBACE,WAAY,AACZ,YAAc,CAAE,AAElB,qCACE,kBAAmB,AACnB,QAAS,AACT,qBAAsB,AACtB,mCAAoC,AAChC,+BAAgC,AAC5B,0BAA4B,CAAE,AACtC,mDACE,WAAY,AACZ,MAAQ,CAAE,AACZ,oCACE,qCACE,kBAAmB,AACnB,cAAe,AACf,MAAO,AACP,QAAS,AACT,uBAAwB,AACpB,mBAAoB,AAChB,eAAgB,AACxB,eAAiB,CAAE,CAAE,AAE3B,wBACE,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,gBAAiB,AACjB,aAAc,AACd,iBAAmB,CAAE,AAEvB,6BACE,yBAA0B,AAC1B,kBAAmB,AACnB,YAAa,AACb,aAAc,AACd,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CAAE,AAC1B,oCACE,6BACE,aAAc,AACd,WAAY,AACZ,iBAAmB,CAAE,CAAE,AAE7B,6BACE,eAAgB,AAChB,aAAe,CAAE,AAEnB,gCACE,eAAgB,AAChB,eAAiB,CAAE,AAErB,oCACE,eAAgB,AAChB,eAAgB,AAChB,eAAiB,CAAE,AAErB,wBACE,SAAW,CAAE,AAEf,iCACE,UAAW,AACX,gCAAiC,AACjC,2BAA4B,AAC5B,wBAAyB,AACzB,eAAiB,CAAE",file:"VideoUploader.scss",sourcesContent:[".video-uploader__container {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border: 2px dashed #d7dde0;\n  border-radius: 4px;\n  width: 100%;\n  padding: 40px 24px 60px;\n  -webkit-transition: .3s all ease;\n  -o-transition: .3s all ease;\n  transition: .3s all ease;\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: center; }\n\n.video-uploader__button--upload {\n  cursor: pointer;\n  color: #4353ff;\n  font-weight: 700; }\n\n.video-uploader__drop-area {\n  color: #c2c6c9;\n  font-size: 14px; }\n  .video-uploader__drop-area > i {\n    font-size: 48px;\n    -webkit-transition: .3s all ease;\n    -o-transition: .3s all ease;\n    transition: .3s all ease;\n    margin-bottom: 16px;\n    display: block; }\n\n.video-uploader__dropzone--active i {\n  color: #4353ff; }\n\n.video-uploader__dropzone--active .video-uploader__container {\n  border-color: #4353ff;\n  background-color: rgba(67, 83, 255, 0.05); }\n\n.video-uploader__description {\n  max-width: 280px; }\n\n.video-uploader__uploaded-video-details {\n  position: relative; }\n\n.video-uploader__container--video-big {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center; }\n  @media screen and (max-width: 768px) {\n    .video-uploader__container--video-big {\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse; } }\n\n@media screen and (max-width: 768px) {\n  .video-uploader__container__video-wrapper {\n    width: 100%; } }\n\n@media screen and (max-width: 768px) {\n  .video-uploader__container--controls-big .button {\n    font-size: 16px;\n    height: 36px;\n    width: 36px;\n    min-width: 36px;\n    line-height: 36px;\n    padding: 0; } }\n\n@media screen and (max-width: 768px) {\n  .video-uploader__container--controls-big {\n    position: absolute;\n    right: 0;\n    top: -50px; }\n    .main--arabic .video-uploader__container--controls-big {\n      right: auto;\n      left: 0; } }\n\n.video-uploader__loader {\n  width: 100%;\n  height: 206px; }\n\n.video-uploader__container--controls {\n  position: absolute;\n  right: 0;\n  top: calc(50% + 11px);\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .main--arabic .video-uploader__container--controls {\n    right: auto;\n    left: 0; }\n  @media screen and (max-width: 768px) {\n    .video-uploader__container--controls {\n      position: relative;\n      display: block;\n      top: 0;\n      right: 0;\n      -webkit-transform: none;\n          -ms-transform: none;\n              transform: none;\n      margin-top: 16px; } }\n\n.video-uploader__notice {\n  width: 270px;\n  border: 1px solid #22ddab;\n  border-radius: 4px;\n  margin-top: 32px;\n  padding: 24px;\n  text-align: center; }\n\n.video-uploader__notice--big {\n  border: 1px solid #22ddab;\n  border-radius: 4px;\n  width: 681px;\n  height: 345px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n  @media screen and (max-width: 768px) {\n    .video-uploader__notice--big {\n      height: 173px;\n      width: 100%;\n      text-align: center; } }\n\n.video-uploader__notice-icon {\n  font-size: 27px;\n  color: #22ddab; }\n\n.video-uploader__notice-heading {\n  font-size: 16px;\n  margin-top: 10px; }\n\n.video-uploader__notice-description {\n  font-size: 13px;\n  margin-top: 7px;\n  line-height: 1.5; }\n\n.video-uploader__player {\n  opacity: 1; }\n\n.video-uploader__player--loading {\n  opacity: 0;\n  -webkit-transition: .3s all ease;\n  -o-transition: .3s all ease;\n  transition: .3s all ease;\n  overflow: hidden; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=VideoUploader.8045270e.chunk.js.map