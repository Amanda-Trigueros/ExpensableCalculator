import React from 'react';
import Button from "./button"

function Counter() {
  const [number, setNumber] = React.useState(10);

  function handleDecreaseClick() {
    console.log("decrease clicked");
    setNumber(number - 1);
  }

  function handleIncreaseClick() {
    console.log("Increase clicked");
    setNumber(number + 1);
  }

  function handleClick(event) {
    console.log(`hice click en ${event.target.value}`)
    setNumber(event.target.value)
  }

  return (
    <div>
      <p>{number}</p>
      <Button onClick={handleDecreaseClick}>Decrease</Button>
      <button onClick={handleIncreaseClick}>Increase</button>
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
    
    </div>
  );
}

export default Counter