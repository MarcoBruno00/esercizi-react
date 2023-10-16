export function Login (){
    function handleSubmit(event) {
        event.preventDefault()

        //const username = event.target.elements.namedItem('username').value 
        //const password = event.target.elements.namedItem('password').value 
        //const session = event.target.elements.namedItem('checkbox').checked

        const username = event.target.value
        const password = event.target.value
        const session = event.target.checked

        const data = {
            username,
            password,
            session
        }

        console.log(data);
    }



    return(
        <>
        <form onSubmit={handleSubmit}>
            <input name="username" />
            <input name="password" type="password" />
            <input name = "session" type="checkbox"  />
            <button>login</button>
            <button type="reset">reset</button>
        </form>
        </>
    )
}