"use client"
import React, { useState, useEffect } from 'react';
import { Board } from '../../util/board';
import Tile from '../tiles/Tile';
import GameLost from '../modals/GameLost';
import GameWon from '../modals/GameWon';
import { IoIosConstruct } from "react-icons/io";


export default function Game({ time, startTimer, stopTimer, cols, rows, mines }) {
  const [board, setBoard] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);

  useEffect(() => {
    console.log("starting game");
    console.log(window.innerWidth)
    let cols, rows, mines;
    if (window.innerWidth < 500) {
      cols = 8;
      rows = 10;
      mines = 12;
    }
    else {
      cols = 14;
      rows = 10;
      mines = 21;
    }
    const newBoard = new Board(rows, cols, mines);
    setBoard(() => newBoard);
  }, []);

  const renderBoard = () => {
    if (!board) return null;
    return board.grid.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-2">
        {row.map((cell, colIndex) => (
          <Tile key={colIndex} cell={cell} rowIndex={rowIndex} colIndex={colIndex} handleCellClick={handleCellClick} handleRightClick={handleRightClick} />
        ))}
      </div>
    ));
  };

  const handleCellClick = (row, col) => {
    if (!board) return;
    const updatedBoard = new Board(board.rows, board.cols, board.mines);
    updatedBoard.grid = board.grid.map(row => [...row]);
    updatedBoard.revealCell(row, col);
    setBoard(updatedBoard);
    if (!isRunning && !updatedBoard.isLost && !updatedBoard.isWon) {
      setIsRunning(true);
      console.log("Timer begin")
      startTimer();
    }
    if (updatedBoard.isLost || updatedBoard.isWon) {
      console.log("Timer stop")
      setIsRunning(false);
      stopTimer();
      updatedBoard.isLost ? setIsLost(true) : setIsWon(true)
    }
  };

  const handleRightClick = (e, row, col) => {
    e.preventDefault();
    if (!board) return;
    const updatedBoard = new Board(board.rows, board.cols, board.mines);
    updatedBoard.grid = board.grid.map(row => [...row]);
    updatedBoard.toggleFlag(row, col);
    setBoard(updatedBoard);
  };


  return (
    <div className="text-white pb-[20%] flex flex-col gap-2 flex-1 w-full">
      {board && renderBoard()}
      {isLost && <GameLost />}
      {isWon && <GameWon time={time} />}
      {!board && <div className='w-full h-[65vh] flex gap-4 flex-col items-center justify-center'><IoIosConstruct className='text-8xl '/><p className='text-center font-medium'>Building Minefield...</p></div>}
    </div>
  );
};