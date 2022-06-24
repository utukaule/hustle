import { useState } from "react"

export const TodoInput = ({getData}) => {
    const [text, setText] = useState("");
    return (
        <div>
            <input onChange={(e) => {
                setText(e.target.value)
            }
            }
                type="text" placeholder="Add Todo" />
            <button onClick={()=>{
                getData(text);
            }}>Add</button>
            {/* <p>Input : {text}</p> */}
        </div>
    )
}