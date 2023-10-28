import { useEffect, useState } from "react"

export function UseProductsList() {
    const [data ,setData] = useState([])
    const [loading , Setloading] = useState(false)
    const [error , setError] = useState()
    
    const fetchApi = async () => {
        Setloading(true)
        try {
            const response = await fetch("https://dummyjson.com/products")
            const responseJson = (await response.json()).products
            console.log(responseJson);
            setData(responseJson)
        } catch (error) {
            console.log(error);
            setError(error)
        }finally{
            Setloading(false)
        }
    }

    useEffect(() => {
        fetchApi()
    } , [])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
       
    }

     return{data , loading , error , handleSubmit}

     
}