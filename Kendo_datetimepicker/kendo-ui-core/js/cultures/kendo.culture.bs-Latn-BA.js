module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	module.exports = __webpack_require__(48);


/***/ },

/***/ 48:
/***/ function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["bs-Latn-BA"] = {
	        name: "bs-Latn-BA",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Convertible Marks",
	                abbr: "BAM",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "KM"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"],
	                    namesAbbr: ["ned","pon","uto","sri","čet","pet","sub"],
	                    namesShort: ["ne","po","ut","sr","če","pe","su"]
	                },
	                months: {
	                    names: ["januar","februar","mart","april","maj","juni","juli","august","septembar","oktobar","novembar","decembar"],
	                    namesAbbr: ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "d.M.yyyy",
	                    D: "d. MMMM yyyy",
	                    F: "d. MMMM yyyy H:mm:ss",
	                    g: "d.M.yyyy H:mm",
	                    G: "d.M.yyyy H:mm:ss",
	                    m: "dd. MMMM",
	                    M: "dd. MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
	                },
	                "/": ".",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ }

/******/ });