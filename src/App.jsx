import { useState } from "react";
import Sum from "./components/Sum";
import Calculator from "./components/Calculator";
import ApiWeb from "./components/ApiWeb";
import './App.css'
function App() {
  const [window, setWindow] = useState("home");
  const goBack = () => {
    setWindow("home");
  };

  if (window === "sum") {
    return (<Sum onBack={() => {goBack()}} />);
  }

  if (window === "calculator") {
    return (<Calculator onBack={() => {goBack()}} />);
  }

  if (window === "ApiWeb") {
    return (<ApiWeb onBack={() => {goBack()}} />);
  }

  return (
    <div>
      <h1>HOME</h1>
      <button type="button" onClick={() => setWindow("sum")}>Sumar</button>
      <br></br>
      <button type="button" onClick={() => setWindow("calculator")}>Calculadora</button>
      <br></br>
      <button type="button" onClick={() => setWindow("ApiWeb")}>Api Web</button>
    </div>
  );
}

export default App;