import React from 'react'
import Image from 'next/image'

const OurDuty = () => {
  return (
    <div className="h-[500px] md:h-[700px] lg:h-[880px] w-full relative">
      <Image
        src="/assets/ourduty.jpeg"
        alt="Our Duty"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
      <div className="absolute inset-0 flex flex-col text-white py-8 md:py-16 lg:py-36 px-4 md:px-8 lg:px-16 gap-6 lg:gap-10">
        <h4 className="font-mono text-white text-xl md:text-2xl">OUR VISION</h4>
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
          <h3 className="text-3xl md:text-5xl lg:text-8xl tracking-tighter w-full lg:w-2/3">WE ORCHESTRATE DIVERSE PORTFOLIOS INTO UNIFIED ENGINES OF GROWTH</h3>
          <h5 className="text-sm md:text-base lg:text-lg w-full lg:w-1/3">To be the world&apos;s preeminent holding group, renowned for our ability to transform complexity into opportunity. We actively weave our divisions together, creating intelligent synergy that generates value exponentially greater than the sum of its parts. From commodity trading insights that guide real estate acquisitions to hospitality innovations that inspire software development.</h5>
        </div>
        
      </div>
    </div>
  )
}

export default OurDuty
