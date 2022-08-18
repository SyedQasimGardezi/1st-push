import React, {useState,useEffect,useRef} from 'react'
import './clock.css'

function Clocks() {
    const now = new Date();
    const refSec = useRef();
    const refMin = useRef();
    const refHrs = useRef();
    const [sec,setSec] = useState();
    const [min,setMin] = useState();
    const [hrs,setHrs] = useState();
    const updatetime =()=>{
        setSec(now.getSeconds());
        setMin(now.getMinutes());
        setHrs(now.getHours());
        const secDegrees = ((sec / 60) * 360) + 90;
        refSec.current.style.transform =`rotate(${secDegrees}deg)`;
        const minDegrees = ((min / 60) * 360) + ((sec/60)*6) + 90;
        refMin.current.style.transform =`rotate(${minDegrees}deg)`;
        const hrsDegrees = ((hrs / 12) * 360) + ((min/60)*30) + 90;
        refHrs.current.style.transform =`rotate(${hrsDegrees}deg)`;
    }
    useEffect(()=>{
        setInterval(updatetime(),1000)
    })
    const convertHrs = () => {
        if(hrs>12){
            setHrs(hrs - 12);
            return hrs
        }
        else if(hrs<10){
            return "0"+hrs;
        }
        else return hrs;
    }

    return (
        <div className='clock-section'>
            <div className="clock">
                <div className="clock-face">
                    <div ref={refSec} className="hand hour-hand"></div>
                    <div ref={refMin} className="hand min-hand"></div>
                    <div ref={refHrs} className="hand second-hand"></div>
                    <div className='mid'></div>
                </div>
                <p className='time-clock'>{convertHrs()} : {min<10? "0"+min:min}: {sec<10? "0"+sec:sec} {hrs<12?"PM":"AM"}</p>
            </div>
        </div>
    )
}

export default Clocks