import React from 'react';
import Link from 'next/link';
import { FaSkull } from "react-icons/fa";
import { GiSurprisedSkull } from "react-icons/gi";

export default function GameLost() {
    return (
        <div className='fixed flex items-center justify-center top-0 left-0 z-50 backdrop-blur-sm w-full h-full'>
            <div className='bg-black bg-opacity-70 text-white flex flex-col items-center p-10 rounded-xl w-5/6 max-w-lg'>
                <GiSurprisedSkull className="text-8xl mb-4" />
                <span className='text-5xl font-bold text-red-500 mb-6'>Game Over</span>
                <p className="text-xl text-center mb-6">You&apos;ve stumbled into a deadly trap!</p>
                <div className="flex justify-evenly w-full">
                    <button onClick={()=>window.location.reload()} className='text-xl px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-blue-700 cursor-pointer'>Try Again</button>
                    <Link href="/" className='text-xl px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-red-700'>Go Home</Link>
                </div>
            </div>
        </div>
    );
}
