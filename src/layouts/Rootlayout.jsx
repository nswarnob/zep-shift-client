import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/Shared/Footer'
import Navbar from '../Pages/Shared/Navbar'

const Rootlayout = () => {
  return (
    <div className='max-w-7xl mx-auto' >
     <header> <Navbar></Navbar></header>
       <main className='min-h-screen'> <Outlet></Outlet></main>
        <footer><Footer></Footer></footer>
    </div>
  )
}

export default Rootlayout