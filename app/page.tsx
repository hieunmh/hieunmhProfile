import About from '@/components/About';
import Education from '@/components/Education/Education';
import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0'>

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

    </div>
  )
}
