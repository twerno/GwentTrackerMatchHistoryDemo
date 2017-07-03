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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n    height: auto;\n    overflow: hidden;\n}\n\n.filter-col {\n    float: left;\n    /*min-height: 100%;*/\n    /*top: 0px;\n    bottom: 0px;\n    position: fixed;*/\n}\n\n.content-col {\n    float: none;\n    margin-left: 170px;\n    overflow: hidden;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"headline\">Match History by Gwent Tracker</h2>\n\n<div class=\"main-container\">\n    <div class=\"filter-col\">\n        <gt-match-filter></gt-match-filter>\n    </div>\n    <div class=\"content-col\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

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
        this.title = 'Gwent Tracker Match History';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'gt-root',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_match_history_match_history_component__ = __webpack_require__("../../../../../src/app/match-history/match-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_filter_filter_module__ = __webpack_require__("../../../../../src/app/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_match_data_provider_service__ = __webpack_require__("../../../../../src/app/service/match-data-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_service_filter_data_service__ = __webpack_require__("../../../../../src/app/service/filter-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_service_filter_service__ = __webpack_require__("../../../../../src/app/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_converter_converter_module__ = __webpack_require__("../../../../../src/app/converter/converter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_route_route_module__ = __webpack_require__("../../../../../src/app/route/route.module.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3_app_match_history_match_history_component__["a" /* MatchHistoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_filter_filter_module__["a" /* FilterModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_converter_converter_module__["a" /* ConverterModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10_app_route_route_module__["a" /* RouteModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5_app_service_match_data_provider_service__["a" /* MatchDataProviderService */],
            __WEBPACK_IMPORTED_MODULE_6_app_service_filter_data_service__["a" /* FilterDataService */],
            __WEBPACK_IMPORTED_MODULE_7_app_service_filter_service__["a" /* FilterService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/const/const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return secPerMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return secPerHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return secPerDay; });
var secPerMinute = 60;
var secPerHour = secPerMinute * 60;
var secPerDay = secPerHour * 24;
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "../../../../../src/app/const/faction.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Faction; });
var Faction;
(function (Faction) {
    Faction[Faction["MONSTER"] = 0] = "MONSTER";
    Faction[Faction["NILFGAARD"] = 1] = "NILFGAARD";
    Faction[Faction["NORTHERN_REALMS"] = 2] = "NORTHERN_REALMS";
    Faction[Faction["SCOIATAEL"] = 3] = "SCOIATAEL";
    Faction[Faction["SKELLIGE"] = 4] = "SKELLIGE";
})(Faction || (Faction = {}));
//# sourceMappingURL=faction.enum.js.map

/***/ }),

/***/ "../../../../../src/app/const/game-mode.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMode; });
var GameMode;
(function (GameMode) {
    GameMode[GameMode["RANKED"] = 0] = "RANKED";
    GameMode[GameMode["CASUAL"] = 1] = "CASUAL";
})(GameMode || (GameMode = {}));
//# sourceMappingURL=game-mode.enum.js.map

/***/ }),

/***/ "../../../../../src/app/const/game-result.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameResult; });
var GameResult;
(function (GameResult) {
    GameResult[GameResult["WIN"] = 0] = "WIN";
    GameResult[GameResult["LOSS"] = 1] = "LOSS";
    GameResult[GameResult["DRAW"] = 2] = "DRAW";
})(GameResult || (GameResult = {}));
//# sourceMappingURL=game-result.enum.js.map

/***/ }),

/***/ "../../../../../src/app/converter/converter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_converter_faction_2_string_pipe__ = __webpack_require__("../../../../../src/app/converter/faction-2-string.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_converter_game_mode_pipe__ = __webpack_require__("../../../../../src/app/converter/game-mode.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_converter_game_result_pipe__ = __webpack_require__("../../../../../src/app/converter/game-result.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_converter_faction_2_icon_url_pipe__ = __webpack_require__("../../../../../src/app/converter/faction-2-icon-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_converter_leader_2_icon_url_pipe__ = __webpack_require__("../../../../../src/app/converter/leader-2-icon-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_converter_date_2_string_ago_pipe__ = __webpack_require__("../../../../../src/app/converter/date-2-string-ago.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConverterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConverterModule = (function () {
    function ConverterModule() {
    }
    return ConverterModule;
}());
ConverterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2_app_converter_faction_2_string_pipe__["a" /* Faction2StringPipe */],
            __WEBPACK_IMPORTED_MODULE_3_app_converter_game_mode_pipe__["a" /* GameModePipe */],
            __WEBPACK_IMPORTED_MODULE_4_app_converter_game_result_pipe__["a" /* GameResultPipe */],
            __WEBPACK_IMPORTED_MODULE_5_app_converter_faction_2_icon_url_pipe__["a" /* Faction2IconUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_6_app_converter_leader_2_icon_url_pipe__["a" /* Leader2IconUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_7_app_converter_date_2_string_ago_pipe__["a" /* Date2StringAgoPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2_app_converter_faction_2_string_pipe__["a" /* Faction2StringPipe */],
            __WEBPACK_IMPORTED_MODULE_3_app_converter_game_mode_pipe__["a" /* GameModePipe */],
            __WEBPACK_IMPORTED_MODULE_4_app_converter_game_result_pipe__["a" /* GameResultPipe */],
            __WEBPACK_IMPORTED_MODULE_5_app_converter_faction_2_icon_url_pipe__["a" /* Faction2IconUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_6_app_converter_leader_2_icon_url_pipe__["a" /* Leader2IconUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_7_app_converter_date_2_string_ago_pipe__["a" /* Date2StringAgoPipe */]
        ]
    })
], ConverterModule);

//# sourceMappingURL=converter.module.js.map

/***/ }),

/***/ "../../../../../src/app/converter/date-2-string-ago.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__ = __webpack_require__("../../../../../src/app/helper/date-time.helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Date2StringAgoPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Date2StringAgoPipe = (function () {
    function Date2StringAgoPipe() {
    }
    Date2StringAgoPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].date2StringAgo(value);
    };
    return Date2StringAgoPipe;
}());
Date2StringAgoPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'date2StringAgo'
    })
], Date2StringAgoPipe);

//# sourceMappingURL=date-2-string-ago.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/converter/faction-2-icon-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__ = __webpack_require__("../../../../../src/app/const/faction.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Faction2IconUrlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Faction2IconUrlPipe = (function () {
    function Faction2IconUrlPipe() {
    }
    Faction2IconUrlPipe.prototype.transform = function (value, args) {
        var base = 'http://www.gwent-tracker.com/img/art/backs/';
        switch (value) {
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].MONSTER: return base + 'Monster.png';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].NILFGAARD: return base + 'Nilfgaard.png';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].NORTHERN_REALMS: return base + 'NorthernKingdom.png';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].SCOIATAEL: return base + 'Scoiatael.png';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].SKELLIGE: return base + 'Skellige.png';
            default: return 'assets/matrix.jpg';
        }
    };
    return Faction2IconUrlPipe;
}());
Faction2IconUrlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'faction2IconUrl'
    })
], Faction2IconUrlPipe);

//# sourceMappingURL=faction-2-icon-url.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/converter/faction-2-string.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__ = __webpack_require__("../../../../../src/app/const/faction.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Faction2StringPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Faction2StringPipe = (function () {
    function Faction2StringPipe() {
    }
    Faction2StringPipe.prototype.transform = function (value, args) {
        switch (value) {
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].MONSTER: return 'Monster';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].NILFGAARD: return 'Nilfgaard';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].NORTHERN_REALMS: return 'Northern Realms';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].SCOIATAEL: return 'Scoia\'tael';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_faction_enum__["a" /* Faction */].SKELLIGE: return 'Skellige';
            default: return value;
        }
    };
    return Faction2StringPipe;
}());
Faction2StringPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'faction2String'
    })
], Faction2StringPipe);

//# sourceMappingURL=faction-2-string.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/converter/game-mode.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_const_game_mode_enum__ = __webpack_require__("../../../../../src/app/const/game-mode.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameModePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GameModePipe = (function () {
    function GameModePipe() {
    }
    GameModePipe.prototype.transform = function (value, args) {
        switch (value) {
            case __WEBPACK_IMPORTED_MODULE_1_app_const_game_mode_enum__["a" /* GameMode */].RANKED: return 'Ranked';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_game_mode_enum__["a" /* GameMode */].CASUAL: return 'Casual';
            default: return value;
        }
    };
    return GameModePipe;
}());
GameModePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'gameMode'
    })
], GameModePipe);

//# sourceMappingURL=game-mode.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/converter/game-result.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_const_game_result_enum__ = __webpack_require__("../../../../../src/app/const/game-result.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameResultPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GameResultPipe = (function () {
    function GameResultPipe() {
    }
    GameResultPipe.prototype.transform = function (value, args) {
        switch (value) {
            case __WEBPACK_IMPORTED_MODULE_1_app_const_game_result_enum__["a" /* GameResult */].WIN: return 'Win';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_game_result_enum__["a" /* GameResult */].LOSS: return 'Loss';
            case __WEBPACK_IMPORTED_MODULE_1_app_const_game_result_enum__["a" /* GameResult */].DRAW: return 'Draw';
            default: return value;
        }
    };
    return GameResultPipe;
}());
GameResultPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'gameResult'
    })
], GameResultPipe);

//# sourceMappingURL=game-result.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/converter/leader-2-icon-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Leader2IconUrlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Leader2IconUrlPipe = (function () {
    function Leader2IconUrlPipe() {
    }
    Leader2IconUrlPipe.prototype.transform = function (value, args) {
        var base = 'http://www.gwent-tracker.com/img/art/';
        switch (value.toLocaleUpperCase()) {
            case 'BROUVER HOOG': return base + '20016700.png';
            case 'EITHNÉ': return base + '20016600.png';
            case 'FRANCESCA': return base + '20016500.png';
            case 'CRACH AN CRAITE': return base + '20016000.png';
            // case 'HARALD THE CRIPPLE': return base + '';
            case 'KING BRAN': return base + '20015900.png';
            case 'DAGON': return base + '20015800.png';
            case 'EREDIN': return base + '13110100.png';
            case 'UNSEEN ELDER': return base + '20005500.png';
            // case 'EMHYR VAR EMREIS': return base + '';
            case 'JOHN CALVEIT': return base + '20016400.png';
            case 'MORVRAN VOORHIS': return base + '20016300.png';
            case 'FOLTEST': return base + '20016800.png';
            case 'HENSELT': return base + '20017000.png';
            case 'RADOVID': return base + '20016900.png';
        }
        return 'assets/neo.jpg';
    };
    return Leader2IconUrlPipe;
}());
Leader2IconUrlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'leader2IconUrl'
    })
], Leader2IconUrlPipe);

//# sourceMappingURL=leader-2-icon-url.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/filter/filter-row/filter-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-row-icon {\n    color: #ab5858;\n    font-size: smaller;\n}\n\n.filter-row-selected {\n    text-decoration: underline;\n    color: #ecf5e2;\n}\n\n.filter-row-spacer {\n    padding-left: 16px;\n}\n\n.filter-row span {\n    cursor: pointer;\n    font-size: 13px;\n}\n\n.filter-row .filter-row-link:hover {\n    text-decoration: underline;\n}\n\n.filter-row {\n    cursor: pointer;\n}\n\n.filter-row div {\n    max-width: 120px;\n    overflow: hidden; \n    text-overflow: ellipsis; \n    white-space: nowrap; \n    word-wrap: normal; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter/filter-row/filter-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-row\">\n    <div class=\"filter-row-link\" [@state]=\"state\" [class.filter-row-selected]=\"selected\" (click)=\"clickHandler()\">{{caption}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/filter/filter-row/filter-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_filter_filter_event__ = __webpack_require__("../../../../../src/app/filter/filter.event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterRowComponent = (function () {
    function FilterRowComponent() {
        this._selected = false;
        this.diselectable = false;
        this.state = 'inactive';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    Object.defineProperty(FilterRowComponent.prototype, "selected", {
        get: function () { return this._selected; },
        set: function (val) {
            this._selected = val;
            if (val) {
                this.state = 'active';
            }
            else {
                this.state = 'inactive';
            }
        },
        enumerable: true,
        configurable: true
    });
    FilterRowComponent.prototype.ngOnInit = function () { };
    FilterRowComponent.prototype.clickHandler = function () {
        if (this.selected) {
            this.unselectHandler();
        }
        else {
            this.selectHandler();
        }
    };
    FilterRowComponent.prototype.selectHandler = function () {
        this.change.emit(new __WEBPACK_IMPORTED_MODULE_1_app_filter_filter_event__["a" /* FilterEvent */](__WEBPACK_IMPORTED_MODULE_1_app_filter_filter_event__["b" /* FilterActionEnum */].SELECTED, this.value));
    };
    FilterRowComponent.prototype.unselectHandler = function () {
        this.change.emit(new __WEBPACK_IMPORTED_MODULE_1_app_filter_filter_event__["a" /* FilterEvent */](__WEBPACK_IMPORTED_MODULE_1_app_filter_filter_event__["b" /* FilterActionEnum */].UNSELECTED, this.value));
    };
    return FilterRowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])('selected'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FilterRowComponent.prototype, "selected", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], FilterRowComponent.prototype, "caption", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], FilterRowComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], FilterRowComponent.prototype, "diselectable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], FilterRowComponent.prototype, "change", void 0);
FilterRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'gt-filter-row',
        template: __webpack_require__("../../../../../src/app/filter/filter-row/filter-row.component.html"),
        styles: [__webpack_require__("../../../../../src/app/filter/filter-row/filter-row.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('state', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    transform: 'translateX(0px)',
                    color: 'gray'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    transform: 'translateX(10px)'
                    // color: 'red'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('100ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], FilterRowComponent);

var _a;
//# sourceMappingURL=filter-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/filter/filter.event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilterActionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterEvent; });
var FilterActionEnum;
(function (FilterActionEnum) {
    FilterActionEnum[FilterActionEnum["SELECTED"] = 0] = "SELECTED";
    FilterActionEnum[FilterActionEnum["UNSELECTED"] = 1] = "UNSELECTED";
})(FilterActionEnum || (FilterActionEnum = {}));
var FilterEvent = (function () {
    function FilterEvent(action, value) {
        this.action = action;
        this.value = value;
    }
    return FilterEvent;
}());

//# sourceMappingURL=filter.event.js.map

/***/ }),

/***/ "../../../../../src/app/filter/filter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_filter_match_filter_match_filter_component__ = __webpack_require__("../../../../../src/app/filter/match-filter/match-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_filter_filter_row_filter_row_component__ = __webpack_require__("../../../../../src/app/filter/filter-row/filter-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_converter_converter_module__ = __webpack_require__("../../../../../src/app/converter/converter.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FilterModule = (function () {
    function FilterModule() {
    }
    return FilterModule;
}());
FilterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_converter_converter_module__["a" /* ConverterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2_app_filter_match_filter_match_filter_component__["a" /* MatchFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_3_app_filter_filter_row_filter_row_component__["a" /* FilterRowComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2_app_filter_match_filter_match_filter_component__["a" /* MatchFilterComponent */]
        ]
    })
], FilterModule);

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ "../../../../../src/app/filter/match-filter/match-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li > span {\n    color: #ab5858;\n    font-size: smaller;\n    cursor: pointer;\n}\n\n.filter-list {\n    padding-bottom: 15px;\n    min-width: 145px;\n}\n\n.filter-list-element {\n    padding-left: 10px;\n    padding-bottom: 1px;\n}\n\n.filter-row-unselected {\n    /*margin-left: 5px;*/\n    padding: 11px;\n    background-color: aliceblue;\n}\n\n.filter-row-unselected input {\n    width: 90px;\n}\n\n.datepicker__calendar {\n    background-color: red;\n    position: relative;\n}\n\n.datepicker {\n    width: 90px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter/match-filter/match-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"filter-list list-unstyled\">\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Any mode\" value=\"ANY\" [selected]=\"data.mode.length === 0\" (change)=\"setGameMode($event)\" [diselectable]=\"false\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Ranked\" [value]=\"GameMode.RANKED\" [selected]=\"data.mode.indexOf(GameMode.RANKED) != -1\" (change)=\"setGameMode($event)\"\n      [diselectable]=\"true\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Casual\" [value]=\"GameMode.CASUAL\" [selected]=\"data.mode.indexOf(GameMode.CASUAL) != -1\" (change)=\"setGameMode($event)\"\n      [diselectable]=\"true\"></gt-filter-row>\n  </li>\n</ul>\n\n\n\n<ul class=\"filter-list list-unstyled\">\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Any time\" value=\"ANY\" [selected]=\"data.time.mode === 'ANY'\" (change)=\"changeHandler($event)\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Last 24 hours\" [value]=\"FilterByTime.LAST_24_HOURS\" [selected]=\"data.time.mode === FilterByTime.LAST_24_HOURS\"\n      (change)=\"changeHandler($event)\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Last 7 days\" [value]=\"FilterByTime.LAST_7_DAYS\" [selected]=\"data.time.mode === FilterByTime.LAST_7_DAYS\"\n      (change)=\"changeHandler($event)\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Last 30 days\" [value]=\"FilterByTime.LAST_30_DAYS\" [selected]=\"data.time.mode === FilterByTime.LAST_30_DAYS\"\n      (change)=\"changeHandler($event)\"></gt-filter-row>\n  </li>\n  <!--<li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Custom\" value=\"{{FilterByTime.CUSTOM}}\" [selected]=\"data.time.mode === FilterByTime.CUSTOM\"\n      (change)=\"changeHandler($event)\"></gt-filter-row>\n    <div *ngIf=\"data.time.mode === FilterByTime.CUSTOM\" class=\"filter-row-unselected\">\n      From:<br/>\n      <material-datepicker dateFormat=\"YYYY-MM-DD\" [(date)]=\"data.time.from\" (onSelect)=\"dateFromChangedHandler()\"></material-datepicker>\n      <br/>\n      To:<br/>\n      <material-datepicker [(date)]=\"data.time.to\" (onSelect)=\"dateToChangedHandler()\"></material-datepicker>\n      <br/>\n    </div>\n  </li>-->\n</ul>\n\n\n\n<ul class=\"filter-list list-unstyled\">\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Any faction\" value=\"ANY\" [selected]=\"data.faction.length === 0\" (change)=\"setFactionHandler($event)\"\n      [diselectable]=\"false\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row [caption]=\"Faction.MONSTER | faction2String\" [value]=\"Faction.MONSTER\" [selected]=\"data.faction.indexOf(Faction.MONSTER) != -1\"\n      (change)=\"setFactionHandler($event)\" [diselectable]=\"true\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"{{Faction.NILFGAARD | faction2String }}\" [value]=\"Faction.NILFGAARD\" [selected]=\"data.faction.indexOf(Faction.NILFGAARD) != -1\"\n      (change)=\"setFactionHandler($event)\" [diselectable]=\"true\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row [caption]=\"Faction.NORTHERN_REALMS | faction2String\" [value]=\"Faction.NORTHERN_REALMS\" [selected]=\"data.faction.indexOf(Faction.NORTHERN_REALMS) != -1\"\n      (change)=\"setFactionHandler($event)\" [diselectable]=\"true\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"{{ Faction.SCOIATAEL | faction2String }}\" [value]=\"Faction.SCOIATAEL\" [selected]=\"data.faction.indexOf(Faction.SCOIATAEL) != -1\"\n      (change)=\"setFactionHandler($event)\" [diselectable]=\"true\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"{{Faction.SKELLIGE | faction2String }}\" [value]=\"Faction.SKELLIGE\" [selected]=\"data.faction.indexOf(Faction.SKELLIGE) != -1\"\n      (change)=\"setFactionHandler($event)\" [diselectable]=\"true\"></gt-filter-row>\n  </li>\n</ul>\n\n<ul class=\"filter-list list-unstyled\">\n  <li class=\"filter-list-element\">\n    <gt-filter-row caption=\"Any player\" value=\"ANY\" [selected]=\"data.playerId.length === 0\" (change)=\"setPlayerHandler($event)\"\n      [diselectable]=\"false\"></gt-filter-row>\n  </li>\n  <li class=\"filter-list-element\" *ngFor=\"let playerId of playerIds\">\n    <gt-filter-row caption=\"{{ playerId }}\" [value]=\"playerId\" [selected]=\"data.playerId.indexOf(playerId) != -1\" (change)=\"setPlayerHandler($event)\"\n      [diselectable]=\"true\"></gt-filter-row>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/filter/match-filter/match-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_filter_data_service__ = __webpack_require__("../../../../../src/app/service/filter-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__ = __webpack_require__("../../../../../src/app/model/filter-by-time.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_filter_filter_event__ = __webpack_require__("../../../../../src/app/filter/filter.event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_const_faction_enum__ = __webpack_require__("../../../../../src/app/const/faction.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_const_game_result_enum__ = __webpack_require__("../../../../../src/app/const/game-result.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_const_game_mode_enum__ = __webpack_require__("../../../../../src/app/const/game-mode.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_service_match_data_provider_service__ = __webpack_require__("../../../../../src/app/service/match-data-provider.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MatchFilterComponent = (function () {
    function MatchFilterComponent(filterService, matchDataProviderService) {
        this.filterService = filterService;
        this.matchDataProviderService = matchDataProviderService;
        // https://www.gurustop.net/blog/2016/05/24/how-to-use-typescript-enum-with-angular2/
        this.FilterByTime = __WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__["a" /* FilterByTime */];
        this.Faction = __WEBPACK_IMPORTED_MODULE_4_app_const_faction_enum__["a" /* Faction */];
        this.GameResult = __WEBPACK_IMPORTED_MODULE_5_app_const_game_result_enum__["a" /* GameResult */];
        this.GameMode = __WEBPACK_IMPORTED_MODULE_6_app_const_game_mode_enum__["a" /* GameMode */];
    }
    MatchFilterComponent.prototype.ngOnInit = function () {
        this.data = this.filterService.filterData;
        this.playerIds = this.matchDataProviderService.getPlayerIds();
    };
    MatchFilterComponent.prototype.editorClosed = function (value) {
        var filterVal = Number.parseInt(value);
        this.filterService.setTime(filterVal);
    };
    MatchFilterComponent.prototype.changeHandler = function (event) {
        if (event.action === __WEBPACK_IMPORTED_MODULE_3_app_filter_filter_event__["b" /* FilterActionEnum */].SELECTED) {
            var filterVal = Number.parseInt(event.value);
            this.filterService.setTime(filterVal);
        }
        else {
            this.filterService.setTime('ANY');
        }
    };
    MatchFilterComponent.prototype.setGameMode = function (event) {
        if (event.value === 'ANY') {
            this.filterService.clearGameMode();
        }
        else {
            var mode = Number.parseInt(event.value);
            if (event.action === __WEBPACK_IMPORTED_MODULE_3_app_filter_filter_event__["b" /* FilterActionEnum */].SELECTED) {
                this.filterService.addGameMode(mode);
            }
            else {
                this.filterService.removeGameMode(mode);
            }
        }
    };
    MatchFilterComponent.prototype.setFactionHandler = function (event) {
        if (event.value === 'ANY') {
            this.filterService.clearFactions();
        }
        else {
            var filterVal = Number.parseInt(event.value);
            if (event.action === __WEBPACK_IMPORTED_MODULE_3_app_filter_filter_event__["b" /* FilterActionEnum */].SELECTED) {
                this.filterService.addFaction(filterVal);
            }
            else {
                this.filterService.removeFaction(filterVal);
            }
        }
    };
    MatchFilterComponent.prototype.setPlayerHandler = function (event) {
        if (event.value === 'ANY') {
            this.filterService.clearPlayers();
        }
        else {
            if (event.action === __WEBPACK_IMPORTED_MODULE_3_app_filter_filter_event__["b" /* FilterActionEnum */].SELECTED) {
                this.filterService.addPlayer(event.value);
            }
            else {
                this.filterService.removePlayer(event.value);
            }
        }
    };
    MatchFilterComponent.prototype.dateFromChangedHandler = function () {
        this.filterService.setTime(__WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__["a" /* FilterByTime */].CUSTOM, this.data.time.from);
    };
    MatchFilterComponent.prototype.dateToChangedHandler = function () {
        this.filterService.setTime(__WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__["a" /* FilterByTime */].CUSTOM, null, this.data.time.to);
    };
    return MatchFilterComponent;
}());
MatchFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'gt-match-filter',
        template: __webpack_require__("../../../../../src/app/filter/match-filter/match-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/filter/match-filter/match-filter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_filter_data_service__["a" /* FilterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_filter_data_service__["a" /* FilterDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_app_service_match_data_provider_service__["a" /* MatchDataProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_service_match_data_provider_service__["a" /* MatchDataProviderService */]) === "function" && _b || Object])
], MatchFilterComponent);

var _a, _b;
//# sourceMappingURL=match-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/helper/date-time.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_const_const__ = __webpack_require__("../../../../../src/app/const/const.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeHelper; });

var DateTimeHelper = (function () {
    function DateTimeHelper() {
    }
    DateTimeHelper.nowPlusHours = function (hours) {
        var result = new Date();
        result.setHours(result.getHours() + hours);
        DateTimeHelper.normalizeFullHours(result);
        return result;
    };
    DateTimeHelper.nowPlusDays = function (days) {
        return DateTimeHelper.plusDays(new Date(), days);
    };
    DateTimeHelper.plusDays = function (baseDate, days) {
        var result = new Date(baseDate.getTime());
        result.setDate(result.getDate() + days);
        DateTimeHelper.normalizeFullDays(result);
        return result;
    };
    DateTimeHelper.normalizeFullHours = function (date) {
        if (date === null) {
            return;
        }
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    };
    DateTimeHelper.normalizeFullDays = function (date) {
        if (date === null) {
            return;
        }
        DateTimeHelper.normalizeFullHours(date);
        date.setHours(0);
    };
    DateTimeHelper.date2StringAgo = function (value) {
        if (!(value instanceof Date)) {
            throw new Error("Typeof: " + typeof value + " expected 'Date'");
        }
        var delta = Math.floor((Date.now() - value.getTime()) / 1000);
        if (delta < 0 || delta > 7 * __WEBPACK_IMPORTED_MODULE_0_app_const_const__["a" /* secPerDay */]) {
            return value.getDate() + " " + this.month2short(value.getMonth()) + " " + value.getFullYear();
        }
        else if (delta === 0 || delta === 1) {
            return "1 second ago";
        }
        else if (delta < __WEBPACK_IMPORTED_MODULE_0_app_const_const__["b" /* secPerMinute */]) {
            return delta + " seconds ago";
        }
        else if (delta < 2 * __WEBPACK_IMPORTED_MODULE_0_app_const_const__["b" /* secPerMinute */]) {
            return "1 minute ago";
        }
        else if (delta < __WEBPACK_IMPORTED_MODULE_0_app_const_const__["c" /* secPerHour */]) {
            return Math.floor(delta / 60) + " minutes ago";
        }
        else if (delta < 2 * __WEBPACK_IMPORTED_MODULE_0_app_const_const__["c" /* secPerHour */]) {
            return "1 hour ago";
        }
        else if (delta < __WEBPACK_IMPORTED_MODULE_0_app_const_const__["a" /* secPerDay */]) {
            return Math.floor(delta / 3600) + " hours ago";
        }
        else if (delta < 2 * __WEBPACK_IMPORTED_MODULE_0_app_const_const__["a" /* secPerDay */]) {
            return "1 day ago";
        }
        else if (delta < 7 * __WEBPACK_IMPORTED_MODULE_0_app_const_const__["a" /* secPerDay */]) {
            return Math.floor(delta / (3600 * 24)) + " day ago";
        }
        else {
            return value.getDate() + " " + this.month2short(value.getMonth()) + " " + value.getFullYear();
        }
    };
    DateTimeHelper.month2short = function (month) {
        return this.months[month];
    };
    return DateTimeHelper;
}());

DateTimeHelper.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//# sourceMappingURL=date-time.helper.js.map

/***/ }),

/***/ "../../../../../src/app/helper/ffilter.builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__ = __webpack_require__("../../../../../src/app/model/filter-by-time.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__ = __webpack_require__("../../../../../src/app/helper/date-time.helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FFilterBuilder; });


var FFilterBuilder = (function () {
    function FFilterBuilder() {
    }
    FFilterBuilder.byMode = function (mode) {
        return function (gameRecord) {
            if (mode.length === 0 || mode.indexOf(gameRecord.mode) !== -1) {
                return true;
            }
            else {
                return false;
            }
        };
    };
    FFilterBuilder.byTime = function (filterData) {
        return function (gameRecord) {
            if (filterData.mode === 'ANY') {
                return true;
            }
            else if (filterData.mode === __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__["a" /* FilterByTime */].LAST_24_HOURS
                && gameRecord.timestamp.getTime() >= __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].nowPlusHours(-24).getTime()) {
                return true;
            }
            else if (filterData.mode === __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__["a" /* FilterByTime */].LAST_7_DAYS
                && gameRecord.timestamp.getTime() >= __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].nowPlusDays(-7).getTime()) {
                return true;
            }
            else if (filterData.mode === __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__["a" /* FilterByTime */].LAST_30_DAYS
                && gameRecord.timestamp.getTime() >= __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].nowPlusDays(-30).getTime()) {
                return true;
            }
            else if (filterData.mode === __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__["a" /* FilterByTime */].CUSTOM) {
                return true;
                // TODO
            }
            return false;
        };
    };
    FFilterBuilder.byFaction = function (factions) {
        return function (gameRecord) {
            if (factions.length === 0) {
                return true;
            }
            else {
                return factions.indexOf(gameRecord.playersDeckMeta.faction) !== -1;
            }
        };
    };
    FFilterBuilder.byPlayerId = function (playerId) {
        return function (gameRecord) {
            if (playerId.length === 0) {
                return true;
            }
            else {
                return playerId.indexOf(gameRecord.player.name) !== -1;
            }
        };
    };
    return FFilterBuilder;
}());

//# sourceMappingURL=ffilter.builder.js.map

/***/ }),

/***/ "../../../../../src/app/helper/query-param.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__ = __webpack_require__("../../../../../src/app/model/filter-by-time.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryParamHelper; });

var QueryParamHelper = (function () {
    function QueryParamHelper() {
    }
    QueryParamHelper.build = function (page, filterData) {
        var result = {};
        result['page'] = page;
        if (filterData.mode.length !== 0) {
            result['filter.mode'] = JSON.stringify(filterData.mode);
        }
        if (filterData.time.mode !== 'ANY') {
            result['filter.time'] = filterData.time.mode;
            if (filterData.time.mode === __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__["a" /* FilterByTime */].CUSTOM) {
                result['filter.time.from'] = filterData.time.from.toLocaleDateString();
                result['filter.time.to'] = filterData.time.to.toLocaleDateString();
            }
        }
        if (filterData.faction.length !== 0) {
            result['filter.faction'] = JSON.stringify(filterData.faction);
        }
        if (filterData.playerId.length !== 0) {
            result['filter.playerId'] = JSON.stringify(filterData.playerId);
        }
        return result;
    };
    QueryParamHelper.parseFilter = function (paramMap, filterData) {
        this.parseMode(paramMap, filterData);
        this.parseTime(paramMap, filterData);
        this.parseFaction(paramMap, filterData);
        this.parsePlayerId(paramMap, filterData);
    };
    QueryParamHelper.parseMode = function (paramMap, filterData) {
        filterData.mode = filterData.mode || [];
        try {
            if (paramMap.has('filter.mode')) {
                var filter_mode = JSON.parse(paramMap.get('filter.mode'));
                if (filter_mode instanceof Array) {
                    filterData.mode = filter_mode.map(function (el) { return Number.parseInt(el); });
                    return;
                }
            }
            filterData.mode.length = 0;
        }
        catch (error) { }
        filterData.mode.length = 0;
    };
    QueryParamHelper.parseTime = function (paramMap, filterData) {
        try {
            filterData.time = filterData.time || { mode: 'ANY' };
            if (paramMap.has('filter.time')) {
                filterData.time.mode = Number.parseInt(paramMap.get('filter.time'));
            }
            if (filterData.time.mode === __WEBPACK_IMPORTED_MODULE_0_app_model_filter_by_time_enum__["a" /* FilterByTime */].CUSTOM) {
                if (paramMap.has('filter.time.from')) {
                    filterData.time.from = new Date(paramMap.get('filter.time.from'));
                }
                if (paramMap.has('filter.time.to')) {
                    filterData.time.to = new Date(paramMap.get('filter.time.to'));
                }
            }
        }
        catch (error) {
            filterData.time.mode = 'ANY';
            filterData.time.from = undefined;
            filterData.time.to = undefined;
        }
    };
    QueryParamHelper.parseFaction = function (paramMap, filterData) {
        try {
            filterData.faction = filterData.faction || [];
            if (paramMap.has('filter.faction')) {
                var filter_faction = JSON.parse(paramMap.get('filter.faction'));
                if (filter_faction instanceof Array) {
                    filterData.faction = filter_faction.map(function (el) { return Number.parseInt(el); });
                    return;
                }
            }
        }
        catch (error) { }
        filterData.faction.length = 0;
    };
    QueryParamHelper.parsePlayerId = function (paramMap, filterData) {
        try {
            filterData.playerId = filterData.playerId || [];
            if (paramMap.has('filter.playerId')) {
                var filter_playerId = JSON.parse(paramMap.get('filter.playerId'));
                if (filter_playerId instanceof Array) {
                    filterData.playerId = filter_playerId;
                    return;
                }
            }
        }
        catch (error) { }
        filterData.playerId.length = 0;
    };
    return QueryParamHelper;
}());

//# sourceMappingURL=query-param.helper.js.map

/***/ }),

/***/ "../../../../../src/app/helper/url-matcher.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlMatcherHeler; });
var UrlMatcherHeler = (function () {
    function UrlMatcherHeler() {
    }
    UrlMatcherHeler.matchPage = function (segments, matchWith) {
        return segments.length >= 1
            && ((segments[0].parameterMap.has('page') && segments[0].parameterMap.get('page') === matchWith)
                || (window.location.toString().indexOf("?page=" + matchWith) !== -1));
    };
    return UrlMatcherHeler;
}());

//# sourceMappingURL=url-matcher.helper.js.map

/***/ }),

/***/ "../../../../../src/app/match-history/match-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n    border: 0px;\n}\n\n.faction {\n    height: 35px;\n    position: relative;\n    /*top: -2px;*/\n    margin-top: 3px;\n    display: inline-block;\n    margin-left: 3px;\n    margin-right: 3px;\n    border: 1px solid #7b7575;\n}\n\n.result-win-border {\n    border-left: #66e631;\n    border-left-width: 10px;\n    border-left-style: solid;\n}\n\n.result-loss-border {\n    border-left: #f75a5a;\n    border-left-width: 10px;\n    border-left-style: solid;\n}\n\n.result-draw-border {\n    border-left: #f7d660;\n    border-left-width: 10px;\n    border-left-style: solid;\n}\n\ntd {\n    background-color: #444444;\n    border: 0px solid #7b7575;\n    border-bottom: 4px solid #333333;\n    border-top: 4px solid #333333 !important;\n    vertical-align: middle !important;\n}\n\ntable {\n    border-collapse: collapse;\n}\n\n.playersCol {\n    max-width: 400px;\n    display: -ms-inline-grid;\n    display: inline-grid;\n    vertical-align: bottom;\n}\n\n.playersCol div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/match-history/match-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"entries\">\n\n    {{allMatches.length}} matches.\n    <table class=\"table\">\n        <tr *ngFor=\"let match of matches\">\n            <td>\n                {{ match.mode | gameMode }}\n            </td>\n            <td>{{ match.result | gameResult }}</td>\n            <td>\n                <div style=\" width:95px; \">{{ match.timestamp | date2StringAgo }}</div>\n            </td>\n\n            <td>\n                <img class=\"faction right \" [src]=\"match.playersDeckMeta.faction | faction2IconUrl \" />\n                <img class=\"faction right \" [src]=\"match.playersDeckMeta.leader | leader2IconUrl \" />\n                <div class=\"playersCol \">\n                    <div>{{ match.player.name }}</div>\n                    <small>{{ match.player.mmr }}</small>\n                </div>\n            </td>\n\n            <td>\n                <img class=\"faction right \" [src]=\"match.opponentsDeckMeta.faction | faction2IconUrl \" />\n                <img class=\"faction right \" [src]=\"match.opponentsDeckMeta.leader | leader2IconUrl \" />\n                <div class=\"playersCol \">\n                    <div>{{ match.opponent.name }}</div>\n                    <small>{{ match.opponent.mmr }}</small>\n                </div>\n            </td>\n        </tr>\n    </table>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/match-history/match-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_filter_service__ = __webpack_require__("../../../../../src/app/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_helper_query_param_helper__ = __webpack_require__("../../../../../src/app/helper/query-param.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_filter_data_service__ = __webpack_require__("../../../../../src/app/service/filter-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchHistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchHistoryComponent = (function () {
    function MatchHistoryComponent(filterService, filterDataService, route) {
        var _this = this;
        this.filterService = filterService;
        this.filterDataService = filterDataService;
        this.route = route;
        this.allMatches = [];
        this.matches = [];
        this.loaded_pages = 1;
        this.records_per_page = 15;
        this.matchSubscription = filterService.matchSubject
            .subscribe(function (value) {
            _this.allMatches = value;
            _this.loaded_pages = 1;
            _this.partialViewUpdate();
        });
    }
    MatchHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allMatches = this.filterService.matches;
        this.partialViewUpdate();
        this.route.queryParamMap
            .subscribe(function (value) {
            __WEBPACK_IMPORTED_MODULE_3_app_helper_query_param_helper__["a" /* QueryParamHelper */].parseFilter(value, _this.filterDataService.filterData);
            _this.filterService.applyFilter(_this.filterDataService.filterData);
        });
    };
    MatchHistoryComponent.prototype.ngOnDestroy = function () {
        this.matchSubscription.unsubscribe();
    };
    MatchHistoryComponent.prototype.partialViewUpdate = function () {
        this.matches = this.allMatches.slice(0, this.records_per_page * this.loaded_pages);
    };
    MatchHistoryComponent.prototype.onScrollEvent = function ($event) {
        var height = document.body.offsetHeight;
        if (window.pageYOffset >= height - screen.availHeight) {
            this.loaded_pages++;
            this.partialViewUpdate();
        }
    };
    return MatchHistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MatchHistoryComponent.prototype, "onScrollEvent", null);
MatchHistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'gt-match-history',
        template: __webpack_require__("../../../../../src/app/match-history/match-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/match-history/match-history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_service_filter_service__["a" /* FilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_service_filter_service__["a" /* FilterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_filter_data_service__["a" /* FilterDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_filter_data_service__["a" /* FilterDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], MatchHistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=match-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/filter-by-time.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByTime; });
var FilterByTime;
(function (FilterByTime) {
    FilterByTime[FilterByTime["LAST_24_HOURS"] = 0] = "LAST_24_HOURS";
    FilterByTime[FilterByTime["LAST_7_DAYS"] = 1] = "LAST_7_DAYS";
    FilterByTime[FilterByTime["LAST_30_DAYS"] = 2] = "LAST_30_DAYS";
    FilterByTime[FilterByTime["CUSTOM"] = 3] = "CUSTOM";
})(FilterByTime || (FilterByTime = {}));
//# sourceMappingURL=filter-by-time.enum.js.map

/***/ }),

/***/ "../../../../../src/app/route/route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_match_history_match_history_component__ = __webpack_require__("../../../../../src/app/match-history/match-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_helper_url_matcher_helper__ = __webpack_require__("../../../../../src/app/helper/url-matcher.helper.ts");
/* unused harmony export historyUrlMatcher */
/* unused harmony export historyFixer */
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




function historyUrlMatcher(segments, group, route) {
    if (__WEBPACK_IMPORTED_MODULE_3_app_helper_url_matcher_helper__["a" /* UrlMatcherHeler */].matchPage(segments, 'history')) {
        return { consumed: segments };
    }
    else {
        return null;
    }
}
function historyFixer(segments, group, route) {
    if (window.location.href.indexOf('?page=') === -1) {
        window.location.href = window.location.href + '?page=history';
    }
    return null;
}
var appRoutes = [
    { matcher: historyUrlMatcher, component: __WEBPACK_IMPORTED_MODULE_2_app_match_history_match_history_component__["a" /* MatchHistoryComponent */] },
    { matcher: historyFixer, component: __WEBPACK_IMPORTED_MODULE_2_app_match_history_match_history_component__["a" /* MatchHistoryComponent */] }
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RouteModule);

//# sourceMappingURL=route.module.js.map

/***/ }),

/***/ "../../../../../src/app/service/filter-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__ = __webpack_require__("../../../../../src/app/helper/date-time.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__ = __webpack_require__("../../../../../src/app/model/filter-by-time.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_filter_service__ = __webpack_require__("../../../../../src/app/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_helper_query_param_helper__ = __webpack_require__("../../../../../src/app/helper/query-param.helper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilterDataService = (function () {
    function FilterDataService(filterService, router, route) {
        this.filterService = filterService;
        this.router = router;
        this.route = route;
        this.filterData = {
            mode: [],
            time: { mode: 'ANY' },
            faction: [],
            playerId: []
        };
    }
    // ***************************************
    // Filter by Time
    // ***************************************
    FilterDataService.prototype.setTime = function (mode, from, to) {
        this.filterData.time.mode = mode;
        this.filterData.time.from = null;
        this.filterData.time.to = null;
        switch (mode) {
            case __WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__["a" /* FilterByTime */].LAST_24_HOURS: break;
            case __WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__["a" /* FilterByTime */].LAST_7_DAYS: break;
            case __WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__["a" /* FilterByTime */].LAST_30_DAYS: break;
            case __WEBPACK_IMPORTED_MODULE_2_app_model_filter_by_time_enum__["a" /* FilterByTime */].CUSTOM:
                {
                    this.filterData.time.to = to || this.filterData.time.to || new Date();
                    this.filterData.time.from = from || this.filterData.time.from || __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].nowPlusDays(-7);
                    if (this.filterData.time.to.getTime() < this.filterData.time.from.getTime()) {
                        this.filterData.time.from = __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].plusDays(this.filterData.time.to, -7);
                    }
                    __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].normalizeFullDays(this.filterData.time.from);
                    __WEBPACK_IMPORTED_MODULE_1_app_helper_date_time_helper__["a" /* DateTimeHelper */].normalizeFullDays(this.filterData.time.to);
                }
                ;
                break;
            default: this.filterData.time.mode = 'ANY';
        }
        this.applyFilter();
    };
    // ***************************************
    // Filter by Game mode
    // ***************************************
    FilterDataService.prototype.addGameMode = function (mode) {
        this.filterData.mode.push(mode);
        this.applyFilter();
    };
    FilterDataService.prototype.removeGameMode = function (mode) {
        var index = this.filterData.mode.indexOf(mode);
        while (index !== -1) {
            this.filterData.mode.splice(index, 1);
            index = this.filterData.mode.indexOf(mode);
        }
        this.applyFilter();
    };
    FilterDataService.prototype.clearGameMode = function () {
        this.filterData.mode.length = 0;
        this.applyFilter();
    };
    // ***************************************
    // Filter by Faction
    // ***************************************
    FilterDataService.prototype.addFaction = function (faction) {
        this.filterData.faction.push(faction);
        this.applyFilter();
    };
    FilterDataService.prototype.removeFaction = function (faction) {
        var index = this.filterData.faction.indexOf(faction);
        while (index !== -1) {
            this.filterData.faction.splice(index, 1);
            index = this.filterData.faction.indexOf(faction);
        }
        this.applyFilter();
    };
    FilterDataService.prototype.clearFactions = function () {
        this.filterData.faction.length = 0;
        this.applyFilter();
    };
    // ***************************************
    // Filter by Player
    // ***************************************
    FilterDataService.prototype.addPlayer = function (playerId) {
        this.filterData.playerId.push(playerId);
        this.applyFilter();
    };
    FilterDataService.prototype.removePlayer = function (playerId) {
        var index = this.filterData.playerId.indexOf(playerId);
        while (index !== -1) {
            this.filterData.playerId.splice(index, 1);
            index = this.filterData.playerId.indexOf(playerId);
        }
        this.applyFilter();
    };
    FilterDataService.prototype.clearPlayers = function () {
        this.filterData.playerId.length = 0;
        this.applyFilter();
    };
    // ***************************************
    // private
    // ***************************************
    FilterDataService.prototype.applyFilter = function () {
        this.router.navigate(['index.html'], {
            queryParams: __WEBPACK_IMPORTED_MODULE_5_app_helper_query_param_helper__["a" /* QueryParamHelper */].build('history', this.filterData)
        });
    };
    return FilterDataService;
}());
FilterDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_filter_service__["a" /* FilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_filter_service__["a" /* FilterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], FilterDataService);

var _a, _b, _c;
//# sourceMappingURL=filter-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_helper_ffilter_builder__ = __webpack_require__("../../../../../src/app/helper/ffilter.builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_match_data_provider_service__ = __webpack_require__("../../../../../src/app/service/match-data-provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterService = (function () {
    function FilterService(matchService) {
        this.matchService = matchService;
        this.matches = [];
        this.matchSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.currentFilterData = null;
    }
    FilterService.prototype.applyFilter = function (filter) {
        this.currentFilterData = filter;
        var fFilters = this.buildFFilters(filter);
        this.doFilterMatches(fFilters);
    };
    FilterService.prototype.buildFFilters = function (filter) {
        var result = [];
        result.push(__WEBPACK_IMPORTED_MODULE_1_app_helper_ffilter_builder__["a" /* FFilterBuilder */].byMode(filter.mode));
        result.push(__WEBPACK_IMPORTED_MODULE_1_app_helper_ffilter_builder__["a" /* FFilterBuilder */].byTime(filter.time));
        result.push(__WEBPACK_IMPORTED_MODULE_1_app_helper_ffilter_builder__["a" /* FFilterBuilder */].byFaction(filter.faction));
        result.push(__WEBPACK_IMPORTED_MODULE_1_app_helper_ffilter_builder__["a" /* FFilterBuilder */].byPlayerId(filter.playerId));
        return result;
    };
    FilterService.prototype.doFilterMatches = function (fFilters) {
        var matches = this.matchService.getAllMatches()
            .filter(function (game) {
            for (var _i = 0, _a = fFilters || []; _i < _a.length; _i++) {
                var fFilter = _a[_i];
                if (!fFilter(game)) {
                    return false;
                }
            }
            return true;
        })
            .sort(function (a, b) {
            return b.timestamp.getTime() - a.timestamp.getTime();
        });
        this.matchSubject.next(matches);
        this.matches = matches;
    };
    return FilterService;
}());
FilterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_match_data_provider_service__["a" /* MatchDataProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_match_data_provider_service__["a" /* MatchDataProviderService */]) === "function" && _a || Object])
], FilterService);

var _a;
//# sourceMappingURL=filter.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/match-data-provider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDataProviderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchDataProviderService = (function () {
    function MatchDataProviderService() {
    }
    MatchDataProviderService.prototype.getAllMatches = function () {
        return window['MATCHES'];
    };
    MatchDataProviderService.prototype.getPlayerIds = function () {
        return this.getAllMatches()
            .map(function (record) { return record.player.name; })
            .filter(function (name, index, arr) { return arr.indexOf(name) === index; });
    };
    return MatchDataProviderService;
}());
MatchDataProviderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MatchDataProviderService);

//# sourceMappingURL=match-data-provider.service.js.map

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