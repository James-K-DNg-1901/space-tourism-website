import React from 'react'

function FlightEngineer() {
  return (
    <div className='w-[539px] h-[631px] max-xl:w-auto max-xl:h-auto flex flex-col justify-center items-start max-xl:items-center gap-5'>
        <p className='w-full text-4xl max-md:text-xl text-slate-400 font-Bellefair'>
            FLIGHT ENGINEER
        </p>
        <h1 className='w-full text-6xl max-md:text-4xl max-sm:text-2xl font-Bellefair mb-8 max-md:mb-4 text-white'>
            ANOUSHEH ANSARI
        </h1>
        <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
          Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
          Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, 
          and the first Iranian in space.
        </p>
    </div>
  )
}

export default FlightEngineer