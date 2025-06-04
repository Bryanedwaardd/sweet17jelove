import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/aboutPage";
// import ProductPage from "./pages/productPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import ProjectPage from "./pages/ProjectPage";
import ProcessPage from "./pages/ProcessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/products" element={<ProductPage />} /> */}
      {/* <Route path="/contact" element={<ContactUsPage />} /> */}
      {/* <Route path="/projects" element={<ProjectPage />} /> */}
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
