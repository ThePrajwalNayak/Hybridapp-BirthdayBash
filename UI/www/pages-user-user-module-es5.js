(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/user.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>Hackers</ion-title> \n      <ion-button slot=\"start\" color=\"dark\" routerLink=\"/home\" routerDirection=\"forward\"> <ion-icon name=\"arrow-back\"></ion-icon>Back</ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor=\"let user of users\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"user.avatar_url\"/>\n        </ion-avatar>\n        <ion-label text-wrap>\n            <h3>{{ user.login }}</h3>\n          </ion-label>\n          <ion-icon name=\"arrow-forward\" size=\"large\" (click)=\"goToUserDetails(user)\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more hackers...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab class=\"light\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button (click)=\"pageScroller()\">\n          <ion-icon name=\"arrow-dropup-circle\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    <!-- <ion-button (click)=\"pageScroller()\"> Top</ion-button> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/user/user.page.ts");







var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user/user.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/user/user.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user/user.page.ts ***!
  \*****************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");






var UserPage = /** @class */ (function () {
    function UserPage(userService, router) {
        this.userService = userService;
        this.router = router;
        this.nextUserIndex = 0;
    }
    UserPage.prototype.ngOnInit = function () {
        this.getAllUsers(this.nextUserIndex);
    };
    UserPage.prototype.getAllUsers = function (lastUser) {
        var _this = this;
        this.userService.getAllUsers(this.nextUserIndex).subscribe(function (data) {
            _this.users = data;
            // this.users.push(data);
        });
    };
    UserPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.nextUserIndex = _this.nextUserIndex + 30;
            // this.getAllUsers(this.nextUserIndex);
            _this.userService.getAllUsers(_this.nextUserIndex).subscribe(function (data) {
                _this.users = _this.users.concat(data);
                event.target.complete();
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                if (_this.users.length > 90) {
                    event.target.disabled = true;
                }
            });
        }, 1000);
    };
    UserPage.prototype.goToUserDetails = function (user) {
        this.userService.setSelectedUser(user);
        this.router.navigate(['/userDetails']);
    };
    UserPage.prototype.goToHomePage = function () {
        this.router.navigate(['/home']);
    };
    UserPage.prototype.pageScroller = function () {
        //scroll to page top
        this.content.scrollToTop();
    };
    UserPage.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], UserPage.prototype, "infiniteScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], UserPage.prototype, "content", void 0);
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/user/user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-user-module-es5.js.map