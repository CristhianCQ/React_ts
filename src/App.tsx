import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>React + Typescript</h1>
      <h2>UseState</h2>
      <hr/>
      <Counter /> 
      <Usuario />

      <h2>UseEffect- UseRef</h2> 
      <hr/>
      <TimerPadre />
    </>
  );
}

export default App;
