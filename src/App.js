import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./componentes/Navbar";

import Home from "./views/Home";
import Contacto from "./views/Contacto";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
