import { useState } from 'react'
import './App.css'
import Header from './components/header/index.jsx'
import FormularioDeEvento from './components/formularioDeEvento/index.jsx'

function App() {
  return (
    <main>
      <Header/>
      <FormularioDeEvento/>
    </main>
  )
}

export default App
