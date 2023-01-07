import React, { useState } from 'react';
// import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSucess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { username, password };
    // const result = await axios.post('https://dummyjson.com/products/add', data);
    setSucess('Login success');
  };

  return (
    <form onSubmit={handleSubmit}>
      {success && <div className='successMessage'>{success}</div>}
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button type='submit'>Log in</button>
    </form>
  );
};

export default Login;
