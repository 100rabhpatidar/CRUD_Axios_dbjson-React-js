import React from 'react';
import  { useState } from 'react'
import { useParams } from 'react-router-dom';
import {useEffect}  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {

  const [values, setValues] = useState({
    name:'',
    email:'',
    phone:''
  });

  const {id} = useParams();

  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id)
    .then(res =>setValues(res.data))
    .catch(err => console.log(err) );
}, [])

const handleUpdate = (event)=>{
  event.preventDefault();

    axios.put('http://localhost:3000/users/'+ id,values)
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err))
    
}

  return (
    <div class="container">
    <form onSubmit={handleUpdate} class="mt-5 p-3 border rounded-3">
   <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Name</label>
       <input type="text" class="form-control" id="exampleFormControlInput1" value={values.name} onChange={e => setValues({...values,name:e.target.value})}  placeholder="John"/>
   </div>

   <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Email</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" value={values.email} onChange={e => setValues({...values,email:e.target.value})} placeholder="name@example.com"/>
   </div>

   <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Phone</label>
       <input type="tel" class="form-control" id="exampleFormControlInput1" value={values.phone} onChange={e => setValues({...values,phone:e.target.value})} placeholder="7778889990"/>
   </div>

   <button type="submit" className="btn btn-success">Submit</button>

   </form>
    </div>
  )
}

export default Update
