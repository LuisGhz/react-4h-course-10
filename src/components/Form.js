import useInput from 'customhook/useInput';

const Form = () => {
  const [name, bindName, clearName] = useInput('');
  const [email, bindEmail, clearEmail] = useInput('');

  const submitHandler = e => {
    e.preventDefault();
    alert(`Name: ${ name } Email: ${ email }`)
    clearName();
    clearEmail();
  }

  return (
    <div className="App">
      <form onSubmit={ submitHandler }>
        <div>
          <label>Name</label>
          <input 
            { ...bindName }
            type="text" 
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            { ...bindEmail }
            type="text" 
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;