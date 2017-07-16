import React from 'react'

class Tile extends React.Component{

  handleTileClick(event){
    this.props.onClick(event, this.props.value)
  }

  // Note here that 'symbol' can be any name and refers to the 
  // symbol defined in render of Board.js. It is the 'X' or 'O'
  // in the tile

  render(){
    console.log(this.props.value)
    return(
      <div className="tile"
        onClick={this.handleTileClick.bind(this)}
        >
        <p>{this.props.symbol}</p>
      </div>
    )
  }

}

export default Tile
