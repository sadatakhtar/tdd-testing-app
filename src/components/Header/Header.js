import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [counterVal, setCounterVal] = useState(0);
  const [inputVal, setInputVal] = useState(1);

  const addToCounter = () => {
      setCounterVal(counterVal + inputVal);
  }
  const subFromCounter = () => {
    setCounterVal(counterVal - inputVal);
}

  return (
    <div className="header">
      <h1 data-testid="title" className="header_title">
        My Title
      </h1>
      <h2 data-testid="counter" className={counterVal <= 100 && counterVal > -99 ? '' : counterVal > 100 ? 'green' : 'red'}>{counterVal}</h2>
      <div className="inputSectionDiv">
        <button
          onClick={subFromCounter}
          data-testid="subtract_btn"
        >
          -
        </button>
        <input
          data-testid="input"
          type="number"
          value={inputVal}
          onChange={(e) => {
            setInputVal(parseInt(e.target.value));
          }}
        />
        <button
          onClick={addToCounter}
          data-testid="add_btn"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Header;
