import { useEffect, useState } from "react"

export function User() {
    const [data, setData] = useState([])
    const [loading, Setloading] = useState(false)
    const [error, setError] = useState()

    const fetchApi = async () => {
        Setloading(true)
        try {
            const response = await fetch("https://dummyjson.com/users")
            const responseJson = (await response.json()).users
            setData(responseJson)
        } catch (error) {
            console.log(error);
            setError()
        } finally {
            Setloading(false)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    if (loading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <>
        <select>
            <option disabled selected>emails:</option>
            {data.length > 0 && data.map((element) => {
                return(
                    <option>
                        {element.email}
                    </option>
                )
            }) }
             </select>
            <ul>
                {data.length > 0 && data.map((item) => {
                    return (
                        <div>

                            <li>
                                <img src={item.image} alt="" />
                                <h1>{item.username}</h1>
                                <h2>{item.birthDate}</h2>
                                <h3>{item.gender}</h3>

                            </li>

                        </div>
                    )
                })}
            </ul>
           
        </>
    )
}