import { useState } from "react"

export function Counter() {
    
    const[count , setCount] = useState(0)

    function HandleClick() {
        setCount(count + 1)
    }

    return(
        <div>
        <h2 style={{
            backgroundColor : "green" ,
            color : "black" ,
        }}>{count}</h2>
        <button onClick={HandleClick}>add</button>
        </div>
    )
}