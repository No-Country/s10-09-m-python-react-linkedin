import React from "react";
import banner from "../../assets/bannerUser.png";
import UserImg from "../../assets/userImg.png";
// import beIcon from '../../assets/behaceIcon.png'
import { AiOutlineMail } from 'react-icons/ai';
import {FaPhoneAlt} from 'react-icons/fa'
import {AiFillBehanceSquare} from 'react-icons/ai'
const Profile: React.FC = () => {
    return (
        <div className="container p-4">
            <div className="w-300 h-300 sm:w-400 sm:h-400 md:w-500 md:h-500 lg:w-600 lg:h-600 xl:w-700 xl:h-700">
                <div className="bannerProfileUser">
                    <img src={banner} alt="banner image user " />
                </div>
                <div className="dataUser">
                    <div className="userImg">
                        <img src={UserImg} alt="" />
                    </div>
                    <div>
                        <h1>UserName</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            dapibus eros eu vehicula interdum.
                        </p>
                    </div>
                    <div className=" flex justify-around mt-3">
                        <div className=" rounded-xl bg-blue-500 p-1"> 300 CONEXIONES</div>
                        <div className="rounded-xl bg-transparent  border-solid border-2  px-10">EMPLEADO</div>
                    </div>

                    <div className="aboutTheUser  mt-3 p-3  bg-gray-400  rounded-md">
                        <h2>Sobre mí</h2>
                        <div className="UserInfo">
                        <p>Curabitur rutrum, diam id consequat consequat, nibh odio venenatis sapien, a porta arcu orci a diam. Quisque et est interdum, accumsan purus vitae, cursus nisl.
                        <span className="text-blue-500">VER MÁS</span></p>
                        </div>
                    </div>
                    <div className="aboutTheUser  mt-3 p-3   bg-gray-400  rounded-md">
                        <h2 className="border-b-2 border-gray-500">CONTACTO</h2>
                        
                        <div className="m-1">
                            <h2><AiOutlineMail/></h2>
                        </div>
                        <div className="m-1">
                            <h2><FaPhoneAlt/></h2>
                        </div>
                        <div  className="m-1">
                        <h2><AiFillBehanceSquare/></h2>
                        </div>
                      
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
