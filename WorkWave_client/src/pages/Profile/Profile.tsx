import React from "react";
import banner from "../../assets/bannerUser.avif";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillBehanceSquare } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import NavbarUserProfile from "../../components/NavbarUserProfile/NavbarUserProfile";
import ProfileImg from "./ProfileImg";

const Profile: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("user") ?? "{}");
  console.log(userData);
  return (
    <div className="container mx-auto">
      {/* BANNER DEL USUARIO */}
      <div className="w-full mx-auto bg-black md:flex ">
        <div className="w-full ">
          <div className="bannerProfileContainer">
            <div className="bannerProfileUser">
              <img
                src={banner}
                alt="banner image user"
                className="w-full rounded-sm"
              />
            </div>
            <div className="bg-black dataUser flex  flex-row items-center">
              <ProfileImg />
              <div className="flex items-center justify-between w-full gap-4">
                <div className="flex flex-col pt-4 ">
                  <h1 className="text-4xl">{`${userData.first_name} ${userData.last_name}`}</h1>
                  <p className="pr-24">soy una alcachofa jaja salu2</p>
                  <div className="flex justify-start pl-4 py-2  my-2 bg-black ">
                    <p className="text-[#3311DB]"> 300 Conexiones</p>
                  </div>
                </div>
                <div className="flex flex-col pt-16 px-6 w-1/4">
                  <div className="p-2  flex  justify-center items-center gap-2 mb-2 bg-[#68769F] rounded-xl ">
                    <BsSend />
                    <button> Enviar mensaje</button>
                  </div>
                  <div className="px-10 py-2 flex  justify-center items-center gap-2 mb-2 bg-transparent border-2 border-solid rounded-xl">
                    <button> Conectar +</button>
                  </div>
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
        <div className="p-2 mt-3 UserProjectsContainer sm:w-full md:w-4/6">
          <NavbarUserProfile />
        </div>
      </div>
    </div>
  );
};

export default Profile;
