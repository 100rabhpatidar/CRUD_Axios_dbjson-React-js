import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/users")
        .then(res =>setData(res.data))
        .catch(err => console.log(err) );
    }, [])

    const handleDelete = (id) => {
      axios.delete("http://localhost:3000/users/"+id)
      .then(res => {
        location.reload()
        console.log(res)
      })
      .catch(err => console.log(err) );
    }


  return (
    <div className="container pt-5">
        <h2>CRUD APP by using dbjson, React, Axios</h2>
        <Link to="/create" type="button" class="btn btn-success my-3">
        Create+
      </Link>
<table className="table table table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

    {
        data.map((d, i) => (
           <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.phone}</td> 
        <td>
        <Link to={`/update/${d.id}`} type="button" className="btn btn-primary btn-sm">Edit</Link>
        <button onClick={e => handleDelete(d.id)} type="button" className="btn btn-danger btn-sm ms-2">Delete</button>
        </td>
      </tr>
      
        ))

    }
        

      

    

  </tbody>
</table>
    </div>
  )
}

export default Home
