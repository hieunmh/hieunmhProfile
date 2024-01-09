import React from 'react';
import ProjectDetail from './ProjectDetail';
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa';

export default function Projects() {

  const projects = [
    {
      title: 'Project 1',
      description: 'This AI tool app built on Streamlit library provides a powerful and user-friendly tool through web interface for accessing key information from healthcare-related academic literature. Its natural language processing capabilities and intuitive user interface make it an essential AI tool for anyone working in the healthcare industry.',
      link: ''
    },
    {
      title: 'Project 2',
      description: 'This is project 2',
      link: ''
    },
    {
      title: 'Project 3',
      description: 'This is project 3',
      link: ''
    },
    {
      title: 'Project 4',
      description: 'This is project 4',
      link: ''
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
