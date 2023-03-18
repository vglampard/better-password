import React from 'react'


export default function Instructions() {

 

  return (
    <div className="instructions">
       
      <h4>'Store' your salted, SHA256-hashed, and one-click retrievable passwords...</h4>
      <ol>
    <li>Pick a unique KEYWORD for the account you're making this password for. </li>
        <li>Pick a 'SALT' - this is a word you'll reuse across all passwords, so make it MEMORABLE and GENERAL. Your name, perhaps?</li>
        <li>Hit 'create password.' Job done!</li>
        <li>To retrieve your secure password, simply plug in the keyword and salt, and hit retrieve!</li>
    </ol>
    <p>With the same keyword and salt, you'll get the same secure password output every time. No password 'storage' in a word file, notepad, or manager. And retrieving it is as easy as remembering a couple of simple words.</p>
    </div>
  )
}
