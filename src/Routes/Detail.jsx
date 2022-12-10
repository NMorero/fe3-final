import {useEffect, useState, useContext} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios"
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const globalContext = useContext(ContextGlobal);

  const {id} = useParams()
  const [dentist, setDentist] = useState(null)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const makeAPICall = () => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users/"+id, {
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      })
      .then((res) => {
        setDentist(res.data)
      })      
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall();
  }, [])

  if(!dentist) return null;
  return (
    <main className={"main"+globalContext.theme}>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='details'> 
          <div>
            <span className='title'>Name</span>
          </div>
          <div>
            <span className='title'>Email</span>
          </div>
          <div>
            <span className='title'>Phone</span>
          </div>
          <div>
            <span className='title'>Website</span>
          </div>
      </div>
      <div className='details'> 
          <div>
            <span>{dentist.name}</span>
          </div>
          <div>
            <span>{dentist.email}</span>
          </div>
          <div>
            <span>{dentist.phone}</span>
          </div>
          <div>
            <span>{dentist.website}</span>
          </div>
      </div>
    </main>
  )
}

export default Detail