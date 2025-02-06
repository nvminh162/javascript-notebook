import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function App() {
  const [title, setTitle] = useState('')
  const [type, setType] = useState(tabs[0])
  const [data, setData] = useState([])

  useEffect(() => {
    document.title = title
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(respon => respon.json())
      .then(api => {
        setData(api)
        console.log(api)
      })
  }, [type])

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Enter your title..."
          onChange={e => setTitle(e.target.value)}
        />
        <div>
          {tabs.map((tab, index) => (
            <button
              key={index}
              style={type === tab ? {
                color: 'white',
                backgroundColor: 'black'
              } : {}}
              onClick={() => setType(tab)}
            >{tab}</button>
          ))}
        </div>
        <div>
          <ul>
            {data.map((dt, i) => (
              <li key={i}>{dt.title || dt.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;