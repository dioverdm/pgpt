import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TOS = () => {
    return ( 
        <div className="TOSContainer">
            <Helmet>
                <title>Términos de Servicio • PogoGPT</title>
                <meta property="og:title" content="Términos de Servicio • PogoGPT" />
                <meta name="description" content="Términos de Servicio de PogoGPT." />
                <meta property="og:description" content="Términos de Servicio de PogoGPT." />
                <meta property="og:url" content="ai.pogoos.com/terms-of-service" />
            </Helmet>
            <div className="TOSBubble">
                <div className="TOSTitle">Términos de Servicio</div>
                <div className="TOSSubTitle">Última actualización: 06/05/2024</div>
                <div className="TOSText">
                    <p>
                        <b>Acuerdo de uso:</b>
                    </p>
                    <p>
                        Al invitar al bot y utilizar sus funciones (comandos), usted acepta
                         los Términos del bot que se mencionan a continuación.
                    </p>
                    <br />
                    <p>
                        Usted reconoce que tiene el privilegio de utilizar el bot libremente en cualquier
                         Servidor de Discord (Servidor) que compartes con él, que puedes invitarlo a cualquier
                         Servidor para el que tiene derechos de "Administrar servidor" y para el que este privilegio
                         podría ser revocado para usted, si está sujeto a incumplir los términos y/o
                         política de este bot, o los Términos de servicio, Política de privacidad y/o
                         Pautas comunitarias de Discord Inc.
                    </p>
                    <br />
                    <p>
                        Al utilizar el bot, puede recopilar datos específicos como se describe en su
                         Política.  El uso previsto de estos datos es para las funcionalidades básicas del
                         bot como el manejo de comandos y la administración de sus consultas realizadas en nuestra aplicación, esto oo hacemos para una mejor moderación y ofrecer mayor seguridad.
                    </p>
                    <br />
                    <p>
                        <b>Edad prevista:</b>
                    </p>
                    <p>
                        El bot no puede ser utilizado por personas menores de la edad mínima descrita en los
                         Términos de servicio de Discord.  Hacerlo será visto como una violación de estos
                         términos y resultará en una acción de moderación.
                    </p>
                    <br />
                    <p>
                        <b>Uso abusivo:</b>
                    </p>
                    <p>
                         No puedes utilizar el bot ni ninguna de sus funciones (comandos) de forma abusiva.  Incluyendo, entre otros, acoso, incitación al odio, amenazas
                         Y/o comentarios dañinos, sexuales, CSAM o extremismo violento.  Hacerlo
                         se considerará una violación de estos términos y dará lugar a una acción de moderación.
                    </p>
                    <br />
                    <p>
                        <b>Afiliación:</b>
                    </p>
                    <p>
                        El Bot no está afiliado, respaldado ni fabricado por Discord Inc. Cualquier conexión directa con Discord o cualquiera de sus objetos de marca registrada es pura coincidencia.  No afirmamos tener la propiedad de los derechos de autor de ninguno de los activos, marcas comerciales u otra propiedad intelectual de Discord.
                    </p>
                    <br />
                    <p>
                        <b>Responsabilidad:</b>
                    </p>
                    <p>
                        El propietario del bot no puede ser responsable de que las personas incumplan estos Términos en un momento dado.  Tiene fe en que los usuarios finales sean sinceros acerca de su información y no hagan un mal uso de este bot o de los servicios de Discord Inc de forma maliciosa.
                    </p>
                    <br />
                    <p>
                        Nos reservamos el derecho de actualizar estos términos a nuestra propia discreción, dándole un período de 1 semana (7 días) para optar por no participar en estos términos si no está de acuerdo con los nuevos cambios.  Puede optar por no participar eliminando el bot de cualquier servidor para el que tenga derechos.
                    </p>
                    <br />
                    <p>
                        <b>Contacto:</b>
                    </p>
                    <p>
                        Las personas pueden ponerse en contacto agregando a <i>dioverdm</i> en Discord, escribiendo al correo electrónico <Link to="mailto:contact@pogoos.info" className='GenericLinkDeco' ID="TOSLink">contact@pogoos.info</Link>, o
                         a través del <Link to="/discord" className='GenericLinkDeco' id="TOSLink">Servidor de soporte</Link> oficial de
                         el bot.  Es posible que se brinden otras formas de soporte, pero no están garantizadas.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default TOS;