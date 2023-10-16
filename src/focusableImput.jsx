import { useEffect, useRef } from "react"

export function FocusInput() {
    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current?.focus()
    } ,[])

    return(
        <>
            <input ref={inputFocus} type="text" />       
        </>
    )
}