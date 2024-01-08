import React from 'react';
import { motion } from 'framer-motion';

type EducationCardType = {
  image: string;
  role: string;
  school: string;
  time: string;
}

export default function EducationCard({ education } : { education: EducationCardType }) {
  return (
    <article className='flex rounded-lg items-center justify-center flex-shrink-0 w-full snap-center 
      p-10 cursor-pointer transition-opacity duration-300'
    > 
      <div className='w-[600px] bg-[#363636]/30 py-10 rounded-lg flex flex-col items-center justify-center text-center space-y-5'>
        <motion.img src={education.image} initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-36 h-36 xl:w-[200px] xl:h-[200px] object-cover rounded-full object-center' 
        />

        <div className='px-2 md:px-0 space-y-3'>
      
          <p className='font-extrabold text-sm text-[#5c9ead] tracking-[1px] uppercase'>{education.school}</p>

          <h4 className='text-3xl font-black tracking-[2px] text-[#5c9ead]'>{education.role}</h4>

          <p className='font-semibold text-gray-400 tracking-[2px] text-[5c9ead]'>{education.time}</p>
        </div>
      </div>
    </article>
  )
}
