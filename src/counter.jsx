import { useState } from "react"
import { CounterDisplay } from "./counterdisplay"

export function Counter() {
    const [counter , setCounter] = useState(0)

    function handleIncrement () {
        setCounter(counter + 1)
    }


    return(
        <div>
            <CounterDisplay value={counter} />
            <button onClick={handleIncrement}>aumenta</button>
        </div>
    )
}