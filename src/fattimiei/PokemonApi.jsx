import { UsePokemonApi } from "./usePokemonApi"


export function PokemonApi() {
    const{data ,loading, error} = UsePokemonApi()

    if (loading) {
       return <h1>pezzo di merda sta caricando</h1>
    }

    if (error) {
       return <h1>error</h1>
    }
    
    return(
        <>
            <ul>
                {data.length > 0 && data.map((item) => {
                    return(
                        <div>
                            <img src= {item.sprites.front_default} alt="" />
                        <li>{item.name} </li>
                        <li>{item.height}</li>
                        <li>{item.base_experience}</li>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}