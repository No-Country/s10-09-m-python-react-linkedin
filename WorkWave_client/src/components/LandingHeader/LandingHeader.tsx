import { Link, useNavigate } from "react-router-dom";
import logoheader from "../../assets/logoheader.svg";
import logoheader1 from "../../assets/logoheader1.svg";
import logoheader2 from "../../assets/logoheader2.svg";

function LandingHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end items-center ">
      <div className="flex ">
        <div className=" pl-8 border-e-2 hover:border-black transform hover:scale-90 transition duration-300">
          <Link to={"/personas"}>
            <img src={logoheader2} className="w-24 h-24" alt="Logo 2" />
          </Link>
        </div>
        <div className=" pl-8 border-e-2 hover:border-black transform hover:scale-90 transition duration-300 ">
          <Link to={"/cursos"}>
            <img src={logoheader1} className="w-24 h-24" alt="Logo 1" />
          </Link>
        </div>
        <div className="pl-8 border-e-2 transform hover:border-black hover:scale-90 transition duration-300">
          <Link to={"/empleos"}>
            <img src={logoheader} className="w-24 h-24 hover:" alt="Logo" />
          </Link>
        </div>
      </div>
      <div className=" flex  gap-6 pl-8 ">
        <button
          onClick={() => navigate("/registro")}
          className={`h-11  text-[#D9D9D9] w-40 hover:bg-black duration-500 rounded-full p-1 text-center border-2 bg-[#4F46E5] `}
        >
          Nueva Cuenta
        </button>
        <button
          onClick={() => navigate("/login")}
          className={`h-11  text-[#D9D9D9] w-40 hover:bg-celeste-claro hover:text-black duration-500 rounded-full p-1 text-center border-2 `}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default LandingHeader;
