# Game of Life with the help of Cursor

Hi there! Let's learn about a super fun game called "The Game of Life"!

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

## How to Watch It 👀

1. Start with any pattern you like
2. Watch as the creatures follow these simple rules
3. See how your pattern changes and moves
4. It's like a tiny world that changes all by itself!

Isn't it amazing how such simple rules can create such fun patterns? 🌈


## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository and navigate to the project directory
```bash
git clone https://github.com/your-username/game-of-life-with-cursor.git

cd game-of-life-with-cursor
```

2. Install dependencies
```bash
npm install
```

## Project Structure
gol-with-cursor/
├── src/                      # Main source code directory
│   ├── types/               # TypeScript type definitions and interfaces
│   │   └── index.ts         # Central export point for all types
│   ├── utils/               # Helper functions and utilities
│   │   └── index.ts         # Central export point for utilities
│   ├── __tests__/           # Test files directory
│   │   └── index.test.ts    # Initial test file
│   └── index.ts             # Main application entry point
│
├── dist/                     # Compiled JavaScript output (generated after build)
│
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript compiler configuration
├── .eslintrc               # ESLint configuration for code linting
├── .prettierrc             # Prettier configuration for code formatting
├── .gitignore              # Specifies which files Git should ignore
└── README.md               # Project documentation

## Running the Application

For development (with hot reload):
```bash
npm run dev
```

For production:
```bash
npm run build
npm run start
```

## Running Tests

Execute the test suite:
```bash
npm run test
```


## Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project
- `npm start` - Run the built project
- `npm test` - Run tests
- `npm run lint` - Check for linting issues
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier

## License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.