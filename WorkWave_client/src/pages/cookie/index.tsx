import LandingHeader from "../../components/LandingHeader/LandingHeader";

const CookiePolicy = () => {
  return (
    <div className="p-4 shadow rounded">
      <div className="hidden sm:flex justify-center items-center">
        <LandingHeader />
      </div>

      <h2 className="text-2xl font-bold mb-4">Política de Cookies</h2>
      <p>
        Esta Política de Cookies explica cómo WorkWave utiliza cookies y
        tecnologías similares para recopilar y procesar información sobre tu uso
        de nuestra aplicación, que es una red social profesional en línea que
        permite a los profesionales conectarse, colaborar y prosperar en sus
        respectivas industrias. Esta política tiene como objetivo brindarte
        información clara y detallada sobre qué son las cookies, cómo las
        utilizamos y cómo puedes gestionar tus preferencias de cookies.
      </p>
      <h3 className="text-xl font-bold my-4">¿Qué son las Cookies?</h3>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu
        dispositivo (como un ordenador, teléfono móvil o tableta) cuando visitas
        un sitio web o una aplicación. Estos archivos contienen información que
        se envía de vuelta al sitio web o la aplicación cada vez que lo visitas,
        lo que permite que el sitio o la aplicación reconozca tu dispositivo y
        mejore tu experiencia de usuario.
      </p>
      <h3 className="text-xl font-bold my-4">
        Tipos de Cookies que Utilizamos
      </h3>
      <ol className="list-decimal ml-8">
        <li>
          Cookies Esenciales: Las cookies esenciales son necesarias para el
          funcionamiento básico de nuestra aplicación.
        </li>
        <li>
          Cookies de Funcionalidad: Las cookies de funcionalidad se utilizan
          para recordar tus preferencias y proporcionarte una experiencia más
          personalizada.
        </li>
        <li>
          Cookies de Rendimiento: Utilizamos cookies de rendimiento para
          recopilar información sobre cómo los usuarios utilizan nuestra
          aplicación.
        </li>
        <li>
          Cookies de Publicidad y Seguimiento: Algunas de las cookies que
          utilizamos son cookies de publicidad y seguimiento.
        </li>
      </ol>
      <h3 className="text-xl font-bold my-4">Gestión de Cookies</h3>
      <ol className="list-decimal ml-8">
        <li>
          Configuración de Cookies: En la configuración de tu cuenta de Worwave,
          puedes ajustar tus preferencias de cookies y elegir qué tipos de
          cookies permites o rechazas.
        </li>
        <li>
          Navegador Web: La mayoría de los navegadores web te permiten controlar
          las cookies a través de la configuración del navegador.
        </li>
      </ol>
      <h3 className="text-xl font-bold my-4">Consentimiento</h3>
      <p>
        Al utilizar nuestra aplicación, aceptas el uso de cookies de acuerdo con
        esta Política de Cookies. Si decides rechazar o desactivar las cookies,
        es posible que algunas partes de nuestra aplicación no funcionen
        correctamente.
      </p>
      <h3 className="text-xl font-bold my-4">
        Cambios en la Política de Cookies
      </h3>
      <p>
        Nos reservamos el derecho de actualizar y modificar esta Política de
        Cookies en cualquier momento para reflejar cambios en nuestras prácticas
        de recopilación y uso de datos. Cualquier actualización se comunicará a
        través de nuestra aplicación.
      </p>
      <h3 className="text-xl font-bold my-4">Contacto</h3>
      <p>
        Si tienes alguna pregunta o inquietud sobre nuestra Política de Cookies,
        no dudes en ponerte en contacto con nosotros a través de
        WorkWave2023@gmail.com.
      </p>
      <p className="mt-4 text-right">
        Fecha de última revisión: 7 de septiembre 2023
      </p>
    </div>
  );
};

export default CookiePolicy;
