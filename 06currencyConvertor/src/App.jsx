import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // from comes from:
  // const [from, setFrom] = useState("usd")
  //
  // useCurrencyInfo(from)
  // - from: selected currency (e.g. "usd")
  // - currencyInfo: stores the exchange rates returned by the hook


  // so the data is in json in the form of object so we need just keys not the value of the currency so we will just extract keys
  const currencyInfo = useCurrencyInfo(from)


  const options = Object.keys(currencyInfo)

  // Adding swap functionality means swapping two variables
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // adding multiplication functionality
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/818517624/photo/world-currency-exchange-table-graph.jpg?s=1024x1024&w=is&k=20&c=lRbzRhTTgGhuhsZc3zt3I3hGsIeD8DfDmr4Jo-VY03o=')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
