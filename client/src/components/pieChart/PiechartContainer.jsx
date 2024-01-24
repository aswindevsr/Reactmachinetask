import React from 'react'
import Piechart from './Piechart'
import "./piechart.css"
import PeichartData from './PeichartData'


const PiechartContainer = () => {
    return (
        <div className='piechart'>
            <div className="one">
                <Piechart />
            </div>
            <div className="two">
                <PeichartData />
            </div>
        </div>
    )
}

export default PiechartContainer