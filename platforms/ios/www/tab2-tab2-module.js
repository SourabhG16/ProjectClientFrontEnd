(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Payment\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n    <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n    <!------ Include the above in your HEAD tag ---------->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-4\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h3 class=\"panel-title\">\n                            Payment Details \n                        </h3>\n                        <div class=\"checkbox pull-right\">\n                            <label>\n                                <input type=\"checkbox\" />\n                                Remember\n                            </label>\n                        </div>\n                        <div class=\"text\">\n                            <label>\n                               Rate Rs:5/1hr<br>\n                               Bill For Now Rs:5    \n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"panel-body\">\n                      <h4>Source:{{src}}</h4>\n                      <h4>Destination:{{dest}}</h4>\n                    </div>\n                </div>\n                <ul class=\"nav nav-pills nav-stacked\">\n                    <li class=\"active\"><a href=\"#\"><span class=\"badge pull-right\">Rs:5</span> Final Payment</a>\n                    </li>\n                </ul>\n                <br/>\n                <a class=\"btn btn-success btn-lg btn-block\" (click)=\"pay()\" role=\"button\">PayNow</a>\n            </div>\n        </div>\n    </div>\n    \n  </ion-content> <!--  -->\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin-top: 20px; }\n\n.panel-title {\n  display: inline;\n  font-weight: bold; }\n\n.checkbox.pull-right {\n  margin: 0; }\n\n.pl-ziro {\n  padding-left: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXFJvZ2doXFxEZXNrdG9wXFxDbGllbnQvc3JjXFxhcHBcXHRhYjJcXHRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sZ0JBQWUsRUFBQTs7QUFDdEI7RUFBYyxlQUFlO0VBQUMsaUJBQWlCLEVBQUE7O0FBQy9DO0VBQXVCLFNBQVMsRUFBQTs7QUFDaEM7RUFBVyxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHsgbWFyZ2luLXRvcDoyMHB4OyB9XG4ucGFuZWwtdGl0bGUge2Rpc3BsYXk6IGlubGluZTtmb250LXdlaWdodDogYm9sZDt9XG4uY2hlY2tib3gucHVsbC1yaWdodCB7IG1hcmdpbjogMDsgfVxuLnBsLXppcm8geyBwYWRkaW5nLWxlZnQ6IDBweDsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route.service */ "./src/app/route.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab2Page = /** @class */ (function () {
    function Tab2Page(Router, route, RouteService) {
        this.Router = Router;
        this.route = route;
        this.RouteService = RouteService;
    }
    Tab2Page.prototype.pay = function () {
        console.log("from pay" + this.obj.data[2]);
        this.RouteService.Transaction(this.obj.data).subscribe(function (res) { });
        this.Router.navigateByUrl('');
    };
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.RouteService.currentJson.subscribe(function (obj) { return _this.obj = obj; });
        this.src = this.obj.data[0].AreaName;
        this.dest = this.obj.data[1].AreaName;
        console.log("from oninit" + this.obj.data[2]);
    };
    Tab2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map