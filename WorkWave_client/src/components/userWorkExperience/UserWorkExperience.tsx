
import React, { useState, useEffect } from "react";
import exampleProject1 from "../../assets/exProject1.avif";
import exampleProject2 from "../../assets/exProject2.avif";
import exampleProject3 from "../../assets/exProject3.avif";
import FormAddExperience from "../FormAddExperience/FormAddExperience";
import axios from "axios";

interface ExperienceData {
  id: number
  job_position: string;
  company_name: string;
  description: string;
  sector: string;
  start_date: string;
  end_date: string;
}
//million-ignore
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
  const [showMeForm, setShowMeForm] = useState(false);
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);

  useEffect(() => {
    // Realizar la solicitud GET cuando el componente se monta
    axios
      .get<ExperienceData[]>("https://work-wave.onrender.com/api/experience")
      .then((response) => {
     
        setExperiences(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);
console.log(experiences)
  return (
    <div className="container">
      <div className="bg-black rounded-md">
        <div className="UserProjects mb-4">
          <h2 className="ml-1">
            Proyectos <span className="text-gray-500"> 3 of 10 </span>
          </h2>
        </div>
        <div className="projects flex flex-wrap justify-around items-center gap-2">
          {projects.map((project, index) => (
            <div key={index} className=" md:w-1/3 lg:w-1/4">
              <div>
                <img src={project.img} alt="" className="max-w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="projects rounded-md my-2 bg-black mb-2 gap-2 p-2 ">
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#B9A2FF] m-2  sm: w-[50px] md:w-[50px] h-[50px] rounded-full"></div>

          <div className="">
            <h2 className="ml-1">Experiencias</h2>
            {experiences.map((experience, index) => (
              <div key={index} className="">
                <div>
                  <div className="md:ml-2 ">
                    <h2 className="text-xl">{experience.job_position}</h2>
                    <p>{experience.sector}</p>
                    <p>{experience.company_name} </p>
                    <p>
                      {experience.start_date} —{" "}
                      <span className="text-[#0A66C2]">
                        {" "}
                        {experience.end_date}{" "}
                      </span>
                    </p>
                    <p className="border-b-1 border-r-0 border-l-0 border-t-0 border-gray-700">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="addExperience mt-2 md:mt-0 w-full md:w-[188px] h-[36px] inline p-2">
          <button
            className="text-[#4318FF] text-lg"
            onClick={() => setShowMeForm((prevState) => !prevState)}
          >
            <span style={{ fontSize: "25px" }}>+ </span> Añadir Experiencia
          </button>
        </div>
      </div>
      <FormAddExperience
      showMeForm={showMeForm}
      setShowMeForm={setShowMeForm}

    />
    </div>
  );
};

export default UserWorkExperience;
