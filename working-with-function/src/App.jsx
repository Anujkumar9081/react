import React from 'react'

const App = () => {
  const [name, setName] = React.useState('')  // state variable

  return (
    <div>
      <input
        type='text'
        placeholder="Enter your name"
        onChange={function(e){ setName(e.target.value) }}
      />
      <button onClick={function(){ console.log(name) }}>
        Submit
      </button>
    </div>
  )
}

export default App