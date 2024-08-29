import React from 'react'
import RevealedTile from './RevealedTile'
import HiddenTile from './HiddenTile'

export default function Tile({cell, rowIndex, colIndex, handleCellClick, handleRightClick}) {
    if(cell.isRevealed) {
        return <RevealedTile cell={cell} rowIndex={rowIndex} colIndex={colIndex} handleCellClick={handleCellClick} handleRightClick={handleRightClick}/>
    }
    else {
        return <HiddenTile cell={cell} rowIndex={rowIndex} colIndex={colIndex} handleCellClick={handleCellClick} handleRightClick={handleRightClick}/>
    }
}
