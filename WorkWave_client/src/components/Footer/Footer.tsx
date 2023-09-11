import { AiOutlineQuestionCircle } from "react-icons/ai";
import logo from "../../assets/LOGOHorizontal.png";
function Footer() {
  return (
    <footer className="footer gap-20 p-5 md:p-10 pt-16 bg-deep-blue flex flex-col md:flex-row  md:justify-around text-white h-auto lg:h-[215px]">
      <div className="flex w-full justify-around gap-6 ss:gap-20">
        <div>
          <div className="w-24">
            <img src={logo} alt="logo" className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col gap-2 ss:gap-4">
          <a className="link link-hover">Sobre Nosotros</a>
          <a className="link link-hover">Empleos</a>
          <a className="link link-hover">Feed</a>
          <a className="link link-hover">Notificaciones</a>
        </div>
        <div className="flex flex-col gap-2 ss:gap-4">
          <a className="link link-hover">Términos y privacidad</a>
          <a className="link link-hover">Aplición Móvil</a>
        </div>
      </div>
      <div className="flex relative w-full justify-center sx:gap-16 sm:gap-5">
        <button className="btn flex justify-between  bg-[#628CFB] w-28 sm:w-[166px]">
          AYUDA
          <AiOutlineQuestionCircle />
        </button>
        <div className="form-control w-36 sm:w-80 ">
          <label className="label absolute top-[-40px]">
            <span className="label-text text-white">Lenguaje</span>
          </label>
          <div className="relative">
            <select className="select border-white max-w-xs bg-[#404258] w-36 sm:w-[290px]">
              <option disabled selected>
                ESPAÑOL
              </option>
              <option>Java</option>
              <option>Go</option>
              <option>C</option>
              <option>C#</option>
              <option>C++</option>
              <option>Rust</option>
              <option>JavaScript</option>
              <option>Python</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
