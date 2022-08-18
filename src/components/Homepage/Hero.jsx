import React, { useEffect, useRef } from 'react'
import './hero.css'
import { gsap } from 'gsap'
function Hero() {
  const bigtext = useRef();
  const buttonref = useRef();
  const bigtext2 = useRef();
  const section1 = useRef();
  const section2 = useRef();
  const sectiontl = gsap.timeline();
  const click=()=>{
    
    sectiontl.fromTo(section2.current,{clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'},{duration:0.1,clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
    sectiontl.fromTo(section1.current,{duration:0.1,clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)'},{clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'})
    gsap.to(section1.current,{zIndex:-5,delay:1})
    gsap.to(section2.current,{zIndex:0,delay:0},"-=1")
  }
  const section2tl = gsap.timeline();
  const click2=()=>{
    section2tl.fromTo(section1.current,{clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'},{duration:0.1,clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
    section2tl.fromTo(section2.current,{duration:0.1,clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)'},{clipPath:'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'})
    gsap.to(section2.current,{zIndex:-5,delay:0.5})
    gsap.to(section1.current,{zIndex:0,delay:0},"-=0.5")
  }
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
  useEffect(() => {
    tl.to(bigtext.current, { duration: 1, x: "0%", opacity: 1, delay: 3})
      .fromTo(buttonref.current,{opacity:0},{opacity:1,duration:0.2},"-=1")
  })
  return (
    <>
      <div ref={section1} className='hero-section'>
        <div>
          <div className="hero-content">
            <h1 ref={bigtext} className='big-text'>You Like Sun?</h1>
            <button onClick={click} ref={buttonref} className='hero-button'>Yeah I Guess</button>
          </div>
        </div>
      </div>
      <div ref={section2} className="hero-section2">
        <div>
          <div className="hero-content2">
            <h1 ref={bigtext2} className='big-text2'>No Sun for You!</h1>
            <button onClick={click2} className='hero-button hero-button2-index'>Ah shit!</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero