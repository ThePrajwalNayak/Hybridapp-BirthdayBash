(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title text-center>\n      Hackers Hero\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"home-content\">\n  <ion-card>\n    <video loop muted autoplay poster=\"/assets/videos/Codes - 23355.mp4\" class=\"home-bg-video\">\n      <!-- <source src=\"/assets/images/Beach-Camera/WEBM/Beach-Camera..webm\" type=\"video/webm\"> -->\n      <source src=\"/assets/videos/Codes - 23355.mp4\" type=\"video/mp4\">\n      <!-- <source src=\"/assets/images/Beach-Camera/OGV/Beach-Camera.ogv\" type=\"video/ogv\"> -->\n    </video>\n  </ion-card>\n\n\n  <ion-row center>\n    <ion-col text-center>\n      <ion-button color=\"secondary\" routerLink=\"/hacker\" routerDirection=\"forward\">\n        Hackers Hero\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row center>\n    <ion-col text-center>\n      <ion-button style=\"position: relative;overflow: hidden;\" color=\"secondary\" routerLink=\"/user\" routerDirection=\"forward\">\n        More Hackers\n        <ion-ripple-effect></ion-ripple-effect>\n      </ion-button>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-card>\n  <ion-grid>\n      <ion-row >\n        <ion-col size=\"6\">\n            <img src=\"/assets/icon/search.png\" />\n            <h5 text-center>Search Users</h5>\n        </ion-col>\n        <ion-col size=\"6\">\n            <img src=\"/assets/icon/browse.png\" />\n            <h5 text-center>Browse Repositories</h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"6\">\n              <img src=\"/assets/icon/view.png\" />\n              <h5 text-center>View Hackers</h5>\n          </ion-col>\n          <ion-col size=\"6\">\n              <img src=\"/assets/icon/hacker.png\" />\n              <h5 text-center>Follow Hackers</h5>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-card>\n\n  <ion-card class=\"search-card\">\n    <ion-card-header>\n      <ion-card-title>Search GitHub</ion-card-title>\n      <ion-card-subtitle>Find users via github login name [ Name must match the login name exactly ], find repositories via github repo name [ Can be nearest match ] </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-searchbar [(ngModel)]=\"searchTerm\" [placeholder]=\"searchPlaceholder\" (ionChange)=\"searchChanged($event)\"\n        (ionCancel)=\"resetSearchTerm($event)\"></ion-searchbar>\n      <ion-item>\n        <ion-label>Searchtype</ion-label>\n        <ion-select [(ngModel)]=\"type\" (ionChange)=\"filterChanged($event)\">\n          <ion-select-option value=\"Users\">Name</ion-select-option>\n          <ion-select-option value=\"repositories\">Repo</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-list>\n        <div *ngIf=\"type == 'Users'\">\n          <ion-item *ngFor=\"let user of results\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"user.avatar_url\" />\n            </ion-avatar>\n            <ion-label text-wrap>\n              <h3>{{ user.login }}</h3>\n            </ion-label>\n            <ion-icon name=\"arrow-forward\" size=\"large\" (click)=\"goToUserDetails(user)\"></ion-icon>\n          </ion-item>\n        </div>\n        <div *ngIf=\"type == 'repositories'\">\n          <ion-item *ngFor=\"let repo of results\">\n            <ion-avatar slot=\"start\" class=\"repo-avatar\">\n              <div>\n                <p>{{avatarLetter(repo.name)}}</p>\n              </div>\n            </ion-avatar>\n            <ion-label>\n              <ion-text class=\"repo-name\">\n                <h3>{{repo.name}}</h3>\n              </ion-text>\n              <p>{{repo.created_at | date : 'mediumDate' }}</p>\n              <ion-text>\n                <p>{{repo.language}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </div>\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-row center>\n    <ion-col text-center>\n      <ion-button color=\"secondary\" routerLink=\"/hacker\" routerDirection=\"forward\">\n        Hackers Hero\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row center>\n    <ion-col text-center>\n      <ion-button color=\"secondary\" routerLink=\"/user\" routerDirection=\"forward\">\n        More Hackers\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n"

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

module.exports = ".home-content .home-bg-video {\n  overflow: hidden;\n}\n.home-content .search-card .repo-avatar {\n  margin-right: 32px;\n}\n.home-content .search-card .repo-avatar div {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  background: var(--ion-color-primary);\n  color: white;\n  font-weight: bolder;\n  position: relative;\n}\n.home-content .search-card .repo-avatar div p {\n  font-weight: bold;\n  font-size: 22px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.home-content .search-card .repo-name {\n  font-family: \"OpenSans-Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFqd2FsbmF5YWsvZ2l0aHViL0h5YnJpZGFwcC1CaXJ0aGRheUJhc2gvVUkvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksZ0JBQUE7QUNGUjtBRE1RO0VBQ0ksa0JBQUE7QUNKWjtBRE1ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKaEI7QURNZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0pwQjtBRFNRO0VBQ0ksNEJBQUE7QUNQWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250ZW50IHtcblxuICAgIC5ob21lLWJnLXZpZGVvIHtcbiAgICAgICAgLy8gd2lkdGg6IDgwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWNhcmQge1xuICAgICAgICAucmVwby1hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVwby1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtQm9sZCc7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIuaG9tZS1jb250ZW50IC5ob21lLWJnLXZpZGVvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob21lLWNvbnRlbnQgLnNlYXJjaC1jYXJkIC5yZXBvLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cbi5ob21lLWNvbnRlbnQgLnNlYXJjaC1jYXJkIC5yZXBvLWF2YXRhciBkaXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtY29udGVudCAuc2VhcmNoLWNhcmQgLnJlcG8tYXZhdGFyIGRpdiBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5ob21lLWNvbnRlbnQgLnNlYXJjaC1jYXJkIC5yZXBvLW5hbWUge1xuICBmb250LWZhbWlseTogXCJPcGVuU2Fucy1Cb2xkXCI7XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let HomePage = class HomePage {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.searchTerm = '';
        this.type = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["SearchType"].LoginName;
        this.results = [];
        this.currentSeachFilter = this.type;
        this.searchPlaceholder = "E.g. ThePrajwalNayak";
    }
    ngOnInit() {
    }
    //Call API to get result based on SeachTerm and Search Type
    searchChanged(event) {
        console.log(event.detail.value);
        //If user using same filter for search then proceed with API call
        if (this.currentSeachFilter == this.type) {
            //Call API if searchTerm not empty 
            if (this.searchTerm) {
                this.userService.searchData(this.searchTerm, this.type)
                    .subscribe(data => {
                    this.prepareResult(data);
                }, error => {
                    this.results = [];
                    console.log(error);
                });
            }
            else {
                this.results = [];
            }
        }
    }
    prepareResult(data) {
        this.results = [];
        if (this.type == 'Users') {
            this.results.push(data);
        }
        else if (this.type == 'repositories') {
            let objCopy = JSON.parse(JSON.stringify(data.items));
            this.results = objCopy;
        }
    }
    resetSearchTerm(event) {
        this.searchTerm = '';
        this.results = [];
    }
    filterChanged(event) {
        console.log(event.detail.value);
        this.currentSeachFilter = event.detail.value;
        this.searchTerm = '';
        this.results = [];
        if (event.detail.value == 'Users') {
            this.searchPlaceholder = "E.g. ThePrajwalNayak";
        }
        else if (event.detail.value == 'repositories') {
            this.searchPlaceholder = "E.g. Hello World App";
        }
    }
    goToUserDetails(user) {
        this.userService.setSelectedUser(user);
        this.router.navigate(['/userDetails']);
    }
    avatarLetter(word) {
        return word.charAt(0).toUpperCase();
    }
};
HomePage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map