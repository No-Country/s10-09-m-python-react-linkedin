import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/LOGOHorizontal.png";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email requerido"),
  password: yup.string().required("Contraseña requerida"),
});

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };

  const comeBackBTN = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[url('./assets/fondo1.png')] bg-no-repeat bg-cover ">
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
