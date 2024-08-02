import React from 'react'

function Europa() {
  return (
    <div className='DesContent'>
      <h1 className='DesTitle max-sm:text-7xl'>EUROPA</h1>
      <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. 
        With an icy surface, it's perfect for a bit of ice skating, curling, hockey, 
        or simple relaxation in your snug wintery cabin.
      </p>
      <hr className='my-8 w-full border-Blue-300'/>
      <div className='w-full flex justify-center items-center max-sm:flex-col'>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>AVG. DISTANCE</p>
          <h2 className='text-white'>628 MIL. KM</h2>
        </span>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>EST. TRAVEL TIME</p>
          <h2 className='text-white'>3 YEARS</h2>
        </span>
      </div>
    </div>
  )
}

export default Europa