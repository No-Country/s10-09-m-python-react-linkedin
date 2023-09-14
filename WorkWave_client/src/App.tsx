import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Landing from "./pages/Landing/Landing";

import Layout from "./pages/layout/Layout";

import Empleos from "./pages/jobs/Empleos";

import Register from "./pages/register";
import RegisterDetail from "./components/RegisterDetail";
import TermsUso from "./pages/terms/index";

import AboutUs from "./pages/AboutUs/index";
import Vision from "./pages/vision/VisionPage";
import Chat from "./pages/chat/Chat";

import Teams from "./pages/teams/index";
import Cookie from "./pages/cookie/index";

import TermsServices from "./pages/termsServices/index";
import LayoutLanding from "./pages/layout/LayoutLanding";
import TermsSecurity from "./pages/SecurityPolicyPage/index";
import TermsCopy from "./pages/copiterms/index";
import Privacidad from "./pages/privacidad/index";

import { useState } from "react";
import { User } from "./models/user";
import { FavoriteJobs } from "./models/favoriteJobs";
import { TokenContext } from "./context/TokenContext";
import Cursos from "./components/Cursos/Cursos";
function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");

  const [user, setUser] = useState<User | null>(storedUser);

  const storedValue = localStorage.getItem("favorite");
  const storedFavorite = storedValue ? JSON.parse(storedValue) : [];
  const storedFavoriteJobs: FavoriteJobs[] = Array.isArray(storedFavorite)
    ? storedFavorite
    : [];

  const [favoriteJobs, setFavoriteJobs] =
    useState<FavoriteJobs[]>(storedFavoriteJobs);

  return (
    <TokenContext.Provider
      value={{ token, setToken, user, setUser, favoriteJobs, setFavoriteJobs }}
    >
      <main className="app dark">
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/panel"
                element={<Navigate to="/perfil" replace />}
              />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/empleos" element={<Empleos />} />
              <Route path="/mensajes" element={<Chat />} />
              <Route path="/cursos" element={<Cursos />} />
            </Route>

            <Route element={<LayoutLanding />}>
              <Route path="/" element={<Landing />} />
              <Route path="/cookie" element={<Cookie />} />
              <Route path="/equipo" element={<Teams />} />
              <Route path="/nosotros" element={<AboutUs />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/politica-uso" element={<TermsUso />} />
              <Route path="/politica-servicio" element={<TermsServices />} />
              <Route path="/politica-seguridad" element={<TermsSecurity />} />
              <Route path="/politica-copy" element={<TermsCopy />} />
              <Route path="/politica-privacidad" element={<Privacidad />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/registro/:step" element={<RegisterDetail />} />
          </Routes>
        </BrowserRouter>
      </main>
    </TokenContext.Provider>
  );
}

export default App;
