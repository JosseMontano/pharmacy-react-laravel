import "./App.css";
import Index from "./pages/welcome";
import { Routes, Route, HashRouter } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import IndexUser from "./pages/indexUser";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<IndexUser />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
