(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-notice-module"],{

/***/ "./src/app/components/image-viewer/image-viewer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-viewer/image-viewer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"closeModal()\"> <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon> </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"saveImage()\"> <ion-icon class=\"download-btn\" src=\"assets/imgs/download.svg\"></ion-icon> </ion-button>\n        </ion-buttons>\n        <!--<ion-title>{{ imgTitle }}</ion-title>-->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\" color=\"dark\" fullscreen=\"true\">\n    <ion-slides [options]=\"slideOpts\">\n        <ion-slide>\n            <div class=\"swiper-zoom-container\"><img [src]=\"imgSource\" height=\"100vh\" /></div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n\n<!--<ion-footer *ngIf=\"imgDescription.length\">\n    <ion-toolbar color=\"dark\" text-center>\n        <ion-text>{{ imgDescription }}</ion-text>\n    </ion-toolbar>\n</ion-footer>-->\n"

/***/ }),

/***/ "./src/app/components/image-viewer/image-viewer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-viewer/image-viewer.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n\n.download-btn {\n  height: 16px;\n  width: 16px;\n  padding: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KSy9EZXNrdG9wL3dvcmtzcGFjZS9rci1tb3ZpZS1hcHAtdjQvc3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZG93bmxvYWQtYnRue1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/image-viewer/image-viewer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/image-viewer/image-viewer.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent(modalController) {
        this.modalController = modalController;
        this.imgSource = '';
        // @Input() imgTitle = '';
        // @Input() imgDescription = '';
        this.slideOpts = {
            centeredSlides: 'true'
        };
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
    };
    ImageViewerComponent.prototype.closeModal = function () {
        this.modalController.dismiss();
    };
    ImageViewerComponent.prototype.saveImage = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImageViewerComponent.prototype, "imgSource", void 0);
    ImageViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-viewer',
            template: __webpack_require__(/*! ./image-viewer.component.html */ "./src/app/components/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer.component.scss */ "./src/app/components/image-viewer/image-viewer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "./src/app/components/image-viewer/image-viewer.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/image-viewer/image-viewer.module.ts ***!
  \****************************************************************/
/*! exports provided: ImageViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerModule", function() { return ImageViewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-viewer.component */ "./src/app/components/image-viewer/image-viewer.component.ts");






var ImageViewerModule = /** @class */ (function () {
    function ImageViewerModule() {
    }
    ImageViewerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            declarations: [_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"]],
            exports: [_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"]],
            entryComponents: [_image_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ImageViewerComponent"]],
        })
    ], ImageViewerModule);
    return ImageViewerModule;
}());



/***/ }),

/***/ "./src/app/notice/notice.html":
/*!************************************!*\
  !*** ./src/app/notice/notice.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>通知</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!--图片-->\n  <div class=\"image-chip\">\n    <div class=\"left-chip\">\n      <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\">\n    </div>\n    <div class=\"right-chip\">\n      <span>氪电影</span>\n      <div class=\"image-display-layout\">\n        <ion-img [src]=\"imgSource\" (click)=\"viewImage(imgSource)\"></ion-img>\n      </div>\n        <!--<img src=\"../../assets/imgs/ff.jpeg\" width=\"100%\"/></div>-->\n    </div>\n  </div>\n\n  <!--文字-->\n  <div class=\"text-chip\">\n    <div class=\"left-chip\">\n      <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\">\n    </div>\n    <div class=\"right-chip\">\n      <span>氪电影</span>\n      <div class=\"image-display-layout\">\n        最新版App上线啦！！赶快去下载吧！！最新版App上线啦！！赶快去下载吧！！\n        最新版App上线啦！！赶快去下载吧！！最新版App上线啦！！赶快去下载吧！！\n        最新版App上线啦！！赶快去下载吧！！最新版App上线啦！！赶快去下载吧！！\n        最新版App上线啦！！赶快去下载吧！！最新版App上线啦！！赶快去下载吧！！\n      </div>\n    </div>\n  </div>\n  <div class=\"text-chip\">\n    <div class=\"left-chip\">\n      <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\">\n    </div>\n    <div class=\"right-chip\">\n      <span>氪电影</span>\n      <div class=\"image-display-layout\">\n        最新活动上线啦，新功能内侧！\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notice/notice.module.ts":
/*!*****************************************!*\
  !*** ./src/app/notice/notice.module.ts ***!
  \*****************************************/
/*! exports provided: NoticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeModule", function() { return NoticeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notice */ "./src/app/notice/notice.ts");
/* harmony import */ var _components_image_viewer_image_viewer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/image-viewer/image-viewer.module */ "./src/app/components/image-viewer/image-viewer.module.ts");








var NoticeModule = /** @class */ (function () {
    function NoticeModule() {
    }
    NoticeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _notice__WEBPACK_IMPORTED_MODULE_6__["NoticePage"] }]),
                _components_image_viewer_image_viewer_module__WEBPACK_IMPORTED_MODULE_7__["ImageViewerModule"]
            ],
            declarations: [
                _notice__WEBPACK_IMPORTED_MODULE_6__["NoticePage"]
            ]
        })
    ], NoticeModule);
    return NoticeModule;
}());



/***/ }),

/***/ "./src/app/notice/notice.scss":
/*!************************************!*\
  !*** ./src/app/notice/notice.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-chip {\n  height: 200px;\n  display: flex;\n  margin-bottom: 15px; }\n  .image-chip .left-chip {\n    flex: 1;\n    max-width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    overflow: hidden; }\n  .image-chip .left-chip img {\n      width: 100%;\n      height: 100%; }\n  .image-chip .right-chip {\n    flex: 1;\n    padding-left: 10px; }\n  .image-chip .right-chip span {\n      font-size: 12px;\n      font-weight: bold;\n      color: #a5a5a5; }\n  .image-chip .right-chip .image-display-layout {\n      height: calc(100% - 30px);\n      border: 1px solid #e0e0e0;\n      border-radius: 10px;\n      margin-top: 6px;\n      overflow: hidden;\n      text-align: center; }\n  .text-chip {\n  display: flex;\n  margin-bottom: 15px; }\n  .text-chip .left-chip {\n    flex: 1;\n    max-width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    overflow: hidden; }\n  .text-chip .left-chip img {\n      width: 100%; }\n  .text-chip .right-chip {\n    flex: 1;\n    padding-left: 10px; }\n  .text-chip .right-chip span {\n      font-size: 12px;\n      font-weight: bold;\n      color: #a5a5a5; }\n  .text-chip .right-chip .image-display-layout {\n      border: 1px solid #e0e0e0;\n      border-radius: 10px;\n      margin-top: 6px;\n      font-size: 12px;\n      padding: 10px;\n      background: blue;\n      color: #ffffff;\n      font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KSy9EZXNrdG9wL3dvcmtzcGFjZS9rci1tb3ZpZS1hcHAtdjQvc3JjL2FwcC9ub3RpY2Uvbm90aWNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBSHJCO0lBS0ksT0FBTztJQUNQLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBVHBCO01BV00sV0FBVztNQUNYLFlBQVksRUFBQTtFQVpsQjtJQWdCSSxPQUFPO0lBQ1Asa0JBQWtCLEVBQUE7RUFqQnRCO01BbUJNLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYyxFQUFBO0VBckJwQjtNQXdCTSx5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0VBS3hCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBRnJCO0lBSUksT0FBTztJQUNQLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBUnBCO01BVU0sV0FBVyxFQUFBO0VBVmpCO0lBZUksT0FBTztJQUNQLGtCQUFrQixFQUFBO0VBaEJ0QjtNQWtCTSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNBQWMsRUFBQTtFQXBCcEI7TUF1Qk0seUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsZUFBZTtNQUNmLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWNlL25vdGljZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNoaXB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC5sZWZ0LWNoaXB7XG4gICAgZmxleDogMTtcbiAgICBtYXgtd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGltZ3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuICAucmlnaHQtY2hpcHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBzcGFue1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2E1YTVhNTtcbiAgICB9XG4gICAgLmltYWdlLWRpc3BsYXktbGF5b3V0e1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnRleHQtY2hpcHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLmxlZnQtY2hpcHtcbiAgICBmbGV4OiAxO1xuICAgIG1heC13aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAvL2hlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgLnJpZ2h0LWNoaXB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICNhNWE1YTU7XG4gICAgfVxuICAgIC5pbWFnZS1kaXNwbGF5LWxheW91dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/notice/notice.ts":
/*!**********************************!*\
  !*** ./src/app/notice/notice.ts ***!
  \**********************************/
/*! exports provided: NoticePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePage", function() { return NoticePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/image-viewer/image-viewer.component */ "./src/app/components/image-viewer/image-viewer.component.ts");




var NoticePage = /** @class */ (function () {
    function NoticePage(modalController) {
        this.modalController = modalController;
        this.imgSource = '../../assets/imgs/ff.jpeg';
        this.imgTitle = 'Silhoutte';
        this.imgDescription = 'Photo by Mayur Gala on Unsplash';
    }
    NoticePage.prototype.viewImage = function (src, title, description) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ImageViewerComponent"],
                            componentProps: {
                                imgSource: src,
                            },
                            cssClass: 'modal-fullscreen',
                            keyboardClose: true,
                            showBackdrop: true
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NoticePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.html */ "./src/app/notice/notice.html"),
            styles: [__webpack_require__(/*! ./notice.scss */ "./src/app/notice/notice.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], NoticePage);
    return NoticePage;
}());



/***/ })

}]);
//# sourceMappingURL=notice-notice-module.js.map