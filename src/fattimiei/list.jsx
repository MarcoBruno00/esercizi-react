import { useState } from "react"

export function List() {
    const ListItem =[
        "banana",
        "mela" ,
        "arancia",
        "caffe" ,
    ]

    const [filterList, setFilterList] = useState(ListItem)

   const handleClick = (event) => {
        if(event.target.value === ""){
            setFilterList(filterList)
            return;
        }
   }
   const filterItem = ListItem.filter((item) => 
   item.toLowerCase().indexOf(item.target.value.toLowerCase()) !== -1
   )
   setFilterList(filterItem)
    
    return(
        <div>
            <input name="list-item" type="text" onChange={handleClick} />
            <div>
                {filterList &&
                filterList.map((item , index) =>
                <div key={index}>{item} </div>)}
            </div>
        </div>
    )
}