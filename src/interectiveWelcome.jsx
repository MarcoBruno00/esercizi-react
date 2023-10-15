import { useState } from "react"
import { Welcome } from "./welcome"


export function InterctiveWelcome() {
    const [name , setName] = useState("")


    function handleChangeImput(event) {
        setName(event.target.name)
    }
    
    
    
    return(
        <div>
            <form>
                <input onChange={handleChangeImput} value={name} />
            </form>
            <Welcome name = {name} />
        </div>
    )
}