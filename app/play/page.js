"use client"

import React, { useState, useEffect } from 'react';
import Game from '@/components/game/Game';
import Restart from '@/components/buttons/Restart';

export default function Play() {
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="p-2 flex-col gap-4 flex items-center max-w-[800px] w-11/12">
      <div className='flex w-full bg-white bg-opacity-5 font-medium text-xl backdrop-blur-sm rounded-lg py-2 px-2'>
        <div className='bg-white bg-opacity-5 px-3 py-2 rounded-md'>Difficulty</div>
        <div className='flex-1 text-center px-3 py-2'>{formatTime(time)}</div>
        <div className='flex'>
          <Restart />
        </div>
      </div>
      <div className='flex w-full'>
        <Game time={time} startTimer = {startTimer} stopTimer = {stopTimer}/>
      </div>
    </div>
  );
}
