import React from "react";

export default function Instructions() {
  return (
    <div className="instructions">
      <h4>
        'Store' your salted, SHA256-hashed, and one-click retrievable
        passwords...
      </h4>
      <ol>
        <li>
          Pick a unique <span>KEYWORD</span> for the account you're making this password for.{" "}
        </li>
        <li>
          Pick a <span>SALT</span> - this is a generic word you use across all passwords. Make it memorable! And 3 letters or more. 
        </li>
        <li>Hit <span>GET</span> and paste it before crossing the popup!</li>
        <li>
          To retrieve your secure password, simply plug in the keyword and salt,
          and hit <span>GET</span>!
        </li>
      </ol>
      <p>
        With the same keyword and salt, you'll get the same secure password
        output every time. No password 'storage' in a word file, notepad, or
        manager. And retrieving it is as easy as remembering two simple
        words.
      </p>
    </div>
  );
}
