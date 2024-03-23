import React from 'react';
import ProjectDetail from './ProjectDetail';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa';

export default function Projects() {

  const projects = [
    {
      title: 'Magic Post',
      description: `Shipping System Management Software`,
      link: 'https://github.com/hieunmh/mgpost'
    },
    {
      title: 'Gbox',
      description: `Gbox - Online Player Connection Platform is a great bridge between game 
        lovers around the world. Gbox not only provides a place to share achievements, skills, 
        and advice, but also a true community where people can meet and form new relationships.`,
      link: 'https://github.com/Minhnhat0408/Gbox'
    },
    {
      title: 'Feastly',
      description: `This is a food sales website.
      You can buy various types of food and drinks such as pho and coffee.
      Easy-to-read, clearly demarcated interface`,
      link: 'https://github.com/hieunmh/SE'
    },
    {
      title: 'Dischat',
      description: `This s a chat web application like discord. 
      You can create a message, chat, voice call or video call.`,
      link: 'https://github.com/hieunmh/dischat'
    },
  ]
  
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-center
       max-w-full justify-center gap-y-10 mx-auto px-8 items-center z-0'
    >
      <h3 className='absolute top-12 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 z-20'>
        {projects.map((project,  key) => (
          <ProjectDetail key={key} project={project} />
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#363636]/10 left-0 h-[500px] -skew-y-12' />

      <div className='w-full items-center justify-center md:flex hidden text-lg'>
          <div className='flex uppercase tracking-[5px] text-gray-500 font-semibold'>
            <p>more interesting project in my</p>
            <Link href={'https://github.com/hieunmh'} className='hover:text-[#5c9ead] flex items-center ml-[10px]'>
              <p>github</p>
              <FaGithub className='ml-1 mb-1' />
            </Link>
          </div>
      </div>
    </div>
  )
}
