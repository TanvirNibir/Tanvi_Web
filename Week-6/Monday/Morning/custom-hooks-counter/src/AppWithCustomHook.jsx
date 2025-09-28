import useField from './useField';
import './App.css';  // Add CSS if needed
import useLocalStorage from './useLocalStorage'

const AppWithCustomHook = () => {

  const nameInput = useField('text')
  const bornInput = useField('date')
  const heightInput = useField('number')

  const handleSubmit = (event) => {

    event.preventDefault();
  };
  //logic 


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input {...nameInput} />
        </div>
        <br />
        <div>
          Birthdate: <input {...bornInput} />
        </div>
        <br />
        <div>
          Height: <input {...heightInput} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {nameInput.value} {bornInput.value} {heightInput.value}
      </div>
    </div>
  )
}

export default AppWithCustomHook;