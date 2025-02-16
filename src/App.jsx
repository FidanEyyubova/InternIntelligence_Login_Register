import './App.css'
import LogReg from './LogReg'
import { Route, Routes } from 'react-router-dom'
import LogOut from './LogOut'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element = {<LogReg />} />
      <Route path="/profile" element = {<LogOut />} />
     </Routes>
    </>
  )
}

export default App
