import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MakerspaceCaseStudy from "./pages/MakerspaceCaseStudy";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects/utm-makerspace" element={<MakerspaceCaseStudy />} />
      <Route
        path="/projects/campus-navigation"
        element={<Navigate to="/projects/utm-makerspace" replace />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
