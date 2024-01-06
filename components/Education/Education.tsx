'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';

export default function Education() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col 
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Education</h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        <EducationCard />

        <EducationCard />

        <EducationCard />

        <EducationCard />

      </div>
    </motion.div>
  )
}
