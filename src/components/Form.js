import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    alert(`Name: ${ name } Email: ${ email }`)
    setName('');
    setEmail('');
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

export default Form;