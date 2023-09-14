import { Link } from "react-router-dom";
import nosotros from "../../assets/logonosotrospc.svg";
import { Image } from "@nextui-org/react";
const AboutUsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className=" py-1">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#F5F5F5] mb-4">Nosotros</h2>
          <p className=" mb-6 text-white/80">
            Somos un proyecto open source que busca revolucionar el concepto de
            LinkedIn. Nacimos a través del desafío lanzado por NoCountry y
            estamos comprometidos en brindar una plataforma innovadora para
            conectar profesionales de todo el mundo.
          </p>
          <p className="text-white/80 mb-6">
            Nuestro objetivo es ofrecer nuevas funcionalidades y experiencias
            para ayudar a nuestros usuarios a destacarse en su industria y
            encontrar oportunidades laborales de manera más eficiente y
            efectiva. Estamos abiertos a colaboraciones y contribuciones de la
            comunidad para hacer crecer este proyecto y llevarlo al siguiente
            nivel.
          </p>
          <Link to={"/"} className="text-white/90 link">
            ¡Únete a nosotros y sé parte de esta revolución en las redes
            profesionales!
          </Link>
        </div>
      </div>
      <Image src={nosotros} />
    </div>
  );
};

export default AboutUsPage;
