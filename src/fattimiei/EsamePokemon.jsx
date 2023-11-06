import { useState } from "react"
import { UseEsamePokemon } from "./UseEsamePokemon"

export function EsamePokemon() {
  const { data, loading, error } = UseEsamePokemon()
  const [img, setImg] = useState("")

  if (loading) {
    return <h1>loading...</h1>
  }
  if (error) {
    return <h1>error...</h1>
  }

  const handleSelect = (e) => {
    setImg(e.target.value)
  }

  return (
    <>
      <select onChange={handleSelect}>
        {data.length > 0 && data.map((item , index) => {
          return (
            <option key={index} value={item.sprites.front_default}>{item.name}</option>
          )
        })}
      </select>
      {img && (
        <img src={img} alt="" />
      )}
    </>
  )
}