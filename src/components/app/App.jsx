import React, { useState } from 'react';

const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  const [history, setHistory] = useState([init]);
  let [index, setIndex] = useState(0);
  const record = (value) => {
    index = index + 1;
    history.splice(index, 0, value);
    setIndex(index);
    setCurrent(history[index]);
    setHistory[history];
  };
  const undo = () => {
    index = index - 1;
    setIndex(index);
    setCurrent(history[index]);
  };
  const redo = () => {
    index = index + 1;
    setIndex(index);
    setCurrent(history[index]);
  };
  return {
    current, record, undo, redo
  };
};

function App() {
  const { current, undo, redo, record } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <label>Color Picker
      <input type="color" value={current} onChange={({ target }) => record(target.value)} aria-label="input" />
      </label>
      <label>
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem', } } aria-label="para" data-testid="test"></div>
      </label>
    </>
  );
}

export default App;
