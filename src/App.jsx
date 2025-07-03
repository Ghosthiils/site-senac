import { useState } from 'react'
// import reactLogo from './assets/react.svg';
import senaclogo from './assets/senac.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <a href="https://sp.senac.br/americana" target="_blank">
          <img src={senaclogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Começando com react</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador é {count}
        </button>
        <p>
         Clique na imagem e confira nossos cursos
        </p>
      </div>
      <p className="read-the-docs">
       Beba água...
      </p>
    </>
  )
}

export default App
