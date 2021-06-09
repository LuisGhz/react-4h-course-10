import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <form action="">
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
      </form>
    </div>
  );
}

export default App;
