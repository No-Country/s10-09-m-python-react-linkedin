import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import logo from "../../assets/LOGOHorizontal.png";
import Buttons from "../../components/Buttons";
import Country from "../../components/RegisterDetail/Country";
const Register: React.FC = () => {
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmedPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmedPassword(event.target.value);
  };

  const sendUser = {
    user,
    name,
    phone,
    password,
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(sendUser);
  };

  return (
    <>
      <div className="absolute top-5 left-0 right-0">
        <Stepper step={"step1"} width="" />
      </div>

      <div className=" md:pt-32 pt-16 flex flex-col md:flex-row items-center justify-center bg-[url('./assets/fondo1.png')] bg-no-repeat bg-cover ">
        <section className=" px-4 py-8 w-full flex flex-col md:justify-start md:items-start md:w-1/2 justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="pt-12 md:w-2/3 w-full
          "
          >
            <h2 className="text-2xl  mb-4 text-white">INGRESA TUS DATOS</h2>
            <p className="text-white">
              Completa tus datos personales, para crear una cuenta en Workwave.
            </p>
            <ul className="inputsContainer mt-8 w-">
              <li className="mb-4">
                <label
                  htmlFor="user"
                  className="block text-sm font-medium text-white"
                >
                  Usuario*
                </label>
                <input
                  type="string"
                  id="user"
                  value={user}
                  onChange={handleUserChange}
                  placeholder="lucialopez@mail.com"
                  className="mt-1 p-2 border rounded-xl w-full bg-transparent "
                  required
                />
              </li>
              {/*Usuario*/}
              <li className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Nombre y Apellido*
                </label>
                <input
                  type="string"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Lucia Lopez"
                  className="mt-1 p-2 border rounded-xl w-full bg-transparent"
                  required
                />
              </li>
              {/*Nombre y Apellido*/}
              <li className="mb-4">
                <Country />
              </li>
              {/*Pais*/}
              <li className="mb-4 flex flex-col ">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Teléfono
                </label>
                <li className="flex gap-4">
                  <input
                    type="phone"
                    id="phone"
                    placeholder="+54"
                    className="mt-1 p-2 border rounded-xl w-16 bg-transparent "
                    required
                  />
                  <input
                    type="phone"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="111-1111111"
                    className="mt-1 p-2 border rounded-xl w-full bg-transparent "
                    required
                  />
                </li>
              </li>
              {/*Telefono*/}
              <li className="mb-4">
                {" "}
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Contraseña*
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="************"
                  className="mt-1 p-2 border rounded-xl w-full bg-transparent "
                  required
                />
              </li>
              {/*Contraseña*/}
              <li className="mb-4">
                {" "}
                <label
                  htmlFor="confirmedPassword"
                  className="block text-sm font-medium text-white"
                >
                  Confirmar Contraseña*
                </label>
                <input
                  type="password"
                  id="confirmedPassword"
                  value={confirmedPassword}
                  onChange={handleConfirmedPasswordChange}
                  placeholder="************"
                  className="mt-1 p-2 border rounded-xl w-full bg-transparent "
                  required
                />
              </li>
              {/*Confirmar Contraseña*/}
            </ul>

            <div className="flex gap-4 my-4">
              <input type="checkbox" />{" "}
              <p>He leído y acepto los términos y condiciones.</p>
            </div>
            {/*Terminos y condiciones*/}
            <div onClick={handleSubmit} className="">
              <Buttons
                text="Siguiente"
                width="md:!w-3/4 !w-full"
                blue={true}
                routing="/register/step1"
              />
            </div>
          </form>
        </section>
        <div className="hidden md:block ">
          <img src={logo} alt="image logo" className="mb-36" />
        </div>
      </div>
    </>
  );
};

export default Register;
