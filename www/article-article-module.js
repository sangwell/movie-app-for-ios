(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-article-module"],{

/***/ "./src/app/article/article.module.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _article_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.router.module */ "./src/app/article/article.router.module.ts");
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article.page */ "./src/app/article/article.page.ts");







var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _article_router_module__WEBPACK_IMPORTED_MODULE_5__["ArticleRouterModule"]
            ],
            declarations: [_article_page__WEBPACK_IMPORTED_MODULE_6__["ArticlePage"]]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/article/article.page.html":
/*!*******************************************!*\
  !*** ./src/app/article/article.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <!--<ion-buttons start>\n        <button ion-button icon-only (click)=\"back()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>\n            返回\n        </button>\n    </ion-buttons>\n    <ion-toolbar>\n        <ion-title>\n            Article\n        </ion-title>\n    </ion-toolbar>-->\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"dark\" style=\"font-size: 24px;\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" src=\"assets/imgs/star.svg\" color=\"dark\"\n                          style=\"font-size: 20px;padding: 0 5px;\"></ion-icon>\n                <!--<ion-icon slot=\"icon-only\" name=\"heart-empty\" color=\"dark\" style=\"font-size: 24px;\"></ion-icon>-->\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"back()\">\n                <ion-icon slot=\"icon-only\" src=\"assets/imgs/share.svg\" color=\"dark\"\n                          style=\"font-size: 20px;padding: 0 5px;\"></ion-icon>\n                <!--<ion-icon slot=\"icon-only\" name=\"heart-empty\" color=\"dark\" style=\"font-size: 24px;\"></ion-icon>-->\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"article-image\">\n        <ion-img [src]=\"imgSource\"></ion-img>\n    </div>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n    <h1>hello</h1>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/article/article.page.scss":
/*!*******************************************!*\
  !*** ./src/app/article/article.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".article-image {\n  height: 200px;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KSy9EZXNrdG9wL3dvcmtzcGFjZS9rci1tb3ZpZS1hcHAtdjQvc3JjL2FwcC9hcnRpY2xlL2FydGljbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlLWltYWdle1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/article/article.page.ts":
/*!*****************************************!*\
  !*** ./src/app/article/article.page.ts ***!
  \*****************************************/
/*! exports provided: ArticlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePage", function() { return ArticlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ArticlePage = /** @class */ (function () {
    function ArticlePage(navCtrl, route) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.imgSource = '';
        this.route.params.subscribe(function (res) {
            console.log(res);
            _this.imgSource = res.imageSrc;
        });
    }
    ArticlePage.prototype.back = function () {
        this.navCtrl.back();
    };
    ArticlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.page.html */ "./src/app/article/article.page.html"),
            styles: [__webpack_require__(/*! ./article.page.scss */ "./src/app/article/article.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ArticlePage);
    return ArticlePage;
}());



/***/ }),

/***/ "./src/app/article/article.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/article/article.router.module.ts ***!
  \**************************************************/
/*! exports provided: ArticleRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleRouterModule", function() { return ArticleRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.page */ "./src/app/article/article.page.ts");




var routes = [
    {
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_3__["ArticlePage"]
    }
];
var ArticleRouterModule = /** @class */ (function () {
    function ArticleRouterModule() {
    }
    ArticleRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ArticleRouterModule);
    return ArticleRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=article-article-module.js.map