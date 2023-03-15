import React from 'react'

export default function Output({password}) {
  return (
    <div> {password ? "Your better password:" + password : ""}</div>
  )
}
