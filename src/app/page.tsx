// import Header from './components/Header'
import Hero from '@/components/Hero'
// import Features from './components/Features'
// import Testimonials from './components/Testimonials'
// import CTA from './components/CTA'
// import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <Hero />
        {/* <Features />
        <Testimonials />
        <CTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}