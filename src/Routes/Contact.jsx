import {useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const globalContext = useContext(ContextGlobal);

  return (
    <main className={'main'+globalContext.theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact