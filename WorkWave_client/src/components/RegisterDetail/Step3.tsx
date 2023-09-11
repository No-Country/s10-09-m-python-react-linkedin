import Buttons from "../Buttons";
function Step3() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 mb-8 px-8">
        <h2 className="text-2xl mb-4 text-white w-full">
          ELIGE MARCAS PARA CONECTAR
        </h2>
      </div>
      <ul className="flex flex-row md:flex-col flex-wrap gap-4 w-full justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center ">
          <li className="bg-white p-4 rounded-xl ">
            <img src="/nike.png" alt="" className="h-20 hover:scale-90" />
          </li>
          <li className="bg-white p-4 rounded-xl">
            <img src="/netflix.png" alt="" className="h-20 hover:scale-90" />
          </li>
          <li className="bg-white p-4 rounded-xl">
            <img
              src="/filmora.png"
              alt=""
              className="h-20 rounded-4xl hover:scale-90"
            />
          </li>
        </div>
        <div className="flex  flex-col md:flex-row gap-4 justify-center items-center  ">
          <li className="bg-white  p-4 rounded-xl">
            <img src="/bata.png" alt="" className="h-20 hover:scale-90" />
          </li>
          <li className="bg-white p-4 rounded-xl">
            <img src="/university.png" alt="" className="h-20 hover:scale-90" />
          </li>
          <li className="bg-celeste-claro p-4 rounded-xl">
            <img src="/canva.png" alt=" " className="h-20 hover:scale-90" />
          </li>
        </div>
      </ul>
      <div className="flex flex-row-reverse items-center justify-center gap-4">
        <p className="text-center mt-4 btn btn-xs capitalize">Ver más </p>
      </div>
      <div className="flex flex-col gap-2 mt-8 w-full px-4">
        <Buttons
          text="Agregar"
          width="!w-full"
          blue={true}
          routing="/register/step4"
        />
        <Buttons
          text="Omitir"
          width="!w-full"
          routing="/register/step4"
          blue={false}
        />
      </div>
    </div>
  );
}

export default Step3;
