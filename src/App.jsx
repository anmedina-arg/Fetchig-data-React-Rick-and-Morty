import './App.css'
import Title from './components/title';
import MainCards from './components/main';

/*
Recuerden que comenzamos haciendo todo en este archivo, pero es una buena práctica, mantener este archivo lo "más limpio" posible.

Entonces luego de verificar que todo funcione bien, podemos extraer en distintos componentes
*/

function App() {

  return (
    <>
      <Title/>
      <MainCards/>
    </>
  )
}

export default App
