import React from 'react'

const userEducation: React.FC  = () => {
  return (
    <div className=" mt-2 rounded-md p-3 bg-black ">
        <div className="userWorkExperience">
          <div className="UserProjects mb-4 ">
            <h2 className="ml-1">Experiencía</h2>
          </div>
          <div className="projects flex p-2  mb-2 gap-2 border border-b-1 border-r-0 border-l-0 border-t-0 border-gray-700">
            <div className="bg-[#B9A2FF] w-[150px] h-[50px] rounded-full"></div>
            <div>
              <h2>Freelance UX/UI designer</h2>
              <p>Lorem ipsum Lorem ipsum </p>
              <p>
                {" "}
                Jun 2022 —{" "}
                <span className="text-[#0A66C2]">Present1 yrs 02 mos</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dapibus eros eu vehicula interdum. Cras nec ultricies massa.
                Curabitur rutrum, diam id consequat consequat
              </p>
            </div>
          
          </div>
          
        </div>

        <div className="projects flex   gap-2 mt-2 border-b-1 border-r-0 border-l-0 border-t-0 border-gray-700">
          <div className="bg-[#9374FF] w-[125px] h-[50px] rounded-full"></div>
          <div>
            <h2>Freelance UX/UI designer</h2>
            <p>Lorem ipsum Lorem ipsum </p>
            <p>
              {" "}
              Jun 2022 —{" "}
              <span className="text-[#0A66C2]">Present1 yrs 02 mos</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dapibus eros eu vehicula interdum. Cras nec ultricies massa.
              Curabitur rutrum, diam id consequat consequat
            </p>
          </div>
        </div>
        <div className="addExperience w-[188px] h-[36px] inlin   ">
              <button className="text-[#4318FF] text-lg"><span style={{fontSize:'25px'}}>+ </span> Añadir Educación</button>
        </div>
      </div>
  )
}

export default userEducation