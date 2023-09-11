import { AiFillHome, AiTwotoneAlert } from "react-icons/ai";
import { IoMdBriefcase } from "react-icons/io";
import { MdMessage, MdFavorite } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import LogoHorizontal from "../Logo/LogoHorizontal";
import logo from "../../assets/LOGOHorizontal.avif";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-center navbar bg-deep-blue h-[71px] gap-16">
      <div className="flex gap-12">
        <div className="w-24">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="object-contain" />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-gray-500 h-7 bg-[#172554] w-96"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-20">
        <button
          onClick={() => navigate("/perfil")}
          className={`flex group flex-col justify-center items-center w-9 h-11 text-base ${
            location.pathname === "/perfil" ? "text-blue-500" : ""
          }`}
        >
          <AiFillHome className="text-xl group-hover:text-orange-300" />
          <p
            className={` group-hover:text-orange-300 ${
              location.pathname === "/perfil" ? "text-blue-500" : ""
            }`}
          >
            Inicio
          </p>
        </button>
        <button
          onClick={() => navigate("/empleos")}
          className={`flex group flex-col justify-center items-center w-9 h-11 text-base ${
            location.pathname === "/empleos" ? "text-blue-500" : ""
          }`}
        >
          <IoMdBriefcase className="text-xl group-hover:text-orange-300" />
          <p
            className={`group-hover:text-orange-300 ${
              location.pathname === "/empleos" ? "text-blue-500" : ""
            }`}
          >
            Empleo
          </p>
        </button>
        <button
          onClick={() => navigate("/mensajes")}
          className={`flex flex-col justify-center group items-center w-9 h-11 text-base ${
            location.pathname === "/mensajes" ? "text-blue-500" : ""
          }`}
        >
          <MdMessage className="text-xl group-hover:text-orange-300" />
          <p
            className={`group-hover:text-orange-300 ${
              location.pathname === "/mensajes" ? "text-blue-500" : ""
            }`}
          >
            Mensajes
          </p>
        </button>
        <button
          className={`flex flex-col group justify-center items-center w-9 h-11 text-base ${
            location.pathname === "/favoritos" ? "text-blue-500" : ""
          }`}
        >
          <MdFavorite className="text-xl group-hover:text-orange-300" />
          <p
            className={`group-hover:text-orange-300 ${
              location.pathname === "/favoritos" ? "text-blue-500" : ""
            }`}
          >
            Favoritos
          </p>
        </button>
        <button
          className={`flex flex-col justify-center group items-center w-9 h-11 text-base ${
            location.pathname === "/alertas" ? "text-blue-500" : ""
          }`}
        >
          <AiTwotoneAlert className="text-xl group-hover:text-orange-300" />
          <p
            className={`group-hover:text-orange-300 ${
              location.pathname === "/alertas" ? "text-blue-500" : ""
            }`}
          >
            Alertas
          </p>
        </button>
        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col justify-center group items-center w-9 h-11 text-base ${
            location.pathname === "/profile" ? "text-blue-500" : ""
          }`}
        >
          <FaUserCircle className="text-xl group-hover:text-orange-300" />
          <p
            className={`group-hover:text-orange-300 ${
              location.pathname === "/profile" ? "text-blue-500" : ""
            }`}
          >
            Perfil
          </p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
