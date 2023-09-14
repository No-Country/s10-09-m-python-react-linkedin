import { AiFillRocket, AiTwotoneAlert } from "react-icons/ai";
import { IoMdBriefcase } from "react-icons/io";
import { MdMessage, MdFavorite } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { SearchIcon } from "./SearchIncon.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import LogoHorizontal from "../Logo/LogoHorizontal";
import logo from "../../assets/logoWorkNavbar.svg";
import { Image, Input } from "@nextui-org/react";
import { Toaster, toast } from "sonner";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Toaster />
      <div className="flex justify-center navbar bg-deep-blue h-[71px] gap-16">
        <div className="flex gap-12">
          <div className="w-36">
            <Link to={"/perfil"}>
              <Image src={logo} width={500} height={500} alt="logo" />
            </Link>
          </div>
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-white dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Buscar"
            startContent={
              <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div className="flex items-center justify-center gap-20">
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
            onClick={() =>
              toast(
                "Característica en Espera. Próximamente en nueva actualización"
              )
            }
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
            onClick={() =>
              toast(
                "Característica en Espera. Próximamente en nueva actualización"
              )
            }
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
            onClick={() => navigate("/cursos")}
            className={`flex flex-col justify-center group items-center w-9 h-11 text-base ${
              location.pathname === "/cursos" ? "text-blue-500" : ""
            }`}
          >
            <AiFillRocket className="text-xl group-hover:text-orange-300" />
            <p
              className={`group-hover:text-orange-300 ${
                location.pathname === "/cursos" ? "text-blue-500" : ""
              }`}
            >
              Educacion
            </p>
          </button>

          <button
            onClick={() => navigate("/perfil")}
            className={`flex flex-col justify-center group items-center w-9 h-11 text-base ${
              location.pathname === "/perfil" ? "text-blue-500" : ""
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
    </>
  );
}

export default Navbar;
