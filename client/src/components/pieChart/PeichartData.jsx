import React ,{useState,useEffect} from 'react'
import "./piechart.css"
import axios from "axios";


const PeichartData = () => {
    const [newdata, setNewdata] = useState([])
    const apiCall = ()=>{
        // const api = await fetch("http://localhost:3001/api/pie-chart")
        // const apijson = await api.json()
        // const onlyData =  apijson.data
        // setNewdata(onlyData)
        // console.log("chartgdbhjbgdbfbb data",newdata);


        axios.get("http://localhost:3001/api/pie-chart").then((res) => setNewdata(res.data))
        console.log("pie charttttt", newdata);


     }
    useEffect(()=>{
     apiCall()
     console.log("listtttddsdfft data",newdata);
    },[])
  return (
   <>
    {newdata.map((item)=>(
        <div className="pei-line"><div className="circle-pie" style={{backgroundColor:item.fill}} ></div>
            <p className='pei-text'>{item.label}</p>
        </div>
    ))}
   </>
  )
}

export default PeichartData