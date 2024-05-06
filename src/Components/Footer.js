import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footerContentContainer">
                <div className="leftContentContainer">
                    <div className="logoImg">
                        <img rel="prefetch" src="./img/Logos/MeiiRoundedPurpleBorder.png" alt="MeiiLogo" width="40px" height="40px"/>
                    </div>  
                    <div className="logoText">
                        Tu asistente IA en Discord
                    </div>
                    <div className="copyrightContent">
                        Copyright © 2024 Pogo OS Studio. All rights reserved
                    </div>
                </div>
                <div className="LCContainer">
                    <div className="linkColumn" id='Space'>
                        <div className="LCTitle">
                            PogoGPT
                        </div>
                        <div className="LCLinkContainer">
                            <div className='LCLinkDiv'><Link to="/terms-of-service" id='LC' className='GenericLinkDeco'>T.O.S</Link></div>
                            <div className='LCLinkDiv'><Link to="/privacy-policy" id='LC'className='GenericLinkDeco'>Políticas P.</Link></div>
                            <div className='LCLinkDiv'><Link to="/discord" id='LC'className='GenericLinkDeco'>Soporte</Link></div>
                        </div>
                    </div>
                    <div className="linkColumn">
                        <div className="LCTitle">
                            Desarrollador
                        </div>
                        <div className="LCLinkContainer">
                            <div className='LCLinkDiv'><Link to="https://studio.pogoos.com/" id='LC' className='GenericLinkDeco'>Sitio Web</Link></div>
                            <div className='LCLinkDiv'><Link to="https://github.com/pogo-os/" id='LC'className='GenericLinkDeco'>Github</Link></div>
                            <div className='LCLinkDiv'><Link to='mailto:contact@pogoos.info' id='LC'className='GenericLinkDeco'>Contacto</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;