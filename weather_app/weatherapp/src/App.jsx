import { useState } from 'react'
import './App.css'
import Weather from './components/WeatherApp/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather/>
      
    </>
  )
}

export default App
