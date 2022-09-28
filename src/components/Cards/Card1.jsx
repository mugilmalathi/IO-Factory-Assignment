import React from 'react'
import "./cards.scss"

import pizza from "../Assets/pizza.svg"
import finger from "../Assets/finger.svg"
import rice from "../Assets/rice.svg"
import cookie from "../Assets/cookie.svg"
import donet from "../Assets/donet.svg"

const Card1 = () => {
  return (
    <div className='card1'>
        <div className='varieties'>
            <div>VARIETIES</div>
            <div></div>
        </div>
        <div className='card1-one'>
            <div className='card1-left'>
              <img src={pizza} alt="" />
              <div className='opacity'>
                <div>
                    <div>Pizza is a savory dish of Italian origin</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil praesentium recusandae rem porro.</div>
                    <div></div>
                    <div><button>Explore</button></div>
                </div>
              </div>
            </div>
            <div className='card1-right'>
                <div>
                    <img src={finger} alt="" />
                    <div className='opacity1'>
                        <div>
                            <div>Pizza is a savory dish of Italian origin</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil praesentium recusandae rem porro.</div>
                            <div></div>
                            <div><button>Explore</button></div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={rice} alt="" />
                    <div className='opacity1'>
                        <div>
                            <div>Pizza is a savory dish of Italian origin</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil praesentium recusandae rem porro.</div>
                            <div></div>
                            <div><button>Explore</button></div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={cookie} alt="" />
                    <div className='opacity3'>
                        <div>
                            <div>Pizza is a savory dish of Italian origin</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil praesentium recusandae rem porro.</div>
                            <div></div>
                            <div><button>Explore</button></div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={donet} alt="" />
                    <div className='opacity1'>
                        <div>
                            <div>Pizza is a savory dish of Italian origin</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil praesentium recusandae rem porro.</div>
                            <div></div>
                            <div><button>Explore</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card1