import {useContadorRedReducer} from './useContadorRedReducer'

export const ContadorRed = () => {
    const  [state, dispatch] = useContadorRedReducer({
        contador:0
      }
    )

    return (
        <>
          <h2>Contador: {state.contador}</h2>  
          <button
            className= "btn btn-outline-primary "
            onClick={() => {dispatch({type: 'incrementar'})}}
          >
            +1
          </button>
          <button
            className= "btn btn-outline-primary "
            onClick={() => {dispatch({type: 'decrementar'})}}
          >
            -1
          </button>
          <button
            className= "btn btn-outline-danger"
            onClick ={() => {dispatch({
              type: 'setContador',
              payload: 100
            })}}
          >
            100
          </button>
        </>
    )
}
