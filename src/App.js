/* eslint-disable */
import "./App.css";
import Input from "./Input/Input";
import { useState, useEffect, useRef } from "react";
import Output from "./Output/Output";
import { buildPassword, hash, buildNoUnderscorePassword } from "./constants/hashFunction";
import Hero from "./Hero/Hero";
import Instructions from "./Instructions/Instructions";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particlesData/particlesOptions.js";
import { toast } from "react-toastify";

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
  const isMounted = useRef(false);
  const PEPPER = process.env.REACT_APP_PEPPER;
  const output = () => toast(<Output password={password} />);

  async function handleClick(input, salt) {
    let hashed = await hash(input + salt + PEPPER);
    let strongPassword = buildPassword(hashed, salt);
    setPassword(strongPassword);
  }

  async function handleClickNoUnderscore(input, salt) {
    let hashed = await hash(input + salt + PEPPER);
    let strongPassword = buildNoUnderscorePassword(hashed, salt);
    setPassword(strongPassword);
  }

  

  useEffect(() => {
    if (isMounted.current) output();
    else {
      isMounted.current = true;
    }
  }, [password]);

  const particlesInit = useCallback(async (Engine) => {
    await loadFull(Engine);
  }, []);

  const particlesLoaded = useCallback(async (Container) => {}, []);

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
              handleClickNoUnderscore = {()=>handleClickNoUnderscore(input, salt)}
            />

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
