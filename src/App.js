import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    alert(`Name: ${ name } Email: ${ email }`)
  }
  return (
    <div className="App">
      <form onSubmit={ submitHandler }>
        <div>
          <label>Name</label>
          <input 
            value={ name }
            onChange={ e => setName(e.target.value) }
            type="text" 
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            value={ email }
            onChange={ e => setEmail(e.target.value) }
            type="text" 
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
