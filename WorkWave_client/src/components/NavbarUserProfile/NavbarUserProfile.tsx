import React,{useState} from 'react'
import UserWorkExperience from '../../components/userWorkExperience/UserWorkExperience';
import UserEducation from '../../components/userEducation/UserEducation';

const NavbarUserProfile:React.FC = () => {
  const [seccionActual, setSeccionActual] = useState<string>('experience');
  const cambiarSeccion = (seccion:string) => {
    setSeccionActual(seccion);
  };
  return (
    <div >
        <nav className='flex justify-around gap-2'> 
            <button onClick={() => cambiarSeccion('experience')}  className={` ${
            seccionActual === 'experience' ? 'bg-[#4318FF] text-white px-4 w-auto  m-2 ' : ' text-white'
          }`} >EXPERIENCIA</button>
            <button onClick={() => cambiarSeccion('education')}  className={` ${
            seccionActual === 'education' ? 'bg-[#4318FF] text-white px-4  w-auto   m-2 ' : ' text-white'
          }`}>EDUCACIÓN</button>
            <button className='text-white px-4 w-auto  m-2 '>PUBLICACIONES</button>
        </nav>
        <div className="contenido">
        {seccionActual === 'experience'? <UserWorkExperience /> : seccionActual === 'education' && <UserEducation /> }

      </div>
    </div>
  )
}

export default NavbarUserProfile