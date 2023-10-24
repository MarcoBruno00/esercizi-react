import { UseCounter } from "./useCounter"

export function Counter() {
   
   const {count ,increment ,decrement , reset} = UseCounter(0)
   
   
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>piu</button>
        <button onClick={decrement}>meno</button>
        <button onClick={reset}>reset</button>
        </>
    )
}