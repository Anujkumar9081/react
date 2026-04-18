import React from 'react'
import { useState } from 'react'

const App = () => {
 const[obj , update] =  useState({name:'anuj yadav' , age:20})
 const[namee , forname] = useState("")
const[age , forage] = useState("")
 function abc(){
  const value = {...obj}
  value.name = namee
  value.age = age
  update(value)
 }
  return (
    <div>
      <h1>
        Name: {obj.name}<br/>
        Age: {obj.age}<br/>

        <input type='text' onChange={function(e){forname(e.target.value)}} placeholder='Enter you name for update on the desktop'/><br/>
        <input type='number' onChange={function(w){forage(w.target.value)}} placeholder='enter your age'/><br/>

                <button onClick={abc}>Click</button>
      </h1>
    </div>
  )
}

export default App
