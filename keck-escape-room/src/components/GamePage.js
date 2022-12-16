import { useState, useEffect } from 'react'
import NavBar from './Navbar'
import roomImage from '../images/escapeRoom.png'
import cornerImage from '../images/location_corner.gif'
import couchImage from '../images/location_couch.gif'
import serverImage from '../images/location_server.gif'
import coffeeTableImage from '../images/location_coffee_table.gif'
import './GamePage.css'
import { SignOut } from '../services/authService'

const pathImageMap = {
  '/': roomImage,
  '/corner': cornerImage,
  '/couch': couchImage,
  '/server': serverImage,
  '/coffee-table': coffeeTableImage,
}

export default function GamePage({ username }) {
  const pathname = window.location.pathname
  const imageSrc = pathImageMap[pathname]
  return (
    <div id="map-container">
      <img src={imageSrc} alt="escape room" />
      <p id="welcomeText">Welcome to Keck!! Escape if you can...</p>
    </div>
  )
}
