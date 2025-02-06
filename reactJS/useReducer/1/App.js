import { useReducer, useState } from "react";

const initialState = 0

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>UP</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
    </div>
  )
}

export default App;