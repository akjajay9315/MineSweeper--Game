import React from 'react'
import Link from 'next/link'

import { IoPlay } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import { VscDebug } from "react-icons/vsc";
import { MdAutoAwesomeMosaic } from "react-icons/md";




export default function Navbar() {
  return (
    <div className="max-w-[800px] w-11/12 bg-white font-medium bg-opacity-5 backdrop-blur-sm flex justify-between gap-2 p-2 rounded-lg fixed bottom-5">
        <Link href="/play" className="flex-1 text-4xl bg-white bg-opacity-5 px-3 flex items-center justify-center rounded-lg hover:bg-opacity-10 sm:hidden">
            <IoPlay/>
        </Link>
        <Link href="/play" className="flex-1 text-xl bg-white bg-opacity-5 px-3 items-center justify-center rounded-lg hover:bg-opacity-10 hidden sm:flex">
            Play
        </Link>
        <Link href="/leaderboard" className="flex-1 text-4xl bg-white bg-opacity-5 px-3 flex items-center justify-center rounded-lg py-3 hover:bg-opacity-10 sm:hidden">
            <MdLeaderboard/>
        </Link>
        <Link href="/leaderboard" className="flex-1 text-xl bg-white bg-opacity-5 px-3  items-center justify-center rounded-lg py-3 hover:bg-opacity-10 hidden sm:flex">
            Leaderboard
        </Link>
        <Link href="/stuff" className="flex-1 text-4xl bg-white bg-opacity-5 px-3 flex items-center justify-center rounded-lg py-3 hover:bg-opacity-10 sm:hidden">
            <VscDebug/>
        </Link>
        <Link href="/stuff" className="flex-1 text-xl bg-white bg-opacity-5 px-3  items-center justify-center rounded-lg py-3 hover:bg-opacity-10 hidden sm:flex">
            Debug
        </Link>
        </div>
  )
}
