import { useEffect, useState } from "react"


export function UseEsamePokemon() {
 const[data , setData] = useState([])
 const[loading , setLoading] = useState(false)
 const[error, setError] = useState()
 
 const esameFetch = async () =>{
    setLoading(true)
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const responseJson = await response.json()
        responseJson.results.map(async(item) => {
            const data = await fetch(item.url)
            const dataJson = await data.json()
            console.log(dataJson);
            setData((prev) => [...prev ,dataJson])
        })
    } catch (error) {
        console.error(error);
        setError(error)
    }finally{
        setLoading(false)
    }
 } 
    
    useEffect(() => {
        esameFetch()
    } , [])
    
    return{data , loading , error}
}