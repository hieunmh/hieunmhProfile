'use client';

import useSKill from '@/hooks/useSkill';
import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

type SkillDetailType = {
  name: string;
  imageURL: string;
  proficiency: string;
}

export default function SkillDetail({ skill, index } : { skill: SkillDetailType, index: number }) {

  const { setSkillName } = useSKill();
    
  return (
    <motion.li className='rounded-lg relative antialiased self-center flex items-center 
      w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 group cursor-pointer'
      onMouseEnter={() => setSkillName(skill.name)}
      onMouseLeave={() => setSkillName('')}
      initial={{ x: index % 2 == 0 ? 100 : -100 }}
      whileInView={{ y: 0, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={skill.imageURL} alt="skillImage"
        className='object-cover rounded-lg scale-[0.85]'
      />
      <div className='absolute rounded-lg antialiased flex justify-center items-center bg-[#363636] bg-opacity-90 
        text-6xl text-[#5c9ead] font-extrabold w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'
      >
        <h3>{skill.proficiency}</h3>
      </div>
    </motion.li>
  )
}
