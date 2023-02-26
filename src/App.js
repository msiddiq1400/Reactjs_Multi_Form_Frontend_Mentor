import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plans from "./screens/plan-screen/plan.js";
import Info from "./screens/info-screen/info";
import Addons from "./screens/addons/addons";
import Finishing from "./screens/finishing/finishing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Info />} />
        <Route path="/plan" element={<Plans />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/finishing" element={<Finishing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
