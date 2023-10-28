import { UsePokemon } from "./UsePokemon"


export function Pokemon() {
    const {data , loading , error} = UsePokemon()

    if (loading) {
        return <h1>loading...</h1>
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
                        <li>{item.name}
                        <img src= {item.sprites.front_default} alt="" />
                        {item.base_experience}

                        </li>
                  </div>
                )  
            })}
          
        </ul>
        </>
    )
}