import Buttons from "../../components/Buttons";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import LogoHorizontal from "../../components/Logo/LogoHorizontal";
import LogoVertical from "../../components/Logo/LogoVertical";
function Landing() {
  return (
    <div className=" ">
      <div className="hidden lg:block">
        <LandingHeader />
      </div>
      <div className="flex flex-col-reverse  items-center md:items-start md:flex-row justify-center gap-8 pt-60 sm:pt-20  ">
        <div className="flex flex-col gap-4  ">
          <h1 className="text-center md:text-left sm:text-4xl lg:text-5xl  pb-10 hidden sm:block ">
            Encontra el futuro <br></br>que buscas
          </h1>
          <Buttons text={"Nueva Cuenta"} blue={true} routing={"/"} />
          <Buttons text={"Inicia Sesion"} blue={false} routing={"/login"} />
          <Buttons text={"Ingresa Con Google"} blue={false} routing={"/"} />
          <Buttons text={"Ingresa Con Apple"} blue={false} routing={"/"} />
        </div>
        <LogoHorizontal width={"300px"} widthsm={"500px"} viewBox={"360"} />
        <LogoVertical />
      </div>
    </div>
  );
}

export default Landing;
