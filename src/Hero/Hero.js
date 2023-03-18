import React from 'react'
import info from "./information-button.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
 
  const notify = () =>
    toast(
      "Auto-generated, sha256-hashed and salted all-requirements-meeting secure passwords, retrievable every time with just two simple keywords!"
    );
  return (
    <div>
        <div className="hero">
        <p className="hero-text">SECURE PASSWORDS, MADE MEMORABLE<img src = {info} alt="information" onClick={notify}/></p>
      
  <ToastContainer />
        </div>
    </div>
  )
}
