import React, { useReducer } from 'react'

export type ActionType=
 | {type:'incrementar'}
 | {type:'decrementar'}
 | {type:'setContador', payload:number}

export type  ContadorRedState ={
    contador: number;
}

 const initialState:ContadorRedState = {
    contador: 0
}

export const useContadorRedReducer = (init?: ContadorRedState):[
    ContadorRedState, 
    React.Dispatch<ActionType>
] =>{
    const [newState, dispatch] = useReducer(
        (
            state: ContadorRedState, 
            action:ActionType
        ): ContadorRedState =>{
            switch(action.type){
                case 'incrementar':
                    return {
                        ...state,
                        contador: state.contador+1
                    };
                case 'decrementar':
                    return{
                        ...state,
                        contador: state.contador-1
                    }
                case 'setContador':
                    return {
                        ...state,
                        contador: action.payload
                    }
                default:
                    return state;
            }
        }, 
        init ?? initialState
    )
    return [newState, dispatch]
}
