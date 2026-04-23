import {useState} from 'react';
function App() {
  const [page,setPage] = useState("inicio")
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleClick = () => {
    const total = Number(number1) + Number(number2);
    alert(`El resultado de la suma es: ${total}`);
  };

  return (
    <div>
      <label>Num 1 </label> 
      <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <br></br>
      <label>Num 2 </label>
      <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <br></br>
      <button type="button" onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;