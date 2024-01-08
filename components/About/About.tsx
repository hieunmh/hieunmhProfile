'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      className='flex flex-col relative h-screen text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img src='/japithehe.jpg' 
        initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 1 }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover 
          rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]'
      />

      <div className='w-full space-y-10  md:pl-10'>
        <h4 className='text-3xl font-semibold'>
          Here a little background with {' '}
          <Link href='https://www.facebook.com/uet.clbtiengnhat' 
          target='_blank' className='underline decoration-[#5c9ead] text-[#5c9ead]'>
            JAPIT
          </Link> &#60;3
        </h4>
        <p></p>
      </div>
      
    </motion.div>
  )
}
