import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./screens/info/info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
