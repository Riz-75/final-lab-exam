import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div>
            <h1>Space Travelers' Hub</h1>
            <ul>
              <li><Link to='/rockets'>Rockets</Link></li>
              <li><Link to='/missions'>Missions</Link></li>
              <li><Link to='/myprofile'>MyProfile</Link></li>
          </ul>
        </div>
    </>
  )
}

export default Navbar
