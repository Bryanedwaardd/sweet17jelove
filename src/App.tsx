import { Routes, Route } from "react-router-dom";
import Sweet17Invitation from './pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Sweet17Invitation />} />
    </Routes>
    </>
  );
}

export default App;
