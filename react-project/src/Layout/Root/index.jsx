import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '/home/reboot/code/marketplace-react-project/react-project/src/Components/Header/Header.jsx'
import Footer from '/home/reboot/code/marketplace-react-project/react-project/src/Components/Footer/Footer.jsx'

const Root = () => {
  return (
    <>
    <Header/>

    <Outlet />

    <Footer/>
    </>
  )
}

export default Root