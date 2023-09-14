type PublicationProps = {
  text: string;
  img: string;
  footText: string;

  // ruta a la que va a enviar el boton
};
function Publication(props: PublicationProps) {
  const { text = "", img = "", footText = "" } = props;
  return (
    <div className="pt-4 flex flex-col gap-4 pb-4">
      <p>{text}</p>
      <div className="bg-[#161722] rounded-lg flex flex-col">
        <img src={img} alt="publicationImg" className="rounded-xl" />
        <p className="px-4 py-2">{footText}</p>
      </div>
    </div>
  );
}

export default Publication;
