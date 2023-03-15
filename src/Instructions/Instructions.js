import React from 'react'

export default function Instructions() {
  return (
    <div className="instructions"><ol>
    <li>Pick a unique KEYWORD for the account you're making this password for. </li>
        <li>Pick a 'SALT' - this is a word you'll reuse across all passwords, so make it MEMORABLE and GENERAL. Your name, perhaps?</li>
        <li>Hit 'create password.' Job done!</li>
        <li>To retrieve your secure password, simply plug in the keyword and salt, and hit retrieve!</li>
    </ol>
    <h3>For example...</h3><p>Say I'm looking for a new LinkedIn password. I might use the keyword 'linkedin', the salt 'victoria', and I get a high security password generated - that I can access at any point! </p>
    <p>It's not stored anywhere, it's guaranteed the same every time, and it's as easy as remembering 'linkedin' and my own damn name.</p>
    </div>
  )
}
