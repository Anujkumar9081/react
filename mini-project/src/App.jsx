import React from 'react'
import './App.css'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div>
      <Card img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s'
            company='Amazon'
            days='5'
            postion='Senior UI/UX Designer'
            jobtype1='Part-time' 
            jobtype2='senior level' 
            salary='$120/hr'  />
      <Card 
      img='https://www.gesi.org/wp-content/uploads/2024/08/google-logo-png-open-2000.png' 
      company='Google' 
      days='2' 
      postion='Software Engineer' 
      jobtype1='Full time' 
      jobtype2='Manager level' 
      salary='$150/hr' />
      <Card
      img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P7PSO_hZpFpHrAtfV3Xvpb13CT7V9kuKxg&s' 
      company='microsoft' 
      days='6' 
      postion='Software Engineer and Designer' 
      jobtype1='Full time , Remote' 
      jobtype2='Senior level' 
      salary='$110/hr' />

      
      

    </div>
  )
}

export default App