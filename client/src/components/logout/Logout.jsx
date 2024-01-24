import React from 'react'
import "./logout.css"
import Shutdown from "../../Assets/Shutdown.png"


const Logout = () => {
  return (
    <div className='left-bottom'>
            Logout <img src={Shutdown} alt="" />
        </div>
  )
}

export default Logout