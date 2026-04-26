import React from 'react'
import { useState } from 'react'

const App = () => {
 const[a , update] =  useState();
 const[b , update1] = useState();

  function abc(e){
      update(e.target.value)
  }

  function click(){
    update1(a)
  }

  return (
    <div>
      <input type='text' onChange={abc}/>
     <button onClick={click}>Click me </button>
     <p>{b}</p>
      
    </div>
  )
}

export default App
