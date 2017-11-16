'use strict'
import {start, resetField, ClickHandler} from "./index";

export const grid = document.getElementById('grid');
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

grid.addEventListener("click", ClickHandler, false);

/**
 * Control button
 */
startBtn.onclick = () => {
  start();
};

resetBtn.onclick = () => {
  resetField();
};