(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7mAC":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),c=u("ZZ/e"),p=function(){function l(l){this.modalController=l,this.imgSource="",this.slideOpts={centeredSlides:"true"}}return l.prototype.ngOnInit=function(){},l.prototype.closeModal=function(){this.modalController.dismiss()},l.prototype.saveImage=function(){},l}(),r=t.nb({encapsulation:0,styles:[["ion-slides[_ngcontent-%COMP%]{height:100%}.download-btn[_ngcontent-%COMP%]{height:16px;width:16px;padding:0 5px}"]],data:{}});function a(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,15,"ion-header",[],null,null,null,e.w,e.e)),t.ob(1,49152,null,0,c.y,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,13,"ion-toolbar",[["color","dark"]],null,null,null,e.J,e.r)),t.ob(3,49152,null,0,c.yb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,e.u,e.c)),t.ob(5,49152,null,0,c.i,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.closeModal()&&t),t},e.t,e.b)),t.ob(7,49152,null,0,c.h,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,e.x,e.f)),t.ob(9,49152,null,0,c.z,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(10,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,e.u,e.c)),t.ob(11,49152,null,0,c.i,[t.h,t.k],null,null),(l()(),t.pb(12,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.saveImage()&&t),t},e.t,e.b)),t.ob(13,49152,null,0,c.h,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,0,1,"ion-icon",[["class","download-btn"],["src","assets/imgs/download.svg"]],null,null,null,e.x,e.f)),t.ob(15,49152,null,0,c.z,[t.h,t.k],{src:[0,"src"]},null),(l()(),t.pb(16,0,null,null,7,"ion-content",[["color","dark"],["fullscreen","true"]],null,null,null,e.v,e.d)),t.ob(17,49152,null,0,c.r,[t.h,t.k],{color:[0,"color"],fullscreen:[1,"fullscreen"],forceOverscroll:[2,"forceOverscroll"]},null),(l()(),t.pb(18,0,null,0,5,"ion-slides",[],null,null,null,e.E,e.m)),t.ob(19,49152,null,0,c.nb,[t.h,t.k],{options:[0,"options"]},null),(l()(),t.pb(20,0,null,0,3,"ion-slide",[],null,null,null,e.D,e.l)),t.ob(21,49152,null,0,c.mb,[t.h,t.k],null,null),(l()(),t.pb(22,0,null,0,1,"div",[["class","swiper-zoom-container"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,0,"img",[["height","100vh"]],[[8,"src",4]],null,null,null,null))],function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,9,0,"close"),l(n,15,0,"assets/imgs/download.svg"),l(n,17,0,"dark","true",!1),l(n,19,0,u.slideOpts)},function(l,n){l(n,23,0,n.component.imgSource)})}function s(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-image-viewer",[],null,null,null,a,r)),t.ob(1,114688,null,0,p,[c.Cb],null,null)],function(l,n){l(n,1,0)},null)}var b=t.lb("app-image-viewer",p,s,{imgSource:"imgSource"},{},[]),g=u("mrSG"),h=function(){function l(l){this.modalController=l,this.imgSource="../../assets/imgs/ff.jpeg",this.imgTitle="Silhoutte",this.imgDescription="Photo by Mayur Gala on Unsplash"}return l.prototype.viewImage=function(l,n,u){return void 0===n&&(n=""),void 0===u&&(u=""),g.b(this,void 0,void 0,function(){return g.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:p,componentProps:{imgSource:l},cssClass:"modal-fullscreen",keyboardClose:!0,showBackdrop:!0})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},l}(),d=t.nb({encapsulation:0,styles:[[".image-chip[_ngcontent-%COMP%]{height:200px;display:flex;margin-bottom:15px}.image-chip[_ngcontent-%COMP%]   .left-chip[_ngcontent-%COMP%]{flex:1;max-width:45px;height:45px;border-radius:50%;overflow:hidden}.image-chip[_ngcontent-%COMP%]   .left-chip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.image-chip[_ngcontent-%COMP%]   .right-chip[_ngcontent-%COMP%]{flex:1;padding-left:10px}.image-chip[_ngcontent-%COMP%]   .right-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:#a5a5a5}.image-chip[_ngcontent-%COMP%]   .right-chip[_ngcontent-%COMP%]   .image-display-layout[_ngcontent-%COMP%]{height:calc(100% - 30px);border:1px solid #e0e0e0;border-radius:10px;margin-top:6px;overflow:hidden;text-align:center}.text-chip[_ngcontent-%COMP%]{display:flex;margin-bottom:15px}.text-chip[_ngcontent-%COMP%]   .left-chip[_ngcontent-%COMP%]{flex:1;max-width:45px;height:45px;border-radius:50%;overflow:hidden}.text-chip[_ngcontent-%COMP%]   .left-chip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.text-chip[_ngcontent-%COMP%]   .right-chip[_ngcontent-%COMP%]{flex:1;padding-left:10px}.text-chip[_ngcontent-%COMP%]   .right-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:#a5a5a5}.text-chip[_ngcontent-%COMP%]   .right-chip[_ngcontent-%COMP%]   .image-display-layout[_ngcontent-%COMP%]{border:1px solid #e0e0e0;border-radius:10px;margin-top:6px;font-size:12px;padding:10px;background:#00f;color:#fff;font-weight:700}"]],data:{}});function m(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,e.w,e.e)),t.ob(1,49152,null,0,c.y,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.J,e.r)),t.ob(3,49152,null,0,c.yb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,e.I,e.q)),t.ob(5,49152,null,0,c.wb,[t.h,t.k],null,null),(l()(),t.Eb(-1,0,["\u901a\u77e5"])),(l()(),t.pb(7,0,null,null,26,"ion-content",[["padding",""]],null,null,null,e.v,e.d)),t.ob(8,49152,null,0,c.r,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,8,"div",[["class","image-chip"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"div",[["class","left-chip"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,0,"img",[["src","https://ionicframework.com/docs/demos/api/avatar/avatar.svg"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,5,"div",[["class","right-chip"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["\u6c2a\u7535\u5f71"])),(l()(),t.pb(15,0,null,null,2,"div",[["class","image-display-layout"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,1,"ion-img",[],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.viewImage(o.imgSource)&&t),t},e.y,e.g)),t.ob(17,49152,null,0,c.A,[t.h,t.k],{src:[0,"src"]},null),(l()(),t.pb(18,0,null,0,7,"div",[["class","text-chip"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"div",[["class","left-chip"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,0,"img",[["src","https://ionicframework.com/docs/demos/api/avatar/avatar.svg"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,4,"div",[["class","right-chip"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["\u6c2a\u7535\u5f71"])),(l()(),t.pb(24,0,null,null,1,"div",[["class","image-display-layout"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" \u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01\u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01 \u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01\u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01 \u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01\u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01 \u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01\u6700\u65b0\u7248App\u4e0a\u7ebf\u5566\uff01\uff01\u8d76\u5feb\u53bb\u4e0b\u8f7d\u5427\uff01\uff01 "])),(l()(),t.pb(26,0,null,0,7,"div",[["class","text-chip"]],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,1,"div",[["class","left-chip"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,0,"img",[["src","https://ionicframework.com/docs/demos/api/avatar/avatar.svg"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,4,"div",[["class","right-chip"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["\u6c2a\u7535\u5f71"])),(l()(),t.pb(32,0,null,null,1,"div",[["class","image-display-layout"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" \u6700\u65b0\u6d3b\u52a8\u4e0a\u7ebf\u5566\uff0c\u65b0\u529f\u80fd\u5185\u4fa7\uff01 "]))],function(l,n){l(n,17,0,n.component.imgSource)},null)}function f(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-notice",[],null,null,null,m,d)),t.ob(1,49152,null,0,h,[c.Cb],null,null)],null,null)}var v=t.lb("app-notice",h,f,{},{},[]),w=u("Ip0R"),x=u("gIcY"),C=u("ZYCi"),k=function(){return function(){}}();u.d(n,"NoticeModuleNgFactory",function(){return M});var M=t.mb(o,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[i.a,b,v]],[3,t.j],t.x]),t.wb(4608,w.l,w.k,[t.u,[2,w.s]]),t.wb(4608,c.a,c.a,[t.z,t.g]),t.wb(4608,c.Cb,c.Cb,[c.a,t.j,t.q,w.c]),t.wb(4608,c.Gb,c.Gb,[c.a,t.j,t.q,w.c]),t.wb(4608,x.c,x.c,[]),t.wb(1073742336,w.b,w.b,[]),t.wb(1073742336,c.Ab,c.Ab,[]),t.wb(1073742336,x.b,x.b,[]),t.wb(1073742336,x.a,x.a,[]),t.wb(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),t.wb(1073742336,k,k,[]),t.wb(1073742336,o,o,[]),t.wb(1024,C.k,function(){return[[{path:"",component:h}]]},[])])})}}]);