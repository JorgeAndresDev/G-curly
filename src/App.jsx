import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Salon from "./pages/Salon";
import Routines from "./pages/Routines";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/rutinas" element={<Routines />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
