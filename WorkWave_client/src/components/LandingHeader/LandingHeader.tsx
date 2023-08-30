import Buttons from "../Buttons";
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
        <Buttons
          text="Nueva Cuenta"
          blue={true}
          width="!w-40"
          routing="/register"
          height={"11"}
        />
        <Buttons
          text="Iniciar sesion"
          width="!w-40"
          routing="/login"
          blue={false}
          height={"11"}
        />
      </div>
    </div>
  );
}

export default LandingHeader;
