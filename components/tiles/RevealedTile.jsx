import React from 'react';
import { FaBomb } from "react-icons/fa";

export default function RevealedTile({ cell, rowIndex, colIndex, handleCellClick, handleRightClick }) {
    const colourArray = ["#ffffff", "#caffbf", "#9bf6ff", "#ffd6a5", "#ffadad", "#ffc6ff", "#bdb2ff", "#a0c4ff", "#fdffb6"];
    const bombColor = "#000000";

    let textColor = "white";
    if (cell.isMine) {
        textColor = bombColor;
    } else {
        textColor = colourArray[cell.adjacentMines];
    }

    return (
        <span
            key={colIndex}
            className={`min-w-3 text-xl select-none rounded-lg backdrop-blur-md aspect-square flex items-center justify-center flex-1 text-center bg-opacity-5`} // Concatenate class name with color
            style={{ color: textColor, background: `${colourArray[cell.adjacentMines]}1A`}}
        >
            {cell.isMine ? <FaBomb /> : cell.adjacentMines ? cell.adjacentMines : ' '}
        </span>
    )
}
