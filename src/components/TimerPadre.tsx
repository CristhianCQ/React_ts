import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000)     

    const newMilisegundos = (m:number):void => {
        setMilisegundos(m);
    }

    return (
        <div className = "mt-2">
            <h3>Timer Padre:</h3>
            <span>Milisegundos {milisegundos}</span>
            <br/>
            <button 
                className = "btn btn-outline-success mt-2"
                onClick =  {() => newMilisegundos(1000)}
            >
                1000
            </button>
            <button 
                className = "btn btn-outline-success mt-2"
                onClick =  {() => newMilisegundos(2000)}
            >
                2000
            </button>
            <button 
                className = "btn btn-outline-success mt-2"  
                onClick =  {() => newMilisegundos(3000)}
            >
                3000
            </button>
            <button 
                className = "btn btn-outline-success mt-2"
                onClick =  {() => newMilisegundos(10000)}
            >
                10000
            </button>
            <Timer milisegundos = {milisegundos}/>
        </div>
     )
}
