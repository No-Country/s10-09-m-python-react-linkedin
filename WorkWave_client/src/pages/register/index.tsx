import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGOHorizontal.png";
import Buttons from "../../components/Buttons";
const Register: React.FC = () => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const sendUser = {
    user,
    name,
    phone,
    country: "country",
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(sendUser);
  };

  return (
    <div className=" pt-32 flex flex-col md:flex-row items-center justify-center bg-[url('./assets/fondo1.png')] bg-no-repeat bg-cover ">
      <form
        onSubmit={handleSubmit}
        className="pt-12 h-full w-full max-w-md md:w-1/3 "
      >
        <h2 className="text-2xl  mb-4 text-white">INGRESA TUS DATOS</h2>

        <p className="text-white">
          Completa tus datos personales, para crear una cuenta en Workwave.
        </p>
        <div className="inputsContainer mt-8">
          <div className="mb-4">
            {" "}
            {/*Usuario*/}
            <label
              htmlFor="user"
              className="block text-sm font-medium text-white"
            >
              Usuario
            </label>
            <input
              type="string"
              id="user"
              value={user}
              onChange={handleUserChange}
              placeholder="Ingrese nombre de Usuario"
              className="mt-1 p-2 border rounded-xl w-full bg-transparent "
              required
            />
          </div>
          <div className="mb-4">
            {" "}
            {/*Nombre y Apellido*/}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nombre y Apellido
            </label>
            <input
              type="string"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Ingrese su nombre"
              className="mt-1 p-2 border rounded-xl w-full bg-transparent"
              required
            />
          </div>
          <div className="mb-4">
            {" "}
            {/*Pais*/}
            <label
              htmlFor="country"
              className="block text-sm font-medium text-white"
            >
              País
            </label>
            <input
              type="string"
              id="user"
              className="mt-1 p-2 border rounded-xl w-full bg-transparent "
              required
            />
          </div>
          <div className="mb-4 flex flex-col ">
            {" "}
            {/*Telefono*/}
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white"
            >
              Teléfono
            </label>
            <div className="flex gap-4">
              <input
                type="phone"
                id="phone"
                placeholder="+58"
                className="mt-1 p-2 border rounded-xl w-16 bg-transparent "
                required
              />
              <input
                type="phone"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="4142353345"
                className="mt-1 p-2 border rounded-xl w-full bg-transparent "
                required
              />
            </div>
          </div>
        </div>
        <div onClick={handleSubmit}>
          <Buttons
            text="Siguiente"
            width=""
            blue={true}
            routing="/register/step1"
          />
        </div>
        <p className="text-center mt-2 text-white">
          ¿Ya tienes un usuario?{" "}
          <Link to="/login" className="underline">
            Ingresa
          </Link>
        </p>
      </form>
      <div className="hidden md:block">
        <img src={logo} alt="image logo" className="mb-36" />
      </div>
    </div>
  );
};

export default Register;
