import React, { useState } from "react";
import exampleProject1 from "../../assets/exProject1.png";
import exampleProject2 from "../../assets/exProject2.png";
import exampleProject3 from "../../assets/exProject3.png";

const UserWorkExperience: React.FC = () => {
  const [projects] = useState([
    {
      projectName: "Lorem ipsum dolor sit",
      img: exampleProject1,
      descrip: "UX/UI, 02.09.2022",
    },
    {
      projectName: "Lorem ipsum dolor sit",
      img: exampleProject2,
      descrip: "UX/UI, 02.09.2022",
    },
    {
      projectName: "Lorem ipsum dolor sit",
      img: exampleProject3,
      descrip: "UX/UI, 02.09.2022",
    },
  ]);
  
  return (
    <div className="container">
      <div className="bg-black rounded-md">
        <div className="UserProjects mb-4">
          <h2 className="ml-1">
            Proyectos <span className="text-gray-500"> 3 of 10 </span>
          </h2>
        </div>
        <div className="projects flex flex-wrap justify-center items-center gap-2">
          {projects.map((project, index) => (
            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div>
                <img src={project.img} alt="" className="max-w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects rounded-md my-2 bg-black mb-2 gap-2 p-2 ">
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#B9A2FF] m-2 w-[125px] h-[50px] rounded-full"></div>
          <div className="md:ml-2">
            <h2 className="text-xl">Voluntariado</h2>
            <p>Freelance UX/UI designer</p>
            <p>Lorem ipsum Lorem ipsum </p>
            <p>
              Jun 2022 —{" "}
              <span className="text-[#0A66C2]">Present1 yrs 02 mos</span>
            </p>
            <p className="border-b-1 border-r-0 border-l-0 border-t-0 border-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus eros eu vehicula interdum. Cras nec ultricies massa.
              Curabitur rutrum, diam id consequat consequat
            </p>
          </div>
        </div>

        <div className="addExperience mt-2 md:mt-0 w-full md:w-[188px] h-[36px] inline-block p-2">
          <button className="text-[#4318FF] text-lg">
            <span style={{ fontSize: "25px" }}>+ </span> Añadir Experiencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserWorkExperience;