import { useState } from "react"
import { UseFetchPokemon } from "./UseFetchPokemon"


export function FetchPokemon() {
    const{data , loading , error} = UseFetchPokemon()
    const [option , setOption] = useState()
    const [check , setCheck] = useState(false)

    if (loading) {
        return <h1>loading...</h1>
    }

    if(error){
        return <h1>error...</h1>
    }
    
    const handleSelect = (e) => {
        setOption(e.target.value)
    }

    const handleCheck = () => {
        setCheck((prevValue)=> !prevValue)
        
    }
    
    return(
        <>
        <select onChange={handleSelect}>
            <option value="normal">normal</option>
            <option value="shine">shine</option>
        </select>
        <input type="checkbox" onClick={handleCheck} />
        <ul style={{textDecorationLine : "underline"}}>
            {data.length > 0 && data.map((item , index) => {
                return(
                    <div>
                        <li style={{display : "flex" , flexDirection: "column" , justifyContent : "center" , alignItems :"center"}} key={index}>{item.name}
                        {option === "normal" ? <img src={item.sprites.front_default} alt="" /> : <img src= {item.sprites.front_shiny}></img>}
                        {check === true ? <img src={item.sprites.front_default} alt="" /> : <img src= {item.sprites.front_shiny}></img>}
                        </li>
                    </div>
                        
                )
            })}
        </ul>
        </>
    )
}