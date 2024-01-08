'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';

export default function Education() {


  const educations = [
    {
      image: '/schools/hsgs.jpg',
      role: 'Student',
      school: 'high school for gifted students',
      time: 'May 03 2018  -  July 7 2021'
    },
    {
      image: '/schools/uet.png',
      role: 'Student',
      school: 'VNU University of Engineering and Technology',
      time: 'Sep 26 2021  -  Now'
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col 
      md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Education</h3>

      <div className='w-full flex space-x-0 overflow-x-scroll scrollbar-thin snap-x snap-mandatory'>
        {educations.map((education, key) => (
          <EducationCard key={key} education={education} />
        ))}

      </div>
    </motion.div>
  )
}
