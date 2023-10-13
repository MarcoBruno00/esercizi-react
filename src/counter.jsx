import { useState } from "react"

export function Counter({initialValue}) {
    const [counter , setCounter] = useState(initialValue)

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