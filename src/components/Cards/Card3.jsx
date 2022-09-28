import React from 'react'
import "./cards.scss"

import pro1 from "../Assets/pro1.svg"
import pro3 from "../Assets/pro3.svg"
import pro2 from "../Assets/pro2.svg"

const Card3 = () => {
  return (
    <div className='card3'>
        <div className='varieties'>
            <div>TOP CHEFS</div>
            <div></div>
        </div>
        <div className='pan'>
            <div>
                <img src={pro1} alt="" />
                <div>Eileen Johnson</div>
                <div>Executive Chef, USA</div>
            </div>
            <div>
            <img src={pro3} alt="" />
                <div>Robert Downey Jr</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div>
            <img src={pro2} alt="" />
                <div>Amanda Dority</div>
                <div>Sous Chef, India</div>
            </div>
        </div>
    </div>
  )
}

export default Card3