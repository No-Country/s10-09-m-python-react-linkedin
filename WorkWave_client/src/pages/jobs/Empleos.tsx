import { useQuery } from "@tanstack/react-query";

import {
  Card,
  Spinner,
  Image,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";
import axios from "axios";
import { Empleos as EmpleosT } from "../../models/empleos";
import empleo from "../../../public/empleo.svg";

const getEmpleos = async () => {
  const response = await axios.get<EmpleosT[]>(
    "https://work-wave.onrender.com/api/jobs"
  );
  return response.data;
};

function Empleos() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["empleos"],
    queryFn: getEmpleos,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center min-h-screen mt-5 items-center">
        <Card className="p-3">
          <Spinner
            label="Cargando Empleos"
            color="primary"
            labelColor="foreground"
          />
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center min-h-screen mt-5 items-center">
        <Card className="p-3">
          <Spinner
            label="Error, regrese mas tarde"
            color="warning"
            labelColor="foreground"
          />
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 ">
      <div className="place-self-center w-3/5">
        <Card
          isPressable
          className="group bg-[#4F46E5] hover:bg-celeste-claro-bar "
        >
          <CardBody className="grid place-items-center">
            <Image className="group-hover:scale-110" src={empleo} />
            <p>Publicar un trabajo</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-2 m-5">
        <Card>
          <CardHeader className="grid grid-cols-2 place-content-between place-items-end">
            <p className="text-md place-self-start">
              Historial de Busqueda de empleo
            </p>
            <Button size="sm" radius="full" className="w-14">
              Borrar
            </Button>
          </CardHeader>
          <CardBody>
            <div className="grid my-2 grid-cols-6">
              <span className="inline">Ui / Ux</span>
              <span className="link inline text-[#4F46E5] link-hover">
                {data?.length} Nuevos
              </span>
            </div>
            <Divider />
            <div className="grid my-2 grid-cols-6">
              <span className="inline">Product Owner</span>
              <span className="link inline text-[#4F46E5] link-hover">
                {data?.length} Nuevos
              </span>
            </div>
            <Divider />
            <div className="grid my-2 grid-cols-6">
              <span className="inline">Freelance Designer</span>
              <span className="link inline text-[#4F46E5] link-hover">
                {data?.length} Nuevos
              </span>
            </div>
            <Divider />
          </CardBody>
          <CardFooter>
            <Link
              href="https://github.com/nextui-org/nextui"
              className="mx-auto link link-hover"
            >
              Ver Mas
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-3 gap-5 py-3 place-items-center col-span-3">
        <Button
          className="hover:bg-[#4318FF] hover:text-white"
          size="lg"
          radius="full"
        >
          Últimos empleos publicados
        </Button>

        <Button
          className="hover:bg-[#4318FF]  hover:text-white"
          size="lg"
          radius="full"
        >
          02 Empleos Guardados
        </Button>

        <Button
          className="hover:bg-[#4318FF]  hover:text-white"
          size="lg"
          radius="full"
        >
          01 Empleos Solicitados
        </Button>
      </div>

      {data.map((empleo) => (
        <Card className="col-span-3 m-5">{empleo.company_name}</Card>
      ))}
    </div>
  );
}
export default Empleos;
