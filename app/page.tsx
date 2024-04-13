import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Education from '@/components/Experience/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Project/Projects';
import Skills from '@/components/Skill/Skills';

export default function Home() {

  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
      overflow-x-hidden z-0 scroll-smooth scrollbar-track-[#242424] scrollbar-thumb-[#5c9ead]
       scrollbar-thin'
    >
      <Header />

      <section id='hero' className='snap-start'>
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

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <Contact />
        <Footer />
      </section>
    </div>
  )
}
