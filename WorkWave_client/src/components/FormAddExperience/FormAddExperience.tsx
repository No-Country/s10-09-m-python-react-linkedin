import {
  Modal,
  ModalContent,

  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
interface FormAddExperienceProps {
  showMeForm: boolean;
  setShowMeForm: React.Dispatch<React.SetStateAction<boolean>>;
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

const FormAddExperience: React.FC<FormAddExperienceProps> = ({ showMeForm,setShowMeForm }) =>{
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    {
      id: 1,
      name: "Presencial",
    },
    {
      id: 2,
      name: "Híbrido",
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
    typesOfUbicationId: 0, 
    usersCustomuserId: userID || 0,
  });

  const postSchema = yup.object({
    job_position: yup.string().defined().default(""),
    company_name: yup.string().default(""),
    ubication: yup.string().default(""),
    sector: yup.string().default(""),
    description: yup.string().default(""),
    start_date: yup.string().default(""),
    end_date: yup.string().default(""),
    typesOfEmploymentId: yup.number().default(2),
    typesOfUbicationId: yup.number().default(0),
    usersCustomuserId: yup.number().default(userID || 0),
  });

  const { register, handleSubmit } = useForm<interfaceExperience>({
    resolver: yupResolver(postSchema),
  });

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

  const sendDataToTheServer = async () => {
 
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
    <Modal
      isOpen={showMeForm}  
      onClose={() => setShowMeForm(false)}
      title="Añadir experiencia"
    >
      <form onSubmit={handleSubmit(sendDataToTheServer)}>
        <ModalContent>
          <ModalBody>
            <div className="flex flex-col">
              <label htmlFor="job_position">Cargo</label>
              <Input
                id="job_position"
                type="text"
                autoComplete="off"
                {...register("job_position")}
                value={formData.job_position}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company_name">Nombre de la empresa</label>
              <Input
                id="company_name"
                type="text"
                autoComplete="off"
                {...register("company_name")}
                value={formData.company_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ubication">Ubicación</label>
              <Input
                id="ubication"
                type="text"
                autoComplete="off"
                {...register("ubication")}
                value={formData.ubication}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sector">Sector</label>
              <Input
                id="sector"
                type="text"
                autoComplete="off"
                {...register("sector")}
                value={formData.sector}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Descripción</label>
              <Input
                id="description"
                type="text"
                autoComplete="off"
                {...register("description")}
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex">
              <div>
                <label>Fecha de inicio*</label>
                <Input
                  type="date"
                  id="start_date"
                  autoComplete="off"
                  {...register("start_date")}
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Fecha de Finalización*</label>
                <Input
                  type="date"
                  id="end_date"
                  autoComplete="off"
                  {...register("end_date")}
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Tipo de ubicación</label>
              <Button
                type="button"
                onClick={toggleCollapse}
               
             
              >
                {selectedOption || "Seleccionar una opción"}
              </Button>
              {isOpen && (
                <ul className="mt-2">
                  {options.map((option) => (
                    <li
                      key={option.id}
                      onClick={() => selectOption(option.name)}
                      className="cursor-pointer hover:bg-blue-100 p-2 rounded-md"
                    >
                      {option.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="button" color="primary" onClick={(e)=>sendDataToTheServer}>
              Publicar
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default FormAddExperience;
