// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useSKill from '@/hooks/useSkill';
import SkillDetail from './SkillDetail';


export default function Skills() {

  const allSkill = [
    { name: 'javascript', imageURL: '/skills/js.png', proficiency: '75' },
    { name: 'typescript', imageURL: '/skills/ts.png', proficiency: '65' },
    { name: 'C++', imageURL: '/skills/cpp.png', proficiency: '35' },
    { name: 'python', imageURL: '/skills/python.svg', proficiency: '35' },
    { name: 'php', imageURL: '/skills/php.svg', proficiency: '50' },
    { name: 'java', imageURL: '/skills/java.png', proficiency: '60' },
    { name: 'tailwindcss', imageURL: '/skills/tw.png', proficiency: '60' },
    { name: 'framer motion', imageURL: '/skills/fm.svg', proficiency: '40' },
    { name: 'laravel', imageURL: '/skills/laravel.png', proficiency: '50' },
    { name: 'nuxt js', imageURL: '/skills/nuxt.png', proficiency: '70' },
    { name: 'next js', imageURL: '/skills/nextjswhite.png', proficiency: '70' },
    { name: 'mongo db', imageURL: '/skills/mongodb.png', proficiency: '50' },
    { name: 'supabase', imageURL: '/skills/supabase.png', proficiency: '70' },
    { name: 'node js', imageURL: '/skills/nodejs.png', proficiency: '50' },
    { name: 'docker', imageURL: '/skills/docker.svg', proficiency: '30' },
  ]

  const { skillName, setSkillName } = useSKill();

  useEffect(() => {
    const nodes = [].slice.call(document.querySelectorAll("li"), 0);

    const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
    const classNames = ["in", "out"]
      .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
      .reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;

        this.element.addEventListener("mouseover", (ev) =>
          this.update(ev, "in"),
        );

        this.element.addEventListener("mouseout", (ev) =>
          this.update(ev, "out"),
        );
      }

      update(ev, prefix) {
        this.element.classList.remove(...classNames);

        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`,
        );
      }
    }

    nodes.forEach((node) => new Item(node));
  }, []);

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] 
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Skills
      </h3>

      <div className="w-full flex justify-center items-center z-20">
        <div className=''>
          <ul className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5'>
            {allSkill.map((item, key: any) => (
              <SkillDetail key={key} index={key} skill={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className='w-full absolute bottom-20 left-0 flex justify-center items-end text-center'
      >
        <h3 className='h-fit text-3xl md:text-5xl text-gray-500/50 uppercase 
          tracking-[20px] transition ease-in-out duration-500 font-semibold'
        >
          {skillName}
        </h3>
      </div>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default '>
        hover for proficiency
      </h3>
    </div>
  )
}