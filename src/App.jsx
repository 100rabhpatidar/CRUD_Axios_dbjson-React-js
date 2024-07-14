import React from "react"
import Update from "./component/Update"
import Home from "./component/Home"
import Create from "./component/Create"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  

  return (
    <> 

    
    
        <Router>
              <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/create" element={<Create/>} /> 
                <Route path="/update/:id" element={<Update/>} />
              </Routes>
        </Router>

    
        
        
    </>
  )
}

export default App
