(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{IuEK:function(t,e,n){"use strict";n.r(e),n.d(e,"IonMenu",function(){return a}),n.d(e,"IonMenuButton",function(){return h}),n.d(e,"IonMenuController",function(){return y}),n.d(e,"IonMenuToggle",function(){return v});var i=n("B5Ai"),o=n("cBjU"),r=n("JvIM"),s=n("k6lV"),a=function(){function t(){this.lastOnEnd=0,this.blocker=s.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(r.g)(this.win,this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.componentWillLoad=function(){return i.a(this,void 0,void 0,function(){var t,e,o,r,s,a=this;return i.c(this,function(i){switch(i.label){case 0:return void 0===this.type&&(this.type=this.config.get("menuType","ios"===this.mode?"reveal":"overlay")),this.isServer?(this.disabled=!0,[2]):(e=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(t){return t._getInstance()})]);case 1:return t=e.menuCtrl=i.sent(),o=this.el.parentNode,(r=void 0!==this.contentId?this.doc.getElementById(this.contentId):o&&o.querySelector&&o.querySelector("[main]"))&&r.tagName?(this.contentEl=r,r.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),s=this,[4,Promise.resolve().then(n.bind(null,"k6lV"))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 2:return s.gesture=i.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return a.canStart(t)},onWillStart:function(){return a.onWillStart()},onStart:function(){return a.onStart()},onMove:function(t){return a.onMove(t)},onEnd:function(t){return a.onEnd(t)}}),this.updateState(),[2]}})})},t.prototype.componentDidLoad=function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),this.menuCtrl._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),i.a(this,void 0,void 0,function(){return i.c(this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,!0]}})})},t.prototype.loadAnimation=function(){return i.a(this,void 0,void 0,function(){var t,e;return i.c(this,function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),[2]}})})},t.prototype.startAnimation=function(t,e){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!t),e?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i}(this.win,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=u(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(e/this.width)}},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=u(t.deltaX,n,i),r=this.width,s=o/r,a=t.velocityX,c=r/2,l=a>=0&&(a>.2||t.deltaX>c),d=a<=0&&(a<-.2||t.deltaX<-c),h=n?i?l:d:i?d:l,p=!n&&h;n&&!h&&(p=!0);var m=(h?1-s:s)*r,f=0;if(m>5){var b=m/Math.abs(a);f=Math.min(b,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(function(){return e.afterAnimation(p)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(h,s,f)}},t.prototype.beforeAnimation=function(t){this.el.classList.add(c),this.backdropEl&&this.backdropEl.classList.add(l),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"click",t),t?(this.contentEl&&this.contentEl.classList.add(d),this.ionDidOpen.emit()):(this.el.classList.remove(c),this.contentEl&&this.contentEl.classList.remove(d),this.backdropEl&&this.backdropEl.classList.remove(l),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this)},t.prototype.forceClosing=function(){this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)},t.prototype.hostData=function(){var t,e=this.isEndSide,n=this.type,i=this.disabled,o=this.isPaneVisible;return{role:"complementary",class:(t={},t[""+this.mode]=!0,t["menu-type-"+n]=!0,t["menu-enabled"]=!i,t["menu-side-end"]=e,t["menu-side-start"]=!e,t["menu-pane-visible"]=o,t)}},t.prototype.render=function(){var t=this;return[Object(o.b)("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(o.b)("slot",null)),Object(o.b)("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(t,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionWillOpen",method:"ionWillOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionWillClose",method:"ionWillClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidOpen",method:"ionDidOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDidClose",method:"ionDidClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner{left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function u(t,e,n){return Math.max(0,e!==n?-t:t)}var c="show-menu",l="show-backdrop",d="menu-content-open",h=function(){function t(){this.autoHide=!0}return t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t.button=!0,t["ion-activatable"]=!0,t)}},t.prototype.render=function(){var t=this.config.get("menuIcon","menu");return Object(o.b)("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},Object(o.b)("button",{type:"button"},Object(o.b)("slot",null,Object(o.b)("ion-icon",{icon:t,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&Object(o.b)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:none;background:transparent;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button,ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0}ion-icon{padding-top:0;padding-bottom:0;pointer-events:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host{--color:var(--ion-color-primary,#3880ff)}:host(.activated){opacity:.4}button{padding-left:5px;padding-right:5px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){button{padding-left:unset;padding-right:unset;-webkit-padding-start:5px;padding-inline-start:5px;-webkit-padding-end:5px;padding-inline-end:5px}}ion-icon{font-size:31px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function p(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var m=8;function f(t,e,n){var i,o,r=n.width+m;n.isEndSide?(i=r+"px",o="0px"):(i=-r+"px",o="0px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,o),a=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return p(t).then(function(t){return t.add(s).add(a)})}function b(t,e,n){var i,o,r=n.width;n.isEndSide?(i=-r+"px",o=r+"px"):(i=r+"px",o=-r+"px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",o,"0px"),a=(new t).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return p(t).then(function(t){return t.add(s).add(u).add(a)})}function g(t,e,n){var i=n.width*(n.isEndSide?-1:1)+"px",o=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return p(t).then(function(t){return t.add(o)})}var y=function(){function t(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",g),this.registerAnimation("push",b),this.registerAnimation("overlay",f)}return t.prototype.open=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.open()]:[2,!1]}})})},t.prototype.close=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(n){switch(n.label){case 0:return[4,void 0!==t?this.get(t):this.getOpen()];case 1:return void 0!==(e=n.sent())?[2,e.close()]:[2,!1]}})})},t.prototype.toggle=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.toggle()]:[2,!1]}})})},t.prototype.enable=function(t,e){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.disabled=!t),[2,n]}})})},t.prototype.swipeGesture=function(t,e){return i.a(this,void 0,void 0,function(){var n;return i.c(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.swipeGesture=t),[2,n]}})})},t.prototype.isOpen=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(n){switch(n.label){case 0:return null==t?[3,2]:[4,this.get(t)];case 1:return[2,void 0!==(e=n.sent())&&e.isOpen()];case 2:return[4,this.getOpen()];case 3:return[2,void 0!==(e=n.sent())]}})})},t.prototype.isEnabled=function(t){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,!e.disabled]:[2,!1]}})})},t.prototype.get=function(t){return i.a(this,void 0,void 0,function(){var e,n;return i.c(this,function(i){switch(i.label){case 0:return[4,this.waitUntilReady()];case 1:return i.sent(),"start"===t||"end"===t?(e=this.find(function(e){return e.side===t&&!e.disabled}))?[2,e]:[2,this.find(function(e){return e.side===t})]:null!=t?[2,this.find(function(e){return e.menuId===t})]:(n=this.find(function(t){return!t.disabled}))?[2,n]:[2,this.menus.length>0?this.menus[0].el:void 0]}})})},t.prototype.getOpen=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getOpenSync()]}})})},t.prototype.getMenus=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getMenusSync()]}})})},t.prototype.isAnimating=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.isAnimatingSync()]}})})},t.prototype.registerAnimation=function(t,e){this.menuAnimations.set(t,e)},t.prototype._getInstance=function(){return Promise.resolve(this)},t.prototype._register=function(t){var e=this.menus;e.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),e.push(t))},t.prototype._unregister=function(t){var e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)},t.prototype._setActiveMenu=function(t){var e=t.side;this.menus.filter(function(n){return n.side===e&&n!==t}).forEach(function(t){return t.disabled=!0})},t.prototype._setOpen=function(t,e,n){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:return this.isAnimatingSync()?[2,!1]:e?[4,this.getOpen()]:[3,3];case 1:return(o=i.sent())&&t.el!==o?[4,o.setOpen(!1,!1)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,t._setOpen(e,n)]}})})},t.prototype._createAnimation=function(t,e){return i.a(this,void 0,void 0,function(){var o,r;return i.c(this,function(i){switch(i.label){case 0:if(!(o=this.menuAnimations.get(t)))throw new Error("animation not registered");return[4,n.e(2).then(n.bind(null,"LWFY")).then(function(t){return t.create(o,null,e)})];case 1:return r=i.sent(),this.config.getBoolean("animated",!0)||r.duration(0),[2,r]}})})},t.prototype.getOpenSync=function(){return this.find(function(t){return t._isOpen})},t.prototype.getMenusSync=function(){return this.menus.map(function(t){return t.el})},t.prototype.isAnimatingSync=function(){return this.menus.some(function(t){return t.isAnimating})},t.prototype.find=function(t){var e=this.menus.find(t);if(void 0!==e)return e.el},t.prototype.waitUntilReady=function(){return Promise.all(Array.from(this.doc.querySelectorAll("ion-menu")).map(function(t){return t.componentOnReady()}))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_getInstance:{method:!0},close:{method:!0},config:{context:"config"},doc:{context:"document"},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),v=function(){function t(){this.visible=!1,this.autoHide=!0}return t.prototype.componentDidLoad=function(){return this.updateVisibility()},t.prototype.onClick=function(){return i.a(this,void 0,void 0,function(){var t;return i.c(this,function(e){switch(e.label){case 0:return[4,w(this.doc)];case 1:return(t=e.sent())?[4,t.get(this.menu)]:[3,3];case 2:e.sent()&&t.toggle(this.menu),e.label=3;case 3:return[2]}})})},t.prototype.updateVisibility=function(){return i.a(this,void 0,void 0,function(){var t,e,n;return i.c(this,function(i){switch(i.label){case 0:return[4,w(this.doc)];case 1:return(t=i.sent())?[4,t.get(this.menu)]:[3,5];case 2:return e=i.sent(),(n=e)?[4,e.isActive()]:[3,4];case 3:n=i.sent(),i.label=4;case 4:if(n)return this.visible=!0,[2];i.label=5;case 5:return this.visible=!1,[2]}})})},t.prototype.hostData=function(){var t,e=this.autoHide&&!this.visible;return{"aria-hidden":e?"true":null,class:(t={},t[""+this.mode]=!0,t["menu-toggle-hidden"]=e,t)}},t.prototype.render=function(){return Object(o.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}();function w(t){var e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}}}]);