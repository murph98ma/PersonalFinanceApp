import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GrowthChart from './GrowthGraph'


function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
      <GrowthChart />
      </div>
    
  )
}

export default App
