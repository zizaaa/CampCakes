import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home/Home"
import OurMenu from "./pages/OurMenu"
import CustomizeCakes from "./pages/CustomizeCakes"
import ContacUs from "./pages/ContacUs"
import Faq from "./pages/Faq"
function App() {

  return (
    <Routes>
        <Route 
          path="/" 
          element={<MainLayout/>}
        >
            <Route 
              index 
              element={
                <Home/>
              }
            />
            <Route 
              path="/OurMenu" 
              element={
                <OurMenu/>
              }
            />
            <Route 
              path="/CustomCakes" 
              element={
                <CustomizeCakes/>
              }
            />
            <Route 
              path="/ContacUs"
              element={
                <ContacUs/>
              }
            />
            <Route 
              path="/Faq" 
              element={
                <Faq/>
              }
            />
        </Route>
    </Routes>
  )
}


export default App
