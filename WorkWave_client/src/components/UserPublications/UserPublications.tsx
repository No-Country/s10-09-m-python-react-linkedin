import Publication from "./Publication";
import NewPublication from "./NewPublication";
type PublicationProps = {
  text: string;
  img: string;
  footText: string;
  userData: userData;

  // ruta a la que va a enviar el boton
};
interface userData {
  first_name: string;
  last_name: string;
}
const userPublications = (props: PublicationProps) => {
  const {
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus augue eget scelerisque efficitur.",
    img = "/publicationImg.avif",
    footText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro, reiciendis corporis adipisci dolores ullam officiis.",
    userData,
  } = props;
  return (
    <>
      <div className="bg-[#000] dark border-2 border-[#22232B] rounded-xl px-6 py-4">
        <section className="flex justify-between items-start">
          {" "}
          {/*aca va la info del perfil */}
          <article className="flex items-center gap-4 pt-2">
            <img
              src="https://images.pexels.com/photos/17126623/pexels-photo-17126623/free-photo-of-artischocke-wilde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="userImg"
              className="w-24 h-24 rounded-full object-cover bg-[#dfdfdf]"
            />{" "}
            <ul>
              <li className="text-xl">{`${userData.first_name} ${userData.last_name}`}</li>
              <li className="text-sm">UX/UI</li>
              <li className="text-sm">1 semanas</li>
            </ul>
          </article>
          <ul className="flex justify-center w-16 cursor-pointer h-full ">
            <li className="text-3xl">.</li>
            <li className="text-3xl">.</li>
            <li className="text-3xl">.</li>
          </ul>
        </section>{" "}
        {/* aca va la publicacion*/}
        <Publication text={text} img={img} footText={footText} />
        <section>
          {" "}
          {/* likes comentarios */}
          <article className="flex justify-between border-b-2 pb-2 border-[#ADABAA80]">
            <ul className="flex gap-4">
              <li className="flex">
                <img src="/iconsSocial.svg" alt="like" />
              </li>
              <li>1025</li>
            </ul>
            <ul className="flex gap-2 items-center justify-center">
              <li>753 comentarios</li>
              <li className="align-text-top bg-[#fff] h-2 rounded-full text-sm">
                `
              </li>
              <li>234 compartido</li>
            </ul>
          </article>
          <article>
            <ul className="flex justify-around pt-4">
              <li className="flex flex-col items-center justify-center">
                <img src="/like.svg" alt="" />
                <p>Reaccionar</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <img src="/comment.svg" alt="" />
                <p>Comentar</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <img src="/share.svg" alt="" />
                <p>Compartir</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <img src="/send.svg" alt="" />
                <p>Enviar</p>
              </li>
            </ul>
          </article>
        </section>
      </div>
      <NewPublication />
    </>
  );
};

export default userPublications;
