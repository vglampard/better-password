import "./App.css";
import Input from "./Input/Input";
import { useState } from "react";
import Output from "./Output/Output";
import { buildPassword, hash } from "./constants/hashFunction";
import Hero from "./Hero/Hero";
import Instructions from "./Instructions/Instructions";
import { motion } from "framer-motion";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import particlesOptions from "./particlesData/particlesOptions.js";

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

  const particlesInit = useCallback(async (Engine) => {
    console.log(Engine);
    await loadFull(Engine);
  }, []);

  const particlesLoaded = useCallback(async (Container) => {
    await console.log(Container);
  }, []);
  return (
    <div className="App">
     <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
   
      <header className="App-header">
        <div className="app-container">
          <div className="hero-container">
            <Hero />
          </div>

          <div className="contents">
            <Input
              STATES={STATES}
              handleClick={() => handleClick(input, salt)}
            />

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
            {instructions && (
              <motion.div initial={{ x: "-100%" }} animate={{ x: "calc(6vw)" }}>
                {" "}
                <Instructions />
              </motion.div>
            )}
          </div>
        </div>
      </header>
      </div>
  );
}

export default App;
