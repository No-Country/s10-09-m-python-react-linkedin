import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Image,
  ButtonGroup,
} from "@nextui-org/react";

const QuienesSomos: React.FC = () => {
  return (
    <div className="bg-black/70 p-8 rounded-md shadow-md">
      <h2 className="text-2xl text-white font-bold mb-4">Quiénes Somos</h2>
      <p className="text-white/60">
        WorkWave es un grupo de personas apasionadas que hemos decidido unir
        nuestras habilidades y conocimientos para embarcarnos en una emocionante
        aventura: crear un aplicativo desde cero, desarrollar una red social
        profesional.
      </p>
    </div>
  );
};

const NuestraMision: React.FC = () => {
  return (
    <div className="bg-black/70 p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h2>
      <p className="text-white/60 mb-2">
        En WorkWave, somos más que una simple aplicación. Somos una comunidad
        vibrante y dinámica que une a profesionales de diversas industrias en un
        espacio en línea donde pueden conectarse, colaborar y prosperar. Nuestra
        misión es proporcionar una plataforma de redes sociales profesionales
        que inspire el crecimiento y el éxito en la carrera de nuestros
        usuarios. Una aplicación segura, confiable y fácil de usar, buscamos
        mejorar la vida de las personas al ofrecer una solución que se adapte a
        su estilo de vida moderno y ágil.
      </p>
      <p className="text-white/60">
        Deseamos ser reconocidos por nuestra dedicación a la excelencia, la
        innovación tecnológica y el compromiso con la satisfacción del cliente.
        Aspiramos a ser un referente en el sector y un modelo a seguir para
        futuros proyectos de desarrollo de software.
      </p>
    </div>
  );
};

const LoQueHacemos: React.FC = () => {
  return (
    <div className="bg-black/70 p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Lo Que Hacemos</h2>
      <ul className="list-disc list-inside text-white/60">
        <li>
          Conectar de Manera Significativa: Facilitamos la creación de
          conexiones valiosas. Nuestra plataforma te permite conectar con
          colegas actuales o anteriores, amigos y otros expertos en tu
          industria.
        </li>
        <li>
          Colaborar en Proyectos Profesionales: Fomentamos la colaboración
          efectiva. Ya sea que busques socios comerciales, colaboradores o
          expertos en un campo específico, encontrarás la plataforma ideal para
          tus proyectos profesionales.
        </li>
        <li>
          Encontrar Oportunidades Laborales: Simplificamos la búsqueda de
          empleo. Ofrecemos a los usuarios la capacidad de buscar oportunidades
          laborales de manera eficiente y a las empresas la posibilidad de
          encontrar a los candidatos ideales.
        </li>
        <li>
          Compartir Conocimientos e Información: Fomentamos el intercambio de
          conocimientos. Los usuarios pueden unirse a grupos y comunidades
          relacionados con su industria, compartir contenido relevante y
          mantenerse actualizados.
        </li>
        <li>
          Establecerse como Líderes de Opinión: Facilitamos la creación de
          contenido profesional. Los usuarios pueden escribir artículos y
          publicar actualizaciones que les permiten destacar en su campo.
        </li>
      </ul>
    </div>
  );
};

const NuestrosValores: React.FC = () => {
  return (
    <div className="bg-black/70 p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
      <ul className="list-disc list-inside text-white/60">
        <li>
          Innovación: Abrazamos la creatividad y la innovación para diseñar
          soluciones únicas y efectivas que superen las expectativas de nuestros
          usuarios.
        </li>
        <li>
          Integridad: Actuamos con honestidad, transparencia y ética en cada
          aspecto de nuestro trabajo y en nuestras relaciones con los demás.
        </li>
        <li>
          Colaboración: Valoramos y respetamos las contribuciones de cada
          miembro del equipo, fomentando un ambiente colaborativo que potencie
          nuestras capacidades individuales y colectivas.
        </li>
        <li>
          Excelencia: Nos esforzamos por la excelencia en todo lo que hacemos,
          desde el diseño de la interfaz hasta la seguridad y el rendimiento de
          nuestra plataforma.
        </li>
        <li>
          Pasión: Estamos apasionados por nuestra misión y trabajamos con
          entusiasmo para alcanzar nuestros objetivos.
        </li>
      </ul>
    </div>
  );
};

const Equipo = () => {
  const miembrosEquipo = [
    {
      nombre: "Juan Quiroz",
      rol: "Product Manager",
      pais: "Venezuela",
      mail: "juanquirozsana@gmail.com",
      github: "https://github.com/JuanQuiro",
      linkedin: "https://www.linkedin.com/in/dreyz/",
      img: "/0.jpg",
    },
    {
      nombre: "Carla Micaela Bustos Ludueña",
      rol: "Tester QA",
      pais: "Argentina",
      mail: "bustoslcar@gmail.com",
      github: "https://github.com/Bustoslcar",
      linkedin: "https://www.linkedin.com/in/bustoslcar/",
    },
    {
      nombre: "Ana Laura Diaz",
      rol: "UX / UI",
      pais: "Argentina",
      mail: "analauradiazv@gmail.com",
      linkedin: "https://www.linkedin.com/in/analauradiaz-/",
      behance: "https://www.behance.net/Anitadiaz_",
      img: "/1.png",
    },
    {
      nombre: "Daniela Perea",
      rol: "UX / UI",
      pais: "Argentina",
      mail: "daniii.perea@gmail.com",
      github: "https://github.com/DanielaPerea7",
      linkedin: "https://www.linkedin.com/in/daniela-i-perea/",
      img: "",
    },
    {
      nombre: "Adhemir Sabino Hilario",
      rol: "Front-end / Back-End (FullStack)",
      pais: "Perú",
      mail: "adhemirsabino@gmail.com",
      github: "https://github.com/Adhemirsab",
      linkedin: "https://www.linkedin.com/in/adhemirsabino",
      img: "",
    },
    {
      nombre: "Elias Velazquez",
      rol: "Backend",
      pais: "Argentina",
      mail: "evelazquez2604@gmail.com",
      github: "https://github.com/eliasvelazquezdev",
      linkedin: "https://www.linkedin.com/in/eliassvelazquez/",
      img: "/4.png",
    },
    {
      nombre: "Antonio Guerrero",
      rol: "Front-end",
      pais: "Colombia",
      mail: "guerreroenier@gmail.com",
      github: "https://github.com/WarriorEnier",
      linkedin:
        "https://www.linkedin.com/in/enier-antonio-guerrero-vergel-6aa242241/",
      img: "",
    },
    {
      nombre: "Ignacio Benitez",
      rol: "Front-end",
      pais: "Argentina",
      mail: "ignaciobeniteznacho@outloook.com",
      github: "https://github.com/ignacio2194",
      linkedin: "https://www.linkedin.com/in/ignaciobntz/",
      img: "/3.png",
    },
    {
      nombre: "José Cardozo",
      rol: "Front-end",
      pais: "Venezuela",
      mail: "cardoz.jg@gmail.com",
      github: "https://github.com/DashPower",
      linkedin: "https://www.linkedin.com/in/cardozjg/",
      img: "/2.png",
    },
    {
      nombre: "Matias Diaz",
      rol: "Devops",
      pais: "Argentina",
      mail: "matiasrdiaz@gmail.com",
      github: "https://github.com/cabradiaz",
      linkedin: "www.linkedin.com/in/matiasrdiaz",
      img: "",
    },
  ];
  return (
    <div>
      <h3 className="m-2 text-xl font-semibold mt-4">Nuestro Equipo</h3>
      <div className="grid grid-cols-2 justify-center items-center gap-5 my-5 mb-9">
        {miembrosEquipo.map((miembro, index) => (
          <Card
            key={index}
            isFooterBlurred
            className=" h-[300px] col-span-2 sm:col-span-1 "
          >
            <CardHeader className=" z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {miembro.nombre}
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                {miembro.rol}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src={miembro.img}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src={miembro.img}
                />
                <div className="flex flex-col">
                  <p>Creando e Innovando</p>
                </div>
              </div>
              <ButtonGroup>
                <Button
                  radius="full"
                  className="bg-celeste-claro-bar text-white hover:bg-white hover:text-black"
                  size="sm"
                  onClick={() => window.location.replace(miembro.linkedin)}
                >
                  Linkedin
                </Button>
                {miembro.behance ? (
                  <Button
                    onClick={() => window.location.replace(miembro.behance)}
                    radius="full"
                    className="bg-green-500/70 text-white hover:bg-white hover:text-black"
                    size="sm"
                  >
                    Behance
                  </Button>
                ) : null}

                {miembro.github ? (
                  <Button
                    onClick={() => window.location.replace(miembro.github)}
                    radius="full"
                    className="bg-black text-white hover:bg-white hover:text-black"
                    size="sm"
                  >
                    Github
                  </Button>
                ) : null}
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TeamsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="py-1">
        <div className="container mx-auto px-4">
          <div className="container lg:grid gap-4 hidden grid-cols-2 mx-auto px-4">
            <NuestraMision />
            <div className="grid gap-2">
              <QuienesSomos />
              <NuestrosValores />
            </div>
            <div className="col-span-2">
              <LoQueHacemos />
            </div>
          </div>
          <Equipo />
        </div>
      </div>
      <div className="py-1"></div>
    </div>
  );
};

export default TeamsPage;
