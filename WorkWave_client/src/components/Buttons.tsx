import { Link } from "react-router-dom";
type ButtonProps = {
  text: string; // texto que aparecera en el boton
  blue: boolean; // cambio de estilos del boton si es azul o transparente
  routing: string;
  width: string;
  // ruta a la que va a enviar el boton
};
function Buttons(props: ButtonProps) {
  const { text = "", routing = "/", blue = true, width = "" } = props;
  return (
    <Link to={routing}>
      <button
        className={`h-11 ${width} text-[#D9D9D9] w-[300px] sm:w-[450px]   rounded-lg p-1 text-center border-2  ${
          blue ? "bg-[#4F46E5] text-[#000C2C]" : "bg-inherit "
        } `}
      >
        {text}
      </button>
    </Link>
  );
}

export default Buttons;
