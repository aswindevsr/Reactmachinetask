import React from 'react'
import "./leftside.css"
import BC from "../../Assets/Briefcase.png"
// import Shutdown from "../../Assets/Shutdown.png"
import CircledMenu from "../../Assets/CircledMenu.png"
import Support from "../../Assets/Support.png"
import Help from "../../Assets/Help.png"
import Puzzle from "../../Assets/Puzzle.png"
import Logout from '../logout/Logout'


const Leftside = () => {
  return (
    <div className='leftside'>
        <div className='left-top'>
            <img src={BC} alt="" />
        </div>
        <div className='left-middle'>
            <ul>
            <li  className='special'><div> <img className='img-logo' src={CircledMenu} alt="" /><a href="">Home</a></div></li>
            <li><div> <img className='img-logo' src={Support} alt="" /><a href="">Support</a></div></li>
            <li><div> <img className='img-logo' src={Puzzle} alt="" /><a href="">Plugin</a></div></li>
            <li><div> <img className='img-logo' src={Help} alt="" /><a href="">Help</a></div></li>
            </ul>
        </div>
        {/* <div className='left-bottom'>
            Logout <img src={Shutdown} alt="" />
        </div> */}
        <Logout/>
    </div>
  )
}

export default Leftside