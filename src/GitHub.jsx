import { useEffect, useState } from "react"

export function GitHub({username}) {
    const[data , setData] = useState(null)
    
    const fetchUser= async (username) => {
        try {
            const user = await fetch(`https://api.github.com/users/${username}`)
            const data= await user.json()
            console.log(data);
            setData(data)
        } catch (error) {
            console.log(error);
        }
       
    } 
    
    useEffect(() =>{
        fetchUser(username)
    }, [username])

    return(
        <>
       <h1>my username is {username}</h1>
       
        
        </>
    )
}