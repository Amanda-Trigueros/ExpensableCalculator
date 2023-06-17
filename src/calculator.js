import React from 'react';
import Button from "./components/button"
import { Keyboard, Header } from './components/keyboard';

function Calculator({ category }) {
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

    if(prevNumber && currentNumber) {
      equal = operator({operant,first: prevNumber,second: currentNumber})
    
    } else if(currentNumber === "") {
      console.log(prevNumber)
      equal = operator({operant,first: prevNumber,second: prevNumber})
    }

      setResult(true)
      setPrevNumber(null)
      setCurrentNumber(equal)
      setOperant(null)
  
      return equal
  }

  const operator = ({ operant, first, second }) => {
    const operants = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "x": (a, b) => a * b,
      "/": (a, b) => a / b,
    };
    console.log(first)
    console.log(second)
  
    const result = operants[operant](+first, +second);
    console.log(result);
    return result;
  };

  function handleClick(event) {
    console.log(`hice click en ${event.target.value}`)

    if (currentNumber === "0" || result) {

      if(event.target.value ==="."){
        setCurrentNumber("0"+ event.target.value)
      }else if(currentNumber === "0." ){
        setCurrentNumber(currentNumber + event.target.value)
      }else {
      setCurrentNumber(event.target.value)
      setResult(false)
      }
    } else {
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

  function handleDelete() {

    if (currentNumber) {
      setCurrentNumber(currentNumber.toString())

      if (currentNumber.length === 1 && !prevNumber && !operant ) {
        setCurrentNumber("0")
      } else if (currentNumber.length === 1 && prevNumber && operant ) {
         setCurrentNumber(null)
      } else if (currentNumber.length > 1) {
         setCurrentNumber(currentNumber.slice(0,-1))
     
      }
    } else if (!currentNumber && prevNumber && operant) {
        setCurrentNumber(prevNumber)
        setPrevNumber(null)
        setOperant(null)
    }
    
  }

  return (
    <div>
      <Header name="Groceries">Add expense to</Header>
      <Keyboard>
        <p>${prevNumber}{operant} {currentNumber}</p>
        <div>
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
          <Button value={"."} onClick={handleClick}>.</Button>
          <Button value="d" onClick={handleDelete}>D</Button>
        </div>
        <div>
          <Button value="c" onClick={handleReset}>C</Button>
          <Button value="+" onClick={handleOperant}>+</Button>
          <Button value="-" onClick={handleOperant}>-</Button>
          <Button value="x" onClick={handleOperant}>x</Button>
          <Button value="/" onClick={handleOperant}>/</Button>
        </div>

        <Button value="=" onClick={handleEqual}>=</Button>
      </Keyboard>
    </div>
  );
}

export default Calculator