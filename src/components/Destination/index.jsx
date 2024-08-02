import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import MoonImg from '../../assets/destination/image-moon.webp'
import MarsImg from '../../assets/destination/image-mars.webp'
import EuropaImg from '../../assets/destination/image-europa.webp'
import TitanImg from '../../assets/destination/image-titan.webp'

function Destination() {

  const [image, setImage] = useState(MoonImg)

  const toMoon = () => {
    setImage(MoonImg)
  }
  const toMars = () => {
    setImage(MarsImg)
  }
  const toEuropa = () => {
    setImage(EuropaImg)
  }
  const toTitan = () => {
    setImage(TitanImg)
  }

  return (
    <div className='MyWebContentStyle'>
      <div className='MyDestinationMainContent'
      >
        <div className='flex w-full gap-5 text-2xl font-BarlowCondensed tracking-wider'>
          <b className='text-slate-700'>01</b>
          <h1 className='text-white'>PICK YOUR DESTINATION</h1>
        </div>
        <div className='MyDestinationMainContentLeft'
        >
          <img className='MyDestinationMainImg'
            src={image}
            alt="destination-main-img"
          />
        </div>
        <div className='MyDestinationMainContentRight'
        >
          <div className='
                  w-[445px] h-9 max-sm:h-4 flex justify-start 
                  items-start text-white text-md font-Barlow 
                  gap-8 max-md:w-full max-md:justify-center 
                  max-md:items-center'
          >
            <Link to='moon' onClick={toMoon} className='MyDestinationExploreElement '>
              MOON
            </Link>
            <Link to='mars' onClick={toMars} className='MyDestinationExploreElement'>
              MARS
            </Link>
            <Link to='europa' onClick={toEuropa} className='MyDestinationExploreElement'>
              EUROPA
            </Link>
            <Link to='titan' onClick={toTitan} className='MyDestinationExploreElement'>
              TITAN
            </Link>
          </div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Destination