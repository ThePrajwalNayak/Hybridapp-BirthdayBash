(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-details-user-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>Hacker Detail</ion-title>\n    <!-- <ion-button slot=\"start\" shape=\"round\" fill=\"outline\" color=\"primary\" routerLink=\"/user\" routerDirection=\"forward\">\n      <ion-icon name=\"arrow-back\"></ion-icon>Back\n    </ion-button> -->\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card class=\"hacker-card\">\n    <ion-card-header>\n      <ion-card-title text-center>\n        {{ user.login }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        \n      </ion-card-subtitle>\n    </ion-card-header>\n    <!-- start -->\n    <ion-card-content text-center class=\"hacker-card-content\">\n        <img *ngIf=\"user\" [src]=\"user.avatar_url\" class=\"hacker-img\">\n  \n        <ion-item class=\"ion-margin-top\">\n          <ion-chip>\n            <ion-label class=\"ion-margin-end\">\n              Followers\n            </ion-label>\n            <ion-badge color=\"primary\">{{followersArray.length}}</ion-badge>\n          </ion-chip>\n          <ion-button shape=\"round\" fill=\"outline\" slot=\"end\" ion-button (click)=\"openModal(FOLLOWERS)\"\n            [disabled]=\"followersArray.length == 0\">\n            Open<ion-icon name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-item>\n  \n        <ion-item>\n          <ion-chip>\n            <ion-label class=\"ion-margin-end\">\n              Following\n            </ion-label>\n            <ion-badge color=\"primary\">{{followingArray.length}}</ion-badge>\n          </ion-chip>\n          <ion-button shape=\"round\" fill=\"outline\" slot=\"end\" ion-button (click)=\"openModal(FOLLOWING)\"\n            [disabled]=\"followingArray.length == 0\">\n            Open<ion-icon name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-margin-top\">\n          <ion-chip>\n            <ion-label class=\"ion-margin-end\">Projects</ion-label>\n            <ion-badge color=\"primary\">{{repos.length}}</ion-badge>\n          </ion-chip>\n        </ion-item>\n        <ion-list>\n          <ion-item *ngFor=\"let repo of repos\">\n            <ion-avatar slot=\"start\" class=\"repo-avatar\">\n              <div>\n                <p>{{avatarLetter(repo.name)}}</p>\n              </div>\n            </ion-avatar>\n            <ion-label>\n              <ion-text class=\"repo-name\">\n                <h3>{{repo.name}}</h3>\n              </ion-text>\n              <p>{{repo.created_at | date : 'mediumDate' }}</p>\n              <ion-text>\n                <p>{{repo.language}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button color=\"secondary\">Follow</ion-fab-button>\n            <ion-fab-list side=\"top\">\n              <ion-fab-button target=\"_blank\" href=\"{{user.html_url}}\">\n                <ion-icon name=\"logo-github\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab-list>\n          </ion-fab>\n\n      </ion-card-content>\n    <!-- end -->\n\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.module.ts ***!
  \***********************************************************/
/*! exports provided: UserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPageModule", function() { return UserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");







var routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]
    }
];
var UserDetailsPageModule = /** @class */ (function () {
    function UserDetailsPageModule() {
    }
    UserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]]
        })
    ], UserDetailsPageModule);
    return UserDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hacker-card .hacker-card-content .hacker-img {\n  border: 2px solid var(--ion-color-primary);\n  padding: 2px;\n  border-radius: 50%;\n}\n.hacker-card .hacker-card-content .repo-avatar {\n  margin-right: 32px;\n}\n.hacker-card .hacker-card-content .repo-avatar div {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  background: var(--ion-color-primary);\n  color: white;\n  font-weight: bolder;\n  position: relative;\n}\n.hacker-card .hacker-card-content .repo-avatar div p {\n  font-weight: bold;\n  font-size: 22px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.hacker-card .hacker-card-content .repo-name {\n  font-family: \"OpenSans-Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFqd2FsbmF5YWsvZ2l0aHViL0h5YnJpZGFwcC1CaXJ0aGRheUJhc2gvVUkvc3JjL2FwcC9wYWdlcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FESVE7RUFDSSxrQkFBQTtBQ0ZaO0FESVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZoQjtBRElnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDRnBCO0FET1E7RUFDSSw0QkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFja2VyLWNhcmQge1xuXG4gICAgLmhhY2tlci1jYXJkLWNvbnRlbnQge1xuICAgICAgICAuaGFja2VyLWltZ3tcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgICAucmVwby1hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVwby1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtQm9sZCc7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmhhY2tlci1jYXJkIC5oYWNrZXItY2FyZC1jb250ZW50IC5oYWNrZXItaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5oYWNrZXItY2FyZCAuaGFja2VyLWNhcmQtY29udGVudCAucmVwby1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4uaGFja2VyLWNhcmQgLmhhY2tlci1jYXJkLWNvbnRlbnQgLnJlcG8tYXZhdGFyIGRpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGFja2VyLWNhcmQgLmhhY2tlci1jYXJkLWNvbnRlbnQgLnJlcG8tYXZhdGFyIGRpdiBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5oYWNrZXItY2FyZCAuaGFja2VyLWNhcmQtY29udGVudCAucmVwby1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtQm9sZFwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.ts ***!
  \*********************************************************/
/*! exports provided: UserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsPage", function() { return UserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../followers-following-modal/followers-following-modal.page */ "./src/app/followers-following-modal/followers-following-modal.page.ts");





var UserDetailsPage = /** @class */ (function () {
    function UserDetailsPage(userService, modalController) {
        this.userService = userService;
        this.modalController = modalController;
        this.repos = [];
        this.FOLLOWERS = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["FollowersFollowingModalType"].FOLLOWERS;
        this.FOLLOWING = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["FollowersFollowingModalType"].FOLLOWING;
        this.followersArray = [];
        this.followingArray = [];
    }
    UserDetailsPage.prototype.ngOnInit = function () {
        this.user = this.userService.getSelectedUser();
        this.getRepoDetails();
        this.getFollower();
        this.getFollowing();
        this.getRepository();
    };
    UserDetailsPage.prototype.getRepoDetails = function () {
        var _this = this;
        this.userService.getRepoDetails(this.user.login)
            .subscribe(function (data) {
            _this.repos = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsPage.prototype.getFollower = function () {
        var _this = this;
        this.userService.getFollowers(this.user.login)
            .subscribe(function (data) {
            _this.followersArray = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsPage.prototype.getFollowing = function () {
        var _this = this;
        this.userService.getFollowing(this.user.login)
            .subscribe(function (data) {
            _this.followingArray = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsPage.prototype.getRepository = function () {
        var _this = this;
        this.userService.getRepoDetails(this.user.login)
            .subscribe(function (data) {
            _this.repos = data;
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsPage.prototype.openModal = function (modalType) {
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
                            input.user = this.user,
                                input.users = this.followersArray;
                            input.modalType = this.FOLLOWERS;
                        }
                        else {
                            input.user = this.user,
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
    UserDetailsPage.prototype.avatarLetter = function (word) {
        return word.charAt(0).toUpperCase();
    };
    UserDetailsPage.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! raw-loader!./user-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html"),
            styles: [__webpack_require__(/*! ./user-details.page.scss */ "./src/app/pages/user-details/user-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], UserDetailsPage);
    return UserDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-details-user-details-module-es5.js.map