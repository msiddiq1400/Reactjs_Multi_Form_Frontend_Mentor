import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plans from "./screens/plan-screen/plan.js";
import Info from "./screens/info-screen/info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Info />} />
        <Route path="/plan" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
