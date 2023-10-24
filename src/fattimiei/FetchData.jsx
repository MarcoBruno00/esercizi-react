import { useEffect, useState } from "react";

export function FetchData () {
    const [data , setData] = useState([])

    const pokemonList = async () => {
        try {
            const response = await fetch( "https://pokeapi.co/api/v2/pokemon/")
            const responseJson = await response.json()
            responseJson.results.map(async(item) => {
                const data = await fetch(item.url)
                const dataJson = await data.json()
                setData((prev) => [...prev , dataJson])
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        pokemonList()
    }, [])
    
   

    return(
        <div>
            <select>
                {data.map((pokemon)=>{
                    return(
                        <option>
                        {pokemon.name}
                    </option>
                    )
                   
                })}
            </select>


            {data.map((element)=>{
                return(
                    <div>
                      <ul>
                        <li>{element.name}
                        <img src={element.sprites.front_default} alt="" /></li>
                        
                      </ul>
                    </div>
                )
            })}
        </div>
    )
}