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
      <nav className="flex justify-around gap-2 mb-4">
        <button
          onClick={() => cambiarSeccion("experience")}
          className={`px-4 py-2 text-sm rounded-md w-full ${
            seccionActual === "experience"
              ? "bg-[#4318FF] text-white p-2 rounded-md "
              : " text-white bg-[#000] "
          }`}
        >
          EXPERIENCIA
        </button>
        <button
          onClick={() => cambiarSeccion("education")}
          className={`px-4 py-2  text-sm w-full  rounded-md ${
            seccionActual === "education"
              ? "bg-[#4318FF] text-white p-2 rounded-md "
              : " text-white bg-[#000] "
          }`}
        >
          EDUCACIÓN
        </button>
        <button
          onClick={() => cambiarSeccion("publications")}
          className={`px-4 py-2  text-sm w-full rounded-md ${
            seccionActual === "publications"
              ? "bg-[#4318FF]  text-white rounded-md "
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
            <UserPublications text="" img="" footText="" />
          )
        )}
      </div>
    </div>
  );
};

export default NavbarUserProfile;
