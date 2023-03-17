import React from 'react'
import { motion } from "framer-motion"


export default function Instructions() {

 

  return (
    <div className="instructions">
       <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
      <h4>'Store' your salted, SHA256-hashed, and one-click retrievable passwords...</h4>
      <ol>
    <li>Pick a unique KEYWORD for the account you're making this password for. </li>
        <li>Pick a 'SALT' - this is a word you'll reuse across all passwords, so make it MEMORABLE and GENERAL. Your name, perhaps?</li>
        <li>Hit 'create password.' Job done!</li>
        <li>To retrieve your secure password, simply plug in the keyword and salt, and hit retrieve!</li>
    </ol>
    <p>With the same keyword and salt, you're guaranteed to get the same secure password output every time. No password 'storage' in a word file, notepad, or manager. And retrieving it is as easy as remembering a couple of memorable words.</p>
    <h4>For example...</h4><p>Say I'm looking for a new LinkedIn password. I might use the keyword 'linkedin', the salt 'victoria', and I get a high security password generated - that I can access at any point by entering in those two words. Simple! <br></br><br></br>(and, for the record, NOT my LinkedIn password...) </p>
   </motion.div>
    </div>
  )
}
