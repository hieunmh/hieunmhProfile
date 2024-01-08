'use client';

import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
    typeSpeed: 100,
  })

  return (
    <div className='h-screen w-full space-y-8 flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />

      <motion.div className='z-20' initial={{ scale: 0 }} whileInView={{ scale: [0, 1.5, 1] }} 
        transition={{ type: 'keyframes', duration: 2, delay: 2 }} viewport={{ once: true }}
      >
        <Image src={'/japit.jpg'} width={1000} height={1000} priority={true} alt="Hieu 's img"
          className='rounded-full h-36 w-36 mx-auto object-cover z-20 border-4 mb-4 -rotate-90'
        />
        <h2 className='text-base uppercase text-gray-400 pb-2 tracking-[15px]'>Software Engineer</h2>

        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3 hover:text-[#5c9ead] transition duration-300 cursor-pointer'>
            {text}
          </span>
          <Cursor cursorColor='#5c9ead' />
        </h1>

        <div className='pt-5 font-semibold'>
          <Link href={'#about'}>
            <button className='heroButton'>About</button>
          </Link>
          <Link href={'#education'}>
            <button className='heroButton'>Education</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
          <Link href={'#contact'}>
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
