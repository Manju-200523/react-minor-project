import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Button from '@mui/material/Button';

function App() {
  let handleclick=()=>{
    console.log("Button was clicked");
  };

  return (
    <>
      <h1>Material UI</h1>
      <Button onClick={handleclick} variant="contained">CLICK ME !</Button>
    </>
  )
}

export default App
