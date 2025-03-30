import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import History from './components/History'
import './App.css'
import { motion } from "framer-motion";
import Footer from './components/Footer'
import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    < > 
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.3 }}
    >
      <Header/>
      <Home/>
      <History/>
      <Calendar/>
      </motion.div>
    </>
  )
}

export default App
