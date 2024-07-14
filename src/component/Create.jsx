import React from 'react'
import {useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {


    const [values, setValues] = useState({
      name:'',
      email:'',
      phone:''
    });

    const navigate = useNavigate();

    const handleonSubmit = (event)=>{
        event.preventDefault();

          axios.post('http://localhost:3000/users',values)
          .then(res => {
            console.log(res)
            navigate('/')
          })
          .catch(err => console.log(err))
          
    }

  return (
    <div class="container">
    <form onSubmit={handleonSubmit} class="mt-5 p-3 border rounded-3">
   <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Name</label>
       <input type="text" class="form-control" id="exampleFormControlInput1" onChange={e => setValues({...values,name:e.target.value})}  placeholder="John"/>
   </div>

   <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Email</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" onChange={e => setValues({...values,email:e.target.value})} placeholder="name@example.com"/>
   </div>

   <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Phone</label>
       <input type="tel" class="form-control" id="exampleFormControlInput1" onChange={e => setValues({...values,phone:e.target.value})} placeholder="7778889990"/>
   </div>

   <button type="submit" className="btn btn-success">Submit</button>

   </form>
    </div>
  )
}

export default Create
