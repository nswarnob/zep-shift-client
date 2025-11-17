import React from 'react'
import Banner from './Banner'
import Service from './Service'
import Tracking from './Tracking'
import HowItWorks from './HowItWorks'
import Faq from './Faq'
import Brand from './Brand'
import Satisfiction from './Satisfiction'
import Review from './Review'

const Home = () => {
  return (
    <div className='w-full space-y-12'>

       <div className='mt-12'><Banner></Banner></div>
      
       <div><HowItWorks></HowItWorks></div>

      <div><Service></Service></div>

      <div><Brand></Brand> </div>

      <div><Tracking></Tracking></div>

      <div><Satisfiction></Satisfiction> </div>
      <div> <Review></Review> </div>

      <div><Faq></Faq></div>

    </div>
  )
}

export default Home