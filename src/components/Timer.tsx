import { useEffect, useState } from "react"

type TimerArgs = {
    milisegundos: number
}

export const Timer = ({milisegundos}: TimerArgs) => {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        setInterval(() => setSegundos(s => s+(milisegundos/1000 )) , milisegundos)
    }, []);
    
    return (
         <div>
            <h4>Timer:<small>{segundos}</small></h4>
        </div>
    )
}
