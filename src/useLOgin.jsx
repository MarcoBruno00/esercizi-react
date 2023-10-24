import { useState } from "react"


export function UseLogin() {

const [formData , setFormData] = useState({
    username : "",
    password : ""
})

const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((data) => {
        return{
            ...data,
            [name] : value
        }
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`email: ${formData.username} password: ${formData.password}`);
}
   
    return {formData , handleChange , handleSubmit}   
}