(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      Hackers Hero\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title *ngIf=\"hackersHero\">\n        #{{ hackersHero.login }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        Full Statck Developer, Benaglore\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content text-center>\n      <img *ngIf=\"hackersHero\" [src]=\"hackersHero.avatar_url\" class=\"info-img\">\n      <ion-item>\n        <ion-chip>\n          <ion-label class=\"ion-margin-end\">\n            Followers\n          </ion-label>\n          <ion-badge color=\"primary\">{{followersArray.length}}</ion-badge>\n        </ion-chip>\n        <ion-button shape=\"round\" fill=\"outline\" slot=\"end\" ion-button (click)=\"openModal(FOLLOWERS)\"\n          [disabled]=\"followersArray.length == 0\">\n          Open<ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-item>\n        <ion-chip>\n          <ion-label class=\"ion-margin-end\">\n            Following\n          </ion-label>\n          <ion-badge color=\"primary\">{{followingArray.length}}</ion-badge>\n        </ion-chip>\n        <ion-button shape=\"round\" fill=\"outline\" slot=\"end\" ion-button (click)=\"openModal(FOLLOWING)\"\n          [disabled]=\"followingArray.length == 0\">\n          Open<ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-list>\n        <ion-item *ngFor=\"let repo of repos\">\n          <ion-avatar slot=\"start\">\n            <img [src]=\"repo.owner.avatar_url\" />\n          </ion-avatar>\n          <ion-label text-wrap>\n            <h3>{{ repo.name }}</h3>\n          </ion-label>\n          <ion-icon name=\"arrow-down\" size=\"large\"></ion-icon>\n        </ion-item>\n      </ion-list>\n\n      <ion-row center>\n        <ion-col text-center>\n          <ion-button routerLink=\"/user\" routerDirection=\"forward\">\n            More Hackers\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../followers-following-modal/followers-following-modal.page */ "./src/app/followers-following-modal/followers-following-modal.page.ts");





var HomePage = /** @class */ (function () {
    function HomePage(userService, modalController) {
        this.userService = userService;
        this.modalController = modalController;
        this.username = 'ThePrajwalNayak';
        this.FOLLOWERS = 'FOLLOWERS';
        this.FOLLOWING = 'FOLLOWING';
        this.followersArray = [];
        this.followingArray = [];
        this.repos = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.getHackersHero();
        this.getFollowers();
        this.getFollowing();
        this.getRepository();
    };
    HomePage.prototype.getHackersHero = function () {
        var _this = this;
        this.userService.getUserByUserName(this.username)
            .subscribe(function (data) {
            _this.hackersHero = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getFollowers = function () {
        var _this = this;
        this.userService.getFollowers(this.username)
            .subscribe(function (data) {
            _this.followersArray = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getFollowing = function () {
        var _this = this;
        this.userService.getFollowing(this.username)
            .subscribe(function (data) {
            _this.followingArray = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getRepository = function () {
        var _this = this;
        this.userService.getRepoDetails(this.username)
            .subscribe(function (data) {
            _this.repos = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.openModal = function (modalType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var input, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = {
                            'user': null,
                            'users': null,
                            'modalType': null
                        };
                        if (modalType === this.FOLLOWERS) {
                            input.user = this.hackersHero,
                                input.users = this.followersArray;
                            input.modalType = this.FOLLOWERS;
                        }
                        else {
                            input.user = this.hackersHero,
                                input.users = this.followingArray;
                            input.modalType = this.FOLLOWING;
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__["FollowersFollowingModalPage"],
                                componentProps: input
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                var dataReturnedModal = dataReturned.data;
                                //alert('Modal Sent Data :'+ dataReturned);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map