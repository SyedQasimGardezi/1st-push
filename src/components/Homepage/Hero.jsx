import React,{useEffect,useRef} from 'react'
import './hero.css'
import {gsap} from 'gsap'
function Hero() {
  const bigtext = useRef();
  const tl =gsap.timeline({defaults:{ease:'power1.out'}});
  useEffect(()=>{
    tl.to(bigtext.current,{duration:1,x:"0%",opacity:1,delay:5})
  })
  return (

    <div className='hero-section'>
      <div>
        <div className="hero-left">
          <h1 ref={bigtext} className='big-text'>Beginner JS Projects</h1>
        </div>
        <div className="hero-right">
          {/* <img src={} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Hero