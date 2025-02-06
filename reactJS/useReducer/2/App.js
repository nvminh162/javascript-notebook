import { useReducer, useRef } from "react";

const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

const initialState = {
  job: '',
  jobs: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)

      return {
        ...state,
        jobs: newJobs
      }
    default:
      throw new Error('Invalid Action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const inputRef = useRef()

  const { job, jobs } = state

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>TODO LIST</h1>
      <div>
        <input
          ref={inputRef}
          placeholder="Enter TODO..."
          value={job}
          onChange={e => dispatch(setJob(e.target.value))}
        />
        <button onClick={() => {
          dispatch(addJob(job))
          dispatch(setJob(''))
          inputRef.current.focus()
        }}>Push</button>
      </div>
      <ol>
        {jobs.map((job, index) => (
          <li key={index}>
            <button
              style={{ marginRight: 10 }}
              onClick={() => dispatch(deleteJob(index))}
            >&times;</button>
            {job}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App;