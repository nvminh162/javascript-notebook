import { useCallback, useState } from "react";

import Content from "./Content";

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (

    <div
      className="App"
      style={{ marginLeft: 20 }}
    >
      <Content
        onIncrease={handleIncrease}
      />
      <h1>{count}</h1>
    </div>
  )
}

export default App;