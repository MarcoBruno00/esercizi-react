import { useState } from "react"
import "./index.css"

export function Container({title ,children }) {
    const [collapse , setCollapse] = useState(false)
    function handleToggle() {
        setCollapse((c) => !c)
    }

    return(

        <div className="container">
        <div className="container-title">{title}
        <button onClick={handleToggle}>toggle</button></div>
        <div>{collapse && (
        <div className="container-content">{children}</div>
        )}</div>
        </div>
    )
}