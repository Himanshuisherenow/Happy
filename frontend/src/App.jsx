import { useEffect, useState } from 'react'


import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      console.log(res.data)
      setJokes(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  return (
    <>
    <h1>Full Stack</h1>
    <p>JOKES : {jokes.length}</p>
    {   
      jokes.map((joke,index )=>(

        <div  key={joke.id}>  
        <h2>{joke.category}</h2>
        <br></br>
        <h3>{joke.question}</h3>
        <h3>{joke.answer}</h3>
        </div>
      ))
    }
      </>
  )
}

export default App
