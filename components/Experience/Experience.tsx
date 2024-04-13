'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

export default function Experience() {


  const experiences = [

    {
      image: '/experiences/uet.png',
      role: 'Student',
      school: 'VNU University of Engineering and Technology',
      time: 'Sep 26 2021  -  Aug 2025'
    },
    {
      image: '/experiences/piragowhite.jpg',
      role: 'Intern',
      school: 'ピラゴーベトナム株式会社',
      time: 'Apr 8 2024 - Now'
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col 
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

      <div className='w-full lg:space-x-10 space-y-10 lg:space-y-0 scrollbar-thin 
        snap-x snap-mandatory grid grid-cols-1 lg:grid-cols-2'>
        {experiences.map((education, key) => (
          <ExperienceCard key={key} education={education} />
        ))}

      </div>
    </motion.div>
  )
}
