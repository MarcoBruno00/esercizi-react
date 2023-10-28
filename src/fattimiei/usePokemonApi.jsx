import { useEffect, useState } from "react"


export function UsePokemonApi() {
    const[data , setData] = useState([])
    const[loading , setLoading]= useState(false)
    const[error , setError] = useState()
    
    const dataPokemon = async () => {
        setLoading(true)
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
            const responseJson = await response.json()
            responseJson.results.map(async(item)=> {
                const dataUrl = await fetch(item.url)
                const dataUrlJson = await dataUrl.json()
                console.log(dataUrlJson);
                setData((prev) =>[...prev , dataUrlJson])

            })
        } catch (error) {
            console.error(error);
            setError(error)
        }finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        dataPokemon()
    } , [])

    return{data ,loading, error}
}