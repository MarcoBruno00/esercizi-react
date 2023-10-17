import { Color } from "./counter";

export function Colors() {
    
    return(
        <ul>
           <Color  items={[
        {id:1 , name :"red" } , 
        {id:2 , name :"blue" } ,
        {id:3 , name :"yellow" },
        {id:4 , name :"purple" }
        ]} />
        </ul> 
    )
}