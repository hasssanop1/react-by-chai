import { useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = () => {
    let pass = "";
    let chars = "";

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-+=_<>?/";

    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    if (!chars) {
      alert("Please select at least one character type.");
      return;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }

    setPassword(pass);
  };

  const copyPasswordToClipboard = useCallback(async () => {
    if (!password) {
      alert("Generate a password first!");
      return;
    }

    try {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, password.length);

      await navigator.clipboard.writeText(password);

      alert("Password copied!");
    } catch (err) {
      console.error("Copy failed:", err);
      alert("Failed to copy password.");
    }
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-2xl font-bold text-center my-3">
        Password Generator
      </h1>

      <div className="rounded-lg overflow-hidden mb-4">
        <div className="flex">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-2 text-sm mt-4">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <label>Include Uppercase</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            <label>Include Lowercase</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <label>Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <label>Include Symbols</label>
          </div>

          <button
            onClick={generatePassword}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;