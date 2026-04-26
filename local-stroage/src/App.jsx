import React from 'react'
import axios from 'axios'

const App = () => {
 async function abc(){
      const da =  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(da.data)

 }
  return (
    <div>
      <button onClick={abc}>click me</button>
    </div>
  )
}

export default App
