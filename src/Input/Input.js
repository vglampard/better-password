import React from "react";

export default function Input({ STATES, handleClick }) {
  const { input, setInput, salt, setSalt } = STATES;

  function handleChange(e, setValue) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input
        onChange={(e) => handleChange(e, setInput)}
        type="text"
        value={input}
        placeholder="Keyword here..."
      />
      <input
        onChange={(e) => handleChange(e, setSalt)}
        type="text"
        value={salt}
        placeholder="Your salt here..."
      />
      <button onClick={handleClick}>Get</button>
    </div>
  );
}
