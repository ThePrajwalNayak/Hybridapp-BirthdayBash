(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hacker-hacker-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hacker/hacker.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hacker/hacker.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n      <ion-title text-center>\n        Hackers Hero\n      </ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-card class=\"hacker-card\">\n      <ion-card-header text-center>\n        <ion-card-title *ngIf=\"hackersHero\">\n          #{{ hackersHero.login }}\n        </ion-card-title>\n        <ion-card-subtitle>\n          Full Statck Developer, Benaglore\n        </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content text-center class=\"hacker-card-content\">\n        <img *ngIf=\"hackersHero\" [src]=\"hackersHero.avatar_url\" class=\"hacker-img\">\n  \n        <ion-item class=\"ion-margin-top\">\n          <ion-chip>\n            <ion-label class=\"ion-margin-end\">\n              Followers\n            </ion-label>\n            <ion-badge color=\"primary\">{{followersArray.length}}</ion-badge>\n          </ion-chip>\n          <ion-button shape=\"round\" fill=\"outline\" slot=\"end\" ion-button (click)=\"openModal(FOLLOWERS)\"\n            [disabled]=\"followersArray.length == 0\">\n            Open<ion-icon name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-item>\n  \n        <ion-item>\n          <ion-chip>\n            <ion-label class=\"ion-margin-end\">\n              Following\n            </ion-label>\n            <ion-badge color=\"primary\">{{followingArray.length}}</ion-badge>\n          </ion-chip>\n          <ion-button shape=\"round\" fill=\"outline\" slot=\"end\" ion-button (click)=\"openModal(FOLLOWING)\"\n            [disabled]=\"followingArray.length == 0\">\n            Open<ion-icon name=\"arrow-forward\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-margin-top\">\n          <ion-chip>\n            <ion-label class=\"ion-margin-end\">Projects</ion-label>\n            <ion-badge color=\"primary\">{{repos.length}}</ion-badge>\n          </ion-chip>\n        </ion-item>\n        <ion-list>\n          <ion-item *ngFor=\"let repo of repos\">\n            <ion-avatar slot=\"start\" class=\"repo-avatar\">\n              <div>\n                <p>{{avatarLetter(repo.name)}}</p>\n              </div>\n            </ion-avatar>\n            <ion-label>\n              <ion-text class=\"repo-name\">\n                <h3>{{repo.name}}</h3>\n              </ion-text>\n              <p>{{repo.created_at | date : 'mediumDate' }}</p>\n              <ion-text>\n                <p>{{repo.language}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"secondary\">Follow</ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <ion-fab-button target=\"_blank\" href=\"https://www.linkedin.com/in/theprajwalnayak/\">\n          <ion-icon name=\"logo-linkedin\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button target=\"_blank\" href=\"https://twitter.com/theprajwalnayak\">\n          <ion-icon name=\"logo-twitter\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button target=\"_blank\" href=\"https://www.facebook.com/theprajwalnayak\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button target=\"_blank\" href=\"https://github.com/theprajwalnayak\">\n          <ion-icon name=\"logo-github\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/hacker/hacker.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/hacker/hacker.module.ts ***!
  \***********************************************/
/*! exports provided: HackerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerPageModule", function() { return HackerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hacker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hacker.page */ "./src/app/pages/hacker/hacker.page.ts");







const routes = [
    {
        path: '',
        component: _hacker_page__WEBPACK_IMPORTED_MODULE_6__["HackerPage"]
    }
];
let HackerPageModule = class HackerPageModule {
};
HackerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_hacker_page__WEBPACK_IMPORTED_MODULE_6__["HackerPage"]]
    })
], HackerPageModule);



/***/ }),

/***/ "./src/app/pages/hacker/hacker.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/hacker/hacker.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hacker-card .hacker-card-content .hacker-img {\n  border: 2px solid var(--ion-color-primary);\n  padding: 2px;\n  border-radius: 50%;\n}\n.hacker-card .hacker-card-content .repo-avatar {\n  margin-right: 32px;\n}\n.hacker-card .hacker-card-content .repo-avatar div {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  background: var(--ion-color-primary);\n  color: white;\n  font-weight: bolder;\n  position: relative;\n}\n.hacker-card .hacker-card-content .repo-avatar div p {\n  font-weight: bold;\n  font-size: 22px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.hacker-card .hacker-card-content .repo-name {\n  font-family: \"OpenSans-Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFqd2FsbmF5YWsvZ2l0aHViL0h5YnJpZGFwcC1CaXJ0aGRheUJhc2gvVUkvc3JjL2FwcC9wYWdlcy9oYWNrZXIvaGFja2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGFja2VyL2hhY2tlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZaO0FES1E7RUFDSSxrQkFBQTtBQ0haO0FES1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hoQjtBREtnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDSHBCO0FEUVE7RUFDSSw0QkFBQTtBQ05aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGFja2VyL2hhY2tlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFja2VyLWNhcmQge1xuXG4gICAgLmhhY2tlci1jYXJkLWNvbnRlbnQge1xuICAgICAgICAuaGFja2VyLWltZyB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVwby1hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVwby1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtQm9sZCc7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmhhY2tlci1jYXJkIC5oYWNrZXItY2FyZC1jb250ZW50IC5oYWNrZXItaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5oYWNrZXItY2FyZCAuaGFja2VyLWNhcmQtY29udGVudCAucmVwby1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4uaGFja2VyLWNhcmQgLmhhY2tlci1jYXJkLWNvbnRlbnQgLnJlcG8tYXZhdGFyIGRpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGFja2VyLWNhcmQgLmhhY2tlci1jYXJkLWNvbnRlbnQgLnJlcG8tYXZhdGFyIGRpdiBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5oYWNrZXItY2FyZCAuaGFja2VyLWNhcmQtY29udGVudCAucmVwby1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtQm9sZFwiO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/hacker/hacker.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/hacker/hacker.page.ts ***!
  \*********************************************/
/*! exports provided: HackerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackerPage", function() { return HackerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../followers-following-modal/followers-following-modal.page */ "./src/app/followers-following-modal/followers-following-modal.page.ts");





let HackerPage = class HackerPage {
    constructor(userService, modalController) {
        this.userService = userService;
        this.modalController = modalController;
        this.username = 'ThePrajwalNayak';
        this.FOLLOWERS = 'FOLLOWERS';
        this.FOLLOWING = 'FOLLOWING';
        this.followersArray = [];
        this.followingArray = [];
        this.repos = [];
    }
    ngOnInit() {
        this.getHackersHero();
        this.getFollowers();
        this.getFollowing();
        this.getRepository();
    }
    getHackersHero() {
        this.userService.getUserByUserName(this.username)
            .subscribe(data => {
            this.hackersHero = data;
        }, error => {
            console.log(error);
        });
    }
    getFollowers() {
        this.userService.getFollowers(this.username)
            .subscribe(data => {
            this.followersArray = data;
        }, error => {
            console.log(error);
        });
    }
    getFollowing() {
        this.userService.getFollowing(this.username)
            .subscribe(data => {
            this.followingArray = data;
        }, error => {
            console.log(error);
        });
    }
    getRepository() {
        this.userService.getRepoDetails(this.username)
            .subscribe(data => {
            this.repos = data;
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
                input.user = this.hackersHero,
                    input.users = this.followersArray;
                input.modalType = this.FOLLOWERS;
            }
            else {
                input.user = this.hackersHero,
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
    avatarLetter(word) {
        return word.charAt(0).toUpperCase();
    }
};
HackerPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
HackerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hacker',
        template: __webpack_require__(/*! raw-loader!./hacker.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hacker/hacker.page.html"),
        styles: [__webpack_require__(/*! ./hacker.page.scss */ "./src/app/pages/hacker/hacker.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HackerPage);



/***/ })

}]);
//# sourceMappingURL=pages-hacker-hacker-module-es2015.js.map