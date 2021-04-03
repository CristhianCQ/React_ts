import { useState } from "react"

export const Usuario = () => {
    
    const [user, setUser] = useState<User>()
    
    interface User {
        uid:number;
        name: string
    }
    const login = () => {
        setUser({
            uid: 1234,
            name: 'Typescript Project'
        })
    }

    return (
        <div className = "mt-2">
             <h3>Usuario:</h3>
             <button
                className = "btn btn-outline-primary"
                onClick = {login} 
            >
                Login
             </button>

            {
                (!user)
                ? <pre>No hay usuario</pre>
                : <pre>{JSON.stringify(user)}</pre>   

            }
        </div>
    )
}
