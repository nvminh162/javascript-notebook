import { useContext } from 'react'
import './App.css'
import Content from './components/Content'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const context = useContext(ThemeContext)

  return (
      <div>
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Content />
      </div>
  )
}

export default App
