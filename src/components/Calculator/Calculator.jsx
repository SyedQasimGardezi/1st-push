import React from 'react'
import Button from './button'
import Display from './display'
import  {evaluate} from 'mathjs'
import './calculator.css'
import { useState } from 'react'

function Calculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const ClickHandler = (e) => {
    setNumber(()=> [...number, e + '']);
  }
  const cleartext = () => {
    setNumber ('');
    setResult ('');
  }
  const total = () =>{
    const total = number.join('')
    setResult(evaluate(total))
  }
  const backspace = () => {
    setNumber(() => number.slice(0, number.length-1));
  } 
  return (
      <div className='card-calc'>
        <div className="card-content">
          <Display input={number} output={result} />
          <div className='buttons'>
            <Button onClick={ClickHandler} symbol='7' bgcolor='beige' />
            <Button onClick={ClickHandler} symbol='8' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='9' bgcolor='beige'/>
            <Button onClick={backspace} symbol='back' bgcolor='yellow' />
            <Button onClick={ClickHandler} symbol='4' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='5' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='6' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='-' bgcolor='yellow' />
            <Button onClick={ClickHandler} symbol='1' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='2' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='3' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='+' bgcolor='yellow' />
            <Button onClick={ClickHandler} symbol='.' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='0' bgcolor='beige'/>
            <Button onClick={ClickHandler} symbol='*' bgcolor='yellow' />
            <Button onClick={ClickHandler} symbol='/' bgcolor='yellow' />
            <Button onClick={cleartext} symbol='clear' bgcolor='orange' />
            <Button onClick={total} symbol='=' bgcolor='orange' />
          </div>
        </div>
      </div>
  )
}

export default Calculator