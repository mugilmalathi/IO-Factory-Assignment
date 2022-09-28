import React from 'react'
import "./Footer.scss"

// import fb from "../Assets/fb.svg"
// import insta from "../Assets/insta.svg"
// import twitter from "../Assets/twitter.svg"

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='foot'>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
        </div>
    </div>
  )
}

export default Footer