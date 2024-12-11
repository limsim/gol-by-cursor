// src/utils/gameLogic.ts
import { GameOfLife, GameState, Grid, Cell } from '../types';

export class GameOfLifeImpl implements GameOfLife {
  private state: GameState;

  constructor(size: number = 30) {
    this.state = {
      grid: this.createGrid(size),
      isRunning: false,
    };
  }

  private createGrid(size: number): Grid {
    const cells: Cell[][] = Array(size).fill(null).map(() =>
      Array(size).fill(null).map(() => ({ isAlive: false }))
    );
    return { cells, size };
  }

  private countNeighbors(row: number, col: number): number {
    let count = 0;
    const { cells, size } = this.state.grid;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newRow = row + i;
        const newCol = col + j;
        if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
          count += cells[newRow][newCol].isAlive ? 1 : 0;
        }
      }
    }
    return count;
  }

  getState(): GameState {
    return this.state;
  }

  toggleCell(row: number, col: number): void {
    this.state.grid.cells[row][col].isAlive = !this.state.grid.cells[row][col].isAlive;
  }

  nextGeneration(): void {
    const { cells, size } = this.state.grid;
    const newCells = cells.map(row => row.map(cell => ({ ...cell })));

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const neighbors = this.countNeighbors(i, j);
        const currentCell = cells[i][j];

        if (currentCell.isAlive) {
          newCells[i][j].isAlive = neighbors === 2 || neighbors === 3;
        } else {
          newCells[i][j].isAlive = neighbors === 3;
        }
      }
    }

    this.state.grid.cells = newCells;
  }

  clear(): void {
    this.state.grid = this.createGrid(this.state.grid.size);
  }

  randomize(): void {
    const { cells, size } = this.state.grid;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        cells[i][j].isAlive = Math.random() > 0.7;
      }
    }
  }

  start(): void {
    this.state.isRunning = true;
  }

  stop(): void {
    this.state.isRunning = false;
  }
}