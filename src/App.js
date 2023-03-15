import './App.css';
import Input from './Input/Input';
import { useState } from 'react';
import Output from './Output/Output';

function App() {

const [input, setInput] = useState("")
const [salt, setSalt] = useState("")
const [password, setPassword] = useState("")

const STATES = {
  "input": input, 
  "setInput": setInput,
  "salt": salt, 
  "setSalt": setSalt,
  "password": password,
  "setPassword": setPassword,
}

function handleClick(password, salt, setPassword){
  // function that CREATES S&P&H password
let newPassword = password.splice(0, 1, "$") + salt;
console.log("NP:", newPassword)
setPassword(newPassword);
}

  return (
    <div className="App">
      <header className="App-header">
       <Input STATES={STATES} handleClick={()=>handleClick(password, salt, setPassword)}/>
       <Output states={STATES}/>

      </header>
    </div>
  );
}

export default App;
