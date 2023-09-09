import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Landing from "./pages/Landing/Landing";

import Layout from "./pages/layout/Layout";

import Empleos from "./pages/empleos/Empleos";

import Register from "./pages/register";
import RegisterDetail from "./components/RegisterDetail";
import Terms from "./pages/terms/index";

import AboutUs from "./pages/AboutUs/index";
import Vision from "./pages/vision/VisionPage";

import Teams from "./pages/teams/index";

function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/panel" element={<Navigate to="/perfil" replace />} />

            <Route path="/perfil" element={<Profile />} />
            <Route path="/empleos" element={<Empleos />} />
          </Route>

          <Route path="/registro" element={<Register />} />
          <Route path="/registro/:step" element={<RegisterDetail />} />

          <Route path="/terminos" element={<Terms />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/equipo" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
