import { Libre_Barcode_128 } from 'next/font/google';
import React from 'react'
import { PiDotDuotone } from "react-icons/pi";
import { IoMdFlag } from "react-icons/io";


export default function HiddenTile({cell, rowIndex, colIndex, handleCellClick, handleRightClick}) {
    return (
        <span
            key={colIndex}
            className="min-w-3 cursor-pointer bg-white bg-opacity-35 text-2xl rounded-lg backdrop-blur-sm aspect-square flex items-center justify-center flex-1 text-center"
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
        >
            {cell.isFlagged ? <IoMdFlag/> : <PiDotDuotone/>}
        </span>
    )
}
