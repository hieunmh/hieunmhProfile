import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='w-full h-fit bg-[#363636]/10 flex flex-col text-gray-500 space-y-2'>
      <div className='w-full flex items-center justify-center mt-2'>
        <div className='font-extrabold text-xl sm:text-2xl'>
          <p>Nguyen Minh Hieu's <span className='text-[#5c9ead]'>Portfolio</span></p>
        </div>
      </div>

      <div className='w-full flex items-center justify-center font-semibold text-xs sm:text-lg'>
        <FaRegCopyright />
        <p className='ml-2'>2023 - 2024 All rights reserved | Build by Nguyen Minh Hieu</p>
      </div>
    </div>
  )
}
