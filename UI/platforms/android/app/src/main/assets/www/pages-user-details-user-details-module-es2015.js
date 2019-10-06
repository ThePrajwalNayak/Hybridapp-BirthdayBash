(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-details-user-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-details/user-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n     \n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>\n        {{ user.login }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        Hacker since 1957\n        <!-- {{ information.Year }} -->\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content text-center>\n      <img [src]=\"user.avatar_url\" class=\"info-img\">\n      {{ user.avatar_url }}\n \n      <ion-item lines=\"none\">\n        <ion-icon name=\"star-half\" slot=\"start\"></ion-icon>\n        <ion-label>{{followersArray.length}}</ion-label>\n      </ion-item>\n \n      <ion-item lines=\"none\">\n        <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\n        <ion-label text-wrap>{{followingArray.length}}</ion-label>\n      </ion-item>\n \n      <ion-item lines=\"none\">\n        <ion-icon name=\"contacts\" slot=\"start\"></ion-icon>\n        <ion-label text-wrap>JP Nagar, Bangalore</ion-label>\n      </ion-item>\n\n      <ion-button (click)=\"openModal(FOLLOWERS)\">Open Following</ion-button>     \n      <ion-button (click)=\"openModal(FOLLOWING)\">Open Followers</ion-button>        \n    </ion-card-content>\n  </ion-card>\n\n    <ion-button expand=\"block\" routerLink=\"/user\" routerDirection=\"forward\">\n      User\n    </ion-button>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details.page */ "./src/app/pages/user-details/user-details.page.ts");







const routes = [
    {
        path: '',
        component: _user_details_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailsPage"]
    }
];
let UserDetailsPageModule = class UserDetailsPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/user-details/user-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/user-details/user-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMucGFnZS5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../followers-following-modal/followers-following-modal.page */ "./src/app/followers-following-modal/followers-following-modal.page.ts");





let UserDetailsPage = class UserDetailsPage {
    constructor(userService, modalController) {
        this.userService = userService;
        this.modalController = modalController;
        this.FOLLOWERS = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["FollowersFollowingModalType"].FOLLOWERS;
        this.FOLLOWING = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["FollowersFollowingModalType"].FOLLOWING;
        this.followersArray = [];
        this.followingArray = [];
    }
    ngOnInit() {
        this.user = this.userService.getSelectedUser();
        this.getFollower();
        this.getFollowing();
    }
    getFollower() {
        this.userService.getFollower(this.user.login)
            .subscribe(data => {
            this.followersArray = data;
        }, error => {
            console.log(error);
        });
    }
    getFollowing() {
        this.userService.getFollowing(this.user.login)
            .subscribe(data => {
            this.followingArray = data;
        }, error => {
            console.log(error);
        });
    }
    openModal(modalType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var input = {
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
            const modal = yield this.modalController.create({
                component: _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__["FollowersFollowingModalPage"],
                componentProps: input
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    let dataReturnedModal = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
UserDetailsPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
UserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-details/user-details.page.html"),
        styles: [__webpack_require__(/*! ./user-details.page.scss */ "./src/app/pages/user-details/user-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], UserDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-user-details-user-details-module-es2015.js.map