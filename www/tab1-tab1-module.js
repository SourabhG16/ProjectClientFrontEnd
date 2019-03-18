(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { GoogleMap } from "@ionic-native/google-maps";
//import { Http } from "@angular/http";
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                // GoogleMap,
                // Geolocation,
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    <ion-title>\r\n      GetSetGo!\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <div class=\"bar bar-header\">\r\n            <ion-button align=\"right\" class=\"button button-clear button-positive\" (click)=\"presentModal()\"><ion-icon name=\"bicycle\"></ion-icon></ion-button>\r\n          </div>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    \r\n   <!-- <a class=\"button button-icon icon bicycle\"></a> -->\r\n    <!--create a element for map. #Map - identifier -->\r\n  <div #Map class=\"map\"></div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.map {\n  height: 100%; }\n\n/*#floating-panel {\n  position: absolute;\n  top: 375px;\n  right: 130px;\n  z-index: 5;\n  background-color:blue;\n  padding: 5px;\n  border: 1px solid #999;\n  text-align: center;\n  font-family: 'Roboto','sans-serif';\n  line-height: 30px;\n  padding-left: 10px;\n}\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXFJvZ2doXFxEZXNrdG9wXFxDbGllbnQvc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFlBQVksRUFBQTs7QUFFZDs7Ozs7Ozs7Ozs7OztDQ2FDIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFwe1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKiNmbG9hdGluZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNzVweDtcbiAgcmlnaHQ6IDEzMHB4O1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsJ3NhbnMtc2VyaWYnO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuKi8iLCIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLyojZmxvYXRpbmctcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzc1cHg7XG4gIHJpZ2h0OiAxMzBweDtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZC1jb2xvcjpibHVlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdzYW5zLXNlcmlmJztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config.ts");
/* harmony import */ var _global_var_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global-var.service */ "./src/app/global-var.service.ts");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../route.service */ "./src/app/route.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var Tab1Page = /** @class */ (function () {
    function Tab1Page(zone, geolocation, modalController, Config, global_var, routeservice, Router, Http) {
        var _this = this;
        this.zone = zone;
        this.geolocation = geolocation;
        this.modalController = modalController;
        this.Config = Config;
        this.global_var = global_var;
        this.routeservice = routeservice;
        this.Router = Router;
        this.Http = Http;
        this.data = [];
        this.location = { lat: null, lng: null };
        this.markerOptions = { position: null, map: null, title: null };
        /*load google map script dynamically */
        var apiKey = Config.apireturn();
        this.api = apiKey;
        var script = document.createElement('script');
        script.id = 'googleMap';
        if (apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?&language=en&key=' + apiKey;
        }
        else {
            script.src = 'https://maps.googleapis.com/maps/api/js?&language=en&key= ';
        }
        document.head.appendChild(script);
        /*Get Current location*/
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.location.lat = position.coords.latitude;
            _this.location.lng = position.coords.longitude;
        });
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 15,
            mapTypeControl: false
        };
        setTimeout(function () {
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, _this.mapOptions);
            /*Marker Options*/
            //var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer;
            _this.markerOptions.position = _this.location;
            _this.markerOptions.map = _this.map;
            _this.markerOptions.title = 'My Location';
            _this.marker = new google.maps.Marker(_this.markerOptions);
            directionsDisplay.setMap(_this.map);
        }, 3000);
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.routeservice.currentJson.subscribe(function (obj) { return _this.obj = obj; });
    };
    Tab1Page.prototype.newMessage = function () {
        this.routeservice.changeJson(this.RouteJson);
    };
    Tab1Page.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"],
                            componentProps: { lat: this.location.lat,
                                lang: this.location.lng,
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            console.log("Status");
                            console.log(_this.global_var.Unreachable);
                            if (!_this.global_var.Unreachable) {
                                console.log("data pres");
                                _this.RouteJson = data; // Here's your selected user!
                                console.log(_this.RouteJson);
                                _this.lat1 = _this.RouteJson.data[0].Latitude;
                                _this.lat2 = _this.RouteJson.data[1].Latitude;
                                _this.long2 = _this.RouteJson.data[1].Longitude;
                                _this.long1 = _this.RouteJson.data[0].Longitude;
                                _this.newMessage();
                                _this.routeservice.TripRecord(_this.RouteJson).subscribe(function (res) {
                                    console.log('record inserted to db');
                                });
                            }
                            else {
                                console.log("unreachable");
                            }
                            //console.log(this.RouteJson.data[0].AreaName);
                            //console.log(this.RouteJson.data[1].AreaName); 
                            _this.Router.navigate(['/payments']);
                            _this.RouteTO();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.RouteTO = function () {
        return __awaiter(this, void 0, void 0, function () {
            var directionsService, directionsDisplay, start, end;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mapOptions = {
                            center: this.location,
                            zoom: 15,
                            mapTypeControl: false
                        };
                        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
                        directionsService = new google.maps.DirectionsService();
                        directionsDisplay = new google.maps.DirectionsRenderer();
                        if (!(typeof this.lat1 == "undefined" || typeof this.long1 == "undefined")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.RouteTO()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        ;
                        start = new google.maps.LatLng(this.lat1, this.long1);
                        end = new google.maps.LatLng(this.lat2, this.long2);
                        directionsService.route({
                            origin: start,
                            destination: end,
                            travelMode: 'DRIVING'
                        }, function (response, status) {
                            if (status === 'OK') {
                                // console.log(response.routes[0].legs[0].duration.text);
                                var a = JSON.stringify(response.routes[0].legs[0].duration.text);
                                a = a.replace(" mins", "");
                                console.log("a is:" + a);
                                _this.tripDur = JSON.parse(a);
                                var b = +_this.tripDur;
                                b = (b) + ((b) * 1 / 2);
                                console.log("B is" + b);
                                directionsDisplay.setMap(_this.map);
                                directionsDisplay.setDirections(response);
                                // console.log(response);
                                _this.data = _this.data.concat(b, _this.global_var.LoggedUser);
                                console.log(_this.tripDur);
                                setTimeout(function () {
                                    _this.routeservice.tripDuration(_this.data).subscribe(function (res) {
                                        //console.log(res);
                                    });
                                }, 3000);
                            }
                            else {
                                window.alert('Directions request failed due to ' + status);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Tab1Page.prototype, "mapElement", void 0);
    Tab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _config__WEBPACK_IMPORTED_MODULE_4__["Config"], _global_var_service__WEBPACK_IMPORTED_MODULE_5__["GlobalVarService"], _route_service__WEBPACK_IMPORTED_MODULE_6__["RouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map