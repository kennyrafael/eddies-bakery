import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import HowToOrder from './components/HowToOrder'
import Testimonials from './components/Testimonials'
import InstagramCTA from './components/InstagramCTA'
import Footer from './components/Footer'
import FloatingOrderButtons from './components/FloatingOrderButtons'

function App() {
  return (
    <div className="min-h-screen bg-void">
      <Hero />
      <About />
      <Products />
      <HowToOrder />
      <Testimonials />
      <InstagramCTA />
      <Footer />
      <FloatingOrderButtons />
    </div>
  )
}

export default App
