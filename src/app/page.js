import React from 'react'
import LampBlock from './components/blocks/lampBlock'
import { FloatingDockDemo } from './components/blocks/floatingSidebar'
import Features from './components/blocks/features'
import Testimonials from './components/blocks/testimonials'
import PricingPage from './components/blocks/pricing'
import { CoverText } from './components/blocks/coverText'
import { FlipText } from './components/blocks/flip-text'
import Footer from './components/blocks/footer'
const page = () => {
  return (
    <div className='bg-[#020617]'>
      <LampBlock />
      <FloatingDockDemo className="z-40" />
      <CoverText/>
      <Features />
      <FlipText/>
      <PricingPage/>
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default page