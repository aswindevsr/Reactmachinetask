import React from 'react'
import "./rightside.css"
import Nav from '../nav/Nav'
import GraphChart from '../charts/GraphChart'
import Piechart from '../pieChart/Piechart'
import PiechartContainer from '../pieChart/PiechartContainer'
import Table from '../table/Table'
import ProfileCard from '../profilecard/ProfileCard'


const Rightside = () => {
  return (
    <div className='rightside'>
        <div className="right-one">
            <Nav/>
        </div>
        <div className="right-two">
            <GraphChart/>
            <PiechartContainer />
        </div>
        <div className="right-three">
            <div className="rt-one">
                {/* <div className="rt-one-one"> */}
                    <Table/>
                {/* </div> */}
                <div className="rt-one-two"></div>
            </div>
            {window.innerWidth > 800 && 
            <ProfileCard/> 
            }
        </div>
        {/* <div className="right-four"></div> */}
    </div>
  )
}

export default Rightside