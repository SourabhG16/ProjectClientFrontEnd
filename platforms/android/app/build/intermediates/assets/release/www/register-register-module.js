(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n      <ion-title>register</ion-title>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"register()\">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Name</ion-label>\n        <ion-input formControlName=\"Name\" type=\"text\" value=\"\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Age</ion-label>\n        <ion-input formControlName=\"Age\" type=\"Number\" value=\"\"></ion-input>\n      </ion-item>\n  \n  <!-- <ion-list radio-group >\n      <ion-item>\n      <ion-label>Male</ion-label>\n      <ion-radio formControlName=\"gender\" value=\"Male\" checked></ion-radio>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Female</ion-label>\n        <ion-radio formControlName=\"gender\" value=\"Female\"></ion-radio>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Others</ion-label>\n        <ion-radio formControlName=\"gender\" value=\"Others\" [disabled]=\"isDisabled\"></ion-radio>\n      </ion-item>\n  </ion-list> -->\n  <!-- second way -->\n  <!-- <ion-list radio-group ngDefaultControl [formControl]=\"credentialsForm.controls['gender']\">\n      <ion-list-header>\n        Gender\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Male</ion-label>\n        <ion-radio value=\"Male\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Female</ion-label>\n        <ion-radio value=\"Female\"></ion-radio>\n      </ion-item>\n    </ion-list> -->\n    <ion-item>\n        <ion-label floating>Gender</ion-label>\n        <ion-input formControlName=\"Gender\" type=\"text\" value=\"\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Birthdate</ion-label>\n        <ion-input formControlName=\"Birthdate\"type=\"Birthdate\" value=\"\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Address</ion-label>\n        <ion-input formControlName=\"Address\" type=\"text\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Email-Address</ion-label>\n        <ion-input formControlName=\"Email\" type=\"email\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Id-Number-Received</ion-label>\n        <ion-input formControlName=\"IdReceiver\" type=\"text\" value=\"\"></ion-input>\n      </ion-item>\n  \n      <ion-list>\n        <ion-radio-group formControlName=\"Type\">\n          <ion-list-header>\n            <ion-label>Type</ion-label>\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label>Tourist</ion-label>\n            <ion-radio slot=\"start\" value=\"Tourist\" checked></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Commuter</ion-label>\n            <ion-radio slot=\"start\" value=\"Commuter\"></ion-radio>\n          </ion-item>\n      \n          <!-- <ion-item>\n            <ion-label>Buford</ion-label>\n            <ion-radio slot=\"start\" value=\"buford\"></ion-radio>\n          </ion-item> -->\n        </ion-radio-group>\n      </ion-list>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input formControlName=\"Password\" type=\"password\" value=\"\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Confirm Password</ion-label>\n        <ion-input formControlName=\"Confirm\" type=\"password\" value=\"\"></ion-input>\n      </ion-item>\n  \n      <div padding>\n          <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!credentialsForm.valid\" >Register</ion-button>\n      </div>\n    </ion-list>\n  \n    </form>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage, PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';



// import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Age: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            IdReceiver: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
        // {
        //   validator: PasswordValidation.MatchPassword // your validation method
        // });
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.credentialsForm.value).subscribe(function (res) {
            // Call Login to automatically login the new user
            // this.authService.login(this.credentialsForm.value).subscribe();
            // redirect to login page
            _this.router.navigateByUrl('/login');
        });
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());

var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('Password').value; // to get value in input tag
        var confirmPassword = AC.get('Confirm').value; // to get value in input tag
        if (password !== confirmPassword) {
            console.log('false');
            AC.get('Confirm').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map