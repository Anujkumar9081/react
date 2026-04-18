import React from 'react'
import { useState } from 'react'
import "./App.css"

const App = () => {
  const[a , update] = useState(10)

  function inc(){
   let b = a+1
    update(b)
  }
  function dec(){
   let v = a-1
   if(v>=0){
    update(v)
  }}

  return (
    
    <div>
      <button id="dec" onClick={dec}>decrease</button>
      <input type='number' value={a}/>
      <button id="inc" onClick={inc}>Increase</button>
    </div>
  )
}

export default App
