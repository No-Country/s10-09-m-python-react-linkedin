import React, { useContext, useEffect, useState } from "react";
import banner from "../../assets/bannerUser.avif";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillBehanceSquare } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import NavbarUserProfile from "../../components/NavbarUserProfile/NavbarUserProfile";

import { Usuario } from "../../models/user";
import axios from "axios";
import { TokenContext } from "../../context/TokenContext";

import ProfileImg from "./ProfileImg";

const API = process.env.REACT_APP_API_BACK;
const Profile: React.FC = () => {
  const { user } = useContext(TokenContext);
  // console.log(user);

  const [profile, setProfile] = useState<Usuario | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        if (user) {
          // const res = await axios.get(`${API}/users?userId=${user.id}`);
          const res = await axios.get(
            `https://workwave-django.onrender.com/user/detail/${user.id}`,
            {
              headers: {
                Authorization: "Token 23b5ee1c7976fd17e3075f8bacfe6a7ab5431d47",
              },
            }
          );
          setProfile(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  console.log(profile);

  return (
    <div className="container mx-auto">
      {/* BANNER DEL USUARIO */}
      <div className="w-full mx-auto bg-black md:flex ">
        <div className="w-full ">
          <div className="bannerProfileContainer">
            <div className="bannerProfileUser">
              <img
                src={banner}
                // src="https://media.istockphoto.com/id/1414981406/es/foto/flujo-de-part%C3%ADculas-fondo-p%C3%BArpura-con-muchas-part%C3%ADculas-brillantes-antecedentes-en-tecnolog%C3%ADa.jpg?s=612x612&w=0&k=20&c=hTBDHCMxRFV49h9tC4QrzotXpkfn9v_GETrZSL-KULY="
                alt="banner image user"
                className="w-full h-64 rounded-sm"
              />
            </div>
            <div className="flex flex-col items-center bg-black dataUser">
              <div className="absolute z-50 w-40 left-[6vw]  sm:top-[24vh] ">
                <img
                  // src="/frontimg.svg"
                  src={profile?.avatar_url}
                  alt="userImg"
                  className="object-cover w-full p-2 my-4 rounded-full"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col pt-4 pl-64 ">
                  <h1 className="text-4xl">
                    {profile?.first_name} {profile?.last_name}
                  </h1>
                  <p className="pr-24">{profile?.headline}</p>
                  <div className="flex justify-start py-2 pl-4 my-2 bg-black ">
                    <p className="text-[#3311DB]"> 300 Conexiones</p>
                  </div>
                </div>
                <div className="flex flex-col w-1/4 px-6 pt-16">
                  <div className="p-2  flex  justify-center items-center gap-2 mb-2 bg-[#68769F] rounded-xl ">
                    <BsSend />
                    <button> Enviar mensaje</button>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-10 py-2 mb-2 bg-transparent border-2 border-solid rounded-xl">
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
                {profile?.about}
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
              <p>{profile?.email}</p>
            </div>
            <div className="flex gap-1 m-1">
              <h2>
                <FaPhoneAlt className="flex gap-1 mt-1" />
              </h2>
              <p>{`+54${profile?.phone_number}`}</p>
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
