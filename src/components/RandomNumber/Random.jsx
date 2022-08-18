import React,{useRef} from 'react'
import { useState } from 'react';
import './random.css'

function Random() {
  const inpRef = useRef();
  const [result, setResult] = useState('');
  const [rand, setRand] = useState(Math.floor(Math.random() * 10));

  const generator = () => {
    console.log(rand);
    if (inpRef.current.value > rand) {
      setResult('High')
    }
    else if (inpRef.current.value < rand) {
      setResult('Low')
    }
    else {
      setResult('Correct Guess New One!')
      setRand(Math.floor(Math.random() * 100));
      inpRef.current.value('')
    }
  }

  return (
    <div className='random-section'>
      <div className='random-content'>
        <p className='heading'>High/Low</p>
        <input ref={inpRef} className='random-input' type="number" placeholder='Add Number' />
        <button onClick={generator} className='random-button'>Check</button>
        <h1 className='ending'>{result.length<1?'...':result}</h1>
        <h1 className='ending'>'Enter number from 0-100'</h1>

      </div>
    </div>
  )
}

export default Random