import React from 'react';
import { motion } from 'framer-motion';

export default function EducationCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 
      hover:opacity-100 cursor-pointer transition-opacity duration-300'
    >
      <motion.img src="/japit.jpg" initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-36 h-36 xl:w-[200px] xl:h-[200px] object-cover rounded-full object-center' 
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-medium'>Student</h4>

        <p className=' font-bold text-2xl mt-1'>HSGS</p>

        <div className='flex space-x-2 my-2'>
          <img src="/japit.jpg" className='h-10 w-10 rounded-full' />
          <img src="/japit.jpg" className='h-10 w-10 rounded-full' />
          <img src="/japit.jpg" className='h-10 w-10 rounded-full' />
        </div>

        <p className=' uppercase py-5 text-gray-300'>May 03 2018 - July 7 2021</p>

        <ul className=' list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}
