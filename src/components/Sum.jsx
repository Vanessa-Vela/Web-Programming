import { useState } from "react";

function Sum({ onBack }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleClick = () => {
    const total = Number(number1) + Number(number2);
    alert(`El resultado de la suma es: ${total}`);
  };

  return (
    <div>

      <h1>SUM</h1>
      <label>Num 1</label>
      <br></br>
      <input value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <br></br>
      <label>Num 2</label>
      <br></br>
      <input value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <br></br>
      <br></br>
      <button type="button" onClick={handleClick}>Submit</button>
      <br></br>
      <button type="button" onClick={onBack}>Volver</button>
    </div>
  );
}

export default Sum;