webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_routes_module__ = __webpack_require__("./src/app/auth/auth-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_management_product_management_routes_module__ = __webpack_require__("./src/app/product-management/product-management-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_management_profile_profile_component__ = __webpack_require__("./src/app/user-management/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'profile/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__user_management_profile_profile_component__["a" /* ProfileComponent */]
    },
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__auth_auth_routes_module__["a" /* AuthRoutesModule */],
                __WEBPACK_IMPORTED_MODULE_3__product_management_product_management_routes_module__["a" /* ProductManagementRoutesModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"app-frame\">\r\n    <app-nav-bar></app-nav-bar>\r\n    <div class=\"app-frame__content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"app-frame__footer\">\r\n      <span>\r\n        Impressum\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".app-frame {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0; }\n  .app-frame__footer {\n    background: white;\n    margin: 0 -15px;\n    padding: 16px 30px;\n    -webkit-box-shadow: 0 -5px 15px -5px  #aaa;\n            box-shadow: 0 -5px 15px -5px  #aaa; }\n  .app-frame__content {\n    margin-top: 50px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_locale__ = __webpack_require__("./node_modules/ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes_module__ = __webpack_require__("./src/app/app-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_management_product_management_module__ = __webpack_require__("./src/app/product-management/product-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_bar_avatar_avatar_component__ = __webpack_require__("./src/app/nav-bar/avatar/avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_management_profile_profile_component__ = __webpack_require__("./src/app/user-management/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















Object(__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["c" /* defineLocale */])('de', __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_locale__["a" /* deLocale */]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__nav_bar_avatar_avatar_component__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_management_profile_profile_component__["a" /* ProfileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routes_module__["a" /* AppRoutesModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_9__product_management_product_management_module__["a" /* ProductManagementModule */],
                __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsDropdownModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__authentication_service__["a" /* AuthenticationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
var AuthRoutesModule = (function () {
    function AuthRoutesModule() {
    }
    AuthRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AuthRoutesModule);
    return AuthRoutesModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"login-page__form\">\r\n    <div class=\"login-page__main-title\"></div>\r\n    <h2 class=\"login-page__title\">Login</h2>\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login($event)\">\r\n      <div class=\"formGroup\">\r\n        <label for=\"\">Username</label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"username\"\r\n          (keydown)=\"login($event)\">\r\n      </div>\r\n      <div class=\"formGroup\">\r\n        <label for=\"\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          class=\"form-control\"\r\n          formControlName=\"password\"\r\n          (keydown)=\"login($event)\">\r\n      </div>\r\n    </form>\r\n    <div *ngIf=\"wrongUserData\" class=\"text-danger\">Die eingegeben Nutzerdaten sind nicht korrekt.</div>\r\n    <div class=\"login-page__btn\">\r\n      <button\r\n        class=\"btn btn-primary btn-lg\"\r\n        type=\"button\"\r\n        (click)=\"login('buttonClick')\">\r\n        LOGIN\r\n      </button>\r\n    </div>\r\n    <div class=\"login-page__links\">\r\n      <div class=\"login-page__link\">Passwort vergessen?</div>\r\n      <div class=\"login-page__link\">Zugang beantragen</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".login-page {\n  z-index: 1000;\n  position: fixed;\n  top: 0px;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #B0DD81;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23aaaaaa' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"); }\n  .login-page__btn {\n    padding-top: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .login-page__main-title {\n    height: 100px;\n    margin: 0 auto;\n    padding: 0;\n    background-image: url('Logo_XXGEN.95c620c1fae2ca782e72.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center; }\n  .login-page__links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    color: white;\n    position: absolute;\n    right: 0;\n    bottom: -30px; }\n  .login-page__link {\n    padding-right: 16px;\n    color: #555555; }\n  .login-page__link:hover {\n      text-decoration: underline;\n      cursor: pointer; }\n  .login-page__title {\n    font-size: 25px;\n    font-weight: bold;\n    margin: 0;\n    padding-bottom: 16px; }\n  .login-page__form {\n    background: white;\n    -webkit-box-shadow: 0px 0px 20px 0 #3d5f1a;\n            box-shadow: 0px 0px 20px 0 #3d5f1a;\n    position: relative;\n    top: 45%;\n    margin: auto;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding: 16px;\n    min-width: 40%;\n    max-width: 700px;\n    border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.login = function (event) {
        if (event.keyCode === 13 || event === 'buttonClick') {
            if (this.loginForm.controls['username']['value'] === 'Exxeta' && this.loginForm.controls['password']['value'] === 'BibGen2018') {
                this.wrongUserData = false;
                this.router.navigate(['/products']);
            }
            else {
                this.wrongUserData = true;
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService() {
        var _this = this;
        this.userObjectChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.userObject = {
            id: 'UID1',
            username: 'ThomasMueller',
            name: 'Thomas Müller',
            company: 'Bankhaus Frankfurt AG',
            phone: '+49 000 000 01',
            email: 'thomas.mueller@bhf-ag.de'
        };
        this.userObjectChanged.subscribe(function (value) {
            _this.userObject = value;
        });
    }
    AuthenticationService.prototype.getUserObject = function () {
        return this.userObject;
    };
    AuthenticationService.prototype.setUserObject = function (obj) {
        this.userObject.name = obj.name;
        this.userObject.company = obj.company;
        this.userObject.phone = obj.phone;
        this.userObject.email = obj.email;
        this.userObjectChanged.next(this.userObject);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/nav-bar/avatar/avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar\" (click)=\"menuOpen = !menuOpen\" [ngClass]=\"{'avatar--open': menuOpen}\">\r\n  <div class=\"avatar__content\">\r\n    <div class=\"avatar__name\">{{userObject.name}}</div>\r\n    <div class=\"avatar__company\">{{userObject.company}}</div>\r\n  </div>\r\n  <div class=\"avatar__image\" (click)=\"menuOpen = !menuOpen\"></div>\r\n  <div class=\"avatar__arrow\">\r\n    <i class=\"fa fa-chevron-right\"></i>\r\n  </div>\r\n  <div class=\"avatar__btns\">\r\n    <div class=\"avatar__btn\">\r\n      <div class=\"avatar__btn-icon\"><i class=\"fa fa-user\"></i></div>\r\n      <div class=\"avatar__btn-text\" (click)=\"openProfile()\">Profil</div>\r\n    </div>\r\n    <div class=\"avatar__btn\">\r\n      <div class=\"avatar__btn-icon\"><i class=\"fa fa-cog\"></i></div>\r\n      <div class=\"avatar__btn-text\">Einstellungen</div>\r\n    </div>\r\n    <div class=\"avatar__btn\" (click) = \"logout()\">\r\n      <div class=\"avatar__btn-icon\"><i class=\"fa fa-sign-out-alt\"></i></div>\r\n      <div class=\"avatar__btn-text\">Ausloggen</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/avatar/avatar.component.scss":
/***/ (function(module, exports) {

module.exports = ".avatar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 32px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform: translateX(300px);\n          transform: translateX(300px);\n  -webkit-transition: -webkit-transform 300ms;\n  transition: -webkit-transform 300ms;\n  transition: transform 300ms;\n  transition: transform 300ms, -webkit-transform 300ms; }\n  .avatar:hover {\n    cursor: pointer; }\n  .avatar--open {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); }\n  .avatar--open .avatar__arrow {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n  .avatar__content {\n    padding-right: 16px;\n    text-align: right; }\n  .avatar__content:hover {\n      cursor: pointer; }\n  .avatar__company {\n    font-weight: bold;\n    font-size: 10px;\n    color: #71af2f; }\n  .avatar__image {\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    background-image: url('profile.02f26c6b9a8a06b96cf3.jpg');\n    background-size: cover; }\n  .avatar__image:hover {\n      cursor: pointer; }\n  .avatar__arrow {\n    width: 30px;\n    text-align: center;\n    -webkit-transition: -webkit-transform 300ms;\n    transition: -webkit-transform 300ms;\n    transition: transform 300ms;\n    transition: transform 300ms, -webkit-transform 300ms;\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  .avatar__btns {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 50px; }\n  .avatar__btn {\n    width: 100px;\n    text-align: center;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .avatar__btn:hover {\n      cursor: pointer;\n      background: #71af2f;\n      color: white; }\n  .avatar__btn-icon {\n    height: 20px; }\n  .avatar__btn-text {\n    height: 20px;\n    font-size: 10px;\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/nav-bar/avatar/avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvatarComponent = (function () {
    function AvatarComponent(router, authService, route) {
        this.router = router;
        this.authService = authService;
        this.route = route;
    }
    AvatarComponent.prototype.logout = function () {
        this.router.navigate(['/']);
    };
    AvatarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObject = this.authService.userObject;
        this.authService.userObjectChanged.subscribe(function (value) {
            _this.userObject = value;
        });
    };
    AvatarComponent.prototype.openProfile = function () {
        this.router.navigate(['profile/' + this.userObject.id], { relativeTo: this.route });
    };
    AvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-avatar',
            template: __webpack_require__("./src/app/nav-bar/avatar/avatar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/avatar/avatar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"logo\"></div>\r\n  <div class=\"navbar__meta\">\r\n    <app-avatar></app-avatar>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background: white;\n  margin: 0 -15px;\n  padding: 0 30px;\n  height: 50px;\n  position: fixed;\n  width: 100vw;\n  z-index: 100;\n  -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n          box-shadow: 0px 0px 20px 0 #aaa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .navbar__meta {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%; }\n  .navbar__settings {\n    padding-left: 16px;\n    padding-right: 16px;\n    border-left: 1px solid #dddddd;\n    border-right: 1px solid #dddddd;\n    height: 100%;\n    line-height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .navbar__settings:hover {\n      cursor: pointer;\n      color: white;\n      background: #71af2f; }\n  .navbar__settings-icon {\n    padding-right: 4px; }\n  .logo {\n  height: 100%;\n  width: 50%;\n  margin: 0;\n  padding: 0;\n  background-image: url('Logo_XXGEN.95c620c1fae2ca782e72.png');\n  background-size: contain;\n  background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-editor/bib-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bib-document\">\r\n  <div class=\"bib-document__marker-page-one\"></div>\r\n  <div class=\"bib-document__marker-page-two\"></div>\r\n  <div class=\"bib-document__marker-page-three\"></div>\r\n  <!--<img class=\"bib-document__logo\" src=\"../../../assets/img/EXXETA-Logo-RGB.png\"/>-->\r\n  <h2 class=\"bib-document__title\">Basisinformationsblatt</h2>\r\n\r\n  <app-bib-section [title]=\"bibSections[0].title\">\r\n    <app-bib-section-content [availableContent]=\"getContentForId(bibSections[0].id)\" [readOnly]=\"true\"></app-bib-section-content>\r\n  </app-bib-section>\r\n\r\n  <app-bib-section [title]=\"bibSections[1].title\">\r\n    <app-bib-product-info [product]=\"getProductInfo()\"></app-bib-product-info>\r\n  </app-bib-section>\r\n\r\n\r\n  <app-bib-section [title]=\"bibSections[2].title\">\r\n    <app-bib-sub-section [title]=\"bibSections[2].children[0].title\">\r\n      <app-bib-section-content\r\n        [availableContent]=\"getContentForId(bibSections[2].children[0].id)\"\r\n        [inSubsection]=\"true\"\r\n        [readOnly]=\"false\"\r\n        (contentChanged)=\"onContentChanged($event)\">\r\n      </app-bib-section-content>\r\n    </app-bib-sub-section>\r\n\r\n    <app-bib-sub-section [title]=\"bibSections[2].children[1].title\">\r\n      <app-bib-section-content\r\n        [availableContent]=\"getContentForId(bibSections[2].children[1].id)\"\r\n        [inSubsection]=\"true\"\r\n        [readOnly]=\"false\"\r\n        (contentChanged)=\"onContentChanged($event)\"></app-bib-section-content>\r\n      <app-bib-product-calc-data *ngIf=\"showProductInfo\" [productCalcData]=\"getProductInformationData()\"></app-bib-product-calc-data>\r\n    </app-bib-sub-section>\r\n\r\n    <app-bib-sub-section [title]=\"bibSections[2].children[2].title\">\r\n      <app-bib-section-content\r\n        [availableContent]=\"getContentForId(bibSections[2].children[2].id)\"\r\n        [inSubsection]=\"true\"\r\n        [readOnly]=\"false\"\r\n        (contentChanged)=\"onContentChanged($event)\"></app-bib-section-content>\r\n    </app-bib-sub-section>\r\n\r\n    <app-bib-sub-section [title]=\"bibSections[2].children[3].title\">\r\n      <app-bib-section-content\r\n        [availableContent]=\"getContentForId(bibSections[2].children[3].id)\"\r\n        [inSubsection]=\"true\"\r\n        [readOnly]=\"false\"\r\n        (contentChanged)=\"onContentChanged($event)\"></app-bib-section-content>\r\n    </app-bib-sub-section>\r\n  </app-bib-section>\r\n\r\n\r\n  <app-bib-section [title]=\"bibSections[3].title\">\r\n    <app-bib-sub-section [title]=\"bibSections[3].children[0].title\">\r\n      <app-bib-risk-indicator [placeholder]=\"true\">\r\n        <app-bib-section-content\r\n          [availableContent]=\"getContentForId(bibSections[3].children[2].id)\"\r\n          [inSubsection]=\"true\"\r\n          [readOnly]=\"true\"></app-bib-section-content>\r\n      </app-bib-risk-indicator>\r\n    </app-bib-sub-section>\r\n    <app-bib-section-content\r\n      [availableContent]=\"getContentForId(bibSections[3].children[0].id)\"\r\n      [readOnly]=\"true\">\r\n    </app-bib-section-content>\r\n    <app-bib-sub-section [vertical]=\"true\" [title]=\"bibSections[3].children[1].title\">\r\n      <app-bib-perf-szenarios></app-bib-perf-szenarios>\r\n    </app-bib-sub-section>\r\n    <app-bib-section-content\r\n      [availableContent]=\"getContentForId(bibSections[3].children[1].id)\"\r\n      [readOnly]=\"true\">\r\n    </app-bib-section-content>\r\n  </app-bib-section>\r\n\r\n\r\n\r\n  <app-bib-section [title]=\"bibSections[4].title\">\r\n    <app-bib-section-content\r\n      [availableContent]=\"getContentForId(bibSections[4].id)\"\r\n      [readOnly]=\"true\"></app-bib-section-content>\r\n  </app-bib-section>\r\n\r\n\r\n  <app-bib-section [title]=\"bibSections[5].title\">\r\n    <app-bib-section-content\r\n      [availableContent]=\"getContentForId(bibSections[5].id)\"\r\n      [readOnly]=\"true\"></app-bib-section-content>\r\n    <app-bib-sub-section [vertical]=\"true\" [title]=\"bibSections[5].children[0].title\">\r\n      <app-bib-section-content\r\n        [availableContent]=\"getContentForId(bibSections[5].children[0].id)\"\r\n        [inSubsection]=\"true\"\r\n        [readOnly]=\"true\"></app-bib-section-content>\r\n      <app-simple-table\r\n        [singleRowTable]=\"true\"\r\n        [rows]=\"rowsTimeline\"\r\n        [nameWidth]=\"'200'\"\r\n        [headerName]=\"{top: 'Anlage 10000 EUR', down: ''}\"\r\n        [valueHeaders]=\"valueHeaders\"\r\n        [valueColumnWidth]=\"'180'\">\r\n      </app-simple-table>\r\n    </app-bib-sub-section>\r\n    <app-bib-sub-section [vertical]=\"true\" [title]=\"bibSections[5].children[1].title\">\r\n      <app-bib-section-content\r\n        [availableContent]=\"getContentForId(bibSections[5].children[1].id)\"\r\n        [inSubsection]=\"true\"\r\n        [readOnly]=\"true\"></app-bib-section-content>\r\n      <app-simple-table\r\n        [rows]=\"rowsCosts\"\r\n        [nameWidth]=\"'120'\"\r\n        [valueColumnWidth]=\"'160'\"\r\n        [valueColumnCentered]=\"true\"\r\n        [subrowNameWidth]=\"'100'\"\r\n        [headerName]=\"{top: 'Diese Tabelle zeigt die Auswirkungen auf die Rendite pro Jahr', down: 'Anlage 10000 EUR'}\">\r\n      </app-simple-table>\r\n    </app-bib-sub-section>\r\n  </app-bib-section>\r\n\r\n  <app-bib-section [title]=\"bibSections[6].title\">\r\n    <app-bib-section-content\r\n      [availableContent]=\"getContentForId(bibSections[6].id)\"\r\n      [readOnly]=\"false\"\r\n      (contentChanged)=\"onContentChanged($event)\"></app-bib-section-content>\r\n  </app-bib-section>\r\n\r\n  <div class=\"section7\">\r\n    <span class=\"section7__item\"><b>Börsennotierung:</b> {{boersennotierung}}</span>\r\n    <span class=\"section7__item\"><b>Letzter Handelstag:</b> {{letzterHandelstag | date:'dd.MM.yyyy'}}</span>\r\n  </div>\r\n\r\n  <app-bib-section [title]=\"bibSections[7].title\">\r\n    <app-bib-section-content\r\n      [availableContent]=\"getContentForId(bibSections[7].id)\"\r\n      [readOnly]=\"false\"\r\n      (contentChanged)=\"onContentChanged($event)\"></app-bib-section-content>\r\n  </app-bib-section>\r\n\r\n  <app-bib-section [title]=\"bibSections[8].title\">\r\n    <app-bib-section-content\r\n      [availableContent]=\"getContentForId(bibSections[8].id)\"\r\n      [readOnly]=\"false\"\r\n      (contentChanged)=\"onContentChanged($event)\"></app-bib-section-content>\r\n  </app-bib-section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-editor/bib-editor.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.bib-document {\n  padding: 0.5cm;\n  position: relative;\n  min-height: 89.1cm;\n  background: white;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n          box-shadow: 0px 0px 20px 0 #aaa;\n  font-size: 12px;\n  width: 21.0cm;\n  margin: 50px auto; }\n.bib-document__logo {\n    position: absolute;\n    right: 1cm;\n    top: 1cm;\n    max-width: 120px;\n    max-height: 30px; }\n.bib-document__title {\n    padding: 8px;\n    margin: 0;\n    font-size: 20px; }\n.bib-document__marker-page-one, .bib-document__marker-page-two, .bib-document__marker-page-three {\n    position: absolute;\n    width: 100%;\n    left: 0;\n    border-bottom: 1px dashed red; }\n.bib-document__marker-page-one:before, .bib-document__marker-page-two:before, .bib-document__marker-page-three:before {\n      color: red;\n      position: absolute;\n      width: 200px;\n      text-align: right;\n      right: 22.0cm;\n      top: -8px; }\n.bib-document__marker-page-one {\n    top: 29.7cm; }\n.bib-document__marker-page-one:before {\n      content: 'Ende Seite 1'; }\n.bib-document__marker-page-two {\n    top: 59.4cm; }\n.bib-document__marker-page-two:before {\n      content: 'Ende Seite 2'; }\n.bib-document__marker-page-three {\n    top: 89.1cm; }\n.bib-document__marker-page-three:before {\n      content: 'Maximal zulässige BIB-Länge'; }\n.section7 {\n  margin: 5px;\n  padding-left: 5px; }\n.section7__item {\n    margin-right: 150px; }\n.section7 b {\n    color: #71af2f; }\n@media print {\n  .bib-document {\n    width: auto; } }\n"

/***/ }),

/***/ "./src/app/product-management/bib-editor/bib-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bib_structure_service__ = __webpack_require__("./src/app/product-management/bib-editor/bib-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_types_service__ = __webpack_require__("./src/app/product-management/product/product-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cost_service__ = __webpack_require__("./src/app/product-management/cost.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BibEditorComponent = (function () {
    function BibEditorComponent(bibService, productService, productTypeService, costService) {
        this.bibService = bibService;
        this.productService = productService;
        this.productTypeService = productTypeService;
        this.costService = costService;
        this.bibSections = [];
        this.rowsTimeline = [
            {
                name: 'Gesamtkosten',
                values: [
                    {
                        values: ['---', '---'],
                        // values: [10193.23, 13.23, 102852222.23],
                        unit: 'EUR',
                        name: 'Was Sie nach Abzug der Kosten erhalten könnten'
                    }
                ]
            },
            {
                name: 'Auswirkung auf die Rendite pro Jahr',
                values: [
                    {
                        values: ['---', '---'],
                        // values: [1.23, 0.64, 0.56],
                        unit: '%',
                        name: 'Jährliche Durchschnittsrendite'
                    }
                ]
            }
        ];
        this.rowsCosts = [];
        this.upperSubRowUnit = 'EUR';
        this.lowerSubRowUnit = '%';
        this.upperSubRowValues = [
            [226.00, 226.00, 34.00],
            [2.31, 0.76, 0.28]
        ];
        this.showProductInfo = true;
    }
    BibEditorComponent.prototype.getContentForId = function (id) {
        return this.contents[id.toString()];
    };
    BibEditorComponent.prototype.setContentForId = function (id, content) {
        this.contents[id.toString()] = content;
        this.productService.getProduct().setBibContent(this.contents);
    };
    BibEditorComponent.prototype.getProductInfo = function () {
        return this.productService.getProduct();
    };
    BibEditorComponent.prototype.getProductInformationData = function () {
        return this.productService.getProduct().getProductInformationData();
    };
    BibEditorComponent.prototype.ngOnInit = function () {
        this.bibSections = this.bibService.getStructure('Bankhaus Frankfurt AG');
        this.showProductInfo = this.productService.getProductInfoVisibility();
        this.letzterHandelstag = this.productService.getSpecificValue(this.getProductInformationData(), 'letzerHandelstag');
        this.boersennotierung = this.productService.getSpecificValue(this.getProductInformationData(), 'boersennotierung');
        this.setCostsTable();
        this.setRiskIndicatorText();
        this.setPerformanceScenarioText();
    };
    BibEditorComponent.prototype.onContentChanged = function (content) {
        console.log('New content: ', content);
        this.setContentForId(content.id, content.value);
    };
    BibEditorComponent.prototype.getRiskNumber = function () {
        return '2';
    };
    BibEditorComponent.prototype.setRiskIndicatorText = function () {
        var updatedContent = __assign({}, this.contents);
        updatedContent[this.bibSections[3].children[0].id][0].value = this.productTypeService.generateRiskIndicatorText(this.getRiskNumber(), this.productService.getProduct());
        updatedContent[this.bibSections[3].children[2].id][0].value = this.productTypeService.generateRiskIndicatortextBox(this.productService.getProduct());
        updatedContent['34'][0].value = (updatedContent['34'][0].value).substring(0, updatedContent['34'][0].value.length - 2) +
            this.getRiskNumber();
        this.contents = __assign({}, updatedContent);
    };
    BibEditorComponent.prototype.setPerformanceScenarioText = function () {
        var updatedContent = __assign({}, this.contents);
        updatedContent[this.bibSections[3].children[1].id][0].value = this.productTypeService.generatePerformanceScenarioText(this.productService.getProduct());
        this.contents = __assign({}, updatedContent);
    };
    BibEditorComponent.prototype.setCostsTable = function () {
        var distributionCostsIncluded = this.productService.getSpecificValue(this.productService.getProduct().getProductCalculationData(), 'includedCostsVertrieb');
        // TODO get calculation results here
        var result = {
            entryCost: [this.productService.getSpecificValue(this.productService.getProduct().getProductCalculationData(), 'entryCost') * 0.01 + ' %'],
            exitCost: [this.productService.getSpecificValue(this.productService.getProduct().getProductCalculationData(), 'exitCost') * 0.01 + ' %'],
            portfolioTransactionCost: [this.productService.getSpecificValue(this.productService.getProduct().getProductCalculationData(), 'portfolioTransactionCost') * 0.01 + ' %'],
            otherRunningCosts: [this.productService.getSpecificValue(this.productService.getProduct().getProductCalculationData(), 'otherRunningCosts') * 0.01 + ' %'],
        };
        this.rowsCosts = this.productTypeService.generateCostRowsGuaranteeBonds(result, distributionCostsIncluded);
        var middleColumnCostTimeline = this.productService.getSpecificValue(this.productService.getProduct().getProductCalculationData(), 'holdingPeriod');
        this.valueHeaders = this.costService.calculateValueHeaders(this.productService.getProduct());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('contents'),
        __metadata("design:type", Object)
    ], BibEditorComponent.prototype, "contents", void 0);
    BibEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-editor',
            template: __webpack_require__("./src/app/product-management/bib-editor/bib-editor.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-editor/bib-editor.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__bib_structure_service__["a" /* BibStructureService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bib_structure_service__["a" /* BibStructureService */],
            __WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_3__product_product_types_service__["a" /* ProductTypesService */],
            __WEBPACK_IMPORTED_MODULE_4__cost_service__["a" /* CostService */]])
    ], BibEditorComponent);
    return BibEditorComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-editor/bib-structure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibStructureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BibStructureService = (function () {
    function BibStructureService() {
    }
    BibStructureService.prototype.getStructure = function (producer) {
        return [
            {
                id: 1,
                title: 'Zweck'
            },
            {
                id: 2,
                title: 'Produkt'
            },
            {
                id: 3,
                title: 'Um welche Art von Produkt handelt es sich?',
                parent: true,
                children: [
                    {
                        id: 31,
                        title: 'Art'
                    },
                    {
                        id: 32,
                        title: 'Ziele'
                    },
                    {
                        id: 33,
                        title: ''
                    },
                    {
                        id: 34,
                        title: 'Kleinanleger- Zielgruppe'
                    }
                ]
            },
            {
                id: 4,
                title: 'Welche Risiken bestehen und was könnte ich im Gegenzug dafür bekommen?',
                parent: true,
                children: [
                    {
                        id: 41,
                        title: 'Risikoindikator'
                    },
                    {
                        id: 42,
                        title: 'Performance Szenarien'
                    },
                    {
                        id: 43,
                        title: 'Riskindikator Warntext'
                    }
                ]
            },
            {
                id: 5,
                title: "Was geschieht wenn die Emittentin nicht in der Lage ist, die Auszahlung vorzunehmen?"
            },
            {
                id: 6,
                title: 'Welche Kosten enstehen?',
                parent: true,
                children: [
                    {
                        id: 61,
                        title: 'Kosten im Zeitverlauf'
                    },
                    {
                        id: 62,
                        title: 'Zusammensetzung der Kosten'
                    }
                ]
            },
            {
                id: 7,
                title: 'Wie lange sollte ich die Anlage halten, und kann ich vorzeitig Geld entnehmen?'
            },
            {
                id: 8,
                title: 'Wie kann ich mich beschweren?'
            },
            {
                id: 9,
                title: 'Sonstige zweckdienliche Angaben'
            },
        ];
    };
    BibStructureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BibStructureService);
    return BibStructureService;
}());



/***/ }),

/***/ "./src/app/product-management/bib-perf-szenarios/bib-perf-szenarios.component.html":
/***/ (function(module, exports) {

module.exports = "<app-simple-table\r\n  [rows]=\"rows\"\r\n  [nameWidth]=\"'100'\"\r\n  [subrowNameWidth]=\"subrowNameWidth\"\r\n  [valueColumnWidth]=\"valueColumnWidth\"\r\n  [headerName]=\"{top: 'Anlage 10000 EUR', down: 'Szenarien'}\"\r\n  [valueHeaders]=\"valueHeaders\"\r\n  [valueColumnRightAlign]=\"true\">\r\n</app-simple-table>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-perf-szenarios/bib-perf-szenarios.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/bib-perf-szenarios/bib-perf-szenarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibPerfSzenariosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__risk_service__ = __webpack_require__("./src/app/product-management/risk.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BibPerfSzenariosComponent = (function () {
    function BibPerfSzenariosComponent(productsService, riskService) {
        this.productsService = productsService;
        this.riskService = riskService;
        this.rows = [];
        this.valueColumnWidth = '120';
        this.subrowNameWidth = '240';
        this.valueHeaders = [
            { top: '1 Jahr', down: '' },
            { top: '2 Jahr', down: '' },
            { top: '14.02.2019', down: '(Empfohlene Haltedauer)' },
        ];
    }
    BibPerfSzenariosComponent.prototype.ngOnInit = function () {
        this.product = this.productsService.getProduct();
        this.entryCost = Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'entryCost'));
        this.exitCost = Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'exitCost'));
        this.portfolioTransactionCost =
            Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'portfolioTransactionCost'));
        this.otherRunningCosts =
            Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'otherRunningCosts'));
        var productCalcData = this.product.getProductCalculationData();
        var term = this.productsService.getSpecificValue(productCalcData, 'term');
        var holdingPeriod = this.productsService.getSpecificValue(productCalcData, 'holdingPeriod');
        this.holdingPeriod = holdingPeriod;
        if (holdingPeriod < 2) {
            this.valueHeaders = [
                { top: new Date(term).toLocaleDateString('de'), down: '(Empfohlene Haltedauer)' },
            ];
            this.valueColumnWidth = '180';
            this.subrowNameWidth = '240';
        }
        else if (holdingPeriod > 2) {
            this.valueHeaders = [
                { top: '1 Jahr', down: '' },
                { top: '2 Jahr', down: '' },
                { top: new Date(term).toLocaleDateString('de'), down: '(Empfohlene Haltedauer)' },
            ];
            this.valueColumnWidth = '120';
            this.subrowNameWidth = '240';
        }
        else {
            this.valueHeaders = [
                { top: '1 Jahr', down: '' },
                { top: new Date(term).toLocaleDateString('de'), down: '(Empfohlene Haltedauer)' },
            ];
            this.valueColumnWidth = '160';
            this.subrowNameWidth = '240';
        }
        var values = this.riskService.calculateValues(this.product);
        var percentages = this.riskService.calculatePercentages(this.product);
        // Set row values
        this.rows = [
            {
                name: 'Stressszenario',
                values: [
                    {
                        values: values[0],
                        unit: 'EUR',
                        name: 'Was Sie nach Abzug der Kosten erhalten könnten'
                    },
                    {
                        values: percentages[0],
                        unit: '%',
                        name: 'Jährliche Durchschnittsrendite'
                    }
                ]
            },
            {
                name: 'Pessimistisches Szenario',
                values: [
                    {
                        values: values[1],
                        unit: 'EUR',
                        name: 'Was Sie nach Abzug der Kosten erhalten könnten'
                    },
                    {
                        values: percentages[1],
                        unit: '%',
                        name: 'Jährliche Durchschnittsrendite'
                    }
                ]
            },
            {
                name: 'Mittleres Szenario',
                values: [
                    {
                        values: values[2],
                        unit: 'EUR',
                        name: 'Was Sie nach Abzug der Kosten erhalten könnten'
                    },
                    {
                        values: percentages[2],
                        unit: '%',
                        name: 'Jährliche Durchschnittsrendite'
                    }
                ]
            },
            {
                name: 'Optimistisches Szenario',
                values: [
                    {
                        values: values[3],
                        unit: 'EUR',
                        name: 'Was Sie nach Abzug der Kosten erhalten könnten'
                    },
                    {
                        values: percentages[3],
                        unit: '%',
                        name: 'Jährliche Durchschnittsrendite'
                    }
                ]
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibPerfSzenariosComponent.prototype, "holdingPeriod", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibPerfSzenariosComponent.prototype, "perfomanceSzenarios", void 0);
    BibPerfSzenariosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-perf-szenarios',
            template: __webpack_require__("./src/app/product-management/bib-perf-szenarios/bib-perf-szenarios.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-perf-szenarios/bib-perf-szenarios.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_2__risk_service__["a" /* RiskService */]])
    ], BibPerfSzenariosComponent);
    return BibPerfSzenariosComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-product-calc-data/bib-product-calc-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bib-product-calcData\" *ngIf=\"productCalcData.length\">\r\n  <div *ngFor=\"let entry of productCalcData\">\r\n    <div class=\"bib-product-calcData__entry\" *ngIf=\"entry.value && entry.name!== 'letzerHandelstag'  && entry.name!== 'boersennotierung'\">\r\n      <div class=\"bib-product-calcData__label\">{{entry.label}}</div>\r\n      <div *ngIf=\"entry.type === 'date' \">{{ entry.value | date: 'dd.MM.yyyy' }}</div>\r\n      <div *ngIf=\"entry.type != 'date' \">{{entry.value}}</div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"bib-product-calcData__entry\">\r\n    <div class=\"bib-product-calcData__label\">Referenzstand</div>\r\n    <div> Der Schlussbestand des {{underlying}} gemäß der {{referenceAuthority}}</div>\r\n  </div>\r\n  <div class=\"bib-product-calcData__entry\">\r\n    <div class=\"bib-product-calcData__label\">Endgültiger Referenzstand</div>\r\n    <div> Der Referenzstand am {{valuationDate | date: 'dd.MM.yyyy' }}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-product-calc-data/bib-product-calc-data.component.scss":
/***/ (function(module, exports) {

module.exports = ".bib-product-calcData {\n  padding: 8px 0;\n  padding-top: 0;\n  margin-top: 8px; }\n  .bib-product-calcData:first-child {\n    border-top: 1px solid #71af2f; }\n  .bib-product-calcData__entry {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 2px 0;\n    border-bottom: 1px solid #71af2f; }\n  .bib-product-calcData__label {\n    font-weight: bold;\n    color: #71af2f;\n    margin-right: 16px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 200px;\n            flex: 0 0 200px; }\n"

/***/ }),

/***/ "./src/app/product-management/bib-product-calc-data/bib-product-calc-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibProductCalcDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BibProductCalcDataComponent = (function () {
    function BibProductCalcDataComponent(productsService) {
        this.productsService = productsService;
    }
    BibProductCalcDataComponent.prototype.ngOnInit = function () {
        var data = this.productCalcData;
        this.underlying = this.productsService.getSpecificValue(data, 'underlying');
        this.referenceAuthority = this.productsService.getSpecificValue(data, 'referenceAuthority');
        this.valuationDate = this.productsService.getSpecificValue(data, 'valuationDate');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibProductCalcDataComponent.prototype, "productCalcData", void 0);
    BibProductCalcDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-product-calc-data',
            template: __webpack_require__("./src/app/product-management/bib-product-calc-data/bib-product-calc-data.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-product-calc-data/bib-product-calc-data.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], BibProductCalcDataComponent);
    return BibProductCalcDataComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-product-info/bib-product-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bib-product-info\">\r\n  <div class=\"row bib-product-info__row\">\r\n    <div class=\"col\">\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.productName\">\r\n        <div class=\"bib-product-info__label\">Produktname:</div>\r\n        <div>{{product.productName}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.productId\">\r\n        <div class=\"bib-product-info__label\">Produktkennnummer:</div>\r\n        <div>{{product.productId}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row bib-product-info__row\">\r\n    <div class=\"col\">\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.producer\">\r\n        <div class=\"bib-product-info__label\">Hersteller:</div>\r\n        <div>{{product.producer}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.phone\">\r\n        <div class=\"bib-product-info__label\">Telefonnummer:</div>\r\n        <div>{{product.phone}}</div>\r\n      </div>\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.email\">\r\n        <div class=\"bib-product-info__label\">E-Mail:</div>\r\n        <div>{{product.email}}</div>\r\n      </div>\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.web\">\r\n        <div class=\"bib-product-info__label\">Website:</div>\r\n        <div>{{product.web}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row bib-product-info__row\">\r\n    <div class=\"col\">\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.agency\">\r\n        <div class=\"bib-product-info__label\">Zuständige Behörde:</div>\r\n        <div>{{product.agency}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row bib-product-info__row\">\r\n    <div class=\"col\">\r\n      <div class=\"bib-product-info__entry\" *ngIf=\"product.creationDate\">\r\n        <div class=\"bib-product-info__label\">Erstelldatum:</div>\r\n        <div>{{product.creationDate | date:'dd.MM.yyyy'}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bib-product-info__info-phone\">Weitere Informationen erhalten Sie unter der Telefonnummer {{product.phone}}</div>\r\n  <div class=\"bib-product-info__warn-message\">Sie sind im Begriff ein Produkt zu erwerben, das nicht einfach ist und schwer zu verstehen sein kann.</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-product-info/bib-product-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".bib-product-info {\n  padding: 0 16px; }\n  .bib-product-info__row {\n    padding: 2px 0;\n    border-bottom: 1px solid #71af2f; }\n  .bib-product-info__entry {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .bib-product-info__label {\n    font-weight: bold;\n    color: #71af2f;\n    margin-right: 16px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 150px;\n            flex: 0 0 150px; }\n  .bib-product-info__warn-message {\n    font-weight: bold;\n    padding: 4px 0; }\n  .bib-product-info__info-phone {\n    font-weight: bold;\n    padding: 4px 0;\n    color: #090f04;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/product-management/bib-product-info/bib-product-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibProductInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("./src/app/product-management/models/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BibProductInfoComponent = (function () {
    function BibProductInfoComponent() {
    }
    BibProductInfoComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */])
    ], BibProductInfoComponent.prototype, "product", void 0);
    BibProductInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-product-info',
            template: __webpack_require__("./src/app/product-management/bib-product-info/bib-product-info.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-product-info/bib-product-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BibProductInfoComponent);
    return BibProductInfoComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-risk-indicator/bib-risk-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"risk-indicator\">\r\n    <div class=\"risk-indicator__numbers\">\r\n      <div class=\"risk-indicator__number\" *ngFor=\"let num of [1,2,3,4,5,6,7]\"\r\n           [ngClass]=\"{'risk-indicator__number--active': riskNumber === num}\">\r\n        {{num}}\r\n      </div>\r\n    </div>\r\n    <div class=\"risk-indicator__arrowWithText\">\r\n      <div class=\"risk-indicator__arrow\"></div>\r\n      <div class=\"risk-indicator__lowRisk\">niedriges Risiko</div>\r\n      <div class=\"risk-indicator__highRisk\">hohes Risiko</div>\r\n    </div>\r\n    <div class=\"risk-indicator__warning\">\r\n      <div class=\"risk-indicator__warningIcon\"></div>\r\n      <div class=\"risk-indicator__warningText\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n    <!-- Overlay element for placeholder -->\r\n    <div class=\"risk-indicator__overlay\" [ngClass]=\"{'risk-indicator__overlay--show': placeholder}\">\r\n      <div class=\"risk-indicator__overlay-bg\"></div>\r\n      <div class=\"risk-indicator__overlay-content\">\r\n        Platzhalter\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-risk-indicator/bib-risk-indicator.component.scss":
/***/ (function(module, exports) {

module.exports = ".risk-indicator {\n  background: #eee;\n  min-height: 200px;\n  position: relative;\n  width: 100%; }\n  .risk-indicator__numbers {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .risk-indicator__number {\n    height: 40px;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 1.5rem;\n    text-align: center;\n    line-height: 40px; }\n  .risk-indicator__number--active {\n      background: #71af2f;\n      color: white;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px; }\n  .risk-indicator__arrowWithText {\n    position: relative; }\n  .risk-indicator__lowRisk {\n    position: absolute;\n    left: 10%;\n    top: 20px;\n    font-weight: bold; }\n  .risk-indicator__highRisk {\n    position: absolute;\n    right: 10%;\n    top: 20px;\n    font-weight: bold; }\n  .risk-indicator__arrow {\n    position: relative;\n    height: 0px;\n    border-bottom: 1px solid black;\n    background: black;\n    width: 80%;\n    margin-top: 10px;\n    margin-left: 10%; }\n  .risk-indicator__arrow:after {\n      content: '';\n      position: absolute;\n      top: -10px;\n      width: 20px;\n      height: 10px;\n      background: transparent;\n      border-bottom: 10px solid transparent;\n      border-top: 10px solid transparent;\n      border-right: 20px solid black; }\n  .risk-indicator__arrow:before {\n      content: '';\n      position: absolute;\n      top: -10px;\n      right: 0px;\n      width: 20px;\n      height: 10px;\n      background: transparent;\n      border-bottom: 10px solid transparent;\n      border-top: 10px solid transparent;\n      border-left: 20px solid black; }\n  .risk-indicator__warning {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .risk-indicator__warningText {\n    width: 100%;\n    margin-left: 100px;\n    margin-top: 40px;\n    padding: 16px; }\n  .risk-indicator__warningIcon {\n    position: relative; }\n  .risk-indicator__warningIcon:before {\n      content: '';\n      position: absolute;\n      left: 10px;\n      top: 60px;\n      width: 40px;\n      height: 50px;\n      background: transparent;\n      border-left: 40px solid transparent;\n      border-right: 40px solid transparent;\n      border-bottom: 60px solid #ffae3e; }\n  .risk-indicator__warningIcon:after {\n      content: '!';\n      position: absolute;\n      left: 45px;\n      top: 55px;\n      color: black;\n      text-align: left;\n      font-size: 2rem;\n      line-height: 80px; }\n  .risk-indicator__overlay {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n  .risk-indicator__overlay--show {\n      display: block; }\n  .risk-indicator__overlay-bg {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: white;\n    opacity: 0.7; }\n  .risk-indicator__overlay-content {\n    width: 100%;\n    position: absolute;\n    left: 0%;\n    top: 40%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 10;\n    display: inline-block;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: red;\n    font-size: xx-large;\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2); }\n"

/***/ }),

/***/ "./src/app/product-management/bib-risk-indicator/bib-risk-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibRiskIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BibRiskIndicatorComponent = (function () {
    function BibRiskIndicatorComponent() {
        this.placeholder = false;
        this.riskNumber = 2;
    }
    BibRiskIndicatorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibRiskIndicatorComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibRiskIndicatorComponent.prototype, "riskNumber", void 0);
    BibRiskIndicatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-risk-indicator',
            template: __webpack_require__("./src/app/product-management/bib-risk-indicator/bib-risk-indicator.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-risk-indicator/bib-risk-indicator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BibRiskIndicatorComponent);
    return BibRiskIndicatorComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-section-content/bib-section-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-content\" [ngClass]=\"{'text-content--space-around': !inSubsection}\">\r\n  <div class=\"text-content__content\" [ngClass]=\"{'text-content__content--no-hover': (editMode || readOnly) }\">\r\n    <div *ngIf=\"!editMode || readOnly\">\r\n      <span [innerHTML]=\"parsedContent.value\"></span>\r\n    </div>\r\n    <div *ngIf=\"editMode && !readOnly\">\r\n      <textarea class=\"form-control text-content__edit-input\" type=\"text\" [(ngModel)]=\"editedText.value\"></textarea>\r\n      <div class=\"text-content__edit-btns\">\r\n        <button class=\"btn btn-sm btn-primary\" (click)=\"cancelEditMode()\">Verwerfen</button>\r\n        <button class=\"btn btn-sm btn-primary\"\r\n                [disabled]=\"!enableSaveEditedText()\"\r\n                (click)=\"saveEditedText()\">Übernehmen</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-content__overlay\"\r\n         [ngClass]=\"{'text-content__overlay--show': showContentSelect}\">\r\n      <div class=\"text-content__overlay-bg\"></div>\r\n      <div class=\"text-content__overlay-content\">\r\n        <button class=\"m-4 btn btn-sm btn-primary text-content__edit-btn\"\r\n                (click)=\"startEditMode()\">Text bearbeiten</button>\r\n        <button class=\"m-4 btn btn-sm btn-primary text-content__edit-btn\"\r\n                *ngIf=\"availableContent.length > 1 || (availableContent.length >= 1 && parsedContent.id === -1)\"\r\n                (click)=\"showContentSelect = !showContentSelect\">\r\n          Vorlage wählen\r\n        </button>\r\n        <div class=\"text-content__select\" *ngIf=\"showContentSelect\">\r\n          <div *ngFor=\"let content of availableContent\">\r\n            <div\r\n              class=\"text-content__select-item\"\r\n              (click)=\"setSelected(content)\"\r\n              *ngIf=\"!parsedContent || (content.id !== parsedContent.id)\">\r\n              {{content.value}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-section-content/bib-section-content.component.scss":
/***/ (function(module, exports) {

module.exports = ".text-content__edit-btn {\n  height: 20px;\n  padding: 0 4px;\n  line-height: 20px;\n  font-size: 12px; }\n\n.text-content--space-around {\n  padding: 4px 16px; }\n\n.text-content__content {\n  position: relative;\n  width: 100%; }\n\n.text-content__content:hover .text-content__overlay {\n    cursor: pointer;\n    display: block; }\n\n.text-content__content--no-hover:hover .text-content__overlay {\n    display: none; }\n\n.text-content__edit-btns {\n  margin-top: 4px; }\n\n.text-content__edit-input {\n  width: 100%;\n  min-height: 100px;\n  font-size: inherit; }\n\n.text-content__overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.text-content__overlay--show {\n    display: block; }\n\n.text-content__overlay-bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: white;\n  opacity: 0.9; }\n\n.text-content__overlay-content {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10;\n  display: inline-block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.text-content__select {\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  top: 50px;\n  background: white;\n  -webkit-box-shadow: 0 0 15px 0 #aaa;\n          box-shadow: 0 0 15px 0 #aaa;\n  border-radius: 2px; }\n\n.text-content__select-item {\n  padding: 12px;\n  background: white; }\n\n.text-content__select-item:hover {\n    background: #007bff;\n    color: white;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/product-management/bib-section-content/bib-section-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibSectionContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_content_service_service__ = __webpack_require__("./src/app/product-management/product/content-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BibSectionContentComponent = (function () {
    function BibSectionContentComponent(contentService, productService, sanitizer) {
        this.contentService = contentService;
        this.productService = productService;
        this.sanitizer = sanitizer;
        this.contentChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.inSubsection = false;
        this.showContentSelect = false;
        this.readOnly = false;
        this.editMode = false;
    }
    BibSectionContentComponent.prototype.startEditMode = function () {
        this.editedText = this.availableContent[0];
        this.editedText.id = -1;
        this.editMode = true;
        this.showContentSelect = false;
    };
    BibSectionContentComponent.prototype.cancelEditMode = function () {
        this.editMode = false;
    };
    BibSectionContentComponent.prototype.enableSaveEditedText = function () {
        return this.editedText.value !== this.selectedContent.value;
    };
    BibSectionContentComponent.prototype.saveEditedText = function () {
        if (this.editedText.value !== this.selectedContent.value) {
            this.editedText.id = this.selectedContent.id;
            this.selectedContent = __assign({}, this.editedText);
            this.editMode = false;
            this.parsedContent = {
                id: this.selectedContent.id,
                value: this.contentService.parseContent(this.productService.getProduct(), this.selectedContent.value)
            };
            this.contentChanged.emit(this.selectedContent);
        }
    };
    BibSectionContentComponent.prototype.setSelected = function (content) {
        this.selectedContent = __assign({}, content);
        this.showContentSelect = false;
    };
    BibSectionContentComponent.prototype.ngOnInit = function () {
        var parsedText = this.sanitizer.bypassSecurityTrustHtml(this.contentService.parseContent(this.productService.getProduct(), this.availableContent[0].value));
        this.parsedContent = {
            id: this.availableContent[0].id,
            value: parsedText
        };
        this.editedText = {
            id: this.availableContent[0].id,
            value: this.availableContent[0].value
        };
        this.selectedContent = __assign({}, this.editedText);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], BibSectionContentComponent.prototype, "contentChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibSectionContentComponent.prototype, "inSubsection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], BibSectionContentComponent.prototype, "availableContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibSectionContentComponent.prototype, "showContentSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BibSectionContentComponent.prototype, "readOnly", void 0);
    BibSectionContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-section-content',
            template: __webpack_require__("./src/app/product-management/bib-section-content/bib-section-content.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-section-content/bib-section-content.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_content_service_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], BibSectionContentComponent);
    return BibSectionContentComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-section/bib-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bib-section\">\r\n  <h3 class=\"bib-section__title\">{{title}}</h3>\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-section/bib-section.component.scss":
/***/ (function(module, exports) {

module.exports = ".bib-section__title {\n  padding: 4px 16px;\n  margin: 0;\n  background: #71af2f;\n  color: white;\n  font-size: 16px; }\n\n@media print {\n  .bib-section__title {\n    padding: 4px 16px;\n    margin: 0;\n    background: none;\n    color: #71af2f;\n    font-size: 16px;\n    font-weight: bold;\n    border-bottom: 1px solid #71af2f; } }\n"

/***/ }),

/***/ "./src/app/product-management/bib-section/bib-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BibSectionComponent = (function () {
    function BibSectionComponent() {
    }
    BibSectionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", Object)
    ], BibSectionComponent.prototype, "title", void 0);
    BibSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-section',
            template: __webpack_require__("./src/app/product-management/bib-section/bib-section.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-section/bib-section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BibSectionComponent);
    return BibSectionComponent;
}());



/***/ }),

/***/ "./src/app/product-management/bib-sub-section/bib-sub-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bib-sub-section\" [ngClass]=\"{'bib-sub-section--vertical': vertical}\">\r\n  <div class=\"bib-sub-section__title\">\r\n    <strong>{{title}}</strong>\r\n  </div>\r\n  <div class=\"bib-sub-section__content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/bib-sub-section/bib-sub-section.component.scss":
/***/ (function(module, exports) {

module.exports = ".bib-sub-section {\n  padding: 4px 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .bib-sub-section--vertical {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .bib-sub-section--vertical .bib-sub-section__title {\n      -ms-flex-preferred-size: 16px;\n          flex-basis: 16px; }\n  .bib-sub-section__title {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -ms-flex-preferred-size: 3cm;\n        flex-basis: 3cm; }\n  .bib-sub-section__content {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/product-management/bib-sub-section/bib-sub-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibSubSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BibSubSectionComponent = (function () {
    function BibSubSectionComponent() {
    }
    BibSubSectionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", Object)
    ], BibSubSectionComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('vertical'),
        __metadata("design:type", Object)
    ], BibSubSectionComponent.prototype, "vertical", void 0);
    BibSubSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bib-sub-section',
            template: __webpack_require__("./src/app/product-management/bib-sub-section/bib-sub-section.component.html"),
            styles: [__webpack_require__("./src/app/product-management/bib-sub-section/bib-sub-section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BibSubSectionComponent);
    return BibSubSectionComponent;
}());



/***/ }),

/***/ "./src/app/product-management/cost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CostService = (function () {
    function CostService(productsService) {
        this.productsService = productsService;
    }
    CostService.prototype.setVariables = function (product) {
        this.product = product;
        this.calcResult = this.product.getCalculationResult();
        this.calcInfo = this.product.getProductCalculationData();
        this.entryCost = Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'entryCost'));
        this.exitCost = Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'exitCost'));
        this.portfolioTransactionCost =
            Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'portfolioTransactionCost'));
        this.otherRunningCosts =
            Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'otherRunningCosts'));
        this.totalCost = this.entryCost + this.exitCost + this.portfolioTransactionCost + this.otherRunningCosts;
        this.holdingPeriod = Number.parseInt(this.productsService.getSpecificValue(this.calcInfo, 'holdingPeriod'));
    };
    CostService.prototype.calculateValues = function (product) {
        this.setVariables(product);
        var result = [];
        if (this.holdingPeriod > 2) {
            result.push(this.totalCost);
            result.push(this.precisionRound(this.totalCost * 0.5, 2));
            result.push(this.precisionRound(this.totalCost / this.holdingPeriod, 2));
        }
        else if (this.holdingPeriod === 2) {
            result.push(this.totalCost);
            result.push(this.precisionRound(this.totalCost * 0.5, 2));
        }
        else {
            result.push(this.totalCost);
        }
        return result;
    };
    CostService.prototype.calculateValueHeaders = function (product) {
        this.setVariables(product);
        var result = [];
        if (this.holdingPeriod > 2) {
            result.push({ top: 'Wenn Sie nach einem Jahr einlösen', down: '' });
            result.push({ top: 'Wenn Sie nach ' + this.holdingPeriod * 0.5 + ' Jahren einlösen', down: '' });
            result.push({ top: 'Wenn Sie am Ende der empfohlenen Haltedauer einlösen', down: '' });
        }
        else if (this.holdingPeriod === 2) {
            result.push({ top: 'Wenn Sie nach ' + this.holdingPeriod * 0.5 + ' Jahren einlösen', down: '' });
            result.push({ top: 'Wenn Sie am Ende der empfohlenen Haltedauer einlösen', down: '' });
        }
        else {
            result.push({ top: 'Wenn Sie am Ende der empfohlenen Haltedauer einlösen', down: '' });
        }
        return result;
    };
    CostService.prototype.precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    CostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], CostService);
    return CostService;
}());



/***/ }),

/***/ "./src/app/product-management/fakeBackend/categories.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
var categories = [
    { name: 'Index-Zertifikat Klassisch', enabled: true },
    { name: 'Discount-Zertifikat', enabled: false },
    { name: 'Express-Zertifikat', enabled: false },
];



/***/ }),

/***/ "./src/app/product-management/fakeBackend/categoriesHttpHandlers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = categoriesHttpHandlers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");


function categoriesHttpHandlers(request) {
    var url = request.url;
    var method = request.method;
    // GET all news items
    if (url.endsWith('category2') && method === 'POST') {
        var result = {
            sri: 5,
            unfavourableN: 0.44335334257050024,
            moderateN: 0.8352471798975618,
            favourableN: 1.568430553299293
        };
        var json_1 = JSON.stringify(result);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (response) {
            response.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpResponse */]({
                status: 201,
                body: JSON.parse(json_1)
            }));
            response.complete();
        });
    }
    // POST a new news item
    // if (request.url.endsWith('news') && request.method === 'POST' ) {
    //   // get new news object from body
    //   const newItem = request.body;
    //
    //   // valdation
    //   const dublicateNews = newsItemsDB.filter(newsItem => {
    //     return newsItem.id === newsItem.id;
    //   }).length;
    //
    //   if (dublicateNews) {
    //     return new Observable(response => {
    //       response.next(new HttpResponse({ status: 400}));
    //       response.complete();
    //     });
    //   }
    //
    //   // save new user
    //   newsItemsDB.push(newItem);
    //
    //   // respond 200 Ok
    //   return new Observable(response => {
    //     response.next(new HttpResponse({status: 200}));
    //     response.complete();
    //   });
    // }
}


/***/ }),

/***/ "./src/app/product-management/fakeBackend/db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productsDb; });
var productsDb = [
    {
        id: 'alösjfölasjfölkjasd',
        name: 'Geldmarktfloater 04/18'
    },
    {
        id: 'öjlajs4dflösdfjöjas',
        name: 'Test Product 2'
    }
];
var productCategories = [
    {
        name: 'Categorie 1',
        contents: {
            'purpose': [
                'Textblock1',
                'Textblock2'
            ],
            'product': [
                'Textblock1',
            ],
            'prudctType': {
                'type': [
                    'textblock1',
                    'textblock2'
                ],
                'objectives': [],
                'smallInvestorsTargetGroup': []
            }
        }
    }
];



/***/ }),

/***/ "./src/app/product-management/fakeBackend/fake-backend.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakeBackendInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productsHttpHandlers__ = __webpack_require__("./src/app/product-management/fakeBackend/productsHttpHandlers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoriesHttpHandlers__ = __webpack_require__("./src/app/product-management/fakeBackend/categoriesHttpHandlers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FakeBackendInterceptor = (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // Specify API endpint that needs to be mocked
        if (request.url.endsWith('products')) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__productsHttpHandlers__["a" /* productsHttpHandlers */])(request);
        }
        if (request.url.endsWith('category2')) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__categoriesHttpHandlers__["a" /* categoriesHttpHandlers */])(request);
        }
        // If none of the endpoints apply handle the request as usual
        return next.handle(request);
    };
    FakeBackendInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());



/***/ }),

/***/ "./src/app/product-management/fakeBackend/productTypes.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");

var productTypes = [
    {
        name: 'Garantieanleihen',
        productCalculationFields: [
            /*
             Ausführungszeiten Auswahl (täglich | wöchentlich | monatlich | aus)
             */
            {
                name: 'ausfuehrungszeiten',
                labelDe: 'Ausführungszeiten',
                placeholderDe: 'Ausführungszeiten',
                type: 'dropdown',
                options: [
                    { id: 'daily', value: 'daily', label: 'täglich' },
                    { id: 'weekly', value: 'weekly', label: 'wöchentlich' },
                    { id: 'monthly', value: 'monthly', label: 'monatlich' },
                    { id: 'off', value: 'off', label: 'aus' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
                fullRow: true
            },
            /*
            Anzahl Jahre - Enddatum => Ist Fälligkeitstag im Text
             */
            {
                name: 'term',
                labelDe: 'Laufzeit bis',
                placeholderDe: 'Laufzeit bis',
                type: 'date',
                format: 'DD.MM.YYYY',
                minDate: new Date(),
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
                fullRow: true
            },
            /*
            Anzahl Monate - Zahl
             */
            {
                name: 'holdingPeriod',
                labelDe: 'Empfohlene Haltedauer',
                placeholderDe: 'Empfohlene Haltedauer',
                type: 'number',
                step: 1,
                min: 0,
                inputGroup: {
                    type: 'append',
                    label: 'Jahre',
                    id: 'holding-period-addon'
                },
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].min(0)
                ],
                fullRow: true
            },
            /*
             Zahl Prozent (100% entsprechen JA)
             */
            {
                name: 'capitalProtectionMarketRisk',
                labelDe: 'Enthält das Produkt einen Kapitalschutz gegen Marktrisiken?',
                placeholderDe: 'Wenn ja bitte Wert eintragen',
                type: 'number',
                min: 0,
                max: 100,
                inputGroup: {
                    type: 'append',
                    label: '%',
                    id: 'capital-guarantee-addon'
                },
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].min(0),
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].max(100)
                ],
                fullRow: true,
            },
            {
                name: 'capitalProtectionMarketRiskLimited',
                labelDe: 'Ist der (teilweise) Kapitalschutz eingeschränkt?',
                placeholderDe: 'Wenn ja bitte Wert eintragen',
                type: 'dropdown',
                options: [
                    { id: 'time', value: 'time', label: 'Falls Ausstieg vor [Jahren/Monaten/Tagen]' },
                    { id: 'payments', value: 'payments', label: 'Abhängigkeit von fristgerechten laufenden Zahlungen' },
                    { id: 'other', value: 'other', label: 'sonstige Umstände' },
                ],
                validators: [],
                fullRow: true,
            },
            {
                name: 'capitalProtectionMarketRiskLimitedOption',
                labelDe: '',
                placeholderDe: 'je nach gewählter Option',
                type: 'conditional-text',
                options: [
                    { id: 'time', placeholder: 'Zahl und Einheit angeben (Jahren/Monaten/Tagen)' },
                    { id: 'other', placeholder: 'Erläuterung in einfacher Sprache' },
                ],
                validators: [],
                fullRow: true,
            },
            {
                name: 'capitalProtectionCreditRisk',
                labelDe: 'Beinhaltet das Produkt einen Kapitalschutz gegen Kreditrisiken?',
                placeholderDe: '',
                type: 'radio',
                value: false,
                required: false,
                fullRow: true,
                options: [
                    { id: 'yes', value: true,
                        label: 'Ja' },
                    { id: 'no', value: false,
                        label: 'Nein' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'capitalProtectionOther',
                labelDe: 'Besteht ein sonstiger Kapitalschutz gegenüber Kreditrisiken (zum Beispiel gesetzlicher Einlagensicherung)?',
                placeholderDe: '',
                type: 'radio',
                value: false,
                required: false,
                fullRow: true,
                options: [
                    { id: 'yes', value: true,
                        label: 'Ja' },
                    { id: 'no', value: false,
                        label: 'Nein' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            /*
             AAA (best) - C (worst)
             */
            {
                name: 'ratingFitch',
                labelDe: 'Emittentenrating Fitch',
                placeholderDe: 'Zeichnungsfrist (Test) angeben ...',
                type: 'dropdown',
                options: [
                    { id: 'aaa', value: 'AAA', label: 'AAA' },
                    // { id: 'aa+', value : 'aa+', label: 'AA+' },
                    { id: 'aa', value: 'AA', label: 'AA' },
                    // { id: 'aa-', value : 'aa-', label: 'AA-' },
                    // { id: 'a+', value : 'a+', label: 'A+' },
                    { id: 'a', value: 'A', label: 'A' },
                    // { id: 'a-', value : 'a-', label: 'A-' },
                    // { id: 'bbb+', value : 'bbb+', label: 'BBB+' },
                    { id: 'bbb', value: 'BBB', label: 'BBB' },
                    // { id: 'bbb-', value : 'bbb-', label: 'BBB-' },
                    // { id: 'bb+', value : 'bb+', label: 'BB+' },
                    { id: 'bb', value: 'BB', label: 'BB' },
                    // { id: 'bb-', value : 'bb-', label: 'BB-' },
                    // { id: 'b+', value : 'b+', label: 'B+' },
                    { id: 'b', value: 'B', label: 'B' },
                    // { id: 'b-', value : 'b-', label: 'B-' },
                    { id: 'lt_b', value: 'LT_B', label: 'niedriger als B' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
                fullRow: true
            },
            /*
             Aaa(best) - C (worst)
             */
            {
                name: 'ratingMoodys',
                labelDe: 'Emittentenrating Moody\'s',
                placeholderDe: 'Zeichnungsfrist (Test) angeben ...',
                type: 'dropdown',
                options: [
                    { id: 'aaa', value: 'AAA', label: 'Aaa' },
                    // { id: 'aa1', value : 'aa1', label: 'Aa1' },
                    { id: 'aa', value: 'AA', label: 'Aa' },
                    // { id: 'aa3', value : 'aa3', label: 'Aa3' },
                    // { id: 'a1', value : 'a1', label: 'A1' },
                    { id: 'a', value: 'A', label: 'A' },
                    // { id: 'a3', value : 'a3', label: 'A3' },
                    // { id: 'baa1', value : 'baa1', label: 'Baa1' },
                    { id: 'baa', value: 'BBB', label: 'Baa' },
                    // { id: 'baa3', value : 'baa3', label: 'Baa3' },
                    // { id: 'ba1', value : 'ba1', label: 'Ba1' },
                    { id: 'ba', value: 'BB', label: 'Ba' },
                    // { id: 'ba3', value : 'ba3', label: 'Ba3' },
                    // { id: 'b1', value : 'b1', label: 'B1' },
                    { id: 'b', value: 'B', label: 'B' },
                    // { id: 'b3', value : 'b3', label: 'B3' },
                    { id: 'lt_b', value: 'LT_B', label: 'niedriger als B' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
                fullRow: true
            },
            /*
             AAA (best) - C (worst)
             */
            {
                name: 'ratingSP',
                labelDe: 'Emittentenrating S&P',
                placeholderDe: 'Zeichnungsfrist (Test) angeben ...',
                type: 'dropdown',
                options: [
                    { id: 'aaa', value: 'AAA', label: 'AAA' },
                    // { id: 'aa+', value : 'aa+', label: 'AA+' },
                    { id: 'aa', value: 'AA', label: 'AA' },
                    // { id: 'aa-', value : 'aa-', label: 'AA-' },
                    // { id: 'a+', value : 'a+', label: 'A+' },
                    { id: 'a', value: 'A', label: 'A' },
                    // { id: 'a-', value : 'a-', label: 'A-' },
                    // { id: 'bbb+', value : 'bbb+', label: 'BBB+' },
                    { id: 'bbb', value: 'BBB', label: 'BBB' },
                    // { id: 'bbb-', value : 'bbb-', label: 'BBB-' },
                    // { id: 'bb+', value : 'bb+', label: 'BB+' },
                    { id: 'bb', value: 'BB', label: 'BB' },
                    // { id: 'bb-', value : 'bb-', label: 'BB-' },
                    // { id: 'b+', value : 'b+', label: 'B+' },
                    { id: 'b', value: 'B', label: 'B' },
                    // { id: 'b-', value : 'b-', label: 'B-' },
                    { id: 'lt_b', value: 'LT_B', label: 'niedriger als B' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
                fullRow: true
            },
            /*
            Kategorie 1 Einmalige Kosten
            */
            {
                name: 'entryCost',
                labelDe: 'Einstiegskosten',
                placeholderDe: 'Einstiegskosten',
                type: 'number',
                inputGroup: {
                    type: 'append',
                    label: '€',
                    id: 'capital-guarantee-addon'
                },
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].min(0)
                ],
                fullRow: true
            },
            {
                name: 'exitCost',
                labelDe: 'Ausstiegskosten',
                placeholderDe: 'Ausstiegskosten',
                type: 'number',
                inputGroup: {
                    type: 'append',
                    label: '€',
                    id: 'capital-guarantee-addon'
                },
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].min(0)
                ],
                fullRow: true
            },
            /*
            Kategorie 2 Laufende Kosten
            */
            {
                name: 'portfolioTransactionCost',
                labelDe: 'Portfoliotransaktionskosten',
                placeholderDe: 'Portfoliotransaktionskosten',
                type: 'number',
                inputGroup: {
                    type: 'append',
                    label: '€',
                    id: 'capital-guarantee-addon'
                },
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].min(0)
                ],
                fullRow: true
            },
            {
                name: 'otherRunningCosts',
                labelDe: 'Sonstige laufende Kosten',
                placeholderDe: 'Sonstige laufende Kosten',
                type: 'number',
                inputGroup: {
                    type: 'append',
                    label: '€',
                    id: 'capital-guarantee-addon'
                },
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].min(0)
                ],
                fullRow: true
            },
            /*
            Boolean
            */
            {
                name: 'limitedObligation',
                labelDe: 'Besteht Nachschusspflicht?',
                placeholderDe: 'Nachschusspflicht',
                type: 'radio',
                value: false,
                required: false,
                fullRow: true,
                options: [
                    { id: 'yes', value: true,
                        label: 'Ja' },
                    { id: 'no', value: false,
                        label: 'Nein' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ]
            },
            // neue Felder aus dem EXCEL
            {
                name: 'otherHoldingPeriod',
                labelDe: 'Wird das Risiko des PRIIP im Falle einer anderen Haltedauer als erheblich höher eingeschätzt?',
                placeholderDe: '',
                type: 'radio',
                value: false,
                required: false,
                fullRow: true,
                options: [
                    { id: 'yes', value: true,
                        label: 'Ja' },
                    { id: 'no', value: false,
                        label: 'Nein' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ]
            },
            {
                name: 'liqRiskOrIlliq',
                labelDe: 'Ist das PRIIP mit einem erheblichen Liquiditätsrisiko verbunden oder wird es als illiquide angesehen?',
                placeholderDe: '',
                type: 'dropdown',
                options: [
                    { id: 'none', value: 'none', label: 'Nicht relevant' },
                    { id: 'liqRisk', value: 'liqRisk', label: 'Liquiditätsrisiko' },
                    { id: 'illiquide', value: 'illiquide', label: 'Illiquide' },
                ],
                fullRow: true,
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ]
            },
            {
                name: 'terminationRight',
                labelDe: 'Ist ein vertragliches Kündigungsrecht zugunsten des Kunden vorgesehen?',
                placeholderDe: '',
                type: 'radio',
                required: false,
                fullRow: true,
                options: [
                    { id: 'yes', value: true,
                        label: 'Ja' },
                    { id: 'no', value: false,
                        label: 'Nein' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ]
            },
            {
                name: 'currencyRisk',
                labelDe: 'Ist das Produkt mit einem Währungsrisiko verbunden?',
                placeholderDe: '',
                type: 'radio',
                required: false,
                fullRow: true,
                options: [
                    { id: 'yes', value: true,
                        label: 'Ja' },
                    { id: 'no', value: false,
                        label: 'Nein' },
                ],
            },
            {
                name: 'possibleTopUp',
                labelDe: 'Beinhaltet das Produkt eine mögliche Aufstockung der Anfangsinvestition?',
                placeholderDe: '',
                type: 'radio',
                required: false,
                fullRow: true,
                options: [
                    { id: 'yes', value: true,
                        label: 'Ja' },
                    { id: 'no', value: false,
                        label: 'Nein' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'otherRisks',
                labelDe: 'Bestehen sonstige Risiken, die durch den Risikoindikator nicht adäquat illustriert werden? (max. 200 Zeichen)',
                placeholderDe: 'Bitte hier die Risiken beschreiben, wenn welche bestehen',
                type: 'textarea',
                max: 200,
                value: false,
                required: false,
                fullRow: true,
            },
            {
                name: 'includedCostsVertrieb',
                labelDe: 'Zahlungen an Berater/Vertriebsstelle',
                placeholderDe: '',
                type: 'dropdown',
                options: [
                    { id: 'notIncluded', value: false,
                        label: 'Es sind Zahlungen an Berater/Vertriebstelle zu leisten, die im Preis nicht inbegriffen sind' },
                    { id: 'included', value: true,
                        label: 'Zahlungen an Berater/Vertriebsstelle bereits im Preis enthalten' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
                fullRow: true,
            },
        ],
        productDataFields: [
            {
                name: 'underlying',
                labelDe: 'Basiswert',
                placeholderDe: 'Basiswert auswählen',
                type: 'dropdown',
                options: [
                    { id: 'dax', value: 'DAX', label: 'DAX' },
                    { id: 'euro50', value: 'EURO STOXX 50', label: 'EURO STOXX 50' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'market',
                labelDe: 'Zugrundeliegener Markt',
                placeholderDe: 'Verzinsung angeben ...',
                type: 'dropdown',
                options: [
                    { id: 'aktien', value: 'Aktien', label: 'Aktien' },
                    { id: 'renten', value: 'Renten', label: 'Renten' },
                ],
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'subscriptionRatio',
                labelDe: 'Bezugsverhältnis',
                placeholderDe: 'Bezugsverhältnis eingeben',
                type: 'text',
                validators: [],
            },
            {
                name: 'currencyProduct',
                labelDe: 'Währung des Produkts',
                placeholderDe: 'Währung angeben ...',
                type: 'text',
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'currencyUnderlying',
                labelDe: 'Währung des Basiswerts',
                placeholderDe: 'Währung angeben ...',
                type: 'text',
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'emissionDate',
                labelDe: 'Emissionstag',
                placeholderDe: 'Emissionstag angeben ...',
                type: 'date',
                format: 'DD.MM.YYYY',
                minDate: new Date(),
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'referenceAuthority',
                labelDe: 'Referenzstelle',
                placeholderDe: 'Referenzstelle angeben ...',
                type: 'text',
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'valuationDate',
                labelDe: 'Bewertungstag',
                placeholderDe: 'Bewertungstag angeben ...',
                type: 'date',
                format: 'DD.MM.YYYY',
                minDate: new Date(),
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'rueckzahlungstermin',
                labelDe: 'Rückzahlungstermin',
                placeholderDe: 'Rückzahlungstermin angeben ...',
                type: 'text',
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'boersennotierung',
                labelDe: 'Börsennotierung',
                placeholderDe: 'Börsennotierung angeben ...',
                type: 'text',
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
            {
                name: 'letzerHandelstag',
                labelDe: 'Letzter Handelstag',
                placeholderDe: 'Letzten Handelstag angeben ...',
                type: 'date',
                format: 'DD.MM.YYYY',
                minDate: new Date(),
                validators: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required
                ],
            },
        ],
        contents: {}
    }
];



/***/ }),

/***/ "./src/app/product-management/fakeBackend/products.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return products; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_product__ = __webpack_require__("./src/app/product-management/models/product.ts");

var dateInTwoYears = new Date();
dateInTwoYears.setFullYear(dateInTwoYears.getFullYear() + 2);
var productCalculationData1 = [
    { name: 'ausfuehrungszeiten', label: 'Ausführungszeiten', value: 'daily', type: 'radio' },
    { name: 'term', label: 'Laufzeit bis', value: dateInTwoYears.getTime(), type: 'date' },
    { name: 'holdingPeriod', label: 'Empfohlene Haltedauer', value: '2', type: 'number' },
    { name: 'ratingFitch', label: 'Emittentenrating Fitch', value: 'AAA', type: 'dropdown' },
    { name: 'ratingMoodys', label: 'Emittentenrating Moody\'s', value: 'AAA', type: 'dropdown' },
    { name: 'ratingSP', label: 'Emittentenrating S&P', value: 'AAA', type: 'dropdown' },
    { name: 'limitedObligation', label: 'Nachschusspflicht', value: false, type: 'checkbox' },
    { name: 'entryCost', label: 'Einstiegskosten', value: '100', type: 'number' },
    { name: 'exitCost', label: 'Ausstiegskosten', value: '0', type: 'number' },
    { name: 'portfolioTransactionCost', label: 'Portfoliotransaktionskosten', value: '0', type: 'number' },
    { name: 'otherRunningCosts', label: 'Sonstige laufende Kosten', value: '0', type: 'number' },
    { name: 'otherHoldingPeriod', label: '', value: true, type: 'radio' },
    { name: 'liqRiskOrIlliq', label: '', value: 'liqRisk', type: 'radio' },
    { name: 'terminationRight', label: '', value: true, type: 'radio' },
    { name: 'currencyRisk', label: '', value: true, type: 'radio' },
    { name: 'possibleTopUp', label: '', value: true, type: 'radio' },
    { name: 'capitalProtectionMarketRisk', label: '', value: 99, type: 'number' },
    { name: 'capitalProtectionCreditRisk', label: '', value: false, type: 'radio' },
    { name: 'capitalProtectionOther', label: '', value: false, type: 'radio' },
    { name: 'includedCostsVertrieb', label: '', value: true, type: 'radio' },
];
var productInformationData = [
    { name: 'underlying', label: 'Underlying', value: 'DAX', type: 'dropdown' },
    { name: 'market', label: 'Zugrundeliegender Markt', value: 'Aktien', type: 'text' },
    { name: 'subscriptionRatio', label: 'Bezugsverhältnis', value: '0,01', type: 'text' },
    { name: 'currencyProduct', label: 'Währung des Produkts', value: 'Euro (EUR)', type: 'text' },
    { name: 'currencyUnderlying', label: 'Währung des Basiswerts', value: 'Euro (EUR)', type: 'text' },
    { name: 'emissionDate', label: 'Emissionstag', value: new Date().getTime(), type: 'date' },
    { name: 'referenceAuthority', label: 'Referenzstelle', value: 'Deutsche Börse', type: 'text' },
    { name: 'valuationDate', label: 'Bewertungstag', value: dateInTwoYears.getTime(), type: 'date' },
    { name: 'rueckzahlungstermin', label: 'Rückzahlungstermin', value: 'Der 4. Geschäftstag nach dem Bewertungstag', type: 'text' },
    { name: 'letzerHandelstag', label: 'Bewertungstag', value: dateInTwoYears.getTime(), type: 'date' },
    { name: 'boersennotierung', label: 'Rückzahlungstermin', value: 'Deutsche Börse AG', type: 'text' },
];
var bibContent = {
    '1': [
        {
            id: '1a',
            value: 'Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. ' +
                'Es handelt sich nicht um Werbematerial. Diese Informationen sind gesetzlich vorgeschrieben, um Ihnen dabei zu helfen, ' +
                'die Art, das Risiko, die Kosten sowie die möglichen Gewinne und Verluste dieses Produkts zu verstehen, ' +
                'und Ihnen dabei zu helfen, es mit anderen Produkten zu vergleichen.'
        },
        {
            id: '1b',
            value: 'Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. ' +
                'Es handelt sich nicht um Werbematerial. Diese Informationen sind gesetzlich vorgeschrieben.'
        },
        {
            id: '1c',
            value: 'Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. ' +
                'Es handelt sich nicht um Werbematerial. Diese Informationen sind gesetzlich vorgeschrieben.'
        }
    ],
    '2': [],
    '3': [],
    '31': [
        {
            id: '31a',
            value: 'Inhaberschuldverschreibung nach deutschem Recht'
        }
    ],
    '32': [
        {
            id: '32a',
            value: 'Das Produkt zielt auf die Erwirtschaftung eines Ertrags in Form einer Barzahlung am ' +
                '[productInformationData.rueckzahlungstermin] ab. Die Höhe dieser Zahlung hängt von der Wertentwicklung des ' +
                '[productInformationData.underlying] ab. Bei Beendigung des Produkts am [productInformationData.rueckzahlungstermin] ' +
                'erhält der Anleger eine Barzahlung entsprechend dem Ergebnis aus (i) dem endgültigen Referenzstand multipliziert mit dem ' +
                'Bezugsverhältnis. \n Gemäß den Produktbedingungen werden bestimmte unten angeführte Tage angepasst, falls das jeweilige ' +
                'Datum entweder kein Geschäftstag oder kein Handelstag ist (je nachdem). Wenn eine Anpassung erfolgt, kann dies einen ' +
                'etwaigen Ertrag des Anlegers beeinflussen.'
        }
    ],
    '33': [
        {
            id: '33a',
            value: 'Die Emittentin kann das Produkt mit sofortiger Wirkung beenden, falls die Bedingungen offensichtliche ' +
                'schriftliche oder mathematische Fehler enthalten oder bestimmte außerordentliche Ereignisse, die in den Bedingungen ' +
                'beschrieben sind, eintreten. Solche außerordentliche Ereignisse sind beispielsweise (1) wesentliche Änderungen, ' +
                'insbesondere in Bezug auf den [productInformationData.underlying], wie z.B. wenn ein Index nicht mehr berechnet wird, und' +
                ' (2) Ereignisse, insbesondere aufgrund von Änderungen in bestimmten externen Bedinungen, die die Emittentin daran ' +
                'hindern, ihren Verpflichtungen im Zusammenhang mit dem Produkt nachzukommen, oder - in Abhängigkeit von der Ausgestaltung ' +
                'der Bedingungen des Wertpapiers - die das Produkt und/oder die Emittentin anderweitig beeinflussen. Im Falle einer ' +
                'sofortigen Beendigung kann ein etwaiger Ertrag deutlich unter dem Kaufpreis liegen, jedoch wird er den Marktwert des ' +
                'Produkts und, falls diese höher ist, eine etwaige Mindestrückzahlung widerspiegeln (in manchen Fällen kann stattdessen ' +
                'auch der diesem Betrag entsprechende aufgezinste Wert bei Fälligkeit des Produkts ausgezahlt werden). Stattdessen kann ' +
                'die Emittentin auch die Bedingungen ändern.'
        }
    ],
    '34': [
        {
            id: '34a',
            value: 'Das Produkt ist für Privatkunden bestimmt, die das Ziel der allgemeinen Vermögensbildung/ Vermögensoptimierung ' +
                'verfolgen und einen kurzfristigen Anlagehorizont haben. Bei dem vorliegenden Produkt handelt es sich um ein Produkt ' +
                'für Anleger mit erweiterten Kenntnissen und/oder Erfahrungen mit Finanzprodukten. Der Anleger kann Verluste tragen bis ' +
                'zum vollständigen Verlust des eingesetzen Kapitals und legt keinen Wert auf Kapitalschutz. Das Produkt fällt bei der ' +
                'Risiko- und Renditebewertung auf einer Skala von 1 (sicherheitsorientiert; sehr geringe bis geringe Rendite) bis 7 ' +
                '(sehr risikobereit; höchste Rendite) in Risikoklasse 2.'
        }
    ],
    '4': [],
    '41': [
        {
            id: '41a',
            value: 'Der Gesamtrisikoindikator hilft Ihnen, das mit diesem Produkt verbundene Risiko im Vergleich zu anderen Produkten ' +
                'einzuschätzen. Er zeigt, wie hoch die Wahrscheinlichkeit ist, dass Sie bei diesem Produkt Geld verlieren, ' +
                'weil sich die Märkte in einer bestimmten Weise entwickeln oder wir nicht in der Lage sind, Sie auszubezahlen. Wir haben ' +
                'dieses Produkt auf einer Skala von 1 bis 7 in die Risikoklasse 2 eingestuft, wobei 2 einer mittelniedrigen Risikoklasse ' +
                'entspricht. Das Risiko potenzieller Verluste aus der künftigen Wertentwicklung wird als sehr niedrig eingestuft. ' +
                'Bei ungünstigen Marktbedingungen ist es unwahrscheinlich, dass unsere Fähigkeit beeinträchtigt wird, Sie auszuzahlen. ' +
                'Sie haben Anspruch darauf, mindestens 100,00 % Ihres Kapitals zurückzuerhalten. Darüber hinausgehende Beträge und ' +
                'zusätzliche Renditen sind von der künftigen Marktentwicklung abhängig und daher ungewiss. Wenn wir Ihnen nicht das ' +
                'zahlen können, was Ihnen zusteht, könnten Sie das gesamte angelegte Kapital verlieren.'
        }
    ],
    '42': [
        {
            id: '42a',
            value: 'Diese Tabelle zeigt, wie viel Sie bis zum [productCalculationData.holdingPeriod] unter verschiedenen Szenarien ' +
                'zurückerhalten könnten, wenn Sie 10.000 EUR anlegen. Die dargestellten Szenarien zeigen, wie sich Ihre Anlage entwickeln ' +
                'könnte. Sie können sie mit den Szenarien für andere Produkte vergleichen. Die dargestellten Szenarien entsprechen einer ' +
                'Schätzung der künftigen Wertentwicklung aufgrund früherer Wertänderungen dieses Investments; sie sind kein exakter ' +
                'Indikator. Wie viel Sie tatsächlich erhalten, hängt davon ab, wie sich der Markt entwickelt und wie lange Sie die ' +
                'Anlage/das Produkt halten. Das Stressszenario zeigt, was Sie im Fall extremer Marktbedingungen zurückerhalten könnten ' +
                'und berücksichtigt nicht den Fall, dass wir womöglich nicht in der Lage sind, die Auszahlung vorzunehmen. ' +
                'In den angeführten Zahlen sind sämtliche Kosten des Produkts selbst enthalten sowie die Kosten Ihres Beraters oder ' +
                'Ihrer Vertriebsstelle. Bei den angeführten Zahlen ist Ihre persönliche steuerliche Situation nicht berücksichtigt, ' +
                'die sich ebenfalls darauf auswirken kann, wie viel Sie zurück erhalten.'
        }
    ],
    '43': [
        {
            id: '43a',
            value: 'Dieser Risikoindikator beruht auf der Annahme, dass Sie das Produkt bis zum [productCalculationData.term] halten. ' +
                'Wenn Sie die Anlage frühzeitig auflösen, kann das tatsächliche Risiko erheblich davon abweichen und Sie erhalten unter ' +
                'Umständen weniger zurück. Es kann sein, dass Sie Ihr Produkt nicht ohne Weiteres veräußern können oder dass Sie es zu ' +
                'einem Preis veräußern müssen, der den Betrag, den Sie zurückerhalten, erheblich schmälert.'
        }
    ],
    '5': [
        {
            id: '5a',
            value: 'Der Anleger trägt das Risiko, dass die Emittentin möglicherweise nicht in der Lage ist, ihre Verpflichtungen ' +
                'in Bezug auf das Produkt zu erfüllen - z.B. im Fall einer Insolvenz (Zahlungsunfähigkeit / Überschuldung) oder einer ' +
                'behördlichen Anordnung von Abwicklungsmaßnahmen. Im Falle einer Krise der Emittentin kann eine solche Anordnung einer ' +
                'Abwicklungsbehörde auch im Vorfeld eines Insolvenzverfahrens erteilt werden. Dabei stehen der Abwicklungsbehörde ' +
                'weitreichende Eingriffsbefugnisse zu. Unter anderem kann sie Rechte derInvestoren auf Null herabsetzen, das Produkt ' +
                'beenden oder in Aktien der Emittentin umwandeln und Rechte der Anleger aussetzen. Hinsichtlich der grundsätzlichen ' +
                'Rangfolge von Verpflichtungen der Emittentin im Fall von Maßnahmen der Abwicklungsbehörde, wird der Anleger auf ' +
                'www.bafin.de verwiesen und aufgefordert, nach dem Stichwort "Haftungskaskade" zu suchen. Ein Totalverlust des eingesetzten ' +
                'Kapitals des Anlegers ist möglich. Das Produkt ist eine Schuldverschreibung und unterliegt als solche keinem ' +
                'Einlagensicherungssystem.'
        }
    ],
    '6': [
        {
            id: '6a',
            value: 'Die Renditeminderung (Reduction in Yield - RIY) zeigt, wie sich die von Ihnen gezahlten Gesamtkosten auf die ' +
                'Anlagerendite, die Sie erhalten könnten, auswirken. In den Gesamtkosten sind einmalige, laufende und zusätzliche ' +
                'Kosten berücksichtigt. Die hier ausgewiesenen Beträge entsprechen den kumulierten Kosten des Produkts bei drei verschiedenen '
                + 'Haltedauern.  Sie beinhalten etwaige Vertragsstrafen bei vorzeitigem Ausstieg. Bei den angegebenen Zahlen wird ' +
                'davon ausgegangen, dass Sie 10.000 EUR anlegen. Die Werte sind Schätzungen und können in der Zukunft anders ausfallen.'
        }
    ],
    '61': [
        {
            id: '61a',
            value: 'Die Person, die Ihnen dieses Produkt verkauft oder Sie dazu berät, kann Ihnen weitere Kosten in Rechnung stellen. ' +
                'Sollte dies der Fall sein, informiert Sie die Person über diese Kosten und zeigt Ihnen, wie sich sämtliche Kosten im ' +
                'Zeitverlauf auf Ihre Anlage auswirken werden.'
        }
    ],
    '62': [
        {
            id: '62a',
            value: 'Aus der nachfolgenden Tabelle geht Folgendes hervor:<ul> <li> wie sich die verschiedenen Arten von Kosten jedes Jahr auf ' +
                'die Anlagerendite auswirken, die Sie am Ende der empfohlenen Haltedauer erhalten könnten </li> ' +
                '<li>was die verschiedenen Kostenkategorien beinhalten.</li></ul>'
        }
    ],
    '7': [
        {
            id: '7a',
            value: 'Das Produkt zielt darauf ab, für Sie den oben unter 1. "Um welche Art von Produkt handelt es sich?" ' +
                'beschriebenen Ertrag zu erwirtschaften. Allerdings nur, wenn das Produkt bis zur Fälligkeit gehalten wird. ' +
                'Es wird empfohlen, das Produkt bis zum [productCalculationData.term] zu halten. Das Produkt gewährleistet nicht die ' +
                'Möglichkeit vorzeitig aus dem Produkt auszusteigen, außer durch den Verkauf des Produkts, entweder (i) über die Börse ' +
                '(sofern das Produkt gelistet ist) oder (ii) außerbörslich, soweit ein Angebot für ein solches Produkt existiert. ' +
                'Für eine solche Transaktion werden keine Gebühren oder Sanktionen von der Emittentin erhoben, jedoch kann eine ' +
                'Ausführungsgebühr von Ihrem Vermittler, falls zutreffend, berechnet werden. Durch den Verkauf des Produkts vor ' +
                'seiner Fälligkeit, erhalten Sie möglicherweise weniger zurück, als wenn Sie das Produkt bis zur Fälligkeit gehalten hätten. '
        }
    ],
    '8': [
        {
            id: '8a',
            value: 'Beschwerden über das Verhaltend der Person, die Sie zu dem Produkt berät oder es verkauft, ' +
                'können direkt an diese Person gerichtet werden. Beschwerden über das Produkt oder über den Hersteller des Produktes ' +
                'können schriftlich wie folgt erhoben werden: über die Postadresse ([address]), auf der Website [web], oder ' +
                'per Email an [email].'
        }
    ],
    '9': [
        {
            id: '9a',
            value: 'Allgemeine Informationen zu Finanzinstrumenten enthalten die Broschüren „Basisinformationen über Finanzderivate“, ' +
                '„Basisinformationen über Termingeschäfte“ und das Hinweisblatt „Risiken bei Termingeschäften“, ' +
                'die Sie bei der [producer] kostenlos anfordern können.'
        }
    ]
};
var p1 = new __WEBPACK_IMPORTED_MODULE_0__models_product__["a" /* Product */]({
    productName: 'Index-Zertifikat klassisch DAX',
    productId: 'DE000NL891X',
    producer: 'Bankhaus Frankfurt AG',
    email: 'support@bhf-ag.de',
    phone: '+49-000-00000',
    web: 'www.bhf-ag.de',
    agency: 'Bundesanstalt für Finanzdienstleistungen (BaFin)',
    creationDate: new Date().getTime(),
    isin: 'DE000DE00ABC',
    wkn: 'DE00ABC',
    description: 'Index-Zertifikat bezogen auf DAX',
    address: 'Taunusanlage 17, 60325 Frankfurt am Main'
}, productInformationData, productCalculationData1, bibContent, true);
p1.setId('id1');
p1.setCategory('Index-Zertifikat Klassisch');
var productCalculationData2 = [
    { name: 'ausfuehrungszeiten', label: 'Ausführungszeiten', value: 'daily', type: 'radio' },
    { name: 'term', label: 'Laufzeit bis', value: dateInTwoYears.getTime(), type: 'date' },
    { name: 'holdingPeriod', label: 'Empfohlene Haltedauer', value: '7', type: 'number' },
    { name: 'ratingFitch', label: 'Emittentenrating Fitch', value: 'AAA', type: 'dropdown' },
    { name: 'ratingMoodys', label: 'Emittentenrating Moody\'s', value: 'AAA', type: 'dropdown' },
    { name: 'ratingSP', label: 'Emittentenrating S&P', value: 'AAA', type: 'dropdown' },
    { name: 'limitedObligation', label: 'Nachschusspflicht', value: true, type: 'checkbox' },
    { name: 'entryCost', label: 'Einstiegskosten', value: '100', type: 'number' },
    { name: 'exitCost', label: 'Ausstiegskosten', value: '0', type: 'number' },
    { name: 'portfolioTransactionCost', label: 'Portfoliotransaktionskosten', value: '0', type: 'number' },
    { name: 'otherRunningCosts', label: 'Sonstige laufende Kosten', value: '0', type: 'number' },
    { name: 'otherHoldingPeriod', label: '', value: true, type: 'radio' },
    { name: 'liqRiskOrIlliq', label: '', value: 'liqRisk', type: 'radio' },
    { name: 'terminationRight', label: '', value: true, type: 'radio' },
    { name: 'currencyRisk', label: '', value: true, type: 'radio' },
    { name: 'possibleTopUp', label: '', value: true, type: 'radio' },
    { name: 'capitalProtectionMarketRisk', label: '', value: 99, type: 'number' },
    { name: 'capitalProtectionCreditRisk', label: '', value: false, type: 'radio' },
    { name: 'capitalProtectionOther', label: '', value: false, type: 'radio' },
    { name: 'includedCostsVertrieb', label: '', value: true, type: 'radio' },
];
var p2 = new __WEBPACK_IMPORTED_MODULE_0__models_product__["a" /* Product */]({
    productName: 'Express-Zertifikat EURO STOXX 50',
    productId: 'DE000NL892X',
    producer: 'Bankhaus Frankfurt AG',
    email: 'support@bhf-ag.de',
    phone: '+49-000-00000',
    web: 'www.bhf-ag.de',
    agency: 'Bundesanstalt für Finanzdienstleistungen (BaFin)',
    creationDate: new Date().getTime(),
    isin: 'DE000DS1M7Q6',
    wkn: 'DS1M7Q',
    description: 'Express-Zertifikat bezogen auf EURO STOXX 50',
    address: 'Taunusanlage 17, 60325 Frankfurt am Main'
});
p2.setId('id2');
p2.setCategory('Express-Zertifikat');
p2.setProductCalculationData(productCalculationData2);
var products = [
    p1, p2
];



/***/ }),

/***/ "./src/app/product-management/fakeBackend/productsHttpHandlers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = productsHttpHandlers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__("./src/app/product-management/fakeBackend/db.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");



function productsHttpHandlers(request) {
    var url = request.url;
    var method = request.method;
    // GET all news items
    if (url.endsWith('products') && method === 'GET') {
        var products_1 = __WEBPACK_IMPORTED_MODULE_1__db__["a" /* productsDb */];
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (response) {
            response.next(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpResponse */]({
                status: 200,
                body: {
                    products: products_1
                }
            }));
            response.complete();
        });
    }
    // POST a new news item
    // if (request.url.endsWith('news') && request.method === 'POST' ) {
    //   // get new news object from body
    //   const newItem = request.body;
    //
    //   // valdation
    //   const dublicateNews = newsItemsDB.filter(newsItem => {
    //     return newsItem.id === newsItem.id;
    //   }).length;
    //
    //   if (dublicateNews) {
    //     return new Observable(response => {
    //       response.next(new HttpResponse({ status: 400}));
    //       response.complete();
    //     });
    //   }
    //
    //   // save new user
    //   newsItemsDB.push(newItem);
    //
    //   // respond 200 Ok
    //   return new Observable(response => {
    //     response.next(new HttpResponse({status: 200}));
    //     response.complete();
    //   });
    // }
}


/***/ }),

/***/ "./src/app/product-management/fakeBackend/validationMessages.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validationMessages; });
var validationMessages = {
    required: 'Dieses Feld ist Pflicht.',
    negatives: 'Negative Werte sind nicht erlaubt.',
    maximum: 'Das Maximum von 100% darf nicht überschritten werden'
};


/***/ }),

/***/ "./src/app/product-management/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Product = (function () {
    function Product(productInfo, productInformationData, productCalculationData, bibContent, calcDataValid, showProductInfo, versionNr, calcResult) {
        if (productInfo === void 0) { productInfo = null; }
        if (productInformationData === void 0) { productInformationData = []; }
        if (productCalculationData === void 0) { productCalculationData = []; }
        if (bibContent === void 0) { bibContent = {}; }
        if (calcDataValid === void 0) { calcDataValid = false; }
        if (showProductInfo === void 0) { showProductInfo = true; }
        if (versionNr === void 0) { versionNr = 1; }
        if (calcResult === void 0) { calcResult = []; }
        this.productInformationData = productInformationData;
        this.productCalculationData = productCalculationData;
        this.productName = '';
        this.productId = '';
        this.producer = '';
        this.email = '';
        this.phone = '';
        this.web = '';
        this.agency = '';
        this.address = '';
        this.creationDate = new Date().getTime();
        this.lastEdited = new Date().getTime();
        this.lastEditedBy = 'Frank Mayer';
        this.isin = '';
        this.wkn = '';
        this.description = '';
        this.calculationResult = [];
        this.generationFinished = false;
        this.calcDataValid = calcDataValid;
        this.versionNr = versionNr;
        this.showProdctInfo = showProductInfo;
        if (productInfo) {
            this.address = productInfo.address;
            this.productName = productInfo.productName;
            this.productId = productInfo.productId;
            this.producer = productInfo.producer;
            this.email = productInfo.email;
            this.phone = productInfo.phone;
            this.web = productInfo.web;
            this.agency = productInfo.agency;
            this.creationDate = productInfo.creationDate;
            this.description = productInfo.description;
            this.isin = productInfo.isin;
            this.wkn = productInfo.wkn;
        }
        this.setProductInformationData(productInformationData);
        this.setProductCalculationData(productCalculationData);
        this.setBibContent(bibContent);
        this.calculationResult = calcResult;
    }
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getCategory = function () {
        return this.category;
    };
    Product.prototype.setCategory = function (category) {
        this.category = category;
    };
    Product.prototype.setProductInfo = function (productInfo) {
        this.address = productInfo.address;
        this.productName = productInfo.productName;
        this.productId = productInfo.productId;
        this.producer = productInfo.producer;
        this.email = productInfo.email;
        this.phone = productInfo.phone;
        this.web = productInfo.web;
        this.agency = productInfo.agency;
        this.creationDate = productInfo.creationDate && productInfo.creationDate.getTime();
        this.description = productInfo.description;
        this.isin = productInfo.isin;
        this.wkn = productInfo.wkn;
    };
    Product.prototype.setProductCalculationData = function (productCalculationData) {
        this.productCalculationData = productCalculationData.slice();
    };
    Product.prototype.setProductInformationData = function (productInformationData) {
        this.productInformationData = productInformationData.slice();
    };
    Product.prototype.setProductData = function (productInfo, productInformationData, productCalculationData) {
        if (productInformationData === void 0) { productInformationData = []; }
        if (productCalculationData === void 0) { productCalculationData = []; }
        this.setProductInfo(productInfo);
        this.setProductCalculationData(productCalculationData);
        this.setProductInformationData(productInformationData);
    };
    Product.prototype.setBibContent = function (content) {
        this.bibContent = __assign({}, content);
    };
    Product.prototype.toggleVisibilityOfProductInfo = function () {
        this.showProdctInfo = !this.showProdctInfo;
    };
    Product.prototype.getVisibilityOfProductInfo = function () {
        return this.showProdctInfo;
    };
    Product.prototype.getProductBaseInfo = function () {
        var info = {
            productName: this.productName,
            productId: this.productId,
            producer: this.producer,
            address: this.address,
            email: this.email,
            phone: this.phone,
            web: this.web,
            agency: this.agency,
            creationDate: this.creationDate,
            isin: this.isin,
            wkn: this.wkn,
            description: this.description
        };
        return info;
    };
    Product.prototype.getProductInformationData = function () {
        return this.productInformationData.slice();
    };
    Product.prototype.getProductCalculationData = function () {
        return this.productCalculationData.slice();
    };
    Product.prototype.getBibContent = function () {
        return this.bibContent;
    };
    Product.prototype.setVersionNr = function (version) {
        this.versionNr = version;
    };
    Product.prototype.getVersionNr = function () {
        return this.versionNr;
    };
    Product.prototype.setMetadata = function (userObject) {
        this.lastEditedBy = userObject.name;
        this.lastEdited = new Date().getTime();
    };
    Product.prototype.setCalcDataValid = function (value) {
        this.calcDataValid = value;
    };
    Product.prototype.getCalcDataValid = function () {
        return this.calcDataValid;
    };
    Product.prototype.setCalculationResult = function (calcResult) {
        this.calculationResult.push(calcResult);
    };
    Product.prototype.getCalculationResult = function () {
        return this.calculationResult;
    };
    return Product;
}());



/***/ }),

/***/ "./src/app/product-management/pdf-view/pdf-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-section-menu [title]=\"'PDF-Vorschau'\">\n  <div>\n    <button class=\"btn btn-danger\" (click)=\"back()\">\n      <span><i class=\"fa fa-times\"></i></span>\n      <span>Zurück</span>\n    </button>\n  </div>\n</app-section-menu>\n\n<div class=\"row product-content\">\n  <div class=\"col\">\n\n    <div class=\"bib-document\">\n      <div class=\"bib-document__marker-page-one\"></div>\n      <div class=\"bib-document__marker-page-two\"></div>\n      <div class=\"bib-document__marker-page-three\"></div>\n      <!--<img class=\"bib-document__logo\" src=\"../../../assets/img/EXXETA-Logo-RGB.png\"/>-->\n      <h2 class=\"bib-document__title\">Basisinformationsblatt</h2>\n\n      <app-bib-section [title]=\"bibSections[0].title\">\n        <app-bib-section-content [availableContent]=\"getContentForId(bibSections[0].id)\" [readOnly]=\"true\"></app-bib-section-content>\n      </app-bib-section>\n\n      <app-bib-section [title]=\"bibSections[1].title\">\n        <app-bib-product-info [product]=\"getProductInfo()\"></app-bib-product-info>\n      </app-bib-section>\n\n\n      <app-bib-section [title]=\"bibSections[2].title\">\n        <app-bib-sub-section [title]=\"bibSections[2].children[0].title\">\n          <app-bib-section-content\n            [availableContent]=\"getContentForId(bibSections[2].children[0].id)\"\n            [inSubsection]=\"true\"\n            [readOnly]=\"true\">\n          </app-bib-section-content>\n        </app-bib-sub-section>\n\n        <app-bib-sub-section [title]=\"bibSections[2].children[1].title\">\n          <app-bib-section-content\n            [availableContent]=\"getContentForId(bibSections[2].children[1].id)\"\n            [inSubsection]=\"true\"\n            [readOnly]=\"true\"></app-bib-section-content>\n          <app-bib-product-calc-data *ngIf=\"showProductInfo\" [productCalcData]=\"getProductInformationData()\"></app-bib-product-calc-data>\n        </app-bib-sub-section>\n\n        <app-bib-sub-section [title]=\"bibSections[2].children[2].title\">\n          <app-bib-section-content\n            [availableContent]=\"getContentForId(bibSections[2].children[2].id)\"\n            [inSubsection]=\"true\"\n            [readOnly]=\"true\"></app-bib-section-content>\n        </app-bib-sub-section>\n\n        <app-bib-sub-section [title]=\"bibSections[2].children[3].title\">\n          <app-bib-section-content\n            [availableContent]=\"getContentForId(bibSections[2].children[3].id)\"\n            [inSubsection]=\"true\"\n            [readOnly]=\"true\"></app-bib-section-content>\n        </app-bib-sub-section>\n      </app-bib-section>\n\n\n      <app-bib-section [title]=\"bibSections[3].title\">\n        <app-bib-sub-section [title]=\"bibSections[3].children[0].title\">\n          <app-bib-risk-indicator [placeholder]=\"false\" [riskNumber]=\"getRiskNumber()\">\n            <app-bib-section-content\n              [availableContent]=\"getContentForId(bibSections[3].children[2].id)\"\n              [inSubsection]=\"true\"\n              [readOnly]=\"true\"></app-bib-section-content>\n          </app-bib-risk-indicator>\n        </app-bib-sub-section>\n        <app-bib-section-content\n          [availableContent]=\"getContentForId(bibSections[3].children[0].id)\"\n          [readOnly]=\"true\">\n        </app-bib-section-content>\n        <app-bib-sub-section [vertical]=\"true\" [title]=\"bibSections[3].children[1].title\">\n          <app-bib-perf-szenarios [holdingPeriod]=\"getHoldingPeriod()\"></app-bib-perf-szenarios>\n        </app-bib-sub-section>\n        <app-bib-section-content\n          [availableContent]=\"getContentForId(bibSections[3].children[1].id)\"\n          [readOnly]=\"true\">\n        </app-bib-section-content>\n      </app-bib-section>\n\n\n\n      <app-bib-section [title]=\"bibSections[4].title\">\n        <app-bib-section-content\n          [availableContent]=\"getContentForId(bibSections[4].id)\"\n          [readOnly]=\"true\"></app-bib-section-content>\n      </app-bib-section>\n\n\n      <app-bib-section [title]=\"bibSections[5].title\">\n        <app-bib-section-content\n          [availableContent]=\"getContentForId(bibSections[5].id)\"\n          [readOnly]=\"true\"></app-bib-section-content>\n        <app-bib-sub-section [vertical]=\"true\" [title]=\"bibSections[5].children[0].title\">\n          <app-bib-section-content\n            [availableContent]=\"getContentForId(bibSections[5].children[0].id)\"\n            [inSubsection]=\"true\"\n            [readOnly]=\"true\"></app-bib-section-content>\n          <app-simple-table\n            [singleRowTable]=\"true\"\n            [rows]=\"rowsTimeline\"\n            [nameWidth]=\"'200'\"\n            [headerName]=\"{top: 'Anlage 10000 EUR', down: ''}\"\n            [valueHeaders]=\"valueHeaders\"\n            [valueColumnWidth]=\"costColumnWidth\"\n            [valueColumnRightAlign]=\"true\">\n          </app-simple-table>\n        </app-bib-sub-section>\n        <app-bib-sub-section [vertical]=\"true\" [title]=\"bibSections[5].children[1].title\">\n          <app-bib-section-content\n            [availableContent]=\"getContentForId(bibSections[5].children[1].id)\"\n            [inSubsection]=\"true\"\n            [readOnly]=\"true\"></app-bib-section-content>\n          <app-simple-table\n            [rows]=\"rowsCosts\"\n            [nameWidth]=\"'120'\"\n            [valueColumnWidth]=\"'160'\"\n            [valueColumnCentered]=\"true\"\n            [subrowNameWidth]=\"'100'\"\n            [headerName]=\"{top: 'Diese Tabelle zeigt die Auswirkungen auf die Rendite pro Jahr', down: 'Anlage 10000 EUR'}\">\n          </app-simple-table>\n        </app-bib-sub-section>\n      </app-bib-section>\n\n      <app-bib-section [title]=\"bibSections[6].title\">\n        <app-bib-section-content\n          [availableContent]=\"getContentForId(bibSections[6].id)\"\n          [readOnly]=\"true\"></app-bib-section-content>\n      </app-bib-section>\n\n      <div class=\"section7\">\n        <span class=\"section7__item\"><b>Börsennotierung:</b> {{boersennotierung}}</span>\n        <span class=\"section7__item\"><b>Letzter Handelstag:</b> {{letzterHandelstag | date:'dd.MM.yyyy'}}</span>\n      </div>\n\n      <app-bib-section [title]=\"bibSections[7].title\">\n        <app-bib-section-content\n          [availableContent]=\"getContentForId(bibSections[7].id)\"\n          [readOnly]=\"true\"></app-bib-section-content>\n      </app-bib-section>\n\n      <app-bib-section [title]=\"bibSections[8].title\">\n        <app-bib-section-content\n          [availableContent]=\"getContentForId(bibSections[8].id)\"\n          [readOnly]=\"true\"></app-bib-section-content>\n      </app-bib-section>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-management/pdf-view/pdf-view.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.bib-document {\n  padding: 0.5cm;\n  position: relative;\n  min-height: 89.1cm;\n  background: white;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n          box-shadow: 0px 0px 20px 0 #aaa;\n  font-size: 12px;\n  width: 21.0cm;\n  margin: 50px auto; }\n.bib-document__logo {\n    position: absolute;\n    right: 1cm;\n    top: 1cm;\n    max-width: 120px;\n    max-height: 30px; }\n.bib-document__title {\n    padding: 8px;\n    margin: 0;\n    font-size: 20px; }\n.bib-document__marker-page-one, .bib-document__marker-page-two, .bib-document__marker-page-three {\n    position: absolute;\n    width: 100%;\n    left: 0;\n    border-bottom: 1px dashed red; }\n.bib-document__marker-page-one:before, .bib-document__marker-page-two:before, .bib-document__marker-page-three:before {\n      color: red;\n      position: absolute;\n      width: 200px;\n      text-align: right;\n      right: 22.0cm;\n      top: -8px; }\n.bib-document__marker-page-one {\n    top: 29.7cm; }\n.bib-document__marker-page-one:before {\n      content: 'Ende Seite 1'; }\n.bib-document__marker-page-two {\n    top: 59.4cm; }\n.bib-document__marker-page-two:before {\n      content: 'Ende Seite 2'; }\n.bib-document__marker-page-three {\n    top: 89.1cm; }\n.bib-document__marker-page-three:before {\n      content: 'Maximal zulässige BIB-Länge'; }\n.section7 {\n  margin: 5px;\n  padding-left: 5px; }\n.section7__item {\n    margin-right: 150px; }\n.section7 b {\n    color: #71af2f; }\n@media print {\n  .bib-document {\n    width: auto; } }\n"

/***/ }),

/***/ "./src/app/product-management/pdf-view/pdf-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_types_service__ = __webpack_require__("./src/app/product-management/product/product-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bib_editor_bib_structure_service__ = __webpack_require__("./src/app/product-management/bib-editor/bib-structure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cost_service__ = __webpack_require__("./src/app/product-management/cost.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PdfViewComponent = (function () {
    function PdfViewComponent(bibService, productService, productTypeService, route, router, costService) {
        this.bibService = bibService;
        this.productService = productService;
        this.productTypeService = productTypeService;
        this.route = route;
        this.router = router;
        this.costService = costService;
        this.contents = {};
        this.bibSections = [];
        this.rowsCosts = [];
        this.upperSubRowUnit = 'EUR';
        this.lowerSubRowUnit = '%';
        this.valueHeaders = [];
        this.costColumnWidth = '140';
        this.showProductInfo = true;
    }
    PdfViewComponent.prototype.getContentForId = function (id) {
        return this.contents[id.toString()];
    };
    PdfViewComponent.prototype.setContentForId = function (id, content) {
        this.contents[id.toString()] = content;
        this.productService.getProduct().setBibContent(this.contents);
    };
    PdfViewComponent.prototype.getProductInfo = function () {
        return this.productService.getProduct();
    };
    PdfViewComponent.prototype.getProductInformationData = function () {
        var d = this.productService.getProduct().getProductInformationData();
        return d;
    };
    PdfViewComponent.prototype.getRiskNumber = function () {
        var calcResult = this.productService.getProduct().getCalculationResult();
        return calcResult[calcResult.length - 1].sri;
    };
    PdfViewComponent.prototype.getHoldingPeriod = function () {
        return this.product.getProductCalculationData().holdingPeriod;
    };
    PdfViewComponent.prototype.back = function () {
        this.router.navigate(['products']);
    };
    PdfViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.product = _this.productService.getProductById(params.id);
            _this.contents = _this.product.getBibContent();
            _this.bibSections = _this.bibService.getStructure(_this.productService.getProduct().producer);
            _this.showProductInfo = _this.productService.getProductInfoVisibility();
            _this.letzterHandelstag = _this.productService.getSpecificValue(_this.getProductInformationData(), 'letzerHandelstag');
            _this.boersennotierung = _this.productService.getSpecificValue(_this.getProductInformationData(), 'boersennotierung');
            _this.calculateCostTable();
            _this.setRiskIndicatorText();
            _this.setPerformanceScenarioText();
        });
    };
    PdfViewComponent.prototype.setRiskIndicatorText = function () {
        var updatedContent = __assign({}, this.contents);
        updatedContent[this.bibSections[3].children[0].id][0].value = this.productTypeService.generateRiskIndicatorText(this.getRiskNumber(), this.productService.getProduct());
        updatedContent[this.bibSections[3].children[2].id][0].value = this.productTypeService.generateRiskIndicatortextBox(this.productService.getProduct());
        updatedContent['34'][0].value = (updatedContent['34'][0].value).substring(0, updatedContent['34'][0].value.length - 2) + ' ' +
            this.getRiskNumber();
        this.contents = __assign({}, updatedContent);
    };
    PdfViewComponent.prototype.setPerformanceScenarioText = function () {
        var updatedContent = __assign({}, this.contents);
        updatedContent[this.bibSections[3].children[1].id][0].value = this.productTypeService.generatePerformanceScenarioText(this.productService.getProduct());
        this.contents = __assign({}, updatedContent);
    };
    PdfViewComponent.prototype.calculateCostTable = function () {
        var prodCalcData = this.productService.getProduct().getProductCalculationData();
        var entryCost = Number.parseInt(this.productService.getSpecificValue(prodCalcData, 'entryCost'));
        var exitCost = Number.parseInt(this.productService.getSpecificValue(prodCalcData, 'exitCost'));
        var portfolioTransactionCost = Number.parseInt(this.productService.getSpecificValue(prodCalcData, 'portfolioTransactionCost'));
        var otherRunningCosts = Number.parseInt(this.productService.getSpecificValue(prodCalcData, 'otherRunningCosts'));
        function calcYield(vals) {
            var result = [];
            vals.forEach(function (val) { result.push(val * 0.01); });
            return result;
        }
        var rowsValues, rowsYield;
        var holdingPeriod = Number.parseInt(this.productService.getSpecificValue(prodCalcData, 'holdingPeriod'));
        if (this.productService.getProduct().getCalculationResult()[0]['sri']) {
            rowsValues = this.costService.calculateValues(this.productService.getProduct());
            rowsYield = calcYield(rowsValues);
        }
        else {
            rowsValues = ['---', '---', '---'];
            rowsYield = ['---', '---', '---'];
        }
        this.valueHeaders = this.costService.calculateValueHeaders(this.productService.getProduct());
        if (holdingPeriod < 2) {
            this.costColumnWidth = '250';
        }
        else if (holdingPeriod === 2) {
            this.costColumnWidth = '200';
        }
        else {
            this.costColumnWidth = '140';
        }
        this.rowsTimeline = [
            {
                name: 'Gesamtkosten',
                values: [
                    {
                        values: rowsValues,
                        unit: 'EUR',
                        name: 'Was Sie nach Abzug der Kosten erhalten könnten'
                    }
                ]
            },
            {
                name: 'Auswirkung auf die Rendite pro Jahr',
                values: [
                    {
                        values: rowsYield,
                        unit: '%',
                        name: 'Jährliche Durchschnittsrendite'
                    }
                ]
            }
        ];
        var distributionCostsIncluded = this.productService.getSpecificValue(this.product.getProductCalculationData(), 'includedCostsVertrieb');
        var result = {
            entryCost: [entryCost * 0.001 + ' %'],
            exitCost: [exitCost * 0.001 + ' %'],
            portfolioTransactionCost: [portfolioTransactionCost * 0.001 + ' %'],
            otherRunningCosts: [otherRunningCosts * 0.001 + ' %'],
        };
        this.rowsCosts = this.productTypeService.generateCostRowsGuaranteeBonds(result, distributionCostsIncluded);
    };
    PdfViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pdf-view',
            template: __webpack_require__("./src/app/product-management/pdf-view/pdf-view.component.html"),
            styles: [__webpack_require__("./src/app/product-management/pdf-view/pdf-view.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__bib_editor_bib_structure_service__["a" /* BibStructureService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__bib_editor_bib_structure_service__["a" /* BibStructureService */],
            __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_2__product_product_types_service__["a" /* ProductTypesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__cost_service__["a" /* CostService */]])
    ], PdfViewComponent);
    return PdfViewComponent;
}());



/***/ }),

/***/ "./src/app/product-management/product-list-entry/product-list-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-list-entry\">\r\n  <div class=\"product-list-entry__header\">\r\n    <div class=\"product-list-entry__title\">\r\n      {{product.productName}}\r\n    </div>\r\n    <div class=\"product-list-entry__actions\">\r\n      <div class=\"text-btn\" (click)=\"generateBib(product.getId())\"\r\n           [ngClass]=\"{'text-btn__disabled text-btn__disabled__tooltip-container': !product.calcDataValid}\">\r\n        <span class=\"text-btn__icon\">\r\n          <i class=\"fas fa-calculator\"></i>\r\n        </span><span>BIB manuell generieren</span>\r\n        <span class=\"text-btn__disabled__tooltip-text\" *ngIf=\"!product.calcDataValid\">\r\n          Die Berechnungsgrundlage ist noch unvollständig!</span>\r\n      </div>\r\n      <div class=\"text-btn\" (click)=\"showPdf()\"\r\n           [ngClass]=\"{'text-btn__disabled text-btn__disabled__tooltip-container': !generationFinished}\">\r\n        <span class=\"text-btn__icon\">\r\n          <i class=\"far fa-file-pdf\"></i></span><span>PDF herunterladen</span>\r\n        <span class=\"text-btn__disabled__tooltip-text\" *ngIf=\"!generationFinished\">\r\n          Es wurde noch kein BIB generiert.</span>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"product-list-entry__divider\"></div>\r\n\r\n  <div class=\"product-list-entry__content\" (click)=\"editProduct.emit(product)\">\r\n    <div class=\"product-list-entry__content-block\" *ngIf=\"product.isin\">\r\n      <div class=\"product-list-entry__label\">ISIN</div>\r\n      <div class=\"product-list-entry__text\">{{product.isin}}</div>\r\n    </div>\r\n\r\n    <div class=\"product-list-entry__content-block\" *ngIf=\"product.wkn\">\r\n      <div class=\"product-list-entry__label\">WKN</div>\r\n      <div class=\"product-list-entry__text\">{{product.wkn}}</div>\r\n    </div>\r\n\r\n    <div class=\"product-list-entry__content-block\" *ngIf=\"product.description\" style=\"width: 390px\">\r\n      <div class=\"product-list-entry__label\">Kurzbeschreibung</div>\r\n      <div class=\"product-list-entry__text\">{{product.description}}</div>\r\n    </div>\r\n\r\n    <div class=\"product-list-entry__content-block\" *ngIf=\"!generationActive\">\r\n      <div class=\"product-list-entry__label\">\r\n        nächste auto. Aktualisierung\r\n      </div>\r\n      <div class=\"product-list-entry__text\">{{nextUpdateDate | date: 'dd.MM.yyyy'}} nach 00:00 Uhr</div>\r\n    </div>\r\n    <div class=\"product-list-entry__content-block\" *ngIf=\"generationActive\">\r\n      <div class=\"product-list-entry__label\">\r\n        nächste auto. Aktualisierung\r\n      </div>\r\n      <div class=\"product-list-entry__text\">\r\n        <div class=\"fa-1x\">\r\n          <i class=\"fas fa-sync fa-spin\"></i>\r\n        </div>\r\n        <div class=\"product-list-entry__auto-calc-info-text\">BIB wird aktuell erzeugt</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"product-list-entry__content-block\">\r\n      <div class=\"product-list-entry__label\">\r\n        letzte Aktualisierung\r\n      </div>\r\n      <div class=\"product-list-entry__text\">{{product.lastEdited | date: 'dd.MM.yyyy'}} {{product.lastEdited | date: 'HH:mm'}}</div>\r\n    </div>\r\n    <div class=\"product-list-entry__content-block\">\r\n      <div class=\"product-list-entry__label\">\r\n        geändert von\r\n      </div>\r\n      <div class=\"product-list-entry__text\">{{product.lastEditedBy}}</div>\r\n    </div>\r\n    <div class=\"product-list-entry__content-block\">\r\n      <div class=\"product-list-entry__label\">\r\n        aktuelle Version\r\n      </div>\r\n      <div class=\"product-list-entry__text\">{{product.versionNr}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/product-list-entry/product-list-entry.component.scss":
/***/ (function(module, exports) {

module.exports = ".product-list-entry {\n  background: white;\n  min-height: 100px;\n  -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n          box-shadow: 0px 0px 20px 0 #aaa;\n  border-radius: 2px;\n  margin: 0 15px;\n  margin-bottom: 16px; }\n  .product-list-entry:hover {\n    cursor: pointer; }\n  .product-list-entry:hover .product-list-entry__divider:after {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n  .product-list-entry__title {\n    color: #71af2f;\n    font-size: 20px;\n    -ms-flex-preferred-size: 400px;\n        flex-basis: 400px;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0; }\n  .product-list-entry__header {\n    padding: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .product-list-entry__divider {\n    height: 1px;\n    background: #dddddd;\n    position: relative;\n    overflow: hidden; }\n  .product-list-entry__divider:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      height: 1px;\n      width: 100%;\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      -webkit-transition: -webkit-transform 500ms;\n      transition: -webkit-transform 500ms;\n      transition: transform 500ms;\n      transition: transform 500ms, -webkit-transform 500ms;\n      background: #71af2f; }\n  .product-list-entry__auto-calc-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .product-list-entry__auto-calc-info-text {\n    padding-left: 8px; }\n  .product-list-entry__actions {\n    position: relative;\n    left: -8px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .product-list-entry__content {\n    padding: 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .product-list-entry__content-block {\n    padding-right: 32px;\n    max-width: 600px; }\n  .product-list-entry__label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 10px;\n    font-weight: bold;\n    color: #71af2f; }\n  .product-list-entry__text {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .text-btn {\n  color: black;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  padding: 0 8px;\n  background: rgba(113, 175, 47, 0);\n  height: 32px;\n  line-height: 32px;\n  border-radius: 2px;\n  display: inline-block; }\n  .text-btn:hover {\n    color: #71af2f;\n    cursor: pointer;\n    background: rgba(113, 175, 47, 0.05); }\n  .text-btn__icon {\n    margin-right: 8px; }\n  .text-btn__disabled {\n    color: #aaaaaa;\n    cursor: default; }\n  .text-btn__disabled:hover {\n      cursor: default;\n      background: transparent;\n      color: #aaaaaa; }\n  .text-btn__disabled__tooltip-container {\n      position: relative;\n      display: inline-block; }\n  .text-btn__disabled__tooltip-container:hover .text-btn__disabled__tooltip-text {\n        visibility: visible; }\n  .text-btn__disabled__tooltip-container .text-btn__disabled__tooltip-text {\n      visibility: hidden;\n      width: auto;\n      background-color: #71af2f;\n      color: white;\n      text-align: center;\n      padding: 10px;\n      margin: 5px;\n      border-radius: 20px;\n      font-size: small;\n      line-height: 16px;\n      /* Position the tooltip text - see examples below! */\n      position: absolute;\n      z-index: 1; }\n"

/***/ }),

/***/ "./src/app/product-management/product-list-entry/product-list-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_product__ = __webpack_require__("./src/app/product-management/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductListEntryComponent = (function () {
    function ProductListEntryComponent(router, route, httpClient, productsService) {
        this.router = router;
        this.route = route;
        this.httpClient = httpClient;
        this.productsService = productsService;
        this.editProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.generationActive = false;
        this.generationFinished = false;
    }
    ProductListEntryComponent.prototype.ngOnInit = function () {
        this.selectedProduct = this.productsService.getProductById(this.product.getId());
        this.generationFinished = this.selectedProduct.generationFinished ? this.selectedProduct.generationFinished : false;
        this.nextUpdateDate = new Date();
        this.nextUpdateDate.setDate(this.nextUpdateDate.getDate() + 1);
    };
    ProductListEntryComponent.prototype.generateBib = function (id) {
        var _this = this;
        this.generationActive = true;
        var product = this.productsService.getProductById(id);
        product.calculationResult = [];
        this.productsService.updateProduct(product);
        this.productsService.getProductById(id);
        this.productsService.sendCalculationRequest().then(function (res) {
            var calcResult = _this.productsService.getProduct().getCalculationResult();
            _this.generationActive = false;
            _this.generationFinished = true;
            product['generationFinished'] = true;
            product.calculationResult = calcResult;
            _this.productsService.updateProduct(product);
        });
    };
    ProductListEntryComponent.prototype.showPdf = function () {
        this.router.navigate(['/pdf/' + this.product.getId()], { relativeTo: this.route });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('product'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_product__["a" /* Product */])
    ], ProductListEntryComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProductListEntryComponent.prototype, "editProduct", void 0);
    ProductListEntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list-entry',
            template: __webpack_require__("./src/app/product-management/product-list-entry/product-list-entry.component.html"),
            styles: [__webpack_require__("./src/app/product-management/product-list-entry/product-list-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__products_service__["a" /* ProductsService */]])
    ], ProductListEntryComponent);
    return ProductListEntryComponent;
}());



/***/ }),

/***/ "./src/app/product-management/product-management-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductManagementRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products_component__ = __webpack_require__("./src/app/product-management/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_component__ = __webpack_require__("./src/app/product-management/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_view_pdf_view_component__ = __webpack_require__("./src/app/product-management/pdf-view/pdf-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'products/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__product_product_component__["a" /* ProductComponent */]
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */]
    },
    {
        path: 'pdf/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__pdf_view_pdf_view_component__["a" /* PdfViewComponent */]
    }
];
var ProductManagementRoutesModule = (function () {
    function ProductManagementRoutesModule() {
    }
    ProductManagementRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ProductManagementRoutesModule);
    return ProductManagementRoutesModule;
}());



/***/ }),

/***/ "./src/app/product-management/product-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_component__ = __webpack_require__("./src/app/product-management/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_component__ = __webpack_require__("./src/app/product-management/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fakeBackend_fake_backend_interceptor__ = __webpack_require__("./src/app/product-management/fakeBackend/fake-backend.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__productData_product_data_component__ = __webpack_require__("./src/app/product-management/productData/product-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bib_editor_bib_editor_component__ = __webpack_require__("./src/app/product-management/bib-editor/bib-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bib_section_bib_section_component__ = __webpack_require__("./src/app/product-management/bib-section/bib-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bib_sub_section_bib_sub_section_component__ = __webpack_require__("./src/app/product-management/bib-sub-section/bib-sub-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bib_section_content_bib_section_content_component__ = __webpack_require__("./src/app/product-management/bib-section-content/bib-section-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bib_product_info_bib_product_info_component__ = __webpack_require__("./src/app/product-management/bib-product-info/bib-product-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bib_product_calc_data_bib_product_calc_data_component__ = __webpack_require__("./src/app/product-management/bib-product-calc-data/bib-product-calc-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bib_risk_indicator_bib_risk_indicator_component__ = __webpack_require__("./src/app/product-management/bib-risk-indicator/bib-risk-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__bib_perf_szenarios_bib_perf_szenarios_component__ = __webpack_require__("./src/app/product-management/bib-perf-szenarios/bib-perf-szenarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__simple_table_simple_table_component__ = __webpack_require__("./src/app/product-management/simple-table/simple-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_ui_switch__ = __webpack_require__("./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__product_list_entry_product_list_entry_component__ = __webpack_require__("./src/app/product-management/product-list-entry/product-list-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__product_product_types_service__ = __webpack_require__("./src/app/product-management/product/product-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__product_content_service_service__ = __webpack_require__("./src/app/product-management/product/content-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pdf_view_pdf_view_component__ = __webpack_require__("./src/app/product-management/pdf-view/pdf-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__risk_service__ = __webpack_require__("./src/app/product-management/risk.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__cost_service__ = __webpack_require__("./src/app/product-management/cost.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var providers = [
    __WEBPACK_IMPORTED_MODULE_8__products_service__["a" /* ProductsService */],
    __WEBPACK_IMPORTED_MODULE_23__product_product_types_service__["a" /* ProductTypesService */],
    __WEBPACK_IMPORTED_MODULE_24__product_content_service_service__["a" /* ContentService */],
    __WEBPACK_IMPORTED_MODULE_27__risk_service__["a" /* RiskService */],
    __WEBPACK_IMPORTED_MODULE_28__cost_service__["a" /* CostService */]
];
if (__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].useMockBackend === true) {
    providers.push({
        provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
        useClass: __WEBPACK_IMPORTED_MODULE_5__fakeBackend_fake_backend_interceptor__["a" /* FakeBackendInterceptor */],
        multi: true
    });
}
var ProductManagementModule = (function () {
    function ProductManagementModule() {
    }
    ProductManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_26__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21_ngx_ui_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* ReactiveFormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_9__productData_product_data_component__["a" /* ProductDataComponent */],
                __WEBPACK_IMPORTED_MODULE_12__bib_editor_bib_editor_component__["a" /* BibEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__bib_section_bib_section_component__["a" /* BibSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bib_sub_section_bib_sub_section_component__["a" /* BibSubSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_15__bib_section_content_bib_section_content_component__["a" /* BibSectionContentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__bib_product_info_bib_product_info_component__["a" /* BibProductInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__bib_product_calc_data_bib_product_calc_data_component__["a" /* BibProductCalcDataComponent */],
                __WEBPACK_IMPORTED_MODULE_18__bib_risk_indicator_bib_risk_indicator_component__["a" /* BibRiskIndicatorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__bib_perf_szenarios_bib_perf_szenarios_component__["a" /* BibPerfSzenariosComponent */],
                __WEBPACK_IMPORTED_MODULE_20__simple_table_simple_table_component__["a" /* SimpleTableComponent */],
                __WEBPACK_IMPORTED_MODULE_22__product_list_entry_product_list_entry_component__["a" /* ProductListEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pdf_view_pdf_view_component__["a" /* PdfViewComponent */],
            ],
            providers: providers,
        })
    ], ProductManagementModule);
    return ProductManagementModule;
}());



/***/ }),

/***/ "./src/app/product-management/product/content-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentService = (function () {
    function ContentService() {
    }
    ContentService.prototype.parseContent = function (product, unparsedContent) {
        var parsedContent = unparsedContent;
        var foundMatches = unparsedContent.match(/\[.*?\]/g);
        if (!foundMatches) {
            return unparsedContent;
        }
        var elements = foundMatches.map(function (match) {
            return match.slice(1, -1);
        });
        elements.forEach(function (element) {
            var oldElement = '[' + element + ']';
            var newElement;
            if (element.includes('productInformationData') && product.getProductInformationData().length > 0) {
                var value_1 = element.substring('productInformationData'.length + 1, element.length);
                var foundValue = product.getProductInformationData().filter(function (obj) {
                    return obj.name === value_1;
                })[0];
                if (foundValue.type === 'date') {
                    newElement = new Date(foundValue.value).toLocaleDateString('de');
                }
                else {
                    newElement = foundValue.value;
                }
            }
            else if (element.includes('productCalculationData') && product.getProductCalculationData().length > 0) {
                var value_2 = element.substring('productCalculationData'.length + 1, element.length);
                var foundValue = product.getProductCalculationData().filter(function (obj) {
                    return obj.name === value_2;
                })[0];
                if (foundValue.type === 'date') {
                    newElement = new Date(foundValue.value).toLocaleDateString('de');
                }
                else {
                    newElement = foundValue.value;
                }
            }
            else {
                newElement = product[element];
            }
            parsedContent = parsedContent.replace(oldElement, newElement);
        });
        return parsedContent;
    };
    ContentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "./src/app/product-management/product/product-types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fakeBackend_productTypes_mock__ = __webpack_require__("./src/app/product-management/fakeBackend/productTypes.mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTypesService = (function () {
    function ProductTypesService(productsService) {
        this.productsService = productsService;
        this.productTypes = [];
        this.riskIndicatorA = new Map();
        this.riskIndicatorB = new Map();
        this.riskIndicatorC = new Map();
        this.productTypes = __WEBPACK_IMPORTED_MODULE_1__fakeBackend_productTypes_mock__["a" /* productTypes */];
        this.riskIndicatorA.set('1', ' der niedrigsten');
        this.riskIndicatorA.set('2', ' einer niedrigen');
        this.riskIndicatorA.set('3', ' einer mittelniedrigen');
        this.riskIndicatorA.set('4', ' einer mittleren');
        this.riskIndicatorA.set('5', ' einer mittelhohen');
        this.riskIndicatorA.set('6', ' der zweithöchsten');
        this.riskIndicatorA.set('7', ' der höchsten');
        this.riskIndicatorB.set('1', ' sehr niedrig');
        this.riskIndicatorB.set('2', ' niedrig');
        this.riskIndicatorB.set('3', ' mittelniedrig');
        this.riskIndicatorB.set('4', ' mittel');
        this.riskIndicatorB.set('5', ' mittelhoch');
        this.riskIndicatorB.set('6', ' hoch');
        this.riskIndicatorB.set('7', ' sehr hoch');
        this.riskIndicatorC.set('1', ' äußerst unwahrscheinlich');
        this.riskIndicatorC.set('2', ' äußerst unwahrscheinlich');
        this.riskIndicatorC.set('3', ' unwahrscheinlich');
        this.riskIndicatorC.set('4', ' möglich');
        this.riskIndicatorC.set('5', ' wahrscheinlich');
        this.riskIndicatorC.set('6', ' sehr wahrscheinlich');
        this.riskIndicatorC.set('7', ' sehr wahrscheinlich');
    }
    ProductTypesService.prototype.generateTypeContentsGuaranteeBonds = function () {
        var productType = this.productTypes.find(function (type) { return type.name === 'Garantieanleihen'; });
        var contents = {
            '1': [
                {
                    id: '1a',
                    value: 'Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. ' +
                        'Es handelt sich nicht um Werbematerial. Diese Informationen sind gesetzlich vorgeschrieben, um Ihnen dabei zu helfen, ' +
                        'die Art, das Risiko, die Kosten sowie die möglichen Gewinne und Verluste dieses Produkts zu verstehen, ' +
                        'und Ihnen dabei zu helfen, es mit anderen Produkten zu vergleichen.'
                },
                {
                    id: '1b',
                    value: 'Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. ' +
                        'Es handelt sich nicht um Werbematerial. Diese Informationen sind gesetzlich vorgeschrieben.'
                },
                {
                    id: '1c',
                    value: 'Dieses Informationsblatt stellt Ihnen wesentliche Informationen über dieses Anlageprodukt zur Verfügung. ' +
                        'Es handelt sich nicht um Werbematerial. Diese Informationen sind gesetzlich vorgeschrieben.'
                }
            ],
            '2': [],
            '3': [],
            '31': [
                {
                    id: '31a',
                    value: 'Inhaberschuldverschreibung nach deutschem Recht'
                }
            ],
            '32': [
                {
                    id: '32a',
                    value: 'Das Produkt zielt auf die Erwirtschaftung eines Ertrags in Form einer Barzahlung am ' +
                        '[productInformationData.rueckzahlungstermin] ab. Die Höhe dieser Zahlung hängt von der Wertentwicklung des ' +
                        '[productInformationData.underlying] ab. Bei Beendigung des Produkts am [productInformationData.rueckzahlungstermin] ' +
                        'erhält der Anleger eine Barzahlung entsprechend dem Ergebnis aus (i) dem endgültigen Referenzstand multipliziert mit dem ' +
                        'Bezugsverhältnis. \n Gemäß den Produktbedingungen werden bestimmte unten angeführte Tage angepasst, falls das jeweilige ' +
                        'Datum entweder kein Geschäftstag oder kein Handelstag ist (je nachdem). Wenn eine Anpassung erfolgt, kann dies einen ' +
                        'etwaigen Ertrag des Anlegers beeinflussen.'
                }
            ],
            '33': [
                {
                    id: '33a',
                    value: 'Die Emittentin kann das Produkt mit sofortiger Wirkung beenden, falls die Bedingungen offensichtliche ' +
                        'schriftliche oder mathematische Fehler enthalten oder bestimmte außerordentliche Ereignisse, die in den Bedingungen ' +
                        'beschrieben sind, eintreten. Solche außerordentliche Ereignisse sind beispielsweise (1) wesentliche Änderungen, ' +
                        'insbesondere in Bezug auf den [productInformationData.underlying], wie z.B. wenn ein Index nicht mehr berechnet wird, und' +
                        ' (2) Ereignisse, insbesondere aufgrund von Änderungen in bestimmten externen Bedinungen, die die Emittentin daran ' +
                        'hindern, ihren Verpflichtungen im Zusammenhang mit dem Produkt nachzukommen, oder - in Abhängigkeit von der Ausgestaltung ' +
                        'der Bedingungen des Wertpapiers - die das Produkt und/oder die Emittentin anderweitig beeinflussen. Im Falle einer ' +
                        'sofortigen Beendigung kann ein etwaiger Ertrag deutlich unter dem Kaufpreis liegen, jedoch wird er den Marktwert des ' +
                        'Produkts und, falls diese höher ist, eine etwaige Mindestrückzahlung widerspiegeln (in manchen Fällen kann stattdessen ' +
                        'auch der diesem Betrag entsprechende aufgezinste Wert bei Fälligkeit des Produkts ausgezahlt werden). Stattdessen kann ' +
                        'die Emittentin auch die Bedingungen ändern.'
                }
            ],
            '34': [
                {
                    id: '34a',
                    value: 'Das Produkt ist für Privatkunden bestimmt, die das Ziel der allgemeinen Vermögensbildung/ Vermögensoptimierung ' +
                        'verfolgen und einen kurzfristigen Anlagehorizont haben. Bei dem vorliegenden Produkt handelt es sich um ein Produkt ' +
                        'für Anleger mit erweiterten Kenntnissen und/oder Erfahrungen mit Finanzprodukten. Der Anleger kann Verluste tragen bis ' +
                        'zum vollständigen Verlust des eingesetzen Kapitals und legt keinen Wert auf Kapitalschutz. Das Produkt fällt bei der ' +
                        'Risiko- und Renditebewertung auf einer Skala von 1 (sicherheitsorientiert; sehr geringe bis geringe Rendite) bis 7 ' +
                        '(sehr risikobereit; höchste Rendite) in Risikoklasse 2.'
                }
            ],
            '4': [],
            '41': [
                {
                    id: '41a',
                    value: 'Der Gesamtrisikoindikator hilft Ihnen, das mit diesem Produkt verbundene Risiko im Vergleich zu anderen Produkten ' +
                        'einzuschätzen. Er zeigt, wie hoch die Wahrscheinlichkeit ist, dass Sie bei diesem Produkt Geld verlieren, ' +
                        'weil sich die Märkte in einer bestimmten Weise entwickeln oder wir nicht in der Lage sind, Sie auszubezahlen. Wir haben ' +
                        'dieses Produkt auf einer Skala von 1 bis 7 in die Risikoklasse 2 eingestuft, wobei 2 einer mittelniedrigen Risikoklasse ' +
                        'entspricht. Das Risiko potenzieller Verluste aus der künftigen Wertentwicklung wird als sehr niedrig eingestuft. ' +
                        'Bei ungünstigen Marktbedingungen ist es unwahrscheinlich, dass unsere Fähigkeit beeinträchtigt wird, Sie auszuzahlen. ' +
                        'Sie haben Anspruch darauf, mindestens 100,00 % Ihres Kapitals zurückzuerhalten. Darüber hinausgehende Beträge und ' +
                        'zusätzliche Renditen sind von der künftigen Marktentwicklung abhängig und daher ungewiss. Wenn wir Ihnen nicht das ' +
                        'zahlen können, was Ihnen zusteht, könnten Sie das gesamte angelegte Kapital verlieren.'
                }
            ],
            '42': [
                {
                    id: '42a',
                    value: 'Diese Tabelle zeigt, wie viel Sie bis zum [productCalculationData.holdingPeriod] unter verschiedenen Szenarien ' +
                        'zurückerhalten könnten, wenn Sie 10.000 EUR anlegen. Die dargestellten Szenarien zeigen, wie sich Ihre Anlage entwickeln ' +
                        'könnte. Sie können sie mit den Szenarien für andere Produkte vergleichen. Die dargestellten Szenarien entsprechen einer ' +
                        'Schätzung der künftigen Wertentwicklung aufgrund früherer Wertänderungen dieses Investments; sie sind kein exakter ' +
                        'Indikator. Wie viel Sie tatsächlich erhalten, hängt davon ab, wie sich der Markt entwickelt und wie lange Sie die ' +
                        'Anlage/das Produkt halten. Das Stressszenario zeigt, was Sie im Fall extremer Marktbedingungen zurückerhalten könnten ' +
                        'und berücksichtigt nicht den Fall, dass wir womöglich nicht in der Lage sind, die Auszahlung vorzunehmen. ' +
                        'In den angeführten Zahlen sind sämtliche Kosten des Produkts selbst enthalten sowie die Kosten Ihres Beraters oder ' +
                        'Ihrer Vertriebsstelle. Bei den angeführten Zahlen ist Ihre persönliche steuerliche Situation nicht berücksichtigt, ' +
                        'die sich ebenfalls darauf auswirken kann, wie viel Sie zurück erhalten.'
                }
            ],
            '43': [
                {
                    id: '43a',
                    value: 'Dieser Risikoindikator beruht auf der Annahme, dass Sie das Produkt bis zum [productCalculationData.term] halten. ' +
                        'Wenn Sie die Anlage frühzeitig auflösen, kann das tatsächliche Risiko erheblich davon abweichen und Sie erhalten unter ' +
                        'Umständen weniger zurück. Es kann sein, dass Sie Ihr Produkt nicht ohne Weiteres veräußern können oder dass Sie es zu ' +
                        'einem Preis veräußern müssen, der den Betrag, den Sie zurückerhalten, erheblich schmälert.'
                }
            ],
            '5': [
                {
                    id: '5a',
                    value: 'Der Anleger trägt das Risiko, dass die Emittentin möglicherweise nicht in der Lage ist, ihre Verpflichtungen ' +
                        'in Bezug auf das Produkt zu erfüllen - z.B. im Fall einer Insolvenz (Zahlungsunfähigkeit / Überschuldung) oder einer ' +
                        'behördlichen Anordnung von Abwicklungsmaßnahmen. Im Falle einer Krise der Emittentin kann eine solche Anordnung einer ' +
                        'Abwicklungsbehörde auch im Vorfeld eines Insolvenzverfahrens erteilt werden. Dabei stehen der Abwicklungsbehörde ' +
                        'weitreichende Eingriffsbefugnisse zu. Unter anderem kann sie Rechte derInvestoren auf Null herabsetzen, das Produkt ' +
                        'beenden oder in Aktien der Emittentin umwandeln und Rechte der Anleger aussetzen. Hinsichtlich der grundsätzlichen ' +
                        'Rangfolge von Verpflichtungen der Emittentin im Fall von Maßnahmen der Abwicklungsbehörde, wird der Anleger auf ' +
                        'www.bafin.de verwiesen und aufgefordert, nach dem Stichwort "Haftungskaskade" zu suchen. Ein Totalverlust des eingesetzten ' +
                        'Kapitals des Anlegers ist möglich. Das Produkt ist eine Schuldverschreibung und unterliegt als solche keinem ' +
                        'Einlagensicherungssystem.'
                }
            ],
            '6': [
                {
                    id: '6a',
                    value: 'Die Renditeminderung (Reduction in Yield - RIY) zeigt, wie sich die von Ihnen gezahlten Gesamtkosten auf die ' +
                        'Anlagerendite, die Sie erhalten könnten, auswirken. In den Gesamtkosten sind einmalige, laufende und zusätzliche ' +
                        'Kosten berücksichtigt. Die hier ausgewiesenen Beträge entsprechen den kumulierten Kosten des Produkts bei drei verschiedenen '
                        + 'Haltedauern.  Sie beinhalten etwaige Vertragsstrafen bei vorzeitigem Ausstieg. Bei den angegebenen Zahlen wird ' +
                        'davon ausgegangen, dass Sie 10.000 EUR anlegen. Die Werte sind Schätzungen und können in der Zukunft anders ausfallen.'
                }
            ],
            '61': [
                {
                    id: '61a',
                    value: 'Die Person, die Ihnen dieses Produkt verkauft oder Sie dazu berät, kann Ihnen weitere Kosten in Rechnung stellen. ' +
                        'Sollte dies der Fall sein, informiert Sie die Person über diese Kosten und zeigt Ihnen, wie sich sämtliche Kosten im ' +
                        'Zeitverlauf auf Ihre Anlage auswirken werden.'
                }
            ],
            '62': [
                {
                    id: '62a',
                    value: 'Aus der nachfolgenden Tabelle geht Folgendes hervor: - wie sich die verschiedenen Arten von Kosten jedes Jahr auf ' +
                        'die Anlagerendite auswirken, die Sie am Ende der empfohlenen Haltedauer erhalten könnten; ' +
                        '- was die verschiedenen Kostenkategorien beinhalten.'
                }
            ],
            '7': [
                {
                    id: '7a',
                    value: 'Das Produkt zielt darauf ab, für Sie den oben unter 1. "Um welche Art von Produkt handelt es sich?" ' +
                        'beschriebenen Ertrag zu erwirtschaften. Allerdings nur, wenn das Produkt bis zur Fälligkeit gehalten wird. ' +
                        'Es wird empfohlen, das Produkt bis zum [productCalculationData.term] zu halten. Das Produkt gewährleistet nicht die ' +
                        'Möglichkeit vorzeitig aus dem Produkt auszusteigen, außer durch den Verkauf des Produkts, entweder (i) über die Börse ' +
                        '(sofern das Produkt gelistet ist) oder (ii) außerbörslich, soweit ein Angebot für ein solches Produkt existiert. ' +
                        'Für eine solche Transaktion werden keine Gebühren oder Sanktionen von der Emittentin erhoben, jedoch kann eine ' +
                        'Ausführungsgebühr von Ihrem Vermittler, falls zutreffend, berechnet werden. Durch den Verkauf des Produkts vor ' +
                        'seiner Fälligkeit, erhalten Sie möglicherweise weniger zurück, als wenn Sie das Produkt bis zur Fälligkeit gehalten hätten. '
                }
            ],
            '8': [
                {
                    id: '8a',
                    value: 'Beschwerden über das Verhaltend der Person, die Sie zu dem Produkt berät oder es verkauft, ' +
                        'können direkt an diese Person gerichtet werden. Beschwerden über das Produkt oder über den Hersteller des Produktes ' +
                        'können schriftlich wie folgt erhoben werden: über die Postadresse ([address]), auf der Website [web], oder ' +
                        'per Email an [email].'
                }
            ],
            '9': [
                {
                    id: '9a',
                    value: 'Allgemeine Informationen zu Finanzinstrumenten enthalten die Broschüren „Basisinformationen über Finanzderivate“, ' +
                        '„Basisinformationen über Termingeschäfte“ und das Hinweisblatt „Risiken bei Termingeschäften“, ' +
                        'die Sie bei der [producer] kostenlos anfordern können.'
                }
            ]
        };
        productType.contents = contents;
        return productType;
    };
    ProductTypesService.prototype.generateCostRowsGuaranteeBonds = function (costResult, distributionCostsIncluded) {
        var conditionalText = distributionCostsIncluded === true ?
            'Die Kosten für den Vertrieb Ihres Produkts sind darin inbegriffen.' : '';
        var rowsCosts = [
            {
                name: 'Einmalige Kosten',
                values: [
                    {
                        values: costResult['entryCost'],
                        name: 'Einstiegskosten',
                        desc: 'Auswirkungen der Kosten, die Sie zahlen müssen, wenn Sie Ihre Anlage tätigen; Auswirkungen der im Preis ' +
                            'bereits inbegriffenen Kosten. Angegeben sind die Höchtskosten, eventuell zahlen Sie weniger. ' + conditionalText
                    },
                    {
                        values: costResult['exitCost'],
                        name: 'Ausstiegskosten',
                        desc: 'Auswirkungen der Kosten, die anfallen, wenn Sie bei Fälligkeit aus ihrer Anlage aussteigen.'
                    },
                ]
            },
            {
                name: 'Laufende Kosten',
                values: [
                    {
                        values: costResult['portfolioTransactionCost'],
                        name: 'Portfolio-Transatkionskosten',
                        desc: 'Auswirkungen der Kosten, die dafür anfallen, dass wir für das Produkt zu Grunde liegene Anlagen kaufen und verkaufen.'
                    },
                    {
                        values: costResult['otherRunningCosts'],
                        name: 'Sonstige laufende Kosten',
                        desc: 'Auswirkungen der Kosten, die wir Ihnen jährlich für die Anlageverwaltung abziehen, ' +
                            'sowie der in Abschnitt II genannten Kosten.'
                    },
                ]
            },
        ];
        return rowsCosts;
    };
    ProductTypesService.prototype.gesamtRisikoIndikatorOptions = function (product) {
        if (this.productsService.getSpecificValue(product.getProductCalculationData(), 'liqRiskOrIlliq') === 'illiquide'
            && !this.productsService.getSpecificValue(product.getProductCalculationData(), 'terminationRight')) {
            return 'Eine vorzeitige Auflösung ist nicht möglich.';
        }
        else if (this.productsService.getSpecificValue(product.getProductCalculationData(), 'liqRiskOrIlliq') === 'illiquide'
            && this.productsService.getSpecificValue(product.getProductCalculationData(), 'terminationRight')) {
            return 'Eine vorzeitige Auflösung ist unter Umständen nicht möglich. ' +
                'Bei einer vorzeitigen Auflösung entstehen Ihnen möglicherweise erhebliche Kosten.';
        }
        else if (this.productsService.getSpecificValue(product.getProductCalculationData(), 'liqRiskOrIlliq') === 'liqRisk'
            && !this.productsService.getSpecificValue(product.getProductCalculationData(), 'terminationRight')) {
            return 'Es kann sein, dass Sie Ihr Produkt nicht ohne Weiteres veräußern können oder dass Sie es ' +
                'zu einem Preis veräußern müssen, der den Betrag, den Sie zurückerhalten, erheblich schmälert.';
        }
        else if (this.productsService.getSpecificValue(product.getProductCalculationData(), 'liqRiskOrIlliq') === 'liqRisk'
            && this.productsService.getSpecificValue(product.getProductCalculationData(), 'terminationRight')) {
            return 'Es kann sein, dass Sie Ihr Produkt nicht ohne Weiteres kündigen können oder dass Sie es zu einem Preis ' +
                'kündigen müssen, der den Betrag, den Sie zurückerhalten, erheblich schmälert.';
        }
        else {
            return '';
        }
    };
    ProductTypesService.prototype.generateRiskIndicatortextBox = function (product) {
        var newText = 'Dieser Risikoindikator beruht auf der Annahme, dass Sie das Produkt bis zum [productCalculationData.term] halten.';
        newText += this.productsService.getSpecificValue(product.getProductCalculationData(), 'otherHoldingPeriod') ?
            ' Wenn Sie die Anlage frühzeitig auflösen, kann das tatsächliche Risiko erheblich davon abweichen und Sie erhalten unter ' +
                'Umständen weniger zurück.' : '';
        newText += this.gesamtRisikoIndikatorOptions(product);
        return newText;
    };
    ProductTypesService.prototype.generateRiskIndicatorText = function (riskValue, product) {
        var riskText = 'Der Gesamtrisikoindikator hilft Ihnen, das mit diesem Produkt verbundene Risiko im Vergleich zu anderen Produkten ' +
            'einzuschätzen. Er zeigt, wie hoch die Wahrscheinlichkeit ist, dass Sie bei diesem Produkt Geld verlieren, ' +
            'weil sich die Märkte in einer bestimmten Weise entwickeln oder wir nicht in der Lage sind, Sie auszubezahlen. Wir haben ' +
            'dieses Produkt auf einer Skala von 1 bis 7 in die Risikoklasse ' + riskValue + ' eingestuft, wobei ' + riskValue +
            this.riskIndicatorA.get(riskValue.toString()) + ' Risikoklasse entspricht. Das Risiko potenzieller Verluste aus der künftigen ' +
            'Wertentwicklung wird als' + this.riskIndicatorB.get(riskValue.toString()) + ' eingestuft. Bei ungünstigen Marktbedingungen ist es ' +
            this.riskIndicatorC.get(riskValue.toString()) + ', dass unsere Fähigkeit beeinträchtigt wird, Sie auszuzahlen.';
        riskText +=
            this.productsService.getSpecificValue(product.getProductCalculationData(), 'currencyRisk') ?
                '<b> Bitte beachten Sie das Währungsrisiko. Sie erhalten Zahlungen in einer ' +
                    'anderen Währung, sodass Ihre endgültige Rendite vom Wechselkurs zwischen den beiden Währungen abhängen wird. ' +
                    'Dieses Risiko ist bei dem oben angegebenen Indikator nicht berücksichtigt.</b>' : '';
        riskText +=
            this.productsService.getSpecificValue(product.getProductCalculationData(), 'possibleTopUp') ?
                'Unter Umständen kann es sein, dass Sie weitere Zahlungen leisten müssen, ' +
                    'um Verluste auszugleichen. <b>Insgesamt könnten Sie erheblich mehr verlieren, als Sie investiert haben.</b> ' : '';
        riskText +=
            this.productsService.getSpecificValue(product.getProductCalculationData(), 'otherRisks') ?
                this.productsService.getSpecificValue(product.getProductCalculationData(), 'otherRisks') : '';
        riskText +=
            this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionMarketRisk') ?
                ' Sie haben Anspruch darauf, mindestens ' +
                    '[productCalculationData.capitalProtectionMarketRisk] % Ihres Kapitals zurückzuerhalten. Darüber hinausgehende Beträge und ' +
                    'zusätzliche Renditen sind von der künftigen Marktentwicklung abhängig und daher ungewiss. ' + this.generateMarketRiskText(product)
                : 'Dieses Produkt beinhaltet keinen Schutz vor künftigen Marktentwicklungen, sodass Sie das angelegte Kapital ganz ' +
                    'oder teilweise verlieren könnten. ';
        riskText +=
            this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionCreditRisk') ?
                'Wenn wir Ihnen nicht das zahlen können, was Ihnen zusteht, ' +
                    'könnten Sie das gesamte angelegte Kapital verlieren. ' : '';
        riskText +=
            this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionOther') ?
                'Möglicherweise profitieren Sie jedoch von einer ' +
                    'Verbraucherschutzregelung (siehe Abschnitt „Was geschieht, wenn wir nicht in der Lage sind, die Auszahlung vorzunehmen?“). ' +
                    'Dieser Schutz wird bei dem oben angegebenen Indikator nicht berücksichtigt. ' : '';
        return riskText;
    };
    ProductTypesService.prototype.generateMarketRiskText = function (product) {
        var result = '';
        if (this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionMarketRiskLimited')) {
            result += 'Dieser Schutz vor künftigen Marktentwicklungen gilt jedoch nicht, wenn Sie ';
            result +=
                this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionMarketRiskLimited')
                    === 'time' ? 'vor ' +
                    this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionMarketRiskLimitedOption')
                    + ' einlösen.' : '';
            result +=
                this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionMarketRiskLimited')
                    === 'payments' ? 'Ihre Zahlungen nicht fristgerecht leisten.' : '';
            result +=
                this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionMarketRiskLimited')
                    === 'other' ?
                    this.productsService.getSpecificValue(product.getProductCalculationData(), 'capitalProtectionMarketRiskLimitedOption')
                    : '';
        }
        return result;
    };
    ProductTypesService.prototype.generatePerformanceScenarioText = function (product) {
        var text = 'Diese Tabelle zeigt, wie viel Sie ';
        text += Number.parseInt(this.productsService.getSpecificValue(product.getProductCalculationData(), 'holdingPeriod')) > 1 ?
            'in den nächsten [productCalculationData.holdingPeriod] Jahren ' : ' im nächsten Jahr ';
        text += 'unter verschiedenen ' +
            'Szenarien zurückerhalten könnten, wenn Sie 10.000,00 EUR anlegen. Die dargestellten Szenarien zeigen, wie sich Ihre Anlage ' +
            'entwickeln könnte. Sie können sie mit den Szenarien für andere Produkte vergleichen. Die dargestellten Szenarien entsprechen ' +
            'einer Schätzung der künftigen Wertentwicklung aufgrund früherer Wertänderungen dieses Investments; ' +
            'sie sind kein exakter Indikator. Wie viel Sie tatsächlich erhalten, hängt davon ab, wie sich der Markt entwickelt ' +
            'und wie lange Sie die Anlage/das Produkt halten. Das Stressszenario zeigt, was Sie im Fall extremer Marktbedingungen ' +
            'zurückerhalten könnten und berücksichtigt nicht den Fall, dass wir womöglich nicht in der Lage sind, die Auszahlung vorzunehmen.';
        text += (this.productsService.getSpecificValue(product.getProductCalculationData(), 'liqRiskOrIlliq') === 'illiquide'
            && !this.productsService.getSpecificValue(product.getProductCalculationData(), 'terminationRight')) ?
            'Dieses Produkt kann nicht aufgelöst werden. Deshalb lässt ' +
                'sich schwer abschätzen, wie viel Sie zurückerhalten, wenn Sie es vor Ende der empfohlenen Haltedauer einlösen. ' +
                'Es kann sein, dass Sie es nicht vorzeitig einlösen können oder dass Ihnen bei der vorzeitigen Einlösung ' +
                'ein hoher Verlust entsteht. ' : '';
        text += (this.productsService.getSpecificValue(product.getProductCalculationData(), 'liqRiskOrIlliq') === 'illiquide'
            && this.productsService.getSpecificValue(product.getProductCalculationData(), 'terminationRight')) ?
            'Dieses Produkt kann nicht ohne Weiteres aufgelöst werden. ' +
                'Deshalb lässt sich schwer abschätzen, wie viel Sie zurückerhalten, wenn Sie es vor Ende der empfohlenen Haltedauer einlösen. ' +
                'Es kann sein, dass Sie es nicht vorzeitig einlösen können oder dass Ihnen bei der vorzeitigen Einlösung ' +
                'ein hoher Verlust entsteht. ' : '';
        text += ' In den angeführten Zahlen sind sämtliche Kosten des Produkts selbst enthalten';
        text += !(this.productsService.getSpecificValue(product.getProductCalculationData(), 'includedCostsVertrieb')) ?
            ', jedoch unter Umständen nicht alle Kosten, die Sie an Ihren Berater oder Ihre Vertriebsstelle ' +
                'zahlen müssen.' : ', sowie die Kosten Ihres Beraters oder Ihrer Vertriebsstelle.';
        text += ' Bei den angeführten Zahlen ist Ihre persönliche steuerliche Situation nicht berücksichtigt, ' +
            'die sich ebenfalls darauf auswirken kann, wie viel Sie zurückerhalten.';
        return text;
    };
    ProductTypesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */]])
    ], ProductTypesService);
    return ProductTypesService;
}());



/***/ }),

/***/ "./src/app/product-management/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-section-menu [title]=\"getProductName()\">\r\n  <div *ngIf=\"!calcFormValid && productInfoValid && prodFormValid\" class=\"error-message\">\r\n    Die Berechnungsgrundlage ist noch unvollständig!\r\n  </div>\r\n  <div *ngIf=\"!prodFormValid && productInfoValid\" class=\"error-message\">\r\n    Die Informationen zum Produkt sind noch unvollständig!\r\n  </div>\r\n  <div *ngIf=\"!productInfoValid\" class=\"error-message\">\r\n    Die allgemeinen Produktdaten sind unvollständig!\r\n  </div>\r\n  <div>\r\n    <button class=\"btn btn-danger\" (click)=\"back()\">\r\n      <span><i class=\"fa fa-times\"></i></span>\r\n      <span>Abbrechen</span>\r\n    </button>\r\n    <button class=\"btn btn-primary\"\r\n            (click)=\"saveProductChanges()\"\r\n            [disabled]=\"!productInfoValid\">\r\n      <span><i class=\"fa fa-check\"></i></span>\r\n      <span>Änderungen speichern</span>\r\n    </button>\r\n  </div>\r\n</app-section-menu>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div class=\"row d-print-none\">\r\n    <div class=\"col-md-3\">\r\n      <!--<div class=\"text-btn text-btn&#45;&#45;back\" (click)=\"back()\">-->\r\n        <!--<span class=\"back-btn__icon\"><i class=\"fa fa-arrow-left\"></i></span>-->\r\n        <!--<span>Produktliste</span>-->\r\n      <!--</div>-->\r\n    </div>\r\n    <div class=\"col-md-6 text-center\">\r\n      <div class=\"product-tabs\">\r\n        <div class=\"product-tabs__btn\" [ngClass]=\"{'product-tabs__btn--active': view === 'data'}\" (click)=\"changeView('data')\">Produktdaten</div>\r\n        <div class=\"product-tabs__btn\" [ngClass]=\"{'product-tabs__btn--active': view === 'bib'}\" (click)=\"changeView('bib')\">Basisinformationsblatt</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <h2 *ngIf=\"view === 'data'\" class=\"product-tab-title\">Produktdaten</h2>\r\n    <h2 *ngIf=\"view === 'bib'\" class=\"product-tab-title\">BIB-Editor</h2>\r\n  </div>\r\n\r\n  <div class=\"row product-content\">\r\n    <div class=\"col\" *ngIf=\"view === 'data'\">\r\n      <app-product-data [productInformationData]=\"productDataInputFields\"\r\n                        [productCalculationData]=\"productCalculationInputFields\"\r\n                        (isProdFormValid)=\"prodFormValidation($event)\"\r\n                        (isCalcFormValid)=\"calcFormValidation($event)\"\r\n                        (isProductInfoValid)=\"productInfoValidation($event)\">\r\n      </app-product-data>\r\n    </div>\r\n    <div class=\"col\" *ngIf=\"view === 'bib'\">\r\n      <app-bib-editor [contents]=\"contents\"></app-bib-editor>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/product/product.component.scss":
/***/ (function(module, exports) {

module.exports = ".text-btn {\n  color: black;\n  -webkit-transition: all 200ms;\n  transition: all 200ms;\n  padding: 0 8px;\n  background: rgba(113, 175, 47, 0);\n  height: 32px;\n  line-height: 32px;\n  border-radius: 2px;\n  display: inline-block; }\n  .text-btn--back {\n    margin-left: 15px; }\n  .text-btn:hover {\n    color: #71af2f;\n    cursor: pointer;\n    background: rgba(113, 175, 47, 0.05); }\n  .text-btn__icon {\n    margin-right: 8px; }\n  .product-tab-title {\n  position: relative;\n  margin: 0;\n  padding: 16px;\n  font-size: 30px;\n  color: #71af2f; }\n  .product-tab-title:after {\n    content: \"\";\n    position: absolute;\n    left: -15px;\n    bottom: 0;\n    width: 300px;\n    height: 2px;\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#007bff+0,e5e5e5+100&1+0,0+100 */\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(45deg, #007bff 0%, rgba(229, 229, 229, 0) 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#007bff', endColorstr='#00e5e5e5',GradientType=1 );\n    /* IE6-9 fallback on horizontal gradient */ }\n  .product-tabs {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background: white;\n  border-radius: 15px;\n  width: auto; }\n  .product-tabs__btn {\n    padding: 0 16px;\n    height: 30px;\n    line-height: 30px;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  .product-tabs__btn:hover {\n      color: #71af2f;\n      cursor: pointer; }\n  .product-tabs__btn:first-child {\n      border-bottom-left-radius: 15px;\n      border-top-left-radius: 15px; }\n  .product-tabs__btn:last-of-type {\n      border-bottom-right-radius: 15px;\n      border-top-right-radius: 15px; }\n  .product-tabs__btn--active {\n      border-radius: 15px;\n      color: white;\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      -webkit-box-shadow: 0 0 10px 0 #aaa;\n              box-shadow: 0 0 10px 0 #aaa;\n      background: #71af2f; }\n  .product-tabs__btn--active:hover {\n        color: white;\n        cursor: default; }\n  .error-message {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/product-management/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_types_service__ = __webpack_require__("./src/app/product-management/product/product-types.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    function ProductComponent(productsService, route, router, productTypesService, changeDetector) {
        this.productsService = productsService;
        this.route = route;
        this.router = router;
        this.productTypesService = productTypesService;
        this.changeDetector = changeDetector;
        this.productDataInputFields = [];
        this.productCalculationInputFields = [];
        this.contents = {};
        this.view = 'data';
        this.calcFormValid = false;
        this.prodFormValid = false;
        this.productInfoValid = false;
    }
    ProductComponent.prototype.getProductName = function () {
        return this.productsService.getProduct().productName || 'Neues Product';
    };
    ProductComponent.prototype.back = function () {
        this.router.navigate(['..'], { relativeTo: this.route });
    };
    ProductComponent.prototype.saveProductChanges = function () {
        var p = this.productsService.getProduct();
        p.setCalcDataValid(this.calcFormValid);
        p.setVersionNr(p.getVersionNr() + 1);
        this.productsService.updateProduct(p);
        console.log(this.productsService.getProduct());
        this.router.navigate(['/products']);
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var existingProduct = _this.productsService.getProductById(params.id);
            _this.productData = existingProduct ? existingProduct : _this.productsService.getProduct();
            var productType;
            if (_this.productData.getCategory() === 'Index-Zertifikat Klassisch' || _this.productData.getCategory() === 'Express-Zertifikat') {
                productType = _this.productTypesService.generateTypeContentsGuaranteeBonds();
            }
            _this.productDataInputFields = productType.productDataFields.slice();
            _this.productCalculationInputFields = productType.productCalculationFields.slice();
            _this.calcFormValid = _this.productData.getCalcDataValid();
            if (Object.keys(_this.productData.getBibContent()).length === 0 && _this.productData.getBibContent().constructor === Object) {
                _this.contents = __assign({}, productType.contents);
                _this.productData.setBibContent(__assign({}, _this.contents));
                _this.productsService.setContent(__assign({}, productType.contents));
            }
            else {
                _this.contents = _this.productData.getBibContent();
            }
        });
    };
    ProductComponent.prototype.productInfoValidation = function (value) {
        this.productInfoValid = value;
        this.changeDetector.detectChanges();
    };
    ProductComponent.prototype.calcFormValidation = function (value) {
        this.calcFormValid = value;
        this.changeDetector.detectChanges();
    };
    ProductComponent.prototype.prodFormValidation = function (value) {
        this.prodFormValid = value;
        this.changeDetector.detectChanges();
    };
    ProductComponent.prototype.changeView = function (newView) {
        this.view = newView;
        if (newView === 'bib') {
            this.contents = this.productsService.getProduct().getBibContent();
        }
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product-management/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product-management/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__product_types_service__["a" /* ProductTypesService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product-management/productData/product-data.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"productDataFrom\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row product-data-inputs\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"product-data-card\">\r\n        <div class=\"product-data-card__header\">Allgemeine Produktdaten</div>\r\n        <div class=\"product-data-card__info\">\r\n          <span>Diese Infomationen werden im Bereich <strong>Produkt</strong> des BIB angezeigt</span>\r\n        </div>\r\n        <div class=\"product-data-card__content\">\r\n          <div formGroupName=\"productInfo\">\r\n            <div class=\"form-group row\">\r\n              <label for=\"productCategory\" class=\"col-md-5 col-lg-4\">Produkt-Kategorie</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"productCategory\"\r\n                       type=\"text\"\r\n                       placeholder=\"Produktname\"\r\n                       formControlName=\"productCategory\"\r\n                       class=\"form-control\"\r\n                       readonly=\"true\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"productName\" class=\"col-md-5 col-lg-4\">Produktname</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"productName\"\r\n                       type=\"text\"\r\n                       placeholder=\"Produktname\"\r\n                       formControlName=\"productName\"\r\n                       class=\"form-control\"\r\n                       required/>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"productId\" class=\"col-md-5 col-lg-4\">Produktkennnummer</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"productId\"\r\n                       type=\"text\"\r\n                       placeholder=\"Produktkennnummer\"\r\n                       formControlName=\"productId\"\r\n                       class=\"form-control\"\r\n                       required />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"isin\" class=\"col-md-5 col-lg-4\">ISIN</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"isin\"\r\n                       type=\"text\"\r\n                       placeholder=\"ISIN ...\"\r\n                       formControlName=\"isin\"\r\n                       class=\"form-control\"\r\n                       required />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"wkn\" class=\"col-md-5 col-lg-4\">WKN</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"wkn\"\r\n                       type=\"text\"\r\n                       placeholder=\"WKN ...\"\r\n                       formControlName=\"wkn\"\r\n                       class=\"form-control\"\r\n                       required />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"producer\" class=\"col-md-5 col-lg-4\">Hersteller</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"producer\"\r\n                       type=\"text\"\r\n                       placeholder=\"Hersteller\"\r\n                       formControlName=\"producer\"\r\n                       class=\"form-control\"\r\n                       required/>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label for=\"address\" class=\"col-md-5 col-lg-4\">Adresse</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"address\"\r\n                       type=\"text\"\r\n                       placeholder=\"Anschrift\"\r\n                       formControlName=\"address\"\r\n                       class=\"form-control\"\r\n                       required/>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label for=\"producer\" class=\"col-md-5 col-lg-4\">Telefon</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"phone\"\r\n                       type=\"text\"\r\n                       placeholder=\"Telefon\"\r\n                       formControlName=\"phone\"\r\n                       class=\"form-control\"\r\n                       required />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"producer\" class=\"col-md-5 col-lg-4\">E-Mail</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"email\"\r\n                       type=\"text\"\r\n                       placeholder=\"E-Mail\"\r\n                       formControlName=\"email\"\r\n                       class=\"form-control\"\r\n                       required />\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"producer\" class=\"col-md-5 col-lg-4\">Website</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"web\"\r\n                       type=\"text\"\r\n                       placeholder=\"Url angeben\"\r\n                       formControlName=\"web\"\r\n                       class=\"form-control\"\r\n                       required/>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"agency\" class=\"col-md-5 col-lg-4\">Zuständige Behörde</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input id=\"agency\"\r\n                       type=\"text\"\r\n                       placeholder=\"Zuständige Behörde angeben ...\"\r\n                       formControlName=\"agency\"\r\n                       class=\"form-control\"\r\n                       required />\r\n              </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n              <label for=\"producer\" class=\"col-md-5 col-lg-4\">Erstelldatum</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       [minDate]=\"minDate\"\r\n                       [maxDate]=\"maxDate\"\r\n                       #dp=\"bsDatepicker\"\r\n                       formControlName=\"creationDate\"\r\n                       bsDatepicker\r\n                       [bsConfig]=\"creationDateConfig\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label for=\"description\" class=\"col-md-5 col-lg-4\">Kurzbeschreibung</label>\r\n              <div class=\"col-md-7 col-lg-8\">\r\n                <textarea id=\"description\"\r\n                        type=\"text\"\r\n                        placeholder=\"Kurzbeschreibung ...\"\r\n                        formControlName=\"description\"\r\n                        class=\"form-control\"\r\n                        required ></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"product-data-card\">\r\n        <div class=\"product-data-card__header\" (click)=\"generateDemoData()\">\r\n          <div>\r\n            Informationen zum Produkt\r\n          </div>\r\n          <div class=\"product-data-card__show-btn\">\r\n            <div class=\"product-data-card__show-btn-text\">Im BIB anzeigen</div>\r\n            <ui-switch size=\"small\"\r\n                       color=\"#5D9127\"\r\n                       defaultBgColor=\"#dddddd\"\r\n                       defaultBoColor=\"white\"\r\n                       [checked]=\"getVisibilityOfProductInfo()\"\r\n                       (change)=\"toggleProductInfoVisibility()\">\r\n            </ui-switch>\r\n          </div>\r\n        </div>\r\n        <div class=\"product-data-card__info\">\r\n          <span>Diese Infomationen werden im Abschnitt <strong>Ziele</strong> des Bereiches <strong>Um welche Art von Produkt handelt es sich?</strong> des BIB angezeigt</span>\r\n        </div>\r\n        <div class=\"product-data-card__content\">\r\n          <div formGroupName=\"productInformationData\">\r\n            <div *ngFor=\"let input of productInformationData\">\r\n              <app-dynamic-input [config]=\"input\" [formGroup]=\"productDataFrom.get('productInformationData')\"\r\n                                 [customFormControl]=\"productDataFrom.get('productInformationData').controls[input.name]\"></app-dynamic-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"product-data-card\">\r\n        <div class=\"product-data-card__header\">\r\n          <div>\r\n            Berechnungsgrundlage\r\n          </div>\r\n        </div>\r\n        <div class=\"product-data-card__info\">\r\n          <span>Die hier angegebenen Daten dienen als Grundlage für die Berechnung des BIB</span>\r\n        </div>\r\n        <div class=\"product-data-card__content\">\r\n          <div formGroupName=\"productCalculationData\">\r\n            <div *ngFor=\"let input of productCalculationData\">\r\n              <app-dynamic-input [config]=\"input\" [formGroup]=\"productDataFrom.get('productCalculationData')\"\r\n                                 [customFormControl]=\"productDataFrom.get('productCalculationData').controls[input.name]\"></app-dynamic-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/productData/product-data.component.scss":
/***/ (function(module, exports) {

module.exports = ".product-data-inputs {\n  margin: 50px 0; }\n\n.product-data-card {\n  background: white;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n          box-shadow: 0px 0px 20px 0 #aaa;\n  margin-bottom: 16px; }\n\n.product-data-card__info {\n    padding: 16px;\n    color: #71af2f;\n    font-size: 16px; }\n\n.product-data-card__show-btn {\n    height: 30px;\n    font-size: 12px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.product-data-card__show-btn ui-switch {\n      position: relative;\n      top: 2.5px; }\n\n.product-data-card__show-btn-text {\n    padding-right: 8px; }\n\n.product-data-card__header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #71af2f;\n    padding: 16px;\n    font-size: 20px;\n    color: #71af2f; }\n\n.product-data-card__content {\n    padding: 16px;\n    border-bottom: 5px solid #71af2f;\n    border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/product-management/productData/product-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDataComponent = (function () {
    function ProductDataComponent(productService) {
        this.productService = productService;
        this.isCalcFormValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isProdFormValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isProductInfoValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // Datepicker config
        // Todo: change min-date to 2018-5-10
        this.minDate = new Date();
        this.maxDate = new Date(2018, 9, 15);
        this.bsValue = new Date();
        this.creationDateConfig = {
            dateInputFormat: 'DD.MM.YYYY',
            containerClass: 'theme-default'
        };
    }
    ProductDataComponent.prototype.toggleProductInfoVisibility = function () {
        this.productService.toggleProductInfoVisibility();
    };
    ProductDataComponent.prototype.getVisibilityOfProductInfo = function () {
        return this.productService.getProductInfoVisibility();
    };
    ProductDataComponent.prototype.conditionalFormChanges = function () {
        if (!(this.productDataFrom.controls['productCalculationData']['controls']['capitalProtectionMarketRisk']['value'] > 0)) {
            document.getElementById('capitalProtectionMarketRiskLimited')['disabled'] = true;
            document.getElementById('capitalProtectionMarketRiskLimitedOption')['disabled'] = true;
            document.getElementById('capitalProtectionMarketRiskLimited')['value'] = null;
            document.getElementById('capitalProtectionMarketRiskLimitedOption')['value'] = null;
            document.getElementById('capitalProtectionMarketRiskLimitedOption')['placeholder'] = 'Je nach Option';
        }
        else {
            document.getElementById('capitalProtectionMarketRiskLimited')['disabled'] = false;
            if (!(this.productDataFrom.controls['productCalculationData']['controls']['capitalProtectionMarketRiskLimited']['value']) ||
                this.productDataFrom.controls['productCalculationData']['controls']['capitalProtectionMarketRiskLimited']['value'] === 'payments') {
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['disabled'] = true;
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['required'] = false;
            }
            else if (this.productDataFrom.controls['productCalculationData']['controls']['capitalProtectionMarketRiskLimited']['value'] === 'time') {
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['placeholder']
                    = 'Zahl und Einheit angeben (Jahren/Monaten/Tagen)';
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['disabled'] = false;
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['required'] = true;
            }
            else if (this.productDataFrom.controls['productCalculationData']['controls']['capitalProtectionMarketRiskLimited']['value'] === 'other') {
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['placeholder']
                    = 'Erläuterung in einfacher Sprache';
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['disabled'] = false;
                document.getElementById('capitalProtectionMarketRiskLimitedOption')['required'] = true;
            }
        }
    };
    ProductDataComponent.prototype.handleFormChanges = function (data, val, type) {
        var productDataWithValues = data.map(function (data) {
            var dataEntry;
            dataEntry = {
                name: data.name,
                label: data.labelDe,
                value: undefined,
                type: data.type
            };
            if (data.type === 'date' && val[type][data.name]) {
                dataEntry.value = val[type][data.name].getTime();
            }
            else {
                dataEntry.value = val[type][data.name];
            }
            return dataEntry;
        });
        return productDataWithValues;
    };
    ProductDataComponent.prototype.onChanges = function () {
        var _this = this;
        this.productDataFrom.valueChanges.subscribe(function (val) {
            var updatedProductInformationData = _this.handleFormChanges(_this.productInformationData, val, 'productInformationData');
            var updatedProductCalculationData = _this.handleFormChanges(_this.productCalculationData, val, 'productCalculationData');
            _this.productService.setProductData(val.productInfo, updatedProductInformationData, updatedProductCalculationData);
            _this.formValidation();
            _this.conditionalFormChanges();
        });
    };
    ProductDataComponent.prototype.getDefaultValueProductInfo = function (productInfo, controlConfig) {
        var productInfoField = productInfo.getProductInformationData().find(function (data) { return data.name === controlConfig.name; });
        return productInfoField && productInfoField.value;
    };
    ProductDataComponent.prototype.getDefaultValueProductCalc = function (productInfo, controlConfig) {
        var productInfoField = productInfo.getProductCalculationData().find(function (data) { return data.name === controlConfig.name; });
        return productInfoField && productInfoField.value;
    };
    ProductDataComponent.prototype.buildInputForms = function (data, productInfo, getDefaultValue) {
        var inputs = {};
        data.forEach(function (controlConfig) {
            // const productInfoField = productInfo.getProductCalculationData().find(data => data.name === controlConfig.name);
            var defaultValue = getDefaultValue(productInfo, controlConfig);
            if (controlConfig.type === 'date') {
                var defaultDate = defaultValue ? new Date(defaultValue) : new Date();
                // controlConfig.value ? new Date(Date.parse(controlConfig.value)): new Date();
                inputs[controlConfig.name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](defaultDate);
            }
            else if (controlConfig.type === 'date-range') {
                var dateRange = [
                    new Date(Date.parse(controlConfig.value[0])),
                    new Date(Date.parse(controlConfig.value[1]))
                ];
                inputs[controlConfig.name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](dateRange);
            }
            else if (controlConfig.type === 'checkbox') {
                inputs[controlConfig.name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](getDefaultValue(productInfo, controlConfig));
            }
            else {
                inputs[controlConfig.name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](getDefaultValue(productInfo, controlConfig), controlConfig.validators);
            }
        });
        return inputs;
    };
    ProductDataComponent.prototype.ngOnInit = function () {
        var productInfo = this.productService.getProduct();
        if (this.productInformationData.type === 'date') {
            this.productInformationData.startDate = Date.parse(this.productInformationData.minDate);
            this.productInformationData.endDate = Date.parse(this.productInformationData.maxDate);
            this.productInformationData.value = new Date();
        }
        var cat = productInfo.getCategory();
        var inputControls = {
            'productInfo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                'productCategory': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](cat),
                'productName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['productName']),
                'productId': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['productId']),
                'isin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['isin']),
                'wkn': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['wkn']),
                'producer': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['producer']),
                'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['address']),
                'web': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['web']),
                'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['email']),
                'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['phone']),
                'agency': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['agency']),
                'creationDate': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](new Date(productInfo['creationDate'])),
                'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](productInfo['description']),
            })
        };
        inputControls['productInformationData'] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](this.buildInputForms(this.productInformationData, productInfo, this.getDefaultValueProductInfo));
        inputControls['productCalculationData'] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](this.buildInputForms(this.productCalculationData, productInfo, this.getDefaultValueProductCalc));
        this.productDataFrom = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](inputControls);
        this.onChanges();
        this.formValidation();
        // Initialize form
        this.productDataFrom.controls['productCalculationData']['controls']['ausfuehrungszeiten'].setValue('daily');
    };
    ProductDataComponent.prototype.formValidation = function () {
        this.isProductInfoValid.emit(this.productDataFrom.controls['productInfo'].valid);
        this.isCalcFormValid.emit(this.productDataFrom.controls['productCalculationData'].valid);
        this.isProdFormValid.emit(this.productDataFrom.controls['productInformationData'].valid);
    };
    ProductDataComponent.prototype.generateDemoData = function () {
        var dateInTwoYears = new Date();
        dateInTwoYears.setFullYear(dateInTwoYears.getFullYear() + 2);
        if (this.productService.getProduct().getCategory() === 'Index-Zertifikat Klassisch') {
            this.productDataFrom.controls['productInformationData']['controls']['underlying'].setValue('DAX');
        }
        else {
            this.productDataFrom.controls['productInformationData']['controls']['underlying'].setValue('EURO STOXX 50');
        }
        this.productDataFrom.controls['productInformationData']['controls']['market'].setValue('Aktien');
        this.productDataFrom.controls['productInformationData']['controls']['subscriptionRatio'].setValue('0,01');
        this.productDataFrom.controls['productInformationData']['controls']['currencyProduct'].setValue('Euro (EUR)');
        this.productDataFrom.controls['productInformationData']['controls']['currencyUnderlying'].setValue('Euro (EUR)');
        this.productDataFrom.controls['productInformationData']['controls']['emissionDate'].setValue(new Date());
        this.productDataFrom.controls['productInformationData']['controls']['referenceAuthority'].setValue('Deutsche Börse');
        this.productDataFrom.controls['productInformationData']['controls']['rueckzahlungstermin']
            .setValue('Der 4. Geschäftstag nach dem Bewertungstag');
        this.productDataFrom.controls['productInformationData']['controls']['valuationDate'].setValue(new Date(dateInTwoYears));
        this.productDataFrom.controls['productInformationData']['controls']['boersennotierung'].setValue('Deutsche Börse AG');
        this.productDataFrom.controls['productInformationData']['controls']['letzerHandelstag'].setValue(new Date(dateInTwoYears));
    };
    ProductDataComponent.prototype.onSubmit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductDataComponent.prototype, "productInformationData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductDataComponent.prototype, "productCalculationData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProductDataComponent.prototype, "isCalcFormValid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProductDataComponent.prototype, "isProdFormValid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProductDataComponent.prototype, "isProductInfoValid", void 0);
    ProductDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-data',
            template: __webpack_require__("./src/app/product-management/productData/product-data.component.html"),
            styles: [__webpack_require__("./src/app/product-management/productData/product-data.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */]])
    ], ProductDataComponent);
    return ProductDataComponent;
}());



/***/ }),

/***/ "./src/app/product-management/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product__ = __webpack_require__("./src/app/product-management/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fakeBackend_products_mock__ = __webpack_require__("./src/app/product-management/fakeBackend/products.mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_content_service_service__ = __webpack_require__("./src/app/product-management/product/content-service.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// const mockData = {
//   productName: 'Galdmarktfloater',
//   productId: 'DE000NL891X',
//   producer: 'Exxeta',
//   email: 'exxeta@support.com',
//   phone: '+49 (0) 543 678-0',
//   web: 'www.exxeta.de',
//   agency: 'Bundesanstalt für Finanzdienstleistungen (BaFin)',
//   creationDate: new Date().getTime()
// };
var defaultData = {
    producer: 'Bankhaus Frankfurt AG',
    email: 'support@bhf-ag.de',
    phone: '+49-000-00000',
    web: 'www.bhf-ag.de',
    creationDate: new Date().getTime(),
    agency: 'Bundesanstalt für Finanzdienstleistungen (BaFin)',
    address: 'Taunusanlage 17, 60325 Frankfurt am Main'
};
var ProductsService = (function () {
    function ProductsService(http, authService, contentService) {
        this.http = http;
        this.authService = authService;
        this.contentService = contentService;
    }
    ProductsService.prototype.getProductById = function (productId) {
        var productData = __WEBPACK_IMPORTED_MODULE_3__fakeBackend_products_mock__["a" /* products */].find(function (product) { return product.getId() === productId; });
        if (productData) {
            var p = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](productData.getProductBaseInfo(), productData.getProductInformationData(), productData.getProductCalculationData(), productData.getBibContent(), productData.getCalcDataValid(), productData.getVisibilityOfProductInfo(), productData.getVersionNr(), productData.getCalculationResult());
            p.setId(productData.getId());
            p.setCategory(productData.getCategory());
            this.currentProduct = p;
            p.generationFinished = productData.generationFinished;
            return this.getProduct();
        }
    };
    ProductsService.prototype.cloneProduct = function (orgProduct) {
        var p = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](orgProduct.getProductBaseInfo(), orgProduct.getProductInformationData(), orgProduct.getProductCalculationData(), orgProduct.getBibContent(), orgProduct.getCalcDataValid(), orgProduct.getVisibilityOfProductInfo(), orgProduct.getVersionNr(), orgProduct.getCalculationResult());
        p.setId(orgProduct.getId());
        p.setCategory(orgProduct.getCategory());
        p.setMetadata(this.authService.getUserObject());
        // p.setCalculationResult(orgProduct.getCalculationResult());
        p.generationFinished = orgProduct.generationFinished;
        return p;
    };
    ProductsService.prototype.updateProduct = function (product) {
        var index = __WEBPACK_IMPORTED_MODULE_3__fakeBackend_products_mock__["a" /* products */].findIndex(function (p) { return p.getId() === product.id; });
        if (index < 0) {
            __WEBPACK_IMPORTED_MODULE_3__fakeBackend_products_mock__["a" /* products */].push(this.cloneProduct(product));
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3__fakeBackend_products_mock__["a" /* products */][index] = this.cloneProduct(product);
        }
    };
    ProductsService.prototype.getNewProduct = function (cat) {
        var product = new __WEBPACK_IMPORTED_MODULE_2__models_product__["a" /* Product */](__assign({}, defaultData));
        product.setId('id' + Math.floor((Math.random() * 100000)) + 4);
        product.setCategory(cat);
        this.currentProduct = product;
        // products.push(this.getProduct());
        return this.getProduct();
    };
    ProductsService.prototype.toggleProductInfoVisibility = function () {
        this.currentProduct.toggleVisibilityOfProductInfo();
    };
    ProductsService.prototype.getProductInfoVisibility = function () {
        return this.currentProduct.getVisibilityOfProductInfo();
    };
    ProductsService.prototype.setProductData = function (productInfo, productInformationData, productCalculationData) {
        this.currentProduct.setProductData(productInfo, productInformationData, productCalculationData);
    };
    ProductsService.prototype.setContent = function (content) {
        this.currentProduct.setBibContent(content);
    };
    ProductsService.prototype.getProduct = function () {
        // let p = new Product(
        //   this.currentProduct.getProductBaseInfo(),
        //   this.currentProduct.getProductInformationData(),
        //   this.currentProduct.getProductCalculationData(),
        //   this.currentProduct.getVisibilityOfProductInfo())
        // p.setId(this.currentProduct.getId());
        // p.setCategory(this.currentProduct.getCategory());
        return this.cloneProduct(this.currentProduct);
    };
    ProductsService.prototype.getProductCalcData = function () {
        return this.currentProduct.getProductCalculationData();
    };
    ProductsService.prototype.getProductInfoData = function () {
        return this.currentProduct.getProductInformationData();
    };
    ProductsService.prototype.getProducts = function () {
        return __WEBPACK_IMPORTED_MODULE_3__fakeBackend_products_mock__["a" /* products */].slice(); // this.http.get(AppConfig.getUrl('products'));
    };
    ProductsService.prototype.getProductCalcResult = function () {
        return this.currentProduct.getCalculationResult();
    };
    ProductsService.prototype.setProductCalcResult = function (calcResult) {
        this.currentProduct.setCalculationResult(calcResult);
    };
    ProductsService.prototype.sendCalculationRequest = function () {
        var _this = this;
        var holdingPeriod = Number.parseInt(this.getSpecificValue(this.currentProduct.getProductCalculationData(), 'holdingPeriod'));
        // Build JSON for POST request
        var json = {
            rating: {
                FITCH: this.getSpecificValue(this.currentProduct.getProductCalculationData(), 'ratingFitch'),
                MOODYS: this.getSpecificValue(this.currentProduct.getProductCalculationData(), 'ratingMoodys'),
                SANDP: this.getSpecificValue(this.currentProduct.getProductCalculationData(), 'ratingSP')
            },
            subordinate: this.getSpecificValue(this.currentProduct.getProductCalculationData(), 'limitedObligation'),
            validTo: new Date(this.getSpecificValue(this.currentProduct.getProductCalculationData(), 'term')).toISOString(),
            timeseries: this.getTimeseriesType()
        };
        var promise = new Promise(function (resolve, reject) {
            var promises = [];
            var i;
            for (i = 1; i <= holdingPeriod; i++) {
                json['n'] = i;
                promises.push(_this.sendRequest(json));
            }
            Promise.all(promises).then(function (value) {
                resolve();
            });
        });
        return promise;
    };
    ProductsService.prototype.sendRequest = function (json) {
        var _this = this;
        return this.http.post('api/category2', JSON.parse(JSON.stringify(json)))
            .subscribe(function (res) {
            res['stressN'] = res['unfavourableN'] * 0.5;
            _this.currentProduct.setCalculationResult(res);
            _this.updateProduct(_this.currentProduct);
        });
    };
    ProductsService.prototype.getTimeseriesType = function () {
        if (this.currentProduct.getCategory() === 'Index-Zertifikat Klassisch') {
            return 'DAX';
        }
        else if (this.currentProduct.getCategory() === 'Express-Zertifikat') {
            return 'EUROSTOXX50';
        }
        else {
            return 'FAKE';
        }
    };
    ProductsService.prototype.getSpecificValue = function (collection, variable) {
        var foundValue = collection.filter(function (obj) {
            return obj.name === variable;
        })[0];
        if (!foundValue)
            return null;
        if (foundValue.type === 'date') {
            return new Date(foundValue.value);
        }
        else if (foundValue.type === 'checkbox') {
            return foundValue.value ? foundValue.value : false;
        }
        else if (foundValue.type === 'dropdown') {
            return foundValue.value;
        }
        else {
            return foundValue.value;
        }
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__product_content_service_service__["a" /* ContentService */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/product-management/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<app-section-menu [title]=\"'Produkte'\">\r\n  <div>\r\n    <button (click)=\"addNewOpen=!addNewOpen\" class=\"btn btn-primary\">\r\n      <span><div class=\"add-new-btn__icon\" [ngClass]=\"{'add-new-btn__icon--active': addNewOpen}\">\r\n        <i class=\"fa fa-plus\" ></i>\r\n      </div></span>\r\n      <span>Neues Produkt</span>\r\n    </button>\r\n    <div class=\"category-dropdown\" [ngClass]=\"{'category-dropdown--open': addNewOpen}\">\r\n      <div *ngFor=\"let cat of categories; let i = index\"\r\n           class=\"category-dropdown__category\"\r\n           [ngClass]=\"{'category-dropdown__category_disabled': !cat.enabled}\"\r\n           (click)=\"addNewProduct(cat.name)\">\r\n        {{cat.name}}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</app-section-menu>\r\n\r\n<div class=\"content-wrapper\">\r\n  <div *ngFor=\"let product of products\">\r\n    <app-product-list-entry\r\n      [product]=\"product\"\r\n      (editProduct)=\"goToProduct(product.getId())\"></app-product-list-entry>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/products/products.component.scss":
/***/ (function(module, exports) {

module.exports = ".add-new-btn__icon {\n  display: inline-block;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-transition: -webkit-transform 300ms;\n  transition: -webkit-transform 300ms;\n  transition: transform 300ms;\n  transition: transform 300ms, -webkit-transform 300ms; }\n  .add-new-btn__icon--active {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n  .category-dropdown {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  -webkit-transform: translateX(120%);\n          transform: translateX(120%);\n  -webkit-transition: -webkit-transform 300ms;\n  transition: -webkit-transform 300ms;\n  transition: transform 300ms;\n  transition: transform 300ms, -webkit-transform 300ms; }\n  .category-dropdown--open {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  .category-dropdown__category {\n    text-align: center;\n    line-height: 50px;\n    min-width: 300px;\n    height: 50px;\n    background: white;\n    -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n            box-shadow: 0px 0px 20px 0 #aaa;\n    margin-top: 16px;\n    margin-right: 30px;\n    padding: 0 16px;\n    border-radius: 2px; }\n  .category-dropdown__category:hover {\n      background: #71af2f;\n      color: white;\n      cursor: pointer; }\n  .category-dropdown__category_disabled {\n    text-align: center;\n    line-height: 50px;\n    min-width: 300px;\n    height: 50px;\n    background: #eeeeee;\n    -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n            box-shadow: 0px 0px 20px 0 #aaa;\n    margin-top: 16px;\n    margin-right: 30px;\n    padding: 0 16px;\n    border-radius: 2px; }\n  .category-dropdown__category_disabled:hover {\n      background: #eeeeee;\n      cursor: default;\n      color: black; }\n"

/***/ }),

/***/ "./src/app/product-management/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fakeBackend_categories_mock__ = __webpack_require__("./src/app/product-management/fakeBackend/categories.mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = (function () {
    function ProductsComponent(router, route, productsService) {
        this.router = router;
        this.route = route;
        this.productsService = productsService;
        this.categories = [];
        this.products = [];
        this.addNewOpen = false;
    }
    ProductsComponent.prototype.goToProduct = function (id) {
        this.router.navigate([id], { relativeTo: this.route });
    };
    ProductsComponent.prototype.addNewProduct = function (cat) {
        var p = this.productsService.getNewProduct(cat);
        this.router.navigate([p.getId()], { relativeTo: this.route, queryParams: { newProduct: true } });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.categories = __WEBPACK_IMPORTED_MODULE_3__fakeBackend_categories_mock__["a" /* categories */].slice();
        this.products = this.productsService.getProducts();
        console.log(this.products);
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/product-management/products/products.component.html"),
            styles: [__webpack_require__("./src/app/product-management/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/product-management/risk.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("./src/app/product-management/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiskService = (function () {
    function RiskService(productsService) {
        this.productsService = productsService;
        this.perfomanceSzenarios = ['stressN', 'unfavourableN', 'moderateN', 'favourableN'];
    }
    RiskService.prototype.setVariables = function (product) {
        this.product = product;
        this.calcResult = this.product.getCalculationResult();
        this.calcInfo = this.product.getProductCalculationData();
        this.entryCost = Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'entryCost'));
        this.exitCost = Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'exitCost'));
        this.portfolioTransactionCost =
            Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'portfolioTransactionCost'));
        this.otherRunningCosts =
            Number.parseInt(this.productsService.getSpecificValue(this.product.getProductCalculationData(), 'otherRunningCosts'));
        this.totalCost = this.entryCost + this.exitCost + this.portfolioTransactionCost + this.otherRunningCosts;
        this.holdingPeriod = Number.parseInt(this.productsService.getSpecificValue(this.calcInfo, 'holdingPeriod'));
    };
    RiskService.prototype.calculateValueHeaders = function (product) {
        this.setVariables(product);
    };
    RiskService.prototype.calculateValues = function (product) {
        this.setVariables(product);
        var result = new Array();
        for (var i = 1; i <= this.perfomanceSzenarios.length; i++) {
            result.push(new Array());
            for (var j = 1; j <= this.holdingPeriod && j <= 3; j++) {
                result[i - 1].push([
                    this.calculateSingleValue(this.perfomanceSzenarios[i - 1], j),
                ]);
            }
        }
        return result;
    };
    RiskService.prototype.calculatePercentages = function (product) {
        this.setVariables(product);
        var result = new Array();
        for (var i = 1; i <= this.perfomanceSzenarios.length; i++) {
            result.push(new Array());
            for (var j = 1; j <= this.holdingPeriod && j <= 3; j++) {
                result[i - 1].push([
                    this.calculateSinglePercentage(this.perfomanceSzenarios[i - 1], j),
                ]);
            }
        }
        return result;
    };
    RiskService.prototype.calculateSingleValue = function (scenario, year) {
        if (this.product.getCalculationResult().length > 1) {
            var result = this.precisionRound(this.product.getCalculationResult()[year - 1][scenario] * 10000, 2);
            var costsPerYear = this.totalCost * (year * (1 / this.holdingPeriod));
            return this.precisionRound((result - costsPerYear), 2);
        }
        else {
            return '---';
        }
    };
    RiskService.prototype.calculateSinglePercentage = function (scenario, year) {
        if (this.product.getCalculationResult().length > 1) {
            var result = this.precisionRound(this.product.getCalculationResult()[year - 1][scenario] * 10000, 4);
            var costsPerYear = (this.entryCost + this.exitCost + this.portfolioTransactionCost + this.otherRunningCosts)
                * (1 / this.holdingPeriod);
            return this.precisionRound(((result - costsPerYear) / 100), 2);
        }
        else {
            return '---';
        }
    };
    RiskService.prototype.precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    RiskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]])
    ], RiskService);
    return RiskService;
}());



/***/ }),

/***/ "./src/app/product-management/simple-table/simple-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bib-table\">\r\n  <div class=\"bib-table__row bib-table__row--header\">\r\n    <div class=\"bib-table__name bib-table__name--header\" [ngClass]=\"['bib-table__name--w' + nameWidth]\">\r\n      <div class=\"text-truncate\">{{headerName.top}}</div>\r\n      <div class=\"text-truncate\">{{headerName.down}}</div>\r\n    </div>\r\n    <div class=\"bib-table__values\">\r\n      <div class=\"bib-table__subrow bib-table__subrow--header\">\r\n        <div *ngIf=\"!singleRowTable\" class=\"bib-table__column bib-table__column--name\" [ngClass]=\"['bib-table__column--w' + subrowNameWidth]\"></div>\r\n        <div class=\"bib-table__column\" [ngClass]=\"['bib-table__column--w' + valueColumnWidth]\" *ngFor=\"let header of valueHeaders\">\r\n          <div>{{header.top}}</div>\r\n          <div>{{header.down}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngFor=\"let row of rows\" class=\"bib-table__row\">\r\n    <div class=\"bib-table__name\" [ngClass]=\"['bib-table__name--w' + nameWidth]\">{{row.name}}</div>\r\n    <div class=\"bib-table__values\">\r\n      <div class=\"bib-table__subrow\"\r\n           [ngClass]=\"{'bib-table__subrow--no-border': singleRowTable}\"\r\n           *ngFor=\"let valueObj of row.values\">\r\n        <div *ngIf=\"!singleRowTable\" class=\"bib-table__column bib-table__column--name\" [ngClass]=\"['bib-table__column--w' + subrowNameWidth]\">{{valueObj.name}}</div>\r\n        <div class=\"bib-table__column\" [ngClass]=\"['bib-table__column--w' + valueColumnWidth]\" *ngFor=\"let value of valueObj.values\">\r\n          <div  [ngClass]=\"{'bib-table__column--right-align': valueColumnRightAlign, 'bib-table__column--centered': valueColumnCentered}\">\r\n            <span>{{value}}</span>\r\n            <span>{{valueObj.unit}}</span>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"valueObj.desc\" class=\"bib-table__column bib-table__column--desc\">{{valueObj.desc}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/simple-table/simple-table.component.scss":
/***/ (function(module, exports) {

module.exports = ".bib-table {\n  margin-top: 8px;\n  font-size: 10px; }\n  .bib-table__row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid #71af2f;\n    padding: 4px; }\n  .bib-table__row--header {\n      color: white;\n      background: #71af2f;\n      font-weight: bold; }\n  .bib-table__name {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 120px;\n            flex: 0 0 120px;\n    color: #71af2f;\n    padding-right: 4px; }\n  .bib-table__name--header {\n      color: white;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      font-weight: bold;\n      display: block; }\n  .bib-table__name--w60 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 60px;\n              flex: 0 0 60px; }\n  .bib-table__name--w80 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 80px;\n              flex: 0 0 80px; }\n  .bib-table__name--w100 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100px;\n              flex: 0 0 100px; }\n  .bib-table__name--w120 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 120px;\n              flex: 0 0 120px; }\n  .bib-table__name--w140 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 140px;\n              flex: 0 0 140px; }\n  .bib-table__name--w160 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 160px;\n              flex: 0 0 160px; }\n  .bib-table__name--w180 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 180px;\n              flex: 0 0 180px; }\n  .bib-table__name--w200 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 200px;\n              flex: 0 0 200px; }\n  .bib-table__values {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .bib-table__subrow {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 25px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-top: 1px solid #71af2f; }\n  .bib-table__subrow:first-child {\n      border-top: none; }\n  .bib-table__subrow--no-border:first-child {\n      border-bottom: none; }\n  .bib-table__subrow--header {\n      height: auto;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      min-height: 20px; }\n  .bib-table__subrow--header:first-child {\n        border-bottom: none; }\n  .bib-table__column {\n    padding: 0 4px;\n    padding-left: 15px; }\n  .bib-table__column--centered {\n      text-align: center; }\n  .bib-table__column--right-align {\n      text-align: right; }\n  .bib-table__column--w60 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 60px;\n              flex: 0 0 60px; }\n  .bib-table__column--w80 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 80px;\n              flex: 0 0 80px; }\n  .bib-table__column--w100 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100px;\n              flex: 0 0 100px; }\n  .bib-table__column--w120 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 120px;\n              flex: 0 0 120px; }\n  .bib-table__column--w140 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 140px;\n              flex: 0 0 140px; }\n  .bib-table__column--w160 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 160px;\n              flex: 0 0 160px; }\n  .bib-table__column--w180 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 180px;\n              flex: 0 0 180px; }\n  .bib-table__column--w200 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 200px;\n              flex: 0 0 200px; }\n  .bib-table__column--w220 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 220px;\n              flex: 0 0 220px; }\n  .bib-table__column--w240 {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 240px;\n              flex: 0 0 240px; }\n"

/***/ }),

/***/ "./src/app/product-management/simple-table/simple-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleTableComponent = (function () {
    function SimpleTableComponent() {
    }
    SimpleTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('singleRowTable'),
        __metadata("design:type", Boolean)
    ], SimpleTableComponent.prototype, "singleRowTable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('rows'),
        __metadata("design:type", Array)
    ], SimpleTableComponent.prototype, "rows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('upperSubRowName'),
        __metadata("design:type", String)
    ], SimpleTableComponent.prototype, "upperSubRowName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('lowerSubRowName'),
        __metadata("design:type", String)
    ], SimpleTableComponent.prototype, "lowerSubRowName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('upperSubRowUnit'),
        __metadata("design:type", String)
    ], SimpleTableComponent.prototype, "upperSubRowUnit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('lowerSubRowUnit'),
        __metadata("design:type", String)
    ], SimpleTableComponent.prototype, "lowerSubRowUnit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('upperSubRowValues'),
        __metadata("design:type", Array)
    ], SimpleTableComponent.prototype, "upperSubRowValues", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('lowerSubRowValues'),
        __metadata("design:type", Array)
    ], SimpleTableComponent.prototype, "lowerSubRowValues", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('valueColumnCentered'),
        __metadata("design:type", Object)
    ], SimpleTableComponent.prototype, "valueColumnCentered", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('valueColumnRightAlign'),
        __metadata("design:type", Object)
    ], SimpleTableComponent.prototype, "valueColumnRightAlign", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('subrowNameWidth'),
        __metadata("design:type", Object)
    ], SimpleTableComponent.prototype, "subrowNameWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('nameWidth'),
        __metadata("design:type", Object)
    ], SimpleTableComponent.prototype, "nameWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('valueColumnWidth'),
        __metadata("design:type", Object)
    ], SimpleTableComponent.prototype, "valueColumnWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headerName'),
        __metadata("design:type", Object)
    ], SimpleTableComponent.prototype, "headerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('valueHeaders'),
        __metadata("design:type", Array)
    ], SimpleTableComponent.prototype, "valueHeaders", void 0);
    SimpleTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-simple-table',
            template: __webpack_require__("./src/app/product-management/simple-table/simple-table.component.html"),
            styles: [__webpack_require__("./src/app/product-management/simple-table/simple-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleTableComponent);
    return SimpleTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/dynamic-input/dynamic-input.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div [formGroup]=\"formGroup\">\r\n\r\n  <!-- Custom validation messages -->\r\n  <div *ngIf=\"!customFormControl.valid && customFormControl.touched\">\r\n    <div class=\"col-md-7 col-lg-8 offset-md-5 offset-lg-4 validation\" *ngIf=\"customFormControl.errors.required\">\r\n      {{validationMessages.required }}\r\n    </div>\r\n\r\n    <div class=\"col-md-7 col-lg-8 offset-md-5 offset-lg-4 validation\" *ngIf=\"customFormControl.errors.min\">\r\n      {{ validationMessages.negatives }}\r\n    </div>\r\n\r\n    <div class=\"col-md-7 col-lg-8 offset-md-5 offset-lg-4 validation\" *ngIf=\"customFormControl.errors.max\">\r\n      {{ validationMessages.maximum }}\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Dynamic fields -->\r\n\r\n  <div *ngIf=\"config.type !== 'textarea'\r\n    && config.type !== 'number'\r\n    && config.type !== 'radio'\r\n    && config.type !== 'date'\r\n    && config.type !== 'date-range'\r\n    && config.type !== 'dropdown'\r\n    && config.type !== 'checkbox'\r\n    && config.type !== 'conditional-text'\"\r\n\r\n    class=\"form-group row\">\r\n\r\n    <label [for]=\"config.name\" class=\"col-md-5 col-lg-4\">{{ config.labelDe }}</label>\r\n    <div class=\"col-md-7 col-lg-8\">\r\n      <input [id]=\"config.name\"\r\n             [type]=\"config.type\"\r\n             [placeholder]=\"config.placeholderDe\"\r\n             [formControlName]=\"config.name\"\r\n             class=\"form-control\"\r\n             [required]=\"config.required\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'number'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\"\r\n            [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">{{ config.labelDe }}\r\n      <span *ngIf=\"config.unit\">in {{ config.unit }}</span>\r\n      <!--<span *ngIf=\"customFormControl.errors.required\">*</span>-->\r\n    </label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n      <div class=\"input-group\" *ngIf=\"config.inputGroup\">\r\n        <div class=\"input-group-prepend\" *ngIf=\"config.inputGroup.type==='prepend'\">\r\n          <span class=\"input-group-text\" id=\"config.inputGroup.id\">{{ config.inputGroup.label }}</span>\r\n        </div>\r\n        <input [id]=\"config.name\"\r\n               [type]=\"config.type\"\r\n               [placeholder]=\"config.placeholderDe\"\r\n               [step]=\"config.step\"\r\n               [min]=\"config.min\"\r\n               [max]=\"config.max\"\r\n               [formControlName]=\"config.name\"\r\n               [required]=\"config.required\"\r\n               class=\"form-control\"/>\r\n        <div class=\"input-group-append\" *ngIf=\"config.inputGroup.type==='append'\">\r\n          <span class=\"input-group-text\" id=\"config.inputGroup.id\">{{ config.inputGroup.label }}</span>\r\n        </div>\r\n      </div>\r\n      <input *ngIf=\"!config.inputGroup\"\r\n             [id]=\"config.name\"\r\n             [type]=\"config.type\"\r\n             [placeholder]=\"config.placeholderDe\"\r\n             [step]=\"config.step\"\r\n             [min]=\"config.min\"\r\n             [max]=\"config.max\"\r\n             [formControlName]=\"config.name\"\r\n             [required]=\"config.required\"\r\n             class=\"form-control\"/>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'textarea'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\" [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">\r\n      {{ config.labelDe }}</label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n     <textarea [id]=\"config.name\"\r\n               [placeholder]=\"config.placeholderDe\"\r\n               [formControlName]=\"config.name\"\r\n               [required]=\"config.required\"\r\n               class=\"form-control\"\r\n               [maxlength]=\"config.max\"></textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'conditional-text'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\" [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">\r\n      {{ config.labelDe }}</label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n      <input [id]=\"config.name\"\r\n             [type]=\"config.type\"\r\n             [placeholder]=\"config.placeholderDe\"\r\n             [formControlName]=\"config.name\"\r\n             class=\"form-control\"\r\n             [required]=\"config.required\" />\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'date'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\" [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">\r\n      {{ config.labelDe }}\r\n    </label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             [minDate]=\"config.dateConfig.minDate\"\r\n             [maxDate]=\"config.dateConfig.maxDate\"\r\n             #dp=\"bsDatepicker\"\r\n             [formControlName]=\"config.name\"\r\n             bsDatepicker\r\n             [bsConfig]=\"{\r\n              containerClass: 'theme-default',\r\n              dateInputFormat: config.dateConfig.format\r\n             }\"\r\n             [required]=\"config.required\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'date-range'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\" [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">\r\n      {{ config.labelDe }}</label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             [minDate]=\"config.dateConfig.minDate\"\r\n             [maxDate]=\"config.dateConfig.maxDate\"\r\n             #drp=\"bsDaterangepicker\"\r\n             [formControlName]=\"config.name\"\r\n             bsDaterangepicker\r\n             [bsConfig]=\"{dateInputFormat: 'DD.MM.YYYY'}\"\r\n             [required]=\"config.required\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'radio'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\" [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">\r\n      {{ config.labelDe }}</label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n      <div class=\"form-check form-check-inline\" *ngFor=\"let option of config.options\">\r\n        <input class=\"form-check-input\"\r\n               type=\"radio\"\r\n               [formControlName]=\"config.name\"\r\n               id=\"option.id\"\r\n               [value]=\"option.value\" />\r\n        <label class=\"form-check-label\" for=\"option.id\">{{ option.label }}</label>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'dropdown'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\" [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">\r\n      {{ config.labelDe }}</label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n\r\n      <select [id]=\"config.name\"\r\n              [formControlName]=\"config.name\"\r\n              class=\"form-control\"\r\n              [required]=\"config.required\">\r\n        <option value=\"null\" disabled selected>Bitte auswählen</option>\r\n        <option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{ option.label }}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"config.type === 'checkbox'\" class=\"form-group row\">\r\n    <label [for]=\"config.name\" [ngClass]=\"config.fullRow ? classLabelFull : classLabelPartial \">\r\n      {{ config.labelDe }}</label>\r\n    <div [ngClass]=\"config.fullRow ? classInputFull : classInputPartial\">\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\"\r\n               type=\"checkbox\"\r\n               id=\"config.name\"\r\n               [formControlName]=\"config.name\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/dynamic-input/dynamic-input.component.scss":
/***/ (function(module, exports) {

module.exports = ".validation {\n  color: red;\n  font-size: smaller; }\n\nselect:required:invalid {\n  color: gray; }\n\noption[value=\"\"][disabled] {\n  display: none; }\n\noption {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/shared/dynamic-input/dynamic-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_management_fakeBackend_validationMessages_mock__ = __webpack_require__("./src/app/product-management/fakeBackend/validationMessages.mock.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicInputComponent = (function () {
    function DynamicInputComponent(localeService) {
        this.localeService = localeService;
        this.customFormControl = null;
        this.validationMessages = {};
        this.classLabelFull = 'col-md-7 col-lg-7';
        this.classLabelPartial = 'col-md-5 col-lg-4';
        this.classInputFull = 'col-md-5 col-lg-5';
        this.classInputPartial = 'col-md-7 col-lg-8';
    }
    DynamicInputComponent.prototype.ngOnInit = function () {
        this.localeService.use('de');
        this.validationMessages = __WEBPACK_IMPORTED_MODULE_1__product_management_fakeBackend_validationMessages_mock__["a" /* validationMessages */];
        if (this.config.type === 'date' || this.config.type === 'date-range') {
            debugger;
            if (this.customFormControl) {
                this.bsDatepicker = new Date(this.customFormControl.value);
            }
            this.config.dateConfig = {
                minDate: new Date(Date.parse(this.config.minDate)),
                maxDate: new Date(Date.parse(this.config.maxDate)),
                format: this.config.format
            };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DynamicInputComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DynamicInputComponent.prototype, "formGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DynamicInputComponent.prototype, "customFormControl", void 0);
    DynamicInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dynamic-input',
            template: __webpack_require__("./src/app/shared/dynamic-input/dynamic-input.component.html"),
            styles: [__webpack_require__("./src/app/shared/dynamic-input/dynamic-input.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsLocaleService */]])
    ], DynamicInputComponent);
    return DynamicInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/section-menu/section-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section-header\">\r\n  <div class=\"section-header__left\">\r\n    <h2 class=\"section-header__title\">{{title}}</h2>\r\n  </div>\r\n  <ng-content></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/section-menu/section-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".section-header {\n  margin: 0 -15px;\n  padding: 8px 30px;\n  background: white;\n  position: fixed;\n  width: 100vw;\n  z-index: 200;\n  -webkit-box-shadow: 0 5px 15px -5px  #aaa;\n          box-shadow: 0 5px 15px -5px  #aaa;\n  border-top: 1px solid #dddddd;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .section-header__title {\n    font-size: 25px;\n    font-weight: bold;\n    margin: 0; }\n  .section-header__back {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-right: 8px; }\n  .section-header__left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n"

/***/ }),

/***/ "./src/app/shared/section-menu/section-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionMenuComponent = (function () {
    function SectionMenuComponent() {
    }
    SectionMenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SectionMenuComponent.prototype, "title", void 0);
    SectionMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section-menu',
            template: __webpack_require__("./src/app/shared/section-menu/section-menu.component.html"),
            styles: [__webpack_require__("./src/app/shared/section-menu/section-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionMenuComponent);
    return SectionMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_menu_section_menu_component__ = __webpack_require__("./src/app/shared/section-menu/section-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_input_dynamic_input_component__ = __webpack_require__("./src/app/shared/dynamic-input/dynamic-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_ui_switch__ = __webpack_require__("./node_modules/ngx-ui-switch/ui-switch.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_ui_switch__["a" /* UiSwitchModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__section_menu_section_menu_component__["a" /* SectionMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_3__dynamic_input_dynamic_input_component__["a" /* DynamicInputComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__section_menu_section_menu_component__["a" /* SectionMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_3__dynamic_input_dynamic_input_component__["a" /* DynamicInputComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/user-management/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-section-menu [title]=\"'Profil verwalten'\">\n  <div>\n    <button class=\"btn btn-danger\" (click)=\"back()\">\n      <span><i class=\"fa fa-times\"></i></span>\n      <span>Zurück</span>\n    </button>\n    <button class=\"btn btn-primary\" (click)=\"save()\">\n      <span>Speichern</span>\n  </button>\n  </div>\n</app-section-menu>\n\n<div class=\"content-wrapper user-data-wrapper\">\n\n  <div class=\"row user-data-inputs\">\n    <div class=\"col-md-8\">\n      <div class=\"user-data-card\">\n        <div class=\"user-data-card__header\">Profildaten</div>\n        <div class=\"user-data-card__info\">\n          <span>Hier können Sie Ihre Nutzedaten pflegen</span>\n        </div>\n        <div class=\"user-data-card__content\">\n          <div [formGroup]=\"userDataForm\">\n              <div class=\"form-group row\">\n                <label for=\"name\" class=\"col-md-5 col-lg-4\">Name</label>\n                <div class=\"col-md-7 col-lg-8\">\n                  <input id=\"name\"\n                         type=\"text\"\n                         placeholder=\"Name\"\n                         formControlName=\"name\"\n                         class=\"form-control\"/>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"company\" class=\"col-md-5 col-lg-4\">Firma</label>\n                <div class=\"col-md-7 col-lg-8\">\n                  <input id=\"company\"\n                         type=\"text\"\n                         placeholder=\"Firma eintragen\"\n                         formControlName=\"company\"\n                         class=\"form-control\"/>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"phone\" class=\"col-md-5 col-lg-4\">Telefonnummer</label>\n                <div class=\"col-md-7 col-lg-8\">\n                  <input id=\"phone\"\n                         type=\"text\"\n                         placeholder=\"Telefonnummer\"\n                         formControlName=\"phone\"\n                         class=\"form-control\"/>\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"email\" class=\"col-md-5 col-lg-4\">Email</label>\n                <div class=\"col-md-7 col-lg-8\">\n                  <input id=\"email\"\n                         type=\"text\"\n                         placeholder=\"Email eintragen\"\n                         formControlName=\"email\"\n                         class=\"form-control\"/>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"user-data-card\">\n        <div class=\"user-data-card__header\">Profilbild</div>\n        <div class=\"user-data-card__content\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-md-12 \">\n              <div class=\"user-picture\">\n                  <img class=\"user-picture__img\" src=\"../../../assets/img/profile.jpg\">\n\n                  <div class=\"user-picture__edit\">\n                    <button class=\"btn btn-primary\">Bild ändern</button>\n                    <button class=\"btn btn-primary\">Bild löschen</button>\n                  </div>\n\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-management/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".user-data-inputs {\n  margin: 50px 0; }\n\n.user-data-card {\n  background: white;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 0px 20px 0 #aaa;\n          box-shadow: 0px 0px 20px 0 #aaa;\n  margin-bottom: 16px; }\n\n.user-data-card__info {\n    padding: 16px;\n    color: #71af2f;\n    font-size: 16px; }\n\n.user-data-card__show-btn {\n    height: 30px;\n    font-size: 12px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.user-data-card__show-btn ui-switch {\n      position: relative;\n      top: 2.5px; }\n\n.user-data-card__show-btn-text {\n    padding-right: 8px; }\n\n.user-data-card__header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #71af2f;\n    padding: 16px;\n    font-size: 20px;\n    color: #71af2f; }\n\n.user-data-card__content {\n    padding: 16px;\n    border-bottom: 5px solid #71af2f;\n    border-radius: 2px; }\n\n.user-data-wrapper {\n  margin: 100px; }\n\n.user-picture {\n  text-align: center;\n  margin: 20px;\n  border: 1px lightgray solid;\n  padding: 10px; }\n\n.user-picture__img {\n    height: 200px;\n    border: 5px #fff solid; }\n\n.user-picture:hover img {\n    opacity: 0.5; }\n\n.user-picture:hover button {\n    display: block; }\n\n.user-picture__edit {\n    position: absolute;\n    top: 35%;\n    left: 38%;\n    width: 200px;\n    display: block;\n    text-align: center; }\n\n.user-picture__edit:hover {\n      display: block; }\n\n.user-picture__edit button {\n      position: flex;\n      display: none;\n      margin: 10px; }\n"

/***/ }),

/***/ "./src/app/user-management/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.userObject = this.authService.getUserObject();
        var inputControls = {
            'name': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.userObject.name),
            'company': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.userObject.company),
            'phone': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.userObject.phone),
            'email': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.userObject.email)
        };
        this.userDataForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */](inputControls);
    };
    ProfileComponent.prototype.back = function () {
        this.router.navigate(['products']);
    };
    ProfileComponent.prototype.save = function () {
        this.authService.setUserObject({
            name: this.userDataForm.controls['name']['value'],
            company: this.userDataForm.controls['company']['value'],
            phone: this.userDataForm.controls['phone']['value'],
            email: this.userDataForm.controls['email']['value'],
        });
        this.router.navigate(['products']);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/user-management/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/user-management/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    useMockBackend: false,
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map