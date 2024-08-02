import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import DouglasImg from '../../assets/crew/image-douglas-hurley.webp'
import MarkImg from '../../assets/crew/image-mark-shuttleworth.webp'
import VictorImg from '../../assets/crew/image-victor-glover.webp'
import AnoushehImg from '../../assets/crew/image-anousheh-ansari.webp'

function Crew() {

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
  const toAnousheh = () => {
    setImage(AnoushehImg)
  }

  return (
    <div className='MyWebContentStyle'>
      <div className='MyCrewMainContent'
      >
        <div className='flex w-full gap-5 text-2xl font-BarlowCondensed tracking-wider'>
          <b className='text-slate-700'>02</b>
          <h1 className='text-white'>MEET YOUR CREW</h1>
        </div>
        <div className='MyCrewMainContentLeft'
        >
          <Outlet/>
          <div className='w-full h-8 max-sm:h-4 flex justify-start gap-8 max-md:w-full max-lg:justify-center max-lg:items-center'>
            <Link to='commander' onClick={toDouglas} className='MyCrewElement'/>
            <Link to='mission-specialist' onClick={toMark} className='MyCrewElement' />
            <Link to='pilot' onClick={toVictor} className='MyCrewElement' />
            <Link to='flight-engineer' onClick={toAnousheh} className='MyCrewElement' />
          </div>
        </div>
        <div className='MyCrewMainContentRight'
        >
          <img className='MyCrewMainImg'  
            src={image}
            alt="crew-main-img"
          />
        </div>
      </div>
    </div>
  )
}

export default Crew