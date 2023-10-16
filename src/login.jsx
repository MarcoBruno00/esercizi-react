import { useState } from "react";


export function Login({onLogin}) {
    const [data , setData] = useState({
        username:'',
        password:'',
        remember: false
    })

    function handleChangeImput(event) {
        const name = event.target.name
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value

        setData(data => {
            return{
                ...data,
                [name]: value
            }
        })

        
    }
    
            const isButtonDisalbled = data.username === '' || data.password === ''
    
    
            const handleButton = (event) => {
                event.preventDefault()
                onLogin(data)
            }

    return(
        <>
            <form>
                <input type="text"  name = "username" value={data.username} onChange={handleChangeImput} />
                <input type="password" name = "password" value={data.password} onChange={handleChangeImput} />
                <input type="checkbox" name = "remember"checked={data.remember} onChange={handleChangeImput} />
                <button onClick={handleButton} disabled={isButtonDisalbled}>login</button>
            </form>
        </>
    )
}