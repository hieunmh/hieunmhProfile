'use client';

import React from 'react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';

export default function Hero() {

  const [text, count] = useTypewriter({
    words: [
      'Hi!',
      'I\'m Nguyen Minh Hieu', 
      'A Student from UET-VNU', 
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen w-full flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7ab0a' />
      </h1>
    </div>
  )
}
