import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './index.css'

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
