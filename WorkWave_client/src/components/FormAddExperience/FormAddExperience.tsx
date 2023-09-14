import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
interface FormAddExperienceProps {
  showMeForm: boolean;
}
interface interfaceExperience {
  job_position: string;
  company_name: string;
  ubication: string;
  sector: string;
  description: string;
  start_date: string;
  end_date: string;
  typesOfEmploymentId: number;
  typesOfUbicationId: number;
  usersCustomuserId: number;
}
const getUserIdFromLocalStorage = (): number | null => {
  const userString = localStorage.getItem("user");
  const storedUser = userString ? JSON.parse(userString) : null;
  return storedUser ? storedUser.id : null;
};
const FormAddExperience: React.FC<FormAddExperienceProps> = ({
  showMeForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(showMeForm);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    {
      id: 1,
      name: "Presencial",
    },
    {
      id: 2,
      name: "Hibrido",
    },
    {
      id: 3,
      name: "En remoto",
    },
  ];

  const [userID, setUserID] = useState<number | null>(
    getUserIdFromLocalStorage()
  );
  const [formData, setFormData] = useState<interfaceExperience>({
    job_position: "",
    company_name: "",
    ubication: "",
    sector: "",
    description: "",
    start_date: "",
    end_date: "",
    typesOfEmploymentId: 2,
    typesOfUbicationId: 0, // Puedes inicializarlo con 0 o el valor por defecto que prefieras
    usersCustomuserId: userID || 0,
  });
  console.log(formData);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    const selectedOptionObject = options.find((opt) => opt.name === option);

    if (selectedOptionObject) {
      setFormData({
        ...formData,
        typesOfUbicationId: selectedOptionObject.id,
      });
      setSelectedOption(selectedOptionObject.name);
    }

    setIsOpen(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos a enviar:", formData);
  };
  const handleCloseForm = () => {
    setIsOpenForm(false);
    console.log("anda?", showMeForm);
  };
  const sendDataToTheServer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://work-wave.onrender.com/api/experience",
        formData
      );
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };
  useEffect(() => {
    const userId = getUserIdFromLocalStorage();
    setUserID(userId);
  }, []);

  return (
    <div
      className={` ${
        isOpenForm ? "block" : "hidden"
      } container flex flex-col  bg-black`}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center justify-between">
          <div className="p-2">
            <h1>Añadir experiencia</h1>
          </div>
          <div>
            <button
              className="mr-4 text-white"
              type="button"
              onClick={handleCloseForm}
            >
              x
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="titulo1" className="mx-2">
            Cargo
          </label>
          <input
            type="text"
            id="titulo1"
            name="job_position"
            onChange={handleInputChange}
            placeholder="Ejemplo: grado en diseño"
            className="p-2 mx-2 bg-black border border-gray-500 rounded-lg"
            value={formData?.job_position}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Nombre de la empresa</label>
          <input
            type="text"
            id="titulo2"
            name="company_name"
            onChange={handleInputChange}
            placeholder="Ejemplo: grado en diseño"
            className="p-2 mx-2 bg-black border border-gray-500 rounded-lg"
            value={formData?.company_name}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Ubicacion</label>
          <input
            type="text"
            id="titulo2"
            name="ubication"
            onChange={handleInputChange}
            placeholder="Ejemplo: grado en diseño"
            className="p-2 mx-2 bg-black border border-gray-500 rounded-lg"
            value={formData?.ubication}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Tipo de ubicacion</label>
          <button
            type="button"
            onClick={toggleCollapse}
            className="flex items-center justify-between p-2 px-4 py-2 mx-2 text-gray-700 bg-black border border-gray-500 rounded-lg"
          >
            <span>{selectedOption || "Seleccionar una opción"}</span>
            <IoIosArrowDown
              className={`w-5 h-5 transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isOpen && (
            <ul className="absolute z-10 w-40 mt-2 bg-black border rounded-md shadow-md">
              {options.map((option) => (
                <li
                  key={option.id}
                  onClick={() => selectOption(option.name)}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                >
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex">
          <div>
            <label>Fecha de inicio*</label>
            <input
              type="date"
              name="start_date"
              onChange={handleInputChange}
              className="p-2 m-2 mx-2 bg-black border border-gray-500 rounded-lg w-25"
            />
          </div>
          <div>
            <label>Fecha de Finalización*</label>
            <input
              type="date"
              name="end_date"
              onChange={handleInputChange}
              className="p-2 m-2 mx-2 bg-black border border-gray-500 rounded-lg w-42 "
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Sector</label>
          <input
            type="text"
            id="titulo2"
            name="sector"
            onChange={handleInputChange}
            placeholder="Ejemplo: Tecnologia"
            className="p-2 mx-2 bg-black border border-gray-500 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="titulo2">Descripción</label>
          <input
            type="text"
            name="description"
            onChange={handleInputChange}
            id="titulo2"
            placeholder="Añadir descripción del puesto"
            className="p-2 mx-2 bg-black border border-gray-500 rounded-lg "
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            className="bg-[#4318FF] text-white rounded-xl p-3 m-4 w-60"
            type="button"
            onClick={(e) => sendDataToTheServer(e)}
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddExperience;
