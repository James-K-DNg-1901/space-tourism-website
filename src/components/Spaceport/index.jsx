import React from 'react'

function Spaceport() {
  return (
    <div className='w-[539px] h-[631px] max-xl:w-auto max-xl:h-auto flex flex-col justify-center items-start max-xl:items-center gap-5'>
        <p className='w-full text-4xl max-md:text-xl text-slate-400 font-Bellefair'>
            THE TERMINOLOGY...
        </p>
        <h1 className='w-full text-6xl max-md:text-4xl max-sm:text-2xl font-Bellefair mb-8 max-md:mb-4 text-white'>
            SPACEPORT
        </h1>
        <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
          by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, 
          our spaceport is ideally situated to take advantage of the Earth's rotation for launch.
        </p>
    </div>
  )
}

export default Spaceport