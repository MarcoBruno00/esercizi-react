import { useEffect, useRef, useState } from "react"

export function Counter({initialValue = 0}) {

    const[count , setCount] = useState(initialValue)
    const prevRef = useRef(initialValue);
    
    const currentRef = useRef("same");

    useEffect(() => {
        let newDirection;
        if (count > prevRef.current) {
            newDirection = "up"
        } else if (count < prevRef.current){
            newDirection = "down"
        } else{
            newDirection = "same"
        }

        if (newDirection !== currentRef.current) {
            currentRef.current = newDirection;
            console.log(currentRef.current);
        }
    
        prevRef.current = count;
    } , [count])


    function handleUp() {
        setCount(count + 1)
    }

    function handleDown() {
        setCount(count - 1)
    }

    return(
        <div>
            <button onClick={handleUp}>up</button>
            <button onClick={handleDown}>down</button>
        </div>
    )
}