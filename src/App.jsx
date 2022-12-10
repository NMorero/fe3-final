
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route} from "react-router-dom"
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'


import {useEffect, useState, useContext} from "react"
import axios from "axios"
import { ContextGlobal } from "./Components/utils/global.context";
function App() {
  const globalContext = useContext(ContextGlobal);



  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users",{
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      })
      .then((res) => {
        console.log(res)
        globalContext.changeDentists(res.data)
      })      
    }
    catch (e) {
      console.log(e)
    }
  }, [])

  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/favs' element={<Favs/>} />
            <Route path='/dentist/:id' element={<Detail />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
