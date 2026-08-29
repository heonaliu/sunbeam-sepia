// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CameraPage from "./pages/CameraPage";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/capture" element={<CameraPage />} />
        <Route path="/edit" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;