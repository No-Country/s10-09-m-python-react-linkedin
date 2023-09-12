import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";

import axios, { AxiosError } from "axios";
import logo from "../../assets/LOGOHorizontal.avif";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email requerido"),
  password: yup
    .string()
    .required("El campo es requerido")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
    ),
});

interface FormData {
  email: string;
  password: string;
}

interface Error {
  message: string[];
  statusCode: number;
}

// million-ignore
const Login: React.FC = () => {
  const { setToken, setUser } = useContext(TokenContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const { email, password } = data;

      const dataJson = {
        email,
        password,
      };

      const response = await axios.post(
        "https://workwave-django.onrender.com/login/",
        dataJson
      );
      const user = response.data;

      localStorage.setItem("token", user.token);

      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
      setToken(user.token);
      navigate("/empleos");
    } catch (err) {
      const error = err as AxiosError<Error>;
      if (error.response?.status === 401) {
        setError("password", {
          type: "manual",
          message: "Usuario no encontrado",
        });
      }
      if (error.response?.status === 500) {
        setError("password", {
          type: "manual",
          message: "Error de Servidor, vuelva mas tarde",
        });
      }
    }
  };

  const comeBackBTN = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-no-repeat bg-cover md:flex-row ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-screen max-w-md p-6 pt-28 md:pt-60 md:w-1/3 lg:w-1/4"
      >
        <div className="flex items-center gap-8 mb-4">
          <div>
            <BiArrowBack
              onClick={comeBackBTN}
              className="text-3xl text-white cursor-pointer"
            />
          </div>
          <h2 className="text-xl font-semibold text-white ">
            Ingresá tus datos
          </h2>
        </div>

        <p className="text-sm text-white md:text-base">
          Completa tus datos personales, para crear una cuenta en Workwave.{" "}
        </p>

        <div className="mt-8 inputsContainer">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Usuario*
            </label>
            <input
              autoComplete="username"
              type="email"
              id="email"
              {...register("email")}
              placeholder="lucialopez@mail.com"
              className="w-full p-2 mt-1 bg-transparent border rounded-xl"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Contraseña*
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              placeholder="************"
              className="w-full p-2 mt-1 bg-transparent border rounded-xl"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#4318FF] text-white p-2 rounded-full w-full mt-5"
        >
          Continuar
        </button>

        {/* <p className="mt-6 text-center text-white">
          ¿No tienes un usuario?{" "}
          <Link to={"/registro"} className="link">
            Registrate
          </Link>
        </p> */}
      </form>
      <div className="hidden md:block">
        <Link to={"/"}>
          <img src={logo} alt="image logo" className="mb-36" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
