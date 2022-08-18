import React from 'react'
import './display.css'
function display(props) {
  return (
    <div>
        <div className="calc-display">
            <h1 className='question'>{props.input.length<1?'0':props.input}</h1>
            <h1 className='solution'>{props.output}</h1>
        </div>
    </div>
  )
}

export default display