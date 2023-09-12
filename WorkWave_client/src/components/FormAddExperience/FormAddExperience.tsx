
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface FormAddExperienceProps {
  showMeForm: boolean;
}
const FormAddExperience: React.FC<FormAddExperienceProps> = ({
  showMeForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Estado para almacenar la opción seleccionada
  const options = ["Presencial", "Híbrido", "Remoto"];
  const [formData, setFormData] = useState({
    cargo: "",
    tipoEmpleo: "",
    ubicacion: "",
    tipoUbicacion: "",
    actualmenteTengoCargo: false,
    sector: "",
    fechaInicio: "",
    fechaFinalizacion: "",
    descripcion: "",
  });

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    console.log(selectedOption)
    setSelectedOption(option);
    setFormData({
      ...formData,
      tipoUbicacion: option,
    });
    setIsOpen(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al endpoint utilizando fetch o axios
    console.log("Datos a enviar:", formData);
  };
  console.log(showMeForm);
  return (
    <div className="container flex flex-col  bg-black ">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="flex justify-between items-center">
          <div className="p-2">
            <h1>Añadir experiencia</h1>
          </div>
          <div>
            <button className="text-white mr-4">x</button>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="titulo1" className="mx-2">Cargo</label>
          <input
  type="text"
  id="titulo1"
  name="cargo" 
  onChange={handleInputChange}
  placeholder="Ejemplo: grado en diseño"
  className="bg-black border border-gray-500 p-2 rounded-lg mx-2"
  value={formData.cargo}

/>

        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Tipo de empleo</label>
          <input
            type="text"
            id="titulo2"
            name="tipoEmpleo" 
            onChange={handleInputChange}
            placeholder="Ejemplo: grado en diseño"
            className="bg-black border border-gray-500 p-2 rounded-lg mx-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Ubicacion</label>
          <input
            type="text"
            id="titulo2"
            name="ubicacion" 
            onChange={handleInputChange}
            placeholder="Ejemplo: grado en diseño"
            className="bg-black border border-gray-500 p-2 rounded-lg mx-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Tipo de ubicacion</label>
          <button
            type="button"
            onClick={toggleCollapse}
            className="flex items-center justify-between px-4 py-2 text-gray-700 bg-black border border-gray-500 p-2 rounded-lg mx-2"
          >
            <span>{formData.tipoUbicacion|| "Seleccionar una opción"}</span>
            <IoIosArrowDown
              className={`w-5 h-5 transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isOpen && (
            <ul className="absolute z-10 w-40 mt-2 bg-black border shadow-md rounded-md">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => selectOption(option)}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-2">
        <input
            type="checkbox"
            name="actualmenteTengoCargo"
            id="actualmenteTengoCargo"
            className="bg-black border border-gray-500 p-2 rounded-lg mx-2"
            checked={formData.actualmenteTengoCargo}
            onChange={handleInputChange}
          />

          <span>Actualmente tengo este cargo</span>
        </div>
        <div className="flex">
          <div>
            <label>Sector*</label>
            <input type="date" name="fechaInicio" onChange={handleInputChange} className="m-2 
            
               w-25 bg-black border border-gray-500 p-2 rounded-lg mx-2"  />
          </div>
          <div>
            <label>Fecha de Finalización*</label>
            <input type="date" name="fechafinalizacion" onChange={handleInputChange} className="m-2  w-42 bg-black border border-gray-500 p-2 rounded-lg mx-2 " />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Sector</label>
          <input type="text" id="titulo2"          name="sector"
            onChange={handleInputChange} placeholder="Ejemplo: Tecnologia"     className="bg-black border border-gray-500 p-2 rounded-lg mx-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Descripción</label>
          <input
            type="text"
            name="descripcion"
            onChange={handleInputChange}
            id="titulo2"
            placeholder="Añadir descripción del puesto"
            className=" bg-black border border-gray-500 p-2 rounded-lg mx-2"
          />
        </div>
        <div className="flex justify-center items-center ">
        <button className="bg-[#4318FF] text-white rounded-xl p-3 m-4 w-60">Publicar</button>
        </div>
   
      </form>
    </div>


  );
};

export default FormAddExperience;
