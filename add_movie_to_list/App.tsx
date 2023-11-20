import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [one, two] = useState(['Terminator', 'Pink']);

  function set_it() {
    if(inputValue.trim() !== ''){
      two([...one, inputValue]);
    }else {
      console.log('Invalid input. Please enter a valid name.');
    }
    setInputValue('');
  }

  return (
    <>
       {/* Input element */}
       <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type movie name"
      />
      <button onClick={set_it}>add</button>
      <h3>movies list</h3>
      <ul>
        {one.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
