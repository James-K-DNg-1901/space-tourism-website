import logo from './assets/shared/logo.svg'
import Hamburger from './assets/shared/icon-hamburger.svg'
import Close from './assets/shared/icon-close.svg'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

const App = () => {

  const [deskBg, setDeskBg] = useState('bg-HomeDesk')
  const [tabletBg, setTabletBg] = useState('max-md:bg-HomeTablet')
  const [mobileBg, setMobileBg] = useState('max-[375px]:bg-HomeMobile')

  const changeHomeBg = () => {
    setDeskBg('bg-HomeDesk')
    setTabletBg('max-md:bg-HomeTablet')
    setMobileBg('max-[375px]:bg-HomeMobile')
  }

  const changeDesBg = () => {
    setDeskBg('bg-DesDesk')
    setTabletBg('max-md:bg-DesTablet')
    setMobileBg('max-[375px]:bg-DesMobile') 
  }

  const changeCrewBg = () => {
    setDeskBg('bg-CrewDesk')
    setTabletBg('max-md:bg-CrewTablet')
    setMobileBg('max-[375px]:bg-CrewMobile')
  }

  const changeTechBg = () => {
    setDeskBg('bg-TechDesk')
    setTabletBg('max-md:bg-TechTablet')
    setMobileBg('max-[375px]:bg-TechMobile')
  }

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className={`w-screen h-Desktop flex flex-col max-xl:gap-12 max-md:gap-12 max-sm:gap-28 ${deskBg} bg-cover ${tabletBg} ${mobileBg}`}>
      <nav className='h-NavDesktop max-md:h-NavTablet flex items-end'>
        <div className='w-screen h-auto flex items-center justify-between max-sm:px-8'>
          <img className='w-12 h-12 mx-16 max-sm:mx-0' src={logo} alt='logo' />
          <hr className='w-80 border-Blue-300 max-lg:hidden' />
          <div className={`MyNavBarStyle ${!clicked ? 'max-sm:-right-64' : ''}`}>
            <img className={`w-7 h-7 sm:hidden cursor-pointer mx-8 my-14`} onClick={handleClick} src={Close} alt="Close" />
            <Link to='/' onClick={(changeHomeBg)} className='MyNavElement'>
              <b className='pr-4'>00</b>
              HOME
            </Link>
            <Link to='/destination' onClick={(changeDesBg)} className='MyNavElement'>
              <b className='pr-4'>01</b>
              DESTINATION
            </Link>
            <Link to='/crew' onClick={(changeCrewBg)} className='MyNavElement'>
              <b className='pr-4'>02</b>
              CREW
            </Link>
            <Link to='/technology' onClick={(changeTechBg)} className='MyNavElement'>
              <b className='pr-4'>03</b>
              TECHNOLOGY
            </Link>
          </div>
          <img className={`w-7 h-7 sm:hidden cursor-pointer ${clicked ? 'hidden' : ''}`} onClick={handleClick} src={Hamburger} alt="Hamburger" />
        </div>
      </nav>
      <Outlet/>
    </div>
    
  )
}

export default App
