(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/user.html":
/*!********************************!*\
  !*** ./src/app/user/user.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>我的</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>1</h1>\n  <h1>2</h1>\n  <h1>3</h1>\n  <h1>4</h1>\n  <h1>5</h1>\n  <h1>6</h1>\n  <h1>7</h1>\n  <h1>8</h1>\n  <h1>9</h1>\n  <h1>0</h1><h1>1</h1>\n  <h1>2</h1>\n  <h1>3</h1>\n  <h1>4</h1>\n  <h1>5</h1>\n  <h1>6</h1>\n  <h1>7</h1>\n  <h1>8</h1>\n  <h1>9</h1>\n  <h1>0</h1>\n  <h1>1</h1>\n  <h1>2</h1>\n  <h1>3</h1>\n  <h1>4</h1>\n  <h1>5</h1>\n  <h1>6</h1>\n  <h1>7</h1>\n  <h1>8</h1>\n  <h1>9</h1>\n  <h1>0</h1>\n  <h1>1</h1>\n  <h1>2</h1>\n  <h1>3</h1>\n  <h1>4</h1>\n  <h1>5</h1>\n  <h1>6</h1>\n  <h1>7</h1>\n  <h1>8</h1>\n  <h1>9</h1>\n  <h1>0</h1>\n  <h1>1</h1>\n  <h1>2</h1>\n  <h1>3</h1>\n  <h1>4</h1>\n  <h1>5</h1>\n  <h1>6</h1>\n  <h1>7</h1>\n  <h1>8</h1>\n  <h1>9</h1>\n  <h1>0</h1>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./src/app/user/user.ts");







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _user__WEBPACK_IMPORTED_MODULE_6__["UserPage"] }]),
            ],
            declarations: [
                _user__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.scss":
/*!********************************!*\
  !*** ./src/app/user/user.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.ts":
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserPage = /** @class */ (function () {
    function UserPage() {
    }
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-user',
            template: __webpack_require__(/*! ./user.html */ "./src/app/user/user.html"),
            styles: [__webpack_require__(/*! ./user.scss */ "./src/app/user/user.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map