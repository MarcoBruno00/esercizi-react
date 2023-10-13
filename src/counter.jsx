import { useState } from "react"

export function Counter() {
    const [counter , setCounter] = useState(0)

    function handleIncrement () {
        setCounter(counter + 1)
    }


    return(
        <div>
            <h2>aumenta il valore {counter}</h2>
            <button onClick={handleIncrement}>aumenta</button>
        </div>
    )
}