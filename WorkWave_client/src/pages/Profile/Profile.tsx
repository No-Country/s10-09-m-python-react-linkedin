import React, { useState } from "react";
import banner from "../../assets/bannerUser.png";
import UserImg from "../../assets/userImg.png";
import exampleProject1 from "../../assets/exProject1.png";
import exampleProject2 from "../../assets/exProject2.png";
import exampleProject3 from "../../assets/exProject3.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillBehanceSquare } from "react-icons/ai";

const Profile: React.FC = () => {
  const [projects, setProjects] = useState([
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
  console.log(setProjects);
  return (
    <div className="container m-auto ">
      {/* ACA EMPIEZA EL BANNER DEL USUARIO */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full">
          <div className="bannerProfileContainer">
            <div className="bannerProfileUser">
              <img
                src={banner}
                alt="banner image user"
                className="w-full rounded-sm"
              />
            </div>
            <div className="dataUser">
              <div>
                <div>
                  <img
                    src={UserImg}
                    alt=""
                    className="userImg border border-white rounded-full p-2"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h1>UserName</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus eros eu vehicula interdum.
                </p>
              </div>
              <div className="flex justify-around mt-3">
                <div className="rounded-xl bg-blue-500 p-1">300 CONEXIONES</div>
                <div className="rounded-xl bg-transparent border-solid border-2 px-10">
                  EMPLEADO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2  ">
        {/* ACA EMPIEZA LA INFORMACIO DEL USUARIO */}
        <div className="md:w-[30%] sm:w-full md:pl-4">
          <div className="aboutTheUserContainer  flex flex-col">
            <div className="aboutTheUserData mt-3 p-3 bg-gray-400 rounded-md mb-3">
              <h2>Sobre mí</h2>
              <div className="UserInfo">
                <p>
                  Curabitur rutrum, diam id consequat consequat, nibh odio
                  venenatis sapien, a porta arcu orci a diam. Quisque et est
                  interdum, accumsan purus vitae, cursus nisl.
                  <span className="text-blue-500">VER MÁS</span>
                </p>
              </div>
            </div>
            <div className="aboutTheUserContact  p-3 bg-gray-400 rounded-md">
              <h2 className="border-b-2 border-gray-500">CONTACTO</h2>
              <div className="m-1 flex gap-1">
                <h2>
                  <AiOutlineMail className="mt-1 text-xl" />
                </h2>
                <p>usuario1@gmail.com</p>
              </div>
              <div className="m-1 flex gap-1">
                <h2>
                  <FaPhoneAlt className="mt-1 flex gap-1" />{" "}
                </h2>
                <p>+549114777777</p>
              </div>
              <div className="m-1 flex gap-1">
                <h2>
                  <AiFillBehanceSquare className="mt-1 text-xl" />{" "}
                </h2>
                <p>Usuario 1</p>
              </div>
            </div>
          </div>
        </div>
        {/* ACA EMPIEZA LA EXPERIENCIA DEL USUARIO */}
        <div className="UserProjects  md:w-[50%] sm:w-full bg-gray-400 mt-3 rounded-md ">
          <h2>
            Proyectos <span className="text-gray-500"> 3 of 10 </span>
          </h2>
          <div className="projects flex justify-center items-center gap-2">
            {projects.map((project, index) => (
              <div key={index}>
                <div>
                  <img src={project.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
