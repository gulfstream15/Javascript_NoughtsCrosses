var grid = [ "X","","O","","","O","","","O" ]
var winningMoves = [ [ 0,1,2 ], [ 3,4,5 ], [ 6,7,8 ], [ 0,3,6 ], [ 1,4,7 ], [ 2,5,8 ], [ 0,4,8 ], [ 2,4,6 ] ]


export const something = function(grid, winningMoves){
  for (var i = 0; i < winningMoves.length; i++) {
    var counterX = 0;
    var counterO = 0;
    for (var j = 0; j < 3; j++) {
      if (grid[winningMoves[i][j]] == 'X' ) {
        counterX++;
        if (counterX === 3 ){
          return "X"
        }
      } else if (grid[winningMoves[i][j]] == 'O'){
        counterO++;
        if (counterO === 3 ){
          return "O"
        }
      }
    }
  }
}

something()
