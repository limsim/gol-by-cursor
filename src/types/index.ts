export interface Cell {
  isAlive: boolean;
}

export interface Grid {
  cells: Cell[][];
  size: number;
}

export interface GameState {
  grid: Grid;
  isRunning: boolean;
}

export interface GameOfLife {
  getState: () => GameState;
  toggleCell: (row: number, col: number) => void;
  nextGeneration: () => void;
  clear: () => void;
  randomize: () => void;
  start: () => void;
  stop: () => void;
}
