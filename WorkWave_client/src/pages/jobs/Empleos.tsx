import { useQuery } from "@tanstack/react-query";

import { Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { Empleos as EmpleosT } from "../../models/empleos";

const getEmpleos = async () => {
  const response = await axios.get<EmpleosT[]>(
    "https://work-wave.onrender.com/api/jobs"
  );
  return response.data;
};

function Empleos() {
  const { isLoading, data } = useQuery({
    queryKey: ["empleos"],
    queryFn: getEmpleos,
  });

  if (isLoading) {
    return <p>Cargando empleos...</p>;
  }

  return (
    <div>
      <h1>Empleos en Todo el Mundo</h1>
      {data?.map((empleo) => (
        <Card key={empleo.id}>
          <CardBody>
            <h2>{empleo.company_name}</h2>
            <p>Puesto: {empleo.job_position}</p>
            <p>Salario: {empleo.salary}</p>
            <p>Descripción: {empleo.description}</p>
            <p>Ubicación: {empleo.ubication}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Empleos;
