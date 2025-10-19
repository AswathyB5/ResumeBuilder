import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/LandingPage' element={<LandingPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
