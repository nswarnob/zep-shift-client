import React from 'react'
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <div className='flex items-center' >
       
       <img src={logo} className='w-6' alt="" />
         <a className="font-bold text-xl">ZepShift</a>
    </div>
  )
}

export default Logo