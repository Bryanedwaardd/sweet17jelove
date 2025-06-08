import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectPage from "./pages/ProjectPage";
import ProcessPage from "./pages/ProcessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
