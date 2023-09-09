import LandingHeader from "../../components/LandingHeader/LandingHeader";

const PolicyComponent = () => {
  return (
    <>
      <div className="hidden sm:flex justify-center items-center">
        <LandingHeader />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Bienvenido a Worwave</h2>
        <p className="mb-4">
          La red social profesional en línea que conecta a profesionales de
          diversas industrias y fomenta la colaboración, el networking y el
          crecimiento profesional. Antes de utilizar nuestra aplicación, te
          instamos a leer detenidamente estas políticas de uso para comprender
          tus derechos y responsabilidades. El acceso y uso de WorkWave implican
          tu aceptación de estas políticas.
        </p>
        <h3 className="text-xl font-bold mb-2">1. Registro y Cuenta</h3>
        <p className="mb-4">
          <span className="font-bold">1.1. Información de Registro:</span> Debes
          proporcionar información precisa y actualizada durante el proceso de
          registro. No debes utilizar información falsa o engañosa.
          <br />
          <span className="font-bold">1.2. Seguridad de la Cuenta:</span> Eres
          responsable de mantener la seguridad de tu cuenta, incluyendo tu
          contraseña y credenciales de inicio de sesión. No debes compartir tus
          credenciales con terceros.
          <br />
          <span className="font-bold">1.3. Menores de Edad:</span> Los usuarios
          menores de 16 años deben obtener el consentimiento de un padre o tutor
          legal para utilizar WorkWave.
        </p>
        <h3 className="text-xl font-bold mb-2">2. Conducta del Usuario</h3>
        <p className="mb-4">
          <span className="font-bold">2.1. Comportamiento Respetuoso:</span>{" "}
          Todos los usuarios deben comportarse de manera respetuosa y
          profesional en WorkWave. No se permite el acoso, el discurso de odio,
          la intimidación ni ningún comportamiento ofensivo.
          <br />
          <span className="font-bold">2.2. Contenido Apropiado:</span> No debes
          publicar, compartir o promover contenido que sea difamatorio, obsceno,
          ilegal, discriminatorio o que infrinja los derechos de propiedad
          intelectual de terceros.
          <br />
          <span className="font-bold">2.3. Información Precisa:</span> Debes
          proporcionar información precisa en tu perfil y en cualquier contenido
          que publiques. No debes hacer declaraciones falsas o engañosas.
          <br />
          <span className="font-bold">2.4. Respeto a la Privacidad:</span>{" "}
          Respeta la privacidad de otros usuarios. No debes recopilar ni
          compartir información personal sin el consentimiento de la persona
          involucrada.
        </p>
        <h3 className="text-xl font-bold mb-2">3. Propiedad Intelectual</h3>
        <p className="mb-4">
          <span className="font-bold">3.1. Derechos de Autor:</span> Respeta los
          derechos de autor y otros derechos de propiedad intelectual de
          terceros. No debes publicar contenido protegido por derechos de autor
          sin autorización.
          <br />
          <span className="font-bold">
            3.2. Contenido Generado por el Usuario:
          </span>{" "}
          Al publicar contenido en WorkWave, otorgas una licencia a WorkWave
          para mostrar y distribuir ese contenido dentro de la plataforma.
          Mantienes los derechos de autor de tu contenido.
        </p>
        <h3 className="text-xl font-bold mb-2">
          4. Seguridad y Cumplimiento Legal
        </h3>
        <span className="font-bold">4.1. No Vulnerabilidad:</span> No debes
        intentar eludir las medidas de seguridad de WorkWave ni realizar
        acciones que pongan en riesgo la integridad de la plataforma.
        <br />
        <span className="font-bold">4.2. Cumplimiento Legal:</span> Debes
        cumplir con todas las leyes y regulaciones aplicables al utilizar
        WorkWave. No debes participar en actividades ilegales.
<h3 className="text-xl font-bold mb-2">5. Denuncias y Moderación</h3>
      <p className="mb-4">
        <span className="font-bold">5.1. Denuncias:</span> Si observas un comportamiento que viola estas políticas, te instamos a denunciarlo utilizando las herramientas proporcionadas por Worwave.
        <br />
        <span className="font-bold">5.2. Moderación:</span> Worwave se reserva el derecho de tomar medidas, incluyendo la eliminación de contenido o la suspensión de cuentas, en respuesta a violaciones de estas políticas.
      </p>

      <h3 className="text-xl font-bold mb-2">6. Cambios en las Políticas</h3>
      <p className="mb-4">
        <span className="font-bold">6.1. Actualizaciones:</span> WorkWave puede actualizar estas políticas en cualquier momento. Los usuarios serán notificados de cualquier cambio importante en las políticas.
        <br />
        <span className="font-bold">6.2. Aceptación Continua:</span> El uso continuado de Worwave después de la publicación de cambios en las políticas implica la aceptación de las mismas.
      </p>

      <h3 className="text-xl font-bold mb-2">7. Terminación de Cuenta</h3>
      <p className="mb-4">
        <span className="font-bold">7.1. Derecho de Terminación:</span> Worwave se reserva el derecho de suspender o terminar cuentas de usuario que violen estas políticas de uso de manera repetida o grave.
      </p>

      <h3 className="text-xl font-bold mb-2">8. Contacto</h3>
      <p>
        Si tienes preguntas o necesitas asistencia relacionada con estas políticas de uso, no dudes en contactarnos a través de WorkWave2023@gmail.com.
      </p>
      <p className="mt-4">Fecha de última revisión: 7 de septiembre 2023</p>
    </div>
    </>
  );
};

export default PolicyComponent;
