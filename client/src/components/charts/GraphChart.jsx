import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./graphchart.css"
import axios from "axios";


const GraphChart = () => {
    const [newdata, setNewdata] = useState([])
    const apiCall = ()=>{


        axios.get("http://localhost:3001/api/graph").then((res) => setNewdata(res.data))
        console.log("chart line", newdata);


     }
    useEffect(()=>{
     apiCall()
     console.log("line chart data",newdata);
    },[])
  return (
    <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
    <LineChart
      // width={500}
      // height={200}
      data={newdata}
      margin={{
        top: 15,
        right: 30,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis dataKey="y" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="num" stroke="#8884d8" activeDot={{ r: 8 }} />
      {/* <Line type="monotone" dataKey="num" stroke="#82ca9d"/> */}
    </LineChart>
  </ResponsiveContainer>
    </div>
  )
}

export default GraphChart