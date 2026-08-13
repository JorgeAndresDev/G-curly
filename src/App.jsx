import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

const Store = lazy(() => import("./pages/Store"));
const Salon = lazy(() => import("./pages/Salon"));
const Routines = lazy(() => import("./pages/Routines"));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-caramelo border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/rutinas" element={<Routines />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;