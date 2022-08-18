import React from 'react'
import './button.css'
function button(props) {
  return (
    <div>
      <button onClick={props.clickhandel} className='stopwatch-button'>{props.function}</button>
    </div>
  )
}

export default button