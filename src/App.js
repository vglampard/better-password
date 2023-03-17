import "./App.css";
import Input from "./Input/Input";
import { useState } from "react";
import Output from "./Output/Output";
import { buildPassword, hash } from "./constants/hashFunction";
import Hero from "./Hero/Hero";
import Instructions from "./Instructions/Instructions";

function App() {
  const [input, setInput] = useState("");
  const [salt, setSalt] = useState("");
  const [password, setPassword] = useState("");
  const [explanation, setExplanation] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const STATES = {
    input,
    setInput,
    salt,
    setSalt,
    password,
    setPassword,
    explanation,
    setExplanation,
    instructions,
    setInstructions,
  };

  async function handleClick(input, salt) {
    let hashed = await hash(input + salt);
    let strongPassword = buildPassword(hashed, salt);
    setPassword(strongPassword);
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="app-container">
          <div className="hero-container">
            <Hero />
          </div>
          <div className="contents">
          <div className="input-container">
            <Input
              STATES={STATES}
              handleClick={() => handleClick(input, salt)}
            />
          </div>
          <div className="output-container">
            {password !== "" && <Output password={STATES.password} />}
          </div>

          <button
            onClick={() => {
              setInstructions(!instructions);
            }}
          >
            Instructions
          </button>
          {instructions && <Instructions />}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
