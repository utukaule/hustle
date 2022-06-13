import { useState } from "react"

export const Input = () => {
    
    // for only input text.
    const [inputText, setInputText] = useState("");
    const handleChange = (e) =>{
        setInputText(e.target.value)
    }

    //to store all the values we need array.
    const [text, setText] = useState([]);
    
    const handleArray = () =>{
        setText(...text,inputText)
    }

    return (
        <div>
            <input type="text" value={inputText} placeholder="Enter To add" onChange={handleChange }/>
            <button onClick={handleArray}>Add</button>
            <h5>{inputText}</h5>
            <h3>{text.map((item)=>{
               return <div>{item}</div>
            })}</h3>
        </div>
    )
}