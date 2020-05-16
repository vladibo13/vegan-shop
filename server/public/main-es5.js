function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<!-- <h1 class=\"mt-5 text-center\">VEGAN SHOP</h1> -->\n<div class=\"main-app\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img\n    src=\"https://images.unsplash.com/photo-1553546895-531931aa1aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80\"\n    alt=\"store-main\" class=\"img-fluid\">\n<p class=\"mt-5\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia\n    iste\n    quibusdam est, dolorum maxime perferendis. In, at dolorem. Asperiores\n    facilis nihil error aperiam cum voluptate eius excepturi ad optio dolor.\n    Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-edit/admin-edit.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-edit/admin-edit.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminEditAdminEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\"\n      (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"editForm\">\n      <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"pName\">\n      </div>\n      <div class=\"form-group\">\n        <label>Type</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"type\">\n      </div>\n      <div class=\"form-group\">\n        <label>Image</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"imageURL\">\n      </div>\n      <div class=\"form-group\">\n        <label>Price</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"price\">\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"edit()\">Save</button>\n  </div>\n</ng-template>\n\n<button class=\"btn btn-block btn-success\" (click)=\"open(content)\">Edit</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-modal/admin-modal.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-modal/admin-modal.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminModalAdminModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Product</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"\n            (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form [formGroup]=\"createProductForm\">\n            <div class=\"form-group\">\n                <label>Product Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n            </div>\n            <div class=\"form-group\">\n                <label>Product Price</label>\n                <input type=\"number\" class=\"form-control\"\n                    formControlName=\"price\">\n            </div>\n            <div class=\"form-group\">\n                <label>Product Category</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"type\">\n            </div>\n            <div class=\"form-group\">\n                <label>Product Image</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"image\">\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\"\n            (click)=\"save()\">Save</button>\n    </div>\n</ng-template>\n\n<hr>\n\n<button (click)=\"open(content)\" class=\"btn btn-outline-primary\">\n    Add Product<ion-icon class=\"ml-2\" name=\"add-outline\"></ion-icon>\n</button>\n\n\n<hr>\n\n<pre>{{ closeResult }}</pre>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"container-fluid\">\n    <div class=\"icon text-center my-1\">\n        <app-admin-modal (onCreate)=\"updateProducts($event)\"></app-admin-modal>\n    </div>\n\n    <!-- <div class=\"container-fluid\">\n            <h5 class=\"py-2 text-center\">Edit</h5>\n            <div *ngIf=\"selectedProduct\">\n                {{selectedProduct | json }}\n\n                <app-admin-edit *ngFor=\"let p of products\" [product]=\"p\"></app-admin-edit>\n            </div>\n        </div> -->\n    <hr>\n    <div class=\"row\">\n        <!-- <h2 class=\"py-5 text-center\">Products </h2> -->\n        <div class=\"col-lg-2\">\n            <app-store-filter\n                [isAdmin]=\"true\"\n                *ngIf=\"!searchText\"\n                [category]=\"category\"></app-store-filter>\n        </div>\n        <div class=\"col-lg-10\">\n            <app-products-search *ngIf=\"!category\"></app-products-search>\n            <div class=\"row\">\n                <app-store-items\n                    (onEdit)=\"onEdit($event)\"\n                    [isAdmin]=\"true\"\n                    class=\"col-lg-3 col-md-6 my-3\"\n                    *ngFor=\"let p of products |\n                    search:searchText:'pName'\"\n                    [product]=\"p\"></app-store-items>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"card my-2\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-2 col-sm-12\">\n                    <img [src]=\"cartProduct.productID.imageURL\"\n                        class=\"img-fluid\">\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">amount: {{cartProduct.amount}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">{{cartProduct.productID.pName}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">price: {{cartProduct.productID.price\n                        |\n                        currency:'USD'}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <p class=\"text-center\">total: {{cartProduct.totalPrice |\n                        currency:'USD'}}</p>\n                </div>\n                <div class=\"col-md-2 col-sm-12\">\n                    <button *ngIf=\"isCart\"\n                        (click)=\"deleteCartProduct(cartProduct._id)\"\n                        class=\"btn btn-outline-danger btn-block\">Delete</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer border py-3 mt-5\">\n    <div class=\"container text-center\">\n        <ion-icon class=\"mr-2\" size=\"large\" name=\"logo-github\"></ion-icon>\n        <ion-icon size=\"large\" name=\"globe-outline\"></ion-icon>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"col-md-4 col-sm-12 mb-3\">\n      <app-login *ngIf=\"!signedIn\"></app-login>\n      <h6 *ngIf=\"signedIn && user\">Welcome Back {{ user }}</h6>\n    </div>\n    <div class=\"col-md-4 col-sm-12 mb-4\">\n      <app-about></app-about>\n    </div>\n    <div class=\"col-md-4 col-sm-12 mb-4\">\n      <app-shop-description [isOpenCart]=\"isOpenCart\"></app-shop-description>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n  <h4 class=\"text-center\">Login</h4>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" class=\"mt-5\">\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input\n            type=\"email\"\n            class=\"form-control\" id=\"email\"\n            formControlName=\"email\"\n            [class.is-invalid]=\"email.invalid && email.touched\"\n            required>\n          <div *ngIf=\"email.invalid && email.touched\">\n            <small class=\"text-danger\" *ngIf=\"email.errors?.required\">Email is\n              required</small>\n            <small class=\"text-danger\" *ngIf=\"email.errors?.email\">Email\n              incorrect</small>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            formControlName=\"password\"\n            [class.is-invalid]=\"password.invalid && password.touched\"\n            required>\n          <div *ngIf=\"password.invalid && password.touched\">\n            <small class=\"text-danger\" *ngIf=\"password.errors?.required\">Password\n              is\n              required</small>\n          </div>\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"error\">\n          <small class=\"text-danger\">{{error}}</small>\n        </div>\n        <div class=\"mt-5\">\n          <button type=\"submit\" class=\"btn btn-outline-primary px-5\">Submit</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n\n  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-3\">\n  <a class=\"navbar-brand\" [routerLink]=\"'.'\">Vegan Shop</a>\n\n  <!-- Step 3: Toggle the value of the property when the toggler button is clicked. -->\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    (click)=\"isMenuCollapsed = !isMenuCollapsed\"\n  >\n    &#9776;\n  </button>\n\n  <!-- Step 2: Add the ngbCollapse directive to the element below. -->\n  <div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"signedIn\" class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/store']\"\n          routerLinkActive=\"active\"\n          (click)=\"isMenuCollapsed = true\"\n          >Store</a\n        >\n      </li>\n      <li *ngIf=\"signedIn && isAdmin\" class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          [routerLink]=\"['/admin']\"\n          routerLinkActive=\"active\"\n          (click)=\"isMenuCollapsed = true\"\n          >Admin</a\n        >\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <ng-container *ngIf=\"!signedIn\">\n        <li class=\"nav-item\">\n          <!-- Step 4: Close the menu when a link is clicked. -->\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/login']\"\n            routerLinkActive=\"active\"\n            (click)=\"isMenuCollapsed = true\"\n            >Login</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/register']\"\n            routerLinkActive=\"active\"\n            (click)=\"isMenuCollapsed = true\"\n            >Register</a\n          >\n        </li>\n      </ng-container>\n\n      <li *ngIf=\"signedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"logout()\"\n          >Logout</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderDetailsOrderDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"orderDetailsForm\" (ngSubmit)=\"orderFinalize()\">\n    <div class=\"form-group\">\n        <label>City</label>\n        <input\n            (dblclick)=\"getCity()\"\n            [class.is-invalid]=\"city.invalid && city.touched\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Enter city\"\n            formControlName=\"city\">\n        <div *ngIf=\"city.invalid && city.touched\">\n            <small class=\"text-danger\" *ngIf=\"city.errors?.required\">city is\n                required</small>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Street</label>\n        <input\n            (dblclick)=\"getStreet()\"\n            [class.is-invalid]=\"street.invalid && street.touched\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Enter street\"\n            formControlName=\"street\">\n        <div *ngIf=\"street.invalid && street.touched\">\n            <small class=\"text-danger\" *ngIf=\"street.errors?.required\">street is\n                required</small>\n        </div>\n    </div>\n    <div class=\"form-group mb-5\">\n        <label>Shipping Date</label>\n        <input\n            [class.is-invalid]=\"dateOfOrder.invalid && dateOfOrder.touched\"\n            type=\"date\"\n            class=\"form-control\"\n            formControlName=\"dateOfOrder\">\n        <div *ngIf=\"dateOfOrder.invalid && dateOfOrder.touched\">\n            <small class=\"text-danger\" *ngIf=\"dateOfOrder.errors?.required\">date\n                of order is required</small>\n        </div>\n    </div>\n    <h4>Payments</h4>\n    <hr>\n    <div class=\"form-group\">\n        <label>Credit Card</label>\n        <input\n            [class.is-invalid]=\"card.invalid && card.touched\"\n            type=\"number\"\n            class=\"form-control\"\n            placeholder=\"Enter card\"\n            formControlName=\"card\">\n        <div *ngIf=\"card.invalid && card.touched\">\n            <small class=\"text-danger\" *ngIf=\"card.errors?.required\">card is\n                required</small>\n        </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Order</button>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderSuccessOrderSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"card mt-5 text-center\">\n        <div class=\"card-body\">\n            <h1 class=\"card-title\">Oreder Complete</h1>\n            <p class=\"card-text\">You buy was successufully completed!</p>\n            <p class=\"card-text\">To Download recipient Here</p>\n            <a [routerLink]=\"['/']\">OK</a>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <button (click)=\"goBack()\" class=\"btn btn-primary px-5 mb-5\">Back To\n        Shopping</button>\n    <div class=\"row\">\n        <div class=\"col-lg-7\">\n            <h1 class=\"mb-5\">My Cart</h1>\n            <!-- <app-products-search></app-products-search> -->\n            <app-cart\n                [isCart]=\"false\"\n                *ngFor=\"let p of cartProducts\"\n                [cartProduct]=\"p\"></app-cart>\n            <hr>\n            <h6>Total Price:{{totalPrice | currency:'USD'}}</h6>\n            <hr>\n        </div>\n        <div class=\"col-lg-5\">\n            <h1 class=\"mb-5\">My Order</h1>\n            <app-order-details></app-order-details>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-search/products-search.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-search/products-search.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductsSearchProductsSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input\n    [formControl]=\"searchFormControl\"\n    class=\"form-control\"\n    type=\"search\"\n    placeholder=\"Search For Products\">\n\n{{searchText}}";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4 class=\"text-center\">Register</h4>\n<div class=\"container\">\n  <form\n    *ngIf=\"!stepper\"\n    [formGroup]=\"registerFormFirst\"\n    (ngSubmit)=\"onRegisterFirst()\"\n    class=\"mt-5\"\n  >\n    <div class=\"form-group\">\n      <label for=\"id\">ID</label>\n      <input\n        type=\"number\"\n        class=\"form-control\"\n        [class.is-invalid]=\"id.invalid && id.touched\"\n        formControlName=\"id\"\n        required\n      />\n      <div *ngIf=\"id.invalid && id.touched\">\n        <small class=\"text-danger\" *ngIf=\"id.errors?.required\"\n          >ID is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        [class.is-invalid]=\"id.invalid && id.touched\"\n        formControlName=\"email\"\n        required\n      />\n      <div *ngIf=\"email.invalid && email.touched\">\n        <small class=\"text-danger\" *ngIf=\"email.errors?.required\"\n          >Email is required</small\n        >\n        <small class=\"text-danger\" *ngIf=\"email.errors?.email\"\n          >Email incorrect</small\n        >\n        <small class=\"text-danger\" *ngIf=\"email.errors?.nonUniqueEmail\"\n          >Email not available</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"password\"\n        formControlName=\"password\"\n        required\n      />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password-confirm\">Password Confirm</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        [class.is-invalid]=\"registerFormFirst.errors?.misMatch\"\n        formControlName=\"passwordConfirm\"\n        required\n      />\n      <small class=\"text-danger\" *ngIf=\"registerFormFirst.errors?.misMatch\"\n        >Password Do Not Match</small\n      >\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary px-5\">Next</button>\n  </form>\n\n  <form\n    *ngIf=\"stepper\"\n    [formGroup]=\"registerFormSecond\"\n    (ngSubmit)=\"onRegisterSecond()\"\n    class=\"mt-5\"\n  >\n    <div class=\"form-group\">\n      <label for=\"city\">City</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"city.invalid && city.touched\"\n        formControlName=\"city\"\n        required\n      />\n      <div *ngIf=\"city.invalid && city.touched\">\n        <small class=\"text-danger\" *ngIf=\"city.errors?.required\"\n          >City is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"street\">Street</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"street.invalid && street.touched\"\n        formControlName=\"street\"\n        required\n      />\n      <div *ngIf=\"street.invalid && street.touched\">\n        <small class=\"text-danger\" *ngIf=\"street.errors?.required\"\n          >Street is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"name.invalid && name.touched\"\n        formControlName=\"name\"\n        required\n      />\n      <div *ngIf=\"name.invalid && name.touched\">\n        <small class=\"text-danger\" *ngIf=\"name.errors?.required\"\n          >Name is required</small\n        >\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [class.is-invalid]=\"lastName.invalid && lastName.touched\"\n        formControlName=\"lastName\"\n        required\n      />\n      <div *ngIf=\"lastName.invalid && lastName.touched\">\n        <small class=\"text-danger\" *ngIf=\"lastName.errors?.required\"\n          >Last Name is required</small\n        >\n      </div>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"error\">\n      <small class=\"text-danger\">{{ error }}</small>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary px-5\">Register</button>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop-description/shop-description.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop-description/shop-description.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopDescriptionShopDescriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img\n    class=\"img-fluid w-100\"\n    src=\"https://images.unsplash.com/photo-1564753908280-206daccdbfad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80\"\n    alt=\"vegan shop\">\n\n<p>Available products in our store: {{amountOfProductInDB}}</p>\n<p>Number of orders submited to our store: {{amountOfOrdersInDB}}</p>\n<!-- <p>open cart from [date] / your last purchase on [date] / welcome [name]</p> -->\n<p *ngIf=\"isOpenCart\">You have open cart, with total price of {{totalPrice |\n    currency:'USD'}} <a\n        [routerLink]=\"['/store']\">continue\n        shopping</a></p>\n<p *ngIf=\"!isOpenCart\"><a [routerLink]=\"['/store']\">start shopping</a></p>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-filter/store-filter.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-filter/store-filter.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStoreFilterStoreFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"position-sticky sticky-top mt-5\">\n    <div class=\"list-group\">\n        <a\n            class=\"list-group-item flex-fill\n            list-group-item-action\"\n            [class.active]=\"!category\"\n            [routerLink]=\"isAdmin ? ['/admin'] : ['/store']\">All Categories</a>\n        <a *ngFor=\"let c of categories; let i= index;\"\n            class=\"list-group-item flex-fill\n            list-group-item-action\"\n            [routerLink]=\"isAdmin ? ['/admin'] : ['/store']\"\n            [queryParams]=\"{category: c.type}\"\n            [class.active]=\"category === c.type\">{{c.type}}</a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-items/store-items.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-items/store-items.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStoreItemsStoreItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"card\">\n    <img class=\"card-img-top\" [src]=\"product.imageURL\"\n        alt=\"Card\n        image\n        cap\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{product.pName}}</h5>\n        <p class=\"card-text\">type: {{product.categoryID.type}}</p>\n        <p *ngIf=\"product.price\" class=\"card-text\">price: {{product.price |\n            currency:'USD'}}</p>\n    </div>\n    <div *ngIf=\"!isAdmin\" class=\"card-footer\">\n        <app-store-modal\n            (onUpdateCartProducts)=\"onUpdateCartProduct($event)\"\n            [product]=\"product\"></app-store-modal>\n    </div>\n    <div *ngIf=\"isAdmin\" class=\"card-footer\">\n        <!-- <button (click)=\"edit(product)\" class=\"btn btn-block btn-primary\">Edit</button> -->\n        <app-admin-edit\n            (onEdit)=\"edit()\"\n            [product]=\"product\"></app-admin-edit>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-modal/store-modal.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-modal/store-modal.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStoreModalStoreModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Buy {{product.pName}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"\n            (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n\n        <div class=\"form-group\">\n            <label>Amount To Buy </label>\n            <div class=\"input-group\">\n                <input [(ngModel)]=\"amount\" class=\"form-control\"\n                    type=\"number\">\n                {{amount}}\n            </div>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\"\n            (click)=\"add(product)\">Buy</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-block btn-success\" (click)=\"open(content)\">Buy</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store/store.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/store/store.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStoreStoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <!-- <hr>\n    <div class=\"card-body\">\n        {{ cartProducts | json }}\n    </div> -->\n    <h5>Shopping Cart</h5>\n    <p>\n        <button type=\"button\" class=\"btn btn-outline-primary\"\n            (click)=\"isCollapsed= !isCollapsed\"\n            [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n            Open/Close\n        </button>\n    </p>\n    <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n        <div class=\"card\" *ngIf=\"!cartProducts.length\">\n            <div class=\"card-body\">\n                <h4>No Products In Cart</h4>\n            </div>\n        </div>\n        <app-cart\n            [isCart]=\"true\"\n            *ngFor=\"let p of cartProducts\"\n            [cartProduct]=\"p\"\n            (deleted)=\"onDeleted($event)\"></app-cart>\n        <div class=\"container\">\n            <a *ngIf=\"cartProducts.length\" class=\"btn btn-primary btn-lg mt-2\n                px-5\"\n                [routerLink]=\"['/order']\">Order</a>\n            <p *ngIf=\"cartProducts.length\" class=\"d-inline-block ml-5 border p-2\">final\n                price: {{totalPrice |\n                currency:'USD'}}</p>\n        </div>\n    </div>\n\n    <hr>\n    <div class=\"row\">\n        <!-- <h2 class=\"py-5 text-center\">Products </h2> -->\n        <div class=\"col-lg-2\">\n            <app-store-filter *ngIf=\"!searchText\"\n                [category]=\"category\"></app-store-filter>\n        </div>\n        <div class=\"col-lg-10\">\n            <app-products-search *ngIf=\"!category\"></app-products-search>\n            <div class=\"row\">\n                <app-store-items\n                    (onUpdateCartProducts)=\"updateCartProducts($event)\"\n                    class=\"col-lg-3 col-md-4 col-sm-6 my-3\"\n                    *ngFor=\"let p of products |\n                    search:searchText:'pName'\"\n                    [product]=\"p\"></app-store-items>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_store_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/store/store.component */
    "./src/app/components/store/store.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _components_order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/order/order.component */
    "./src/app/components/order/order.component.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards/admin.guard */
    "./src/app/guards/admin.guard.ts");
    /* harmony import */


    var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/order-success/order-success.component */
    "./src/app/components/order-success/order-success.component.ts");

    var routes = [{
      path: "",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "register",
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: "store",
      component: _components_store_store_component__WEBPACK_IMPORTED_MODULE_6__["StoreComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: "order",
      component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: "ordersuccess",
      component: _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_11__["OrderSuccessComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }, {
      path: "admin",
      component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
      canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]],
      data: {
        expectedRole: "admin"
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-app {\n\tmin-height: 80vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWFwcCB7XG5cdG1pbi1oZWlnaHQ6IDgwdmg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_shop_description_shop_description_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/shop-description/shop-description.component */
    "./src/app/components/shop-description/shop-description.component.ts");
    /* harmony import */


    var _components_store_store_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/store/store.component */
    "./src/app/components/store/store.component.ts");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pipes/search/search.pipe */
    "./src/app/pipes/search/search.pipe.ts");
    /* harmony import */


    var _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/products-search/products-search.component */
    "./src/app/components/products-search/products-search.component.ts");
    /* harmony import */


    var _components_store_items_store_items_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/store-items/store-items.component */
    "./src/app/components/store-items/store-items.component.ts");
    /* harmony import */


    var _components_store_filter_store_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/store-filter/store-filter.component */
    "./src/app/components/store-filter/store-filter.component.ts");
    /* harmony import */


    var _components_store_modal_store_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/store-modal/store-modal.component */
    "./src/app/components/store-modal/store-modal.component.ts");
    /* harmony import */


    var _components_order_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/order/order.component */
    "./src/app/components/order/order.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");
    /* harmony import */


    var _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/order-details/order-details.component */
    "./src/app/components/order-details/order-details.component.ts");
    /* harmony import */


    var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/admin/admin.component */
    "./src/app/components/admin/admin.component.ts");
    /* harmony import */


    var _components_admin_modal_admin_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/admin-modal/admin-modal.component */
    "./src/app/components/admin-modal/admin-modal.component.ts");
    /* harmony import */


    var _components_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/admin-edit/admin-edit.component */
    "./src/app/components/admin-edit/admin-edit.component.ts");
    /* harmony import */


    var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/order-success/order-success.component */
    "./src/app/components/order-success/order-success.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components_shop_description_shop_description_component__WEBPACK_IMPORTED_MODULE_13__["ShopDescriptionComponent"], _components_store_store_component__WEBPACK_IMPORTED_MODULE_14__["StoreComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"], _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchPipe"], _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_18__["ProductsSearchComponent"], _components_store_items_store_items_component__WEBPACK_IMPORTED_MODULE_19__["StoreItemsComponent"], _components_store_filter_store_filter_component__WEBPACK_IMPORTED_MODULE_20__["StoreFilterComponent"], _components_store_modal_store_modal_component__WEBPACK_IMPORTED_MODULE_21__["StoreModalComponent"], _components_order_order_component__WEBPACK_IMPORTED_MODULE_22__["OrderComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"], _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_24__["OrderDetailsComponent"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"], _components_admin_modal_admin_modal_component__WEBPACK_IMPORTED_MODULE_26__["AdminModalComponent"], _components_admin_edit_admin_edit_component__WEBPACK_IMPORTED_MODULE_27__["AdminEditComponent"], _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_28__["OrderSuccessComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/admin-edit/admin-edit.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/admin-edit/admin-edit.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminEditAdminEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tZWRpdC9hZG1pbi1lZGl0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin-edit/admin-edit.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/admin-edit/admin-edit.component.ts ***!
    \***************************************************************/

  /*! exports provided: AdminEditComponent */

  /***/
  function srcAppComponentsAdminEditAdminEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminEditComponent", function () {
      return AdminEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AdminEditComponent =
    /*#__PURE__*/
    function () {
      function AdminEditComponent(modalService, fb, productService) {
        _classCallCheck(this, AdminEditComponent);

        this.modalService = modalService;
        this.fb = fb;
        this.productService = productService;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeResult = '';
      }

      _createClass(AdminEditComponent, [{
        key: "open",
        value: function open(content) {
          var _this = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
          });
          console.log('EDIT MODAL PRODUCT', this.product);
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.editForm = this.fb.group({
            pName: [this.product.pName],
            type: [this.product.categoryID.type],
            imageURL: [this.product.imageURL],
            price: [this.product.price]
          });
        }
      }, {
        key: "edit",
        value: function edit() {
          var _this2 = this;

          console.log('editing...', this.editForm.value);
          this.productService.updateProductByID(Object.assign(Object.assign({}, this.editForm.value), {
            _id: this.product._id,
            typeID: this.product.categoryID._id
          })).subscribe(function () {
            return _this2.onEdit.emit();
          });
          this.modalService.dismissAll(); // console.log('EDITING = ', this.product);
        }
      }]);

      return AdminEditComponent;
    }();

    AdminEditComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AdminEditComponent.prototype, "product", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AdminEditComponent.prototype, "onEdit", void 0);
    AdminEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-edit/admin-edit.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-edit.component.css */
      "./src/app/components/admin-edit/admin-edit.component.css")).default]
    })], AdminEditComponent);
    /***/
  },

  /***/
  "./src/app/components/admin-modal/admin-modal.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/admin-modal/admin-modal.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminModalAdminModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tbW9kYWwvYWRtaW4tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin-modal/admin-modal.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/admin-modal/admin-modal.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AdminModalComponent */

  /***/
  function srcAppComponentsAdminModalAdminModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModalComponent", function () {
      return AdminModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");

    var AdminModalComponent =
    /*#__PURE__*/
    function () {
      function AdminModalComponent(modalService, fb, poductService) {
        _classCallCheck(this, AdminModalComponent);

        this.modalService = modalService;
        this.fb = fb;
        this.poductService = poductService;
        this.closeResult = '';
        this.onCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AdminModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createProductForm = this.fb.group({
            name: [''],
            image: [''],
            type: [''],
            price: ['']
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          console.log('Product ');
          this.poductService.createProduct(this.createProductForm.value).subscribe(function (p) {
            return _this3.onCreate.emit();
          });
          this.modalService.dismissAll();
        }
      }]);

      return AdminModalComponent;
    }();

    AdminModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AdminModalComponent.prototype, "onCreate", void 0);
    AdminModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-modal/admin-modal.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-modal.component.css */
      "./src/app/components/admin-modal/admin-modal.component.css")).default]
    })], AdminModalComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/admin/admin.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-media {\n\t/* width: 10%; */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1tZWRpYSB7XG5cdC8qIHdpZHRoOiAxMCU7ICovXG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/admin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/admin/admin.component.ts ***!
    \*****************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppComponentsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/search/search.service */
    "./src/app/services/search/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(productService, searchService, route, cartService, authService) {
        _classCallCheck(this, AdminComponent);

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

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          console.log('NGONINIT RUN');
          this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe(function (newValue) {
            _this4.searchText = newValue;
          });
          this.userID = this.authService.userIdInfo(); // this.getCartProducts();

          this.route.queryParamMap.subscribe(function (params) {
            _this4.category = params.get('category');

            if (_this4.category) {
              _this4.getProductsByCategory();
            } else {
              _this4.getProducts();
            }
          });
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          this.getProducts();
        }
      }, {
        key: "getProductsByCategory",
        value: function getProductsByCategory() {
          var _this5 = this;

          this.productService.getAllProductsByCategory(this.category).subscribe(function (p) {
            return _this5.products = p;
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this6 = this;

          this.productService.getAllProducts().subscribe(function (p) {
            _this6.products = p;
          }, function (e) {
            return console.log(e);
          });
        }
      }, {
        key: "getCartProducts",
        value: function getCartProducts() {
          var _this7 = this;

          this.cartService.getCartProducts().subscribe(function (p) {
            console.log('P = ', p);
            _this7.cartProducts = p;
          });
        }
      }, {
        key: "updateProducts",
        value: function updateProducts(event) {
          this.getProducts();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSearchTextChanges.unsubscribe();
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/components/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/components/cart/cart.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/cart/cart.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-custom {\n\twidth: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWN1c3RvbSB7XG5cdHdpZHRoOiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(cartService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.isCollapsed = false;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.cartProduct);
        }
      }, {
        key: "deleteCartProduct",
        value: function deleteCartProduct(cartID) {
          this.deleted.emit(cartID);
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartComponent.prototype, "cartProduct", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CartComponent.prototype, "isCart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CartComponent.prototype, "deleted", void 0);
    CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/components/cart/cart.component.css")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(authService, cartService) {
        _classCallCheck(this, HomeComponent);

        this.authService = authService;
        this.cartService = cartService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.authService.isLoggedIn();
          this.user = this.authService.userInfo();
          this.authService.signedIn.subscribe(function (signedIn) {
            _this8.signedIn = signedIn;
            _this8.isOpenCart = _this8.cartService.isOpenCart();
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, authService, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this9 = this;

          this.submitted = true;
          this.authService.loginUser(this.loginForm.value).subscribe(function (role) {
            _this9.router.navigate(["/store"]);
          }, function (e) {
            _this9.error = e.message;
          });
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginForm.get("email");
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get("password");
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, router) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.router = router;
        this.isMenuCollapsed = true;
        this.isAdmin = null;
        this.signedIn = false;
      }

      _createClass(NavbarComponent, [{
        key: "logout",
        value: function logout() {
          var _this10 = this;

          this.authService.logOut();
          this.authService.signedIn.subscribe(function (signedIn) {
            _this10.signedIn = signedIn;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.authService.signedIn.subscribe(function (signedIn) {
            _this11.signedIn = signedIn;
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.isAdmin !== this.authService.isAdminLogged()) {
            this.isAdmin = this.authService.isAdminLogged();
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navbar",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/order-details/order-details.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/order-details/order-details.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderDetailsOrderDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/order-details/order-details.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/order-details/order-details.component.ts ***!
    \*********************************************************************/

  /*! exports provided: OrderDetailsComponent */

  /***/
  function srcAppComponentsOrderDetailsOrderDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function () {
      return OrderDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/order/order.service */
    "./src/app/services/order/order.service.ts");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OrderDetailsComponent =
    /*#__PURE__*/
    function () {
      function OrderDetailsComponent(fb, orderService, cartService, authService, router) {
        _classCallCheck(this, OrderDetailsComponent);

        this.fb = fb;
        this.orderService = orderService;
        this.cartService = cartService;
        this.authService = authService;
        this.router = router;
      }

      _createClass(OrderDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
      }, {
        key: "orderFinalize",
        value: function orderFinalize() {
          var _this12 = this;

          if (!this.orderDetailsForm.valid) return;
          console.log(this.orderDetailsForm.value);
          this.orderService.createOrder(Object.assign(Object.assign({}, this.orderDetailsForm.value), {
            cart: this.cartID,
            user: this.userId
          })).subscribe(function (c) {
            console.log('created order = ', c);
            localStorage.removeItem('cartID');

            _this12.router.navigate(['/ordersuccess']);
          });
        }
      }, {
        key: "getCity",
        value: function getCity() {
          var _this13 = this;

          // this.orderDetailsForm.controls.city.setValue()
          // this.orderDetailsForm.controls.city.setValue(user.city)
          console.log('USERID = ', this.userId);
          this.authService.getUserDetails(this.userId).subscribe(function (user) {
            return _this13.orderDetailsForm.controls.city.setValue(user.city);
          });
        }
      }, {
        key: "getStreet",
        value: function getStreet() {
          var _this14 = this;

          this.authService.getUserDetails(this.userId).subscribe(function (user) {
            return _this14.orderDetailsForm.controls.street.setValue(user.street);
          });
        }
      }, {
        key: "city",
        get: function get() {
          return this.orderDetailsForm.get('city');
        }
      }, {
        key: "street",
        get: function get() {
          return this.orderDetailsForm.get('street');
        }
      }, {
        key: "dateOfOrder",
        get: function get() {
          return this.orderDetailsForm.get('dateOfOrder');
        }
      }, {
        key: "card",
        get: function get() {
          return this.orderDetailsForm.get('card');
        }
      }]);

      return OrderDetailsComponent;
    }();

    OrderDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    OrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-details.component.css */
      "./src/app/components/order-details/order-details.component.css")).default]
    })], OrderDetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/order-success/order-success.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/order-success/order-success.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderSuccessOrderSuccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/order-success/order-success.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/order-success/order-success.component.ts ***!
    \*********************************************************************/

  /*! exports provided: OrderSuccessComponent */

  /***/
  function srcAppComponentsOrderSuccessOrderSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function () {
      return OrderSuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderSuccessComponent =
    /*#__PURE__*/
    function () {
      function OrderSuccessComponent() {
        _classCallCheck(this, OrderSuccessComponent);
      }

      _createClass(OrderSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderSuccessComponent;
    }();

    OrderSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-success',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-success.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-success.component.css */
      "./src/app/components/order-success/order-success.component.css")).default]
    })], OrderSuccessComponent);
    /***/
  },

  /***/
  "./src/app/components/order/order.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/order/order.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderOrderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/order/order.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/order/order.component.ts ***!
    \*****************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppComponentsOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");

    var OrderComponent =
    /*#__PURE__*/
    function () {
      function OrderComponent(location, cartService) {
        _classCallCheck(this, OrderComponent);

        this.location = location;
        this.cartService = cartService;
        this.cartProducts = [];
        this.cartID = localStorage.getItem('cartID');
      }

      _createClass(OrderComponent, [{
        key: "getCartProducts",
        value: function getCartProducts() {
          var _this15 = this;

          // this.cartService.getCartProducts().subscribe((p) => {
          // 	console.log('P = ', p);
          // 	this.cartProducts = p;
          // });
          this.cartService.getCartProductsById(this.cartID).subscribe(function (p) {
            _this15.cartProducts = p;
          });
        }
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
          var _this16 = this;

          this.cartService.getTotalPrice(this.cartID).subscribe(function (price) {
            return _this16.totalPrice = price;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCartProducts();
          this.getTotalPrice();
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/order.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order.component.css */
      "./src/app/components/order/order.component.css")).default]
    })], OrderComponent);
    /***/
  },

  /***/
  "./src/app/components/products-search/products-search.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/products-search/products-search.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductsSearchProductsSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMtc2VhcmNoL3Byb2R1Y3RzLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/products-search/products-search.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/products-search/products-search.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductsSearchComponent */

  /***/
  function srcAppComponentsProductsSearchProductsSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsSearchComponent", function () {
      return ProductsSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/search/search.service */
    "./src/app/services/search/search.service.ts");

    var ProductsSearchComponent =
    /*#__PURE__*/
    function () {
      function ProductsSearchComponent(searchService) {
        _classCallCheck(this, ProductsSearchComponent);

        this.searchService = searchService;
        this.searchFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(ProductsSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.unsubscribeSearchTextChanges = this.searchFormControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200)).subscribe(function (newValue) {
            _this17.searchService.setSearchTextChanges(newValue); // this.searchText = newValue;


            console.log(newValue);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSearchTextChanges.unsubscribe();
        }
      }]);

      return ProductsSearchComponent;
    }();

    ProductsSearchComponent.ctorParameters = function () {
      return [{
        type: src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]
      }];
    };

    ProductsSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products-search/products-search.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products-search.component.css */
      "./src/app/components/products-search/products-search.component.css")).default]
    })], ProductsSearchComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/validators/password.validator */
    "./src/app/validators/password.validator.ts");
    /* harmony import */


    var src_app_validators_unique_email_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/validators/unique-email.validator */
    "./src/app/validators/unique-email.validator.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(fb, authService, uniqueEmail, router) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.authService = authService;
        this.uniqueEmail = uniqueEmail;
        this.router = router;
        this.stepper = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerFormFirst = this.fb.group({
            id: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email], [this.uniqueEmail.validate]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: src_app_validators_password_validator__WEBPACK_IMPORTED_MODULE_4__["PasswordValidator"]
          });
          this.registerFormSecond = this.fb.group({
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onRegisterFirst",
        value: function onRegisterFirst() {
          if (!this.registerFormFirst.valid) return;
          this.stepper = true;
        }
      }, {
        key: "onRegisterSecond",
        value: function onRegisterSecond() {
          var _this18 = this;

          var data = Object.assign(Object.assign({}, this.registerFormFirst.value), this.registerFormSecond.value);
          delete data.passwordConfirm;
          this.authService.createUser(data).subscribe(function () {
            return _this18.router.navigate(["/login"]);
          }, function (e) {
            return _this18.error = e.message;
          });
        }
      }, {
        key: "id",
        get: function get() {
          return this.registerFormFirst.get("id");
        }
      }, {
        key: "email",
        get: function get() {
          return this.registerFormFirst.get("email");
        }
      }, {
        key: "city",
        get: function get() {
          return this.registerFormSecond.get("city");
        }
      }, {
        key: "street",
        get: function get() {
          return this.registerFormSecond.get("street");
        }
      }, {
        key: "name",
        get: function get() {
          return this.registerFormSecond.get("name");
        }
      }, {
        key: "lastName",
        get: function get() {
          return this.registerFormSecond.get("lastName");
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_validators_unique_email_validator__WEBPACK_IMPORTED_MODULE_5__["UniqueEmail"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-register",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/shop-description/shop-description.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shop-description/shop-description.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopDescriptionShopDescriptionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC1kZXNjcmlwdGlvbi9zaG9wLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shop-description/shop-description.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/shop-description/shop-description.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ShopDescriptionComponent */

  /***/
  function srcAppComponentsShopDescriptionShopDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopDescriptionComponent", function () {
      return ShopDescriptionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/order/order.service */
    "./src/app/services/order/order.service.ts");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");

    var ShopDescriptionComponent =
    /*#__PURE__*/
    function () {
      function ShopDescriptionComponent(productService, orderService, cartService) {
        _classCallCheck(this, ShopDescriptionComponent);

        this.productService = productService;
        this.orderService = orderService;
        this.cartService = cartService;
        this.cartID = localStorage.getItem('cartID');
      }

      _createClass(ShopDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          console.log('IS OPEN CART ', this.isOpenCart);
          this.productService.getAmountOfProducts().subscribe(function (amount) {
            if (!amount) return;
            _this19.amountOfProductInDB = amount;
          });
          this.orderService.getAmountOfOrders().subscribe(function (amount) {
            if (!amount) return;
            _this19.amountOfOrdersInDB = amount;
          });
          if (!this.cartID) return;
          this.cartService.getTotalPrice(this.cartID).subscribe(function (total) {
            _this19.totalPrice = total;
          });
        }
      }]);

      return ShopDescriptionComponent;
    }();

    ShopDescriptionComponent.ctorParameters = function () {
      return [{
        type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: src_app_services_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ShopDescriptionComponent.prototype, "isOpenCart", void 0);
    ShopDescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shop-description',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shop-description.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop-description/shop-description.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shop-description.component.css */
      "./src/app/components/shop-description/shop-description.component.css")).default]
    })], ShopDescriptionComponent);
    /***/
  },

  /***/
  "./src/app/components/store-filter/store-filter.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/store-filter/store-filter.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStoreFilterStoreFilterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUtZmlsdGVyL3N0b3JlLWZpbHRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/store-filter/store-filter.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/store-filter/store-filter.component.ts ***!
    \*******************************************************************/

  /*! exports provided: StoreFilterComponent */

  /***/
  function srcAppComponentsStoreFilterStoreFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreFilterComponent", function () {
      return StoreFilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/category/category.service */
    "./src/app/services/category/category.service.ts");

    var StoreFilterComponent =
    /*#__PURE__*/
    function () {
      function StoreFilterComponent(categoryService) {
        var _this20 = this;

        _classCallCheck(this, StoreFilterComponent);

        this.categoryService = categoryService;
        this.categoryService.getAllCategories().subscribe(function (c) {
          _this20.categories = c;
        }, function (e) {
          return console.log(e);
        });
      }

      _createClass(StoreFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoreFilterComponent;
    }();

    StoreFilterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StoreFilterComponent.prototype, "category", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StoreFilterComponent.prototype, "isAdmin", void 0);
    StoreFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-filter/store-filter.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-filter.component.css */
      "./src/app/components/store-filter/store-filter.component.css")).default]
    })], StoreFilterComponent);
    /***/
  },

  /***/
  "./src/app/components/store-items/store-items.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/store-items/store-items.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStoreItemsStoreItemsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-footer {\n\tpadding: 0;\n}\n.clickable {\n\tcursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1pdGVtcy9zdG9yZS1pdGVtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS1pdGVtcy9zdG9yZS1pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcblx0cGFkZGluZzogMDtcbn1cbi5jbGlja2FibGUge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/store-items/store-items.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/store-items/store-items.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StoreItemsComponent */

  /***/
  function srcAppComponentsStoreItemsStoreItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreItemsComponent", function () {
      return StoreItemsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StoreItemsComponent =
    /*#__PURE__*/
    function () {
      function StoreItemsComponent() {
        _classCallCheck(this, StoreItemsComponent);

        this.onUpdateCartProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(StoreItemsComponent, [{
        key: "onUpdateCartProduct",
        value: function onUpdateCartProduct(cartId) {
          this.onUpdateCartProducts.emit(cartId);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addToCart",
        value: function addToCart() {}
      }, {
        key: "edit",
        value: function edit() {
          this.onEdit.emit();
        }
      }]);

      return StoreItemsComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StoreItemsComponent.prototype, "product", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StoreItemsComponent.prototype, "isAdmin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], StoreItemsComponent.prototype, "onUpdateCartProducts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], StoreItemsComponent.prototype, "onEdit", void 0);
    StoreItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store-items',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-items.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-items/store-items.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-items.component.css */
      "./src/app/components/store-items/store-items.component.css")).default]
    })], StoreItemsComponent);
    /***/
  },

  /***/
  "./src/app/components/store-modal/store-modal.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/store-modal/store-modal.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStoreModalStoreModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUtbW9kYWwvc3RvcmUtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/store-modal/store-modal.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/store-modal/store-modal.component.ts ***!
    \*****************************************************************/

  /*! exports provided: StoreModalComponent */

  /***/
  function srcAppComponentsStoreModalStoreModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreModalComponent", function () {
      return StoreModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");

    var StoreModalComponent =
    /*#__PURE__*/
    function () {
      function StoreModalComponent(modalService, cartService) {
        _classCallCheck(this, StoreModalComponent);

        this.modalService = modalService;
        this.cartService = cartService;
        this.cartID = localStorage.getItem('cartID');
        this.onUpdateCartProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(StoreModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUpdateCartProduct",
        value: function onUpdateCartProduct(cartID) {
          this.onUpdateCartProducts.emit(cartID);
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this21 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this21.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this21.closeResult = "Dismissed ".concat(_this21.getDismissReason(reason));
          });
          console.log('PRODUCT OPEN = ', this.product);
        }
      }, {
        key: "add",
        value: function add(product) {
          var _this22 = this;

          this.cartService.addProductToCart({
            productID: product._id,
            amount: this.amount,
            price: this.amount,
            cartID: localStorage.getItem('cartID')
          }).subscribe(function (res) {
            return _this22.onUpdateCartProduct(_this22.cartID);
          });
          this.modalService.dismissAll();
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return StoreModalComponent;
    }();

    StoreModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StoreModalComponent.prototype, "product", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], StoreModalComponent.prototype, "onUpdateCartProducts", void 0);
    StoreModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store-modal/store-modal.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-modal.component.css */
      "./src/app/components/store-modal/store-modal.component.css")).default]
    })], StoreModalComponent);
    /***/
  },

  /***/
  "./src/app/components/store/store.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/store/store.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStoreStoreComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-custom {\n\twidth: 100px;\n\tmargin-right: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdG9yZS9zdG9yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RvcmUvc3RvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY3VzdG9tIHtcblx0d2lkdGg6IDEwMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/store/store.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/store/store.component.ts ***!
    \*****************************************************/

  /*! exports provided: StoreComponent */

  /***/
  function srcAppComponentsStoreStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
      return StoreComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/search/search.service */
    "./src/app/services/search/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var StoreComponent =
    /*#__PURE__*/
    function () {
      function StoreComponent(productService, searchService, route, cartService, authService) {
        _classCallCheck(this, StoreComponent);

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

      _createClass(StoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          console.log('NGONINIT RUN');
          this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe(function (newValue) {
            _this23.searchText = newValue;
          });
          this.userID = this.authService.userIdInfo();

          if (!this.cartID) {
            this.cartService.createCart(this.userID).subscribe(function (cart) {
              console.log('cart', cart);
              localStorage.setItem('cartID', cart._id);
            });
          } // this.getCartProducts();


          this.getCartProductsById(this.cartID);
          this.getTotalPrice(this.cartID);
          this.route.queryParamMap.subscribe(function (params) {
            _this23.category = params.get('category');

            if (_this23.category) {
              _this23.getProductsByCategory();
            } else {
              _this23.getProducts();
            }
          });
        }
      }, {
        key: "getProductsByCategory",
        value: function getProductsByCategory() {
          var _this24 = this;

          this.productService.getAllProductsByCategory(this.category).subscribe(function (p) {
            return _this24.products = p;
          });
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this25 = this;

          this.productService.getAllProducts().subscribe(function (p) {
            _this25.products = p;
          }, function (e) {
            return console.log(e);
          });
        }
      }, {
        key: "getCartProducts",
        value: function getCartProducts() {
          var _this26 = this;

          this.cartService.getCartProducts().subscribe(function (p) {
            console.log('P = ', p);
            _this26.cartProducts = p;
          });
        }
      }, {
        key: "getCartProductsById",
        value: function getCartProductsById(cartId) {
          var _this27 = this;

          if (!cartId) return;
          this.cartService.getCartProductsById(cartId).subscribe(function (p) {
            console.log('cart products by id = ', p);
            _this27.cartProducts = p;

            _this27.getTotalPrice(_this27.cartID);
          });
        }
      }, {
        key: "updateCartProducts",
        value: function updateCartProducts(cartId) {
          // this.getCartProducts();
          this.getTotalPrice(this.cartID);
          this.getCartProductsById(cartId);
        }
      }, {
        key: "onDeleted",
        value: function onDeleted(cartID) {
          var _this28 = this;

          this.cartService.deleteCartProduct(cartID).subscribe(function (p) {
            console.log('product deleted');
            console.log('Product DELETED ', p);

            _this28.getCartProductsById(_this28.cartID);

            _this28.getTotalPrice(_this28.cartID);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeSearchTextChanges.unsubscribe();
        }
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice(id) {
          var _this29 = this;

          if (!id) return;
          this.cartService.getTotalPrice(id).subscribe(function (total) {
            return _this29.totalPrice = total;
          });
        }
      }]);

      return StoreComponent;
    }();

    StoreComponent.ctorParameters = function () {
      return [{
        type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: src_app_services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    StoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/store/store.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store.component.css */
      "./src/app/components/store/store.component.css")).default]
    })], StoreComponent);
    /***/
  },

  /***/
  "./src/app/guards/admin.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/admin.guard.ts ***!
    \***************************************/

  /*! exports provided: AdminGuard */

  /***/
  function srcAppGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);

    var AdminGuard =
    /*#__PURE__*/
    function () {
      function AdminGuard(router, authService) {
        _classCallCheck(this, AdminGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AdminGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var token = localStorage.getItem("token");
          var expectedRole = route.data.expectedRole;
          var tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
          console.log("TOKEN PAYLOAD = ", tokenPayload);

          if (!this.authService.isLoggedIn() || tokenPayload.role !== expectedRole) {
            this.router.navigate(["/"]);
            return false;
          }

          return true;
        }
      }]);

      return AdminGuard;
    }();

    AdminGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AdminGuard);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route) {
          var role = route.data.role;
          var isAuth = this.authService.isLoggedIn();
          var isAdmin = this.authService.isAdminLogged();
          console.log('GUARD ROLE', role);

          if (!isAuth || role && !isAdmin) {
            this.router.navigate(['/register']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard); // const currentUser = this.authService.currentUserValue;
    // const role = route.data.roles;

    /***/
  },

  /***/
  "./src/app/pipes/search/search.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/search/search.pipe.ts ***!
    \*********************************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppPipesSearchSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/product.service */
    "./src/app/services/product.service.ts");

    var SearchPipe =
    /*#__PURE__*/
    function () {
      function SearchPipe(productService) {
        _classCallCheck(this, SearchPipe);

        this.productService = productService;
        this.products = [];
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(items, searchText, searchKey) {
          if (!searchText) return items;
          if (!Array.isArray(items)) return []; // console.log(searchText);
          // this.productService.getAllProductsByInput(searchText).subscribe((p) => (this.products = p));
          // console.log('PRODUCTS FROM PIPE = ', this.products);
          // return this.products;

          return items.filter(function (p) {
            return p[searchKey].toLowerCase().includes(searchText.toLowerCase());
          }); // this.getAllProductsByInput(searchText);
          // return this.products;
        }
      }, {
        key: "getAllProductsByInput",
        value: function getAllProductsByInput(searchText) {
          var _this30 = this;

          return this.productService.getAllProductsByInput(searchText).subscribe(function (p) {
            return _this30.products = p;
          });
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe.ctorParameters = function () {
      return [{
        type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    SearchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'search'
    })], SearchPipe);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.localDevUrl = "http://localhost:5000/";
        this.shopUrl = "api/auth";
        this.signedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
      }

      _createClass(AuthService, [{
        key: "emailAvailable",
        value: function emailAvailable(username) {
          return this.http.post("".concat(this.shopUrl, "/username"), {
            username: username
          });
        } // register

      }, {
        key: "createUser",
        value: function createUser(user) {
          var headers = new Headers();
          headers.append("Content-Type", "application/json");
          return this.http.post("".concat(this.shopUrl, "/register"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //login

      }, {
        key: "loginUser",
        value: function loginUser(user) {
          var _this31 = this;

          return this.http.post("".concat(this.shopUrl, "/login"), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log("RESPONSE", response);
            var token = response.token,
                user = response.user;

            if (token) {
              _this31.signedIn.next(true);

              localStorage.setItem("token", token);
              localStorage.setItem("user", user.name);
              localStorage.setItem("userID", user._id);
              localStorage.setItem("role", user.role);
              return user.role;
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "userInfo",
        value: function userInfo() {
          return localStorage.getItem("user");
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          // return !!localStorage.getItem("token");
          if (localStorage.getItem("token")) {
            this.signedIn.next(true);
            return true;
          }

          return false;
        }
      }, {
        key: "isAdminLogged",
        value: function isAdminLogged() {
          return localStorage.getItem("role") === "admin";
        }
      }, {
        key: "userIdInfo",
        value: function userIdInfo() {
          return localStorage.getItem("userID");
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.clear();
          this.signedIn.next(false);
          this.router.navigate(["/login"]);
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(id) {
          return this.http.get("".concat(this.shopUrl, "/user/").concat(id));
        }
      }, {
        key: "handleError",
        value: function handleError(res) {
          console.error(res.error || res.body.error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(res.error || "Server error");
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/cart/cart.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/cart/cart.service.ts ***!
    \***********************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService(http) {
        _classCallCheck(this, CartService);

        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.cartUrl = "api/cart";
        this.addProductURL = "api/cart/addProduct";
      } // private getCartProductsEventSUbject = new BehaviorSubject<any>([]);
      // data: Observable<any> = this.getCartProductsEventSUbject.asObservable();
      // getCartProductsEvent() {
      // 	return this.http.get(this.cartUrl).subscribe((data) => this.getCartProductsEventSUbject.next());
      // }


      _createClass(CartService, [{
        key: "createCart",
        value: function createCart(userID) {
          console.log("user id from service", userID);
          return this.http.post(this.cartUrl, {
            userID: userID
          });
        }
      }, {
        key: "addProductToCart",
        value: function addProductToCart(cartInfo) {
          return this.http.post(this.addProductURL, Object.assign({}, cartInfo));
        }
      }, {
        key: "getCartProducts",
        value: function getCartProducts() {
          return this.http.get(this.cartUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getCartProductsById",
        value: function getCartProductsById(cartId) {
          return this.http.get("".concat(this.cartUrl, "/").concat(cartId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return localStorage.getItem("cartID");
        }
      }, {
        key: "deleteCartProduct",
        value: function deleteCartProduct(cartInfoID) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              "Content-Type": "application/json"
            }),
            body: {
              cartInfoID: cartInfoID
            }
          };
          return this.http.delete(this.cartUrl, options);
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {}
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice(id) {
          if (!id) return;
          return this.http.get("".concat(this.cartUrl, "/totalPrice/").concat(id));
        }
      }, {
        key: "isOpenCart",
        value: function isOpenCart() {
          return !!localStorage.getItem("cartID");
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CartService);
    /***/
  },

  /***/
  "./src/app/services/category/category.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/category/category.service.ts ***!
    \*******************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.categoryURL = "api/category";
      }

      _createClass(CategoryService, [{
        key: "getAllCategories",
        value: function getAllCategories() {
          // return this.http.get<Category>(this.categoryURL).pipe(map((c: Category) => (this.categories = c)));
          return this.http.get(this.categoryURL);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/order/order.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/order/order.service.ts ***!
    \*************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrderService =
    /*#__PURE__*/
    function () {
      function OrderService(http) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.orderURL = "api/order";
      }

      _createClass(OrderService, [{
        key: "createOrder",
        value: function createOrder(order) {
          return this.http.post(this.orderURL, order);
        }
      }, {
        key: "getAmountOfOrders",
        value: function getAmountOfOrders() {
          return this.http.get("".concat(this.orderURL, "/t/o"));
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], OrderService);
    /***/
  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.localDevUrl = "http://localhost:5000/";
        this.productURL = "api/product";
      }

      _createClass(ProductService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.http.get(this.productURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getAllProductsByCategory",
        value: function getAllProductsByCategory(category) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("search", category);
          return this.http.get(this.productURL + "/s/c", {
            params: params
          });
        }
      }, {
        key: "getAllProductsByInput",
        value: function getAllProductsByInput(searchText) {
          console.log("FROM INPUT = ", searchText);
          return this.http.get("".concat(this.productURL, "/").concat(searchText));
        }
      }, {
        key: "updateProductByID",
        value: function updateProductByID(product) {
          return this.http.put("".concat(this.productURL), product);
        }
      }, {
        key: "createProduct",
        value: function createProduct(product) {
          return this.http.post("".concat(this.productURL), product);
        }
      }, {
        key: "getAmountOfProducts",
        value: function getAmountOfProducts() {
          return this.http.get("".concat(this.productURL, "/t/p"));
        }
      }, {
        key: "handleError",
        value: function handleError(res) {
          console.error(res.error || res.body.error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(res.error || "Server error");
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/services/search/search.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/search/search.service.ts ***!
    \***************************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppServicesSearchSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchService =
    /*#__PURE__*/
    function () {
      function SearchService() {
        _classCallCheck(this, SearchService);

        this.searchTextChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(SearchService, [{
        key: "setSearchTextChanges",
        value: function setSearchTextChanges(newValue) {
          this.searchTextChanges.next(newValue);
        }
      }]);

      return SearchService;
    }();

    SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SearchService);
    /***/
  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenInterceptorService =
    /*#__PURE__*/
    function () {
      function TokenInterceptorService() {
        _classCallCheck(this, TokenInterceptorService);
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = localStorage.getItem('token');

          if (token) {
            var tokenizedReq = req.clone({
              // headers: req.headers.set('authorization', 'Bearer ' + token)
              headers: req.headers.set('authorization', token)
            });
            console.log('tokenizedReq = ', tokenizedReq);
            return next.handle(tokenizedReq);
          } else {
            return next.handle(req);
          }
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptorService);
    /***/
  },

  /***/
  "./src/app/validators/password.validator.ts":
  /*!**************************************************!*\
    !*** ./src/app/validators/password.validator.ts ***!
    \**************************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppValidatorsPasswordValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function PasswordValidator(control) {
      var password = control.get('password');
      var passwordConfirm = control.get('passwordConfirm');

      if (password.pristine || passwordConfirm.pristine) {
        return null;
      }

      return password && passwordConfirm && password.value !== passwordConfirm.value ? {
        misMatch: true
      } : null;
    }
    /***/

  },

  /***/
  "./src/app/validators/unique-email.validator.ts":
  /*!******************************************************!*\
    !*** ./src/app/validators/unique-email.validator.ts ***!
    \******************************************************/

  /*! exports provided: UniqueEmail */

  /***/
  function srcAppValidatorsUniqueEmailValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueEmail", function () {
      return UniqueEmail;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var UniqueEmail = function UniqueEmail(authSerivce) {
      var _this32 = this;

      _classCallCheck(this, UniqueEmail);

      this.authSerivce = authSerivce;

      this.validate = function (control) {
        var value = control.value;
        console.log(value);
        return _this32.authSerivce.emailAvailable(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
          if (!value.exist) {
            console.log("not exist");
            return null;
          }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
          console.log(e);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
            nonUniqueEmail: true
          });
        }));
      };
    };

    UniqueEmail.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    UniqueEmail = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UniqueEmail);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/vladi/Documents/dev/projects/vegan-shop/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map