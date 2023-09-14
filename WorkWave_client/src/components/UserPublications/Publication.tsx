import PublicationContent from "./PublicationContent";
import moment from "moment-with-locales-es6";
import { useState } from "react";
import { deletePublication } from "../../services/Publications";
moment.locale("es");
type id = {
  id: number;
};
type PublicationProps = {
  text: string;
  img: string;
  footText: string;
  userData: userData;
  post_date: Date;
  id: id;

  // ruta a la que va a enviar el boton
};
interface userData {
  first_name: string;
  last_name: string;
}
const Publication = (props: PublicationProps) => {
  const {
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus augue eget scelerisque efficitur.",
    img = "/publicationImg.avif",
    footText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam porro, reiciendis corporis adipisci dolores ullam officiis.",
    userData,
    post_date,
    id,
  } = props;
  const [options, setOptions] = useState(false);
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
              <li className="text-sm">{moment(post_date).fromNow()}</li>
            </ul>
          </article>
          <div className="flex">
            <ul
              className={`flex justify-center w-16 cursor-pointer h-full ${
                options && "hidden"
              }`}
              onClick={() => {
                setOptions(!options);
                console.log(options);
              }}
            >
              <li className="text-3xl">.</li>
              <li className="text-3xl">.</li>
              <li className="text-3xl">.</li>
            </ul>
            {options && (
              <ul className=" p-2   bg-slate-800 border-2 rounded-lg flex flex-row-reverse justify-center items-center gap-3">
                <li
                  className="text-2xl hover:text-slate-300 "
                  onClick={() => setOptions(!options)}
                >
                  x
                </li>
                <div>
                  <li
                    className="flex gap-2 cursor-pointer hover:text-yellow-300"
                    onClick={() => {
                      console.log(id);
                    }}
                  >
                    <img src="pen.svg" alt="pen" className="w-6" />
                    <p>Editar</p>
                  </li>
                  <li
                    className="flex gap-2 cursor-pointer hover:text-red-300"
                    onClick={() => {
                      deletePublication(id);
                    }}
                  >
                    <img src="garbage.svg" alt="garbage" className="w-6" />
                    <p>Eliminar</p>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </section>{" "}
        {/* aca va la publicacion*/}
        <PublicationContent text={text} img={img} footText={footText} />
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
    </>
  );
};

export default Publication;
