import { UseUsersList } from "./useUsersList"


export function UsersList() {
    const{data , loading , error} = UseUsersList()

    if (loading) {
        return <h1>gennaro sta caricando...</h1>
    }
    
    if (error) {
        return <h1>error...</h1>
    }
    
    return(
        <>
        <ul>
            {data.length > 0 && data.map((item) => {
                return(
                    <div>
                        <li>{item.firstName}</li>
                        <li>{item.lastName}</li>
                        <li>{item.maidenName}</li>
                        <li>{item.age}</li>
                        <li>{item.gender}</li>
                        <li>{item.email}</li>
                        <li>{item.phone}</li>
                        <li>{item.username}</li>
                        <li>{item.password}</li>
                        <li>{item.birthDate}</li>
                        <li>{item.bloodGroup}</li>
                        <li>{item.height}</li>
                        <li>{item.weight}</li>
                        <li>{item.eyeColor}</li>
                        <br />
                    </div>
                )
            })}
        </ul>
        </>
    )
}