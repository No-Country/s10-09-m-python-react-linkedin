import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import Footer from "../../components/Footer.tsx";

type FormData = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  country?: string;
  password: string;
  password2: string;
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
  })
  .required();

// million-ignore
const Register: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isVisible1, setIsVisible1] = React.useState(false);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);

  const [UserData, setUserData] = useState({});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setUserData({ ...data });
    Loading.circle();
  };
  useEffect(() => {
    const sendUserData = async () => {
      console.log(UserData);
      if (UserData) {
        try {
          const response = await axios.post(
            `https://workwave-django.onrender.com/register/`,
            UserData
          );
          console.log("Solicitud POST exitosa:", response.data);
          Loading.remove();
          Report.success(
            "Registro exitoso",
            "Ingrese con su usuario",
            "Okay",
            () => {
              navigate("/login");
            }
          );
        } catch (error) {
          console.error("Error al hacer la solicitud POST:", error);
          Loading.remove();
        }
      }
    };
    sendUserData();
  }, [UserData, navigate]);

  const comeBackBTN = () => {
    navigate("/");
  };
  return (
    <>
      <div className="absolute top-5 left-0 right-0">
        <Stepper step={"step1"} width="" />
      </div>

      <div className=" md:pt-32 pt-16 flex flex-col md:flex-row items-center justify-center bg-no-repeat bg-cover ">
        <section className=" px-4 py-8 w-full flex flex-col md:justify-start md:items-start md:w-1/2 justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pt-12 md:w-2/3 w-full"
          >
            <div className="flex items-center mb-4 gap-8">
              <div>
                <BiArrowBack
                  onClick={comeBackBTN}
                  className="text-3xl cursor-pointer  text-white"
                />
              </div>
              <h2 className="text-2xl font-medium text-white ">
                Ingresá tus datos
              </h2>
            </div>

            <p className="text-white  text-sm md:text-base">
              Completa tus datos personales, para crear una cuenta en Workwave.{" "}
            </p>
            <ul className="inputsContainer mt-8">
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
                  className="mt-1 p-2 border rounded-xl w-full bg-transparent"
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
                  className="mt-1 p-2 border rounded-xl w-full bg-transparent"
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
                  className="mt-1 p-2 border rounded-xl w-full bg-transparent"
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
              <li className="mb-4 flex flex-col">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Teléfono
                </label>
                <li className="flex gap-4">
                  <input
                    type="phone_number"
                    id="phone_number"
                    placeholder="+54"
                    className="mt-1 p-2 border rounded-xl w-16 bg-transparent"
                    {...register("phone_number")}
                  />
                  <input
                    type="phone"
                    id="phone_number"
                    placeholder="111-1111111"
                    className="mt-1 p-2 border rounded-xl w-full bg-transparent"
                    {...register("phone_number")}
                  />
                </li>
                {errors.phone_number || errors.phone_number ? (
                  <span className="text-orange-400">
                    {errors.phone_number
                      ? errors.phone_number.message
                      : errors.phone_number}
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
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  autoComplete="new-password"
                  id="password"
                  placeholder="************"
                  size="lg"
                  fullWidth
                  className="mt-1 border-white  bg-none rounded-xl w-full  "
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
                  className="mt-1 border-white  bg-none rounded-xl w-full  "
                  {...register("password2")}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility1}
                    >
                      {isVisible1 ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
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
              <input type="checkbox" className="w-4" />
              <span>
                He leído y acepto los{" "}
                <Link className="link hover:text-celeste-claro" to="/terminos">
                  términos y condiciones.
                </Link>
              </span>
            </div>
            {/*Terminos y condiciones*/}
            <button
              type="submit"
              className="bg-[#4318FF] text-white p-2  rounded-full w-full mt-5"
            >
              Continuar
            </button>
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
      <Footer />
    </>
  );
};

export default Register;
