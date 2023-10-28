import { useEffect, useState } from "react"

export function UsePokemon() {
 const [data, setData] = useState([])
 const[loading , setLoading] = useState(false)
 const[error , setError] = useState()
 const pokeApi = async() => {
 setLoading(true)
 try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const responseJson = await response.json()
    responseJson.results.map(async(item)=>{
       const pokemonData = await fetch(item.url)
       const pokemonDataJson= await pokemonData.json()
       console.log(pokemonDataJson);
       setData((prev) => [...prev  , pokemonDataJson])
    } )
 } catch (error) {
    console.log(error);
    setError(error)
 }finally{
    setLoading(false)
 }
 }
 
 useEffect(() => {
    pokeApi()
 } ,[])


    return {data , loading , error}
   
}