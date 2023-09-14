import React from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Stepper from "../../components/Stepper";
import logo from "../../assets/logoWorkNavbar.svg";
import Country from "../../components/RegisterDetail/Country";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiArrowBack } from "react-icons/bi";
import { Image, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../../assets/EyeSlashFilledIcon.tsx";
import { EyeFilledIcon } from "../../assets/EyeFilledIcon.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import { Button } from "@nextui-org/react";

type FormData = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  phone_number_numeral: string;
  country?: string;
  password: string;
  password2: string;
  terms?: boolean;
};

const schema = yup
  .object({
    email: yup
      .string()
      .required("El campo es requerido")
      .email("El email no es válido"),
    first_name: yup
      .string()
      .required("El campo es requerido")
      .min(3, "El nombre debe tener al menos 3 caracteres"),
    last_name: yup
      .string()
      .required("El campo es requerido")
      .min(3, "El apellido debe tener al menos 3 caracteres"),
    phone_number: yup
      .string()
      .required("Ambos campos son requeridos")
      .min(4, "Un numero debe tener al menos 8 numeros "),
    phone_number_numeral: yup
      .string()
      .required("Ambos campos son requeridos")
      .min(2, "Escriba el numero ")
      .matches(/#/g, "El número debe contener un numeral '#'"),
    password: yup
      .string()
      .required("El campo es requerido")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
        "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
      ),
    password2: yup
      .string()
      .required("El campo es requerido")
      .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
    terms: yup
      .boolean()
      .oneOf([true], "Debes aceptar los términos y condiciones"),
  })
  .required();

// million-ignore
const Register: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isVisible1, setIsVisible1] = React.useState(false);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const sanitizeData = (data: FormData) => {
        const sanitizedData = {
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          password: data.password,
          password2: data.password2,
        };

        return sanitizedData;
      };

      const sanitizedData = sanitizeData(data);

      const response = await axios.post(
        "https://workwave-django.onrender.com/register/",
        sanitizedData
      );

      console.log("Solicitud POST exitosa:", response.data);
      // Realiza la redirección después de una solicitud exitosa
      navigate("/registro/step1");
    } catch (err) {
      const error = err as AxiosError;
      console.error("Error al hacer la solicitud POST:", error);
      if (error.response?.status === 500) {
        setError("password2", {
          type: "manual",
          message: "Error de Servidor, vuelva más tarde",
        });
      }
      if (error.response?.status === 400) {
        setError("password2", {
          type: "manual",
          message:
            "Posible usuario creado, ingrese a login o intente con otro usuario",
        });
      }
    }
  };

  const comeBackBTN = () => {
    navigate("/");
  };
  return (
    <>
      <div className="absolute left-0 right-0 top-5">
        <Stepper step={"step1"} width="" />
      </div>

      <div className="flex flex-col items-center justify-center pt-16 bg-no-repeat bg-cover md:pt-32 md:flex-row">
        <section className="flex flex-col items-center justify-center w-full px-4 py-8 md:justify-start md:items-start md:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full pt-12 md:w-2/3"
          >
            <div className="flex items-center gap-8 mb-4">
              <div>
                <BiArrowBack
                  onClick={comeBackBTN}
                  className="text-3xl text-white cursor-pointer"
                />
              </div>
              <h2 className="text-2xl font-medium text-white ">
                Ingresá tus datos
              </h2>
            </div>

            <p className="text-sm text-white md:text-base">
              Completa tus datos personales, para crear una cuenta en Workwave.{" "}
            </p>
            <ul className="mt-8 inputsContainer">
              <li className="mb-4">
                <label
                  htmlFor="user"
                  className="block text-sm font-medium text-white"
                >
                  Email*
                </label>
                <input
                  autoComplete="email"
                  type="text"
                  id="email"
                  className="w-full p-2 mt-1 bg-transparent border rounded-xl"
                  placeholder="lucialopez@mail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-orange-400">
                    {errors.email.message}
                  </span>
                )}
              </li>
              {/*Email*/}
              <li className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Nombre*
                </label>
                <input
                  autoComplete="name"
                  type="string"
                  id="name"
                  placeholder="Lucia"
                  className="w-full p-2 mt-1 bg-transparent border rounded-xl"
                  {...register("first_name")}
                />
                {errors.first_name && (
                  <span className="text-orange-400">
                    {errors.first_name?.message}
                  </span>
                )}
              </li>
              {/*Nombre*/}
              <li className="mb-4">
                <label
                  htmlFor="surname"
                  className="block text-sm font-medium text-white"
                >
                  Apellido*
                </label>
                <input
                  type="string"
                  id="lastname"
                  placeholder="Lopez"
                  className="w-full p-2 mt-1 bg-transparent border rounded-xl"
                  {...register("last_name")}
                />
                {errors.last_name && (
                  <span className="text-orange-400">
                    {errors.last_name.message}
                  </span>
                )}
              </li>
              {/*Apellido*/}
              <li className="mb-36 md:mb-4">
                <Country />
              </li>
              {/*Pais*/}
              <li className="flex flex-col mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Teléfono
                </label>
                <li className="flex gap-4">
                  <input
                    type="phone_number_numeral"
                    id="phone_number_numeral"
                    placeholder="+54"
                    className="w-16 p-2 mt-1 bg-transparent border rounded-xl"
                    {...register("phone_number_numeral")}
                  />
                  <input
                    type="phone"
                    id="phone_number"
                    placeholder="111-1111111"
                    className="w-full p-2 mt-1 bg-transparent border rounded-xl"
                    {...register("phone_number")}
                  />
                </li>
                {errors.phone_number_numeral || errors.phone_number ? (
                  <span className="text-orange-400">
                    {errors.phone_number
                      ? errors.phone_number.message
                      : errors.phone_number_numeral?.message}
                  </span>
                ) : null}
              </li>
              {/*Telefono*/}
              <li className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Contraseña*
                </label>
                <Input
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
                      ) : (
                        <EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  autoComplete="new-password"
                  id="password"
                  placeholder="************"
                  size="lg"
                  fullWidth
                  className="w-full mt-1 border-white bg-none rounded-xl "
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-orange-400">
                    {errors.password.message}
                  </span>
                )}
              </li>
              {/*Contraseña*/}
              <li className="mb-8">
                <label
                  htmlFor="confirmedPassword"
                  className="block text-sm font-medium text-white"
                >
                  Confirmar Contraseña*
                </label>
                <Input
                  autoComplete="new-password"
                  id="confirmedPassword"
                  placeholder="************"
                  type={isVisible1 ? "text" : "password"}
                  size="lg"
                  fullWidth
                  className="w-full mt-1 border-white bg-none rounded-xl "
                  {...register("password2")}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility1}
                    >
                      {isVisible1 ? (
                        <EyeSlashFilledIcon className="text-2xl pointer-events-none text-default-400" />
                      ) : (
                        <EyeFilledIcon className="text-2xl pointer-events-none text-default-400" />
                      )}
                    </button>
                  }
                />
                {errors.password2 && (
                  <span className="text-orange-400">
                    {errors.password2.message}
                  </span>
                )}
              </li>
              <span className="text-gray-400">
                La contraseña debe ser de 8 dígitos, usar al menos una
                mayúscula, una minúscula y un número. No se aceptan espacios ni
                caracteres especiales.
              </span>
              {/*Confirmar Contraseña*/}
            </ul>

            <div className="flex gap-4 my-4">
              <input type="checkbox" className="w-4" {...register("terms")} />
              <span>
                He leído y acepto los{" "}
                <Link
                  className="link hover:text-celeste-claro"
                  to="/terminos-uso"
                >
                  términos y condiciones.
                </Link>
              </span>
            </div>
            {errors.terms && (
              <span className="text-orange-400">{errors.terms.message}</span>
            )}
            {/*Terminos y condiciones*/}
            <Button
              isLoading={isSubmitting}
              type="submit"
              className="bg-[#4318FF] text-white p-2 rounded-full w-full mt-5"
            >
              Continuar
            </Button>
          </form>
        </section>
        <div className="hidden md:block ">
          <Link to={"/"}>
            <Image
              width={600}
              height={600}
              src={logo}
              alt="image logo"
              className="mb-36"
            />
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Register;
