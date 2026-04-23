import {useState} from 'react';
function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(false);
  const [calculator, setCalculator] = useState(false);
  // --- CALCULATOR STATES ---
  const [display, setDisplay] = useState('0');
  const [previousNum, setPreviousNum] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNum, setWaitingForNum] = useState(false);
  const handleClick = () => {
    const total = Number(number1) + Number(number2);
    alert(`El resultado de la suma es: ${total}`);
  };
// --- CALCULATOR LOGIC ---
  const addNumber = (n) => {
    if (waitingForNum) {
      setDisplay(String(n));
      setWaitingForNum(false);
    } else {
      setDisplay(display === '0' ? String(n) : display + n);
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

    if (operation === '+') result = previous + current;
    if (operation === '-') result = previous - current;
    if (operation === '*') result = previous * current;
    if (operation === '/') result = previous / current;

    setDisplay(String(result));
    setOperation(null);
    setPreviousNum(null);
  };

  const clear = () => {
    setDisplay('0');
    setPreviousNum(null);
    setOperation(null);
    setWaitingForNum(false);
  };
  
  return (
    <>
    <div>
      <button onClick={() => setSum(true)}>Sum</button>
      <button onClick={() => setCalculator(true)}>Calculator</button>
    </div>

    {sum && (
        <div>
          <label>Num 1 </label> 
          <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
          <br></br>
          <label>Num 2 </label>
          <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
          <br></br>
          <button type="button" onClick={handleClick}>Submit</button>
          <button type="button" onClick={() => setSum(false)}>Return</button>
        </div>
    )}

    
{calculator && (
  <div>
    <h2>Calculator</h2>
    
    {/* Calculator Display */}
    <input 
      type="text" 
      value={display} 
      readOnly 
      style={{ display: 'block', marginBottom: '10px', textAlign: 'right' }} 
    />

    {/* Row 1 */}
    <button onClick={clear}>C</button>
    <button onClick={() => setDisplay('0')}>CE</button>
    <button onClick={() => chooseOperation('/')}>/</button>
    <button onClick={() => chooseOperation('*')}>*</button>
    <br />

    {/* Row 2 */}
    <button onClick={() => addNumber(7)}>7</button>
    <button onClick={() => addNumber(8)}>8</button>
    <button onClick={() => addNumber(9)}>9</button>
    <button onClick={() => chooseOperation('-')}>-</button>
    <br />

    {/* Row 3 */}
    <button onClick={() => addNumber(4)}>4</button>
    <button onClick={() => addNumber(5)}>5</button>
    <button onClick={() => addNumber(6)}>6</button>
    <button onClick={() => chooseOperation('+')}>+</button>
    <br />

    {/* Row 4 */}
    <button onClick={() => addNumber(1)}>1</button>
    <button onClick={() => addNumber(2)}>2</button>
    <button onClick={() => addNumber(3)}>3</button>
    <button onClick={calculate}>=</button>
    <br />

    {/* Row 5 */}
    <button onClick={() => addNumber(0)}>0</button>
    <button onClick={() => setDisplay(display + '.')}>.</button>

    <br /><br />
    {/* Back button to hide the screen */}
    <button onClick={() => setCalculator(false)}>Back</button>

  </div>
)}
    

    </>
  );
}

export default App;