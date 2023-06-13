import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bootstrapLogo from './assets/Bootstrap-logo.png'
import ModoOscuro from "./components/ModoOscuro"
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Logo Vite" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo logo-spin" alt="Logo React" />
        </a>
        <a href="https://getbootstrap.com" target="_blank">
          <img src={bootstrapLogo} className="logo" alt="Logo Bootstrap" />
        </a>
      </div>
      <h1>Vite + React + Bootstrap</h1>
      <div className="card">
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          Número de clicks: <b>{count}</b>
        </button>
        <ModoOscuro />
        <p>
          Edita el archivo <code>src/App.jsx</code> para empezar a crear en React.
        </p>
      </div>
      <p className="read-the-docs">
        Haz click en los logos para aprender sobre cada librería
      </p>
    </div>
  )
}

export default App
