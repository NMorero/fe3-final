import { useEffect } from "react";
import { useState } from "react";
import {useContext} from "react";
import {Link} from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";


const Card = ({dentist}) => {
  const globalContext = useContext(ContextGlobal);
  const [dentistInFavs, setDentistInFavs] = useState(globalContext.dentistInFavs(dentist))

  const addFav = ()=>{
    console.log("fav")
    globalContext.addFav(dentist)
    setDentistInFavs(true)
  }
  const removeFav = ()=>{
    console.log("fav")
    globalContext.removeFav(dentist)
    setDentistInFavs(false)
  }

  

  return (
    <div className={"card "+globalContext.theme}>
      <Link to={"/dentist/"+dentist.id}><img className="doctorImg" src="images/doctor.jpg" alt="" /></Link>
      <span>{dentist.name}</span>  
      <span>{dentist.username}</span>  
      
      {
      <button onClick={ dentistInFavs ? removeFav : addFav} className="favButton"><img src={dentistInFavs ? "images/star.png" : "images/star_empty.png"} alt="" width="15px" /></button>
      }
      
      
    </div>
  );
};

export default Card;

/* En cada card deberan mostrar en name - username y el id */
/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */
/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */