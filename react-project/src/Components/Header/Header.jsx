import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <div id="headerContainer">
      <h3><Link to="/">WELCOME TO BIKES</Link></h3>
        {/* <h2 id="headerTitle">Reboot Cocktails</h2> /}
         
        {/ <Link  reloadDocument  to="random"><p>Random</p></Link> /}
        {/ <Link to="categories"><p>Categories</p></Link> */}
    </div>
  )
}

export default Header