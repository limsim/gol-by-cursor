# Game of Life with TypeScript

## Table of Contents
- [What is it? 🤔](#what-is-it-)
- [How does it work? 🎮](#how-does-it-work-)
- [The Magic Part! ✨](#the-magic-part-)
- [How to Play 🎮](#how-to-play-)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Commands](#available-commands)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Future Improvements 🚀](#future-improvements-)

## What is it? 🤔

Imagine you have a big grid of squares, like a checkerboard. Each square can either be:
- Empty (😴)
- Or have a tiny creature living in it (😊)

## How does it work? 🎮

The tiny creatures follow three simple rules:

1. **Lonely creatures disappear** 😢
   - If a creature has less than 2 friends nearby, it gets lonely and goes away

2. **Happy creatures stay** 😊
   - If a creature has 2 or 3 friends nearby, it's happy and stays

3. **Crowded creatures leave** 😫
   - If a creature has more than 3 friends nearby, it gets too crowded and goes away

## The Magic Part! ✨

Empty squares can get new creatures too! If an empty square has exactly 3 creature neighbors, a new creature appears there - like magic! 🪄

## How to Play 🎮

1. **Access the Game**
   - After running `npm run dev`, your browser will automatically open to `http://localhost:9000`
   - If it doesn't open automatically, manually navigate to `http://localhost:9000`

2. **Game Controls**
   - **Start**: Click the "Start" button to begin the simulation
   - **Stop**: Click the "Stop" button to pause the simulation
   - **Clear**: Click the "Clear" button to reset the grid
   - **Randomize**: Click the "Randomize" button to create a random pattern

3. **Creating Patterns**
   - Click any cell on the grid to toggle it between alive (green) and dead (white)
   - You can create patterns while the simulation is running or stopped
   - Try creating some classic patterns:
     - **Blinker**: Three cells in a row
     - **Glider**: A pattern that moves diagonally across the grid
     - **Block**: Four cells in a 2x2 square

4. **Tips**
   - Start with simple patterns to understand how the rules work
   - Use the "Stop" button to pause and modify your pattern
   - Try the "Randomize" button to see how complex patterns evolve

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/game-of-life.git
cd game-of-life
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

For development (with hot reload):
```bash
npm run dev
```

This will start the development server at `http://localhost:9000`

For production build:
```bash
npm run build
```

## Project Structure
```
game-of-life/
├── public/                   # Static files
│   └── index.html           # Main HTML file
├── src/                     # Source code
│   ├── types/               # TypeScript type definitions
│   │   └��─ index.ts
│   ├── components/          # UI components
│   │   └── GameBoard.ts
│   ├── utils/              # Helper functions
│   │   └── gameLogic.ts
│   ├── styles.css          # Global styles
│   └── index.ts            # Entry point
├── dist/                    # Compiled output
├── webpack.config.js        # Webpack configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Available Commands

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm run build` - Build for production

## Technologies Used

- TypeScript
- Webpack
- CSS
- HTML5

## License

MIT License - feel free to use this code for your own projects!

## Future Improvements 🚀

Here's what we're planning to add:

- [ ] Code Quality
  - [ ] Add ESLint for code linting
  - [ ] Set up Prettier for consistent code formatting
  - [ ] Implement TypeScript strict mode

- [ ] Testing
  - [ ] Set up Jest testing framework
  - [ ] Add unit tests for game logic
  - [ ] Add integration tests for UI components

- [ ] CI/CD
  - [ ] Set up GitHub Actions
  - [ ] Add automated testing on push
  - [ ] Add automated deployment

- [ ] Features
  - [ ] Add preset patterns (glider, blinker, etc.)
  - [ ] Add grid size controls
  - [ ] Add simulation speed control
  - [ ] Add pattern saving/loading

Feel free to contribute to any of these improvements!