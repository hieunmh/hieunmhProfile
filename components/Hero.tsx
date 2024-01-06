'use client';

import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Hero() {

  const [text, count] = useTypewriter({
    words: [
      'Hi !',
      'I\'m Nguyen Minh Hieu.',
      'A student from UET - VNU.', 
      'こんにちは !',
      'グエン・ミン・ヒエウと申します。', 
      'UET - VNUの学生です。',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen w-full space-y-10 flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />

      <motion.img src={'/japit.jpg'} alt='avatar image'
        className='rounded-full h-32 w-32 object-cover -rotate-90' 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
        transition={{ duration: 2.5 }}
      />
      <div className='z-20'>
        <h2 className='text-base uppercase text-gray-400 pb-2 tracking-[15px]'>Software Engineer</h2>

        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span><Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
          <Link href={'#about'}>
            <button className='heroButton'>About</button>
          </Link>
          <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
