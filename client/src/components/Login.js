import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [loginApi] = useState(`http://localhost:3300/api/auth/login`)

  const [creds, setCreds] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios.post(loginApi, creds)
      .then(res => {
        console.log(res)
        localStorage.setItem('TOKEN', res.data.token)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h2>Log in to Dad Jokes here</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={creds.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={creds.password}
          onChange={handleChange}
          placeholder="password"
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;