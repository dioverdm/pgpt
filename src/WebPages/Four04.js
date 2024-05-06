import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Four04 = () => {
    return ( 
        <div className="Four04Container">
            <Helmet>
                <title>404 • PogoGPT</title>
                <meta property="og:title" content="404 • PogoGPT" />
                <meta name="description" content="404 Página no encontrada" />
                <meta property="og:description" content="404 Página no encontrada" />
                <meta property="og:url" content="ai.pogoos.com/404" />
            </Helmet>
            <div className="Four04Bubble">
                <div className="Four04TextContainer">
                    <div className="Four04Title">404</div>
                    <div className="Four04SubTitle">Página no encontrada</div>
                    <div className="Four04SubSubTitle">¿Estás buscando en el lugar correcto?</div>
                </div>
                <div className="Four04ButtonContainer">
                    <Link to="/" className='GenericLinkDeco'>
                        <div className="infoButton" id="InfoMainButton">
                            Volver al Inicio
                        </div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Four04;