import './App.css';
import Input from './Input/Input';
import { useState } from 'react';
import Output from './Output/Output';
import { buildPassword, hash } from './constants/hashFunction';
function App() {

const [input, setInput] = useState("")
const [salt, setSalt] = useState("")
const [password, setPassword] = useState("")
// const PEPPER = process.env.REACT_APP_PEPPER
const STATES = {
  "input": input, 
  "setInput": setInput,
  "salt": salt, 
  "setSalt": setSalt,
  "password": password,
  "setPassword": setPassword,
}

async function handleClick(input, salt){
  let hashed = await hash(input+salt)

let strongPassword = buildPassword(hashed, salt)
console.log("STRONG PASSWORD:", strongPassword)
setPassword(strongPassword);
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
