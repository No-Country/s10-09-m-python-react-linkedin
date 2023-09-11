import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/LOGOHorizontal.png";
import axios, { AxiosError } from "axios";
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

const Login: React.FC = () => {
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
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/empleos");
    } catch (err) {
      const error = err as AxiosError<Error>;
      if (error.response?.status === 401) {
        setError("password", {
          type: "manual",
          message: "Usuario no encontrado",
        });
      }
    }
  };

  const comeBackBTN = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center  bg-no-repeat bg-cover ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-12 p-6 md:pt-60 h-screen w-full max-w-md md:w-1/3 lg:w-1/4"
      >
        <div className="flex">
          <div>
            <BiArrowBack
              onClick={comeBackBTN}
              className="text-xl mr-2 mt-2 text-white"
            />
          </div>
          <h2 className="text-2xl mb-4 text-white">INGRESA TUS DATOS</h2>
        </div>

        <p className="text-white">
          Completa tus datos personales, para acceder a tu cuenta en Workwave.
        </p>

        <div className="inputsContainer mt-8">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              autoComplete="username"
              type="email"
              id="email"
              {...register("email")}
              placeholder="Ingresa tu email"
              className="mt-1 p-2 border rounded-xl w-full bg-transparent"
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
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              placeholder="Ingresa tu contraseña"
              className="mt-1 p-2 border rounded-xl w-full bg-transparent"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full mt-5"
        >
          Siguiente
        </button>

        <p className="text-center mt-2 text-white">
          ¿No tienes un usuario?{" "}
          <Link to={"/registro"} className="link">
            Registrate
          </Link>
        </p>
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
