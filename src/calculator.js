import React from 'react';
import Button from "./button"

function Counter() {
  const [currentNumber, setCurrentNumber] = React.useState("0")
  const [operant, setOperant] = React.useState(null)
  const [prevNumber, setPrevNumber] = React.useState(null)
  const [result, setResult] = React.useState(false)

  function handleOperant(event) {
    
    setOperant(event.target.value)

    if (!operant) {
      setPrevNumber(currentNumber)
      setCurrentNumber("")
    }

    if (prevNumber && operant && currentNumber) {
       let equal = handleEqual()
       setPrevNumber(equal)
       setCurrentNumber("")
       setOperant(event.target.value)
    }

  }

  function handleEqual() {
    let equal
    switch (operant) {
      case "+":
        if(prevNumber && currentNumber) {
          equal = (+prevNumber + +currentNumber)
        
        } else if(currentNumber === "") {
          equal = (+prevNumber + +prevNumber)
        }
      break;
      case "-":
        if(prevNumber && currentNumber) {
          equal = (+prevNumber - +currentNumber)
        
        } else if(currentNumber === "") {
          equal = (+prevNumber - +prevNumber)
        }
      break;
      case "x":
        if(prevNumber && currentNumber) {
          equal = (+prevNumber * +currentNumber)
        
        } else if(currentNumber === "") {
          equal = (+prevNumber * +prevNumber)
        }
      break;
      case "/":
        if(prevNumber && currentNumber) {
          equal = (+prevNumber / +currentNumber)
        
        } else if(currentNumber === "") {
          equal = (+prevNumber / +prevNumber)
        }
      break;
    
      default:
      break;
    } 
    
    setResult(true)
    setPrevNumber(null)
    setCurrentNumber(equal)
    setOperant(null)

    return equal
  }

  function handleClick(event) {
    console.log(`hice click en ${event.target.value}`)

    if (currentNumber === "0" || result) {
      setCurrentNumber(event.target.value)
      setResult(false)
    }
    else {
      setCurrentNumber(currentNumber + event.target.value)
    }

  }

  function handleReset(event) {
    console.log(`you restart the calculator`)
    setCurrentNumber("0")
    setPrevNumber(null)
    setOperant(null)
    setResult(false)
  }

  return (
    <div>
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