import React from "react";
import banner from "../../assets/bannerUser.png";
import UserImg from "../../assets/userImg.png";

import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillBehanceSquare } from "react-icons/ai";
import NavbarUserProfile from "../../components/NavbarUserProfile/NavbarUserProfile";
const Profile: React.FC = () => {
  return (
    <div className="container  mx-auto">
      {/* ACA EMPIEZA EL BANNER DEL USUARIO */}

      <div className="flex flex-col md:flex-row w-[1116.81px] h-[473px] mx-auto bg-black">
        <div className="w-full">
          <div className="bannerProfileContainer ">
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
                    className="userImg border border-white rounded-full p-2 my-2 mx-6"
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
                <div className="rounded-xl bg-blue-500 p-1">300 CONEXIONES</div>
                <div className="rounded-xl bg-transparent border-solid border-2 px-10">
                  EMPLEADO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 p-2 justify-center">
        {/* ACA EMPIEZA LA INFORMACIO DEL USUARIO */}
        {/* <div className=" aboutTheUserContainer   "> */}
        <div className="flex flex-col aboutTheUserData md:w-[40%] sm:w-full">
          <div className=" mt-3 p-3 bg-black rounded-md mb-3">
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
          <div className="aboutTheUserContact  p-3 bg-black rounded-md">
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
        {/* </div> */}
        {/* PROYECTOS Y EXPERIENCIA DEL USUARIO */}

        <div className="UserProjectsContainer flex flex-col sm:w-[52%]  mt-3 p-2  ">
          <NavbarUserProfile />
          {/* <UserProjects/> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
