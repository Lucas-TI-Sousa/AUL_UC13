import { useState } from 'react'
import './App.css'
import Item from './item.jsx';

function App() {

  const lista = ['nike', 'adidas', 'oasis']

  return (
    <>
      <div>
        <button>Inicio</button>
        <button>Carregar lista</button>
      </div>

      <Item nome={lista[0]} />
      <Item nome={lista[1]} />
      <Item nome={lista[2]} />

    </>
  )
}

export default App