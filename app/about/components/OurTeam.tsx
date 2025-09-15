import React from "react";
const OurTeam = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-24 md:pb-12 lg:pt-36 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-black relative z-10">
      <h5 className="w-full font-mono text-white text-lg sm:text-xl md:text-2xl">
        OUR TEAM
      </h5>
      <h5 className="w-full text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-tighter">
        THE LEADERSHIP BEHIND ARCANE.
      </h5>

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-5 w-full">
        <div className="hidden lg:block lg:w-1/3 font-sans text-white text-xl md:text-2xl">
       
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col">
            <div
              className="w-full aspect-square bg-cover bg-center rounded-lg sm:rounded-xl"
              style={{ backgroundImage: "url('/assets/ali.jpg')" }}>
            </div>
            <h5 className='font-mono mt-3 sm:mt-4 md:mt-5 text-white text-sm sm:text-base md:text-lg lg:text-xl'>
              ALI CHEEMA
            </h5>
            <p className='font-sans text-white text-xs sm:text-sm md:text-base lg:text-xl'>
              CEO
            </p>
          </div>
          <div className="flex flex-col">
            <div
              className="w-full aspect-square bg-cover bg-center rounded-lg sm:rounded-xl"
              style={{ backgroundImage: "url('/assets/ourduty.jpeg')" }}>
            </div>
            <h5 className='font-mono mt-3 sm:mt-4 md:mt-5 text-white text-sm sm:text-base md:text-lg lg:text-xl'>
              RAMEEZ MASOUD FAROOQI
            </h5>
            <p className='font-sans text-white text-xs sm:text-sm md:text-base lg:text-xl'>
              COO
            </p>
          </div>
          <div className="flex flex-col">
            <div
              className="w-full aspect-square bg-cover bg-center rounded-lg sm:rounded-xl"
              style={{ backgroundImage: "url('/assets/hassan.png')" }}>
            </div>
            <h5 className='font-mono mt-3 sm:mt-4 md:mt-5 text-white text-sm sm:text-base md:text-lg lg:text-xl'>
             HASSAN IFTIKHAR
            </h5>
            <p className='font-sans text-white text-xs sm:text-sm md:text-base lg:text-xl'>
              CTO
            </p>
          </div>
          <div className="flex flex-col">
            <div
              className="w-full aspect-square bg-cover bg-center rounded-lg sm:rounded-xl"
              style={{ backgroundImage: "url('/assets/yao.png')" }}>
            </div>
            <h5 className='font-mono mt-3 sm:mt-4 md:mt-5 text-white text-sm sm:text-base md:text-lg lg:text-xl'>
              YAO YU
            </h5>
            <p className='font-sans text-white text-xs sm:text-sm md:text-base lg:text-xl'>
             CFO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
