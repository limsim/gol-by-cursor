import { GameOfLifeImpl } from './utils/gameLogic';
import { GameBoard } from './components/GameBoard';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const game = new GameOfLifeImpl(30);
  new GameBoard('app', game);
});
