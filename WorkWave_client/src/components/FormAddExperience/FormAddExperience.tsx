interface FormAddExperienceProps {
  showMeForm: boolean;
}
const FormAddExperience: React.FC<FormAddExperienceProps> = ({showMeForm,}) => {
  console.log(showMeForm)
  return (
<div className="container flex flex-col">
  <form className="bg-black">
    <div className="flex flex-col">
      <label htmlFor="titulo1">Titulo</label>
      <input type="text" id="titulo1" placeholder="Ejemplo: grado en diseño" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="titulo2">Titulo</label>
      <input type="text" id="titulo2" placeholder="Ejemplo: grado en diseño" />
    </div>
  </form>
</div>

  );
};

export default FormAddExperience;
