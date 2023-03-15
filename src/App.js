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

function handleClick(input, salt){
  // function that CREATES S&P&H password (e.g. here for checks)
  let arr = (input+salt).split('')
arr.splice(1, 0, "$");
setPassword(arr.join(''));
}



  return (
    <div className="App">
      <header className="App-header">
       <Input STATES={STATES} handleClick={()=>handleClick(input, salt)}/>
       <Output password={STATES.password}/>
       <button onClick = {()=>navigator.clipboard.writeText(password)}  >Copy to clipboard</button>
      </header>
    </div>
  );
}

export default App;
