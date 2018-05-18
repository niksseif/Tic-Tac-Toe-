# Tic-Tac-Toe
###Here is the link to the game,    http://safe-shoe.surge.sh/
### Rules:

To begin, let's start by defining what it means to play a perfect game of tic tac toe:
##The logic of the game:
Tic Tac toe is a two player game. Players alternate turns.
The objective of Tic Tac Toe is to get three in a row. You play on a three by three game board. The first player is known as "X"(The human player) and the second is "O"(The Ai). Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled.
If I play perfectly, every time I play I will either win the game, or I will draw the game. Furthermore if I play against another perfect player, I will always draw the game.

How might we describe these situations quantitatively? Let's assign a score to the "end game conditions:"

* I win, hurray! I get 10 points!
* I lose, shit. I lose 10 points (because the other player gets 10 points)
* I draw, whatever. I get zero points, nobody gets any points.

If Ai wins the grid turn to red color.
If player wins the grid turn to blue color.

### So now we have a situation where we can determine a possible score for any game end state.
<img width="365" alt="screen shot 2018-05-17 at 11 23 39 am" src="https://user-images.githubusercontent.com/24830759/40232415-83adb40a-5a53-11e8-8f23-822d3d58be41.png">


Top image shows the state of the game which we can determine the wining of the two players. 
### E = (X's winning possibility - O's winning possibility);
In the image I see when is my turn, then I have some choices to make, there are three places I can play, one of which clearly results in me wining and earning the 10 points. If I don't make that move, X could very easily win. And I don't want X to win, so my goal here, as the first player, should be to pick the maximum scoring move.
X is also playing to win, but relative to O, X wants to chose the move that results in the worst score for O. It wants to pick a move to minimize our ultimate score.

