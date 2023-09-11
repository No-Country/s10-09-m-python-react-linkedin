import { Link } from "react-router-dom";
import logoGoogle from "../assets/Google.svg";
import logoFacebook from "../assets/Facebook.svg";
type ButtonProps = {
  text: string; // texto que aparecera en el boton
  blue?: boolean; // cambio de estilos del boton si es azul o transparente
  routing?: string;
  width?: string;
  height?: string;
  // ruta a la que va a enviar el boton
};
function Buttons(props: ButtonProps) {
  const { text = "", routing = "/", blue = true, width = "" } = props;

  return (
    <Link to={routing}>
      <button
        className={`h-16 ${width} text-[#D9D9D9] w-[300px] sm:w-[350px] md:w-[450px] rounded-full p-1 text-center border-2  ${
          blue ? "bg-[#4F46E5] text-[#000C2C]" : "bg-inherit "
        } `}
      >
        {text ? (
          <div className="flex justify-center items-center">
            {/* Renderiza el logotipo aquí */}
            {text.includes("Google") && (
              <img src={logoGoogle} alt="Logo" className="mr-2" />
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
