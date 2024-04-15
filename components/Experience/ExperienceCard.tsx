import React from 'react';
import { motion } from 'framer-motion';

type ExperienceCardType = {
  image: string;
  role: string;
  school: string;
  time: string;
}

export default function ExperienceCard({ education } : { education: ExperienceCardType }) {
  return (
    <article className='flex rounded-lg items-center justify-center snap-center 
      cursor-pointer transition-opacity duration-300'
    > 
      <div className='w-full bg-[#363636]/30 py-5 lg:py-20 rounded-lg flex flex-col items-center justify-center text-center space-y-5'>
        <motion.img src={education.image} initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-28 h-28 lg:w-[200px] lg:h-[200px] object-cover rounded-full object-center grayscale hover:grayscale-0' 
        />

        <div className='px-2 md:px-0 space-y-2'>
      
          <p className='font-extrabold text-base text-[#5c9ead] tracking-[1px]'>{education.school}</p>

          <h4 className='text-xl font-semibold tracking-[1px] text-[#5c9ead]'>{education.role}</h4>

          <p className='font-semibold text-sm text-gray-400 tracking-[0.5px] text-[5c9ead]'>{education.time}</p>
        </div>
      </div>
    </article>
  )
}
