import Layout from '@/containers/layout/Layout';
import Hero from '@/containers/Hero';
import About from '@/containers/About';
import Education from '@/containers/Education';
import Experience from '@/containers/Experience';
import Skills from '@/containers/Skills';
import Projects from '@/containers/Projects';
import Publications from '@/containers/Publications';
import Achievements from '@/containers/Achievements';
import Testimonials from '@/containers/Testimonials';
import Activities from '@/containers/Activities';
import Contact from '@/containers/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Achievements />
      <Testimonials />
      <Activities />
      <Contact />
    </Layout>
  );
}
