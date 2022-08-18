import React from 'react'
import './button.css'
function button(props) {
  return (
    <div>
        <button onClick={()=>props.onClick(props.symbol)} style={{backgroundColor:props.bgcolor}} className='calc-button'>{props.symbol}</button>
    </div>
  )
}

export default button