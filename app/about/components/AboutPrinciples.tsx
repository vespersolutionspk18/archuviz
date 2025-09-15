import React from "react";

const AboutPrinciples = () => {
  return (
    <div className="w-full flex flex-col text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 gap-6 sm:gap-8 md:gap-12 lg:gap-16 bg-black relative z-10">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">PROFOUND INTEGRITY</h5>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            The immutable core of our identity. We conduct all business with absolute transparency and unwavering ethics. This foundational principle guides every decision and transaction across all divisions.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          <h5 className="font-mono text-base sm:text-lg md:text-xl">MASTERY IN EXECUTION</h5>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            An obsession with perfection in every detail, from a complex trade settlement to the seamless function of an IoT device. We believe excellence is not an aspiration but a standard, demanding precision and expertise in every operation across our diverse portfolio.
          </p>
        </div>
      </div>
    </div>
  );                                                                                                                                                                    
};

export default AboutPrinciples;