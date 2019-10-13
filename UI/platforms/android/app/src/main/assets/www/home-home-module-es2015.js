(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title text-center>\n      Hackers Hero\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title *ngIf=\"hackersHero\">\n        #{{ hackersHero.login }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        Full Statck Developer, Benaglore\n      </ion-card-subtitle>\n    </ion-card-header>\n    <img *ngIf=\"hackersHero\" [src]=\"hackersHero.avatar_url\" class=\"info-img\">\n    <ion-card-content text-center>\n      <!-- <img *ngIf=\"hackersHero\" [src]=\"hackersHero.avatar_url\" class=\"info-img\"> -->\n\n      <ion-item lines=\"none\">\n        <ion-chip>\n          <ion-label class=\"ion-margin-end\">Followers</ion-label>\n          <ion-badge color=\"primary\">{{followersArray.length}}</ion-badge>\n        </ion-chip>\n        <ion-button slot=\"end\" (click)=\"openModal(FOLLOWERS)\" [disabled]=\"followersArray.length == 0\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-chip>\n          <ion-label class=\"ion-margin-end\">\n            Following\n          </ion-label>\n          <ion-badge color=\"primary\">{{followingArray.length}}</ion-badge>\n        </ion-chip>\n        <ion-button slot=\"end\" (click)=\"openModal(FOLLOWING)\" [disabled]=\"followingArray.length == 0\">\n          <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <div class=\"homeSlider\">\n        Start\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\">\n            <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(slider,slideWithNav)\">\n              <ion-icon name=\"arrow-dropleft\" class=\"prev-icon-custom custon-nav\" [class.disabled]=\"slider.isBeginningSlide\"></ion-icon>\n            </span>\n          </ion-col>\n          <ion-col size=\"10\">\n            <ion-slides pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav\n              (ionSlideDidChange)=\"SlideDidChange(slider,slideWithNav)\">\n              <ion-slide *ngFor=\"let repo of slider.slidesItems\">\n                <p>{{repo.name}}</p>\n                <p>{{repo.description}}</p>\n                <p>{{repo.language}}</p>\n                <p>{{repo.open_issues_count}}</p>\n                <img [src]=\"repo.owner.avatar_url\" />\n              </ion-slide>\n            </ion-slides>\n          </ion-col>\n          <ion-col size=\"1\">\n            <span class=\"slider-nav arrow-next\" (click)=\"slideNext(slider,slideWithNav)\">\n              <ion-icon name=\"arrow-dropright\" class=\"next-icon-custom custon-nav\" [class.disabled]=\"slider.isEndSlide\"></ion-icon>\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      END\n      </div>\n\n      <ion-row center>\n        <ion-col text-center>\n          <ion-button routerLink=\"/user\" routerDirection=\"forward\">\n            More Hackers\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>Follow</ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button target=\"_blank\" href=\"https://www.linkedin.com/in/theprajwalnayak/\">\n        <ion-icon name=\"logo-linkedin\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button target=\"_blank\" href=\"https://twitter.com/theprajwalnayak\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button target=\"_blank\" href=\"https://www.facebook.com/theprajwalnayak\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button target=\"_blank\" href=\"https://github.com/theprajwalnayak\">\n        <ion-icon name=\"logo-github\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n"

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

module.exports = ".custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.swiper-pagination-bullets {\n  bottom: -100px !important;\n}\n\n.homeSlider {\n  background: green;\n  color: black;\n  font-weight: bold;\n  position: relative;\n  height: 350px;\n  font-size: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFqd2FsbmF5YWsvZ2l0aHViL0h5YnJpZGFwcC1CaXJ0aGRheUJhc2gvVUkvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHSTtFQUNJLFlBQUE7QUNBUjs7QURJQTtFQUNJLHlCQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9uLW5hdiB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5wcmV2LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNsaWRlci1uYXYge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHN7XG4gICAgYm90dG9tOiAtMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmhvbWVTbGlkZXJ7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbn1cbiIsIi5jdXN0b24tbmF2IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5wcmV2LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uZXh0LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zbGlkZXItbmF2IGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGJvdHRvbTogLTEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lU2xpZGVyIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgZm9udC1zaXplOiA0MnB4O1xufSJdfQ== */"

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
        // username: string = 'ThePrajwalNayak';
        this.username = 'defunkt';
        this.FOLLOWERS = 'FOLLOWERS';
        this.FOLLOWING = 'FOLLOWING';
        this.followersArray = [];
        this.followingArray = [];
        this.repos = [];
        this.homeSliderConfig = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            centeredSlides: true
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