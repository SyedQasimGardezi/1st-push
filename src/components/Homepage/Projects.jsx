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
        gsap.fromTo(one.current,{opacity:0,y:'100'},{opacity:1,duration:2,y:'0',scrollTrigger:{
            trigger:one.current,start:'top bottom'
        }})
        gsap.fromTo(two.current,{opacity:0,y:'100'},{opacity:1,duration:2,y:'0',scrollTrigger:{
            trigger:two.current,start:'top bottom'
        }})
        gsap.fromTo(three.current,{opacity:0,y:'100'},{opacity:1,duration:2,y:'0',scrollTrigger:{
            trigger:three.current,start:'top bottom'
        }})
        gsap.fromTo(four.current,{opacity:0,y:'100'},{opacity:1,duration:2,y:'0',scrollTrigger:{
            trigger:four.current,start:'top bottom'
        }})
        gsap.fromTo(five.current,{opacity:0,y:'100'},{opacity:1,duration:2,y:'0',scrollTrigger:{
            trigger:five.current,start:'top bottom'
        }})
        gsap.fromTo(six.current,{opacity:0,y:'100'},{opacity:1,duration:2,y:'0',scrollTrigger:{
            trigger:six.current,start:'top bottom'
        }})
    })
    return (
        <div id='projects'>
            <h1 className='heading-project'>JS Projects</h1>
            <div className='project-section'>
                <NavLink ref={one} className="card one" to='/calculator'>
                    <div>
                        <div className='projectimg calc'></div>
                        <h1 className='projectName'>Calculator</h1>
                        <p className='projectDesc'>Use the best calculator in the world and calculate your mom's worth</p>
                    </div>
                </NavLink>
                <NavLink ref={two} className="card two" to='/stopwatch'>
                    <div>
                        <div className='projectimg stopwatch'></div>
                        <h1 className='projectName'>Stopwatch</h1>
                        <p className='projectDesc'>Use the best stopwatch in the world to make customer leave after time is done</p>
                    </div>
                </NavLink>
                <NavLink ref={three} className="card three" to='/palindrome'><div >
                    <div className='projectimg palindrome'></div>
                    <h1 className='projectName'>Palindrome</h1>
                    <p className='projectDesc'>Use the best palindrome detector in the world for time pass while your mama is doing hard wok</p>
                </div></NavLink>
                <NavLink ref={four} className="card four" to='/random'><div>
                    <div className='projectimg random'></div>
                    <h1 className='projectName'>High/Low</h1>
                    <p className='projectDesc'>Play the best High/Low in the world for time pass while your mama is doing hard wok</p>
                </div></NavLink>
                <NavLink ref={five} className="card five" to='/clock'><div>
                    <div className='projectimg time'></div>
                    <h1 className='projectName'>Clock</h1>
                    <p className='projectDesc'>Use the best Clock in the world to see how much time is left in your mama's shift</p>
                </div></NavLink>
                <NavLink ref={six} className="card six" to='/calculator'><div>
                    <div className='projectimg test'></div>
                    <h1 className='projectName'>Test</h1>
                    <p className='projectDesc'>Use the best Clock in the world to see how much time is left in your mama's shift</p>
                </div></NavLink>




            </div>
        </div>
    )
}

export default Projects