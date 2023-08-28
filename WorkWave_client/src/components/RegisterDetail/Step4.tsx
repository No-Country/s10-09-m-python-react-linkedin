import Buttons from "../Buttons";
function Step4() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16">
        <h2 className="text-2xl mb-4 text-white w-full">
          ¡COMPLETASTE TU PERFIL CON ÉXITO!
        </h2>
        <p className="text-white w-full">
          Ingresa a tu inicio y conecta con otros profesionales.
        </p>
        <img src="/congrats.png" alt="frontImg" className="py-4" />
      </div>
      <div className="flex flex-col gap-4">
        <Buttons text="Ir a Inicio" width="" blue={true} routing="/login" />
        <Buttons text="Omitir" width="" routing="/" blue={false} />
      </div>
    </div>
  );
}

export default Step4;
