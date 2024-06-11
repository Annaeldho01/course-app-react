import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewCourse = () => {
    const [data,changeData]=useState([
        
           
            ])
    const fetchData=()=>{
        axios.get("http://localhost:8085/view").then(
            (response)=>{
                    changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>fetchData(),[])
  return (
    <div>
        <Navbar/>
        <h3 align="center">VIEW COURSE</h3>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-dark table-striped">
 
  <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">TITLE</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">DATE</th>
      <th scope="col">DURATION</th>
      <th scope="col">VENUE</th>
      <th scope="col">TRAINER NAME</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <th scope="row">{index+1}</th>
            <td>{value.title}</td>
            <td>{value.description}</td>
            <td>{value.date}</td>
            <td>{value.duration}</td>
            <td>{value.venue}</td>
            <td>{value.trainername}</td>
          </tr>
        }
    )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCourse