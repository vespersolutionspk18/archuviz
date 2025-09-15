"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

const IndustriesWeServe = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const industries = [
    {
      id: 1,
      number: "01",
      title: "ARCANE TRADING",
      description: "We are a UAE-based global commodity trading company. We specialize in the sourcing and distribution of rare earth minerals. Products such as copper and high-demand agricultural commodities; including sugar and chilies. Leveraging strong partnerships across Brazil, Pakistan, and China. We facilitate efficient, reliable, and large-scale trade flows to meet the evolving needs of international markets.",
      image: "/assets/trading.jpeg",
      link: "/commodities-trading"
    },
    {
      id: 2,
      number: "02", 
      title: "REAL ESTATE DEVELOPMENT",
      description: "We specialize in the design and development of mixed-use and commercial buildings in both New York and Pakistan. With a focus on quality, functionality, and long-term value, our projects blend modern architecture with strategic urban planning to create vibrant, sustainable spaces for businesses and communities alike.",
      image: "/assets/development.jpeg",
      link: "/real-estate"
    },
    {
      id: 3,
      number: "03",
      title: "ARCANE HOSPITALITY", 
      description: "Arcane Hospitality owns and operates a portfolio of branded hotels across the United States, upholding a track record of operational excellence. We specialize in maximizing profitability by maintaining low cost per occupied room (CPOR) while delivering exceptional guest experiences. Our Marriott hotels in New York consistently rank among the highest-rated in the region, reflecting our commitment to quality, efficiency, and guest satisfaction.",
      image: "/assets/hospitality.jpeg",
      link: "/hospitality"
    },
    {
      id: 4,
      number: "04",
      title: "NEXUS MINDS TECHNOLOGIES",
      description: "Nexus is a dedicated technology company delivering enterprise software, mobile applications, AI consulting, cloud solutions, and web development services. We specialize in building and deploying robust ERP systems tailored to streamline business operations across industries. Our cloud and AI consulting services enable organizations to modernize their infrastructure, automate workflows, and harness data-driven insights for strategic growth. With a focus on scalable architecture, intuitive user experience, and long-term reliability, Nexus provides comprehensive digital solutions that empower businesses to thrive in an increasingly connected world.",
      image: "/assets/software.jpg", 
      link: "/software"
    },
    {
      id: 5,
      number: "05",
      title: "GOVERNMENT PROJECTS & INFRASTRUCTURE SOLUTIONS",
      description: "Our company specializes in facilitating government tenders and infrastructure projects, with a primary focus on water-related solutions. We work closely with public sector entities to deliver advanced reverse osmosis (RO) plants, water desalination systems, and smart water metering technologies. Our expertise lies in navigating regulatory frameworks, coordinating with trusted suppliers, and ensuring timely execution of high-impact public utility projects.",
      image: "/assets/govt.jpeg", 
      link: "/hardware"
    },
    {
      id: 6,
      number: "06",
      title: "ARCANE TOBACCO MANUFACTURING",
      description: "Arcane Tobacco Manufacturing is committed to delivering high-quality tobacco products through a process rooted in integrity, compliance, and precision. We prioritize due diligence at every stage; from sourcing premium raw materials to ensuring full regulatory adherence across markets. With a strong focus on responsible procurement and quality control. We uphold the highest industry standards to serve our partners and customers with reliability and transparency.",
      image: "/assets/tobacco.jpg", 
      link: "/tobacco"
    }
  ]

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 1024) { // Only on desktop
      setHoveredItem(index)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Only on desktop
      setHoveredItem(null)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleClick = (index: number) => {
    if (window.innerWidth < 1024) { // mobile/tablet
      setHoveredItem(hoveredItem === index ? null : index)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 1024) {
        const target = e.target as HTMLElement
        if (!target.closest('.pillar-item') && !target.closest('.mobile-card')) {
          setHoveredItem(null)
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])


  return (
    <div className="industries-section flex flex-col w-full pb-8 md:pb-16 lg:pb-26 pt-8 md:pt-12 lg:pt-16 px-4 md:px-8 lg:px-16 bg-black text-white relative z-10">
        <h5 className="font-mono text-xl md:text-2xl mb-6 lg:mb-10">OUR SIX PILLARS</h5>
        {industries.map((industry) => (
          <div 
            key={industry.id}
            className="pillar-item flex flex-row border-b-[1px] items-center border-white w-full gap-4 md:gap-6 lg:gap-10 py-4 md:py-5 lg:py-7 cursor-pointer" 
            onMouseEnter={() => handleMouseEnter(industry.id)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(industry.id)}
          >
              <h5 className="font-mono text-xl md:text-2xl lg:text-3xl min-w-[3rem] md:min-w-[4rem]">{industry.number}</h5>
              <h5 className="font-sans text-lg md:text-2xl lg:text-4xl">{industry.title}</h5>
          </div>
        ))}
       
        {mounted && hoveredItem && createPortal(
          <>
            {/* Desktop hover card */}
            <div 
              className="fixed pointer-events-none z-[99999] hidden lg:block"
              style={{
                left: `${window.innerWidth * 0.45 + (mousePos.x * 0.3)}px`,
                top: `${mousePos.y - 150}px`,
                width: '600px',
              }}
            >
              <div className="backdrop-blur-xs bg-white/3 border border-white/10 rounded-lg p-5 shadow-2xl overflow-hidden">
                <div className="relative h-72 w-full">
                  <Image
                    src={industries.find(industry => industry.id === hoveredItem)?.image || "/assets/aboutus.jpg"}
                    alt="Industry preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="py-3">
                  <h3 className="text-white text-2xl font-mono font-semibold tracking-tighter mb-3">
                    {industries.find(industry => industry.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-gray-200 text-xl leading-tight">
                    {industries.find(industry => industry.id === hoveredItem)?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile click card */}
            <div 
              className="mobile-card fixed inset-x-4 bottom-20 z-[99999] lg:hidden"
            >
              <div className="backdrop-blur-md bg-black/90 border border-white/20 rounded-lg p-4 shadow-2xl overflow-hidden">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={industries.find(industry => industry.id === hoveredItem)?.image || "/assets/aboutus.jpg"}
                    alt="Industry preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg font-mono font-semibold tracking-tight mb-2">
                    {industries.find(industry => industry.id === hoveredItem)?.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industries.find(industry => industry.id === hoveredItem)?.description}
                  </p>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </div>
  )
}

export default IndustriesWeServe