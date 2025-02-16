import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBar from './pages/home/AppBar'
import Grid from './pages/home/Grid'


function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
        <AppBar />
        <Grid />
      </div>
    
  )
}

export default App
