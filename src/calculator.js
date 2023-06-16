import React from 'react';
import Button from "./button"

function Counter() {
  const [number, setNumber] = React.useState(10);
  const [currentNumber, setCurrentNumber] = React.useState("0")
  const [operant, setOperant] = React.useState(null)
  const [prevNumber, setPrevNumber] = React.useState(null)

  function handleOperant(event) {
    setPrevNumber(currentNumber)
    setCurrentNumber("")
    setOperant(event.target.value)
  }

  function handleEqual() {
    let result

    if (operant === "+") {

      if(prevNumber && currentNumber) {
      
        result= +prevNumber + +currentNumber
      
      } else if(currentNumber === "") {
        result= +prevNumber + +prevNumber
      }

      
    }

    

    setPrevNumber(null)
    setCurrentNumber(result)
    setOperant(null)
  }

  function handleClick(event) {
    console.log(`hice click en ${event.target.value}`)
    setNumber(event.target.value)
    setCurrentNumber(currentNumber + event.target.value)
  }

  function handleReset(event) {
    console.log(`you restart the calculator`)
    setCurrentNumber("0")
  }

  return (
    <div>
      <p>{number}</p>
      <p>{prevNumber} {operant} {currentNumber}</p>

      <Button value={1} onClick={handleClick}>1</Button>
      <Button value={2} onClick={handleClick}>2</Button>
      <Button value={3} onClick={handleClick}>3</Button>
      <Button value={4} onClick={handleClick}>4</Button>
      <Button value={5} onClick={handleClick}>5</Button>
      <Button value={6} onClick={handleClick}>6</Button>
      <Button value={7} onClick={handleClick}>7</Button>
      <Button value={8} onClick={handleClick}>8</Button>
      <Button value={9} onClick={handleClick}>9</Button>
      <Button value={0} onClick={handleClick}>0</Button>

      <Button value={0} onClick={handleReset}>C</Button>
      <Button value="+" onClick={handleOperant}>+</Button>
      <Button value="-" onClick={handleOperant}>-</Button>
      <Button value="x" onClick={handleOperant}>x</Button>
      <Button value="/" onClick={handleOperant}>/</Button>
      <Button value="=" onClick={handleEqual}>=</Button>

    </div>
  );
}

export default Counter