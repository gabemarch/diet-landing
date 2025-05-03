// import Header from './components/Header'
import Hero from '@/components/Hero'
import InsulinResistanceInfo from '@/components/InsulinResistanceInfo'
import AppInfo from '@/components/AppInfo'
import NewsletterSignup from '@/components/NewsletterSignup'
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
        <InsulinResistanceInfo />
        <AppInfo />
        <NewsletterSignup />
        {/* <Features />
        <Testimonials />
        <CTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}