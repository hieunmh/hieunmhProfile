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
    <motion.li className='rounded-lg antialiased self-center flex items-center w-24 h-24'
      onMouseEnter={() => setSkillName(skill.name)}
      onMouseLeave={() => setSkillName('')}
      initial={{ x: index % 2 == 0 ? 100 : -100 }}
      whileInView={{ y: 0, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img src={skill.imageURL} alt="skillImage"
        className='object-cover rounded-lg bg-transparent scale-90'
      />
      <div className="info absolute rounded-lg antialiased flex justify-center items-center bg-neutral-500 
        bg-opacity-80 text-5xl text-[#f7ab0a] font-extrabold"
      >
        <h3>{skill.proficiency}</h3>
      </div>
    </motion.li>
  )
}
