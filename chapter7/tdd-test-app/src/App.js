import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [turnSwitch, setTurnSwitch] = useState(true);

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    setCount(count - 1);
  };

  const handleClickSwitch = () => {
    setTurnSwitch(!turnSwitch);
  };

  return (
    <>
      <div>
        <span data-testid="counter">{turnSwitch ? count : null}</span>
      </div>
      <button data-testid="plus-button" onClick={handleClickPlus}>
        +
      </button>
      <button data-testid="minus-button" onClick={handleClickMinus}>
        -
      </button>
      <button onClick={handleClickSwitch}>{turnSwitch ? 'Off' : 'On'}</button>
    </>
  );
};

export default App;
