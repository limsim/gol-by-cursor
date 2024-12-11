import { GameOfLife } from '../types';

export class GameBoard {
  private game: GameOfLife;
  private container: HTMLElement;
  private intervalId: number | null = null;

  constructor(containerId: string, game: GameOfLife) {
    const container = document.getElementById(containerId);
    if (!container) throw new Error(`Container with id ${containerId} not found`);
    
    this.container = container;
    this.game = game;
    this.initialize();
  }

  private initialize(): void {
    this.createControls();
    this.createGrid();
    this.render();
  }

  private createControls(): void {
    const controls = document.createElement('div');
    controls.className = 'controls';

    const buttons = [
      { text: 'Start', onClick: () => this.start() },
      { text: 'Stop', onClick: () => this.stop() },
      { text: 'Clear', onClick: () => this.clear() },
      { text: 'Randomize', onClick: () => this.randomize() },
    ];

    buttons.forEach(({ text, onClick }) => {
      const button = document.createElement('button');
      button.textContent = text;
      button.onclick = onClick;
      controls.appendChild(button);
    });

    this.container.appendChild(controls);
  }

  private createGrid(): void {
    const gridElement = document.createElement('div');
    gridElement.className = 'grid';
    const { grid } = this.game.getState();

    for (let i = 0; i < grid.size; i++) {
      const row = document.createElement('div');
      row.className = 'row';

      for (let j = 0; j < grid.size; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.onclick = () => this.handleCellClick(i, j);
        row.appendChild(cell);
      }

      gridElement.appendChild(row);
    }

    this.container.appendChild(gridElement);
  }

  private render(): void {
    const { grid } = this.game.getState();
    const rows = this.container.getElementsByClassName('row');

    for (let i = 0; i < grid.size; i++) {
      const cells = rows[i].getElementsByClassName('cell');
      for (let j = 0; j < grid.size; j++) {
        cells[j].className = `cell${grid.cells[i][j].isAlive ? ' alive' : ''}`;
      }
    }
  }

  private handleCellClick(row: number, col: number): void {
    this.game.toggleCell(row, col);
    this.render();
  }

  private start(): void {
    if (!this.intervalId) {
      this.game.start();
      this.intervalId = window.setInterval(() => {
        this.game.nextGeneration();
        this.render();
      }, 100);
    }
  }

  private stop(): void {
    if (this.intervalId) {
      this.game.stop();
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private clear(): void {
    this.stop();
    this.game.clear();
    this.render();
  }

  private randomize(): void {
    this.stop();
    this.game.randomize();
    this.render();
  }
}
