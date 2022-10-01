import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Animation from './svg-animation/Animation'
// import { gsap } from "gsap";
import './home.css'
function Home() {

    return (
        <div className='abc def'> 
            <Hero />
            <Projects/>
            <Animation/>
        </div>
    )
}

export default Home