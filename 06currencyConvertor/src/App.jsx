import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount , setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("pkr")
  const [convertedAmount , setConvertedAmount ] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Currency Converter
      </h1>
    </>
  )
}

export default App
