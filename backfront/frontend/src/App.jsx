import { useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJoke] = useState([])

  return (
    <center>
      <h1>Here are some of the jokes : </h1>
      <p>Jokes : {jokes.length} </p>
      {
        jokes.map((joke, index) => {
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </center>
  )
}

export default App;
