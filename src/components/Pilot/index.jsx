import React from 'react'

function Pilot() {
  return (
    <div className='w-[539px] h-[631px] max-xl:w-auto max-xl:h-auto flex flex-col justify-center items-start max-xl:items-center gap-5'>
        <p className='w-full text-4xl max-md:text-xl text-slate-400 font-Bellefair'>
            PILOT
        </p>
        <h1 className='w-full text-6xl max-sm:text-3xl font-Bellefair mb-8 max-md:mb-4 text-white'>
            VICTOR GLOVER
        </h1>
        <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
          Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
          Glover is a commander in the U.S. Navy where he pilots an F/A-18.
          He was a crew member of Expedition 64, and served as a station systems flight engineer.
        </p>
    </div>
  )
}

export default Pilot