 /** @jsxImportSource @emotion/react */
//  import { css } from "@emotion/react";
 // import styled from "@emotion/styled";
 import { colors } from "./global/colors"
import React from 'react';
import Button from "./components/button"
import {Calculator, Keyboard, Header, Display, columnStyle } from './components/keyboard';

function FunctionCalculator({ category }) {
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
  
    const result = operants[operant](+first, +second);
    return result.toString();
  };

  function handleClick(event) {
    console.log(`Hice click en ${event.target.value}`);
  
    if (event.target.value === "." && (currentNumber === "0" || result)) {
      setCurrentNumber("0.");
      setResult(false);
    } else if (result && event.target.value !== ".") {
      setCurrentNumber(event.target.value);
      setResult(false);
    } else if (!currentNumber) {
      setCurrentNumber(event.target.value === "." ? "0." : event.target.value);
    } else if (currentNumber === "0" && event.target.value === ".") {
      setCurrentNumber("0.");
    } else if (!currentNumber.includes(".") && event.target.value === "." && result) {
      setCurrentNumber("0.");
    } else if (!currentNumber.includes(".") && event.target.value !== ".") {
      setCurrentNumber(currentNumber === "0" ? event.target.value : currentNumber + event.target.value);
    } else if (currentNumber.includes(".") && event.target.value !== ".") {
      setCurrentNumber(currentNumber + event.target.value);
    } else if (currentNumber.includes(".") && event.target.value === "." && result) {
      setCurrentNumber(currentNumber + event.target.value);
      setResult(false);
    } else if (currentNumber === "0" && event.target.value !== "0" && event.target.value !== ".") {
      setCurrentNumber(event.target.value);
    } else if (currentNumber === "0." && /[1-9]/.test(event.target.value)) {
      setCurrentNumber(currentNumber + event.target.value);
    } else if (/^\d+$/.test(currentNumber) && event.target.value === ".") {
      setCurrentNumber(currentNumber + ".");
    }
  }
  
  

  function handleReset() {
    console.log(`you restart the calculator`)
    setCurrentNumber("0")
    setPrevNumber(null)
    setOperant(null)
    setResult(false)
  }

  function handleDelete() {

    if (currentNumber) {

      if (currentNumber.length === 1 && !prevNumber && !operant ) {
        setCurrentNumber("0")
      } else if (currentNumber.length === 1 && prevNumber && operant ) {
         setCurrentNumber(null)
      } else if (currentNumber.length > 1) {
        console.log("this length 1")
         setCurrentNumber(currentNumber.slice(0,-1))
     
      }
    } else if (!currentNumber && prevNumber && operant) {
        setCurrentNumber(prevNumber)
        setPrevNumber(null)
        setOperant(null)
    }
    
  }

  return (
    <Calculator>
      <Header name="Groceries">Add expense to</Header>
      
        <Display>
        <p>${prevNumber}{operant} {currentNumber}</p>
        </Display>
        <Keyboard>
        <div css={columnStyle}>
          <Button value="/" onClick={handleOperant} type="operants">/</Button>
          <Button value="x" onClick={handleOperant} type="operants">x</Button>
          <Button value="-" onClick={handleOperant} type="operants">-</Button>
          <Button value="+" onClick={handleOperant} type="operants">+</Button>
        </div>
        <div css={columnStyle}>
          <Button value={1} onClick={handleClick}>1</Button>
          <Button value={4} onClick={handleClick}>4</Button>
          <Button value={7} onClick={handleClick}>7</Button>
          <Button></Button>

          
        </div>

        <div css={columnStyle}>
          <Button value={2} onClick={handleClick}>2</Button>
          <Button value={5} onClick={handleClick}>5</Button>
          <Button value={8} onClick={handleClick}>8</Button>
          <Button value={0} onClick={handleClick}>0</Button>

        </div>
        <div css={columnStyle}>
          <Button value={3} onClick={handleClick}>3</Button>
          <Button value={6} onClick={handleClick}>6</Button>
          <Button value={9} onClick={handleClick}>9</Button>
          <Button value={"."} onClick={handleClick}>.</Button>

        </div>
        <div css={columnStyle}>
        <Button value="d" onClick={handleDelete}>D</Button>
        <Button value="c" onClick={handleReset}>C</Button>
        <Button value="=" onClick={handleEqual} type="equal">=</Button>
        </div>

        </Keyboard>
    </Calculator>
  );
}

export default FunctionCalculator