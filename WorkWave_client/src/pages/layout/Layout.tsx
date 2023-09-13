import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";

function Layout() {
  const { token, user } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && !user) {
      navigate("/login/?noauth=true");
    }
  }, [token, user]);

  return (
    <div>
      <div className="mt-0">
        <Navbar />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
