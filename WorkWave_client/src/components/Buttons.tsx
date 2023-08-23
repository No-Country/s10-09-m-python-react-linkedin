type ButtonProps = {
  text: string; // texto que aparecera en el boton
  blue: boolean; // cambio de estilos del boton si es azul o transparente
  routing: string; // ruta a la que va a enviar el boton
};
function Buttons(props: ButtonProps) {
  const { text = "", routing = "/", blue = true } = props;
  return (
    <a href={routing}>
      <button
        className={` lg:w-1/3 sm:w-1/4 rounded-lg p-1 text-center border-2 ${
          blue ? "bg-[#61A9FD] text-[#000C2C]" : "bg-inherit text-[#D9D9D9]"
        } `}
      >
        {text}
      </button>
    </a>
  );
}

export default Buttons;
