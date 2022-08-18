import React,{useRef,useEffect} from 'react'
import {gsap} from 'gsap'
import { NavLink } from 'react-router-dom'
import './header.css'
function Header() { 
  const link1 = useRef();
  const link2 = useRef();
  const logo = useRef();
  const tl2 = gsap.timeline( )
  useEffect(()=>{
      tl2.to(link1.current,{x:'0%',opacity:1,delay:2.5,duration:1})
          .to(link2.current,{x:'0%',opacity:1},'-=0.5')
          .to(logo.current,1,{opacity:1})
  })
  return (
    <header>
      <div ref={logo} className="logo-header">JSX</div>
      <nav>
        <ul className='header-list'>
            <NavLink className='link' to='/1st-push'><li className='header-li' ref={link1}>Home</li></NavLink>
            <NavLink className='link' to='/'><li className='header-li' ref={link2}>Prop</li></NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header