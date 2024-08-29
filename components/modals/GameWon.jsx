import React from 'react';
import Link from 'next/link';
import { FaTrophy } from "react-icons/fa";

export default function GameWon({time}) {
    return (
        <div className='fixed flex items-center justify-center top-0 left-0 z-50 backdrop-blur-sm w-full h-full'>
            <div className='bg-white bg-opacity-80 text-white flex flex-col items-center p-10 rounded-xl w-5/6 max-w-lg'>
                <FaTrophy className="text-8xl text-yellow-500 mb-4" />
                <span className='text-5xl font-bold text-green-500 mb-6'>You Won!</span>
                <p className="text-xl text-center mb-6 text-black">You&apos;ve successfully navigated the minefield in just {time} seconds!</p>
                <div className="flex justify-evenly w-full">
                    <button onClick={()=>window.location.reload()} className='text-xl px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-green-700 cursor-pointer'>Play Again</button>
                    <Link href="/" className='text-xl px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-blue-700'>Go Home</Link>
                </div>
            </div>
        </div>
    );
}
