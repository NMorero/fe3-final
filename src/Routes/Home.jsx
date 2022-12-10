
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useState, useContext} from "react"
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card"
const Home = () => {
  const globalContext = useContext(ContextGlobal);
  
  if(!globalContext.dentists) return null;

  return (
    <main className={"main"+globalContext.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {globalContext.dentists.map((item) => <Card key={item.email} dentist={item}></Card>)}
      </div>
    </main>
  )
}

export default Home