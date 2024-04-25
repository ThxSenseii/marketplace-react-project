import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Nav from '../../Components/Nav/Nav'
import './index.css'
const Root = () => {
  return (
    <>
   <Header />
      <main>
        <Nav />
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Root