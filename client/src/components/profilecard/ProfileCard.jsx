import React from 'react'
import "./procard.css"
import twitter from "../../Assets/twitter.png"
import facebook from "../../Assets/facebook.png"
import instagram from "../../Assets/instagram.png"


const ProfileCard = () => {
  return (
    <div className="rt-two">
        <div className="img-pc"></div>
        <div className="details-pc">
            <h3>John Doe</h3>
            <span>CEO</span>
            <div className="logos">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProfileCard