type StepperProps = {
  step: number; // al llamar al componente stepper ingresar por props el numero del paso por donde va el usuario ejemplo: paso 1 <Stepper step={1}>
};
function Stepper(props: StepperProps) {
  const { step } = props;
  return (
    <div>
      <ul className="lg:hidden mt-4 w-full justify-center flex gap-4">
        <li className="bg-[#61A9FD] w-24 h-2"></li>
        <li
          className={`${
            step === 2 || step === 3 || step === 4
              ? "bg-[#61A9FD]"
              : "bg-[#D9D9D9]"
          } w-24 h-2`}
        ></li>
        <li
          className={`${
            step === 3 || step === 4 ? "bg-[#61A9FD]" : "bg-[#D9D9D9]"
          } w-24 h-2`}
        ></li>
        <li
          className={`${step === 4 ? "bg-[#61A9FD]" : "bg-[#D9D9D9]"} w-24 h-2`}
        ></li>
      </ul>
    </div>
  );
}

export default Stepper;
