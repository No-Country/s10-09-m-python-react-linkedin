import { cursos } from "../../services/ListaCursos";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function Cursos() {
  return (
    <div>
      {cursos.map((e) => (
        <div>
          <Card
            className="py-4 m-4 mx-16 border-2 cursor-pointer hover:scale-105"
            key={e.id}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{e.title}</h4>
              <p className="text-tiny uppercase font-bold">{e.content}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={e.img}
                width={270}
              />
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cursos;
