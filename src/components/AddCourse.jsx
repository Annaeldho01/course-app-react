import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddCourse = () => {
    const [data,setData]=useState({
        "title":"",
        "description":"",
        "date":"",
        "duration":"",
        "venue":"",
        "trainername":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8085/",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert(Error)
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h2 align="center">COURSE</h2>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea  id="" className="form-control" name='description' value={data.description} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="text" className="form-control" name='date' value={data.date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Venue</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Trainer Name</label>
                            <input type="text" className="form-control"  name='trainername' value={data.trainername} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>ADD COURSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse