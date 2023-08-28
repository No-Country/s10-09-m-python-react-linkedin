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
        <svg
          className="mt-4"
          fill="#fff"
          height="25px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xml:space="preserve"
          stroke="#fff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            ></path>{" "}
          </g>
        </svg>
        <p className="text-center mt-4">Ver más </p>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <Buttons text="Agregar" routing="/register/step4" />
        <Buttons text="Omitir" routing="/register/step4" blue={false} />
      </div>
    </div>
  );
}

export default Step3;
