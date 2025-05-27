# Knight Travails ♟️

This project is a solution to The Odin Project's "Knight Travails" problem, implemented in JavaScript. It leverages graph traversal algorithms (specifically Breadth-First Search - BFS) to find the shortest possible path a knight can take to get from one square on a chessboard to another.

## The Odin Project Assignment 📚
This project fulfills the requirements of The Odin Project's "Knight Travails" assignment, which focuses on:

**Graph Data Structures**: Understanding and representing a graph (the chessboard and knight's moves).
**Breadth-First Search (BFS)**: Implementing BFS to find the shortest path in an unweighted graph.
**Problem Solving**: Breaking down a complex problem into manageable parts.
**Modular Code**: Organizing code into well-defined functions and modules.

## Features
- **Finds Shortest Path**: Efficiently determines the minimum number of moves for a knight.
- **Path Visualization**: Outputs the complete path taken by the knight, from start to end.
- **Valid Move Generation**: Correctly identifies all possible legal moves from any given square on an 8x8 chessboard.
- **Boundary Checking**: Ensures the knight stays within the 8x8 board limits.

## How It Works
The core of this project is the application of the Breadth-First Search (BFS) algorithm.

- Edges (Knight's Moves): An edge exists between two squares if a knight can move directly from one to the other in a single turn.
- BFS Algorithm:
- Starting from the start square, BFS explores all reachable squares one "move" at a time, layer by layer.
- It keeps track of visited squares to avoid infinite loops and redundant calculations.
- When the end square is reached, the algorithm reconstructs the shortest path by backtracking from the end square to the start square using "parent" pointers stored during the traversal.

## Installation and Setup
To run this project locally, you'll need Node.js installed on your machine.

Clone the repository:

```bash
git clone https://github.com/JohnKelly-T/knight-travails.git
```

Navigate to the project directory:

``` bash
cd knight-travails
```

Run the driver script which contains a call to the knightMoves() function

```bash
node index.js
```

Example: 
``` js
knightTravails([0,0], [3,3]);
// Expected Output:
// You made it in 2 moves! Here's your path:
// [0,0]
// [1,2]
// [3,3]
```
