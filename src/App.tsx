import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Technology from "./pages/Technology";
import Deployments from "./pages/Deployments";
import WhyUs from "./pages/WhyUs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/deployments" element={<Deployments />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
