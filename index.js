import { Queue } from "./modules/queue.js"
import { Square } from "./modules/square.js";

function knightMoves(start, end) {
  let queue = new Queue();

  // list to check visited squares
  let visited = [];

  // add start to queue
  let startNode = new Square( [ start[0], start[1] ] )
  queue.enqueue( startNode );

  let endNode = null;

  // search for end square, continually expanding nodes and adding to queue
  search: while ( !queue.isEmpty() ) {
    let node = queue.dequeue();
    let validMoves = getValidMoves(node.coords[0], node.coords[1]);

    for (let move of validMoves) {
      if (move[0] === end[0] && move[1] === end[1]) {
        endNode = new Square([move[0], move[1]], node);
        break search;
      }

      if ( visited.includes(move[0] * 8 + move[1]) ) continue;

      // create node and add to queue, setting the current node as parent
      let newSquare = new Square([move[0], move[1]], node);
      queue.enqueue(newSquare);

      // add move to visited 
      visited.push(move[0] * 8 + move[1]);
    }
  }

  // get path
  let path = [];
  let curr = endNode;
  while ( curr !== null) {
    path.push([curr.coords[0], curr.coords[1]]);
    curr = curr.parent;
  }

  return path.reverse();
}

function getValidMoves(x, y) {
  let validMoves = [];

  let moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ]

  for (let move of moves) {
    if ( (x + move[0] > 0) && (x + move[0] <= 7) && (y + move[1] > 0) && (y + move[1] <=7) ) {
      validMoves.push([x + move[0], y + move[1]]);
    }
  }

  return validMoves;
}

console.log(getValidMoves(3, 3));

console.log(knightMoves([3,3],[4,3]));