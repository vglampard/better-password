import React from 'react'
import clipboardIcon from "./copy-content.png"
export default function Output({password}) {
  return (
    <div >
      <div className="password"> {password ? "YOUR PASSWORD: " + password : ""}
      <img
            src={clipboardIcon}
            alt="clipboard icon"
            onClick={() => navigator.clipboard.writeText(password)}
          />
  </div></div>
      
  )
}
