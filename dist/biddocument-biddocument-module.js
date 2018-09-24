(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["biddocument-biddocument-module"],{

/***/ "./src/app/layout/biddocument/biddocument-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/biddocument/biddocument-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: BidDocumentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidDocumentRoutingModule", function() { return BidDocumentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _biddocument_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biddocument.component */ "./src/app/layout/biddocument/biddocument.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _biddocument_component__WEBPACK_IMPORTED_MODULE_2__["BidDocumentComponent"]
    }
];
var BidDocumentRoutingModule = /** @class */ (function () {
    function BidDocumentRoutingModule() {
    }
    BidDocumentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BidDocumentRoutingModule);
    return BidDocumentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/biddocument/biddocument.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/biddocument/biddocument.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <!-- <app-page-header [heading]=\"'Tables'\" [icon]=\"'fa-table'\"></app-page-header> -->\r\n    <div class=\"form-group input-group col-4\" style=\"padding-left: 0px;\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n        <!-- <input type=\"text\" name=\"text\" [(ngModel)]=\"text\" id=\"form1\" class=\"form-control\"> -->\r\n        <div class=\"input-group-append\">\r\n            <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n        <div class=\"pl-2\">\r\n            <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProj()\">New Project {{text}}</button> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project A</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project B</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project C</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project D</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project E</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project F</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project G</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col\">\r\n            <div class=\"card border-dark mb-3\" style=\"max-width: 18rem;\" (click)=\"cardClick()\">\r\n                <p class=\"card-header\" style=\"background-color: #cce5ff;\">Project H</p>\r\n                <div class=\"card-body\">\r\n                    <!-- <h5 class=\"card-title\">Light card title</h5> -->\r\n                    <p class=\"card-text\">Files: Document 1, Document 2, Document 3, Document 4, Document 5,</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\r\n\r\n    <div class=\"modal\" [ngStyle]=\"{'display':display}\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Project</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <form>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"formGroupExampleInput\">Title</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"\">\r\n                        </div>\r\n                        <form>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"exampleFormControlFile1\">Upload File</label>\r\n                                <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\r\n                            </div>\r\n                        </form>\r\n                        <table class=\"card-body table table-hover table-bordered\">\r\n                            <thead class=\"card-header\" style=\"background-color: #cce5ff;\">\r\n                                <tr>\r\n                                    <th>File Name</th>\r\n                                    <th>Path</th>\r\n                                    <th>Upload Date</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>File 1</td>\r\n                                    <td>file://host/path</td>\r\n                                    <td>09/17/2018</td>\r\n                                    <td><button type=\"button\" class=\"btn btn-outline-danger\">Delete</button></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>File 2</td>\r\n                                    <td>file://host/path</td>\r\n                                    <td>09/17/2018</td>\r\n                                    <td><button type=\"button\" class=\"btn btn-outline-danger\">Delete</button></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>File 3</td>\r\n                                    <td>file://host/path</td>\r\n                                    <td>09/17/2018</td>\r\n                                    <td><button type=\"button\" class=\"btn btn-outline-danger\">Delete</button></td>\r\n                                </tr>\r\n                                <!-- <tr>\r\n                                        <th scope=\"row\">2</th>\r\n                                        <td>Jacob</td>\r\n                                        <td>Thornton</td>\r\n                                        <td>@fat</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th scope=\"row\">3</th>\r\n                                        <td colspan=\"2\">Larry the Bird</td>\r\n                                        <td>@twitter</td>\r\n                                    </tr> -->\r\n                            </tbody>\r\n                        </table>\r\n                    </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCloseHandled()\">Close</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCloseHandled()\">Save</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"false\">\r\n        <div class=\"col col-xl-6 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    Basic example\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Table head options</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-inverse\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-default\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Bordered table</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@TwBootstrap</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">4</th>\r\n                                <td colspan=\"2\">Larry the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Small table</div>\r\n                <table class=\"table table-sm\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-xl-6 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Inverse table</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-inverse\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th>First Name</th>\r\n                                <th>Last Name</th>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\">1</th>\r\n                                <td>Mark</td>\r\n                                <td>Otto</td>\r\n                                <td>@mdo</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">2</th>\r\n                                <td>Jacob</td>\r\n                                <td>Thornton</td>\r\n                                <td>@fat</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th scope=\"row\">3</th>\r\n                                <td>Larry</td>\r\n                                <td>the Bird</td>\r\n                                <td>@twitter</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Striped Rows</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-hover table-striped\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Page</th>\r\n                                <th>Visits</th>\r\n                                <th>% New Visits</th>\r\n                                <th>Revenue</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>/index.html</td>\r\n                                <td>1265</td>\r\n                                <td>32.3%</td>\r\n                                <td>$321.33</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/about.html</td>\r\n                                <td>261</td>\r\n                                <td>33.3%</td>\r\n                                <td>$234.12</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/sales.html</td>\r\n                                <td>665</td>\r\n                                <td>21.3%</td>\r\n                                <td>$16.34</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/blog.html</td>\r\n                                <td>9516</td>\r\n                                <td>89.3%</td>\r\n                                <td>$1644.43</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/404.html</td>\r\n                                <td>23</td>\r\n                                <td>34.3%</td>\r\n                                <td>$23.52</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/services.html</td>\r\n                                <td>421</td>\r\n                                <td>60.3%</td>\r\n                                <td>$724.32</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>/blog/post.html</td>\r\n                                <td>1233</td>\r\n                                <td>93.2%</td>\r\n                                <td>$126.34</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Hoverable rows</div>\r\n                <table class=\"card-body table table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">3</th>\r\n                            <td colspan=\"2\">Larry the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Contextual classes</div>\r\n                <table class=\"card-body table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Username</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr class=\"table-active\">\r\n                            <th scope=\"row\">1</th>\r\n                            <td>Mark</td>\r\n                            <td>Otto</td>\r\n                            <td>@mdo</td>\r\n                        </tr>\r\n                        <tr class=\"table-success\">\r\n                            <th scope=\"row\">2</th>\r\n                            <td>Jacob</td>\r\n                            <td>Thornton</td>\r\n                            <td>@fat</td>\r\n                        </tr>\r\n                        <tr class=\"table-info\">\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Larry</td>\r\n                            <td>the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                        <tr class=\"table-warning\">\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Larry</td>\r\n                            <td>the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                        <tr class=\"table-danger\">\r\n                            <th scope=\"row\">3</th>\r\n                            <td>Larry</td>\r\n                            <td>the Bird</td>\r\n                            <td>@twitter</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/biddocument/biddocument.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/biddocument/biddocument.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/layout/biddocument/biddocument.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/biddocument/biddocument.component.ts ***!
  \*************************************************************/
/*! exports provided: BidDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidDocumentComponent", function() { return BidDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BidDocumentComponent = /** @class */ (function () {
    function BidDocumentComponent() {
        this.display = 'none';
    }
    BidDocumentComponent.prototype.ngOnInit = function () { };
    BidDocumentComponent.prototype.cardClick = function (name) {
        this.display = 'block';
        this.projName = name;
    };
    BidDocumentComponent.prototype.onCloseHandled = function () {
        this.display = 'none';
    };
    BidDocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-biddocument',
            template: __webpack_require__(/*! ./biddocument.component.html */ "./src/app/layout/biddocument/biddocument.component.html"),
            styles: [__webpack_require__(/*! ./biddocument.component.scss */ "./src/app/layout/biddocument/biddocument.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], BidDocumentComponent);
    return BidDocumentComponent;
}());



/***/ }),

/***/ "./src/app/layout/biddocument/biddocument.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/biddocument/biddocument.module.ts ***!
  \**********************************************************/
/*! exports provided: BidDocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidDocumentModule", function() { return BidDocumentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _biddocument_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./biddocument.component */ "./src/app/layout/biddocument/biddocument.component.ts");
/* harmony import */ var _biddocument_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biddocument-routing.module */ "./src/app/layout/biddocument/biddocument-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BidDocumentModule = /** @class */ (function () {
    function BidDocumentModule() {
    }
    BidDocumentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _biddocument_routing_module__WEBPACK_IMPORTED_MODULE_4__["BidDocumentRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"]],
            declarations: [_biddocument_component__WEBPACK_IMPORTED_MODULE_3__["BidDocumentComponent"]]
        })
    ], BidDocumentModule);
    return BidDocumentModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ })

}]);
//# sourceMappingURL=biddocument-biddocument-module.js.map