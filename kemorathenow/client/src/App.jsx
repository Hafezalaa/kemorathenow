import { Routes, Route } from "react-router-dom";



import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound";
import Imprint from "./Pages/Imprint";
import Data from "./Pages/Data";
import AGB from "./Pages/AGB";
import CookieConsent from "./Components/CookieConsent";


function App() {
  

  return (
    <>
      <Header/>
      <CookieConsent/>
      <Routes>
          <Route path="/" element={<Home />} />
         {/*  <Route path="/shop" element={<Shop />} />*/}
          <Route path="/contact" element={<Contact />} />  
          
          <Route path="imprint" element={<Imprint/>}/>
          <Route path="data" element={<Data/>}/>
          <Route path="agb" element={<AGB/>}/>
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
      
    </>
  )
}

export default App
