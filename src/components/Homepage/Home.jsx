import React, { useRef, useEffect } from 'react'
import Hero from './Hero'
import Projects from './Projects'
import { gsap } from "gsap";
import './home.css'
function Home() {
    const tl = gsap.timeline({defaults:{ease:'power1.out'}});
    const text1 = useRef();
    const text2 = useRef();
    const text3 = useRef();
    const slider = useRef();
    const intro = useRef();
    useEffect(() => {
        tl
           .to(text1.current, { y: "0%", duration: 0.5})
           .to(text2.current, { y: "0%", duration: 0.5})
           .to(text3.current, { y: "0%", duration: 0.5 })
           .to(slider.current, { y: "-100%", duration: 1.5, delay: 0.5 })
           .to(intro.current, { y: "-100%", duration: 1 }, "-=1")
           .to(text1.current,{duration:0.1,
            onComplete: () => document.querySelector('.abc').classList.remove('def')},"-=1.2");
        } );

    return (
        <div className=''> 
            <Hero />
            <Projects/>
            <div ref={intro} className="intro">
                <div className="intro-text">
                    <h1 className="hide">
                        <span ref={text1} className="text">Created By</span>
                    </h1>
                    <h1 className="hide">
                        <span ref={text2} className="text">Qasim Gardezi</span>
                    </h1>
                    <h1 className="hide">
                        <span ref={text3} className="text">...</span>
                    </h1>
                </div>
            </div>
            <div ref={slider} className="slider"></div>     
        </div>
    )
}

export default Home