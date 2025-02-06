import { useState } from "react";

function App() {
  const [input, setInput] = useState('')
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem('jobs')) ?? []
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, input]
      localStorage.setItem('jobs', JSON.stringify(newJobs))
      return newJobs
    })
    setInput('')
  }

  const handleDelete = (index) => {
    const oldJobs = JSON.parse(localStorage.getItem('jobs')) ?? []
    const newJobs = oldJobs.filter((_, i) => i !== index)
    setJobs(prev => {
      localStorage.setItem('jobs', JSON.stringify(newJobs))
      return newJobs
    })
    setInput('')
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <input
        type="text"
        value={input}
        placeholder="Enter your to-do"
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
      >Push</button>
      <div className="todos-list">
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <button
                style={{ marginLeft: 5 }}
                onClick={() => handleDelete(index)}
              >&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;