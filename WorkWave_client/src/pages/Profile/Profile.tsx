import React from "react";
import banner from "../../assets/bannerUser.avif";
import UserImg from "../../assets/userImg.avif";

import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillBehanceSquare } from "react-icons/ai";
import NavbarUserProfile from "../../components/NavbarUserProfile/NavbarUserProfile";

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* BANNER DEL USUARIO */}
      <div className="w-full mx-auto bg-black md:flex md:w-2/3">
        <div className="w-full">
          <div className="bannerProfileContainer">
            <div className="bannerProfileUser">
              <img
                src={banner}
                alt="banner image user"
                className="w-full rounded-sm"
              />
            </div>
            <div className="bg-black dataUser">
              <div>
                <div className="ml-4">
                  <img
                    src={UserImg}
                    alt=""
                    className="p-2 mx-6 my-2 border border-white rounded-full userImg"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="ml-2">UserName</h1>
                <p className="ml-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dapibus eros eu vehicula interdum.
                </p>
              </div>
              <div className="flex justify-around mt-3">
                <div className="p-1 mb-2 bg-blue-500 rounded-xl">
                  300 CONEXIONES
                </div>
                <div className="px-10 mb-2 bg-transparent border-2 border-solid rounded-xl">
                  EMPLEADO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 p-2 md:flex-row">
        {/* INFORMACIÓN DEL USUARIO */}
        <div className="flex flex-col mt-3 aboutTheUserData md:w-1/2 sm:w-full">
          <div className="p-3 mb-3 bg-black rounded-md">
            <h2 className="text-xl">Sobre mí</h2>
            <div className="UserInfo">
              <p className="text-sm md:text-base">
                Curabitur rutrum, diam id consequat consequat, nibh odio
                venenatis sapien, a porta arcu orci a diam. Quisque et est
                interdum, accumsan purus vitae, cursus nisl.
                <span className="text-blue-500">VER MÁS</span>
              </p>
            </div>
          </div>
          <div className="p-3 bg-black rounded-md aboutTheUserContact">
            <h2 className="text-xl border-b-2 border-gray-500">CONTACTO</h2>
            <div className="flex gap-1 m-1">
              <h2>
                <AiOutlineMail className="mt-1 text-xl" />
              </h2>
              <p>usuario1@gmail.com</p>
            </div>
            <div className="flex gap-1 m-1">
              <h2>
                <FaPhoneAlt className="flex gap-1 mt-1" />
              </h2>
              <p>+549114777777</p>
            </div>
            <div className="flex gap-1 m-1">
              <h2>
                <AiFillBehanceSquare className="mt-1 text-xl" />
              </h2>
              <p>Usuario 1</p>
            </div>
          </div>
        </div>
        {/* PROYECTOS Y EXPERIENCIA DEL USUARIO */}
        <div className="p-2 mt-3 UserProjectsContainer sm:w-full md:w-1/2">
          <NavbarUserProfile />
        </div>
      </div>
    </div>
  );
};

export default Profile;
