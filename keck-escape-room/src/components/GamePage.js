import { useState, useEffect } from 'react'
import NavBar from './Navbar'
import escapeRoom from '../images/location_corner.gif'
import './GamePage.css'
import { SignOut } from '../services/authService'

export default function GamePage({ username }) {
  return (
    <div id="map-container">
      <img src={escapeRoom} alt="escape room" />
      <p id="welcomeText">Welcome to Keck!! Escape if you can...</p>
    </div>
  )
}
