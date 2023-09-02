import React, { FC } from 'react'


const NavbarUserProfile:React.FC = () => {
  return (
    <div >
        <nav className='flex'> 
            <button className='text-white p2 bg-[#4318FF]  w-[240px] h-[50px]  m-2 '>EXPERIENCIA</button>
            <button className='text-white p2 w-[240px] h-[50px] m-2 '>EDUCACIÓN</button>
            <button className='text-white p2  w-[240px] h-[50px] m-2 '>PUBLICACIONES</button>
        </nav>
    </div>
  )
}

export default NavbarUserProfile