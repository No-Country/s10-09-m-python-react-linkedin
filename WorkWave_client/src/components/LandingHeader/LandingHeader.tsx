import logoheader from "../../assets/logoheader.svg";
import logoheader1 from "../../assets/logoheader1.svg";
import logoheader2 from "../../assets/logoheader2.svg";
function LandingHeader() {
  return (
    <div className="flex justify-end items-center ">
      <div className="flex ">
        <div className=" pl-8 border-e-2">
          <img src={logoheader2} />
        </div>
        <div className=" pl-8 border-e-2 ">
          <img src={logoheader1} />
        </div>
        <div className="pl-8 border-e-2 ">
          <img src={logoheader} />
        </div>
      </div>
      <div className=" flex  gap-6 pl-8 ">
        <button
          className={`h-11  text-[#D9D9D9] w-40  rounded-full p-1 text-center border-2 bg-[#4F46E5] `}
        >
          Nueva Cuenta
        </button>
        <button
          className={`h-11  text-[#D9D9D9] w-40  rounded-full p-1 text-center border-2 `}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default LandingHeader;
