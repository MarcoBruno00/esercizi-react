import { useState } from "react"
import { CounterDisplay } from "./counterdisplay"

export function Counter() {
    const [counter , setCounter] = useState(0)

    function handleIncrement () {
        setCounter(counter + 1)
    }

    function handleDecrement() {
        setCounter(counter - 1)
    }

    function handleReset() {
        setCounter(0)
    }


    return(
        <div>
            <CounterDisplay value={counter} />
            <button onClick={handleIncrement}>aumenta</button>
            <button onClick={handleDecrement}>diminuisci</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}