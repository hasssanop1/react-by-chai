import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


let  [counter, setCounter] = useState(1)




  
// let counter = 1

const AddValue = () =>{
  if(counter >= 20){
    alert("counter value should not be greater than 20")
    return
  }
  counter = counter + 1
  setCounter(counter)
  console.log("clicked", counter)
}

const RemoveValue = () =>{
  if(counter <= 0){
    alert("counter value should not be less than 0")
    return
  }
  counter = counter - 1
  setCounter(counter)
  console.log("clicked", counter)
}

  return (
    <>
      
        <h1>chai or react </h1>
        <h2>counter value:{counter}</h2>

        <button onClick={AddValue}>Add value{counter}</button>
        <br />
        <button onClick={RemoveValue}>remove value{counter}</button>
        <p>footer:{counter}</p>
    </>
  )
}

export default App
