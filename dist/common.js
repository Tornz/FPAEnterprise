(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/data-services/bidDocument.services.ts":
/*!*******************************************************!*\
  !*** ./src/app/data-services/bidDocument.services.ts ***!
  \*******************************************************/
/*! exports provided: BidDocumentServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidDocumentServices", function() { return BidDocumentServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_documents_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/documents.model */ "./src/app/model/documents.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BidDocumentServices = /** @class */ (function () {
    function BidDocumentServices() {
        this.bidDocsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.bidDocuments = [
            new _model_documents_model__WEBPACK_IMPORTED_MODULE_2__["Documents"](1, "Project A", []), new _model_documents_model__WEBPACK_IMPORTED_MODULE_2__["Documents"](2, "Project B", []),
            new _model_documents_model__WEBPACK_IMPORTED_MODULE_2__["Documents"](3, "Project C", []), new _model_documents_model__WEBPACK_IMPORTED_MODULE_2__["Documents"](4, "Project D", [])
        ];
        // saveComponents(item: TechComponents) {
        //     this.technologies.frontend = item.frontend.slice();
        //     this.technologies.backend = item.backend.slice();
        //     this.technologies.report = item.report.slice();
        //     this.technologies.storage = item.storage.slice();
        // }
    }
    BidDocumentServices.prototype.getDocuments = function () {
        return this.bidDocuments.slice();
    };
    BidDocumentServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BidDocumentServices);
    return BidDocumentServices;
}());



/***/ }),

/***/ "./src/app/model/documents.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/documents.model.ts ***!
  \******************************************/
/*! exports provided: Documents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Documents", function() { return Documents; });
var Documents = /** @class */ (function () {
    function Documents(projectId, projectName, files) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.files = files.slice();
    }
    return Documents;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map