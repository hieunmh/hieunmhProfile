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

  const { skillName, setSkillName } = useSKill();
    
  return (
    <motion.li className="rounded-lg antialiased self-center"
      onMouseEnter={() => setSkillName(skill.name)}
      onMouseLeave={() => setSkillName('')}
      initial={{ x: index % 2 == 0 ? 100 : -100 }}
      whileInView={{ y: 0, x: 0 }}
      transition={{ duration: 1 }}
    >
        <Image src={skill.imageURL} alt="skillImage" fill priority
          className=' object-cover rounded-lg'
        />
      <div className="info antialiased flex justify-center items-center">
        <h3>{skill.proficiency}</h3>
      </div>
    </motion.li>
  )
}
