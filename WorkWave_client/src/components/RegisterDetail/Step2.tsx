import Buttons from "../Buttons";
function Step2() {
  return (
    <div>
      <div className="flex flex-col justify-center  items-center mt-16">
        <h2 className="text-2xl px-4 mb-4 text-white w-full md:w-fit">
          INGRESA TUS DATOS
        </h2>
        <p className="text-white px-4 w-full">
          Elige una fotografía para tu perfil{" "}
        </p>
        <img src="/frontImg.png" alt="frontImg" className="h-80 " />
      </div>
      <div className="flex flex-col gap-4 w-full px-4 md:px-0 md:w-auto">
        <Buttons
          text="Agregar"
          blue={true}
          width="!w-full md:w-fit"
          routing="/register/step3"
        />
        <Buttons
          text="Omitir"
          width="!w-full md:w-fit"
          routing="/register/step2"
          blue={false}
        />
      </div>
    </div>
  );
}

export default Step2;
