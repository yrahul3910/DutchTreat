webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Product List';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'the-shop',
        template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
        styles: []
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../common/@angular/common/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var app_component_1 = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
var productList_component_1 = __webpack_require__("../../../../../ClientApp/app/shop/productList.component.ts");
var shop_component_1 = __webpack_require__("../../../../../ClientApp/app/shop/shop.component.ts");
var login_component_1 = __webpack_require__("../../../../../ClientApp/app/login/login.component.ts");
var checkout_component_1 = __webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.ts");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var cart_component_1 = __webpack_require__("../../../../../ClientApp/app/shop/cart.component.ts");
var routes = [
    { path: "", component: shop_component_1.Shop },
    { path: "checkout", component: checkout_component_1.Checkout },
    { path: "login", component: login_component_1.Login }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            productList_component_1.ProductList,
            cart_component_1.Cart,
            shop_component_1.Shop,
            checkout_component_1.Checkout,
            login_component_1.Login
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routes, {
                useHash: true,
                enableTracing: false
            }),
        ],
        providers: [
            dataService_1.DataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout-thumb {\r\n    max-width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n    <h3>Confirm Order</h3>\r\n    <table class=\"table table-bordered table-hover\">\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td><img src=\"/img/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\r\n            <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\r\n            <td>{{ o.quantity }}</td>\r\n            <td>{{ o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n        </tr>\r\n    </table>\r\n    <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n        <table class=\"table table-condensed\">\r\n            <tr>\r\n                <td class=\"text-right\">Subtotal</td>\r\n                <td class=\"text-right\">{{ data.order.subtotal | currency:\"USD\":true }}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-right\">Shipping</td>\r\n                <td class=\"text-right\">$0.00</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"text-right\">Total:</td>\r\n                <td class=\"text-right\">{{ data.order.subtotal | currency:\"USD\":true }}</td>\r\n            </tr>\r\n        </table>\r\n        <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n        <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/checkout/checkout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var Checkout = (function () {
    function Checkout(data) {
        this.data = data;
    }
    return Checkout;
}());
Checkout = __decorate([
    core_1.Component({
        selector: "checkout",
        template: __webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof dataService_1.DataService !== "undefined" && dataService_1.DataService) === "function" && _a || Object])
], Checkout);
exports.Checkout = Checkout;
var _a;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n    <form (submit)=\"onLogin()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\">Username</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\"  />\r\n        <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var Login = (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.creds = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: "login",
        template: __webpack_require__("../../../../../ClientApp/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof dataService_1.DataService !== "undefined" && dataService_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], Login);
exports.Login = Login;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shared/dataService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../common/@angular/common/http.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var order_1 = __webpack_require__("../../../../../ClientApp/app/shared/order.ts");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.products = [];
        this.order = new order_1.Order();
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (res) {
            _this.products = res;
            return res;
        });
    };
    DataService.prototype.addToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], DataService);
exports.DataService = DataService;
var _a;
//# sourceMappingURL=dataService.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shared/order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderItem = (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
var Order = (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return this.items.reduce(function (acc, val) { return acc + (val.quantity * val.unitPrice); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shop/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>Count: {{ data.order.items.length }}</div>\r\n<div>Subtotal: {{ data.order.subtotal | currency:\"USD\":true }}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{ o.productCategory }} - {{ o.productTitle }}</td>\r\n            <td>{{ o.quantity }}</td>\r\n            <td>{{ o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>"

/***/ }),

/***/ "../../../../../ClientApp/app/shop/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var Cart = (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
        }
    };
    return Cart;
}());
Cart = __decorate([
    core_1.Component({
        selector: "the-cart",
        template: __webpack_require__("../../../../../ClientApp/app/shop/cart.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof dataService_1.DataService !== "undefined" && dataService_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], Cart);
exports.Cart = Cart;
var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shop/productList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-info img {\r\n    max-width: 100px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.product-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/shop/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n        <img src=\"/img/{{ p.artId }}.jpg\" class=\"img-responsive\" [alt]=\"p.title\" />\r\n        <div class=\"product-name\">{{ p.category }} - {{ p.size }}</div>\r\n        <div><strong>Price:</strong> {{ p.price | currency:\"USD\":true }}</div>\r\n        <div><strong>Artist:</strong> {{ p.artist }}</div>\r\n        <div><strong>Title:</strong> {{ p.title }}</div>\r\n        <div><strong>Description:</strong> {{ p.artDescription }}</div>\r\n        <button id=\"buyButton\" class=\"btn btn-sm btn-success pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/shop/productList.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var dataService_1 = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var ProductList = (function () {
    function ProductList(data) {
        this.data = data;
        this.products = [];
        this.products = data.products;
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function () {
            _this.products = _this.data.products;
        });
    };
    ProductList.prototype.addProduct = function (p) {
        this.data.addToOrder(p);
    };
    return ProductList;
}());
ProductList = __decorate([
    core_1.Component({
        selector: "product-list",
        template: __webpack_require__("../../../../../ClientApp/app/shop/productList.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/shop/productList.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof dataService_1.DataService !== "undefined" && dataService_1.DataService) === "function" && _a || Object])
], ProductList);
exports.ProductList = ProductList;
var _a;
//# sourceMappingURL=productList.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{ title }}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"well well-sm\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/shop/shop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Shop = (function () {
    function Shop() {
    }
    return Shop;
}());
Shop = __decorate([
    core_1.Component({
        selector: "the-shop",
        template: __webpack_require__("../../../../../ClientApp/app/shop/shop.component.html")
    })
], Shop);
exports.Shop = Shop;
//# sourceMappingURL=shop.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map