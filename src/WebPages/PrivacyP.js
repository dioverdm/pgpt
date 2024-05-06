import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrivacyP = () => {
    return ( 
        <div className="PrivacyPContainer">
            <Helmet>
                <title>Políticas de Privacidad • PogoGPT</title>
                <meta property="og:title" content="Políticas de Privacidad • PogoGPT" />
                <meta name="description" content="Políticas de Privacidad de PogoGPT." />
                <meta property="og:description" content="Políticas de Privacidad de PogoGPT." />
                <meta property="og:url" content="ai.pogoos.com/privacy-policy" />
            </Helmet>
            <div className="PrivacyPBubble">
                <div className="PrivacyPTitle">Políticas de Privacidad</div>
                <div className="PrivacyPSubTitle">Última actualización: 06/05/2024</div>
                <div className="PrivacyPText">
                    <p>
                        <b>Conjunto de datos:</b>
                    </p>
                    <p>
                        El uso de esta aplicación ("Bot") en un servidor requiere la recopilación de
                         algunos datos específicos del usuario y del servidor ("Datos").  Los datos recopilados incluyen, pero no son
                         limitado a los valores de ID del canal y del servidor de Discord, y a los datos recopilados con fines de moderación de consultas en el bot.
                         El uso del Bot se considera un acuerdo con los términos de esta Política.
                    </p>
                    <br />
                    <p>
                        <b>Acceso a datos:</b>
                    </p>
                    <p>
                        El acceso a los Datos sólo está permitido a los desarrolladores del Bot, y sólo en el
                         alcance requerido para el desarrollo, moderación, prueba e implementación de
                         características para el Bot.  Los datos no se venden, proporcionan ni comparten con ningún tercero, excepto cuando lo exija la ley o un acuerdo de Términos de servicio.  Tú
                         Puede ver los datos haciendo una solicitud previa a <i>studio.pogoos.com</i> o en nuestro <Link to="/discord" className='GenericLinkDeco' id="PrivacyPLink">servidor de soporte</Link>.
                    </p>
                    <br />
                    <p>
                        <b>Almacenamiento de datos:</b>
                    </p>
                    <p>
                        Los datos se almacenan en una base de datos MongoDB.  La base de datos está protegida para evitar
                         acceso externo, sin embargo, no se proporciona ninguna garantía y los propietarios del Bot
                         no asume ninguna responsabilidad por la violación involuntaria o maliciosa de los Datos.  En
                         En caso de acceso no autorizado a los Datos, los usuarios serán notificados a través de
                         la aplicación cliente de Discord.
                    </p>
                    <br />
                    <p>
                        <b>Eliminación de datos:</b>
                    </p>
                    <p>
                        Los datos asociados con un servidor se eliminan de forma irrecuperable cuando el Bot abandona ese servidor o se utiliza el comando de eliminación de datos.  Los datos que se guardan con fines de moderación del uso de nuestro bot se eliminan después
                         30 días desde que se utilizó el comando de generación de imágenes, preguntas o traducción.  Los propietarios del bot no asumen ninguna responsabilidad por daños involuntarios.
                         o eliminación intencionada de datos. 
                    </p>
                    <br />
                    <p>
                        <b>Derechos de los usuarios:</b>
                    </p>
                    <p>
                        En cualquier momento, usted tiene derecho a solicitar ver y eliminar los Datos pertenecientes a
                         su servidor o cuenta de Discord.  Puede enviar una solicitud a través del <Link to="/discord" className='GenericLinkDeco' id="PrivacyPLink">Servidor de soporte</Link> de Discord.  Tiene derecho a solicitar la eliminación de cualquier dato relevante.
                    </p>
                    <br />
                    <p>
                        <b>Usuarios menores de edad:</b>
                    </p>
                    <p>
                        El uso del Bot no está permitido a menores de 13 años, o
                         menores de la edad de consentimiento legal para su país.  esto esta en cumplimiento
                         con los Términos de servicio de Discord.  No se almacenará ninguna información a sabiendas
                         de un usuario menor de edad.  Si se descubre que un usuario es menor de edad, lo haremos
                         tomar todas las medidas necesarias para eliminar los datos almacenados.
                    </p>
                    <br />
                    <p>
                        <b>Preguntas</b>:
                    </p>
                    <p>
                        Si tiene alguna pregunta o le preocupa qué datos podrían estar siendo
                         almacenado desde su servidor o cuenta, comuníquese con <i>dioverdm</i> en Discord o únase al <Link to="/discord" className='GenericLinkDeco' id="PrivacyPLink">Servidor de soporte</Link>
                         .  Para obtener más información, consulte los Términos de servicio de Discord.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default PrivacyP;