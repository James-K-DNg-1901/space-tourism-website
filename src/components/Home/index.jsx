import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='MyWebContentStyle'>
        <div className='
            w-[1110px] h-[632px] flex justify-center 
            items-center max-md:flex-col
            max-md:w-[688px] max-md:h-[672px]'
        >
            <div className='MyHomeMainContentLeft'>
                <p className='text-2xl text-Blue-300 font-BarlowCondensed tracking-wide'>
                    SO, YOU WANT TO TRAVEL TO
                </p>
                <h1 className='text-9xl max-sm:text-8xl text-white font-Bellefair my-6 place-items-center'>
                    SPACE
                </h1>
                <p className='text-md text-Blue-300 font-Barlow font-medium tracking-wider'>
                    Let's face it; if you want to go to space, you might as well genuinely go
                    to outer space and not hover kind on the edge of it, Well sit back,
                    and relax because we'll give you a truly out of this world experience!
                </p>
            </div>
            <div className='MyHomeMainContentRight'>
                <Link to='/destination' 
                    className='MyExploreButton'>
                    <h2 className='text-4xl max-sm:text-xl font-Bellefair'>EXPLORE</h2>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home