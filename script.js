// @process
// we need to start with the process of best moves.
// function findBestMove(board):
//     bestMove = NULL
//     for each move in board :
//         if current move is better than bestMove
//             bestMove = current move
//     return bestMove


// function minimax(board, depth, isMaximizingPlayer):
//
//     if current board state is a terminal state :
//         return value of the board
//

// Min max algorithm to see 
//     if isMaximizingPlayer :
//         bestVal = -INFINITY
//         for each move in board :
//             value = minimax(board, depth+1, false)
//             bestVal = max( bestVal, value)
//         return bestVal
//
//     else :
//         bestVal = +INFINITY
//         for each move in board :
//             value = minimax(board, depth+1, true)
//             bestVal = min( bestVal, value)
//         return bestVal
// @ checking for game over!!!
// function isMovesLeft(board):
//     for each cell in board:
//         if current cell is empty:
//             return true
//     return false

var origBoard;
const huPlayer = "O";
const aiPlayer = "X";
const winCombos =[
  [0,1,2],
  [3,4,5],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
]
const cells= document.querySelectorAll(".cell");
startGame();
function startGame(){
  document.querySelector(".endgame").style.display="none";
  origBoard = Array.from(Array(9).keys());
  console.log(">>> i am orig",origBoard);
  for ( var i =0; i < cells.length; i++){
    cells[i].innerText="";
    cells[i].style.removeProperty("background-Color");
    cells[i].addEventListener("click", turnClick, false);

  }
}
function turnClick(square){
  if(typeof origBoard[square.target.id] == "number"){
    turn(square.target.id,huPlayer);
    if(!checkTie())turn(bestSpot(),aiPlayer);
    }
  }


function turn(squareId, player){
   origBoard[squareId] = player;
   document.getElementById(squareId).innerText = player;
   let gameWon = checkWin(origBoard, player)
   if(gameWon) gameOver(gameWon);
}
function checkWin(board, player){
  let plays = board.reduce((a, e, i) =>
  (e === player) ? a.concat(i) : a, [])
let gameWon = null;
for (let [index, win] of winCombos.entries()){
  if(win.every(elem => plays.indexOf(elem) > -1)){
    gameWon = {index: index, player: player};
    break;
  }
}
return gameWon;
}

function gameOver(gameWon){
  for( let index of winCombos[gameWon.index]){
    document.getElementById(index).style.backgroundColor =
    gameWon.player == huPlayer ? "blue " : "red";
  }
  for (var i =0; i < cells.length; i++){
    cells[i].removeEventListener("click", turnClick, false);
  }
  declareWiner(gameWon.player === huPlayer ? "You Win!" : "you lose!")
}
function declareWiner(who){
  document.querySelector(".endgame").style.display ="block"
    document.querySelector(".endgame .text").innerText = who;
}

function emptySquares(){
  return origBoard.filter(s => typeof s == "number");
}


function bestSpot(){
  return minmax(origBoard, aiPlayer).index;
}
function checkTie(){
  if(emptySquares().length == 0){
    for (var i =0; i < cells.length; i++){
      cells[i].style.backgroundColor = "green";
      cells[i].removeEventListener("click", turnClick, false);
    }
    declareWiner("Tie Game!")
    return true;
  }
  return false;
}



function minmax(newBoard, player){
  var availSpots = emptySquares(newBoard);
  if (checkWin(newBoard, player)){
    return{score: -10};
  } else if (checkWin(newBoard, aiPlayer)){
    return {score: 10};
  } else if (availSpots.length === 0){
    return {score: 0};
  }
  var moves = [];
  for ( var i = 0; i < availSpots.length ; i++){
    var move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if(player == aiPlayer) {
      var result = minmax(newBoard, huPlayer);
      move.score = result.score;
    }else {
      var result = minmax(newBoard, aiPlayer);
      move.score = result.score;
    }
    newBoard[availSpots[i]] = move.index;
    moves.push(move);
  }
  var bestMove;
  if(player === aiPlayer){
    var besScore =  -1000;
    for ( var i = 0; i < moves.length; i++){
      if(moves[i].score > besScore){
      bestScore = moves[i].score;
      bestMove = i;
      }
    }
  } else {
    var besScore =  1000;
    for ( var i =0; i < moves.length; i++){
      if(moves[i].score < besScore){
      bestScore = moves[i].score;
      bestMove = i;
      }
    }
  }
return moves[bestMove];
}
