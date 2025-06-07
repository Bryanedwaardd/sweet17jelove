import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectPage from "./pages/ProjectPage";
import ProcessPage from "./pages/ProcessPage";
// import AnalyticsPage from "./pages/AnalyticsPage";

// const isAdmin = localStorage.getItem("userRole") === 'admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/analytics" element={<AnalyticsPage />} /> */}
    </Routes>
  );
}

export default App;
