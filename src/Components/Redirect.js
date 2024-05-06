import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Redirect = ({ link }) => {

    useEffect(() => {
        window.location.href = link;
    }, [link]);

    return (
        <div className='MemeContainer'>
            <Helmet>
                <title>Redirección • PogoGPT</title>
                <meta property="og:title" content="Redirección • PogoGPT" />
                <meta name="Un enlace de redireccionamiento para PogoGPT." />
                <meta property="og:description" content="Un enlace de redireccionamiento para PogoGPT." />
                <meta property="og:url" content="ai.pogoos.com" />
            </Helmet>
            <div className='MemeImage'><img rel="prefetch" src="./img/Memes/rickRoll.gif" alt="Rick Roll" width="380px" height="300px"/></div>
            <div className='RedirectingText'>Redireccionando...</div>
            <div className='MemeText'>nunca va a dar</div>
        </div>
    );
}

export default Redirect;