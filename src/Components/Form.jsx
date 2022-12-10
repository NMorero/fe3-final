import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [validForm, setValidForm] = useState(true)

  const inputNameChange = (e) => {
    setName(e.target.value)
  }

  const inputEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if(name.length < 5 || email.length < 5){
      setValidForm(false)
      return
    }
    if(!email.includes("@gmail.com") && !email.includes("@hotmail.com")){
      setValidForm(false)
      return
    }
    setValidForm(true)
    console.log("Submit")
  }
  

  return (
    <div>
      <form>
        <input type="text" placeholder="Full name" onChange={inputNameChange} required />
          {validForm ? null :<span className="inputErr">This field is obligatory, must contain at least 5 letters</span>}
        <input type="text" placeholder="email" onChange={inputEmailChange} required />
        {validForm ? null :<span className="inputErr">This field is obligatory, must contain @gmail.com or @hotmail.com</span>}
        <button onClick={submitForm}>Send</button>
      </form>
    </div>
  );
};

export default Form;
