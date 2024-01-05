import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircle() {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='border border-[#333333] rounded-full h-[200px] w-[200px] absolute mt-52 animate-ping'/>
      <div className='border border-[#333333] rounded-full h-[300px] w-[300px] absolute mt-52'/>
      <div className='border border-[#333333] rounded-full h-[500px] w-[500px] absolute mt-52'/>
      <div className='border border-[#f7ab0a] rounded-full h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
      <div className='border border-[#333333] rounded-full h-[800px] w-[800px] absolute mt-52'/>
    </div>
  )
}
