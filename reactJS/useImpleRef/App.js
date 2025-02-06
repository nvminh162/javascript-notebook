import { useEffect, useRef } from "react"
import Video from "./Video"

function App() {
  const videoRef = useRef()

  useEffect(() => {
    console.log(videoRef.current)
  })

  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div className="App">
      <Video ref={videoRef} />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  )
}

export default App;