import { createContext, useState, useEffect, useReducer } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const favsReducer = (state, action) => {
  console.log(action.type)
  switch (action.type) {
    case "ADD":
      if(state.includes(action.payload)) return state;
      state.push(action.payload)
      return state;
    case "REMOVE":
        const index = state.indexOf(action.payload);
        if (index > -1) { 
          state.splice(index, 1);
        }
        return state;
    default:
      return state;
    }
};
export const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT":
      return "Light";
    case "DARK":
        return "Dark";
    default:
      return state;
    }
  };

export const ContextProvider = ({ children }) => {

  const [dentists, setDentists] = useState(getDataFromStorage("dentists")?? []);
  const changeDentists = (dentists) => setDentists(dentists);

  const [favs, dispatchFavs] = useReducer(favsReducer, getDataFromStorage("favs") ?? []);
  
  console.log(favs)
  const addFav = (dentist) => dispatchFavs({type: "ADD", payload: dentist});
  const removeFav = (dentist) => dispatchFavs({type: "REMOVE", payload: dentist});

  const [theme, dispatchTheme] = useReducer(themeReducer, getDataFromStorage("theme") ?? "Light");

  useEffect(() => {
    setDataInStorage(dentists, "dentists");
    setDataInStorage(favs, "favs")
    setDataInStorage(theme, "theme")
  }, [dentists, favs, theme]);
  console.log(theme)

  const dentistInFavs = (id) => {
    if(favs === null) return false;
    return favs.includes(id);
  }
  console.log( favs)
  return (
    <ContextGlobal.Provider value={{dentists, changeDentists, favs, addFav,removeFav, dentistInFavs, theme, dispatchTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

const getDataFromStorage = (storageName) => {
  const localData = localStorage.getItem(storageName);
  if(localData === "undefined") return null;
  return localData ?  JSON.parse(localData) : null;
};

const setDataInStorage = (data, storageName) =>
localStorage.setItem(storageName, JSON.stringify(data));