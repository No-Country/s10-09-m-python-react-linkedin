import Buttons from "../Buttons";
function Step4() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 px-8 md:px-0">
        <h2 className="text-2xl mb-4 text-white w-full">
          ¡COMPLETASTE TU PERFIL CON ÉXITO!
        </h2>
        <p className="text-white w-full">
          Ingresa a tu inicio y conecta con otros profesionales.
        </p>
        <img src="/congrats.png" alt="frontImg" className="py-4" />
      </div>
      <div className="flex flex-col gap-4 w-full px-8 md:px-0 md:w-auto">
        <Buttons
          text="Ir a Inicio"
          width="!w-full"
          blue={true}
          routing="/login"
        />
        <Buttons text="Omitir" width="!w-full" routing="/" blue={false} />
      </div>
    </div>
  );
}

export default Step4;
