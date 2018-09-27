(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["costmodel-costmodel-module"],{

/***/ "./src/app/data-services/project.services.ts":
/*!***************************************************!*\
  !*** ./src/app/data-services/project.services.ts ***!
  \***************************************************/
/*! exports provided: ProjectServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectServices", function() { return ProjectServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectServices = /** @class */ (function () {
    function ProjectServices(http) {
        this.http = http;
        this.project = [
            {
                id: 1,
                projectName: "Project A",
                description: "Description",
                phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
                technology: "",
                methodology: "Agile",
                dateUpdated: new Date()
            },
            {
                id: 2,
                projectName: "Project B",
                description: "Description",
                phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
                technology: "",
                methodology: "Agile",
                dateUpdated: new Date()
            },
            {
                id: 3,
                projectName: "Project C",
                description: "Description",
                phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
                technology: "",
                methodology: "Agile",
                dateUpdated: new Date()
            },
            {
                id: 4,
                projectName: "Project D",
                description: "Description",
                phaseNumber: ["Web Application", "Mobile Application"],
                technology: "",
                methodology: "Agile",
                dateUpdated: new Date()
            },
            {
                id: 5,
                projectName: "Project E",
                description: "Description",
                phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
                technology: "",
                methodology: "Agile",
                dateUpdated: new Date()
            }
        ];
        this.projectChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ProjectServices.prototype.getProjects = function () {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // return this.http.get<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        console.log(this.project.slice());
        return this.project.slice();
    };
    ProjectServices.prototype.addProject = function (data) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        this.project.push(data);
        this.projectChanged.next(this.project.slice());
    };
    ProjectServices.prototype.editProject = function (id, data) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        for (var i in this.project) {
            if (this.project[i].id == id) {
                this.project[i].projectName = data.projectName;
                this.project[i].description = data.description;
                this.project[i].phaseNumber = data.phaseNumber;
                this.project[i].technology = data.technology;
                this.project[i].methodology = data.methodology;
                this.project[i].dateUpdated = new Date();
                return true;
            }
        }
    };
    ProjectServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectServices);
    return ProjectServices;
}());



/***/ }),

/***/ "./src/app/layout/costmodel/costmodel-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/costmodel/costmodel-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: CostModelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostModelRoutingModule", function() { return CostModelRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _costmodel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./costmodel.component */ "./src/app/layout/costmodel/costmodel.component.ts");
/* harmony import */ var _costmodeldetails_costmodeldetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./costmodeldetails/costmodeldetails.component */ "./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _costmodel_component__WEBPACK_IMPORTED_MODULE_2__["CostModelComponent"]
    },
    { path: 'costmodeldetails', component: _costmodeldetails_costmodeldetails_component__WEBPACK_IMPORTED_MODULE_3__["CostModelDetailsComponent"] }
];
var CostModelRoutingModule = /** @class */ (function () {
    function CostModelRoutingModule() {
    }
    CostModelRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CostModelRoutingModule);
    return CostModelRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/costmodel/costmodel.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/costmodel/costmodel.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group input-group col-md-3 pull-right\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search By Project Name\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"box\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <ng-container *ngFor=\"let proj of project\">\r\n                            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" style=\"cursor:pointer\" (click)=\"gotoCostModelDetails()\">\r\n\r\n                                <div class=\"box-part\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-3\"><i class=\"fa fa-building fa-3x\" aria-hidden=\"true\"></i></div>\r\n                                        <div class=\"col-md-9\">\r\n                                            <div class=\"title\">\r\n                                                <h4>{{proj.projectName}}</h4>\r\n                                            </div>\r\n                                            <div style=\"font-size:11px;\"><span style=\"font-weight:bold\">Total Phase: </span> 2</div>\r\n                                            <div style=\"font-size:11px;\"><span style=\"font-weight:bold\">Duration: </span>5Months</div>\r\n                                            <div style=\"font-size:11px;\"><span style=\"font-weight:bold\">Head Count: </span>8</div>\r\n                                            <div style=\"font-size:11px;\"><span style=\"font-weight:bold\">Total Cost: </span>$1,000,000</div>                                            \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/costmodel/costmodel.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/costmodel/costmodel.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  font-size: 15px; }\n\na {\n  text-decoration: none;\n  color: #0062cc;\n  border-bottom: 2px solid #0062cc; }\n\n.box {\n  padding: 10px 0px; }\n\n.box-part {\n  background: #FFF;\n  border-radius: 5px;\n  border: 2px solid;\n  border-color: #04427b;\n  padding: 10px 10px;\n  margin: 10px 0px; }\n\n.text {\n  margin: 20px 0px; }\n\n.fa {\n  color: #4183D7; }\n\np {\n  font-size: 11px;\n  font-weight: bold;\n  cursor: pointer; }\n\np:hover {\n  color: #04427b; }\n"

/***/ }),

/***/ "./src/app/layout/costmodel/costmodel.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/costmodel/costmodel.component.ts ***!
  \*********************************************************/
/*! exports provided: CostModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostModelComponent", function() { return CostModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _data_services_project_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-services/project.services */ "./src/app/data-services/project.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CostModelComponent = /** @class */ (function () {
    function CostModelComponent(router, proj) {
        this.router = router;
        this.proj = proj;
        this.tabler = [];
    }
    CostModelComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    CostModelComponent.prototype.loadData = function () {
        this.project = this.proj.getProjects();
        console.log("Project", this.project);
    };
    CostModelComponent.prototype.gotoCostModelDetails = function () {
        this.router.navigate(['/cmodel/costmodeldetails']);
    };
    CostModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-costmodel',
            template: __webpack_require__(/*! ./costmodel.component.html */ "./src/app/layout/costmodel/costmodel.component.html"),
            styles: [__webpack_require__(/*! ./costmodel.component.scss */ "./src/app/layout/costmodel/costmodel.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_services_project_services__WEBPACK_IMPORTED_MODULE_2__["ProjectServices"]])
    ], CostModelComponent);
    return CostModelComponent;
}());



/***/ }),

/***/ "./src/app/layout/costmodel/costmodel.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/costmodel/costmodel.module.ts ***!
  \******************************************************/
/*! exports provided: CostModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostModelModule", function() { return CostModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _costmodel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./costmodel.component */ "./src/app/layout/costmodel/costmodel.component.ts");
/* harmony import */ var _costmodel_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./costmodel-routing.module */ "./src/app/layout/costmodel/costmodel-routing.module.ts");
/* harmony import */ var _costmodeldetails_costmodeldetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./costmodeldetails/costmodeldetails.component */ "./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


;




var CostModelModule = /** @class */ (function () {
    function CostModelModule() {
    }
    CostModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _costmodel_routing_module__WEBPACK_IMPORTED_MODULE_4__["CostModelRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"]],
            declarations: [_costmodel_component__WEBPACK_IMPORTED_MODULE_3__["CostModelComponent"], _costmodeldetails_costmodeldetails_component__WEBPACK_IMPORTED_MODULE_5__["CostModelDetailsComponent"]]
        })
    ], CostModelModule);
    return CostModelModule;
}());



/***/ }),

/***/ "./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <div style=\"font-size:15px;font-weight:bold\">Project A</div>\r\n    <br />\r\n    <table class=\"table table-striped\">\r\n        <thead style=\"font-weight:bold;font-size:12px\">\r\n            <tr>\r\n                <td>ONSITE</td>\r\n                <td>ROLE</td>\r\n                <td>GRADE</td>\r\n                <td>MONTH</td>\r\n                <td>HEAD COUNT</td>\r\n                <td>PHASE 1</td>\r\n                <td>PHASE 2</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td>OnSite</td>\r\n                <td>Business Analyst</td>\r\n                <td>i9-HK</td>\r\n                <td>1</td>\r\n                <td>1</td>\r\n                <td>100,000</td>\r\n                <td>100,000</td>\r\n            </tr>\r\n            <tr>\r\n                <td>OnSite</td>\r\n                <td>Technical Architect</td>\r\n                <td>i9-HK</td>\r\n                <td>1</td>\r\n                <td>1</td>\r\n                <td>100,000</td>\r\n                <td>100,000</td>\r\n            </tr>\r\n            <tr>\r\n                <td>OnSite</td>\r\n                <td>UI/UX Designer</td>\r\n                <td>i9-HK</td>\r\n                <td>1</td>\r\n                <td>1</td>\r\n                <td>100,000</td>\r\n                <td>100,000</td>\r\n            </tr>\r\n            <tr>\r\n                <td>OnSite</td>\r\n                <td>Technical PM</td>\r\n                <td>i9-HK</td>\r\n                <td>3</td>\r\n                <td>1</td>\r\n                <td>100,000</td>\r\n                <td>100,000</td>\r\n            </tr>\r\n            <tr>\r\n                <td>OnSite</td>\r\n                <td>Programmer</td>\r\n                <td>i9-HK</td>\r\n                <td>4</td>\r\n                <td>1</td>\r\n                <td>100,000</td>\r\n                <td>100,000</td>\r\n            </tr>\r\n            <tr style=\"font-weight:bold\">\r\n                <td colspan=\"4\">Total</td>\r\n               \r\n                <td>8</td>\r\n                <td>500,000</td>\r\n                <td>500,000</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CostModelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostModelDetailsComponent", function() { return CostModelDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CostModelDetailsComponent = /** @class */ (function () {
    function CostModelDetailsComponent() {
    }
    CostModelDetailsComponent.prototype.ngOnInit = function () {
    };
    CostModelDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-costmodeldetails',
            template: __webpack_require__(/*! ./costmodeldetails.component.html */ "./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.html"),
            styles: [__webpack_require__(/*! ./costmodeldetails.component.scss */ "./src/app/layout/costmodel/costmodeldetails/costmodeldetails.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], CostModelDetailsComponent);
    return CostModelDetailsComponent;
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
//# sourceMappingURL=costmodel-costmodel-module.js.map