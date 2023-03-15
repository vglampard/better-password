import "./App.css";
import Input from "./Input/Input";
import { useState } from "react";
import Output from "./Output/Output";
import { buildPassword, hash } from "./constants/hashFunction";
import clipboardIcon from "./copy-content.png";

function App() {
  const [input, setInput] = useState("");
  const [salt, setSalt] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const STATES = {
    input,
    setInput,
    salt,
    setSalt,
    password,
    setPassword,
    showPassword,
    setShowPassword,
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
          <div className="input-container">
            <Input
              STATES={STATES}
              handleClick={() => handleClick(input, salt)}
            />
          </div>
          <div className="output-container">
            <Output password={STATES.password} />
          </div>
          <img
            src={clipboardIcon}
            alt="clipboard icon"
            onClick={() => navigator.clipboard.writeText(password)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
