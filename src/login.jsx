import { useState } from "react";


export function Login() {
    const[data , setData] = useState({
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
                [name] : value
            }
        })

        }

    return(
        <div>
            <form>
                <input type="text" value={data.username} onChange={handleChangeImput} />
                <input type="password" value={data.password} onChange={handleChangeImput} />
                <input type="checkbox" checked={data.remember} onChange={handleChangeImput} />
            </form>
        </div>
    )
}