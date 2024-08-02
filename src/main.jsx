import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Technology from './components/Technology'
import Moon from './components/Moon'
import Mars from './components/Mars'
import Europa from './components/Europa'
import Titan from './components/Titan'
import Commander from './components/Commander'
import MissionSpecialist from './components/MissionSpecialist'
import Pilot from './components/Pilot'
import FlightEngineer from './components/FlightEngineer'
import Spaceport from './components/Spaceport'
import SpaceCapsule from './components/SpaceCapsule'
import LaunchVehicle from './components/LaunchVehicle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path='moon' element={<Moon />} />
            <Route path='mars' element={<Mars />} />
            <Route path='europa' element={<Europa />} />
            <Route path='titan' element={<Titan />} />
          </Route>
          <Route path="crew" element={<Crew />}>
            <Route index element={<Commander/>} />
            <Route path='commander' element={<Commander/>} />
            <Route path='mission-specialist' element={<MissionSpecialist/>} />
            <Route path='pilot' element={<Pilot/>} />
            <Route path='flight-engineer' element={<FlightEngineer/>} />
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route index element={<LaunchVehicle/>} />
            <Route path='launch-vehicle' element={<LaunchVehicle/>} />
            <Route path='spaceport' element={<Spaceport/>} />
            <Route path='space-capsule' element={<SpaceCapsule/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
