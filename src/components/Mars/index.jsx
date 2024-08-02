import React from 'react'

function Mars() {
  return (
    <div className='DesContent'>
      <h1 className='DesTitle'>MARS</h1>
      <p className='text-md text-Blue-300 font-Barlow tracking-wide pr-6 max-md:pr-0'>
      Don't forget to pack your hiking boots. 
      You'll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. 
      It's two and a half times the size of Everest!
      </p>
      <hr className='my-8 w-full border-Blue-300'/>
      <div className='w-full flex justify-center items-center max-sm:flex-col'>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>AVG. DISTANCE</p>
          <h2 className='text-white'>225 MIL. KM</h2>
        </span>
        <span className='w-1/2 max-sm:w-full'>
          <p className='text-Blue-300'>EST. TRAVEL TIME</p>
          <h2 className='text-white'>9 MONTHS</h2>
        </span>
      </div>
    </div>
  )
}

export default Mars