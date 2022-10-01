import React,{useRef,useEffect} from 'react'
import {gsap} from 'gsap'
import { NavLink } from 'react-router-dom'
import './projects.css'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
    const one = useRef();
    const two = useRef();
    const three = useRef();
    const four = useRef();
    const five = useRef();
    const six = useRef();
    useEffect(()=>{
        gsap.fromTo(one.current,{opacity:0,y:'100'},{opacity:1,duration:0.2,y:'0',scrollTrigger:{
            trigger:one.current,start:'top bottom'
        }})
        gsap.fromTo(two.current,{opacity:0,y:'100'},{opacity:1,duration:0.2,y:'0',scrollTrigger:{
            trigger:two.current,start:'top bottom'
        }})
        gsap.fromTo(three.current,{opacity:0,y:'100'},{opacity:1,duration:0.2,y:'0',scrollTrigger:{
            trigger:three.current,start:'top bottom'
        }})
        gsap.fromTo(four.current,{opacity:0,y:'100'},{opacity:1,duration:0.2,y:'0',scrollTrigger:{
            trigger:four.current,start:'top bottom'
        }})
        gsap.fromTo(five.current,{opacity:0,y:'100'},{opacity:1,duration:0.2,y:'0',scrollTrigger:{
            trigger:five.current,start:'top bottom'
        }})
        gsap.fromTo(six.current,{opacity:0,y:'100'},{opacity:1,duration:0.2,y:'0',scrollTrigger:{
            trigger:six.current,start:'top bottom'
        }});

    })

    const onHover1=()=>{
        gsap.fromTo(one.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.1})
        gsap.to(one.current,{backgroundImage:'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',duration:0.5})
    }
    const onLeave1=()=>{
        gsap.to(one.current,{duration:0.1,scale:1})
        gsap.to(one.current,{backgroundImage:'linear-gradient(to right, #8360c3, #2ebf91)',duration:0.5})
    }
    const onHover2=()=>{
        gsap.fromTo(two.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.1})
        gsap.to(two.current,{backgroundImage:'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',duration:0.5})
    }
    const onLeave2=()=>{
        gsap.to(two.current,{duration:0.1,scale:1})
        gsap.to(two.current,{backgroundImage:'linear-gradient(to right, #8e2de2, #4a00e0)',duration:0.5})
    }
    const onHover3=()=>{
        gsap.fromTo(three.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.1})
        gsap.to(three.current,{backgroundImage:'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',duration:0.5})
    }
    const onLeave3=()=>{
        gsap.to(three.current,{duration:0.1,scale:1})
        gsap.to(three.current,{backgroundImage:'radial-gradient(circle farthest-corner at 22.4% 21.7%, rgba(4, 189, 228, 1) 0%, rgba(2, 83, 185, 1) 100.2%)',duration:0.5})
    }
    const onHover4=()=>{
        gsap.fromTo(four.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.1})
        gsap.to(four.current,{backgroundImage:'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',duration:0.5})
    }
    const onLeave4=()=>{
        gsap.to(four.current,{duration:0.1,scale:1})
        gsap.to(four.current,{backgroundImage:'linear-gradient(to right, #fc5c7d, #6a82fb)',duration:0.5})
    }
    const onHover5=()=>{
        gsap.fromTo(five.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.1})
        gsap.to(five.current,{backgroundImage:'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',duration:0.5})
    }
    const onLeave5=()=>{
        gsap.to(five.current,{duration:0.1,scale:1})
        gsap.to(five.current,{backgroundImage:'linear-gradient(109.6deg, rgba(156, 252, 248, 1) 11.2%, rgba(110, 123, 251, 1) 91.1%)',duration:0.5})
    }
    const onHover6=()=>{
        gsap.fromTo(six.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.1})
        gsap.to(six.current,{backgroundImage:'linear-gradient(to top, #0fd850 0%, #f9f047 100%)',duration:0.5})
    }
    const onLeave6=()=>{
        gsap.to(six.current,{duration:0.1,scale:1})
        gsap.to(six.current,{backgroundImage:'linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',duration:0.5})
    }
    

    return (
        <div id='projects'>
            <h1 className='heading-project'>JS Projects</h1>
            <div className='project-section'>
                <NavLink ref={one} onMouseOver={onHover1} onMouseLeave={onLeave1} className="card one" to='/calculator'>
                    <div>
                        <div className='projectimg calc'></div>
                        <h1 className='projectName'>Calculator</h1>
                        <p className='projectDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, voluptates.</p>
                    </div>
                </NavLink>
                <NavLink ref={two} onMouseOver={onHover2} onMouseLeave={onLeave2} className="card two" to='/stopwatch'>
                    <div>
                        <div className='projectimg stopwatch'></div>
                        <h1 className='projectName'>Stopwatch</h1>
                        <p className='projectDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, placeat.</p>
                    </div>
                </NavLink>
                <NavLink ref={three} onMouseOver={onHover3} onMouseLeave={onLeave3} className="card three" to='/palindrome'><div >
                    <div className='projectimg palindrome'></div>
                    <h1 className='projectName'>Palindrome</h1>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, est.</p>
                </div></NavLink>
                <NavLink ref={four} onMouseOver={onHover4} onMouseLeave={onLeave4} className="card four" to='/random'><div>
                    <div className='projectimg random'></div>
                    <h1 className='projectName'>High/Low</h1>
                    <p className='projectDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, libero.</p>
                </div></NavLink>
                <NavLink ref={five} onMouseOver={onHover5} onMouseLeave={onLeave5} className="card five" to='/clock'><div>
                    <div className='projectimg time'></div>
                    <h1 className='projectName'>Clock</h1>
                    <p className='projectDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, nulla.</p>
                </div></NavLink>
                <NavLink ref={six} onMouseOver={onHover6} onMouseLeave={onLeave6} className="card six" to='/calculator'><div>
                    <div className='projectimg test'></div>
                    <h1 className='projectName'>Test</h1>
                    <p className='projectDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, rem?</p>
                </div></NavLink>




            </div>
        </div>
    )
}

export default Projects