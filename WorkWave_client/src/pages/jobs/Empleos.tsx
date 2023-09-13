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
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { Empleos as EmpleosT } from "../../models/empleos";
import empleo from "../../../public/empleo.svg";

import FavoriteActive from "../../../public/1.svg";
import FavoriteDesactive from "../../../public/2.svg";

import { useContext, useState } from "react";
import { TokenContext } from "../../context/TokenContext";
import { FavoriteJobs } from "../../models/favoriteJobs";

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

  const {
    isOpen: isOpenTypeJobs,
    onOpen: onOpenTypeJobs,
    onOpenChange: onOpenChangeTypeJobs,
  } = useDisclosure();

  const { favoriteJobs, setFavoriteJobs } = useContext(TokenContext);
  const [pageSection, setPageSection] = useState(0);
  const sortedData =
    data &&
    [...data].sort((a, b) => {
      const isAFavorite = favoriteJobs?.some(
        (job) => job.id === a.id && job.favorite
      );
      const isBFavorite = favoriteJobs?.some(
        (job) => job.id === b.id && job.favorite
      );

      if (isAFavorite && !isBFavorite) {
        return -1; // a se coloca antes de b
      } else if (!isAFavorite && isBFavorite) {
        return 1; // b se coloca antes de a
      } else {
        return 0; // no se cambia el orden
      }
    });
  const favoriteJobsExist = sortedData?.some((empleo) => {
    const isFavorite = favoriteJobs?.some(
      (job) => job.id === empleo.id && job.favorite
    );
    return isFavorite;
  });

  interface ModalidadTrabajo {
    id: number;
    titulo: string;
    descripcion: string;
    porcentajeTrabajo: number;
    satisfaccionGeneral: number;
    salarioPromedio: number;
    comparacionSalario: string;
  }

  const modalidadesDeTrabajo: ModalidadTrabajo[] = [
    {
      id: 1,
      titulo: "Presencial",
      descripcion: "Trabajo realizado en el lugar de trabajo físico",
      porcentajeTrabajo: 100,
      satisfaccionGeneral: 8.5,
      salarioPromedio: 50000,
      comparacionSalario: "Superior a otras modalidades",
    },
    {
      id: 2,
      titulo: "Híbrido",
      descripcion: "Trabajo que combina trabajo presencial y trabajo remoto",
      porcentajeTrabajo: 70,
      satisfaccionGeneral: 7.8,
      salarioPromedio: 45000,
      comparacionSalario: "En línea con otras modalidades",
    },
    {
      id: 3,
      titulo: "En remoto",
      descripcion: "Trabajo realizado completamente a distancia",
      porcentajeTrabajo: 100,
      satisfaccionGeneral: 9.2,
      salarioPromedio: 55000,
      comparacionSalario: "Superior a otras modalidades",
    },
  ];

  const handleClick = (id: number) => {
    if (!favoriteJobs) {
      console.log("favoriteJobs is null");
      return;
    }

    const updatedFavoriteJobs = favoriteJobs.map((job) => {
      if (job.id === id) {
        return { ...job, favorite: !job.favorite };
      } else {
        return job;
      }
    });

    const jobExists = favoriteJobs.some((job) => job.id === id);
    if (!jobExists) {
      updatedFavoriteJobs.push({ id, favorite: true, applied: false });
    }

    console.log("Click", { updatedFavoriteJobs }, { favoriteJobs });
    setFavoriteJobs(updatedFavoriteJobs);
  };

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
    <>
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
            className={`${
              pageSection === 0 && "bg-[#4318FF]"
            } hover:bg-[#4318FF] hover:text-white`}
            size="lg"
            onPress={() => {
              setPageSection(0);
            }}
            radius="full"
          >
            Últimos empleos publicados
          </Button>

          <Button
            className={`${
              pageSection === 1 && "bg-[#4318FF]"
            } hover:bg-[#4318FF] hover:text-white`}
            onPress={() => {
              setPageSection(1);
            }}
            size="lg"
            radius="full"
          >
            02 Empleos Guardados
          </Button>

          <Button
            className={`${
              pageSection === 2 && "bg-[#4318FF]"
            } hover:bg-[#4318FF] hover:text-white`}
            onPress={() => {
              setPageSection(2);
            }}
            size="lg"
            radius="full"
          >
            01 Empleos Solicitados
          </Button>
        </div>

        {sortedData &&
          pageSection === 0 &&
          sortedData.map((empleo) => {
            const isJobApplied = favoriteJobs.some(
              (job: FavoriteJobs) => job.id === empleo.id && job.applied
            );

            const handleApply = () => {
              let updatedFavoriteJobs: FavoriteJobs[];

              if (favoriteJobs.some((job) => job.id === empleo.id)) {
                updatedFavoriteJobs = favoriteJobs.map((job: FavoriteJobs) => {
                  if (job.id === empleo.id) {
                    return {
                      ...job,
                      applied: !job.applied,
                    };
                  } else {
                    return job;
                  }
                });
              } else {
                updatedFavoriteJobs = [
                  ...favoriteJobs,
                  {
                    id: empleo.id,
                    favorite: false,
                    applied: true,
                  },
                ];
              }

              setFavoriteJobs(updatedFavoriteJobs);
              console.log("[Se solicitó]", { favoriteJobs }, { empleo });
            };

            return (
              <Card key={empleo.id} className="col-span-3 m-5 p-5">
                <section className="grid grid-cols-2">
                  <div className="flex">
                    <Avatar
                      color="primary"
                      src={`https://i.pravatar.cc/300?u=${
                        empleo.id +
                        empleo.salary +
                        empleo.users_customuser.password.length
                      }`}
                    />
                    <div className="grid ">
                      <h3 className="capitalize font-semibold flex justify-center indent-5 items-center">
                        {empleo.company_name}
                      </h3>
                      <h3 className="capitalize flex justify-start indent-5 items-center">
                        {empleo.job_position} -{" "}
                        {empleo.users_customuser.country}
                      </h3>
                    </div>
                  </div>
                  <div className="grid place-items-end">
                    {favoriteJobs?.some(
                      (job) => job.id === empleo.id && job.favorite
                    ) ? (
                      <Image
                        onClick={() => handleClick(empleo.id)}
                        src={FavoriteActive}
                        className="place-self-end hover:bg-black p-2 cursor-pointer"
                      />
                    ) : (
                      <Image
                        onClick={() => handleClick(empleo.id)}
                        src={FavoriteDesactive}
                        className="place-self-end hover:bg-black p-2 cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="m-2">
                    <p className="text-lg">
                      ${empleo.salary}
                      <span className="text-gray-500">/Mes</span>
                    </p>
                  </div>
                  <div className="flex justify-end items-center gap-9">
                    <Button
                      size="sm"
                      variant="bordered"
                      color="primary"
                      className="w-1/2 justify-self-end"
                      onPress={onOpenTypeJobs}
                    >
                      {empleo.types_of_ubication.name}
                    </Button>
                    <Button
                      size="sm"
                      color="primary"
                      radius="full"
                      className="bg-[#4318FF] w-1/2"
                      onPress={() => {
                        handleApply();
                      }}
                    >
                      {isJobApplied ? "Aplicando" : "Aplicar"}
                    </Button>
                  </div>
                </section>
              </Card>
            );
          })}
        {sortedData &&
          pageSection === 1 &&
          (favoriteJobsExist ? (
            sortedData.map((empleo) => {
              const isFavorite = favoriteJobs?.some(
                (job) => job.id === empleo.id && job.favorite
              );

              if (isFavorite) {
                return (
                  <Card key={empleo.id} className="col-span-3 m-5 p-5">
                    <section className="grid grid-cols-2">
                      <div className="flex">
                        <Avatar
                          color="primary"
                          src={`https://i.pravatar.cc/300?u=${
                            empleo.id +
                            empleo.salary +
                            empleo.users_customuser.password.length
                          }`}
                        />
                        <div className="grid">
                          <h3 className="capitalize font-semibold flex justify-center indent-5 items-center">
                            {empleo.company_name}
                          </h3>
                          <h3 className="capitalize flex justify-start indent-5 items-center">
                            {empleo.job_position} -{" "}
                            {empleo.users_customuser.country}
                          </h3>
                        </div>
                      </div>
                      <div className="grid place-items-end">
                        {isFavorite ? (
                          <Image
                            onClick={() => handleClick(empleo.id)}
                            src={FavoriteActive}
                            className="place-self-end hover:bg-black p-2 cursor-pointer"
                          />
                        ) : (
                          <Image
                            onClick={() => handleClick(empleo.id)}
                            src={FavoriteDesactive}
                            className="place-self-end hover:bg-black p-2 cursor-pointer"
                          />
                        )}
                      </div>
                    </section>
                  </Card>
                );
              }
            })
          ) : (
            <Card className="col-span-3 m-8">
              <CardBody className="grid place-items-center">
                <p>
                  No ha guardado ningun Empleo, vaya a{" "}
                  <span className="link ">'Ultimos empleos Publicados'</span>{" "}
                  para ver todos los trabajos
                </p>
              </CardBody>
            </Card>
          ))}

        {sortedData &&
          pageSection === 2 &&
          sortedData.map((empleo) => {
            const isRequested = favoriteJobs?.some(
              (job) => job.id === empleo.id && job.applied
            );

            const isJobApplied = favoriteJobs.some(
              (job: FavoriteJobs) => job.id === empleo.id && job.applied
            );

            const handleApply = () => {
              let updatedFavoriteJobs: FavoriteJobs[];

              if (favoriteJobs.some((job) => job.id === empleo.id)) {
                updatedFavoriteJobs = favoriteJobs.map((job: FavoriteJobs) => {
                  if (job.id === empleo.id) {
                    return {
                      ...job,
                      applied: !job.applied,
                    };
                  } else {
                    return job;
                  }
                });
              } else {
                updatedFavoriteJobs = [
                  ...favoriteJobs,
                  {
                    id: empleo.id,
                    favorite: false,
                    applied: true,
                  },
                ];
              }

              setFavoriteJobs(updatedFavoriteJobs);
              console.log("[Se solicitó]", { favoriteJobs }, { empleo });
            };

            if (isRequested) {
              return (
                <Card key={empleo.id} className="col-span-3 m-5 p-5">
                  <section className="grid grid-cols-2">
                    <div className="flex">
                      <Avatar
                        color="primary"
                        src={`https://i.pravatar.cc/300?u=${
                          empleo.id +
                          empleo.salary +
                          empleo.users_customuser.password.length
                        }`}
                      />
                      <div className="grid ">
                        <h3 className="capitalize font-semibold flex justify-center indent-5 items-center">
                          {empleo.company_name}
                        </h3>
                        <h3 className="capitalize flex justify-start indent-5 items-center">
                          {empleo.job_position} -{" "}
                          {empleo.users_customuser.country}
                        </h3>
                      </div>
                    </div>
                    <div className="grid place-items-end">
                      {favoriteJobs?.some(
                        (job) => job.id === empleo.id && job.favorite
                      ) ? (
                        <Image
                          onClick={() => handleClick(empleo.id)}
                          src={FavoriteActive}
                          className="place-self-end hover:bg-black p-2 cursor-pointer"
                        />
                      ) : (
                        <Image
                          onClick={() => handleClick(empleo.id)}
                          src={FavoriteDesactive}
                          className="place-self-end hover:bg-black p-2 cursor-pointer"
                        />
                      )}
                    </div>
                    <div className="m-2">
                      <p className="text-lg">
                        ${empleo.salary}
                        <span className="text-gray-500">/Mes</span>
                      </p>
                    </div>
                    <div className="flex justify-end items-center gap-9">
                      <Button
                        size="sm"
                        variant="bordered"
                        color="primary"
                        className="w-1/2 justify-self-end"
                        onPress={onOpenTypeJobs}
                      >
                        {empleo.types_of_ubication.name}
                      </Button>
                      <Button
                        size="sm"
                        color="primary"
                        radius="full"
                        className="bg-[#4318FF] w-1/2"
                        onPress={() => {
                          handleApply();
                        }}
                      >
                        {isJobApplied ? "Aplicando" : "Aplicar"}
                      </Button>
                    </div>
                  </section>
                </Card>
              );
            }
          })}
        {sortedData &&
          pageSection === 2 &&
          !sortedData.some((empleo) =>
            favoriteJobs?.some((job) => job.id === empleo.id && job.applied)
          ) && (
            <Card className="col-span-3 m-8">
              <CardBody className="grid place-items-center">
                <p>
                  No ha guardado ningun Empleo, vaya a{" "}
                  <span className="link ">'Ultimos empleos Publicados'</span>{" "}
                  para ver todos los trabajos
                </p>
              </CardBody>
            </Card>
          )}
      </div>
      <Modal
        size={"5xl"}
        isOpen={isOpenTypeJobs}
        onOpenChange={onOpenChangeTypeJobs}
        backdrop={"blur"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tipos de Trabajo
              </ModalHeader>
              <ModalBody>
                {modalidadesDeTrabajo.map((modalidad) => (
                  <div key={modalidad.id} className="">
                    <p className="font-bold">{modalidad.titulo}</p>
                    <p className="text-celeste-claro">
                      {modalidad.descripcion}
                    </p>
                    <p className="">
                      Porcentaje de trabajo:{" "}
                      <span className="font-bold">
                        {modalidad.porcentajeTrabajo}%
                      </span>
                    </p>
                    <p className="">
                      Satisfacción general:{" "}
                      <span className="font-bold">
                        {modalidad.satisfaccionGeneral}
                      </span>
                    </p>
                    <p className="">
                      Salario promedio:{" "}
                      <span className="font-bold">
                        {modalidad.salarioPromedio}
                      </span>
                    </p>
                    <p className="">
                      Comparación de salario:{" "}
                      <span className="font-bold">
                        {modalidad.comparacionSalario}
                      </span>
                    </p>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="bordered"
                  className="hover:bg-black"
                  onPress={onClose}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>{" "}
    </>
  );
}
export default Empleos;
