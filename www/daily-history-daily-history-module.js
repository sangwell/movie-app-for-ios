(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daily-history-daily-history-module"],{

/***/ "./src/app/daily-history/daily-history.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/daily-history/daily-history.module.ts ***!
  \*******************************************************/
/*! exports provided: DailyHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyHistoryModule", function() { return DailyHistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _daily_history_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily-history.router.module */ "./src/app/daily-history/daily-history.router.module.ts");
/* harmony import */ var _daily_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./daily-history.page */ "./src/app/daily-history/daily-history.page.ts");







var DailyHistoryModule = /** @class */ (function () {
    function DailyHistoryModule() {
    }
    DailyHistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _daily_history_router_module__WEBPACK_IMPORTED_MODULE_5__["DailyHistoryRouterModule"]
            ],
            declarations: [_daily_history_page__WEBPACK_IMPORTED_MODULE_6__["DailyHistoryPage"]]
        })
    ], DailyHistoryModule);
    return DailyHistoryModule;
}());



/***/ }),

/***/ "./src/app/daily-history/daily-history.page.html":
/*!*******************************************************!*\
  !*** ./src/app/daily-history/daily-history.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"dark\" style=\"font-size: 24px;\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>历史日签</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngFor=\"let item of dailyHistory\" class=\"daily-layout\" [ngStyle]=\"{'background-color':item.BgColor}\">\n        <div class=\"daily-time\">{{item.DateTime}}</div>\n        <div class=\"daily-content\">{{item.Content}}</div>\n        <div class=\"daily-title\">{{item.MovieTitle}}</div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/daily-history/daily-history.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/daily-history/daily-history.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".daily-layout {\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px; }\n\n.daily-time {\n  font-size: 12px;\n  color: #ffffff;\n  font-weight: bold;\n  padding-bottom: 10px; }\n\n.daily-content {\n  font-size: 18px;\n  padding: 0 15px;\n  color: #ffffff;\n  font-weight: bold; }\n\n.daily-title {\n  font-size: 12px;\n  text-align: right;\n  color: #ffffff;\n  font-weight: bold;\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KSy9EZXNrdG9wL3dvcmtzcGFjZS9rci1tb3ZpZS1hcHAtdjQvc3JjL2FwcC9kYWlseS1oaXN0b3J5L2RhaWx5LWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYWlseS1oaXN0b3J5L2RhaWx5LWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhaWx5LWxheW91dHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRhaWx5LXRpbWV7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5kYWlseS1jb250ZW50e1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRhaWx5LXRpdGxle1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/daily-history/daily-history.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/daily-history/daily-history.page.ts ***!
  \*****************************************************/
/*! exports provided: DailyHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyHistoryPage", function() { return DailyHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services */ "./src/shared/services/index.ts");





var DailyHistoryPage = /** @class */ (function () {
    function DailyHistoryPage(navCtrl, route, apiService) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.apiService = apiService;
        this.dailyHistory = [];
        this.getDailyHistory();
    }
    DailyHistoryPage.prototype.getDailyHistory = function () {
        var _this = this;
        this.apiService.getDailyHistoryList().subscribe(function (data) {
            _this.dailyHistory = data;
        });
    };
    DailyHistoryPage.prototype.back = function () {
        this.navCtrl.back();
    };
    DailyHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-daily-history',
            template: __webpack_require__(/*! ./daily-history.page.html */ "./src/app/daily-history/daily-history.page.html"),
            styles: [__webpack_require__(/*! ./daily-history.page.scss */ "./src/app/daily-history/daily-history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], DailyHistoryPage);
    return DailyHistoryPage;
}());



/***/ }),

/***/ "./src/app/daily-history/daily-history.router.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/daily-history/daily-history.router.module.ts ***!
  \**************************************************************/
/*! exports provided: DailyHistoryRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyHistoryRouterModule", function() { return DailyHistoryRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _daily_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-history.page */ "./src/app/daily-history/daily-history.page.ts");




var routes = [
    {
        path: '',
        component: _daily_history_page__WEBPACK_IMPORTED_MODULE_3__["DailyHistoryPage"]
    }
];
var DailyHistoryRouterModule = /** @class */ (function () {
    function DailyHistoryRouterModule() {
    }
    DailyHistoryRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DailyHistoryRouterModule);
    return DailyHistoryRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=daily-history-daily-history-module.js.map