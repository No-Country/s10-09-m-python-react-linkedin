type ButtonProps = {
  text: string; // texto que aparecera en el boton
  blue: boolean; // cambio de estilos del boton si es azul o transparente
  routing: string;
  // ruta a la que va a enviar el boton
};
function Buttons(props: ButtonProps) {
  const { text = "", routing = "/", blue = true } = props;
  return (
    <a href={routing}>
      <button
        className={`h-11 w-[300px] sm:w-[450px]   rounded-lg p-1 text-center border-2  ${
          blue ? "bg-[#61A9FD] text-[#000C2C]" : "bg-inherit text-[#D9D9D9]"
        } `}
      >
        {text}
      </button>
    </a>
  );
}

export default Buttons;
