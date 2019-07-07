(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-author-article-author-module"],{

/***/ "./src/app/article-author/article-author.html":
/*!****************************************************!*\
  !*** ./src/app/article-author/article-author.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>推荐来源</ion-title>\n  </ion-toolbar>\n  <div class=\"catalog-group\">\n    <div></div>\n    <div>\n      <button type=\"button\"\n              [ngClass]=\"{'tab-btn-active':currentTabIndex === 0}\" (click)=\"switchToAll()\">所有\n      </button>\n    </div>\n    <div>\n      <button type=\"button\"\n              [ngClass]=\"{'tab-btn-active':currentTabIndex === 1}\" (click)=\"switchToMine()\">我的关注\n      </button>\n    </div>\n    <div></div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-slides (ionSlideDidChange)=\"slideChanged()\">\n\n    <ion-slide>\n      <div *ngFor=\"let item of authorList\" class=\"author-item\">\n        <div class=\"author-image\"></div>\n        <div>\n          <span class=\"author-name\">{{item.Name}}</span>\n          <button type=\"button\" class=\"following-btn\" *ngIf=\"!item.IsFollowed\">\n            <ion-icon src=\"assets/imgs/follow.svg\"></ion-icon>\n          </button>\n          <button type=\"button\" class=\"following-btn followed-btn\" *ngIf=\"item.IsFollowed\">\n            <ion-icon src=\"assets/imgs/followed.svg\"></ion-icon>\n          </button>\n        </div>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div *ngFor=\"let item of authorList\" class=\"author-item\">\n        <div class=\"author-image\"></div>\n        <div>\n          <span class=\"author-name\">{{item.Name}}</span>\n          <button type=\"button\" class=\"following-btn\" *ngIf=\"!item.IsFollowed\">\n            <ion-icon src=\"assets/imgs/follow.svg\"></ion-icon>\n          </button>\n          <button type=\"button\" class=\"following-btn followed-btn\" *ngIf=\"item.IsFollowed\">\n            <ion-icon src=\"assets/imgs/followed.svg\"></ion-icon>\n          </button>\n        </div>\n      </div>\n    </ion-slide>\n\n\n  </ion-slides>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/article-author/article-author.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/article-author/article-author.module.ts ***!
  \*********************************************************/
/*! exports provided: ArticleAuthorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleAuthorModule", function() { return ArticleAuthorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _article_author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-author */ "./src/app/article-author/article-author.ts");







var ArticleAuthorModule = /** @class */ (function () {
    function ArticleAuthorModule() {
    }
    ArticleAuthorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _article_author__WEBPACK_IMPORTED_MODULE_6__["ArticleAuthorPage"] }]),
            ],
            declarations: [
                _article_author__WEBPACK_IMPORTED_MODULE_6__["ArticleAuthorPage"]
            ]
        })
    ], ArticleAuthorModule);
    return ArticleAuthorModule;
}());



/***/ }),

/***/ "./src/app/article-author/article-author.scss":
/*!****************************************************!*\
  !*** ./src/app/article-author/article-author.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-slide {\n  display: block; }\n\n.slide-zoom {\n  text-align: left; }\n\n.catalog-group {\n  height: 34px;\n  display: flex; }\n\n.catalog-group div {\n    flex: 1;\n    text-align: center; }\n\n.catalog-group div button {\n      font-size: 12px;\n      background: none;\n      outline: none;\n      padding: 0 0 4px 0; }\n\n.tab-btn-active {\n  border-bottom: 2px solid var(--app-color);\n  transition: 0.2s; }\n\n.author-item {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: left;\n  margin: 10px 0 20px 0;\n  display: flex;\n  padding: 0 15px; }\n\n.author-item div {\n    flex: 1;\n    line-height: 45px; }\n\n.author-item .author-image {\n    height: 45px;\n    max-width: 45px;\n    border-radius: 50%;\n    background: #cccccc; }\n\n.author-item .author-name {\n    padding: 0 10px; }\n\n.author-item .following-btn {\n    float: right;\n    height: 35px;\n    padding: 0 15px;\n    margin: 5px;\n    background: none; }\n\n.author-item .followed-btn {\n    opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KSy9EZXNrdG9wL3dvcmtzcGFjZS9rci1tb3ZpZS1hcHAtdjQvc3JjL2FwcC9hcnRpY2xlLWF1dGhvci9hcnRpY2xlLWF1dGhvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRmY7SUFJSSxPQUFPO0lBQ1Asa0JBQWtCLEVBQUE7O0FBTHRCO01BT00sZUFBZTtNQUNmLGdCQUFnQjtNQUVoQixhQUFhO01BQ2Isa0JBQWtCLEVBQUE7O0FBSXhCO0VBQ0UseUNBQXlDO0VBQ3pDLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQU5qQjtJQVFJLE9BQU87SUFDUCxpQkFBaUIsRUFBQTs7QUFUckI7SUFZSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTs7QUFmdkI7SUFrQkksZUFBZSxFQUFBOztBQWxCbkI7SUFxQkksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQXpCcEI7SUE0QkksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS1hdXRob3IvYXJ0aWNsZS1hdXRob3Iuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItc2xpZGV7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNsaWRlLXpvb217XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2F0YWxvZy1ncm91cHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXZ7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYnV0dG9ue1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIC8vYm9yZGVyOiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgICB9XG4gIH1cbn1cbi50YWItYnRuLWFjdGl2ZXtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWFwcC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uYXV0aG9yLWl0ZW17XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBkaXZ7XG4gICAgZmxleDogMTtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgfVxuICAuYXV0aG9yLWltYWdle1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXgtd2lkdGg6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gIH1cbiAgLmF1dGhvci1uYW1le1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuICAuZm9sbG93aW5nLWJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIC5mb2xsb3dlZC1idG57XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/article-author/article-author.ts":
/*!**************************************************!*\
  !*** ./src/app/article-author/article-author.ts ***!
  \**************************************************/
/*! exports provided: ArticleAuthorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleAuthorPage", function() { return ArticleAuthorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ArticleAuthorPage = /** @class */ (function () {
    function ArticleAuthorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.currentTabIndex = 0;
        this.authorList = [
            {
                Name: '氪电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '乌鸦电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '电影最TOP',
                ImageSrc: '',
                IsFollowed: false,
            },
            {
                Name: '巴塞电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '库布里克的小丑',
                ImageSrc: '',
                IsFollowed: false,
            },
            {
                Name: '张大大说电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '三体星球',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '无限电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '氪电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '乌鸦电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '电影最TOP',
                ImageSrc: '',
                IsFollowed: false,
            },
            {
                Name: '巴塞电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '库布里克的小丑',
                ImageSrc: '',
                IsFollowed: false,
            },
            {
                Name: '张大大说电影',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '三体星球',
                ImageSrc: '',
                IsFollowed: true,
            },
            {
                Name: '无限电影',
                ImageSrc: '',
                IsFollowed: true,
            }
        ];
    }
    ArticleAuthorPage.prototype.switchToAll = function () {
        this.currentTabIndex = 0;
        this.goToSlide(this.currentTabIndex);
    };
    ArticleAuthorPage.prototype.switchToMine = function () {
        this.currentTabIndex = 1;
        this.goToSlide(this.currentTabIndex);
    };
    ArticleAuthorPage.prototype.goToSlide = function (index) {
        this.slides.slideTo(index);
    };
    ArticleAuthorPage.prototype.slideChanged = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            _this.currentTabIndex = index;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleAuthorPage.prototype, "slides", void 0);
    ArticleAuthorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-article-author',
            template: __webpack_require__(/*! ./article-author.html */ "./src/app/article-author/article-author.html"),
            styles: [__webpack_require__(/*! ./article-author.scss */ "./src/app/article-author/article-author.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ArticleAuthorPage);
    return ArticleAuthorPage;
}());



/***/ })

}]);
//# sourceMappingURL=article-author-article-author-module.js.map