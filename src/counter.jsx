import { useCounter } from "./useCounter";

export function Counter() {
    const {counter, handleIncrement, handleDecrement, handleReset} = useCounter(0)

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Aggiungi</button>
            <button onClick={handleDecrement}>Rimuovi</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}