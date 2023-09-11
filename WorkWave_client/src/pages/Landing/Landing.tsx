import Buttons from "../../components/Buttons";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import LogoVertical from "../../components/Logo/LogoVertical";
import landing from "../../assets/landing.png";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";
import logoWork from "../../assets/logo.svg";
const buttonContents = [
  "Ingeniería",
  "Finanzas",
  "Administración",
  "Atención al cliente",
  "Marketing",
  "Recursos Humanos",
  "Ventas",
  "Educación",
  "Compras",
  "Bienes y Raices",
  "Investigación",
  "Consultoría",
];
function Landing() {
  return (
    <section className=" mx-4 ss:mx-8 sm:mx-16 md:mx-40 sm:py-10">
      <div className="hidden sm:block">
        <LandingHeader />
      </div>
      <div className="flex flex-col-reverse  items-center sm:items-start sm:flex-row pt-40 sm:pt-28 sm:gap-10 md:gap-20 lg:gap-40  ">
        <div className="flex flex-col gap-4  ">
          <h1 className="text-center sm:text-left sm:text-3xl md:text-5xl  pb-10 hidden sm:block font-semibold ">
            Encontrá el futuro <br></br>que buscas
          </h1>
          <Buttons
            text={"Crear Nueva Cuenta"}
            width=""
            blue={true}
            routing={"/register"}
            height={"14"}
          />
          <Buttons
            text={"Iniciar Sesión"}
            width=""
            blue={false}
            routing={"/login"}
            height={"16"}
          />

          <Buttons
            text={"Ingresá Con Google"}
            width=""
            blue={false}
            routing={"/"}
            height={"16"}
          />
          <Buttons
            text={"Ingresá Con Facebook"}
            width=""
            blue={false}
            routing={"/"}
            height={"16"}
          />
        </div>
        <img src={logoWork} className="hidden sm:block self-center" />
        <LogoVertical />
      </div>
      <div className="flex flex-col  md:items-start gap-8 sm:gap-20 mt-28 sm:mt-40">
        <h1 className="text-lg sm:text-3xl md:text-5xl md:leading-[62px] font-semibold  ">
          Encontrá el empleo<br></br>que se adapte a vos
        </h1>

        <div className="flex flex-wrap gap-10">
          {buttonContents.map((content, index) => (
            <button
              key={index}
              className="btn btn-xs btn-outline  sm:btn-outline sm:btn-sm md:btn md:btn-outline text-white sm:text-white w-36 sm:w-44 md:w-50  lg:w-64 normal-case sm:normal-case rounded-full sm:rounded-full"
            >
              {content}
            </button>
          ))}
        </div>
        <div className="w-full flex flex-col ss:flex-row ss:justify-around items-center  gap-10 ">
          <div className=" w-40 ss:w-56 sm:w-96 ">
            <img src={landing2} className=" object-contain" />
          </div>
          <div className="flex flex-col items-center gap-y-5 sm:gap-y-12">
            <h1 className=" text-xl sm:text-4xl md:text-6xl sm:leading-[15px] md:leading-[75.6px]  ">
              Conectá
            </h1>
            <p className="text-[#C2BCE4] text-base sm:text-2xl md:text-5xl sm:leading-[45px] md:leading-[60.48px] text-center">
              con otros perfiles <br></br> y hace networking
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col ss:flex-row-reverse ss:justify-around items-center  gap-10 ">
          <div className=" w-40 ss:w-56 sm:w-96 ">
            <img src={landing1} className=" object-contain" />
          </div>
          <div className="flex flex-col items-center gap-y-5 sm:gap-y-12">
            <h1 className=" text-xl sm:text-4xl md:text-6xl sm:leading-[15px] md:leading-[75.6px]  ">
              Buscá
            </h1>
            <p className="text-[#C2BCE4] text-base sm:text-2xl md:text-5xl sm:leading-[45px] md:leading-[60.48px] text-center">
              el trabajo de <br></br> tus sueños
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col ss:flex-row ss:justify-around items-center  gap-10 ">
          <div className=" w-40 ss:w-56 sm:w-96 ">
            <img src={landing} className=" object-contain" />
          </div>
          <div className="flex flex-col items-center gap-y-5 sm:gap-y-12">
            <h1 className=" text-xl sm:text-4xl md:text-6xl sm:leading-[15px] md:leading-[75.6px]  ">
              Compartí
            </h1>
            <p className="text-[#C2BCE4] text-base sm:text-2xl md:text-5xl sm:leading-[45px] md:leading-[60.48px] text-center">
              todos tus logros <br></br> profesionales
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center items-center gap-20 mb-12 mt-36">
          <a className="link link-hover text-sm">Condiciones De Uso</a>
          <a className="link link-hover text-sm">Politica De privacidad</a>
          <a className="link link-hover text-sm">Politica De Cookies</a>
          <a className="link link-hover text-sm">Politica De Copyright</a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
