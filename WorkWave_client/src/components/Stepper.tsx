type StepperProps = {
  step: string;
  width: string; // al llamar al componente stepper ingresar por props el numero del paso por donde va el usuario ejemplo: paso 1 <Stepper step={1}>
};
function Stepper(props: StepperProps) {
  const { step, width } = props;
  return (
    <div>
      <ul className=" mt-8 w-full justify-center flex gap-16">
        <li
          className={`${
            step === "step1" ? "bg-[#4318FF]" : "bg-[#2B3674]"
          } w-60 ${width}
           h-2 rounded-full`}
        ></li>
        <li
          className={`${
            step === "step2" ? "bg-[#4318FF]" : "bg-[#2B3674]"
          } w-60 ${width}
           h-2 rounded-full`}
        ></li>
        <li
          className={`${
            step === "step3" ? "bg-[#4318FF]" : "bg-[#2B3674]"
          } w-60 ${width}
           h-2 rounded-full`}
        ></li>
        <li
          className={`${
            step === "step4" ? "bg-[#4318FF]" : "bg-[#2B3674]"
          } w-60 ${width}
           h-2 rounded-full`}
        ></li>
      </ul>
    </div>
  );
}

export default Stepper;
