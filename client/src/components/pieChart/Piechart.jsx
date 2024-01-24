import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./piechart.css"
import PeichartData from './PeichartData';
import axios from "axios";



const Piechart = () => {
    const [newdata, setNewdata] = useState([])
    const apiCall = ()=>{


        axios.get("http://localhost:3001/api/pie-chart").then((res) => setNewdata(res.data))
        console.log("pie charttttt", newdata);

        

     }
    useEffect(()=>{
     apiCall()
     console.log("chart data",newdata);
    },[])
  return (
    <>
    <div style={{width:"100%", height:"100%"}}>
         <ResponsiveContainer width="100%" height="100%">
        <PieChart 
        // width={300} height={300}
        >
          <Pie
            data={newdata}
            cx="50%"
            cy="50%"
            labelLine={false}
            // outerRadius={55}
            fill="#fff"
            dataKey="value"
          >
            {newdata.map((entry, index) => (
              <Cell key={`cell-${index}`}  />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    {/* <PeichartData/> */}
    </>
  )
}

export default Piechart