import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"
import Header from "./components/Header"
import History from "./pages/History"
import PNF from "./pages/PNF"
import Form from "./pages/Form"


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/history" element={<History/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="*" element={<PNF/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App
