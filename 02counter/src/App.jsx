import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
let counter = 2

const AddValue = () =>{
  console.log("clicked", Math.random())
  counter = counter+1
}
  return (
    <>
      
        <h1>chai or react </h1>
        <h2>counter value:{counter}</h2>

        <button onClick={AddValue}>Add value</button>
        <br />
        <button>remove value</button>
    </>
  )
}

export default App
