import React from 'react'
import './Sidenav.css'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div class="eventNav" role="banner">
      <div class="nav-wrap">
        <nav class="main-nav" role="navigation">
          <ul class="unstyled list-hover-slide">
            <li>
              <Link to='/Events/2022'>
                2022
              </Link>
            </li>
            <li>
              <Link to='/Events/2021'>
                2021
              </Link>
            </li>
            <li>
              <Link to='/Events/2020'>
                2020
              </Link>
            </li>
            <li>
              <Link to='/Events/2019'>
                2019
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidenav;