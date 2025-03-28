import { useState } from 'react'
import './css/App.css'
import Home from "./pages/Home"
import YourTeam from './pages/YourTeam'
import NavBar from './components/NavBar'
import {Routes, Route} from "react-router-dom"

function App() {
  //const playerNumber;

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/team" element={<YourTeam/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App
