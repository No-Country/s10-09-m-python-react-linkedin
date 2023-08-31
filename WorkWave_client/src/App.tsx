import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Landing from "./pages/Landing/Landing";

import Layout from "./pages/layout/Layout";

import Empleos from "./pages/empleos/Empleos";

import Register from "./pages/register";
import RegisterDetail from "./components/RegisterDetail";
import Terms from "./pages/terms/index";

function App() {
  return (
    <div className="app scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/panel" element={<Navigate to="/perfil" replace />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/empleos" element={<Empleos />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/register/:step" element={<RegisterDetail />} />

          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
