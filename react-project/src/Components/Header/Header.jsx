import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id="headerContainer">
        {<h1 id="headerName">Bike's Market</h1>}
        {/* <Link to="/"><p>Home</p></Link> */}
        {/* <Link  reloadDocument  to="random"><p>Random</p></Link> */}
        {/* <Link to="categories"><p>Categories</p></Link> */}
    </div>
  )
}

export default Header