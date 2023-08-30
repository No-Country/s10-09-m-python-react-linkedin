import { Link } from "react-router-dom";
import logoGoogle from "../assets/Google.svg";
import logoFacebook from "../assets/Facebook.svg";
type ButtonProps = {
  text: string; // texto que aparecera en el boton
  blue: boolean; // cambio de estilos del boton si es azul o transparente
  routing: string;
  width: string;
  height: string;
  // ruta a la que va a enviar el boton
};
function Buttons(props: ButtonProps) {
  const { text = "", routing = "/", blue = true, width = "", height } = props;

  return (
    <Link to={routing}>
      <button

        className={`h-11 ${width} text-[#D9D9D9] w-[300px] sm:w-[450px]  rounded-full p-1 text-center  ${
          blue ? "bg-[#4318FF] text-[#000C2C]" : "bg-inherit  border-2  "

        } `}
      >
        {text ? (
          <div className="flex justify-center items-center">
            {/* Renderiza el logotipo aquí */}
            {text.includes("Google") && (
              <img src={logoGoogle} alt="Logo" className="mr-7" />
            )}
            {text.includes("Facebook") && (
              <img src={logoFacebook} alt="Logo" className="mr-2" />
            )}

            {/* Renderiza el texto */}
            {text}
          </div>
        ) : (
          // Renderiza solo el texto
          text
        )}
      </button>
    </Link>
  );
}

export default Buttons;
