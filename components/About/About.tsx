'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} 
      className='flex flex-col relative h-screen text-center
      max-w-7xl px-10 justify-center space-y-5 mx-auto items-center'
    >
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      {/* <motion.img src='/japitmember.jpg' alt='japit member'
        initial={{ x: -500, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className='flex-shrink-0 w-80 sm:w-[500px] object-cover 
        rounded-lg md:w-[700px] xl:w-[900px] transiton duration-500 grayscale-[1] hover:grayscale-0'
      /> */}
      
      <Image src='/japitmember.jpg' alt='japit member' width={1000} height={1000} 
        className='flex-shrink-0 w-80 sm:w-[500px] object-cover 
        rounded-lg md:w-[700px] xl:w-[900px] transiton duration-500 grayscale-[1] hover:grayscale-0'
      />

      <div className='w-full space-y-10'>
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
