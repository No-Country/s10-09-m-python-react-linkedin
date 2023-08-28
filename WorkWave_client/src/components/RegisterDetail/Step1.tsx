import React, { useState } from "react";
import Buttons from "../Buttons";
function Step1() {
  const [currentJob, setCurrentJob] = useState("");
  const [jobType, setJobType] = useState("");
  const [recentCompany, setRecentCompany] = useState("");

  const handleCurrentJobChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentJob(event.target.value);
  };

  const handleJobTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobType(event.target.value);
  };
  const handleRecentCompanyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecentCompany(event.target.value);
  };

  const jobInfo = {
    currentJob,
    jobType,
    recentCompany,
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(jobInfo);
  };
  return (
    <div className="w-full ">
      <form
        onSubmit={handleSubmit}
        className="pt-12 h-full w-full flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl  mb-4 text-white">INGRESA TUS DATOS</h2>

        <p className="text-white">
          Completa tus datos personales, para crear una cuenta en Workwave.
        </p>
        <div className="mt-8 flex flex-col items-start w-full gap-4">
          <div className="mb-4 flex flex-col justify-center w-full px-60">
            {" "}
            {/*Trabajo Actual*/}
            <label
              htmlFor="currentJob"
              className="block text-md font-medium text-white"
            >
              Trabajo actual
            </label>
            <input
              type="string"
              id="currentJob"
              value={currentJob}
              onChange={handleCurrentJobChange}
              className="mt-1 p-2 border rounded-xl w-full bg-transparent "
              required
            />
          </div>
          <div className="mb-4 flex flex-col justify-center w-full px-60">
            {" "}
            {/*Tipo de trabajo*/}
            <label
              htmlFor="jobType"
              className="block text-md font-medium text-white"
            >
              Tipo de trabajo
            </label>
            <input
              type="string"
              id="jobType"
              value={jobType}
              onChange={handleJobTypeChange}
              className="mt-1 p-2 border rounded-xl w-full bg-transparent"
              required
            />
          </div>
          <div className="mb-4 flex flex-col justify-center w-full px-60">
            {" "}
            {/*Compañia más reciente*/}
            <label
              htmlFor="country"
              className="block text-md font-medium text-white"
            >
              Compañía más reciente
            </label>
            <input
              type="string"
              id="user"
              value={recentCompany}
              onChange={handleRecentCompanyChange}
              className="mt-1 p-2 border rounded-xl w-full bg-transparent "
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Buttons text="Siguiente" routing="/register/step2" />
          <Buttons text="Omitir" routing="/register/step2" blue={false} />
        </div>
      </form>
    </div>
  );
}

export default Step1;
