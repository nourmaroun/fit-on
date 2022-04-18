import React from 'react'
import './../css/home.css'
import HomeElements from '../components/Home'



const Home = () => {
  return (
    <>
    <section className='home-container-1'>
      <div className='title'>
        <p>ARE YOU READY FOR A BRAND NEW LIFESTYLE?</p>
      </div>
      <p className='thepain'>The <span>PAIN</span> you feel today will be the <span>STRENGTH</span> you feel tomorrow</p>
    </section>
    <section className='home-container-2'>
      <div className='c2d1'></div>
      <div className='c2d2'></div>
    </section>
    <HomeElements />
    </>
  )
}

export default Home