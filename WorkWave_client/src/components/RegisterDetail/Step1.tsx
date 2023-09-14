import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

interface FormData {
  currentJob: string;
  typeJob: string;
  recentCompany: string;
}

const schema = yup.object().shape({
  currentJob: yup.string().required("Campo requerido"),
  typeJob: yup.string().required("Campo requerido"),
  recentCompany: yup.string().required("Campo requerido"),
});

//million-ignore
function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = () => {
    navigate("/registro/step2");
  };

  return (
    <div className="w-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-12 h-full w-full flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl mb-4 text-white">INGRESA TUS DATOS</h2>

        <p className="text-white px-8">
          Completa tus datos personales, para crear una cuenta en Workwave.
        </p>
        <div className="mt-8 flex flex-col items-start w-full gap-4">
          <div className="mb-4 flex flex-col justify-center w-full px-4 md:px-32">
            {/* Trabajo Actual */}
            <label
              htmlFor="currentJob"
              className="block text-md font-medium text-white"
            >
              Trabajo actual
            </label>
            <input
              type="text"
              id="currentJob"
              {...register("currentJob")}
              className="mt-1 p-2 border rounded-xl w-full bg-transparent"
            />
            {errors.currentJob && (
              <p className="text-red-500">{errors.currentJob.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col justify-center w-full px-4 md:px-32">
            {/* Tipo de trabajo */}
            <select
              id="typeJob"
              {...register("typeJob")}
              className={`mt-1 p-2 border rounded-xl w-full bg-transparent ${
                errors.typeJob ? "border-red-500" : ""
              }`}
            >
              <option value="" disabled className="bg-black">
                Selecciona tipo de empleo
              </option>
              <option className="text-black" value="Full-Time">
                Full-Time
              </option>
              <option className="text-black" value="Part-Time">
                Part-Time
              </option>
              <option className="text-black" value="Freelance">
                Freelance
              </option>
            </select>
            {errors.typeJob && (
              <p className="text-red-500">{errors.typeJob.message}</p>
            )}
          </div>
          <div className="mb-4 flex flex-col justify-center w-full px-4 md:px-32">
            {/* Compañia más reciente */}
            <label
              htmlFor="recentCompany"
              className="block text-md font-medium text-white"
            >
              Compañía más reciente
            </label>
            <input
              type="text"
              id="recentCompany"
              {...register("recentCompany")}
              className="mt-1 p-2 border rounded-xl w-full bg-transparent"
            />
            {errors.recentCompany && (
              <p className="text-red-500">{errors.recentCompany.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col m-2 justify-center items-center gap-4 w-2/3 px-4">
          <Button
            type="submit"
            radius="full"
            fullWidth
            size="lg"
            className="p-2 hover:bg-black duration-500"
            isLoading={isLoading}
          >
            Continuar
          </Button>
          <Button
            onPress={() => navigate("/registro/step3")}
            radius="full"
            fullWidth
            size="lg"
            className=" hover:bg-white hover:text-black duration-500"
          >
            Omitir
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Step1;
