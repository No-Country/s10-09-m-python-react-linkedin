const SecurityPolicyPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">
        Política de Seguridad de WorkWave
      </h1>
      <p className="mb-4">
        En WorkWave, estamos comprometidos con la seguridad y privacidad de
        nuestros usuarios. Nuestra aplicación es una red social profesional en
        línea que se centra en conectar a profesionales de diversas industrias y
        permitirles establecer contactos, compartir información, buscar empleo,
        encontrar oportunidades comerciales y colaborar en proyectos
        profesionales. Para garantizar la protección de la información y la
        experiencia de nuestros usuarios, hemos implementado una serie de
        políticas de seguridad integral.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-3">Acceso a la Aplicación</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          Autenticación de Usuarios
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Todos los usuarios deben autenticarse mediante credenciales
              únicas, como nombres de usuario y contraseñas seguras, para
              acceder a la aplicación.
            </li>
            <li className="mb-2">
              Se recomienda encarecidamente a los usuarios activar la
              autenticación de dos factores (2FA) para una capa adicional de
              seguridad en sus cuentas.
            </li>
            <li className="mb-2">
              El acceso a la aplicación está restringido a usuarios autorizados.
              Se prohíbe el uso compartido de credenciales.
            </li>
          </ol>
        </li>
        <li className="mb-2">
          Protección contra Fuerza Bruta
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Hemos implementado medidas de seguridad para prevenir ataques de
              fuerza bruta y garantizar que los intentos de inicio de sesión no
              autorizados sean detectados y bloqueados automáticamente.
            </li>
          </ol>
        </li>
        <li className="mb-2">
          Sesiones Seguras
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Las sesiones de usuario están protegidas mediante cifrado seguro
              (HTTPS) para garantizar que la comunicación entre la aplicación y
              el usuario sea segura.
            </li>
            <li className="mb-2">
              Las sesiones inactivas se cierran automáticamente después de un
              período de tiempo especificado para prevenir el acceso no
              autorizado a cuentas activas.
            </li>
          </ol>
        </li>
      </ol>
      <h2 className="text-2xl font-bold mt-6 mb-3">Almacenamiento de Datos</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          Protección de Datos del Usuario
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Los datos de los usuarios se almacenan de forma segura en
              servidores protegidos con cortafuegos y medidas de seguridad
              física.
            </li>
            <li className="mb-2">
              Se implementan protocolos de cifrado para proteger los datos en
              reposo y en tránsito.
            </li>
          </ol>
        </li>
        <li className="mb-2">
          Acceso a los Datos
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              El acceso a los datos de los usuarios está restringido a empleados
              autorizados con fines de soporte técnico y administración de
              sistemas.
            </li>
            <li className="mb-2">
              Se establecen políticas de control de acceso para garantizar que
              solo las personas adecuadas tengan acceso a datos confidenciales.
            </li>
          </ol>
        </li>
      </ol>
      <h2 className="text-2xl font-bold mt-6 mb-3">
        Privacidad y Consentimiento
      </h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          Política de Privacidad
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Los usuarios son informados de nuestra política de privacidad que
              describe cómo se recopilan, utilizan y protegen sus datos
              personales.
            </li>
            <li className="mb-2">
              Los usuarios deben dar su consentimiento explícito antes de que se
              recopile y utilice su información personal.
            </li>
          </ol>
        </li>
        <li className="mb-2">
          Derechos de los Usuarios
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Los usuarios tienen el derecho de acceder, corregir y eliminar sus
              datos personales de acuerdo con las leyes aplicables de protección
              de datos.
            </li>
            <li className="mb-2">
              Los usuarios pueden controlar la visibilidad de su información en
              la plataforma y ajustar su configuración de privacidad.
            </li>
          </ol>
        </li>
      </ol>
      <h2 className="text-2xl font-bold mt-6 mb-3">
        Monitoreo y Respuesta a Incidentes
      </h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          Monitoreo Continuo
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Monitoreamos de forma continua la actividad de la aplicación en
              busca de posibles amenazas y actividades sospechosas.
            </li>
            <li className="mb-2">
              Implementamos sistemas de detección de intrusiones y registros de
              auditoría para rastrear las acciones de los usuarios y los eventos
              del sistema.
            </li>
          </ol>
        </li>
        <li className="mb-2">
          Respuesta a Incidentes
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Tenemos un plan de respuesta a incidentes en vigor para abordar y
              mitigar cualquier brecha de seguridad o incidente de datos de
              manera eficaz.
            </li>
            <li className="mb-2">
              Notificamos a los usuarios y autoridades competentes en caso de
              una violación de datos, de acuerdo con las regulaciones
              aplicables.
            </li>
          </ol>
        </li>
      </ol>
      <h2 className="text-2xl font-bold mt-6 mb-3">
        Educación y Concienciación
      </h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          Formación de Empleados
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Todos los empleados de WorkWave reciben formación sobre políticas
              de seguridad y buenas prácticas de seguridad de datos.
            </li>
          </ol>
        </li>
        <li className="mb-2">
          Concienciación de los Usuarios
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Fomentamos la educación de los usuarios sobre la importancia de la
              seguridad en línea y proporcionamos recursos para ayudar a
              proteger sus cuentas.
            </li>
          </ol>
        </li>
      </ol>
      <h2 className="text-2xl font-bold mt-6 mb-3">
        Cumplimiento y Actualizaciones
      </h2>
      <ol className="list-decimal ml-6 mb-4">
        <li className="mb-2">
          Cumplimiento Legal
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Cumplimos con todas las leyes y regulaciones de protección de
              datos y privacidad aplicables.
            </li>
          </ol>
        </li>
        <li className="mb-2">
          Actualizaciones de Políticas
          <ol className="list-decimal ml-6">
            <li className="mb-2">
              Revisamos y actualizamos nuestras políticas de seguridad de forma
              periódica para adaptarnos a las amenazas en constante evolución.
            </li>
          </ol>
        </li>
      </ol>
      <p className="mb-4">
        En Worwave, la seguridad es una prioridad. Estas políticas de seguridad
        representan nuestro compromiso de proteger la información de nuestros
        usuarios y garantizar una experiencia segura en nuestra aplicación.
        Continuaremos mejorando y adaptando nuestras medidas de seguridad para
        mantener la confianza de nuestros usuarios.
      </p>
    </div>
  );
};

export default SecurityPolicyPage;
