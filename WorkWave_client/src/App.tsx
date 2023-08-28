import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Landing from "./pages/Landing/Landing";
import Layout from "./pages/layout/Layout";
import Perfil from "./pages/perfil/Perfil";
import Empleos from "./pages/empleos/Empleos";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/panel" element={<Navigate to="/perfil" replace />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/empleos" element={<Empleos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
