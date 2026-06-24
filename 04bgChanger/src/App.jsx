import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white/30 backdrop-blur-md py-3 rounded-3xl shadow-lg gap-4 '>
 

        {/* 1st button */}
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{ backgroundColor: "red" }}>Red</button>


        {/* 2nd button */}
        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{ backgroundColor: "green" }}>Green</button>


        {/* 3rd button */}
        <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>


        {/* 4th button */}
        <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{ backgroundColor: "orange" }}>Orange</button>


        {/* 5th button */}
        <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{ backgroundColor: "purple" }}>Purple</button>

        {/* 6th button */}
        <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{ backgroundColor: "olive" }}>Olive</button>


        {/* 7th button */}
        <button onClick={() => setColor("teal")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg" style={{ backgroundColor: "teal" }}>Teal</button>

      </div>



    </div>
  )
}

export default App
