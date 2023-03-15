import React from 'react'

export default function Input({STATES, handleClick}) {
  const {input, setInput, salt, setSalt} = STATES
  
  function handleChange(e, setValue){
    setValue(e.target.value);
  }

  console.log("input ", input)
  return (
    <div>
      <input onChange ={(e)=>handleChange(e, setInput)} type = "text" value = {input} placeholder="password here"/>
      <input onChange ={(e)=>handleChange(e, setSalt)} type = "text" value = {salt} placeholder="salt here"/>
   <buttton onClick={handleClick}>Create password</buttton>
    </div>
  )
}
