import React from 'react'

export default function Explanation() {
  return (
    <div>
       <p>You could get a secure password generated and stored in a manager. But that's not always convenient. Here, all you need to do is remember your keyword, remember your salt word, and you can retrieve and copy that secure password at any time!
       </p>
       <p>This version uses sha256 hashing, salting, and a bit of extra chicanery to ensure you get a unique, secure password that hits all the common pasword requirements.</p>
       <p>Alan wants to generate a secure LinkedIn password? Well, if he remembers the keword "linkedin", and uses "alan" as his personal salt, he can genreate the same secure string each time.</p>
    </div>
  )
}
