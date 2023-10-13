import { useState } from "react"

export function Counter() {
    const [counter , setCounter] = useState(0)

    function handleIncrement () {
        setCounter(counter + 1)
         // usiamo la funzione dentro setCount se dobbiamo fare più operazioni su count, 
        //sennò utilizziamo un valore immediato se dobbiamo eseguire una semplice operazione
    }


    return(
        <div>
            <h2>aumenta il valore {counter}</h2>
            <button onClick={handleIncrement}>aumenta</button>
        </div>
    )
}