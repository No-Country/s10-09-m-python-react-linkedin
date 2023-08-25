import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/LOGOHorizontal.png'
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
const comeBackBTN =()=>{
 navigate('/')
}
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[url('./assets/fondo1.png')] bg-no-repeat bg-cover ">
    <form
      onSubmit={handleSubmit}
      className="pt-12 p-6 md:pt-60 h-screen w-full max-w-md md:w-1/3 lg:w-1/4"
    >
        <div className="flex">
          <div><BiArrowBack onClick={comeBackBTN} className="text-xl mr-2 mt-2 text-white"/> </div>
              
              <h2 className="text-2xl  mb-4 text-white">INGRESA TUS DATOS</h2>
        </div>
    
        <p className='text-white'>Completa tus datos personales, para acceder a tu cuenta en Workwave.</p>
        <div className="inputsContainer mt-8">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='ingresa tu email'
            className="mt-1 p-2 border rounded-xl w-full bg-transparent "
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='ingresa tu contraseña'
            className="mt-1 p-2 border rounded-xl w-full bg-transparent"
            required
          />
        </div>
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full mt-24"
        >
      Siguiente
        </button>
        <p className='text-center mt-2 text-white'>¿No tenés un usuario?  <span className='underline'>Registrate</span></p>
      </form>
      <div className="hidden md:block">
        <img src={logo} alt="image logo" className="mb-36" />
      </div>
    </div>
  );
};

export default Login;
