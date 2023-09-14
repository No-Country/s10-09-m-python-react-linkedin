import React, { useState } from "react";
import UserWorkExperience from "../../components/userWorkExperience/UserWorkExperience";
import UserEducation from "../userEducation/userEducation";
import UserPublications from "../UserPublications/UserPublications";
const NavbarUserProfile: React.FC = () => {
  const [seccionActual, setSeccionActual] = useState<string>("publications");
  const cambiarSeccion = (seccion: string) => {
    setSeccionActual(seccion);
  };
  return (
    <div>
      <nav className="flex gap-1  mb-4">
        <button
          onClick={() => cambiarSeccion("experience")}
          className={`transition ease-out delay-75 px-4 py-3 origin-bottom text-sm  w-full hover:scale-y-110  ${
            seccionActual === "experience"
              ? "bg-[#4318FF] text-white p-2 scale-y-110  "
              : " text-white bg-[#000] "
          }`}
        >
          EXPERIENCIA
        </button>
        <button
          onClick={() => cambiarSeccion("education")}
          className={`transition ease-out delay-75 px-4 py-2 origin-bottom hover:scale-y-110  text-sm w-full   ${
            seccionActual === "education"
              ? "bg-[#4318FF] text-white p-2 scale-y-110  "
              : " text-white bg-[#000] "
          }`}
        >
          EDUCACIÓN
        </button>
        <button
          onClick={() => cambiarSeccion("publications")}
          className={`transition ease-out delay-75 px-4 py-2 origin-bottom hover:scale-y-110  text-sm w-full   ${
            seccionActual === "publications"
              ? "bg-[#4318FF]  text-white scale-y-110   "
              : " text-white bg-[#000] "
          }`}
        >
          PUBLICACIONES
        </button>
      </nav>
      <div className="contenido">
        {seccionActual === "experience" ? (
          <UserWorkExperience />
        ) : (
          (seccionActual === "education" && <UserEducation />) || (
            <UserPublications />
          )
        )}
      </div>
    </div>
  );
};

export default NavbarUserProfile;
