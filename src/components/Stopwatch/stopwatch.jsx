import React, { useState, useEffect } from 'react'
import Display from './display'
import Button from './button'
import './stopwatch.css'

function Stopwatch() {
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [togglebtn, setTogglebtn] = useState(false);

  const Toggle = () => {
    setTogglebtn(!togglebtn);
  }

  useEffect(() => {
    if (timerOn === true) {
      const timer = setInterval(() => {
        setSec(sec + 1);

        if (sec === 59) {
          setMin(min + 1);
          setSec(0)
        }
        if (min === 60) {
          setHours(hours + 1);
          setMin(0)
        }
      }, 1000)

      return () => clearInterval(timer)
    }
  });

  const switchstate = () => {
    setTimerOn(!timerOn);
  }
  const reset = () => {
    setTimerOn(false);
    setTogglebtn(false);
    setHours(0);
    setMin(0);
    setSec(0);
  }
  const combo = () => {
    Toggle();
    switchstate();
  }
  return (
    <div className='stopwatch-body'>
      <div className="stopwatch-content">
        <div className="stopwatch-display">
          <Display hours={hours} min={min} sec={sec}  />
        </div>
        <div className="stopwatch-buttons">
          <Button text='start' function={togglebtn? 'stop': 'start'} clickhandel={combo} />
          <Button text='reset' function = "reset" clickhandel={reset} />
        </div>
      </div>
    </div>
  )
}

export default Stopwatch