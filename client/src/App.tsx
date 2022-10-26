import "./App.css";
import Index from "./pages/welcome";
import { Routes, Route, HashRouter } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import IndexUser from "./pages/formproducts";
import Shopping from "./pages/shopping";
import { ProductContextProvider } from "./context/products/productContext";
function App() {
  return (
    <>
      <ProductContextProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<IndexUser />} />
            <Route path="/shopping" element={<Shopping />} />
          </Routes>
        </HashRouter>
      </ProductContextProvider>
    </>
  );
}

export default App;
