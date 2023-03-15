import './App.css';
import Input from './Input/Input';
import { useState } from 'react';

function App() {

const [input, setInput] = useState("")
function handleClick(){
  // function that CREATES S&P&H password
}

  return (
    <div className="App">
      <header className="App-header">
        
       <Input setInput={setInput} input={input} handleClick={handleClick}/>
      </header>
    </div>
  );
}

export default App;
