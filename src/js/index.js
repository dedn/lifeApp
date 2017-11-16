'use strict'

import {Life, arr} from "./model";
import {grid} from "./controler";
import {getCursorPosition} from "./model";

const counterField = document.getElementById("counter");
var context = grid.getContext('2d');

export function updateAnimations() {
  for (let h = 0; h < Life.height; h++) {
    for (let w = 0; w < Life.width; w++) {
      if (Life.grid[h][w] === Life.aсtive_live) {
        context.fillStyle = "#000";
      } else {
        context.fillStyle = "#8dcc7f";
      }
      context.fillRect(
        w * Life.size_cell + 1,
        h * Life.size_cell + 1,
        Life.size_cell - 1,
        Life.size_cell - 1);
    }
  }
  counterField.innerHTML = Life.counter;
}

export function update() {
  Life.updateState();
  updateAnimations();
}


export function start() {

  if (Life.state == Life.stop) {
    Life.interval = setInterval(() => {
      update();
    }, Life.delay);
    Life.state = Life.run;
  }
  else {
    clearInterval(Life.interval);
    Life.state = Life.stop;
  }
}

export function resetField() {
  Life.grid = arr(Life.height, Life.width, 0);
  Life.counter = 0;
  clearInterval(Life.interval);
  Life.state = Life.stop;
  updateAnimations();
}

/**
 * Mark the playing field
 */
for (let x = 0; x <= Life.size_x; x += Life.size_cell) {
  context.moveTo(0.5 + x, 0);
  context.lineTo(0.5 + x, Life.size_y);
}
for (let y = 0; y <= Life.size_y; y += Life.size_cell) {
  context.moveTo(0, 0.5 + y);
  context.lineTo(Life.size_x, 0.5 + y);
}
context.strokeStyle = "#254111";
context.stroke();

export function ClickHandler(event) {
  const cell = getCursorPosition(event);
  const state = Life.grid[cell.row][cell.column] == Life.aсtive_live ? Life.dead : Life.aсtive_live;
  Life.grid[cell.row][cell.column] = state;
  updateAnimations();
}




