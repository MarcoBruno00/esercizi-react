import { UseProductsList } from "./useProductsList"



export function ProductsList() {
    const { data, loading, error , handleSubmit } = UseProductsList()

    if (loading) {
       return <h1>Loading...</h1>
    }

    if (error) {
       return <h1>error</h1>
    }

    return (
        <>
        <form onChange={handleSubmit}>
            <select>
                {data.length > 0 && data.map((item) => {
                    return (<option>
                        {item.category}
                    </option>)
                })}
            </select>
            </form>
                <button type="submit" onClick={handleSubmit}>invia</button>
            <ul>
                {data.length > 0 && data.map((item) => {
                    return (<li>
                        {item.category}
                    </li>)
                })}
            </ul>
        </>
    )
}