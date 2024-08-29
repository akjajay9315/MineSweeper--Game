"use client"
import React from 'react'

export default function Restart() {
  return (
    <div onClick={()=> window.location.reload()} className='bg-white cursor-pointer bg-opacity-5 px-3 py-2 rounded-md hover:bg-opacity-10'>Restart</div>
  )
}
