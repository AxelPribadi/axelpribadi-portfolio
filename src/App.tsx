import './styles/global.less'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Marquee3D from './components/Marquee3D'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* <Marquee3D /> */}
        <About />
        <Projects />
        <Contact />
        
      </main>
      <Footer />
    </>
  )
}
