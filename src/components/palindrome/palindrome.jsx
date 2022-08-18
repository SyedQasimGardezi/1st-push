import React,{ useRef,useState } from 'react'
import './palindrome.css'
function Palindrome() {
    const [check, setCheck] = useState('')
    const [pal, setPal] = useState(true)
    const inp = useRef();

    const addtext = () => {
        setCheck(inp.current.value);
        let lower = inp.current.value.replace(/[^A-Z0-9]/ig, "").toLowerCase();
        let reverse = lower.split('').reverse().join('');
        if (lower === reverse) {
            setPal(true);
        } else {
            setPal(false);        
        }
    }

    return (
        <div className='palindrome-section'>
            <div className='palindrome-content'>
                <p className='heading'> PALINDROME CHECKER </p>
                <input ref={inp} className='palindromedisplay' type="text" placeholder='Add Palindrome' />
                <button onClick={addtext} className='palindromebutton'>Check</button>
                <h1 className='ending'>{check.length<1 ? 'Enter a word/number/phrase' :(pal? check + " is a palindrome": check +" is a not palindrome")}</h1>
               
            </div>
        </div>
    )
}

export default Palindrome