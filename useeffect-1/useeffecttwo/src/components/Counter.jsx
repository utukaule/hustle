import { useEffect } from "react";
import { useState } from "react"

export const Counter = ({ initialTime = 0 }) => {
    const [time, setTime] = useState(initialTime);
    useEffect(()=>{
        
    },[])
    return <>
        <div>
            <h1>{time}</h1>
        </div>
    </>
}