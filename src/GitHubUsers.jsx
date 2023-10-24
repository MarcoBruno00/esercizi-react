import { useState } from "react"
import { GitHub } from "./GitHub"


export function GitHubUsers() {
    const [serchUser, setSerchUser] = useState("")
    const [user, setUser] = useState([])

    const handleClick = (e) => {
        setSerchUser(e.target.value)
    }

    const serchUsername = (e) => {
        e.preventDefault()
        setUser((data) => {
            return ([...data, serchUser])
        })
        setSerchUser("")
    }

    return (
        <>
            <form onChange={serchUsername}></form>
            <input type="text" value={serchUser} onChange={handleClick} />
            <button type="submit">cerca</button>
            <ul>
                {user.map((username, index) => {
                    <li key={index}>

                        <GitHub username={username}/>
                    </li>
                })}

            </ul>
        </>
    )
}