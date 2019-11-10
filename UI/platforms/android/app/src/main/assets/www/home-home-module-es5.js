(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title text-center>\n      Hackers Hero\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"home-content ion-margin-bottom\">\n  <ion-card class=\"ion-margin-bottom\">\n    <img src=\"/assets/Images/bg.png\" />\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <img src=\"/assets/icon/browse.png\" />\n          <h6 text-center>Browse Hackers Profile</h6>\n        </ion-col>\n        <ion-col size=\"6\">\n          <img src=\"/assets/icon/view.png\" />\n          <h6 text-center>Check Hackers Followers and Following</h6>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <img src=\"/assets/icon/search.png\" />\n          <h6 text-center>Search Hackers and Repositories</h6>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <img src=\"/assets/icon/hacker.png\" />\n          <h6 text-center>Meet HackersHero</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card class=\"search-card ion-margin-bottom\">\n    <ion-card-header>\n      <ion-card-title>Search GitHub</ion-card-title>\n      <ion-card-subtitle text-capitalize>Find users via github login name [ Name must match login name exactly ], find repositories\n        via github repo name [ Can be nearest match ] </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-searchbar class=\"ion-margin-bottom\" [(ngModel)]=\"searchTerm\" [placeholder]=\"searchPlaceholder\" (ionChange)=\"searchChanged($event)\"\n        (ionCancel)=\"resetSearchTerm($event)\"></ion-searchbar>\n      <ion-item class=\"ion-margin-bottom\">\n        <ion-label>Search Type</ion-label>\n        <ion-select [(ngModel)]=\"type\" (ionChange)=\"filterChanged($event)\">\n          <ion-select-option value=\"Users\">Name</ion-select-option>\n          <ion-select-option value=\"repositories\">Repo</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-list>\n        <div *ngIf=\"type == 'Users'\">\n          <ion-item *ngFor=\"let user of results\">\n            <ion-avatar slot=\"start\">\n              <img [src]=\"user.avatar_url\" />\n            </ion-avatar>\n            <ion-label text-wrap>\n              <h3>{{ user.login }}</h3>\n            </ion-label>\n            <ion-icon name=\"arrow-forward\" size=\"large\" (click)=\"goToUserDetails(user)\"></ion-icon>\n          </ion-item>\n        </div>\n        <div *ngIf=\"type == 'repositories'\">\n          <ion-item *ngFor=\"let repo of results\">\n            <ion-avatar slot=\"start\" class=\"repo-avatar\">\n              <div>\n                <p>{{avatarLetter(repo.name)}}</p>\n              </div>\n            </ion-avatar>\n            <ion-label>\n              <ion-text class=\"repo-name\">\n                <h3>{{repo.name}}</h3>\n              </ion-text>\n              <p>{{repo.created_at | date : 'mediumDate' }}</p>\n              <ion-text>\n                <p>{{repo.language}}</p>\n              </ion-text>\n            </ion-label>\n          </ion-item>\n        </div>\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-row center class=\"ion-margin-top\">\n    <ion-col text-center>\n      <ion-button expand=\"block\" color=\"secondary\" routerLink=\"/hacker\" routerDirection=\"forward\">\n        Meet Hackers Hero\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row center class=\"ion-margin-bottom\">\n    <ion-col text-center>\n      <ion-button expand=\"block\" color=\"secondary\" routerLink=\"/user\" routerDirection=\"forward\">\n        Browse Hackers Profile\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-card class=\"home-quote\">\n      <div class=\"blockquote-wrapper\">\n          <div class=\"blockquote\">\n            <h1>\n              To Finish a Job, First Begin\n             </h1>\n            <h4>&mdash;Shankar Nag</h4>\n          </div>\n        </div>\n  </ion-card>\n\n</ion-content>\n\n"

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

module.exports = "@charset \"UTF-8\";\n.home-content .home-bg-video {\n  overflow: hidden;\n}\n.home-content .search-card .repo-avatar {\n  margin-right: 32px;\n}\n.home-content .search-card .repo-avatar div {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  background: var(--ion-color-primary);\n  color: white;\n  font-weight: bolder;\n  position: relative;\n}\n.home-content .search-card .repo-avatar div p {\n  font-weight: bold;\n  font-size: 22px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.home-content .search-card .repo-name {\n  font-family: \"OpenSans-Bold\";\n}\n.home-content .home-quote {\n  background-color: #FFE32C;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(25%, #FFE32C), to(#0336FF));\n  background-image: linear-gradient(180deg, #FFE32C 25%, #0336FF 100%);\n  /* Blockquote main style */\n  /* Blockquote header */\n  /* Blockquote right double quotes */\n  /* increase header size after 600px */\n  /* Blockquote subheader */\n}\n.home-content .home-quote .blockquote-wrapper {\n  display: -webkit-box;\n  display: flex;\n  padding: 0 20px;\n}\n.home-content .home-quote .blockquote {\n  position: relative;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 800;\n  color: #ffffff;\n  padding: 30px 0;\n  width: 100%;\n  max-width: 500px;\n  z-index: 1;\n  margin: 80px auto;\n  align-self: center;\n  border-top: solid 1px;\n  border-bottom: solid 1px;\n}\n.home-content .home-quote .blockquote h1 {\n  position: relative;\n  color: #FFFFFF;\n  font-size: 40px;\n  font-weight: 800;\n  line-height: 1;\n  margin: 0;\n}\n.home-content .home-quote .blockquote:after {\n  position: absolute;\n  content: \"”\";\n  color: white;\n  font-size: 10rem;\n  line-height: 0;\n  bottom: -43px;\n  right: 30px;\n}\n@media all and (min-width: 600px) {\n  .home-content .home-quote .blockquote h1 {\n    font-size: 60px;\n  }\n}\n.home-content .home-quote .blockquote h4 {\n  position: relative;\n  color: #292a2b;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 1;\n  margin: 0;\n  padding-top: 20px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9wcmFqd2FsbmF5YWsvZ2l0aHViL0h5YnJpZGFwcC1CaXJ0aGRheUJhc2gvVUkvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VaO0VBRUksZ0JBQUE7QUREUjtBQ0tRO0VBQ0ksa0JBQUE7QURIWjtBQ0tZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURIaEI7QUNLZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBREhwQjtBQ1FRO0VBQ0ksNEJBQUE7QUROWjtBQ2NJO0VBQ0kseUJBQUE7RUFDQSx3R0FBQTtFQUFBLG9FQUFBO0VBUUEsMEJBQUE7RUFnQkEsc0JBQUE7RUFVQSxtQ0FBQTtFQVdBLHFDQUFBO0VBT0EseUJBQUE7QUQzRFI7QUNTUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUVBLGVBQUE7QURSWjtBQ1lRO0VBQ0ksa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QURWWjtBQ2NRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QURaWjtBQ2dCUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBRGRaO0FDa0JRO0VBQ0k7SUFDSSxlQUFBO0VEaEJkO0FBQ0Y7QUNvQlE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QURsQloiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmhvbWUtY29udGVudCAuaG9tZS1iZy12aWRlbyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZS1jb250ZW50IC5zZWFyY2gtY2FyZCAucmVwby1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG4uaG9tZS1jb250ZW50IC5zZWFyY2gtY2FyZCAucmVwby1hdmF0YXIgZGl2IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLWNvbnRlbnQgLnNlYXJjaC1jYXJkIC5yZXBvLWF2YXRhciBkaXYgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4uaG9tZS1jb250ZW50IC5zZWFyY2gtY2FyZCAucmVwby1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlblNhbnMtQm9sZFwiO1xufVxuLmhvbWUtY29udGVudCAuaG9tZS1xdW90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkUzMkM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkUzMkMgMjUlLCAjMDMzNkZGIDEwMCUpO1xuICAvKiBCbG9ja3F1b3RlIG1haW4gc3R5bGUgKi9cbiAgLyogQmxvY2txdW90ZSBoZWFkZXIgKi9cbiAgLyogQmxvY2txdW90ZSByaWdodCBkb3VibGUgcXVvdGVzICovXG4gIC8qIGluY3JlYXNlIGhlYWRlciBzaXplIGFmdGVyIDYwMHB4ICovXG4gIC8qIEJsb2NrcXVvdGUgc3ViaGVhZGVyICovXG59XG4uaG9tZS1jb250ZW50IC5ob21lLXF1b3RlIC5ibG9ja3F1b3RlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9tZS1jb250ZW50IC5ob21lLXF1b3RlIC5ibG9ja3F1b3RlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDgwcHggYXV0bztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbn1cbi5ob21lLWNvbnRlbnQgLmhvbWUtcXVvdGUgLmJsb2NrcXVvdGUgaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDA7XG59XG4uaG9tZS1jb250ZW50IC5ob21lLXF1b3RlIC5ibG9ja3F1b3RlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIuKAnVwiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTByZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3R0b206IC00M3B4O1xuICByaWdodDogMzBweDtcbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5ob21lLWNvbnRlbnQgLmhvbWUtcXVvdGUgLmJsb2NrcXVvdGUgaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuLmhvbWUtY29udGVudCAuaG9tZS1xdW90ZSAuYmxvY2txdW90ZSBoNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMyOTJhMmI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgei1pbmRleDogMTtcbn0iLCIuaG9tZS1jb250ZW50IHtcblxuICAgIC5ob21lLWJnLXZpZGVvIHtcbiAgICAgICAgLy8gd2lkdGg6IDgwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWNhcmQge1xuICAgICAgICAucmVwby1hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVwby1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMtQm9sZCc7XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaG9tZS1xdW90ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkUzMkM7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkUzMkMgMjUlLCAjMDMzNkZGIDEwMCUpO1xuXG4gICAgICAgIC5ibG9ja3F1b3RlLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBCbG9ja3F1b3RlIG1haW4gc3R5bGUgKi9cbiAgICAgICAgLmJsb2NrcXVvdGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBtYXJnaW46IDgwcHggYXV0bztcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIEJsb2NrcXVvdGUgaGVhZGVyICovXG4gICAgICAgIC5ibG9ja3F1b3RlIGgxIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogQmxvY2txdW90ZSByaWdodCBkb3VibGUgcXVvdGVzICovXG4gICAgICAgIC5ibG9ja3F1b3RlOmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4oCdXCI7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogLTQzcHg7XG4gICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGluY3JlYXNlIGhlYWRlciBzaXplIGFmdGVyIDYwMHB4ICovXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAuYmxvY2txdW90ZSBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgLyogQmxvY2txdW90ZSBzdWJoZWFkZXIgKi9cbiAgICAgICAgLmJsb2NrcXVvdGUgaDQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgY29sb3I6ICMyOTJhMmI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




var HomePage = /** @class */ (function () {
    function HomePage(userService, router) {
        this.userService = userService;
        this.router = router;
        this.searchTerm = '';
        this.type = _services_user_service__WEBPACK_IMPORTED_MODULE_3__["SearchType"].LoginName;
        this.results = [];
        this.currentSeachFilter = this.type;
        this.searchPlaceholder = "E.g. ThePrajwalNayak";
    }
    HomePage.prototype.ngOnInit = function () {
    };
    //Call API to get result based on SeachTerm and Search Type
    HomePage.prototype.searchChanged = function (event) {
        var _this = this;
        console.log(event.detail.value);
        //If user using same filter for search then proceed with API call
        if (this.currentSeachFilter == this.type) {
            //Call API if searchTerm not empty 
            if (this.searchTerm) {
                this.userService.searchData(this.searchTerm, this.type)
                    .subscribe(function (data) {
                    _this.prepareResult(data);
                }, function (error) {
                    _this.results = [];
                    console.log(error);
                });
            }
            else {
                this.results = [];
            }
        }
    };
    HomePage.prototype.prepareResult = function (data) {
        this.results = [];
        if (this.type == 'Users') {
            this.results.push(data);
        }
        else if (this.type == 'repositories') {
            var objCopy = JSON.parse(JSON.stringify(data.items));
            this.results = objCopy;
        }
    };
    HomePage.prototype.resetSearchTerm = function (event) {
        this.searchTerm = '';
        this.results = [];
    };
    HomePage.prototype.filterChanged = function (event) {
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
    };
    HomePage.prototype.goToUserDetails = function (user) {
        this.userService.setSelectedUser(user);
        this.router.navigate(['/userDetails']);
    };
    HomePage.prototype.avatarLetter = function (word) {
        return word.charAt(0).toUpperCase();
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map