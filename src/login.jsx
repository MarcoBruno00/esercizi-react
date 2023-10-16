import React, { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setData(data => {
      return {
        ...data, 
        [name]: value
      }
    });
  }


  const isButtonDisabled = data.username === '' || data.password === '';

  const handleButton = (event) => {
    event.preventDafault()
    console.log(data);
  };


  const handleReset = () => {
    setData({
        username : '',
        password : '',
        remember : false
    });
  }
//In questo modo evitiamo il comportamento predefinito di invio del modulo
  return (
    <>
      <form onSubmit={handleButton}>
        <input type="text" name="username" value={data.username} onChange={handleInputChange} />
        <input type="password" name="password" value={data.password} onChange={handleInputChange} />
        <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} />
        <button type="submit" onClick={handleButton} disabled={isButtonDisabled}>Login</button>
        <button type= "button"onClick={handleReset}>reset</button>
      </form>
    </>
  )
}