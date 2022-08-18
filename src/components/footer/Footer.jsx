import React,{useRef,useEffect} from 'react'
import {gsap} from 'gsap'
import './footer.css'
import { Icon } from '@iconify/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function Footer() {
  const footer = useRef();
  const fLogo = useRef();
  const trigger = useRef();
  const tlFooter = gsap.timeline() 
  useEffect(()=>{
    tlFooter.to(footer.current,2,{x:'0%',opacity:1,scrollTrigger:{
      trigger:trigger.current,start:'top bottom'}})
      .to(fLogo.current,2,{opacity:1,scrollTrigger:{
        trigger:trigger.current,start:'top bottom'}})

  })
  return (
    <div>
      <footer ref={trigger}>
      <div ref={fLogo} className="logo-footer">JSX</div>
      <nav>
        <ul ref={footer} className='footer-list'>
            <li className='footer-li'><a href="#"><Icon style={{'color':'blue'}} icon="akar-icons:instagram-fill" /></a></li>
            <li className='footer-li'><a href="#"><Icon style={{'color':'blue'}} icon="fontisto:facebook" /></a></li>
            <li className='footer-li'><a href="#"><Icon style={{'color':'blue'}} icon="akar-icons:twitter-fill" /></a></li>
        </ul>
      </nav>
    </footer>
    </div>
  )
}

export default Footer