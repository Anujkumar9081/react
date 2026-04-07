import './App.css'
import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div>
      <Card user = {'Priya yadav'} age = {16}/>
      <Card user = {'Anshu yadav'} age = {21}/>
      <Card user = {'Malti yadav'} age = {45}/>
      <Card user ={'Ombeer yadav'} age ={46}/>
      <Card user ={'Anuj yadav'} age ={19}/>
       
    </div>
  )
}

export default App
