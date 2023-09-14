import { useState } from "react";
import Buttons from "../Buttons";
import { Toaster, toast } from "sonner";

interface imgsFocus {
  id: number;
  img: string;
  focus: boolean;
}

function Step3() {
  const [dataImgs, setDataImgs] = useState([
    {
      id: 0,
      img: "/nike.avif",
      focus: false,
    },
    {
      id: 1,
      img: "/netflix.avif",
      focus: false,
    },
    {
      id: 2,
      img: "/filmora.avif",
      focus: false,
    },
    {
      id: 3,
      img: "/bata.avif",
      focus: false,
    },
    {
      id: 4,
      img: "/university.avif",
      focus: false,
    },
    {
      id: 5,
      img: "/canva.avif",
      focus: false,
    },
  ]);

  const handleClick = (id: number): void => {
    const updatedDataImgs: imgsFocus[] = dataImgs.map((item) =>
      item.id === id ? { ...item, focus: !item.focus } : item
    );
    setDataImgs(updatedDataImgs);
    console.log({ dataImgs });
  };

  return (
    <>
      <Toaster />
      <div>
        <div className="flex flex-col justify-center items-center mt-16 mb-8 px-8">
          <h2 className="text-2xl mb-4 text-white w-full">
            ELIGE MARCAS PARA CONECTAR
          </h2>
        </div>
        <ul className="flex flex-row md:flex-col flex-wrap gap-4 w-full justify-center items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {dataImgs.slice(0, 3).map((item) => (
              <li
                key={item.id}
                className={`bg-white p-4 rounded-xl ${
                  item.focus ? "bg-blue-400" : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                <img src={item.img} alt="" className={`h-20 hover:scale-90 `} />
              </li>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {dataImgs.slice(3).map((item) => (
              <li
                key={item.id}
                className={`bg-white p-4 rounded-xl ${
                  item.focus ? "bg-blue-400" : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                <img src={item.img} alt="" className={`h-20 hover:scale-90 `} />
              </li>
            ))}
          </div>
        </ul>
        <div
          onClick={() =>
            toast(
              "Característica en Espera. Próximamente en nueva actualización"
            )
          }
          className="flex flex-row-reverse items-center justify-center gap-4"
        >
          <p className="text-center mt-4 btn btn-xs capitalize">Ver más </p>
        </div>
        <div className="flex flex-col gap-2 mt-8 w-full px-4">
          <Buttons
            text="Agregar"
            height=""
            width="!w-full"
            blue={true}
            routing="/registro/step4"
          />
          <Buttons
            text="Omitir"
            height=""
            width="!w-full"
            routing="/registro/step4"
            blue={false}
          />
        </div>
      </div>
    </>
  );
}

export default Step3;
