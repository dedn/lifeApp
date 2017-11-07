'use strict'

export let arr = Array.matrix = (m, n) => {
  let a;
  let i;
  let j;
  const mat = [];
  for (i = 0; i < m; i += 1) {
    a = [];
    for (j = 0; j < n; j += 1) {
      a[j] = 0;
    }
    mat[i] = a;
  }
  return mat;
};

export class Life {

  static  updateState() {
    let neighbours;
    const nextGenerationGrid = arr(Life.height, Life.width, 0);

    for (let h = 0; h < Life.height; h++) {
      for (let w = 0; w < Life.width; w++) {
        neighbours = Life.calculateNeighbours(h, w);
        if (Life.grid[h][w] !== Life.dead) {
          if ((neighbours >= Life.minimum) && (neighbours <= Life.maximum)) {
            nextGenerationGrid[h][w] = Life.aсtive_live;
            console.log(Life.aсtive_live)
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
    let total = (Life.grid[y][x] !== Life.dead) ? -1 : 0;
    for (let h = -1; h <= 1; h++) {
      for (let w = -1; w <= 1; w++) {
        if (Life.grid[(Life.height + (y + h)) % Life.height][(Life.width + (x + w)) % Life.width] !== Life.dead) {
          total++;
        }
      }
    }
    return total;
  };

  static copyGrid(source, destination) {
    for (let h = 0; h < Life.height; h++) {
      destination[h] = source[h].slice(0);
    }
  };
}

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

export class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }
}