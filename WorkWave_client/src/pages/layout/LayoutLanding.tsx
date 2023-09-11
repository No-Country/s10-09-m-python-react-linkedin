import { Outlet } from "react-router";
import LandingNavbar from "../../components/LandingNavbar/LandingNavbar";
import Footer from "../../components/Footer/Footer";
function Layout() {
  return (
    <div>
      <div className="py-5 hidden lg:flex justify-center items-center">
        <LandingNavbar />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
