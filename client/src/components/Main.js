import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {

  const [jokesApi] = useState(`http://localhost:3300/api/jokes`)

  const [jokes, setJokes] = useState([]);

  const getJokes = () => {
    const token = localStorage.getItem("TOKEN");
    console.log(token);

    axios.get(jokesApi, {
      method: 'post',
      headers: {
        'Authorization': token,
      }
    })
      .then(res => {
        console.log(res);
        setJokes(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <h2>Jokes</h2>

      <div onClick={getJokes} style={{ cursor: 'pointer'}}> GET JOKES </div>

      {
        jokes.length === 0 
          ? <p>Click above to view Dad Jokes</p>
          : jokes.map(joke => {
            return <p key={joke.id}>{joke.joke}</p>
          })
      }
    </div>
  );
};

export default Main;