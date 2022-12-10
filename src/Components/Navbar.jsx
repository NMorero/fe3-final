import { useContext } from 'react'
import {Link} from "react-router-dom"
import { ContextGlobal } from './utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const globalContext = useContext(ContextGlobal);

  const toogleThemeMode = (value) => {
    globalContext.dispatchTheme({type: value})
  }

  return (
    <nav className={"nav"+globalContext.theme}>
      <img src="images/DH.png" alt="" />
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/favs">Favs</Link>
        <Link to="/contact">Contact</Link>
        {
          globalContext.theme === "Light" 
          ? <button onClick={() => toogleThemeMode("DARK")}>
              <img src="images/moon.png" alt=""  width="20" height="20"/>
            </button>
          : <button onClick={() => toogleThemeMode("LIGHT")}>
              <img src="images/sun.png" alt=""  width="20" height="20"/>
            </button>
        }
      </div>
    </nav>
  )
}

export default Navbar