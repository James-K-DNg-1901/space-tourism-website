import React from 'react'

function SpaceCapsule() {
  return (
    <div className='w-[539px] h-[631px] max-xl:w-auto max-xl:h-auto flex flex-col justify-center items-start max-xl:items-center gap-5'>
        <p className='w-full text-4xl max-md:text-xl text-slate-400 font-Bellefair'>
            THE TERMINOLOGY...
        </p>
        <h1 className='w-full text-6xl max-md:text-4xl max-sm:text-2xl font-Bellefair mb-8 max-md:mb-4 text-white'>
            SPACE CAPSULE
        </h1>
        <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
        A space capsule is an often-crewed spacecraft that uses a 
        blunt-body reentry capsule to reenter the Earth's atmosphere without wings. 
        Our capsule is where you'll spend your time during the flight. 
        It includes a space gym, cinema, and plenty of other activities to keep you entertained.
        </p>
    </div>
  )
}

export default SpaceCapsule