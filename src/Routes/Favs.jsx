import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const globalContext = useContext(ContextGlobal);
  
  if(!globalContext.favs) return null;

  return (
    <main className={"main"+globalContext.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <div className='card-grid'>
          {globalContext.favs.map((item) => <Card key={item.email} dentist={item}></Card>)}
        </div>
      </div>
     </main>
  );
};

export default Favs;
