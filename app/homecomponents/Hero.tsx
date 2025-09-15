import Button from '@/components/Button'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 overflow-hidden">
      <img 
        className="absolute inset-0 w-full h-full object-cover lg:scale-120 lg:translate-x-8 scale-110 translate-x-0 z-0"
        src="/assets/hero.png"
        alt="Hero background"
      />
     <div className="absolute inset-0 flex items-center w-full  justify-center z-10">
         <div className="text-center px-4 md:px-8 w-3/4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tighter mb-8">
               BUILT ON AMBITION. DRIVEN BY IMPACT.
            </h1>
            <div className="space-y-4">
                <h5 className="text-sm md:text-lg lg:text-xl text-white font-mono mb-5" >A DIVERSIFIED GLOBAL ENTERPRISE ACROSS COMMODITY TRADING, REAL ESTATE, HOSPITALITY, TECHNOLOGY, AND TOBACCO MANUFACTURING</h5>
                {/*<h5 className="text-sm md:text-lg lg:text-xl text-white font-mono">INTEGRATED. STRATEGIC. ARCANE.</h5>*/}
                <Button text="EXPLORE OUR WORLD" variant="white" route="/about" />
            </div>
         </div>
     </div>
    </div>
  )
}

export default Hero