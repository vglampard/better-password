import React from 'react'
import logo from "./pw.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Hero() {
  const notify = () => toast("You could get a secure password generated and stored in a manager. But that's not always convenient. Here, all you need to do is remember the keyword, remember your salt word, and you can retrieve that auto-generated, sha256-hashed and salted all-requirements-meeting secure code any time!");

  return (
    <div>
        <img src={logo} alt="text that reads: your better password" className="logo"/>
        <div className="hero-text">
        <h2>Secure passwords, made memorable</h2>
        <button onClick={notify}>Why?</button>
        <ToastContainer />
        </div>
    </div>
  )
}
