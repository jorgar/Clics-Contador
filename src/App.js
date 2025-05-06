import './App.css';
import { Boton } from './Componentes/Boton';
import Contador from './Componentes/Contador';
import Logo from './img/Logo.png';
import { useState } from 'react'; //Esta libreria es posible crear los estados en react (HOOK)

function App() {

  const [numClics, setnumClics] = useState(0);

  const manejarClic = () => {
    setnumClics(numClics + 1);
  }

  const ReiniciarClic = () => {
    setnumClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={Logo}
          alt='logo Gotty' />
      </div>
      <div className='cont-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto="Clic"
          BtnClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          BtnClic={false}
          manejarClic={ReiniciarClic} />

      </div>

    </div>
  );
}

export default App;
