import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    })
  }, [navigate]);

  return (
    <div>
      {/* Disclaimer Banner */}
      <div style={{
        backgroundColor: "#ffcccc",
        color: "#660000",
        padding: "12px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "14px",
        position: "sticky",
        top: 0,
        zIndex: 9999
      }}>
        ⚠️ Demo project for learning purposes only. 
        No real login or personal data collected.
      </div>

      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App