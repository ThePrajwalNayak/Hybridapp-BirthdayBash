(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-left\">\n      Hackers Hero\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title *ngIf=\"hackersHero\">\n        #{{ hackersHero.login }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        Full Statck Developer, Benaglore\n      </ion-card-subtitle>\n    </ion-card-header>\n    <img *ngIf=\"hackersHero\" [src]=\"hackersHero.avatar_url\" class=\"info-img\">\n    <ion-card-content text-center>\n      <!-- <img *ngIf=\"hackersHero\" [src]=\"hackersHero.avatar_url\" class=\"info-img\"> -->\n\n      <ion-item lines=\"none\">\n        <ion-chip>\n          <ion-label class=\"ion-margin-end\">Followers</ion-label>\n          <ion-badge color=\"primary\">{{followersArray.length}}</ion-badge>\n        </ion-chip>\n        <ion-button slot=\"end\" (click)=\"openModal(FOLLOWERS)\" [disabled]=\"followersArray.length == 0\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-chip>\n          <ion-label class=\"ion-margin-end\">\n            Following\n          </ion-label>\n          <ion-badge color=\"primary\">{{followingArray.length}}</ion-badge>\n        </ion-chip>\n        <ion-button slot=\"end\" (click)=\"openModal(FOLLOWING)\" [disabled]=\"followingArray.length == 0\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n          <ion-chip>\n            <ion-label class=\"ion-margin-end\">Projects</ion-label>\n            <ion-badge color=\"primary\">{{repos.length}}</ion-badge>\n          </ion-chip>\n          <!-- <ion-button slot=\"end\" (click)=\"openModal(FOLLOWERS)\" [disabled]=\"followersArray.length == 0\">\n            <ion-icon name=\"arrow-down\"></ion-icon>\n          </ion-button> -->\n        </ion-item>\n\n      <div class=\"homeSlider\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"1\">\n              <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(slider,slideWithNav)\">\n                <ion-icon name=\"arrow-back\" class=\"prev-icon-custom custon-nav\"\n                  [class.disabled]=\"slider.isBeginningSlide\"></ion-icon>\n              </span>\n            </ion-col>\n            <ion-col size=\"10\">\n              <ion-slides pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav\n                (ionSlideDidChange)=\"SlideDidChange(slider,slideWithNav)\">\n                <ion-slide *ngFor=\"let repo of slider.slidesItems\">\n                    <ion-card >\n                        <ion-card-header>\n                          <ion-card-title>{{repo.name}}</ion-card-title>\n                          <ion-card-subtitle>{{repo.description}}</ion-card-subtitle>\n                        </ion-card-header>\n                      \n                        <ion-card-content>\n                          <ion-item lines=\"none\" class=\"ion-no-padding\">\n                              <ion-icon name=\"calendar\" class=\"ion-margin-end\"></ion-icon>\n                              {{repo.created_at | date : 'mediumDate'}}\n                          </ion-item>\n                          <ion-item lines=\"none\" class=\"ion-no-padding\">\n                              <ion-icon name=\"code\" class=\"ion-margin-end\"></ion-icon>\n                              {{repo.language}}\n                          </ion-item>\n                          <ion-item lines=\"none\" class=\"ion-no-padding\">\n                              <ion-icon name=\"bug\" class=\"ion-margin-end\"></ion-icon>\n                              {{repo.open_issues_count}}\n                          </ion-item>\n                          <ion-item lines=\"none\" class=\"ion-no-padding\">\n                              <ion-icon name=\"watch\" class=\"ion-margin-end\"></ion-icon>\n                              {{repo.watchers}}\n                          </ion-item>\n                          <!-- Its a {{repo.language}} project, created at {{repo.created_at | date : 'mediumDate'}}. -->\n                        </ion-card-content>\n                      </ion-card>\n                </ion-slide>\n              </ion-slides>\n            </ion-col>\n            <ion-col size=\"1\">\n              <span class=\"slider-nav arrow-next\" (click)=\"slideNext(slider,slideWithNav)\">\n                <ion-icon name=\"arrow-forward\" class=\"next-icon-custom custon-nav\"\n                  [class.disabled]=\"slider.isEndSlide\"></ion-icon>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <ion-row center>\n        <ion-col text-center>\n          <ion-button routerLink=\"/user\" routerDirection=\"forward\">\n            More Hackers\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"secondary\">Follow</ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button target=\"_blank\" href=\"https://www.linkedin.com/in/theprajwalnayak/\">\n        <ion-icon name=\"logo-linkedin\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button target=\"_blank\" href=\"https://twitter.com/theprajwalnayak\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button target=\"_blank\" href=\"https://www.facebook.com/theprajwalnayak\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button target=\"_blank\" href=\"https://github.com/theprajwalnayak\">\n        <ion-icon name=\"logo-github\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.homeSlider {\n  color: black;\n  position: relative;\n  height: auto;\n}\n\n.repo-avatar {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  background: orange;\n  color: white;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFqd2FsbmF5YWsvZ2l0aHViL0h5YnJpZGFwcC1CaXJ0aGRheUJhc2gvVUkvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHSTtFQUNJLFlBQUE7QUNBUjs7QURRQTtFQUVJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNOSjs7QURVQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b24tbmF2IHtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnByZXYtaWNvbi1jdXN0b20uZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uZXh0LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2xpZGVyLW5hdiB7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tcbiAgICAvLyBib3R0b206IC0xMDBweCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZVNsaWRlcntcbiAgICAvLyBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvLyBoZWlnaHQ6IDM1MHB4O1xufVxuXG4ucmVwby1hdmF0YXJ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4iLCIuY3VzdG9uLW5hdiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2xpZGVyLW5hdiBpb24taWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbWVTbGlkZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVwby1hdmF0YXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _followers_following_modal_followers_following_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../followers-following-modal/followers-following-modal.page */ "./src/app/followers-following-modal/followers-following-modal.page.ts");





let HomePage = class HomePage {
    constructor(userService, modalController) {
        this.userService = userService;
        this.modalController = modalController;
        this.username = 'ThePrajwalNayak';
        this.FOLLOWERS = 'FOLLOWERS';
        this.FOLLOWING = 'FOLLOWING';
        this.followersArray = [];
        this.followingArray = [];
        this.repos = [];
        this.homeSliderConfig = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: false,
            centeredSlides: false
        };
        this.slider = {
            isBeginningSlide: true,
            isEndSlide: false,
            slidesItems: []
        };
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
            this.slider.slidesItems = data;
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
    //Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
        ;
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    }
    //Call methods to check if slide is first or last to enable disbale navigation  
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
            object.isEndSlide = istrue;
        });
    }
    avatarLetter(word) {
        return word.charAt(0);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], HomePage.prototype, "slideWithNav", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map