
import React from 'react'

const AboutUs = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-16 bg-white flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center lg:items-start mt-[100vh] relative z-10">
       <div className="bg-blend-multiply bg-cover bg-center w-full sm:w-4/5 md:w-3/4 lg:w-1/3 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[880px] rounded-lg lg:rounded-none" style={{
        backgroundImage: 'url(/assets/about.jpeg)',
       }}>
        

       </div>
       <div className="w-full lg:w-2/3 flex flex-col gap-4 md:gap-6 lg:gap-8 text-black px-2 sm:px-0">
       <h5 className="font-mono text-base sm:text-lg md:text-xl text-center lg:text-left">WELCOME TO ARCANE HOLDINGS</h5>
       <h5 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-sans tracking-tighter leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-snug">
        Arcane Holdings is a diversified business group built on a foundation of global vision, strategic partnerships, and operational excellence. What began as a focused commodity trading venture has grown into a dynamic conglomerate spanning multiple sectors; including international commodity trading, hotel ownership and real estate development, software and technology services, government infrastructure solutions, and tobacco manufacturing.

<br className="hidden sm:block"></br><br className="hidden sm:block"></br>With partners and operations extending across the USA, China, Pakistan, and the UAE, Arcane Holdings brings together a wealth of expertise and cross-border collaboration. Our strength lies in our ability to identify high-impact opportunities, execute with precision, and build sustainable businesses that deliver value across industries and regions.
       </h5>
      <a className="font-mono text-base sm:text-lg md:text-xl hover:underline transition-all duration-300 text-center lg:text-left inline-block" href="/about">LEARN MORE</a>
       </div>
    </div>
  )
}

export default AboutUs