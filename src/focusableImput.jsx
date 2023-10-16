import { useEffect, useRef } from "react"

export function FocusInput() {

    const mountedRef = useRef(false)


    useEffect(() => {
       if(!mountedRef.current){
        console.log("mounted for first time");
        mountedRef.current = true
       }
    } ,[])

    return(
        <>
            <input type="text" />       
        </>
    )
}