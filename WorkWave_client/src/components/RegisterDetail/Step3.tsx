import Buttons from "../Buttons";
function Step3() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 mb-8">
        <h2 className="text-2xl mb-4 text-white w-full">
          ELIGE MARCAS PARA CONECTAR
        </h2>
      </div>
      <ul className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center items-center">
          <li className="bg-[#fff] p-4 rounded-xl">
            <img src="/nike.png" alt="" className="h-20" />
          </li>
          <li className="bg-[#fff] p-4 rounded-xl">
            <img src="/netflix.png" alt="" className="h-20" />
          </li>
          <li className="bg-[#fff] p-4 rounded-xl">
            <img src="/filmora.png" alt="" className="h-20 rounded-4xl" />
          </li>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <li className="bg-[#fff] p-4 rounded-xl">
            <img src="/bata.png" alt="" className="h-20" />
          </li>
          <li className="bg-[#fff] p-4 rounded-xl">
            <img src="/university.png" alt="" className="h-20" />
          </li>
          <li className="bg-[#fff] p-4 rounded-xl">
            <img src="/canva.png" alt=" " className="h-20" />
          </li>
        </div>
      </ul>
      <div className="flex flex-row-reverse items-center justify-center gap-4">
        <p className="text-center mt-4">Ver más </p>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <Buttons
          text="Agregar"
          width=""
          blue={true}
          routing="/register/step4"
        />
        <Buttons
          text="Omitir"
          width=""
          routing="/register/step4"
          blue={false}
        />
      </div>
    </div>
  );
}

export default Step3;
