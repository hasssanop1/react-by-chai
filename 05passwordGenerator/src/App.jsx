import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  // password generation logic will be implemented here
  const  [password, setPassword] = useState("")

  //password gnerator function
  const genratePassword = (()=>{
    let pass = ""
    let string = ""
    let includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let includeLowercase = "abcdefghijklmnopqrstuvwxyz"
    let includeNumbers = "0123456789"
    let includeSymbols = "!@#$%^&*()-+=_<>?/"


    if(includeUppercase){
      pass += includeUppercase
    }
    if(includeLowercase){
      pass += includeLowercase
    }
    if(includeNumbers){
      pass += includeNumbers
    }
    if(includeSymbols){
      pass += includeSymbols
    }
    

    // Loop
    for(let i = 1; i < Array.length; i++){
      let character = Math.floor(Math.random() * pass.length +1) 
      pass = str.charAt(character)

      setPassword(pass)
    }
  } ,[length, includeUppercase, includeLowercase, includeNumbers , includeSymbols , setPassword])

  return (
    <>
    <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-700 ">
      <div className="flex-shadow rounded-lg  overflow-hidden mb-4">
        <input type="text" 
        value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="password"
          readOnly
          ></input>

      </div>
    </div>
    </>
  )
}

export default App
