import { useEffect, useState } from "react"


export function UseUsersList() {
    const[data ,setData] = useState([])
    const[loading ,setLoading] = useState(false)
    const[error ,setError] = useState()

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const response = await fetch("https://dummyjson.com/users")
            const responseJson= (await response.json()).users  
            console.log(responseJson);
            setData(responseJson)
        } catch (error) {
            console.error(error);
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    } , [])
   
    return{data, loading , error}
}