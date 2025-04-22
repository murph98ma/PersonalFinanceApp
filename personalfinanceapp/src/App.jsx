import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBar from './pages/SharedComponents/AppBar'
import Dashboard from './pages/home/Dashboard'
import Transactions from './pages/transactions/transactions'
import Settings from './pages/UserSettings/settings'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <AppBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/settings" element={<Settings />} />
        </Routes>
   </Router>
  )
}

export default App
