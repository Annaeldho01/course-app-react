import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchCourse = () => {
    const[data,setData]=useState(
       {
        "title":""
       } 
    )

    const [result,setResult]=useState([])

// input value fetching

    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

// Search button event

    const readValue=(event)=>{
        console.log(data)
        axios.post("http://localhost:8085/search",data).then(
            (response)=>{
                setResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

// delete event handling

const deleteCourse = (id)=>{
  let input={"_id":id}

axios.post("http://localhost:8085/delete",input).then(
    (response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("succesfully deleted")
        } else {
            alert("something went wrong")
        }
    }
)
}


  return (
    <div>
        <Navbar/>
        <div className="container">
        <h1 align="center">SEARCH COURSE</h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">

        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">TITLE</th>
      <th scope="col">DESRIPTION</th>
      <th scope="col">DATE</th>
      <th scope="col">DURATION</th>
      <th scope="col">VENUE</th>
      <th scope="col">TRAINER NAME</th>
    </tr>
  </thead>
  <tbody>
   {result.map(
    (value,index)=>{
        return  <tr>
        <td>{value.title}</td>
        <td>{value.description}</td>
        <td>{value.date}</td>
        <td>{value.duration}</td>
        <td>{value.venue}</td>
        <td>{value.trainername}</td>
        <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>DELETE</button></td>
      </tr>
    }
   )}
  </tbody>
</table>
            </div>
        </div>    </div>
        </div>
  )
}

export default SearchCourse