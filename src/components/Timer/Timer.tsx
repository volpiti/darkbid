import React from 'react'
import { useState, useEffect } from 'react';

interface ITimerProps {
    miliseconds: number;
}

const Timer: React.FC<ITimerProps> = (props) => {
    var mils = props.miliseconds;
    mils = Math.floor(mils / 1000);
    const [seconds, setSeconds] =  useState(mils % 60);
    mils = Math.floor(mils / 60);
    const [minutes, setMinutes] = useState(mils % 60);
    mils = Math.floor(mils / 60);
    const [hours, setHours] =  useState(mils % 24);
    mils = Math.floor(mils / 24);
    const [days, setDays] =  useState(mils);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (days === 0) {
                            clearInterval(myInterval)
                        } else {
                            setDays(days - 1);
                            setHours(23);
                            setMinutes(59);
                            setSeconds(59);
                        }
                        
                    } else {
                        setHours(hours - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                    
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
            { days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0
                ? <span>Auction has expired.</span>
                : <span>{days > 0 ? `${days}` : null } {days > 1 ? `days and ` : null }{days === 1 ? `day and ` : null} 
                        {hours < 10 ?  `0${hours}` : hours}:
                        {minutes < 10 ?  `0${minutes}` : minutes}:
                        {seconds < 10 ?  `0${seconds}` : seconds} left</span> 
            }
        </div>
    )
}

export default Timer;