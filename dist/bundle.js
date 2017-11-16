/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["updateAnimations"] = updateAnimations;
/* harmony export (immutable) */ __webpack_exports__["update"] = update;
/* harmony export (immutable) */ __webpack_exports__["start"] = start;
/* harmony export (immutable) */ __webpack_exports__["resetField"] = resetField;
/* harmony export (immutable) */ __webpack_exports__["ClickHandler"] = ClickHandler;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controler__ = __webpack_require__(2);






const counterField = document.getElementById("counter");
var context = __WEBPACK_IMPORTED_MODULE_1__controler__["a" /* grid */].getContext('2d');

function updateAnimations() {
  for (let h = 0; h < __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].height; h++) {
    for (let w = 0; w < __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].width; w++) {
      if (__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].grid[h][w] === __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].aсtive_live) {
        context.fillStyle = "#000";
      } else {
        context.fillStyle = "#8dcc7f";
      }
      context.fillRect(w * __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_cell + 1, h * __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_cell + 1, __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_cell - 1, __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_cell - 1);
    }
  }
  counterField.innerHTML = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].counter;
}

function update() {
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].updateState();
  updateAnimations();
}

function start() {

  if (__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].state == __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].stop) {
    __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].interval = setInterval(() => {
      update();
    }, __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].delay);
    __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].state = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].run;
  } else {
    clearInterval(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].interval);
    __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].state = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].stop;
  }
}

function resetField() {
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].grid = Object(__WEBPACK_IMPORTED_MODULE_0__model__["b" /* arr */])(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].height, __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].width, 0);
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].counter = 0;
  clearInterval(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].interval);
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].state = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].stop;
  updateAnimations();
}

/**
 * Mark the playing field
 */
for (let x = 0; x <= __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_x; x += __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_cell) {
  context.moveTo(0.5 + x, 0);
  context.lineTo(0.5 + x, __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_y);
}
for (let y = 0; y <= __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_y; y += __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_cell) {
  context.moveTo(0, 0.5 + y);
  context.lineTo(__WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].size_x, 0.5 + y);
}
context.strokeStyle = "#254111";
context.stroke();

function ClickHandler(event) {
  const cell = Object(__WEBPACK_IMPORTED_MODULE_0__model__["c" /* getCursorPosition */])(event);
  const state = __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].grid[cell.row][cell.column] == __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].aсtive_live ? __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].dead : __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].aсtive_live;
  __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Life */].grid[cell.row][cell.column] = state;
  updateAnimations();
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return arr; });
/* harmony export (immutable) */ __webpack_exports__["c"] = getCursorPosition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controler__ = __webpack_require__(2);




/**
 * Game Matrix
 */
let arr = Array.matrix = (m, n) => {
  let a;
  let b;
  let i;
  const mat = [];
  for (i = 0; i < m; i += 1) {
    a = [];
    for (b = 0; b < n; b += 1) {
      a[b] = 0;
    }
    mat[i] = a;
  }
  return mat;
};

/**
 * Game Logic
 */
class Life {

  static updateState() {
    let neighbours;
    const nextGenerationGrid = arr(Life.height, Life.width, 0);

    for (let h = 0; h < Life.height; h++) {
      for (let w = 0; w < Life.width; w++) {
        neighbours = Life.calculateNeighbours(h, w);
        if (Life.grid[h][w] !== Life.dead) {
          if (neighbours >= Life.minimum && neighbours <= Life.maximum) {
            nextGenerationGrid[h][w] = Life.aсtive_live;
            console.log(Life.aсtive_live);
          }
        } else {
          if (neighbours === Life.spawn) {
            nextGenerationGrid[h][w] = Life.aсtive_live;
          }
        }
      }
    }
    Life.copyGrid(nextGenerationGrid, Life.grid);
    Life.counter++;
  }

  static calculateNeighbours(y, x) {
    let total = Life.grid[y][x] !== Life.dead ? -1 : 0;
    for (let h = -1; h <= 1; h++) {
      for (let w = -1; w <= 1; w++) {
        if (Life.grid[(Life.height + (y + h)) % Life.height][(Life.width + (x + w)) % Life.width] !== Life.dead) {
          total++;
        }
      }
    }
    return total;
  }

  static copyGrid(source, destination) {
    for (let h = 0; h < Life.height; h++) {
      destination[h] = source[h].slice(0);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Life;


Life.size_y = 400;
Life.size_y = 400;
Life.size_cell = 20;
Life.size_x = 400;
Life.width = Life.size_x / Life.size_cell;
Life.height = Life.size_y / Life.size_cell;
Life.dead = 0;
Life.aсtive_live = 1;
Life.minimum = 2;
Life.maximum = 3;
Life.stop = 0;
Life.run = 1;
Life.spawn = 3;
Life.delay = 300;
Life.grid = arr(Life.height, Life.width, 0);
Life.counter = 0;
Life.state = Life.stop;
Life.interval = null;

class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }
}
/* unused harmony export Cell */


function getCursorPosition({ pageX, pageY, clientX, clientY }) {
  let x;
  let y;
  if (pageX || pageY) {
    x = pageX;
    y = pageY;
  } else {
    x = clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  x -= __WEBPACK_IMPORTED_MODULE_0__controler__["a" /* grid */].offsetLeft;
  y -= __WEBPACK_IMPORTED_MODULE_0__controler__["a" /* grid */].offsetTop;

  const cell = new Cell(Math.floor((y - 4) / Life.size_cell), Math.floor((x - 2) / Life.size_cell));
  return cell;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);




const grid = document.getElementById('grid');
/* harmony export (immutable) */ __webpack_exports__["a"] = grid;

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

grid.addEventListener("click", __WEBPACK_IMPORTED_MODULE_0__index__["ClickHandler"], false);

/**
 * Control button
 */
startBtn.onclick = () => {
  Object(__WEBPACK_IMPORTED_MODULE_0__index__["start"])();
};

resetBtn.onclick = () => {
  Object(__WEBPACK_IMPORTED_MODULE_0__index__["resetField"])();
};

/***/ })
/******/ ]);