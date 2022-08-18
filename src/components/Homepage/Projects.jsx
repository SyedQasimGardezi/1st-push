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
        gsap.fromTo(one.current,{scale:0,duration:0.5},{scale:1,duration:0.5,scrollTrigger:{
            trigger:one.current,start:'top bottom'
        }})
        gsap.fromTo(two.current,{opacity:0,y:'100'},{opacity:1,duration:0.5,y:'0',scrollTrigger:{
            trigger:two.current,start:'top bottom'
        }})
        gsap.fromTo(three.current,{opacity:0,y:'100'},{opacity:1,duration:0.5,y:'0',scrollTrigger:{
            trigger:three.current,start:'top bottom'
        }})
        gsap.fromTo(four.current,{opacity:0,y:'100'},{opacity:1,duration:0.5,y:'0',scrollTrigger:{
            trigger:four.current,start:'top bottom'
        }})
        gsap.fromTo(five.current,{opacity:0,y:'100'},{opacity:1,duration:0.5,y:'0',scrollTrigger:{
            trigger:five.current,start:'top bottom'
        }})
        gsap.fromTo(six.current,{opacity:0,y:'100'},{opacity:1,duration:0.5,y:'0',scrollTrigger:{
            trigger:six.current,start:'top bottom'
        }});

    })

    const onHover1=()=>{
        gsap.fromTo(one.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.2})
    }
    const onLeave1=()=>{
        gsap.to(one.current,{duration:0.1,scale:1})
    }
    const onHover2=()=>{
        gsap.fromTo(two.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.2})
    }
    const onLeave2=()=>{
        gsap.to(two.current,{duration:0.1,scale:1})
    }
    const onHover3=()=>{
        gsap.fromTo(three.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.2})
    }
    const onLeave3=()=>{
        gsap.to(three.current,{duration:0.1,scale:1})
    }
    const onHover4=()=>{
        gsap.fromTo(four.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.2})
    }
    const onLeave4=()=>{
        gsap.to(four.current,{duration:0.1,scale:1})
    }
    const onHover5=()=>{
        gsap.fromTo(five.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.2})
    }
    const onLeave5=()=>{
        gsap.to(five.current,{duration:0.1,scale:1})
    }
    const onHover6=()=>{
        gsap.fromTo(six.current,{scale:0.9,zIndex:999,duration:0.1},{scale:1.1,zIndex:999,duration:0.2})
    }
    const onLeave6=()=>{
        gsap.to(six.current,{duration:0.1,scale:1})
    }


    return (
        <div id='projects'>
            <h1 className='heading-project'>JS Projects</h1>
            <div className='project-section'>
                <NavLink ref={one} onMouseEnter={onHover1} onMouseLeave={onLeave1} className="card one" to='/calculator'>
                    <div>
                        <div className='projectimg calc'></div>
                        <h1 className='projectName'>Calculator</h1>
                        <p className='projectDesc'>Use the best calculator in the world and calculate your mom's worth</p>
                    </div>
                </NavLink>
                <NavLink ref={two} onMouseEnter={onHover2} onMouseLeave={onLeave2} className="card two" to='/stopwatch'>
                    <div>
                        <div className='projectimg stopwatch'></div>
                        <h1 className='projectName'>Stopwatch</h1>
                        <p className='projectDesc'>Use the best stopwatch in the world to make customer leave after time is done</p>
                    </div>
                </NavLink>
                <NavLink ref={three} onMouseEnter={onHover3} onMouseLeave={onLeave3} className="card three" to='/palindrome'><div >
                    <div className='projectimg palindrome'></div>
                    <h1 className='projectName'>Palindrome</h1>
                    <p className='projectDesc'>Use the best palindrome detector in the world for time pass while your mama is doing hard wok</p>
                </div></NavLink>
                <NavLink ref={four} onMouseEnter={onHover4} onMouseLeave={onLeave4} className="card four" to='/random'><div>
                    <div className='projectimg random'></div>
                    <h1 className='projectName'>High/Low</h1>
                    <p className='projectDesc'>Play the best High/Low in the world for time pass while your mama is doing hard wok</p>
                </div></NavLink>
                <NavLink ref={five} onMouseEnter={onHover5} onMouseLeave={onLeave5} className="card five" to='/clock'><div>
                    <div className='projectimg time'></div>
                    <h1 className='projectName'>Clock</h1>
                    <p className='projectDesc'>Use the best Clock in the world to see how much time is left in your mama's shift</p>
                </div></NavLink>
                <NavLink ref={six} onMouseEnter={onHover6} onMouseLeave={onLeave6} className="card six" to='/calculator'><div>
                    <div className='projectimg test'></div>
                    <h1 className='projectName'>Test</h1>
                    <p className='projectDesc'>Use the best Clock in the world to see how much time is left in your mama's shift</p>
                </div></NavLink>




            </div>
        </div>
    )
}

export default Projects