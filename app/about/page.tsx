import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutPrinciples from './components/AboutPrinciples';
import AboutEthos from './components/AboutEthos';
import AboutHero from './components/Hero';
import OurTeam from './components/OurTeam';


export default function Home() {
  return (
    <>
    <Header />
    <AboutHero/>
    <OurTeam/>
    <AboutEthos/>
    <AboutPrinciples />
    <Footer />
    </>
    );
}