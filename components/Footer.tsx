"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleSectorsClick = () => {
    if (pathname === '/') {
      const industriesSection = document.querySelector('.industries-section')
      if (industriesSection) {
        industriesSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push('/')
      setTimeout(() => {
        const industriesSection = document.querySelector('.industries-section')
        if (industriesSection) {
          industriesSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="flex flex-col border-t-white/10 border-t-[2px] w-full pb-6 md:pb-8 lg:pb-10 pt-8 md:pt-12 lg:pt-16 px-4 md:px-6 lg:px-10 bg-black text-white relative z-20">
        <Link href="/">
          <Image 
            src="/assets/arcane.svg" 
            alt="Arcane Global" 
            width={0}
            height={0}
            sizes="60vw"
            className="w-[80%] md:w-[60%] lg:w-[50%] h-auto cursor-pointer"
          />
        </Link>
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-26 py-8 md:py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
                <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-[30%]">
                    <div className="flex flex-col">
                        <h5 className="font-mono text-white text-lg md:text-xl lg:text-2xl">ADDRESS:</h5>
                        <p className="text-base lg:text-lg">512, 5th Avenue, 17th Floor New York, NY 10175, United States</p>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="font-mono text-white text-lg md:text-xl lg:text-2xl">CONTACT:</h5>
                        <p className="text-base lg:text-lg">(347) 905-3563</p>
                        <p className="text-base lg:text-lg">info@arcaneglobal.group</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-3 w-full lg:w-[14%] text-2xl md:text-3xl lg:text-4xl font-mono">
                    <Link href="/" className="cursor-pointer hover:text-gray-300 transition-colors">HOME</Link>
                    <Link href="/about" className="cursor-pointer hover:text-gray-300 transition-colors">ABOUT</Link>
                    <a onClick={handleSectorsClick} className="cursor-pointer hover:text-gray-300 transition-colors">SECTORS</a>
                    <a className="cursor-pointer hover:text-gray-300 transition-colors">CAREERS</a>
                    <Link href="/contact" className="cursor-pointer hover:text-gray-300 transition-colors">CONTACT</Link>
                </div>
            </div>
        </div>
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <h5 className="text-sm md:text-base lg:text-lg font-mono">
            ARCANE HOLDINGS 2025. ALL RIGHTS RESERVED. 
        </h5>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 underline text-sm md:text-base lg:text-lg font-mono">
        <a className="cursor-pointer hover:text-gray-300 transition-colors">PRIVACY POLICY</a>
        <a className="cursor-pointer hover:text-gray-300 transition-colors">TERMS OF SERVICE</a>
        <a className="cursor-pointer hover:text-gray-300 transition-colors">COOKIE POLICY</a>
        </div>
    </div>
    </div>
  )
}

export default Footer