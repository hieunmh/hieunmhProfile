import About from '@/components/About';
import Education from '@/components/Education/Education';
import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skill/Skills';

export default function Home() {

  const allSkill = [
    { name: 'javascript', imageURL: '/skills/js.png', proficiency: '50' },
    { name: 'typescript', imageURL: '/skills/ts.png', proficiency: '50' },
    { name: 'php', imageURL: '/skills/js.png', proficiency: '50' },
    { name: 'vue', imageURL: '/skills/ts.png', proficiency: '50' },
    { name: 'next.js', imageURL: '/skills/js.png', proficiency: '50' },
    { name: 'tailwindcss', imageURL: '/skills/ts.png', proficiency: '50' },
    { name: 'framer motion', imageURL: '/skills/js.png', proficiency: '50' },
    { name: 'typescript', imageURL: '/skills/ts.png', proficiency: '50' },
    { name: 'javascript', imageURL: '/skills/js.png', proficiency: '50' },
    { name: 'typescript', imageURL: '/skills/ts.png', proficiency: '50' },
    { name: 'javascript', imageURL: '/skills/js.png', proficiency: '50' },
    { name: 'typescript', imageURL: '/skills/ts.png', proficiency: '50' },
  ]
  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0'>

      <section id='hero' className='snap-start'>
        <Header />
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>
      
      <section id='education' className='snap-center'>
        <Education />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

    </div>
  )
}
