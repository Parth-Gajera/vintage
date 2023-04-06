import React from 'react'

import Nav from "./Nav"
import Story from './Story'

const Home = () => {
  return (
    <>
      <div className='hero-image' id='Home'>

        <nav>
          <Nav />
        </nav>

        <div className='hero-text'>
          <div className='item'>
          <span style={{fontSize:'40px'}}>Vintage</span><br/>
          <span style={{fontSize:'40px',color:' #FF9900'}}>Hospitality</span>
          </div>
          <div className="item0">
          <p>The reason for our success is no secret. It comes down to one single principle that transcends time and geography, religion and culture. It’s the Golden Rule – the simple idea that if you treat people well, the way you would like to be treated, they will do the same.</p>
          <p> Isadore Sharpe</p>
          </div>
        </div>

      </div>
      <Story/>
    </>
  )
}

export default Home