import React from 'react'
import './display.css'

function display(props) {
  return (
    <div>
      <h1 className="stopwatchdisplay">{props.hours<10? '0'+props.hours : props.hours}:{props.min<10? '0'+props.min : props.min}:{props.sec<10? '0'+props.sec : props.sec}</h1>
    </div>
  )
}

export default display