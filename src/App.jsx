import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>Gary is a super duper cool guy.</div>
      <div>And his secret code is {import.meta.env.VITE_GARYS_VAR}</div>
    </>
  )
}

export default App
