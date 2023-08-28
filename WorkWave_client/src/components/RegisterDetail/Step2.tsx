import Buttons from "../Buttons";
function Step2() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <h2 className="text-2xl mb-4 text-white w-full">INGRESA TUS DATOS</h2>
        <p className="text-white w-full">
          Elige una fotografía para tu perfil{" "}
        </p>
        <img src="/frontImg.png" alt="frontImg" className="h-80" />
      </div>
      <div className="flex flex-col gap-4">
        <Buttons
          text="Agregar"
          blue={true}
          width=""
          routing="/register/step3"
        />
        <Buttons
          text="Omitir"
          width=""
          routing="/register/step2"
          blue={false}
        />
      </div>
    </div>
  );
}

export default Step2;
