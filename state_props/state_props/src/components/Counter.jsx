import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleAdd = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }
    const handleSub = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
        }
    }
    if (counter ==10){
        return <h4>You reached to max {counter}</h4>
    }
    return <>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <p>Number is {counter%2 ==0 ? "even":"odd"}</p>
    </>
}