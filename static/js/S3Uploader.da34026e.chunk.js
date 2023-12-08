webpackJsonp([28],{2006:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=i(7),o=i.n(t),r=i(9),A=i.n(r),a=i(10),l=i.n(a),p=i(12),s=i.n(p),c=i(4),u=i.n(c),f=i(5),d=i.n(f),B=i(13),m=i.n(B),C=i(14),x=i.n(C),_=i(0),b=i.n(_),g=i(78),h=i(3),E=i.n(h),k=i(2246),y=i(111),w=i(125),v=i.n(w),z=i(6),j=i(67),N=i(786),F=i(21),R=i(777),q=i(3249),D=(i.n(q),i(58)),O=i(40),S=i(17),M=function(e){function n(){var e,i,t,o,r=this;u()(this,n);for(var a=arguments.length,p=Array(a),c=0;c<a;c++)p[c]=arguments[c];return i=t=m()(this,(e=n.__proto__||s()(n)).call.apply(e,[this].concat(p))),t.dropzoneRef={},t.state={files:[]},t._uploadFiles=function(){var e=l()(A.a.mark(function e(n){var i,o,a,p,s,c,u;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.props.requirement){e.next=2;break}return e.abrupt("return",t.props.handleException());case 2:if(i=t.props,o=i.maxFileCount,a=i.files,p=i.allFiles,s=i.t,c=a.length>=o||n.length+a.length>o,!(n.length>0&&n.some(function(e){return!N.b.includes(e.type)}))){e.next=6;break}return e.abrupt("return",j.a.error(s("errors.fileUnsupported")));case 6:if(!c){e.next=8;break}return e.abrupt("return",v.a.alert({type:"info",text:s("alerts.maxFileCount",{count:o})}));case 8:u=p||a,n.forEach(function(){var e=l()(A.a.mark(function e(n){var i,o,a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(R.g)(u,n)){e.next=4;break}return e.abrupt("return",j.a.info(t.props.t("alerts.fileExists")));case 4:return e.next=6,t.props.generateSignature();case 6:return i=e.sent,o=i.policy,a=i.signature,e.abrupt("return",t.props.uploadFile(n,o,a));case 10:case"end":return e.stop()}},e,r)}));return function(n){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}},e,r)}));return function(n){return e.apply(this,arguments)}}(),t.handleReject=function(e){return e.length>0&&e.some(function(e){return!N.b.includes(e.type)})?j.a.error(Object(S.b)("errors.fileUnsupported")):e.length>0&&e.some(function(e){return e.size>N.g})?j.a.error(t.props.t("alerts.fileToLarge",{limit:N.g/Math.pow(1024,2)})):j.a.error(t.props.t("alerts.fileRejected"))},t._fileInputProps=function(){return Object(z.pick)(["maxSize"],t.props)},t.uploadButton=function(){return b.a.createElement("span",{className:"file-input__button--upload",onClick:function(){return t.dropzoneRef.open()}},t.props.t("common.choose"))},o=i,m()(t,o)}return x()(n,e),d()(n,[{key:"render",value:function(){var e=this,n=this.props,i=n.label,t=n.placeholder;return this.props.isMobile?b.a.createElement("div",{className:"file-input-mobile"},b.a.createElement(k.a,o()({},this.props.input,this._fileInputProps(),{accept:this.props.formats,onDropAccepted:this._uploadFiles,onDropRejected:this.handleReject,className:"file-input-mobile__dropzone",activeClassName:"file-input-mobile__dropzone--active",disableClick:!0,ref:function(n){e.dropzoneRef=n},onDrop:this.onDrop}),b.a.createElement(O.a,null,i),b.a.createElement("div",{className:"file-input-mobile__container",onClick:function(){return e.dropzoneRef.open()}},b.a.createElement("span",{className:"file-input-mobile__placeholder"},t),b.a.createElement("div",{className:"file-input-mobile__icon"},b.a.createElement("i",{className:"icon-im-upload"}))))):b.a.createElement("div",{className:"file-input"},b.a.createElement(k.a,o()({},this.props.input,this._fileInputProps(),{accept:this.props.formats,onDropAccepted:this._uploadFiles,onDropRejected:this.handleReject,className:"file-input__dropzone",activeClassName:"file-input__dropzone--active",disableClick:!0,ref:function(n){e.dropzoneRef=n},onDrop:this.onDrop}),b.a.createElement("div",{className:"file-input__container"},b.a.createElement("div",{className:"file-input__drop-area"},b.a.createElement("i",{className:"icon-im-upload"}),b.a.createElement(y.b,{parent:"div",i18nKey:"common.uploadFileInfo",className:"file-input__description",uploadButton:this.uploadButton()})))))}}]),n}(_.Component);M.propTypes={uploadFile:E.a.func.isRequired,generateSignature:E.a.func.isRequired,maxSize:E.a.number,maxFileCount:E.a.number,requirement:E.a.bool,handleException:E.a.func,formats:E.a.string},M.defaultProps={maxFileCount:N.e,formats:Object(N.j)(),requirement:!0,label:Object(S.b)("modals.uploadFile.title"),placeholder:Object(S.b)("modals.uploadFile.title")},n.default=Object(g.d)(F.a,D.a)(M)},3249:function(e,n,i){var t=i(3250);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0};o.transform=void 0;i(1999)(t,o);t.locals&&(e.exports=t.locals)},3250:function(e,n,i){n=e.exports=i(1998)(!0),n.push([e.i,".file-input__container{display:-ms-flexbox;display:flex;position:relative;border:2px dashed #d7dde0;border-radius:4px;width:100%;padding:40px 24px 60px;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center}.file-input__button--upload{cursor:pointer;color:#4353ff;font-weight:700}.file-input__drop-area{color:#c2c6c9;font-size:14px}.file-input__drop-area>i{font-size:48px;-webkit-transition:all .3s ease;-o-transition:.3s all ease;transition:all .3s ease;margin-bottom:16px;display:block}.file-input__dropzone--active i{color:#4353ff}.file-input__dropzone--active .file-input__container{border-color:#4353ff;background-color:rgba(67,83,255,.05)}.file-input__description{max-width:280px}.file-input__uploaded-documents{margin-top:24px}.file-input__row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.file-input__row+.file-input__row{margin-top:12px}.file-input__row__file{height:48px;width:100%;padding-left:16px;padding-right:16px;border:1px solid #dce1e4;border-radius:4px;font-size:14px;background-color:#fff;margin-right:16px;line-height:48px}.file-input__button-group,.file-input__row__file{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media screen and (max-width:768px){.file-input__button-group{-ms-flex-pack:end;justify-content:flex-end}}.file-input__button--controls{margin-left:12px}.main--arabic .file-input__button--controls{margin-left:0;margin-right:12px}.file-input-mobile__container{width:100%;height:48px;line-height:48px;border:1px solid #dce1e4;border-radius:4px;position:relative}.file-input-mobile__icon{display:inline-block;background-color:#f5f8fa;font-size:25px;padding:0 12px;line-height:46px;position:absolute;top:0;right:0;border-width:0 0 0 1px;border-color:#dce1e4;border-style:solid}.main--arabic .file-input-mobile__icon{right:auto;left:0}.file-input-mobile__placeholder{padding:0 17px;color:#dce1e4;font-size:14px;line-height:48px}","",{version:3,sources:["C:/projects/oliv-frontend/src/Shared/components/FormElements/S3Uploader/S3Uploader.scss"],names:[],mappings:"AAAA,uBACE,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,0BAA2B,AAC3B,kBAAmB,AACnB,WAAY,AACZ,uBAAwB,AACxB,gCAAiC,AACjC,2BAA4B,AAC5B,wBAAyB,AACzB,kBAAmB,AACf,cAAe,AACnB,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,iBAAmB,CAAE,AAEvB,4BACE,eAAgB,AAChB,cAAe,AACf,eAAiB,CAAE,AAErB,uBACE,cAAe,AACf,cAAgB,CAAE,AAClB,yBACE,eAAgB,AAChB,gCAAiC,AACjC,2BAA4B,AAC5B,wBAAyB,AACzB,mBAAoB,AACpB,aAAe,CAAE,AAErB,gCACE,aAAe,CAAE,AAEnB,qDACE,qBAAsB,AACtB,oCAA0C,CAAE,AAE9C,yBACE,eAAiB,CAAE,AAErB,gCACE,eAAiB,CAAE,AAErB,iBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,sBAAuB,AACnB,6BAA+B,CAAE,AACrC,kCACE,eAAiB,CAAE,AAEvB,uBACE,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,mBAAoB,AACpB,yBAA0B,AAC1B,kBAAmB,AACnB,eAAgB,AAChB,sBAAuB,AACvB,kBAAmB,AACnB,gBAAkB,CAIQ,AAE5B,iDALE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CAME,AAC1B,oCACE,0BACE,kBAAmB,AACf,wBAA0B,CAAE,CAAE,AAExC,8BACE,gBAAkB,CAAE,AACpB,4CACE,cAAe,AACf,iBAAmB,CAAE,AAEzB,8BACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,yBAA0B,AAC1B,kBAAmB,AACnB,iBAAmB,CAAE,AAEvB,yBACE,qBAAsB,AACtB,yBAA0B,AAC1B,eAAgB,AAChB,eAAgB,AAChB,iBAAkB,AAClB,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,uBAAwB,AACxB,qBAAsB,AACtB,kBAAoB,CAAE,AACtB,uCACE,WAAY,AACZ,MAAQ,CAAE,AAEd,gCACE,eAAgB,AAChB,cAAe,AACf,eAAgB,AAChB,gBAAkB,CAAE",file:"S3Uploader.scss",sourcesContent:[".file-input__container {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  border: 2px dashed #d7dde0;\n  border-radius: 4px;\n  width: 100%;\n  padding: 40px 24px 60px;\n  -webkit-transition: .3s all ease;\n  -o-transition: .3s all ease;\n  transition: .3s all ease;\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: center; }\n\n.file-input__button--upload {\n  cursor: pointer;\n  color: #4353ff;\n  font-weight: 700; }\n\n.file-input__drop-area {\n  color: #c2c6c9;\n  font-size: 14px; }\n  .file-input__drop-area > i {\n    font-size: 48px;\n    -webkit-transition: .3s all ease;\n    -o-transition: .3s all ease;\n    transition: .3s all ease;\n    margin-bottom: 16px;\n    display: block; }\n\n.file-input__dropzone--active i {\n  color: #4353ff; }\n\n.file-input__dropzone--active .file-input__container {\n  border-color: #4353ff;\n  background-color: rgba(67, 83, 255, 0.05); }\n\n.file-input__description {\n  max-width: 280px; }\n\n.file-input__uploaded-documents {\n  margin-top: 24px; }\n\n.file-input__row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  .file-input__row + .file-input__row {\n    margin-top: 12px; }\n\n.file-input__row__file {\n  height: 48px;\n  width: 100%;\n  padding-left: 16px;\n  padding-right: 16px;\n  border: 1px solid #dce1e4;\n  border-radius: 4px;\n  font-size: 14px;\n  background-color: #fff;\n  margin-right: 16px;\n  line-height: 48px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.file-input__button-group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  @media screen and (max-width: 768px) {\n    .file-input__button-group {\n      -ms-flex-pack: end;\n          justify-content: flex-end; } }\n\n.file-input__button--controls {\n  margin-left: 12px; }\n  .main--arabic .file-input__button--controls {\n    margin-left: 0;\n    margin-right: 12px; }\n\n.file-input-mobile__container {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  border: 1px solid #dce1e4;\n  border-radius: 4px;\n  position: relative; }\n\n.file-input-mobile__icon {\n  display: inline-block;\n  background-color: #f5f8fa;\n  font-size: 25px;\n  padding: 0 12px;\n  line-height: 46px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-width: 0 0 0 1px;\n  border-color: #dce1e4;\n  border-style: solid; }\n  .main--arabic .file-input-mobile__icon {\n    right: auto;\n    left: 0; }\n\n.file-input-mobile__placeholder {\n  padding: 0 17px;\n  color: #dce1e4;\n  font-size: 14px;\n  line-height: 48px; }\n"],sourceRoot:""}])}});
//# sourceMappingURL=S3Uploader.da34026e.chunk.js.map