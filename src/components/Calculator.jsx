import { useState } from "react";

function Calculator({ onBack }) {
  const [display, setDisplay] = useState("0");
  const [previousNum, setPreviousNum] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNum, setWaitingForNum] = useState(false);
  // --- CALCULATOR LOGIC ---
  const addNumber = (n) => {
    if (waitingForNum) {
      setDisplay(String(n));
      setWaitingForNum(false);
    } else {
      setDisplay(display === "0" ? String(n) : display + n);
    }
  };

  const chooseOperation = (op) => {
    setPreviousNum(parseFloat(display));
    setOperation(op);
    setWaitingForNum(true);
  };

  const calculate = () => {
    const current = parseFloat(display);
    const previous = previousNum;
    let result;

    if (operation === "+") result = previous + current;
    if (operation === "-") result = previous - current;
    if (operation === "*") result = previous * current;
    if (operation === "/") result = previous / current;

    setDisplay(String(result));
    setOperation(null);
    setPreviousNum(null);
  };

  const clear = () => {
    setDisplay("0");
    setPreviousNum(null);
    setOperation(null);
    setWaitingForNum(false);
  };

  return (
    <div>
      <h1>Calculator</h1>

      {/* Calculator Display */}
      <input type="text" value={display} readOnly />

      {/* Row 1 */}
      <br></br>
      <button onClick={clear}>C</button>
      <button onClick={() => setDisplay("0")}>CE</button>
      <button onClick={() => chooseOperation("/")}>/</button>
      <button onClick={() => chooseOperation("*")}>*</button>
      <br />

      {/* Row 2 */}
      <button onClick={() => addNumber(7)}>7</button>
      <button onClick={() => addNumber(8)}>8</button>
      <button onClick={() => addNumber(9)}>9</button>
      <button onClick={() => chooseOperation("-")}>-</button>
      <br />

      {/* Row 3 */}
      <button onClick={() => addNumber(4)}>4</button>
      <button onClick={() => addNumber(5)}>5</button>
      <button onClick={() => addNumber(6)}>6</button>
      <button onClick={() => chooseOperation("+")}>+</button>
      <br />

      {/* Row 4 */}
      <button onClick={() => addNumber(1)}>1</button>
      <button onClick={() => addNumber(2)}>2</button>
      <button onClick={() => addNumber(3)}>3</button>
      <button onClick={calculate}>=</button>
      <br />

      {/* Row 5 */}
      <button onClick={() => addNumber(0)}>0</button>
      <button onClick={() => setDisplay(display + ".")}>.</button>
      <br />
      <button onClick={onBack}>Volver</button>
    </div>
  );
}

export default Calculator;
