import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text white " style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
