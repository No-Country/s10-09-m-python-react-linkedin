import { Link } from "react-router-dom";
import LandingHeader from "../../components/LandingHeader/LandingHeader";

const PageVision: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="py-5 hidden lg:flex justify-center items-center">
        <LandingHeader />
      </div>
      <div className="py-1">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-4">Nuestra Visión</h2>
          <p className="mb-6 text-white/80">
            Nuestra visión es transformar la forma en que las personas se
            conectan profesionalmente en todo el mundo. Queremos construir una
            plataforma innovadora y colaborativa que facilite la conexión entre
            profesionales de diversas industrias y culturas.
          </p>
          <p className="text-white/80 mb-6">
            Nos esforzamos por ofrecer una experiencia única y enriquecedora
            para nuestros usuarios, brindándoles herramientas y funcionalidades
            avanzadas para destacarse en sus campos y encontrar oportunidades
            laborales de manera eficiente y efectiva.
          </p>
          <Link to={"/"} className="text-white/90 link">
            ¡Únete a nosotros y sé parte de esta revolución en las redes
            profesionales!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageVision;
