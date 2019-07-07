(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daily-daily-module"],{

/***/ "./src/app/daily/daily.html":
/*!**********************************!*\
  !*** ./src/app/daily/daily.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>\n  <ion-navbar>\n    <ion-title>每日电影</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content>\n    <div [ngStyle]=\"{'height':'100%','background-color':todayBackgroundColor}\">\n        <h1 class=\"current-month\">3</h1>\n        <h1 class=\"current-day\">16</h1>\n        <div class=\"movie-line-layout\">\n            <p>如果我们想要听到掌声，我们应该去马戏团。</p>\n            <!--<span class=\"app-name\">氪电影App</span>-->\n            <span class=\"movie-name\">本·阿弗莱克,《逃离德黑兰》</span>\n        </div>\n        <div class=\"footer-layout\">\n            <div>\n                <button type=\"button\" class=\"close-btn\">\n                    <svg t=\"1552706265678\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                         xmlns=\"http://www.w3.org/2000/svg\" p-id=\"23901\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                         width=\"32\" height=\"32\">\n                        <defs>\n                            <style type=\"text/css\"></style>\n                        </defs>\n                        <path d=\"M711.111111 227.555556C789.504 227.555556 853.333333 304.128 853.333333 398.222222c0 179.427556-217.201778 325.006222-341.333333 386.844445-124.245333-61.952-341.333333-207.473778-341.333333-386.844445 0-94.094222 63.829333-170.666667 142.222222-170.666666 36.579556 0 76.629333 25.031111 107.121778 66.958222l46.023111 50.403555a56.888889 56.888889 0 0 0 91.989333 0l46.023111-50.403555C634.538667 252.586667 674.588444 227.555556 711.168 227.555556z m0-113.777778c-80.497778 0-152.177778 49.265778-199.111111 113.777778-46.933333-64.512-118.613333-113.777778-199.111111-113.777778C171.52 113.777778 56.888889 241.152 56.888889 398.222222c0 325.347556 455.111111 512 455.111111 512s455.111111-186.652444 455.111111-512c0-157.070222-114.631111-284.444444-256-284.444444z\"\n                              fill=\"#ffffff\" p-id=\"23902\"></path>\n                    </svg>\n                </button>\n            </div>\n            <div>\n                <button type=\"button\" class=\"close-btn\" (click)=\"close()\">\n                    <svg t=\"1552706469519\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                         xmlns=\"http://www.w3.org/2000/svg\" p-id=\"29453\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                         width=\"48\" height=\"48\">\n                        <defs>\n                            <style type=\"text/css\"></style>\n                        </defs>\n                        <path d=\"M512.001 15.678C237.414 15.678 14.82 238.273 14.82 512.86S237.414 1010.04 512 1010.04s497.18-222.593 497.18-497.18S786.589 15.678 512.002 15.678z m213.211 645.937c17.798 17.803 17.798 46.657 0 64.456-17.798 17.797-46.658 17.797-64.456 0L512.001 577.315 363.241 726.07c-17.799 17.797-46.652 17.797-64.45 0-17.804-17.799-17.804-46.653 0-64.456L447.545 512.86 298.79 364.104c-17.803-17.798-17.803-46.657 0-64.455 17.799-17.798 46.652-17.798 64.45 0l148.761 148.755 148.755-148.755c17.798-17.798 46.658-17.798 64.456 0 17.798 17.798 17.798 46.657 0 64.455L576.456 512.86l148.756 148.755z m0 0\"\n                              fill=\"#ffffff\" p-id=\"29454\"></path>\n                    </svg>\n                </button>\n            </div>\n            <div>\n                <button type=\"button\" class=\"close-btn\">\n                    <svg t=\"1552706729991\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\"\n                         xmlns=\"http://www.w3.org/2000/svg\" p-id=\"40677\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                         width=\"32\" height=\"32\">\n                        <defs>\n                            <style type=\"text/css\"></style>\n                        </defs>\n                        <path d=\"M447.6 726.1c11.4 11.4 27.1 16.6 42.8 14.6l8.9 0.4c3.7 0.8 7.5 1.3 11.4 1.3s7.7-0.4 11.4-1.3l8.9-0.4c15.7 2 31.4-3.2 42.8-14.6l253.4-253.4c20-20 20-52.4 0-72.4s-52.4-20-72.4 0L561.9 593.2V128c0-28.3-22.9-51.2-51.2-51.2-28.3 0-51.2 22.9-51.2 51.2v465.2L266.6 400.3c-20-20-52.4-20-72.4 0s-20 52.4 0 72.4l253.4 253.4zM921.6 819.2H102.4c-28.3 0-51.2 22.9-51.2 51.2 0 28.3 22.9 51.2 51.2 51.2h819.2c28.3 0 51.2-22.9 51.2-51.2 0-28.3-22.9-51.2-51.2-51.2z\"\n                              p-id=\"40678\" fill=\"#ffffff\"></path>\n                    </svg>\n                </button>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/daily/daily.module.ts":
/*!***************************************!*\
  !*** ./src/app/daily/daily.module.ts ***!
  \***************************************/
/*! exports provided: DailyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyModule", function() { return DailyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _daily__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./daily */ "./src/app/daily/daily.ts");







var DailyModule = /** @class */ (function () {
    function DailyModule() {
    }
    DailyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _daily__WEBPACK_IMPORTED_MODULE_6__["DailyPage"] }]),
            ],
            declarations: [
                _daily__WEBPACK_IMPORTED_MODULE_6__["DailyPage"]
            ]
        })
    ], DailyModule);
    return DailyModule;
}());



/***/ }),

/***/ "./src/app/daily/daily.scss":
/*!**********************************!*\
  !*** ./src/app/daily/daily.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-layout {\n  background: red; }\n\n.scroll-content {\n  overflow-y: hidden !important; }\n\n.current-month {\n  margin-top: 0;\n  padding-top: 20px;\n  font-size: 70px;\n  font-family: 'kr-font';\n  text-align: center;\n  color: #fff; }\n\n.current-day {\n  font-size: 23vh;\n  font-family: 'kr-font';\n  text-align: center;\n  color: #fff; }\n\n.movie-line-layout {\n  padding: 20px 50px;\n  color: #fff;\n  font-weight: bold; }\n\n.movie-line-layout p {\n    font-family: 'kr-font-web';\n    padding: 0;\n    font-size: 20px;\n    line-height: 32px;\n    letter-spacing: -1px; }\n\n.movie-line-layout .app-name {\n    font-size: 12px;\n    display: inline-block;\n    float: left; }\n\n.movie-line-layout .movie-name {\n    font-family: 'kr-font-web';\n    font-size: 12px;\n    display: inline-block;\n    float: right; }\n\n.footer-layout {\n  text-align: center;\n  position: absolute;\n  bottom: 50px;\n  width: 100%;\n  display: flex;\n  padding: 0 45px; }\n\n.footer-layout div {\n    flex: 1; }\n\n.footer-layout div .close-btn {\n      width: 48px;\n      height: 48px;\n      background: transparent;\n      padding: 0;\n      outline: none; }\n\n@media screen and (max-width: 345px) {\n  .footer-layout {\n    bottom: 30px; }\n  .movie-line-layout {\n    padding: 0 40px; }\n    .movie-line-layout p {\n      font-size: 18px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KSy9EZXNrdG9wL3dvcmtzcGFjZS9rci1tb3ZpZS1hcHAtdjQvc3JjL2FwcC9kYWlseS9kYWlseS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLDZCQUE0QixFQUFBOztBQUU5QjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFIbkI7SUFLSSwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CLEVBQUE7O0FBVHhCO0lBWUksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixXQUFXLEVBQUE7O0FBZGY7SUFpQkksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWSxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQU5qQjtJQVNJLE9BQU8sRUFBQTs7QUFUWDtNQVlNLFdBQVc7TUFDWCxZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLFVBQVU7TUFDVixhQUFhLEVBQUE7O0FBS25CO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLGVBQWUsRUFBQTtJQURqQjtNQUdJLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RhaWx5L2RhaWx5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1sYXlvdXR7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbi5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbiFpbXBvcnRhbnQ7XG59XG4uY3VycmVudC1tb250aHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgZm9udC1mYW1pbHk6ICdrci1mb250JztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jdXJyZW50LWRheXtcbiAgZm9udC1zaXplOiAyM3ZoO1xuICBmb250LWZhbWlseTogJ2tyLWZvbnQnO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1vdmllLWxpbmUtbGF5b3V0e1xuICBwYWRkaW5nOiAyMHB4IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcHtcbiAgICBmb250LWZhbWlseTogJ2tyLWZvbnQtd2ViJztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgfVxuICAuYXBwLW5hbWV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubW92aWUtbmFtZXtcbiAgICBmb250LWZhbWlseTogJ2tyLWZvbnQtd2ViJztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuLmZvb3Rlci1sYXlvdXR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDQ1cHg7XG5cbiAgZGl2e1xuICAgIGZsZXg6IDE7XG5cbiAgICAuY2xvc2UtYnRue1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDVweCkge1xuICAuZm9vdGVyLWxheW91dHtcbiAgICBib3R0b206IDMwcHg7XG4gIH1cbiAgLm1vdmllLWxpbmUtbGF5b3V0e1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBwe1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/daily/daily.ts":
/*!********************************!*\
  !*** ./src/app/daily/daily.ts ***!
  \********************************/
/*! exports provided: DailyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyPage", function() { return DailyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var DailyPage = /** @class */ (function () {
    function DailyPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.todayBackgroundColor = '#4bcc8b';
    }
    DailyPage.prototype.close = function () {
        this.navCtrl.navigateRoot('/home');
    };
    DailyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily',
            template: __webpack_require__(/*! ./daily.html */ "./src/app/daily/daily.html"),
            styles: [__webpack_require__(/*! ./daily.scss */ "./src/app/daily/daily.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], DailyPage);
    return DailyPage;
}());



/***/ })

}]);
//# sourceMappingURL=daily-daily-module.js.map