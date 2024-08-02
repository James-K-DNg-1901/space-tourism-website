import React from 'react'

function Moon() {
  return (
    <div className='DesContent'>
      <h1 className='DesTitle'>MOON</h1>
      <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
      See our planet as you've never seen it before. A perfect relaxing trip away to help regain 
      perspective and come back refreshed. While you're there, 
      take in some history by visiting the Luna 2 and Apollo 11 landing sites.
      </p>
      <hr className='my-8 w-full border-Blue-300'/>
      <div className='w-full flex justify-center items-center max-sm:flex-col'>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>AVG. DISTANCE</p>
          <h2 className='text-white'>384,400 KM</h2>
        </span>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>EST. TRAVEL TIME</p>
          <h2 className='text-white'>3 DAYS</h2>
        </span>
      </div>
    </div>
  )
}

export default Moon