webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/administrator/administrator.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Testing Admin Page</h1>\n"

/***/ }),

/***/ "../../../../../src/app/administrator/administrator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdministratorComponent = (function () {
    function AdministratorComponent() {
        this.title = 'Administrator Service';
    }
    return AdministratorComponent;
}());
AdministratorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'admin-page',
        template: __webpack_require__("../../../../../src/app/administrator/administrator.component.html")
    })
], AdministratorComponent);

//# sourceMappingURL=administrator.component.js.map

/***/ }),

/***/ "../../../../../src/app/administrator/books/booklist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class =\"box\">\n\t\t<h1>{{title}}</h1>\n\n\t\t<table class=\"table\" id=\"booksTable\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Book ID</th>\n\t\t\t\t\t<th>Title</th>\n\t\t\t\t\t<th>Author(s)</th>\n\t\t\t\t\t<th>Publisher</th>\n\t\t\t\t\t<th>Genre(s)</th>\n\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngFor=\"let b of books\">\n\t\t\t\t\t\t<td>{{b.bookId}}</td>\n\t\t\t\t\t\t<td>{{b.title}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let a of b.authors\" >\n\t\t\t\t\t\t\t\t{{a.authorName}}.\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"b.publisher != null\" >\n\t\t\t\t\t\t\t\t{{b.publisher.publisherName}}\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let g of b.genres\" >\n\t\t\t\t\t\t\t\t{{g.genreName}}.\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td><button class=\"btn btn-default\" type=\"button\">Edit</button></td>\n\t\t\t\t\t<td><button class=\"btn btn-danger\" type=\"button\">Delete</button></td>\n\t\t\t\t\t</tr>\n\t\t</table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/administrator/books/booklist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__ = __webpack_require__("../../../../../src/app/shared/services/book.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent(bookService) {
        this.bookService = bookService;
        this.title = "Books";
        this.books = [];
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService
            .getAll()
            .subscribe(function (b) { return _this.books = b; }, function (error) { return console.log(error); });
    };
    return BookListComponent;
}());
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'list-books',
        template: __webpack_require__("../../../../../src/app/administrator/books/booklist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_book_service__["a" /* BookService */]) === "function" && _a || Object])
], BookListComponent);

var _a;
//# sourceMappingURL=booklist.component.js.map

/***/ }),

/***/ "../../../../../src/app/administrator/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books_booklist_component__ = __webpack_require__("../../../../../src/app/administrator/books/booklist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__books_booklist_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__administrator_component__ = __webpack_require__("../../../../../src/app/administrator/administrator.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__administrator_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__administrator_index__ = __webpack_require__("../../../../../src/app/administrator/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routedComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__home_index__["a" /* HomeComponent */] },
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_3__administrator_index__["a" /* BookListComponent */],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

var routedComponents = [__WEBPACK_IMPORTED_MODULE_2__home_index__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__administrator_index__["a" /* BookListComponent */], __WEBPACK_IMPORTED_MODULE_3__administrator_index__["b" /* AdministratorComponent */]];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- header -->\n<layout-header></layout-header>\n\n<router-outlet></router-outlet>\n\n<layout-footer></layout-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'GCIT Library';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* routedComponents */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["b" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared__["c" /* BookService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"box\">\n    \t<div class=\"col-lg-12 text-center\">\n    \t\t<h2 class=\"brand-before\">\n    \t\t\t<small>Welcome to</small>\n    \t\t</h2>\n    \t\t<h1 class=\"brand-name\">GCIT Library Management System</h1>\n    \t\t<hr class=\"tagline-divider\">\n    \t\t<h2>\n    \t\t\t<small>By <strong>GCIT</strong>\n    \t\t\t</small>\n    \t\t</h2>\n    \t</div>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"box\">\n    \t<div class=\"col-lg-12\">\n    \t\t<hr>\n    \t\t<h2 class=\"intro-text text-center\">\n    \t\t\tChoose a <strong>User Type</strong>\n    \t\t</h2>\n    \t\t<hr>\n    \t</div>\n    \t<div class=\"col-sm-4 text-center\">\n    \t\t<img class=\"img-responsive\" src=\"../assets/images/admin.jpg\"\n    \t\t\talt=\"Administrator\">\n    \t\t<h3>\n    \t\t\t<a href=\"admin\">Administrator</a>\n    \t\t</h3>\n    \t</div>\n    \t<div class=\"col-sm-4 text-center\">\n    \t\t<img class=\"img-responsive\" src=\"../assets/images/librarian.jpg\"\n    \t\t\talt=\"Librarian\">\n    \t\t<h3>\n    \t\t\t<a href=\"librarianbranch\">Librarian</a>\n    \t\t</h3>\n    \t</div>\n    \t<div class=\"col-sm-4 text-center\">\n    \t\t<img class=\"img-responsive\" src=\"../assets/images/borrower.jpg\"\n    \t\t\talt=\"Borrower\">\n    \t\t<h3>\n    \t\t\t<a href=\"borrower\">Borrower</a>\n    \t\t</h3>\n    \t</div>\n    \t<div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'GCIT Library';
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'home-page',
        template: __webpack_require__("../../../../../src/app/home/home.component.html")
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout__ = __webpack_require__("../../../../../src/app/shared/layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__layout__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__services__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n     <div class=\"container\">\n         <div class=\"row\">\n             <div class=\"col-lg-12 text-center\">\n\n                 <p>Copyright @ GCIT LMS {{ today | date: 'yyyy' }}.</p>\n             </div>\n         </div>\n     </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'layout-footer',
        template: __webpack_require__("../../../../../src/app/shared/layout/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/header.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n\n    <link rel=\"icon\" href=\"http://54.83.8.59/site/wp-content/uploads/2014/02/favicon.png\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>GCIT LMS</title>\n\n</head>\n<div class=\"container\">\n    <div class=\"brand\">{{title}}</div>\n    <div class=\"address-bar\">12730 Fair Lakes Circle| Fairfax, VA 22033 | 123.456.7890</div>\n</div>\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-default\" role=\"navigation\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->\n                <a class=\"navbar-brand\" href=\"/lms\">GCIT Library</a>\n            </div>\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li>\n                        <a href=\"/lms\">Home</a>\n                    </li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"/books\">Books</a></li>\n                    <li>\n                        <a href=\"librarianbranch\">Librarian</a>\n                    </li>\n                    <li>\n                        <a href=\"borrower\">Borrower</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = 'GCIT Library';
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'layout-header',
        template: __webpack_require__("../../../../../src/app/shared/layout/header.component.html")
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__("../../../../../src/app/shared/layout/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_component__ = __webpack_require__("../../../../../src/app/shared/layout/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/author.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Author */
var Author = (function () {
    function Author() {
    }
    return Author;
}());

//# sourceMappingURL=author.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Book */
var Book = (function () {
    function Book() {
    }
    return Book;
}());

//# sourceMappingURL=book.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/genre.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Genre */
var Genre = (function () {
    function Genre() {
    }
    return Genre;
}());

//# sourceMappingURL=genre.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publisher_model__ = __webpack_require__("../../../../../src/app/shared/models/publisher.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_model__ = __webpack_require__("../../../../../src/app/shared/models/book.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__author_model__ = __webpack_require__("../../../../../src/app/shared/models/author.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__genre_model__ = __webpack_require__("../../../../../src/app/shared/models/genre.model.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/models/publisher.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Publisher */
var Publisher = (function () {
    function Publisher() {
    }
    return Publisher;
}());

//# sourceMappingURL=publisher.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("../../../../../src/app/shared/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //File where global variables are declared



var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* apiurl */] + "/api/books"; // web api URL
    }
    BookService.prototype.getAll = function () {
        console.log(this.baseUrl);
        return this.http.get("" + this.baseUrl)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    BookService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiurl; });
//
// ===== File globals.ts
//

var apiurl = 'http://18.220.1.30:8090/';
//# sourceMappingURL=global.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_service__ = __webpack_require__("../../../../../src/app/shared/services/book.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* unused harmony export SharedModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map