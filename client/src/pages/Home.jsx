import React from 'react'
import "./home.css"
import Leftside from '../components/leftside/Leftside'
import Rightside from '../components/rightside/Rightside'

const Home = () => {
  return (
    <div className=' home'>
        <Leftside/>
        <Rightside/>
    </div>
  )
}

export default Home