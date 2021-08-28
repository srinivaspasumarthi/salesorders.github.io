(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<small>Home Page content</small>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col container jumbotron\">\n        <h1>\n          Registration Form\n        </h1>\n        <form>\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" name=\"name\" [(ngModel)]=\"data.name\">\n          </div>\n          <div class=\"form-group\">\n            <label>email</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"data.email\">\n          </div>\n          <div class=\"form-group\">\n            <label>phone</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter phone\" name=\"phone\" [(ngModel)]=\"data.phone\">\n          </div>\n          <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter username\" name=\"username\" [(ngModel)]=\"data.username\">\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter password\" name=\"password\" [(ngModel)]=\"data.password\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"registration();\">Submit</button>\n        </form>\n      </div>\n      <div >\n\n      </div>\n      <div class=\"col container jumbotron\">\n        <h1>\n          Login Form\n        </h1>\n        <div class=\"alert alert-danger\" *ngIf=\"loginMessage\">Please enter valid data</div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">User Name</label>\n            <input type=\"email\" class=\"form-control\"\n              placeholder=\"Enter username\" name=\"loginusername\" [(ngModel)]=\"loginData.username\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\"  placeholder=\"Password\" name=\"loginpassword\" [(ngModel)]=\"loginData.password\">\n          </div>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"login();\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logincheck.service */ "./src/app/logincheck.service.ts");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [_logincheck_service__WEBPACK_IMPORTED_MODULE_5__["LogincheckService"]]
        // , component: DashboardComponent ,
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'regstrNode';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm2015/ngx-localstorage.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ngx_localstorage__WEBPACK_IMPORTED_MODULE_8__["NgxLocalStorageModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DataService = class DataService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](1);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
        console.log(message);
    }
    resolve(route, state) {
        console.log('resolve in dataservice');
        console.log(route.params.id);
        console.log(this.getHeader(route.params.id));
        this.getHeader(route.params.id).subscribe((success) => {
            console.log(success);
            if (success.data.length == 0) {
                alert('Order ' + route.params.id + ' does not exist');
                this.router.navigate(['/dashboard/view']);
            }
        }, (error) => {
            alert('Order ' + route.params.id + ' does not exist');
            this.router.navigate(['/dashboard/view']);
        });
        return this.getHeader(route.params.id);
    }
    registration(data) {
        var response = this.http.post('http://localhost:9999/crud/user/create', data);
        return response;
    }
    login(data) {
        var response = this.http.post('http://localhost:9999/crud/user/login', data);
        return response;
    }
    header(data) {
        var response = this.http.post('http://localhost:9999/crud/order/header/create', data);
        return response;
    }
    maxOrderNumber() {
        var response = this.http.get('http://localhost:9999/crud/header/maxordernumber');
        return response;
    }
    linesInsert(data) {
        var response = this.http.post('http://localhost:9999/crud/order/lines/create', data);
        return response;
    }
    getHeaders() {
        var response = this.http.get('http://localhost:9999/crud/get/headers');
        return response;
    }
    getHeader(data) {
        var response = this.http.get('http://localhost:9999/crud/get/header?id=' + data);
        return response;
    }
    updateHeader(data) {
        var response = this.http.post('http://localhost:9999/crud/update/header', data);
        return response;
    }
    updateLine(data) {
        var response = this.http.post("http://localhost:9999/crud/update/line", data);
        //var response = this.http.post('http://localhost:9999/crud/update/header', data);
        return response;
    }
    updateLines(data) {
        var response = this.http.post("http://localhost:9999/crud/update/lines", data);
        //var response = this.http.post('http://localhost:9999/crud/update/header', data);
        return response;
    }
    getLines(data) {
        var response = this.http.get('http://localhost:9999/crud/get/lines?id=' + data);
        return response;
    }
    deleteOrder(data) {
        console.log(data);
        var response = this.http.delete('http://localhost:9999/crud/orders/delete?id=' + data);
        return response;
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm2015/ngx-localstorage.js");





let HomeComponent = class HomeComponent {
    constructor(dataservice, router, local) {
        this.dataservice = dataservice;
        this.router = router;
        this.local = local;
        this.loginMessage = false;
        this.data = {
            name: null,
            email: null,
            phone: null,
            username: null,
            password: null
        };
        this.loginData = {
            username: null,
            password: null
        };
    }
    login() {
        this.dataservice.login(this.loginData).subscribe((success) => {
            console.log(success);
            if (success.response == 0) {
                this.loginMessage = true;
                this.loginData = {
                    username: null,
                    password: null
                };
            }
            else {
                this.local.set('username', this.loginData.username);
                this.local.set('password', this.loginData.password);
                console.log('navigating');
                this.router.navigate(['dashboard']);
            }
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    registration() {
        console.log(this.data);
        //this.http.post('http://localhost:9999/crud/user/create', this.data).subscribe
        this.dataservice.registration(this.data).subscribe((success) => {
            console.log(success);
        }, (error) => {
            console.log(error);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_localstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/logincheck.service.ts":
/*!***************************************!*\
  !*** ./src/app/logincheck.service.ts ***!
  \***************************************/
/*! exports provided: LogincheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincheckService", function() { return LogincheckService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm2015/ngx-localstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogincheckService = class LogincheckService {
    constructor(local, router) {
        this.local = local;
        this.router = router;
    }
    canActivate() {
        console.log('canactivate: Checking routing');
        // console.log(this.route.snapshot.params.id);
        if (this.local.get('username') == null) {
            this.router.navigate(['/']);
        }
        else {
        }
        return true;
    }
};
LogincheckService.ctorParameters = () => [
    { type: ngx_localstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogincheckService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LogincheckService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\regisHeaderLines_proj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map