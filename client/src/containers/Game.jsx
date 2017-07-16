import React from 'react'
import Board from '../components/Board'

class Game extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      grid: [ "","","","","","","","","" ],
      winningMoves: [ [ 0,1,2 ], [ 3,4,5 ], [ 6,7,8 ], [ 0,3,6 ], [ 1,4,7 ], [ 2,5,8 ], [ 0,4,8 ], [ 2,4,6 ] ],
      activePlayer: "X",
      winner: ""
    }
    // this.togglePlayer = this.togglePlayer.bind(this)
    this.tileClicked = this.tileClicked.bind(this)
    this.checkForWin = this.checkForWin.bind(this)
  }

  tileClicked(event, value){
    const data = this.state.grid
    data[value] = this.state.activePlayer
    this.setState({ grid: data })
    this.togglePlayer()
    this.checkForWin(this.state.grid, this.state.winningMoves)
  }

  togglePlayer(){
    this.state.activePlayer === "X" ? this.state.activePlayer = "O" : this.state.activePlayer = "X"
  }

  checkForWin(grid, winningMoves){
    for (var i = 0; i < winningMoves.length; i++) {
      var counterX = 0;
      var counterO = 0;
      for (var j = 0; j < 3; j++) {
        if (grid[winningMoves[i][j]] == 'X' ) {
          counterX++;
          if (counterX === 3 ){
            this.state.winner = "X"
          }
        } else if (grid[winningMoves[i][j]] == 'O'){
          counterO++;
          if (counterO === 3 ){
            this.state.winner = "O"
          }
        }
      }
    }
  }

  render(){
    return(
      <div>
        <Board grid={ this.state.grid } winner={this.state.winner} tileClicked={this.tileClicked.bind(this)} playerMove={ this.state.playerMove } />
      </div>
    )
  }
}

export default Game
