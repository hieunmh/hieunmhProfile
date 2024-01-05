'use client';

import Link from 'next/link';
import React from 'react';

import { motion } from 'framer-motion';

import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div className='flex items-center text-gray-400 space-x-5'
        initial={{ x: -500, opacity: 0, scale: 0.5 }} 
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link href={''} className='hover:text-gray-500'>
          <FaFacebook size={30} />
        </Link>

        <Link href={'https://github.com/hieunmh'} className='hover:text-gray-500'>
          <FaGithub size={30} />
        </Link>

        <Link href={'https://www.instagram.com/heheinclass/'} className='hover:text-gray-500'>
          <FaInstagram size={30} />
        </Link>
      </motion.div>

      <motion.div className='flex items-center text-gray-400'
        initial={{ x: 500, opacity: 0, scale: 0.5 }} 
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <MdOutlineMail size={30} />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
      </motion.div>
    </header>
  )
}