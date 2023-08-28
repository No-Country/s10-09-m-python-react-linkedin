import { AiOutlineQuestionCircle } from "react-icons/ai";
import logo from "../../assets/LOGOHorizontal.png";
function Footer() {
  return (
    <footer className="footer p-10 pt-16 bg-deep-blue  justify-around text-white h-[215px]">
      <div className="flex gap-20">
        <div>
          <div className="w-24">
            <img src={logo} alt="logo" className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <a className="link link-hover">Sobre Nosotros</a>
          <a className="link link-hover">Empleos</a>
          <a className="link link-hover">Feed</a>
          <a className="link link-hover">Notificaciones</a>
        </div>
        <div className="flex flex-col gap-4">
          <a className="link link-hover">Términos y privacidad</a>
          <a className="link link-hover">Aplición Móvil</a>
        </div>
      </div>
      <div className="flex relative">
        <button className="btn flex justify-between  bg-[#628CFB] w-[166px]">
          AYUDA
          <AiOutlineQuestionCircle />
        </button>
        <div className="form-control w-80 ">
          <label className="label absolute top-[-40px]">
            <span className="label-text text-white">Lenguaje</span>
          </label>
          <div className="relative">
            <select className="select border-white max-w-xs bg-[#404258] w-[290px]">
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
