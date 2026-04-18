import React from 'react'
import { useState } from 'react'

const App = () => {
  const[name , update] = useState("")
  function abc(){
    console.log(name)
  }
  return (
    <div>
      <input type='text' value={name} 
      onChange={(e)=>update(e.target.value)}
      placeholder='enter your name'/><br/><br/>
      <button onClick={abc}>click here </button>

    </div>
  )
}

export default App
