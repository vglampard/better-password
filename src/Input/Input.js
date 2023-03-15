import React from 'react'

export default function Input({input, setInput, handleClick}) {
  function handleChange(e){
    setInput(e.target.value);
  }
  console.log("input:", input)
  return (
    <div>
      <input onChange ={handleChange} type = "text" value = {input} placeholder="password here"/>
   <buttton onClick={handleClick}>Create password</buttton>
    <p>input: {input}</p>
    </div>
  )
}
