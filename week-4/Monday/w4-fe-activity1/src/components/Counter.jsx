import './Counter.css';
import {useState} from 'react';


const Counter = () => {
  const [theme, setTheme] = useState("light");
  const [counter, setCounter] = useState(0);


  const lightFunction = () => setTheme('light');
  const darkFunction = () => setTheme("dark");
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className={`state ${theme}`}>
      <h1 className= "t">Changing Theme</h1>

      <button onClick={darkFunction}>Dark</button>
      <button onClick={lightFunction}>Light</button>
      <button onClick={toggleTheme}>Toggle</button>
      
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button onClick = {() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
