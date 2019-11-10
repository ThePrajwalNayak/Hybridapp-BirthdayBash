(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title text-center>\n      Hackers Hero\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"home-content\">\n\n  <video loop muted autoplay poster=\"/assets/videos/Codes - 23355.mp4\" class=\"fullscreen-bg__video\">\n      <!-- <source src=\"/assets/images/Beach-Camera/WEBM/Beach-Camera..webm\" type=\"video/webm\"> -->\n      <source src=\"/assets/videos/Codes - 23355.mp4\" type=\"video/mp4\">\n      <!-- <source src=\"/assets/images/Beach-Camera/OGV/Beach-Camera.ogv\" type=\"video/ogv\"> -->\n  </video>\n\n  <ion-row center>\n    <ion-col text-center>\n      <ion-button color=\"secondary\" routerLink=\"/hacker\" routerDirection=\"forward\">\n        Hackers Hero\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row center>\n    <ion-col text-center>\n      <ion-button color=\"secondary\" routerLink=\"/user\" routerDirection=\"forward\">\n        More Hackers\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-searchbar [(ngModel)]=\"searchTerm\" [placeholder]=\"searchPlaceholder\" (ionChange)=\"searchChanged($event)\" (ionCancel)=\"resetSearchTerm($event)\"></ion-searchbar>\n\n  <ion-item>\n    <ion-label>Select Searchtype</ion-label>\n    <ion-select [(ngModel)]=\"type\" (ionChange)=\"filterChanged($event)\">\n      <ion-select-option value=\"Users\">Loginname</ion-select-option>\n      <ion-select-option value=\"repositories\">Repositories</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list>\n\n    <div *ngIf=\"type == 'Users'\">\n      <ion-item *ngFor=\"let user of results\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"user.avatar_url\" />\n        </ion-avatar>\n        <ion-label text-wrap>\n          <h3>{{ user.login }}</h3>\n        </ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"large\" (click)=\"goToUserDetails(user)\"></ion-icon>\n      </ion-item>\n    </div>\n\n    <div *ngIf=\"type == 'repositories'\">\n      <ion-item *ngFor=\"let repo of results\">\n        <ion-avatar slot=\"start\" class=\"repo-avatar\">\n          <div>\n            <p>{{avatarLetter(repo.name)}}</p>\n          </div>\n        </ion-avatar>\n        <ion-label>\n          <ion-text class=\"repo-name\">\n            <h3>{{repo.name}}</h3>\n          </ion-text>\n          <p>{{repo.created_at | date : 'mediumDate' }}</p>\n          <ion-text>\n            <p>{{repo.language}}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </div>\n\n  </ion-list>\n\n</ion-content>\n"

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

module.exports = ".home-content .repo-avatar {\n  margin-right: 32px;\n}\n.home-content .repo-avatar div {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  background: var(--ion-color-primary);\n  color: white;\n  font-weight: bolder;\n  position: relative;\n}\n.home-content .repo-avatar div p {\n  font-weight: bold;\n  font-size: 22px;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.home-content .repo-name {\n  font-family: \"OpenSans-Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFqd2FsbmF5YWsvZ2l0aHViL0h5YnJpZGFwcC1CaXJ0aGRheUJhc2gvVUkvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7QUNEUjtBREdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREdZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0ZoQjtBRE9JO0VBQ0ksNEJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250ZW50IHtcblxuICAgIC5yZXBvLWF2YXRhciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcblxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVwby1uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucy1Cb2xkJztcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIuaG9tZS1jb250ZW50IC5yZXBvLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cbi5ob21lLWNvbnRlbnQgLnJlcG8tYXZhdGFyIGRpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZS1jb250ZW50IC5yZXBvLWF2YXRhciBkaXYgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5ob21lLWNvbnRlbnQgLnJlcG8tbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zLUJvbGRcIjtcbn0iXX0= */"

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
        this.searchPlaceholder = "login name 'ThePrajwalNayak'";
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
            this.searchPlaceholder = "login name 'ThePrajwalNayak'";
        }
        else if (event.detail.value == 'repositories') {
            this.searchPlaceholder = "repo name 'nayak news'";
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