import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { toWords } from "number-to-words";



function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState("")

  // from comes from:
  // const [from, setFrom] = useState("usd")
  //
  // useCurrencyInfo(from)
  // - from: selected currency (e.g. "usd")
  // - currencyInfo: stores the exchange rates returned by the hook

  const roundedAmount = Math.floor(convertedAmount || 0);


  // so the data is in json in the form of object so we need just keys not the value of the currency so we will just extract keys
  const currencyInfo = useCurrencyInfo(from)


  const options = Object.keys(currencyInfo)

// convert amount into words 
  const amountInWords = toWords(Math.floor(convertedAmount || 0));

// now uppercasing them 
  const formattedAmountInWords =
  amountInWords.charAt(0).toUpperCase() + amountInWords.slice(1);

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
              convert()

            }}
          >
            {/* From Box */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              {/* To Box  */}
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toLocaleUpperCase()} to {to.toUpperCase()}
                

              {convertedAmount !== "" && (
                <div className="mt-4 p-3 rounded-lg bg-white/20 text-white text-center">
                  {formattedAmountInWords} {to.toUpperCase()}
                </div>
              )}


            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
