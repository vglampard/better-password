import React from 'react'

export default function Output({password}) {
  return (
    <div className="password"> {password ? "Your better password: " + password : ""}</div>
  )
}
