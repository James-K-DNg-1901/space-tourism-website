import React from 'react'

function Titan() {
  return (
    <div className='DesContent'>
      <h1 className='DesTitle'>TITAN</h1>
      <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
        The only moon known to have a dense atmosphere other than Earth, 
        Titan is a home away from home (just a few hundred degrees colder!). 
        As a bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr className='my-8 w-full border-Blue-300'/>
      <div className='w-full flex justify-center items-center max-sm:flex-col'>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>AVG. DISTANCE</p>
          <h2 className='text-white'>1.6 BIL. KM</h2>
        </span>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>EST. TRAVEL TIME</p>
          <h2 className='text-white'>7 YEARS</h2>
        </span>
      </div>
    </div>
  )
}

export default Titan