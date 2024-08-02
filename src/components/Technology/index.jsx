import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import DouglasImg from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import MarkImg from '../../assets/technology/image-spaceport-landscape.jpg'
import VictorImg from '../../assets/technology/image-space-capsule-landscape.jpg'

function Technology() {

  const [image, setImage] = useState(DouglasImg)

  const toDouglas = () => {
    setImage(DouglasImg)
  }
  const toMark = () => {
    setImage(MarkImg)
  }
  const toVictor = () => {
    setImage(VictorImg)
  }

  return (
    <div className='
        w-screen h-DeskContent max-sm:h-MobileContent 
        flex items-center justify-end max-md:justify-center'
    >
      <div className='MyTechMainContent'>
        <div className='flex w-full gap-5 text-2xl font-BarlowCondensed tracking-wider'>
          <b className='text-slate-700'>03</b>
          <h1 className='text-white'>SPACE LAUNCH 101</h1>
        </div>
        <div className='w-full h-full flex flex-row-reverse max-md:flex-col max-md:gap-12'>
          <div className='MyTechMainContentRight'>
            <img className='
                  w-full h-full
                  transition-all duration-300'  
              src={image}
              alt="crew-main-img"
            />
          </div>
          <div className='MyTechMainContentLeft'>
            <Outlet/>
            <div className='
                  w-24 h-full max-sm:h-24 flex 
                  flex-col max-md:flex-row justify-center 
                  items-center gap-8 max-md:w-full'
            >
              <Link to='launch-vehicle' onClick={toDouglas} className='MyTechElement'>
                1
              </Link>
              <Link to='spaceport' onClick={toMark} className='MyTechElement'>
                2
              </Link>
              <Link to='space-capsule' onClick={toVictor} className='MyTechElement'>
                3
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology