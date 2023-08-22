import CustomButton from "../../components/Bottons/CustomButton";

function Landing() {
  return (
    <div>
      <div className="flex flex-col">
        <CustomButton color="blue-500" content="Botón Azul" size="medium" />
        <CustomButton color="green-500" content="Botón Verde" size="small" />

        <CustomButton color="red-500" content="Botón Rojo" size="large" />
      </div>
    </div>
  );
}

export default Landing;
