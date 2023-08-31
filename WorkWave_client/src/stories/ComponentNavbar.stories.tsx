import type { Meta, StoryObj } from "@storybook/react";
import logo from "../assets/LOGOHorizontal.png";

import { AiFillHome, AiTwotoneAlert } from "react-icons/ai";
import { IoMdBriefcase } from "react-icons/io";
import { MdMessage, MdFavorite } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-center  navbar bg-deep-blue h-[71px] gap-16 ">
      <div className="flex gap-12">
        {/* <a className="btn btn-ghost"></a> */}
        <div className="w-24">
          <img src={logo} alt="logo" className="object-contain" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-gray-500  h-7  bg-[#172554] w-96"
            />
          </div>
        </div>
      </div>
      <div className="flex justif-center items-center gap-20">
        <button
          onClick={() => {}}
          className="flex flex-col justify-center items-center w-9 h-11 text-base"
        >
          <AiFillHome className="text-xl" />
          <p>Inicio</p>
        </button>
        <button
          onClick={() => {}}
          className="flex flex-col justify-center items-center w-9 h-11 text-base "
        >
          <IoMdBriefcase className="text-xl" />
          <p>Empleo</p>
        </button>
        <button className="flex flex-col justify-center items-center w-9 h-11 text-base ">
          <MdMessage className="text-xl" />
          <p>Mensajes</p>
        </button>
        <button className="flex flex-col justify-center items-center w-9 h-11 text-base ">
          <MdFavorite className="text-xl" />
          <p>Favoritos</p>
        </button>
        <button className="flex flex-col justify-center items-center w-9 h-11 text-base ">
          <AiTwotoneAlert className="text-xl" />
          <p>Alertas</p>
        </button>
        <button
          onClick={() => {}}
          className="flex flex-col justify-center items-center w-9 h-11 text-base "
        >
          <FaUserCircle className="text-xl" />
        </button>
        <p>Perfil</p>
      </div>
    </div>
  );
}

const meta = {
  title: "Example/ComponentNavbar",
  component: Navbar,
  tags: ["root/Navbar"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
