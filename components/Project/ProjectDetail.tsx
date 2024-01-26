import Link from 'next/link';
import React from 'react';

type ProjectDetail = {
  title: string;
  description: string;
  link: string;
}

export default function ProjectDetail({ project } : { project:ProjectDetail }) {
  return (
    <div className='w-full border border-[#363636] h-[130px] md:h-[250px] rounded-lg flex flex-col p-5'>
      <div className='text-start flex items-center'>
        <Link href={project.link} target='_blank' className='font-bold text-2xl underline text-[#5c9ead]'>
          {project.title}
        </Link>
        <div className='py-0.5 px-3 font-semibold border ml-4 border-[#363636] rounded-full'>
          <p>public</p>
        </div>
      </div>

      <div className='mt-5 font-semibold w-full h-full'>
        <p className='text-justify line-clamp-2 md:line-clamp-6'>{project.description}</p>
      </div>
    </div>
  )
}
