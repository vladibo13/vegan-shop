(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<!-- <h1 class=\"mt-5 text-center\">VEGAN SHOP</h1> -->\n<div class=\"main-app\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img\n    src=\"https://images.unsplash.com/photo-1553546895-531931aa1aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80\"\n    alt=\"store-main\" class=\"img-fluid\">\n<p class=\"mt-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia\n    iste\n    quibusdam est, dolorum maxime perferendis. In, at dolorem. Asperiores\n    facilis nihil error aperiam cum voluptate eius excepturi ad optio dolor.\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-edit/admin-edit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-edit/admin-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\"\n      (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"editForm\">\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"pName\">\n      </div>\n      <div class=\"form-group\">\n        <label>Type</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"type\">\n      </div>\n      <div class=\"form-group\">\n        <label>Image</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"imageURL\">\n      </div>\n      <div class=\"form-group\">\n        <label>Price</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"price\">\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"edit()\">Save</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-block btn-success\" (click)=\"open(content)\">Edit</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-modal/admin-modal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-modal/admin-modal.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Product</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"\n            (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"createProductForm\">\n            <div class=\"form-group\">\n                <label>Product Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n            </div>\n            <div class=\"form-group\">\n                <label>Product Price</label>\n                <input type=\"number\" class=\"form-control\"\n                    formControlName=\"price\">\n            </div>\n            <div class=\"form-group\">\n                <label>Product Category</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"type\">\n            </div>\n            <div class=\"form-group\">\n                <label>Product Image</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"image\">\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\"\n            (click)=\"save()\">Save</button>\n    </div>\n</ng-template>\n\n<hr>\n\n<button (click)=\"open(content)\" class=\"btn btn-outline-primary\">\n    Add Product<ion-icon class=\"ml-2\" name=\"add-outline\"></ion-icon>\n</button>\n\n\n<hr>\n\n<pre>{{ closeResult }}</pre>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container-fluid\">\n    <div class=\"icon text-center my-1\">\n        <app-admin-modal (onCreate)=\"updateProducts($event)\"></app-admin-modal>\n    </div>\n\n    <!-- <div class=\"container-fluid\">\n            <h5 class=\"py-2 text-center\">Edit</h5>\n            <div *ngIf=\"selectedProduct\">\n                {{selectedProduct | json }}\n\n                <app-admin-edit *ngFor=\"let p of products\" [product]=\"p\"></app-admin-edit>\n            </div>\n        </div> -->\n    <hr>\n    <div class=\"row\">\n        <!-- <h2 class=\"py-5 text-center\">Products </h2> -->\n        <div class=\"col-lg-2\">\n            <app-store-filter\n                [isAdmin]=\"true\"\n                *ngIf=\"!searchText\"\n                [category]=\"category\"></app-store-filter>\n        </div>\n        <div class=\"col-lg-10\">\n            <app-products-search *ngIf=\"!category\"></app-products-search>\n            <div class=\"row\">\n                <app-store-items\n                    (onEdit)=\"onEdit($event)\"\n                    [isAdmin]=\"true\"\n                    class=\"col-lg-3 col-md-6 my-3\"\n                    *ngFor=\"let p of products |\n                    search:searchText:'pName'\"\n                    [product]=\"p\"></app-store-items>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"card my-2\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-2 col-sm-12\">\n                    <img [src]=\"cartProduct.productID.imageURL\"\n                        class=\"img-fluid\">\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">amount: {{cartProduct.amount}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">{{cartProduct.productID.pName}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">price: {{cartProduct.productID.price\n                        |\n                        currency:'USD'}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">total: {{cartProduct.totalPrice |\n                        currency:'USD'}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <button *ngIf=\"isCart\"\n                        (click)=\"deleteCartProduct(cartProduct._id)\"\n                        class=\"btn btn-outline-danger btn-block\">Delete</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer border py-3 mt-5\">\n    <div class=\"container text-center\">\n        <ion-icon class=\"mr-2\" size=\"large\" name=\"logo-github\"></ion-icon>\n        <ion-icon size=\"large\" name=\"globe-outline\"></ion-icon>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"col-md-4 col-sm-12 mb-3\">\n      <app-login *ngIf=\"!signedIn\"></app-login>\n      <h6 *ngIf=\"signedIn && user\">Welcome Back {{ user }}</h6>\n    </div>\n    <div class=\"col-md-4 col-sm-12 mb-4\">\n      <app-about></app-about>\n    </div>\n    <div class=\"col-md-4 col-sm-12 mb-4\">\n      <app-shop-description [isOpenCart]=\"isOpenCart\"></app-shop-description>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <h4 class=\"text-center\">Login</h4>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" class=\"mt-5\">\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"email\"\n            class=\"form-control\" id=\"email\"\n            formControlName=\"email\"\n            [class.is-invalid]=\"email.invalid && email.touched\"\n            required>\n          <div *ngIf=\"email.invalid && email.touched\">\n            <small class=\"text-danger\" *ngIf=\"email.errors?.required\">Email is\n              required</small>\n            <small class=\"text-danger\" *ngIf=\"email.errors?.email\">Email\n              incorrect</small>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            formControlName=\"password\"\n            [class.is-invalid]=\"password.invalid && password.touched\"\n            required>\n          <div *ngIf=\"password.invalid && password.touched\">\n            <small class=\"text-danger\" *ngIf=\"password.errors?.required\">Password\n              is\n              required</small>\n          </div>\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"error\">\n          <small class=\"text-danger\">{{error}}</small>\n        </div>\n        <div class=\"mt-5\">\n          <button type=\"submit\" class=\"btn btn-outline-primary px-5\">Submit</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-3\">\n  <a class=\"navbar-brand\" [routerLink]=\"'.'\">Vegan Shop</a>\n\n  <!-- Step 3: Toggle the value of the property when the toggler button is clicked. -->\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    (click)=\"isMenuCollapsed = !isMenuCollapsed\"\n  >\n    &#9776;\n  </button>\n\n  <!-- Step 2: Add the ngbCollapse directive to the element below. -->\n  <div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"signedIn\" class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/store']\"\n          routerLinkActive=\"active\"\n          (click)=\"isMenuCollapsed = true\"\n          >Store</a\n        >\n      </li>\n      <li *ngIf=\"signedIn && isAdmin\" class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/admin']\"\n          routerLinkActive=\"active\"\n          (click)=\"isMenuCollapsed = true\"\n          >Admin</a\n        >\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <ng-container *ngIf=\"!signedIn\">\n        <li class=\"nav-item\">\n          <!-- Step 4: Close the menu when a link is clicked. -->\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/login']\"\n            routerLinkActive=\"active\"\n            (click)=\"isMenuCollapsed = true\"\n            >Login</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/register']\"\n            routerLinkActive=\"active\"\n            (click)=\"isMenuCollapsed = true\"\n            >Register</a\n          >\n        </li>\n      </ng-container>\n\n      <li *ngIf=\"signedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"logout()\"\n          >Logout</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"orderDetailsForm\" (ngSubmit)=\"orderFinalize()\">\n    <div class=\"form-group\">\n        <label>City</label>\n        <input\n            (dblclick)=\"getCity()\"\n            [class.is-invalid]=\"city.invalid && city.touched\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Enter city\"\n            formControlName=\"city\">\n        <div *ngIf=\"city.invalid && city.touched\">\n            <small class=\"text-danger\" *ngIf=\"city.errors?.required\">city is\n                required</small>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Street</label>\n        <input\n            (dblclick)=\"getStreet()\"\n            [class.is-invalid]=\"street.invalid && street.touched\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Enter street\"\n            formControlName=\"street\">\n        <div *ngIf=\"street.invalid && street.touched\">\n            <small class=\"text-danger\" *ngIf=\"street.errors?.required\">street is\n                required</small>\n        </div>\n    </div>\n    <div class=\"form-group mb-5\">\n        <label>Shipping Date</label>\n        <input\n            [class.is-invalid]=\"dateOfOrder.invalid && dateOfOrder.touched\"\n            type=\"date\"\n            class=\"form-control\"\n            formControlName=\"dateOfOrder\">\n        <div *ngIf=\"dateOfOrder.invalid && dateOfOrder.touched\">\n            <small class=\"text-danger\" *ngIf=\"dateOfOrder.errors?.required\">date\n                of order is required</small>\n        </div>\n    </div>\n    <h4>Payments</h4>\n    <hr>\n    <div class=\"form-group\">\n        <label>Credit Card</label>\n        <input\n            [class.is-invalid]=\"card.invalid && card.touched\"\n            type=\"number\"\n            class=\"form-control\"\n            placeholder=\"Enter card\"\n            formControlName=\"card\">\n        <div *ngIf=\"card.invalid && card.touched\">\n            <small class=\"text-danger\" *ngIf=\"card.errors?.required\">card is\n                required</small>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Order</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <div class=\"card mt-5 text-center\">\n        <div class=\"card-body\">\n            <h1 class=\"card-title\">Oreder Complete</h1>\n            <p class=\"card-text\">You buy was successufully completed!</p>\n            <p class=\"card-text\">To Download recipient Here</p>\n            <a [routerLink]=\"['/']\">OK</a>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <button (click)=\"goBack()\" class=\"btn btn-primary px-5 mb-5\">Back To\n        Shopping</button>\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <h1 class=\"mb-5\">My Cart</h1>\n            <!-- <app-products-search></app-products-search> -->\n            <app-cart\n                [isCart]=\"false\"\n                *ngFor=\"let p of cartProducts\"\n                [cartProduct]=\"p\"></app-cart>\n            <hr>\n            <h6>Total Price:{{totalPrice | currency:'USD'}}</h6>\n            <hr>\n        </div>\n        <div class=\"col-lg-5\">\n            <h1 class=\"mb-5\">My Order</h1>\n            <app-order-details></app-order-details>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-search/products-search.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-search/products-search.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n    [formControl]=\"searchFormControl\"\n    class=\"form-control\"\n    type=\"search\"\n    placeholder=\"Search For Products\">\n\n{{searchText}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"text-center\">Register</h4>\n<div class=\"container\">\n  <form\n    *ngIf=\"!stepper\"\n    [formGroup]=\"registerFormFirst\"\n    (ngSubmit)=\"onRegisterFirst()\"\n    class=\"mt-5\"\n  >\n    <div class=\"form-group\">\n      <label for=\"id\">ID</label>\n      <input\n        type=\"number\"\n        class=\"form-control\"\n        [class.is-invalid]=\"id.invalid && id.touched\"\n        formControlName=\"id\"\n        required\n      />\n      <div *ngIf=\"id.invalid && id.touched\">\n        <small class=\"text-danger\" *ngIf=\"id.errors?.required\"\n          >ID is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"id.invalid && id.touched\"\n        formControlName=\"email\"\n        required\n      />\n      <div *ngIf=\"email.invalid && email.touched\">\n        <small class=\"text-danger\" *ngIf=\"email.errors?.required\"\n          >Email is required</small\n        >\n        <small class=\"text-danger\" *ngIf=\"email.errors?.email\"\n          >Email incorrect</small\n        >\n        <small class=\"text-danger\" *ngIf=\"email.errors?.nonUniqueEmail\"\n          >Email not available</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"password\"\n        formControlName=\"password\"\n        required\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password-confirm\">Password Confirm</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        [class.is-invalid]=\"registerFormFirst.errors?.misMatch\"\n        formControlName=\"passwordConfirm\"\n        required\n      />\n      <small class=\"text-danger\" *ngIf=\"registerFormFirst.errors?.misMatch\"\n        >Password Do Not Match</small\n      >\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary px-5\">Next</button>\n  </form>\n\n  <form\n    *ngIf=\"stepper\"\n    [formGroup]=\"registerFormSecond\"\n    (ngSubmit)=\"onRegisterSecond()\"\n    class=\"mt-5\"\n  >\n    <div class=\"form-group\">\n      <label for=\"city\">City</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"city.invalid && city.touched\"\n        formControlName=\"city\"\n        required\n      />\n      <div *ngIf=\"city.invalid && city.touched\">\n        <small class=\"text-danger\" *ngIf=\"city.errors?.required\"\n          >City is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"street\">Street</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"street.invalid && street.touched\"\n        formControlName=\"street\"\n        required\n      />\n      <div *ngIf=\"street.invalid && street.touched\">\n        <small class=\"text-danger\" *ngIf=\"street.errors?.required\"\n          >Street is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"name.invalid && name.touched\"\n        formControlName=\"name\"\n        required\n      />\n      <div *ngIf=\"name.invalid && name.touched\">\n        <small class=\"text-danger\" *ngIf=\"name.errors?.required\"\n          >Name is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"lastName.invalid && lastName.touched\"\n        formControlName=\"lastName\"\n        required\n      />\n      <div *ngIf=\"lastName.invalid && lastName.touched\">\n        <small class=\"text-danger\" *ngIf=\"lastName.errors?.required\"\n          >Last Name is required</small\n        >\n      </div>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"error\">\n      <small class=\"text-danger\">{{ error }}</small>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary px-5\">Register</button>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop-description/shop-description.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop-description/shop-description.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img\n    class=\"img-fluid w-100\"\n    src=\"https://images.unsplash.com/photo-1564753908280-206daccdbfad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\"\n    alt=\"vegan shop\">\n\n<p>Available products in our store: {{amountOfProductInDB}}</p>\n<p>Number of orders submited to our store: {{amountOfOrdersInDB}}</p>\n<!-- <p>open cart from [date] / your last purchase on [date] / welcome [name]</p> -->\n<p *ngIf=\"isOpenCart\">You have open cart, with total price of {{totalPrice |\n    currency:'USD'}} <a\n        [routerLink]=\"['/store']\">continue\n        shopping</a></p>\n<p *ngIf=\"!isOpenCart\"><a [routerLink]=\"['/store']\">start shopping</a></p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-filter/store-filter.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-filter/store-filter.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"position-sticky sticky-top mt-5\">\n    <div class=\"list-group\">\n        <a\n            class=\"list-group-item flex-fill\n            list-group-item-action\"\n            [class.active]=\"!category\"\n            [routerLink]=\"isAdmin ? ['/admin'] : ['/store']\">All Categories</a>\n        <a *ngFor=\"let c of categories; let i= index;\"\n            class=\"list-group-item flex-fill\n            list-group-item-action\"\n            [routerLink]=\"isAdmin ? ['/admin'] : ['/store']\"\n            [queryParams]=\"{category: c.type}\"\n            [class.active]=\"category === c.type\">{{c.type}}</a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-items/store-items.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-items/store-items.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"card\">\n    <img class=\"card-img-top\" [src]=\"product.imageURL\"\n        alt=\"Card\n        image\n        cap\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{product.pName}}</h5>\n        <p class=\"card-text\">type: {{product.categoryID.type}}</p>\n        <p *ngIf=\"product.price\" class=\"card-text\">price: {{product.price |\n            currency:'USD'}}</p>\n    </div>\n    <div *ngIf=\"!isAdmin\" class=\"card-footer\">\n        <app-store-modal\n            (onUpdateCartProducts)=\"onUpdateCartProduct($event)\"\n            [product]=\"product\"></app-store-modal>\n    </div>\n    <div *ngIf=\"isAdmin\" class=\"card-footer\">\n        <!-- <button (click)=\"edit(product)\" class=\"btn btn-block btn-primary\">Edit</button> -->\n        <app-admin-edit\n            (onEdit)=\"edit()\"\n            [product]=\"product\"></app-admin-edit>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-modal/store-modal.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-modal/store-modal.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Buy {{product.pName}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"\n            (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n\n        <div class=\"form-group\">\n            <label>Amount To Buy </label>\n            <div class=\"input-group\">\n                <input [(ngModel)]=\"amount\" class=\"form-control\"\n                    type=\"number\">\n                {{amount}}\n            </div>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\"\n            (click)=\"add(product)\">Buy</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-block btn-success\" (click)=\"open(content)\">Buy</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store/store.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store/store.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <!-- <hr>\n    <div class=\"card-body\">\n        {{ cartProducts | json }}\n    </div> -->\n    <h5>Shopping Cart</h5>\n    <p>\n        <button type=\"button\" class=\"btn btn-outline-primary\"\n            (click)=\"isCollapsed= !isCollapsed\"\n            [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n            Open/Close\n        </button>\n    </p>\n    <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n        <div class=\"card\" *ngIf=\"!cartProducts.length\">\n            <div class=\"card-body\">\n                <h4>No Products In Cart</h4>\n            </div>\n        </div>\n        <app-cart\n            [isCart]=\"true\"\n            *ngFor=\"let p of cartProducts\"\n            [cartProduct]=\"p\"\n            (deleted)=\"onDeleted($event)\"></app-cart>\n        <div class=\"container\">\n            <a *ngIf=\"cartProducts.length\" class=\"btn btn-primary btn-lg mt-2\n                px-5\"\n                [routerLink]=\"['/order']\">Order</a>\n            <p *ngIf=\"cartProducts.length\" class=\"d-inline-block ml-5 border p-2\">final\n                price: {{totalPrice |\n                currency:'USD'}}</p>\n        </div>\n    </div>\n\n    <hr>\n    <div class=\"row\">\n        <!-- <h2 class=\"py-5 text-center\">Products </h2> -->\n        <div class=\"col-lg-2\">\n            <app-store-filter *ngIf=\"!searchText\"\n                [category]=\"category\"></app-store-filter>\n        </div>\n        <div class=\"col-lg-10\">\n            <app-products-search *ngIf=\"!category\"></app-products-search>\n            <div class=\"row\">\n                <app-store-items\n                    (onUpdateCartProducts)=\"updateCartProducts($event)\"\n                    class=\"col-lg-3 col-md-4 col-sm-6 my-3\"\n                    *ngFor=\"let p of products |\n                    search:searchText:'pName'\"\n                    [product]=\"p\"></app-store-items>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/order-success/order-success.component */ "./src/app/components/order-success/order-success.component.ts");












const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "store", component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_6__["StoreComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "order", component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    {
        path: "ordersuccess",
        component: _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__["OrderSuccessComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: "admin",
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]],
        data: { expectedRole: "admin" },
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-app {\n\tmin-height: 80vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWFwcCB7XG5cdG1pbi1oZWlnaHQ6IDgwdmg7XG59XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_shop_description_shop_description_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shop-description/shop-description.component */ "./src/app/components/shop-description/shop-description.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/search/search.pipe */ "./src/app/pipes/search/search.pipe.ts");
/* harmony import */ var _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/products-search/products-search.component */ "./src/app/components/products-search/products-search.component.ts");
/* harmony import */ var _components_store_items_store_items_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/store-items/store-items.component */ "./src/app/components/store-items/store-items.component.ts");
/* harmony import */ var _components_store_filter_store_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/store-filter/store-filter.component */ "./src/app/components/store-filter/store-filter.component.ts");
/* harmony import */ var _components_store_modal_store_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/store-modal/store-modal.component */ "./src/app/components/store-modal/store-modal.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/order-details/order-details.component */ "./src/app/components/order-details/order-details.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_admin_modal_admin_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin-modal/admin-modal.component */ "./src/app/components/admin-modal/admin-modal.component.ts");
/* harmony import */ var _components_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin-edit/admin-edit.component */ "./src/app/components/admin-edit/admin-edit.component.ts");
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/order-success/order-success.component */ "./src/app/components/order-success/order-success.component.ts");





























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
            _components_shop_description_shop_description_component__WEBPACK_IMPORTED_MODULE_13__["ShopDescriptionComponent"],
            _components_store_store_component__WEBPACK_IMPORTED_MODULE_14__["StoreComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
            _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchPipe"],
            _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_18__["ProductsSearchComponent"],
            _components_store_items_store_items_component__WEBPACK_IMPORTED_MODULE_19__["StoreItemsComponent"],
            _components_store_filter_store_filter_component__WEBPACK_IMPORTED_MODULE_20__["StoreFilterComponent"],
            _components_store_modal_store_modal_component__WEBPACK_IMPORTED_MODULE_21__["StoreModalComponent"],
            _components_order_order_component__WEBPACK_IMPORTED_MODULE_22__["OrderComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"],
            _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_24__["OrderDetailsComponent"],
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
            _components_admin_modal_admin_modal_component__WEBPACK_IMPORTED_MODULE_26__["AdminModalComponent"],
            _components_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_27__["AdminEditComponent"],
            _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_28__["OrderSuccessComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/admin-edit/admin-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-edit/admin-edit.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tZWRpdC9hZG1pbi1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/admin-edit/admin-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-edit/admin-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditComponent", function() { return AdminEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





let AdminEditComponent = class AdminEditComponent {
    constructor(modalService, fb, productService) {
        this.modalService = modalService;
        this.fb = fb;
        this.productService = productService;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeResult = '';
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log('EDIT MODAL PRODUCT', this.product);
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
        this.editForm = this.fb.group({
            pName: [this.product.pName],
            type: [this.product.categoryID.type],
            imageURL: [this.product.imageURL],
            price: [this.product.price]
        });
    }
    edit() {
        console.log('editing...', this.editForm.value);
        this.productService
            .updateProductByID(Object.assign(Object.assign({}, this.editForm.value), { _id: this.product._id, typeID: this.product.categoryID._id }))
            .subscribe(() => this.onEdit.emit());
        this.modalService.dismissAll();
        // console.log('EDITING = ', this.product);
    }
};
AdminEditComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AdminEditComponent.prototype, "product", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdminEditComponent.prototype, "onEdit", void 0);
AdminEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-edit/admin-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-edit.component.css */ "./src/app/components/admin-edit/admin-edit.component.css")).default]
    })
], AdminEditComponent);



/***/ }),

/***/ "./src/app/components/admin-modal/admin-modal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin-modal/admin-modal.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tbW9kYWwvYWRtaW4tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/admin-modal/admin-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-modal/admin-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModalComponent", function() { return AdminModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let AdminModalComponent = class AdminModalComponent {
    constructor(modalService, fb, poductService) {
        this.modalService = modalService;
        this.fb = fb;
        this.poductService = poductService;
        this.closeResult = '';
        this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.createProductForm = this.fb.group({
            name: [''],
            image: [''],
            type: [''],
            price: ['']
        });
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    save() {
        console.log('Product ');
        this.poductService.createProduct(this.createProductForm.value).subscribe((p) => this.onCreate.emit());
        this.modalService.dismissAll();
    }
};
AdminModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdminModalComponent.prototype, "onCreate", void 0);
AdminModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-modal/admin-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-modal.component.css */ "./src/app/components/admin-modal/admin-modal.component.css")).default]
    })
], AdminModalComponent);



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-media {\n\t/* width: 10%; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1tZWRpYSB7XG5cdC8qIHdpZHRoOiAxMCU7ICovXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let AdminComponent = class AdminComponent {
    constructor(productService, searchService, route, cartService, authService) {
        this.productService = productService;
        this.searchService = searchService;
        this.route = route;
        this.cartService = cartService;
        this.authService = authService;
        this.products = [];
        this.cartProducts = [];
        this.cartID = localStorage.getItem('cartID');
        this.isCollapsed = false;
        console.log('CONSTRUCTOR RUN');
    }
    ngOnInit() {
        console.log('NGONINIT RUN');
        this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue) => {
            this.searchText = newValue;
        });
        this.userID = this.authService.userIdInfo();
        // this.getCartProducts();
        this.route.queryParamMap.subscribe((params) => {
            this.category = params.get('category');
            if (this.category) {
                this.getProductsByCategory();
            }
            else {
                this.getProducts();
            }
        });
    }
    onEdit() {
        this.getProducts();
    }
    getProductsByCategory() {
        this.productService.getAllProductsByCategory(this.category).subscribe((p) => (this.products = p));
    }
    getProducts() {
        this.productService.getAllProducts().subscribe((p) => {
            this.products = p;
        }, (e) => console.log(e));
    }
    getCartProducts() {
        this.cartService.getCartProducts().subscribe((p) => {
            console.log('P = ', p);
            this.cartProducts = p;
        });
    }
    updateProducts(event) {
        this.getProducts();
    }
    ngOnDestroy() {
        this.unsubscribeSearchTextChanges.unsubscribe();
    }
};
AdminComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-custom {\n\twidth: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWN1c3RvbSB7XG5cdHdpZHRoOiA1MCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");



let CartComponent = class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.isCollapsed = false;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log(this.cartProduct);
    }
    deleteCartProduct(cartID) {
        this.deleted.emit(cartID);
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartComponent.prototype, "cartProduct", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartComponent.prototype, "isCart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CartComponent.prototype, "deleted", void 0);
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");




let HomeComponent = class HomeComponent {
    constructor(authService, cartService) {
        this.authService = authService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.authService.isLoggedIn();
        this.user = this.authService.userInfo();
        this.authService.signedIn.subscribe((signedIn) => {
            this.signedIn = signedIn;
            this.isOpenCart = this.cartService.isOpenCart();
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let LoginComponent = class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
    }
    get email() {
        return this.loginForm.get("email");
    }
    get password() {
        return this.loginForm.get("password");
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    onLogin() {
        this.submitted = true;
        this.authService.loginUser(this.loginForm.value).subscribe((role) => {
            this.router.navigate(["/store"]);
        }, (e) => {
            this.error = e.message;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isMenuCollapsed = true;
        this.isAdmin = null;
        this.signedIn = false;
    }
    logout() {
        this.authService.logOut();
        this.authService.signedIn.subscribe((signedIn) => {
            this.signedIn = signedIn;
        });
    }
    ngOnInit() {
        this.authService.signedIn.subscribe((signedIn) => {
            this.signedIn = signedIn;
        });
    }
    ngDoCheck() {
        if (this.isAdmin !== this.authService.isAdminLogged()) {
            this.isAdmin = this.authService.isAdminLogged();
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/order-details/order-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/order-details/order-details.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/order-details/order-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-details/order-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order/order.service */ "./src/app/services/order/order.service.ts");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let OrderDetailsComponent = class OrderDetailsComponent {
    constructor(fb, orderService, cartService, authService, router) {
        this.fb = fb;
        this.orderService = orderService;
        this.cartService = cartService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.orderDetailsForm = this.fb.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfOrder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            card: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.cartID = this.cartService.getCart();
        this.userId = this.authService.userIdInfo();
        console.log('CART ID = ', this.cartID);
        console.log('USER ID = ', this.userId);
    }
    orderFinalize() {
        if (!this.orderDetailsForm.valid)
            return;
        console.log(this.orderDetailsForm.value);
        this.orderService
            .createOrder(Object.assign(Object.assign({}, this.orderDetailsForm.value), { cart: this.cartID, user: this.userId }))
            .subscribe((c) => {
            console.log('created order = ', c);
            localStorage.removeItem('cartID');
            this.router.navigate(['/ordersuccess']);
        });
    }
    getCity() {
        // this.orderDetailsForm.controls.city.setValue()
        // this.orderDetailsForm.controls.city.setValue(user.city)
        console.log('USERID = ', this.userId);
        this.authService
            .getUserDetails(this.userId)
            .subscribe((user) => this.orderDetailsForm.controls.city.setValue(user.city));
    }
    getStreet() {
        this.authService
            .getUserDetails(this.userId)
            .subscribe((user) => this.orderDetailsForm.controls.street.setValue(user.street));
    }
    get city() {
        return this.orderDetailsForm.get('city');
    }
    get street() {
        return this.orderDetailsForm.get('street');
    }
    get dateOfOrder() {
        return this.orderDetailsForm.get('dateOfOrder');
    }
    get card() {
        return this.orderDetailsForm.get('card');
    }
};
OrderDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
OrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-details.component.css */ "./src/app/components/order-details/order-details.component.css")).default]
    })
], OrderDetailsComponent);



/***/ }),

/***/ "./src/app/components/order-success/order-success.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/order-success/order-success.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderSuccessComponent = class OrderSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-success.component.css */ "./src/app/components/order-success/order-success.component.css")).default]
    })
], OrderSuccessComponent);



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");




let OrderComponent = class OrderComponent {
    constructor(location, cartService) {
        this.location = location;
        this.cartService = cartService;
        this.cartProducts = [];
        this.cartID = localStorage.getItem('cartID');
    }
    getCartProducts() {
        // this.cartService.getCartProducts().subscribe((p) => {
        // 	console.log('P = ', p);
        // 	this.cartProducts = p;
        // });
        this.cartService.getCartProductsById(this.cartID).subscribe((p) => {
            this.cartProducts = p;
        });
    }
    getTotalPrice() {
        this.cartService.getTotalPrice(this.cartID).subscribe((price) => (this.totalPrice = price));
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() {
        this.getCartProducts();
        this.getTotalPrice();
    }
};
OrderComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/components/products-search/products-search.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/products-search/products-search.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMtc2VhcmNoL3Byb2R1Y3RzLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/products-search/products-search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/products-search/products-search.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsSearchComponent", function() { return ProductsSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search/search.service */ "./src/app/services/search/search.service.ts");





let ProductsSearchComponent = class ProductsSearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.searchFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.unsubscribeSearchTextChanges = this.searchFormControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200))
            .subscribe((newValue) => {
            this.searchService.setSearchTextChanges(newValue);
            // this.searchText = newValue;
            console.log(newValue);
        });
    }
    ngOnDestroy() {
        this.unsubscribeSearchTextChanges.unsubscribe();
    }
};
ProductsSearchComponent.ctorParameters = () => [
    { type: src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
];
ProductsSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-search/products-search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products-search.component.css */ "./src/app/components/products-search/products-search.component.css")).default]
    })
], ProductsSearchComponent);



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/validators/password.validator */ "./src/app/validators/password.validator.ts");
/* harmony import */ var src_app_validators_unique_email_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validators/unique-email.validator */ "./src/app/validators/unique-email.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let RegisterComponent = class RegisterComponent {
    constructor(fb, authService, uniqueEmail, router) {
        this.fb = fb;
        this.authService = authService;
        this.uniqueEmail = uniqueEmail;
        this.router = router;
        this.stepper = false;
    }
    ngOnInit() {
        this.registerFormFirst = this.fb.group({
            id: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
                [this.uniqueEmail.validate],
            ],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, { validator: src_app_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"] });
        this.registerFormSecond = this.fb.group({
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onRegisterFirst() {
        if (!this.registerFormFirst.valid)
            return;
        this.stepper = true;
    }
    onRegisterSecond() {
        const data = Object.assign(Object.assign({}, this.registerFormFirst.value), this.registerFormSecond.value);
        delete data.passwordConfirm;
        this.authService.createUser(data).subscribe(() => this.router.navigate(["/login"]), (e) => (this.error = e.message));
    }
    get id() {
        return this.registerFormFirst.get("id");
    }
    get email() {
        return this.registerFormFirst.get("email");
    }
    get city() {
        return this.registerFormSecond.get("city");
    }
    get street() {
        return this.registerFormSecond.get("street");
    }
    get name() {
        return this.registerFormSecond.get("name");
    }
    get lastName() {
        return this.registerFormSecond.get("lastName");
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_validators_unique_email_validator__WEBPACK_IMPORTED_MODULE_5__["UniqueEmail"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-register",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/shop-description/shop-description.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/shop-description/shop-description.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC1kZXNjcmlwdGlvbi9zaG9wLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/shop-description/shop-description.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/shop-description/shop-description.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShopDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDescriptionComponent", function() { return ShopDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order/order.service */ "./src/app/services/order/order.service.ts");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");





let ShopDescriptionComponent = class ShopDescriptionComponent {
    constructor(productService, orderService, cartService) {
        this.productService = productService;
        this.orderService = orderService;
        this.cartService = cartService;
        this.cartID = localStorage.getItem('cartID');
    }
    ngOnInit() {
        console.log('IS OPEN CART ', this.isOpenCart);
        this.productService.getAmountOfProducts().subscribe((amount) => {
            if (!amount)
                return;
            this.amountOfProductInDB = amount;
        });
        this.orderService.getAmountOfOrders().subscribe((amount) => {
            if (!amount)
                return;
            this.amountOfOrdersInDB = amount;
        });
        if (!this.cartID)
            return;
        this.cartService.getTotalPrice(this.cartID).subscribe((total) => {
            this.totalPrice = total;
        });
    }
};
ShopDescriptionComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShopDescriptionComponent.prototype, "isOpenCart", void 0);
ShopDescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-description',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shop-description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop-description/shop-description.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shop-description.component.css */ "./src/app/components/shop-description/shop-description.component.css")).default]
    })
], ShopDescriptionComponent);



/***/ }),

/***/ "./src/app/components/store-filter/store-filter.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/store-filter/store-filter.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUtZmlsdGVyL3N0b3JlLWZpbHRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/store-filter/store-filter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/store-filter/store-filter.component.ts ***!
  \*******************************************************************/
/*! exports provided: StoreFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFilterComponent", function() { return StoreFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category/category.service */ "./src/app/services/category/category.service.ts");



let StoreFilterComponent = class StoreFilterComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.categoryService.getAllCategories().subscribe((c) => {
            this.categories = c;
        }, (e) => console.log(e));
    }
    ngOnInit() { }
};
StoreFilterComponent.ctorParameters = () => [
    { type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoreFilterComponent.prototype, "category", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoreFilterComponent.prototype, "isAdmin", void 0);
StoreFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-filter/store-filter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store-filter.component.css */ "./src/app/components/store-filter/store-filter.component.css")).default]
    })
], StoreFilterComponent);



/***/ }),

/***/ "./src/app/components/store-items/store-items.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/store-items/store-items.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-footer {\n\tpadding: 0;\n}\n.clickable {\n\tcursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1pdGVtcy9zdG9yZS1pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1pdGVtcy9zdG9yZS1pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcblx0cGFkZGluZzogMDtcbn1cbi5jbGlja2FibGUge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/store-items/store-items.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/store-items/store-items.component.ts ***!
  \*****************************************************************/
/*! exports provided: StoreItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreItemsComponent", function() { return StoreItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StoreItemsComponent = class StoreItemsComponent {
    constructor() {
        this.onUpdateCartProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onUpdateCartProduct(cartId) {
        this.onUpdateCartProducts.emit(cartId);
    }
    ngOnInit() { }
    addToCart() { }
    edit() {
        this.onEdit.emit();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoreItemsComponent.prototype, "product", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoreItemsComponent.prototype, "isAdmin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StoreItemsComponent.prototype, "onUpdateCartProducts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StoreItemsComponent.prototype, "onEdit", void 0);
StoreItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-items/store-items.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store-items.component.css */ "./src/app/components/store-items/store-items.component.css")).default]
    })
], StoreItemsComponent);



/***/ }),

/***/ "./src/app/components/store-modal/store-modal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/store-modal/store-modal.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUtbW9kYWwvc3RvcmUtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/store-modal/store-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/store-modal/store-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: StoreModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModalComponent", function() { return StoreModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");




let StoreModalComponent = class StoreModalComponent {
    constructor(modalService, cartService) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.cartID = localStorage.getItem('cartID');
        this.onUpdateCartProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onUpdateCartProduct(cartID) {
        this.onUpdateCartProducts.emit(cartID);
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log('PRODUCT OPEN = ', this.product);
    }
    add(product) {
        this.cartService
            .addProductToCart({
            productID: product._id,
            amount: this.amount,
            price: this.amount,
            cartID: localStorage.getItem('cartID')
        })
            .subscribe((res) => this.onUpdateCartProduct(this.cartID));
        this.modalService.dismissAll();
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
StoreModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StoreModalComponent.prototype, "product", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StoreModalComponent.prototype, "onUpdateCartProducts", void 0);
StoreModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-modal/store-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store-modal.component.css */ "./src/app/components/store-modal/store-modal.component.css")).default]
    })
], StoreModalComponent);



/***/ }),

/***/ "./src/app/components/store/store.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/store/store.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-custom {\n\twidth: 100px;\n\tmargin-right: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS9zdG9yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY3VzdG9tIHtcblx0d2lkdGg6IDEwMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/store/store.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/store/store.component.ts ***!
  \*****************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let StoreComponent = class StoreComponent {
    constructor(productService, searchService, route, cartService, authService) {
        this.productService = productService;
        this.searchService = searchService;
        this.route = route;
        this.cartService = cartService;
        this.authService = authService;
        this.products = [];
        this.cartProducts = [];
        this.cartID = localStorage.getItem('cartID');
        this.isCollapsed = false;
        console.log('CONSTRUCTOR RUN');
    }
    ngOnInit() {
        console.log('NGONINIT RUN');
        this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue) => {
            this.searchText = newValue;
        });
        this.userID = this.authService.userIdInfo();
        if (!this.cartID) {
            this.cartService.createCart(this.userID).subscribe((cart) => {
                console.log('cart', cart);
                localStorage.setItem('cartID', cart._id);
            });
        }
        // this.getCartProducts();
        this.getCartProductsById(this.cartID);
        this.getTotalPrice(this.cartID);
        this.route.queryParamMap.subscribe((params) => {
            this.category = params.get('category');
            if (this.category) {
                this.getProductsByCategory();
            }
            else {
                this.getProducts();
            }
        });
    }
    getProductsByCategory() {
        this.productService.getAllProductsByCategory(this.category).subscribe((p) => (this.products = p));
    }
    getProducts() {
        this.productService.getAllProducts().subscribe((p) => {
            this.products = p;
        }, (e) => console.log(e));
    }
    getCartProducts() {
        this.cartService.getCartProducts().subscribe((p) => {
            console.log('P = ', p);
            this.cartProducts = p;
        });
    }
    getCartProductsById(cartId) {
        if (!cartId)
            return;
        this.cartService.getCartProductsById(cartId).subscribe((p) => {
            console.log('cart products by id = ', p);
            this.cartProducts = p;
            this.getTotalPrice(this.cartID);
        });
    }
    updateCartProducts(cartId) {
        // this.getCartProducts();
        this.getTotalPrice(this.cartID);
        this.getCartProductsById(cartId);
    }
    onDeleted(cartID) {
        this.cartService.deleteCartProduct(cartID).subscribe((p) => {
            console.log('product deleted');
            console.log('Product DELETED ', p);
            this.getCartProductsById(this.cartID);
            this.getTotalPrice(this.cartID);
        });
    }
    ngOnDestroy() {
        this.unsubscribeSearchTextChanges.unsubscribe();
    }
    getTotalPrice(id) {
        if (!id)
            return;
        this.cartService.getTotalPrice(id).subscribe((total) => (this.totalPrice = total));
    }
};
StoreComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
StoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store/store.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store.component.css */ "./src/app/components/store/store.component.css")).default]
    })
], StoreComponent);



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





let AdminGuard = class AdminGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route) {
        const token = localStorage.getItem("token");
        const expectedRole = route.data.expectedRole;
        const tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        console.log("TOKEN PAYLOAD = ", tokenPayload);
        if (!this.authService.isLoggedIn() || tokenPayload.role !== expectedRole) {
            this.router.navigate(["/"]);
            return false;
        }
        return true;
    }
};
AdminGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AdminGuard);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route) {
        const role = route.data.role;
        const isAuth = this.authService.isLoggedIn();
        const isAdmin = this.authService.isAdminLogged();
        console.log('GUARD ROLE', role);
        if (!isAuth || (role && !isAdmin)) {
            this.router.navigate(['/register']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);

// const currentUser = this.authService.currentUserValue;
// const role = route.data.roles;


/***/ }),

/***/ "./src/app/pipes/search/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/search/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



let SearchPipe = class SearchPipe {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
    }
    transform(items, searchText, searchKey) {
        if (!searchText)
            return items;
        if (!Array.isArray(items))
            return [];
        // console.log(searchText);
        // this.productService.getAllProductsByInput(searchText).subscribe((p) => (this.products = p));
        // console.log('PRODUCTS FROM PIPE = ', this.products);
        // return this.products;
        return items.filter((p) => p[searchKey].toLowerCase().includes(searchText.toLowerCase()));
        // this.getAllProductsByInput(searchText);
        // return this.products;
    }
    getAllProductsByInput(searchText) {
        return this.productService.getAllProductsByInput(searchText).subscribe((p) => (this.products = p));
    }
};
SearchPipe.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
SearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.localDevUrl = "http://localhost:5000/";
        this.shopUrl = `api/auth`;
        this.signedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    emailAvailable(username) {
        return this.http.post(`${this.shopUrl}/username`, {
            username,
        });
    }
    // register
    createUser(user) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http
            .post(`${this.shopUrl}/register`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    //login
    loginUser(user) {
        return this.http.post(`${this.shopUrl}/login`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            console.log("RESPONSE", response);
            const { token, user } = response;
            if (token) {
                this.signedIn.next(true);
                localStorage.setItem("token", token);
                localStorage.setItem("user", user.name);
                localStorage.setItem("userID", user._id);
                localStorage.setItem("role", user.role);
                return user.role;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    userInfo() {
        return localStorage.getItem("user");
    }
    isLoggedIn() {
        // return !!localStorage.getItem("token");
        if (localStorage.getItem("token")) {
            this.signedIn.next(true);
            return true;
        }
        return false;
    }
    isAdminLogged() {
        return localStorage.getItem("role") === "admin";
    }
    userIdInfo() {
        return localStorage.getItem("userID");
    }
    logOut() {
        localStorage.clear();
        this.signedIn.next(false);
        this.router.navigate(["/login"]);
    }
    getUserDetails(id) {
        return this.http.get(`${this.shopUrl}/user/${id}`);
    }
    handleError(res) {
        console.error(res.error || res.body.error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res.error || "Server error");
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/cart/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cart/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.cartUrl = `api/cart`;
        this.addProductURL = `api/cart/addProduct`;
    }
    // private getCartProductsEventSUbject = new BehaviorSubject<any>([]);
    // data: Observable<any> = this.getCartProductsEventSUbject.asObservable();
    // getCartProductsEvent() {
    // 	return this.http.get(this.cartUrl).subscribe((data) => this.getCartProductsEventSUbject.next());
    // }
    createCart(userID) {
        console.log("user id from service", userID);
        return this.http.post(this.cartUrl, { userID });
    }
    addProductToCart(cartInfo) {
        return this.http.post(this.addProductURL, Object.assign({}, cartInfo));
    }
    getCartProducts() {
        return this.http.get(this.cartUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data));
    }
    getCartProductsById(cartId) {
        return this.http.get(`${this.cartUrl}/${cartId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data));
    }
    getCart() {
        return localStorage.getItem("cartID");
    }
    deleteCartProduct(cartInfoID) {
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
            }),
            body: {
                cartInfoID,
            },
        };
        return this.http.delete(this.cartUrl, options);
    }
    addToCart(product) { }
    getTotalPrice(id) {
        if (!id)
            return;
        return this.http.get(`${this.cartUrl}/totalPrice/${id}`);
    }
    isOpenCart() {
        return !!localStorage.getItem("cartID");
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], CartService);



/***/ }),

/***/ "./src/app/services/category/category.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/category/category.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.categoryURL = `api/category`;
    }
    getAllCategories() {
        // return this.http.get<Category>(this.categoryURL).pipe(map((c: Category) => (this.categories = c)));
        return this.http.get(this.categoryURL);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], CategoryService);



/***/ }),

/***/ "./src/app/services/order/order.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/order/order.service.ts ***!
  \*************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.orderURL = `api/order`;
    }
    createOrder(order) {
        return this.http.post(this.orderURL, order);
    }
    getAmountOfOrders() {
        return this.http.get(`${this.orderURL}/t/o`);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.productURL = `api/product`;
    }
    getAllProducts() {
        return this.http
            .get(this.productURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getAllProductsByCategory(category) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("search", category);
        return this.http.get(this.productURL + "/s/c", { params });
    }
    getAllProductsByInput(searchText) {
        console.log("FROM INPUT = ", searchText);
        return this.http.get(`${this.productURL}/${searchText}`);
    }
    updateProductByID(product) {
        return this.http.put(`${this.productURL}`, product);
    }
    createProduct(product) {
        return this.http.post(`${this.productURL}`, product);
    }
    getAmountOfProducts() {
        return this.http.get(`${this.productURL}/t/p`);
    }
    handleError(res) {
        console.error(res.error || res.body.error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.error || "Server error");
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/search/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SearchService = class SearchService {
    constructor() {
        this.searchTextChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    setSearchTextChanges(newValue) {
        this.searchTextChanges.next(newValue);
    }
};
SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TokenInterceptorService = class TokenInterceptorService {
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            let tokenizedReq = req.clone({
                // headers: req.headers.set('authorization', 'Bearer ' + token)
                headers: req.headers.set('authorization', token)
            });
            console.log('tokenizedReq = ', tokenizedReq);
            return next.handle(tokenizedReq);
        }
        else {
            return next.handle(req);
        }
    }
};
TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/validators/password.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/validators/password.validator.ts ***!
  \**************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function PasswordValidator(control) {
    const password = control.get('password');
    const passwordConfirm = control.get('passwordConfirm');
    if (password.pristine || passwordConfirm.pristine) {
        return null;
    }
    return password && passwordConfirm && password.value !== passwordConfirm.value ? { misMatch: true } : null;
}


/***/ }),

/***/ "./src/app/validators/unique-email.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/validators/unique-email.validator.ts ***!
  \******************************************************/
/*! exports provided: UniqueEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEmail", function() { return UniqueEmail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let UniqueEmail = class UniqueEmail {
    constructor(authSerivce) {
        this.authSerivce = authSerivce;
        this.validate = (control) => {
            const { value } = control;
            console.log(value);
            return this.authSerivce.emailAvailable(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => {
                if (!value.exist) {
                    console.log("not exist");
                    return null;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((e) => {
                console.log(e);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ nonUniqueEmail: true });
            }));
        };
    }
};
UniqueEmail.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
UniqueEmail = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UniqueEmail);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vladi/Documents/dev/projects/vegan-shop/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map